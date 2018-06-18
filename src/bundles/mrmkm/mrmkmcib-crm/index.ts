import ContainerAppCRM from './containers/ContainerAppCRM'

import ContainerCustomer from './containers/ContainerCustomer'

import ContainerCustomerEditor from './containers/ContainerCustomerEditor'

import ContainerDealEditor from './containers/ContainerDealEditor'

import ContainerDealList from './containers/ContainerDealList'

import ContainerProductList from './containers/ContainerProductList'

import ContainerProduct from './containers/ContainerProduct'

import ContainerProductPaymentAccount from './containers/ContainerProductPaymentAccount'

import ContainerProductCredit from './containers/ContainerProductCredit'

import ContainerGSZ from './containers/ContainerGSZ'

import ContainerGszActivityInclude from './containers/ContainerGszActivityInclude'

import ContainerGszActivityExclude from './containers/ContainerGszActivityExclude'

import ContainerCustomerActivityInclude from './containers/ContainerCustomerActivityInclude'

import ContainerCustomerActivityExclude from './containers/ContainerCustomerActivityExclude'

import ContainerLimit from './containers/ContainerLimit'

import ContainerDeal from './containers/ContainerDeal'

import ContainerEmployee from './containers/ContainerEmployee'

import ContainerAgent from './containers/ContainerAgent'

import ContainerAgentList from './containers/ContainerAgentList'

import ContainerMemberList from './containers/ContainerMemberList'

import ContainerOccasionList from './containers/ContainerOccasionList'

import ContainerOccasion from './containers/ContainerOccasion'

import ContainerNoteList from './containers/ContainerNoteList'

import ContainerNote from './containers/ContainerNote'

import ContainerForecastEventEditor from './containers/ContainerForecastEventEditor'

import ReducerRoot from './reducers/ReducerRoot'
import {
    RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE,
    RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST,
    RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE,
} from './models/Converters'

import * as Converters from './models/Converters'
import {defaultValues} from './models/Models'

import {SelectClassifier,ISelectClassifierProps} from './components/shared/SelectClassifier/index'

import ContainerSelectClassifierWithSearch, {ISelectClassifierWithSearchStateProps,ISelectClassifierWithSearchDispatchProps} from './components/shared/containers/ContainerSelectClassifierWithSearch'

import { AgentCircle, IAgetCircleProps } from './components/shared/AgentCircle'
import { AgentInfoRow, IAgentInfoRowProps } from './components/shared/AgentInfoRow'
import { CellProps, OneLineCell} from './components/shared/OneLineCell'

import { sessionReset } from './modules/Cache'

import {
    performApplicationInit,
    performCustomerOpen,
    performCustomerPassBy,
    performDealOpen,
    performGszOpen,
    swapContext as appCrmSwapContext,
    performCustomerInnerOpen,
    performCustomerInnerPassBy,
    performContainerReset as performAppCrmContainerReset,
    performCustomerOpenFromPush,
    performProductOpen,
    navigationLoaderAppCRMShow,
    navigationLoaderAppCRMHide,
    navigateBack as navigateToAppCrmScreen,
} from './thunk/ThunkAppCRM'
import {navigateToEmployeeScreen, navigateBack, performContainerReset as employeePerformContainerReset} from './thunk/ThunkEmployee'

import {
    performContainerReset as performAgentListContainerReset,
    performOpenAgentListScreen,
    parseInputString,
} from './thunk/ThunkAgentList'

import {
    performPopoverOccasionListShow,
    performChangeTab,
    navigateToAgentListScreen,
    navigateToCurrentCustomerAgentScreen,
    navigateToOccasionListScreen,
    performFlush,
    performRefreshCustomerActivitylist,
    getCustomerDataById,
    performContainerReset as performCustomerContainerReset,
    fillOccasionListContent,
    performCustomerActivityListRefresh,
    navigateAppDirectoryToCustomerScreen,
    navigateToCustomerScreen,
    setActivityAccessError
} from './thunk/ThunkCustomer'

import {
    navigateToOccasionList,
    navigateToOccasionAgentListFromPush,
    performOpenAgentScreen,
    performCloseAgentScreen,
    callGetAgentById,
} from './thunk/ThunkAgent';

import {navigateToProductListScreen} from './thunk/ThunkProductList'

import {getDealActivityList} from './thunk/ThunkDealEditor'

import {callGetCustomerActivityList} from './thunk/ThunkCustomer'

import { navigateToGszScreen } from './thunk/ThunkGSZ';

import {refresh_performRefreshActivity, navigateToDealScreen} from './thunk/ThunkDeal'

