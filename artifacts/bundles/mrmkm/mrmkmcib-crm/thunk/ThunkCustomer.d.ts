import * as ModelState from "../models/Models";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
export declare const performDashboardExpandedModeToggle: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputSearchAffiliateList: (search: string) => (dispatch: Function) => void;
export declare const performAffiliateListSearch: () => (dispatch: Function) => void;
export declare const performSearchAffiliateListEnable: () => (dispatch: Function) => void;
export declare const performSearchAffiliateListDisable: () => (dispatch: Function) => void;
export declare const performChangeTab: (index: number, value: Enums.CustomerManagedTab) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverHolderShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverHolderHide: () => (dispatch: Function) => void;
export declare const performPopoverCuratorShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverCuratorHide: () => (dispatch: Function) => void;
export declare const navigateBackHistoryMobileApp: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "Customer" screen.
 * Thunk used to navigate back from "Customer" page rendered in AppCRM container.
 */
export declare const customerNavigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "Customer" screen.
 * Thunk used to navigate back from page rendered in "Customer" container.
 */
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToAgentListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToMemberListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToEmployeeViewScreen: () => (dispatch: Function) => void;
export declare const performReturnToCustomerScreen: (splitPanelName: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performAddCustomerToHistoryMobileApp: (index: number, splitPanelName: string, customer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToOccasionListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverOccasionListShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverOccasionListHide: () => (dispatch: Function) => void;
export declare const performPopoverNoteListShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverNoteListHide: () => (dispatch: Function) => void;
export declare const performPopoverProblemListShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverProblemListHide: () => (dispatch: Function) => void;
export declare const performNavigateToOwnerScreen: (owner: Models.Owner, customerMode: Enums.CustomerMode) => (dispatch: Function) => void;
export declare const performPopoverOwnerShow: (owner: Models.Owner) => (dispatch: Function) => void;
export declare const performPopoverOwnerHide: () => (dispatch: Function) => void;
export declare const navigateToOwnerAgentScreen: (agent: Models.Agent, agentContextMode?: Enums.AgentContextMode) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetCustomerActivityList: (customerActivityList: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateAppDirectoryToCustomerScreen: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCustomerScreen: (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCustomerScreenFromPush: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const getCustomerDataById: (id: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFlush: () => (dispatch: Function) => void;
export declare const performAgentListCacheReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerCacheReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const customer_callGetCustomer: (customer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const customer_callGetCustomerById: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const customer_openCustomer: (customer: Models.Customer) => (dispatch: Function) => void;
export declare const customer_openCustomerManaged: (customerManaged: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverLimitShow: () => (dispatch: Function) => void;
export declare const performPopoverLimitHide: () => (dispatch: Function) => void;
export declare const navigateToPopoverLimitItemScreen: (item: Enums.OldLimitItem) => (dispatch: Function) => void;
export declare const navigatePopoverLimitBack: () => (dispatch: Function) => void;
export declare const navigateToLimitScreen: () => (dispatch: Function) => void;
export declare const callGetLimitNew: (refresh?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetLimitOld: (refresh?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performLimitShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputProductAgreementStatus: (agreementStatus: Enums.ProductListAgreementStatus) => (dispatch: Function) => void;
export declare const performProductTypeListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performProductTypeListForceRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const clearProductListCache: (productType: Enums.ProductType, isActiveProductList: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshBarHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const getActionSuccessCallGetRequestProductList: (productType: Enums.ProductType, isActiveProductList: boolean) => Function;
export declare const performCallGetRequestProductList: (type: Enums.ProductType, force: boolean, update: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performProductListModalAlertShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performProductListModalAlertHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallGetForceRequestProductList: (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallGetCachedRequestProductList: (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallGetUncachedRequestProductList: (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const updateProductListOperationUuid: (productType: Enums.ProductType, isActiveProductList: boolean) => Function;
export declare const performUpdateProductList: (isActiveProductList: boolean, productType: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallEksRequestProductList: (productType: Enums.ProductType, productListStatus: Enums.ProductListAgreementStatus) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCustomerActivityIncludeScreen: () => (dispatch: Function) => void;
export declare const navigateToCustomerActivityExcludeScreen: () => (dispatch: Function) => void;
export declare const navigateToCustomerActivityAccessScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const closeCustomerActivityPanel: () => (dispatch: Function) => void;
export declare const performContainerReset: () => (dispatch: Function) => void;
export declare const callGetForecastDealList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCurrentCustomerAgentScreen: (agentId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerActivityListRefresh: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const fillOccasionListContent: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshCustomerActivitylist: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performGetProductFromPush: (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const checkProductStatus: (getProductFromPushData: Models.GetProductFromPushData, oid: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const findProductFromList: (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const checkIsLastCall: (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPrognosticProductListModalAlertHide: () => (dispatch: Function) => void;
export declare const performPrognosticProductListModalAlertShow: () => (dispatch: Function) => void;
export declare const callGetForecastPrognosticDealList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const setActivityAccessError: (isActivityAccessError: boolean) => (dispatch: Function) => void;
