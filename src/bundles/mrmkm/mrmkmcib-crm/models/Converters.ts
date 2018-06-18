/**
 * Converters for network response and request data.
 *
 * @author Burnaev M.U.
 * @see
 */

import { defaultValues } from './Models';
import {Models as ModelsApp} from 'mrmkmcib-app'
import {Models as ModelsScheduler} from 'mrmkmcib-scheduler'
import {Models as ModelsCrm, Models} from 'mrmkmcib-crm'
import {Enums} from '../Enums'
import Error from '../models/Error'
import * as util from '../common/Util'
import { secureParseFloat } from '../common/Util';
import moment from 'moment';
import * as _ from 'lodash'
import {OWAService} from 'mrmkmcib-ui'
import DealType = Enums.DealType

export const TIMEOUT_NETWORK_ERROR_MESSAGE = 'Network request failed'

export const TIMEOUT_STRING_CODE = 'TIMEOUT'

export const REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST = (eksErrorList: any): Models.ProductEksErrorIdList => {

    return {
        ids: eksErrorList && Array.isArray(eksErrorList.data) ? eksErrorList.data
        .map((eksError: Models.EksError): Models.ProductDataEksError => ({
            id: eksError.eksCustomerId,
            isActive: eksError.isActiveAgreement,
            reason: eksError.code ? eksError.code.toLowerCase() : ''
        })) : []
    }

}


export const RESPONSE_CALL_GET_PRODUCT_COVENANT_LIST = (data: any): Models.ProductCovenantList => {
    const getCovenantHistoryValue = (historyValue:any): Models.ProductCovenantHistory => {

        return {dateFact: util.parseServerDate(historyValue.dateFact),
                status: historyValue.status || '',
                comment: historyValue.comment || '',
                datePlan: util.parseServerDate(historyValue.datePlan),
                datePlanEnd: util.parseServerDate(historyValue.datePlanEnd)
        }
    }

    const covenantList: Array<Models.ProductCovenant> = []

    if (data && Array.isArray(data)) {

        data.map((productCovenantItem: any): void => {
            productCovenantItem.covenants.map((covenant: any): void => {

                covenantList.push({ id: covenant.id || '',
                            idTypicalCovenant: covenant.idTypicalCovenant || false,
                            name: covenant.name || '', //Суть условия
                            contractNumber: covenant.number || '', //Пункт договора
                            isTypical: covenant.isTypical || false,
                            isCalculatedAccount: covenant.type || false,
                            periodicalValue: covenant.periodicalValue || '',
                            isProductHasCondition: covenant.conditionType || false,
                            controlValue: covenant.controlValue || '',
                            isPeriodical: covenant.isPeriodical || false,
                            historyList: {data: covenant.histories && Array.isArray(covenant.histories) && covenant.histories.map(getCovenantHistoryValue) || []},
                            schedule: {
                                dateStart: util.parseServerDate(util._get(covenant, 'schedule.dateStart')),
                                dateEnd: util.parseServerDate(util._get(covenant, 'schedule.dateEnd')),
                                dateNext: util.parseServerDate(util._get(covenant, 'schedule.dateNext'))
                            }
                })
            })
        })
    }

    return {data: covenantList}
}

const APPROVAL_TO_AGREEMENT = (data: any): ModelsCrm.DealAgreement => {
    return {
        author: {...defaultValues.employee, fullName: data.fio || '', id: data.posID || ''},
        comment: data.comment,
        action: data.action,
        created: util.parseServerDate(data.date),
        due: util.parseServerDate(data.durationTerm),
        result: data.result || ' '
    }
}

const COLLEGIALS_TO_DECISION = (data: any, contracts: Array<any>, decisionFormat :ModelsApp.Classifier): ModelsCrm.DealDecision => ({
        decisionMakingFormat: decisionFormat,
        decisionForm: data.formOfDecision,
        decisionSixEyes: util.isValidDate(data.dateOfDecision6E) ? {
            number: data.numOfDecision6E,
            date: util.parseServerDate(data.dateOfDecision6E)
        } : null,
        decisionKK: data.dateOfDecisionKK || data.formOfDecision && data.formOfDecision.value ? {
            decision: data.decision && data.decision.value,
            committee: data.committee,
            caTb: data.catb,
            committeeDate: util.parseServerDate(data.dateOfExecution),
            territorialDivisionName: data.divisionTB,
            secretary: data.collegialSecretaries && data.collegialSecretaries.length > 0 ?
                data.collegialSecretaries.map( (secretary:any) => (
                {
                ...defaultValues.Employee,
                firstName: secretary.name,
                lastName: secretary.surname,
                middleName: secretary.thirdName,
                    fullName: util.getFullNameRepresentation({firstName: secretary.name,
                        lastName: secretary.surname,
                        middleName: secretary.thirdName,}),
                id: secretary.positionId,
            })) : null,
            status: CLASSIFIER_TO_CLASSIFIER(data.status),
            number: data.numOfDecisionKK,
            date: util.parseServerDate(data.dateOfDecisionKK),
        } : null,
        decisionStandard: data.name ? {
            result: data.result,
            title: data.name.value,
            date: util.parseServerDate(data.dateFact),
            datePlan: util.parseServerDate(data.datePlan),
            description: data.description,
            territorialDivisionName: data.divisionSB,
            subsidiaryOffice: data.osb,
            internalDivision: data.internalDivision,
            comment: data.comment,
        } : null,
        agreements: Array.isArray(contracts) ? contracts.map( (contract) => ({
            number: contract.number,
            status: contract.status && contract.status.value,
        })) : null
})

export const RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST = (data: any): Models.EksError[] => {

    return (typeof data == 'object') && Array.isArray (data.errors) && data.errors.map ((error: any): Models.EksError => ({

        eksCustomerId: error.eksClientId || null,
        code: error.code || null,
        isActiveAgreement: error.isActiveAgreement || false,
        message: error.message || null

    })) || []
}

export const SEARCH_EMPLOYEE_TO_EMPLOYEE = (agent: any): ModelsApp.Employee => {
    const {lastName = "", middleName = "", firstName = ""} = agent.personType;
    const employeeTeamItem = Array.isArray(agent.team)
        ? agent.team.find((item: any) => agent.id === item.positionId)
        : undefined;

    return ({
        customerList: [],
        email: "",
        firstName,
        fullName: `${lastName} ${firstName} ${middleName}`,
        functionalDivisionName: "",
        head: null,
        id: agent.id || "",
        isBlocked: employeeTeamItem ? employeeTeamItem.isBlocked : false,
        isGeneral: employeeTeamItem ? employeeTeamItem.isGeneral : false,
        jobTitle: "",
        lastName,
        middleName,
        mobilePhone: "",
        positionName: employeeTeamItem ? employeeTeamItem.member.positionName : "",
        role: {
            code: "",
            name: "",
            parentId: "",
            value: "",
        },
        roleAd: null,
        territorialDivisionName: "",
        workPhone: "",
        workPhoneExtension: null,
    });
};

export const RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS = (address: any): Models.Address => {
    if (!address) {
        return defaultValues.Address
    }
    return {
        region: address.area,
        building: address.building,
        city: address.city,
        country: CLASSIFIER_TO_CLASSIFIER(address.country || {}),
        id: address.id,
        isActive: address.isActive,
        isPrimary: address.isPrimary,
        modId: address.modId,
        settlement: address.place,
        subject: address.stateProv,
        street: address.street,
        type: CLASSIFIER_TO_CLASSIFIER(address.type || {}),
        house: address.house,
        block: address.corpus,
        flat: address.office,
        postalCode: address.postalCode,
        comment: address.comment,
        office: address.office

    }
}

// export const CLASSIFIER_TO_CLASSIFIER = (data:any):Classifier => {
//
//     return {
//         name: data && data.classifierName,
//         value: data && data.value,
//         code: data && data.code
//     }
// }

export const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ = (gsz: any): Models.Gsz => {
    if (!gsz) {
        return defaultValues.Gsz
    }
    return {...defaultValues.Gsz, id: gsz.id, name: gsz.name}
}

export const IMPORTANT_DATE_TO_OCCASION = (importantDate: any): Models.Occasion => {
    if (!importantDate) {
        return defaultValues.Occasion
    }

    return {
        ...defaultValues.Occasion,

        date: importantDate.date ? new Date(importantDate.date) : null,
        comment: importantDate.dateComment,
        id: importantDate.id,
        type: CLASSIFIER_TO_CLASSIFIER(importantDate.impDateTypeClassifier),
        isAnnual: importantDate.isYearlyReminde,
        modId: importantDate.modId,
    }
}


export const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_IMPDATES_TO_OCCASION_LIST = (impDates: any): Models.OccasionList => {
    if (!impDates) {
        return defaultValues.OccasionList
    }

    return {
        ...defaultValues.OccasionList,
        data: impDates.map((item: any) => {
            return IMPORTANT_DATE_TO_OCCASION(item)
        })
    }
}


export const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TEAMPERSON_TO_TEAMMEMBER = (memberList: Array<any>): Models.MemberList => {
    if (!memberList || (memberList.length === 0)) {
        return {data: []}
    }
    return {
        data: memberList.map((item: any) => {
            const emptyPhones = {
                mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhoneExtension: null
            }

            const phoneExtractor = (phoneList: Array<any>): ModelsApp.PhoneList => {
                if (phoneList) {
                    return phoneList.reduce((result, phone) => {
                        if (phone.type == 'MOBILE') {
                            result.mobilePhone = phone.number
                        } else if (phone.type == 'WORK') {
                            result.workPhone = phone.number
                            result.workPhoneExtension = phone.extension
                        }
                        return result
                    }, emptyPhones)
                }
                return emptyPhones
            }

            const extractedPhones = phoneExtractor(item.member && item.member.person && item.member.person.phones)
            const getId = (item:any)=>{
                if(item && item.member && item.member.positionId){
                    return item.member.positionId
                }
                if(item && item.member && item.member.person && item.member.person.id){
                    return item.member.person.id
                }
            }
            return {
                id: getId(item),
                email: '',
                jobTitle: '',
                functionalDivisionName: '',
                territorialDivisionName: '',
                head: null,
                positionName: '',
                fullName:
                    util.getStringDataDisplayValue(item.member && item.member.person && item.member.person.lastName) + ' ' +
                    util.getStringDataDisplayValue(item.member && item.member.person && item.member.person.firstName) + ' ' +
                    util.getStringDataDisplayValue(
                        item.member && item.member.person && item.member.person.middleName,
                        util.UndefinedValuesPlaceholder.EMPTY,
                    ),
                firstName: util.getStringDataDisplayValue(item.member && item.member.person && item.member.person.firstName),
                lastName: util.getStringDataDisplayValue(item.member && item.member.person && item.member.person.lastName),
                middleName: util.getStringDataDisplayValue(item.member && item.member.person && item.member.person.middleName),
                mobilePhone: extractedPhones.mobilePhone,
                workPhone: extractedPhones.workPhone,
                isGeneral: item.isGeneral,
                isBlocked: item.isBlocked,
                roleAd: null,
                role: CLASSIFIER_TO_CLASSIFIER(item.roleClassifier),
                workPhoneExtension: extractedPhones.workPhoneExtension,
                customerList: []
            }

        })
    }
}

const RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED = (item: any): Models.CustomerManaged => {

    return {
        ...defaultValues.CustomerManaged,
        hierarchy: item.hierarchy,
        id: item.id,
        name: item.name,
        myClient: item.myClient,
        shortName: item.shortName,
        role: CLASSIFIER_TO_CLASSIFIER(item.roleClassifier || {}),
        organizationType: CLASSIFIER_TO_CLASSIFIER(item.orgTypeClassifier),
        legalForm: CLASSIFIER_TO_CLASSIFIER({}),
        ownerList: RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_SHAREHOLDER_TO_OWNER_LIST(item.shareholders, item.beneficiaries),
        isNSL: false,
        isHolding: util.isTypeOrganizationHolding(CLASSIFIER_TO_CLASSIFIER(item.orgTypeClassifier)),
        curator: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(item.curator ? item.curator : null),
        holder: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(item.vko ? item.vko : null),
        category: CLASSIFIER_TO_CLASSIFIER(item.category),
    }
}


export const GET_OWNER_TYPE_BY_VALUE = (ownerTypeValue: string) => {
    switch (ownerTypeValue) {
        case 'LegalEntity':
            return Enums.OwnerType.Shareholder

        case 'Agent':
            return Enums.OwnerType.Beneficiary

        default:
            return Enums.OwnerType.Unknown
    }
}

const RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_SHAREHOLDER_TO_OWNER_LIST = (shareholderList: any, beneficiarList: any): Array<Models.Owner> => {

    let ownerList: Array<Models.Owner> = []
    if (Array.isArray(shareholderList) && shareholderList.length) {
        ownerList = ownerList.concat(shareholderList)
    }
    if (Array.isArray(beneficiarList) && beneficiarList.length) {
        ownerList = ownerList.concat(beneficiarList)
    }

    return ownerList.map((owner: any) => {
        let ownerData = owner.shareholder ? owner.shareholder : owner.beneficiary
        let affilate = ownerData.affilate
        if (typeof affilate != 'object') {

            throw new Error (`Invalid affilate data ${ JSON.stringify (affilate) }`)

        }

        try {

            let baseData: Models.Owner = {
                ownerType: owner.shareholder ? Enums.OwnerType.Shareholder : Enums.OwnerType.Beneficiary,
                name: affilate.name,
                percent: affilate.perc
            }

            if (baseData.ownerType == Enums.OwnerType.Shareholder) {
                baseData = {
                    ...baseData,
                    organizationId: affilate.orgId,
                    inn: affilate.inn,
                    kpp: affilate.kpp,
                    registrationInfo: owner.regInfo,
                    address: owner.address
                }
            }

            if (baseData.ownerType == Enums.OwnerType.Beneficiary) {
                baseData = {
                    ...baseData,
                    contactId: affilate.contactId,
                    ownPeriod: ownerData.ownPeriod,
                    birthdayDate: affilate.birthday
                }
            }

            return baseData

        } catch (e) {
            throw e
        }

    })
}


export const CLASSIFIER_TO_CLASSIFIER_BACK = (data: ModelsApp.Classifier | null): ModelsCrm.ClassifierRequest => {
    if (data) {
        return {
            classifierName: data.name,
            value: data.value,
            code: data.code
        }
    }
    return defaultValues.ClassifierRequest;
}

export const CLASSIFIER_TO_CLASSIFIER = (data: any): ModelsApp.Classifier => {
    return {

        parentId: data && data.parentId || null,
        name: data && data.classifierName,
        value: data && util.overrideClassifierValue (data.value),
        code: data && data.code

    }

}



export const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE = (item: any): ModelsApp.Employee => {

    if (!item) {
        return defaultValues.Employee
    }

    const emptyPhones = {
        mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhoneExtension: null
    }

    const phoneExtractor = (phoneList: Array<any>): ModelsApp.PhoneList => {
        if (phoneList) {
            return phoneList.reduce((result, phone) => {
                if (phone.type == 'MOBILE') {
                    result.mobilePhone = phone.number
                } else if (phone.type == 'WORK') {
                    result.workPhone = phone.number
                    result.workPhoneExtension = phone.extension
                }
                return result
            }, emptyPhones)
        }
        return emptyPhones
    }

    const getFullName = (firstName: string, lastName: string, middleName: string): string => {
        if (!firstName || !lastName ) {
            return util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.UNDEFINED)
        }
        return `${lastName} ${firstName.charAt(0).toUpperCase()}.${middleName ? middleName.charAt(0).toUpperCase() + '.' : ''}`
    }

    const extractedPhones = phoneExtractor(item.person.phones)

    return {
        ...defaultValues.Employee,
        id: item.positionId,
        fullName: getFullName(item.person.firstName, item.person.lastName, item.person.middleName),
        firstName: item.person.firstName,
        lastName: item.person.lastName,
        middleName: item.person.middleName,
        positionName: item.positionName || item.jobTitle,
        isGeneral: item.isGeneral || false,
        isBlocked: item.isBlocked || false,
        mobilePhone: extractedPhones.mobilePhone,
        workPhone: extractedPhones.workPhone,
        workPhoneExtension: extractedPhones.workPhoneExtension,
    }
}

const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TROUBLE_CRITERION = (item: any): Models.TroubleCriteriaList => {
    if (!item) {
        return defaultValues.TroubleCriteriaList
    }

    let result = item.reduce((data: Array<any>, criterion: any) => {
        data.push(criterion)
        return data
    }, [])

    return {data: result}
}

const RESPONSE_GSZ_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE = (item: any): ModelsApp.Employee => {
    const emptyPhones = {
        mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhoneExtension: null
    }

    const phoneExtractor = (phoneList: Array<any>): ModelsApp.PhoneList => {
        if (phoneList) {
            return phoneList.reduce((result, phone) => {
                if (phone.type == 'MOBILE') {
                    result.mobilePhone = phone.number
                } else if (phone.type == 'WORK') {
                    result.workPhone = phone.number
                    result.workPhoneExtension = phone.extension
                }
                return result
            }, emptyPhones)
        }
        return emptyPhones
    }

    const headExtractor = (item: any): ModelsApp.Employee | null => {
        if (item.headId) {
            return {
                ...defaultValues.Employee,
                id: item.headId,
                fullName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                firstName: util.getStringDataDisplayValue(item.headFirstName),
                lastName: util.getStringDataDisplayValue(item.headLastName),
                middleName: util.getStringDataDisplayValue(item.headMidName),
                jobTitle: util.getStringDataDisplayValue(item.headJobTitle),
                email: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                functionalDivisionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                positionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                territorialDivisionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhoneExtension: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
            }
        }
        return null
    }

    const extractedPhones = phoneExtractor(item.person.phones)

    if (item) {
        return {
            ...defaultValues.Employee,
            id: item.positionId,
            fullName: util.getStringDataDisplayValue(item.person && item.person.fullName),
            firstName: util.getStringDataDisplayValue(item.person && item.person.firstName),
            lastName: util.getStringDataDisplayValue(item.person && item.person.lastName),
            middleName: util.getStringDataDisplayValue(item.person && item.person.middleName),
            email: util.getStringDataDisplayValue(item.person && item.person.email),
            jobTitle: util.getStringDataDisplayValue(item.jobTitle),
            functionalDivisionName: util.getStringDataDisplayValue(item.funcDivisionName),
            positionName: util.getStringDataDisplayValue(item.positionName),
            territorialDivisionName: util.getStringDataDisplayValue(item.terDivisionName),
            head: headExtractor(item),
            mobilePhone: extractedPhones.mobilePhone,
            workPhone: extractedPhones.workPhone,
            workPhoneExtension: extractedPhones.workPhoneExtension
        }
    }
    return {
        ...defaultValues.Employee,
        id: '',
        fullName: util.getStringDataDisplayValue(null),
        firstName: util.getStringDataDisplayValue(null),
        lastName: util.getStringDataDisplayValue(null),
        middleName: util.getStringDataDisplayValue(null),
        email: util.getStringDataDisplayValue(null),
        jobTitle: util.getStringDataDisplayValue(null),
        functionalDivisionName: util.getStringDataDisplayValue(null),
        positionName: util.getStringDataDisplayValue(null),
        territorialDivisionName: util.getStringDataDisplayValue(null),
        mobilePhone: util.getStringDataDisplayValue(null),
        workPhone: util.getStringDataDisplayValue(null),
        workPhoneExtension: util.getStringDataDisplayValue(null),
        head: null
    }
}

const RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_BORROWERS_BORROWER_TO_MEMBER_BORROWER_LIST_BORROWER = (item: any): Models.Borrower => {
    return {
        id: item.id,
        fullName: item.fullName,
        shortName: item.shortName,
        organizationType:
            CLASSIFIER_TO_CLASSIFIER(util.getClassifierDataDisplayValue(item.typeClassifier)),
        status: CLASSIFIER_TO_CLASSIFIER(util.getClassifierDataDisplayValue(item.statusClassifier)),
        role: CLASSIFIER_TO_CLASSIFIER(item.roleClassifier),
        criteriaList: item.criterias && item.criterias.map((criteria: any) => ({
            id: criteria.id,
            description: criteria.description
        })) || []
    }
}

const RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_BORROWERS_TO_MEMBER_BORROWER_LIST = (itemList: Array<any>): Models.BorrowerList => {
    return {
        data: itemList.map(item => RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_BORROWERS_BORROWER_TO_MEMBER_BORROWER_LIST_BORROWER(item))
    }
}

const RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_TO_MEMBER = (item: any): Models.GszMember => {
    return {
        id: item.id,
        fullName: item.fullName || '',
        shortName: item.shortName || '',
        organizationType: CLASSIFIER_TO_CLASSIFIER(item.typeClassifier),
        status: CLASSIFIER_TO_CLASSIFIER(util.getClassifierDataDisplayValue(item.statusClassifier)),
        role: CLASSIFIER_TO_CLASSIFIER(item.roleClassifier || {}),
        problemGroup: CLASSIFIER_TO_CLASSIFIER(util.getClassifierDataDisplayValue(item.troubleGroupClassifier)),
        borrowerList: RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_BORROWERS_TO_MEMBER_BORROWER_LIST(item.borrowers),
    }
}

const RESPONSE_GSZ_REFRESH_CALL_GET_MEMBERS_TO_MEMBER_LIST = (itemList: Array<any>): Array<Models.GszMember> => {
    return itemList && itemList.map(item => RESPONSE_GSZ_REFRESH_CALL_GET_MEMBER_TO_MEMBER(item)) || []
}


/* Agent specific converters */

const AGENT_NOTE_LIST_TO_AGENT_NOTE_LIST = (data: any): Models.NoteList => (Array.isArray(data) ? ({
    data: data.compact().map((item: any): Models.Note => AGENT_NOTE_TO_AGENT_NOTE(item))
}) : defaultValues.NoteList)

const AGENT_NOTE_TO_AGENT_NOTE = (data: any): Models.Note => data ? ({

    id: data.id,
    text: data.note,
    type: data.noteTypeClassifier ? CLASSIFIER_TO_CLASSIFIER(data.noteTypeClassifier) : null,
    modId: data.modId,
}) : defaultValues.Note


