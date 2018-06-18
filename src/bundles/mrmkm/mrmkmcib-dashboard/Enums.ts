export  namespace Enums {

    export enum QlikEventType {
        None,
        GlobalClientSearch = 1, // 'GlobalClientSearch'
        OpenClientCardAnalyticsTab = 2, // 'OpenClientCardAnalyticsTab'
        OpenClientCardProductsTab = 3, // 'OpenClientCardProductsTab'
        OpenDealCard = 4, // 'OpenDealCard'
        SearchLineOnFocus = 5, // 'SearchLineOnFocus'
        SearchLineOnBlur = 6, //  'SearchLineOnBlur'
        HttpInterceptor = 7, // 'HttpInterceptor'
        ThrowError = 8, // 'ThrowError'
        Printing = 9, // 'Printing'
        OpenClientCardActivity = 10,  // открыть задачу на КК
        OnLoad = 11,
        mainKpi = 12, //открытие стартовой страницы Qlik
        leKpi = 13, //открытие стартовой страницы Qlik на карточке клиента
        holdingKpi = 14, //открытие kpi холдинга
    }

    export enum Operation {
        Add,
        Remove
    }


    export enum CacheContext {


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

    export enum SharePopoverNavigation {
        Main,
        Recipients,
        Representation,
        Format
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
        ServerUnavailable,
        QlikError,
        QlikSenseCertMobileAppError,

        Unknown,
    }


    export enum CustomerSearchType {
        LessThanThreeChars = -1,
        KPP = 1,
        INN = 2,
        Name = 3,
        Account = 4,
    }

}
