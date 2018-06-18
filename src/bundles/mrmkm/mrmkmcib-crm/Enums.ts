export namespace Enums {

    export enum ModuleType {
        Sheduler,
        Crm,
        News,
        Knowledgebase,
        Employee,
        Notice,
        Dashboard,
    }
    export enum ActivityMode {
        None,
        Create,
        Edit,
        EditDenied,
        Watch,
    }

    export enum OpenMemberListPopover {
        Deault,
        MainClientManager,
        MainCreditOfficer,
        MemberMonitoring
    }

    export enum StageStatus {
        Default,
        Past,
        Current,
        Future
    }

    export enum DealType {
        Credit = 0,
        Salary = 1,
        Other = 2,
    }

    export enum DealMode {
        CommonBack,
        NavigationBack,
        DealActivityList,   /* for navigation - open deal from activity screen of deal activity list context */
        ForeignActivityList,/* for navigation - open deal from activity screen of other activity list context */
    }
    export enum OccasionAccessLevel {
        Read,
        Write,
    }
    export enum AgentPanelPage {
        None,
        OccasionList,
        Position,
        NoteList,
    }
    export enum NavigationActivityDetails {
        AppScheduler_ActivityMainScreen,
        AppScheduler_ActivityCustomer,
        AppScheduler_ActivityType,
        AppScheduler_ActivityPriority,
        AppScheduler_ActivityStatus,
        AppScheduler_ActivityResult,
        AppScheduler_ActivityMemberList = 2,
        AppScheduler_ActivityAgentList,
        AppScheduler_ActivityComment,
        AppScheduler_ActivityEmployee,
        AppScheduler_ActivityAgent,
    }
    export enum ActivityContextMode {
        None,
        Scheduler,
        Customer,
        CustomerAccess,
        Notice,
        Agent,
        AgentAccess,
        Deal,
        DealEditor,
    }

    export enum ActivityEditableAttributeList {
        Status,
        Result,
        Comment,
        MemberList,
        AgentList,
        Subject,
        DueDate,
        Priority,
        Deal,
        ParentCustomer,
        Gsz,
        Customer,
        Type,
    }

    export enum OccasionListAccessLevel {
        Read,
        Write,
    }
    export enum FilterOrganizationStructure {


        None = 0,
        Holding = 1,
        Account = 2,
        Branch = 3,
        Conglomerate = 5,


    }
    export enum CustomerEditorActivityCreateMode {
        None,
        Exclude,
        Include,
    }

	export enum GSZActivityCreateMode {
        None,
        Exclude,
        Include,
    }

    export enum MemberListEmployeeSource {
        MemberList,
        CustomerManaged,
        Employee
    }

    export enum FilterMemberRole {


        Curator_CA = 1,
        KM = 2,
        GKM = 3,
        None = 4,


    }



    export enum EmployeeMode {
        CustomerManaged,
        Customer,
        Gsz,
        Directory,
        CustomerManaged_MemberList,
        Deal_MemberList,
        Activity,
        Activity_MemberList,
        Gsz_MemberList,
        MemberList,
        AgentMemberList,
        Deal,
        DealAgreement,
        AppProfile,
        DealEditor_MemberList,
        GszChief,
        GszCurator,
        Employee,
        DealStages_CheckMainRoles
    }

    export enum DealCreationMode {
        Default,
        CreateCuccess,
        GetCuccess,
        UpdateCuccess,
        CreateError,
        GetError,
        UpdateError
    }

    export enum EmployeeHistoryActions {
        Push,
        Pop,
        Reset
    }

    export enum HistoryActions {
        Push,
        Pop,
        Reset
    }

    export enum CustomerSearchType {


        // TODO Describe CustomerSearchType enum used in actions and thunks.
        LessThanThreeChars = -1,
        KPP = 1,
        INN = 2,
        Name = 3,
        Account = 4,


    }

    export enum CustomerMode {
        CommonBack,
        NavigationBack,
        SameType,
        AppDirectoryBack,
        AppScheduler,

    }

    export enum OccasionListNavigationMode {
        Default,
        NavigationBack,
    }
    export enum OccasionListContextMode {
        None,
        CustomerManaged,
        Agent,
        NewEditAgent,
        NewEditCustomerManaged,
        Notice,

    }
    export enum OccasionContextMode {
        None,
        OccasionList,
        EditOccasionList,
        NewEditAgent
    }
    export enum OccasionMode {
        None,
        Watch,
        Create,
        Edit,
    }
    export enum OccasionListMode {
        Watch,
        Edit,
    }

    export enum ShowCustomer {
        Hide,
        Show,
    }

    export enum OldLimitItem {


        // TODO Describe OldLimitItem enum used in actions and thunks.

        Main,
        Unused,
        Predicted,
        Approved,

    }

    export enum CustomerManagedTab {


        // TODO Describe CustomerManagedTab enum used in actions and thunks.

        Main,
        DealList,
        ProductTypeList,
        OwnerList,
        Dashboard


    }

    export enum CustomerEditorStep {


        // TODO Describe CustomerEditorStep enum used in actions and thunks.

        Address,
        View,
        Country,


    }

    export enum DealEditorStep {


        // TODO Describe DealEditorStep enum used in actions and thunks.

        Main,
        Extra,


    }

    export enum DealListTab {


        // TODO Describe DealListTab enum used in actions and thunks.

        DealOpenedList = 0,
        DealClosedList = 1,


    }

    export enum ProductType {

        // TODO Describe ProductType enum used in actions and thunks.
        PaymentAccountProduct,
        CreditProduct,
        DepositProduct,
        ContractConstructorProduct,
        PackageProduct,
        TariffPlanProduct,
        CustomsPaymentProduct,
        CurrencyControlProduct,
        EncashmentProduct,
        SelfEncashmentProduct,
        CorporateCardProduct,
        AcquiringProduct,
        BankGuaranteeProduct,
        ContractNsoProduct,
        ContractSdoProduct,
        DboProduct,
        CashManagementProduct,
        SalaryProduct,
        None,
        PrognosticProduct,
    }

    export enum ProductContextMode {
        None,
        Notice,
    }

    export enum ProductEncumbranceType {

        ProductCardIndexList,
        ProductRestrictionList,

    }

    export enum ProductStatus {


        // TODO Describe ProductStatus enum used in actions and thunks.

        None,


    }
    export enum ProductTableCellType {
        None,
        Sum,
        Date,
        Text,
        Empty,
        Subtitled,
        Callback,
    }
    export enum Currency {


        // TODO Describe Currency enum used in actions and thunks.

        None,


    }

    export enum ProductPaymentAccountTab {


        Main,
        History,
        Dashboard,


    }

    export enum OperationType {


        DebtAndCredit,
        Debt,
        Credit,


    }

    export enum PeriodType {


        Last5Days,
        Last10Days,
        Last15Days,
        Last30Days,
        Custom,


    }

    export enum ProductCreditTab {
        Forecast,
        Planned,
    }

    export  enum ForecastEventsListRequestRefresh {
        ForecastEventsListRequestRefreshEnabled
    }

    export enum ForecastEventPossibility {


        // TODO Describe ForecastEventPossibility enum used in actions and thunks.

        None,
        Possibility25,
        Possibility50,
        Possibility75,
        Possibility100,


    }

    export enum ForecastPeriodType {


        CreditFinish,
        Next30Days,
        Next60Days,
        Next90Days,
        Next180Days,
        Custom,


    }

    export enum ForecastEventEditorContextMode {
        None,
        ForecastEventList,
        ForecastEventDetail,
        PrognosticEventList,
        PrognosticEventDetail,
    }

    export enum ForecastEventErrorType {
        None,
        CreateError,
        UpdateError,
        DeleteError,
    }

    export enum GszMemberListSortingType {


        // TODO Describe GszMemberListSortingType enum used in actions and thunks.

        ByName,
        ByGroup,
        ByStatus


    }

    export enum LimitTab {


        Total = 0,
        Used = 1,
        Unused = 2,


    }

    export enum LimitTotalTab {


        Approved = 0,
        Estimated = 1


    }
    export enum GenderList {
        Female,
        Male,
        None,
    }

    export enum AgentListMode {
        None,
        Watch,
        Edit,
    }
    export enum AgentListAccessLevel {
        None,
        MainMember,
        Write,
        Read,
    }
    export enum AgentListContextMode {
        None,
        Activity,
        Scheduler,
        NewEditActivity,
        Customer,
        Deal,
        NewDeal,
        EditDeal
    }


    export enum AgentMode {
        None,
        Watch,
        Edit,
        Create,
    }
    export enum NoteListContextMode {
        None,
        NewEditAgent,
        Agent,
        Customer
    }
    export enum NoteListMode {
        Watch,
        Edit
    }
    export enum NoteListAccessLevel {
        Read,
        Write
    }
    export enum AgentContextMode {
        None,
        Customer,
        OwnerAgent,
        Email,
        AgentList,
        Activity,
        Scheduler,
        Deal,
        Deal_NonLegalMember,
    }

    export enum CustomerContextMode {
        None,
        CustomerManaged,
        Customer,
    }

    export enum     AgentAccessLevel {
        None,
        MainTeamMember, // пользователь главный в команде представителя
        TeamMember,  // пользователь входит в команду представителя
        Denied, // доступ запрещен (отсутствует пользователь в команде представителя)
    }

    export enum MemberListMode {
        Activity,
        CustomerManaged,
        Deal,
        Gsz,
        Agent,
        DealEditor,
        CustomerActivityAddOrganization,
        DealStageMainClientManager,
        DealStageMainCreditOfficer,
        DealStageMemberMonitoring,
        CustomerActivityAddGSZ,
        CustomerActivityRemoveGSZ,
        CustomerActivityRemoveOrganization
    }

    export enum CacheContext {


        CreditActiveProductList,
        SettlementAgreementActiveProductList,
        DepositActiveProductList,
        CorporateCardActiveProductList,
        EncashmentContractActiveProductList,
        LegalInfoProductList,
        AcquiringActiveProductList,
        DboActiveProductList,
        UdboActiveProductList,
        SalaryActiveProductList,
        PaymentAccountCardIndexList,
        PaymentAccountOperationList,

        CreditCloseProductList,
        SettlementAgreementCloseProductList,
        DepositCloseProductList,
        CorporateCardCloseProductList,
        EncashmentContractCloseProductList,
        AcquiringCloseProductList,
        DboCloseProductList,
        UdboCloseProductList,
        SalaryCloseProductList,

        None,


    }

    export enum CachePolicy {
        Disabled,
        Default,
        DebugOnly,
    }

    export enum ErrorType {
        None,
        NetworkError,
        JsonParserError,
        JsonConverterError,
        AuthorizationError,
        EksProductError,

        SystemError,

        PathUrlError,

        Unknown,
    }


    export enum Navigation {
        AppCRM,
        AppCRMLimitOld,
        AppCRM_DealEditor,
        AppCRM_DealEditor_Form,
        AppCRM_Navigation_Panel
    }


    export enum NavigationViewCustomerEditorMain {
        AppCRM_CustomerEditor,
        AppCRM_CustomerEditor_Form,
    }

    export enum NavigationViewCustomerEditorStep {
        AppCRM_CustomerEditor_Address,
        AppCRM_CustomerEditor_View,
    }

    export enum NavigationViewCustomerEditor {
        AppCRM_CustomerEditor_View,
        AppCRM_CustomerEditor_Country,
    }

    export enum NavigationCustomerEditorIncludeExclude {
        AppCRM_CustomerEditor_IncludeExclude_Empty,
        AppCRM_CustomerEditor_Include,
        AppCRM_CustomerEditor_Exclude
    }
    export enum NavigationCustomerAccessory {
        AppCRM_CustomerEditor_IncludeExclude_Empty,
        AppCRM_CustomerEditor_Include,
        AppCRM_CustomerEditor_Exclude,
        AppCRM_CustomerEditor_Access
    }
    export enum NavigationCustomerEditInIncludeExcludeOrganization {
        EditorContainer,
        CustomerEditor_Include_View,
        CustomerEditor_Exclude_View,
    }
    export enum NavigationGszEditInIncludeExcludeOrganization {
        Gsz_EditorContainer,
        Gsz_CustomerEditor_Include_View,
        Gsz_CustomerEditor_Exclude_View,
    }
    export enum NavigationIntoExcludeIncludeView {
        IncludeExclude_View,
        IncludeExclude_ClientsSearch,
        IncludeExclude_MemberList
    }

    export enum NavigationGSZInIncludeExcludeOrganization {
        GSZ_Buttons,
        GSZ_Include_View = 3,
        GSZ_Exclude_View = 4,
    }

    export enum NavigationIntoGSZExcludeIncludeView {
        IncludeExclude_View,
        IncludeExclude_ClientsSearch
    }

    export enum NavigationContentAppCrm {
        // значение enum соответствует порядковому номеру Page в SplitPanel AppCRM (файл ViewAppCrm)
        AppCRM_CustomerList,
        AppCRM_Customer,
        AppCRM_GSZ,
        AppCRM_ProductList,
        AppCRM_Deal,
        AppCRM_DealEditor,
        AppCRM_LimitDetails,
        AppCRM_OccasionList,
        AppCRM_Product,
        AppCRM_AgentList,
        AppCRM_Agent,
        AppCRM_DealScreen_Attachments,
        AppCRM_CreditProductForecastDealInfo,


        AppCRM_MemberList,  // FIXME remove Enums if not used
        AppCRM_DealStage,
        AppCRM_ParentDealPicker,// FIXME remove Enums if not used
        AppCRM_CreditProductForecastProductInfo,// FIXME remove Enums if not used


    }

    export enum NavigationContentDealStage {
        DealStage,
        AdditionalFields,
        StageDetails,
        StageEditor,
        Currency,
        MemberList,
    }

    export enum NavigationContentAppCrmDealRoadMapPopover {
        AppCrmDealRoadMapPopover_Zero = 10,
        AppCrmDealRoadMapPopover_AreYouSure = 0,
        AppCrmDealRoadMapPopover_YesDoIt = 1,
    }

    export enum NavigationContentAppCrmDealConfirmSaveStagePopover {
        AppCrmDealRoadMapPopover_Zero = 10,
        AppCrmDealRoadMapPopover_AreYouSure = 0,
        AppCrmDealRoadMapPopover_YesDoIt = 1,
    }

    export enum NavigationPopoverContentDealListFilters {
        DealListFilters_Main = 0,
        DealListFilters_Stage = 1,
        DealListFilters_Role = 2,
        DealListFilters_Product = 3,
        DealListFilters_Currency = 4,
        DealListFilters_DateFrom = 5,
        DealListFilters_DateTo = 6,
    }

    /* Product List navigation */
    export enum NavigationAppCRMProductList {
        AppCRM_ProductList,
        AppCRM_ProductContainer,
        AppCRM_ProductListWithFilterList,
        AppCRM_CreditProductForecastDealInfo,
    }

    /* Product List navigation end*/

    /* CreditProduct navigation */
    export enum NavigationAppCRMCreditProduct {
        AppCRM_CreditProduct,
        AppCRM_CreditProductForecastPage,
        AppCRM_CreditProductEventDetailsPage,
        AppCRM_CreditProductEventCreatePage,
        AppCRM_CreditProductEventEditPage,

        AppCRM_CreditProductPaymentSchedule,
        AppCRM_CreditProductCovenantList,

    }
    /* CreditProduct navigation end */

    /* PrognosticCreditProduct navigation */
    export enum NavigationAppCRMPrognosticCreditProduct {
        AppCRM_PrognosticCreditProduct,
        AppCRM_PrognosticCreditProductDetailPage,
        AppCRM_PrognosticCreditProductCreatePage,
        AppCRM_PrognosticCreditProductUpdatePage,
    }
    /* PrognosticCreditProduct navigation end */

    /* CreditForecastEventPopup navigation */
    export enum NavigationAppCRMCreditProduct_CreateEventPopup {
        AppCRM_CreateEditEvent,
        AppCRM_EventTypeChoice,
        AppCRM_EventPossibilityChoice,
        AppCRM_EventCurrencyChoice,
    }

    /* CreditForecastEventPopup navigation end */

    /* CreditForecastEventFilterPopup navigation */
    export enum NavigationAppCRMCreditForecastEvent_Filter {
        AppCRM_Filter,
        AppCRM_PeriodChoice,
        AppCRM_PeriodCustomDateChoice,
        AppCRM_EventType,
    }
    /* CreditForecastEventFilterPopup navigation end */

    /* ForecastEventEditor navigation */
    export enum NavigationAppCRMForecastEventEditor {
        AppCRM_ForecastEventEditorForm,
        AppCRM_ForecastEventEditorType,
        AppCRM_ForecastEventEditorCurrency,
    }
    /* ForecastEventEditor navigation end */

    /* Product List Agreement Status */
    export enum ProductListAgreementStatus {
        Opened,
        Closed,
        Prognostic,
    }
    /* Product List navigation end*/


    /* Agent List navigation */

    export enum NavigationAppCRMAgentList {
        AgentList,
        AgentPrincipalSelect,
        AgentSearch,
        AgentPositionSelect,
    }
    export enum NavigationAppCRM {
        AgentListScreen,
        AgentScreen,
        CustomerScreen,
        OccasionListScreen,
        OccasionScreen,
        NoteScreen,
        NoteListScreen,
        MemberListScreen,
    }
    export enum NavigationAppCRMOccasion {
        AgentScreen,
        AgentNoteList,
        AgentOccasionList,
        AgentPositionChoiceList,
        AgentRelationTypeChoiceList,
    }

    export enum NavigationAppCRMAgent {
        AgentScreen,
        AgentNoteList,
        AgentOccasionList,
        AgentPositionChoiceList,
        AgentRelationTypeChoiceList,
    }
    export enum OccasionValidationAttribute {
        Date,
        Type,
    }
    export enum AgentValidationAttribute {
        FirstName,
        LastName,
        MiddleName,
        Position,
        RelationType,
        MobileNumber,
        WorkNumber,
        Email,
        Comment,
        Gender,
        Birthday,
		MobileNumberWithoutSeven,
		WorkNumberWithSeven,
    }


    export enum NavigationContentAgentList {
        AgentList,
        AgentListPrincipalPicker,
        AgentListSearchAgent,
        AgentListRoleSelect,
        AgentListAgentAdd
    }

    export enum NavigationContentAgentCard {
        AgentScreen,
        AgentNoteList,
        AgentOccasionList,
        AgentCustomerJobPicker,
        AgentRelationTypeChoice,
        AgentCustomerCompaniesList,
        AgentComment,
        AgentEmployee,
        AgentActivity,
        AgentMemberList,
    }

    export enum NavigationContentNoteList {
        AgentNoteList,
        AgentNoteView,
    }
    export enum NavigationContentNoteScreen {
        AgentNoteScreen,
        AgentNoteTypeList,
    }

    export enum NavigationContentOccasionList {
        OccasionList,
        OccasionCard,
    }

    export enum NavigationContentOccasionCard {
        OccasionCard,
        OccasionTypeList,
    }

    /* End of Agent List navigation */


    export enum NavigationContentAppCrm_Customer_Owners {
        AppCRM_Customer_OwnerList,
        AppCRM_Customer_OwnerList_Agents
    }

    export enum NavigationContentAppCrmGszBorrowers {
        AppCRM_GSZ_Borrowers,
        AppCRM_GSZ_BorrowersDetails
    }

    export enum NavigationContentAppCrmDealScreen {
        AppCRM_DealScreen,
        AppCRM_DealScreen_Products = 1,
        AppCRM_DealScreen_Phase = 2,
        AppCRM_DealScreen_Comments = 3,
        AppCRM_DealScreen_CloseReason = 4,
        AppCRM_DealScreen_Agreement = 5,
        AppCRM_DealScreen_Solution = 6,
        AppCRM_DealScreen_Members = 7,
        AppCRM_DealScreen_Employee = 8,
        AppCRM_DealScreen_DealEditor = 9,
        AppCRM_DealScreen_Activity = 10,
        AppCRM_DealScreen_StageDetails = 11,
        AppCRM_DealScreen_StageEditor = 12,
        AppCRM_DealScreen_DealNonLegalMemberList = 13,
        AppCRM_DealScreen_DealStages = 14,
        AppCRM_DealScreen_DealNonLegalMemberCard = 15,
        // AppCRM_DealScreen_Attachments = 15, - нет там уже аттачментов, сломали
    }

    export enum NavigationContentAppCrmDealEditor {
        AppCRM_DealEditor_Form,
        AppCRM_DealEditor_ClassifierProduct,
        AppCRM_DealEditor_ClassifierSalesMethod,
        AppCRM_DealEditor_AdditionalStep,
        AppCRM_DealEditor_ClassifierCurrency,
        AppCRM_DealEditor_RelatedActivity,
        AppCRM_DealEditor_Preview,
    }


    export enum NavigationContentDealEditor {
        DealEditor,
        AppCRM_DealEditor_ClassifierProduct,
        AppCRM_DealEditor_ClassifierSalesMethod,
        AppCRM_DealEditor_ClassifierCurrency,
        DealEditor_Members,
        DealEditorActivity,
        DealEditorEmploee,
        DealEditorActivity1,
        AppCRM_DealEditor_ClassifierDealType,
        AppCRM_DealEditor_ParentDealPicker,
        AppCRM_DealEditor_CampaignPicker,
        AppCRM_DealEditor_AgentsPicker,

    }

    export enum NavigationContentParentDealPicker {
        CustomerPickerScreen,
        DealPickerScreen,
    }

    export enum NavigationContentAppCrmDealEditorForm {
        AppCRM_DealEditor_Step_Main,
        AppCRM_DealEditor_Step_Additional
    }

    export enum NavigationContentAppOldLimits {
        AppCRM_Old_LimitList,
        AppCRM_Old_LimitDetails,
    }

    export enum ProductPollingStatus {
        None,
        InProgress,
        Error,
        Success,
    }

    export enum DealStatus {
        Open,
        Closed,
    }

    export enum MemberList {
        AppCRM_MemberList_List,
        AppCRM_MemberList_Member,
        AppCRM_MemberList_Search,
        AppCRM_MemberList_SelectRole,
        AppCRM_MemberList_Search_Local,
        AppCRM_MemberList_Select_IsGeneral,
    }

    export enum OwnerType {
        Unknown,
        Shareholder,
        Beneficiary,
    }

    export enum NavigationContentGsz {
        Gsz,
        Chief,
        Curator,
    }

    export enum NavigationContentCustomer {
        Customer,
        MemberList ,
        ActivityView,
        OccasionList,
        EmployeeView,
        DealListSearch,

    }

    export enum NavigationContentEmployee {
        AppCRM_Employee,
        AppCRM_CustomerList,
        AppCRM_RelatedEmployee,
    }

    export enum NavigationProductAcquiring {
        AppCRM_Acquiring,
    }

    export enum NavigationContentProductAcquiring {
        AppCRM_AcquiringInfo,
        AppCRM_AcquiringAgreementList,
    }

    export enum NavigationContentProductPaymentAccountCard {
        AppCRM_PaymentAccountCard,
        AppCRM_PaymentAccount_RestrictionList,
        AppCRM_PaymentAccount_CardIndexList,
        AppCRM_PaymentAccount_TariffList,
        AppCRM_PaymentAccount_VSPService,
        AppCRM_PaymentAccount_OperationList,
        AppCRM_PaymentAccount_Dashboard,
    }

    export enum ClientProductServiceList {
        AppCRM_Credit,
        AppCRM_SettlementAgreement,
        AppCRM_Deposit,
        AppCRM_CorporateCard,
        AppCRM_EncashmentContract,
        AppCRM_LegalInfo,
        AppCRM_Acquiring,
        AppCRM_DBO,
        AppCRM_UDBO,
        AppCRM_Salary,
        AppCRM_CardIndex,
        None,
    }

    export enum PaymentAccountProductServiceList {
        AppCRM_OperationList,
        AppCRM_CardIndexList,
    }

    export enum ClientProductPaymentAccountRestrictionType {
        MinAccountSumContract,
        InsolvencyAccount,
        DefaultRestrictionType,
    }

    export enum NavigationAppCRMOperationListFilter {
        OperationListPeriod,
        OperationListFilter,
    }

    export enum NavigationContentOperationListPeriod {
        OperationListPeriodType,
        OperationListCustomPeriod
    }

    export enum ProductAccountTab {

    }

    export enum TroubleGroupCode {
        YellowZone,
        GreenZone,
        RedZone,
        Notdefined,
        Latecollection,
        Earlycollection,
        BlackZone
    }

    export enum NavigationAppCRMOperationListPeriod {
        OperationListPeriod,
        OperationListFilter,
    }

    export enum NavigationPopoverContentEmployee {
        EmployeePopoverScreen,
        EmployeePopoverScreenView
    }

    export  enum SwipeableRowEmptyId {
        EmptyId
    }

    export  enum OccasionListRequestRefresh {
        OccasionListRequestRefreshEnabled
    }
    export  enum NoteListRequestRefresh {
        NoteListRequestRefreshEnabled
    }
    export  enum CustomerRequestRefresh {
        CustomerRequestRefreshEnabled,
        CustomerRequestLimitRefreshEnabled
    }
    export  enum AgentListRequestRefresh {
        AgentListRequestRefreshEnabled
    }
    export  enum EmployeeRequestRefresh {
        EmployeeRequestRefreshEnabled
    }
    export  enum GSZRequestRefresh {
        GSZRequestRefreshEnabled
    }
    export  enum DealListRequestRefresh { DealListRequestRefreshEnabled  }
    export  enum DealRequestRefresh { DealRequestRefreshEnabled  }
    export  enum AppCRMCustomerManagedListRequestRefresh {
        AppCRMCustomerManagedListRequestRefreshEnabled
    }

    export  enum RefreshDealAfterMemberListUpdateTag {
        RefreshDealAfterMemberListUpdateEnabled
    }
    export  enum RefreshAgentAfterMemberListUpdateTag {
        RefreshAgentAfterMemberListUpdateEnabled
    }

    export enum FileFormat {
        Excel,
        PowerPoint,
        PDF
    }

    export enum Representation {
        Slides,
        List
    }

    export enum Operation {
        Add,
        Remove
    }

    export enum DealRefreshMode {
        RefreshMode
    }

    export enum DealEditorMode {
        CreateMode,
        UpdateMode
    }

    export enum ActivityAccessLevel {
        None,
        TeamMember,
        Author,
        AuthorMainTeamMember,
        MainTeamMember,
        EditDenied,
        NoTeamMember,
    }

    export enum ActivityUrgency {

        Any,
        Overdue,
        Urgent,
        Nearest,
        Other,


    }

    export enum ValidateForm {
        inputSum = 1,
        inputEquivalentSum = 2,
        inputEquivalentConversionRate = 3
    }

    export enum ValidateFormType {
        initial,
        inputDescription,
        inputProduct,
        inputSalesMethod,
        inputCurrency,
        inputDealDate,
        selectApplication,
        inputDealType
    }

    export enum ClassifierRenderMode {
        Default,
        CodeWithValue,
        Code,
    }

    export enum ClassifierMode {
        Default,
        DealEditor_Product,
        DealEditor_SalesMethod,
        DealEditor_Currency,
        Agent_Note,
        DealEditor_DealType,
        DealStage_Currency,
    }

    export enum NavigationNoteList {
        NoteList,
        NoteScreen,
    }

    export enum NavigationNoteScreen {
        NoteScreen,
        Type,
    }

    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    export enum ProductCreditPaymentScheduleOperationType {
        DebtRepayment, // Погашение долга
        InterestRepayment, // Погашение процентов
        OtherRepayment, // Другое
    }

    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Статус":
     * Не оплачено, К оплате, Оплачено
     */
    export enum ProductCreditPaymentScheduleStatus {
        notPay, // Не оплачено
        forPay, // К оплате
        execPay, // Оплачено
    }

    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    export enum ProductCreditPaymentScheduleOperCode {
        cred, // Погашение долга
        proc, // Погашение процентов
        other, // Другое
    }

    export enum PaymentScheduleListRequestRefresh {
        PaymentScheduleListRequestRefreshEnabled
    }

    export enum TableRowUnderlineType {
        NONE,
        FULL,
        MARGINS,
    }
    export enum NavigationContentDealAttachmentsScreen {
        DealAttachments_MainPage,
        DealAttachments_ViewerPage,
        DealAttachments_AuthWarningPage,
    }

    export enum DealAttachmentsFileFormat {
        None,
        Pdf,
        Doc,
        Excel,
        PowerPoint,
        Image,
    }

    export enum paymentScheduleAlternativeScenariosType {
        Refresh, // обновление ГП
        RequestPeriodTooLong, // "Запрошенный период слишком большой"
        AllPaymentsAlreadyBeenReceived, // "Все платежи уже получены"
        UpdateDataErrorTimeout, // "Ошибка обновления графика" - превышен таймаут ожидания ответа
        UpdateDataTeсhnicalError, // "Ошибка обновления графика" - получена техническая ошибка
        ErrorGettingDataFromCache, // шибка получения данных из кэша
        TimeoutResponseReceived, // "Превышен таймаут ответа получения графика"
        ErrorEkc, // "Ошибка ошибка на стороне ЕКС"
    }

    export enum dealEditorValidationError {
        InputSalesMethod,
        InputDealType,
    }

    export enum memberSearchType {
        Employee,
        Agent
    }

    export enum ParentDealPickerMode {
        ParentDeal,
        Customer,
    }

    export enum UserRole {
        KM,
        GKM,
        Unknown,
    }
}
