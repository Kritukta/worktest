/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {EnumsCrm, Models as ModelsCrm} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-dashboard"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import * as ModelsAppDashboard from "../models/ModelsAppDashboard"
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard"
import Response from "../models/Response"
import Error from "../models/Error"
import * as _ from 'lodash'

import * as Converters from "../models/Converters"

import * as Cache from "../modules/Cache"
import {Storage} from "mrmkmcib-ui"
import { mrmkmcibLog } from 'mrmkmcib-app'
import { CookieData } from 'ufs-mobile-platform'


const ISO_DATETIME_STRING_REGEX =
    /^[0-9]{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])((T|\s)([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]([.][0-9]*)?(Z|([+-]([0-1][0-9]|2[0-3]):[0-5][0-9])))?$/

// константа, определяющая необходимость проверки сертификата для входа в QlikSense
export const QLIK_CERTIFICATE_VERIFICATION: boolean = false

const host = (state: ModelState.IRootState): string => (
    `${ state.user.mrmkmcibDashboard.reducerAppDashboard.appServerUrl || state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerUrl }`
)

const url = (state: ModelState.IRootState): string => (

    `${ host (state) }/${ state.user.mrmkmcibDashboard.reducerAppDashboard.appServerPath || state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerPath }`

)

export const getUrlForRole = (role: number | null, supParams: Models.SupParams): string => {

    let url = ''
    if(role != null) {
        switch (role) {
            case 0:
            case 3:
                url = supParams.kmUrl
                break
            case 1:
            case 2:
                url = supParams.chiefUrl
                break
        }
    }
    return url
}


export const urlAppDashboard = {
    callQlikAvailabilityCheck: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return {
            url: getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters),
            tagList: tagList
        }
    },
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return {
            url: `${ url (state) }/clients?page=${reducerState.currentSearchPage}${reducerState.isSearchCustomerManaged ? "&role=4" : ""}&clientType=0&searchType=${reducerState.customerSearchType}&searchText=${reducerState.customerSearchType === 4 ? reducerState.inputSearch.toUpperCase() : reducerState.inputSearch}`,
            tagList: tagList
        }
    },
    searchAppend_callGetCustomerSearchListPage: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return {
            url: `${ url (state) }/clients?page=${reducerState.currentSearchPage}${reducerState.isSearchCustomerManaged ? "&role=4" : ""}&clientType=0&searchType=${reducerState.customerSearchType}&searchText=${reducerState.inputSearch}`,
            tagList: tagList
        }
    },
    sendFile: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return {
            url: `${ url (state) }/qlik/report/export`,
            tagList: tagList
        }
    },
}

export const urlCustomerDashboard = {
    callQlikAvailabilityCheck: (state: ModelState.IRootState, reducerState: ModelsCustomerDashboard.ICustomerDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return { url: getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters), tagList: tagList }
    },
    sendFile: (state: ModelState.IRootState, reducerState: ModelsCustomerDashboard.ICustomerDashboardState, tagList: Array<Models.CacheTag>): Models.Url => {
        return {
            url: `${ url (state) }/qlik/report/export`,
            tagList: tagList
        }
    },
}

export const getFileFormatString = (key: Enums.FileFormat) => {
    switch (key) {
        case Enums.FileFormat.Excel: {
            return 'Excel'
        }
        case Enums.FileFormat.PowerPoint: {
            return 'PowerPoint'
        }
        case Enums.FileFormat.PDF: {
            return 'PDF'
        }
        default: {
            return ''
        }
    }
}

export const stringToFileFormat = (value: string): Enums.FileFormat => {
    switch (value) {
        case '0': {
            return Enums.FileFormat.Excel
        }
        case '1': {
            return Enums.FileFormat.PowerPoint
        }
        case '2': {
            return Enums.FileFormat.PDF
        }
        default: {
            return Enums.FileFormat.PDF
        }
    }
}

export const getRandomOperationUuid = (): string => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4()
}

const requestBuilder = (method: string, requestData: any, userHeaderList: any) => {


    let headers: any =  { businessOperationId: getRandomOperationUuid(), ...userHeaderList}

    switch (method) {
        case 'GET': {
            return {method: method, headers: headers}
        }
        default: {
            return {method: method, headers: headers, body: JSON.stringify(requestData)}
        }
    }
}