const AGENT_OCCASION_LIST_TO_AGENT_OCCASION_LIST = (data: any): Models.OccasionList => Array.isArray(data) ? ({
    data: data.compact().map((item: any): Models.Occasion => OCCASION_TO_OCCASION_REQUEST(item))
}) : defaultValues.OccasionList

const OCCASION_TO_OCCASION_REQUEST = (data: any): Models.Occasion => (data ? ({

    id: data.id || defaultValues.Occasion.id,
    date: data.date ? (new Date(data.date) || null) : defaultValues.Occasion.date,
    type: data.impDateTypeClassifier ? CLASSIFIER_TO_CLASSIFIER(data.impDateTypeClassifier) : defaultValues.Occasion.type,
    modId: data.modId || defaultValues.Occasion.modId,
    comment: data.dateComment || defaultValues.Occasion.comment,
    isAnnual: data.isYearlyReminde ? true : false,
    isChanged: false,


}) : defaultValues.Occasion)


const AGENT_MEMBER_LIST_TO_AGENT_MEMBER_LIST = (data: any): Models.MemberList => Array.isArray(data) ? ({
    data: data.compact().map((item: any): ModelsApp.Employee => AGENT_MEMBER_LIST_MEMBER_TO_AGENT_MEMBER_LIST_MEMBER(item))
}) : defaultValues.MemberList

const AGENT_MEMBER_LIST_MEMBER_TO_AGENT_MEMBER_LIST_MEMBER = (data: any): ModelsApp.Employee => (
    /* TODO Probably will need an individual converter */
    RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(data.member ? ({...data, ...data.member}) : data)
)


const AGENT_PHONE_NUMBER_LIST_TO_AGENT_PHONE_NUMBER_LIST = (data: any): Models.PhoneNumberList => Array.isArray(data) ? ({
    data: data.compact().map((item: any): Models.PhoneNumber => ({

        type: item.type || null,
        number: item.number || null,
        extension: item.extension || null

    }))
}) : defaultValues.PhoneNumberList


const AGENT_CUSTOMER_POSITION_LIST_TO_AGENT_CUSTOMER_POSITION_LIST = (data: any): Models.AgentCustomerPositionList => Array.isArray(data) ? ({
    data: data.compact().map((item: any): Models.AgentCustomerPosition => ({

        customerId: item.client && item.client.id,
        customerRelations: item.relationClassifier && CLASSIFIER_TO_CLASSIFIER(item.relationClassifier) || null,
        position: item.position || null,
        company: item.client.shortName || item.client.name,
        organizationType: item.orgTypeClassifier && CLASSIFIER_TO_CLASSIFIER(item.orgTypeClassifier),
        legalFormClassifier: item.client.legalFormClassifier && CLASSIFIER_TO_CLASSIFIER(item.client.legalFormClassifier) || null
    }))
}) : defaultValues.AgentCustomerPositionList

/* End of Agent specific converters */

/* Payment Account Product converters */

export const PAYMENT_ACCOUNT_NUMBER_TO_PAYMENT_ACCOUNT_NUMBER = (data: any): Models.AccountNumber => (
    (typeof data == 'string') ? data as Models.AccountNumber : defaultValues.accountNumber
)

export const PAYMENT_ACCOUNT_PRODUCT_RESTRICTION_LIST_TO_RESTRICTION_LIST = (data: any): Models.PaymentAccountProductRestrictionList => (
    Array.isArray(data) ? ({
        data: data.compact().map(PAYMENT_ACCOUNT_PRODUCT_RESTRICTION_TO_PAYMENT_ACCOUNT_PRODUCT_RESTRICTION)
    }) : defaultValues.paymentAccountProductRestrictionList
)
export const PAYMENT_ACCOUNT_PRODUCT_RESTRICTION_TO_PAYMENT_ACCOUNT_PRODUCT_RESTRICTION = (data: any): Models.ProductPaymentAccountRestriction => {
    return {
        type: data.type,
        annotation: data.annotation || null,
        startDate: data.startDate && util.isValidDate(data.startDate) ? new Date(data.startDate) : null,
        sum: VALIDATE_NUMBER_VALUE(data.sum)
    }
}
export const REQUEST_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PAYMENT_ACCOUNT_PRODUCT_TO_PAYMENT_ACCOUNT_PRODUCT = (item: any): Models.SubPaymentAccountProduct => {
    return item ? {
        id: item.id || null,
        accountId: item.accountId || null,
        accountNumber: PAYMENT_ACCOUNT_NUMBER_TO_PAYMENT_ACCOUNT_NUMBER(item.accountNumber),
        typeInfo: item.typeInfo || null,
        openDate: item.openDate && util.isValidDate(item.openDate.toString()) ? new Date(item.openDate) : null,
        lastActionDate: item.lastActionDate && util.isValidDate(item.lastActionDate.toString()) ? new Date(item.lastActionDate) : null,
        closeDate: item.closeDate && util.isValidDate(item.closeDate.toString()) ? new Date(item.closeDate) : null,
        contractNumber: item.contractNumber || null,
        contractNumberRKO: item.contractNumberRKO || null,
        contractStatusRKO: item.contractNumberRKO || null,
        blockStatus: item.blockStatus || null,
        doNumber: item.doNumber || null,
        curBalance: VALIDATE_NUMBER_VALUE(item.curBalance),
        minBalance: VALIDATE_NUMBER_VALUE(item.limitDebitRest),
        planBalance: VALIDATE_NUMBER_VALUE(item.planBalance),
        avgDailyBalance: VALIDATE_NUMBER_VALUE(item.avgDailyBalance),
        accountResp: item.accountResp || null,
        restrictionList: PAYMENT_ACCOUNT_PRODUCT_RESTRICTION_LIST_TO_RESTRICTION_LIST(item.restrictions),
        isExistCardIndex: item.isExistCardIndex || false,
        currencyClassifier: CLASSIFIER_TO_CLASSIFIER(item.currencyClassifier),
        isActiveAgreement: item.isActiveAgreement || false,
        eksClientId: item.eksClientId || null,
        tariff: Array.isArray(item.tariffPlans) ? PAYMENT_ACCOUNT_PRODUCT_TARIFF_TO_TARIFF(item.tariffPlans) : null,
        privilegeList: Array.isArray(item.tariffPlans) ? PAYMENT_ACCOUNT_TARIFF_LIST_TO_PRIVILEGE_LIST(item.tariffPlans) : defaultValues.paymentAccountProductPrivilegeList,
        package: Array.isArray(item.packages) ? PAYMENT_ACCOUNT_PRODUCT_PACKAGE_TO_PACKAGE(item.packages) : null,
        cardIndexList: defaultValues.PaymentAccountProductCardIndexList,
        regionId: item.regionId || null,
        agencyId: item.agencyId || null,
        branchId: item.branchId || null,
        operationList: defaultValues.PaymentAccountProductOperationList,
    } : defaultValues.SubPaymentAccountProduct
}


export const PAYMENT_ACCOUNT_TARIFF_LIST_TO_PRIVILEGE_LIST = (data: any): Models.PaymentAccountProductPrivilegeList => ({
    data: data.compact().filter((ligota: any) => parseInt(ligota.typeClassifier && ligota.typeClassifier.code) == 1).map((item: any) => PRIVILEGE_TO_PRIVILEGE(item))
})

export const PRIVILEGE_TO_PRIVILEGE = (data: any): Models.Privilege => ({

    /* TODO: remap json attributes to model according to json scheme when it will be defined */
    startDate: data.openDate && util.isValidDate(data.openDate.toString()) && new Date(data.openDate) || null,
    endDate: data.closeDate && util.isValidDate(data.closeDate.toString()) && new Date(data.closeDate) || null,
    name: data.name || null,
})

export const PAYMENT_ACCOUNT_PRODUCT_TARIFF_TO_TARIFF = (data: any,): Models.SubTariffPlanProduct => {
    /* TODO: remap json attributes to model according to json scheme when it will be defined */
    const tariff = data.find((planTariff: any) => parseInt(planTariff.typeClassifier && planTariff.typeClassifier.code) === 0) || defaultValues.SubTariffPlanProduct
    return {
        name: tariff.name || null,
        typeClassifier: tariff.typeClassifier || null,
        startDate: tariff.openDate && util.isValidDate(tariff.openDate.toString()) ? new Date(tariff.openDate) : null,
        endDate: tariff.closeDate && util.isValidDate(tariff.closeDate.toString()) ? new Date(tariff.closeDate) : null,
    }
}
export const PAYMENT_ACCOUNT_PRODUCT_PACKAGE_TO_PACKAGE = (packageList: any,): Models.SubPackageProduct => {
    const packageActive = packageList.find((packageProduct: any) => packageProduct.isActive) || defaultValues.SubPackageProduct
    return {
        name: packageActive.name || null,
        advancingPeriod: packageActive.advancingPeriod || null,
        isActive: packageActive.isActive || false,
        startDate: packageActive.startDate && util.isValidDate(packageActive.startDate.toString()) ? new Date(packageActive.startDate) : null,
        endDate: packageActive.endDate && util.isValidDate(packageActive.endDate.toString()) ? new Date(packageActive.endDate) : null,
        serviceList: Array.isArray(packageActive.service) ? PAYMENT_ACCOUNT_PRODUCT_SERVISE_TO_SERVISE_LIST(packageActive.service) : []
    }
}
const PAYMENT_ACCOUNT_PRODUCT_SERVISE_TO_SERVISE_LIST = (data: any): Models.SubPackageProduct_Service[] => (
    data.map((value: any): Models.SubPackageProduct_Service => (
        {name: value.name || null}))
)

export const PAYMENT_ACCOUNT_PRODUCT_CARD_INDEX_TO_CARD_INDEX = (data: any): Models.PaymentAccountProductCardIndex => {

    if (typeof data != 'object') {

        throw new Error (`Invalid payment account card index data ${ JSON.stringify (data) }`)

    }

    try {

        return {

            name: data.name,
            isActiveAgreement: typeof data.isActiveAgreement == 'boolean' ? data.isActiveAgreement : false,
            accountInfoList: Array.isArray(data.accountsInfo) ? data.accountsInfo.compact ().map ((item: Models.PaymentAccountProductCardIndexInfo) => (
                PAYMENT_ACCOUNT_PRODUCT_CARD_INFO_LIST_TO_CARD_INFO_LIST (item))
            ) : [],

        }

    } catch (e) {

        throw e

    }

}

export const PAYMENT_ACCOUNT_PRODUCT_CARD_INFO_LIST_TO_CARD_INFO_LIST = (data: any): Models.PaymentAccountProductCardIndexInfo => {

    if (typeof data != 'object') {

        throw new Error (`Invalid card index account info data ${ JSON.stringify (data) }`)

    }

    try {

        return {

            sum: (typeof data.sum == 'number') ? data.sum : null,
            currency: (typeof data.currencyClassifier == 'object') ? CLASSIFIER_TO_CLASSIFIER (data.currencyClassifier) : defaultValues.Classifier,
            paymentRest: (typeof data.paymentRest == 'number') ? data.paymentRest : null,

        }

    } catch (e) {

        throw e

    }

}

export const PAYMENT_ACCOUNT_PRODUCT_OPERATION_TO_OPERATION = (data: any): Models.PaymentAccountProductOperation => {

    try {

        if (typeof data != 'object') {

            throw new Error (`Invalid payment account operation data type ${ JSON.stringify (data) }`)

        }

        return {

            sum: (typeof data.sum == 'number') ? data.sum : null,
            sumRelativeToCurrency: (typeof data.sumNT == 'number') ? data.sumNT : null,
            correspondent: (typeof data.correspondent == 'string') ? data.correspondent : null,
            currency: (typeof data.currencyClassifier == 'object') ? CLASSIFIER_TO_CLASSIFIER (data.currencyClassifier) : null,
            purpose: (typeof data.opPurpose == 'string') ? data.opPurpose : null,
            isLedgerDebitSide: (typeof data.opType == 'string') ? (

                (data.opType == 'DebitsOnly') ? true : ((data.opType == 'CreditsOnly') ? false : null)

            ) : null,

            date: (typeof data.operDate == 'string') ? (

                (typeof data.operTime == 'string') ?  new Date (

                    `${ data.operDate }T${ data.operTime }Z`

                ) : new Date (data.operDate)

            ) : null,

        }

    } catch (e) {

        throw e

    }

}


/* End of Payment Account Product converters */

export const REQUEST_CURRENT_CUSTOMED_MANAGED_TO_CLIENTS_LIST = (agent: Models.Agent, data: Models.CustomerManaged): Models.AgentClientList => {
    if (agent.isPrincipal) {
        return {
            data: [{
                position: '',
                client: {
                    id: data.id
                },
                relationClassifier: {
                    code: 'Main Contact',
                    value: 'Основной контакт',
                    classifierName: 'SBRF_CONTACT_TYPE_GROUP'
                }
            }]
        }
    }
    return {
        data: [{
            position: '',
            client: {
                id: data.id
            },
            relationClassifier: {
                code: agent.customerPositionList.data[0].customerRelations.code,
                value: agent.customerPositionList.data[0].customerRelations.value,
                classifierName: agent.customerPositionList.data[0].customerRelations.name
            }
        }]
    }
}

export const REQUEST_CLIENTS_TO_CLIENTS_LIST = (data: Models.AgentCustomerPositionList, agent: Models.Agent, customer: Models.CustomerManaged): Models.AgentClientList => {
    return data.data.reduce((result: Models.AgentClientList, item) => {
        if (agent.isPrincipal && item.customerId == customer.id) {
            result.data.push(CONVERT_AGENT_CUSTOMER_POSITION_TO_AGENT_CLIENT_WITH_RELATION(item, {
                code: 'Main Contact',
                value: 'Основной контакт',
                classifierName: 'SBRF_CONTACT_TYPE_GROUP'
            }))
        } else {
            result.data.push(CONVERT_AGENT_CUSTOMER_POSITION_TO_AGENT_CLIENT(item))
        }
        return result
    }, {data: []})
}

export const CONVERT_TEAM_TO_AGENT_CLIENT = (data: Models.MemberList): Array<Models.TeamMemeber> => {
    return data.data.reduce((result: Array<Models.TeamMemeber>, item) => {
        result.push({
            member: {
                person: {
                    firstName: item.firstName,
                    lastName: item.lastName,
                    middleName: item.middleName,
                    phones: [{}]
                },
                positionId: item.id,
                positionName: item.positionName
            },
            isGeneral: true,
            isBlocked: false
        })
        return result
    }, [])

}

export const CONVERT_AGENT_CUSTOMER_POSITION_TO_AGENT_CLIENT_WITH_RELATION = (data: Models.AgentCustomerPosition, relationClassifier: Models.ClassifierRequest): Models.AgentClient => {
    return {
        position: data.position ? data.position : '',
        relationClassifier: relationClassifier,
        client: {
            id: data.customerId
        }
    }
}

export const CONVERT_AGENT_CUSTOMER_POSITION_TO_AGENT_CLIENT = (data: Models.AgentCustomerPosition): Models.AgentClient => {
    return {
        position: data.position ? data.position : '',
        relationClassifier: {
            code: data.customerRelations && data.customerRelations.code ? data.customerRelations.code : '',
            value: data.customerRelations && data.customerRelations.value ? data.customerRelations.value : '',
            classifierName: data.customerRelations && data.customerRelations.name ? data.customerRelations.name : ''
        },
        client: {
            id: data.customerId
        }
    }
}

export const REQUEST_PHONE_LIST_TO_PHONE_LIST = (data: Models.PhoneNumberList): Array<any> => {
    return data.data.reduce((result: Array<any>, item) => {
        result.push({type: item.type})
        return result
    }, [])
}


export const RESPONSE_APP_CRM_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST = (data: any): Models.CustomerManagedList => {



    let resultList: Models.CustomerManagedList = data.clients.reduce((result: Models.CustomerManagedList, item: any) => {

        result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
        return result
    }, {data: [], isCompleted: false})

    resultList.isCompleted = data && data.page && data.page.isLast

    return resultList


}
export const RESPONSE_APP_CRM_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST_PAGE = (data: any): Models.CustomerManagedListPage => {



    // TODO Convert response data to corresponding model.
    // TODO Convert isLast value.

    let resultList: Models.CustomerManagedListPage = data.clients.reduce((result: Models.CustomerManagedList, item: any) => {

        result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
        return result
    }, {data: [], isLast: false})

    resultList.isLast = data && data.page && data.page.isLast

    return resultList


}
export const RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerList => {



    let resultList: Models.CustomerList = data.clients.reduce((result: Models.CustomerManagedList, item: any) => {

        result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
        return result
    }, {data: [], isCompleted: false})

    resultList.isCompleted = data && data.page && data.page.isLast

    return resultList


}
export const RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE = (data: any): Models.CustomerListPage => {



    // TODO Convert response data to corresponding model.
    // TODO Convert isLast value.

    let resultList: Models.CustomerListPage = data.clients.reduce((result: Models.CustomerManagedList, item: any) => {

        result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
        return result
    }, {data: [], isLast: false})

    resultList.isLast = data && data.page && data.page.isLast

    return resultList


}
export const RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN = (data: any): Models.CustomerUnknown => {

    const clientCard = data.clientCard
    try {
        return {
            hierarchy: data.hierarchy || [],
            id: clientCard.id,
            affiliateList: data.child ? {
                data: data.child.map((item: any) => RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item)),
                isCompleted: true
            } : null,
            name: clientCard.name,
            shortName: clientCard.shortName,
            role: CLASSIFIER_TO_CLASSIFIER(clientCard.roleClassifier),
            legalForm: CLASSIFIER_TO_CLASSIFIER(clientCard.legalFormClassifier),
            organizationType: CLASSIFIER_TO_CLASSIFIER(clientCard.orgTypeClassifier),
            isNSL: clientCard.isNSL,
            isHolding: clientCard && util.isTypeOrganizationHolding(clientCard.orgTypeClassifier),
            isOldNkp: clientCard.isOldNKP || false,
            isTempBlockedForOppty: clientCard.isTempBlockedForOppty || false,
            isExistPrimaryAddress: clientCard.isExistPrimaryAddress || false,
            modId: clientCard.modId,
            memberList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TEAMPERSON_TO_TEAMMEMBER(clientCard.teamPersons),

            segment: CLASSIFIER_TO_CLASSIFIER(clientCard.segment),
            category: CLASSIFIER_TO_CLASSIFIER(clientCard.category),
            status: CLASSIFIER_TO_CLASSIFIER(clientCard.custStatusCode),
            holder: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(clientCard.vko ? clientCard.vko : null),
            curator: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(clientCard.KM ? clientCard.KM : null),
            gsz: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ(clientCard.gsz),
            partnership: CLASSIFIER_TO_CLASSIFIER(clientCard.partnership),
            rating: clientCard.rating ? {
                approvalDate: clientCard.rating.approvalDate ? util.parseServerDate(clientCard.rating.approvalDate) : null,
                value: clientCard.rating.value,
            } : null,
            registrationCountry: clientCard.orgRegCountry,
            troubleGroup: CLASSIFIER_TO_CLASSIFIER(clientCard.troubleGroup),
            //FIXME Remove any.  troubleCriteriaList: [], //troubleCriterias
            troubleCriteriaList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TROUBLE_CRITERION(clientCard.troubleCriterias ? clientCard.troubleCriterias : null),
            ownerList: RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_SHAREHOLDER_TO_OWNER_LIST(clientCard.shareholders, clientCard.beneficiaries),
            sector: CLASSIFIER_TO_CLASSIFIER(clientCard.sector),
            resident: CLASSIFIER_TO_CLASSIFIER(clientCard.residentExt),
            kindOfIndustry: CLASSIFIER_TO_CLASSIFIER(clientCard.kindOfIndustry),
            kpp: clientCard.kpp,
            inn: clientCard.inn,
            kio: clientCard.kio,
            occasionList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_IMPDATES_TO_OCCASION_LIST(clientCard.impDates), //{data: []}, //impDates
            agentList: {data: []}, //agents
            noteList: {data: []}, //notes
            anchorOrganisation: clientCard.accOrg,
            supervisingDepartment: clientCard.accCurDept,
            address: RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(clientCard.address),
            priority: CLASSIFIER_TO_CLASSIFIER(clientCard.priority)
        }
    }catch (error) {
        throw error
    }
}
export const RESPONSE_CUSTOMER_CALL_GET_LIMIT_NEW_TO_LIMIT = (data: any): Models.Limit => {

    if (data && data.limit.log && Array.isArray(data.limit.log) && data.limit.log.length > 0) {
        const typeError = data.limit.log.find((item: any) => item.type === 'E')
        if (typeError) {
            throw {
                type: Enums.ErrorType.NetworkError,
                code: TIMEOUT_STRING_CODE,
                message: 'Timeout error',
                comment: ''
            }
        }
    }

    const lv = (limitTypeCode: string, limitVersionCode: string) => {
        let findResult =data.limit.limitData
        .find(({limitHead}: any) => limitHead.limitType.code === limitTypeCode &&
            limitHead.limitVersion.code === limitVersionCode)
        return findResult ? findResult.limitValues : null
    }

    const val = lv('L01', 'VCL')

	const LimitAmount = (value: any): number | null => value && value.LimitAmount ? +value.LimitAmount : null
	const LimitUtilAmount = (value: any): number | null => value && value.LimitUtilAmount ? +value.LimitUtilAmount : null
	const LimitAmountFree = (value: any): number | null => value && value.LimitAmountFree ? +value.LimitAmountFree : null

    return {
        currency: CLASSIFIER_TO_CLASSIFIER({
          code: val !== null ? val.LimitAmountCurrencyISO : '',
          value: val !== null ? val.LimitAmountCurrencyISO : '',
        }),
        total: {
			amount: LimitAmount(val),
			operationalRisk: LimitAmount(lv('L11', 'VCL')),
			unifiedTransactions: LimitAmount(lv('L12', 'VCL')),
			projectFinancing: LimitAmount(lv('L13', 'VCL')),
			risklessTransactions: LimitAmount(lv('L14', 'VCL')),
			strategicRisk: LimitAmount(lv('L15', 'VCL')),
			tradeRiskTransactions: LimitAmount(lv('L16', 'VCL')),
			portfolioRisk: LimitAmount(lv('L17', 'VCL')),
        },
        totalApproved: {
            amount: LimitAmount(lv('L01', 'APR')),
            operationalRisk: LimitAmount(lv('L11', 'APR')),
            unifiedTransactions: LimitAmount(lv('L12', 'APR')),
            projectFinancing: LimitAmount(lv('L13', 'APR')),
            risklessTransactions: LimitAmount(lv('L14', 'APR')),
            strategicRisk: LimitAmount(lv('L15', 'APR')),
            tradeRiskTransactions: LimitAmount(lv('L16', 'APR')),
            portfolioRisk: LimitAmount(lv('L17', 'APR')),
        },
        used: {
			amount: LimitUtilAmount(lv('L01', 'VCL')),
			operationalRisk: LimitUtilAmount(lv('L11', 'VCL')),
			unifiedTransactions: LimitUtilAmount(lv('L12', 'VCL')),
			projectFinancing: LimitUtilAmount(lv('L13', 'VCL')),
			risklessTransactions: LimitUtilAmount(lv('L14', 'VCL')),
			strategicRisk: LimitUtilAmount(lv('L15', 'VCL')),
			tradeRiskTransactions: LimitUtilAmount(lv('L16', 'VCL')),
			portfolioRisk: LimitUtilAmount(lv('L17', 'VCL')),
		},
        unused: {
			amount: LimitAmountFree(lv('L01', 'VCL')),
			operationalRisk: LimitAmountFree(lv('L11', 'VCL')),
			unifiedTransactions: LimitAmountFree(lv('L12', 'VCL')),
			projectFinancing: LimitAmountFree(lv('L13', 'VCL')),
			risklessTransactions: LimitAmountFree(lv('L14', 'VCL')),
			strategicRisk: LimitAmountFree(lv('L15', 'VCL')),
			tradeRiskTransactions: LimitAmountFree(lv('L16', 'VCL')),
			portfolioRisk: LimitAmountFree(lv('L17', 'VCL')),
		},
    }


}