import {Enums} from './Enums'
import {performContainerReset as performMemberListContainerReset, performMemberListRefresh} from './thunk/ThunkMemberList'
import {
    getNavigationString,
    getNavigationContentString,
    getNavigationAppCrmString,
    isCustomerHolder,
    urlAgent,
    getCRMErrorMessageByCode,
    getDataPowerErrorMessageByCode
} from './common/Util'

import {
    openOccasionListPanel,
} from './thunk/ThunkOccasionList'


const EnumsCrm = {
    FilterOrganizationStructure: Enums.FilterOrganizationStructure,
    FilterMemberRole: Enums.FilterMemberRole,
    CustomerSearchType: Enums.CustomerSearchType,
    OldLimitItem: Enums.OldLimitItem,
    CustomerManagedTab: Enums.CustomerManagedTab,
    CustomerEditorStep: Enums.CustomerEditorStep,
    CustomerMode: Enums.CustomerMode,
    ClassifierRenderMode: Enums.ClassifierRenderMode,
    OccasionMode: Enums.OccasionMode,
    OccasionCardListMode: Enums.OccasionListMode,
    ShowCustomer: Enums.ShowCustomer,
    DealEditorStep: Enums.DealEditorStep,
    DealListTab: Enums.DealListTab,
    DealType: Enums.DealType,
    DealMode: Enums.DealMode,
    ProductType: Enums.ProductType,
    ProductStatus: Enums.ProductStatus,
    Currency: Enums.Currency,
    ProductPaymentAccountTab: Enums.ProductPaymentAccountTab,
    OperationType: Enums.OperationType,
    PeriodType: Enums.PeriodType,
    ProductCreditTab: Enums.ProductCreditTab,
    ForecastEventPossibility: Enums.ForecastEventPossibility,
    ForecastPeriodType: Enums.ForecastPeriodType,
    GszMemberListSortingType: Enums.GszMemberListSortingType,
    LimitTab: Enums.LimitTab,
    LimitTotalTab: Enums.LimitTotalTab,
    CacheContext: Enums.CacheContext,
    CachePolicy: Enums.CachePolicy,
    ErrorType: Enums.ErrorType,
    Navigation: Enums.Navigation,
    NavigationViewCustomerEditorMain: Enums.NavigationViewCustomerEditorMain,
    NavigationViewCustomerEditorStep: Enums.NavigationViewCustomerEditorStep,
    NavigationViewCustomerEditor: Enums.NavigationViewCustomerEditor,
    NavigationCustomerEditorIncludeExclude: Enums.NavigationCustomerEditorIncludeExclude,
    NavigationCustomerEditInIncludeExcludeOrganization: Enums.NavigationCustomerEditInIncludeExcludeOrganization,
    NavigationIntoExcludeIncludeView: Enums.NavigationIntoExcludeIncludeView,
    NavigationGSZInIncludeExcludeOrganization: Enums.NavigationGSZInIncludeExcludeOrganization,
    NavigationIntoGSZExcludeIncludeView: Enums.NavigationIntoGSZExcludeIncludeView,
    NavigationContentAppCrm: Enums.NavigationContentAppCrm,
    NavigationAppCRMProductList: Enums.NavigationAppCRMProductList,
    NavigationAppCRMCreditProduct: Enums.NavigationAppCRMCreditProduct,
    StatusProductListFilter: Enums.ProductListAgreementStatus,
    NavigationAppCRM: Enums.NavigationAppCRM,
    NavigationContentAgentList: Enums.NavigationContentAgentList,
    NavigationContentAgentCard: Enums.NavigationContentAgentCard,
    NavigationContentNoteList: Enums.NavigationContentNoteList,
    NavigationContentOccasionList: Enums.NavigationContentOccasionList,
    NavigationContentOccasionScreen: Enums.NavigationContentOccasionCard,
    NavigationContentAppCrm_Customer_Owners: Enums.NavigationContentAppCrm_Customer_Owners,
    NavigationContentAppCrmGszBorrowers: Enums.NavigationContentAppCrmGszBorrowers,
    NavigationContentAppCrmDealScreen: Enums.NavigationContentAppCrmDealScreen,
    NavigationContentAppCrmDealEditor: Enums.NavigationContentAppCrmDealEditor,
    NavigationContentAppCrmDealEditorForm: Enums.NavigationContentAppCrmDealEditorForm,
    NavigationContentAppOldLimits: Enums.NavigationContentAppOldLimits,
    ProductPollingStatus: Enums.ProductPollingStatus,
    DealStatus: Enums.DealStatus,
    MemberList: Enums.MemberList,
    OwnerType: Enums.OwnerType,
    NavigationContentEmployee: Enums.NavigationContentEmployee,
    NavigationContentProductPaymentAccountCard: Enums.NavigationContentProductPaymentAccountCard,
    ClientProductServiceList: Enums.ClientProductServiceList,
    ClientProductPaymentAccountRestrictionType: Enums.ClientProductPaymentAccountRestrictionType,
    NavigationAppCRMOperationListPeriod: Enums.NavigationAppCRMOperationListPeriod,
    NavigationContentOperationListPeriod: Enums.NavigationContentOperationListPeriod,
    ProductAccountTab: Enums.ProductAccountTab,
    TroubleGroupCode: Enums.TroubleGroupCode,
    AgentListContextMode: Enums.AgentListContextMode,
    MemberListMode: Enums.MemberListMode,
    EmployeeMode: Enums.EmployeeMode,
    AgentListAccessLevel: Enums.AgentListAccessLevel,
    EmployeeHistoryActions: Enums.EmployeeHistoryActions,
    ProductContextMode: Enums.ProductContextMode,
    NavigationContentCustomer: Enums.NavigationContentCustomer,
    NavigationContentDealEditor: Enums.NavigationContentDealEditor,
    NavigationContentParentDealPicker: Enums.NavigationContentParentDealPicker,
    ModuleType: Enums.ModuleType,
    OccasionAccessLevel: Enums.OccasionAccessLevel,
    AgentPanelPage: Enums.AgentPanelPage,
    OccasionListAccessLevel: Enums.OccasionListAccessLevel,
    CustomerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode,
    MemberListEmployeeSource: Enums.MemberListEmployeeSource,
    DealCreationMode: Enums.DealCreationMode,
    HistoryActions: Enums.HistoryActions,
    OccasionListNavigationMode: Enums.OccasionListNavigationMode,
    OccasionListContextMode: Enums.OccasionListContextMode,
    OccasionContextMode: Enums.OccasionContextMode,
    OccasionListMode: Enums.OccasionListMode,
    ProductEncumbranceType: Enums.ProductEncumbranceType,
    ProductTableCellType: Enums.ProductTableCellType,
    ForecastEventsListRequestRefresh: Enums.ForecastEventsListRequestRefresh,
    GenderList: Enums.GenderList,
    AgentListMode: Enums.AgentListMode,
    AgentMode: Enums.AgentMode,
    NoteListContextMode: Enums.NoteListContextMode,
    NoteListMode: Enums.NoteListMode,
    NoteListAccessLevel: Enums.NoteListAccessLevel,
    AgentContextMode: Enums.AgentContextMode,
    CustomerContextMode: Enums.CustomerContextMode,
    AgentAccessLevel: Enums.AgentAccessLevel,
    NavigationCustomerAccessory: Enums.NavigationCustomerAccessory,
    NavigationContentAppCrmDealRoadMapPopover: Enums.NavigationContentAppCrmDealRoadMapPopover,
    NavigationPopoverContentDealListFilters: Enums.NavigationPopoverContentDealListFilters,
    NavigationAppCRMCreditProduct_CreateEventPopup: Enums.NavigationAppCRMCreditProduct_CreateEventPopup,
    NavigationAppCRMCreditForecastEvent_Filter: Enums.NavigationAppCRMCreditForecastEvent_Filter,
    ProductListAgreementStatus: Enums.ProductListAgreementStatus,
    NavigationAppCRMAgentList: Enums.NavigationAppCRMAgentList,
    NavigationAppCRMOccasion: Enums.NavigationAppCRMOccasion,
    NavigationAppCRMAgent: Enums.NavigationAppCRMAgent,
    OccasionValidationAttribute: Enums.OccasionValidationAttribute,
    AgentValidationAttribute: Enums.AgentValidationAttribute,
    NavigationContentNoteScreen: Enums.NavigationContentNoteScreen,
    NavigationContentOccasionCard: Enums.NavigationContentOccasionCard,
    NavigationContentGsz: Enums.NavigationContentGsz,
    NavigationProductAcquiring: Enums.NavigationProductAcquiring,
    NavigationContentProductAcquiring: Enums.NavigationContentProductAcquiring,
    PaymentAccountProductServiceList: Enums.PaymentAccountProductServiceList,
    NavigationAppCRMOperationListFilter: Enums.NavigationAppCRMOperationListFilter,
    NavigationPopoverContentEmployee: Enums.NavigationPopoverContentEmployee,
    SwipeableRowEmptyId: Enums.SwipeableRowEmptyId,
    OccasionListRequestRefresh: Enums.OccasionListRequestRefresh,
    NoteListRequestRefresh: Enums.NoteListRequestRefresh,
    CustomerRequestRefresh: Enums.CustomerRequestRefresh,
    AgentListRequestRefresh: Enums.AgentListRequestRefresh,
    EmployeeRequestRefresh: Enums.EmployeeRequestRefresh,
    GSZRequestRefresh: Enums.GSZRequestRefresh,
    DealListRequestRefresh: Enums.DealListRequestRefresh,
    DealRequestRefresh: Enums.DealRequestRefresh,
    AppCRMCustomerManagedListRequestRefresh: Enums.AppCRMCustomerManagedListRequestRefresh,
    RefreshDealAfterMemberListUpdateTag: Enums.RefreshDealAfterMemberListUpdateTag,
    RefreshAgentAfterMemberListUpdateTag: Enums.RefreshAgentAfterMemberListUpdateTag,
    FileFormat: Enums.FileFormat,
    Representation: Enums.Representation,
    Operation: Enums.Operation,
    DealRefreshMode: Enums.DealRefreshMode,
    DealEditorMode: Enums.DealEditorMode,
    ActivityAccessLevel: Enums.ActivityAccessLevel,
    ActivityUrgency: Enums.ActivityUrgency,
    ValidateForm: Enums.ValidateForm,
    ClassifierMode: Enums.ClassifierMode,
    NavigationNoteList: Enums.NavigationNoteList,
    NavigationNoteScreen: Enums.NavigationNoteScreen,
    ProductCreditPaymentScheduleOperationType: Enums.ProductCreditPaymentScheduleOperationType,
    ProductCreditPaymentScheduleStatus: Enums.ProductCreditPaymentScheduleStatus,
    ProductCreditPaymentScheduleOperCode: Enums.ProductCreditPaymentScheduleOperCode,
    PaymentScheduleListRequestRefresh: Enums.PaymentScheduleListRequestRefresh,
    TableRowUnderlineType: Enums.TableRowUnderlineType,
    NavigationContentDealAttachmentsScreen: Enums.NavigationContentDealAttachmentsScreen,
    DealAttachmentsFileFormat: Enums.DealAttachmentsFileFormat,
}


