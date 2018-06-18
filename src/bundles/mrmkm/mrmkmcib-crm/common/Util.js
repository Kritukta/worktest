/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from '../models/Models';
import { mrmkmcibLog, EnumsApp, supParamNames } from 'mrmkmcib-app';
import { Enums } from '../Enums';
import * as Converters from '../models/Converters';
import * as Cache from '../modules/Cache';
import * as _ from 'lodash';
import moment from 'moment';
import { ECM } from 'ufs-mobile-platform';
import { Storage } from 'mrmkmcib-ui';
const CACHE_STORAGE_PREFIX_APP = 'SESSION_CACHE_mrmkmcibDownloads_';
const All_VALUES = '*';
const ISO_DATETIME_STRING_REGEX = /^[0-9]{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])((T|\s)([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]([.][0-9]*)?(Z|([+-]([0-1][0-9]|2[0-3]):?([0-5][0-9])?)))?$/;
const JAVA_DATETIME_STRING_REGEX = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.\d{3}(.*)$/;
const host = (state) => (`${state.user.mrmkmcibCRM.reducerAppCRM.appServerUrl}`);
const url = (state, version = 'v2') => (`${host(state)}/${version
    ? (state.user.mrmkmcibCRM.reducerAppCRM.appServerPath || '').replace(/v\d\/rs/, `${version}/rs`)
    : state.user.mrmkmcibCRM.reducerAppCRM.appServerPath}`);
/*
* @currentCustomerManaged {Models.CustomerManaged} .
* @currentAgent {Models.Agent}
    - Определяет, является ли данный представитель Главным контактом в текущей компании
*/
export const isMainContact = (currentCustomerManaged, currentAgent) => {
    let res = false;
    if (currentCustomerManaged &&
        currentCustomerManaged.id &&
        currentAgent &&
        currentAgent.customerPositionList &&
        currentAgent.customerPositionList.data[0]) {
        res = currentAgent.customerPositionList.data.some((item) => item &&
            item.customerRelations &&
            item.customerId === currentCustomerManaged.id &&
            item.customerRelations.code === "Main Contact");
    }
    return res;
};
/*
* @description - функция сортирует счета компании по полю curBalance от большей суммы к меньшей.
* @param currencyPaymentAccount {Models.GroupCurrencyProductData}
* @applicable:
    - Сортировка счетов компании от большей суммы к меньшей
*/
export const sortProductPaymentAccountList = (currencyPaymentAccount) => {
    return Object.assign({}, currencyPaymentAccount, { productPaymentAccountList: Object.assign({}, currencyPaymentAccount.productPaymentAccountList, { data: currencyPaymentAccount.productPaymentAccountList.data.sort((a, b) => {
                const aCurBalance = _.get(a, 'paymentAccountProduct.curBalance');
                const bCurBalance = _.get(b, 'paymentAccountProduct.curBalance');
                if (aCurBalance && bCurBalance) {
                    if (aCurBalance > bCurBalance)
                        return -1;
                    if (aCurBalance < bCurBalance)
                        return 1;
                }
                return 0;
            }) }) });
};
export const urlAppCRM = {
    refresh_callGetCustomerManagedList: (state, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerState.inputFilterMemberRole;
        let inputStructure = reducerState.inputFilterOrganizationStructure;
        let category = '';
        if (reducerState.inputFilterMemberRole === 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (reducerState.inputFilterOrganizationStructure === 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        return {
            url: `${url(state)}/clients?page=${reducerState.currentPage}&role=${inputRole}&clientType=${inputStructure}${category}`,
            tagList: tagList
        };
    },
    append_callGetCustomerManagedList: (state, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerState.inputFilterMemberRole;
        let inputStructure = reducerState.inputFilterOrganizationStructure;
        let category = '';
        if (reducerState.inputFilterMemberRole === 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (reducerState.inputFilterOrganizationStructure === 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        return {
            url: `${url(state)}/clients?page=${reducerState.currentPage}&role=${inputRole}&clientType=${inputStructure}${category}`,
            tagList: tagList
        };
    },
    search_callGetCustomerSearchList: (state, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerState.inputFilterMemberRole;
        let inputStructure = reducerState.inputFilterOrganizationStructure;
        let category = '';
        if (reducerState.inputFilterMemberRole === 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (reducerState.inputFilterOrganizationStructure === 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        //перевод поискового запроса в верхний регистр - UFO-23593
        return {
            url: `${url(state)}/clients?page=${reducerState.currentSearchPage}${inputRole != 4 ? `&role=${inputRole}` : ''}&clientType=${inputStructure}${category}&searchType=${reducerState.customerSearchType}&searchText=${reducerState.customerSearchType === 4 ? reducerState.inputSearch.toUpperCase() : reducerState.inputSearch}`,
            tagList: tagList
        };
    },
    searchAppend_callGetCustomerSearchListPage: (state, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerState.inputFilterMemberRole;
        let inputStructure = reducerState.inputFilterOrganizationStructure;
        let category = '';
        if (reducerState.inputFilterMemberRole === 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (reducerState.inputFilterOrganizationStructure === 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        //перевод поискового запроса в верхний регистр - UFO-23593
        return {
            url: `${url(state)}/clients?page=${reducerState.currentSearchPage}${inputRole != 4 ? `&role=${inputRole}` : ''}&clientType=${inputStructure}${category}&searchType=${reducerState.customerSearchType}&searchText=${reducerState.customerSearchType === 4 ? reducerState.inputSearch.toUpperCase() : reducerState.inputSearch}`,
            tagList: tagList,
        };
    },
};
/*
* @description - функция возвращает главного исполнителя задачи.
* @param {ModelsCrm.MemberList}
* @applicable:
    - Нахождение главного исполнителя задачи по флагу
*/
export const getGeneralPersonMemberList = (memberList) => {
    return memberList && Array.isArray(memberList.data) ? memberList.data
        .find((employee) => employee.isGeneral) : undefined;
};
/*
* @description - Формат вывода команды на экран .
* @param {ModelsCrm.MemberList}
* @applicable:
    - Отображает команду задачи в заданном формате
*/
export const getActivityMemberListOutput = (memberList) => {
    let generalMember = getGeneralPersonMemberList(memberList);
    let personGeneralData = generalMember ? `${getAgentNameInitials(generalMember)} - главный исполнитель` : "";
    let otherMemberList = memberList && Array.isArray(memberList.data) && memberList.data.length > 1 ? ` (еще ${memberList.data.length - 1})` : '';
    return `${personGeneralData}${otherMemberList}`;
};
export const urlCustomer = {
    callGetCustomer: (state, currentCustomerId, tagList) => {
        return { url: `${url(state)}/clients/id_${currentCustomerId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetLimitNew: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentCustomerId}/limits/legal/new`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetLimitOld: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentCustomerId}/limits/legal/old`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetRequestProductList: (state, active, pollingStatus, operationUuid, service, currentCustomerId, isForceRequest, ttl, tagList) => {
        return {
            url: `${url(state)}/${getProductListUrl(active, pollingStatus, operationUuid, service, currentCustomerId, isForceRequest, ttl)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetCreditProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_Credit, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetSettlementAgreementProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_SettlementAgreement, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetDepositProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_Deposit, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetCorporateCardProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_CorporateCard, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetEncashmentContractProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_EncashmentContract, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetLegalInfoProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_LegalInfo, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetAcquiringProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_Acquiring, productListStatus)}`,
            tagList: tagList
        };
    },
    callGetDboProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_DBO, productListStatus)}`,
            tagList: tagList
        };
    },
    callGetUdboProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_UDBO, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetSalaryProductEksList: (state, reducerState, tagList, productListStatus) => {
        return {
            url: `${url(state)}/${getProductEksListUrl(reducerState, Enums.ClientProductServiceList.AppCRM_Salary, productListStatus)}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
};
export const urlCustomerEditor = {
    callGetCustomerModifierId: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentCustomerManaged.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPutCustomerUpdate: (state, customer, tagList) => {
        return { url: `${url(state)}/clients/id_${customer.id}`, tagList: tagList, };
    },
};
export const urlDealEditor = {
    callPutDealActivityAppend: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
    callPutDealActivityExclude: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
    callPutDealInitRoadMap: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/createClientOpptyMap`, tagList: tagList };
    },
    callPostDealCreate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals`, tagList: tagList };
    },
    callPutDealUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals`, tagList: tagList };
    },
    callGetDealRefresh: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPutDealStageUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/tracking`, tagList: tagList };
    },
    callGetParentDealDealList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomer.id}/deals?page=0&pageSize=100`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetSalesCampaignList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/deals/salesCampaign?page=0&pageSize=100`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
};
export const urlDealStages = {
    callGetDealStageTracking: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/id_${reducerState.currentDeal.id}/tracking`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetNextStages: (state, reducerState, tagList) => {
        let saleMethod = reducerState.currentDeal.salesMethodClassifier && reducerState.currentDeal.salesMethodClassifier.code
            ? reducerState.currentDeal.salesMethodClassifier.code
            : '';
        let saleStage = reducerState.currentDeal.phaseClassifier && reducerState.currentDeal.phaseClassifier.code
            ? reducerState.currentDeal.phaseClassifier.code
            : '';
        return { url: `${url(state, 'v1')}/deals/id_${reducerState.currentDeal.id}/nextStages?saleMethod=${saleMethod}&saleStage=${saleStage}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetHistoryStages: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/id_${reducerState.currentDeal.id}/historyStages`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPutDealStagesUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/changeStage`, tagList: tagList };
    },
    callPutDealUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals`, tagList: tagList };
    },
    callGetCurrentDeal: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.currentDeal.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPutDealStageTrackingUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/tracking`, tagList: tagList, };
    },
};
export const urlDealList = {
    refresh_callGetDealList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId}/${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.isHolding ? "hdeals" : "deals"}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
};
export const displayCustomerWithLegalForm = (customer) => {
    if (customer) {
        let nameCustomer = String(customer.name) && customer.name.replace(/"|'|«|»/g, "") ||
            String(customer.shortName) && customer.shortName.replace(/"|'|«|»/g, "") || 'Нет данных';
        let opfCustomer = customer.legalForm ? customer.legalForm.value : 'Нет данных';
        return `${opfCustomer.toUpperCase()} «${nameCustomer}»`;
    }
    return "Нет данных";
};
export const filterClassifierData = (classifierArray, filterData) => {
    if (classifierArray.length == 0 || filterData.length == 0) {
        return classifierArray;
    }
    const isClassifierToFilter = (classifier) => {
        for (let filterElement of filterData) {
            if (filterElement.code === classifier.code) {
                return true;
            }
        }
        return false;
    };
    let filteredArray = [];
    for (let classifierElement of classifierArray) {
        if (isClassifierToFilter(classifierElement)) {
            filteredArray.push(classifierElement);
        }
    }
    return filteredArray;
};
export const productPostUrl = {
    callGetProductList: (state, service, customerId, tagList) => {
        return { url: `${url(state)}/clients/id_${customerId}/products/${getProductListPath(service)}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    getProductStatus: (state, service, oid, tagList) => {
        return { url: `${url(state)}/products/${getProductListPath(service)}/status/${oid}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlProductPaymentAccount = {
    callGetOperationList: (state, reducerState, force, ttl, tagList) => ({
        url: getPaymentAccountProductEksListUrl(state, reducerState, Enums.PaymentAccountProductServiceList.AppCRM_OperationList, force, ttl),
        tagList: tagList,
        cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
    }),
    callGetCardIndexList: (state, reducerState, force, ttl, tagList) => ({
        url: getPaymentAccountProductEksListUrl(state, reducerState, Enums.PaymentAccountProductServiceList.AppCRM_CardIndexList, force, ttl),
        tagList: tagList,
        cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
    }),
    callGetProductVspInfo: (state, reducerState, tagList) => {
        const paymentAccount = state.user.mrmkmcibCRM.reducerProduct && state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct && state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct;
        if (paymentAccount) {
            return {
                url: `${url(state)}/bankinfo/vsp?regionId=${paymentAccount.regionId}&agencyId=${paymentAccount.agencyId}&branchId=${paymentAccount.branchId}`,
                tagList: tagList,
                cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
            };
        }
        else {
            return { url: '', tagList };
        }
    },
};
export const urlProductCredit = {
    callGetForecastDealList: (state, reducerState, tagList, isForce, ttl) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId}/fc-deals/list?force=${isForce}&status=work&ttl=${ttl}`,
            tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetCovenantList: (state, customer, contractNumber, tagList) => {
        return {
            url: `${url(state, 'v1')}/products/credits/covenants?idValueArg=${contractNumber}&idValueOrg=${customer && customer.id}`,
            tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetPrognosticForecastDealList: (state, reducerState, tagList, isForce, ttl) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId}/fc-deals/list?force=${isForce}&status=new&ttl=${ttl}`,
            tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callPostForecastEventGrantingCreate: (state, tagList) => {
        return {
            url: `${url(state)}/fc-deals/${state.user.mrmkmcibCRM.reducerProductCredit.currentForecastDealId}/events/create`,
            tagList
        };
    },
    callPostForecastEventRepaymentCreate: (state, tagList) => {
        return {
            url: `${url(state)}/fc-deals/${state.user.mrmkmcibCRM.reducerProductCredit.currentForecastDealId}/events/execute`,
            tagList
        };
    },
    callPostForecastEventUpdate: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/fc-deals/events/edit`,
            tagList
        };
    },
    callPostForecastEventDelete: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/fc-deals/events/edit`,
            tagList
        };
    },
    callGetForecastEventList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/fc-deals/${state.user.mrmkmcibCRM.reducerProductCredit.currentForecastDealId}/events/list`,
            tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetPaymentScheduleList: (state, reducerState, tagList) => {
        return {
            url: `${url(state, 'v1')}/products/credits/${state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct && state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct.contractId}/schedule`,
            tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    }
};
export const urlGSZ = {
    refresh_callGetGsz: (state, reducerState, tagList) => {
        return { url: `${url(state)}/gsz/id_${reducerState.currentGszId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    refresh_callGetGszLimit: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentGszId}/limits/gsz/old`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    refresh_callGetGszLimitNew: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentGszId}/limits/gsz/new`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlGszActivityInclude = {
    search_callGetCustomerSearchList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients?page=0${reducerState.inputSearchManagedOnly ? "&role=4" : ""}&searchType=3&searchText=${reducerState.inputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callPostGszActivityIncludeCreate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
};
export const urlGszActivityExclude = {
    search_callGetCustomerSearchList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients?page=0${reducerState.inputSearchManagedOnly ? "&role=4" : ""}&searchType=3&searchText=${reducerState.inputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callPostGszActivityExcludeCreate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
};
export const urlCustomerActivityInclude = {
    search_callGetCustomerSearchList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients?page=0${reducerState.inputSearchManagedOnly ? "&role=4" : ""}&searchType=3&searchText=${reducerState.inputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetCustomer: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.inputCustomer.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPostCustomerActivityIncludeCreate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
};
export const urlCustomerActivityExclude = {
    search_callGetCustomerSearchList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients?page=0${reducerState.inputSearchManagedOnly ? "&role=4" : ""}&searchType=3&searchText=${reducerState.inputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetCustomer: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.inputCustomer.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callPostCustomerActivityExcludeCreate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
};
export const urlLimit = {};
export const urlDeal = {
    refresh_callGetDeal: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.currentDealId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    refresh_callGetDealAgentList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.currentDealId}/agents`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    refresh_callGetDealTracking: (state, reducerState, tagList) => {
        return { url: `${url(state, 'v1')}/deals/id_${reducerState.currentDealId}/tracking`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlEmployee = {
    refresh_callGetEmployee: (state, reducerState, tagList) => {
        return { url: `${url(state)}/employee/id_${reducerState.currentEmployeeId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetEmployeeHead: (state, head, tagList) => {
        return { url: `${url(state)}/employee/id_${head.id}`, tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetCustomerList: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients/positionID/id_${reducerState.currentEmployeeId}?page=0&pageSize=100`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetSubordinateList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/employee/subordinates/id_${reducerState.currentEmployeeId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlAgent = {
    callPostAgentCreate: (state, tagList) => {
        return { url: `${url(state)}/agents`, tagList: tagList };
    },
    callGetAgentModifierId: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents/id_${state.user.mrmkmcibCRM.reducerAgent.currentAgent.id}`, tagList: tagList };
    },
    callPutAgentUpdate: (state, tagList) => {
        return { url: `${url(state)}/agents`, tagList: tagList };
    },
    callGetAgent: (state, currentAgent, tagList) => {
        return { url: `${url(state)}/agents/id_${currentAgent.id}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetAgentById: (state, agentId, tagList) => {
        return { url: `${url(state)}/agents/id_${agentId}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlAgentList = {
    callGetAgentList: (state, id, tagList) => {
        return { url: `${url(state)}/${getAgentListUrl(id)}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetAgentSearchList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents/search`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetCustomerModifierId: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    callGetEmployeeAgentList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
    callGetAgentListModifierId: (state, reducerState, tagList) => {
        return {
            url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId}/agents`,
            tagList: tagList
        };
    },
    callPutCustomerAgentListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId}`, tagList: tagList };
    },
    callPutDealAgentListUpdate: (state, tagList) => {
        return { url: `${url(state)}/deals`, tagList: tagList };
    },
    callGetDealRefresh: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.currentDeal && reducerState.currentDeal.id ? reducerState.currentDeal.id : ''}`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const urlDealAttachments = {
    callGetDealAttachments: (state, tagList) => {
        return { url: `${url(state)}/`, tagList: tagList, cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL], };
    },
};
export const getProductListService = (productType) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return Enums.ClientProductServiceList.AppCRM_Credit;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return Enums.ClientProductServiceList.AppCRM_Deposit;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_CorporateCard;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return Enums.ClientProductServiceList.AppCRM_EncashmentContract;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_LegalInfo;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_Acquiring;
        }
        case Enums.ProductType.DboProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_DBO;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_UDBO;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return Enums.ClientProductServiceList.AppCRM_Salary;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return Enums.ClientProductServiceList.AppCRM_SettlementAgreement;
            }
        default: return Enums.ClientProductServiceList.None;
    }
};
export const getProductListPath = (service) => {
    switch (service) {
        case Enums.ClientProductServiceList.AppCRM_Credit:
            return "credits";
        case Enums.ClientProductServiceList.AppCRM_Acquiring:
            return "acquiring";
        case Enums.ClientProductServiceList.AppCRM_CorporateCard:
            return "corporateCards";
        case Enums.ClientProductServiceList.AppCRM_DBO:
            return "dbo";
        case Enums.ClientProductServiceList.AppCRM_Deposit:
            return "deposits";
        case Enums.ClientProductServiceList.AppCRM_EncashmentContract:
            return "encashmentContracts";
        case Enums.ClientProductServiceList.AppCRM_Salary:
            return "salary";
        case Enums.ClientProductServiceList.AppCRM_SettlementAgreement:
            return "settlementAgreement";
        case Enums.ClientProductServiceList.AppCRM_UDBO:
            return "udbo";
        case Enums.ClientProductServiceList.AppCRM_LegalInfo:
            return "legalInfo";
        default:
            return "";
    }
};
export const urlMemberList = {
    callGetMemberSearchList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/employee/list`, tagList: tagList };
    },
    callGetAgentSearchList: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents/search`, tagList: tagList };
    },
    callPutMemberListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentCustomerManaged.id}`, tagList: tagList };
    },
    callPutDealMemberListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals`, tagList: tagList };
    },
    callPutAgentMemberListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents`, tagList: tagList };
    },
    callGetCustomerModifierId: (state, reducerState, tagList) => {
        return { url: `${url(state)}/clients/id_${reducerState.currentCustomerManaged.id}`, tagList: tagList };
    },
    callGetCustomerForActivity: (state, customerId, tagList) => {
        return { url: `${url(state)}/clients/id_${customerId}`, tagList: tagList };
    },
    callPutActivityMemberListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/tasks`, tagList: tagList };
    },
    callGetDealMemberListRefresh: (state, reducerState, tagList) => {
        return { url: `${url(state)}/deals/id_${reducerState.currentDeal.id}`, tagList: tagList };
    },
};
export const urlNoteList = {
    callPutAgentNoteListUpdate: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents`, tagList: tagList };
    },
    callGetAgent: (state, reducerState, tagList) => {
        return { url: `${url(state)}/agents/id_${reducerState.currentAgent.id}`, tagList: tagList };
    },
};
const requestBuilder = (method, requestData, userHeaderList) => {
    let headers = Object.assign({ businessOperationId: getRandomOperationUuid() }, userHeaderList);
    switch (method) {
        case 'GET': {
            return { method: method, headers: headers };
        }
        default: {
            return { method: method, headers: headers, body: JSON.stringify(requestData) };
        }
    }
};
export const getDataPowerErrorMessageByCode = (code) => {
    switch (code) {
        case "-10": return "Таймаут получения ответа при попытке подписать ЭП";
        case "-11": return "Таймаут получения ответа при попытке проверить подпись ЭП";
        case "-13": return "Не смогли передать на внешний DataPower";
        case "-14": return "Таймаут получения ответного сообщения из очереди на внутреннем DataPower";
        case "-31": return "Не смогли записать сообщение в очередь для подписания";
        case "-33": return "Ошибка формирования ЭП сообщения-запроса";
        case "-41": return "Ошибка валидации на внутреннем Datapower(запросы и файлы ответного архива)";
        case "-42": return "Ошибка валидации на внешнем Datapower(ответы)";
        case "-50": return "Системная ошибка при работе с криптографическим сервисом";
        case "-51": return "Не смогли записать сообщение в очередь для проверки ЭП";
        case "-53": return "Ошибка проверки ЭП сообщения криптосервисом";
        case "-55": return "Ошибка тайм-аута при ожидании ответа от криптосервиса";
        case "-61": return "Системная ошибка при работе с менеджером очередей";
        case "-65": return "Системная ошибка при работе с базой данных";
        case "-90": return "Ошибка наличия SQL-Injection";
        case "-100": return "Неизвестная run-time ошибка";
        case "-101": return "Не найден маршрут";
        case "-151": return "Некорректный ответ от внешнего сервиса";
        case "-152": return "Обрыв HTTP сессии внешним сервисом до таймаута шлюза";
        case "-153": return "Не получили ответа от внешнего сервиса за указанный таймаут";
        case "-154": return "Внешний сервис вернул HTTP ошибку";
        case "-155": return "Не задан URL сервиса";
        case "-156": return "Некорректный ответ от внешнего сервиса";
        case "-157": return "Ответ не является XML/JSON";
        case "-158": return "Запрос не является XML/JSON";
        case "-200": return "Найден вирус";
        default: return "";
    }
};
export const getProductCreditCovenantStatus = (filterValueDate, historyList) => {
    const historyItem = Array.isArray(historyList.data) && historyList.data.find((item) => {
        const monthFact = item.dateFact ? item.dateFact.getMonth() : null;
        const yearFact = item.dateFact ? item.dateFact.getFullYear() : null;
        return (monthFact == (filterValueDate && filterValueDate.getMonth())) &&
            (yearFact == (filterValueDate && filterValueDate.getFullYear()));
    });
    return historyItem ? historyItem.status : '';
};
export const getCRMErrorMessageByCode = (code) => {
    switch (code) {
        case '001': return 'Укажите корректный ИНН';
        case '002': return 'Укажите корректный КПП';
        case '003': return 'Укажите корректный КИО';
        case '004': return 'Укажите корректный ИНН';
        case '005': return 'Укажите корректный ИНН';
        case '006': return 'Укажите корректный email';
        case '007': return 'Укажите корректный телефон в формате +11 цифр';
        case '008': return 'Укажите корректные атрибуты нерезидента';
        case '009': return 'Укажите корректный ИНН';
        case '010': return 'Значение поля КПП должно быть пустым';
        case '011': return 'Укажите корректный ОГРН';
        case '012': return 'Укажите корректный ОГРН';
        case '013': return 'Укажите корректное наименование клиента';
        case '014': return 'Отсутствует доступ к карточке клиента';
        case '015': return 'Найденное количество карточек клиентов превышает допустимый лимит. Пожалуйста, уточните реквизиты, клиента и повторите поиск';
        case '016': return 'Номер клиентского запроса не найден';
        case '017': return 'Клиент уже существует';
        case '018': return 'Найдено несколько клиентов, пожалуйста уточните реквизиты клиента и повторите создание задачи';
        case '019': return 'Мобильный телефон не уникален';
        case '020': return 'Отсутствует доступ к детальной карточке задачи';
        case '021': return 'Задача не отправлена';
        case '022': return 'Получатель не найден';
        case '024': return 'Найдено несколько клиентов, пожалуйста уточните реквизиты клиента и повторите создание карточки, контакта';
        case '032': return 'Техническая ошибка. Пожалуйста, обратитесь в службу сопровождения';
        case '033': return 'Отсутствует доступ к детальной карточке задачи';
        case '034': return 'Телефон контактного лица некорректен';
        case '035': return 'Электронная почта контактного лица некорректна';
        case '036': return 'Техническая ошибка. Пожалуйста, обратитесь в службу сопровождения';
        case '039': return 'Найдено несколько клиентов, пожалуйста уточните реквизиты клиента';
        case '040': return 'Пользователь не найден';
        case '044': return 'Нарушена модель переходов статуса задачи';
        case '049': return 'Не переданы обязательные параметры для создания Клиента';
        case '050': return 'Техническая ошибка. Пожалуйста, обратитесь в службу сопровождения';
        case '051': return 'Отсутствует доступ к детальной карточке контакта (представителя)';
        case '053': return 'Сделка не может быть создана, так как пользователь не входит в команду менеджеров Организации Заемщика';
        case '054': return 'Сделка не может быть создана. Тип сделки не поддерживается.';
        case '055': return 'Отсутствует доступ к детальной карточке сделки';
        case '056': return 'Отсутствует доступ к детальной карточке сотрудника';
        case '057': return 'Клиент не входит в холдинг';
        case '058': return 'Отсутствует доступ к детальной карточке холдинга';
        case 'TIMEOUT': return 'Не был получен ответ от CRM (превышен интервал ожидания запроса). Обратитесь к администратору';
        default: return "";
    }
};
export const call = (url, success, failure, converter, method = 'GET', headers = {}, requestConverter = () => null, requestData = null) => {
    // Recover body from cache
    let cacheData = Cache.responseRecover(url, headers);
    if (cacheData !== null) {
        const cacheTimeExpire = isValidDate(cacheData.cachedDate)
            && url.cacheTime
            && typeof parseInt(url.cacheTime) === 'number' ? new Date(cacheData.cachedDate).getTime() + parseInt(url.cacheTime) : new Date();
        const currentDate = Date.now();
        if (moment(currentDate).isBefore(cacheTimeExpire) || url.cacheTime === undefined) {
            try {
                const data = converter(cacheData.data);
                success({
                    data,
                    cachedDate: parseServerDate(cacheData.cachedDate) || new Date()
                });
                return;
            }
            catch (error) {
                failure(Converters.CONVERT_ERROR(error));
                return;
            }
        }
    }
    mrmkmcibLog.request(method, url.url, headers, requestData);
    fetch(url.url, requestBuilder(method, requestData ? requestConverter(requestData) : null, headers))
        .then(response => {
        mrmkmcibLog.response(url.url, response);
        switch (response.status) {
            case 401: {
                throw getErrorFromHeaderLDAP(response.headers);
            }
            case 200: {
                if (getErrorFromHeaderLDAP(response.headers) != null) {
                    throw getErrorFromHeaderLDAP(response.headers);
                }
                else {
                    try {
                        let json = response.json();
                        return json;
                    }
                    catch (error) {
                        throw {
                            type: Enums.ErrorType.JsonParserError,
                            code: '',
                            message: error,
                            comment: ''
                        };
                    }
                }
            }
            case 500: {
                try {
                    return response.json();
                }
                catch (error) {
                    throw {
                        type: Enums.ErrorType.JsonParserError,
                        code: '',
                        message: response,
                        comment: ''
                    };
                }
            }
            default: {
                throw {
                    type: Enums.ErrorType.NetworkError,
                    code: String(response.status),
                    message: '',
                    comment: ''
                };
            }
        }
    })
        .then(responseJSON => {
        try {
            if (responseJSON.success == true) {
                let body = responseJSON.body;
                // Save body to cache
                Cache.responsePersist(url, body, headers);
                let data = converter(body);
                success({
                    data: data,
                    cachedDate: new Date()
                });
            }
            else if (responseJSON.error) {
                throw responseJSON.error;
            }
            else {
                throw responseJSON;
            }
        }
        catch (error) {
            throw {
                type: Enums.ErrorType.JsonConverterError,
                code: '',
                message: error,
                comment: ''
            };
        }
    })
        .catch(error => {
        mrmkmcibLog.error(url.url, error);
        failure(Converters.CONVERT_ERROR(error));
    });
};
export const log = (text) => {
    // if (__DEV__) {
    //     console.log(text)
    // }
};
export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
export const getAgentListUrl = (id) => {
    return "clients/id_" + (id) + "/agents";
};
Array.prototype.compact = function () {
    const array = this;
    return _.compact(array);
};
Array.prototype.flatten = function () {
    const array = this;
    return _.flatten(array);
};
Array.prototype.reverse = function () {
    const array = this;
    return _.reverse(array);
};
Number.prototype.pluralText = function (one, two, many) {
    const count = Number(this.valueOf());
    let number = Math.abs(count);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return `${many}`;
    }
    number %= 10;
    if (number == 1) {
        return `${one}`;
    }
    if (number >= 2 && number <= 4) {
        return `${two}`;
    }
    return `${many}`;
};
Number.prototype.plural = function (one, two, many) {
    const count = Number(this.valueOf());
    let number = Math.abs(count);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return `${count} ${many}`;
    }
    number %= 10;
    if (number == 1) {
        return `${count} ${one}`;
    }
    if (number >= 2 && number <= 4) {
        return `${count} ${two}`;
    }
    return `${count} ${many}`;
};
Number.prototype.range = function (start = 0, steps = 1) {
    const end = Number(this.valueOf());
    return _.range(start, end, steps);
};
export function sumString(numb, bit = 3, spacer = ' ', fractionLimit = 0) {
    const string = `${Number(numb)}`;
    const parts = string.split('.');
    const integer = parts[0];
    const fraction = fractionLimit ? (fractionLimit.range().map(item => '0').join('') + ((parts.length) > 1 ? parts[1] : '')) : '';
    let slices = [];
    let multiplier = 0;
    while (1) {
        const leading = integer.length - (++multiplier * bit);
        const trailing = leading + bit;
        slices = slices.concat([integer.slice((leading < 0) ? 0 : leading, trailing)]);
        if (leading <= 0) {
            break;
        }
    }
    return `${slices.reverse().join(spacer)}${fraction ? `,${fractionLimit ? fraction.slice(-fractionLimit) : fraction}` : ''}`;
}
Number.prototype.sumString = function (bit = 3, spacer = ' ', fractionLimit = 0) {
    return sumString(this.valueOf(), bit, spacer, fractionLimit);
};
String.prototype.getCapitalFirstChar = function () {
    const word = this;
    return word.charAt(0).toUpperCase();
};
String.prototype.ellipsis = function (limit, end = '...') {
    const string = this.valueOf();
    return ((string.length < limit) || !limit) ? string : (string.substr(0, (limit - end.length)) + end);
};
String.prototype.formatSpacing = function (spaces, spacer = ' ') {
    const string = this;
    return spaces.reduce((reducer, position, index) => ({
        buffer: reducer.buffer + string.slice(reducer.start, position) + ((index == spaces.length - 1) ? '' : spacer),
        start: position,
    }), { start: 0, buffer: '' }).buffer;
};
String.prototype.formatAccountNumber = function () {
    /* Format: 00000000000000000000 => 00000 000 0 0000 0000000 */
    const string = this;
    return string.formatSpacing([5, 8, 9, 13, 20]);
};
Date.prototype.formattedString = function (format = 'DD.MM.YYYY') {
    const date = this, dateMoment = moment(date);
    return dateMoment.format(format);
};
Date.prototype.fromNow = function () {
    const self = this, dateMoment = moment(self);
    return dateMoment.fromNow();
};
Date.prototype.isSame = function (date) {
    const self = this, selfMoment = moment(self), dateMoment = moment(date);
    return selfMoment.isSame(dateMoment);
};
Date.prototype.isBefore = function (date) {
    const self = this, selfMoment = moment(self), dateMoment = moment(date);
    return selfMoment.isBefore(dateMoment);
};
Date.prototype.isAfter = function (date) {
    const self = this, selfMoment = moment(self), dateMoment = moment(date);
    return selfMoment.isAfter(dateMoment);
};
Date.prototype.isSameOrAfter = function (date) {
    const self = this, selfMoment = moment(self), dateMoment = moment(date);
    return selfMoment.isSameOrAfter(dateMoment);
};
Date.prototype.isSameOrBefore = function (date) {
    const self = this, selfMoment = moment(self), dateMoment = moment(date);
    return selfMoment.isSameOrBefore(dateMoment);
};
export const getTroubleGroupCodeString = (key, onlyColor) => {
    switch (key) {
        case Enums.TroubleGroupCode.YellowZone:
            return onlyColor ? 'Yellow'.toLowerCase() : 'Yellow Zone'.toLowerCase();
        case Enums.TroubleGroupCode.GreenZone:
            return onlyColor ? 'Green'.toLowerCase() : 'Green Zone'.toLowerCase();
        case Enums.TroubleGroupCode.RedZone:
            return onlyColor ? 'Red'.toLowerCase() : 'Red Zone'.toLowerCase();
        case Enums.TroubleGroupCode.Notdefined:
            return onlyColor ? 'Not'.toLowerCase() : 'Not defined'.toLowerCase();
        case Enums.TroubleGroupCode.Latecollection:
            return onlyColor ? 'Late'.toLowerCase() : 'Late collection'.toLowerCase();
        case Enums.TroubleGroupCode.Earlycollection:
            return onlyColor ? 'Early'.toLowerCase() : 'Early collection'.toLowerCase();
        case Enums.TroubleGroupCode.BlackZone:
            return onlyColor ? 'Black'.toLowerCase() : 'Black Zone'.toLowerCase();
        default:
            return '';
    }
};
export const getErrorFromHeaderLDAP = (headers) => {
    if (headers != null) {
        //try get error code from appropriate header
        const errorCode = headers.get('sudir_error_code');
        if (errorCode != null) {
            return {
                type: Enums.ErrorType.AuthorizationError,
                code: errorCode,
                message: '',
                comment: ''
            };
        }
        //otherwise, headers are all in content-type
        const headersString = headers.get('content-type');
        const headerArr = headersString ? headersString.split(/\n/g) : [];
        const matchedHeader = headerArr.filter((item) => {
            if (item && item.startsWith('sudir_error_code')) {
                if (item && item.match(/[:\s?](.*)/) && item.match(/[:\s?](.*)/)[1])
                    return item.match(/[:\s?](.*)/)[1].trim();
            }
        });
        if (matchedHeader != null && matchedHeader.length > 0) {
            return {
                type: Enums.ErrorType.AuthorizationError,
                code: matchedHeader[0],
                message: '',
                comment: ''
            };
        }
    }
    return null;
};
export const getNavigationString = (key) => {
    switch (key) {
        case Enums.Navigation.AppCRM: {
            return 'AppCRM';
        }
        case Enums.Navigation.AppCRM_DealEditor_Form: {
            return 'AppCRM_DealEditor_Form';
        }
        case Enums.Navigation.AppCRM_DealEditor: {
            return 'AppCRM_DealEditor';
        }
        case Enums.Navigation.AppCRMLimitOld: {
            return 'AppCRMLimitOld';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationiewCustomerEditorMainString = (key) => {
    switch (key) {
        case Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor: {
            return 'AppCRM_CustomerEditor';
        }
        case Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor_Form: {
            return 'AppCRM_CustomerEditor_Form';
        }
        default: {
            return '';
        }
    }
};
export const getErrorProductList = (reducerState, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? reducerState.creditActiveProductListError
                    : reducerState.creditCloseProductListError;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? reducerState.depositActiveProductListError
                    : reducerState.depositCloseProductListError;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? reducerState.corporateCardActiveProductListError
                : reducerState.corporateCardCloseProductListError;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? reducerState.encashmentContractActiveProductListError
                    : reducerState.encashmentContractCloseProductListError;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return reducerState.legalInfoProductListError;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? reducerState.acquiringActiveProductListError
                : reducerState.acquiringCloseProductListError;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? reducerState.dboActiveProductListError
                : reducerState.dboCloseProductListError;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? reducerState.udboActiveProductListError
                : reducerState.udboActiveProductListError;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? reducerState.salaryActiveProductListError
                : reducerState.salaryCloseProductListError;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? reducerState.settlementAgreementActiveProductListError
                    : reducerState.settlementAgreementCloseProductListError;
            }
        default: return null;
    }
};
export const getEksErrorProductList = (reducerState, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? reducerState.creditActiveProductList.eksErrorList
                    : reducerState.creditCloseProductList.eksErrorList;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? reducerState.depositActiveProductList.eksErrorList
                    : reducerState.depositCloseProductList.eksErrorList;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? reducerState.corporateCardActiveProductList.eksErrorList
                : reducerState.corporateCardCloseProductList.eksErrorList;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? reducerState.encashmentContractActiveProductList.eksErrorList
                    : reducerState.encashmentContractCloseProductList.eksErrorList;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return reducerState.legalInfoProductList.eksErrorList;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? reducerState.acquiringActiveProductList.eksErrorList
                : reducerState.acquiringCloseProductList.eksErrorList;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? reducerState.dboActiveProductList.eksErrorList
                : reducerState.dboCloseProductList.eksErrorList;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? reducerState.udboActiveProductList.eksErrorList
                : reducerState.udboActiveProductList.eksErrorList;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? reducerState.salaryActiveProductList.eksErrorList
                : reducerState.salaryCloseProductList.eksErrorList;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? reducerState.settlementAgreementActiveProductList.eksErrorList
                    : reducerState.settlementAgreementCloseProductList.eksErrorList;
            }
        default: return [];
    }
};
export const getNavigationCustomerEditorStepString = (key) => {
    switch (key) {
        case Enums.NavigationViewCustomerEditorStep.AppCRM_CustomerEditor_Address: {
            return 'CustomerEditorAddress';
        }
        case Enums.NavigationViewCustomerEditorStep.AppCRM_CustomerEditor_View: {
            return 'CustomerEditorView';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationCustomerEditorString = (key) => {
    switch (key) {
        case Enums.NavigationViewCustomerEditor.AppCRM_CustomerEditor_View: {
            return 'CustomerEditorView';
        }
        case Enums.NavigationViewCustomerEditor.AppCRM_CustomerEditor_Country: {
            return 'CustomerEditorCountry';
        }
        default: {
            return '';
        }
    }
};
export const getErrorTitleOccasionList = (occasionListContextMode) => {
    switch (occasionListContextMode) {
        case Enums.OccasionListContextMode.Agent:
            return "Произошла ошибка при сохранении изменений карточки представителя";
        case Enums.OccasionListContextMode.CustomerManaged:
            return "Произошла ошибка при сохранении изменений карточки клиента";
        default: return 'Произошла ошибка при сохранении изменений';
    }
};
export const getAgentContextMode = (agentListContextMode) => {
    switch (agentListContextMode) {
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {
            return Enums.AgentContextMode.Activity;
        }
        case Enums.AgentListContextMode.Scheduler: {
            return Enums.AgentContextMode.Scheduler;
        }
        case Enums.AgentListContextMode.Customer: {
            return Enums.AgentContextMode.Customer;
        }
        case Enums.AgentListContextMode.Deal: {
            return Enums.AgentContextMode.Deal;
        }
        default: return Enums.AgentContextMode.None;
    }
};
/*
* @description - функция проверяет равны ли массивы, типа справочника, между собой, независимо от порядка следования элементов.
* @param {ModelsApp.ClassifierList}
* @param {ModelsApp.ClassifierList}
* @applicable:
    - Для отображения активности кнопки, если исходные элементы справочника отличаются от выбранных
* @author - Voronov S.I.
*/
export const isArrayClassifierEqual = (appliedFilterValueList, defaultfilterValueList) => {
    if (Array.isArray(defaultfilterValueList.data) && Array.isArray(appliedFilterValueList.data)) {
        return JSON.stringify(defaultfilterValueList.data
            .map((value) => value.code)
            .sort()) == JSON.stringify(appliedFilterValueList.data
            .map((value) => value.code)
            .sort());
    }
    return false;
};
export const getNavigationContentEmployee = (key) => {
    switch (key) {
        case Enums.NavigationContentEmployee.AppCRM_Employee: {
            return 'AppCRM_Employee';
        }
        case Enums.NavigationContentEmployee.AppCRM_CustomerList: {
            return 'AppCRM_CustomerList';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentStringDealEditor = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrmDealEditor.AppCRM_DealEditor_Form: {
            return 'AppCRM_DealEditor_Form';
        }
        // case Enums.NavigationContentAppCrmDealEditor.AppCRM_DealEditor_Classifier: {
        //     return 'AppCRM_DealEditor_Classifier'
        // }
        default: {
            return '';
        }
    }
};
export const getCountProductCovenantFilterList = (filterList) => {
    if (filterList && Array.isArray(filterList.data) && filterList.data.length == 1) {
        return '';
    }
    return `(еще ${filterList && Array.isArray(filterList.data) && filterList.data.length - 1})`;
};
export const getNavigationAppCRMForecastEventEditor = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm: {
            return 'AppCRM_ForecastEventEditorForm';
        }
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorType: {
            return 'AppCRM_ForecastEventEditorType';
        }
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorCurrency: {
            return 'AppCRM_ForecastEventEditorCurrency';
        }
    }
};
export const getNavigationContentPrognosticCreditProduct = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct: {
            return 'AppCRM_PrognosticCreditProduct';
        }
        case Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductDetailPage: {
            return 'AppCRM_PrognosticCreditProductDetailPage';
        }
        case Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductCreatePage: {
            return 'AppCRM_PrognosticCreditProductCreatePage';
        }
        case Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductUpdatePage: {
            return 'AppCRM_PrognosticCreditProductUpdatePage';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentCreditProduct = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct: {
            return 'AppCRM_CreditProduct';
        }
        case Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductForecastPage: {
            return 'AppCRM_CreditProductForecastPage';
        }
        case Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductPaymentSchedule: {
            return 'AppCRM_CreditProductPaymentSchedule';
        }
        default: {
            return '';
        }
    }
};
export const getNavitgationAppCRMForecastEventEditor = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm: {
            return 'AppCRM_ForecastEventEditorForm';
        }
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorType: {
            return 'AppCRM_ForecastEventEditorType';
        }
        case Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorCurrency: {
            return 'AppCRM_ForecastEventEditorCurrency';
        }
    }
};
export const getNavigationContentCreditForecastEventFilterPopup = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter: {
            return 'AppCRM_Filter';
        }
        case Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_PeriodChoice: {
            return 'AppCRM_PeriodChoice';
        }
        case Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_PeriodCustomDateChoice: {
            return 'AppCRM_PeriodCustomDateChoice';
        }
        case Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_EventType: {
            return 'AppCRM_EventType';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentStringDealEditorForm = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrmDealEditorForm.AppCRM_DealEditor_Step_Main: {
            return 'AppCRM_DealEditor_Step_Main';
        }
        case Enums.NavigationContentAppCrmDealEditorForm.AppCRM_DealEditor_Step_Additional: {
            return 'AppCRM_DealEditor_Step_Additional';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationCRMProductListString = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMProductList.AppCRM_ProductContainer: {
            return 'AppCRM_ProductContainer';
        }
        case Enums.NavigationAppCRMProductList.AppCRM_ProductList: {
            return 'AppCRM_ProductList';
        }
        case Enums.NavigationAppCRMProductList.AppCRM_ProductListWithFilterList: {
            return 'AppCRM_ProductListWithFilterList';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationOperationPeriodTypeString = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMOperationListFilter.OperationListPeriod: {
            return 'NavigationAppCRMOperationListFilter-OperationListPeriod';
        }
        case Enums.NavigationAppCRMOperationListFilter.OperationListFilter: {
            return 'NavigationAppCRMOperationListFilter-OperationListFilter';
        }
        default:
            return 'Unknown';
    }
};
export const getNavigationProductAcquiringIdString = (key) => {
    switch (key) {
        case Enums.NavigationProductAcquiring.AppCRM_Acquiring: return 'NavigationProductAcquiring';
        default: return '';
    }
};
export const getNavigationContentProductPaymentAccountCard = (key) => {
    switch (key) {
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard: {
            return 'AppCRM_PaymentAccountCard';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_RestrictionList: {
            return 'AppCRM_PaymentAccount_RestrictionList';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_CardIndexList: {
            return 'AppCRM_PaymentAccount_CardIndexList';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_TariffList: {
            return 'AppCRM_PaymentAccount_TariffList';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_VSPService: {
            return 'AppCRM_PaymentAccount_VSPService';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_OperationList: {
            return 'AppCRM_PaymentAccount_OperationList';
        }
        case Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_Dashboard: {
            return 'AppCRM_PaymentAccount_Dashboard';
        }
        default: {
            return 'AppCRM_PaymentAccountCard';
        }
    }
};
export const getNavigationDealListFiltersString = (key) => {
    switch (key) {
        case Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main: {
            return 'DealListFilters_Main';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentStringDealConfirmSaveStagePopover = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrmDealConfirmSaveStagePopover.AppCrmDealRoadMapPopover_Zero: {
            return 'AppCrmDealConfirmSaveStagePopover_Zero';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentStringDealRoadMapPopover = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_Zero: {
            return 'AppCrmDealRoadMapPopover_Zero';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationContentString = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrm.AppCRM_CustomerList: {
            return 'AppCRM_CustomerList';
        }
        case Enums.NavigationContentAppCrm.AppCRM_Customer: {
            return 'AppCRM_Customer';
        }
        case Enums.NavigationContentAppCrm.AppCRM_GSZ: {
            return 'AppCRM_GSZ';
        }
        case Enums.NavigationContentAppCrm.AppCRM_ProductList: {
            return 'AppCRM_ProductList';
        }
        case Enums.NavigationContentAppCrm.AppCRM_MemberList: {
            return 'AppCRM_MemberList';
        }
        case Enums.NavigationContentAppCrm.AppCRM_Deal: {
            return 'AppCRM_Deal';
        }
        case Enums.NavigationContentAppCrm.AppCRM_DealEditor: {
            return 'AppCRM_DealEditor';
        }
        case Enums.NavigationContentAppCrm.AppCRM_CreditProductForecastDealInfo: {
            return 'AppCRM_CreditProductForecastDealInfo';
        }
        case Enums.NavigationContentAppCrm.AppCRM_CreditProductForecastProductInfo: {
            return 'AppCRM_CreditProductForecastProductInfo';
        }
        case Enums.NavigationContentAppCrm.AppCRM_DealStage: {
            return 'AppCRM_DealStage';
        }
        case Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments: {
            return 'AppCRM_DealScreenAttachments';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationAppCrmDealEditorString = (key) => {
    switch (key) {
        case Enums.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker: {
            return 'AppCRM_DealEditor_ParentDealPicker';
        }
        case Enums.NavigationContentDealEditor.AppCRM_DealEditor_CampaignPicker: {
            return 'AppCRM_DealEditor_CampaignPicker';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationAppCrmString = (key) => {
    switch (key) {
        case Enums.NavigationAppCRM.AgentListScreen: {
            return 'AppCRM_AgentListScreen';
        }
        case Enums.NavigationAppCRM.AgentScreen: {
            return 'AppCRM_AgentScreen';
        }
        case Enums.NavigationAppCRM.NoteListScreen: {
            return 'AppCRM_NoteListScreen';
        }
        case Enums.NavigationAppCRM.OccasionListScreen: {
            return 'AppCRM_OccasionListScreen';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationPopoverCustomerString = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList: {
            return 'AppCRM_Customer_OwnerList';
        }
        case Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList_Agents: {
            return 'AppCRM_Customer_OwnerList_Agents';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationPopoverString = (key) => {
    switch (key) {
        case Enums.NavigationContentAppCrmGszBorrowers.AppCRM_GSZ_Borrowers: {
            return 'AppCRM_GSZ_Borrowers';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationIntoExcludeIncludeViewString = (key) => {
    switch (key) {
        case Enums.NavigationIntoExcludeIncludeView.IncludeExclude_View: {
            return 'IncludeExclude_View';
        }
        case Enums.NavigationIntoExcludeIncludeView.IncludeExclude_ClientsSearch: {
            return 'IncludeExclude_ClientsSearch';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationCustomerEditInIncludeExcludeOrganizationString = (key) => {
    switch (key) {
        case Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer: {
            return 'EditorContainer';
        }
        case Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View: {
            return 'CustomerEditor_Include_View';
        }
        case Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View: {
            return 'CustomerEditor_Exclude_View';
        }
        default: {
            return '';
        }
    }
};
/*
* @description - Идентификаторы панелей для включения/исключения ГСЗ .
* @param {Enums.NavigationGszEditInIncludeExcludeOrganization}
* @applicable:
    - Выдает идентификатор панелям ГСЗ в зависимости от ключа.
*/
export const getNavigationGszEditInIncludeExcludeOrganizationString = (key) => {
    switch (key) {
        case Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_EditorContainer: {
            return 'Gsz_EditorContainer';
        }
        case Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Include_View: {
            return 'Gsz_CustomerEditor_Include_View';
        }
        case Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Exclude_View: {
            return 'Gsz_CustomerEditor_Exclude_View';
        }
        default: {
            return '';
        }
    }
};
export const getNavigationPopoverMembersString = (key) => {
    switch (key) {
        case Enums.MemberList.AppCRM_MemberList_List:
        case Enums.MemberList.AppCRM_MemberList_Member:
        case Enums.MemberList.AppCRM_MemberList_Search:
        case Enums.MemberList.AppCRM_MemberList_SelectRole: {
            return 'AppCRM_MemberList';
        }
        default: {
            return '';
        }
    }
};
export const getRoleString = (key) => {
    switch (key) {
        case 'Клиентский менеджер': {
            return 'КМ';
        }
        default: {
            return key;
        }
    }
};
/**
 * @description - Функция принимает строку обозначающую роль пользователя и возвращает соответствующий Enum
 * @param {string} key
 * @returns {Enums.UserRole}
 * @author - Tarverdyan N. K.
 */
export const getRoleEnum = (key) => {
    switch (key) {
        case 'KM Member': {
            return Enums.UserRole.KM;
        }
        case 'Primary KM': {
            return Enums.UserRole.GKM;
        }
        default: {
            return Enums.UserRole.Unknown;
        }
    }
};
export const getRoleByOrganizationTypeString = (key, organizationTypeCode) => {
    switch (key) {
        case 'Клиентский менеджер': {
            if (organizationTypeCode != null && organizationTypeCode == 'Holding') {
                return 'ГКМ';
            }
            return 'КМ';
        }
        default: {
            return key;
        }
    }
};
export const getProblemGroupCircleColor = (code) => {
    switch (code.toLowerCase()) {
        case 'желтая зона':
        case 'yellow zone':
        case 'yellow':
            return '#FFCD00';
        case 'зеленая зона':
        case 'green zone':
        case 'green':
            return 'rgb(126,211,33)';
        case 'красная зона':
        case 'red zone':
        case 'red':
            return '#FE3824';
        case 'не определен':
        case 'not defined':
        case 'not':
            return 'rgb(126,211,33)';
        case 'поздний сбор':
        case 'late zone':
        case 'late':
            return '#FE3824';
        case 'ранний сбор':
        case 'early zone':
        case 'early':
            return '#FFCD00';
        case 'черная зона':
        case 'black zone':
        case 'black':
            return '#2F2F2F';
        default:
            return 'rgba(126,211,33,0)';
    }
};
export const getNavigationNoteList = (key) => {
    switch (key) {
        case Enums.NavigationNoteList.NoteList: {
            return 'NoteList';
        }
        case Enums.NavigationNoteList.NoteScreen: {
            return 'NoteScreen';
        }
        default: {
            return '';
        }
    }
};
export const addressFormatFull = (address) => {
    if (address == null) {
        return getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA);
    }
    const formattedAddress = [
        address.country ? address.country.value : '',
        address.postalCode,
        address.subject,
        address.region,
        address.city ? `г. ${address.city}` : '',
        address.settlement,
        address.street,
        address.house ? `д. ${address.house}` : '',
        address.building != null ? `c. ${address.building}` : '',
        address.block ? `'к. ${address.block}` : '',
        address.office ? `'кв. ${address.office}` : ''
    ].filter(item => item != null && item.length > 0).join(',');
    return formattedAddress == null || formattedAddress.trim() == '' ?
        getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA) :
        formattedAddress.trim();
};
export var UndefinedValuesPlaceholder;
(function (UndefinedValuesPlaceholder) {
    UndefinedValuesPlaceholder[UndefinedValuesPlaceholder["NO_DATA"] = 0] = "NO_DATA";
    UndefinedValuesPlaceholder[UndefinedValuesPlaceholder["UNDEFINED"] = 1] = "UNDEFINED";
    UndefinedValuesPlaceholder[UndefinedValuesPlaceholder["EMPTY"] = 2] = "EMPTY";
    UndefinedValuesPlaceholder[UndefinedValuesPlaceholder["NO"] = 3] = "NO";
})(UndefinedValuesPlaceholder || (UndefinedValuesPlaceholder = {}));
export const getAgentLeftScreenNavigationTitleText = (agentContextMode) => {
    switch (agentContextMode) {
        case Enums.AgentContextMode.AgentList: {
            return 'Представители';
        }
        default: return "";
    }
};
export const getAgentMemberListOutput = (memberList) => {
    let firstMember = memberList && Array.isArray(memberList.data) &&
        memberList.data.find((person) => person.isGeneral) || defaultValues.Employee;
    let otherMemberList = memberList && Array.isArray(memberList.data) && memberList.data.length > 1 ? ` (еще ${memberList.data.length - 1})` : '';
    return `${getAgentNameInitials(firstMember)}${otherMemberList}`;
};
export const getPlaceholderStringRepresentation = (value) => {
    switch (value) {
        case UndefinedValuesPlaceholder.NO_DATA: {
            return 'Нет данных';
        }
        case UndefinedValuesPlaceholder.UNDEFINED: {
            return 'Не определено';
        }
        case UndefinedValuesPlaceholder.EMPTY: {
            return '';
        }
        case UndefinedValuesPlaceholder.NO: {
            return 'Нет';
        }
        default: {
            return 'Нет данных';
        }
    }
};
export const borrowerListSearch = (list, inputBorrowerListSearch) => {
    return {
        data: list.data.filter(item => {
            return item.fullName.toLowerCase().indexOf(inputBorrowerListSearch.toLowerCase()) >= 0 || item.shortName.toLowerCase().indexOf(inputBorrowerListSearch.toLowerCase()) >= 0;
        })
    };
};
export const noDataPlaceHolder = () => getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA);
export const getNumberDataDisplayValue = (data, placeholderType = UndefinedValuesPlaceholder.NO_DATA) => {
    return data != null ? data : getPlaceholderStringRepresentation(placeholderType);
};
export const getGroupProductListByCurrency = (currency, groupProductList) => (groupProductList.data
    .find((clientProductPaymentAccount) => clientProductPaymentAccount.currencyClassifier.code === currency.code));
