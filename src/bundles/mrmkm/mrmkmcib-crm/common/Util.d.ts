/// <reference path="../../../node_modules/@types/react-native/index.d.ts" />
/// <reference types="react-native" />
import * as ModelState from '../models/Models';
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Models as ModelsCrm, Models } from 'mrmkmcib-crm';
import { Models as ModelsScheduler } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
import * as ModelsCustomer from '../models/ModelsCustomer';
import * as ModelsCustomerEditor from '../models/ModelsCustomerEditor';
import * as ModelsDealEditor from '../models/ModelsDealEditor';
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker';
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker';
import * as ModelsDealStages from '../models/ModelsDealStages';
import * as ModelsDealStageEditor from '../models/ModelsDealStageEditor';
import * as ModelsDealList from '../models/ModelsDealList';
import * as ModelsProductPaymentAccount from '../models/ModelsProductPaymentAccount';
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import * as ModelsGSZ from '../models/ModelsGSZ';
import * as ModelsGszActivityInclude from '../models/ModelsGszActivityInclude';
import * as ModelsGszActivityExclude from '../models/ModelsGszActivityExclude';
import * as ModelsCustomerActivityInclude from '../models/ModelsCustomerActivityInclude';
import * as ModelsCustomerActivityExclude from '../models/ModelsCustomerActivityExclude';
import * as ModelsDeal from '../models/ModelsDeal';
import * as ModelsEmployee from '../models/ModelsEmployee';
import * as ModelsAgent from '../models/ModelsAgent';
import * as ModelsAgentList from '../models/ModelsAgentList';
import * as ModelsMemberList from '../models/ModelsMemberList';
import * as ModelsOccasion from '../models/ModelsOccasion';
import * as ModelsNoteList from '../models/ModelsNoteList';
import * as ModelsSelectClassifierWithSearch from '../models/ModelsSelectClassifierWithSearch';
import * as ModelsForecastEventEditor from '../models/ModelsForecastEventEditor';
import Response from '../models/Response';
import Error from '../models/Error';
import Action from '../models/Action';
import * as actionsCustomer from '../actions/ActionsCustomer';
export declare const isMainContact: (currentCustomerManaged: ModelsCrm.CustomerManaged, currentAgent: ModelsCrm.Agent) => boolean;
export declare const sortProductPaymentAccountList: (currencyPaymentAccount: ModelsCrm.GroupCurrencyProductData) => {
    productPaymentAccountList: {
        data: ModelsCrm.SettlementAgreementProduct[];
        bhCachedDate: Date | null;
        pollingStatus: Enums.ProductPollingStatus;
        pollingError: ModelsCrm.Error | null;
        operationUuid: string | null;
        eksErrorList: ModelsCrm.EksError[];
    };
    productDepositList: ModelsCrm.DepositProductList;
    productCreditList: ModelsCrm.CreditProductList;
    currencyClassifier: ModelsApp.Classifier;
    summa: number;
};
export declare const urlAppCRM: {
    refresh_callGetCustomerManagedList: (state: ModelState.IRootState, reducerState: ModelsAppCRM.IAppCRMState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    append_callGetCustomerManagedList: (state: ModelState.IRootState, reducerState: ModelsAppCRM.IAppCRMState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsAppCRM.IAppCRMState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    searchAppend_callGetCustomerSearchListPage: (state: ModelState.IRootState, reducerState: ModelsAppCRM.IAppCRMState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const getGeneralPersonMemberList: (memberList: ModelsCrm.MemberList) => ModelsApp.Employee | undefined;
export declare const getActivityMemberListOutput: (memberList: ModelsCrm.MemberList) => string;
export declare const urlCustomer: {
    callGetCustomer: (state: ModelState.IRootState, currentCustomerId: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetLimitNew: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetLimitOld: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetRequestProductList: (state: ModelState.IRootState, active: boolean, pollingStatus: Enums.ProductPollingStatus, operationUuid: string | null, service: string, currentCustomerId: string, isForceRequest: boolean, ttl: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCreditProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetSettlementAgreementProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetDepositProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetCorporateCardProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetEncashmentContractProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetLegalInfoProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetAcquiringProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetDboProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetUdboProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
    callGetSalaryProductEksList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], productListStatus: Enums.ProductListAgreementStatus) => ModelsCrm.Url;
};
export declare const urlCustomerEditor: {
    callGetCustomerModifierId: (state: ModelState.IRootState, reducerState: ModelsCustomerEditor.ICustomerEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutCustomerUpdate: (state: ModelState.IRootState, customer: ModelsCrm.CustomerManaged, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlDealEditor: {
    callPutDealActivityAppend: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealActivityExclude: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealInitRoadMap: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostDealCreate: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealUpdate: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetDealRefresh: (state: ModelState.IRootState, reducerState: ModelsDealEditor.IDealEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealStageUpdate: (state: ModelState.IRootState, reducerState: ModelsDealStageEditor.IDealStageEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetParentDealDealList: (state: ModelState.IRootState, reducerState: ModelsParentDealPicker.IParentDealPickerState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetSalesCampaignList: (state: ModelState.IRootState, reducerState: ModelsCampaignPicker.ICampaignPickerState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlDealStages: {
    callGetDealStageTracking: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetNextStages: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetHistoryStages: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealStagesUpdate: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealUpdate: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCurrentDeal: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealStageTrackingUpdate: (state: ModelState.IRootState, reducerState: ModelsDealStages.IDealStagesState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlDealList: {
    refresh_callGetDealList: (state: ModelState.IRootState, reducerState: ModelsDealList.IDealListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export interface classifierFilterInterface {
    code: string;
}
export declare const displayCustomerWithLegalForm: (customer: ModelsCrm.Customer | null) => string;
export declare const filterClassifierData: (classifierArray: ModelsApp.Classifier[], filterData: classifierFilterInterface[]) => ModelsApp.Classifier[];
export declare const productPostUrl: {
    callGetProductList: (state: ModelState.IRootState, service: Enums.ClientProductServiceList, customerId: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    getProductStatus: (state: ModelState.IRootState, service: Enums.ClientProductServiceList, oid: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlProductPaymentAccount: {
    callGetOperationList: (state: ModelState.IRootState, reducerState: ModelsProductPaymentAccount.IProductPaymentAccountState, force: boolean, ttl: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCardIndexList: (state: ModelState.IRootState, reducerState: ModelsProductPaymentAccount.IProductPaymentAccountState, force: boolean, ttl: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetProductVspInfo: (state: ModelState.IRootState, reducerState: ModelsProductPaymentAccount.IProductPaymentAccountState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlProductCredit: {
    callGetForecastDealList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], isForce: boolean, ttl: number) => ModelsCrm.Url;
    callGetCovenantList: (state: ModelState.IRootState, customer: ModelsCrm.Customer | null, contractNumber: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetPrognosticForecastDealList: (state: ModelState.IRootState, reducerState: ModelsCustomer.ICustomerState, tagList: ModelsCrm.CacheTag[], isForce: boolean, ttl: number) => ModelsCrm.Url;
    callPostForecastEventGrantingCreate: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostForecastEventRepaymentCreate: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostForecastEventUpdate: (state: ModelState.IRootState, reducerState: ModelsForecastEventEditor.IForecastEventEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostForecastEventDelete: (state: ModelState.IRootState, reducerState: ModelsForecastEventEditor.IForecastEventEditorState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetForecastEventList: (state: ModelState.IRootState, reducerState: ModelsProductCredit.IProductCreditState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetPaymentScheduleList: (state: ModelState.IRootState, reducerState: ModelsProductCredit.IProductCreditState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlGSZ: {
    refresh_callGetGsz: (state: ModelState.IRootState, reducerState: ModelsGSZ.IGSZState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    refresh_callGetGszLimit: (state: ModelState.IRootState, reducerState: ModelsGSZ.IGSZState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    refresh_callGetGszLimitNew: (state: ModelState.IRootState, reducerState: ModelsGSZ.IGSZState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlGszActivityInclude: {
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsGszActivityInclude.IGszActivityIncludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostGszActivityIncludeCreate: (state: ModelState.IRootState, reducerState: ModelsGszActivityInclude.IGszActivityIncludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlGszActivityExclude: {
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsGszActivityExclude.IGszActivityExcludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostGszActivityExcludeCreate: (state: ModelState.IRootState, reducerState: ModelsGszActivityExclude.IGszActivityExcludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlCustomerActivityInclude: {
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomer: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostCustomerActivityIncludeCreate: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlCustomerActivityExclude: {
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomer: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPostCustomerActivityExcludeCreate: (state: ModelState.IRootState, reducerState: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlLimit: {};
export declare const urlDeal: {
    refresh_callGetDeal: (state: ModelState.IRootState, reducerState: ModelsDeal.IDealState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    refresh_callGetDealAgentList: (state: ModelState.IRootState, reducerState: ModelsDeal.IDealState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    refresh_callGetDealTracking: (state: ModelState.IRootState, reducerState: ModelsDeal.IDealState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlEmployee: {
    refresh_callGetEmployee: (state: ModelState.IRootState, reducerState: ModelsEmployee.IEmployeeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetEmployeeHead: (state: ModelState.IRootState, head: ModelsApp.Employee, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomerList: (state: ModelState.IRootState, reducerState: ModelsEmployee.IEmployeeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetSubordinateList: (state: ModelState.IRootState, reducerState: ModelsEmployee.IEmployeeState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlAgent: {
    callPostAgentCreate: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgentModifierId: (state: ModelState.IRootState, reducerState: ModelsAgent.IAgentState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutAgentUpdate: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgent: (state: ModelState.IRootState, currentAgent: ModelsCrm.Agent, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgentById: (state: ModelState.IRootState, agentId: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlAgentList: {
    callGetAgentList: (state: ModelState.IRootState, id: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgentSearchList: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomerModifierId: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetEmployeeAgentList: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgentListModifierId: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutCustomerAgentListUpdate: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealAgentListUpdate: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetDealRefresh: (state: ModelState.IRootState, reducerState: ModelsAgentList.IAgentListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlDealAttachments: {
    callGetDealAttachments: (state: ModelState.IRootState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const getProductListService: (productType: Enums.ProductType) => Enums.ClientProductServiceList;
export declare const getProductListPath: (service: Enums.ClientProductServiceList) => string;
export declare const urlMemberList: {
    callGetMemberSearchList: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgentSearchList: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutMemberListUpdate: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutDealMemberListUpdate: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutAgentMemberListUpdate: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomerModifierId: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetCustomerForActivity: (state: ModelState.IRootState, customerId: string, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callPutActivityMemberListUpdate: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetDealMemberListRefresh: (state: ModelState.IRootState, reducerState: ModelsMemberList.IMemberListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const urlNoteList: {
    callPutAgentNoteListUpdate: (state: ModelState.IRootState, reducerState: ModelsNoteList.INoteListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
    callGetAgent: (state: ModelState.IRootState, reducerState: ModelsNoteList.INoteListState, tagList: ModelsCrm.CacheTag[]) => ModelsCrm.Url;
};
export declare const getDataPowerErrorMessageByCode: (code: string) => string;
export declare const getProductCreditCovenantStatus: (filterValueDate: Date | null, historyList: ModelsCrm.ProductCovenantHistoryList) => string;
export declare const getCRMErrorMessageByCode: (code: string) => string;
export declare const call: <T, TB>(url: ModelsCrm.Url, success: (response: Response<T>) => void, failure: (response: Error) => void, converter: (data: any) => T, method?: string, headers?: any, requestConverter?: (data: TB) => any, requestData?: TB | null) => void;
export declare const log: (text: string) => void;
export declare const guid: () => string;
export declare const getAgentListUrl: (id: string) => string;
declare global {
    interface Array<T> {
        compact(): Array<T>;
        flatten(): Array<T>;
        reverse(): Array<T>;
    }
    interface Number {
        plural(one: string, two: string, many: string): string;
        pluralText(one: string, two: string, many: string): string;
        sumString(bit?: number, spacer?: string, fractionLimit?: number | null): string;
        range(start?: number, steps?: number): Array<number>;
    }
    interface String {
        getCapitalFirstChar(): string;
        formatAccountNumber(): string;
        formatSpacing(spaces: Array<number>, spacer?: string): string;
        ellipsis(limit: number, end?: string): string;
    }
    interface Date {
        formattedString(format?: string): string;
        isBefore(date: Date): boolean;
        isAfter(date: Date): boolean;
        isSame(date: Date): boolean;
        isSameOrBefore(date: Date): boolean;
        isSameOrAfter(date: Date): boolean;
        fromNow(): string;
    }
}
export declare function sumString(numb: number, bit?: number, spacer?: string, fractionLimit?: number): string;
export declare const getTroubleGroupCodeString: (key: number, onlyColor?: boolean | undefined) => string;
export declare const getErrorFromHeaderLDAP: (headers: any) => Error | null;
export declare const getNavigationString: (key: Enums.Navigation) => "" | "AppCRM" | "AppCRM_DealEditor_Form" | "AppCRM_DealEditor" | "AppCRMLimitOld";
export declare const getNavigationiewCustomerEditorMainString: (key: Enums.NavigationViewCustomerEditorMain) => "" | "AppCRM_CustomerEditor" | "AppCRM_CustomerEditor_Form";
export declare const getErrorProductList: (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean) => ModelsCrm.Error | null;
export declare const getEksErrorProductList: (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean) => ModelsCrm.EksError[];
export declare const getNavigationCustomerEditorStepString: (key: Enums.NavigationViewCustomerEditorStep) => "" | "CustomerEditorAddress" | "CustomerEditorView";
export declare const getNavigationCustomerEditorString: (key: Enums.NavigationViewCustomerEditor) => "" | "CustomerEditorView" | "CustomerEditorCountry";
export declare const getErrorTitleOccasionList: (occasionListContextMode: Enums.OccasionListContextMode) => string;
export declare const getAgentContextMode: (agentListContextMode: Enums.AgentListContextMode) => Enums.AgentContextMode;
export declare const isArrayClassifierEqual: (appliedFilterValueList: ModelsApp.ClassifierList, defaultfilterValueList: ModelsApp.ClassifierList) => boolean;
export declare const getNavigationContentEmployee: (key: Enums.NavigationContentEmployee) => "" | "AppCRM_Employee" | "AppCRM_CustomerList";
export declare const getNavigationContentStringDealEditor: (key: Enums.NavigationContentAppCrmDealEditor) => "" | "AppCRM_DealEditor_Form";
export declare const getCountProductCovenantFilterList: (filterList: ModelsApp.ClassifierList) => string;
export declare const getNavigationAppCRMForecastEventEditor: (key: Enums.NavigationAppCRMForecastEventEditor) => "AppCRM_ForecastEventEditorForm" | "AppCRM_ForecastEventEditorType" | "AppCRM_ForecastEventEditorCurrency";
export declare const getNavigationContentPrognosticCreditProduct: (key: Enums.NavigationAppCRMPrognosticCreditProduct) => "" | "AppCRM_PrognosticCreditProduct" | "AppCRM_PrognosticCreditProductDetailPage" | "AppCRM_PrognosticCreditProductCreatePage" | "AppCRM_PrognosticCreditProductUpdatePage";
export declare const getNavigationContentCreditProduct: (key: Enums.NavigationAppCRMCreditProduct) => "" | "AppCRM_CreditProduct" | "AppCRM_CreditProductForecastPage" | "AppCRM_CreditProductPaymentSchedule";
export declare const getNavitgationAppCRMForecastEventEditor: (key: Enums.NavigationAppCRMForecastEventEditor) => "AppCRM_ForecastEventEditorForm" | "AppCRM_ForecastEventEditorType" | "AppCRM_ForecastEventEditorCurrency";
export declare const getNavigationContentCreditForecastEventFilterPopup: (key: Enums.NavigationAppCRMCreditForecastEvent_Filter) => "" | "AppCRM_Filter" | "AppCRM_PeriodChoice" | "AppCRM_PeriodCustomDateChoice" | "AppCRM_EventType";
export declare const getNavigationContentStringDealEditorForm: (key: Enums.NavigationContentAppCrmDealEditorForm) => "" | "AppCRM_DealEditor_Step_Main" | "AppCRM_DealEditor_Step_Additional";
export declare const getNavigationCRMProductListString: (key: Enums.NavigationAppCRMProductList) => "" | "AppCRM_ProductContainer" | "AppCRM_ProductList" | "AppCRM_ProductListWithFilterList";
export declare const getNavigationOperationPeriodTypeString: (key: Enums.NavigationAppCRMOperationListFilter) => "NavigationAppCRMOperationListFilter-OperationListPeriod" | "NavigationAppCRMOperationListFilter-OperationListFilter" | "Unknown";
export declare const getNavigationProductAcquiringIdString: (key: Enums.NavigationProductAcquiring) => "" | "NavigationProductAcquiring";
export declare const getNavigationContentProductPaymentAccountCard: (key: Enums.NavigationContentProductPaymentAccountCard) => "AppCRM_PaymentAccountCard" | "AppCRM_PaymentAccount_RestrictionList" | "AppCRM_PaymentAccount_CardIndexList" | "AppCRM_PaymentAccount_TariffList" | "AppCRM_PaymentAccount_VSPService" | "AppCRM_PaymentAccount_OperationList" | "AppCRM_PaymentAccount_Dashboard";
export declare const getNavigationDealListFiltersString: (key: Enums.NavigationPopoverContentDealListFilters) => "" | "DealListFilters_Main";
export declare const getNavigationContentStringDealConfirmSaveStagePopover: (key: Enums.NavigationContentAppCrmDealConfirmSaveStagePopover) => string;
export declare const getNavigationContentStringDealRoadMapPopover: (key: Enums.NavigationContentAppCrmDealRoadMapPopover) => "" | "AppCrmDealRoadMapPopover_Zero";
export declare const getNavigationContentString: (key: Enums.NavigationContentAppCrm) => "" | "AppCRM_DealEditor" | "AppCRM_CustomerList" | "AppCRM_ProductList" | "AppCRM_Customer" | "AppCRM_GSZ" | "AppCRM_MemberList" | "AppCRM_Deal" | "AppCRM_CreditProductForecastDealInfo" | "AppCRM_CreditProductForecastProductInfo" | "AppCRM_DealStage" | "AppCRM_DealScreenAttachments";
export declare const getNavigationAppCrmDealEditorString: (key: Enums.NavigationContentDealEditor) => "" | "AppCRM_DealEditor_ParentDealPicker" | "AppCRM_DealEditor_CampaignPicker";
export declare const getNavigationAppCrmString: (key: Enums.NavigationAppCRM) => string;
export declare const getNavigationPopoverCustomerString: (key: Enums.NavigationContentAppCrm_Customer_Owners) => "" | "AppCRM_Customer_OwnerList" | "AppCRM_Customer_OwnerList_Agents";
export declare const getNavigationPopoverString: (key: Enums.NavigationContentAppCrmGszBorrowers) => "" | "AppCRM_GSZ_Borrowers";
export declare const getNavigationIntoExcludeIncludeViewString: (key: Enums.NavigationIntoExcludeIncludeView) => "" | "IncludeExclude_View" | "IncludeExclude_ClientsSearch";
export declare const getNavigationCustomerEditInIncludeExcludeOrganizationString: (key: Enums.NavigationCustomerEditInIncludeExcludeOrganization) => "" | "EditorContainer" | "CustomerEditor_Include_View" | "CustomerEditor_Exclude_View";
export declare const getNavigationGszEditInIncludeExcludeOrganizationString: (key: Enums.NavigationGszEditInIncludeExcludeOrganization) => "" | "Gsz_EditorContainer" | "Gsz_CustomerEditor_Include_View" | "Gsz_CustomerEditor_Exclude_View";
export declare const getNavigationPopoverMembersString: (key: Enums.MemberList) => "" | "AppCRM_MemberList";
export declare const getRoleString: (key: string) => string;
/**
 * @description - Функция принимает строку обозначающую роль пользователя и возвращает соответствующий Enum
 * @param {string} key
 * @returns {Enums.UserRole}
 * @author - Tarverdyan N. K.
 */
export declare const getRoleEnum: (key: string) => Enums.UserRole;
export declare const getRoleByOrganizationTypeString: (key: string, organizationTypeCode: string | null) => string;
export declare const getProblemGroupCircleColor: (code: string) => string;
export declare const getNavigationNoteList: (key: Enums.NavigationNoteList) => "" | "NoteList" | "NoteScreen";
export declare const addressFormatFull: (address: ModelsCrm.Address) => string;
export declare enum UndefinedValuesPlaceholder {
    NO_DATA = 0,
    UNDEFINED = 1,
    EMPTY = 2,
    NO = 3
}
export declare const getAgentLeftScreenNavigationTitleText: (agentContextMode: Enums.AgentContextMode) => string;
export declare const getAgentMemberListOutput: (memberList: ModelsCrm.MemberList) => string;
export declare const getPlaceholderStringRepresentation: (value: UndefinedValuesPlaceholder) => string;
export declare const borrowerListSearch: (list: ModelsCrm.BorrowerList, inputBorrowerListSearch: string) => ModelsCrm.BorrowerList;
export declare const noDataPlaceHolder: () => string;
export declare const getNumberDataDisplayValue: (data: number | null, placeholderType?: UndefinedValuesPlaceholder) => string | number;
export declare const getGroupProductListByCurrency: (currency: ModelsApp.Classifier, groupProductList: ModelsCrm.GroupCurrencyProductList) => ModelsCrm.GroupCurrencyProductData | undefined;
export declare const addNewItemInCurrencyProductList: (listPaymentAccountProduct: ModelsCrm.GroupCurrencyProductList, currencyProductItem: ModelsCrm.GroupCurrencyProductData) => ModelsCrm.GroupCurrencyProductData[];
export declare const defaultCurrencyProductItem: (currencyClassifier: ModelsApp.Classifier, summa: number) => ModelsCrm.GroupCurrencyProductData;
export declare const getStatusProductListFilter: (status: Enums.ProductListAgreementStatus) => string;
export declare const isPollingStatusInProgress: (productPollingStatus: Enums.ProductPollingStatus | null) => boolean;
export declare const getProductListPollingStatus: (pollingStatus: string) => Enums.ProductPollingStatus;
export declare const sortProductCurrencyList: (productCurrencyList: ModelsApp.ClassifierList, productList: ModelsCrm.GroupCurrencyProductList) => ModelsCrm.GroupCurrencyProductData[];
export declare const extractPaymentAccountCurrencyList: (productList: ModelsCrm.SettlementAgreementProductList) => ModelsApp.Classifier[];
export declare const extractDepositCurrencyList: (productList: ModelsCrm.DepositProductList) => ModelsApp.Classifier[];
export declare const extractCreditCurrencyList: (productList: ModelsCrm.CreditProductList) => ModelsApp.Classifier[];
export declare const filterSortedCurrencyList: (currencyList: ModelsApp.ClassifierList, list: ModelsApp.Classifier[]) => ModelsApp.ClassifierList;
export declare const filterPaymentAccountProductListByCurrency: (productList: ModelsCrm.SettlementAgreementProductList, currency: ModelsApp.Classifier) => ModelsCrm.SettlementAgreementProductList;
export declare const filterDepositProductListByCurrency: (productList: ModelsCrm.DepositProductList, currency: ModelsApp.Classifier) => ModelsCrm.DepositProductList;
export declare const filterCreditProductListByCurrency: (productList: ModelsCrm.CreditProductList, currency: ModelsApp.Classifier) => ModelsCrm.CreditProductList;
export declare const sumPaymentAccountProductListByCurrency: (productList: ModelsCrm.SettlementAgreementProductList) => number;
export declare const sumDepositProductListByCurrency: (productList: ModelsCrm.DepositProductList) => number;
export declare const sumCreditProductListByCurrency: (productList: ModelsCrm.CreditProductList) => number;
export declare const isValidDate: (data: string) => boolean;
export declare const parseServerDate: (data: string) => Date | null;
export declare const getIsActiveAgreementProductText: (activeAgreement: boolean) => string;
export declare const getClassifierDataDisplayValue: (data: ModelsApp.Classifier | null, placeholderType?: UndefinedValuesPlaceholder) => ModelsApp.Classifier;
export declare const searchGszMemberList: (list: ModelsCrm.GszMember[], inputSearch: string) => ModelsCrm.GszMember[];
export declare const getStringDataDisplayValue: (data: string | null, placeholderType?: UndefinedValuesPlaceholder) => string;
export declare const isCustomerManaged: (customerUnknown: ModelsCrm.CustomerUnknown, user: ModelsApp.Employee) => boolean;
export declare const getCustomerManaged: (customerUnknown: ModelsCrm.CustomerUnknown, user: ModelsApp.Employee) => ModelsCrm.CustomerManaged;
export declare const getCustomer: (customerUnknown: ModelsCrm.CustomerUnknown, user: ModelsApp.Employee) => ModelsCrm.Customer;
export declare const currencyString: (c: string | ModelsApp.Classifier | null | undefined) => string;
export declare const unique: <T, R>(arr: T[], selector?: (e: T) => T | R) => T[];
export declare const formatNumberAsSum: (num: string | number | null, base?: number) => string;
export declare const format: {
    sum: (num: number | null | undefined, base: number | undefined, curr: string | ModelsApp.Classifier | null | undefined, undefinedPlaceholder?: string) => string;
    date: (d: Date, fmt?: string) => string;
    percents: (v: string | number | undefined) => string;
    phoneNumber: (num: string) => string;
    truncate: (str: string | null | undefined, maxLength: number) => string;
};
export declare const dealToString: (deal: ModelsCrm.Deal) => string;
export declare const getDealSearchList: (dealList: ModelsCrm.DealList, search: string) => ModelsCrm.DealList;
export declare const getDealFilteredList: (dealList: ModelsCrm.DealList, start: Date | null, end: Date | null) => ModelsCrm.DealList;
/**
 * Функция для определения атрибута, по которому осуществляется поиск
 * @param {String} text
 *  @return Enums.CustomerSearchType
 */
export declare const getCustomerSearchType: (text: string) => Enums.CustomerSearchType;
export declare const getDealTypeTitle: (type: Enums.DealType, requestType: ModelsApp.Classifier | null) => string;
export declare const getProductTypeName: (type: Enums.ProductType) => string;
export declare const getProductListTypeName: (type: Enums.ProductType) => string;
export declare const getGenderStringValue: (gender: Enums.GenderList) => string;
export declare const filterAgentSearchList: (inputAgentList: ModelsCrm.AgentList, foundAgentList: ModelsCrm.AgentList, searchRequest: string, agentListContextMode: Enums.AgentListContextMode) => ModelsCrm.Agent[];
export declare const getAgentCustomerPositionByAgentListContext: (customer: ModelsCrm.CustomerManaged | null, agent: ModelsCrm.Agent, agentListContextMode: Enums.AgentListContextMode) => string;
export declare const getAgentCustomerPosition: (customer: ModelsCrm.CustomerManaged | null, agent: ModelsCrm.Agent) => string;
export declare const getAgentCustomerCompany: (customer: ModelsCrm.Customer, agent: ModelsCrm.Agent) => string;
export declare const parseFullName: (fullName: string) => ModelsCrm.Agent | null;
export declare const getAgentNameInitials: (agent: ModelsApp.Employee | ModelsCrm.Agent | null) => string;
export declare const getAgentFullName: (agent: ModelsApp.Employee | ModelsCrm.Agent | null) => string;
export declare const formatDealListSum: (item: ModelsCrm.Deal) => string;
export declare const findGeneralMember: (memberList: ModelsCrm.MemberList) => ModelsCrm.MemberList;
export declare const sortAgentList: (agentList: ModelsCrm.AgentList) => ModelsCrm.Agent[];
export declare const getAgentInitials: (agent: ModelsApp.Employee | ModelsCrm.Agent) => string;
export declare const moreCount: (array: any[]) => string;
export declare const productLine: (deal: ModelsCrm.Deal) => string;
export declare const getPersonName: (person: ModelsApp.Employee) => string;
export interface IClassifierRequest {
    classifierName: string;
    value: string;
    code: string;
}
export declare function getSafeData<T>(data: T, type: string): T | null;
export declare function getSafeClassifierRequest(data: ModelsApp.Classifier | null): IClassifierRequest | null;
export declare const agentListPrincipal: (agentList: ModelsCrm.AgentList, agentId: string, isPrincipal: boolean) => ModelsCrm.AgentList;
export declare const customerEditorDefaultAddress: (previousState: ModelsCustomerEditor.ICustomerEditorState, customer: ModelsCrm.CustomerManaged) => ModelsCustomerEditor.ICustomerEditorState;
export declare const agentListAdd: (agentList: ModelsCrm.AgentList, agent: ModelsCrm.Agent, role: ModelsApp.Classifier, currentCustomerManaged: ModelsCrm.CustomerManaged, currentActivity: ModelsScheduler.Activity, currentDeal: ModelsCrm.Deal) => ModelsCrm.AgentList;
export declare const fillDealFilterStageList: (dealList: ModelsCrm.Deal[]) => ModelsApp.ClassifierList;
export declare const fillDealFilterCurrencyList: (dealList: ModelsCrm.DealList) => ModelsApp.ClassifierList;
export declare const getDealList: (dealList: ModelsCrm.DealList, filterState: (deal: ModelsCrm.Deal) => boolean, filter: ModelsCrm.DealListFilter | null, getDate: (deal: ModelsCrm.Deal) => Date | null) => ModelsCrm.DealList;
export declare const getDealOpenedList: (dealList: ModelsCrm.DealList, filter: ModelsCrm.DealListFilter) => ModelsCrm.DealList;
export declare const getDealClosedList: (dealList: ModelsCrm.DealList, filter: ModelsCrm.DealListFilter) => ModelsCrm.DealList;
export declare const detectUnits: (num: number | null, units: string[]) => string;
export declare const detectUnitsString: (str: string | null, units: string[]) => string;
export declare const isDealManaged: (team: ModelsApp.Employee[], user: ModelsApp.Employee) => boolean;
export declare const myRoleInDeal: (team: ModelsApp.Employee[], user: ModelsApp.Employee) => ModelsApp.Classifier | null;
export declare const isLargestCustomer: (customer: ModelsCrm.CustomerManaged) => boolean | "";
export declare const isCustomerCategoryConglomerate: (category: ModelsApp.Classifier) => boolean;
export declare const isTypeOrganizationHolding: (orgTypeClassifier: ModelsApp.Classifier) => boolean;
export declare const dealCreateStatus: (customer: ModelsCrm.CustomerManaged, currentUser: ModelsApp.Employee) => ModelsCrm.DealListInfo;
export declare const getAgentCustomerRelations: (agent: ModelsCrm.Agent, customerId: string) => ModelsApp.Classifier;
export declare const isMainEmployee: (agent: ModelsCrm.Agent, customerId: string) => boolean;
export declare const setAccessLevelToAgent: (member: ModelsApp.Employee | undefined) => Enums.AgentAccessLevel;
export declare const userInMemberTeam: (currentUser: ModelsApp.Employee, customer: ModelsCrm.Customer | ModelsCrm.CustomerManaged) => boolean;
export declare const getDealSalesMethodList: (product: ModelsApp.Classifier) => ModelsApp.ClassifierList;
export declare const getWorkPhone: (phoneList: ModelsCrm.PhoneNumberList) => string | null;
export declare const getMobilePhone: (phoneList: ModelsCrm.PhoneNumberList) => string | null;
export declare const getValidationgErrorText: (attribute: Enums.AgentValidationAttribute) => string;
export declare const isAgentValidateFirstNameFailed: (firstName: string | null) => boolean;
export declare const isAgentValidateLastNameFailed: (lastName: string | null) => boolean;
export declare const isAgentValidateMiddleNameFailed: (middleName: string | null) => boolean;
export declare const isAgentValidateJobPositionFailed: (jobPosition: string) => boolean;
export declare const isAgentValidateWorkPhoneFailed: (workPhone: string | null) => boolean;
export declare const isAgentValidateMobilePhoneFailed: (mobilePhone: string | null) => boolean;
export declare const isAgentValidateEmailFailed: (email: string) => boolean;
export declare const isAgentValidateBirthdayFailed: (birthday: Date | null) => boolean;
export declare const isAgentValidateGenderFailed: (gender: Enums.GenderList) => boolean;
export declare const getGenderType: (value: number) => Enums.GenderList;
export declare const isAgentValidateRelationTypeFailed: (relationType: ModelsApp.Classifier | null) => boolean;
export declare const isAgentValidateCommentFailed: (comment: string) => boolean;
export declare const occasionValidationType: (type: ModelsApp.Classifier | null) => string | null;
export declare const occasionValidationDate: (date: Date | null) => string;
export declare const getOccasionPageTitleText: (occasionMode: Enums.OccasionMode) => string;
export declare const occasionListDelete: (occasionList: ModelsCrm.OccasionList, index: number) => ModelsCrm.OccasionList;
export declare const noteListDelete: (noteList: ModelsCrm.NoteList, index: number) => ModelsCrm.NoteList;
export declare const noteListAdd: (noteList: ModelsCrm.NoteList) => ModelsCrm.NoteList;
export declare const noteListUpdate: (noteList: ModelsCrm.NoteList, index: number | null, text: string, type: ModelsApp.Classifier | null) => ModelsCrm.NoteList;
export declare const agentMobilePhoneFormat: (phone: string) => string;
export declare const agentWorkPhoneFormat: (phone: string) => string;
export declare const memberListAdd: (memberList: ModelsCrm.MemberList, employee: ModelsApp.Employee, role: ModelsApp.Classifier, currentMode: Enums.MemberListMode) => ModelsCrm.MemberList;
export declare const memberListGeneralSelect: (memberList: ModelsCrm.MemberList, index: number) => ModelsCrm.MemberList;
export declare const memberListDelete: (memberList: ModelsCrm.MemberList, index: number) => ModelsCrm.MemberList;
export declare const memberActionMenuSwitch: (memberList: ModelsCrm.MemberList, id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean) => ModelsCrm.MemberList;
export declare const isDealPhaseLast: (phase: ModelsApp.Classifier) => boolean;
/**
 * @description Метод фильтрует список дочерних компаний по паттерну поискового запроса пользователя
 *
 * @param { ModelsApp.Classifier | null } affiliateList .
 * @param { string } inputSearchAffiliateList .
 *
 * @returns { Array<Models.Customer> }
 */
export declare const searchAffiliateList: (affiliateList: ModelsCrm.CustomerList | null, inputSearchAffiliateList: string) => ModelsCrm.Customer[];
export declare const sortClassifierListByValueField: (list: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
export declare const customerActivityExcludeFilterCustomerList: (inputSearch: string, inputSearchManagedOnly: boolean, currentCustomerManaged: ModelsCrm.CustomerManaged, currentCustomer: ModelsCrm.Customer) => ModelsCrm.CustomerList;
export declare const customerActivityIncludeValidationComment: (comment: string, user: ModelsApp.Employee) => string | null;
export declare const customerActivityIncludeValidationCustomer: (customer: ModelsCrm.Customer, user: ModelsApp.Employee, currentCustomerManaged: ModelsCrm.CustomerManaged, currentCustomer: ModelsCrm.Customer) => string | null;
export declare const getRandomOperationUuid: () => string;
export declare const agentListMerge: (agentList: ModelsCrm.AgentList, agent: ModelsCrm.Agent) => ModelsCrm.AgentList;
export declare const occasionListMerge: (occasionList: ModelsCrm.OccasionList, occasion: ModelsCrm.Occasion) => ModelsCrm.OccasionList;
export declare const customerActivityExcludeValidationComment: (comment: string, user: ModelsApp.Employee) => string | null;
export declare const customerActivityExcludeValidationCustomer: (customer: ModelsCrm.Customer, user: ModelsApp.Employee, currentCustomerManaged: ModelsCrm.CustomerManaged, currentCustomer: ModelsCrm.Customer) => string | null;
export declare const gszActivityExcludeValidationComment: (comment: string, user: ModelsApp.Employee) => string | null;
export declare const gszActivityExcludeValidationCustomer: (customer: ModelsCrm.Customer, user: ModelsApp.Employee) => string | null;
export declare const gszActivityExcludeFilterCustomerList: (search: string, isSearchManagedOnly: boolean, gsz: ModelsCrm.Gsz) => ModelsCrm.CustomerList;
export declare const gszActivityIncludeValidationComment: (comment: string, user: ModelsApp.Employee) => string | null;
export declare const gszActivityIncludeValidationCustomer: (customer: ModelsCrm.Customer, user: ModelsApp.Employee) => string | null;
export declare const sortCurrencyListAsInOrder: (currencyList: ModelsApp.Classifier[], orderList: string[]) => ModelsApp.Classifier[];
export declare const extractCurrencyList: (productList: ModelsCrm.CreditProductList | ModelsCrm.SettlementAgreementProductList | ModelsCrm.DepositProductList | ModelsCrm.CorporateCardProductList | ModelsCrm.EncashmentContractProductList | ModelsCrm.LegalInfoProductList | ModelsCrm.AcquiringProductList | ModelsCrm.DboProductList | ModelsCrm.UdboProductList | ModelsCrm.SalaryProductList, type: Enums.ProductType) => ModelsApp.ClassifierList;
export declare const extractEncumbranceList: (productList: ModelsCrm.CreditProductList | ModelsCrm.SettlementAgreementProductList | ModelsCrm.DepositProductList | ModelsCrm.CorporateCardProductList | ModelsCrm.EncashmentContractProductList | ModelsCrm.LegalInfoProductList | ModelsCrm.AcquiringProductList | ModelsCrm.DboProductList | ModelsCrm.UdboProductList | ModelsCrm.SalaryProductList, productType: Enums.ProductType) => ModelsCrm.ProductEncumbranceList;
export declare const encumbranceNameByType: (type: Enums.ProductEncumbranceType) => string;
export declare const toggleEncumbranceFilter: (inputEncumbranceList: ModelsCrm.ProductEncumbranceList, value: ModelsCrm.ProductEncumbrance) => ModelsCrm.ProductEncumbranceList;
export declare const operationListFilter: (operationList: ModelsCrm.PaymentAccountProductOperationList, start: Date | null, end: Date | null, periodType: Enums.PeriodType, operationType: Enums.OperationType, sumMin: number | null, sumMax: number | null) => ModelsCrm.PaymentAccountProductOperationList;
export declare const forecastEventListFilter: (forecastEventList: ModelsCrm.ForecastEventList, start: Date | null, end: Date | null, periodType: Enums.ForecastPeriodType, forecastEventType: ModelsApp.Classifier | null) => ModelsCrm.ForecastEventList;
/**
 * Ищем первый платеж со статусом отличным от "Исполнено" и отсекаем предудыщие платежи
 * @param paymentScheduleList
 */
export declare const paymentScheduleListStatusFilter: (paymentScheduleList: {
    data: ModelsCrm.PaymentScheduleList;
}, setInputPaymentScheduleFilterPeriod: Function) => {
    data: ModelsCrm.PaymentScheduleList;
};
export declare const getCustomerActivityIncludeExecutor: (customerManager: ModelsCrm.Customer | ModelsCrm.CustomerManaged | null) => ModelsApp.Employee;
export declare const getFullNameRepresentation: (data: {
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
}) => string;
export declare const getFullNameOWARepresentation: (data: {
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
}) => string;
export declare const getLongestFullName: (firstName: string, lastName: string, middleName: string, fullName: string) => string;
export declare const getCustomerActivityIncludeExecutorName: (customerManager: ModelsCrm.CustomerManaged, placeholder: string) => string;
export declare const getCustomerActivityExcludeExecutor: (customerManager: ModelsCrm.CustomerManaged) => ModelsApp.Employee | null;
export declare const setProductEksErrorMessage: (eksErrorList: ModelsCrm.EksErrorList) => Error | null;
export declare const getInputOccasion: (reducerState: ModelsOccasion.IOccasionState) => ModelsCrm.Occasion;
export declare const getAgreementStatusProductList: (agreementStatus: Enums.ProductListAgreementStatus) => string;
export declare const getTagCallGetRequestProductList: (productType: Enums.ProductType, isActiveProductList: boolean) => Enums.CacheContext;
export declare const getAgreementStatusNameProductList: (agreementStatus: Enums.ProductListAgreementStatus) => string;
export declare const getEnumFilterOrganizationStructure: (value: string) => Enums.FilterOrganizationStructure;
export declare const isActiveProductList: (agreementStatus: Enums.ProductListAgreementStatus) => boolean;
export declare const getCustomerActivityExcludeExecutorName: (customerManager: ModelsCrm.Customer | ModelsCrm.CustomerManaged, placeholder: string) => string;
export declare const getNavigationContentCreditProductCreatePopup: (key: Enums.NavigationAppCRMCreditProduct_CreateEventPopup) => "" | "AppCRM_CreateEditEvent" | "AppCRM_EventTypeChoice" | "AppCRM_EventPossibilityChoice" | "AppCRM_EventCurrencyChoice";
export declare const setForecastDealsToCreditProducts: (dealList: ModelsCrm.ForecastDealList, creditList: ModelsCrm.CreditProduct[]) => ModelsCrm.CreditProduct[];
export declare const isClientNotFoundInEksSystem: (error: ModelsCrm.Error | null) => boolean;
export declare const getProductListItemErrorText: (error: ModelsCrm.Error | null) => string;
export declare const productListItemFetching: string;
export declare const getNavigationPopoverContentEmployee: (key: Enums.NavigationPopoverContentEmployee) => "" | "AppCRM_EmployeePopoverScreen";
export declare const eventPossibilityStringValue: (possibility: number | null) => string;
export declare const eventFilterPeriodStringValue: (type: Enums.ForecastPeriodType) => string;
export declare const productCreditStatus: (type: string | null) => string;
export declare const getEarlyForecastEventInfo: (eventList: ModelsCrm.ForecastEventList) => string;
export declare const defaultNote: Models.Note;
export declare const DealMemberListUniqueRoles: string[];
export declare const DealMemberListUniqueRolesCode: (value: string, supParameters: string) => boolean;
export declare const getOccasionListRequestRefreshString: (type: Enums.OccasionListRequestRefresh) => string;
export declare const getNoteListRequestRefreshString: (type: Enums.NoteListRequestRefresh) => string;
export declare const getCustomerRequestRefreshString: (type: Enums.CustomerRequestRefresh) => string;
export declare const getRefreshDealAfterMemberListUpdateTagString: (type: Enums.RefreshDealAfterMemberListUpdateTag) => string;
export declare const getRefreshAgentAfterMemberListUpdateTagString: (type: Enums.RefreshAgentAfterMemberListUpdateTag) => string;
export declare const getDealWithUser: (deal: ModelsCrm.Deal, currentUser: ModelsApp.Employee, roleClassifierList: ModelsApp.ClassifierList) => ModelsCrm.Deal;
export declare const getDealRequestRefreshString: (type: Enums.DealRequestRefresh) => string;
export declare const getAgentListTagRequestString: (agentListContext: Enums.AgentListContextMode) => string;
export declare const getAgentListContextRequestString: (agentListContext: Enums.AgentListContextMode, reducerState: ModelsAgentList.IAgentListState) => string;
export declare const getCustomerContextRequestString: (customerContext: Enums.CustomerContextMode, reducerState: ModelsCustomer.ICustomerState) => string;
export declare const getEmployeeRequestRefreshString: (type: Enums.EmployeeRequestRefresh) => string;
export declare const getAppCRMCustomerManagedListRequestRefreshString: (type: Enums.AppCRMCustomerManagedListRequestRefresh) => string;
export declare const getDealListRequestRefreshString: (type: Enums.DealListRequestRefresh) => string;
export declare const getForecastEventsRequestRefreshString: (type: Enums.ForecastEventsListRequestRefresh) => string;
export declare const getGSZRequestRefreshString: (type: Enums.GSZRequestRefresh) => string;
export declare const creditEventValidationEmail: (email: string) => string | null;
export declare const creditEventValidationCurrency: (currency: ModelsApp.Classifier) => string | null;
export declare const creditEventValidationSumm: (summ: string | null) => string | null;
export declare const creditEventValidationPossibility: (possibility: Enums.ForecastEventPossibility) => string | null;
export declare const creditEventValidationType: (eventType: ModelsApp.Classifier | null) => string | null;
export declare const employeeToPerson: (employee: ModelsApp.Employee) => ModelsScheduler.Person;
export declare const agentToPerson: (agent: ModelsCrm.Agent) => ModelsScheduler.Person;
export declare const doEmployeeToHistoryAction: (employee: ModelsApp.Employee, currentHistoryArray: ModelsApp.Employee[], historyAction: Enums.EmployeeHistoryActions, currentMode: Enums.EmployeeMode) => ModelsApp.Employee[];
export declare const isApprovalStatus: (action: string, approvedStatuses: string) => boolean | null;
export declare const doCustomerToHistoryAction: (historyAction: Enums.HistoryActions, currentCustomer: ModelsCrm.Customer, currentCustomerManaged: ModelsCrm.CustomerManaged, customerNavigationHistory: ModelsCrm.CustomerHistory[], currentCustomerMode: Enums.CustomerMode, currentCustomerTab: Enums.CustomerManagedTab, currentCustomerAgreementStatus: Enums.ProductListAgreementStatus, currentCustomerDealForecast: ModelsCrm.ForecastDeal, currentCustomerDeal: ModelsCrm.Deal) => ModelsCrm.CustomerHistory[];
/**
 * @description функция предназначена для управления историей навигации ГСЗ
 * @param {Enums.HistoryActions} historyAction
 * @param {Models.GszHistory[]} gszNavigationHistory
 * @param {string} gszId
 * @returns {Models.GszHistory[]}
 * @author Vladykin A. S.
 */
export declare const doGszToHistoryAction: (historyAction: Enums.HistoryActions, gszNavigationHistory: ModelsCrm.GszHistory[], gszId: string) => ModelsCrm.GszHistory[];
export declare const customerEditorAddressValidator: (address: {
    inputCountry: ModelsApp.Classifier;
    inputSubject: string;
    inputRegion: string;
    inputCity: string;
    inputSettlement: string;
    inputStreet: string;
    inputHouse: string;
    inputBuilding: string;
    inputBlock: string;
    inputFlat: string;
}) => {
    inputCountryValidationError: string | null;
    inputSubjectValidationError: string | null;
    inputRegionValidationError: string | null;
    inputCityValidationError: string | null;
    inputSettlementValidationError: string | null;
    inputStreetValidationError: string | null;
    inputHouseValidationError: string | null;
    inputBuildingValidationError: string | null;
    inputBlockValidationError: string | null;
    inputFlatValidationError: string | null;
};
export declare const getEquivalentConversionRate: (sum: number | null, equivalentSum: number | null) => number;
export declare const getEquivalentSum: (sum: number | null, conversionRate: number | null) => number;
export declare const insertOccasionIntoTheOccasionList: (occasionList: ModelsCrm.OccasionList, occasion: ModelsCrm.Occasion) => ModelsCrm.OccasionList;
export declare const getOccasionId: (id: string) => string;
export declare const getNoteId: (id: string) => string;
export declare const getdeleteOccasionList: (getdeleteOccasionList: ModelsCrm.OccasionList, occasion: ModelsCrm.Occasion) => ModelsCrm.OccasionList;
export declare const getDeleteNoteList: (deleteNoteList: ModelsCrm.NoteList, note: ModelsCrm.Note) => ModelsCrm.NoteList;
export declare const overrideClassifierValue: (value: string) => string;
export declare const getRelatedActivitiesCount: (activityList: ModelsScheduler.ActivityList) => number;
export declare const sortClassifierList: (a: ModelsApp.Classifier, b: ModelsApp.Classifier) => number;
export declare const getSortedCurrencyList: (classifierList: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
export declare const getRurClassifier: (classifierList: ModelsApp.ClassifierList) => ModelsApp.Classifier;
export declare const convertStringToNumber: (value: string | null) => number | null;
export declare const convertNumberToString: (value: string | number | null) => string | null;
export declare const filterMemberList: (firstName: string, lastName: string, middleName: string, positionName: string, role: string, isGeneral: boolean, lastInput: string) => boolean;
export declare const getMethodByProduct: (product: ModelsApp.Classifier, methodList: ModelsApp.ClassifierList, productList: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
export declare const getClassifierUniqueValuesByCode: (list: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
export declare const getDate: () => Date;
export declare const getBalanceString: (balance: number | null, currency: ModelsApp.Classifier | null) => string;
export declare const getForecastEventSaveErrorComment: (error: Error) => string;
export declare const getRowTemplate: (e: ModelsApp.Classifier, mode?: Enums.ClassifierMode | undefined) => string;
export declare const productListAlertViewMessage: string;
export declare const filterList: (list: ModelsApp.ClassifierList, value: string, render: ModelsSelectClassifierWithSearch.CLASSIFIER_LINE_RENDER, mode: Enums.ClassifierMode) => ModelsApp.ClassifierList;
export declare const prepareActivityUuid: (activityList: ModelsScheduler.ActivityList) => ModelsDealEditor.ActivityOperUuid | null;
export declare const getClientCardEditableStatus: (status: ModelsApp.Classifier) => boolean;
export declare const secureParseFloat: (value: string) => number | null;
export declare const getCustomerScreenState: (action: Action<actionsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN>) => {
    currentCustomerId: string;
    isDashboardExpandedMode: boolean;
    isVisiblePopoverHolder: boolean;
    isVisiblePopoverCurator: boolean;
    isVisiblePopoverOccasionList: boolean;
    isVisiblePopoverNoteList: boolean;
    isVisiblePopoverProblemList: boolean;
    isVisibleModalActivityEditor: boolean;
    isVisibleModalPlanner: boolean;
    isVisibleModalEmailSend: boolean;
    isVisibleModalCustomerEditor: boolean;
    isVisibleModalAssociateSearch: boolean;
    isSearchModeAffiliateList: boolean;
    currentMode: Enums.CustomerMode;
};
export declare const getDealMemberFlag: (user: ModelsApp.Employee, memberList: ModelsCrm.MemberList) => boolean;
export declare const getOneLineFullNameRepresentation: (value: ModelsApp.Employee) => string;
export declare const prepareDate: (value: Date | null) => Date | null;
export declare const checkForCreditMethod: (methodClassifier: ModelsApp.ClassifierList) => boolean;
export declare const deleteCreditMethod: (methodClassifier: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
export declare const getMethodClassifierWarningMessage: (troubleGroup: string) => string | null;
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
export declare const getPersonInTeam: (member: ModelsApp.Employee, memberList: ModelsCrm.MemberList) => ModelsApp.Employee | undefined;
export declare const checkForOwner: (user: ModelsApp.Employee, memberList: ModelsCrm.MemberList) => boolean;
export declare const matchSupParamArray: (value: string, paramArrayDecoded: string) => boolean;
export declare const isInitRoadMapNecessary: (state: ModelsDeal.IDealState) => boolean;
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
export declare const getValidationError: (troubleGroup: string, parentCase: Enums.dealEditorValidationError) => ModelsCrm.Error;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение типов сделки
 *
 * @returns { ModelsApp.ClassifierList }
 */
export declare const getDealTypeClassifierList: () => ModelsApp.ClassifierList;
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
export declare const getAccessibleStageList: (value: ModelsApp.Classifier | null, list: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
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
export declare const getDisableStatus: (stageClassifier: ModelsApp.Classifier, currentStage: ModelsApp.Classifier, dealPossibleStageList: ModelsCrm.DealPossibleStageList) => boolean;
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
export declare const getSelectStatus: (stageClassifier: ModelsApp.Classifier, inputStage: ModelsApp.Classifier) => boolean;
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
export declare const getStageListEnableFlag: (currentDeal: ModelsCrm.Deal, currentUser: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary) => boolean;
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
export declare const getHistoryStage: (stageClassifier: ModelsApp.Classifier, dealHistoryStageList: ModelsCrm.DealHistoryStageList) => ModelsCrm.HistoryStage;
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
export declare const getStageStatus: (selectedStage: ModelsApp.Classifier, dealStage: ModelsApp.Classifier, historyStageList: ModelsCrm.DealHistoryStageList) => Enums.StageStatus;
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
export declare const getStageText: (stageStatus: Enums.StageStatus, history: ModelsCrm.HistoryStage, dealHistoryStageList: ModelsCrm.DealHistoryStageList) => string;
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
export declare const checkRole: (memberList: ModelsCrm.MemberList, role: string) => boolean;
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
export declare const getApplicationKkClassifierList: (value: ModelsApp.Classifier, list: ModelsApp.ClassifierList) => ModelsApp.ClassifierList;
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
export declare const isContains: (text: string, template: string) => boolean;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверяет наличие полей decisionSixEyes и decisionSixEyes.number в элементах массива
 *
 * @param { Array<Models.DealDecision> } array .
 *
 * @returns { boolean }
 */
export declare const checkDecisionSixEyes: (array: ModelsCrm.DealDecision[]) => boolean;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Проверяет наличие полей decisionKK и decisionKK.number в элементах массива
 *
 * @param { Array<Models.DealDecision> } array .
 *
 * @returns { boolean }
 */
export declare const checkCreditCommittee: (array: ModelsCrm.DealDecision[]) => boolean;
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
export declare const getPossibleSalesStageByCode: (array: ModelsCrm.NextStage[], code: string) => ModelsCrm.NextStage | null;
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
export declare const getTrackingElement: {
    byCrmStage: (trackingList: ModelsCrm.DealStageTracking, searchKey: string) => ModelsCrm.Tracking | null;
    byClientStage: (trackingList: ModelsCrm.DealStageTracking, searchKey: string) => ModelsCrm.Tracking | null;
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
export declare const performDealStageChecks: (state: ModelsDealStages.IDealStagesState, inputStage: ModelsApp.Classifier, currentUserId: string) => ModelsDealStages.IDealStageChecksValues;
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
export declare const getFilteredExistingPositionsList: (initialList: ModelsCrm.MemberList, template: ModelsCrm.MemberList) => ModelsCrm.MemberList;
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
export declare const lineWithMoreCountAndMaxLength: (array: string[], maxLength: number) => string;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Переводит интерфейс переданного json в тип any
 * @use формирование json (Request) при редактировании сделки
 * @param { <T>  } data .
 *
 * @returns { any }
 */
export declare const interfaceToAny: <T>(data: T) => any;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Обёртка над Lodash функцией omitBy()
 * @use Удаляет из объекта {data} поля равные null и undefined
 * @param { <T>  } data .
 * @returns { any }
 */
export declare const _omitBy: <T>(data: T) => any;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Получение позиции агента
 * @use Получение позиции агента для строки Представители в сделках
 * @param { Models.AgentCustomerPositionList  } customerList .
 * @param { Models.CustomerManaged  } dealCustomer .
 * @returns { string }
 */
export declare const positionIn: (customerList: ModelsCrm.AgentCustomerPositionList, dealCustomer: ModelsCrm.CustomerManaged) => string;
/**
 * @author Romanov Andrey <romanov.a.mikhayl@sberbank.ru>
 *
 * @description Формирование строки данных в поле Представители
 * @use Вывод ФИО представителей в поле Представители в сделках
 * @param { Models.AgentList  } memberList .
 * @param { Models.CustomerManaged } customer .
 * @returns { string }
 */
export declare const agentListLine: (memberList: ModelsCrm.AgentList, customer: ModelsCrm.CustomerManaged) => string;
/**
 * @description Validates if current User is holder for customer or not.
 *
 * @param { Models.Customer } inputCustomer .
 * @param { ModelsApp.Employee } currentUser .
 *
 * @returns { boolean }
 */
export declare const isCustomerHolder: (inputCustomer: ModelsCrm.Customer, currentUser: ModelsApp.Employee) => boolean;
export declare const convertToUTCDateFormat: (date: Date | null) => string;
export declare const getPaymentScheduleRequestRefreshString: (type: Enums.PaymentScheduleListRequestRefresh) => string;
/**
 *  Get Payment Schedule OperCode
 * @description Конвертирует строчное представление кода операции в значение соответствующего Enum
 * @param { string } value
 *
 * @returns { number | null }
 */
export declare const getPaymentScheduleOperCode: (value: string) => number | null;
/**
 *  Get Payment Schedule OperCode
 * @description Конвертирует строчное представление статуса операции в соответствующее сообщение видимое на форме
 * @param { string | null} value
 *
 * @returns { string }
 */
export declare const getPaymentScheduleStatusName: (value: string | null) => string;
/**
 *  Get Payment Schedule Status
 * @description Конвертирует строчное представление статуса операции, пришедшее от сервера в соответствующий Enum
 * @param { string } value
 *
 * @returns { number | null}
 */
export declare const getPaymentScheduleStatus: (value: string) => number | null;
/**
 *  Get Payment Schedule Filter Type Text
 * @param { boolean } inputPaymentScheduleFilterOperCodeOther
 * @param { boolean } inputPaymentScheduleFilterOperCodeProc
 * @param { boolean } inputPaymentScheduleFilterOperCodeCred
 *
 * @returns { string }
 */
export declare const getPaymentScheduleFilterTypeText: (inputPaymentScheduleFilterOperCodeOther: boolean, inputPaymentScheduleFilterOperCodeProc: boolean, inputPaymentScheduleFilterOperCodeCred: boolean) => string;
/**
 *  Get Payment Schedule Status
 * @param { boolean } inputPaymentScheduleFilterStatusExecPay
 * @param { boolean } inputPaymentScheduleFilterStatusForPay
 * @param { boolean } inputPaymentScheduleFilterStatusNotPay
 *
 * @returns { string }
 */
export declare const getPaymentScheduleFilterStatusText: (inputPaymentScheduleFilterStatusExecPay: boolean, inputPaymentScheduleFilterStatusForPay: boolean, inputPaymentScheduleFilterStatusNotPay: boolean) => string;
/**
 *
 * @param { Models.PaymentScheduleList } paymentScheduleList
 *
 * @returns { string }
 */
export declare const getEarlyPaymentScheduleInfo: (paymentScheduleList: ModelsCrm.PaymentScheduleList) => string;
/**
 *
 * @param { Object } valueList
 * @param { string } currentCheckValue
 *
 * @return { boolean }
 */
export declare const isDisabledCheckboxPaymentScheduleFilter: (valueList: {
    [key: string]: boolean;
}, currentCheckValue: string) => boolean;
export declare const navigationErrorTitle: (navigateStartData: ModelsApp.NavigateToEntity) => string;
/**
 * Validates error for no data error.
 *
 * @param { Error } error .
 *
 * @returns { boolean }
 * @author Vladimir Prikazchikov
 */
export declare const checkForNoDataError: (error: Error) => boolean;
export declare const downloadAttachmentInit: (file: ModelsCrm.DealAttachment, data: ModelsCrm.IDealAttachmentList) => ModelsCrm.IDealAttachmentList;
export declare const downloadAttachmentSuccess: (file: ModelsCrm.DealAttachment, data: ModelsCrm.IDealAttachmentList) => ModelsCrm.IDealAttachmentList;
export declare const downloadAttachmentFailure: (file: ModelsCrm.DealAttachment, data: ModelsCrm.IDealAttachmentList) => ModelsCrm.IDealAttachmentList;
export declare const isAttachmentLoading: (id: string, data: ModelsCrm.IDealAttachmentList) => boolean;
export declare const searchDealAttachmentsList: (list: ModelsCrm.DealAttachment[], inputSearch: string) => ModelsCrm.DealAttachment[];
/**
 * Function that downloads and saves the file
 *
 * @param { string } ECMFileId - key name to store in cache
 * @returns { React.Promise<any> } - UFS fileId of downloaded file or error
 */
export declare const downloadAndSaveInCahce: (ECMFileId: string, state: ModelState.IRootState) => React.Promise<any>;
export declare const getDealAttachementsErrorType: (error: Error) => string;
export declare const getAttachmentFileType: (format: Enums.DealAttachmentsFileFormat) => "" | "DOC" | "PDF" | "XLS";
export declare const convertFileFormatToEnum: (format: string) => Enums.DealAttachmentsFileFormat.None | Enums.DealAttachmentsFileFormat.Doc;
export declare const getOtherFormat: (knownFormat: Enums.DealAttachmentsFileFormat, format: string) => string | null;
export declare const extractArray: (data: any) => any[];
export declare const extractObject: (data: any) => any;
export declare const extractArrayElement: (data: any, index: number) => any[];
export declare const parentDealPickerCustomerSearchListFilter: (parentDealCustomerList: ModelsCrm.CustomerManagedList, parentDealCustomerInputSearch: string) => ModelsCrm.CustomerManagedList;
export declare const isMicrosoftFormat: (format: Enums.DealAttachmentsFileFormat) => boolean;
export declare const findAttachmentById: (id: string, dealAttachments: ModelsCrm.IDealAttachmentList) => ModelsCrm.DealAttachment;
/**
 * Cообщение для сценария обновления графика платежей
 */
export declare const alertViewMessagePaymentScheduleRefresh: string;
/**
 * Cообщение для альтернативного сценария "Запрошенный период слишком большой"
 * @param dateStart { Date } - начальная дата запрошенного периода
 * @param dateEnd { Date } - конечная дата запрошенного периода
 * @return {string}
 */
export declare const alertViewMessagePaymentScheduleRequestPeriodTooLong: (dateStart: Date, dateEnd: Date) => string;
/**
 * Заголовок для альтернативного сценария "Не удалось отобразить данные"
 */
export declare const alertViewTitlePaymentScheduleCouldNotDisplayData = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435";
/**
 * Cообщение для альтернативного сценария "Все платежи уже получены"
 */
export declare const alertViewMessagePaymentScheduleAllPaymentsAlreadyBeenReceived = "\u0412\u0441\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0443\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B";
/**
 * Cообщение для альтернативного сценария "Ошибка при обновлении данных графика"
 * @param date { Date } - дата последнего обновления
 * @return {string}
 */
export declare const alertViewMessagePaymentScheduleErrorUpdateData: (date: Date) => string;
/**
 * Cообщение для альтернативного сценария 'График платежей. Ошибка при обновлении данных графика. Таймаут.'
 */
export declare const paymentScheduleListLoadErrorTimeout: string;
/**
 * Cообщение для альтернативного сценария 'График платежей. Ошибка при обновлении данных графика. Ошибка.'
 */
export declare const paymentScheduleListLoadErrorOther: string;
/**
 * Get handler event "OK" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @applicable:
    - Для определения нужна ли кнопка с функционалом ("OK") в зависимости от типа альтернативного сценария
 * @return boolean
 */
export declare const isHandlerFunctionOk: (alertViewType: Enums.paymentScheduleAlternativeScenariosType | null) => boolean;
/**
 * Get handler event "Cancel" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @return boolean
 */
export declare const isHandlerFunctionCancel: (alertViewType: Enums.paymentScheduleAlternativeScenariosType | null) => boolean;
/**
 * Get handler event "Repeat" depending on the type
 * @param { Enums.paymentScheduleAlternativeScenariosType | null } alertViewType
 * @return boolean
 */
export declare const isHandlerFunctionRepeat: (alertViewType: Enums.paymentScheduleAlternativeScenariosType | null) => boolean;
/**
 * Get forecast event error type of action.
 *
 * @param {Enums.ForecastEventErrorType} errorType
 */
export declare const getForecastEventErrorType: (errorType: Enums.ForecastEventErrorType) => string;
/**
 * Get forecast event error message.
 *
 * @param {Models.Error} error
 * @param {Enums.ForecastEventErrorType} errorType
 */
export declare const getForecastEventErrorMessage: (error: Error, errorType: Enums.ForecastEventErrorType) => string;
export declare const campaignPickerSearchListFilter: (salesCampaignList: ModelsCrm.SalesCampaignList, campaignInputSearch: string) => ModelsCrm.SalesCampaignList;
export declare const urlParentDealPeaker: any;
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
export declare const _get: (object: object, path: string | [string], defaultValue?: any) => any;
/**
 * @desctiption - временная функция для обрезки длинной строки. FIXME удалить функцию после выполнения задачи http://jira.ca.sbrf.ru/browse/UFSINFRA-19539
 * @param {string | null | undefined} text
 * @returns {string}
 * @author - Vladykin A. S.
 */
export declare const sliceLongText: (text: string | null | undefined) => string;
/**
 * @description функция для отображения типа клиента в списке клиентов
 * @param {string} organizationType
 * @param {string} categoryCode
 * @returns {string}
 * @author Vladykin A. S.
 */
export declare const getOrganizationTypeValue: (organizationType: string, categoryCode: string) => string;