export const RESPONSE_CUSTOMER_CALL_GET_LIMIT_OLD_TO_LIMIT_OLD = (data: any): Models.LimitOld => {

    if (data && data.limit.log && Array.isArray(data.limit.log) && data.limit.log.length > 0) {
        const typeError = data.limit.log.find((item: any) => item.type === 'E')
        if (typeError) {
            throw {
                type: Enums.ErrorType.NetworkError,
                code: TIMEOUT_STRING_CODE,
                message: 'Timeout error',
                comment: ''
            }
        }
    }

    const lv = (limitTypeCode: string, limitVersionCode: string) => {
        let findResult =data.limit.limitData
            .find(({limitHead}: any) => limitHead.limitType.code === limitTypeCode &&
            limitHead.limitVersion.code === limitVersionCode)
        return findResult ? findResult.limitValues : null
    }

    const val = lv('L01', 'VCL')

    const LimitAmount = (value: any): number => value && +value.LimitAmount
    const LimitUtilAmount = (value: any): number => value && +value.LimitUtilAmount
    const LimitAmountFree = (value: any): number => value && +value.LimitAmountFree

    const amount = {
        amount: LimitAmount(val),
        structured: LimitAmount(lv('L04', 'VCL')),
        unified: LimitAmount(lv('L02', 'VCL')),
    }

    const predictedAmount = {
        amount: LimitUtilAmount(val),
        structured: LimitUtilAmount(lv('L04', 'VCL')),
        unified: LimitUtilAmount(lv('L02', 'VCL'))
    }

    const unusedAmount = {
        amount: LimitAmountFree(val),
        structured: LimitAmountFree(lv('L04', 'VCL')),
        unified: LimitAmountFree(lv('L02', 'VCL'))
    }

    const amountApproved = {
        amount: LimitAmount(lv('L01', 'APR')),
        structured: LimitAmount(lv('L04', 'APR')),
        unified: LimitAmount(lv('L02', 'APR')),
    }

    return {
        currency: CLASSIFIER_TO_CLASSIFIER({
            code: val != null ? val.LimitAmountCurrencyISO : '',
            value: val != null ? val.LimitAmountCurrencyISO : ''
        }),
        amountApproved: amountApproved,
        amount,
        amountPredicted: predictedAmount,
        amountUnused: unusedAmount,
    }
    // })


}

export const VALIDATE_NUMBER_VALUE = (data: any): null | number =>
    ((isNaN(data)) || (data == null) ? null : Number(data))

export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_CREDIT_PRODUCT_LIST_TO_CREDIT_PRODUCT_LIST = (data: any): Models.CreditProductList => {

    const creditProductList = Array.isArray(data.credits) ? data.credits.map((item: any): Models.CreditProduct => {
        const creditProduct = {
            openDate: util.parseServerDate(item.openDate),
            id: item.id || null,
            status: item.status || null,
            contractId: item.contractId || null,
            nameClassifier: CLASSIFIER_TO_CLASSIFIER(item.nameClassifier),
            closeDate: util.parseServerDate(item.closeDate),
            sum: VALIDATE_NUMBER_VALUE(item.sum),
            debtSum: VALIDATE_NUMBER_VALUE(item.debtSum),
            contractNumber: item.contractNumber || null,
            rate: VALIDATE_NUMBER_VALUE(item.rate),
            term: VALIDATE_NUMBER_VALUE(item.term),
            currencyClassifier: CLASSIFIER_TO_CLASSIFIER(item.currencyClassifier),
            isActiveAgreement: item.isActiveAgreement || false,
            forecastDealId: null,
            forecastEventList: {data: []},
            forecastEventListCachedDate: null,
        }

        return {
            productType: Enums.ProductType.CreditProduct,
            creditProduct, // Property shorthand. Means "creditProduct: creditProduct,"
            bankGuaranteeProduct: null,
        }

    }) : []
    const bankGaranreeProductList = Array.isArray(data.bankGuarantees) ? data.bankGuarantees.map((item: any): Models.CreditProduct => {
        const bankGaranreeProduct = {
            id: item.id || null,
            contractId: item.contractId || null,
            contractStatus: item.contractStatus || null,
            contractOpenDate: util.parseServerDate(item.contractOpenDate),
            contractNumber: item.contractNumber || null,
            term: VALIDATE_NUMBER_VALUE(item.term),
            type: item.type || null,
            sum: VALIDATE_NUMBER_VALUE(item.sum),
            currencyClassifier: CLASSIFIER_TO_CLASSIFIER(item.currencyClassifier),
            openDate: util.parseServerDate(item.openDate),
            endDate: util.parseServerDate(item.endDate),
            isActiveAgreement: item.isActiveAgreement || false,
        }

        return {
            productType: Enums.ProductType.BankGuaranteeProduct,
            creditProduct: null,
            bankGuaranteeProduct: bankGaranreeProduct,
        }

    }) : []

    return {
        data: creditProductList.concat(bankGaranreeProductList),
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: util.parseServerDate(data.lastUpdateDate),
        pollingError: null,
        operationUuid: data.operationId
    }

}

export const RESPONSE_CREDIT_CALL_GET_FORECAST_EVENT_LIST_TO_FORECAST_EVENT_LIST = (data: any): Models.ForecastEventList => {

    return Array.isArray(data) ? { data: data.map((item: any) : Models.ForecastEvent => {
        return {
            comment: item.note,
            currency: item.currency,
            email: item.userMail,
            eventCreationDate: util.parseServerDate(item.dateChange),
            eventType: item.eventType,
            execSum: item.execSum,
            forecastSum: secureParseFloat(item.expSum),
            id: item.eventId,
            plannedEventDate: util.parseServerDate(item.expDate),
            possibility: item.probability,
            productNum: item.productNum,
        }
    })} : defaultValues.ForecastEventList
}

export const RESPONSE_CREDIT_CALL_GET_PAYMENT_SCHEDULE_LIST_TO_PAYMENT_SCHEDULE_LIST = (data: any): Models.PaymentScheduleList => {

  let resultList : Models.PaymentSchedule[] = []
  Array.isArray(data.scheduleRepayment) && data.scheduleRepayment && data.scheduleRepayment.map((item: any) : void => {
      resultList.push({
          credContractID: item.CredContractId || null,
          operType: item.operType || null,
          operID: item.operId || null,
          isExec: item.isExec || null,
          operDate: util.parseServerDate(item.operDate),
          chargeBegin: util.parseServerDate(item.chargeBegin),
          chargeEnd: util.parseServerDate(item.chargeEnd),
          operName: item.operName || null,
          operCode: util.getPaymentScheduleOperCode(item.operCode),
          operSum: secureParseFloat(item.operSum),
          operCurrency: CLASSIFIER_TO_CLASSIFIER(item.currencyClassifier),
          status: item.status || null,
          lastSynchDateTime: util.parseServerDate(data.lastUpdateDate),

      })})
  return (resultList.length > 0) ? { data: resultList } : { ...defaultValues.PaymentScheduleList}
}

export const RESPONSE_CREDIT_CALL_GET_PAYMENT_SCHEDULE_LIST_TO_PAYMENT_SCHEDULE_DATA_LIST = (data:Models.PaymentScheduleFilters): Models.PaymentScheduleFilters => {
    return data
}

export const RESPONSE_CREDIT_CALL_GET_FORECAST_DEAL_LIST_TO_FORECAST_DEAL_LIST = (data: any): Models.ForecastDealList => {

    return Array.isArray(data.forecasts) ? { data: data.forecasts.map((item: any) : Models.ForecastDeal => {
            return {
                id: item.forecastID,
                customer: item.orgID,
                creditId: item.productID,
                productType: item.productType,
                currency: item.currency,
                dateBegin: item.dateBegin,
                status: item.status
            }
        })} : defaultValues.ForecastDealList

}

export const RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_GRANTING_FROM_FORECAST_EVENT_REQUEST = (data: Models.ForecastEventGrantingCreateRequest): any => {

    const customer = data.customer
    const expSum = VALIDATE_NUMBER_VALUE(data.forecastSum)
    const plannedEventDate = util.convertToUTCDateFormat(data.plannedEventDate)

    return {
        forecastID: data.forecastDealId,
        expDate: plannedEventDate,
        dateBegin: plannedEventDate,
        dateEnd: plannedEventDate,
        eventType: {
            classifierName: "UFS_FC_EVENT_TYPE",
            value: "Выдача кредита",
            code: "ВЫДАЧА_K_Т"
        },
        eventStatus: {
            classifierName: 'UFS_FC_STATUS',
            value: 'Активно',
            code: 'FC_AKTIV',
        },
        execEventState: {
            classifierName: 'UFS_FC_STATUS_EXEC',
            value: 'Не реализовано',
            code: 'FC_NOT_REAL'
        },
        currency: {
            classifierName: "CURRENCY",
            value: data.currency && data.currency.value ? data.currency.value : "Рубль",
            code: data.currency && data.currency.code ? data.currency.code : "RUR"
        },
        expSum: expSum,
        probability: data.possibility,
        note: data.comment,
        userIdCRM: customer.id,
        userFIO: util.getFullNameRepresentation({
            firstName: customer.firstName,
            middleName: customer.middleName,
            lastName: customer.lastName,
        }),
        userMail: data.email
    }
}

export const RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_REPAYMENT_FROM_FORECAST_EVENT_REQUEST = (data: Models.ForecastEventRepaymentCreateRequest): any => {

    const customer = data.customer
    const earlyPayDate = util.convertToUTCDateFormat(data.earlyPayDate)

    let result = {
        forecastID: data.forecastDealId,
        earlyPayDate: earlyPayDate,
        allPay: data.isAllPay,
        partPay: !data.isAllPay,
        probability: data.possibility,
        userIdCRM: customer.id,
        userFIO: util.getFullNameRepresentation({
            firstName: customer.firstName,
            middleName: customer.middleName,
            lastName: customer.lastName,
        }),
        userMail: data.email,
        note: data.comment
    }

    if( !data.isAllPay ) {
        // Here if not "Полное досрочное погашение"
        result = {
            ...result,
            partPaySum: VALIDATE_NUMBER_VALUE(data.forecastSum)
        }
    }

    return result

}

export const RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_UPDATE_FROM_FORECAST_EVENT_REQUEST = (data: Models.ForecastEventUpdateRequest): any => {

    const customer = data.customer
    const expSum = VALIDATE_NUMBER_VALUE(data.forecastSum)
    const plannedEventDate = util.convertToUTCDateFormat(data.plannedEventDate)

    return {
        type: 'edit',
        forecastID: data.forecastDealId,
        eventId: data.eventId,
        expDate: plannedEventDate,
        dateBegin: plannedEventDate,
        dateEnd: plannedEventDate,
        eventType: {
            classifierName: "UFS_FC_EVENT_TYPE",
            value: data.eventType && data.eventType.value,
            code: data.eventType && data.eventType.code
        },
        currency: {
            classifierName: "CURRENCY",
            value: data.currency && data.currency.value ? data.currency.value : "Рубль",
            code: data.currency && data.currency.code ? data.currency.code : "RUR"
        },
        expSum,
        probability: data.possibility,
        note: data.comment,
        userIdCRM: customer.id,
        userFIO: util.getFullNameRepresentation({
            firstName: customer.firstName,
            middleName: customer.middleName,
            lastName: customer.lastName,
        }),
        userMail: data.email
    }
}

export const RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_DELETE_FROM_FORECAST_EVENT_REQUEST = (data: Models.ForecastEventUpdateRequest): any => {

    const customer = data.customer
    const expSum = VALIDATE_NUMBER_VALUE(data.forecastSum)
    const plannedEventDate = util.convertToUTCDateFormat(data.plannedEventDate)

    return {
        type: 'del',
        forecastID: data.forecastDealId,
        eventId: data.eventId,
        expDate: plannedEventDate,
        dateBegin: plannedEventDate,
        dateEnd: plannedEventDate,
        eventType: {
            classifierName: "UFS_FC_EVENT_TYPE",
            value: data.eventType && data.eventType.value,
            code: data.eventType && data.eventType.code
        },
        currency: {
            classifierName: "CURRENCY",
            value: data.currency && data.currency.value ? data.currency.value : "Рубль",
            code: data.currency && data.currency.code ? data.currency.code : "RUR"
        },
        expSum,
        probability: data.possibility,
        note: data.comment,
        userIdCRM: customer.id,
        userFIO: util.getFullNameRepresentation({
            firstName: customer.firstName,
            middleName: customer.middleName,
            lastName: customer.lastName,
        }),
        userMail: data.email
    }
}

export const RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_CREATE_TO_BOOLEAN = (data: Models.ForecastEventRepaymentCreateRequest): any => {

    return defaultValues.ForecastDealList
}

export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_SETTLEMENT_AGREEMENT_PRODUCT_LIST_TO_SETTLEMENT_AGREEMENT_PRODUCT_LIST = (data: any): Models.SettlementAgreementProductList => {


    const setProductPaymentAccountRestrictionType = (name: string): Enums.ClientProductPaymentAccountRestrictionType => {
        switch (name) {
            case "Банкротство":
                return Enums.ClientProductPaymentAccountRestrictionType.InsolvencyAccount
            case "Минимальный остаток по счету":
                return Enums.ClientProductPaymentAccountRestrictionType.MinAccountSumContract
            default :
                return Enums.ClientProductPaymentAccountRestrictionType.DefaultRestrictionType
        }
    }
    const paymentAccountList = Array.isArray(data.paymentAccounts) ? data.paymentAccounts.map((item: any): Models.SettlementAgreementProduct => {
        return {
            productType: Enums.ProductType.PaymentAccountProduct,
            paymentAccountProduct: REQUEST_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PAYMENT_ACCOUNT_PRODUCT_TO_PAYMENT_ACCOUNT_PRODUCT(item),
            packageProduct: null,
            tariffPlanProduct: null,
            customsPaymentProduct: null,
            cashManagementProduct: null,
        };
    }) : []

    const packageProductList = Array.isArray(data.paymentAccounts) ?
        data.paymentAccounts.map((item: any): Models.SettlementAgreementProduct =>
            Array.isArray(item.packages) && item.packages.length > 0 ?
                item.packages
                    .map((packageProduct: any): Models.SettlementAgreementProduct =>
                        ({
                            productType: Enums.ProductType.PackageProduct,
                            paymentAccountProduct: null,
                            packageProduct: {
                                name: packageProduct.name || null,
                                advancingPeriod: Number(packageProduct.advancingPeriod) || null,
                                startDate: util.parseServerDate(packageProduct.startDate),
                                endDate: util.parseServerDate(packageProduct.endDate),
                                serviceList: Array.isArray(packageProduct.service) ? packageProduct.service : [],
                                isActive: packageProduct.isActive || false,
                            },
                            tariffPlanProduct: null,
                            customsPaymentProduct: null,
                            cashManagementProduct: null,
                        })) : []
    ).reduce((firstArray: any, secondArray: any):Models.SettlementAgreementProduct[] => firstArray.concat(secondArray), []) : null

    const tariffPlanProductList = Array.isArray(data.paymentAccounts) ? data.paymentAccounts
        .map((item: any): Models.SettlementAgreementProduct[] =>
         Array.isArray(item.tariffPlans) && item.tariffPlans.length > 0 ?
            item.tariffPlans
                .map((tarif: any): Models.SettlementAgreementProduct =>
                ({
                    productType: Enums.ProductType.TariffPlanProduct,
                    paymentAccountProduct: null,
                    packageProduct: null,
                    tariffPlanProduct: {
                        typeClassifier: CLASSIFIER_TO_CLASSIFIER(tarif.typeClassifier),
                        startDate: util.parseServerDate(tarif.openDate),
                        endDate: util.parseServerDate(tarif.closeDate),
                        name: tarif.name || null,
                    },
                    customsPaymentProduct: null,
                    cashManagementProduct: null,
                })) : []
    ).reduce((firstArray: any, secondArray: any):Models.SettlementAgreementProduct[] => firstArray.concat(secondArray), []) : null


    const customsPaymentProductList = Array.isArray(data.customsPayments) ? data.customsPayments.map((item: any): Models.SettlementAgreementProduct => {
        return {
            productType: Enums.ProductType.CustomsPaymentProduct,
            paymentAccountProduct: null,
            packageProduct: null,
            tariffPlanProduct: null,
            customsPaymentProduct: {
                id: item.id || null,
                additionalContractNumber: item.additionalContractNumber || null,
                additionalContractDate: util.parseServerDate(item.additionalContractDate),
                account: item.account || null,
                isActiveAgreement: item.isActiveAgreement || false,
            },
            cashManagementProduct: null,
        };
    }) : []

    const cashManagementProductList = Array.isArray(data.cashManagements) ? data.cashManagements.map((item: any): Models.SettlementAgreementProduct => {
        return {
            productType: Enums.ProductType.CashManagementProduct,
            paymentAccountProduct: null,
            packageProduct: null,
            tariffPlanProduct: null,
            customsPaymentProduct: null,
            cashManagementProduct: {
                id: item.id || null,
                contractNumber: item.contractNumber || null,
                contractStartDate: util.parseServerDate(item.contractStartDate),
                contractEndDate: util.parseServerDate(item.contractEndDate),
                tariffName: item.tariffName || null,
                isActiveAgreement: item.isActiveAgreement || false,
            },
        };
    }) : []

    return {
        data: paymentAccountList.concat(customsPaymentProductList, packageProductList, tariffPlanProductList, cashManagementProductList),
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        pollingStatus: util.getProductListPollingStatus(data.status),
        pollingError: null,
        operationUuid: data.operationId
    };
}