export const addNewItemInCurrencyProductList = (listPaymentAccountProduct, currencyProductItem) => {
    return [currencyProductItem, ...listPaymentAccountProduct.data];
};
export const defaultCurrencyProductItem = (currencyClassifier, summa) => {
    return (Object.assign({}, defaultValues.GroupCurrencyProductData, { currencyClassifier,
        summa }));
};
export const getStatusProductListFilter = (status) => {
    switch (status) {
        case Enums.ProductListAgreementStatus.Opened:
            return "Действующие";
        case Enums.ProductListAgreementStatus.Closed:
            return "Закрытые";
        case Enums.ProductListAgreementStatus.Prognostic:
            return "Прогнозные";
        default:
            return "Действующие";
    }
};
export const isPollingStatusInProgress = (productPollingStatus) => (productPollingStatus == Enums.ProductPollingStatus.InProgress);
export const getProductListPollingStatus = (pollingStatus) => {
    switch (pollingStatus) {
        case "IN_PROCESSING":
            return Enums.ProductPollingStatus.InProgress;
        case "COMPLETED":
            return Enums.ProductPollingStatus.Success;
        case "ERROR":
            return Enums.ProductPollingStatus.Error;
        default:
            return Enums.ProductPollingStatus.Success;
    }
};
export const sortProductCurrencyList = (productCurrencyList, productList) => {
    const orderCurrencyList = productCurrencyList.data.map(currency => currency.code);
    return productList.data.sort((productOne, productTwo) => {
        if (orderCurrencyList.indexOf(productOne.currencyClassifier.code) == -1 || (orderCurrencyList.indexOf(productOne.currencyClassifier.code) > orderCurrencyList.indexOf(productTwo.currencyClassifier.code))) {
            return 1;
        }
        else if (orderCurrencyList.indexOf(productTwo.currencyClassifier.code) == -1 || (orderCurrencyList.indexOf(productOne.currencyClassifier.code) < orderCurrencyList.indexOf(productTwo.currencyClassifier.code))) {
            return -1;
        }
        return 0;
    });
};
export const extractPaymentAccountCurrencyList = (productList) => (Array.isArray(productList.data) ? (productList.data.map(({ paymentAccountProduct }) => (paymentAccountProduct &&
    paymentAccountProduct.currencyClassifier ||
    defaultValues.Classifier)).filter((currency) => (currency.code ? true : false))) : []);
