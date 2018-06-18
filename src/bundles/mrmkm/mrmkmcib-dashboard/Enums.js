export var Enums;
(function (Enums) {
    let QlikEventType;
    (function (QlikEventType) {
        QlikEventType[QlikEventType["None"] = 0] = "None";
        QlikEventType[QlikEventType["GlobalClientSearch"] = 1] = "GlobalClientSearch";
        QlikEventType[QlikEventType["OpenClientCardAnalyticsTab"] = 2] = "OpenClientCardAnalyticsTab";
        QlikEventType[QlikEventType["OpenClientCardProductsTab"] = 3] = "OpenClientCardProductsTab";
        QlikEventType[QlikEventType["OpenDealCard"] = 4] = "OpenDealCard";
        QlikEventType[QlikEventType["SearchLineOnFocus"] = 5] = "SearchLineOnFocus";
        QlikEventType[QlikEventType["SearchLineOnBlur"] = 6] = "SearchLineOnBlur";
        QlikEventType[QlikEventType["HttpInterceptor"] = 7] = "HttpInterceptor";
        QlikEventType[QlikEventType["ThrowError"] = 8] = "ThrowError";
        QlikEventType[QlikEventType["Printing"] = 9] = "Printing";
        QlikEventType[QlikEventType["OpenClientCardActivity"] = 10] = "OpenClientCardActivity";
        QlikEventType[QlikEventType["OnLoad"] = 11] = "OnLoad";
        QlikEventType[QlikEventType["mainKpi"] = 12] = "mainKpi";
        QlikEventType[QlikEventType["leKpi"] = 13] = "leKpi";
        QlikEventType[QlikEventType["holdingKpi"] = 14] = "holdingKpi";
    })(QlikEventType = Enums.QlikEventType || (Enums.QlikEventType = {}));
    let Operation;
    (function (Operation) {
        Operation[Operation["Add"] = 0] = "Add";
        Operation[Operation["Remove"] = 1] = "Remove";
    })(Operation = Enums.Operation || (Enums.Operation = {}));
    let CacheContext;
    (function (CacheContext) {
    })(CacheContext = Enums.CacheContext || (Enums.CacheContext = {}));
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
    let SharePopoverNavigation;
    (function (SharePopoverNavigation) {
        SharePopoverNavigation[SharePopoverNavigation["Main"] = 0] = "Main";
        SharePopoverNavigation[SharePopoverNavigation["Recipients"] = 1] = "Recipients";
        SharePopoverNavigation[SharePopoverNavigation["Representation"] = 2] = "Representation";
        SharePopoverNavigation[SharePopoverNavigation["Format"] = 3] = "Format";
    })(SharePopoverNavigation = Enums.SharePopoverNavigation || (Enums.SharePopoverNavigation = {}));
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
        ErrorType[ErrorType["ServerUnavailable"] = 5] = "ServerUnavailable";
        ErrorType[ErrorType["QlikError"] = 6] = "QlikError";
        ErrorType[ErrorType["QlikSenseCertMobileAppError"] = 7] = "QlikSenseCertMobileAppError";
        ErrorType[ErrorType["Unknown"] = 8] = "Unknown";
    })(ErrorType = Enums.ErrorType || (Enums.ErrorType = {}));
    let CustomerSearchType;
    (function (CustomerSearchType) {
        CustomerSearchType[CustomerSearchType["LessThanThreeChars"] = -1] = "LessThanThreeChars";
        CustomerSearchType[CustomerSearchType["KPP"] = 1] = "KPP";
        CustomerSearchType[CustomerSearchType["INN"] = 2] = "INN";
        CustomerSearchType[CustomerSearchType["Name"] = 3] = "Name";
        CustomerSearchType[CustomerSearchType["Account"] = 4] = "Account";
    })(CustomerSearchType = Enums.CustomerSearchType || (Enums.CustomerSearchType = {}));
})(Enums || (Enums = {}));
//# sourceMappingURL=Enums.js.map