export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_DEPOSIT_PRODUCT_LIST_TO_DEPOSIT_PRODUCT_LIST = (data: any): Models.DepositProductList => {


    const productDepositList = (item: any) =>
        ({
            id: item.id || null,
            dealNum: item.dealNum || null,
            dealStatusDesc: item.dealStatusDesc || null,
            acctId: item.acctId || null,
            depositTypeClassifier: CLASSIFIER_TO_CLASSIFIER(item.depositTypeClassifier),
            planStartDate: util.parseServerDate(item.planStartDate),
            dealPeriodStartDate: util.parseServerDate(item.dealPeriodStartDate),
            dealPeriodDuration: VALIDATE_NUMBER_VALUE(item.dealPeriodDuration),
            dealPeriodEndDate: item.dealPeriodEndDate && util.isValidDate(item.dealPeriodEndDate.toString()) ? new Date (item.dealPeriodEndDate) : null,
            depositAmount: VALIDATE_NUMBER_VALUE(item.depositAmount),
            depositAmountRest: VALIDATE_NUMBER_VALUE(item.depositAmountRest),
            rate: VALIDATE_NUMBER_VALUE(item.rate),
            depAccCloseDate: item.depAccCloseDate && util.isValidDate(item.depAccCloseDate.toString()) ? new Date(item.depAccCloseDate) : null,
            currencyClassifier: CLASSIFIER_TO_CLASSIFIER(item.depositCurrencyClassifier),
            depositRestCurrency: item.depositRestCurrency || null,
            bankInfo: item.regionId ||
                      item.agencyId ||
                      item.branchId ? `${item.regionId ? item.regionId : ' - '}/` +
                                        `${item.agencyId ? item.agencyId : ' - '}/` +
                                        `${item.branchId ? item.branchId : ' - '}` :
                                     null,
            isActiveAgreement: item.isActiveAgreement || false,
        })
    const listDepositProduct = data && Array.isArray(data.deposits) ? data.deposits.map((item: any): Models.DepositProduct => ({
        productType: Enums.ProductType.DepositProduct,
        depositProduct: productDepositList(item),
        contractSDO: null,
        contractNSO: null,
    })) : [];
    const listContcatNSOProduct = Array.isArray(data.contractNSO) ? data.contractNSO.map((item: any): Models.DepositProduct => ({
        productType: Enums.ProductType.ContractNsoProduct,
        depositProduct: null,
        contractSDO: null,
        contractNSO: productDepositList(item),
    })) : [];

    const listContcatSDOProduct = Array.isArray(data.contractSDO) ? data.contractSDO.map((item: any): Models.DepositProduct => ({
        productType: Enums.ProductType.ContractSdoProduct,
        depositProduct: null,
        contractSDO: productDepositList(item),
        contractNSO: null,
    })) : [];

    return {
        data: listDepositProduct.concat(listContcatNSOProduct, listContcatSDOProduct),
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        pollingError: null,
        operationUuid: data.operationId
    };


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_CORPORATE_CARD_PRODUCT_LIST_TO_CORPORATE_CARD_PRODUCT_LIST = (data: any): Models.CorporateCardProductList => {

    return {
        data: Array.isArray(data.corporateCards) ? data.corporateCards.map((item: any): Models.CorporateCardProduct => (
            {
                productType: Enums.ProductType.CorporateCardProduct,
                corporateCardProduct: {
                    id: item.id || null,
                    status: item.status || null,
                    openDate: util.parseServerDate(item.openDate),
                    cardNumber: item.cardNumber || null,
                    typeClassifier: CLASSIFIER_TO_CLASSIFIER(item.typeClassifier),
                    paymentSystem: item.paymentSystem || null,
                    holder: item.holder || null,
                    endDate: util.parseServerDate(item.endDate),
                    isActiveAgreement: item.isActiveAgreement || false,
                }
            })) : [],
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_ENCASHMENT_CONTRACT_PRODUCT_LIST_TO_ENCASHMENT_CONTRACT_PRODUCT_LIST = (data: any): Models.EncashmentContractProductList => {

    const encashmentContractProduct = Array.isArray(data.encashments) ? data.encashments.map((item: any): Models.EncashmentContractProduct => {
        const encashment = {
            id: item.id || null,
            currentStatus: item.currentStatus || null,
            signedDate: util.parseServerDate(item.signedDate),
            finishDate: util.parseServerDate(item.finishDate),
            agreementNumber: item.agreementNumber || null,
            agreementType: item.agreementType || null,
            isActiveAgreement: item.isActiveAgreement || false,
            lastMonthTransCount: VALIDATE_NUMBER_VALUE(item.lastMonthTransCount)
        }
        return {
            productType: Enums.ProductType.EncashmentProduct,
            encashmentContractProduct: encashment,
            selfEncashmentContractProduct: null,
        };
    }) : []
    const selfEncashmentContractProduct = Array.isArray(data.selfEncashments) ? data.selfEncashments.map((item: any): Models.EncashmentContractProduct => {
        const selfEncashment = {
            id: item.id || null,
            agreementNumber: item.agreementNumber || null,
            signedDate: util.parseServerDate(item.signedDate),
            finishDate: util.parseServerDate(item.finishDate),
            startDate: util.parseServerDate(item.startDate),
            mounthTurn: VALIDATE_NUMBER_VALUE(item.mounthTurn),
            agreementType: item.agreementType || null,
            currencyClassifier: CLASSIFIER_TO_CLASSIFIER(item.currencyClassifier),
            isActiveAgreement: item.isActiveAgreement || false
        }
        return {
            productType: Enums.ProductType.SelfEncashmentProduct,
            encashmentContractProduct: null,
            selfEncashmentContractProduct: selfEncashment,
        };
    }) : []
    return {
        data: encashmentContractProduct.concat(selfEncashmentContractProduct),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingStatus: util.getProductListPollingStatus(data.status),
        pollingError: null, operationUuid: data.operationId
    };


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_LEGAL_INFO_PRODUCT_LIST_TO_LEGAL_INFO_PRODUCT_LIST = (data: any): Models.LegalInfoProductList => {


    const legalInfoProductList = Array.isArray(data.currencyControl) ? data.currencyControl.map((item: any): Models.LegalInfoProduct => {
        return {
            productType: Enums.ProductType.CurrencyControlProduct,
            legalInfoProduct: {type: Number(item.type) > 0 ? true : false},
        };
    }) : []
    return {
        data: legalInfoProductList,
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_ACQUIRING_PRODUCT_LIST_TO_ACQUIRING_PRODUCT_LIST = (data: any): Models.AcquiringProductList => {

    const acquiringList = Array.isArray(data.acquiring) ? data.acquiring.map((item: any): Models.AcquiringProduct => {
        return {
            productType: Enums.ProductType.AcquiringProduct,
            acquiringProduct: {
                id: item.id || null,
                contractNumber: item.contractNumber || null,
                additionalContractList: Array.isArray(item.additionalContracts) ?
                    item.additionalContracts.map((value: any): Models.ProductAcquiring_AdditionalContract => (
                        {
                            number: value.number || null,
                            typeClassifier: CLASSIFIER_TO_CLASSIFIER(value.typeClassifier)
                        })) : [],
                terminalsCount: VALIDATE_NUMBER_VALUE(item.terminalsCount),
                openDate: util.parseServerDate(item.openDate),
                commissionList: item.commissions || null,
                isActiveAgreement: item.isActiveAgreemen || false,
				statusClassifier: CLASSIFIER_TO_CLASSIFIER(item.state),
            },
        };
    }) : []
    return {
        data: acquiringList,
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_DBO_PRODUCT_LIST_TO_DBO_PRODUCT_LIST = (data: any): Models.DboProductList => {

    const dboProductList = data && Array.isArray(data.dbo) ? data.dbo.map((item: any): Models.DboProduct => {
        return {
            productType: Enums.ProductType.DboProduct,
            dboProduct: {
                id: item.id || null,
                systemClassifier: CLASSIFIER_TO_CLASSIFIER(item.systemClassifier),
                number: item.number || null,
                status: item.status || null,
                openDate: util.parseServerDate(item.openDate),
                lastActionDate: util.parseServerDate(item.lastActionDate),
                endDate: util.parseServerDate(item.endDate),
                stopDate: util.parseServerDate(item.stopDate),
                resumeDate: util.parseServerDate(item.resumeDate),
                authorizedPerson: Array.isArray(item.authorizedPerson) ? item.authorizedPerson.map((value: any): string => value.toString()) : [],
                isActiveAgreement: item.isActiveAgreement || false,
            },
        };
    }) : []
    return {
        data: dboProductList,
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        pollingStatus: util.getProductListPollingStatus(data.status),
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }
}

export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_UDBO_PRODUCT_LIST_TO_UDBO_PRODUCT_LIST = (data: any): Models.UdboProductList => {

    const dboProductList = Array.isArray(data.contractConstructors) ? data.contractConstructors.map((item: any): Models.UdboProduct => {

        return {
            productType: Enums.ProductType.ContractConstructorProduct,
            udboProduct: {
                id: item.id || null,
                contractNum: item.contractNum || null,
                startDate: util.parseServerDate(item.startDate),
                attachedProducts: Array.isArray(item.attachedProducts) ? item.attachedProducts.map((tarif: any): Models.SubUdboProduct_AttachedProduct => ({
                    productType: tarif.productType || null,
                })) : [],
                isActiveAgreement: item.isActiveAgreement || false,
            }
        }
    }) : []
    return {
        data: dboProductList,
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }


}
export const RESPONSE_CUSTOMER_CALL_GET_REQUEST_SALARY_PRODUCT_LIST_TO_SALARY_PRODUCT_LIST = (data: any): Models.SalaryProductList => {


    const salaryProductList = Array.isArray(data.salary) ? data.salary.map((item: any): Models.SalaryProduct => {
        return {
            productType: Enums.ProductType.SalaryProduct,
            salaryProduct: {
                id: item.id || null,
                number: item.number || null,
                employeesCount: VALIDATE_NUMBER_VALUE(item.employeesCount),
                totalCards: VALIDATE_NUMBER_VALUE(item.totalCards),
                totalSum: VALIDATE_NUMBER_VALUE(item.totalSum),
                status: item.status || null,
            }
        };
    }) : []
    return {
        data: salaryProductList,
        pollingStatus: util.getProductListPollingStatus(data.status),
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingError: null, operationUuid: data.operationId
    }
}

export const RESPONSE_CUSTOMER_CALL_GET_CREDIT_PRODUCT_EKS_LIST_TO_CREDIT_PRODUCT_LIST = (data: any): Models.CreditProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_CREDIT_PRODUCT_LIST_TO_CREDIT_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_CARD_INDEX_PRODUCT_LIST_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_CREDIT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PRODUCT_EKS_LIST_TO_SETTLEMENT_AGREEMENT_PRODUCT_LIST = (data: any): Models.SettlementAgreementProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_SETTLEMENT_AGREEMENT_PRODUCT_LIST_TO_SETTLEMENT_AGREEMENT_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_DEPOSIT_PRODUCT_EKS_LIST_TO_DEPOSIT_PRODUCT_LIST = (data: any): Models.DepositProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_DEPOSIT_PRODUCT_LIST_TO_DEPOSIT_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_DEPOSIT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_CORPORATE_CARD_PRODUCT_EKS_LIST_TO_CORPORATE_CARD_PRODUCT_LIST = (data: any): Models.CorporateCardProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_CORPORATE_CARD_PRODUCT_LIST_TO_CORPORATE_CARD_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_CORPORATE_CARD_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_ENCASHMENT_CONTRACT_PRODUCT_EKS_LIST_TO_ENCASHMENT_CONTRACT_PRODUCT_LIST = (data: any): Models.EncashmentContractProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_ENCASHMENT_CONTRACT_PRODUCT_LIST_TO_ENCASHMENT_CONTRACT_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_ENCASHMENT_CONTRACT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_TO_LEGAL_INFO_PRODUCT_LIST = (data: any): Models.LegalInfoProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_LEGAL_INFO_PRODUCT_LIST_TO_LEGAL_INFO_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_ACQUIRING_PRODUCT_EKS_LIST_TO_ACQUIRING_PRODUCT_LIST = (data: any): Models.AcquiringProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_ACQUIRING_PRODUCT_LIST_TO_ACQUIRING_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_ACQUIRING_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_DBO_PRODUCT_EKS_LIST_TO_DBO_PRODUCT_LIST = (data: any): Models.DboProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_DBO_PRODUCT_LIST_TO_DBO_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_DBO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_UDBO_PRODUCT_EKS_LIST_TO_UDBO_PRODUCT_LIST = (data: any): Models.UdboProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_UDBO_PRODUCT_LIST_TO_UDBO_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_UDBO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_CALL_GET_SALARY_PRODUCT_EKS_LIST_TO_SALARY_PRODUCT_LIST = (data: any): Models.SalaryProductList => {
    return RESPONSE_CUSTOMER_CALL_GET_REQUEST_SALARY_PRODUCT_LIST_TO_SALARY_PRODUCT_LIST(data)
}

export const REQUEST_CUSTOMER_CALL_GET_SALARY_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST = (data: Models.EksErrorList): any => {
    return REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
}

export const RESPONSE_CUSTOMER_EDITOR_CALL_GET_CUSTOMER_MODIFIER_ID_TO_CUSTOMER_MANAGED = (data: any): Models.CustomerManaged => {

    // TODO Convert response data to corresponding model.

    return util.getCustomerManaged(RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN(data), defaultValues.employee)
}

export const RESPONSE_MEMBER_LIST_CALL_PUT_CUSTOMER_UPDATE_TO_BOOLEAN = (data: any): boolean => {

    // TODO Convert response data to corresponding model.

    return defaultValues.boolean
}

export const RESPONSE_MEMBER_LIST_CALL_PUT_DEAL_MEMBERL_LIST_UPDATE_TO_BOOLEAN = (data: any): boolean => {

    // TODO Convert response data to corresponding model.

    return defaultValues.boolean
}

export const RESPONSE_MEMBER_LIST_CALL_PUT_AGENT_MEMBERL_LIST_UPDATE_TO_BOOLEAN = (data: any): boolean => {

    // TODO Convert response data to corresponding model.

    return defaultValues.boolean
}

export const REQUEST_AGENT_CALL_PUT_UPDATE_REQUEST = (agent: Models.Agent, customerId: string): Models.CustomerAgentRelationUpdateRequest => {
    try {
        return {
            personType: {
                id: agent.id,
                modId: agent.modId || 0,
            },
            clients: agent.customerPositionList &&
            Array.isArray(agent.customerPositionList.data) ?
            agent.customerPositionList.data
                .map((client: Models.AgentCustomerPosition): Models.CustomerRelationRequest => {
                        return {
                            id: customerId,
                            position: client.position || "",
                            relationClassifier: agent.isPrincipal ? {   code: 'Main Contact',
                                                                        value: 'Основной контакт',
                                                                        classifierName: 'SBRF_CONTACT_TYPE_GROUP'
                                                                    }
                                                : util.getSafeClassifierRequest(client.customerRelations) || defaultValues.ClassifierRequest,
                        }
                    }
                ) : []
        }
    } catch (e) {
        throw new Error (`REQUEST_AGENT_CALL_PUT_UPDATE_REQUEST fails. Data ${agent.toString()}`)
    }
}
export const REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST = (data: Models.DataForCustomerAgentListUpdateRequest): Models.CustomerAgentListUpdateRequest => {

    try {
        return {
            clientCard: {
                id: data.id,
                name: data.name,
                modId: data.modId,
                agents: data.agentList &&
                Array.isArray(data.agentList.data) ?
                    data.agentList.data.map((agent: Models.Agent): Models.CustomerAgentRelationUpdateRequest =>
                        REQUEST_AGENT_CALL_PUT_UPDATE_REQUEST(agent, data.id)
                    ) : []
            }
        }
    } catch (e) {
        throw new Error (`REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST fails. Data ${data.toString()}`)
    }

}
export const REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE_REQUEST = (data: Models.DataForCustomerOccasionListUpdateRequest): Models.CustomerOccasionListUpdateRequest => {

    try {
        return {
            clientCard: {
                id: data.id,
                name: data.name,
                modId: data.modId,
                impDates: data.occasionList &&
                Array.isArray(data.occasionList.data) ?
                    data.occasionList.data.map((occasion: Models.Occasion): any => {
                        return _.omitBy(OCCASION_ITEM_TO_REQUEST_OCCASION_ITEM(occasion), _.isNil)
                    }) : []
            }
        }
    } catch (e) {
        throw new Error (`REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE_REQUEST fails. Data ${data.toString()}`)

    }

}
export const RESPONSE_CUSTOMER_CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE_REQUEST= (data: any): Models.ResponsePostPutRequest => {

    try {
        return {id: data.id || '', modId: data.modId || 0}
    } catch (e) {
        return e
    }
}
export const RESPONSE_CUSTOMER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST= (data: any): Models.ResponsePostPutRequest => {

    try {
        return {id: data.id || '', modId: data.modId || 0}
    } catch (e) {
        return e
    }
}

export const REQUEST_CUSTOMER_EDITOR_CALL_PUT_CUSTOMER_UPDATE_FROM_CUSTOMER_UPDATE_REQUEST = (data: Models.CustomerUpdateRequest): any => {



    const formattedAddress = {
        city: data.address.city,
        stateProv: data.address.subject,
        area: data.address.region,
        postalCode: data.address.postalCode,
        country: {
            code: data.address.country ? data.address.country.code : '',
            value: data.address.country ? data.address.country.value : '',
            classifierName: 'COUNTRY'
        },
        id: data.address.id,
        modId: data.address.modId,
        type: {
            code: data.address.type ? data.address.type.code : 'Actual Address',
            value: data.address.type ? data.address.type.value : 'Фактический',
            classifierName: 'ADDR_TYPE'
        },
        place: data.address.settlement,
        street: data.address.street,
        house: data.address.house,
        corpus: data.address.block,
        building: data.address.building,
        office: data.address.office,
        comments: data.address.comment,
        isPrimary: data.address.isPrimary,
        isActive: data.address.isActive
    }
    return {
        clientCard: {
            id: data.id,
            name: data.name,
            modId: data.modId,
            address: _.omitBy(formattedAddress, _.isNil)
        }
    }


}


export const NEXT_STAGE_TO_NEXT_STAGE = (data: any): ModelsCrm.NextStage => {
    if(data){
        return {
            salesStage: data.salesStage || '',
            possibleSalesStage: data.possibleSalesStage || '',
            criterion: data.criterion || '',
        }
    }
    return defaultValues.nextStage
}

export const RESPONSE_CALL_GET_NEXT_STAGE_TO_NEXT_STAGES = (data: any): ModelsCrm.DealPossibleStageList => {

    if(data && data.possibleStage && Array.isArray(data.possibleStage)){
        return {data: data.possibleStage.map(NEXT_STAGE_TO_NEXT_STAGE)}
    }
    return defaultValues.dealPossibleStageList
}

export const RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TRACKING_TO_TRACKING = (data: any): Models.CrmStagesList => {
    return Array.isArray(data.tracking) ? {
        data: data.tracking.compact()
            .filter((stageItem: any): boolean => stageItem.CRMStage)
            .map((stageItem: any): Models.CrmStage => RESPONSE_DEAL_CRM_STAGE_TO_CRM_STAGE(stageItem))

    } : defaultValues.EmptyList
}

export const RESPONSE_DEAL_CRM_STAGE_TO_CRM_STAGE = (data: any): Models.CrmStage => (
    {
        clientStage:CLASSIFIER_TO_CLASSIFIER({code:data.ClientStage, value: data.ClientStage}),
        description: data.Description,
        crmStage: CLASSIFIER_TO_CLASSIFIER({value:data.CRMStage}),
        comment: data.Comment,
        order:data.order,
        plannedFinishDate: util.parseServerDate(data.plannedFinishDate),
    }
)

export const RESPONSE_CALL_GET_HISTORY_STAGE_TO_HISTORY_STAGES_TO_HISTORY_STAGE = (data: any): ModelsCrm.HistoryStage => {
    if(data){
        return {
            newValueClassifier: data.newValue ? CLASSIFIER_TO_CLASSIFIER(data.newValue) : null,

            previousValueClassifier: data.prevValue ? CLASSIFIER_TO_CLASSIFIER(data.prevValue) : null,
            startDate: util.parseServerDate(data.startDate),
            endDate: util.parseServerDate(data.endDate),
            changedByFIO: data.changedByFIO || '',
            actualDuration: data.durationFact || '',
            endDatePlanned: util.parseServerDate(data.endDatePlanned),
            durationFact: data.durationFact || '',
            durationNorm: data.durationNorm || '',
        }
    }
    return defaultValues.historyStage
}

export const RESPONSE_CALL_GET_HISTORY_STAGE_TO_DEAL_HISTORY_STAGE_LIST = (data: any): ModelsCrm.DealHistoryStageList => {
    if(data && data.dealHistoryStages && Array.isArray(data.dealHistoryStages)){
        return {data: data.dealHistoryStages.map(RESPONSE_CALL_GET_HISTORY_STAGE_TO_HISTORY_STAGES_TO_HISTORY_STAGE)}
    }
    return defaultValues.dealHistoryStageList
}

export const REQUEST_MEMBER_LIST_CALL_PUT_DEAL_MEMBERL_LIST_UPDATE_FROM_DEAL_UPDATE_REQUEST = (data: Models.DealMemberListUpdateRequest): Models.DealUpdateRequest => {
    let prepareData: Models.DealEditorUpdateRequest = {
        operationUuid: data.operationUuid,
        productClassifier: null,
        accountId:data.accountId,
        currentDeal: data.currentDeal,
        title:data.currentDeal.title,
        salesMethodClassifier:data.currentDeal.salesMethodClassifier
            ? data.currentDeal.salesMethodClassifier
            : defaultValues.Classifier,
        id:data.currentDeal.id,
        currencyClassifier: null,
        sumInCurrency: null,
        sumInCurrencyEkv: null,
        modId:data.currentDeal.modId,
        team:data.memberList,
        agents: data.currentDeal.agentList || defaultValues.AgentList,
        plannedFinishDate:data.currentDeal.plannedFinishDate
            ?   data.currentDeal.plannedFinishDate
            :   null,
        requestType:data.currentDeal.requestTypeClassifier && data.currentDeal.requestTypeClassifier.code && data.currentDeal.requestTypeClassifier.code == 'KK'
            ? data.currentDeal.requestTypeClassifier
            : null,
        utilization:data.currentDeal.application && data.currentDeal.application.code
            ? data.currentDeal.application
            : null,
        probability: data.currentDeal.probability,
    }
    let dealRequest: Models.DealUpdateRequest = REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_FROM_DEAL_EDITOR_UPDATE_REQUEST(prepareData)
    return dealRequest
}
export const REQUEST_MEMBER_LIST_CALL_PUT_AGENT_MEMBERL_LIST_UPDATE_FROM_AGENT_UPDATE_REQUEST = (data: Models.AgentMemberListUpdateRequest): any => {
    //TODO верно ли, что забыт positionName?
    return {
        agent : {
            id: data.currentAgent.id,
            personType: {
                id: data.currentAgent.id,
                modId: data.currentAgent.modId,
                isChanged: true
            },
            clients: data.currentAgent.customerPositionList && data.currentAgent.customerPositionList.data ? data.currentAgent.customerPositionList.data.map((item)=>{
                return {
                    client:{
                        id:item.customerId
                    }
                }
            }) : [],
            team: data.memberList.data.map((item: ModelsApp.Employee) => {
                return {
                    isGeneral: item.isGeneral,
                    member: { positionId: item.id }
				}
            })
        }
    }
}
export const REQUEST_MEMBER_LIST_CALL_PUT_CUSTOMER_UPDATE_FROM_CUSTOMER_UPDATE_REQUEST = (data: Models.MemberListUpdateRequest): any => {
    return {
        clientCard: {
            id: data.id,
            name: data.name,
            modId: data.modId,
            teamPersons: data.memberList != null && data.memberList.data ?
            data.memberList.data.map((item: ModelsApp.Employee)=>{
                return {
                    member:{
                        person:{
                            firstName: item.firstName,
                            lastName: item.lastName,
                            middleName:item.middleName,
                        },
                        positionId:item.id
                    },
                    isBlocked: item.isBlocked,
                    isGeneral:item.isGeneral,
                    roleClassifier:{
                        code: item.role.code,
                        value: item.role.value,
                        classifierName: item.role.name,
                    }
                }
            })
             : []
        }
    }
}

export const RESPONSE_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_APPEND_TO_BOOLEAN = (data: any): boolean => {

    return defaultValues.boolean
}

export const REQUEST_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_APPEND_FROM_DEAL_ACTIVITY_APPEND_REQUEST = (data: Models.DealActivityAppendRequest): any => {
    const getClassifier = (classifier: ModelsApp.Classifier | null):any => {
        if(classifier){
            return _.omitBy({
                    classifierName: classifier.name,
                    value: classifier.value,
                    code: classifier.code
            },
            _.isNil)
        } else return null
    }
    return _.omitBy({
        id: data.activity.id,
        modId: data.activity.modId || null,
        client: {
            id: data.activity && data.activity.customer && data.activity.customer.id || null,
        },
        dealId: data.dealId,
        type: getClassifier(data.activity.type),
        description: data.activity.description,
        result: getClassifier(data.activity.result),
        priority: getClassifier(data.activity.priority) || null,
        plannedCompletion: data.activity.dueDate ? util.convertToUTCDateFormat(data.activity.dueDate) : util.convertToUTCDateFormat(new Date()),
        statusClassifier: getClassifier(data.activity.status),
        comment: data.activity.comment || null,
        agents: data.activity.agentList.data.map((agent)=>{
            return {
                id:agent.id
            }
        }),
        team: data.activity.memberList.data.map((employee)=>{
            return {
                member: {person: {id: employee.id || ''}},
                isGeneral: employee.isGeneral || false,
            }
        }),
        parentAccountId: data.activity.parentCustomer && data.activity.parentCustomer.id || null,
        gszId: data.activity.gsz && data.activity.gsz.id || null,
    }, _.isNil)
}



export const REQUEST_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FROM_DEAL_ACTIVITY_EXCLUDE_REQUEST = (data: Models.DealActivityExcludeRequest): any => {

    const getClassifier = (classifier: ModelsApp.Classifier | null):any => {
        if(classifier){
            return _.omitBy({
                    classifierName: classifier.name,
                    value: classifier.value,
                    code: classifier.code
                },
                _.isNil)
        } else return null
    }
    return _.omitBy({
        id: data.activity.id,
        modId: data.activity.modId || null,
        client: {
            id: data.activity && data.activity.customer && data.activity.customer.id || null,
        },
        dealId: '',
        type: getClassifier(data.activity.type),
        description: data.activity.description,
        result: getClassifier(data.activity.result),
        priority: getClassifier(data.activity.priority) || null,
        plannedCompletion: data.activity.dueDate ? util.convertToUTCDateFormat(data.activity.dueDate) : util.convertToUTCDateFormat(new Date()),
        statusClassifier: getClassifier(data.activity.status),
        comment: data.activity.comment || null,
        agents: data.activity.agentList.data.map((agent)=>{
            return {
                id:agent.id
            }
        }),
        team: data.activity.memberList.data.map((employee)=>{
            return {
                member: {person: {id: employee.id || ''}},
                isGeneral: employee.isGeneral || false,
            }
        }),
        parentAccountId: data.activity.parentCustomer && data.activity.parentCustomer.id || null,
        gszId: data.activity.gsz && data.activity.gsz.id || null,
    }, _.isNil)

}

export const RESPONSE_DEAL_LIST_REFRESH_CALL_GET_DEAL_LIST_TO_DEAL_LIST_PAGE = (
    supParameters: string,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    user: ModelsApp.Employee,
    currentCustomer: Models.CustomerManaged) => (data: any): Models.DealListPage => {



    // TODO Convert response data to corresponding model.

    return {
        data: data.deals.map(RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(supParameters,classifierDictionary, user, currentCustomer)),
        isLast: true,
    }


}

export const RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_CARD_INDEX_LIST_TO_PAYMENT_ACCOUNT_PRODUCT_CARD_INDEX_LIST = (data: any): Models.PaymentAccountProductCardIndexList => {

    if (typeof data != 'object') {

        throw new Error (`Invalid payment account card index list data type ${ JSON.stringify (data) }`)

    }

    return {

        data: Array.isArray(data.paymentAccountCardIndex) ? data.paymentAccountCardIndex.compact ().map ((item: any) => (
            PAYMENT_ACCOUNT_PRODUCT_CARD_INDEX_TO_CARD_INDEX (item))
        ) : [],

        eksErrorList: Array.isArray(data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data) : [],
        pollingStatus: (typeof data.status == 'string') ? util.getProductListPollingStatus(data.status) : Enums.ProductPollingStatus.Error,
        bhCachedDate: data.lastUpdateDate && util.isValidDate(data.lastUpdateDate.toString()) ? new Date(data.lastUpdateDate) : null,
        pollingError: null,
        operationUuid: (typeof data.operationId == 'string') ? data.operationId : null
    }
}

export const RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_OPERATION_LIST_TO_PAYMENT_ACCOUNT_PRODUCT_OPERATION_LIST = (data: any): Models.PaymentAccountProductOperationList => {

    if (typeof data != 'object') {

        throw new Error (`Invalid payment account operation list data type ${ JSON.stringify (data) }`)

    }

    return {

        data: Array.isArray (data.accountOperations) ? data.accountOperations.compact ().map ((item: any) => (
            PAYMENT_ACCOUNT_PRODUCT_OPERATION_TO_OPERATION (item))
        ) : [],

        eksErrorList: Array.isArray (data.errors) ? RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST (data) : [],
        pollingStatus: (typeof data.status == 'string') ? util.getProductListPollingStatus (data.status) : Enums.ProductPollingStatus.Error,
        bhCachedDate: data.lastUpdateDate && util.isValidDate (data.lastUpdateDate.toString()) ? new Date (data.lastUpdateDate) : null,
        pollingError: null,
        operationUuid: (typeof data.operationId == 'string') ? data.operationId : null

    }

}
export const RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_PRODUCT_VSP_INFO_PAYMENT_ACCOUNT_PRODUCT_PRODUCT_VSP_INFO = (data: any): Models.PaymentAccountProductVspInfo => {
    let isGetBankName = (data.terbank && data.terbank.name) ||
                        (data.agency && data.agency.name) ||
                        (data.branch && data.branch.name) ||
                        false
    let bankName:string = `${data.terbank && data.terbank.name || ''} ${data.agency && data.agency.name || ''}${data.branch && data.branch.name || ''}`


    let bankBranchInfoAdress: string[] = [(data.branch && data.branch.index),
                                           data.branch && data.branch.region,
                                           data.branch && data.branch.address].compact()
    let bankAgencyInfoAdress: string[] = [(data.agency && data.agency.index),
                                           data.agency && data.agency.region,
                                           data.agency && data.agency.address].compact()

    let bankTerbankInfoAdress: string[] = [(data.terbank && data.terbank.index),
                                            data.terbank && data.terbank.region,
                                            data.terbank && data.terbank.address].compact()

    let bankAddress:string = bankBranchInfoAdress.length > 0 ? bankBranchInfoAdress.join(", ")
                             : bankAgencyInfoAdress.length > 0 ? bankAgencyInfoAdress.join(", ")
                             : bankTerbankInfoAdress.length > 0 ? bankTerbankInfoAdress.join(", ")
                             : ""
    return {
        name: isGetBankName  ? bankName.trim() : 'Нет данных',
        address: bankAddress || 'Нет данных',
    };
}
export const RESPONSE_GSZ_REFRESH_CALL_GET_GSZ_TO_GSZ = (data: any): Models.Gsz => {

    return {
        id: data.id,
        name: data.name,
        isNsl: typeof data.isNsl !== 'undefined' ? data.isNsl : null,
        curator: RESPONSE_GSZ_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE(data.curator),
        chief: RESPONSE_GSZ_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE(data.gkm),
        status: CLASSIFIER_TO_CLASSIFIER(
            util.getClassifierDataDisplayValue(data.statusClassifier)),
        memberList: RESPONSE_GSZ_REFRESH_CALL_GET_MEMBERS_TO_MEMBER_LIST(data.members)
    }


}
export const RESPONSE_GSZ_REFRESH_CALL_GET_GSZ_LIMIT_TO_GSZ_LIMIT = (data: any): Models.GszLimit => {



    /**
     * Получение версии лимита, или расчетный = "VCL", или совокупный = "APR"
     * @param  {Array<any>} limitCharacters
     * @returns string
     */
    const getLimitVersion = (limitCharacters: Array<any>): string => {
        const limitVersionObject = limitCharacters.find((item: any) => item.name == '/BIC/ZLIMVERS')
        return limitVersionObject && limitVersionObject.value
    }

    /**
     * Необходимо предоставить пользователю функциональность для просмотра структуры лимитов ГСЗ
     * 3a1. В случае наличия ошибки Log.Type=’E’, Система выполняет следующие действия:
     * 3a2. отображает сообщение с текстом ошибки Log.Message
     * 3a3. отображает "Нет данных" в атрибутах лимитов на карточке ГСЗ
     * 4a1. Если совокупный лимит "L01" версии расчетный "VCL" имеет непустые суммы LimitAmount одновременно в НСЛ ("limitSector"="11") и в ССЛ ("limitSector"="10") , то Система отображает:
     * в атрибутах лимитов "Нет данных" на карточке ГСЗ, уведомление "ГСЗ не полностью перешла на новую структуру лимитов - данные не достоверны"
     * 5a1. Если значение лимита - пусто, то Система отображает "Нет данных" в соответствующем атрибуте лимита на карточке ГСЗ
     * FR01 «Просмотр структуры лимитов ГСЗ» Альтернативный сценарий
     *
     * @param  {any} limits
     * @returns string
     */
    const limitStructureInvalid = (limits: any): { isError: boolean, message?: string } => {
        let limitError = {
            isError: false,
            message: ''
        }

        if (limits.log && limits.log.length > 0) {
            const typeError = limits.log.find((item: any) => item.type === 'E')
            if (typeError) {
                limitError = {
                    isError: true,
                    message: typeError.message
                }
            }
        }
        if (limitError.isError) {
            // выбрасываем exception чтобы обработка запроса ушла в Error ветку и корректно сформировала ошибку
            // @see refresh_callGetGszLimit
            throw {
                type: Enums.ErrorType.SystemError
            }
        }

        const isLimitAmountPositive = (limitList: Array<any>): boolean => {
            const result = limitList.find((item: any) => {
                return getLimitVersion(item.limitChars) === 'VCL' && item.limitHead.limitType.code == 'L01' && item.limitValues.LimitAmount
            })
            return result != null
        }

        if (limits.limitData) {
            const limitStructure = limits.limitData.reduce((result: { isNSL: boolean, isSSL: boolean }, item: any) => {
                if (getLimitVersion(item.limitChars) === 'VCL' && item.limitHead.limitType.code == 'L01' && item.limitHead.limitSector.code == '11') {
                    result.isNSL = true
                }
                if (getLimitVersion(item.limitChars) === 'VCL' && item.limitHead.limitType.code == 'L01' && item.limitHead.limitSector.code == '10') {
                    result.isSSL = true
                }
                return result
            }, {
                isNSL: false,
                isSSL: false
            })
            if (limitStructure.isNSL && limitStructure.isSSL && isLimitAmountPositive(limits.limitData)) {
                return {
                    isError: true,
                    message: 'ГСЗ не полностью перешла на новую структуру лимитов - данные не достоверны'
                }
            }
        }
        return {isError: false}
    }

    /**
     * Утвержденное значение совокупного лимита    -> "limitValues"."LimitAmount, где "limitType"."code": "L01" И "limitVersion"."code": "APR"
     * Расчетное значение совокупного лимита -> "limitValues"."LimitAmount, где "limitType"."code": "L01" И "limitVersion"."code": "VCL"
     * Прогнозное использование совокупного лимита -> "limitValues"."LimitUtilAmount, где "limitType"."code": "L01" И "limitVersion"."code": "VCL"
     * Неиспользованный совокупный лимит -> "limitValues"."LimitAmountFree, где "limitType"."code": "L01" И "limitVersion"."code": "VCL"
     * @param  {Array<any>} limitList
     * @returns {Models.GszLimit}
     */
    const getLimitDisplayValues = (limitList: Array<any>): Models.GszLimit => {
        return limitList.reduce((result: Models.GszLimit, item: any) => {
            if (getLimitVersion(item.limitChars) === 'APR' && item.limitHead.limitType.code === 'L01') {
                if (item.limitValues.LimitAmount) {
                    result.approvedAggregateLimitValue = `${item.limitValues.LimitAmount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') } ${item.limitValues.LimitAmountCurrencyISO}`
                }
            } else if (getLimitVersion(item.limitChars) === 'VCL' && item.limitHead.limitType.code === 'L01') {
                if (item.limitValues.LimitAmount) {
                    result.cumulativeLimitEstimatedValue = `${item.limitValues.LimitAmount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ${item.limitValues.LimitAmountCurrencyISO}`
                }
                if (item.limitValues.LimitUtilAmountReq) {
                    result.cumulativeLimitUseForecast = `${item.limitValues.LimitUtilAmountReq.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ${item.limitValues.LimitAmountCurrencyISO}`
                }
                if (item.limitValues.LimitAmountFreeReq) {
                    result.unusedAggregateLimit = `${item.limitValues.LimitAmountFreeReq.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ${item.limitValues.LimitAmountCurrencyISO}`
                }
            }
            return result
        }, {
            isLimitStructureValid: true,
            approvedAggregateLimitValue: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            cumulativeLimitEstimatedValue: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            cumulativeLimitUseForecast: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            unusedAggregateLimit: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA)
        })
    }

    const invalidLimit = limitStructureInvalid(data.limit)

    if (invalidLimit.isError) {
        return {
            isLimitStructureValid: false,
            limitStructureInvalidMessage: invalidLimit.message,
            approvedAggregateLimitValue: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            cumulativeLimitUseForecast: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            cumulativeLimitEstimatedValue: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA),
            unusedAggregateLimit: util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA)
        }
    }

    return getLimitDisplayValues(data.limit.limitData)


}
export const RESPONSE_GSZ_ACTIVITY_INCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerList => {



    // TODO Convert response data to corresponding model.
    const temp = RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE(data)

    return {
        data: temp.data,
        isCompleted: temp.isLast
    }


}


export const RESPONSE_GSZ_ACTIVITY_EXCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerList => {



    // TODO Convert response data to corresponding model.
    const temp = RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE(data)

    return {
        data: temp.data,
        isCompleted: temp.isLast
    }


}
export const RESPONSE_GSZ_ACTIVITY_INCLUDE_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_TO_BOOLEAN = (data: any): boolean => {



    // TODO Convert response data to corresponding model.

    return defaultValues.boolean


}

export const GET_ACTIVITY_MEMBER_LIST_REQUEST = (memberList: ModelsCrm.MemberList | null): Array<Models.ActivityEmployeeRequest | Models.ActivityEmployeeWithRoleRequest> => {

    try {
        const checkRequireDataMemberList = (data: any, dataType: string): any => {
            // данные корректны, если они удоволетворяют условиям: number(любые), string(не пустая строка), boolean(true | false), object(любой).
            if (data != null && data != undefined && data !='' && typeof data === dataType) return data
            throw `Get invalid member list data request for activity  ${ JSON.stringify(memberList) } . Converter GET_ACTIVITY_MEMBER_LIST_REQUEST: \n ${data}-${dataType}`
        }
        return checkRequireDataMemberList(memberList,"object") && memberList && Array.isArray(memberList.data) ?
            memberList.data.map((employee: ModelsApp.Employee): Models.ActivityEmployeeRequest | Models.ActivityEmployeeWithRoleRequest => {

                if (employee && employee.role && employee.role.value) {
                    return {
                            member: {person: {id: checkRequireDataMemberList(employee.id,"string") || "",
                                              role:  employee.role.code}
                                     },
                            isGeneral: employee.isGeneral || false,
                    }
                } else {
                    return {
                        member: {person: {id: checkRequireDataMemberList(employee.id,"string") || ""},},
                        isGeneral: employee.isGeneral || false,
                    }
                }
        }) : []
    }catch (error) {
        throw error
    }
}



export const REQUEST_GSZ_ACTIVITY_INCLUDE_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FROM_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST = (data: Models.GszActivityIncludeCreateRequest): any => {



    let plannedStart = moment(new Date())
    let plannedCompletion = moment()
    plannedCompletion.set('hour', plannedStart.get('hour'))
    plannedCompletion.set('minute', plannedStart.get('minute'))
    plannedCompletion.set('second', plannedStart.get('second'))
    plannedCompletion.set('millisecond', plannedStart.get('millisecond'))
    /**
     * Добавляем дате исполнения пять дней по требованям
     */
    plannedCompletion.add(5, 'days')

    const team = GET_ACTIVITY_MEMBER_LIST_REQUEST(data.memberList);

    let activityRequest: ModelsScheduler.ActivityRequest = {
        ...defaultValues.ActivityRequest,
        description: data.comment,
        type: {'code': 'Task', 'value': 'Задача', 'classifierName': 'TODO_TYPE'},
        gszId: data.gszId,
        team,
        statusClassifier: {'code': 'Planned', 'value': 'Запланирована', 'classifierName': 'EVENT_STATUS'},
        priority: {'code': '1-ASAP', 'value': 'Высокий', 'classifierName': 'Приоритет задачи'},
        plannedCompletion: util.convertToUTCDateFormat(plannedCompletion.toDate()),
        client: {id: data.clientId}
    }

    return _.omitBy (activityRequest, _.isNull)

}

export const RESPONSE_GSZ_ACTIVITY_EXCLUDE_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN = (data: any): boolean => {



    // TODO Convert response data to corresponding model.

    return defaultValues.boolean


}
export const REQUEST_GSZ_ACTIVITY_EXCLUDE_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FROM_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST = (data: Models.GszActivityExcludeCreateRequest): any => {

    return REQUEST_GSZ_ACTIVITY_INCLUDE_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FROM_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST(data)

}

export const RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerList => {



    const temp = RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE(data)

    return {
        data: temp.data,
        isCompleted: temp.isLast
    }


}
export const RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_CALL_GET_CUSTOMER_TO_CUSTOMER = (data: any): Models.Customer => {



    // TODO Convert response data to corresponding model.

    return {
        ...defaultValues.Customer,
        hierarchy: data.hierarchy,
        id: data.clientCard && data.clientCard.id,
        name: data.clientCard && data.clientCard.name,
        shortName: data.clientCard && data.clientCard.shortName,
        role: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.roleClassifier || {}),
        organizationType: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.orgTypeClassifier),
        legalForm: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.legalFormClassifier),
        ownerList: RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_SHAREHOLDER_TO_OWNER_LIST(data.clientCard && data.clientCard.shareholders, data.clientCard && data.clientCard.beneficiaries),
        isNSL: data.clientCard && data.clientCard.isNSL,
        isHolding: false,
        curator: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(data.clientCard && data.clientCard.curator ? data.clientCard && data.clientCard.curator : null),
        holder: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(data.clientCard && data.clientCard.vko ? data.clientCard && data.clientCard.vko : null),
    }


}
export const RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_TO_BOOLEAN = (data: any): boolean => {



    // TODO Convert response data to corresponding model.

    return defaultValues.boolean


}
export const REQUEST_CUSTOMER_ACTIVITY_INCLUDE_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FROM_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = (data: Models.CustomerActivityIncludeCreateRequest): any => {



    let plannedStart = moment(new Date())
    let plannedCompletion = moment()
    plannedCompletion.set('hour', plannedStart.get('hour'))
    plannedCompletion.set('minute', plannedStart.get('minute'))
    plannedCompletion.set('second', plannedStart.get('second'))
    plannedCompletion.set('millisecond', plannedStart.get('millisecond'))
    /**
     * Добавляем дате исполнения пять дней по требованям
     */
    plannedCompletion.add(5, 'days')
    /**
     * Добавляем дате исполнения один час - это дата окончания, которую мы отправляем на сервер
     */
    plannedCompletion.add(1, 'hour')
    const team = GET_ACTIVITY_MEMBER_LIST_REQUEST(data.memberList);
    let activityRequest: ModelsScheduler.ActivityRequest  = {
        ...defaultValues.ActivityRequest,
        description: data.comment,
        type: {"code": "Adding To Organization", "value": "Включение в Организацию", "classifierName": "TODO_TYPE",},
        parentAccountId: data.parentAccountId,
        team,
        statusClassifier: {'code': 'Planned', 'value': 'Запланирована', 'classifierName': 'EVENT_STATUS'},
        priority: {'code': '1-ASAP', 'value': 'Высокий', 'classifierName': 'Приоритет задачи'},
        plannedCompletion: util.convertToUTCDateFormat(plannedCompletion.toDate()),
        client: {id: data.clientId}
    }
    return _.omitBy (activityRequest, _.isNull)

}

export const RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_GET_CUSTOMER_TO_CUSTOMER = (data: any): Models.Customer => {



    // TODO Convert response data to corresponding model.

    return {
        ...defaultValues.Customer,
        hierarchy: data.hierarchy,
        id: data.clientCard && data.clientCard.id,
        name: data.clientCard && data.clientCard.name,
        shortName: data.clientCard && data.clientCard.shortName,
        role: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.roleClassifier || {}),
        organizationType: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.orgTypeClassifier),
        legalForm: CLASSIFIER_TO_CLASSIFIER(data.clientCard && data.clientCard.legalFormClassifier),
        ownerList: RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_SHAREHOLDER_TO_OWNER_LIST(data.clientCard && data.clientCard.shareholders, data.clientCard && data.clientCard.beneficiaries),
        isNSL: data.clientCard && data.clientCard.isNSL,
        isHolding: false,
        curator: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(data.clientCard && data.clientCard.curator ? data.clientCard && data.clientCard.curator : null),
        holder: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_EMPLOYEE_TO_CUSTOMER_UNKNOWN_EMPLOYEE(data.clientCard && data.clientCard.vko ? data.clientCard && data.clientCard.vko : null),
    }


}
export const RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN = (data: any): boolean => {



    // TODO Convert response data to corresponding model.

    return defaultValues.boolean


}