export const extractDepositCurrencyList = (productList) => (Array.isArray(productList.data) ? (productList.data.map(({ depositProduct }) => (depositProduct &&
    depositProduct.currencyClassifier ||
    defaultValues.Classifier)).filter((currency) => (currency.code ? true : false))) : []);
export const extractCreditCurrencyList = (productList) => (Array.isArray(productList.data) ? (productList.data.map(({ creditProduct }) => (creditProduct &&
    creditProduct.currencyClassifier ||
    defaultValues.Classifier)).filter((currency) => (currency.code ? true : false))) : []);
export const filterSortedCurrencyList = (currencyList, list) => (Array.isArray(currencyList.data) ? ({
    data: currencyList.data.filter((currency) => {
        return list.findIndex((productCurrency) => (currency && productCurrency
            ? currency.code == productCurrency.code
            : false)) >= 0;
    })
}) : defaultValues.ClassifierList);
export const filterPaymentAccountProductListByCurrency = (productList, currency) => (Array.isArray(productList.data) ? (Object.assign({}, productList, { data: productList.data.filter(({ paymentAccountProduct }) => (paymentAccountProduct &&
        paymentAccountProduct.currencyClassifier && (paymentAccountProduct.currencyClassifier.code == currency.code) || false)) })) : defaultValues.SettlementAgreementProductList);
export const filterDepositProductListByCurrency = (productList, currency) => (Array.isArray(productList.data) ? (Object.assign({}, productList, { data: productList.data.filter(({ depositProduct }) => (depositProduct &&
        depositProduct.currencyClassifier && (depositProduct.currencyClassifier.code == currency.code) || false)) })) : defaultValues.DepositProductList);
export const filterCreditProductListByCurrency = (productList, currency) => (Array.isArray(productList.data) ? (Object.assign({}, productList, { data: productList.data.filter(({ creditProduct }) => (creditProduct &&
        creditProduct.currencyClassifier && (creditProduct.currencyClassifier.code == currency.code) || false)) })) : defaultValues.CreditProductList);
export const sumPaymentAccountProductListByCurrency = (productList) => (Array.isArray(productList.data) ? (productList.data.reduce((sum, { paymentAccountProduct }) => (sum += paymentAccountProduct && paymentAccountProduct.curBalance || 0), 0)) : 0);
export const sumDepositProductListByCurrency = (productList) => (Array.isArray(productList.data) ? (productList.data.reduce((sum, { depositProduct }) => (sum += depositProduct && depositProduct.depositAmountRest || 0), 0)) : 0);
export const sumCreditProductListByCurrency = (productList) => (Array.isArray(productList.data) ? (productList.data.reduce((sum, { creditProduct }) => (sum += creditProduct && creditProduct.debtSum || 0), 0)) : 0);
export const isValidDate = (data) => {
    return data && moment(data).isValid() || JAVA_DATETIME_STRING_REGEX.test(data);
};
/*
* @description - Валидация переданного значения на формат даты и создания объекта Date, при успешной валидации
* @param {any}
* @use
    - Проверка корректности переданного значения, которая приходит от мастер-систем, соответствию форматы даты и
    безопасный перевод строки в объект Date (c new Date существуют проблемы при сборке в релизе)
* @author - Voronov S.I.
*/
export const parseServerDate = (data) => {
    if (data && isValidDate(data)) {
        if (JAVA_DATETIME_STRING_REGEX.test(data)) {
            let [, date, time, timezone] = data.match(JAVA_DATETIME_STRING_REGEX) || ['', '', '', ''];
            if (timezone !== 'Z') {
                timezone = `${timezone.substring(0, 3)}:${timezone.substring(3)}`;
            }
            data = `${date}T${time}${timezone}`;
        }
        return new Date(data);
    }
    return null;
};
export const getIsActiveAgreementProductText = (activeAgreement) => {
    return activeAgreement ? 'Открыт' : 'Закрыт';
};
export const getClassifierDataDisplayValue = (data, placeholderType = UndefinedValuesPlaceholder.NO_DATA) => {
    if (data && data.code) {
        return data;
    }
    else {
        return {
            parentId: getPlaceholderStringRepresentation(placeholderType),
            value: getPlaceholderStringRepresentation(placeholderType),
            code: getPlaceholderStringRepresentation(placeholderType),
            name: getPlaceholderStringRepresentation(placeholderType)
        };
    }
};
export const searchGszMemberList = (list, inputSearch) => {
    if (inputSearch.length === 0) {
        return [];
    }
    return list.filter(item => (isStringIncludesSubstringFromWordStart(item.fullName, inputSearch) ||
        isStringIncludesSubstringFromWordStart(item.shortName, inputSearch))) || [];
};
export const getStringDataDisplayValue = (data, placeholderType = UndefinedValuesPlaceholder.NO_DATA) => {
    return data || getPlaceholderStringRepresentation(placeholderType);
};
export const isCustomerManaged = (customerUnknown, user) => {
    const userId = user.id;
    if (customerUnknown.holder && customerUnknown.holder.id == userId) {
        return true;
    }
    if (customerUnknown.curator && customerUnknown.curator.id == userId) {
        return true;
    }
    if (!customerUnknown.memberList || customerUnknown.memberList.data.length === 0) {
        return false;
    }
    const result = customerUnknown.memberList.data.filter(item => {
        return item.id === userId;
    });
    return (result.length === 1);
};
export const getCustomerManaged = (customerUnknown, user) => {
    const result = Object.assign({}, defaultValues.CustomerManaged, { hierarchy: customerUnknown.hierarchy, id: customerUnknown.id, name: customerUnknown.name, shortName: customerUnknown.shortName, role: customerUnknown.role, legalForm: customerUnknown.legalForm, organizationType: customerUnknown.organizationType, isMyClient: true, isNSL: customerUnknown.isNSL, isHolding: customerUnknown.isHolding, isOldNkp: customerUnknown.isOldNkp, isTempBlockedForOppty: customerUnknown.isTempBlockedForOppty, isExistPrimaryAddress: customerUnknown.isExistPrimaryAddress, modId: customerUnknown.modId, memberList: customerUnknown.memberList, segment: customerUnknown.segment, category: customerUnknown.category, partnership: customerUnknown.partnership, status: customerUnknown.status, holder: customerUnknown.holder, curator: customerUnknown.curator, gsz: customerUnknown.gsz, registrationCountry: customerUnknown.registrationCountry, troubleGroup: customerUnknown.troubleGroup, troubleCriteriaList: customerUnknown.troubleCriteriaList, ownerList: customerUnknown.ownerList, sector: customerUnknown.sector, resident: customerUnknown.resident, kindOfIndustry: customerUnknown.kindOfIndustry, kpp: customerUnknown.kpp, inn: customerUnknown.inn, kio: customerUnknown.kio, occasionList: customerUnknown.occasionList, supervisingDepartment: customerUnknown.supervisingDepartment, rating: customerUnknown.rating, agentList: customerUnknown.agentList, anchorOrganisation: customerUnknown.anchorOrganisation, affiliateList: customerUnknown.affiliateList, address: customerUnknown.address, priority: customerUnknown.priority });
    return result;
};
export const getCustomer = (customerUnknown, user) => {
    const result = Object.assign({}, defaultValues.Customer, { hierarchy: customerUnknown.hierarchy, id: customerUnknown.id, name: customerUnknown.name, shortName: customerUnknown.shortName, role: customerUnknown.role, legalForm: customerUnknown.legalForm, organizationType: customerUnknown.organizationType, isMyClient: false, isNSL: customerUnknown.isNSL, isHolding: customerUnknown.isHolding, modId: customerUnknown.modId, memberList: customerUnknown.memberList, segment: customerUnknown.segment, category: customerUnknown.category, status: customerUnknown.status, holder: customerUnknown.holder, curator: customerUnknown.curator, gsz: customerUnknown.gsz, registrationCountry: customerUnknown.registrationCountry, troubleGroup: customerUnknown.troubleGroup, 
        //FIXME Remove any.  troubleCriteriaList: customerUnknown.troubleCriteriaList,
        troubleCriteriaList: customerUnknown.troubleCriteriaList, ownerList: customerUnknown.ownerList, sector: customerUnknown.sector, resident: customerUnknown.resident, kindOfIndustry: customerUnknown.kindOfIndustry, kpp: customerUnknown.kpp, inn: customerUnknown.inn, kio: customerUnknown.kio, occasionList: customerUnknown.occasionList, agentList: customerUnknown.agentList, affiliateList: customerUnknown.affiliateList, anchorOrganisation: customerUnknown.anchorOrganisation, address: customerUnknown.address, supervisingDepartment: customerUnknown.supervisingDepartment, rating: customerUnknown.rating, priority: customerUnknown.priority, partnership: customerUnknown.partnership });
    return result;
};
export const currencyString = (c) => {
    if (!c) {
        return '-';
    }
    if (typeof (c) === 'string') {
        return c;
    }
    const currency = c;
    return currency && (currency.value || currency.code || currency.name);
};
export const unique = (arr, selector = (e) => e) => arr.reduce((res, c) => {
    if (res.findIndex((e) => selector(e) === selector(c)) < 0) {
        res.push(c);
    }
    return res;
}, []);
// fix me
export const formatNumberAsSum = (num, base = 0) => num !== null && num !== undefined
    ? (+(+('' + num).replace(',', '.')).toFixed(base)).toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1 ')
    : '';
export const format = {
    sum: (num, base = 0, curr, undefinedPlaceholder = getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA)) => num !== null && num !== undefined
        ? formatNumberAsSum(num, base) + ' ' + currencyString(curr)
        : undefinedPlaceholder,
    date: (d, fmt = 'DD.MM.YYYY') => d && moment(d).format(fmt),
    percents: (v) => v ? `${v} %` : '',
    phoneNumber: (num) => {
        if (!num)
            return "";
        if (num && num.length === 12 && num.slice(0, 1) === '+' && !isNaN(parseFloat(num))) {
            return [
                num.slice(0, 2),
                num.slice(2, 5),
                num.slice(5, 8),
                num.slice(8, 10),
                num.slice(10, 12),
            ].join(' ');
        }
        else {
            return num;
        }
    },
    truncate: (str, maxLength) => (str || '').length > maxLength ? (str || '').substr(0, maxLength - 3) + '...' : (str || '')
};
export const dealToString = (deal) => {
    return `${deal.id} ${deal.customer.name} ${deal.title} ${format.sum(deal.sum, 5, deal.currency && deal.currency.code)}
    ${deal.products ? deal.products.map(product => formatNumberAsSum(product.sum, 5) + product.productClassifier.value).join(' ') : null}`.toLowerCase();
};
export const getDealSearchList = (dealList, search) => {
    if (search.length === 0) {
        return defaultValues.DealList;
    }
    return {
        data: dealList.data.filter((deal) => Boolean(dealToString(deal).match(new RegExp('(?:^|[ ])+' + search.trim(), 'gi'))))
    };
};
export const getDealFilteredList = (dealList, start, end) => {
    return {
        data: dealList.data.filter((deal) => {
            if (deal.isOpen) {
                return true;
                // FIXME Invalid code
                // return moment(deal.plannedFinishDate).isBetween(moment(start), moment(end), null, '[]')
            }
            else {
                return true;
                // FIXME Invalid code
                // return moment(deal.finishDate).isBetween(moment(start), moment(end), null, '[]')
            }
        })
    };
};
/**
 * Функция для определения атрибута, по которому осуществляется поиск
 * @param {String} text
 *  @return Enums.CustomerSearchType
 */
export const getCustomerSearchType = (text) => {
    if (text && text.length > 2) {
        if (text.match(/^\d+$/)) {
            if (text.length === 9)
                return Enums.CustomerSearchType.KPP;
            else if (text.length === 10)
                return Enums.CustomerSearchType.INN;
            else
                return Enums.CustomerSearchType.Name;
        }
        else if (text.match(/^\d-.*$/))
            return Enums.CustomerSearchType.Account;
        else
            return Enums.CustomerSearchType.Name;
    }
    return Enums.CustomerSearchType.LessThanThreeChars;
};
export const getDealTypeTitle = (type, requestType) => {
    if (type === Enums.DealType.Credit) {
        return 'Кредитная сделка';
    }
    if (requestType && requestType.value) {
        return `Сделка ${requestType.value}`;
    }
    return 'Стандартная сделка';
};
export const getProductTypeName = (type) => {
    switch (type) {
        case Enums.ProductType.AcquiringProduct:
            return 'Эквайринг';
        case Enums.ProductType.BankGuaranteeProduct:
            return 'Банковская гарантия';
        case Enums.ProductType.CashManagementProduct:
            return 'Cash-management';
        case Enums.ProductType.ContractConstructorProduct:
            return 'Договор-конструктор';
        case Enums.ProductType.ContractNsoProduct:
            return 'Договор НСО';
        case Enums.ProductType.ContractSdoProduct:
            return 'Договор СДО';
        case Enums.ProductType.CorporateCardProduct:
            return 'Корпоративная карта';
        case Enums.ProductType.CreditProduct:
            return 'Кредит';
        case Enums.ProductType.CurrencyControlProduct:
            return 'Внешнеэкономическая деятельность';
        case Enums.ProductType.CustomsPaymentProduct:
            return 'Таможенные платежи';
        case Enums.ProductType.DboProduct:
            return 'Договор ДБО';
        case Enums.ProductType.DepositProduct:
            return 'Депозит';
        case Enums.ProductType.EncashmentProduct:
            return 'Инкассация';
        case Enums.ProductType.PackageProduct:
            return 'Пакет услуг';
        case Enums.ProductType.PaymentAccountProduct:
            return 'Расчётный счет';
        case Enums.ProductType.SalaryProduct:
            return 'Зарплатный проект';
        case Enums.ProductType.SelfEncashmentProduct:
            return 'Прием наличных денежных средств на счет через УС';
        case Enums.ProductType.TariffPlanProduct:
            return 'Тарифный план';
        case Enums.ProductType.None:
        default:
            return 'Наименование не определено';
    }
};
export const getProductListTypeName = (type) => {
    switch (type) {
        case Enums.ProductType.AcquiringProduct:
            return 'Эквайринг';
        case Enums.ProductType.BankGuaranteeProduct:
            return 'Банковские гарантии';
        case Enums.ProductType.CashManagementProduct:
            return 'Cash-management';
        case Enums.ProductType.ContractConstructorProduct:
            return 'Договоры-конструкторы';
        case Enums.ProductType.ContractNsoProduct:
            return 'Договоры НСО';
        case Enums.ProductType.ContractSdoProduct:
            return 'Договоры СДО';
        case Enums.ProductType.CorporateCardProduct:
            return 'Корпоративные карты';
        case Enums.ProductType.CreditProduct:
            return 'Кредиты';
        case Enums.ProductType.CurrencyControlProduct:
            return 'Внешнеэкономическая деятельность';
        case Enums.ProductType.CustomsPaymentProduct:
            return 'Таможенные платежи';
        case Enums.ProductType.DboProduct:
            return 'Договоры ДБО';
        case Enums.ProductType.DepositProduct:
            return 'Депозиты';
        case Enums.ProductType.EncashmentProduct:
            return 'Инкассация';
        case Enums.ProductType.PackageProduct:
            return 'Пакеты услуг';
        case Enums.ProductType.PaymentAccountProduct:
            return 'Расчётные счета';
        case Enums.ProductType.SalaryProduct:
            return 'Зарплатный проект';
        case Enums.ProductType.SelfEncashmentProduct:
            return 'Прием наличных денежных средств на счет через УС';
        case Enums.ProductType.TariffPlanProduct:
            return 'Тарифные планы';
        case Enums.ProductType.None:
        default:
            return 'Наименование не определено';
    }
};
export const getGenderStringValue = (gender) => {
    switch (gender) {
        case Enums.GenderList.Male: return "Мужской";
        case Enums.GenderList.Female: return "Женский";
        default: return "Нет данных";
    }
};
export const filterAgentSearchList = (inputAgentList, foundAgentList, searchRequest, agentListContextMode) => {
    switch (agentListContextMode) {
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.Activity: {
            return Array.isArray(inputAgentList.data) ?
                foundAgentList.data.filter((agent) => agent.fullName ? agent.fullName.toLowerCase().includes(searchRequest.toLowerCase()) : false).filter((foundAgent) => inputAgentList.data.find((inputAgent) => inputAgent.id == foundAgent.id) == undefined) : [];
        }
        default: return Array.isArray(inputAgentList.data) &&
            Array.isArray(foundAgentList.data) ?
            foundAgentList.data
                .filter((foundAgent) => inputAgentList.data.find((inputAgent) => inputAgent.id == foundAgent.id) == undefined)
            : [];
    }
};
export const getAgentCustomerPositionByAgentListContext = (customer, agent, agentListContextMode) => {
    let agentJob = agent.customerPositionList &&
        Array.isArray(agent.customerPositionList.data) &&
        agent.customerPositionList.data.find((position) => customer ? position.customerId == customer.id : false) || agent.customerPositionList.data[0] || null;
    return agentJob ? `${agentJob.position || ''}` : '';
};
export const getAgentCustomerPosition = (customer, agent) => {
    let position = agent.customerPositionList &&
        Array.isArray(agent.customerPositionList.data) && agent.customerPositionList.data.length > 0 &&
        (agent.customerPositionList.data.find((position) => customer ? position.customerId == customer.id : false)) || agent.customerPositionList.data[0] || null;
    return position ? `${position.position || getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA)}` : '';
};
export const getAgentCustomerCompany = (customer, agent) => {
    const company = agent.customerPositionList.data.find((company) => company.customerId == customer.id) || null;
    return company ? `${company.company || getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA)}` :
        getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.UNDEFINED);
};
export const parseFullName = (fullName) => {
    if (!fullName || !fullName.trim()) {
        return null;
    }
    const names = fullName.trim().split(/\s+/);
    return Object.assign({}, defaultValues.Agent, { lastName: names.length > 0 ? names[0] : null, firstName: names.length > 1 ? names[1] : '', middleName: names.length > 2 ? names[2] : '' });
};
export const getAgentNameInitials = (agent) => ((agent && agent.lastName && agent.firstName) ?
    `${agent.lastName} ${agent.firstName.getCapitalFirstChar()}. ${agent.middleName && agent.middleName.length > 0 ? agent.middleName.getCapitalFirstChar() + '.' : ''}` :
    (agent && agent.fullName && getAgentNameInitials(parseFullName(agent.fullName))) || getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA));
export const getAgentFullName = (agent) => ((agent && (agent.fullName || `${agent.lastName} ${agent.firstName} ${agent.middleName}`.trim())) || '');
export const formatDealListSum = (item) => item.sum
    ? format.sum(item.sum, 5, item.currency && item.currency.code).replace('.', ',')
    : '-';
export const findGeneralMember = (memberList) => {
    const result = { data: [] };
    if (memberList && memberList.data && memberList.data.length) {
        const main = memberList.data.find((element) => element.isGeneral);
        if (main) {
            result.data.push(main);
            return result;
        }
    }
    return result;
};
export const sortAgentList = (agentList) => {
    return agentList && Array.isArray(agentList.data)
        ? agentList.data.sort((firstPerson, secondPerson) => {
            if (firstPerson.isPrincipal && !secondPerson.isPrincipal) {
                return -1;
            }
            if (secondPerson.isPrincipal && !firstPerson.isPrincipal) {
                return 1;
            }
            let firstPersonName = firstPerson && firstPerson.fullName ||
                getFullNameRepresentation(firstPerson);
            let secondPersonName = secondPerson && secondPerson.fullName ||
                getFullNameRepresentation(secondPerson);
            if (firstPersonName < secondPersonName)
                return -1;
            if (firstPersonName > secondPersonName)
                return 1;
            return 0;
        })
        : [];
};
export const getAgentInitials = (agent) => ((agent && agent.lastName && agent.firstName) ?
    `${agent.lastName.getCapitalFirstChar()}${agent.firstName.getCapitalFirstChar()}` :
    '');