export const isValidDate = (data: string): boolean => {
    return data ? ISO_DATETIME_STRING_REGEX.test(data) : false;
}

export const call = <T, TB>(url: Models.Url, success: (response: Response<T>) => void,
                            failure: (response: Error) => void,
                            converter: (data: any) => T,
                            method: string = 'GET',
                            headers: any = {},
                            requestConverter: (data: TB) => any = () => {return null},
                            requestData: TB | null = null) => {
    //log('FETCH ' + method + ' ' + url)

    // Recover body from cache
    let cacheData = Cache.responseRecover(url, headers)
    if (cacheData != null) {
        try{
            let data = converter(cacheData.data)
            success({
                data: data,
                cachedDate: isValidDate(cacheData.cachedDate.toString())
                    ? new Date(cacheData.cachedDate)
                    : new Date(),
            })
        } catch(error){
            failure(Converters.CONVERT_ERROR(error))
        }

        return
    }

    mrmkmcibLog.request (method, url.url, headers, requestData)

    fetch(url.url, requestBuilder(method, requestData ? requestConverter(requestData) : null, headers))
        .then(response => {

            mrmkmcibLog.response (url.url, response)

            switch (response.status) {

                case 401: {
                    throw getErrorFromHeaderLDAP(response.headers)
                }

                case 200: {


                    if (getErrorFromHeaderLDAP(response.headers) != null) {
                        throw getErrorFromHeaderLDAP(response.headers)
                    } else {
                        try {

                            let json = response.json()

                            return json

                        } catch (error) {
                            throw {
                                type: Enums.ErrorType.JsonParserError,
                                code: '',
                                message: error,
                                comment: ''
                            }
                        }
                    }
                }

                default : {
                    throw {
                        type: Enums.ErrorType.NetworkError,
                        code: String(response.status),
                        message: '',
                        comment: ''
                    }
                }
            }
        })
        .then(responseJSON => {
            try {
                if (responseJSON.success == true) {
                    let body = responseJSON.body

                    // Save body to cache
                    Cache.responsePersist(url, body, headers)

                    let data = converter(body)

                    success({
                        data: data,
                        cachedDate: new Date()
                    })
                } else {
                    throw responseJSON.error
                }
            } catch (error) {
                throw {
                    type: Enums.ErrorType.JsonConverterError,
                    code: '',
                    message: error,
                    comment: ''
                }
            }
        })
        .catch(error => {
            mrmkmcibLog.error (url.url, error)
            failure(Converters.CONVERT_ERROR(error))
        })
}

// пинг нужен для проверки работоспособности страницы клика, он возвращает html который мы игнорируем и смотрим только на ответ сервера
// call не подходит, тк в нем ожидается json  в ответе и у нас возникает исключение при парсинге
export const ping = (url: Models.Url, success: (response: Response<boolean>) => void, failure: (response: Error) => void, method: string = 'GET', headers: any = {}) => {
    //log('PING ' + method + ' ' + url)
    fetch(url.url, requestBuilder(method,  null, headers))
        .then(response => {
            switch (response.status) {

                case 200: {

                    success({data: true, cachedDate: new Date() })
                    break
                }

                default : {
                    failure( {
                        type: Enums.ErrorType.NetworkError,
                        code: String(response.status),
                        message: qlikErrorMessages.QlikSenseServerError,
                        comment: 'url: ' + url.url + '; errorCode: ' +  'QlikSenseServerError;'
                    })
                }
            }
        })
        .catch(error => {
            failure( {
                type: Enums.ErrorType.ServerUnavailable,
                code: 'QlikSenseUnavailable',
                message: qlikErrorMessages.QlikSenseUnavailable,
                comment: 'url: ' + url.url + '; tagList: ' + url.tagList + '; errorCode: ' +  'QlikSenseUnavailable;'
            })
        })
}


export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

const GlobalClientSearch = 'GlobalClientSearch'
const OpenClientCardAnalyticsTab = 'OpenClientCardAnalyticsTab'
const OpenClientCardActivity = 'OpenClientCardActivity' // клик обещал сделать, пока не сделано  08092017
const OpenClientCardProductsTab = 'OpenClientCardProductsTab'
const OpenDealCard = 'OpenDealCard'
const SearchLineOnFocus = 'SearchLineOnFocus'
const SearchLineOnBlur = 'SearchLineOnBlur'
const HttpInterceptor = 'HttpInterceptor'
const ThrowError = 'ThrowError'
const Printing = 'Printing'
const OnLoad = 'onLoad'
const mainKpi = 'mainKpi' //открытие стартовой страницы Qlik
const leKpi = 'leKpi' //открытие стартовой страницы Qlik на карточке клиента
const holdingKpi = 'holdingKpi' //открытие kpi холдинга