export const REQUEST_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_FROM_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_REQUEST = (data: Models.CustomerActivityExcludeCreateRequest): any => {



    let plannedStart = moment(new Date())
    let plannedCompletion = moment()
    plannedCompletion.set('hour', plannedStart.get('hour'))
    plannedCompletion.set('minute', plannedStart.get('minute'))
    plannedCompletion.set('second', plannedStart.get('second'))
    plannedCompletion.set('millisecond', plannedStart.get('millisecond'))
    /**
     * Добавляем дате исполнения пять дней по требованям
     */
    plannedCompletion.add(5, 'days')
    /**
     * Добавляем дате исполнения один час - это дата окончания, которую мы отправляем на сервер
     */
    plannedCompletion.add(1, 'hour')

    const team = GET_ACTIVITY_MEMBER_LIST_REQUEST(data.memberList);

    return {
        agents: [],
        source: 'ЕФС',
        description: data.comment,
        type: {"code": "Adding To Organization", "value": "Включение в Организацию", "classifierName": "TODO_TYPE",},
        parentAccountId: data.parentAccountId,
        team,
        statusClassifier: {'code': 'Planned', 'value': 'Запланирована', 'classifierName': 'EVENT_STATUS'},
        priority: {'code': '1-ASAP', 'value': 'Высокий', 'classifierName': 'Приоритет задачи'},
        plannedCompletion: util.convertToUTCDateFormat(plannedCompletion.toDate()),
        client: {id: data.clientId}
    }
}