const NO_DATA = getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA);
export const moreCount = (array) => array.length > 1 ? `(ещё ${array.length - 1})` : '';
export const productLine = (deal) => {
    if (deal.products == null || deal.products.length == 0) {
        return NO_DATA;
    }
    if (deal.products.length == 1) {
        return deal.products[0].productClassifier.value;
    }
    const first = deal.products[0];
    return `${first.productClassifier.value} ${moreCount(deal.products)}`;
};
export const getPersonName = (person) => {
    if (!person) {
        return '';
    }
    return `${person.lastName} ${person.firstName.charAt(0).toUpperCase()}.${person.middleName.charAt(0).toUpperCase()}.`;
};
export function getSafeData(data, type) {
    return typeof data == type ? data : null;
}
export function getSafeClassifierRequest(data) {
    return data && (typeof data == 'object') ? ({
        classifierName: getSafeData(data.name, 'string') || '',
        value: getSafeData(data.value, 'string') || '',
        code: getSafeData(data.code, 'string') || '',
    }) : null;
}
export const agentListPrincipal = (agentList, agentId, isPrincipal) => {
    return {
        data: agentList.data.map((agent) => (Object.assign({}, agent, { isPrincipal: (agent.id == agentId) ? isPrincipal : agent.isPrincipal })))
    };
};
export const customerEditorDefaultAddress = (previousState, customer) => {
    return Object.assign({}, previousState, { inputCountry: customer.address && customer.address.country ? customer.address.country : defaultValues.Classifier, inputSubject: customer.address && customer.address.subject ? customer.address.subject : '', inputRegion: customer.address && customer.address.region ? customer.address.region : '', inputCity: customer.address && customer.address.city ? customer.address.city : '', inputSettlement: customer.address && customer.address.settlement ? customer.address.settlement : '', inputStreet: customer.address && customer.address.street ? customer.address.street : '', inputHouse: customer.address && customer.address.house ? customer.address.house : '', inputBuilding: customer.address && customer.address.building ? customer.address.building : '', inputBlock: customer.address && customer.address.block ? customer.address.block : '', inputFlat: customer.address && customer.address.flat ? customer.address.flat : '' });
};
export const agentListAdd = (agentList, agent, role, currentCustomerManaged, currentActivity, currentDeal) => {
    //TODO Добавление представителей в сделку, добавление представителей в задачу
    if (!agent.customerPositionList.data) {
        agent.customerPositionList.data = [];
    }
    agent.customerPositionList.data = agent.customerPositionList.data.filter(item => item.customerId != null && item.customerId != '');
    if (role.code == 'Основной контакт') {
        agent = Object.assign({}, agent, { isPrincipal: true });
    }
    if (currentCustomerManaged && currentCustomerManaged.id != null && currentCustomerManaged.id != '') {
        agent.customerPositionList.data = _.unionBy(agent.customerPositionList.data.slice(), [{
                customerId: currentCustomerManaged.id,
                customerRelations: role,
                position: '',
                company: '',
                organizationType: defaultValues.Classifier,
                legalFormClassifier: defaultValues.Classifier
            }], 'id');
    }
    return {
        data: _.unionBy(agentList.data, [agent], 'id')
    };
};
const uniqueNotEmptyClassifiers = (list) => {
    const notNullItems = list.filter((item) => item && item.name);
    const uniqueItems = [...getClassifierUniqueValuesByCode({ data: notNullItems }).data];
    return uniqueItems;
};
export const fillDealFilterStageList = (dealList) => {
    const result = { data: [] };
    const uniqueItems = uniqueNotEmptyClassifiers(dealList.map((deal) => deal.phaseClassifier || defaultValues.Classifier));
    // схлопываем дубли по наименованиям (в код кладем коды через запятую)
    uniqueItems.reduce((acc, stageItem) => {
        const existingIndex = result.data.findIndex((item) => item.value === stageItem.value);
        if (existingIndex === -1) {
            acc.data.push(stageItem);
        }
        else {
            acc.data[existingIndex].code += `,${stageItem.code}`;
        }
        return acc;
    }, result);
    return result;
};
const leadCodesOrdered = ['RUR', 'USD', 'EUR', 'GBP'];
export const fillDealFilterCurrencyList = (dealList) => {
    const result = { data: [] };
    const uniqueItems = uniqueNotEmptyClassifiers(dealList.data.map((deal) => deal.currency || defaultValues.Classifier));
    // кладем в начало массива результатов основные валюты в порядке сортировки
    leadCodesOrdered.forEach((leadValue) => {
        const currency = uniqueItems.find((currency) => leadValue === (currency.code || '').toUpperCase());
        if (currency) {
            result.data.push(currency);
        }
    });
    // после основных добавляем все остальные уникальные, встреченные в сделках
    uniqueItems.forEach((currency) => {
        const currencyIndex = leadCodesOrdered.findIndex((leadValue) => leadValue === (currency.code || '').toUpperCase());
        if (currencyIndex === -1) {
            result.data.push(currency);
        }
    });
    return result;
};
export const getDealList = (dealList, filterState, filter, getDate) => {
    const now = moment(new Date());
    const dealFilterAccept = (deal) => {
        const endDate = getDate(deal);
        let shortEndDate = endDate ? endDate.setHours(0, 0, 0, 0) : null;
        let shortDateTo = filter && filter.dateTo ? filter.dateTo.setHours(0, 0, 0, 0) : null;
        let shortDateFrom = filter && filter.dateFrom ? filter.dateFrom.setHours(0, 0, 0, 0) : null;
        if (shortDateFrom) {
            if (!shortEndDate || !moment(shortEndDate).isSameOrAfter(shortDateFrom)) {
                return false;
            }
        }
        if (shortDateTo) {
            if (!shortEndDate || !moment(shortEndDate).isSameOrBefore(shortDateTo)) {
                return false;
            }
        }
        if (filter && filter.products && filter.products.data && filter.products.data.length) {
            if (!deal.products || !deal.products.length) {
                return false;
            }
            const filterProducts = filter.products.data.map(e => e.value);
            const dealProducts = new Set(deal.products.map(e => e.productClassifier.value));
            const intersection = filterProducts.filter((n) => dealProducts.has(n));
            if (!intersection || !intersection.length) {
                return false;
            }
        }
        const filerSumFrom = filter && convertStringToNumber(filter.sumFrom);
        const filterSumTo = filter && convertStringToNumber(filter.sumTo);
        if (filerSumFrom) {
            if (!deal.sum || deal.sum < filerSumFrom) {
                return false;
            }
        }
        if (filterSumTo) {
            if (!deal.sum || deal.sum > filterSumTo) {
                return false;
            }
        }
        if (filter && filter.stage) {
            if (!deal.phaseClassifier) {
                return false;
            }
            const stages = filter.stage.code.split(',');
            if (stages.indexOf(deal.phaseClassifier.code) === -1) {
                return false;
            }
        }
        if (filter && filter.currency) {
            // если не указана сумма, то валюту мы не учитываем
            if (!(deal.sum && deal.currency && deal.currency.value) || deal.currency.code !== filter.currency.code) {
                return false;
            }
        }
        if (filter && filter.role) {
            if (!deal.roleClassifier || deal.roleClassifier.code !== filter.role.code) {
                return false;
            }
        }
        return true;
    };
    const sortDeals = (dealLeft, dealRight) => {
        const top = dealLeft.isOpen ? -1 : 1;
        const bottom = dealLeft.isOpen ? 1 : -1;
        if (!getDate(dealLeft)) {
            return -1;
        }
        if (!getDate(dealRight)) {
            return 1;
        }
        if (moment(getDate(dealLeft) || now).isSame(moment(getDate(dealRight) || now))) {
            return 0;
        }
        if (moment(getDate(dealLeft) || now).isBefore(moment(getDate(dealRight) || now))) {
            return top;
        }
        return bottom;
    };
    const filterDateClosed = (deal) => (deal.isOpen || moment(getDate(deal) || now).isSameOrBefore(now));
    return {
        data: dealList.data
            .filter((deal) => filterDateClosed(deal) && filterState(deal) && dealFilterAccept(deal))
            .map((deal) => (Object.assign({}, deal, { isManaged: false }))).sort(sortDeals)
    };
};
export const getDealOpenedList = (dealList, filter) => {
    return getDealList(dealList, (deal) => deal.isOpen, filter, (deal) => deal.plannedFinishDate);
};
export const getDealClosedList = (dealList, filter) => {
    return getDealList(dealList, (deal) => !deal.isOpen, filter, (deal) => deal.finishDate);
};
export const detectUnits = (num, units) => {
    if (num !== 0 && !num) {
        return '';
    }
    switch (num) {
        case 1:
            return units[0];
        case 2:
        case 3:
        case 4:
            return units[1];
        default:
            return units[2];
    }
};
export const detectUnitsString = (str, units) => {
    if (str !== '' && !str) {
        return '';
    }
    switch (str.substr(-1)) {
        case '1':
            return units[0];
        case '2':
        case '3':
        case '4':
            return units[1];
        default:
            return units[2];
    }
};
export const isDealManaged = (team, user) => {
    if (team && team.length) {
        const role = myRoleInDeal(team, user);
        if (role) {
            return ['Primary KM', 'KM Member'].findIndex(e => role.code === e) != -1;
        }
    }
    return false;
};
export const myRoleInDeal = (team, user) => {
    const member = team.find(e => e.id === user.id);
    return (member && member.role) || null;
};
export const isLargestCustomer = (customer) => (customer && customer.segment && customer.segment.code && customer.segment.code.toLowerCase() === "largest");
export const isCustomerCategoryConglomerate = (category) => {
    return (category && (category.code == "Conglomerate")) ? true : false;
};
export const isTypeOrganizationHolding = (orgTypeClassifier) => {
    return (orgTypeClassifier && (orgTypeClassifier.code == "Holding")) ? true : false;
};
/*
 * @description - функция возвращает объект с информацией о возможности создания/редактирования сделок клиента
 *
 * @param { customer } Models.CustomerManaged
 * @param { currentUser } ModelsApp.Employee
 *
 * @returns { Models.DealListInfo }
 *
 * @applicable - используется для получения информации о возможности создания/редактирования сделок клиента
 * @author Topchiy A.V.
 */
export const dealCreateStatus = (customer, currentUser) => {
    const isOwnCustomer = (customer.holder && customer.holder.id) === currentUser.id;
    /*
        Значение «Временная блокировка сделок» равно «FALSE» или отсутствует
        (GetLegalClientProfileRs/ListOfClientCard/ClientCardInfo/OrgRec/IsTempBlockedForOppty)

        Утвержденная группа проблемности не равна "Красная" и не равна "Черная"

        Статус карточки клиента Активна или Закреплена

    */
    if (customer.isHolding) {
        return {
            infoMessage: null,
            isButtonCreateVisible: false,
            isCreateDealEnable: false,
            isEditDealEnable: false,
        };
    }
    else {
        if (!isLargestCustomer(customer)) {
            return {
                infoMessage: `Создание/редактирование сделок невозможно т.к. клиент не принадлежит к сегменту "Крупнейшие".`,
                isCreateDealEnable: false,
                isButtonCreateVisible: true,
                isEditDealEnable: true,
            };
        }
        const statusIndex = ['Active', 'Locked'].findIndex(e => customer.status.code === e);
        if (customer && customer.status && customer.status.code && statusIndex === -1) {
            return {
                infoMessage: 'Создание сделок невозможно. ' + isOwnCustomer ?
                    'Переведите карточку в статус "Активна" или "Закреплена". ' :
                    'Карточка клиента не активна. Обратитесь к владельцу карточки организации.',
                isCreateDealEnable: false,
                isButtonCreateVisible: true,
                isEditDealEnable: false,
            };
        }
    }
    return {
        infoMessage: '',
        isCreateDealEnable: isOwnCustomer,
        isEditDealEnable: true,
        isButtonCreateVisible: true,
    };
};
export const getAgentCustomerRelations = (agent, customerId) => {
    const client = agent.customerPositionList.data.find((item) => item && item.customerId == customerId);
    return client && client.customerRelations || { parentId: '', value: '', code: '', name: '' };
};
export const isMainEmployee = (agent, customerId) => {
    const customerRelations = getAgentCustomerRelations(agent, customerId);
    if (customerRelations && customerRelations.value &&
        (customerRelations.value == 'Основной контакт')) {
        return true;
    }
    return false;
};
export const setAccessLevelToAgent = (member) => {
    return member !== undefined ? (member.isGeneral === true ? Enums.AgentAccessLevel.MainTeamMember
        : Enums.AgentAccessLevel.TeamMember)
        : Enums.AgentAccessLevel.Denied;
};
export const userInMemberTeam = (currentUser, customer) => {
    if (customer.myClient != null) {
        return customer.myClient;
    }
    return customer.memberList ? customer.memberList.data.some((member) => {
        return member.id == currentUser.id;
    }) : false;
};
export const getDealSalesMethodList = (product) => {
    return { data: [] };
};
export const getWorkPhone = (phoneList) => {
    let phone = phoneList.data.find(function (phone) {
        return phone.type == 'WORK';
    });
    if (phone && phone.extension) {
        phone = `${phone.number} , доб. ${phone.extension}`;
    }
    return phone ? format.phoneNumber(phone.number) : null;
};
export const getMobilePhone = (phoneList) => {
    let phone = phoneList.data.find(function (phone) {
        return phone.type == 'MOBILE';
    });
    return phone ? format.phoneNumber(phone.number) : null;
};
/* Agent data validation */
export const getValidationgErrorText = (attribute) => {
    switch (attribute) {
        case Enums.AgentValidationAttribute.FirstName:
            return 'Введите корректное имя не более 50 символов';
        case Enums.AgentValidationAttribute.LastName:
            return 'Введите корректную фамилию не более 50 символов';
        case Enums.AgentValidationAttribute.Birthday:
        case Enums.AgentValidationAttribute.Gender:
            return "Заполните поле";
        case Enums.AgentValidationAttribute.MobileNumber: {
            return "Номер с кодом «+7» должен содержать 11 цифр. Добавочный номер указывается после *";
        }
        case Enums.AgentValidationAttribute.MobileNumberWithoutSeven: {
            return "Введите корректный номер, например: +7(495)6785678*178";
        }
        case Enums.AgentValidationAttribute.WorkNumber:
            return "Введите корректный номер, например: +7(495)6785678*178";
        case Enums.AgentValidationAttribute.WorkNumberWithSeven:
            return "Номер с кодом «+7» должен содержать 11 цифр. Добавочный номер указывается после *";
        case Enums.AgentValidationAttribute.Email: return "Введите корректный email";
        case Enums.AgentValidationAttribute.Comment: return "Введите комментарий не более 100 символов";
        default: return "Ошибка ввода данных";
    }
};
export const isAgentValidateFirstNameFailed = (firstName) => (firstName && firstName.length > 50 ? true : false);
export const isAgentValidateLastNameFailed = (lastName) => (lastName && lastName.length > 50 ? true : false);
export const isAgentValidateMiddleNameFailed = (middleName) => (middleName && middleName.length > 50 ? true : false);
export const isAgentValidateJobPositionFailed = (jobPosition) => (jobPosition ? false : true);
export const isAgentValidateWorkPhoneFailed = (workPhone) => (!workPhone ? false : isPhoneValid(workPhone) ? false : true);
export const isAgentValidateMobilePhoneFailed = (mobilePhone) => (!mobilePhone ? false : isPhoneValid(mobilePhone) ? false : true);
export const isAgentValidateEmailFailed = (email) => (!email ? false : isEmailValid(email) ? false : true);
export const isAgentValidateBirthdayFailed = (birthday) => (birthday && (birthday.toString()) ? false : true);
export const isAgentValidateGenderFailed = (gender) => (gender == Enums.GenderList.None);
export const getGenderType = (value) => {
    switch (value) {
        case 0: return Enums.GenderList.Male;
        case 1: return Enums.GenderList.Female;
        default: return Enums.GenderList.None;
    }
};
export const isAgentValidateRelationTypeFailed = (relationType) => (relationType && relationType.code ? false : true);
export const isAgentValidateCommentFailed = (comment) => (comment && comment.length > 100 ? true : false);
export const occasionValidationType = (type) => {
    return !(type && type.value) ? 'Необходимо заполнить поле' : null;
};
export const occasionValidationDate = (date) => {
    return !date ? 'Необходимо заполнить поле' : '';
};
export const getOccasionPageTitleText = (occasionMode) => {
    switch (occasionMode) {
        case Enums.OccasionMode.Edit: return 'Редактировать дату';
        default: return 'Важная дата';
    }
};
/* End of Agent data validation */
export const occasionListDelete = (occasionList, index) => {
    return {
        data: occasionList.data.filter((occasion, i) => i != index)
    };
};
export const noteListDelete = (noteList, index) => {
    return {
        data: noteList.data.filter((note, i) => i != index)
    };
};
export const noteListAdd = (noteList) => {
    const newNote = Object.assign({}, defaultValues.Note);
    return {
        data: noteList.data.concat([newNote])
    };
};
export const noteListUpdate = (noteList, index, text, type) => {
    return index == null ? noteList : ({
        data: noteList.data.map((note, i) => (i == index) ? (Object.assign({}, note, { type: type == null ? note.type : type, text: text == null ? note.text : text })) : note)
    });
};
export const agentMobilePhoneFormat = (phone) => {
    phone = phone.replace(/[^\-0-9+()*]/g, '');
    if (phone.length == 1 && phone.charAt(0) != '+') {
        return '+' + phone;
    }
    return phone;
};
export const agentWorkPhoneFormat = (phone) => {
    return agentMobilePhoneFormat(phone);
};
const isPhoneValid = (phone) => {
    let cleanPhone = phone.replace(/\s/g, '');
    let isValidPhone = true;
    let numPos = cleanPhone.indexOf("*") > 0 ? cleanPhone.indexOf("*") : cleanPhone.length;
    let formattedString = cleanPhone.substring(0, numPos).replace(/[^0-9]/g, '');
    if (cleanPhone[0] != "+") {
        isValidPhone = false;
    }
    else if (cleanPhone[0] == "+" && cleanPhone[1] == "7") {
        isValidPhone = formattedString.length == 11;
    }
    else if (cleanPhone[0] == "+") {
        isValidPhone = formattedString.length < 16 && formattedString.length > 5;
    }
    return isValidPhone;
};
const isEmailValid = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
/* End of Agent data validation */
export const memberListAdd = (memberList, employee, role, currentMode) => {
    switch (currentMode) {
        case Enums.MemberListMode.Agent: {
            const presentEmployee = memberList.data.find((item) => item.id == employee.id);
            if (presentEmployee) {
                return {
                    data: memberList.data.map((item) => {
                        if (item.id == employee.id) {
                            return Object.assign({}, item, { positionName: role.value });
                        }
                        return item;
                    })
                };
            }
            return {
                data: memberList.data.concat([Object.assign({}, employee, { positionName: role.value })]).sort((a, b) => {
                    if (a.isGeneral > b.isGeneral)
                        return -1;
                    if (a.isGeneral < b.isGeneral)
                        return 1;
                    return 0;
                })
            };
        }
        default: {
            const presentEmployee = memberList.data.find((item) => item.id == employee.id);
            if (presentEmployee) {
                return {
                    data: memberList.data.map((item) => {
                        if (item.id == employee.id) {
                            return Object.assign({}, item, { role });
                        }
                        return item;
                    })
                };
            }
            return {
                data: memberList.data.concat([Object.assign({}, employee, { role })])
            };
        }
    }
};
export const memberListGeneralSelect = (memberList, index) => {
    return {
        data: memberList.data.map((item, tIndex) => {
            if (tIndex == index) {
                return Object.assign({}, item, { isGeneral: true });
            }
            return Object.assign({}, item, { isGeneral: false });
        }).sort((a, b) => {
            if (a.isGeneral > b.isGeneral)
                return -1;
            if (a.isGeneral < b.isGeneral)
                return 1;
            return 0;
        })
    };
};
export const memberListDelete = (memberList, index) => {
    return {
        data: memberList.data.filter((member, i) => i != index).sort((a, b) => {
            if (a.isGeneral > b.isGeneral)
                return -1;
            if (a.isGeneral < b.isGeneral)
                return 1;
            return 0;
        })
    };
};
export const memberActionMenuSwitch = (memberList, id, isLeftActionMenuOpen, isRightActionMenuOpen) => (
// FEXME: Employee interface does not declare isLeftActionMenuOpen / isRightActionMenuOpen attributes. Need more info about this method.
// { data: memberList.data.map ((member: Employee): Employee => (member.id == id) ? ({ ...member, isLeftActionMenuOpen, isRightActionMenuOpen }) : member) }
memberList);
export const isDealPhaseLast = (phase) => (false);
/* FIXME: Detect phase and compare it to a defined Classifier value */
/**
 * @description Метод фильтрует список дочерних компаний по паттерну поискового запроса пользователя
 *
 * @param { ModelsApp.Classifier | null } affiliateList .
 * @param { string } inputSearchAffiliateList .
 *
 * @returns { Array<Models.Customer> }
 */