/**
 * Функция парсит данные получаемые с клика
 * @param {any} event
 */
export const convertQlikMessage = ( event: any ): Models.QlikMessage => {

    let res = ModelState.defaultValues.QlikMessage

    if ( !(event && event.nativeEvent && event.nativeEvent.data) ) {
        return res
    }

    let mess: any  = JSON.parse(event.nativeEvent.data)

    //console.log( 'mess from Qlik ',  mess )
    // if(mess.type == GlobalClientSearch){
    //     mess =  {
    //     	type: 'OpenClientCardActivity',
    //     		payload: {
    //     			currentUrl: '#/kpies/sdora/',
    //     			clientId: '1-15000Z', // '1-CFKH09H', // mess.payload.route.clientId, // '1-15000Z',
    //     			activityId: '2',
    //     	}
    //     }
    // }
    let payload  = { ...res.payload, ...(mess.payload || {}) }
    if( payload.clientId ){
        payload.customerId = payload.clientId
        payload.clientId = null
    }
    if( payload.route) {
        if( payload.route.clientId ) {
            payload.customerId = payload.route.clientId
            payload.clientId = null
        }
        if( payload.route.url ) {
            payload.qlikUrl = payload.route.url
        }
    }

    if (typeof payload.flag !== 'undefined' ) {
        // Заполняем выставленный по-умолчанию формат файла
        payload.defaultFileFormat = payload.flag === 0 ? Enums.FileFormat.Excel : Enums.FileFormat.PowerPoint
    }

    switch (mess.type) {
        case  GlobalClientSearch: {
            res = {type: Enums.QlikEventType.GlobalClientSearch, payload: payload}
            break
        }
        case OpenDealCard: {
            res = {type: Enums.QlikEventType.OpenDealCard, payload: payload}
            // только для теста
            // res.payload = { ...res.payload, customerId: '1-CNBK013', dealId: '1-DBVSE1H' }
            break
        }
        case OpenClientCardProductsTab: {
            res = {type: Enums.QlikEventType.OpenClientCardProductsTab, payload: payload}
            break
        }
        case OpenClientCardAnalyticsTab: {
            res = {type: Enums.QlikEventType.OpenClientCardAnalyticsTab, payload: payload}
            break
        }
        case OpenClientCardActivity: {
            res = {type: Enums.QlikEventType.OpenClientCardActivity, payload: payload}
            // только для теста
            // res.payload = { ...res.payload, customerId: '1-CNBK013', dealId: '1-DBVSE1H', activityId: '1-test' }
            break
        }
        case SearchLineOnFocus: {
            res = {type: Enums.QlikEventType.SearchLineOnFocus,payload: payload}
            break
        }
        case SearchLineOnBlur: {
            res = {type: Enums.QlikEventType.SearchLineOnBlur, payload: payload}
            break
        }
        case ThrowError: { // TODO надо различать ошибку клика и ошибку авторизации. Сейчас, при ошибке авторизации мы закрываем клик и не даем пользователю ввести новый пароль
            // err( qlikErrorMessages.QlikSenseMashupError )
            res = {type: Enums.QlikEventType.ThrowError, payload: payload}
            break
        }
        case Printing: {
            res = {type: Enums.QlikEventType.Printing, payload: payload}
            break
        }
        case OnLoad: {
            res = {type: Enums.QlikEventType.OnLoad, payload: payload}
            break
        }
        case mainKpi: {
            res = {type: Enums.QlikEventType.mainKpi, payload: payload}
            break
        }
        case leKpi: {
            res = {type: Enums.QlikEventType.leKpi, payload: payload}
            break
        }
        case holdingKpi: {
            res = {type: Enums.QlikEventType.holdingKpi, payload: payload}
            break
        }
    }
    return res

}