export const DEAL_PRODUCT_TO_PRODUCT = (data: any):ModelsCrm.DealProduct => ( {
    currencyClassifier:CLASSIFIER_TO_CLASSIFIER(data.currencyClassifier),
    productClassifier: CLASSIFIER_TO_CLASSIFIER(data.productClassifier),
    sum: data.sumInCurrency,
    sumInRubles: data.sumInCurrencyEkv,
    SKRtotal: +(Array.isArray(data.additionalInfos) && data.additionalInfos[0] && data.additionalInfos[0].value)
})


const decodeContractStatus = (type: string):string => {
    switch (type) {
        case 'Open':
            return 'Открыт'
        case 'Close':
            return 'Закрыт'
        default: return type
    }
}


export const DEAL_COMMENT_TO_COMMENT = (data: any):ModelsCrm.Comment => ( {
    type: CLASSIFIER_TO_CLASSIFIER(data.type),
    text: data.comment,
    author: {...defaultValues.Employee, id: data.createdByPosID, fullName: data.createdByFIO},
    date: moment(data.created).toDate(),
})

export const RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_AGENT_LIST_TO_AGENT_LIST = (data: any): Models.AgentList => {
    return RESPONSE_AGENT_LIST_CALL_GET_AGENT_LIST_TO_AGENT_LIST(data)
}

export const RUR:ModelsApp.Classifier = {
    code: 'RUR',
    parentId: '',
    value: 'RUR',
    name: 'Рубль'
}

const NO_DATA: string = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA)

const calcExchangeCourse = (currentDeal : Models.Deal):number => {
    if (!currentDeal.products) {
        return 0
    }
    const course = currentDeal.products.reduce( (acc, el) => {
        if (!el.currencyClassifier || el.currencyClassifier.code === RUR.code ||
            !el.sumInRubles || !el.sum) {
            return 0
        }
        return el.sumInRubles / el.sum }, 0
    )
    return course
}


export const sumOf = (currentDeal : Models.Deal): number => {

    if (!currencyOf(currentDeal) || !currentDeal.products) {
        return 0
    }
    return currentDeal.products.reduce( (acc, el) => {
        if (!el.sum) {
            return acc
        }
        return acc + (+el.sum) }, 0
    )
}

export const currencyOf = (currentDeal : Models.Deal): ModelsApp.Classifier | null => {
    if (!currentDeal.products) {
        return null
    }

    const currencies:ModelsApp.ClassifierList = util.getClassifierUniqueValuesByCode({
        data: currentDeal.products.map( (el) => el.currencyClassifier )
    })

    if ( currencies.data &&  currencies.data.length === 1) {
        return currencies.data[0]
    }
    return null
}

const sumRur = (currentDeal : Models.Deal) => {
    if (!currentDeal.products) {
        return 0
    }
    return currentDeal.products.reduce( (acc, el) => {
        if (!el.sumInRubles) {
            return +acc
        }
        return +acc + (+el.sumInRubles) }, 0
    )
}

const notNull = (value: any): any => {
    //if (value)
        return value
    //throw new TypeError('Empty data')
}

const isArray = (value: any[]): any[] => {
    if (!value || !Array.isArray(value)) {
        throw new TypeError('Not an array')
    }
    return value
}

const notEmptyArray = (value: any[]): any[] => {
    if (!isArray(value) || value.length === 0) {
        throw new TypeError('Empty array')
    }
    return value
}

const isDealEditable = (deal: Models.Deal, user: ModelsApp.Employee, currentCustomer: Models.CustomerManaged) => {
    /*
    Редактирование сделки доступно в случаях: 
        Условия по клиенту +
        Пользователь входит в команду менеджеров по сделке и является ВКС
         "Стадия сделки" like "%Ввод данных%" 
        Сегмент клиента = "Крупнейшие"  Тип сделки = "Стандартная сделка"
    */
    const member = deal.memberList.data.find( e => e.id === user.id)
    const isGeneral =  member && member.isGeneral

    return isGeneral && deal.phaseClassifier && deal.phaseClassifier.value &&
        deal.phaseClassifier.value.toLowerCase().indexOf('ввод данных') > -1 &&
        ( util.isLargestCustomer(currentCustomer) )
}

export const RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL = (supParameters :string, classifierDictionary: ModelsApp.ClassifierDictionary,
                                                            user: ModelsApp.Employee,
                                                            currentCustomer: Models.CustomerManaged) => (data: any): Models.Deal => {

    notNull(data)

    const prepareContractClient = (data: any): Models.DealContractClients => {
        return {}
    }

    const prepareContractTeamMember = (data: any): Models.DealContractTeamMember => {
        return{
            posId: data.posId || defaultValues.contractTeamMembers.posId,
            fio:  data.fio || defaultValues.contractTeamMembers.fio,
            main:  data.main || defaultValues.contractTeamMembers.main,
            position:  data.position || defaultValues.contractTeamMembers.position,
        }
    }

    const prepareDealContract = (data: any): Models.DealContract => {
        return{
            number: data.number || defaultValues.contract.number,
            status: CLASSIFIER_TO_CLASSIFIER(data.status),
            privacy: data.privacy  || defaultValues.contract.privacy,
            date:  data.date  || defaultValues.contract.date,
            contractClientsList: data.contractClients && Array.isArray(data.contractClients) ? {data: data.contractClients.map((e:any)=>prepareContractClient(e))} : defaultValues.contract.contractClientsList,
            contractTeamMembersList: data.contractTeamMembers && Array.isArray(data.contractTeamMembers) ? {data: data.contractTeamMembers.map((e:any)=>prepareContractTeamMember(e)) } : defaultValues.contract.contractTeamMembersList,
        }
    }

    const decodeDealType = (type:ModelsApp.Classifier, salesMethod: ModelsApp.Classifier):DealType => {
        if (type && type.code && type.code === 'KK') {
            return DealType.Credit
        }
        if (!salesMethod) {
            return DealType.Other
        }

        if (((supParameters||'').split('#')||[]).findIndex ( e => e === salesMethod.value ) !== -1) {
            return DealType.Salary
        }
        return DealType.Other
    }

    const type = decodeDealType(
        CLASSIFIER_TO_CLASSIFIER(data.requestType),
        CLASSIFIER_TO_CLASSIFIER(data.salesMethodClassifier)
    )

    const deal:Models.Deal = {
        ...defaultValues.Deal,
        id: notNull(data.id),
        modId: data.modId,
        accountId: data.accountId,
        isOpen: data.status === 'Open', // Enums.DealStatus.Open,
        customer: {id: '__empty', name: data.accountName},
        creationDate: util.parseServerDate(data.creationDate),
        plannedFinishDate: util.parseServerDate(data.plannedFinishDate),
        finishDate: util.parseServerDate(data.finishDate),
        owner: {...defaultValues.Employee, id: data.ownerId, fullName: data.opptyOwner},
        progress: parseInt(notNull(data.completion)),
        system: type === DealType.Salary ? data.system : null ,
        closeReason: CLASSIFIER_TO_CLASSIFIER(data.closeReason),
        phaseClassifier: CLASSIFIER_TO_CLASSIFIER(data.phaseClassifier),
        products: Array.isArray(data.products) ? data.products.map((e: any) => DEAL_PRODUCT_TO_PRODUCT(e)) : undefined,
        roleClassifier: CLASSIFIER_TO_CLASSIFIER(data.roleClassifier),
        salesMethodClassifier: CLASSIFIER_TO_CLASSIFIER(data.salesMethodClassifier),
        territorialCoverage: data.terrCoverage,
        probability: +data.probability,
        salaryProjectDetails: {
            fee: data.comm,
            staffCount: data.staffCount ,
            agreement: {
                number: data.payrollAggrement && data.payrollAggrement.num,
                date: data.payrollAggrement && data.payrollAggrement.date,
                status: data.payrollAggrement && CLASSIFIER_TO_CLASSIFIER(data.payrollAggrement.status),
            },
        },
        commentList: Array.isArray(data.comments) ? data.comments.map((e: any) => DEAL_COMMENT_TO_COMMENT(e)) : undefined,
        requestTypeClassifier: CLASSIFIER_TO_CLASSIFIER(data.requestType),
        campaign: data.campaign,
        salesCampaign: {
            id: '',
            name: data.campaign || '',
        },
        parentDeal: {...defaultValues.Deal, id: data.parentOpptyId, title: data.parentOpptyDescription},
        application: CLASSIFIER_TO_CLASSIFIER(data.utilization),
        attractingChannel: CLASSIFIER_TO_CLASSIFIER(data.attrChannel),
        title: notNull(data.title),
        type: type,
        isManaged: false,
        stages:  DEAL_STAGES_TO_STAGES(data.historyStages, classifierDictionary.SBRF_NKP_SS ),
        decision: Array.isArray(data.collegials) ? data.collegials.map((e: any) => COLLEGIALS_TO_DECISION(e,
                                                                        data.contracts || [], data.decisionFormat)) : undefined,
        agreement: Array.isArray(data.approvals) ? data.approvals.map((e: any) => APPROVAL_TO_AGREEMENT(notNull(e))) : undefined,
        memberList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TEAMPERSON_TO_TEAMMEMBER(data.team),
        isEditable: false,
        isRoadMapShow: data.roadMapFlag,
        contractList: data.contracts && Array.isArray(data.contracts) ? {data: data.contracts.map((e:any)=>prepareDealContract(e)) }: {data:[]},
    }
    deal.isEditable = isDealEditable(deal, user, currentCustomer) as boolean
    deal.sum = sumOf(deal)
    deal.sumRur = sumRur(deal)
    deal.currency = currencyOf(deal)
    deal.exchangeCourse = calcExchangeCourse(deal)
    deal.myRole = util.myRoleInDeal(deal.memberList.data, user)
    deal.isManaged = util.isDealManaged(deal.memberList.data, user)
    deal.contactParticipantList = DEAL_CONTRACT_PARTICIPANTS_TO_CONTRACT_PARTICIPANT_LIST(data.contactParticipants || [])
    return deal

}

export const REQUEST_MEMBER_LIST_CALL_PUT_ACTIVITY_MEMBER_LIST_FROM_ACTIVITY_MEMBER_LIST_REQUEST = (data: Models.ActivityMemberListUpdateRequest): any => {
    const getClassifier = (classifier: ModelsApp.Classifier | null):any => {
        if(classifier){
            return _.omitBy({
                    classifierName: classifier.name,
                    value: classifier.value,
                    code: classifier.code
                },
                _.isNil)
        } else return null
    }
    return _.omitBy({
        id: data.activity.id,
        modId: data.activity.modId || null,
        client: data.activity && data.activity.customer && data.activity.customer.id
                    ?   {
                            id: data.activity && data.activity.customer && data.activity.customer.id,
                        }
                    :   null,
        dealId: data.activity && data.activity.deal && data.activity.deal.id || null,
        type: getClassifier(data.activity.type),
        description: data.activity.description,
        result: getClassifier(data.activity.result),
        priority: getClassifier(data.activity.priority) || null,
        plannedCompletion: data.activity.dueDate ? util.convertToUTCDateFormat(data.activity.dueDate) : util.convertToUTCDateFormat(new Date),
        statusClassifier: getClassifier(data.activity.status),
        comment: data.activity.comment || null,
        agents: data.activity.agentList.data.map((agent)=>{
            return {
                id:agent.id
            }
        }),
        team: data.memberList.data.map((employee)=>{
            return {
                member: {person: {id: employee.id || ''}},
                isGeneral: employee.isGeneral || false,
            }
        }),
        parentAccountId: data.activity.parentCustomer && data.activity.parentCustomer.id || null,
        gszId: data.activity.gsz && data.activity.gsz.id || null,
    }, _.isNil)
}
export const REQUEST_CALL_PUT_DEAL_STAGES_UPDATE_TO_DEAL_UPDATE_REQUEST = (data: Models.DealStageUpdateRequest):any => {

    const PRODUCT_REQUEST = (data: ModelsCrm.DealProduct):Models.DealProductUpdateRequest => {
        let product = {
            productName: data.productClassifier.value,
            currencyClassifier: data.currencyClassifier && data.currencyClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currencyClassifier) : null,
            productClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(data.productClassifier),
            ...(data.sum ? { sumInCurrency: `${data.sum}` } : null),
            ...(data.sumInRubles ? { sumInCurrencyEkv: `${data.sumInRubles}` } : null),
        }

        return util._omitBy<Models.DealProductUpdateRequest>(
            product,
        )
    }

    let dealRequest: Models.DealUpdateRequest = {
        id: data.currentDeal.id,
        modId:data.currentDeal.modId,
        accountId:data.accountId,
        title:data.currentDeal.title || '',
        requestType: data.currentDeal.requestTypeClassifier && data.currentDeal.requestTypeClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currentDeal.requestTypeClassifier) : null,
        products:data.currentDeal.products.map((element: ModelsCrm.DealProduct) => {
            return PRODUCT_REQUEST(element)
        }),
        salesMethodClassifier:data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currentDeal.salesMethodClassifier) : null,
        phaseClassifier: {
            code: data.phaseClassifier.code,
            value: data.phaseClassifier.value,
            classifierName: data.phaseClassifier.name
        },
        team: data.currentDeal.memberList.data ?
            data.currentDeal.memberList.data.map((item: ModelsApp.Employee)=>{
                return {
                    member:{
                        person:{
                            firstName: item.firstName,
                            lastName: item.lastName,
                            middleName:item.middleName,
                        },
                        positionId:item.id
                    },
                    isBlocked: item.isBlocked,
                    isGeneral:item.isGeneral,
                    roleClassifier:{
                        code: item.role.code,
                        value: item.role.value,
                        classifierName: item.role.name,
                    }
                }
            })
            : [],

    }

    return util._omitBy<Models.DealUpdateRequest>(
        dealRequest
    )
}
export const RESPONSE_CALL_PUT_DEAL_STAGES_UPDATE_TO_BOOLEAN = (data: any):boolean => {
    return defaultValues.boolean
}

export const RESPONSE_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_TO_BOOLEAN = (data: any):boolean => {
    return defaultValues.boolean
}

export const RESPONSE_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_TO_BOOLEAN = (data: any): boolean => {

    return defaultValues.boolean
}
export const RESPONSE_MEMBER_LIST_CALL_PUT_ACTIVITY_MEMBER_LIST_TO_BOOLEAN = (data: any): boolean => {

    return defaultValues.boolean
}

const DEAL_CONTRACT_PARTICIPANTS_TO_CONTRACT_PARTICIPANT_LIST = (contactParticipants: Array<any>): Models.ContactParticipantList => {
    return {
        data: contactParticipants.map((participant:any)=>{
            return {
                contactId: participant.contactId || '',
                lastName: participant.lastName || '',
                firstName: participant.firstName || '',
                middleName: participant.middleName || '',
                birthday: util.parseServerDate(participant.birthdate),
                role: participant.role || '',
                participantType: participant.participantType || '',
                partLoanSum: participant.partLoanSum || 0,
                partLoanCurrency: CLASSIFIER_TO_CLASSIFIER(participant.partLoanCurrency)
            }
        })
    }
}


const DEAL_STAGES_TO_STAGES = (stages: Array<any> , stagesClassifier: ModelsApp.ClassifierList): Array<Models.DealStage>  => {
        return []
}


export const RESPONSE_EMPLOYEE_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE = (data: any): ModelsApp.Employee => {



    const getFullName = (firstName: string, lastName: string, middleName: string): string => {
        if (typeof lastName !== "undefined") {
            if (typeof firstName !== "undefined" && typeof middleName !== "undefined")
                return `${lastName} ${firstName.charAt(0).toUpperCase()}.${middleName.charAt(0).toUpperCase()}.`
            else
                return `${lastName}`
        } else
            return ``
    }

    const customersExtractor = (data: any): ModelsCrm.Customer[] => {
        if (data.customersList) {
            let results = [];
            for (let i = 0; i < data.customersList.length; i++) {
                results.push({
                    id: data.customersList[i].id,
                    name: data.customersList[i].name,
                    ...defaultValues.Customer
                })
                return results
            }
        } else {
            let results = [];
            results.push({
                id: "1",
                name: "Раздва",
                ...defaultValues.Customer
            })
            results.push({
                id: "2",
                name: "Раздва3",
                ...defaultValues.Customer
            })
            return results
        }
        return []
    }

    const headExtractor = (item: any): ModelsApp.Employee | null => {
        if (item.headId) {
            return {
                ...defaultValues.Employee,
                id: item.headId,
                fullName: util.getStringDataDisplayValue(getFullName(item.headFirstName, item.headLastName, item.headMidName)),
                firstName: util.getStringDataDisplayValue(item.headFirstName),
                lastName: util.getStringDataDisplayValue(item.headLastName),
                middleName: util.getStringDataDisplayValue(item.headMidName),
                jobTitle: util.getStringDataDisplayValue(item.headJobTitle),
                email: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                functionalDivisionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                positionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                territorialDivisionName: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
                workPhoneExtension: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
            }
        }
        return null
    }

    const emptyPhones = {
        mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhoneExtension: null
    }

    const phoneExtractor = (phoneList: Array<any>): ModelsApp.PhoneList => {
        if (phoneList) {
            return phoneList.reduce((result, phone) => {
                if (phone.type == 'MOBILE') {
                    result.mobilePhone = phone.number
                } else if (phone.type == 'WORK') {
                    result.workPhone = phone.number
                    result.workPhoneExtension = phone.extension
                }
                return result
            }, emptyPhones)
        }
        return emptyPhones
    }

    const extractedPhones = data && data.person && data.person.phones ? phoneExtractor(data.person.phones) : null
    return {
        ...defaultValues.Employee,
        id: data.positionId,
        fullName: data && data.person ? getFullName(data.person.firstName, data.person.lastName, data.person.middleName) : '',
        firstName: data && data.person ? data.person.firstName : '',
        lastName: data && data.person ? data.person.lastName : '',
        middleName: data && data.person ? data.person.middleName : '',

        email: data && data.person ? util.getStringDataDisplayValue(data.person.email, util.UndefinedValuesPlaceholder.NO_DATA) : '', // todo нужна ли здесь эта проверка

        jobTitle: data.jobTitle,
        functionalDivisionName: data.funcDivisionName,
        positionName: data.positionName,
        territorialDivisionName: data.terDivisionName,
        mobilePhone: extractedPhones ? extractedPhones.mobilePhone : '',
        workPhone: extractedPhones ? extractedPhones.workPhone : '',
        workPhoneExtension: extractedPhones ? extractedPhones.workPhoneExtension : '',

        head: headExtractor(data),

        customerList: customersExtractor(data)
    }


}
export const RESPONSE_EMPLOYEE_CALL_GET_CUSTOMER_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerList => {
    let clients = data && data.clients ? data.clients.reduce((result: any, item: any) => {
            result.push(CUSTOMER_TO_CUSTOMER(item))
            return result
        }, [])
    : []
    return {data: clients, isCompleted: data && data.page && data.page.isLast ? data.page.isLast : true}
}

export const SEARCH_SUBORDINATE_TO_EMPLOYEE = (data: any) : ModelsApp.Employee => {
    const emptyPhones = {
        mobilePhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhone: util.getStringDataDisplayValue(null, util.UndefinedValuesPlaceholder.NO_DATA),
        workPhoneExtension: null
    }
    const phoneExtractor = (phoneList: Array<any>): ModelsApp.PhoneList => {
        if (phoneList) {
            return phoneList.reduce((result, phone) => {
                if (phone.type == 'MOBILE') {
                    result.mobilePhone = phone.number
                } else if (phone.type == 'WORK') {
                    result.workPhone = phone.number
                    result.workPhoneExtension = phone.extension
                }
                return result
            }, emptyPhones)
        }
        return emptyPhones
    }

    if(!(data && data.positionId)){
        throw {
            type: Enums.ErrorType.JsonConverterError,
            code: '1',
            message: 'Отутствует positionId',
            comment: 'Отутствует positionId'
        }
    }
    const {lastName= "", middleName= "", firstName= ""} = data.person
    const extractedPhones = phoneExtractor(data.person.phones)
    return {
       ...defaultValues.Employee,
       id: data.positionId,
       fullName: `${lastName} ${firstName} ${middleName}`,
       firstName,
       lastName,
       middleName,
       positionName: data.positionName,
       jobTitle: data.jobTitle,
       functionalDivisionName: data.funcDivisionName,
       territorialDivisionName: data.terDivisionName,
       mobilePhone: extractedPhones.mobilePhone,
       workPhone: extractedPhones.workPhone,
       workPhoneExtension: extractedPhones.workPhoneExtension,
       head: data.headId ? {
        ...defaultValues.Employee,
        firstName: data.headFirstName,
        lastName: data.headLastName,
        middleName: data.headMidName,
        jobTitle: data.headJobTitle,
        id: data.headId
       } : null,
       role: {
           parentId: "",
           name: "",
           value: "",
           code: ""
       },
       roleAd: null,
       customerList: [],
    }
}
const CUSTOMER_TO_CUSTOMER = (data: any): Models.Customer => {
    return {...defaultValues.Customer,
        id: data.id,
        name: data.name,
        myClient: data.myClient,
        role: CLASSIFIER_TO_CLASSIFIER(data.roleClassifier),
        organizationType: CLASSIFIER_TO_CLASSIFIER(data.orgTypeClassifier),
        memberList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TEAMPERSON_TO_TEAMMEMBER(data.teamPersons),
    }

}