export {

    ContainerAppCRM,
    ContainerCustomer,
    ContainerCustomerEditor,
    ContainerDealEditor,
    ContainerDealList,
    ContainerProductList,
    ContainerProduct,
    ContainerProductPaymentAccount,
    ContainerProductCredit,
    ContainerGSZ,
    ContainerGszActivityInclude,
    ContainerGszActivityExclude,
    ContainerCustomerActivityInclude,
    ContainerCustomerActivityExclude,
    ContainerLimit,
    ContainerDeal,
    ContainerEmployee,
    ContainerAgent,
    ContainerAgentList,
    ContainerMemberList,
    ContainerOccasionList,
    ContainerOccasion,
    ContainerNoteList,
    ContainerNote,
    ContainerForecastEventEditor,
    sessionReset,

    ReducerRoot,

    performApplicationInit,
    performCustomerOpen,
    performCustomerPassBy,
    performGszOpen,
    performDealOpen,
    performPopoverOccasionListShow,
    performChangeTab,
    EnumsCrm,
    RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST,
    RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE,
    RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE,
    Converters,
    navigateToEmployeeScreen,
    navigateBack,
    performAgentListContainerReset,
    performMemberListRefresh,
    performMemberListContainerReset,
    performOpenAgentListScreen,
    navigateToAgentListScreen,
    navigateToOccasionList,
    appCrmSwapContext,
    ISelectClassifierProps,
    ContainerSelectClassifierWithSearch,
    ISelectClassifierWithSearchStateProps,
    ISelectClassifierWithSearchDispatchProps,
    SelectClassifier,
    CellProps, OneLineCell,
    AgentCircle, IAgetCircleProps,
    AgentInfoRow, IAgentInfoRowProps,
    navigateToCurrentCustomerAgentScreen,
    navigateToProductListScreen,
    getNavigationContentString,
    getNavigationAppCrmString,
    getDealActivityList,
    performCustomerInnerOpen,
    performCustomerInnerPassBy,
    navigateToOccasionListScreen,
    performFlush,
    refresh_performRefreshActivity,
    getCustomerDataById,
    performRefreshCustomerActivitylist,
    performAppCrmContainerReset,
    performCustomerContainerReset,
    navigateToOccasionAgentListFromPush,
    openOccasionListPanel,
    fillOccasionListContent,
    performCustomerActivityListRefresh,
    callGetCustomerActivityList,
    performOpenAgentScreen,
    navigateAppDirectoryToCustomerScreen,
    performCustomerOpenFromPush,
    performProductOpen,
    defaultValues,
    navigationLoaderAppCRMShow,
    navigationLoaderAppCRMHide,
    getNavigationString,
    navigateToAppCrmScreen,
    employeePerformContainerReset,
    performCloseAgentScreen,
    navigateToCustomerScreen,
    navigateToDealScreen,
    isCustomerHolder,
    parseInputString,
    getCRMErrorMessageByCode,
    getDataPowerErrorMessageByCode,
    urlAgent,
    callGetAgentById,
    setActivityAccessError,
    navigateToGszScreen,
}