const MAX_LAST_SEARCH_CLIENT_LIST = 10  // количество элементов в списке 'Вы недавно искали'
const MAX_PEOPLE_HISTIRY_LIST = 10     // количество элементов в списке НЕДАВНИЕ ПОЛУЧАТЕЛИ

export const qlikErrorMessages = {

    QlikSenseUnavailable: 'АС «Визуализация отчётности» недоступна. Пожалуйста, обратитесь к администратору', // Server unavailable
    QlikSenseServerError: 'Произошла ошибка  АС «Визуализация отчётности» Пожалуйста, обратитесь к администратору', // ping 4**-5**
    QlikSenseMashupError: 'Данные аналитики для пользователя отсутствуют или не выделена лицензия для работы с аналитикой. Обратитесь к администратору', // TrowErr
    QlikSenseCertificateError: 'Отсутствует персональный сертификат для аутентификации. Импортируйте свой персональный сертификат в приложение и повторите попытку входа.',
    // не используются
    QlikSenseSessionExpired: 'Истекла пользовательская сессия в АС «Визуализация отчётности». Пожалуйста, авторизуйтесь в системе заново.',
    QlikSenseTimeout: 'Таймаут соединения с АС «Визуализация отчётности». Пожалуйста, обратитесь к администратору'
}

// загрузим список 'вы недавно искали'  из хранилища, пока бэк не поддерживат получение уведомлений по id, храним их целиком
export const recoverSearchHistoryListFromStorage = (): React.Promise<Models.SearchHistoryList> => {
    return Storage.getItem('dashboardApp', 'searchHistoryList')
        .then((data) => {
            if (data == null) {
                data = []
            }
            return {data: data, isCompleted: true}
        })
}

// сохраним список 'вы недавно искали' в хранилище, пока бэк не поддерживат получение уведомлений по id, храним их целиком
export const persistSearchHistoryListToStorage = (list: Models.SearchHistoryList): React.Promise<string> => {
    return Storage.setItem('dashboardApp', 'searchHistoryList', list.data)
}

// загрузим список недавних получателей из хранилища, пока бэк не поддерживат получение уведомлений по id, храним их целиком
export const recoverPeopleHistoryListFromStorage = (): React.Promise<ModelsScheduler.PersonList> => {
    return Storage.getItem('dashboardApp', 'personHistoryList')
        .then((data) => {
            if (data == null) {
                data = []
            }
            return {data: data}
        })
}

// сохраним список недавних получателей  в хранилище, пока бэк не поддерживат получение уведомлений по id, храним их целиком
export const persistPeopleHistoryListToStorage = (list: ModelsScheduler.PersonList): React.Promise<string> => {
    return Storage.setItem('dashboardApp', 'personHistoryList', list.data)
}


export const chooseURL = (props: any): string => {
            return getUrlForRole(props.currentUser.roleAd, props.supParameters)
    }

export const getErrorFromHeaderLDAP = (headers: any): Error | null => {
    if (headers != null) {
        //try get error code from appropriate header
        const errorCode = headers.get('sudir_error_code')
        if (errorCode != null) {
            return {
                type: Enums.ErrorType.AuthorizationError,
                code: errorCode,
                message: '',
                comment: ''
            }
        }
        //otherwise, headers are all in content-type
        const headersString = headers.get('content-type')
        const headerArr = headersString ? headersString.split(/\n/g) : []
        const matchedHeader = headerArr.filter((item: any) => {
            if (item && item.startsWith('sudir_error_code')) {
                if (item && item.match(/[:\s?](.*)/) && item.match(/[:\s?](.*)/)[1])
                    return item.match(/[:\s?](.*)/)[1].trim()
            }
        })
        if (matchedHeader != null && matchedHeader.length > 0) {
            return {
                type: Enums.ErrorType.AuthorizationError,
                code: matchedHeader[0],
                message: '',
                comment: ''
            }
        }
    }
    return null
}

export const getLoginLDAP = (login: string): string => {

    return login.endsWith('-ext') ? login : `${login}-ext`
}

export const urlCustomerDashboardTail = (baseUri: string, customerManagedId: string, kpiId: string, isHolding: boolean, kpiForHolding: boolean) => {
    let uri = baseUri + '#/' + (isHolding ? 'holding' : 'le_ent')
    if (isHolding) {
        uri += `/${customerManagedId}`
        uri += (kpiId ? `/${kpiId}` : '')
    }
    else {
        uri += (kpiId ? `/${kpiId}` : '')
        uri += `/${customerManagedId}`
    }
    uri += (kpiForHolding ? '/all' : '')
    return uri
}