export const searchAffiliateList = (affiliateList, inputSearchAffiliateList) => {
    return affiliateList && (inputSearchAffiliateList.length > 0) ? affiliateList.data.filter((item) => {
        return (item.name && item.name.trim().toLowerCase().indexOf(inputSearchAffiliateList.toLowerCase()) >= 0) || (item.shortName
            && item.shortName.trim().toLowerCase().indexOf(inputSearchAffiliateList.toLowerCase()) >= 0);
    }) : defaultValues.CustomerList.data;
};
// Метод для сортировки списка классификаторов по полю value
// Например, используется для сортировки списка ролей FINS_COVERAGE_ROLE_TYPE в файле ViewMemberList.tsx
export const sortClassifierListByValueField = (list) => {
    // Метод для сортировки Classifiers в ClassifierList
    const sortClassifierListByValue = (valueA, valueB) => {
        if (valueA.value > valueB.value) {
            return 1;
        }
        if (valueA.value < valueB.value) {
            return -1;
        }
        return 0;
    };
    const alphabeticallySortedClassifierList = {
        data: list.data.sort(sortClassifierListByValue)
    };
    return alphabeticallySortedClassifierList;
};
export const customerActivityExcludeFilterCustomerList = (inputSearch, inputSearchManagedOnly, currentCustomerManaged, currentCustomer) => {
    let temp = null;
    if (currentCustomerManaged && currentCustomerManaged.id != '' && currentCustomerManaged.affiliateList && currentCustomerManaged.affiliateList.data) {
        temp = currentCustomerManaged.affiliateList.data;
    }
    else if (currentCustomer && currentCustomer.id != '' && currentCustomer.affiliateList && currentCustomer.affiliateList.data) {
        temp = currentCustomer.affiliateList.data;
    }
    if (temp) {
        return {
            data: temp.filter((item) => {
                //todo check includes func shortName
                if (item && item.name && item.name.indexOf(inputSearch) >= 0 || item.shortName && item.shortName.indexOf(inputSearch) >= 0) {
                    return item;
                }
            }),
            isCompleted: true
        };
    }
    return { data: [], isCompleted: true };
};
export const customerActivityIncludeValidationComment = (comment, user) => {
    if (comment == null || comment.trim() == '') {
        return 'Создание задачи невозможно, т.к. суть задачи не заполнена. Заполните необходимые поля и попробуйте снова.';
    }
    return null;
};
export const customerActivityIncludeValidationCustomer = (customer, user, currentCustomerManaged, currentCustomer) => {
    if (customer == null || customer.id == '') {
        return 'Создание задачи невозможно, т.к. поле "Родительская организация" не заполнено';
    }
    if (customer.holder == null || customer.holder.id == null || customer.holder.id.trim() == '') {
        return `Создание задачи недоступно, т.к. ВКО компании "${customer.name || customer.shortName}" не задан.`;
    }
    const isCustomerHolder = customer.holder.id == user.id;
    const temp = currentCustomerManaged != null && currentCustomerManaged.id != '' ? currentCustomerManaged : currentCustomer;
    const isCurrentCustomerManaegedHolder = temp.holder != null && temp.holder.id == user.id;
    if (!(isCustomerHolder || isCurrentCustomerManaegedHolder)) {
        return `Создание задачи недоступно, т.к. Вы не являетесь ВКО ни "${temp.name || temp.shortName}" ни "${customer.name || customer.shortName}".`;
    }
    const parentType = temp.organizationType.code;
    const childType = customer.organizationType.code;
    let isTypeMatch = false;
    switch (childType) {
        case 'Account': {
            isTypeMatch = parentType == 'Branch' || parentType == 'Account';
            break;
        }
        case 'Holding': {
            isTypeMatch = parentType == 'Holding' || parentType == 'Account';
            break;
        }
    }
    if (!isTypeMatch) {
        return `${customer.organizationType.value} невозможно добавить в ${temp.organizationType.value}`;
    }
    return null;
};
export const getRandomOperationUuid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};
export const agentListMerge = (agentList, agent) => {
    // TODO
    return {
        data: _.unionBy(agentList.data ? agentList.data.slice() : [], [agent], 'id')
    };
};
export const occasionListMerge = (occasionList, occasion) => {
    if (occasion.id != '') {
        return {
            data: occasionList.data.map(item => {
                if (item.id == occasion.id) {
                    return Object.assign({}, item, { date: occasion.date, type: occasion.type, comment: occasion.comment, isAnnual: occasion.isAnnual });
                }
                return item;
            })
        };
    }
    return { data: occasionList.data.concat(occasion) };
};
export const customerActivityExcludeValidationComment = (comment, user) => {
    if (comment == null || comment.trim() == '') {
        return 'Создание задачи невозможно, т.к. суть задачи не заполнена. Заполните необходимые поля и попробуйте снова.';
    }
    return null;
};
export const customerActivityExcludeValidationCustomer = (customer, user, currentCustomerManaged, currentCustomer) => {
    if (customer == null || customer.id == '') {
        return 'Создание задачи невозможно, т.к. поле "Дочерняя организация" не заполнено';
    }
    if (customer.holder == null || customer.holder.id == null || customer.holder.id.trim() == '') {
        return `Создание задачи недоступно, т.к. ВКО компании "${customer.name || customer.shortName}" не задан.`;
    }
    const isCustomerHolder = customer.holder.id == user.id;
    const temp = currentCustomerManaged != null && currentCustomerManaged.id != '' ? currentCustomerManaged : currentCustomer;
    const isCurrentCustomerManaegedHolder = temp.holder != null && temp.holder.id == user.id;
    if (!(isCustomerHolder || isCurrentCustomerManaegedHolder)) {
        return `Создание задачи недоступно, т.к. Вы не являетесь ВКО ни "${temp.name || temp.shortName}" ни "${customer.name || customer.shortName}".`;
    }
    const parentType = temp.organizationType.code;
    const childType = customer.organizationType.code;
    let isTypeMatch = false;
    switch (childType) {
        case 'Account': {
            isTypeMatch = parentType == 'Branch' || parentType == 'Account';
            break;
        }
        case 'Holding': {
            isTypeMatch = parentType == 'Holding' || parentType == 'Account';
            break;
        }
    }
    if (!isTypeMatch) {
        return `${customer.organizationType.value} невозможно добавить в ${temp.organizationType.value}`;
    }
    return null;
};
export const gszActivityExcludeValidationComment = (comment, user) => {
    if (comment == null || comment.trim() == '') {
        return 'Создание задачи невозможно, т.к. суть задачи не заполнена. Заполните необходимые поля и попробуйте снова.';
    }
    return null;
};
export const gszActivityExcludeValidationCustomer = (customer, user) => {
    if (customer == null || customer.id == '') {
        return 'Создание задачи невозможно, т.к. поле "Компания" не заполнено';
    }
    return null;
};
export const gszActivityExcludeFilterCustomerList = (search, isSearchManagedOnly, gsz) => {
    const newList = gsz.memberList.slice().filter(item => {
        return item.fullName.toLowerCase().indexOf(search.toLowerCase()) != -1;
    }).map(item => {
        return Object.assign({}, defaultValues.Customer, { id: item.id || '', name: item.fullName, organizationType: item.organizationType, role: item.role, shortName: item.fullName });
    });
    return {
        data: newList,
        isCompleted: true
    };
};
export const gszActivityIncludeValidationComment = (comment, user) => {
    if (comment == null || comment.trim() == '') {
        return 'Создание задачи невозможно, т.к. суть задачи не заполнена. Заполните необходимые поля и попробуйте снова.';
    }
    return null;
};
export const gszActivityIncludeValidationCustomer = (customer, user) => {
    if (customer == null || customer.id == '') {
        return 'Создание задачи невозможно, т.к. поле "Компания" не заполнено';
    }
    return null;
};
export const sortCurrencyListAsInOrder = (currencyList, orderList) => (Array.isArray(currencyList) ? currencyList.sort((currencyOne, currencyTwo) => {
    if (currencyOne && currencyTwo) {
        if (orderList.indexOf(currencyOne.code) == -1) {
            return 1;
        }
        else if (orderList.indexOf(currencyTwo.code) == -1) {
            return -1;
        }
        else if (orderList.indexOf(currencyOne.code) < orderList.indexOf(currencyTwo.code)) {
            return -1;
        }
        else if (orderList.indexOf(currencyOne.code) > orderList.indexOf(currencyTwo.code)) {
            return 1;
        }
    }
    return 0;
}) : []);
export const extractCurrencyList = (productList, type) => {
    const getCurrencyClassifier = (product) => product && product.currencyClassifier ? product.currencyClassifier : defaultValues.Classifier;
    let currencyClassifierList = [];
    switch (type) {
        case Enums.ProductType.BankGuaranteeProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.BankGuaranteeProduct) {
                    return getCurrencyClassifier(product.bankGuaranteeProduct);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.CreditProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.CreditProduct) {
                    return getCurrencyClassifier(product.creditProduct);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.PaymentAccountProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.PaymentAccountProduct) {
                    return getCurrencyClassifier(product.paymentAccountProduct);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.ContractNsoProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.ContractNsoProduct) {
                    return getCurrencyClassifier(product.contractNSO);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.ContractSdoProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.ContractSdoProduct) {
                    return getCurrencyClassifier(product.contractSDO);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.DepositProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.DepositProduct) {
                    return getCurrencyClassifier(product.depositProduct);
                }
                return null;
            }).compact();
            break;
        }
        case Enums.ProductType.EncashmentProduct: {
            const products = productList;
            currencyClassifierList = products.data.map((product) => {
                if (product.productType == Enums.ProductType.SelfEncashmentProduct) {
                    return getCurrencyClassifier(product.selfEncashmentContractProduct);
                }
                return null;
            }).compact();
            break;
        }
    }
    return { data: _.uniqBy(sortCurrencyListAsInOrder(currencyClassifierList, ["RUR", "USD", "EUR"]), "code") };
};
export const extractEncumbranceList = (productList, productType) => {
    switch (productType) {
        case Enums.ProductType.PaymentAccountProduct: {
            const settlementAgreementProductList = productList;
            return {
                data: settlementAgreementProductList.data.filter((product) => (product.paymentAccountProduct != null)).reduce((encumbranceList, product) => {
                    let reduction = encumbranceList;
                    if (!product.paymentAccountProduct) {
                        return reduction;
                    }
                    if (product.paymentAccountProduct.restrictionList &&
                        Array.isArray(product.paymentAccountProduct.restrictionList.data) &&
                        product.paymentAccountProduct.restrictionList.data.length > 0) {
                        reduction = reduction.filter((encumbrance) => (encumbrance.type != Enums.ProductEncumbranceType.ProductRestrictionList)).concat([{
                                type: Enums.ProductEncumbranceType.ProductRestrictionList,
                                name: encumbranceNameByType(Enums.ProductEncumbranceType.ProductRestrictionList),
                            }]);
                    }
                    if (product.paymentAccountProduct.isExistCardIndex) {
                        reduction = reduction.filter((encumbrance) => (encumbrance.type != Enums.ProductEncumbranceType.ProductCardIndexList)).concat([{
                                type: Enums.ProductEncumbranceType.ProductCardIndexList,
                                name: encumbranceNameByType(Enums.ProductEncumbranceType.ProductCardIndexList),
                            }]);
                    }
                    return reduction;
                }, []).sort(($1, $2) => ($1.type - $2.type))
            };
        }
        default: {
            return {
                data: []
            };
        }
    }
};
export const encumbranceNameByType = (type) => {
    switch (type) {
        case Enums.ProductEncumbranceType.ProductRestrictionList: return 'Счета с ограничениями';
        case Enums.ProductEncumbranceType.ProductCardIndexList: return 'Счета с картотекой';
        default: return getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.UNDEFINED);
    }
};
export const toggleEncumbranceFilter = (inputEncumbranceList, value) => (
/* Warning: Be careful not to alter inputEncumbranceList (that is a pointer to a state) but make a copy of it */
Array.isArray(inputEncumbranceList.data) ? ({
    data: inputEncumbranceList.data.find((encumbrance) => encumbrance.type == value.type) ? (inputEncumbranceList.data.filter((encumbrance) => encumbrance.type != value.type)) : (inputEncumbranceList.data.concat([value]))
}) : ({
    data: [value]
}));
export const operationListFilter = (operationList, start, end, periodType, operationType, sumMin, sumMax) => (Array.isArray(operationList.data) ? (Object.assign({}, operationList, { data: operationList.data.filter((operation) => (operation == null ? false : (
    /* According to business requirements operation period filter is to be implemented by the application backend */
    ((typeof sumMin == 'number') ? ((typeof operation.sum == 'number') ? (operation.sum >= sumMin) : false) : true) &&
        ((typeof sumMax == 'number') ? ((typeof operation.sum == 'number') ? (operation.sum <= sumMax) : false) : true) &&
        (operationType == Enums.OperationType.Debt ? operation.isLedgerDebitSide == true :
            (operationType == Enums.OperationType.Credit
                ? operation.isLedgerDebitSide == false : true))))) })) : operationList);
export const forecastEventListFilter = (forecastEventList, start, end, periodType, forecastEventType) => {
    let forecastEventListCopy = Object.assign({}, forecastEventList);
    if (forecastEventType) {
        forecastEventListCopy.data = forecastEventListCopy.data
            .filter((element) => element.eventType.code === forecastEventType.code);
    }
    if (periodType != Enums.ForecastPeriodType.CreditFinish) {
        const filterDateElement = (daysToAdd) => {
            return function (event) {
                if (event.plannedEventDate !== null) {
                    return event.plannedEventDate.isSameOrBefore(moment().add(daysToAdd, 'days').toDate());
                }
                return false;
            };
        };
        switch (periodType) {
            case Enums.ForecastPeriodType.Next30Days:
                forecastEventListCopy.data = forecastEventListCopy.data.filter(filterDateElement(30));
                break;
            case Enums.ForecastPeriodType.Next60Days:
                forecastEventListCopy.data = forecastEventListCopy.data.filter(filterDateElement(60));
                break;
            case Enums.ForecastPeriodType.Next90Days:
                forecastEventListCopy.data = forecastEventListCopy.data.filter(filterDateElement(90));
                break;
            case Enums.ForecastPeriodType.Next180Days:
                forecastEventListCopy.data = forecastEventListCopy.data.filter(filterDateElement(180));
                break;
            case Enums.ForecastPeriodType.Custom:
                forecastEventListCopy.data = forecastEventListCopy.data.filter((event) => {
                    if (event.plannedEventDate !== null && start && end) {
                        return event.plannedEventDate.isSameOrBefore(end) && event.plannedEventDate.isSameOrAfter(start);
                    }
                    return false;
                });
                break;
            default:
                break;
        }
    }
    return forecastEventListCopy;
};
/**
 * Ищем первый платеж со статусом отличным от "Исполнено" и отсекаем предудыщие платежи
 * @param paymentScheduleList
 */
