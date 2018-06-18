export var Enums;
(function (Enums) {
    let ModuleType;
    (function (ModuleType) {
        ModuleType[ModuleType["Sheduler"] = 0] = "Sheduler";
        ModuleType[ModuleType["Crm"] = 1] = "Crm";
        ModuleType[ModuleType["News"] = 2] = "News";
        ModuleType[ModuleType["Knowledgebase"] = 3] = "Knowledgebase";
        ModuleType[ModuleType["Employee"] = 4] = "Employee";
        ModuleType[ModuleType["Notice"] = 5] = "Notice";
        ModuleType[ModuleType["Dashboard"] = 6] = "Dashboard";
    })(ModuleType = Enums.ModuleType || (Enums.ModuleType = {}));
    let ActivityMode;
    (function (ActivityMode) {
        ActivityMode[ActivityMode["None"] = 0] = "None";
        ActivityMode[ActivityMode["Create"] = 1] = "Create";
        ActivityMode[ActivityMode["Edit"] = 2] = "Edit";
        ActivityMode[ActivityMode["EditDenied"] = 3] = "EditDenied";
        ActivityMode[ActivityMode["Watch"] = 4] = "Watch";
    })(ActivityMode = Enums.ActivityMode || (Enums.ActivityMode = {}));
    let OpenMemberListPopover;
    (function (OpenMemberListPopover) {
        OpenMemberListPopover[OpenMemberListPopover["Deault"] = 0] = "Deault";
        OpenMemberListPopover[OpenMemberListPopover["MainClientManager"] = 1] = "MainClientManager";
        OpenMemberListPopover[OpenMemberListPopover["MainCreditOfficer"] = 2] = "MainCreditOfficer";
        OpenMemberListPopover[OpenMemberListPopover["MemberMonitoring"] = 3] = "MemberMonitoring";
    })(OpenMemberListPopover = Enums.OpenMemberListPopover || (Enums.OpenMemberListPopover = {}));
    let StageStatus;
    (function (StageStatus) {
        StageStatus[StageStatus["Default"] = 0] = "Default";
        StageStatus[StageStatus["Past"] = 1] = "Past";
        StageStatus[StageStatus["Current"] = 2] = "Current";
        StageStatus[StageStatus["Future"] = 3] = "Future";
    })(StageStatus = Enums.StageStatus || (Enums.StageStatus = {}));
    let DealType;
    (function (DealType) {
        DealType[DealType["Credit"] = 0] = "Credit";
        DealType[DealType["Salary"] = 1] = "Salary";
        DealType[DealType["Other"] = 2] = "Other";
    })(DealType = Enums.DealType || (Enums.DealType = {}));
    let DealMode;
    (function (DealMode) {
        DealMode[DealMode["CommonBack"] = 0] = "CommonBack";
        DealMode[DealMode["NavigationBack"] = 1] = "NavigationBack";
        DealMode[DealMode["DealActivityList"] = 2] = "DealActivityList";
        DealMode[DealMode["ForeignActivityList"] = 3] = "ForeignActivityList";
    })(DealMode = Enums.DealMode || (Enums.DealMode = {}));
    let OccasionAccessLevel;
    (function (OccasionAccessLevel) {
        OccasionAccessLevel[OccasionAccessLevel["Read"] = 0] = "Read";
        OccasionAccessLevel[OccasionAccessLevel["Write"] = 1] = "Write";
    })(OccasionAccessLevel = Enums.OccasionAccessLevel || (Enums.OccasionAccessLevel = {}));
    let AgentPanelPage;
    (function (AgentPanelPage) {
        AgentPanelPage[AgentPanelPage["None"] = 0] = "None";
        AgentPanelPage[AgentPanelPage["OccasionList"] = 1] = "OccasionList";
        AgentPanelPage[AgentPanelPage["Position"] = 2] = "Position";
        AgentPanelPage[AgentPanelPage["NoteList"] = 3] = "NoteList";
    })(AgentPanelPage = Enums.AgentPanelPage || (Enums.AgentPanelPage = {}));
    let NavigationActivityDetails;
    (function (NavigationActivityDetails) {
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityMainScreen"] = 0] = "AppScheduler_ActivityMainScreen";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityCustomer"] = 1] = "AppScheduler_ActivityCustomer";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityType"] = 2] = "AppScheduler_ActivityType";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityPriority"] = 3] = "AppScheduler_ActivityPriority";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityStatus"] = 4] = "AppScheduler_ActivityStatus";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityResult"] = 5] = "AppScheduler_ActivityResult";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityMemberList"] = 2] = "AppScheduler_ActivityMemberList";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityAgentList"] = 3] = "AppScheduler_ActivityAgentList";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityComment"] = 4] = "AppScheduler_ActivityComment";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityEmployee"] = 5] = "AppScheduler_ActivityEmployee";
        NavigationActivityDetails[NavigationActivityDetails["AppScheduler_ActivityAgent"] = 6] = "AppScheduler_ActivityAgent";
    })(NavigationActivityDetails = Enums.NavigationActivityDetails || (Enums.NavigationActivityDetails = {}));
    let ActivityContextMode;
    (function (ActivityContextMode) {
        ActivityContextMode[ActivityContextMode["None"] = 0] = "None";
        ActivityContextMode[ActivityContextMode["Scheduler"] = 1] = "Scheduler";
        ActivityContextMode[ActivityContextMode["Customer"] = 2] = "Customer";
        ActivityContextMode[ActivityContextMode["CustomerAccess"] = 3] = "CustomerAccess";
        ActivityContextMode[ActivityContextMode["Notice"] = 4] = "Notice";
        ActivityContextMode[ActivityContextMode["Agent"] = 5] = "Agent";
        ActivityContextMode[ActivityContextMode["AgentAccess"] = 6] = "AgentAccess";
        ActivityContextMode[ActivityContextMode["Deal"] = 7] = "Deal";
        ActivityContextMode[ActivityContextMode["DealEditor"] = 8] = "DealEditor";
    })(ActivityContextMode = Enums.ActivityContextMode || (Enums.ActivityContextMode = {}));
    let ActivityEditableAttributeList;
    (function (ActivityEditableAttributeList) {
        ActivityEditableAttributeList[ActivityEditableAttributeList["Status"] = 0] = "Status";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Result"] = 1] = "Result";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Comment"] = 2] = "Comment";
        ActivityEditableAttributeList[ActivityEditableAttributeList["MemberList"] = 3] = "MemberList";
        ActivityEditableAttributeList[ActivityEditableAttributeList["AgentList"] = 4] = "AgentList";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Subject"] = 5] = "Subject";
        ActivityEditableAttributeList[ActivityEditableAttributeList["DueDate"] = 6] = "DueDate";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Priority"] = 7] = "Priority";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Deal"] = 8] = "Deal";
        ActivityEditableAttributeList[ActivityEditableAttributeList["ParentCustomer"] = 9] = "ParentCustomer";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Gsz"] = 10] = "Gsz";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Customer"] = 11] = "Customer";
        ActivityEditableAttributeList[ActivityEditableAttributeList["Type"] = 12] = "Type";
    })(ActivityEditableAttributeList = Enums.ActivityEditableAttributeList || (Enums.ActivityEditableAttributeList = {}));
    let OccasionListAccessLevel;
    (function (OccasionListAccessLevel) {
        OccasionListAccessLevel[OccasionListAccessLevel["Read"] = 0] = "Read";
        OccasionListAccessLevel[OccasionListAccessLevel["Write"] = 1] = "Write";
    })(OccasionListAccessLevel = Enums.OccasionListAccessLevel || (Enums.OccasionListAccessLevel = {}));
    let FilterOrganizationStructure;
    (function (FilterOrganizationStructure) {
        FilterOrganizationStructure[FilterOrganizationStructure["None"] = 0] = "None";
        FilterOrganizationStructure[FilterOrganizationStructure["Holding"] = 1] = "Holding";
        FilterOrganizationStructure[FilterOrganizationStructure["Account"] = 2] = "Account";
        FilterOrganizationStructure[FilterOrganizationStructure["Branch"] = 3] = "Branch";
        FilterOrganizationStructure[FilterOrganizationStructure["Conglomerate"] = 5] = "Conglomerate";
    })(FilterOrganizationStructure = Enums.FilterOrganizationStructure || (Enums.FilterOrganizationStructure = {}));
    let CustomerEditorActivityCreateMode;
    (function (CustomerEditorActivityCreateMode) {
        CustomerEditorActivityCreateMode[CustomerEditorActivityCreateMode["None"] = 0] = "None";
        CustomerEditorActivityCreateMode[CustomerEditorActivityCreateMode["Exclude"] = 1] = "Exclude";
        CustomerEditorActivityCreateMode[CustomerEditorActivityCreateMode["Include"] = 2] = "Include";
    })(CustomerEditorActivityCreateMode = Enums.CustomerEditorActivityCreateMode || (Enums.CustomerEditorActivityCreateMode = {}));
    let GSZActivityCreateMode;
    (function (GSZActivityCreateMode) {
        GSZActivityCreateMode[GSZActivityCreateMode["None"] = 0] = "None";
        GSZActivityCreateMode[GSZActivityCreateMode["Exclude"] = 1] = "Exclude";
        GSZActivityCreateMode[GSZActivityCreateMode["Include"] = 2] = "Include";
    })(GSZActivityCreateMode = Enums.GSZActivityCreateMode || (Enums.GSZActivityCreateMode = {}));
    let MemberListEmployeeSource;
    (function (MemberListEmployeeSource) {
        MemberListEmployeeSource[MemberListEmployeeSource["MemberList"] = 0] = "MemberList";
        MemberListEmployeeSource[MemberListEmployeeSource["CustomerManaged"] = 1] = "CustomerManaged";
        MemberListEmployeeSource[MemberListEmployeeSource["Employee"] = 2] = "Employee";
    })(MemberListEmployeeSource = Enums.MemberListEmployeeSource || (Enums.MemberListEmployeeSource = {}));
    let FilterMemberRole;
    (function (FilterMemberRole) {
        FilterMemberRole[FilterMemberRole["Curator_CA"] = 1] = "Curator_CA";
        FilterMemberRole[FilterMemberRole["KM"] = 2] = "KM";
        FilterMemberRole[FilterMemberRole["GKM"] = 3] = "GKM";
        FilterMemberRole[FilterMemberRole["None"] = 4] = "None";
    })(FilterMemberRole = Enums.FilterMemberRole || (Enums.FilterMemberRole = {}));
    let EmployeeMode;
    (function (EmployeeMode) {
        EmployeeMode[EmployeeMode["CustomerManaged"] = 0] = "CustomerManaged";
        EmployeeMode[EmployeeMode["Customer"] = 1] = "Customer";
        EmployeeMode[EmployeeMode["Gsz"] = 2] = "Gsz";
        EmployeeMode[EmployeeMode["Directory"] = 3] = "Directory";
        EmployeeMode[EmployeeMode["CustomerManaged_MemberList"] = 4] = "CustomerManaged_MemberList";
        EmployeeMode[EmployeeMode["Deal_MemberList"] = 5] = "Deal_MemberList";
        EmployeeMode[EmployeeMode["Activity"] = 6] = "Activity";
        EmployeeMode[EmployeeMode["Activity_MemberList"] = 7] = "Activity_MemberList";
        EmployeeMode[EmployeeMode["Gsz_MemberList"] = 8] = "Gsz_MemberList";
        EmployeeMode[EmployeeMode["MemberList"] = 9] = "MemberList";
        EmployeeMode[EmployeeMode["AgentMemberList"] = 10] = "AgentMemberList";
        EmployeeMode[EmployeeMode["Deal"] = 11] = "Deal";
        EmployeeMode[EmployeeMode["DealAgreement"] = 12] = "DealAgreement";
        EmployeeMode[EmployeeMode["AppProfile"] = 13] = "AppProfile";
        EmployeeMode[EmployeeMode["DealEditor_MemberList"] = 14] = "DealEditor_MemberList";
        EmployeeMode[EmployeeMode["GszChief"] = 15] = "GszChief";
        EmployeeMode[EmployeeMode["GszCurator"] = 16] = "GszCurator";
        EmployeeMode[EmployeeMode["Employee"] = 17] = "Employee";
        EmployeeMode[EmployeeMode["DealStages_CheckMainRoles"] = 18] = "DealStages_CheckMainRoles";
    })(EmployeeMode = Enums.EmployeeMode || (Enums.EmployeeMode = {}));
    let DealCreationMode;
    (function (DealCreationMode) {
        DealCreationMode[DealCreationMode["Default"] = 0] = "Default";
        DealCreationMode[DealCreationMode["CreateCuccess"] = 1] = "CreateCuccess";
        DealCreationMode[DealCreationMode["GetCuccess"] = 2] = "GetCuccess";
        DealCreationMode[DealCreationMode["UpdateCuccess"] = 3] = "UpdateCuccess";
        DealCreationMode[DealCreationMode["CreateError"] = 4] = "CreateError";
        DealCreationMode[DealCreationMode["GetError"] = 5] = "GetError";
        DealCreationMode[DealCreationMode["UpdateError"] = 6] = "UpdateError";
    })(DealCreationMode = Enums.DealCreationMode || (Enums.DealCreationMode = {}));
    let EmployeeHistoryActions;
    (function (EmployeeHistoryActions) {
        EmployeeHistoryActions[EmployeeHistoryActions["Push"] = 0] = "Push";
        EmployeeHistoryActions[EmployeeHistoryActions["Pop"] = 1] = "Pop";
        EmployeeHistoryActions[EmployeeHistoryActions["Reset"] = 2] = "Reset";
    })(EmployeeHistoryActions = Enums.EmployeeHistoryActions || (Enums.EmployeeHistoryActions = {}));
    let HistoryActions;
    (function (HistoryActions) {
        HistoryActions[HistoryActions["Push"] = 0] = "Push";
        HistoryActions[HistoryActions["Pop"] = 1] = "Pop";
        HistoryActions[HistoryActions["Reset"] = 2] = "Reset";
    })(HistoryActions = Enums.HistoryActions || (Enums.HistoryActions = {}));
    let CustomerSearchType;
    (function (CustomerSearchType) {
        // TODO Describe CustomerSearchType enum used in actions and thunks.
        CustomerSearchType[CustomerSearchType["LessThanThreeChars"] = -1] = "LessThanThreeChars";
        CustomerSearchType[CustomerSearchType["KPP"] = 1] = "KPP";
        CustomerSearchType[CustomerSearchType["INN"] = 2] = "INN";
        CustomerSearchType[CustomerSearchType["Name"] = 3] = "Name";
        CustomerSearchType[CustomerSearchType["Account"] = 4] = "Account";
    })(CustomerSearchType = Enums.CustomerSearchType || (Enums.CustomerSearchType = {}));
    let CustomerMode;
    (function (CustomerMode) {
        CustomerMode[CustomerMode["CommonBack"] = 0] = "CommonBack";
        CustomerMode[CustomerMode["NavigationBack"] = 1] = "NavigationBack";
        CustomerMode[CustomerMode["SameType"] = 2] = "SameType";
        CustomerMode[CustomerMode["AppDirectoryBack"] = 3] = "AppDirectoryBack";
        CustomerMode[CustomerMode["AppScheduler"] = 4] = "AppScheduler";
    })(CustomerMode = Enums.CustomerMode || (Enums.CustomerMode = {}));
    let OccasionListNavigationMode;
    (function (OccasionListNavigationMode) {
        OccasionListNavigationMode[OccasionListNavigationMode["Default"] = 0] = "Default";
        OccasionListNavigationMode[OccasionListNavigationMode["NavigationBack"] = 1] = "NavigationBack";
    })(OccasionListNavigationMode = Enums.OccasionListNavigationMode || (Enums.OccasionListNavigationMode = {}));
    let OccasionListContextMode;
    (function (OccasionListContextMode) {
        OccasionListContextMode[OccasionListContextMode["None"] = 0] = "None";
        OccasionListContextMode[OccasionListContextMode["CustomerManaged"] = 1] = "CustomerManaged";
        OccasionListContextMode[OccasionListContextMode["Agent"] = 2] = "Agent";
        OccasionListContextMode[OccasionListContextMode["NewEditAgent"] = 3] = "NewEditAgent";
        OccasionListContextMode[OccasionListContextMode["NewEditCustomerManaged"] = 4] = "NewEditCustomerManaged";
        OccasionListContextMode[OccasionListContextMode["Notice"] = 5] = "Notice";
    })(OccasionListContextMode = Enums.OccasionListContextMode || (Enums.OccasionListContextMode = {}));
    let OccasionContextMode;
    (function (OccasionContextMode) {
        OccasionContextMode[OccasionContextMode["None"] = 0] = "None";
        OccasionContextMode[OccasionContextMode["OccasionList"] = 1] = "OccasionList";
        OccasionContextMode[OccasionContextMode["EditOccasionList"] = 2] = "EditOccasionList";
        OccasionContextMode[OccasionContextMode["NewEditAgent"] = 3] = "NewEditAgent";
    })(OccasionContextMode = Enums.OccasionContextMode || (Enums.OccasionContextMode = {}));
    let OccasionMode;
    (function (OccasionMode) {
        OccasionMode[OccasionMode["None"] = 0] = "None";
        OccasionMode[OccasionMode["Watch"] = 1] = "Watch";
        OccasionMode[OccasionMode["Create"] = 2] = "Create";
        OccasionMode[OccasionMode["Edit"] = 3] = "Edit";
    })(OccasionMode = Enums.OccasionMode || (Enums.OccasionMode = {}));
    let OccasionListMode;
    (function (OccasionListMode) {
        OccasionListMode[OccasionListMode["Watch"] = 0] = "Watch";
        OccasionListMode[OccasionListMode["Edit"] = 1] = "Edit";
    })(OccasionListMode = Enums.OccasionListMode || (Enums.OccasionListMode = {}));
    let ShowCustomer;
    (function (ShowCustomer) {
        ShowCustomer[ShowCustomer["Hide"] = 0] = "Hide";
        ShowCustomer[ShowCustomer["Show"] = 1] = "Show";
    })(ShowCustomer = Enums.ShowCustomer || (Enums.ShowCustomer = {}));
    let OldLimitItem;
    (function (OldLimitItem) {
        // TODO Describe OldLimitItem enum used in actions and thunks.
        OldLimitItem[OldLimitItem["Main"] = 0] = "Main";
        OldLimitItem[OldLimitItem["Unused"] = 1] = "Unused";
        OldLimitItem[OldLimitItem["Predicted"] = 2] = "Predicted";
        OldLimitItem[OldLimitItem["Approved"] = 3] = "Approved";
    })(OldLimitItem = Enums.OldLimitItem || (Enums.OldLimitItem = {}));
    let CustomerManagedTab;
    (function (CustomerManagedTab) {
        // TODO Describe CustomerManagedTab enum used in actions and thunks.
        CustomerManagedTab[CustomerManagedTab["Main"] = 0] = "Main";
        CustomerManagedTab[CustomerManagedTab["DealList"] = 1] = "DealList";
        CustomerManagedTab[CustomerManagedTab["ProductTypeList"] = 2] = "ProductTypeList";
        CustomerManagedTab[CustomerManagedTab["OwnerList"] = 3] = "OwnerList";
        CustomerManagedTab[CustomerManagedTab["Dashboard"] = 4] = "Dashboard";
    })(CustomerManagedTab = Enums.CustomerManagedTab || (Enums.CustomerManagedTab = {}));
    let CustomerEditorStep;
    (function (CustomerEditorStep) {
        // TODO Describe CustomerEditorStep enum used in actions and thunks.
        CustomerEditorStep[CustomerEditorStep["Address"] = 0] = "Address";
        CustomerEditorStep[CustomerEditorStep["View"] = 1] = "View";
        CustomerEditorStep[CustomerEditorStep["Country"] = 2] = "Country";
    })(CustomerEditorStep = Enums.CustomerEditorStep || (Enums.CustomerEditorStep = {}));
    let DealEditorStep;
    (function (DealEditorStep) {
        // TODO Describe DealEditorStep enum used in actions and thunks.
        DealEditorStep[DealEditorStep["Main"] = 0] = "Main";
        DealEditorStep[DealEditorStep["Extra"] = 1] = "Extra";
    })(DealEditorStep = Enums.DealEditorStep || (Enums.DealEditorStep = {}));
    let DealListTab;
    (function (DealListTab) {
        // TODO Describe DealListTab enum used in actions and thunks.
        DealListTab[DealListTab["DealOpenedList"] = 0] = "DealOpenedList";
        DealListTab[DealListTab["DealClosedList"] = 1] = "DealClosedList";
    })(DealListTab = Enums.DealListTab || (Enums.DealListTab = {}));
    let ProductType;
    (function (ProductType) {
        // TODO Describe ProductType enum used in actions and thunks.
        ProductType[ProductType["PaymentAccountProduct"] = 0] = "PaymentAccountProduct";
        ProductType[ProductType["CreditProduct"] = 1] = "CreditProduct";
        ProductType[ProductType["DepositProduct"] = 2] = "DepositProduct";
        ProductType[ProductType["ContractConstructorProduct"] = 3] = "ContractConstructorProduct";
        ProductType[ProductType["PackageProduct"] = 4] = "PackageProduct";
        ProductType[ProductType["TariffPlanProduct"] = 5] = "TariffPlanProduct";
        ProductType[ProductType["CustomsPaymentProduct"] = 6] = "CustomsPaymentProduct";
        ProductType[ProductType["CurrencyControlProduct"] = 7] = "CurrencyControlProduct";
        ProductType[ProductType["EncashmentProduct"] = 8] = "EncashmentProduct";
        ProductType[ProductType["SelfEncashmentProduct"] = 9] = "SelfEncashmentProduct";
        ProductType[ProductType["CorporateCardProduct"] = 10] = "CorporateCardProduct";
        ProductType[ProductType["AcquiringProduct"] = 11] = "AcquiringProduct";
        ProductType[ProductType["BankGuaranteeProduct"] = 12] = "BankGuaranteeProduct";
        ProductType[ProductType["ContractNsoProduct"] = 13] = "ContractNsoProduct";
        ProductType[ProductType["ContractSdoProduct"] = 14] = "ContractSdoProduct";
        ProductType[ProductType["DboProduct"] = 15] = "DboProduct";
        ProductType[ProductType["CashManagementProduct"] = 16] = "CashManagementProduct";
        ProductType[ProductType["SalaryProduct"] = 17] = "SalaryProduct";
        ProductType[ProductType["None"] = 18] = "None";
        ProductType[ProductType["PrognosticProduct"] = 19] = "PrognosticProduct";
    })(ProductType = Enums.ProductType || (Enums.ProductType = {}));
    let ProductContextMode;
    (function (ProductContextMode) {
        ProductContextMode[ProductContextMode["None"] = 0] = "None";
        ProductContextMode[ProductContextMode["Notice"] = 1] = "Notice";
    })(ProductContextMode = Enums.ProductContextMode || (Enums.ProductContextMode = {}));
    let ProductEncumbranceType;
    (function (ProductEncumbranceType) {
        ProductEncumbranceType[ProductEncumbranceType["ProductCardIndexList"] = 0] = "ProductCardIndexList";
        ProductEncumbranceType[ProductEncumbranceType["ProductRestrictionList"] = 1] = "ProductRestrictionList";
    })(ProductEncumbranceType = Enums.ProductEncumbranceType || (Enums.ProductEncumbranceType = {}));
    let ProductStatus;
    (function (ProductStatus) {
        // TODO Describe ProductStatus enum used in actions and thunks.
        ProductStatus[ProductStatus["None"] = 0] = "None";
    })(ProductStatus = Enums.ProductStatus || (Enums.ProductStatus = {}));
    let ProductTableCellType;
    (function (ProductTableCellType) {
        ProductTableCellType[ProductTableCellType["None"] = 0] = "None";
        ProductTableCellType[ProductTableCellType["Sum"] = 1] = "Sum";
        ProductTableCellType[ProductTableCellType["Date"] = 2] = "Date";
        ProductTableCellType[ProductTableCellType["Text"] = 3] = "Text";
        ProductTableCellType[ProductTableCellType["Empty"] = 4] = "Empty";
        ProductTableCellType[ProductTableCellType["Subtitled"] = 5] = "Subtitled";
        ProductTableCellType[ProductTableCellType["Callback"] = 6] = "Callback";
    })(ProductTableCellType = Enums.ProductTableCellType || (Enums.ProductTableCellType = {}));
    let Currency;
    (function (Currency) {
        // TODO Describe Currency enum used in actions and thunks.
        Currency[Currency["None"] = 0] = "None";
    })(Currency = Enums.Currency || (Enums.Currency = {}));
    let ProductPaymentAccountTab;
    (function (ProductPaymentAccountTab) {
        ProductPaymentAccountTab[ProductPaymentAccountTab["Main"] = 0] = "Main";
        ProductPaymentAccountTab[ProductPaymentAccountTab["History"] = 1] = "History";
        ProductPaymentAccountTab[ProductPaymentAccountTab["Dashboard"] = 2] = "Dashboard";
    })(ProductPaymentAccountTab = Enums.ProductPaymentAccountTab || (Enums.ProductPaymentAccountTab = {}));
    let OperationType;
    (function (OperationType) {
        OperationType[OperationType["DebtAndCredit"] = 0] = "DebtAndCredit";
        OperationType[OperationType["Debt"] = 1] = "Debt";
        OperationType[OperationType["Credit"] = 2] = "Credit";
    })(OperationType = Enums.OperationType || (Enums.OperationType = {}));
    let PeriodType;
    (function (PeriodType) {
        PeriodType[PeriodType["Last5Days"] = 0] = "Last5Days";
        PeriodType[PeriodType["Last10Days"] = 1] = "Last10Days";
        PeriodType[PeriodType["Last15Days"] = 2] = "Last15Days";
        PeriodType[PeriodType["Last30Days"] = 3] = "Last30Days";
        PeriodType[PeriodType["Custom"] = 4] = "Custom";
    })(PeriodType = Enums.PeriodType || (Enums.PeriodType = {}));
    let ProductCreditTab;
    (function (ProductCreditTab) {
        ProductCreditTab[ProductCreditTab["Forecast"] = 0] = "Forecast";
        ProductCreditTab[ProductCreditTab["Planned"] = 1] = "Planned";
    })(ProductCreditTab = Enums.ProductCreditTab || (Enums.ProductCreditTab = {}));
    let ForecastEventsListRequestRefresh;
    (function (ForecastEventsListRequestRefresh) {
        ForecastEventsListRequestRefresh[ForecastEventsListRequestRefresh["ForecastEventsListRequestRefreshEnabled"] = 0] = "ForecastEventsListRequestRefreshEnabled";
    })(ForecastEventsListRequestRefresh = Enums.ForecastEventsListRequestRefresh || (Enums.ForecastEventsListRequestRefresh = {}));
    let ForecastEventPossibility;
    (function (ForecastEventPossibility) {
        // TODO Describe ForecastEventPossibility enum used in actions and thunks.
        ForecastEventPossibility[ForecastEventPossibility["None"] = 0] = "None";
        ForecastEventPossibility[ForecastEventPossibility["Possibility25"] = 1] = "Possibility25";
        ForecastEventPossibility[ForecastEventPossibility["Possibility50"] = 2] = "Possibility50";
        ForecastEventPossibility[ForecastEventPossibility["Possibility75"] = 3] = "Possibility75";
        ForecastEventPossibility[ForecastEventPossibility["Possibility100"] = 4] = "Possibility100";
    })(ForecastEventPossibility = Enums.ForecastEventPossibility || (Enums.ForecastEventPossibility = {}));
    let ForecastPeriodType;
    (function (ForecastPeriodType) {
        ForecastPeriodType[ForecastPeriodType["CreditFinish"] = 0] = "CreditFinish";
        ForecastPeriodType[ForecastPeriodType["Next30Days"] = 1] = "Next30Days";
        ForecastPeriodType[ForecastPeriodType["Next60Days"] = 2] = "Next60Days";
        ForecastPeriodType[ForecastPeriodType["Next90Days"] = 3] = "Next90Days";
        ForecastPeriodType[ForecastPeriodType["Next180Days"] = 4] = "Next180Days";
        ForecastPeriodType[ForecastPeriodType["Custom"] = 5] = "Custom";
    })(ForecastPeriodType = Enums.ForecastPeriodType || (Enums.ForecastPeriodType = {}));
    let ForecastEventEditorContextMode;
    (function (ForecastEventEditorContextMode) {
        ForecastEventEditorContextMode[ForecastEventEditorContextMode["None"] = 0] = "None";
        ForecastEventEditorContextMode[ForecastEventEditorContextMode["ForecastEventList"] = 1] = "ForecastEventList";
        ForecastEventEditorContextMode[ForecastEventEditorContextMode["ForecastEventDetail"] = 2] = "ForecastEventDetail";
        ForecastEventEditorContextMode[ForecastEventEditorContextMode["PrognosticEventList"] = 3] = "PrognosticEventList";
        ForecastEventEditorContextMode[ForecastEventEditorContextMode["PrognosticEventDetail"] = 4] = "PrognosticEventDetail";
    })(ForecastEventEditorContextMode = Enums.ForecastEventEditorContextMode || (Enums.ForecastEventEditorContextMode = {}));
    let ForecastEventErrorType;
    (function (ForecastEventErrorType) {
        ForecastEventErrorType[ForecastEventErrorType["None"] = 0] = "None";
        ForecastEventErrorType[ForecastEventErrorType["CreateError"] = 1] = "CreateError";
        ForecastEventErrorType[ForecastEventErrorType["UpdateError"] = 2] = "UpdateError";
        ForecastEventErrorType[ForecastEventErrorType["DeleteError"] = 3] = "DeleteError";
    })(ForecastEventErrorType = Enums.ForecastEventErrorType || (Enums.ForecastEventErrorType = {}));
    let GszMemberListSortingType;
    (function (GszMemberListSortingType) {
        // TODO Describe GszMemberListSortingType enum used in actions and thunks.
        GszMemberListSortingType[GszMemberListSortingType["ByName"] = 0] = "ByName";
        GszMemberListSortingType[GszMemberListSortingType["ByGroup"] = 1] = "ByGroup";
        GszMemberListSortingType[GszMemberListSortingType["ByStatus"] = 2] = "ByStatus";
    })(GszMemberListSortingType = Enums.GszMemberListSortingType || (Enums.GszMemberListSortingType = {}));
    let LimitTab;
    (function (LimitTab) {
        LimitTab[LimitTab["Total"] = 0] = "Total";
        LimitTab[LimitTab["Used"] = 1] = "Used";
        LimitTab[LimitTab["Unused"] = 2] = "Unused";
    })(LimitTab = Enums.LimitTab || (Enums.LimitTab = {}));
    let LimitTotalTab;
    (function (LimitTotalTab) {
        LimitTotalTab[LimitTotalTab["Approved"] = 0] = "Approved";
        LimitTotalTab[LimitTotalTab["Estimated"] = 1] = "Estimated";
    })(LimitTotalTab = Enums.LimitTotalTab || (Enums.LimitTotalTab = {}));
    let GenderList;
    (function (GenderList) {
        GenderList[GenderList["Female"] = 0] = "Female";
        GenderList[GenderList["Male"] = 1] = "Male";
        GenderList[GenderList["None"] = 2] = "None";
    })(GenderList = Enums.GenderList || (Enums.GenderList = {}));
    let AgentListMode;
    (function (AgentListMode) {
        AgentListMode[AgentListMode["None"] = 0] = "None";
        AgentListMode[AgentListMode["Watch"] = 1] = "Watch";
        AgentListMode[AgentListMode["Edit"] = 2] = "Edit";
    })(AgentListMode = Enums.AgentListMode || (Enums.AgentListMode = {}));
    let AgentListAccessLevel;
    (function (AgentListAccessLevel) {
        AgentListAccessLevel[AgentListAccessLevel["None"] = 0] = "None";
        AgentListAccessLevel[AgentListAccessLevel["MainMember"] = 1] = "MainMember";
        AgentListAccessLevel[AgentListAccessLevel["Write"] = 2] = "Write";
        AgentListAccessLevel[AgentListAccessLevel["Read"] = 3] = "Read";
    })(AgentListAccessLevel = Enums.AgentListAccessLevel || (Enums.AgentListAccessLevel = {}));
    let AgentListContextMode;
    (function (AgentListContextMode) {
        AgentListContextMode[AgentListContextMode["None"] = 0] = "None";
        AgentListContextMode[AgentListContextMode["Activity"] = 1] = "Activity";
        AgentListContextMode[AgentListContextMode["Scheduler"] = 2] = "Scheduler";
        AgentListContextMode[AgentListContextMode["NewEditActivity"] = 3] = "NewEditActivity";
        AgentListContextMode[AgentListContextMode["Customer"] = 4] = "Customer";
        AgentListContextMode[AgentListContextMode["Deal"] = 5] = "Deal";
        AgentListContextMode[AgentListContextMode["NewDeal"] = 6] = "NewDeal";
        AgentListContextMode[AgentListContextMode["EditDeal"] = 7] = "EditDeal";
    })(AgentListContextMode = Enums.AgentListContextMode || (Enums.AgentListContextMode = {}));
    let AgentMode;
    (function (AgentMode) {
        AgentMode[AgentMode["None"] = 0] = "None";
        AgentMode[AgentMode["Watch"] = 1] = "Watch";
        AgentMode[AgentMode["Edit"] = 2] = "Edit";
        AgentMode[AgentMode["Create"] = 3] = "Create";
    })(AgentMode = Enums.AgentMode || (Enums.AgentMode = {}));
    let NoteListContextMode;
    (function (NoteListContextMode) {
        NoteListContextMode[NoteListContextMode["None"] = 0] = "None";
        NoteListContextMode[NoteListContextMode["NewEditAgent"] = 1] = "NewEditAgent";
        NoteListContextMode[NoteListContextMode["Agent"] = 2] = "Agent";
        NoteListContextMode[NoteListContextMode["Customer"] = 3] = "Customer";
    })(NoteListContextMode = Enums.NoteListContextMode || (Enums.NoteListContextMode = {}));
    let NoteListMode;
    (function (NoteListMode) {
        NoteListMode[NoteListMode["Watch"] = 0] = "Watch";
        NoteListMode[NoteListMode["Edit"] = 1] = "Edit";
    })(NoteListMode = Enums.NoteListMode || (Enums.NoteListMode = {}));
    let NoteListAccessLevel;
    (function (NoteListAccessLevel) {
        NoteListAccessLevel[NoteListAccessLevel["Read"] = 0] = "Read";
        NoteListAccessLevel[NoteListAccessLevel["Write"] = 1] = "Write";
    })(NoteListAccessLevel = Enums.NoteListAccessLevel || (Enums.NoteListAccessLevel = {}));
    let AgentContextMode;
    (function (AgentContextMode) {
        AgentContextMode[AgentContextMode["None"] = 0] = "None";
        AgentContextMode[AgentContextMode["Customer"] = 1] = "Customer";
        AgentContextMode[AgentContextMode["OwnerAgent"] = 2] = "OwnerAgent";
        AgentContextMode[AgentContextMode["Email"] = 3] = "Email";
        AgentContextMode[AgentContextMode["AgentList"] = 4] = "AgentList";
        AgentContextMode[AgentContextMode["Activity"] = 5] = "Activity";
        AgentContextMode[AgentContextMode["Scheduler"] = 6] = "Scheduler";
        AgentContextMode[AgentContextMode["Deal"] = 7] = "Deal";
        AgentContextMode[AgentContextMode["Deal_NonLegalMember"] = 8] = "Deal_NonLegalMember";
    })(AgentContextMode = Enums.AgentContextMode || (Enums.AgentContextMode = {}));
    let CustomerContextMode;
    (function (CustomerContextMode) {
        CustomerContextMode[CustomerContextMode["None"] = 0] = "None";
        CustomerContextMode[CustomerContextMode["CustomerManaged"] = 1] = "CustomerManaged";
        CustomerContextMode[CustomerContextMode["Customer"] = 2] = "Customer";
    })(CustomerContextMode = Enums.CustomerContextMode || (Enums.CustomerContextMode = {}));
    let AgentAccessLevel;
    (function (AgentAccessLevel) {
        AgentAccessLevel[AgentAccessLevel["None"] = 0] = "None";
        AgentAccessLevel[AgentAccessLevel["MainTeamMember"] = 1] = "MainTeamMember";
        AgentAccessLevel[AgentAccessLevel["TeamMember"] = 2] = "TeamMember";
        AgentAccessLevel[AgentAccessLevel["Denied"] = 3] = "Denied";
    })(AgentAccessLevel = Enums.AgentAccessLevel || (Enums.AgentAccessLevel = {}));
    let MemberListMode;
    (function (MemberListMode) {
        MemberListMode[MemberListMode["Activity"] = 0] = "Activity";
        MemberListMode[MemberListMode["CustomerManaged"] = 1] = "CustomerManaged";
        MemberListMode[MemberListMode["Deal"] = 2] = "Deal";
        MemberListMode[MemberListMode["Gsz"] = 3] = "Gsz";
        MemberListMode[MemberListMode["Agent"] = 4] = "Agent";
        MemberListMode[MemberListMode["DealEditor"] = 5] = "DealEditor";
        MemberListMode[MemberListMode["CustomerActivityAddOrganization"] = 6] = "CustomerActivityAddOrganization";
        MemberListMode[MemberListMode["DealStageMainClientManager"] = 7] = "DealStageMainClientManager";
        MemberListMode[MemberListMode["DealStageMainCreditOfficer"] = 8] = "DealStageMainCreditOfficer";
        MemberListMode[MemberListMode["DealStageMemberMonitoring"] = 9] = "DealStageMemberMonitoring";
        MemberListMode[MemberListMode["CustomerActivityAddGSZ"] = 10] = "CustomerActivityAddGSZ";
        MemberListMode[MemberListMode["CustomerActivityRemoveGSZ"] = 11] = "CustomerActivityRemoveGSZ";
        MemberListMode[MemberListMode["CustomerActivityRemoveOrganization"] = 12] = "CustomerActivityRemoveOrganization";
    })(MemberListMode = Enums.MemberListMode || (Enums.MemberListMode = {}));
    let CacheContext;
    (function (CacheContext) {
        CacheContext[CacheContext["CreditActiveProductList"] = 0] = "CreditActiveProductList";
        CacheContext[CacheContext["SettlementAgreementActiveProductList"] = 1] = "SettlementAgreementActiveProductList";
        CacheContext[CacheContext["DepositActiveProductList"] = 2] = "DepositActiveProductList";
        CacheContext[CacheContext["CorporateCardActiveProductList"] = 3] = "CorporateCardActiveProductList";
        CacheContext[CacheContext["EncashmentContractActiveProductList"] = 4] = "EncashmentContractActiveProductList";
        CacheContext[CacheContext["LegalInfoProductList"] = 5] = "LegalInfoProductList";
        CacheContext[CacheContext["AcquiringActiveProductList"] = 6] = "AcquiringActiveProductList";
        CacheContext[CacheContext["DboActiveProductList"] = 7] = "DboActiveProductList";
        CacheContext[CacheContext["UdboActiveProductList"] = 8] = "UdboActiveProductList";
        CacheContext[CacheContext["SalaryActiveProductList"] = 9] = "SalaryActiveProductList";
        CacheContext[CacheContext["PaymentAccountCardIndexList"] = 10] = "PaymentAccountCardIndexList";
        CacheContext[CacheContext["PaymentAccountOperationList"] = 11] = "PaymentAccountOperationList";
        CacheContext[CacheContext["CreditCloseProductList"] = 12] = "CreditCloseProductList";
        CacheContext[CacheContext["SettlementAgreementCloseProductList"] = 13] = "SettlementAgreementCloseProductList";
        CacheContext[CacheContext["DepositCloseProductList"] = 14] = "DepositCloseProductList";
        CacheContext[CacheContext["CorporateCardCloseProductList"] = 15] = "CorporateCardCloseProductList";
        CacheContext[CacheContext["EncashmentContractCloseProductList"] = 16] = "EncashmentContractCloseProductList";
        CacheContext[CacheContext["AcquiringCloseProductList"] = 17] = "AcquiringCloseProductList";
        CacheContext[CacheContext["DboCloseProductList"] = 18] = "DboCloseProductList";
        CacheContext[CacheContext["UdboCloseProductList"] = 19] = "UdboCloseProductList";
        CacheContext[CacheContext["SalaryCloseProductList"] = 20] = "SalaryCloseProductList";
        CacheContext[CacheContext["None"] = 21] = "None";
    })(CacheContext = Enums.CacheContext || (Enums.CacheContext = {}));
    let CachePolicy;
    (function (CachePolicy) {
        CachePolicy[CachePolicy["Disabled"] = 0] = "Disabled";
        CachePolicy[CachePolicy["Default"] = 1] = "Default";
        CachePolicy[CachePolicy["DebugOnly"] = 2] = "DebugOnly";
    })(CachePolicy = Enums.CachePolicy || (Enums.CachePolicy = {}));
    let ErrorType;
    (function (ErrorType) {
        ErrorType[ErrorType["None"] = 0] = "None";
        ErrorType[ErrorType["NetworkError"] = 1] = "NetworkError";
        ErrorType[ErrorType["JsonParserError"] = 2] = "JsonParserError";
        ErrorType[ErrorType["JsonConverterError"] = 3] = "JsonConverterError";
        ErrorType[ErrorType["AuthorizationError"] = 4] = "AuthorizationError";
        ErrorType[ErrorType["EksProductError"] = 5] = "EksProductError";
        ErrorType[ErrorType["SystemError"] = 6] = "SystemError";
        ErrorType[ErrorType["PathUrlError"] = 7] = "PathUrlError";
        ErrorType[ErrorType["Unknown"] = 8] = "Unknown";
    })(ErrorType = Enums.ErrorType || (Enums.ErrorType = {}));
    let Navigation;
    (function (Navigation) {
        Navigation[Navigation["AppCRM"] = 0] = "AppCRM";
        Navigation[Navigation["AppCRMLimitOld"] = 1] = "AppCRMLimitOld";
        Navigation[Navigation["AppCRM_DealEditor"] = 2] = "AppCRM_DealEditor";
        Navigation[Navigation["AppCRM_DealEditor_Form"] = 3] = "AppCRM_DealEditor_Form";
        Navigation[Navigation["AppCRM_Navigation_Panel"] = 4] = "AppCRM_Navigation_Panel";
    })(Navigation = Enums.Navigation || (Enums.Navigation = {}));
    let NavigationViewCustomerEditorMain;
    (function (NavigationViewCustomerEditorMain) {
        NavigationViewCustomerEditorMain[NavigationViewCustomerEditorMain["AppCRM_CustomerEditor"] = 0] = "AppCRM_CustomerEditor";
        NavigationViewCustomerEditorMain[NavigationViewCustomerEditorMain["AppCRM_CustomerEditor_Form"] = 1] = "AppCRM_CustomerEditor_Form";
    })(NavigationViewCustomerEditorMain = Enums.NavigationViewCustomerEditorMain || (Enums.NavigationViewCustomerEditorMain = {}));
    let NavigationViewCustomerEditorStep;
    (function (NavigationViewCustomerEditorStep) {
        NavigationViewCustomerEditorStep[NavigationViewCustomerEditorStep["AppCRM_CustomerEditor_Address"] = 0] = "AppCRM_CustomerEditor_Address";
        NavigationViewCustomerEditorStep[NavigationViewCustomerEditorStep["AppCRM_CustomerEditor_View"] = 1] = "AppCRM_CustomerEditor_View";
    })(NavigationViewCustomerEditorStep = Enums.NavigationViewCustomerEditorStep || (Enums.NavigationViewCustomerEditorStep = {}));
    let NavigationViewCustomerEditor;
    (function (NavigationViewCustomerEditor) {
        NavigationViewCustomerEditor[NavigationViewCustomerEditor["AppCRM_CustomerEditor_View"] = 0] = "AppCRM_CustomerEditor_View";
        NavigationViewCustomerEditor[NavigationViewCustomerEditor["AppCRM_CustomerEditor_Country"] = 1] = "AppCRM_CustomerEditor_Country";
    })(NavigationViewCustomerEditor = Enums.NavigationViewCustomerEditor || (Enums.NavigationViewCustomerEditor = {}));
    let NavigationCustomerEditorIncludeExclude;
    (function (NavigationCustomerEditorIncludeExclude) {
        NavigationCustomerEditorIncludeExclude[NavigationCustomerEditorIncludeExclude["AppCRM_CustomerEditor_IncludeExclude_Empty"] = 0] = "AppCRM_CustomerEditor_IncludeExclude_Empty";
        NavigationCustomerEditorIncludeExclude[NavigationCustomerEditorIncludeExclude["AppCRM_CustomerEditor_Include"] = 1] = "AppCRM_CustomerEditor_Include";
        NavigationCustomerEditorIncludeExclude[NavigationCustomerEditorIncludeExclude["AppCRM_CustomerEditor_Exclude"] = 2] = "AppCRM_CustomerEditor_Exclude";
    })(NavigationCustomerEditorIncludeExclude = Enums.NavigationCustomerEditorIncludeExclude || (Enums.NavigationCustomerEditorIncludeExclude = {}));
    let NavigationCustomerAccessory;
    (function (NavigationCustomerAccessory) {
        NavigationCustomerAccessory[NavigationCustomerAccessory["AppCRM_CustomerEditor_IncludeExclude_Empty"] = 0] = "AppCRM_CustomerEditor_IncludeExclude_Empty";
        NavigationCustomerAccessory[NavigationCustomerAccessory["AppCRM_CustomerEditor_Include"] = 1] = "AppCRM_CustomerEditor_Include";
        NavigationCustomerAccessory[NavigationCustomerAccessory["AppCRM_CustomerEditor_Exclude"] = 2] = "AppCRM_CustomerEditor_Exclude";
        NavigationCustomerAccessory[NavigationCustomerAccessory["AppCRM_CustomerEditor_Access"] = 3] = "AppCRM_CustomerEditor_Access";
    })(NavigationCustomerAccessory = Enums.NavigationCustomerAccessory || (Enums.NavigationCustomerAccessory = {}));
    let NavigationCustomerEditInIncludeExcludeOrganization;
    (function (NavigationCustomerEditInIncludeExcludeOrganization) {
        NavigationCustomerEditInIncludeExcludeOrganization[NavigationCustomerEditInIncludeExcludeOrganization["EditorContainer"] = 0] = "EditorContainer";
        NavigationCustomerEditInIncludeExcludeOrganization[NavigationCustomerEditInIncludeExcludeOrganization["CustomerEditor_Include_View"] = 1] = "CustomerEditor_Include_View";
        NavigationCustomerEditInIncludeExcludeOrganization[NavigationCustomerEditInIncludeExcludeOrganization["CustomerEditor_Exclude_View"] = 2] = "CustomerEditor_Exclude_View";
    })(NavigationCustomerEditInIncludeExcludeOrganization = Enums.NavigationCustomerEditInIncludeExcludeOrganization || (Enums.NavigationCustomerEditInIncludeExcludeOrganization = {}));
    let NavigationGszEditInIncludeExcludeOrganization;
    (function (NavigationGszEditInIncludeExcludeOrganization) {
        NavigationGszEditInIncludeExcludeOrganization[NavigationGszEditInIncludeExcludeOrganization["Gsz_EditorContainer"] = 0] = "Gsz_EditorContainer";
        NavigationGszEditInIncludeExcludeOrganization[NavigationGszEditInIncludeExcludeOrganization["Gsz_CustomerEditor_Include_View"] = 1] = "Gsz_CustomerEditor_Include_View";
        NavigationGszEditInIncludeExcludeOrganization[NavigationGszEditInIncludeExcludeOrganization["Gsz_CustomerEditor_Exclude_View"] = 2] = "Gsz_CustomerEditor_Exclude_View";
    })(NavigationGszEditInIncludeExcludeOrganization = Enums.NavigationGszEditInIncludeExcludeOrganization || (Enums.NavigationGszEditInIncludeExcludeOrganization = {}));
    let NavigationIntoExcludeIncludeView;
    (function (NavigationIntoExcludeIncludeView) {
        NavigationIntoExcludeIncludeView[NavigationIntoExcludeIncludeView["IncludeExclude_View"] = 0] = "IncludeExclude_View";
        NavigationIntoExcludeIncludeView[NavigationIntoExcludeIncludeView["IncludeExclude_ClientsSearch"] = 1] = "IncludeExclude_ClientsSearch";
        NavigationIntoExcludeIncludeView[NavigationIntoExcludeIncludeView["IncludeExclude_MemberList"] = 2] = "IncludeExclude_MemberList";
    })(NavigationIntoExcludeIncludeView = Enums.NavigationIntoExcludeIncludeView || (Enums.NavigationIntoExcludeIncludeView = {}));
    let NavigationGSZInIncludeExcludeOrganization;
    (function (NavigationGSZInIncludeExcludeOrganization) {
        NavigationGSZInIncludeExcludeOrganization[NavigationGSZInIncludeExcludeOrganization["GSZ_Buttons"] = 0] = "GSZ_Buttons";
        NavigationGSZInIncludeExcludeOrganization[NavigationGSZInIncludeExcludeOrganization["GSZ_Include_View"] = 3] = "GSZ_Include_View";
        NavigationGSZInIncludeExcludeOrganization[NavigationGSZInIncludeExcludeOrganization["GSZ_Exclude_View"] = 4] = "GSZ_Exclude_View";
    })(NavigationGSZInIncludeExcludeOrganization = Enums.NavigationGSZInIncludeExcludeOrganization || (Enums.NavigationGSZInIncludeExcludeOrganization = {}));
    let NavigationIntoGSZExcludeIncludeView;
    (function (NavigationIntoGSZExcludeIncludeView) {
        NavigationIntoGSZExcludeIncludeView[NavigationIntoGSZExcludeIncludeView["IncludeExclude_View"] = 0] = "IncludeExclude_View";
        NavigationIntoGSZExcludeIncludeView[NavigationIntoGSZExcludeIncludeView["IncludeExclude_ClientsSearch"] = 1] = "IncludeExclude_ClientsSearch";
    })(NavigationIntoGSZExcludeIncludeView = Enums.NavigationIntoGSZExcludeIncludeView || (Enums.NavigationIntoGSZExcludeIncludeView = {}));
    let NavigationContentAppCrm;
    (function (NavigationContentAppCrm) {
        // значение enum соответствует порядковому номеру Page в SplitPanel AppCRM (файл ViewAppCrm)
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_CustomerList"] = 0] = "AppCRM_CustomerList";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_Customer"] = 1] = "AppCRM_Customer";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_GSZ"] = 2] = "AppCRM_GSZ";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_ProductList"] = 3] = "AppCRM_ProductList";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_Deal"] = 4] = "AppCRM_Deal";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_DealEditor"] = 5] = "AppCRM_DealEditor";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_LimitDetails"] = 6] = "AppCRM_LimitDetails";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_OccasionList"] = 7] = "AppCRM_OccasionList";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_Product"] = 8] = "AppCRM_Product";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_AgentList"] = 9] = "AppCRM_AgentList";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_Agent"] = 10] = "AppCRM_Agent";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_DealScreen_Attachments"] = 11] = "AppCRM_DealScreen_Attachments";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_CreditProductForecastDealInfo"] = 12] = "AppCRM_CreditProductForecastDealInfo";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_MemberList"] = 13] = "AppCRM_MemberList";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_DealStage"] = 14] = "AppCRM_DealStage";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_ParentDealPicker"] = 15] = "AppCRM_ParentDealPicker";
        NavigationContentAppCrm[NavigationContentAppCrm["AppCRM_CreditProductForecastProductInfo"] = 16] = "AppCRM_CreditProductForecastProductInfo";
    })(NavigationContentAppCrm = Enums.NavigationContentAppCrm || (Enums.NavigationContentAppCrm = {}));
    let NavigationContentDealStage;
    (function (NavigationContentDealStage) {
        NavigationContentDealStage[NavigationContentDealStage["DealStage"] = 0] = "DealStage";
        NavigationContentDealStage[NavigationContentDealStage["AdditionalFields"] = 1] = "AdditionalFields";
        NavigationContentDealStage[NavigationContentDealStage["StageDetails"] = 2] = "StageDetails";
        NavigationContentDealStage[NavigationContentDealStage["StageEditor"] = 3] = "StageEditor";
        NavigationContentDealStage[NavigationContentDealStage["Currency"] = 4] = "Currency";
        NavigationContentDealStage[NavigationContentDealStage["MemberList"] = 5] = "MemberList";
    })(NavigationContentDealStage = Enums.NavigationContentDealStage || (Enums.NavigationContentDealStage = {}));
    let NavigationContentAppCrmDealRoadMapPopover;
    (function (NavigationContentAppCrmDealRoadMapPopover) {
        NavigationContentAppCrmDealRoadMapPopover[NavigationContentAppCrmDealRoadMapPopover["AppCrmDealRoadMapPopover_Zero"] = 10] = "AppCrmDealRoadMapPopover_Zero";
        NavigationContentAppCrmDealRoadMapPopover[NavigationContentAppCrmDealRoadMapPopover["AppCrmDealRoadMapPopover_AreYouSure"] = 0] = "AppCrmDealRoadMapPopover_AreYouSure";
        NavigationContentAppCrmDealRoadMapPopover[NavigationContentAppCrmDealRoadMapPopover["AppCrmDealRoadMapPopover_YesDoIt"] = 1] = "AppCrmDealRoadMapPopover_YesDoIt";
    })(NavigationContentAppCrmDealRoadMapPopover = Enums.NavigationContentAppCrmDealRoadMapPopover || (Enums.NavigationContentAppCrmDealRoadMapPopover = {}));
    let NavigationContentAppCrmDealConfirmSaveStagePopover;
    (function (NavigationContentAppCrmDealConfirmSaveStagePopover) {
        NavigationContentAppCrmDealConfirmSaveStagePopover[NavigationContentAppCrmDealConfirmSaveStagePopover["AppCrmDealRoadMapPopover_Zero"] = 10] = "AppCrmDealRoadMapPopover_Zero";
        NavigationContentAppCrmDealConfirmSaveStagePopover[NavigationContentAppCrmDealConfirmSaveStagePopover["AppCrmDealRoadMapPopover_AreYouSure"] = 0] = "AppCrmDealRoadMapPopover_AreYouSure";
        NavigationContentAppCrmDealConfirmSaveStagePopover[NavigationContentAppCrmDealConfirmSaveStagePopover["AppCrmDealRoadMapPopover_YesDoIt"] = 1] = "AppCrmDealRoadMapPopover_YesDoIt";
    })(NavigationContentAppCrmDealConfirmSaveStagePopover = Enums.NavigationContentAppCrmDealConfirmSaveStagePopover || (Enums.NavigationContentAppCrmDealConfirmSaveStagePopover = {}));
    let NavigationPopoverContentDealListFilters;
    (function (NavigationPopoverContentDealListFilters) {
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_Main"] = 0] = "DealListFilters_Main";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_Stage"] = 1] = "DealListFilters_Stage";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_Role"] = 2] = "DealListFilters_Role";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_Product"] = 3] = "DealListFilters_Product";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_Currency"] = 4] = "DealListFilters_Currency";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_DateFrom"] = 5] = "DealListFilters_DateFrom";
        NavigationPopoverContentDealListFilters[NavigationPopoverContentDealListFilters["DealListFilters_DateTo"] = 6] = "DealListFilters_DateTo";
    })(NavigationPopoverContentDealListFilters = Enums.NavigationPopoverContentDealListFilters || (Enums.NavigationPopoverContentDealListFilters = {}));
    /* Product List navigation */
    let NavigationAppCRMProductList;
    (function (NavigationAppCRMProductList) {
        NavigationAppCRMProductList[NavigationAppCRMProductList["AppCRM_ProductList"] = 0] = "AppCRM_ProductList";
        NavigationAppCRMProductList[NavigationAppCRMProductList["AppCRM_ProductContainer"] = 1] = "AppCRM_ProductContainer";
        NavigationAppCRMProductList[NavigationAppCRMProductList["AppCRM_ProductListWithFilterList"] = 2] = "AppCRM_ProductListWithFilterList";
        NavigationAppCRMProductList[NavigationAppCRMProductList["AppCRM_CreditProductForecastDealInfo"] = 3] = "AppCRM_CreditProductForecastDealInfo";
    })(NavigationAppCRMProductList = Enums.NavigationAppCRMProductList || (Enums.NavigationAppCRMProductList = {}));
    /* Product List navigation end*/
    /* CreditProduct navigation */
    let NavigationAppCRMCreditProduct;
    (function (NavigationAppCRMCreditProduct) {
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProduct"] = 0] = "AppCRM_CreditProduct";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductForecastPage"] = 1] = "AppCRM_CreditProductForecastPage";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductEventDetailsPage"] = 2] = "AppCRM_CreditProductEventDetailsPage";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductEventCreatePage"] = 3] = "AppCRM_CreditProductEventCreatePage";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductEventEditPage"] = 4] = "AppCRM_CreditProductEventEditPage";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductPaymentSchedule"] = 5] = "AppCRM_CreditProductPaymentSchedule";
        NavigationAppCRMCreditProduct[NavigationAppCRMCreditProduct["AppCRM_CreditProductCovenantList"] = 6] = "AppCRM_CreditProductCovenantList";
    })(NavigationAppCRMCreditProduct = Enums.NavigationAppCRMCreditProduct || (Enums.NavigationAppCRMCreditProduct = {}));
    /* CreditProduct navigation end */
    /* PrognosticCreditProduct navigation */
    let NavigationAppCRMPrognosticCreditProduct;
    (function (NavigationAppCRMPrognosticCreditProduct) {
        NavigationAppCRMPrognosticCreditProduct[NavigationAppCRMPrognosticCreditProduct["AppCRM_PrognosticCreditProduct"] = 0] = "AppCRM_PrognosticCreditProduct";
        NavigationAppCRMPrognosticCreditProduct[NavigationAppCRMPrognosticCreditProduct["AppCRM_PrognosticCreditProductDetailPage"] = 1] = "AppCRM_PrognosticCreditProductDetailPage";
        NavigationAppCRMPrognosticCreditProduct[NavigationAppCRMPrognosticCreditProduct["AppCRM_PrognosticCreditProductCreatePage"] = 2] = "AppCRM_PrognosticCreditProductCreatePage";
        NavigationAppCRMPrognosticCreditProduct[NavigationAppCRMPrognosticCreditProduct["AppCRM_PrognosticCreditProductUpdatePage"] = 3] = "AppCRM_PrognosticCreditProductUpdatePage";
    })(NavigationAppCRMPrognosticCreditProduct = Enums.NavigationAppCRMPrognosticCreditProduct || (Enums.NavigationAppCRMPrognosticCreditProduct = {}));
    /* PrognosticCreditProduct navigation end */
    /* CreditForecastEventPopup navigation */
    let NavigationAppCRMCreditProduct_CreateEventPopup;
    (function (NavigationAppCRMCreditProduct_CreateEventPopup) {
        NavigationAppCRMCreditProduct_CreateEventPopup[NavigationAppCRMCreditProduct_CreateEventPopup["AppCRM_CreateEditEvent"] = 0] = "AppCRM_CreateEditEvent";
        NavigationAppCRMCreditProduct_CreateEventPopup[NavigationAppCRMCreditProduct_CreateEventPopup["AppCRM_EventTypeChoice"] = 1] = "AppCRM_EventTypeChoice";
        NavigationAppCRMCreditProduct_CreateEventPopup[NavigationAppCRMCreditProduct_CreateEventPopup["AppCRM_EventPossibilityChoice"] = 2] = "AppCRM_EventPossibilityChoice";
        NavigationAppCRMCreditProduct_CreateEventPopup[NavigationAppCRMCreditProduct_CreateEventPopup["AppCRM_EventCurrencyChoice"] = 3] = "AppCRM_EventCurrencyChoice";
    })(NavigationAppCRMCreditProduct_CreateEventPopup = Enums.NavigationAppCRMCreditProduct_CreateEventPopup || (Enums.NavigationAppCRMCreditProduct_CreateEventPopup = {}));
    /* CreditForecastEventPopup navigation end */
    /* CreditForecastEventFilterPopup navigation */
    let NavigationAppCRMCreditForecastEvent_Filter;
    (function (NavigationAppCRMCreditForecastEvent_Filter) {
        NavigationAppCRMCreditForecastEvent_Filter[NavigationAppCRMCreditForecastEvent_Filter["AppCRM_Filter"] = 0] = "AppCRM_Filter";
        NavigationAppCRMCreditForecastEvent_Filter[NavigationAppCRMCreditForecastEvent_Filter["AppCRM_PeriodChoice"] = 1] = "AppCRM_PeriodChoice";
        NavigationAppCRMCreditForecastEvent_Filter[NavigationAppCRMCreditForecastEvent_Filter["AppCRM_PeriodCustomDateChoice"] = 2] = "AppCRM_PeriodCustomDateChoice";
        NavigationAppCRMCreditForecastEvent_Filter[NavigationAppCRMCreditForecastEvent_Filter["AppCRM_EventType"] = 3] = "AppCRM_EventType";
    })(NavigationAppCRMCreditForecastEvent_Filter = Enums.NavigationAppCRMCreditForecastEvent_Filter || (Enums.NavigationAppCRMCreditForecastEvent_Filter = {}));
    /* CreditForecastEventFilterPopup navigation end */
    /* ForecastEventEditor navigation */
    let NavigationAppCRMForecastEventEditor;
    (function (NavigationAppCRMForecastEventEditor) {
        NavigationAppCRMForecastEventEditor[NavigationAppCRMForecastEventEditor["AppCRM_ForecastEventEditorForm"] = 0] = "AppCRM_ForecastEventEditorForm";
        NavigationAppCRMForecastEventEditor[NavigationAppCRMForecastEventEditor["AppCRM_ForecastEventEditorType"] = 1] = "AppCRM_ForecastEventEditorType";
        NavigationAppCRMForecastEventEditor[NavigationAppCRMForecastEventEditor["AppCRM_ForecastEventEditorCurrency"] = 2] = "AppCRM_ForecastEventEditorCurrency";
    })(NavigationAppCRMForecastEventEditor = Enums.NavigationAppCRMForecastEventEditor || (Enums.NavigationAppCRMForecastEventEditor = {}));
    /* ForecastEventEditor navigation end */
    /* Product List Agreement Status */
    let ProductListAgreementStatus;
    (function (ProductListAgreementStatus) {
        ProductListAgreementStatus[ProductListAgreementStatus["Opened"] = 0] = "Opened";
        ProductListAgreementStatus[ProductListAgreementStatus["Closed"] = 1] = "Closed";
        ProductListAgreementStatus[ProductListAgreementStatus["Prognostic"] = 2] = "Prognostic";
    })(ProductListAgreementStatus = Enums.ProductListAgreementStatus || (Enums.ProductListAgreementStatus = {}));
    /* Product List navigation end*/
    /* Agent List navigation */
    let NavigationAppCRMAgentList;
    (function (NavigationAppCRMAgentList) {
        NavigationAppCRMAgentList[NavigationAppCRMAgentList["AgentList"] = 0] = "AgentList";
        NavigationAppCRMAgentList[NavigationAppCRMAgentList["AgentPrincipalSelect"] = 1] = "AgentPrincipalSelect";
        NavigationAppCRMAgentList[NavigationAppCRMAgentList["AgentSearch"] = 2] = "AgentSearch";
        NavigationAppCRMAgentList[NavigationAppCRMAgentList["AgentPositionSelect"] = 3] = "AgentPositionSelect";
    })(NavigationAppCRMAgentList = Enums.NavigationAppCRMAgentList || (Enums.NavigationAppCRMAgentList = {}));
    let NavigationAppCRM;
    (function (NavigationAppCRM) {
        NavigationAppCRM[NavigationAppCRM["AgentListScreen"] = 0] = "AgentListScreen";
        NavigationAppCRM[NavigationAppCRM["AgentScreen"] = 1] = "AgentScreen";
        NavigationAppCRM[NavigationAppCRM["CustomerScreen"] = 2] = "CustomerScreen";
        NavigationAppCRM[NavigationAppCRM["OccasionListScreen"] = 3] = "OccasionListScreen";
        NavigationAppCRM[NavigationAppCRM["OccasionScreen"] = 4] = "OccasionScreen";
        NavigationAppCRM[NavigationAppCRM["NoteScreen"] = 5] = "NoteScreen";
        NavigationAppCRM[NavigationAppCRM["NoteListScreen"] = 6] = "NoteListScreen";
        NavigationAppCRM[NavigationAppCRM["MemberListScreen"] = 7] = "MemberListScreen";
    })(NavigationAppCRM = Enums.NavigationAppCRM || (Enums.NavigationAppCRM = {}));
    let NavigationAppCRMOccasion;
    (function (NavigationAppCRMOccasion) {
        NavigationAppCRMOccasion[NavigationAppCRMOccasion["AgentScreen"] = 0] = "AgentScreen";
        NavigationAppCRMOccasion[NavigationAppCRMOccasion["AgentNoteList"] = 1] = "AgentNoteList";
        NavigationAppCRMOccasion[NavigationAppCRMOccasion["AgentOccasionList"] = 2] = "AgentOccasionList";
        NavigationAppCRMOccasion[NavigationAppCRMOccasion["AgentPositionChoiceList"] = 3] = "AgentPositionChoiceList";
        NavigationAppCRMOccasion[NavigationAppCRMOccasion["AgentRelationTypeChoiceList"] = 4] = "AgentRelationTypeChoiceList";
    })(NavigationAppCRMOccasion = Enums.NavigationAppCRMOccasion || (Enums.NavigationAppCRMOccasion = {}));
    let NavigationAppCRMAgent;
    (function (NavigationAppCRMAgent) {
        NavigationAppCRMAgent[NavigationAppCRMAgent["AgentScreen"] = 0] = "AgentScreen";
        NavigationAppCRMAgent[NavigationAppCRMAgent["AgentNoteList"] = 1] = "AgentNoteList";
        NavigationAppCRMAgent[NavigationAppCRMAgent["AgentOccasionList"] = 2] = "AgentOccasionList";
        NavigationAppCRMAgent[NavigationAppCRMAgent["AgentPositionChoiceList"] = 3] = "AgentPositionChoiceList";
        NavigationAppCRMAgent[NavigationAppCRMAgent["AgentRelationTypeChoiceList"] = 4] = "AgentRelationTypeChoiceList";
    })(NavigationAppCRMAgent = Enums.NavigationAppCRMAgent || (Enums.NavigationAppCRMAgent = {}));
    let OccasionValidationAttribute;
    (function (OccasionValidationAttribute) {
        OccasionValidationAttribute[OccasionValidationAttribute["Date"] = 0] = "Date";
        OccasionValidationAttribute[OccasionValidationAttribute["Type"] = 1] = "Type";
    })(OccasionValidationAttribute = Enums.OccasionValidationAttribute || (Enums.OccasionValidationAttribute = {}));
    let AgentValidationAttribute;
    (function (AgentValidationAttribute) {
        AgentValidationAttribute[AgentValidationAttribute["FirstName"] = 0] = "FirstName";
        AgentValidationAttribute[AgentValidationAttribute["LastName"] = 1] = "LastName";
        AgentValidationAttribute[AgentValidationAttribute["MiddleName"] = 2] = "MiddleName";
        AgentValidationAttribute[AgentValidationAttribute["Position"] = 3] = "Position";
        AgentValidationAttribute[AgentValidationAttribute["RelationType"] = 4] = "RelationType";
        AgentValidationAttribute[AgentValidationAttribute["MobileNumber"] = 5] = "MobileNumber";
        AgentValidationAttribute[AgentValidationAttribute["WorkNumber"] = 6] = "WorkNumber";
        AgentValidationAttribute[AgentValidationAttribute["Email"] = 7] = "Email";
        AgentValidationAttribute[AgentValidationAttribute["Comment"] = 8] = "Comment";
        AgentValidationAttribute[AgentValidationAttribute["Gender"] = 9] = "Gender";
        AgentValidationAttribute[AgentValidationAttribute["Birthday"] = 10] = "Birthday";
        AgentValidationAttribute[AgentValidationAttribute["MobileNumberWithoutSeven"] = 11] = "MobileNumberWithoutSeven";
        AgentValidationAttribute[AgentValidationAttribute["WorkNumberWithSeven"] = 12] = "WorkNumberWithSeven";
    })(AgentValidationAttribute = Enums.AgentValidationAttribute || (Enums.AgentValidationAttribute = {}));
    let NavigationContentAgentList;
    (function (NavigationContentAgentList) {
        NavigationContentAgentList[NavigationContentAgentList["AgentList"] = 0] = "AgentList";
        NavigationContentAgentList[NavigationContentAgentList["AgentListPrincipalPicker"] = 1] = "AgentListPrincipalPicker";
        NavigationContentAgentList[NavigationContentAgentList["AgentListSearchAgent"] = 2] = "AgentListSearchAgent";
        NavigationContentAgentList[NavigationContentAgentList["AgentListRoleSelect"] = 3] = "AgentListRoleSelect";
        NavigationContentAgentList[NavigationContentAgentList["AgentListAgentAdd"] = 4] = "AgentListAgentAdd";
    })(NavigationContentAgentList = Enums.NavigationContentAgentList || (Enums.NavigationContentAgentList = {}));
    let NavigationContentAgentCard;
    (function (NavigationContentAgentCard) {
        NavigationContentAgentCard[NavigationContentAgentCard["AgentScreen"] = 0] = "AgentScreen";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentNoteList"] = 1] = "AgentNoteList";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentOccasionList"] = 2] = "AgentOccasionList";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentCustomerJobPicker"] = 3] = "AgentCustomerJobPicker";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentRelationTypeChoice"] = 4] = "AgentRelationTypeChoice";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentCustomerCompaniesList"] = 5] = "AgentCustomerCompaniesList";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentComment"] = 6] = "AgentComment";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentEmployee"] = 7] = "AgentEmployee";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentActivity"] = 8] = "AgentActivity";
        NavigationContentAgentCard[NavigationContentAgentCard["AgentMemberList"] = 9] = "AgentMemberList";
    })(NavigationContentAgentCard = Enums.NavigationContentAgentCard || (Enums.NavigationContentAgentCard = {}));
    let NavigationContentNoteList;
    (function (NavigationContentNoteList) {
        NavigationContentNoteList[NavigationContentNoteList["AgentNoteList"] = 0] = "AgentNoteList";
        NavigationContentNoteList[NavigationContentNoteList["AgentNoteView"] = 1] = "AgentNoteView";
    })(NavigationContentNoteList = Enums.NavigationContentNoteList || (Enums.NavigationContentNoteList = {}));
    let NavigationContentNoteScreen;
    (function (NavigationContentNoteScreen) {
        NavigationContentNoteScreen[NavigationContentNoteScreen["AgentNoteScreen"] = 0] = "AgentNoteScreen";
        NavigationContentNoteScreen[NavigationContentNoteScreen["AgentNoteTypeList"] = 1] = "AgentNoteTypeList";
    })(NavigationContentNoteScreen = Enums.NavigationContentNoteScreen || (Enums.NavigationContentNoteScreen = {}));
    let NavigationContentOccasionList;
    (function (NavigationContentOccasionList) {
        NavigationContentOccasionList[NavigationContentOccasionList["OccasionList"] = 0] = "OccasionList";
        NavigationContentOccasionList[NavigationContentOccasionList["OccasionCard"] = 1] = "OccasionCard";
    })(NavigationContentOccasionList = Enums.NavigationContentOccasionList || (Enums.NavigationContentOccasionList = {}));
    let NavigationContentOccasionCard;
    (function (NavigationContentOccasionCard) {
        NavigationContentOccasionCard[NavigationContentOccasionCard["OccasionCard"] = 0] = "OccasionCard";
        NavigationContentOccasionCard[NavigationContentOccasionCard["OccasionTypeList"] = 1] = "OccasionTypeList";
    })(NavigationContentOccasionCard = Enums.NavigationContentOccasionCard || (Enums.NavigationContentOccasionCard = {}));
    /* End of Agent List navigation */
    let NavigationContentAppCrm_Customer_Owners;
    (function (NavigationContentAppCrm_Customer_Owners) {
        NavigationContentAppCrm_Customer_Owners[NavigationContentAppCrm_Customer_Owners["AppCRM_Customer_OwnerList"] = 0] = "AppCRM_Customer_OwnerList";
        NavigationContentAppCrm_Customer_Owners[NavigationContentAppCrm_Customer_Owners["AppCRM_Customer_OwnerList_Agents"] = 1] = "AppCRM_Customer_OwnerList_Agents";
    })(NavigationContentAppCrm_Customer_Owners = Enums.NavigationContentAppCrm_Customer_Owners || (Enums.NavigationContentAppCrm_Customer_Owners = {}));
    let NavigationContentAppCrmGszBorrowers;
    (function (NavigationContentAppCrmGszBorrowers) {
        NavigationContentAppCrmGszBorrowers[NavigationContentAppCrmGszBorrowers["AppCRM_GSZ_Borrowers"] = 0] = "AppCRM_GSZ_Borrowers";
        NavigationContentAppCrmGszBorrowers[NavigationContentAppCrmGszBorrowers["AppCRM_GSZ_BorrowersDetails"] = 1] = "AppCRM_GSZ_BorrowersDetails";
    })(NavigationContentAppCrmGszBorrowers = Enums.NavigationContentAppCrmGszBorrowers || (Enums.NavigationContentAppCrmGszBorrowers = {}));
    let NavigationContentAppCrmDealScreen;
    (function (NavigationContentAppCrmDealScreen) {
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen"] = 0] = "AppCRM_DealScreen";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Products"] = 1] = "AppCRM_DealScreen_Products";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Phase"] = 2] = "AppCRM_DealScreen_Phase";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Comments"] = 3] = "AppCRM_DealScreen_Comments";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_CloseReason"] = 4] = "AppCRM_DealScreen_CloseReason";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Agreement"] = 5] = "AppCRM_DealScreen_Agreement";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Solution"] = 6] = "AppCRM_DealScreen_Solution";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Members"] = 7] = "AppCRM_DealScreen_Members";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Employee"] = 8] = "AppCRM_DealScreen_Employee";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_DealEditor"] = 9] = "AppCRM_DealScreen_DealEditor";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_Activity"] = 10] = "AppCRM_DealScreen_Activity";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_StageDetails"] = 11] = "AppCRM_DealScreen_StageDetails";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_StageEditor"] = 12] = "AppCRM_DealScreen_StageEditor";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_DealNonLegalMemberList"] = 13] = "AppCRM_DealScreen_DealNonLegalMemberList";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_DealStages"] = 14] = "AppCRM_DealScreen_DealStages";
        NavigationContentAppCrmDealScreen[NavigationContentAppCrmDealScreen["AppCRM_DealScreen_DealNonLegalMemberCard"] = 15] = "AppCRM_DealScreen_DealNonLegalMemberCard";
        // AppCRM_DealScreen_Attachments = 15, - нет там уже аттачментов, сломали
    })(NavigationContentAppCrmDealScreen = Enums.NavigationContentAppCrmDealScreen || (Enums.NavigationContentAppCrmDealScreen = {}));
    let NavigationContentAppCrmDealEditor;
    (function (NavigationContentAppCrmDealEditor) {
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_Form"] = 0] = "AppCRM_DealEditor_Form";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_ClassifierProduct"] = 1] = "AppCRM_DealEditor_ClassifierProduct";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_ClassifierSalesMethod"] = 2] = "AppCRM_DealEditor_ClassifierSalesMethod";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_AdditionalStep"] = 3] = "AppCRM_DealEditor_AdditionalStep";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_ClassifierCurrency"] = 4] = "AppCRM_DealEditor_ClassifierCurrency";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_RelatedActivity"] = 5] = "AppCRM_DealEditor_RelatedActivity";
        NavigationContentAppCrmDealEditor[NavigationContentAppCrmDealEditor["AppCRM_DealEditor_Preview"] = 6] = "AppCRM_DealEditor_Preview";
    })(NavigationContentAppCrmDealEditor = Enums.NavigationContentAppCrmDealEditor || (Enums.NavigationContentAppCrmDealEditor = {}));
    let NavigationContentDealEditor;
    (function (NavigationContentDealEditor) {
        NavigationContentDealEditor[NavigationContentDealEditor["DealEditor"] = 0] = "DealEditor";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_ClassifierProduct"] = 1] = "AppCRM_DealEditor_ClassifierProduct";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_ClassifierSalesMethod"] = 2] = "AppCRM_DealEditor_ClassifierSalesMethod";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_ClassifierCurrency"] = 3] = "AppCRM_DealEditor_ClassifierCurrency";
        NavigationContentDealEditor[NavigationContentDealEditor["DealEditor_Members"] = 4] = "DealEditor_Members";
        NavigationContentDealEditor[NavigationContentDealEditor["DealEditorActivity"] = 5] = "DealEditorActivity";
        NavigationContentDealEditor[NavigationContentDealEditor["DealEditorEmploee"] = 6] = "DealEditorEmploee";
        NavigationContentDealEditor[NavigationContentDealEditor["DealEditorActivity1"] = 7] = "DealEditorActivity1";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_ClassifierDealType"] = 8] = "AppCRM_DealEditor_ClassifierDealType";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_ParentDealPicker"] = 9] = "AppCRM_DealEditor_ParentDealPicker";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_CampaignPicker"] = 10] = "AppCRM_DealEditor_CampaignPicker";
        NavigationContentDealEditor[NavigationContentDealEditor["AppCRM_DealEditor_AgentsPicker"] = 11] = "AppCRM_DealEditor_AgentsPicker";
    })(NavigationContentDealEditor = Enums.NavigationContentDealEditor || (Enums.NavigationContentDealEditor = {}));
    let NavigationContentParentDealPicker;
    (function (NavigationContentParentDealPicker) {
        NavigationContentParentDealPicker[NavigationContentParentDealPicker["CustomerPickerScreen"] = 0] = "CustomerPickerScreen";
        NavigationContentParentDealPicker[NavigationContentParentDealPicker["DealPickerScreen"] = 1] = "DealPickerScreen";
    })(NavigationContentParentDealPicker = Enums.NavigationContentParentDealPicker || (Enums.NavigationContentParentDealPicker = {}));
    let NavigationContentAppCrmDealEditorForm;
    (function (NavigationContentAppCrmDealEditorForm) {
        NavigationContentAppCrmDealEditorForm[NavigationContentAppCrmDealEditorForm["AppCRM_DealEditor_Step_Main"] = 0] = "AppCRM_DealEditor_Step_Main";
        NavigationContentAppCrmDealEditorForm[NavigationContentAppCrmDealEditorForm["AppCRM_DealEditor_Step_Additional"] = 1] = "AppCRM_DealEditor_Step_Additional";
    })(NavigationContentAppCrmDealEditorForm = Enums.NavigationContentAppCrmDealEditorForm || (Enums.NavigationContentAppCrmDealEditorForm = {}));
    let NavigationContentAppOldLimits;
    (function (NavigationContentAppOldLimits) {
        NavigationContentAppOldLimits[NavigationContentAppOldLimits["AppCRM_Old_LimitList"] = 0] = "AppCRM_Old_LimitList";
        NavigationContentAppOldLimits[NavigationContentAppOldLimits["AppCRM_Old_LimitDetails"] = 1] = "AppCRM_Old_LimitDetails";
    })(NavigationContentAppOldLimits = Enums.NavigationContentAppOldLimits || (Enums.NavigationContentAppOldLimits = {}));
    let ProductPollingStatus;
    (function (ProductPollingStatus) {
        ProductPollingStatus[ProductPollingStatus["None"] = 0] = "None";
        ProductPollingStatus[ProductPollingStatus["InProgress"] = 1] = "InProgress";
        ProductPollingStatus[ProductPollingStatus["Error"] = 2] = "Error";
        ProductPollingStatus[ProductPollingStatus["Success"] = 3] = "Success";
    })(ProductPollingStatus = Enums.ProductPollingStatus || (Enums.ProductPollingStatus = {}));
    let DealStatus;
    (function (DealStatus) {
        DealStatus[DealStatus["Open"] = 0] = "Open";
        DealStatus[DealStatus["Closed"] = 1] = "Closed";
    })(DealStatus = Enums.DealStatus || (Enums.DealStatus = {}));
    let MemberList;
    (function (MemberList) {
        MemberList[MemberList["AppCRM_MemberList_List"] = 0] = "AppCRM_MemberList_List";
        MemberList[MemberList["AppCRM_MemberList_Member"] = 1] = "AppCRM_MemberList_Member";
        MemberList[MemberList["AppCRM_MemberList_Search"] = 2] = "AppCRM_MemberList_Search";
        MemberList[MemberList["AppCRM_MemberList_SelectRole"] = 3] = "AppCRM_MemberList_SelectRole";
        MemberList[MemberList["AppCRM_MemberList_Search_Local"] = 4] = "AppCRM_MemberList_Search_Local";
        MemberList[MemberList["AppCRM_MemberList_Select_IsGeneral"] = 5] = "AppCRM_MemberList_Select_IsGeneral";
    })(MemberList = Enums.MemberList || (Enums.MemberList = {}));
    let OwnerType;
    (function (OwnerType) {
        OwnerType[OwnerType["Unknown"] = 0] = "Unknown";
        OwnerType[OwnerType["Shareholder"] = 1] = "Shareholder";
        OwnerType[OwnerType["Beneficiary"] = 2] = "Beneficiary";
    })(OwnerType = Enums.OwnerType || (Enums.OwnerType = {}));
    let NavigationContentGsz;
    (function (NavigationContentGsz) {
        NavigationContentGsz[NavigationContentGsz["Gsz"] = 0] = "Gsz";
        NavigationContentGsz[NavigationContentGsz["Chief"] = 1] = "Chief";
        NavigationContentGsz[NavigationContentGsz["Curator"] = 2] = "Curator";
    })(NavigationContentGsz = Enums.NavigationContentGsz || (Enums.NavigationContentGsz = {}));
    let NavigationContentCustomer;
    (function (NavigationContentCustomer) {
        NavigationContentCustomer[NavigationContentCustomer["Customer"] = 0] = "Customer";
        NavigationContentCustomer[NavigationContentCustomer["MemberList"] = 1] = "MemberList";
        NavigationContentCustomer[NavigationContentCustomer["ActivityView"] = 2] = "ActivityView";
        NavigationContentCustomer[NavigationContentCustomer["OccasionList"] = 3] = "OccasionList";
        NavigationContentCustomer[NavigationContentCustomer["EmployeeView"] = 4] = "EmployeeView";
        NavigationContentCustomer[NavigationContentCustomer["DealListSearch"] = 5] = "DealListSearch";
    })(NavigationContentCustomer = Enums.NavigationContentCustomer || (Enums.NavigationContentCustomer = {}));
    let NavigationContentEmployee;
    (function (NavigationContentEmployee) {
        NavigationContentEmployee[NavigationContentEmployee["AppCRM_Employee"] = 0] = "AppCRM_Employee";
        NavigationContentEmployee[NavigationContentEmployee["AppCRM_CustomerList"] = 1] = "AppCRM_CustomerList";
        NavigationContentEmployee[NavigationContentEmployee["AppCRM_RelatedEmployee"] = 2] = "AppCRM_RelatedEmployee";
    })(NavigationContentEmployee = Enums.NavigationContentEmployee || (Enums.NavigationContentEmployee = {}));
    let NavigationProductAcquiring;
    (function (NavigationProductAcquiring) {
        NavigationProductAcquiring[NavigationProductAcquiring["AppCRM_Acquiring"] = 0] = "AppCRM_Acquiring";
    })(NavigationProductAcquiring = Enums.NavigationProductAcquiring || (Enums.NavigationProductAcquiring = {}));
    let NavigationContentProductAcquiring;
    (function (NavigationContentProductAcquiring) {
        NavigationContentProductAcquiring[NavigationContentProductAcquiring["AppCRM_AcquiringInfo"] = 0] = "AppCRM_AcquiringInfo";
        NavigationContentProductAcquiring[NavigationContentProductAcquiring["AppCRM_AcquiringAgreementList"] = 1] = "AppCRM_AcquiringAgreementList";
    })(NavigationContentProductAcquiring = Enums.NavigationContentProductAcquiring || (Enums.NavigationContentProductAcquiring = {}));
    let NavigationContentProductPaymentAccountCard;
    (function (NavigationContentProductPaymentAccountCard) {
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccountCard"] = 0] = "AppCRM_PaymentAccountCard";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_RestrictionList"] = 1] = "AppCRM_PaymentAccount_RestrictionList";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_CardIndexList"] = 2] = "AppCRM_PaymentAccount_CardIndexList";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_TariffList"] = 3] = "AppCRM_PaymentAccount_TariffList";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_VSPService"] = 4] = "AppCRM_PaymentAccount_VSPService";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_OperationList"] = 5] = "AppCRM_PaymentAccount_OperationList";
        NavigationContentProductPaymentAccountCard[NavigationContentProductPaymentAccountCard["AppCRM_PaymentAccount_Dashboard"] = 6] = "AppCRM_PaymentAccount_Dashboard";
    })(NavigationContentProductPaymentAccountCard = Enums.NavigationContentProductPaymentAccountCard || (Enums.NavigationContentProductPaymentAccountCard = {}));
    let ClientProductServiceList;
    (function (ClientProductServiceList) {
        ClientProductServiceList[ClientProductServiceList["AppCRM_Credit"] = 0] = "AppCRM_Credit";
        ClientProductServiceList[ClientProductServiceList["AppCRM_SettlementAgreement"] = 1] = "AppCRM_SettlementAgreement";
        ClientProductServiceList[ClientProductServiceList["AppCRM_Deposit"] = 2] = "AppCRM_Deposit";
        ClientProductServiceList[ClientProductServiceList["AppCRM_CorporateCard"] = 3] = "AppCRM_CorporateCard";
        ClientProductServiceList[ClientProductServiceList["AppCRM_EncashmentContract"] = 4] = "AppCRM_EncashmentContract";
        ClientProductServiceList[ClientProductServiceList["AppCRM_LegalInfo"] = 5] = "AppCRM_LegalInfo";
        ClientProductServiceList[ClientProductServiceList["AppCRM_Acquiring"] = 6] = "AppCRM_Acquiring";
        ClientProductServiceList[ClientProductServiceList["AppCRM_DBO"] = 7] = "AppCRM_DBO";
        ClientProductServiceList[ClientProductServiceList["AppCRM_UDBO"] = 8] = "AppCRM_UDBO";
        ClientProductServiceList[ClientProductServiceList["AppCRM_Salary"] = 9] = "AppCRM_Salary";
        ClientProductServiceList[ClientProductServiceList["AppCRM_CardIndex"] = 10] = "AppCRM_CardIndex";
        ClientProductServiceList[ClientProductServiceList["None"] = 11] = "None";
    })(ClientProductServiceList = Enums.ClientProductServiceList || (Enums.ClientProductServiceList = {}));
    let PaymentAccountProductServiceList;
    (function (PaymentAccountProductServiceList) {
        PaymentAccountProductServiceList[PaymentAccountProductServiceList["AppCRM_OperationList"] = 0] = "AppCRM_OperationList";
        PaymentAccountProductServiceList[PaymentAccountProductServiceList["AppCRM_CardIndexList"] = 1] = "AppCRM_CardIndexList";
    })(PaymentAccountProductServiceList = Enums.PaymentAccountProductServiceList || (Enums.PaymentAccountProductServiceList = {}));
    let ClientProductPaymentAccountRestrictionType;
    (function (ClientProductPaymentAccountRestrictionType) {
        ClientProductPaymentAccountRestrictionType[ClientProductPaymentAccountRestrictionType["MinAccountSumContract"] = 0] = "MinAccountSumContract";
        ClientProductPaymentAccountRestrictionType[ClientProductPaymentAccountRestrictionType["InsolvencyAccount"] = 1] = "InsolvencyAccount";
        ClientProductPaymentAccountRestrictionType[ClientProductPaymentAccountRestrictionType["DefaultRestrictionType"] = 2] = "DefaultRestrictionType";
    })(ClientProductPaymentAccountRestrictionType = Enums.ClientProductPaymentAccountRestrictionType || (Enums.ClientProductPaymentAccountRestrictionType = {}));
    let NavigationAppCRMOperationListFilter;
    (function (NavigationAppCRMOperationListFilter) {
        NavigationAppCRMOperationListFilter[NavigationAppCRMOperationListFilter["OperationListPeriod"] = 0] = "OperationListPeriod";
        NavigationAppCRMOperationListFilter[NavigationAppCRMOperationListFilter["OperationListFilter"] = 1] = "OperationListFilter";
    })(NavigationAppCRMOperationListFilter = Enums.NavigationAppCRMOperationListFilter || (Enums.NavigationAppCRMOperationListFilter = {}));
    let NavigationContentOperationListPeriod;
    (function (NavigationContentOperationListPeriod) {
        NavigationContentOperationListPeriod[NavigationContentOperationListPeriod["OperationListPeriodType"] = 0] = "OperationListPeriodType";
        NavigationContentOperationListPeriod[NavigationContentOperationListPeriod["OperationListCustomPeriod"] = 1] = "OperationListCustomPeriod";
    })(NavigationContentOperationListPeriod = Enums.NavigationContentOperationListPeriod || (Enums.NavigationContentOperationListPeriod = {}));
    let ProductAccountTab;
    (function (ProductAccountTab) {
    })(ProductAccountTab = Enums.ProductAccountTab || (Enums.ProductAccountTab = {}));
    let TroubleGroupCode;
    (function (TroubleGroupCode) {
        TroubleGroupCode[TroubleGroupCode["YellowZone"] = 0] = "YellowZone";
        TroubleGroupCode[TroubleGroupCode["GreenZone"] = 1] = "GreenZone";
        TroubleGroupCode[TroubleGroupCode["RedZone"] = 2] = "RedZone";
        TroubleGroupCode[TroubleGroupCode["Notdefined"] = 3] = "Notdefined";
        TroubleGroupCode[TroubleGroupCode["Latecollection"] = 4] = "Latecollection";
        TroubleGroupCode[TroubleGroupCode["Earlycollection"] = 5] = "Earlycollection";
        TroubleGroupCode[TroubleGroupCode["BlackZone"] = 6] = "BlackZone";
    })(TroubleGroupCode = Enums.TroubleGroupCode || (Enums.TroubleGroupCode = {}));
    let NavigationAppCRMOperationListPeriod;
    (function (NavigationAppCRMOperationListPeriod) {
        NavigationAppCRMOperationListPeriod[NavigationAppCRMOperationListPeriod["OperationListPeriod"] = 0] = "OperationListPeriod";
        NavigationAppCRMOperationListPeriod[NavigationAppCRMOperationListPeriod["OperationListFilter"] = 1] = "OperationListFilter";
    })(NavigationAppCRMOperationListPeriod = Enums.NavigationAppCRMOperationListPeriod || (Enums.NavigationAppCRMOperationListPeriod = {}));
    let NavigationPopoverContentEmployee;
    (function (NavigationPopoverContentEmployee) {
        NavigationPopoverContentEmployee[NavigationPopoverContentEmployee["EmployeePopoverScreen"] = 0] = "EmployeePopoverScreen";
        NavigationPopoverContentEmployee[NavigationPopoverContentEmployee["EmployeePopoverScreenView"] = 1] = "EmployeePopoverScreenView";
    })(NavigationPopoverContentEmployee = Enums.NavigationPopoverContentEmployee || (Enums.NavigationPopoverContentEmployee = {}));
    let SwipeableRowEmptyId;
    (function (SwipeableRowEmptyId) {
        SwipeableRowEmptyId[SwipeableRowEmptyId["EmptyId"] = 0] = "EmptyId";
    })(SwipeableRowEmptyId = Enums.SwipeableRowEmptyId || (Enums.SwipeableRowEmptyId = {}));
    let OccasionListRequestRefresh;
    (function (OccasionListRequestRefresh) {
        OccasionListRequestRefresh[OccasionListRequestRefresh["OccasionListRequestRefreshEnabled"] = 0] = "OccasionListRequestRefreshEnabled";
    })(OccasionListRequestRefresh = Enums.OccasionListRequestRefresh || (Enums.OccasionListRequestRefresh = {}));
    let NoteListRequestRefresh;
    (function (NoteListRequestRefresh) {
        NoteListRequestRefresh[NoteListRequestRefresh["NoteListRequestRefreshEnabled"] = 0] = "NoteListRequestRefreshEnabled";
    })(NoteListRequestRefresh = Enums.NoteListRequestRefresh || (Enums.NoteListRequestRefresh = {}));
    let CustomerRequestRefresh;
    (function (CustomerRequestRefresh) {
        CustomerRequestRefresh[CustomerRequestRefresh["CustomerRequestRefreshEnabled"] = 0] = "CustomerRequestRefreshEnabled";
        CustomerRequestRefresh[CustomerRequestRefresh["CustomerRequestLimitRefreshEnabled"] = 1] = "CustomerRequestLimitRefreshEnabled";
    })(CustomerRequestRefresh = Enums.CustomerRequestRefresh || (Enums.CustomerRequestRefresh = {}));
    let AgentListRequestRefresh;
    (function (AgentListRequestRefresh) {
        AgentListRequestRefresh[AgentListRequestRefresh["AgentListRequestRefreshEnabled"] = 0] = "AgentListRequestRefreshEnabled";
    })(AgentListRequestRefresh = Enums.AgentListRequestRefresh || (Enums.AgentListRequestRefresh = {}));
    let EmployeeRequestRefresh;
    (function (EmployeeRequestRefresh) {
        EmployeeRequestRefresh[EmployeeRequestRefresh["EmployeeRequestRefreshEnabled"] = 0] = "EmployeeRequestRefreshEnabled";
    })(EmployeeRequestRefresh = Enums.EmployeeRequestRefresh || (Enums.EmployeeRequestRefresh = {}));
    let GSZRequestRefresh;
    (function (GSZRequestRefresh) {
        GSZRequestRefresh[GSZRequestRefresh["GSZRequestRefreshEnabled"] = 0] = "GSZRequestRefreshEnabled";
    })(GSZRequestRefresh = Enums.GSZRequestRefresh || (Enums.GSZRequestRefresh = {}));
    let DealListRequestRefresh;
    (function (DealListRequestRefresh) {
        DealListRequestRefresh[DealListRequestRefresh["DealListRequestRefreshEnabled"] = 0] = "DealListRequestRefreshEnabled";
    })(DealListRequestRefresh = Enums.DealListRequestRefresh || (Enums.DealListRequestRefresh = {}));
    let DealRequestRefresh;
    (function (DealRequestRefresh) {
        DealRequestRefresh[DealRequestRefresh["DealRequestRefreshEnabled"] = 0] = "DealRequestRefreshEnabled";
    })(DealRequestRefresh = Enums.DealRequestRefresh || (Enums.DealRequestRefresh = {}));
    let AppCRMCustomerManagedListRequestRefresh;
    (function (AppCRMCustomerManagedListRequestRefresh) {
        AppCRMCustomerManagedListRequestRefresh[AppCRMCustomerManagedListRequestRefresh["AppCRMCustomerManagedListRequestRefreshEnabled"] = 0] = "AppCRMCustomerManagedListRequestRefreshEnabled";
    })(AppCRMCustomerManagedListRequestRefresh = Enums.AppCRMCustomerManagedListRequestRefresh || (Enums.AppCRMCustomerManagedListRequestRefresh = {}));
    let RefreshDealAfterMemberListUpdateTag;
    (function (RefreshDealAfterMemberListUpdateTag) {
        RefreshDealAfterMemberListUpdateTag[RefreshDealAfterMemberListUpdateTag["RefreshDealAfterMemberListUpdateEnabled"] = 0] = "RefreshDealAfterMemberListUpdateEnabled";
    })(RefreshDealAfterMemberListUpdateTag = Enums.RefreshDealAfterMemberListUpdateTag || (Enums.RefreshDealAfterMemberListUpdateTag = {}));
    let RefreshAgentAfterMemberListUpdateTag;
    (function (RefreshAgentAfterMemberListUpdateTag) {
        RefreshAgentAfterMemberListUpdateTag[RefreshAgentAfterMemberListUpdateTag["RefreshAgentAfterMemberListUpdateEnabled"] = 0] = "RefreshAgentAfterMemberListUpdateEnabled";
    })(RefreshAgentAfterMemberListUpdateTag = Enums.RefreshAgentAfterMemberListUpdateTag || (Enums.RefreshAgentAfterMemberListUpdateTag = {}));
    let FileFormat;
    (function (FileFormat) {
        FileFormat[FileFormat["Excel"] = 0] = "Excel";
        FileFormat[FileFormat["PowerPoint"] = 1] = "PowerPoint";
        FileFormat[FileFormat["PDF"] = 2] = "PDF";
    })(FileFormat = Enums.FileFormat || (Enums.FileFormat = {}));
    let Representation;
    (function (Representation) {
        Representation[Representation["Slides"] = 0] = "Slides";
        Representation[Representation["List"] = 1] = "List";
    })(Representation = Enums.Representation || (Enums.Representation = {}));
    let Operation;
    (function (Operation) {
        Operation[Operation["Add"] = 0] = "Add";
        Operation[Operation["Remove"] = 1] = "Remove";
    })(Operation = Enums.Operation || (Enums.Operation = {}));
    let DealRefreshMode;
    (function (DealRefreshMode) {
        DealRefreshMode[DealRefreshMode["RefreshMode"] = 0] = "RefreshMode";
    })(DealRefreshMode = Enums.DealRefreshMode || (Enums.DealRefreshMode = {}));
    let DealEditorMode;
    (function (DealEditorMode) {
        DealEditorMode[DealEditorMode["CreateMode"] = 0] = "CreateMode";
        DealEditorMode[DealEditorMode["UpdateMode"] = 1] = "UpdateMode";
    })(DealEditorMode = Enums.DealEditorMode || (Enums.DealEditorMode = {}));
    let ActivityAccessLevel;
    (function (ActivityAccessLevel) {
        ActivityAccessLevel[ActivityAccessLevel["None"] = 0] = "None";
        ActivityAccessLevel[ActivityAccessLevel["TeamMember"] = 1] = "TeamMember";
        ActivityAccessLevel[ActivityAccessLevel["Author"] = 2] = "Author";
        ActivityAccessLevel[ActivityAccessLevel["AuthorMainTeamMember"] = 3] = "AuthorMainTeamMember";
        ActivityAccessLevel[ActivityAccessLevel["MainTeamMember"] = 4] = "MainTeamMember";
        ActivityAccessLevel[ActivityAccessLevel["EditDenied"] = 5] = "EditDenied";
        ActivityAccessLevel[ActivityAccessLevel["NoTeamMember"] = 6] = "NoTeamMember";
    })(ActivityAccessLevel = Enums.ActivityAccessLevel || (Enums.ActivityAccessLevel = {}));
    let ActivityUrgency;
    (function (ActivityUrgency) {
        ActivityUrgency[ActivityUrgency["Any"] = 0] = "Any";
        ActivityUrgency[ActivityUrgency["Overdue"] = 1] = "Overdue";
        ActivityUrgency[ActivityUrgency["Urgent"] = 2] = "Urgent";
        ActivityUrgency[ActivityUrgency["Nearest"] = 3] = "Nearest";
        ActivityUrgency[ActivityUrgency["Other"] = 4] = "Other";
    })(ActivityUrgency = Enums.ActivityUrgency || (Enums.ActivityUrgency = {}));
    let ValidateForm;
    (function (ValidateForm) {
        ValidateForm[ValidateForm["inputSum"] = 1] = "inputSum";
        ValidateForm[ValidateForm["inputEquivalentSum"] = 2] = "inputEquivalentSum";
        ValidateForm[ValidateForm["inputEquivalentConversionRate"] = 3] = "inputEquivalentConversionRate";
    })(ValidateForm = Enums.ValidateForm || (Enums.ValidateForm = {}));
    let ValidateFormType;
    (function (ValidateFormType) {
        ValidateFormType[ValidateFormType["initial"] = 0] = "initial";
        ValidateFormType[ValidateFormType["inputDescription"] = 1] = "inputDescription";
        ValidateFormType[ValidateFormType["inputProduct"] = 2] = "inputProduct";
        ValidateFormType[ValidateFormType["inputSalesMethod"] = 3] = "inputSalesMethod";
        ValidateFormType[ValidateFormType["inputCurrency"] = 4] = "inputCurrency";
        ValidateFormType[ValidateFormType["inputDealDate"] = 5] = "inputDealDate";
        ValidateFormType[ValidateFormType["selectApplication"] = 6] = "selectApplication";
        ValidateFormType[ValidateFormType["inputDealType"] = 7] = "inputDealType";
    })(ValidateFormType = Enums.ValidateFormType || (Enums.ValidateFormType = {}));
    let ClassifierRenderMode;
    (function (ClassifierRenderMode) {
        ClassifierRenderMode[ClassifierRenderMode["Default"] = 0] = "Default";
        ClassifierRenderMode[ClassifierRenderMode["CodeWithValue"] = 1] = "CodeWithValue";
        ClassifierRenderMode[ClassifierRenderMode["Code"] = 2] = "Code";
    })(ClassifierRenderMode = Enums.ClassifierRenderMode || (Enums.ClassifierRenderMode = {}));
    let ClassifierMode;
    (function (ClassifierMode) {
        ClassifierMode[ClassifierMode["Default"] = 0] = "Default";
        ClassifierMode[ClassifierMode["DealEditor_Product"] = 1] = "DealEditor_Product";
        ClassifierMode[ClassifierMode["DealEditor_SalesMethod"] = 2] = "DealEditor_SalesMethod";
        ClassifierMode[ClassifierMode["DealEditor_Currency"] = 3] = "DealEditor_Currency";
        ClassifierMode[ClassifierMode["Agent_Note"] = 4] = "Agent_Note";
        ClassifierMode[ClassifierMode["DealEditor_DealType"] = 5] = "DealEditor_DealType";
        ClassifierMode[ClassifierMode["DealStage_Currency"] = 6] = "DealStage_Currency";
    })(ClassifierMode = Enums.ClassifierMode || (Enums.ClassifierMode = {}));
    let NavigationNoteList;
    (function (NavigationNoteList) {
        NavigationNoteList[NavigationNoteList["NoteList"] = 0] = "NoteList";
        NavigationNoteList[NavigationNoteList["NoteScreen"] = 1] = "NoteScreen";
    })(NavigationNoteList = Enums.NavigationNoteList || (Enums.NavigationNoteList = {}));
    let NavigationNoteScreen;
    (function (NavigationNoteScreen) {
        NavigationNoteScreen[NavigationNoteScreen["NoteScreen"] = 0] = "NoteScreen";
        NavigationNoteScreen[NavigationNoteScreen["Type"] = 1] = "Type";
    })(NavigationNoteScreen = Enums.NavigationNoteScreen || (Enums.NavigationNoteScreen = {}));
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    let ProductCreditPaymentScheduleOperationType;
    (function (ProductCreditPaymentScheduleOperationType) {
        ProductCreditPaymentScheduleOperationType[ProductCreditPaymentScheduleOperationType["DebtRepayment"] = 0] = "DebtRepayment";
        ProductCreditPaymentScheduleOperationType[ProductCreditPaymentScheduleOperationType["InterestRepayment"] = 1] = "InterestRepayment";
        ProductCreditPaymentScheduleOperationType[ProductCreditPaymentScheduleOperationType["OtherRepayment"] = 2] = "OtherRepayment";
    })(ProductCreditPaymentScheduleOperationType = Enums.ProductCreditPaymentScheduleOperationType || (Enums.ProductCreditPaymentScheduleOperationType = {}));
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Статус":
     * Не оплачено, К оплате, Оплачено
     */
    let ProductCreditPaymentScheduleStatus;
    (function (ProductCreditPaymentScheduleStatus) {
        ProductCreditPaymentScheduleStatus[ProductCreditPaymentScheduleStatus["notPay"] = 0] = "notPay";
        ProductCreditPaymentScheduleStatus[ProductCreditPaymentScheduleStatus["forPay"] = 1] = "forPay";
        ProductCreditPaymentScheduleStatus[ProductCreditPaymentScheduleStatus["execPay"] = 2] = "execPay";
    })(ProductCreditPaymentScheduleStatus = Enums.ProductCreditPaymentScheduleStatus || (Enums.ProductCreditPaymentScheduleStatus = {}));
    /**
     * Продукт "Кредит", страница "График платежей", фильтр "Тип операции":
     * Погашение долга, Погашение процентов, Прочие платежи
     */
    let ProductCreditPaymentScheduleOperCode;
    (function (ProductCreditPaymentScheduleOperCode) {
        ProductCreditPaymentScheduleOperCode[ProductCreditPaymentScheduleOperCode["cred"] = 0] = "cred";
        ProductCreditPaymentScheduleOperCode[ProductCreditPaymentScheduleOperCode["proc"] = 1] = "proc";
        ProductCreditPaymentScheduleOperCode[ProductCreditPaymentScheduleOperCode["other"] = 2] = "other";
    })(ProductCreditPaymentScheduleOperCode = Enums.ProductCreditPaymentScheduleOperCode || (Enums.ProductCreditPaymentScheduleOperCode = {}));
    let PaymentScheduleListRequestRefresh;
    (function (PaymentScheduleListRequestRefresh) {
        PaymentScheduleListRequestRefresh[PaymentScheduleListRequestRefresh["PaymentScheduleListRequestRefreshEnabled"] = 0] = "PaymentScheduleListRequestRefreshEnabled";
    })(PaymentScheduleListRequestRefresh = Enums.PaymentScheduleListRequestRefresh || (Enums.PaymentScheduleListRequestRefresh = {}));
    let TableRowUnderlineType;
    (function (TableRowUnderlineType) {
        TableRowUnderlineType[TableRowUnderlineType["NONE"] = 0] = "NONE";
        TableRowUnderlineType[TableRowUnderlineType["FULL"] = 1] = "FULL";
        TableRowUnderlineType[TableRowUnderlineType["MARGINS"] = 2] = "MARGINS";
    })(TableRowUnderlineType = Enums.TableRowUnderlineType || (Enums.TableRowUnderlineType = {}));
    let NavigationContentDealAttachmentsScreen;
    (function (NavigationContentDealAttachmentsScreen) {
        NavigationContentDealAttachmentsScreen[NavigationContentDealAttachmentsScreen["DealAttachments_MainPage"] = 0] = "DealAttachments_MainPage";
        NavigationContentDealAttachmentsScreen[NavigationContentDealAttachmentsScreen["DealAttachments_ViewerPage"] = 1] = "DealAttachments_ViewerPage";
        NavigationContentDealAttachmentsScreen[NavigationContentDealAttachmentsScreen["DealAttachments_AuthWarningPage"] = 2] = "DealAttachments_AuthWarningPage";
    })(NavigationContentDealAttachmentsScreen = Enums.NavigationContentDealAttachmentsScreen || (Enums.NavigationContentDealAttachmentsScreen = {}));
    let DealAttachmentsFileFormat;
    (function (DealAttachmentsFileFormat) {
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["None"] = 0] = "None";
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["Pdf"] = 1] = "Pdf";
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["Doc"] = 2] = "Doc";
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["Excel"] = 3] = "Excel";
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["PowerPoint"] = 4] = "PowerPoint";
        DealAttachmentsFileFormat[DealAttachmentsFileFormat["Image"] = 5] = "Image";
    })(DealAttachmentsFileFormat = Enums.DealAttachmentsFileFormat || (Enums.DealAttachmentsFileFormat = {}));
    let paymentScheduleAlternativeScenariosType;
    (function (paymentScheduleAlternativeScenariosType) {
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["Refresh"] = 0] = "Refresh";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["RequestPeriodTooLong"] = 1] = "RequestPeriodTooLong";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["AllPaymentsAlreadyBeenReceived"] = 2] = "AllPaymentsAlreadyBeenReceived";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["UpdateDataErrorTimeout"] = 3] = "UpdateDataErrorTimeout";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["UpdateDataTe\u0441hnicalError"] = 4] = "UpdateDataTe\u0441hnicalError";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["ErrorGettingDataFromCache"] = 5] = "ErrorGettingDataFromCache";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["TimeoutResponseReceived"] = 6] = "TimeoutResponseReceived";
        paymentScheduleAlternativeScenariosType[paymentScheduleAlternativeScenariosType["ErrorEkc"] = 7] = "ErrorEkc";
    })(paymentScheduleAlternativeScenariosType = Enums.paymentScheduleAlternativeScenariosType || (Enums.paymentScheduleAlternativeScenariosType = {}));
    let dealEditorValidationError;
    (function (dealEditorValidationError) {
        dealEditorValidationError[dealEditorValidationError["InputSalesMethod"] = 0] = "InputSalesMethod";
        dealEditorValidationError[dealEditorValidationError["InputDealType"] = 1] = "InputDealType";
    })(dealEditorValidationError = Enums.dealEditorValidationError || (Enums.dealEditorValidationError = {}));
    let memberSearchType;
    (function (memberSearchType) {
        memberSearchType[memberSearchType["Employee"] = 0] = "Employee";
        memberSearchType[memberSearchType["Agent"] = 1] = "Agent";
    })(memberSearchType = Enums.memberSearchType || (Enums.memberSearchType = {}));
    let ParentDealPickerMode;
    (function (ParentDealPickerMode) {
        ParentDealPickerMode[ParentDealPickerMode["ParentDeal"] = 0] = "ParentDeal";
        ParentDealPickerMode[ParentDealPickerMode["Customer"] = 1] = "Customer";
    })(ParentDealPickerMode = Enums.ParentDealPickerMode || (Enums.ParentDealPickerMode = {}));
    let UserRole;
    (function (UserRole) {
        UserRole[UserRole["KM"] = 0] = "KM";
        UserRole[UserRole["GKM"] = 1] = "GKM";
        UserRole[UserRole["Unknown"] = 2] = "Unknown";
    })(UserRole = Enums.UserRole || (Enums.UserRole = {}));
})(Enums || (Enums = {}));
//# sourceMappingURL=Enums.js.map