export const getRoleString = (key: string) => {
    switch (key) {
        case 'Клиентский менеджер': {
            return 'КМ'
        }
        default: {
            return key
        }
    }
}

export const personListAdd = (personList: ModelsScheduler.PersonList, person: ModelsScheduler.Person): ModelsScheduler.PersonList => {

    const checkUniqEmail = (array: Array<any>, email: string): boolean => {
        if (_.find(array, {email: email.toLowerCase()})) {
            return false
        }
        return true
    }

    let updatedPersonList = personList.data.slice()

    if (checkUniqEmail(personList.data, person.email ? person.email : '')) {
        updatedPersonList.push(person)
    }

    return {data: updatedPersonList}
}

export const personListRemove = (personList: ModelsScheduler.PersonList, person: ModelsScheduler.Person): ModelsScheduler.PersonList => {

    let copy = personList.data.slice()
    let i;
    for (i = 0; i < copy.length; i++) {
        if (copy[i].email === person.email) {
            copy.splice(i, 1)
        }
    }

    return {
        data: copy
    }
}


export const getCustomerSearchType = (text: string): any => {

    if (text && text.length > 2) {
        if (text.match(/^\d+$/)) {
            if (text.length === 9)
                return EnumsCrm.CustomerSearchType.KPP
            else if (text.length === 10)
                return EnumsCrm.CustomerSearchType.INN
            else
                return EnumsCrm.CustomerSearchType.Name
        }
        else if (text.match(/^\d-.*$/))
            return EnumsCrm.CustomerSearchType.Account
        else
            return EnumsCrm.CustomerSearchType.Name
    }
    return EnumsCrm.CustomerSearchType.LessThanThreeChars
}

export const searchHistoryListAppend = (searchHistoryList: Models.SearchHistoryList, customer: ModelsCrm.Customer): Models.SearchHistoryList => {
    // добавляем клиента в начало списка вы недавно искали, удаляем повторы и обрезаем массив до 10 элементов
    let list = [customer] // добавим в результирующий массив первый элемент

    // если добавляемый элемент есть - удалим Все его копии
    searchHistoryList.data.forEach((item) => {
        if (item.id !== customer.id && list.length < MAX_LAST_SEARCH_CLIENT_LIST) {
            list.push(item)
        }
    })
    return {data: list, isCompleted: true}
}

export const getPersonName = (item: ModelsScheduler.Person): string => {
    let lastName = item.lastName ? item.lastName : '- '
    let firstNameInitial = item.firstName ? item.firstName.charAt(0) + '. ': '-'
    let middleNameInitial = item.middleName? item.middleName.charAt(0) + '. ': '-'
    return `${lastName} ${firstNameInitial}${middleNameInitial}`
}

export const personHistoryListAppend = (currentList: ModelsScheduler.PersonList, appendList: ModelsScheduler.PersonList): ModelsScheduler.PersonList => {
    // вставим добавочный массив в начало, уберем дубликаты и удалим лишние, если есть
    let res = [...appendList.data, ...currentList.data].filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
    })
    if( res.length > MAX_PEOPLE_HISTIRY_LIST ){
        res.length = MAX_PEOPLE_HISTIRY_LIST
    }
    return {data: res }
}

/*
 * @description - функция возвращает строку вида Name=Value если есть в cookies X-Qlik-Session, иначе возвращет строку вида Name=Value; из PD-S-SESSION-ID и PD-ID

 * @param { data } Array<CookieData> | null
 *
 * @returns { string | null }
 *
 * @applicable - Можно использовать для получение cookies которые необходимы для корректной авторизации в Qlik
 * @author Tarverdyan N.K.
 */

export const getCookieString = (data: Array<CookieData> | null): string | null => {
    if (Array.isArray(data) && data.length) {
        const qlikSession = data.find(cookieObject => cookieObject.Name === 'X-Qlik-Session')
        return qlikSession ?
            `${qlikSession.Name}=${qlikSession.Value}` :
            data.reduce((result, currentCookie) => {
                return result + `${currentCookie.Name}=${currentCookie.Value};`
            }, '')
    } else {
        return null
    }
}