export const paymentScheduleListStatusFilter = (paymentScheduleList, setInputPaymentScheduleFilterPeriod) => {
    for (let i = 0; i < paymentScheduleList.data.data.length; i++) {
        if (paymentScheduleList.data.data[i].status != Enums.ProductCreditPaymentScheduleStatus.execPay) {
            paymentScheduleList.data.data.splice(0, i);
            setInputPaymentScheduleFilterPeriod(paymentScheduleList.data.data[0].operDate);
            break;
        }
    }
    return paymentScheduleList;
};
export const getCustomerActivityIncludeExecutor = (customerManager) => {
    let executor = defaultValues.Employee;
    if (customerManager) {
        if (customerManager.holder && customerManager.holder.id != '') {
            executor = customerManager.holder;
        }
        else if (customerManager.curator && customerManager.curator.id != '') {
            executor = customerManager.curator;
        }
        else if (customerManager.memberList &&
            Array.isArray(customerManager.memberList.data)) {
            let mainPersonTeam = customerManager.memberList.data.find((item) => {
                return item.isGeneral;
            });
            executor = mainPersonTeam || defaultValues.Employee;
        }
    }
    return executor;
};
export const getFullNameRepresentation = (data) => {
    return [data.lastName, data.firstName, data.middleName].filter(item => item != null && item.trim() != '').join(' ');
};
export const getFullNameOWARepresentation = (data) => {
    return [data.lastName, data.firstName, data.middleName].filter(item => item != null && item.trim() != '').join(' ');
};
export const getLongestFullName = (firstName, lastName, middleName, fullName) => {
    const fullNameRepresentation = getFullNameRepresentation({ firstName, lastName, middleName });
    return (fullName.length < fullNameRepresentation.length) ? fullNameRepresentation : fullName;
};
export const getCustomerActivityIncludeExecutorName = (customerManager, placeholder) => {
    const executor = getCustomerActivityIncludeExecutor(customerManager);
    if (executor == null) {
        return placeholder;
    }
    return executor.fullName && executor.fullName != '' ? executor.fullName : getFullNameRepresentation(executor);
};
export const getCustomerActivityExcludeExecutor = (customerManager) => {
    const executor = customerManager && customerManager.memberList ? customerManager.memberList.data.find((item) => {
        return item.isGeneral;
    }) : null;
    if (executor) {
        return executor;
    }
    return null;
};
export const setProductEksErrorMessage = (eksErrorList) => {
    return eksErrorList && Array.isArray(eksErrorList.data) ? Object.assign({}, defaultValues.Error, { message: eksErrorList.data.map((err) => err && err.message).compact().join() }) : null;
};
export const getInputOccasion = (reducerState) => {
    return {
        id: reducerState.currentOccasion.id,
        date: reducerState.inputDate,
        type: reducerState.inputOccasionType,
        modId: reducerState.currentOccasion.modId,
        comment: reducerState.inputComment,
        isAnnual: reducerState.inputNoYear,
        isChanged: reducerState.currentOccasion.isChanged
    };
};
export const getAgreementStatusProductList = (agreementStatus) => {
    switch (agreementStatus) {
        case Enums.ProductListAgreementStatus.Opened: return "Opened";
        case Enums.ProductListAgreementStatus.Closed: return "Closed";
        case Enums.ProductListAgreementStatus.Prognostic: return "Prognostic";
        default: return "";
    }
};
//get tag context for GET network request of product list
export const getTagCallGetRequestProductList = (productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? Enums.CacheContext.CreditActiveProductList
                    : Enums.CacheContext.CreditCloseProductList;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? Enums.CacheContext.DepositActiveProductList
                    : Enums.CacheContext.DepositCloseProductList;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? Enums.CacheContext.CorporateCardActiveProductList
                : Enums.CacheContext.CorporateCardCloseProductList;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? Enums.CacheContext.EncashmentContractActiveProductList
                    : Enums.CacheContext.EncashmentContractCloseProductList;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return Enums.CacheContext.LegalInfoProductList;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? Enums.CacheContext.AcquiringActiveProductList
                : Enums.CacheContext.AcquiringCloseProductList;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? Enums.CacheContext.DboActiveProductList
                : Enums.CacheContext.DboCloseProductList;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? Enums.CacheContext.UdboActiveProductList
                : Enums.CacheContext.UdboCloseProductList;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? Enums.CacheContext.SalaryActiveProductList
                : Enums.CacheContext.SalaryCloseProductList;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? Enums.CacheContext.SettlementAgreementActiveProductList
                    : Enums.CacheContext.SettlementAgreementCloseProductList;
            }
        default: return Enums.CacheContext.None;
    }
};
export const getAgreementStatusNameProductList = (agreementStatus) => {
    switch (agreementStatus) {
        case Enums.ProductListAgreementStatus.Opened: return "Действующие";
        case Enums.ProductListAgreementStatus.Closed: return "Закрытые";
        case Enums.ProductListAgreementStatus.Prognostic: return "Прогнозные";
        default: return "";
    }
};
export const getEnumFilterOrganizationStructure = (value) => {
    switch (value) {
        case '1':
            return Enums.FilterOrganizationStructure.Holding;
        case '2':
            return Enums.FilterOrganizationStructure.Account;
        case '3':
            return Enums.FilterOrganizationStructure.Branch;
        case '5':
            return Enums.FilterOrganizationStructure.Conglomerate;
        default:
            return Enums.FilterOrganizationStructure.None;
    }
};
export const isActiveProductList = (agreementStatus) => {
    switch (agreementStatus) {
        case Enums.ProductListAgreementStatus.Opened: return true;
        case Enums.ProductListAgreementStatus.Closed: return false;
        case Enums.ProductListAgreementStatus.Prognostic: return false;
        default: return true;
    }
};
export const getCustomerActivityExcludeExecutorName = (customerManager, placeholder) => {
    const executor = getCustomerActivityIncludeExecutor(customerManager);
    if (executor == null) {
        return `${placeholder} - главный исполнитель`;
    }
    return executor.fullName && executor.fullName != '' ? `${executor.fullName} - главный исполнитель` : `${getFullNameRepresentation(executor)} - главный исполнитель`;
};
const getProductListUrl = (active, pollingStatus, operationUuid, service, currentCustomerId, isForceRequest, ttl) => {
    let request = pollingStatus === Enums.ProductPollingStatus.InProgress ? '' : `clients/id_${currentCustomerId}/`;
    request += `products/${service}`;
    request += pollingStatus == Enums.ProductPollingStatus.InProgress ? "/status/" + operationUuid
        : `?active=${active}&force=${isForceRequest}&ttl=${ttl || 0}`;
    return request;
};
const getPaymentAccountProductEksListUrl = (state, reducerState, service, force, ttl) => {
    if (!state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct) {
        throw new Error('Payment account product is undefined');
    }
    const pollingStatus = getPaymentAccountProductEksListPollingStatusEnum(reducerState, service);
    const operationUuid = getPaymentAccountProductEksListPollingOperationUuid(reducerState, service);
    const customerId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id; // Payment account customer ID
    const paymentProduct = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct &&
        state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct;
    const customerEksId = paymentProduct ? paymentProduct.eksClientId : '';
    const accountNumber = paymentProduct ? paymentProduct.accountId : ''; // Payment account number
    let request = `${url(state)}/`;
    switch (service) {
        case Enums.PaymentAccountProductServiceList.AppCRM_OperationList: {
            request += pollingStatus != Enums.ProductPollingStatus.InProgress ? `clients/id_${customerId}/` : '';
            request += `products/${getPaymentAccountProductListService(service)}`;
            request += pollingStatus == Enums.ProductPollingStatus.InProgress ? '/status/' + operationUuid : '';
            request += pollingStatus != Enums.ProductPollingStatus.InProgress ? `?acctId=${accountNumber}` : '';
            break;
        }
        case Enums.PaymentAccountProductServiceList.AppCRM_CardIndexList: {
            request += `products/${getPaymentAccountProductListService(service)}`;
            request += pollingStatus == Enums.ProductPollingStatus.InProgress ? '/status/' + operationUuid : '';
            request += pollingStatus != Enums.ProductPollingStatus.InProgress
                ? `?eksClientId=${customerEksId}` +
                    `&acctId=${accountNumber}` +
                    `&active=${isActiveProductList(state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus)}`
                : '';
            break;
        }
    }
    request += (typeof force == 'boolean') &&
        pollingStatus != Enums.ProductPollingStatus.InProgress
        ? `&force=${force}` : '';
    request += (typeof ttl == 'number') &&
        pollingStatus != Enums.ProductPollingStatus.InProgress ? `&ttl=${ttl}` : '';
    return request;
};
const getProductEksListUrl = (reducerState, service, productListStatus) => {
    let isProductListActive = isActiveProductList(productListStatus);
    let pollingStatus = getProductEksListPollingStatusEnum(reducerState, service, isProductListActive);
    let operationUuid = getProductEksListPollingOperationUuid(reducerState, service, isProductListActive);
    let request = pollingStatus === Enums.ProductPollingStatus.InProgress ? '' : `clients/id_${reducerState.currentCustomerId}/`;
    request += `products/${getProductListPath(service)}`;
    request += pollingStatus == Enums.ProductPollingStatus.InProgress ? "/status/" + operationUuid : '';
    return request;
};
const getPaymentAccountProductListService = (service) => {
    switch (service) {
        case Enums.PaymentAccountProductServiceList.AppCRM_OperationList:
            return 'lastoperations';
        case Enums.PaymentAccountProductServiceList.AppCRM_CardIndexList:
            return 'cardIndex';
        default:
            return '';
    }
};
const getProductEksListPollingStatusEnum = (reducerState, service, isActiveProductList) => {
    switch (service) {
        case Enums.ClientProductServiceList.AppCRM_Credit:
            return isActiveProductList ? reducerState.creditActiveProductEksList.pollingStatus
                : reducerState.creditCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_Acquiring:
            return isActiveProductList ? reducerState.acquiringActiveProductEksList.pollingStatus
                : reducerState.acquiringCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_CorporateCard:
            return isActiveProductList ? reducerState.corporateCardActiveProductEksList.pollingStatus
                : reducerState.corporateCardCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_DBO:
            return isActiveProductList ? reducerState.dboActiveProductEksList.pollingStatus
                : reducerState.dboCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_Deposit:
            return isActiveProductList ? reducerState.depositActiveProductEksList.pollingStatus
                : reducerState.depositCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_EncashmentContract:
            return isActiveProductList ? reducerState.encashmentContractActiveProductEksList.pollingStatus
                : reducerState.encashmentContractCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_Salary:
            return isActiveProductList ? reducerState.salaryActiveProductEksList.pollingStatus
                : reducerState.salaryCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_SettlementAgreement:
            return isActiveProductList ? reducerState.settlementAgreementActiveProductEksList.pollingStatus
                : reducerState.settlementAgreementCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_UDBO:
            return isActiveProductList ? reducerState.udboActiveProductEksList.pollingStatus
                : reducerState.udboCloseProductEksList.pollingStatus;
        case Enums.ClientProductServiceList.AppCRM_LegalInfo:
            return reducerState.legalInfoProductEksList.pollingStatus;
        default:
            return null;
    }
};
const getPaymentAccountProductEksListPollingStatusEnum = (reducerState, service) => {
    switch (service) {
        case Enums.PaymentAccountProductServiceList.AppCRM_OperationList:
            return reducerState.operationList.pollingStatus;
        case Enums.PaymentAccountProductServiceList.AppCRM_CardIndexList:
            return reducerState.cardIndexList.pollingStatus;
        default:
            return null;
    }
};
const getProductEksListPollingOperationUuid = (reducerState, service, isActiveProductList) => {
    switch (service) {
        case Enums.ClientProductServiceList.AppCRM_Credit:
            return isActiveProductList ? reducerState.creditActiveProductEksList.operationUuid
                : reducerState.creditCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_Acquiring:
            return isActiveProductList ? reducerState.acquiringActiveProductEksList.operationUuid
                : reducerState.acquiringCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_CorporateCard:
            return isActiveProductList ? reducerState.corporateCardActiveProductEksList.operationUuid
                : reducerState.corporateCardCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_DBO:
            return isActiveProductList ? reducerState.dboActiveProductEksList.operationUuid
                : reducerState.dboCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_Deposit:
            return isActiveProductList ? reducerState.depositActiveProductEksList.operationUuid
                : reducerState.depositCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_EncashmentContract:
            return isActiveProductList ? reducerState.encashmentContractActiveProductEksList.operationUuid
                : reducerState.encashmentContractCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_Salary:
            return isActiveProductList ? reducerState.salaryActiveProductEksList.operationUuid
                : reducerState.salaryCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_SettlementAgreement:
            return isActiveProductList ? reducerState.settlementAgreementActiveProductEksList.operationUuid
                : reducerState.settlementAgreementCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_UDBO:
            return isActiveProductList ? reducerState.udboActiveProductEksList.operationUuid
                : reducerState.udboCloseProductEksList.operationUuid;
        case Enums.ClientProductServiceList.AppCRM_LegalInfo:
            return reducerState.legalInfoProductEksList.operationUuid;
        default:
            return null;
    }
};
const getPaymentAccountProductEksListPollingOperationUuid = (reducerState, service) => {
    switch (service) {
        case Enums.PaymentAccountProductServiceList.AppCRM_OperationList:
            return reducerState.operationList.operationUuid;
        case Enums.PaymentAccountProductServiceList.AppCRM_CardIndexList:
            return reducerState.cardIndexList.operationUuid;
        default:
            return null;
    }
};
export const getNavigationContentCreditProductCreatePopup = (key) => {
    switch (key) {
        case Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent: {
            return 'AppCRM_CreateEditEvent';
        }
        case Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventTypeChoice: {
            return 'AppCRM_EventTypeChoice';
        }
        case Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventPossibilityChoice: {
            return 'AppCRM_EventPossibilityChoice';
        }
        case Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventCurrencyChoice: {
            return 'AppCRM_EventCurrencyChoice';
        }
        default: {
            return '';
        }
    }
};
export const setForecastDealsToCreditProducts = (dealList, creditList) => {
    return creditList.map((credit) => {
        let contractId = credit.creditProduct && credit.creditProduct.contractId;
        if (!contractId) {
            return credit;
        }
        let targetDeal = dealList.data.find((deal) => {
            return contractId == deal.creditId;
        });
        if (targetDeal) {
            return Object.assign({}, credit, { creditProduct: Object.assign({}, credit.creditProduct, { forecastDealId: targetDeal.id }) });
        }
        return credit;
    });
};
export const isClientNotFoundInEksSystem = (error) => (error ? error.code == 'EksClientIdNotFoundException' : false);
export const getProductListItemErrorText = (error) => {
    if (error && error.code == 'EksClientIdNotFoundException') {
        return error.message || error.comment;
    }
    else {
        return 'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.';
    }
};
export const productListItemFetching = (`Загрузка...`);
export const getNavigationPopoverContentEmployee = (key) => {
    switch (key) {
        case Enums.NavigationPopoverContentEmployee.EmployeePopoverScreen: {
            return 'AppCRM_EmployeePopoverScreen';
        }
        case Enums.NavigationPopoverContentEmployee.EmployeePopoverScreenView: {
            return 'AppCRM_EmployeePopoverScreen';
        }
        default: {
            return '';
        }
    }
};
export const eventPossibilityStringValue = (possibility) => {
    return possibility !== null && !isNaN(possibility) ? `${Number(possibility * 100).toFixed()}%` : '';
};
export const eventFilterPeriodStringValue = (type) => {
    switch (type) {
        case Enums.ForecastPeriodType.CreditFinish:
            return 'до окончания срока кредита';
        case Enums.ForecastPeriodType.Next30Days:
            return 'ближайшие 30 дней';
        case Enums.ForecastPeriodType.Next60Days:
            return 'ближайшие 60 дней';
        case Enums.ForecastPeriodType.Next90Days:
            return 'ближайшие 90 дней';
        case Enums.ForecastPeriodType.Next180Days:
            return 'ближайшие 180 дней';
        case Enums.ForecastPeriodType.Custom:
            return 'другой период';
        default:
            return '';
    }
};
export const productCreditStatus = (type) => {
    switch (type) {
        case 'Open':
            return 'Открыт';
        case 'Closed':
            return 'Закрыт';
        default:
            return '';
    }
};
export const getEarlyForecastEventInfo = (eventList) => {
    if (!eventList.data.length) {
        return 'Нет данных';
    }
    let sortedEventsByDate = eventList.data.slice()
        .filter((event) => {
        return event.plannedEventDate && new Date(event.plannedEventDate) >= new Date();
    })
        .sort((a, b) => {
        if (!a.plannedEventDate) {
            return 1;
        }
        if (!b.plannedEventDate) {
            return 1;
        }
        if (a.plannedEventDate < b.plannedEventDate) {
            return -1;
        }
        if (a.plannedEventDate > b.plannedEventDate) {
            return 1;
        }
        return 0;
    });
    let earlyEvent = sortedEventsByDate[0];
    if (earlyEvent && earlyEvent.plannedEventDate) {
        return `ближайшее: ${moment(earlyEvent.plannedEventDate).format('DD.MM.YYYY')}, ${earlyEvent.eventType.value}`;
    }
    else {
        return '';
    }
};
export const defaultNote = defaultValues.Note;
export const DealMemberListUniqueRoles = ['Главный кред. спец-т сделки', 'Главный КМ сделки', 'КМ, ответственный за ГГ', 'Инициатор', 'Клиентский менеджер', 'Куратор ЦА', 'Куратор КП ЦА', 'Руководитель ПГ', 'Куратор проекта', 'Перс. Ответственный'];
export const DealMemberListUniqueRolesCode = (value, supParameters) => {
    return supParameters.split('#').indexOf(value) >= 0;
};
export const getOccasionListRequestRefreshString = (type) => {
    switch (type) {
        case Enums.OccasionListRequestRefresh.OccasionListRequestRefreshEnabled: {
            return 'OccasionListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getNoteListRequestRefreshString = (type) => {
    switch (type) {
        case Enums.NoteListRequestRefresh.NoteListRequestRefreshEnabled: {
            return 'NoteListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getCustomerRequestRefreshString = (type) => {
    switch (type) {
        case Enums.CustomerRequestRefresh.CustomerRequestRefreshEnabled: {
            return 'CustomerRequestRefreshEnabled';
        }
        case Enums.CustomerRequestRefresh.CustomerRequestLimitRefreshEnabled: {
            return 'CustomerRequestLimitRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getRefreshDealAfterMemberListUpdateTagString = (type) => {
    switch (type) {
        case Enums.RefreshDealAfterMemberListUpdateTag.RefreshDealAfterMemberListUpdateEnabled: {
            return 'RefreshDealAfterMemberListUpdateEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getRefreshAgentAfterMemberListUpdateTagString = (type) => {
    switch (type) {
        case Enums.RefreshAgentAfterMemberListUpdateTag.RefreshAgentAfterMemberListUpdateEnabled: {
            return 'RefreshAgentAfterMemberListUpdateTag';
        }
        default: {
            return '-';
        }
    }
};
export const getDealWithUser = (deal, currentUser, roleClassifierList) => {
    let role = roleClassifierList.data.find((element) => {
        if (element.code == 'Primary KM') {
            return true;
        }
        else {
            return false;
        }
    }) || defaultValues.Classifier;
    return Object.assign({}, deal, { memberList: {
            data: [
                Object.assign({}, currentUser, { role: role, isGeneral: true })
            ]
        } });
};
export const getDealRequestRefreshString = (type) => {
    switch (type) {
        case Enums.DealRequestRefresh.DealRequestRefreshEnabled: {
            return 'DealRequestRefresh.DealRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getAgentListTagRequestString = (agentListContext) => {
    switch (agentListContext) {
        case Enums.AgentListContextMode.Customer: {
            return 'customer';
        }
        case Enums.AgentListContextMode.Deal: {
            return 'deal';
        }
        default: {
            return 'AgentList';
        }
    }
};
export const getAgentListContextRequestString = (agentListContext, reducerState) => {
    switch (agentListContext) {
        case Enums.AgentListContextMode.Customer: {
            return reducerState.currentCustomerManaged && reducerState.currentCustomerManaged.id || '';
        }
        case Enums.AgentListContextMode.Deal: {
            return reducerState.currentDeal && reducerState.currentDeal.id || '';
        }
        default: {
            return '';
        }
    }
};
export const getCustomerContextRequestString = (customerContext, reducerState) => {
    switch (customerContext) {
        case Enums.CustomerContextMode.CustomerManaged: {
            return reducerState.currentCustomerManaged && reducerState.currentCustomerManaged.id || '';
        }
        case Enums.CustomerContextMode.Customer: {
            return reducerState.currentCustomer && reducerState.currentCustomer.id || '';
        }
        default: {
            return '';
        }
    }
};
export const getEmployeeRequestRefreshString = (type) => {
    switch (type) {
        case Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled: {
            return 'EmployeeRequestRefresh.EmployeeRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getAppCRMCustomerManagedListRequestRefreshString = (type) => {
    switch (type) {
        case Enums.AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled: {
            return 'AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getDealListRequestRefreshString = (type) => {
    switch (type) {
        case Enums.DealListRequestRefresh.DealListRequestRefreshEnabled: {
            return 'DealListRequestRefresh.DealListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getForecastEventsRequestRefreshString = (type) => {
    switch (type) {
        case Enums.ForecastEventsListRequestRefresh.ForecastEventsListRequestRefreshEnabled: {
            return 'ForecastEventsListRequestRefresh.ForecastEventsListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const getGSZRequestRefreshString = (type) => {
    switch (type) {
        case Enums.GSZRequestRefresh.GSZRequestRefreshEnabled: {
            return 'GSZRequestRefresh.GSZRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
export const creditEventValidationEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (email === '' || !re.test(email)) ? 'Ошибка валидации' : null;
};
export const creditEventValidationCurrency = (currency) => {
    return currency.value === '' ? 'Необходимо заполнить значение' : null;
};
export const creditEventValidationSumm = (summ) => {
    return (summ && parseInt(summ, 10) > 0) ? null : 'Необходимо заполнить поле';
};
export const creditEventValidationPossibility = (possibility) => {
    return possibility === Enums.ForecastEventPossibility.None ? 'Необходимо заполнить поле' : null;
};
export const creditEventValidationType = (eventType) => {
    return !eventType ? 'Необходимо заполнить поле' : null;
};
export const employeeToPerson = (employee) => {
    return Object.assign({}, defaultValues.Person, { email: employee.email, id: employee.email, firstName: employee.firstName, lastName: employee.lastName, middleName: employee.middleName, name: employee.fullName, workPhone: employee.workPhone + (employee.workPhoneExtension ? `, доб. ${employee.workPhoneExtension}` : ''), division: employee.functionalDivisionName });
};
export const agentToPerson = (agent) => {
    return Object.assign({}, defaultValues.Person, { email: agent.email ? agent.email : '', id: agent.email ? agent.email : '', firstName: agent.firstName, lastName: agent.lastName, middleName: agent.middleName, name: agent.fullName });
};
export const doEmployeeToHistoryAction = (employee, currentHistoryArray, historyAction, currentMode) => {
    switch (historyAction) {
        case Enums.EmployeeHistoryActions.Push:
            currentHistoryArray.push(Object.assign({}, employee));
            break;
        case Enums.EmployeeHistoryActions.Pop:
            currentHistoryArray.pop();
            break;
        case Enums.EmployeeHistoryActions.Reset:
            currentHistoryArray = [];
            break;
        default:
            break;
    }
    return currentHistoryArray;
};
export const isApprovalStatus = (action, approvedStatuses) => {
    if (!action) {
        return null;
    }
    if (((approvedStatuses || '').split('#') || []).findIndex(e => e === action) !== -1) {
        return true;
    }
    return false;
};
// Method used to perform actions with customer navigation history
export const doCustomerToHistoryAction = (historyAction, currentCustomer, currentCustomerManaged, customerNavigationHistory, currentCustomerMode, currentCustomerTab, currentCustomerAgreementStatus, currentCustomerDealForecast, currentCustomerDeal) => {
    switch (historyAction) {
        case Enums.HistoryActions.Push:
            customerNavigationHistory.push({
                customer: currentCustomer,
                customerManaged: currentCustomerManaged,
                navigationMode: currentCustomerMode,
                currentTab: currentCustomerTab,
                currentAgreementStatus: currentCustomerAgreementStatus,
                currentDealForecast: currentCustomerDealForecast,
                currentDeal: currentCustomerDeal,
            });
            break;
        case Enums.HistoryActions.Pop:
            customerNavigationHistory.pop();
            break;
        case Enums.HistoryActions.Reset:
            customerNavigationHistory = [];
            break;
        default:
            break;
    }
    return customerNavigationHistory;
};
/**
 * @description функция предназначена для управления историей навигации ГСЗ
 * @param {Enums.HistoryActions} historyAction
 * @param {Models.GszHistory[]} gszNavigationHistory
 * @param {string} gszId
 * @returns {Models.GszHistory[]}
 * @author Vladykin A. S.
 */
export const doGszToHistoryAction = (historyAction, gszNavigationHistory, gszId) => {
    switch (historyAction) {
        case Enums.HistoryActions.Push:
            gszNavigationHistory.push({
                gszId: gszId
            });
            break;
        case Enums.HistoryActions.Pop:
            gszNavigationHistory.pop();
            break;
        case Enums.HistoryActions.Reset:
            gszNavigationHistory = [];
            break;
        default:
            break;
    }
    return gszNavigationHistory;
};
export const customerEditorAddressValidator = (address) => {
    const validateField = (source, field, conditions) => () => {
        let errorMessage = null;
        for (let i = 0; i < conditions.length; i++) {
            errorMessage = conditions[i](source, field)();
            if (!!errorMessage) {
                return errorMessage;
            }
        }
        return null;
    };
    const isNullOrEmpty = (message = 'Необходимо заполнить', isClassifier = false) => (source, field) => () => {
        if (isClassifier) {
            if (!source || !source[field] || !source[field].value || source[field].value.trim() == '') {
                return message;
            }
        }
        else {
            if (!source || !source[field] || source[field].trim() == '') {
                return message;
            }
        }
        return null;
    };
    const maxStringFieldLength = (length, message = (_length) => `Не больше ${_length} символов`) => (source, field) => () => {
        if (source[field]) {
            return source[field].length > length ? message(length) : null;
        }
        return null;
    };
    const validate = (validationObject) => {
        let error = {};
        for (let property in validationObject) {
            if (validationObject.hasOwnProperty(property)) {
                error[property] = validationObject[property]();
            }
        }
        return error;
    };
    const errors = validate({
        inputCountryValidationError: validateField(address, 'inputCountry', [isNullOrEmpty('Необходимо заполнить', true), maxStringFieldLength(50)]),
        inputSubjectValidationError: validateField(address, 'inputSubject', [maxStringFieldLength(100)]),
        inputRegionValidationError: validateField(address, 'inputRegion', [maxStringFieldLength(60)]),
        inputCityValidationError: validateField(address, 'inputCity', [isNullOrEmpty(), maxStringFieldLength(60)]),
        inputSettlementValidationError: validateField(address, 'inputSettlement', [maxStringFieldLength(60)]),
        inputStreetValidationError: validateField(address, 'inputStreet', [isNullOrEmpty(), maxStringFieldLength(100)]),
        inputHouseValidationError: validateField(address, 'inputHouse', [maxStringFieldLength(20)]),
        inputBuildingValidationError: validateField(address, 'inputBuilding', [maxStringFieldLength(20)]),
        inputBlockValidationError: validateField(address, 'inputBlock', [maxStringFieldLength(50)]),
        inputFlatValidationError: validateField(address, 'inputFlat', [maxStringFieldLength(60)]),
    });
    return errors;
};
export const getEquivalentConversionRate = (sum, equivalentSum) => {
    if (sum && sum > 0 && equivalentSum && equivalentSum > 0) {
        return Number((equivalentSum / sum).toFixed(4));
    }
    return 0.0000;
};
export const getEquivalentSum = (sum, conversionRate) => {
    if (sum && sum > 0 && conversionRate && conversionRate > 0) {
        return Number((conversionRate * sum).toFixed(4));
    }
    return 0.0000;
};
export const insertOccasionIntoTheOccasionList = (occasionList, occasion) => {
    if (occasion.id.search(/newOccasionId/i) != -1) {
        return {
            data: occasionList.data.concat([occasion])
        };
    }
    else {
        return {
            data: occasionList.data.map((occasionElement) => {
                if (occasion.id == occasionElement.id) {
                    return occasion;
                }
                return occasionElement;
            })
        };
    }
};
export const getOccasionId = (id) => {
    if (id == '') {
        return `newOccasionId_${guid()}`;
    }
    return id;
};
export const getNoteId = (id) => {
    if (id == '') {
        return `newNoteId_${guid()}`;
    }
    return id;
};
export const getdeleteOccasionList = (getdeleteOccasionList, occasion) => {
    if (occasion.id.search(/newOccasionId/i) != -1 || occasion.id == '') {
        return getdeleteOccasionList;
    }
    else {
        const deleteOccasion = Object.assign({}, defaultValues.Occasion, { id: occasion.id, type: defaultValues.Classifier, isChanged: true, modId: occasion.modId });
        return {
            data: getdeleteOccasionList.data.concat([deleteOccasion])
        };
    }
};
export const getDeleteNoteList = (deleteNoteList, note) => {
    if (note.id.search(/newNoteId/i) != -1 || note.id == '') {
        return deleteNoteList;
    }
    else {
        const deleteNote = Object.assign({}, defaultValues.Note, { id: note.id, type: defaultValues.Classifier, isChanged: true, modId: note.modId });
        return {
            data: deleteNoteList.data.concat([deleteNote])
        };
    }
};
export const overrideClassifierValue = (value) => {
    if (typeof value != 'string') {
        return value;
    }
    switch (value.toLowerCase()) {
        case 'юр. лицо': return 'Юридическое лицо';
        case 'м': return 'Мужской';
        case 'ж': return 'Женский';
        default: return value;
    }
};
export const getRelatedActivitiesCount = (activityList) => {
    return activityList.data.length;
};
export const sortClassifierList = (a, b) => {
    if (a.code > b.code)
        return 1;
    if (a.code < b.code)
        return -1;
    return 0;
};
export const getSortedCurrencyList = (classifierList) => {
    let rur = [];
    let usd = [];
    let eur = [];
    let gbp = [];
    let chf = [];
    let jpy = [];
    let otherClassifierList = classifierList.data.filter((element) => {
        switch (element.code) {
            case 'RUR':
                rur.push(element);
                return false;
            case 'USD':
                usd.push(element);
                return false;
            case 'EUR':
                eur.push(element);
                return false;
            case 'GBP':
                gbp.push(element);
                return false;
            case 'CHF':
                chf.push(element);
                return false;
            case 'JPY':
                jpy.push(element);
                return false;
            default:
                return true;
        }
    });
    otherClassifierList.sort(sortClassifierList);
    return {
        data: [
            ...rur,
            ...usd,
            ...eur,
            ...gbp,
            ...chf,
            ...jpy,
            ...otherClassifierList
        ]
    };
};
export const getRurClassifier = (classifierList) => {
    let rur = defaultValues.Classifier;
    classifierList.data.forEach((element) => {
        if (element.code == 'RUR') {
            rur = element;
        }
    });
    return rur;
};
export const convertStringToNumber = (value) => {
    if (value) {
        let a = parseFloat(value.replace(',', '.').replace(/\s/g, ''));
        if (isNaN(a)) {
            return null;
        }
        else {
            return a;
        }
    }
    return null;
};
export const convertNumberToString = (value) => {
    if (value) {
        return value.toString().replace('.', ',');
    }
    return null;
};
export const filterMemberList = (firstName, lastName, middleName, positionName, role, isGeneral, lastInput) => {
    let re = new RegExp(' ' + lastInput.trim(), 'ig');
    let operationString = ' ' +
        (firstName ? firstName : ' ') + ' ' +
        (lastName ? lastName : ' ') + ' ' +
        (middleName ? middleName : ' ') + ' ' +
        (positionName ? positionName : ' ') + ' ' +
        (role ? role : ' ') +
        (isGeneral ? 'главный исполнитель' : ' ');
    if (operationString.match(re)) {
        return true;
    }
    else {
        return false;
    }
};
export const getMethodByProduct = (product, methodList, productList) => {
    const getMethod = (parentId) => {
        let a = methodList.data.find((value) => value.code == parentId);
        if (a) {
            return [a];
        }
        else {
            return [];
        }
    };
    const fullMethodList = {
        data: productList.data.reduce((previousValue, currentValue) => {
            if (currentValue.code == product.code && currentValue.parentId) {
                return [...previousValue, ...getMethod(currentValue.parentId)];
            }
            else {
                return previousValue;
            }
        }, [])
    };
    if (fullMethodList.data.find((value) => value.parentId == All_VALUES)) {
        return methodList;
    }
    else {
        return fullMethodList;
    }
};
export const getClassifierUniqueValuesByCode = (list) => {
    let obj = {};
    list.data.forEach((element, i) => {
        obj[element.code] = {
            parentId: null,
            name: element.name,
            value: element.value,
            code: element.code
        };
    });
    return {
        data: [..._.values(obj)]
    };
};
export const getDate = () => {
    let date = new Date();
    let dateMin = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return dateMin;
};
const PLACEHOLDER = getPlaceholderStringRepresentation(UndefinedValuesPlaceholder.NO_DATA);
export const getBalanceString = (balance, currency) => ((balance == null) || isNaN(balance) ? PLACEHOLDER : `${sumString(balance, 3, ' ', 2)}${currency && (' ' + currency.code) || ''}`);
/*
const currency: ModelsApp.Classifier = {
    parentId: null,
    name: 'Currency',
    code: 'RUR',
    value: 'Руб',
}
console.log ('\n\ngetBalanceStringTests:\n',
    '1: 0.00/null', getBalanceString (0.00, null), '\n',
    '2: null/null', getBalanceString (null, null), '\n',
    '3: null/currency', getBalanceString (null, currency), '\n',
    '4: 0.00/currency', getBalanceString (0.00, currency), '\n',
    '5: 1.00/currency', getBalanceString (1.00, currency), '\n',
    '6: 1/currency', getBalanceString (1, currency), '\n',
    '7: "0.00"/currency', getBalanceString ("0.00" as number, currency), '\n',
)
*/
export const getForecastEventSaveErrorComment = (error) => {
    if (error.code) {
        switch (error.code) {
            case "2":
            case "3": {
                return 'Не удалось создать прогнозное событие с указанными параметрами. Если вы уверены в правильности введенных данных, обратитесь в службу поддержки';
            }
            case "-41": {
                return 'Ошибка валидации на внутреннем Datapower (запросы, и файлы ответного архива)';
            }
            case "-153": {
                return 'Не получили ответа от внешнего сервиса за указанный таймаут';
            }
        }
    }
    if (error.message) {
        return error.message;
    }
    if (error.comment) {
        return error.comment;
    }
    return 'Техническая ошибка. Обратитесь в службу поддержки ';
};
export const getRowTemplate = (e, mode) => {
    switch (mode) {
        case Enums.ClassifierMode.DealEditor_DealType:
        case Enums.ClassifierMode.DealStage_Currency:
        case Enums.ClassifierMode.DealEditor_Currency: {
            return `${e.code} (${e.value})`;
        }
        case Enums.ClassifierMode.DealEditor_SalesMethod:
        case Enums.ClassifierMode.DealEditor_Product:
        default: {
            return e.value;
        }
    }
};
export const productListAlertViewMessage = ('Вы уверены, что хотите обновить данные по продуктам?\n' +
    'Процесс займёт длительное время. ' +
    'Вы можете продолжить работу в приложении и вернуться к данной странице позднее.');
export const filterList = (list, value, render, mode) => {
    return {
        data: list.data.filter((element) => {
            let re = new RegExp(' ' + value.trim(), 'ig');
            let operationString = ' ' + render(element, mode).replace('(', ' ');
            if (operationString.match(re)) {
                return true;
            }
            else {
                return false;
            }
        })
    };
};
export const prepareActivityUuid = (activityList) => {
    if (activityList.data.length == 0) {
        return null;
    }
    let obj = {};
    activityList.data.forEach((element) => {
        obj[element.id] = getRandomOperationUuid();
    });
    return obj;
};
export const getClientCardEditableStatus = (status) => {
    switch (status.code) {
        case 'Archive':
            return false;
        default:
            return true;
    }
};
export const secureParseFloat = (value) => {
    if (isNaN(parseFloat(value))) {
        return null;
    }
    return parseFloat(value);
};
export const getCustomerScreenState = (action) => ({
    currentCustomerId: action.payload.customer.id,
    isDashboardExpandedMode: false,
    isVisiblePopoverHolder: false,
    isVisiblePopoverCurator: false,
    isVisiblePopoverOccasionList: false,
    isVisiblePopoverNoteList: false,
    isVisiblePopoverProblemList: false,
    isVisibleModalActivityEditor: false,
    isVisibleModalPlanner: false,
    isVisibleModalEmailSend: false,
    isVisibleModalCustomerEditor: false,
    isVisibleModalAssociateSearch: false,
    isSearchModeAffiliateList: false,
    currentMode: action.payload.customerMode,
});
export const getDealMemberFlag = (user, memberList) => {
    let currentUser = memberList.data.find((element) => {
        return element.id == user.id;
    });
    if (currentUser && (currentUser.isGeneral || currentUser.role.value == 'Главный КМ сделки' || currentUser.role.value == 'КМ, участник сделки')) {
        return true;
    }
    return false;
};
export const getOneLineFullNameRepresentation = (value) => {
    const fullName = value.fullName;
    if (!fullName || !fullName.trim()) {
        return 'Нет данных';
    }
    return (fullName.length > 23) ? fullName.slice(0, 20) + '...' : fullName;
};
export const prepareDate = (value) => {
    if (value) {
        let date = new Date(value);
        date.setHours(12);
        return date;
    }
    return null;
};
export const checkForCreditMethod = (methodClassifier) => {
    return !!methodClassifier.data.find((element) => {
        return element.value == 'Кредитный';
    });
};
export const deleteCreditMethod = (methodClassifier) => {
    return {
        data: [...methodClassifier.data.filter((element) => {
                return element.value !== 'Кредитный';
            })]
    };
};
export const getMethodClassifierWarningMessage = (troubleGroup) => {
    let troubleGroupString = '';
    if (troubleGroup == 'Black Zone') {
        troubleGroupString = 'чёрная';
    }
    else if (troubleGroup == 'Red Zone') {
        troubleGroupString = 'красная';
    }
    troubleGroupString = `Создание сделок с методом продаж \"Кредитный\" невозможно, поскольку заемщику присвоена ${troubleGroupString} группа проблемности. Обратитесь к лидеру карточки мониторинга по заемщику.`;
    return troubleGroupString;
};
/**
 * @author Voronov Stanislav <amromanov.out@sberbank.ru>
 *
 * @description Получение сотрудника в команде
 * @use Применяется для получения позиции текущего пользователя из различных команд сущностей
 * @param { ModelsApp.Employee  } member
 * @param { ModelsCrm.MemberList  } memberList
 *
 * @returns { Models.Error }
 */
export const getPersonInTeam = (member, memberList) => {
    return memberList && Array.isArray(memberList.data) ? memberList.data.find((element) => element.id == member.id) : undefined;
};
export const checkForOwner = (user, memberList) => {
    let currentUser = memberList.data.find((element) => {
        if (element.id == user.id) {
            return true;
        }
        else {
            return false;
        }
    });
    if (currentUser) {
        return currentUser.isGeneral;
    }
    return false;
};
export const matchSupParamArray = (value, paramArrayDecoded) => (((paramArrayDecoded || '').split('#') || []).findIndex(e => e === value) !== -1);
/*
 обрабатываем параметры СУП, фильтруем по методу продаж и типу сделки, вычисляем флаг.
  -- в зависимости от типа сделки, ищем соотвествие метода продаж сделки в разных списках методов продаж из СУП параметра
 @param state - состояние сделки
 */
export const isInitRoadMapNecessary = (state) => {
    const deal = state.currentDeal;
    const salesMethod = deal.salesMethodClassifier || defaultValues.Classifier;
    // в зависимости от типа сделки, ищем соотвествие метода продаж сделки в разных
    // списках методов продаж из СУП параметра
    return matchSupParamArray(salesMethod.value, Enums.DealType.Credit === deal.type ?
        state.supParameters.DealSalesMethodRoadMapCredit :
        state.supParameters.DealSalesMethodRoadMapStandard);
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение ошибки валидации
 * @use Применяется для получения ошибки валидации формы создания сделки для кейсов: Выбор типа сделки, Выбор метода продаж Кредитный
 * @param { string  } troubleGroup . код группы проблемности
 * @param { Enums.dealEditorValidationError  } parentCase . кейс, для которого производится проверка
 *
 * @returns { Models.Error }
 */
export const getValidationError = (troubleGroup, parentCase) => {
    let troubleGroupString = '';
    switch (troubleGroup.toLowerCase()) {
        case 'black zone':
        case 'black':
            troubleGroupString = 'чёрная';
            break;
        case 'red zone':
        case 'red':
            troubleGroupString = 'красная';
            break;
        default: troubleGroupString = '';
    }
    let errorMessage = `невозможно, поскольку заемщику присвоена ${troubleGroupString} группа проблемности. Обратитесь к лидеру карточки мониторинга по заемщику.`;
    switch (parentCase) {
        case Enums.dealEditorValidationError.InputDealType:
            errorMessage = `Создание сделок KK ${errorMessage}`;
            break;
        case Enums.dealEditorValidationError.InputSalesMethod:
            errorMessage = `Создание сделок с методом продаж \"Кредитный\" ${errorMessage}`;
            break;
        default: errorMessage = '';
    }
    return {
        type: Enums.ErrorType.Unknown,
        code: '',
        message: errorMessage,
        comment: '',
    };
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение типов сделки
 *
 * @returns { ModelsApp.ClassifierList }
 */
export const getDealTypeClassifierList = () => {
    return {
        data: [
            {
                parentId: '',
                name: 'SBRF_NKP_REQUEST_TYPE',
                value: 'Кредитная сделка',
                code: 'KK'
            },
            {
                parentId: '',
                name: 'SBRF_NKP_REQUEST_TYPE',
                value: 'Стандартная сделка',
                code: 'Универсальная'
            }
        ]
    };
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение списка доступных стадий
 *
 * @param { ModelsApp.Classifier | null } value .
 * @param { ModelsApp.ClassifierList  } list .
 *
 * @returns { ModelsApp.ClassifierList }
 */
export const getAccessibleStageList = (value, list) => {
    const sortClassifierList = (a, b) => {
        if (a.value > b.value)
            return 1;
        if (a.value < b.value)
            return -1;
        return 0;
    };
    if (value && value.code && list.data.length > 0) {
        let arr = list.data.filter((element) => {
            return element.parentId == value.code;
        });
        if (arr.length > 0) {
            arr.sort(sortClassifierList);
            return {
                data: [...arr]
            };
        }
        else {
            return {
                data: []
            };
        }
    }
    return {
        data: []
    };
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение статуса стадии (заблокирована/разблокирована)
 *
 * @param { ModelsApp.Classifier } stageClassifier .
 * @param { ModelsApp.Classifier  } currentStage .
 * @param { ModelsCrm.DealPossibleStageList  } dealPossibleStageList .
 *
 * @returns { boolean }
 */
export const getDisableStatus = (stageClassifier, currentStage, dealPossibleStageList) => {
    let nextStage = dealPossibleStageList.data.find((element) => {
        return element.possibleSalesStage.code == stageClassifier.code;
    });
    if (stageClassifier.code == currentStage.code || nextStage) {
        return false;
    }
    return true;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение статуса стадии (выбрана/не выбрана)
 *
 * @param { ModelsApp.Classifier } stageClassifier .
 * @param { ModelsApp.Classifier  } inputStage .
 *
 * @returns { boolean }
 */
export const getSelectStatus = (stageClassifier, inputStage) => {
    return stageClassifier.code == inputStage.code;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>romanov.a.mikhayl@sberbank.ru
 *
 * @use Получение флага блокировки стадий в зависимости от роли пользователя
 * @description Активный список стадий отображается:
 *  1)Для сделок КК: метод продаж сделки присутствует в справочнике DEAL_SALE_METHOD_KK и пользователь является ВКС и/или входит в команду с ролью
 *      "Главный КМ сделки" (Primary KM), "КМ, участник сделки" (KM Member) ,"Главный кредитный специалист сделки" (Primary Credit Spec)
 *  2)Для стандартных сделок:  метод продаж сделки присутствует в справочнике DEAL_SALE_METHOD и пользователь является ВКС и входит в команду
 * @param { Models.Deal } currentDeal .
 * @param { ModelsApp.Employee  } currentUser .
 *
 * @returns { boolean }
 */
export const getStageListEnableFlag = (currentDeal, currentUser, classifierDictionary) => {
    if (currentDeal.requestTypeClassifier && currentDeal.requestTypeClassifier.code == 'KK') {
        return classifierDictionary.DEAL_SALE_METHOD_KK.data.some((element) => {
            return !!(currentDeal.salesMethodClassifier && currentDeal.salesMethodClassifier.code == element.code);
        }) &&
            (currentDeal.memberList.data.some((element) => {
                return element.id == currentUser.id && element.isGeneral;
            }) ||
                currentDeal.memberList.data.some((element) => {
                    return element.id == currentUser.id && ['Primary Credit Spec', 'Primary KM', 'KM Member'].some((roleCode) => {
                        return roleCode == element.role.code;
                    });
                }));
    }
    else {
        return classifierDictionary.DEAL_SALE_METHOD.data.some((element) => {
            return !!(currentDeal.salesMethodClassifier && currentDeal.salesMethodClassifier.code == element.code);
        }) &&
            currentDeal.memberList.data.some((element) => {
                return element.id == currentUser.id && element.isGeneral;
            });
    }
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение стадии сделки из истории стадий
 *
 * @param { ModelsApp.Classifier } stageClassifier .
 * @param { Models.DealHistoryStageList  } dealHistoryStageList .
 *
 * @returns { Models.HistoryStage }
 */
export const getHistoryStage = (stageClassifier, dealHistoryStageList) => {
    let historyStage = dealHistoryStageList.data.find((element) => {
        return !!(element && element.newValueClassifier && element.newValueClassifier.code == stageClassifier.code);
    });
    return historyStage || defaultValues.historyStage;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение статуса стадии (Прошлая, Текущая, Будущая)
 *
 * @param { ModelsApp.Classifier } selectedStage .
 * @param { ModelsApp.Classifier  } dealStage .
 * @param { Models.DealHistoryStageList  } historyStageList .
 *
 * @returns { Enums.StageStatus }
 */
export const getStageStatus = (selectedStage, dealStage, historyStageList) => {
    if (selectedStage.code == dealStage.code) {
        return Enums.StageStatus.Current;
    }
    else if (selectedStage.code != dealStage.code && !!(historyStageList.data.find((element) => {
        return (element.newValueClassifier && element.newValueClassifier.code) == selectedStage.code;
    }))) {
        return Enums.StageStatus.Past;
    }
    else {
        return Enums.StageStatus.Future;
    }
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Формирование строки с данными о стадии
 *
 * @param { Enums.StageStatus  } stageStatus .
 * @param { Models.HistoryStage  } history .
 * @param { Models.DealHistoryStageList } dealHistoryStageList .
 *
 * @returns { string }
 */
export const getStageText = (stageStatus, history, dealHistoryStageList) => {
    if (!history.startDate || stageStatus == Enums.StageStatus.Future) {
        return '';
    }
    const LINE_DELIMITER = 90;
    let startDate = `${history.startDate ? format.date(history.startDate) : ''}`;
    let endDate = `${history.endDate ? format.date(history.endDate) : ''}`;
    let endDatePlanned = `${history.endDatePlanned ? format.date(history.endDatePlanned) : ''}`;
    let durationFact = history.durationFact
        ? `${history.durationFact} ${detectUnitsString(history.durationFact, ['день', 'дня', 'дней'])}`
        : '';
    let durationNorm = history.durationNorm
        ? `${history.durationNorm} ${detectUnitsString(history.durationNorm, ['день', 'дня', 'дней'])}`
        : '';
    let firstFio = `${history.changedByFIO}`;
    let secondFio = '';
    let result = '';
    switch (stageStatus) {
        case Enums.StageStatus.Past: {
            let previousHistoryStage = dealHistoryStageList.data.find((element) => {
                return !!(history.newValueClassifier && history.newValueClassifier.code && element.previousValueClassifier && element.previousValueClassifier.code && history.newValueClassifier.code == element.previousValueClassifier.code);
            });
            if (previousHistoryStage) {
                secondFio = `${previousHistoryStage.changedByFIO}`;
            }
            result = `${startDate} (${firstFio})${endDate ? ` - ${endDate}${secondFio ? ` (${secondFio})` : ''}${durationFact ? `; ${durationFact}` : ''}` : ''}`;
            if (result.length > LINE_DELIMITER) {
                let remainder = (result.length - LINE_DELIMITER) / 2;
                result = `${startDate} (${firstFio.substring(0, firstFio.length - remainder)}...)${endDate ? ` - ${endDate}${secondFio ? ` (${secondFio.substring(0, secondFio.length - remainder)}...)` : ''}${durationFact ? `; ${durationFact}` : ''}` : ''}`;
            }
            break;
        }
        case Enums.StageStatus.Current: {
            result = `${startDate} (${firstFio})${endDatePlanned ? ` - ${endDatePlanned}` : ''}${durationNorm ? `; ${durationNorm}` : ''}`;
            if (result.length > LINE_DELIMITER) {
                let remainder = result.length - LINE_DELIMITER;
                result = `${startDate} (${firstFio.substring(0, firstFio.length - remainder)}...)${endDatePlanned ? ` - ${endDatePlanned}` : ''}${durationNorm ? `; ${durationNorm}` : ''}`;
            }
            break;
        }
    }
    return result;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверка наличия роли
 *
 * @param { Models.MemberList  } memberList .
 * @param { string  } role .
 *
 * @returns { boolean }
 */
export const checkRole = (memberList, role) => {
    return memberList.data.some((element) => {
        return element.role.code == role;
    });
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение классификатора ApplicationKk путём сопоставления parentId исходного справочника и code справочника-шаблона
 *
 * @param { ModelsApp.Classifier  } value .
 * @param { ModelsApp.ClassifierList  } list .
 *
 * @returns { ModelsApp.ClassifierList }
 */
export const getApplicationKkClassifierList = (value, list) => {
    return {
        data: [...list.data.filter((element) => {
                return element.parentId == value.code;
            })]
    };
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверяет строку на вхождение в неё заданого шаблона
 *
 * @param { string  } text .
 * @param { string  } template .
 *
 * @returns { boolean }
 */
export const isContains = (text, template) => {
    return text.toLowerCase().indexOf(template.toLowerCase()) != -1;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверяет наличие полей decisionSixEyes и decisionSixEyes.number в элементах массива
 *
 * @param { Array<Models.DealDecision> } array .
 *
 * @returns { boolean }
 */
export const checkDecisionSixEyes = (array) => {
    return array.some((element) => {
        return !element.decisionSixEyes || !element.decisionSixEyes.number;
    });
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверяет наличие полей decisionKK и decisionKK.number в элементах массива
 *
 * @param { Array<Models.DealDecision> } array .
 *
 * @returns { boolean }
 */
export const checkCreditCommittee = (array) => {
    return array.some((element) => {
        return !element.decisionKK || !element.decisionKK.number;
    });
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Функция возвращает элемент массива, выбранный по полю possibleSalesStage.code
 *
 * @param { Array<ModelsCrm.NextStage> } array .
 * @param { string } code .
 *
 * @returns { ModelsCrm.NextStage | null }
 */
export const getPossibleSalesStageByCode = (array, code) => {
    return array.find((element) => {
        return element.possibleSalesStage.code == code;
    }) || null;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * getTrackingElement
 *
 * @description Получение елемента массива трекинга сделки
 * @description getTrackingElement.byCrmStage по полю byCrmStage
 * @description getTrackingElement.byClientStage по полю byClientStage
 *
 * @param { Models.DealStageTracking  } trackingList .
 * @param { string  } searchKey .
 *
 * @returns { Models.Tracking | null }
 */
export const getTrackingElement = {
    byCrmStage: (trackingList, searchKey) => {
        return trackingList.data.find((element) => {
            return element.crmStage == searchKey;
        }) || null;
    },
    byClientStage: (trackingList, searchKey) => {
        return trackingList.data.find((element) => {
            return element.clientStage == searchKey;
        }) || null;
    },
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * performDealStageChecks
 *
 * @description Функция возвращает результат проверок по стадиям сделки
 *
 * @param { ModelsDealStages.IDealStagesState } state .
 * @param { ModelsApp.Classifier } inputStage .
 * @param { string } currentUserId .
 *
 * @returns { ModelsDealStages.IDealStageChecksValues }
 */
export const performDealStageChecks = (state, inputStage, currentUserId) => {
    let initialValues = {
        isSetMainClientManager: false,
        isSetMainCreditOfficer: false,
        isSetMemberMonitoring: false,
        isSetPlannedFinishDate: false,
        isSetCloseReason: false,
        isSetCurrency: false,
        isErrorEnable: false,
        isSetClientStageChanges: false,
        errorMessage: '',
    };
    let errors = {
        mainErrorMessage: '',
        secondaryErrorMessage: '',
    };
    let salesMethod = (state.currentDeal.salesMethodClassifier && state.currentDeal.salesMethodClassifier.value) || '';
    const performCheckMainClientManager = () => {
        initialValues.isSetMainClientManager = !checkRole(state.currentDeal.memberList, 'Primary KM');
    };
    const performCheckMainCreditOfficer = () => {
        initialValues.isSetMainCreditOfficer = !checkRole(state.currentDeal.memberList, 'Primary Credit Spec');
    };
    const performCheckMemberMonitoring = () => {
        initialValues.isSetMemberMonitoring = !checkRole(state.currentDeal.memberList, 'Monitoring Member');
    };
    const performCheckPlannedFinishDate = () => {
        initialValues.isSetPlannedFinishDate = !state.currentDeal.plannedFinishDate;
    };
    const performCheckCloseReason = () => {
        initialValues.isSetCloseReason = !(state.currentDeal.closeReason && state.currentDeal.closeReason.value);
    };
    const performCheckCurrency = () => {
        initialValues.isSetCurrency = !(state.currentDeal.currency && state.currentDeal.currency.code);
    };
    const performCheckClientStageChanges = () => {
        let previousTrackingValue = getTrackingElement.byCrmStage(state.dealStageTracking, inputStage.value);
        let currentTrackingValue = getTrackingElement.byCrmStage(state.dealStageTracking, state.currentDeal.phaseClassifier.value);
        initialValues.isSetClientStageChanges = !!(inputStage.value !== state.currentDeal.phaseClassifier.value &&
            previousTrackingValue && currentTrackingValue &&
            previousTrackingValue.clientStage !== currentTrackingValue.clientStage &&
            !state.isReadOnlyStages);
    };
    const performCheckDealTemporaryBlocking = () => {
        let mainErrorMessage = '';
        if (state.currentCustomerManaged.isTempBlockedForOppty) {
            mainErrorMessage = `Сделка временно заблокирована по причине выявления негативных факторов.\nРабота со сделкой не может быть продолжена.\n\n`;
        }
        errors.mainErrorMessage = `${errors.mainErrorMessage}${mainErrorMessage}`;
    };
    const performCheckNkp = () => {
        let mainErrorMessage = '';
        if ((isContains(state.currentDeal.phaseClassifier.value, 'Закрыта/Заключена') ||
            isContains(state.currentDeal.phaseClassifier.value, 'Закрыта/Отказ') ||
            isContains(state.currentDeal.phaseClassifier.value, 'На закрытие/Отказ')) &&
            state.currentCustomerManaged.isOldNkp == false) {
            mainErrorMessage = `Для организации запрещено создание сделок КК/ОПК в связи с её переводом на схему ЕКП.\nДля перевода организации на схему НКП обратитесь к Бизнес Администратору Системы.\n\n`;
        }
        errors.mainErrorMessage = `${errors.mainErrorMessage}${mainErrorMessage}`;
    };
    const performCheckRole = () => {
        let nextStage = getPossibleSalesStageByCode(state.dealPossibleStageList.data, inputStage.code);
        let secondaryErrorMessage = '';
        if (nextStage && nextStage.criterion &&
            (isContains(nextStage && nextStage.criterion.replace(/[\[\]]/gi, ""), '[SBRF VKS Flag] = "Y"'.replace(/[\[\]]/gi, "")) ||
                isContains(nextStage && nextStage.criterion.replace(/[\[\]]/gi, ""), '[SBRF VKS Flag]="Y"'.replace(/[\[\]]/gi, ""))) &&
            state.currentDeal.owner.id !== currentUserId) {
            secondaryErrorMessage = `\n- Tекущий пользователь не является ВКС.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    const performCheckMainAdress = () => {
        let secondaryErrorMessage = '';
        if (!state.currentCustomerManaged.isExistPrimaryAddress) {
            secondaryErrorMessage = `\n- В данных Организации не указан основной адрес.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    const performCheckDealContract = () => {
        let secondaryErrorMessage = '';
        if (state.currentDeal.contractList.data.length < 1) {
            secondaryErrorMessage = `\n- Не указана информация о заключённых договорах.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    const performCheckSixEyes = () => {
        let secondaryErrorMessage = '';
        if (state.currentDeal.decision &&
            state.currentDeal.decision.length > 0 && (state.currentDeal.decision[0].decisionMakingFormat.code == '6 Eyes' ||
            state.currentDeal.decision[0].decisionMakingFormat.code == '6 Eyes Plus') && checkDecisionSixEyes(state.currentDeal.decision)) {
            secondaryErrorMessage = `\n- Не указана информация по формату решения 6 глаз.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    const performCheckCreditCommittee = () => {
        let secondaryErrorMessage = '';
        if (state.currentDeal.decision &&
            state.currentDeal.decision.length > 0 &&
            state.currentDeal.decision[0].decisionMakingFormat.code == 'KK' &&
            checkCreditCommittee(state.currentDeal.decision)) {
            secondaryErrorMessage = `\n- Не указана информация по формату решения Кредитный комитет.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    const performCheckSubsidiaryDeal = () => {
        let secondaryErrorMessage = '';
        if (!(state.currentDeal.parentDeal && state.currentDeal.parentDeal.id)) {
            secondaryErrorMessage = `\n- Сделка является дочерней, необходимо перевести стадию родительской сделки.`;
        }
        errors.secondaryErrorMessage = `${errors.secondaryErrorMessage}${secondaryErrorMessage}`;
    };
    //----------------------
    performCheckClientStageChanges();
    if (state.currentDeal.requestTypeClassifier && state.currentDeal.requestTypeClassifier.code == 'KK') {
        if (isContains(salesMethod, 'Изменение условий по договору')) {
            if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
            }
            else if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckDealTemporaryBlocking();
                performCheckNkp();
            }
            else if (isContains(inputStage.value, 'Предварительный анализ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
            }
            else if (isContains(inputStage.value, 'Запрос и сбор документов')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
            }
            else if (isContains(inputStage.value, 'Анализ сделки')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Доработка')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Диспетчеризация АР')) {
                performCheckRole();
                performCheckDealTemporaryBlocking();
                performCheckSubsidiaryDeal();
            }
            else if (isContains(inputStage.value, 'Оформление документации')) {
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckMemberMonitoring();
                performCheckMainClientManager();
                performCheckSixEyes();
                performCheckCreditCommittee();
            }
        }
        else if (isContains(salesMethod, 'Кредиты/Гарантии/Аккредитивы')) {
            if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
            }
            else if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckDealTemporaryBlocking();
                performCheckNkp();
            }
            else if (isContains(inputStage.value, 'Предварительный анализ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
            }
            else if (isContains(inputStage.value, 'Запрос и сбор документов')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
            }
            else if (isContains(inputStage.value, 'Анализ сделки')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Доработка')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Диспетчеризация АР')) {
                performCheckRole();
                performCheckDealTemporaryBlocking();
                performCheckSubsidiaryDeal();
            }
            else if (isContains(inputStage.value, 'Оформление документации')) {
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckMemberMonitoring();
                performCheckMainClientManager();
                performCheckSixEyes();
                performCheckCreditCommittee();
            }
        }
        else if (isContains(salesMethod, 'Установление лимитов')) {
            if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
            }
            else if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckDealTemporaryBlocking();
                performCheckNkp();
            }
            else if (isContains(inputStage.value, 'Предварительный анализ')) {
            }
            else if (isContains(inputStage.value, 'Запрос и сбор документов')) {
            }
            else if (isContains(inputStage.value, 'Анализ сделки')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Доработка')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Диспетчеризация АР')) {
                performCheckRole();
                performCheckDealTemporaryBlocking();
                performCheckSubsidiaryDeal();
            }
            else if (isContains(inputStage.value, 'Оформление документации')) {
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckMemberMonitoring();
                performCheckMainClientManager();
                performCheckSixEyes();
                performCheckCreditCommittee();
            }
        }
        else if (isContains(salesMethod, 'Упрощенный')) {
            if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
                performCheckMainClientManager();
            }
            else if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Предварительный анализ')) {
            }
            else if (isContains(inputStage.value, 'Запрос и сбор документов')) {
            }
            else if (isContains(inputStage.value, 'Анализ сделки')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckPlannedFinishDate();
                performCheckCurrency();
            }
            else if (isContains(inputStage.value, 'Доработка')) {
            }
            else if (isContains(inputStage.value, 'Диспетчеризация АР')) {
            }
            else if (isContains(inputStage.value, 'Оформление документации')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckMainClientManager();
                performCheckMainCreditOfficer();
            }
        }
    }
    else {
        if (isContains(salesMethod, 'Перекрестные продажи')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Выполнение')) {
                performCheckRole();
                performCheckPlannedFinishDate();
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
        }
        else if (isContains(salesMethod, 'Универсальный')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckDealContract();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Первичная подготовка')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Официальное предложение условий')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Подготовка договора')) {
                performCheckRole();
            }
        }
        else if (isContains(salesMethod, 'Кредитный')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckDealContract();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Предварительный анализ Сделки')) {
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Запрос и сбор документов')) {
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Анализ документов по Сделке')) {
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Подготовка материалов на КО')) {
                performCheckDealTemporaryBlocking();
            }
            else if (isContains(inputStage.value, 'Подготовка документации')) {
                performCheckDealTemporaryBlocking();
            }
        }
        else if (isContains(salesMethod, 'ЗП проект - Малый, Микро')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Звонок клиенту')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Встреча')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Формирование предложения')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Повторная встреча')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Подписание договора')) {
                performCheckRole();
                performCheckMainAdress();
            }
        }
        else if (isContains(salesMethod, 'ЗП проект - Средний+') || isContains(salesMethod, 'ЗП проект - Бюджет')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Звонок клиенту')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Встреча')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Формирование предлож-я-1')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Повторная встреча-1')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Формирование предлож-я-2')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Повторная встреча-2')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Подписание договора')) {
                performCheckRole();
                performCheckMainAdress();
            }
        }
        else if (isContains(salesMethod, 'Расширение сотруднич-ва по ЗП')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Звонок клиенту')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Встреча')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Формирование предложения')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Повторная встреча')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Подпис-е договора/доп.согл.')) {
                performCheckRole();
                performCheckMainAdress();
            }
        }
        else if (isContains(salesMethod, 'Корпоративные финансы')) {
            if (isContains(inputStage.value, 'Ввод данных')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Заключена')) {
                performCheckRole();
                performCheckDealContract();
            }
            else if (isContains(inputStage.value, 'На закрытие/Отказ')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Закрыта/Отказ')) {
                performCheckRole();
                performCheckCloseReason();
            }
            else if (isContains(inputStage.value, 'Предварительные переговоры')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Получен мандат')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Реализуется')) {
                performCheckRole();
            }
            else if (isContains(inputStage.value, 'Отложена')) {
            }
        }
    }
    //----------------------
    if (errors.mainErrorMessage || errors.secondaryErrorMessage) {
        let error = `\nИзменение стадии сделки невозможно: \n${errors.secondaryErrorMessage}\n\nВнесите соответствующие изменения или обратитесь к профильному специалисту.`;
        if (!errors.mainErrorMessage) {
            error = error.substring(1);
        }
        let errorMessage = `${errors.secondaryErrorMessage ? errors.mainErrorMessage : errors.mainErrorMessage.substring(0, errors.mainErrorMessage.length - 2)}${errors.secondaryErrorMessage ? error : ''}`;
        initialValues.isErrorEnable = true;
        initialValues.errorMessage = errorMessage;
    }
    return initialValues;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение отфильтрованного списка сотрудников по существующим позициям
 *
 * @param { Models.MemberList  } initialList .
 * @param { Models.MemberList  } template .
 *
 * @returns { Models.MemberList }
 */
export const getFilteredExistingPositionsList = (initialList, template) => {
    return {
        data: initialList.data.filter((initialMember) => {
            return !template.data.some((templateMember) => {
                return initialMember.id == templateMember.id;
            });
        })
    };
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Строка из массива строк через запятую, не более заданной длины и с
 * добавлением "еще Х" если не влезли элементы
 * @use формирование строки в поле Продукты в карточке сделки
 * @param { Array<string>  } array .
 * @param { number  } maxLength .
 *
 * @returns { string }
 */
export const lineWithMoreCountAndMaxLength = (array, maxLength) => {
    if (array == null || array.length == 0) {
        return NO_DATA;
    }
    let result = array.join(', ');
    if (result.length > maxLength) {
        let text = result.substr(0, maxLength);
        let textArray = text.split(', ');
        let more = textArray[textArray.length - 1] !== ''
            ? array.length - textArray.length
            : array.length - textArray.length - 1;
        result = more > 0
            ? `${text}... (ещё ${more})`
            : `${text}...`;
    }
    return result;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Переводит интерфейс переданного json в тип any
 * @use формирование json (Request) при редактировании сделки
 * @param { <T>  } data .
 *
 * @returns { any }
 */
export const interfaceToAny = (data) => {
    return data;
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Обёртка над Lodash функцией omitBy()
 * @use Удаляет из объекта {data} поля равные null и undefined
 * @param { <T>  } data .
 * @returns { any }
 */
export const _omitBy = (data) => {
    return _.omitBy(data, _.isNil);
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение позиции агента
 * @use Получение позиции агента для строки Представители в сделках
 * @param { Models.AgentCustomerPositionList  } customerList .
 * @param { Models.CustomerManaged  } dealCustomer .
 * @returns { string }
 */
export const positionIn = (customerList, dealCustomer) => {
    const list = customerList.data || [];
    const customerPosition = list.find(c => c.customerId === dealCustomer.id);
    if (customerPosition) {
        return customerPosition.position;
    }
    if (list.length > 0) {
        return list[0].position;
    }
    return '';
};
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Формирование строки данных в поле Представители
 * @use Вывод ФИО представителей в поле Представители в сделках
 * @param { Models.AgentList  } memberList .
 * @param { Models.CustomerManaged } customer .
 * @returns { string }
 */
export const agentListLine = (memberList, customer) => {
    if (!memberList.data || !memberList.data.length) {
        return '';
    }
    const main = memberList.data[0];
    const position = positionIn(main.customerPositionList, customer);
    return format.truncate(`${getAgentNameInitials(main)}${position ? ' - ' + position : ''}`, 50) +
        moreCount(memberList.data);
};
/**
 * @description Validates if current User is holder for customer or not.
 *
 * @param { Models.Customer } inputCustomer .
 * @param { ModelsApp.Employee } currentUser .
 *
 * @returns { boolean }
 */
export const isCustomerHolder = (inputCustomer, currentUser) => {
    return inputCustomer.holder != null && inputCustomer.holder.id === currentUser.id;
};
/*
* @description - преобразование даты в UTC формат
* @param {date}
* @use
    - Для корректной отправки даты в мастер систему, необходимо, чтобы строка-даты удоволетворяла требованию data-power
* @author - Voronov S.I.
*/
export const convertToUTCDateFormat = (date) => (date ? moment.utc(date).format("YYYY-MM-DDTHH:mm:ss.SSSZZ") : '');
export const getPaymentScheduleRequestRefreshString = (type) => {
    switch (type) {
        case Enums.PaymentScheduleListRequestRefresh.PaymentScheduleListRequestRefreshEnabled: {
            return 'PaymentScheduleListRequestRefresh.PaymentScheduleListRequestRefreshEnabled';
        }
        default: {
            return '-';
        }
    }
};
/**
 *  Get Payment Schedule OperCode
 * @description Конвертирует строчное представление кода операции в значение соответствующего Enum
 * @param { string } value
 *
 * @returns { number | null }
 */
export const getPaymentScheduleOperCode = (value) => {
    switch (value.toLowerCase()) {
        case Enums.ProductCreditPaymentScheduleOperCode[Enums.ProductCreditPaymentScheduleOperCode.cred]:
            return Enums.ProductCreditPaymentScheduleOperCode.cred;
        case Enums.ProductCreditPaymentScheduleOperCode[Enums.ProductCreditPaymentScheduleOperCode.proc]:
            return Enums.ProductCreditPaymentScheduleOperCode.proc;
        case Enums.ProductCreditPaymentScheduleOperCode[Enums.ProductCreditPaymentScheduleOperCode.other]:
            return Enums.ProductCreditPaymentScheduleOperCode.other;
        default:
            return null;
    }
};
/**
 *  Get Payment Schedule OperCode
 * @description Конвертирует строчное представление статуса операции в соответствующее сообщение видимое на форме
 * @param { string | null} value
 *
 * @returns { string }
 */
export const getPaymentScheduleStatusName = (value) => {
    switch (value) {
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.notPay]:
            return 'Не оплачено';
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.forPay]:
            return 'К оплате';
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.execPay]:
            return 'Исполнено';
        default:
            return '';
    }
};
/**
 *  Get Payment Schedule Status
 * @description Конвертирует строчное представление статуса операции, пришедшее от сервера в соответствующий Enum
 * @param { string } value
 *
 * @returns { number | null}
 */
export const getPaymentScheduleStatus = (value) => {
    switch (value) {
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.notPay]:
            return Enums.ProductCreditPaymentScheduleStatus.notPay;
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.forPay]:
            return Enums.ProductCreditPaymentScheduleStatus.forPay;
        case Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.execPay]:
            return Enums.ProductCreditPaymentScheduleStatus.execPay;
        default:
            return null;
    }
};
/**
 *  Get Payment Schedule Filter Type Text
 * @param { boolean } inputPaymentScheduleFilterOperCodeOther
 * @param { boolean } inputPaymentScheduleFilterOperCodeProc
 * @param { boolean } inputPaymentScheduleFilterOperCodeCred
 *
 * @returns { string }
 */
export const getPaymentScheduleFilterTypeText = (inputPaymentScheduleFilterOperCodeOther, inputPaymentScheduleFilterOperCodeProc, inputPaymentScheduleFilterOperCodeCred) => {
    let count = 0;
    let result = '';
    if (inputPaymentScheduleFilterOperCodeOther) {
        result = 'Прочие платежи';
        count++;
    }
    if (inputPaymentScheduleFilterOperCodeProc) {
        result = 'Погашение процентов';
        count++;
    }
    if (inputPaymentScheduleFilterOperCodeCred) {
        result = 'Погашение кредита';
        count++;
    }
    if (count == 2) {
        result = `${result} (еще 1)`;
    }
    if (count == 3) {
        result = `Все`;
    }
    return result;
};
/**
 *  Get Payment Schedule Status
 * @param { boolean } inputPaymentScheduleFilterStatusExecPay
 * @param { boolean } inputPaymentScheduleFilterStatusForPay
 * @param { boolean } inputPaymentScheduleFilterStatusNotPay
 *
 * @returns { string }
 */
export const getPaymentScheduleFilterStatusText = (inputPaymentScheduleFilterStatusExecPay, inputPaymentScheduleFilterStatusForPay, inputPaymentScheduleFilterStatusNotPay) => {
    let count = 0;
    let result = '';
    if (inputPaymentScheduleFilterStatusExecPay) {
        result = 'Исполнено';
        count++;
    }
    if (inputPaymentScheduleFilterStatusForPay) {
        result = count == 1 ? `${result}, к оплате` : 'К оплате';
        count++;
    }
    if (inputPaymentScheduleFilterStatusNotPay) {
        result = count == 1 ? `${result}, не оплачено` : 'Не оплачено';
        count++;
    }
    if (count == 3) {
        result = `Все`;
    }
    return result;
};
/**
 *
 * @param { Models.PaymentScheduleList } paymentScheduleList
 *
 * @returns { string }
 */
export const getEarlyPaymentScheduleInfo = (paymentScheduleList) => {
    if (!paymentScheduleList.data.length) {
        return 'Нет данных';
    }
    if (paymentScheduleList.data
        .some((paymentSchedule) => paymentSchedule.status != null && paymentSchedule.status.toString() == Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.notPay].toString())) {
        return 'Есть неоплаченные';
    }
    return '';
};
/**
 *
 * @param { Object } valueList
 * @param { string } currentCheckValue
 *
 * @return { boolean }
 */
export const isDisabledCheckboxPaymentScheduleFilter = (valueList, currentCheckValue) => {
    let countElementIsFalse = 0;
    for (let value in valueList) {
        if (valueList[value]) {
            countElementIsFalse++;
        }
    }
    if (countElementIsFalse === 1) {
        for (let value in valueList) {
            if (valueList[value] && value == currentCheckValue) {
                return true;
            }
        }
    }
    return false;
};
export const navigationErrorTitle = (navigateStartData) => {
    switch (navigateStartData.navigationType) {
        case EnumsApp.NavigationType.Scheduler:
            return 'Планировщик';
        case EnumsApp.NavigationType.Customer:
        case EnumsApp.NavigationType.CustomerDashboard:
        case EnumsApp.NavigationType.CustomerProducts:
            return 'Карточка клиента';
        case EnumsApp.NavigationType.CustomerDeal:
            return 'Карточка сделки';
        case EnumsApp.NavigationType.Activity:
            return 'Карточка задачи';
        case EnumsApp.NavigationType.OccasionCustomer:
        case EnumsApp.NavigationType.OccasionAgent:
            return 'Важные даты';
        case EnumsApp.NavigationType.AppDashboard:
            return 'Дашборд';
        case EnumsApp.NavigationType.Gsz:
            return 'Карточка ГСЗ';
        case EnumsApp.NavigationType.AppNotice:
            return 'История уведомлений';
        case EnumsApp.NavigationType.Employee:
            return 'Сотрудник';
        case EnumsApp.NavigationType.ProductScreen: {
            switch (navigateStartData.productType) {
                case Enums.ProductType.SalaryProduct:
                    return 'Зарплатный продукт';
                case Enums.ProductType.ContractConstructorProduct:
                    return 'Договоры-конструкторы';
                case Enums.ProductType.DboProduct:
                    return 'Договор ДБО';
                case Enums.ProductType.AcquiringProduct:
                    return 'Эквайринг';
                case Enums.ProductType.CurrencyControlProduct:
                    return 'Валютный договор';
                case Enums.ProductType.SelfEncashmentProduct:
                    return 'Прием наличных денежных средств на счет через УС';
                case Enums.ProductType.EncashmentProduct:
                    return 'Инкассация';
                case Enums.ProductType.CorporateCardProduct:
                    return 'Корпоративные карты';
                case Enums.ProductType.ContractNsoProduct:
                    return 'НСО';
                case Enums.ProductType.ContractSdoProduct:
                    return 'СДО';
                case Enums.ProductType.DepositProduct:
                    return 'Депозит';
                case Enums.ProductType.TariffPlanProduct:
                    return 'Тарифные планы';
                case Enums.ProductType.PackageProduct:
                    return 'Пакеты услуг';
                case Enums.ProductType.CustomsPaymentProduct:
                    return 'Таможенные платежи';
                case Enums.ProductType.PaymentAccountProduct:
                    return 'Расчетный счет';
                case Enums.ProductType.CashManagementProduct:
                    return 'Cash-Management';
                case Enums.ProductType.BankGuaranteeProduct:
                    return 'Банковская гарантия';
                case Enums.ProductType.CreditProduct:
                    return 'Кредит';
            }
        }
        default:
            return 'Ошибка при получении данных';
    }
};
/**
 * Validates error for no data error.
 *
 * @param { Error } error .
 *
 * @returns { boolean }
 * @author Vladimir Prikazchikov
 */
export const checkForNoDataError = (error) => {
    return error.code == 'PROCESSING_ERROR';
};
const changeDealAttachmentState = (file, data, downloaded) => {
    let result = { data: [] };
    data.data.map((elem) => {
        if (elem.id == file.id) {
            if (downloaded) {
                elem = Object.assign({}, elem, { isLoaded: true, isLoading: false, error: null, fileId: file.fileId });
            }
            else if (file.error) {
                elem = Object.assign({}, elem, { isLoaded: false, isLoading: false, error: file.error });
            }
            else {
                elem = Object.assign({}, elem, { isLoading: true, error: null });
            }
        }
        result.data.push(elem);
    });
    return result;
};
export const downloadAttachmentInit = (file, data) => {
    return changeDealAttachmentState(file, data, false);
};
export const downloadAttachmentSuccess = (file, data) => {
    return changeDealAttachmentState(file, data, true);
};
export const downloadAttachmentFailure = (file, data) => {
    return changeDealAttachmentState(file, data, false);
};
const getEcmFileAttachmentRequest = (fileId, fileExtension, { user: { mrmkmcibCRM: { reducerDealAttachments: { currentConfiguration } } } }, { EcmTfsScenarioId, EcmTfsUser }) => (Object.assign({ file: Object.assign({}, defaultValues.DealAttachment, { fileId }), scenarioId: currentConfiguration[EcmTfsScenarioId] || defaultValues.currentConfiguration[EcmTfsScenarioId], user: currentConfiguration[EcmTfsUser] || defaultValues.currentConfiguration[EcmTfsUser] }, (fileExtension ? { fileExtension } : undefined)));
export const isAttachmentLoading = (id, data) => {
    let element = data.data.find((elem) => elem.id == id);
    return element ? element.isLoading : false;
};
export const searchDealAttachmentsList = (list, inputSearch) => {
    return list.filter(item => item.name.toLowerCase().indexOf(inputSearch.toLowerCase()) >= 0) || [];
};
/**
 * Function that downloads and saves the file
 *
 * @param { string } ECMFileId - key name to store in cache
 * @returns { React.Promise<any> } - UFS fileId of downloaded file or error
 */
export const downloadAndSaveInCahce = (ECMFileId, state) => {
    return Storage.getItem(CACHE_STORAGE_PREFIX_APP, ECMFileId)
        .then((localFileId) => {
        if (localFileId) {
            return localFileId;
        }
        else {
            return ECM.get(getEcmFileAttachmentRequest(ECMFileId, null, state, supParamNames()))
                .then((localFileID) => {
                return Storage.setItem(CACHE_STORAGE_PREFIX_APP, ECMFileId, localFileID)
                    .then(() => {
                    return localFileId;
                });
            });
        }
    });
};
export const getDealAttachementsErrorType = (error) => {
    switch (error.code) {
        case '1813191':
        case '18131913':
            return 'Возникла ошибка при авторизации в ADFS';
        case '1813194':
            return 'Не удалось расшифровать файл';
        case '619':
            return 'Возникли проблемы при открытии расшифрованного файла';
        case '4152314':
            return 'Не удалось загрузить документ';
        default:
            return 'Не удалось загрузить вложения';
    }
};
export const getAttachmentFileType = (format) => {
    switch (format) {
        case Enums.DealAttachmentsFileFormat.Doc: {
            return 'DOC';
        }
        case Enums.DealAttachmentsFileFormat.Pdf: {
            return 'PDF';
        }
        case Enums.DealAttachmentsFileFormat.Excel: {
            return 'XLS';
        }
        default: {
            return '';
        }
    }
};
export const convertFileFormatToEnum = (format) => {
    switch (format) {
        case 'MCDocument': {
            return Enums.DealAttachmentsFileFormat.Doc;
        }
        default: {
            return Enums.DealAttachmentsFileFormat.None;
        }
    }
};
export const getOtherFormat = (knownFormat, format) => {
    return knownFormat == Enums.DealAttachmentsFileFormat.None ? format : null;
};
export const extractArray = (data) => {
    if (!data) {
        throw new Error('Data is undefined or null');
    }
    if (!Array.isArray(data)) {
        throw new TypeError('Data is not array');
    }
    return data;
};
export const extractObject = (data) => {
    if (!data || (typeof data !== 'object')) {
        throw new TypeError(`Invalid data or data type: ${data}`);
    }
    if (data === {}) {
        throw new Error('Object is empty');
    }
    return data;
};
export const extractArrayElement = (data, index) => {
    if (!data) {
        throw new Error('Data is undefined or null');
    }
    if (!Array.isArray(data)) {
        throw new TypeError('Data is not array');
    }
    if (data.length < 1) {
        throw new Error('Array is empty');
    }
    if (!data[index] || (typeof data[index] !== 'object')) {
        throw new TypeError(`Invalid data or data type: ${data[index]}`);
    }
    if (data[index] === {}) {
        throw new Error('Object is empty');
    }
    return data;
};
export const parentDealPickerCustomerSearchListFilter = (parentDealCustomerList, parentDealCustomerInputSearch) => ({
    data: parentDealCustomerInputSearch ?
        parentDealCustomerList.data.filter((customer) => (customer.name.indexOf(parentDealCustomerInputSearch) >= 0))
        : [],
    isCompleted: true,
});
export const isMicrosoftFormat = (format) => {
    switch (format) {
        case Enums.DealAttachmentsFileFormat.Doc:
        case Enums.DealAttachmentsFileFormat.Excel:
        case Enums.DealAttachmentsFileFormat.PowerPoint: {
            return true;
        }
        default: {
            return false;
        }
    }
};
export const findAttachmentById = (id, dealAttachments) => {
    return dealAttachments.data.find(item => item.id === id) || defaultValues.DealAttachment;
};
/**
 * Cообщение для сценария обновления графика платежей
 */
export const alertViewMessagePaymentScheduleRefresh = ('Вы уверены, что хотите обновить данные графика?\n' +
    'Процесс может занять длительное время. ' +
    'Вы можете продолжить работу в приложении и вернуться к данной странице позднее.');
/**
 * Cообщение для альтернативного сценария "Запрошенный период слишком большой"
 * @param dateStart { Date } - начальная дата запрошенного периода
 * @param dateEnd { Date } - конечная дата запрошенного периода
 * @return {string}
 */
export const alertViewMessagePaymentScheduleRequestPeriodTooLong = (dateStart, dateEnd) => (`Запрошенный период с ${format.date(dateStart)} по ${format.date(dateEnd)} слишком большой для отображения. Пожалуйста выберите меньший период`);
/**
 * Заголовок для альтернативного сценария "Не удалось отобразить данные"
 */
export const alertViewTitlePaymentScheduleCouldNotDisplayData = (`Не удалось отобразить данные`);
/**
 * Cообщение для альтернативного сценария "Все платежи уже получены"
 */
export const alertViewMessagePaymentScheduleAllPaymentsAlreadyBeenReceived = (`Все платежи уже получены`);
/**
 * Cообщение для альтернативного сценария "Ошибка при обновлении данных графика"
 * @param date { Date } - дата последнего обновления
 * @return {string}
 */
export const alertViewMessagePaymentScheduleErrorUpdateData = (date) => (`Не удалось загрузить данные. Дата и время последнего обновления ${format.date(date)}`);
/**
 * Cообщение для альтернативного сценария 'График платежей. Ошибка при обновлении данных графика. Таймаут.'
 */
export const paymentScheduleListLoadErrorTimeout = 'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.';
/**
 * Cообщение для альтернативного сценария 'График платежей. Ошибка при обновлении данных графика. Ошибка.'
 */
export const paymentScheduleListLoadErrorOther = 'Не удалось загрузить данные. Обратитесь в службу поддержки.';
/**
 * Get handler event "OK" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @applicable:
    - Для определения нужна ли кнопка с функционалом ("OK") в зависимости от типа альтернативного сценария
 * @return boolean
 */
export const isHandlerFunctionOk = (alertViewType) => {
    if (alertViewType == Enums.paymentScheduleAlternativeScenariosType.Refresh ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.RequestPeriodTooLong ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.AllPaymentsAlreadyBeenReceived ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.UpdateDataTeсhnicalError) {
        return true;
    }
    return false;
};
/**
 * Get handler event "Cancel" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @return boolean
 */
export const isHandlerFunctionCancel = (alertViewType) => {
    if (alertViewType == Enums.paymentScheduleAlternativeScenariosType.Refresh ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.UpdateDataErrorTimeout) {
        return true;
    }
    return false;
};
/**
 * Get handler event "Repeat" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @return boolean
 */
export const isHandlerFunctionRepeat = (alertViewType) => {
    if (alertViewType == Enums.paymentScheduleAlternativeScenariosType.UpdateDataErrorTimeout ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.RequestPeriodTooLong ||
        alertViewType == Enums.paymentScheduleAlternativeScenariosType.AllPaymentsAlreadyBeenReceived) {
        return true;
    }
    return false;
};
/**
 * Get forecast event error type of action.
 *
 * @param {Enums.ForecastEventErrorType} errorType
 */
export const getForecastEventErrorType = (errorType) => {
    switch (errorType) {
        case Enums.ForecastEventErrorType.CreateError:
            return 'создать';
        case Enums.ForecastEventErrorType.UpdateError:
            return 'изменить';
        case Enums.ForecastEventErrorType.DeleteError:
            return 'удалить';
        default:
            return '';
    }
};
/**
 * Get forecast event error message.
 *
 * @param {Models.Error} error
 * @param {Enums.ForecastEventErrorType} errorType
 */
export const getForecastEventErrorMessage = (error, errorType) => {
    const errorMessage = getForecastEventErrorType(errorType);
    switch (error.code) {
        case '3':
            return `Не удалось ${errorMessage} прогнозное событие c указанными параметрами. Попробуйте снова или обратитесь в службу поддержки`;
        case 'timeout':
            return 'Превышено время ожидания ЕКС. Попробуйте снова или обратитесь в службу поддержки';
        case '1':
        case '2':
        case '101':
        case '102':
        default:
            return 'Не удалось создать прогнозное событие. Обратитесь в службу поддержки';
    }
};
export const campaignPickerSearchListFilter = (salesCampaignList, campaignInputSearch) => ({
    data: campaignInputSearch ?
        salesCampaignList.data.filter((salesCampaign) => (salesCampaign.name.indexOf(campaignInputSearch) >= 0))
        : [],
    isCompleted: true,
});
export const urlParentDealPeaker = {
    refresh_callGetCustomerManagedList: (state, reducerAppCRMState, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerAppCRMState.inputFilterMemberRole;
        let inputStructure = reducerAppCRMState.inputFilterOrganizationStructure;
        let category = '';
        if (inputRole == 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (inputStructure == 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        return {
            url: `${url(state)}/clients?pageSize=100&page=${reducerState.currentPage}&role=${inputRole}&clientType=${inputStructure}${category}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    append_callGetCustomerManagedList: (state, reducerAppCRMState, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerAppCRMState.inputFilterMemberRole;
        let inputStructure = reducerAppCRMState.inputFilterOrganizationStructure;
        let category = '';
        if (inputRole == 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (inputStructure == 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        return {
            url: `${url(state)}/clients?pageSize=100&page=${reducerState.currentPage}&role=${inputRole}&clientType=${inputStructure}${category}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    search_callGetCustomerSearchList: (state, reducerAppCRMState, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerAppCRMState.inputFilterMemberRole;
        let inputStructure = reducerAppCRMState.inputFilterOrganizationStructure;
        let category = '';
        if (inputRole == 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (inputStructure == 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        //перевод поискового запроса в верхний регистр - UFO-23593
        return {
            url: `${url(state)}/clients?pageSize=100&page=${reducerState.currentSearchPage}${inputRole != 4 ? `&role=${inputRole}` : ''}&clientType=${inputStructure}${category}&searchType=${reducerState.customerSearchType}&searchText=${reducerState.customerSearchType === 4 ? reducerState.parentDealCustomerInputSearch.toUpperCase() : reducerState.parentDealCustomerInputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
    searchAppend_callGetCustomerSearchListPage: (state, reducerAppCRMState, reducerState, tagList) => {
        //UFO-23238
        let inputRole = reducerAppCRMState.inputFilterMemberRole;
        let inputStructure = reducerAppCRMState.inputFilterOrganizationStructure;
        let category = '';
        if (inputRole == 3) {
            inputRole = 2;
            inputStructure = 1;
        }
        if (inputStructure == 5) { // for Conglomerate
            inputStructure = 1;
            category = '&category=1';
        }
        //перевод поискового запроса в верхний регистр - UFO-23593
        return {
            url: `${url(state)}/clients?pageSize=100&page=${reducerState.currentSearchPage}${inputRole != 4 ? `&role=${inputRole}` : ''}&clientType=${inputStructure}${category}&searchType=${reducerState.customerSearchType}&searchText=${reducerState.customerSearchType === 4 ? reducerState.parentDealCustomerInputSearch.toUpperCase() : reducerState.parentDealCustomerInputSearch}`,
            tagList: tagList,
            cacheTime: state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().MobileCachingTTL],
        };
    },
};
/*
 * @description - функция возвращает true если подстрока найдена в строке, начиная с первого символа слова. Иначе - false.
 *
 * Примеры работы функции:
 * func('Северные верфи', 'Северные верфи') === true
 * func('Северные верфи', 'се') === true
 * func('Северные верфи', 'вер') === true
 * func('Северные верфи', 'верфи') === true
 * func('Северные верфи', 'верные') === false
 * func('Северные верфи', 'рфи') === false
 *
 * @param { string } string .
 * @param { substring } substring .
 *
 * @returns { boolean }
 *
 * @applicable - можно использовать для фильтрации результатов при поиске, когда необходимо искать по всем словам строки, начиная с первого символа слова.
 * @author Vladykin A.S.
 */
const isStringIncludesSubstringFromWordStart = (string, substring) => {
    const stringLowerCase = string.replace(/\s+/g, ' ').trim().toLowerCase();
    const substringLowerCase = substring.trim().toLowerCase();
    const findedIndex = stringLowerCase.indexOf(substringLowerCase);
    if (findedIndex === 0 || (stringLowerCase.indexOf(` ${substringLowerCase}`)) > 0) {
        return true;
    }
    return false;
};
/**
 * @description - получает значение свойства объекта по заданному пути. Возвращает defaultValue или undefined если значение свойства отсутствует. Не используется за пределами конвертеров.
 * @param { object } object
 * @param { path } [string] | string
 * @param { defaultValue? } any
 * @applicable
 *  - позволяет упростить проверку объектов и обезопасить вызов вложенных свойств
 * @returns { any }
 * @author - Gubaydullin D. A.
 */
export const _get = (object, path, defaultValue) => {
    return _.get(object, path, defaultValue);
};
/**
 * @desctiption - временная функция для обрезки длинной строки. FIXME удалить функцию после выполнения задачи http://jira.ca.sbrf.ru/browse/UFSINFRA-19539
 * @param {string | null | undefined} text
 * @returns {string}
 * @author - Vladykin A. S.
 */
export const sliceLongText = (text) => {
    if (!text) {
        return 'Нет данных';
    }
    if (text.length > 99) {
        return text.slice(0, 100) + '...';
    }
    else {
        return text;
    }
};
/**
 * @description функция для отображения типа клиента в списке клиентов
 * @param {string} organizationType
 * @param {string} categoryCode
 * @returns {string}
 * @author Vladykin A. S.
 */
export const getOrganizationTypeValue = (organizationType, categoryCode) => {
    if (categoryCode === 'Conglomerate') {
        return 'Конгломерат';
    }
    return organizationType;
};
//# sourceMappingURL=Util.js.map