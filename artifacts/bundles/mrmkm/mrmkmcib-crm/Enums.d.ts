export declare namespace Enums {
    enum ModuleType {
        Sheduler = 0,
        Crm = 1,
        News = 2,
        Knowledgebase = 3,
        Employee = 4,
        Notice = 5,
        Dashboard = 6
    }
    enum ActivityMode {
        None = 0,
        Create = 1,
        Edit = 2,
        EditDenied = 3,
        Watch = 4
    }
    enum OpenMemberListPopover {
        Deault = 0,
        MainClientManager = 1,
        MainCreditOfficer = 2,
        MemberMonitoring = 3
    }
    enum StageStatus {
        Default = 0,
        Past = 1,
        Current = 2,
        Future = 3
    }
    enum DealType {
        Credit = 0,
        Salary = 1,
        Other = 2
    }
    enum DealMode {
        CommonBack = 0,
        NavigationBack = 1,
        DealActivityList = 2,
        ForeignActivityList = 3
    }
    enum OccasionAccessLevel {
        Read = 0,
        Write = 1
    }
    enum AgentPanelPage {
        None = 0,
        OccasionList = 1,
        Position = 2,
        NoteList = 3
    }
    enum NavigationActivityDetails {
        AppScheduler_ActivityMainScreen = 0,
        AppScheduler_ActivityCustomer = 1,
        AppScheduler_ActivityType = 2,
        AppScheduler_ActivityPriority = 3,
        AppScheduler_ActivityStatus = 4,
        AppScheduler_ActivityResult = 5,
        AppScheduler_ActivityMemberList = 2,
        AppScheduler_ActivityAgentList = 3,
        AppScheduler_ActivityComment = 4,
        AppScheduler_ActivityEmployee = 5,
        AppScheduler_ActivityAgent = 6
    }
    enum ActivityContextMode {
        None = 0,
        Scheduler = 1,
        Customer = 2,
        CustomerAccess = 3,
        Notice = 4,
        Agent = 5,
        AgentAccess = 6,
        Deal = 7,
        DealEditor = 8
    }
    enum ActivityEditableAttributeList {
        Status = 0,
        Result = 1,
        Comment = 2,
        MemberList = 3,
        AgentList = 4,
        Subject = 5,
        DueDate = 6,
        Priority = 7,
        Deal = 8,
        ParentCustomer = 9,
        Gsz = 10,
        Customer = 11,
        Type = 12
    }
    enum OccasionListAccessLevel {
        Read = 0,
        Write = 1
    }
    enum FilterOrganizationStructure {
        None = 0,
        Holding = 1,
        Account = 2,
        Branch = 3,
        Conglomerate = 5
    }
    enum CustomerEditorActivityCreateMode {
        None = 0,
        Exclude = 1,
        Include = 2
    }
    enum GSZActivityCreateMode {
        None = 0,
        Exclude = 1,
        Include = 2
    }
    enum MemberListEmployeeSource {
        MemberList = 0,
        CustomerManaged = 1,
        Employee = 2
    }
    enum FilterMemberRole {
        Curator_CA = 1,
        KM = 2,
        GKM = 3,
        None = 4
    }
    enum EmployeeMode {
        CustomerManaged = 0,
        Customer = 1,
        Gsz = 2,
        Directory = 3,
        CustomerManaged_MemberList = 4,
        Deal_MemberList = 5,
        Activity = 6,
        Activity_MemberList = 7,
        Gsz_MemberList = 8,
        MemberList = 9,
        AgentMemberList = 10,
        Deal = 11,
        DealAgreement = 12,
        AppProfile = 13,
        DealEditor_MemberList = 14,
        GszChief = 15,
        GszCurator = 16,
        Employee = 17,
        DealStages_CheckMainRoles = 18
    }
    enum DealCreationMode {
        Default = 0,
        CreateCuccess = 1,
        GetCuccess = 2,
        UpdateCuccess = 3,
        CreateError = 4,
        GetError = 5,
        UpdateError = 6
    }
    enum EmployeeHistoryActions {
        Push = 0,
        Pop = 1,
        Reset = 2
    }
    enum HistoryActions {
        Push = 0,
        Pop = 1,
        Reset = 2
    }
    enum CustomerSearchType {
        LessThanThreeChars = -1,
        KPP = 1,
        INN = 2,
        Name = 3,
        Account = 4
    }
    enum CustomerMode {
        CommonBack = 0,
        NavigationBack = 1,
        SameType = 2,
        AppDirectoryBack = 3,
        AppScheduler = 4
    }
    enum OccasionListNavigationMode {
        Default = 0,
        NavigationBack = 1
    }
    enum OccasionListContextMode {
        None = 0,
        CustomerManaged = 1,
        Agent = 2,
        NewEditAgent = 3,
        NewEditCustomerManaged = 4,
        Notice = 5
    }
    enum OccasionContextMode {
        None = 0,
        OccasionList = 1,
        EditOccasionList = 2,
        NewEditAgent = 3
    }
    enum OccasionMode {
        None = 0,
        Watch = 1,
        Create = 2,
        Edit = 3
    }
    enum OccasionListMode {
        Watch = 0,
        Edit = 1
    }
    enum ShowCustomer {
        Hide = 0,
        Show = 1
    }
    enum OldLimitItem {
        Main = 0,
        Unused = 1,
        Predicted = 2,
        Approved = 3
    }
    enum CustomerManagedTab {
        Main = 0,
        DealList = 1,
        ProductTypeList = 2,
        OwnerList = 3,
        Dashboard = 4
    }
    enum CustomerEditorStep {
        Address = 0,
        View = 1,
        Country = 2
    }
    enum DealEditorStep {
        Main = 0,
        Extra = 1
    }
    enum DealListTab {
        DealOpenedList = 0,
        DealClosedList = 1
    }
    enum ProductType {
        PaymentAccountProduct = 0,
        CreditProduct = 1,
        DepositProduct = 2,
        ContractConstructorProduct = 3,
        PackageProduct = 4,
        TariffPlanProduct = 5,
        CustomsPaymentProduct = 6,
        CurrencyControlProduct = 7,
        EncashmentProduct = 8,
        SelfEncashmentProduct = 9,
        CorporateCardProduct = 10,
        AcquiringProduct = 11,
        BankGuaranteeProduct = 12,
        ContractNsoProduct = 13,
        ContractSdoProduct = 14,
        DboProduct = 15,
        CashManagementProduct = 16,
        SalaryProduct = 17,
        None = 18,
        PrognosticProduct = 19
    }
    enum ProductContextMode {
        None = 0,
        Notice = 1
    }
    enum ProductEncumbranceType {
        ProductCardIndexList = 0,
        ProductRestrictionList = 1
    }
    enum ProductStatus {
        None = 0
    }
    enum ProductTableCellType {
        None = 0,
        Sum = 1,
        Date = 2,
        Text = 3,
        Empty = 4,
        Subtitled = 5,
        Callback = 6
    }
    enum Currency {
        None = 0
    }
    enum ProductPaymentAccountTab {
        Main = 0,
        History = 1,
        Dashboard = 2
    }
    enum OperationType {
        DebtAndCredit = 0,
        Debt = 1,
        Credit = 2
    }
    enum PeriodType {
        Last5Days = 0,
        Last10Days = 1,
        Last15Days = 2,
        Last30Days = 3,
        Custom = 4
    }
    enum ProductCreditTab {
        Forecast = 0,
        Planned = 1
    }
    enum ForecastEventsListRequestRefresh {
        ForecastEventsListRequestRefreshEnabled = 0
    }
    enum ForecastEventPossibility {
        None = 0,
        Possibility25 = 1,
        Possibility50 = 2,
        Possibility75 = 3,
        Possibility100 = 4
    }
    enum ForecastPeriodType {
        CreditFinish = 0,
        Next30Days = 1,
        Next60Days = 2,
        Next90Days = 3,
        Next180Days = 4,
        Custom = 5
    }
    enum ForecastEventEditorContextMode {
        None = 0,
        ForecastEventList = 1,
        ForecastEventDetail = 2,
        PrognosticEventList = 3,
        PrognosticEventDetail = 4
    }
    enum ForecastEventErrorType {
        None = 0,
        CreateError = 1,
        UpdateError = 2,
        DeleteError = 3
    }
    enum GszMemberListSortingType {
        ByName = 0,
        ByGroup = 1,
        ByStatus = 2
    }
    enum LimitTab {
        Total = 0,
        Used = 1,
        Unused = 2
    }
    enum LimitTotalTab {
        Approved = 0,
        Estimated = 1
    }
    enum GenderList {
        Female = 0,
        Male = 1,
        None = 2
    }
    enum AgentListMode {
        None = 0,
        Watch = 1,
        Edit = 2
    }
    enum AgentListAccessLevel {
        None = 0,
        MainMember = 1,
        Write = 2,
        Read = 3
    }
    enum AgentListContextMode {
        None = 0,
        Activity = 1,
        Scheduler = 2,
        NewEditActivity = 3,
        Customer = 4,
        Deal = 5,
        NewDeal = 6,
        EditDeal = 7
    }
    enum AgentMode {
        None = 0,
        Watch = 1,
        Edit = 2,
        Create = 3
    }
    enum NoteListContextMode {
        None = 0,
        NewEditAgent = 1,
        Agent = 2,
        Customer = 3
    }
    enum NoteListMode {
        Watch = 0,
        Edit = 1
    }
    enum NoteListAccessLevel {
        Read = 0,
        Write = 1
    }
    enum AgentContextMode {
        None = 0,
        Customer = 1,
        OwnerAgent = 2,
        Email = 3,
        AgentList = 4,
        Activity = 5,
        Scheduler = 6,
        Deal = 7,
        Deal_NonLegalMember = 8
    }
    enum CustomerContextMode {
        None = 0,
        CustomerManaged = 1,
        Customer = 2
    }
    enum AgentAccessLevel {
        None = 0,
        MainTeamMember = 1,
        TeamMember = 2,
        Denied = 3
    }
    enum MemberListMode {
        Activity = 0,
        CustomerManaged = 1,
        Deal = 2,
        Gsz = 3,
        Agent = 4,
        DealEditor = 5,
        CustomerActivityAddOrganization = 6,
        DealStageMainClientManager = 7,
        DealStageMainCreditOfficer = 8,
        DealStageMemberMonitoring = 9,
        CustomerActivityAddGSZ = 10,
        CustomerActivityRemoveGSZ = 11,
        CustomerActivityRemoveOrganization = 12
    }
    enum CacheContext {
        CreditActiveProductList = 0,
        SettlementAgreementActiveProductList = 1,
        DepositActiveProductList = 2,
        CorporateCardActiveProductList = 3,
        EncashmentContractActiveProductList = 4,
        LegalInfoProductList = 5,
        AcquiringActiveProductList = 6,
        DboActiveProductList = 7,
        UdboActiveProductList = 8,
        SalaryActiveProductList = 9,
        PaymentAccountCardIndexList = 10,
        PaymentAccountOperationList = 11,
        CreditCloseProductList = 12,
        SettlementAgreementCloseProductList = 13,
        DepositCloseProductList = 14,
        CorporateCardCloseProductList = 15,
        EncashmentContractCloseProductList = 16,
        AcquiringCloseProductList = 17,
        DboCloseProductList = 18,
        UdboCloseProductList = 19,
        SalaryCloseProductList = 20,
        None = 21
    }
    enum CachePolicy {
        Disabled = 0,
        Default = 1,
        DebugOnly = 2
    }
    enum ErrorType {
        None = 0,
        NetworkError = 1,
        JsonParserError = 2,
        JsonConverterError = 3,
        AuthorizationError = 4,
        EksProductError = 5,
        SystemError = 6,
        PathUrlError = 7,
        Unknown = 8
    }
    enum Navigation {
        AppCRM = 0,
        AppCRMLimitOld = 1,
        AppCRM_DealEditor = 2,
        AppCRM_DealEditor_Form = 3,
        AppCRM_Navigation_Panel = 4
    }
    enum NavigationViewCustomerEditorMain {
        AppCRM_CustomerEditor = 0,
        AppCRM_CustomerEditor_Form = 1
    }
    enum NavigationViewCustomerEditorStep {
        AppCRM_CustomerEditor_Address = 0,
        AppCRM_CustomerEditor_View = 1
    }
    enum NavigationViewCustomerEditor {
        AppCRM_CustomerEditor_View = 0,
        AppCRM_CustomerEditor_Country = 1
    }
    enum NavigationCustomerEditorIncludeExclude {
        AppCRM_CustomerEditor_IncludeExclude_Empty = 0,
        AppCRM_CustomerEditor_Include = 1,
        AppCRM_CustomerEditor_Exclude = 2
    }
    enum NavigationCustomerAccessory {
        AppCRM_CustomerEditor_IncludeExclude_Empty = 0,
        AppCRM_CustomerEditor_Include = 1,
        AppCRM_CustomerEditor_Exclude = 2,
        AppCRM_CustomerEditor_Access = 3
    }
    enum NavigationCustomerEditInIncludeExcludeOrganization {
        EditorContainer = 0,
        CustomerEditor_Include_View = 1,
        CustomerEditor_Exclude_View = 2
    }
    enum NavigationGszEditInIncludeExcludeOrganization {
        Gsz_EditorContainer = 0,
        Gsz_CustomerEditor_Include_View = 1,
        Gsz_CustomerEditor_Exclude_View = 2
    }
    enum NavigationIntoExcludeIncludeView {
        IncludeExclude_View = 0,
        IncludeExclude_ClientsSearch = 1,
        IncludeExclude_MemberList = 2
    }
    enum NavigationGSZInIncludeExcludeOrganization {
        GSZ_Buttons = 0,
        GSZ_Include_View = 3,
        GSZ_Exclude_View = 4
    }
    enum NavigationIntoGSZExcludeIncludeView {
        IncludeExclude_View = 0,
        IncludeExclude_ClientsSearch = 1
    }
    enum NavigationContentAppCrm {
        AppCRM_CustomerList = 0,
        AppCRM_Customer = 1,
        AppCRM_GSZ = 2,
        AppCRM_ProductList = 3,
        AppCRM_Deal = 4,
        AppCRM_DealEditor = 5,
        AppCRM_LimitDetails = 6,
        AppCRM_OccasionList = 7,
        AppCRM_Product = 8,
        AppCRM_AgentList = 9,
        AppCRM_Agent = 10,
        AppCRM_DealScreen_Attachments = 11,
        AppCRM_CreditProductForecastDealInfo = 12,
        AppCRM_MemberList = 13,
        AppCRM_DealStage = 14,
        AppCRM_ParentDealPicker = 15,
        AppCRM_CreditProductForecastProductInfo = 16
    }
    enum NavigationContentDealStage {
        DealStage = 0,
        AdditionalFields = 1,
        StageDetails = 2,
        StageEditor = 3,
        Currency = 4,
        MemberList = 5
    }
    enum NavigationContentAppCrmDealRoadMapPopover {
        AppCrmDealRoadMapPopover_Zero = 10,
        AppCrmDealRoadMapPopover_AreYouSure = 0,
        AppCrmDealRoadMapPopover_YesDoIt = 1
    }
    enum NavigationContentAppCrmDealConfirmSaveStagePopover {
        AppCrmDealRoadMapPopover_Zero = 10,
        AppCrmDealRoadMapPopover_AreYouSure = 0,
        AppCrmDealRoadMapPopover_YesDoIt = 1
    }
    enum NavigationPopoverContentDealListFilters {
        DealListFilters_Main = 0,
        DealListFilters_Stage = 1,
        DealListFilters_Role = 2,
        DealListFilters_Product = 3,
        DealListFilters_Currency = 4,
        DealListFilters_DateFrom = 5,
        DealListFilters_DateTo = 6
    }
    enum NavigationAppCRMProductList {
        AppCRM_ProductList = 0,
        AppCRM_ProductContainer = 1,
        AppCRM_ProductListWithFilterList = 2,
        AppCRM_CreditProductForecastDealInfo = 3
    }
    enum NavigationAppCRMCreditProduct {
        AppCRM_CreditProduct = 0,
        AppCRM_CreditProductForecastPage = 1,
        AppCRM_CreditProductEventDetailsPage = 2,
        AppCRM_CreditProductEventCreatePage = 3,
        AppCRM_CreditProductEventEditPage = 4,
        AppCRM_CreditProductPaymentSchedule = 5,
        AppCRM_CreditProductCovenantList = 6
    }
    enum NavigationAppCRMPrognosticCreditProduct {
        AppCRM_PrognosticCreditProduct = 0,
        AppCRM_PrognosticCreditProductDetailPage = 1,
        AppCRM_PrognosticCreditProductCreatePage = 2,
        AppCRM_PrognosticCreditProductUpdatePage = 3
    }
    enum NavigationAppCRMCreditProduct_CreateEventPopup {
        AppCRM_CreateEditEvent = 0,
        AppCRM_EventTypeChoice = 1,
        AppCRM_EventPossibilityChoice = 2,
        AppCRM_EventCurrencyChoice = 3
    }
    enum NavigationAppCRMCreditForecastEvent_Filter {
        AppCRM_Filter = 0,
        AppCRM_PeriodChoice = 1,
        AppCRM_PeriodCustomDateChoice = 2,
        AppCRM_EventType = 3
    }
    enum NavigationAppCRMForecastEventEditor {
        AppCRM_ForecastEventEditorForm = 0,
        AppCRM_ForecastEventEditorType = 1,
        AppCRM_ForecastEventEditorCurrency = 2
    }
    enum ProductListAgreementStatus {
        Opened = 0,
        Closed = 1,
        Prognostic = 2
    }
    enum NavigationAppCRMAgentList {
        AgentList = 0,
        AgentPrincipalSelect = 1,
        AgentSearch = 2,
        AgentPositionSelect = 3
    }
    enum NavigationAppCRM {
        AgentListScreen = 0,
        AgentScreen = 1,
        CustomerScreen = 2,
        OccasionListScreen = 3,
        OccasionScreen = 4,
        NoteScreen = 5,
        NoteListScreen = 6,
        MemberListScreen = 7
    }
    enum NavigationAppCRMOccasion {
        AgentScreen = 0,
        AgentNoteList = 1,
        AgentOccasionList = 2,
        AgentPositionChoiceList = 3,
        AgentRelationTypeChoiceList = 4
    }
    enum NavigationAppCRMAgent {
        AgentScreen = 0,
        AgentNoteList = 1,
        AgentOccasionList = 2,
        AgentPositionChoiceList = 3,
        AgentRelationTypeChoiceList = 4
    }
    enum OccasionValidationAttribute {
        Date = 0,
        Type = 1
    }
    enum AgentValidationAttribute {
        FirstName = 0,
        LastName = 1,
        MiddleName = 2,
        Position = 3,
        RelationType = 4,
        MobileNumber = 5,
        WorkNumber = 6,
        Email = 7,
        Comment = 8,
        Gender = 9,
        Birthday = 10,
        MobileNumberWithoutSeven = 11,
        WorkNumberWithSeven = 12
    }
    enum NavigationContentAgentList {
        AgentList = 0,
        AgentListPrincipalPicker = 1,
        AgentListSearchAgent = 2,
        AgentListRoleSelect = 3,
        AgentListAgentAdd = 4
    }
    enum NavigationContentAgentCard {
        AgentScreen = 0,
        AgentNoteList = 1,
        AgentOccasionList = 2,
        AgentCustomerJobPicker = 3,
        AgentRelationTypeChoice = 4,
        AgentCustomerCompaniesList = 5,
        AgentComment = 6,
        AgentEmployee = 7,
        AgentActivity = 8,
        AgentMemberList = 9
    }
    enum NavigationContentNoteList {
        AgentNoteList = 0,
        AgentNoteView = 1
    }
    enum NavigationContentNoteScreen {
        AgentNoteScreen = 0,
        AgentNoteTypeList = 1
    }
    enum NavigationContentOccasionList {
        OccasionList = 0,
        OccasionCard = 1
    }
    enum NavigationContentOccasionCard {
        OccasionCard = 0,
        OccasionTypeList = 1
    }
    enum NavigationContentAppCrm_Customer_Owners {
        AppCRM_Customer_OwnerList = 0,
        AppCRM_Customer_OwnerList_Agents = 1
    }
    enum NavigationContentAppCrmGszBorrowers {
        AppCRM_GSZ_Borrowers = 0,
        AppCRM_GSZ_BorrowersDetails = 1
    }
    enum NavigationContentAppCrmDealScreen {
        AppCRM_DealScreen = 0,
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
        AppCRM_DealScreen_DealNonLegalMemberCard = 15
    }
    enum NavigationContentAppCrmDealEditor {
        AppCRM_DealEditor_Form = 0,
        AppCRM_DealEditor_ClassifierProduct = 1,
        AppCRM_DealEditor_ClassifierSalesMethod = 2,
        AppCRM_DealEditor_AdditionalStep = 3,
        AppCRM_DealEditor_ClassifierCurrency = 4,
        AppCRM_DealEditor_RelatedActivity = 5,
        AppCRM_DealEditor_Preview = 6
    }
    enum NavigationContentDealEditor {
        DealEditor = 0,
        AppCRM_DealEditor_ClassifierProduct = 1,
        AppCRM_DealEditor_ClassifierSalesMethod = 2,
        AppCRM_DealEditor_ClassifierCurrency = 3,
        DealEditor_Members = 4,
        DealEditorActivity = 5,
        DealEditorEmploee = 6,
        DealEditorActivity1 = 7,
        AppCRM_DealEditor_ClassifierDealType = 8,
        AppCRM_DealEditor_ParentDealPicker = 9,
        AppCRM_DealEditor_CampaignPicker = 10,
        AppCRM_DealEditor_AgentsPicker = 11
    }
    enum NavigationContentParentDealPicker {
        CustomerPickerScreen = 0,
        DealPickerScreen = 1
    }
    enum NavigationContentAppCrmDealEditorForm {
        AppCRM_DealEditor_Step_Main = 0,
        AppCRM_DealEditor_Step_Additional = 1
    }
    enum NavigationContentAppOldLimits {
        AppCRM_Old_LimitList = 0,
        AppCRM_Old_LimitDetails = 1
    }
    enum ProductPollingStatus {
        None = 0,
        InProgress = 1,
        Error = 2,
        Success = 3
    }
    enum DealStatus {
        Open = 0,
        Closed = 1
    }
    enum MemberList {
        AppCRM_MemberList_List = 0,
        AppCRM_MemberList_Member = 1,
        AppCRM_MemberList_Search = 2,
        AppCRM_MemberList_SelectRole = 3,
        AppCRM_MemberList_Search_Local = 4,
        AppCRM_MemberList_Select_IsGeneral = 5
    }
    enum OwnerType {
        Unknown = 0,
        Shareholder = 1,
        Beneficiary = 2
    }
    enum NavigationContentGsz {
        Gsz = 0,
        Chief = 1,
        Curator = 2
    }
    enum NavigationContentCustomer {
        Customer = 0,
        MemberList = 1,
        ActivityView = 2,
        OccasionList = 3,
        EmployeeView = 4,
        DealListSearch = 5
    }
    enum NavigationContentEmployee {
        AppCRM_Employee = 0,
        AppCRM_CustomerList = 1,
        AppCRM_RelatedEmployee = 2
    }
    enum NavigationProductAcquiring {
        AppCRM_Acquiring = 0
    }
    enum NavigationContentProductAcquiring {
        AppCRM_AcquiringInfo = 0,
        AppCRM_AcquiringAgreementList = 1
    }
    enum NavigationContentProductPaymentAccountCard {
        AppCRM_PaymentAccountCard = 0,
        AppCRM_PaymentAccount_RestrictionList = 1,
        AppCRM_PaymentAccount_CardIndexList = 2,
        AppCRM_PaymentAccount_TariffList = 3,
        AppCRM_PaymentAccount_VSPService = 4,
        AppCRM_PaymentAccount_OperationList = 5,
        AppCRM_PaymentAccount_Dashboard = 6
    }
    enum ClientProductServiceList {
        AppCRM_Credit = 0,
        AppCRM_SettlementAgreement = 1,
        AppCRM_Deposit = 2,
        AppCRM_CorporateCard = 3,
        AppCRM_EncashmentContract = 4,
        AppCRM_LegalInfo = 5,
        AppCRM_Acquiring = 6,
        AppCRM_DBO = 7,
        AppCRM_UDBO = 8,
        AppCRM_Salary = 9,
        AppCRM_CardIndex = 10,
        None = 11
    }
    enum PaymentAccountProductServiceList {
        AppCRM_OperationList = 0,
        AppCRM_CardIndexList = 1
    }
    enum ClientProductPaymentAccountRestrictionType {
        MinAccountSumContract = 0,
        InsolvencyAccount = 1,
        DefaultRestrictionType = 2
    }
    enum NavigationAppCRMOperationListFilter {
        OperationListPeriod = 0,
        OperationListFilter = 1
    }
    enum NavigationContentOperationListPeriod {
        OperationListPeriodType = 0,
        OperationListCustomPeriod = 1
    }
    enum ProductAccountTab {
    }
    enum TroubleGroupCode {
        YellowZone = 0,
        GreenZone = 1,
        RedZone = 2,
        Notdefined = 3,
        Latecollection = 4,
        Earlycollection = 5,
        BlackZone = 6
    }
    enum NavigationAppCRMOperationListPeriod {
        OperationListPeriod = 0,
        OperationListFilter = 1
    }
    enum NavigationPopoverContentEmployee {
        EmployeePopoverScreen = 0,
        EmployeePopoverScreenView = 1
    }
    enum SwipeableRowEmptyId {
        EmptyId = 0
    }
    enum OccasionListRequestRefresh {
        OccasionListRequestRefreshEnabled = 0
    }
    enum NoteListRequestRefresh {
        NoteListRequestRefreshEnabled = 0
    }
    enum CustomerRequestRefresh {
        CustomerRequestRefreshEnabled = 0,
        CustomerRequestLimitRefreshEnabled = 1
    }
    enum AgentListRequestRefresh {
        AgentListRequestRefreshEnabled = 0
    }
    enum EmployeeRequestRefresh {
        EmployeeRequestRefreshEnabled = 0
    }
    enum GSZRequestRefresh {
        GSZRequestRefreshEnabled = 0
    }
    enum DealListRequestRefresh {
        DealListRequestRefreshEnabled = 0
    }
    enum DealRequestRefresh {
        DealRequestRefreshEnabled = 0
    }
    enum AppCRMCustomerManagedListRequestRefresh {
        AppCRMCustomerManagedListRequestRefreshEnabled = 0
    }
    enum RefreshDealAfterMemberListUpdateTag {
        RefreshDealAfterMemberListUpdateEnabled = 0
    }
    enum RefreshAgentAfterMemberListUpdateTag {
        RefreshAgentAfterMemberListUpdateEnabled = 0
    }
    enum FileFormat {
        Excel = 0,
        PowerPoint = 1,
        PDF = 2
    }
    enum Representation {
        Slides = 0,
        List = 1
    }
    enum Operation {
        Add = 0,
        Remove = 1
    }
    enum DealRefreshMode {
        RefreshMode = 0
    }
    enum DealEditorMode {
        CreateMode = 0,
        UpdateMode = 1
    }
    enum ActivityAccessLevel {
        None = 0,
        TeamMember = 1,
        Author = 2,
        AuthorMainTeamMember = 3,
        MainTeamMember = 4,
        EditDenied = 5,
        NoTeamMember = 6
    }
    enum ActivityUrgency {
        Any = 0,
        Overdue = 1,
        Urgent = 2,
        Nearest = 3,
        Other = 4
    }
    enum ValidateForm {
        inputSum = 1,
        inputEquivalentSum = 2,
        inputEquivalentConversionRate = 3
    }
    enum ValidateFormType {
        initial = 0,
        inputDescription = 1,
        inputProduct = 2,
        inputSalesMethod = 3,
        inputCurrency = 4,
        inputDealDate = 5,
        selectApplication = 6,
        inputDealType = 7
    }
    enum ClassifierRenderMode {
        Default = 0,
        CodeWithValue = 1,
        Code = 2
    }
    enum ClassifierMode {
        Default = 0,
        DealEditor_Product = 1,
        DealEditor_SalesMethod = 2,
        DealEditor_Currency = 3,
        Agent_Note = 4,
        DealEditor_DealType = 5,
        DealStage_Currency = 6
    }
    enum NavigationNoteList {
        NoteList = 0,
        NoteScreen = 1
    }
    enum NavigationNoteScreen {
        NoteScreen = 0,
        Type = 1
    }
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    enum ProductCreditPaymentScheduleOperationType {
        DebtRepayment = 0,
        InterestRepayment = 1,
        OtherRepayment = 2
    }
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Статус":
     * Не оплачено, К оплате, Оплачено
     */
    enum ProductCreditPaymentScheduleStatus {
        notPay = 0,
        forPay = 1,
        execPay = 2
    }
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    enum ProductCreditPaymentScheduleOperCode {
        cred = 0,
        proc = 1,
        other = 2
    }
    enum PaymentScheduleListRequestRefresh {
        PaymentScheduleListRequestRefreshEnabled = 0
    }
    enum TableRowUnderlineType {
        NONE = 0,
        FULL = 1,
        MARGINS = 2
    }
    enum NavigationContentDealAttachmentsScreen {
        DealAttachments_MainPage = 0,
        DealAttachments_ViewerPage = 1,
        DealAttachments_AuthWarningPage = 2
    }
    enum DealAttachmentsFileFormat {
        None = 0,
        Pdf = 1,
        Doc = 2,
        Excel = 3,
        PowerPoint = 4,
        Image = 5
    }
    enum paymentScheduleAlternativeScenariosType {
        Refresh = 0,
        RequestPeriodTooLong = 1,
        AllPaymentsAlreadyBeenReceived = 2,
        UpdateDataErrorTimeout = 3,
        UpdateDataTeсhnicalError = 4,
        ErrorGettingDataFromCache = 5,
        TimeoutResponseReceived = 6,
        ErrorEkc = 7
    }
    enum dealEditorValidationError {
        InputSalesMethod = 0,
        InputDealType = 1
    }
    enum memberSearchType {
        Employee = 0,
        Agent = 1
    }
    enum ParentDealPickerMode {
        ParentDeal = 0,
        Customer = 1
    }
    enum UserRole {
        KM = 0,
        GKM = 1,
        Unknown = 2
    }
}