export const RESPONSE_EMPLOYEE_CALL_GET_SUBORDINATE_LIST_TO_MEMBER_LIST = (data: any): Models.MemberList => {
    if(data && Array.isArray(data)){
        return {data: data.map(SEARCH_SUBORDINATE_TO_EMPLOYEE)}
    }
    return defaultValues.MemberList
}

export const AGENT_CREATE_UPDATE_REQUEST_RESPONSE = (data: any): Models.ResponsePostPutRequest => {

    return {id: data && data.agent && data.agent.personType ?  data.agent.personType.id : '',
            modId: data && data.agent && data.agent.personType ?  data.agent.personType.modId : 0}


}
const OCCASION_ITEM_TO_REQUEST_OCCASION_ITEM= (occasion: Models.Occasion): Models.CreateUpdateOccasionRequest => {

    let occasionDate: Date = occasion.date ? occasion.date : new Date()
    if ( occasion.isAnnual ) {
        occasionDate = new Date(occasionDate.setFullYear(1900))
    }
    return {
        impDateTypeClassifier: {
            code: occasion.type && occasion.type.code ? occasion.type.code : '',
            value: occasion.type && occasion.type.value ? occasion.type.value : '',
            classifierName: 'SBRF_IMP_DATE'
        },
        date: occasionDate.toISOString(),
        modId: occasion.modId || null,
        dateComment: occasion.comment,
        isReminde: false,
        id: occasion.modId ? occasion.id : null,  //удалить id, если modId = 0, это значит новая важная дата
        isYearlyReminde: occasion.isAnnual,
    }
}

const NOTE_ITEM_TO_REQUEST_NOTE_ITEM = (note: Models.Note): Models.CreateUpdateNoteRequest => {
    return {
        noteTypeClassifier: {
            code: note.type && note.type.code || '',
            value: note.type && note.type.value || '',
            classifierName: note.type && note.type.name || '',
        },
        modId: note.modId || null,
        id: note.modId ? note.id : null, //удалить id, если modId = 0, это значит новая заметка
        note: note.text
    }
}

export const AGENT_CREATE_REQUEST = (data: Models.DataForCreateAgentRequest): Models.AgentCreateRequest => {

    const phoneList:Models.AgentMobile[] =  []

    if (data.mobilePhone) {
        phoneList.push({
            number: data.mobilePhone,
            type: 'MOBILE'})
    }
    if (data.workPhone) {
        phoneList.push({
            number: data.workPhone,
            type: 'WORK'})
    }
    return {agent: {isBlocked: false,
                    personType: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        comment: data.comment,
                        middleName: data.middleName,
                        birthday: util.convertToUTCDateFormat(data.birthday) || null,
                        email: data.email,
                        sexClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(GENDER_TO_SEX_CLASSIFIER(data.gender,data.sexClassifierList)),
                        phones: phoneList,
                    },
                    clients: [{
                        id: data && data.customer && data.customer.id || "",
                        position: data.position,
                        relationClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(data.relationType),
                    }]
                   }
            }
}

export const EMPLOYEE_MEMBER_ITEM_TO_REQUEST_EMPLOYEE_MEMBER_ITEM = (employee: ModelsApp.Employee):
    Models.TeamMemberEmployeeRequest | Models.TeamMemberEmployeeWithRoleRequest => {

    if (employee && employee.role && employee.role.value) {
        return {
            member: {positionId: employee.id || "",
                     role: util.getSafeClassifierRequest(employee.role)},
            isGeneral: employee.isGeneral || false,
        }
    } else {
        return {
            member: {positionId: employee.id || ""},
            isGeneral: employee.isGeneral || false,
        }
    }
}
export const RESPONSE_CUSTOMER_EDITOR_CALL_PUT_CUSTOMER_UPDATE_TO_BOOLEAN = (data: any): boolean => {


    // TODO Convert response data to corresponding model.

    return defaultValues.boolean


}
export const REQUEST_AGENT_CALL_PUT_AGENT_OCCASION_LIST_UPDATE_REQUEST = (data: Models.DataForUpdateAgentRequest): Models.AgentOccasionListUpdateRequest  => {

    let phoneList = []
    if (data.mobilePhone) {
        phoneList.push({
            number: data.mobilePhone,
            type: 'MOBILE'
        })
    }
    if (data.workPhone) {
        phoneList.push({
            number: data.workPhone,
            type: 'WORK'
        })
    }

    const agentPersonData: ModelsCrm.AgentPersonDataForUpdateRequest = {
        id: data.id,
        modId: data.modId,
        firstName: data.firstName,
        lastName: data.lastName,
        comment: data.comment,
        middleName: data.middleName,
        birthday: util.convertToUTCDateFormat(data.birthday) || null,
        email: data.email,
        sexClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(GENDER_TO_SEX_CLASSIFIER(data.gender, data.sexClassifierList)),
        phones: phoneList,
    }

    const agentOccasionList = data.occasionList &&
    Array.isArray(data.occasionList.data) ?
        data.occasionList.data.map((occasion: Models.Occasion): any => {
            return _.omitBy(OCCASION_ITEM_TO_REQUEST_OCCASION_ITEM(occasion), _.isNil)
        }) : []

    const agentNoteList = data.noteList &&
    Array.isArray(data.noteList.data) ?
        data.noteList.data.map((note: Models.Note): any => {
            return _.omitBy(NOTE_ITEM_TO_REQUEST_NOTE_ITEM(note), _.isNil)
        }) : []

    const agent = {
        isBlocked: false,
        personType: {...agentPersonData},
        impDates: [...agentOccasionList],
        notes: [...agentNoteList],
    }

    return {agent: {...agent}}
}
export const AGENT_UPDATE_REQUEST = (data: Models.DataForUpdateAgentRequest): Models.AgentUpdateRequest  => {

    let phoneList = [
        {
            number: data.mobilePhone || '',
            type: 'MOBILE'
        },
        {
            number: data.workPhone || '',
            type: 'WORK'
        }
    ]

    const agentPersonData: ModelsCrm.AgentPersonDataForUpdateRequest = {
            id: data.id,
            modId: data.modId,
            firstName: data.firstName,
            lastName: data.lastName,
            comment: data.comment,
            middleName: data.middleName,
            birthday: util.convertToUTCDateFormat(data.birthday) || null,
            email: data.email,
            sexClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(GENDER_TO_SEX_CLASSIFIER(data.gender, data.sexClassifierList)),
            phones: phoneList,
    }

    const agentOccasionList = data.occasionList &&
                              Array.isArray(data.occasionList.data) ?
                              data.occasionList.data.map((occasion: Models.Occasion): any => {
            return _.omitBy(OCCASION_ITEM_TO_REQUEST_OCCASION_ITEM(occasion), _.isNil)
    }) : []

    const agentNoteList = data.noteList &&
        Array.isArray(data.noteList.data) ?
        data.noteList.data.map((note: Models.Note): any => {
            return _.omitBy(NOTE_ITEM_TO_REQUEST_NOTE_ITEM(note), _.isNil)
    }) : []

    const agent = { isBlocked: false,
                    personType: {...agentPersonData},
                    clients: [{
                        id: data && data.customer && data.customer.id || "",
                        position: data.position,
                        relationClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(data.relationType),
                    }],
                    impDates: [...agentOccasionList],
                    notes: [...agentNoteList],
                    team: data.memberList && Array.isArray(data.memberList.data) ?
                        data.memberList.data.map((person: ModelsApp.Employee): Models.TeamMemberEmployeeRequest | Models.TeamMemberEmployeeWithRoleRequest => (
                            EMPLOYEE_MEMBER_ITEM_TO_REQUEST_EMPLOYEE_MEMBER_ITEM(person))) : []
    }

    return {agent: {...agent}}


}
export const SEX_CLASSIFIER_TO_GENDER = (sex: ModelsApp.Classifier): Enums.GenderList => {
    switch (sex.code) {
        case 'F': return Enums.GenderList.Female

        case 'M': return Enums.GenderList.Male

        default: return Enums.GenderList.None
    }
}
export const RESPONSE_AGENT_CALL_GET_AGENT_TO_AGENT = (data: any): Models.Agent => {
    const {agent}: any = data

    return agent ? {
        ...defaultValues.Agent,
        id: agent.id,
        firstName: agent.personType && agent.personType.firstName || null,
        lastName: agent.personType && agent.personType.lastName || null,
        middleName: agent.personType && agent.personType.middleName || null,
        fullName: agent.personType && [agent.personType.lastName, agent.personType.firstName, agent.personType.middleName].join(' ') || null,
        email: agent.personType && agent.personType.email || null,
        modId: agent.personType && agent.personType.modId != null ? agent.personType.modId : 0,
        gender: agent.personType                    &&
                agent.personType.sexClassifier      &&
                agent.personType.sexClassifier.code ?
                    SEX_CLASSIFIER_TO_GENDER(agent.personType.sexClassifier) :
                    Enums.GenderList.None,
        birthday: util.parseServerDate(util._get(agent, 'personType.birthday', null)),
        phoneList: agent.personType && agent.personType.phones ? AGENT_PHONE_NUMBER_LIST_TO_AGENT_PHONE_NUMBER_LIST(agent.personType.phones) : defaultValues.PhoneNumberList,
        customerPositionList: AGENT_CUSTOMER_POSITION_LIST_TO_AGENT_CUSTOMER_POSITION_LIST(agent.clients),
        comment: agent.comment,
        isPrincipal: false,
        isBlocked: false,
        memberList: AGENT_MEMBER_LIST_TO_AGENT_MEMBER_LIST(agent.team),
        noteList: AGENT_NOTE_LIST_TO_AGENT_NOTE_LIST(agent.notes),
        occasionList: AGENT_OCCASION_LIST_TO_AGENT_OCCASION_LIST(agent.impDates),
    } : defaultValues.Agent


}
export const RESPONSE_AGENT_LIST_CALL_GET_AGENT_LIST_TO_AGENT_LIST = (data: any): Models.AgentList => {
    return Array.isArray(data.agents) ? {
        data: data.agents.compact()
            .filter((agentItem: any): boolean => agentItem.agent && agentItem.agent.id)
            .map((agentItem: any): Models.Agent => RESPONSE_AGENT_CALL_GET_AGENT_TO_AGENT(agentItem))

    } : defaultValues.AgentList


}
export const RESPONSE_AGENT_LIST_CALL_GET_AGENT_SEARCH_LIST_TO_AGENT_LIST = (data: any): Models.AgentList => {

    // TODO Convert response data to corresponding model.

    return RESPONSE_AGENT_LIST_CALL_GET_AGENT_LIST_TO_AGENT_LIST(data)


}
export const REQUEST_AGENT_LIST_CALL_GET_AGENT_SEARCH_LIST_FROM_AGENT_SEARCH_LIST_REQUEST = (data: Models.AgentSearchListRequest): any => {

    // TODO Convert response data to corresponding model.

    return data;

}


export const RESPONSE_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_TO_MEMBER_LIST = (data: any): Models.MemberList => {


    const toEmployeeConverter = (item: any) =>
        item.agent ? SEARCH_EMPLOYEE_TO_EMPLOYEE(item.agent) : {}

    return Array.isArray(data.agents)
        ? {data: data.agents.map(toEmployeeConverter)}
        : defaultValues.MemberList;


}

export const RESPONSE_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_EMPLOYEE_TO_MEMBER_LIST = (data: any): Models.MemberList => {

    return Array.isArray(data)
        ? {data: data.map((item)=>{
        const lastName = item.person && item.person.lastName || ''
        const middleName = item.person && item.person.middleName || ''
        const firstName = item.person && item.person.firstName || ''
        return {
            ...defaultValues.Employee,
            id: item.positionId,
            fullName: `${lastName} ${firstName} ${middleName}`,
            firstName: firstName,
            lastName:lastName,
            email: item.person && item.person.email || '',
            middleName: middleName,
            positionName: item.positionName,
            funcDivisionName: item.funcDivisionName,
            jobTitle: item.jobTitle

        }
        })}
        : defaultValues.MemberList;
}

export const REQUEST_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_FROM_AGENT_SEARCH_LIST_REQUEST = (data: Models.MemberSearchListRequest): Models.IAgentSearchRequest | Models.IEmployeeSearchRequest => {
    switch (data.requestType){
        case Enums.memberSearchType.Employee:
            return {
                employee: {
                    ...data.personSearchType
                }
            }
        case Enums.memberSearchType.Agent:
            return {
                agent: {
                    personType: data.personSearchType
                },
                page: 0
            }
    }
}

export const RESPONSE_NOTE_LIST_CALL_PUT_AGENT_NOTE_LIST_UPDATE_AGENT_REQUEST = (data: any): boolean => {
    // TODO Convert response data to corresponding model.
    return defaultValues.boolean
}

export const RESPONSE_DEAL_CREATE_CALL_POST_TO_ID = (data: any):string => {
    // TODO Convert response data to corresponding model.
    return data.id
}

export const RESPONSE_DEAL_STAGE_CARD_UPDATE_REQUEST = (data: any):boolean => {
    // TODO Convert response data to corresponding model.
    return defaultValues.boolean
}

export const RESPONSE_DEAL_UPDATE_CALL_PUT_TO_BOOLEAN = (data: any):boolean => {
    return defaultValues.boolean
}

export const RESPONSE_DEAL_INIT_ROAD_MAP_TO_ID = (data: any):Models.DealInitRoadMapResponseData => {
    return { id: data.id}
}

export const REQUEST_DEAL_INIT_ROAD_MAP_FROM_DEAL_INIT_ROAD_MAP_REQUEST = (data: any):Models.DealInitRoadMapRequestData => {
    return { id: data.id }
}

export const RESPONSE_CALL_PUT_DEAL_UPDATE_TO_BOOLEAN = (data: any):boolean => {
    return defaultValues.boolean
}

export const RESPONSE_CALL_PUT_DEAL_AGENT_LIST_UPDATE_TO_BOOLEAN = (data: any):boolean => {
    return defaultValues.boolean
}

export const REQUEST_DEAL_STAGE_TRACKING_UPDATE_FROM_DEAL_STAGE_UPDATE_REQUEST = (data: Models.DealStageTrackingCommentEditorUpdateRequest ): Models.EditTrackingRequest => {

    let newTrackingList: Array<Models.TrackingRequest> = data.trackingList.data.map((element: Models.Tracking)=>{
        const defaultTrackingElement: Models.TrackingRequest = {
            CRMStageId: element.crmStageId,
            CRMStage: element.crmStage,
        }
        if(element.comment){
            defaultTrackingElement.Comment = element.comment
        }
        if(element.plannedFinishDate){
            defaultTrackingElement.plannedFinishDate = element.plannedFinishDate
        }
        if(element.order){
            defaultTrackingElement.order = element.order
        }
        if(data.inputStage.value == element.crmStage){
            defaultTrackingElement.Comment = data.comment
        }
        return defaultTrackingElement
    })

    return {
        id: data.dealId,
        tracking:  newTrackingList
    }
}

export const REQUEST_DEAL_STAGE_CARD_UPDATE_FROM_STAGE_CARD_UPDATE_REQUEST = (data: Models.DealStageEditorUpdateRequest ): Models.EditTrackingRequest => {

    const updatedStage = {
        CRMStageId: data.updatedStage.crmStage.stage.code,
        CRMStage: data.updatedStage.crmStage.stage.value,
        Comment: data.updatedStage.comment,
        plannedFinishDate: data.updatedStage.endDate,
        order:data.updatedStage.order,
    }
    if ( data.followUpStages && data.followUpStages.length) {

        return {
            id: data.dealId,
            tracking: [
                updatedStage,
                ...data.followUpStages.map( ((stage:Models.DealStage)=>({
                    CRMStageId: stage.stage.code,
                    CRMStage: stage.stage.value,
                    Comment: stage.comment || '',
                    plannedFinishDate: (stage.end && moment(stage.end.date).add( '' +  data.termDiff ,'days' ).toDate()) || null ,
                    order:  stage.order, // stage.durationEstimate + data.termDiff
        })))] }
    }
    return {
        id: data.dealId,
        tracking: [updatedStage]
    }
}

export const REQUEST_DEAL_CREATE_CALL_POST_DEAL_CREATE_FROM_DEAL_EDITOR_UPDATE_REQUEST = (data: Models.DealEditorCreateRequest ): Models.DealCreateRequest | Models.CreditDealCreateRequest => {

    const CREDIT_DEAL_REQUEST = (data: Models.DealEditorCreateRequest):Models.CreditDealCreateRequest => {
        return {
            accountId:data.accountId,
            title:data.title,
            salesMethodClassifier:{
                classifierName: data.salesMethodClassifier.name,
                value: data.salesMethodClassifier.value,
                code: data.salesMethodClassifier.code
            },
            requestType: {
                classifierName: data.requestType.name,
                value: data.requestType.value,
                code: data.requestType.code
            },
            utilization: CLASSIFIER_TO_CLASSIFIER_BACK(data.application) || defaultValues.ClassifierRequest
        }
    }

    const STANDART_DEAL_REQUEST = (data: Models.DealEditorCreateRequest):Models.DealCreateRequest => {
        return {
            accountId:data.accountId,
            title:data.title,
            products:[
                {
                    productClassifier:{
                        classifierName: data.productClassifier.name,
                        value: data.productClassifier.value,
                        code: data.productClassifier.code
                    },
                }
            ],
            salesMethodClassifier:{
                classifierName: data.salesMethodClassifier.name,
                value: data.salesMethodClassifier.value,
                code: data.salesMethodClassifier.code
            }
        }
    }

    if(data.requestType && data.requestType.code == 'KK'){
        return CREDIT_DEAL_REQUEST(data)
    } else {
        return STANDART_DEAL_REQUEST(data)
    }

}

export const REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_FROM_DEAL_EDITOR_UPDATE_REQUEST = (data: Models.DealEditorUpdateRequest ): any => {

    const PRODUCT_REQUEST = (data: ModelsCrm.DealProduct):Models.DealProductUpdateRequest => {
        let product = {
            currencyClassifier: data.currencyClassifier && data.currencyClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currencyClassifier) : null,
            productClassifier: data.productClassifier && data.productClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.productClassifier) : null,
            sumInCurrency: data.sum ? data.sum.toString() : null,
            sumInCurrencyEkv: data.sumInRubles ? data.sumInRubles.toString() : null,
        }

        return util._omitBy<Models.DealProductUpdateRequest>(
            product
        )
    }

    const dealRequest: Models.DealUpdateRequest = {
        id: data.id,
        modId:data.modId,
        accountId:data.accountId,
        title:data.title,
        requestType: data.requestType ? CLASSIFIER_TO_CLASSIFIER_BACK(data.requestType) : null,
        utilization: data.utilization ? CLASSIFIER_TO_CLASSIFIER_BACK(data.utilization) : null,
        probability: data.probability ? data.probability.toString() : null,
        products:data.currentDeal.products.map((element: ModelsCrm.DealProduct) => {
            return PRODUCT_REQUEST(element)
        }),
        salesMethodClassifier: data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currentDeal.salesMethodClassifier) : null,
        plannedFinishDate: data.plannedFinishDate ? util.convertToUTCDateFormat(moment(data.plannedFinishDate).toDate()) : '0001-01-01T12:00:00.000+0000',
        comm: data.comm || null,
        attrChannel: data.attractingChannel ? CLASSIFIER_TO_CLASSIFIER_BACK(data.attractingChannel) : null,
        staffCount: data.staffCount || null,
        team: data.team != null && data.team.data ?
            data.team.data.map((item: ModelsApp.Employee)=>{
                return {
                    member:{
                        person:{
                            firstName: item.firstName,
                            lastName: item.lastName,
                            middleName:item.middleName,
                        },
                        positionId:item.id
                    },
                    isBlocked: item.isBlocked,
                    isGeneral:item.isGeneral,
                    roleClassifier:{
                        code: item.role.code,
                        value: item.role.value,
                        classifierName: item.role.name,
                    }
                }
            })
            : [],
        agents: data.agents.data.map((item: Models.Agent)=>{
            return{
                id: item.id
            }
        })
    }

    return util._omitBy<Models.DealUpdateRequest>(
        dealRequest
    )
}


