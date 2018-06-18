export declare namespace Enums {
    enum QlikEventType {
        None = 0,
        GlobalClientSearch = 1,
        OpenClientCardAnalyticsTab = 2,
        OpenClientCardProductsTab = 3,
        OpenDealCard = 4,
        SearchLineOnFocus = 5,
        SearchLineOnBlur = 6,
        HttpInterceptor = 7,
        ThrowError = 8,
        Printing = 9,
        OpenClientCardActivity = 10,
        OnLoad = 11,
        mainKpi = 12,
        leKpi = 13,
        holdingKpi = 14
    }
    enum Operation {
        Add = 0,
        Remove = 1
    }
    enum CacheContext {
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
    enum SharePopoverNavigation {
        Main = 0,
        Recipients = 1,
        Representation = 2,
        Format = 3
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
        ServerUnavailable = 5,
        QlikError = 6,
        QlikSenseCertMobileAppError = 7,
        Unknown = 8
    }
    enum CustomerSearchType {
        LessThanThreeChars = -1,
        KPP = 1,
        INN = 2,
        Name = 3,
        Account = 4
    }
}