export const REQUEST_CALL_PUT_DEAL_UPDATE_FROM_CALL_PUT_DEAL_REQUEST = (data: Models.DealAdditionalFieldsUpdateRequest ): any => {

    const PRODUCT_REQUEST = (data: ModelsCrm.DealProduct):Models.DealProductUpdateRequest => {
        let product = {
            currencyClassifier: data.currencyClassifier && data.currencyClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currencyClassifier) : null,
            productClassifier: data.productClassifier && data.productClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.productClassifier) : null,
            sumInCurrency: data.sum ? data.sum.toString() : null,
            sumInCurrencyEkv: data.sumInRubles ? data.sumInRubles.toString() : null,
        }

        return util._omitBy<Models.DealProductUpdateRequest>(
            product
        )
    }

    let dealRequest: any = {
        id: data.currentDeal.id,
        modId:data.currentDeal.modId,
        accountId:data.accountId,
        title:data.currentDeal.title || '',
        requestType: data.currentDeal.requestTypeClassifier && data.currentDeal.requestTypeClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currentDeal.requestTypeClassifier) : null,
        products:data.currentDeal.products.map((element: ModelsCrm.DealProduct) => {
            return PRODUCT_REQUEST(element)
        }),
        salesMethodClassifier: data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currentDeal.salesMethodClassifier) : null,
        sumRur:data.sumInCurrencyEkv,
        currencyClassifier: data.currencyClassifier && data.currencyClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currencyClassifier) : null,
        closeReason:data.closeReason && data.closeReason.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.closeReason) : null,
        plannedFinishDate:  data.plannedFinishDate ? util.convertToUTCDateFormat(moment(data.plannedFinishDate).toDate()) : '0001-01-01T12:00:00.000+0000',
        team: data.memberList.data && Array.isArray(data.memberList.data) && data.memberList.data.length > 0
            ?   data.memberList.data.map((item: ModelsApp.Employee)=>{
                    return {
                        member:{
                            person:{
                                firstName: item.firstName,
                                lastName: item.lastName,
                                middleName:item.middleName,
                            },
                            positionId:item.id
                        },
                        isBlocked: item.isBlocked,
                        isGeneral:item.isGeneral,
                        roleClassifier:{
                            code: item.role.code,
                            value: item.role.value,
                            classifierName: item.role.name,
                        }
                    }
                })
            :   [],
    }
    return _.omitBy(dealRequest, _.isNil)
}


export const REQUEST_CALL_PUT_DEAL_AGENT_LIST_UPDATE_FROM_CALL_PUT_DEAL_AGENT_LIST_REQUEST = (data: Models.IDealAgentListUpdateRequest ): any => {

    const PRODUCT_REQUEST = (data: Models.DealProduct):Models.DealProductUpdateRequest => {
        let product = {
            currencyClassifier: data.currencyClassifier && data.currencyClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.currencyClassifier) : defaultValues.ClassifierRequest,
            productClassifier: data.productClassifier && data.productClassifier.code ? CLASSIFIER_TO_CLASSIFIER_BACK(data.productClassifier) : defaultValues.ClassifierRequest,
        }

        return product
    }

    return {
        id: data.currentDeal.id,
        modId:data.currentDeal.modId,
        accountId:data.accountId,
        title:data.currentDeal.title,
        salesMethodClassifier:{
            classifierName: data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.name ? data.currentDeal.salesMethodClassifier.name : '',
            value: data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.value ? data.currentDeal.salesMethodClassifier.value : '',
            code: data.currentDeal.salesMethodClassifier && data.currentDeal.salesMethodClassifier.code ? data.currentDeal.salesMethodClassifier.code : ''
        },
        products:[
                PRODUCT_REQUEST(data.currentDeal.products[0]),
        ],
        agents: data.agentList.data.map((item: Models.Agent)=>{
            return{
                id: item.id
            }
        })
    }
}


export const GENDER_TO_SEX_CLASSIFIER = (gender: Enums.GenderList, sexClassifierList: ModelsApp.ClassifierList): ModelsApp.Classifier | null => {

    return  sexClassifierList.data.find( sex =>
        sex.code == (gender == Enums.GenderList.Male ? 'M' : (gender == Enums.GenderList.Female ? 'F' : ''))) || null
}

export const REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_ROAD_MAP_FROM_DEAL_UPDATE_REQUEST = (data: Models.DealRoadMapUpdateRequestData ): Models.DealRoadMapUpdateRequest => {

    const result:Models.DealRoadMapUpdateRequest  =  {
        accountId: data.accountId,
        id: data.id,
        modId:data.modId,
        title:data.title,
        roadMapFlag: data.isRoadMapShow,
        salesMethodClassifier:{
            classifierName: data.salesMethodClassifier.name,
            value: data.salesMethodClassifier.value,
            code: data.salesMethodClassifier.code
        },

    }

    if(data.requestType !== null){
        result.requestType = CLASSIFIER_TO_CLASSIFIER_BACK(data.requestType)
    }

    return result

}

export const CONVERT_ERROR = (data: any): Error => {
    const EFS_ERROR_TITLE = 'Ошибка при обращении к шлюзу ЕФС'

    const result = {
        type: Enums.ErrorType.None,
        code: '',
        message: '',
        comment: ''
    }
    if (!data) {
        return result
    }
    const fromSystemError = (code: string,
                             message: any,
                             comment: any = "",
                             type: any = Enums.ErrorType.SystemError): Error => ({
        type,
        code,
        message,
        comment,
    })

    if (data && data.message && data.message.code) { //check is error of DataPower
        return fromSystemError(data.message.code,
            util.getDataPowerErrorMessageByCode(data.message.code) ||
            data.message.text,
            data.message.title ||
            EFS_ERROR_TITLE,
            Enums.ErrorType.PathUrlError )
    }

    if (data.message && data.stack) {
        return {
            code: '',
            message: 'Проверьте, что на устройстве есть доступ к интернету и подключён VPN',
            comment: 'Сервер недоступен',
            type: Enums.ErrorType.NetworkError,
        }
    }

    if (data.comment && data.comment.uuid) {
        return fromSystemError(data.code,
            data.comment,
            data.comment.uuid)
    }

    if (data.message && data.message.uuid) {
        //здесь, видимо, есть ошибки от CRM
        if(data.type  && data.message.code && data.message.code !== ''){
            return {
                type: data.type || Enums.ErrorType.EksProductError,
                code: data.message && data.message.code || "",
                message: `"code":"${data.message.code}" ${util.getCRMErrorMessageByCode(data.message.code)}` || data.message.code,
                comment: data.message.text || data.message.comment || data.message.message || data.message.code
            }
        }
        return fromSystemError(data.message.code,
            data.message.text,
            data.message.uuid,
            Enums.ErrorType.NetworkError)
    }

    if (data.message && data.message.text) {
        return fromSystemError(data.message.code,
            data.message.text,
            data.message.system,
            Enums.ErrorType.NetworkError)
    }

    if (data.type || data.code) {
        return {
            type: data.type || Enums.ErrorType.None,
            code: data.code,
            message: data.title || data.message || data.code,
            comment: data.text || data.comment || data.message || data.code
        }
    }
    // Timeout error
    if (typeof data === 'object' && data.message === TIMEOUT_NETWORK_ERROR_MESSAGE) {
        return {
            type: Enums.ErrorType.NetworkError,
            code: TIMEOUT_STRING_CODE,
            message: data,
            comment: ''
        }
    }


    try {
        result.message = JSON.stringify(data)
        return result
    } catch (e) {
        result.message = data.toString()
        return result
    }


}

export const CONVERT_ERROR_GSZ = (data: any): Error => {

    switch (data.type){
        case Enums.ErrorType.None:
            data.message = 'Сервер недоступен';
            data.comment = 'Проверьте, что на устройстве есть доступ к интернету и подключён VPN';
            break;
        case Enums.ErrorType.NetworkError:
            data.message = 'Соединение прервано';
            data.comment = 'Попробуйте повторить запрос';
            break;
        case Enums.ErrorType.AuthorizationError:
            data.message = 'Ошибка авторизации';
            data.comment = 'Попробуйте повторить запрос';
            break;
        case Enums.ErrorType.SystemError:
            data.message = 'Ошибка';
            data.comment = 'Не удалось загрузить данные';
            break;
        default:
            data.comment = data.message;
            data.message = 'Произошла ошибка';
            break;
    }

    return CONVERT_ERROR(data);

}

export const CONTAINER_EMPLOYEE_FIND_PEOPLE_RESPONSE_TO_PERSON_LIST = (data: OWAService.FindPeopleResponse) : ModelsScheduler.PersonList => {
    const temp = data.Items.map((item:OWAService.FindPeopleResponseItem)=>{
        let [lastName, firstName, middleName] = item.name.split(/[\s]+/)
        return {
            email:item.email.EmailAddress,
            id:item.email.EmailAddress,
            name: item.name,
            lastName:lastName,
            firstName:firstName,
            middleName:middleName
        }
    })
    return {data:temp.filter((item:ModelsScheduler.Person)=>item.email.indexOf('sberbank')>=0)}
}

export const NOTE_LIST_NOTE_LIST_UPDATE_REQUEST = (noteList: Models.NoteList, deleteNoteList: Models.NoteList): any => {
    let notes = noteList.data.map((item)=>{
        return {
            note: item.text,
            id: item.id != ''
                ? item.id.search( /newNoteId/i ) != -1
                    ? null
                    : item.id
                : null,
            modId: item.modId,
            noteTypeClassifier: {
                code: item.type && item.type.code ? item.type.code : '',
                value: item.type && item.type.value ? item.type.value : '',
                classifierName: (item.type && item.type.name) || 'SBRF_NOTE_TYPE'
            },
            isChanged: false
        }
    })
    return notes

}

export const REQUEST_NOTE_LIST_CALL_PUT_AGENT_NOTE_LIST_UPDATE_FROM_AGENT_NOTE_LIST_UPDATE_REQUEST = (data: Models.DataForUpdateAgentRequest): Models.AgentOccasionListUpdateRequest => {
    let phoneList = []
    if (data.mobilePhone) {
        phoneList.push({
            number: data.mobilePhone,
            type: 'MOBILE'
        })
    }
    if (data.workPhone) {
        phoneList.push({
            number: data.workPhone,
            type: 'WORK'
        })
    }

    const agentPersonData: ModelsCrm.AgentPersonDataForUpdateRequest = {
        id: data.id,
        modId: data.modId,
        firstName: data.firstName,
        lastName: data.lastName,
        comment: data.comment,
        middleName: data.middleName,
        birthday: util.convertToUTCDateFormat(data.birthday) || null,
        email: data.email,
        sexClassifier: CLASSIFIER_TO_CLASSIFIER_BACK(GENDER_TO_SEX_CLASSIFIER(data.gender, data.sexClassifierList)),
        phones: phoneList,
    }

    const agentOccasionList = data.occasionList &&
    Array.isArray(data.occasionList.data) ?
        data.occasionList.data.map((occasion: Models.Occasion): any => {
            return _.omitBy(OCCASION_ITEM_TO_REQUEST_OCCASION_ITEM(occasion), _.isNil)
        }) : []

    const agentNoteList = data.noteList &&
    Array.isArray(data.noteList.data) ?
        data.noteList.data.map((note: Models.Note): any => {
            return _.omitBy(NOTE_ITEM_TO_REQUEST_NOTE_ITEM(note), _.isNil)
        }) : []

    const agent = {
        isBlocked: false,
        personType: {...agentPersonData},
        impDates: [...agentOccasionList],
        notes: [...agentNoteList],
    }

    return {agent: {...agent}}
}

export const DEAL_STAGE_TRACKING_TO_DEAL_STAGES = (data: any): ModelsCrm.Tracking => {
    if(data){
        return {
            clientStage: data.ClientStage || '',
            description: data.Description || '',
            crmStage: data.CRMStage || '',
            crmStageId: data.CRMStageId,
            comment: data.Comment || '',
            order: data.order || null,
            plannedFinishDate: util.parseServerDate(data.plannedFinishDate)
        }
    }
    return defaultValues.Tracking
}

export const RESPONSE_CALL_GET_DEAL_STAGE_TRACKING_TO_DEAL_STAGES = (data: any): ModelsCrm.DealStageTracking => {
    if(data && data.tracking && Array.isArray(data.tracking)){
        return {data: data.tracking.map(DEAL_STAGE_TRACKING_TO_DEAL_STAGES)}
    }
    return defaultValues.dealStageTracking
}

export const REQUEST_PRODUCTS_CALL_POST_REQUEST = (data: Models.ProductPostRequest): any => {

    return data

}

export const RESPONSE_CALL_GET_DEAL_ATTACHMENTS_TO_DEAL_ATTACHMENTS = (data: any): Models.IDealAttachmentList => {

    const finalResult =  {...defaultValues.DealAttachmentList}

    const initialData = util.extractObject(data)
    const body = util.extractObject(initialData.body)
    const dataRoot = util.extractArrayElement(body, 0)
    const dataRootFolder = util.extractObject(dataRoot[0].folder)

    const returnDataWithPaths = (dataRoot: any) => {
        const getFolderName = (folderAttributes: any): string | null => {
            if (!folderAttributes ||
                !Array.isArray(folderAttributes) ||
                !folderAttributes.length
            ) {
                return null
            }

            const [folderAttribute, ...restFolderAttributes] = folderAttributes

            return (
                folderAttribute &&
                folderAttribute.aString &&
                folderAttribute.aString.id == "folderName") ?
                folderAttribute.aString.value : getFolderName(restFolderAttributes)
        }

        const getPath = (rootFolder: any, currentFolder: any) => {
            if (!rootFolder) {
                return null
            }

            const rootFolderPath = rootFolder.path

            if (!currentFolder) {
                currentFolder = rootFolder
            }

            const currentFolderAttributes = currentFolder.attrs
            const currentFolderName = getFolderName(currentFolderAttributes)

            return (rootFolderPath ? rootFolderPath : 'root') + ' > ' + currentFolderName
        }

        const getFolderPathInFolders = (rootFolder: any, folders: any) => {
            if (!rootFolder ||
                !folders ||
                !Array.isArray(folders) ||
                !folders.length
            ) {
                return []
            }

            const [firstFolder, ...restFolders] = folders
            const firstFolderWithPath = {
                ...firstFolder,
                path: getPath(rootFolder, firstFolder)
            }
            const firstFolderWithPathAndFolders: any = {
                ...firstFolderWithPath,
                folders: firstFolderWithPath.folders && firstFolderWithPath.folders.length ?
                    getFolderPathInFolders(firstFolderWithPath, firstFolderWithPath.folders) : [],
            }
            const restFoldersWithPathAndFolders: any = restFolders.length ? getFolderPathInFolders(rootFolder, restFolders) : ""

            return [firstFolderWithPathAndFolders, ...restFoldersWithPathAndFolders]
        }

        const dataRootWithPath = {
            ...dataRoot,
            path: getPath(dataRoot, null)
        }

        return {
            ...dataRootWithPath,
            folders: dataRootWithPath.folders && dataRootWithPath.folders.length ? getFolderPathInFolders(dataRootWithPath, dataRootWithPath.folders) : [],
        }
    }

    const dataWithPaths = returnDataWithPaths(dataRootFolder)


    let tempResult: Array<any> = []


    const convertFiles = (data: any) => {

        if ('documents' in data && data.documents.length) {

            data.documents.map((item: any) => {

                let tempItem = {
                    path: data.path,
                    format: item.clazz,
                    DateCreated: null,
                    DocumentTitle: null,
                    Id: null,
                    MajorVersionNumber: null,
                }

                let attrs = util.extractArray(item.attrs)

                attrs.map((attr: any) => {
                    if ('aString' in attr) {
                        let stringParam = util.extractObject(attr.aString)
                        if (stringParam.id) {
                            switch (stringParam.id) {
                                case "DocumentTitle": {
                                    tempItem.DocumentTitle = stringParam.value || ""
                                    break;
                                }
                                case "Id": {
                                    tempItem.Id = stringParam.value || ""
                                    break;
                                }
                            }
                        }
                    }
                    if ('aDate' in attr) {
                        tempItem.DateCreated = attr.aDate.value
                    }
                    if ('aInt' in attr) {
                        let intParam = util.extractObject(attr.aInt)
                        if (intParam.id) {
                            switch (intParam.id) {
                                case "MajorVersionNumber": {
                                    tempItem.MajorVersionNumber = intParam.value || ""
                                    break;
                                }
                            }
                        }
                    }
                })
                tempResult.push(tempItem)
            })
        }
        if ('folders' in data && data.folders.length) {
            data.folders.map((item: any) => {
                convertFiles(item)
            })
        }
    }

    convertFiles(dataWithPaths)


    tempResult.map(item => {
        const enumFileFormat = util.convertFileFormatToEnum(item.format)
        finalResult.data.push({
            ...defaultValues.DealAttachment,
            id: item.Id,
            fileId: item.Id,
            name: item.DocumentTitle,
            format: enumFileFormat,
            path: item.path.split(' > '),
            otherFormat: util.getOtherFormat(enumFileFormat, item.format),
        })
    })

    return finalResult
}

export const RESPONSE_CALL_GET_PARENT_DEAL_DEAL_LIST = (data: any): Models.DealList => {

    const dealArray: Array<Models.Deal> = (data && Array.isArray(data.deals)) ?
        data.deals.map((dealResponse: any): Models.Deal => (
            dealResponse ? {
                ...defaultValues.Deal,
                id: notNull(dealResponse.id),
                modId: dealResponse.modId,
                accountId: dealResponse.accountId,
                isOpen: dealResponse.status === 'Open', // Enums.DealStatus.Open,
                customer: {id: '__empty', name: dealResponse.accountName},
                creationDate: util.parseServerDate(dealResponse.creationDate),
                plannedFinishDate: util.parseServerDate(dealResponse.plannedFinishDate),
                finishDate: util.parseServerDate(dealResponse.finishDate),
                owner: {...defaultValues.Employee, id: dealResponse.ownerId, fullName: dealResponse.opptyOwner},
                progress: parseInt(notNull(dealResponse.completion)),
                phaseClassifier: CLASSIFIER_TO_CLASSIFIER(dealResponse.phaseClassifier),
                products: Array.isArray(dealResponse.products) ? dealResponse.products.map((e: any) => DEAL_PRODUCT_TO_PRODUCT(e)) : undefined,
                roleClassifier: CLASSIFIER_TO_CLASSIFIER(dealResponse.roleClassifier),
                salesMethodClassifier: CLASSIFIER_TO_CLASSIFIER(dealResponse.salesMethodClassifier),
                territorialCoverage: dealResponse.terrCoverage,
                probability: +dealResponse.probability,
                salaryProjectDetails: {
                    fee: dealResponse.comm,
                    staffCount: dealResponse.staffCount ,
                    agreement: {
                        number: dealResponse.payrollAggrement && dealResponse.payrollAggrement.num,
                        date: dealResponse.payrollAggrement && dealResponse.payrollAggrement.date,
                        status: dealResponse.payrollAggrement && CLASSIFIER_TO_CLASSIFIER(dealResponse.payrollAggrement.status),
                    },
                },
                commentList: Array.isArray(dealResponse.comments) ? dealResponse.comments.map((e: any) => DEAL_COMMENT_TO_COMMENT(e)) : undefined,
                requestTypeClassifier: CLASSIFIER_TO_CLASSIFIER(dealResponse.requestType),
                salesCampaign: {
                    id: dealResponse.campaign && dealResponse.campaign.id || '',
                    name: dealResponse.campaign && dealResponse.campaign.name || '',
                },
                parentDeal: {...defaultValues.Deal, id: dealResponse.parentOpptyId, title: dealResponse.parentOpptyDescription},
                application: CLASSIFIER_TO_CLASSIFIER(dealResponse.utilization),
                attractingChannel: CLASSIFIER_TO_CLASSIFIER(dealResponse.attrChannel),
                title: notNull(dealResponse.title),
                isManaged: false,
                decision: Array.isArray(dealResponse.collegials) ? dealResponse.collegials.map((e: any) => COLLEGIALS_TO_DECISION(e,
                                                                                dealResponse.contracts || [], dealResponse.decisionFormat)) : undefined,
                agreement: Array.isArray(dealResponse.approvals) ? dealResponse.approvals.map((e: any) => APPROVAL_TO_AGREEMENT(notNull(e))) : undefined,
                memberList: RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_TEAMPERSON_TO_TEAMMEMBER(dealResponse.team),
                isEditable: false,
                isRoadMapShow: dealResponse.RoadMapFlag,
            } : defaultValues.Deal
        ))
        : []

    return {data: dealArray}

}

export const RESPONSE_CALL_GET_CAMPAIGN_LIST = (data: any): Models.SalesCampaignList => {

    const salesCampaignResultList: Array<Models.SalesCampaign> = (data && Array.isArray(data.campaigns)) ?
        data.campaigns.map((campaignResponse: any): Models.SalesCampaign => ({
            ...defaultValues.SalesCampaign,
            id: (campaignResponse && campaignResponse.id) || '',
            name: (campaignResponse && campaignResponse.name) || '',
        }))
        : []

    return {
        data: salesCampaignResultList,
        isCompleted: data && data.page && data.page.isLast,
    }

}

export const RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE = (data: any): Models.CustomerManagedListPage => {

    let resultList: Models.CustomerManagedListPage = data && Array.isArray(data.clients) ?
        data.clients.reduce((result: Models.CustomerManagedList, item: any) => {
            result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
            return result
        }, {data: [], isLast: false})
        : {data: [], isLast: false}

    resultList.isLast = data && data.page && data.page.isLast

    return resultList
}

export const RESPONSE_PARENT_DEAL_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST = (data: any): Models.CustomerManagedList => {

    let resultList: Models.CustomerManagedList = data && Array.isArray(data.clients) ?
        data.clients.reduce((result: Models.CustomerManagedList, item: any) => {
            result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
            return result
        }, {data: [], isCompleted: false})
        : {data: [], isCompleted: false}

    resultList.isCompleted = data && data.page && data.page.isLast

    return resultList
}

export const RESPONSE_PARENT_DEAL_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST_PAGE = (data: any): Models.CustomerManagedListPage => {

    let resultList: Models.CustomerManagedListPage = data && Array.isArray(data.clients) ?
        data.clients.reduce((result: Models.CustomerManagedList, item: any) => {
            result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
            return result
        }, {data: [], isLast: false})
        : {data: [], isLast: false}

    resultList.isLast = data && data.page && data.page.isLast

    return resultList
}

export const RESPONSE_PARENT_DEAL_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data: any): Models.CustomerManagedList => {

    let resultList: Models.CustomerManagedList = data && Array.isArray(data.clients) ?
        data.clients.reduce((result: Models.CustomerManagedList, item: any) => {
            result.data.push(RESPONSE_APP_CRM_CALL_GET_CUSTOMER_MANAGED_LIST_CUSTOMER_MANAGED_TO_CUSTOMER_MANAGED(item))
            return result
        }, {data: [], isCompleted: false})
        : {data: [], isCompleted: false}

    resultList.isCompleted = data && data.page && data.page.isLast

    return resultList
}
