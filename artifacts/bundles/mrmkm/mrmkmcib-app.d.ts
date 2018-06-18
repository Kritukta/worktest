/// <reference types="react" />
declare module 'mrmkmcib-app' {
    import React from 'react';
    import { Models } from "mrmkmcib-app";
    import { Enums as EnumsCrm, Models as ModelsCrm } from "mrmkmcib-crm";
    import { Models as ModelsScheduler, Enums as EnumsScheduler } from "mrmkmcib-scheduler";
    import { Enums } from 'Enums';
    import { Table } from 'ufs-mobile-platform';
    import LoggerService from 'mrmkmcib-app/modules/Logger';
    import { LoggerInterceptorType } from 'mrmkmcib-app/middleware/LoggerInterceptor';
    import { UserActivityType } from 'mrmkmcib-app/middleware/UserActivity';
    import { UserLogoutType } from 'mrmkmcib-app/middleware/UserLogout';
    import { IDateRangePickerProps as IDateRangePickerPropsType, IDateRangePickerState } from 'mrmkmcib-app/components/shared/DateRangePicker';
    class ContainerAppMRMKMCIB extends React.Component<any, any> {
    }
    class ContainerAuthorization extends React.Component<any, any> {
    }
    class ContainerWorkspace extends React.Component<any, any> {
    }
    class ContainerEmail extends React.Component<any, any> {
    }
    class ContainerProfile extends React.Component<any, any> {
    }
    function swapContentCurrentCoordinates(): void;
    interface ILabelWithPopover {
        testID: string;
        labelText?: string;
        popoverType?: any;
        popoverStyle?: any;
        labelTitle?: string;
        onPress?: () => void;
        positionPopoverList?: any[];
        iconType?: any;
        styleContainer?: any;
        hasBorderBottom?: boolean;
        textLeftPageHeaderButton?: string | null;
        textRightPageHeaderButton?: string | null;
        onClickRightPageHeaderButton?: () => void;
        onClickLeftPageHeaderButton?: () => void;
        popoverCenterPageHeaderTitle?: string;
        popoverPageContent: any;
        scrollEnabled?: boolean;
        disabledRightPageHeaderButton?: boolean;
        disabledLeftPageHeaderButton?: boolean;
    }
    class LabelWithPopover extends React.Component<ILabelWithPopover, {}> {
    }
    namespace Models {
        interface Classifier {
            parentId: string | null;
            name: string;
            value: string;
            code: string;
        }
        type SupParamsDeal = {
            DealSalesMethod: string;
            DealApprovedStatusList: string;
            DealSalesMethodRoadMapStandard: string;
            DealSalesMethodRoadMapCredit: string;
        };
        type SupParamNames = SupParamsDeal & {
            AppServerId: string;
            AppServerURL: string;
            DashboardKmURL: string;
            DashboardChiefURL: string;
            UniversalSaleTeamRoles: string;
            CacheEksPolicyMaxTTL: string;
            NumberDaysInFavorite: string;
            EcmTargetRoot: string;
            EcmTfsCachePolicyMaxTTL: string;
            EcmTfsCachePolicyType: string;
            EcmTfsScenarioId: string;
            EcmTfsUser: string;
            TfsDownloadURL: string;
            TfsURL: string;
            FrequencyViewMeeting: string;
            NoticeMeeting: string;
            LogFileMaxSize: string;
            LogFileTTL: string;
            LogUploadTimeout: string;
            LogStoreURL: string;
            MobileCachingTTL: string;
            ChangePasswordURL: string;
            StatusRequestMaxPeriod: string;
            RejectedList: string;
            dashboardExportAccessMode: string;
            PaymentScheduleOffsetBegin: string;
            PaymentScheduleOffsetEnd: string;
            [key: string]: string;
        };
        interface HistoryAgentData {
            data: ModelsCrm.Agent;
            customer: ModelsCrm.Customer;
            contextMode: EnumsCrm.AgentContextMode;
        }
        interface HistoryActivityData {
            data: ModelsScheduler.Activity;
            activityMode: EnumsScheduler.ActivityMode;
            activityListContextMode: EnumsScheduler.SchedulerMode;
            activityContextMode: EnumsScheduler.ActivityContextMode;
        }
        interface HistoryAgentListData {
            data: ModelsCrm.AgentList;
            customer?: ModelsCrm.Customer;
            deal?: ModelsCrm.Deal;
            contextMode: EnumsCrm.AgentListContextMode;
            accessLevel: EnumsCrm.AgentListAccessLevel;
        }
        interface HistoryMobileAppData {
            customerManaged: ModelsCrm.CustomerManaged | null;
            customer: ModelsCrm.Customer | null;
            agent: HistoryAgentData | null;
            agentList: HistoryAgentListData | null;
            activity: HistoryActivityData | null;
            deal: ModelsCrm.Deal | null;
            qlikUrl: string | null;
        }
        interface HistoryMobileAppContent {
            scene: number | null;
            type: Enums.HistoryMobileAppType;
            payload: HistoryMobileAppData | null;
        }
        interface HistoryMobileAppPushContent {
            splitPanelName: string;
            index: number | null;
            type: Enums.HistoryMobileAppType;
            data: HistoryMobileAppData | null;
        }
        interface ClassifierDictionary {
            SBRF_PROBLEM_GROUP: ClassifierList;
            SBRF_PART_TYPE: ClassifierList;
            SBRF_OPTY_WAG_SS: ClassifierList;
            SALES_TEAM_ROLE: ClassifierList;
            SBRF_GSZ_STATUS_MEMBER: ClassifierList;
            SBRF_REQ_CLOSE_REASON: ClassifierList;
            SBRF_ACTION_ROLE: ClassifierList;
            CRM_LINK_CRITERION: ClassifierList;
            SBRF_NOTE_TYPE: ClassifierList;
            SBRF_GSZ_STATUS: ClassifierList;
            UFS_ADD_AGRMNT_TYPE: ClassifierList;
            EMPLOYMENT_STATUS: ClassifierList;
            SBRF_CONTACT_TYPE_GROUP: ClassifierList;
            SBRF_IMP_DATE: ClassifierList;
            UFS_PERSON_TYPE: ClassifierList;
            CRM_SALE_METHOD: ClassifierList;
            SBRF_ACCESSORY: ClassifierList;
            COUNTRY: ClassifierList;
            SBRF_ACTION_RESULT: ClassifierList;
            TODO_TYPE: ClassifierList;
            FINS_COVERAGE_ROLE_TYPE: ClassifierList;
            SBRF_KO_OPTY_TYPE: ClassifierList;
            FINCORP_DEAL_APPROV_ACTION: ClassifierList;
            SBRF_PA_DECISION_FORMAT: ClassifierList;
            SBRF_APPLICATION: ClassifierList;
            SBRF_APPLICATION_KK: ClassifierList;
            DEAL_SALE_METHOD_KK: ClassifierList;
            SBRF_ATTR_CHANNEL_PICK_LIST: ClassifierList;
            SBRF_NKP_SS: ClassifierList;
            FS_NOTE_TYPE: ClassifierList;
            SBRF_DESITION_FORM: ClassifierList;
            SRV_AGREE_STATUS: ClassifierList;
            CREDIT_COMMITTEE_STATUS: ClassifierList;
            SBRF_INDUSTRY: ClassifierList;
            CURRENCY: ClassifierList;
            SBRF_CONT_JOB_TITLE: ClassifierList;
            KIND_OF_INDUSTRY: ClassifierList;
            SBRF_ACC_PRIORITY: ClassifierList;
            SBRF_SEGMENT_TYPE: ClassifierList;
            ACCOUNT_TYPE: ClassifierList;
            SBRF_ACCOUNT_CATEGORY: ClassifierList;
            SBRF_OPF: ClassifierList;
            SEX_MF: ClassifierList;
            ACTIVITY_PRIORITY: ClassifierList;
            EVENT_STATUS: ClassifierList;
            UFS_BENEFIT_TYPE: ClassifierList;
            SBRF_DBO_TYPE: ClassifierList;
            UFS_CORP_BUDG_CARD_TYPE: ClassifierList;
            SBRF_DEPOSIT_TYPE: ClassifierList;
            SBRF_CREDIT_TYPE: ClassifierList;
            SECTOR_CLASSIFIC_CODE: ClassifierList;
            SBRF_RESIDENCY_TYPE: ClassifierList;
            CRM_SALES_STAGE: ClassifierList;
            CRM_SALE_STAGE: ClassifierList;
            ADDR_TYPE: ClassifierList;
            ACCOUNT_STATUS: ClassifierList;
            SBRF_PARTNERSHIP_TYPE: ClassifierList;
            DEAL_PRODUCT_SALE_METHOD: ClassifierList;
            DEAL_SALE_METHOD: ClassifierList;
            UFS_FC_EVENT_TYPE: ClassifierList;
            UNIVERSAL_SALE_TEAM_ROLES: ClassifierList;
            KK_SALE_TEAM_ROLES: ClassifierList;
            SPRGS_COVENANT_PERIOD: ClassifierList;
            SPRGS_COVENANT_STATUS: ClassifierList;
        }
        interface PhoneList {
            mobilePhone: string;
            workPhone: string;
            workPhoneExtension: string | null;
        }
        interface IosLocationCoordinates {
            timestamp: number;
            coords: IosLocationCoordinatesData;
        }
        interface IosLocationCoordinatesData {
            accuracy: number;
            altitude: number;
            altitudeAccuracy: number;
            heading: number;
            latitude: number;
            longitude: number;
            speed: number;
        }
        interface ClassifierNameList {
            data: string[];
        }
        interface ClassifierList {
            data: Classifier[];
        }
        interface UserAd {
            role: Enums.RoleAd | null;
        }
        interface Configuration {
            [key: string]: string;
        }
        interface MfmsSetting {
        }
        interface MfmsToken {
            token: string;
        }
        interface AppList {
            data: Enums.App[];
        }
        interface Employee {
            customerList: Models.Customer[];
            email: string;
            firstName: string;
            fullName: string;
            functionalDivisionName: string;
            head: Employee | null;
            id: string;
            isBlocked: boolean;
            isGeneral: boolean;
            jobTitle: string;
            lastName: string;
            middleName: string;
            mobilePhone: string;
            positionName: string;
            role: Classifier;
            roleAd: Enums.RoleAd | null;
            territorialDivisionName: string;
            workPhone: string;
            workPhoneExtension: string | null;
        }
        interface ContactParticipant {
            contactId: string;
            lastName: string;
            firstName: string;
            middleName: string;
            participantType: string;
            partLoanSum: number;
            partLoanCurrency: Classifier;
            role: string;
            birthday: Date | null;
        }
        interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy;
            contextId?: string;
        }
        interface Url {
            url: string;
            tagList: CacheTag[];
            cacheTime?: string;
        }
        interface LoggerConfig {
            logFileTTL: string;
            logStoreURL: string;
            logFileMaxSize: string;
            externalUZSUDIR: string;
            logUploadTimeout: string;
        }
        interface LoggerSuccess {
        }
        interface ChangePasswordRequest {
            oldPassword: string;
            newPassword1: string;
            newPassword2: string;
            username: string;
            loginFormType: string;
        }
        interface ChangePasswordInfo {
            success: boolean;
            code: string;
            title: string;
            message: string;
        }
        interface AgentSearchListRequestPerson {
            lastName: string;
            firstName: string;
            middleName: string;
        }
        interface AgentSearchListRequest {
            agent: {
                personType: AgentSearchListRequestPerson | null;
            };
            page: number;
        }
        interface Customer {
            id: string;
            name: string;
        }
        interface NavigateToEntity {
            navigationType: Enums.NavigationType;
            customer: ModelsCrm.Customer | null;
            customerMode: EnumsCrm.CustomerMode;
            agent: ModelsCrm.Agent | null;
            occasionId: string | null;
            occasionContextMode: EnumsCrm.OccasionContextMode;
            activity: ModelsScheduler.Activity | null;
            activityContextMode: EnumsScheduler.ActivityContextMode;
            deal: ModelsCrm.Deal | null;
            dealMode: EnumsCrm.DealMode;
            productCredit: ModelsCrm.SubCreditProduct | null;
            productPaymentAccount: ModelsCrm.SubPaymentAccountProduct | null;
            productDeposit: ModelsCrm.SubDepositProduct | null;
            productContractNso: ModelsCrm.SubContractNSOProduct | null;
            productContractSdo: ModelsCrm.SubContractSDOProduct | null;
            productBankGuarantee: ModelsCrm.SubBankGuaranteeProduct | null;
            productEncashmentExpiring: ModelsCrm.SubEncashmentContractProduct | null;
            qlikUrl: string | null;
            isHolding: boolean | null;
            valueString: string;
            gszId: string;
            productType: EnumsCrm.ProductType | null;
            isPrimary: boolean | null;
            returnId: string;
            eksId: string | null;
        }
    }
    interface IErrorModalProps {
        testID: string;
        repeat: (() => void) | null;
        cancel: () => void;
        cacheDate: Date | null;
        isCacheDateMessageVisible?: boolean;
        titleText: string | null;
        messageText: string | null;
        isVisible: boolean;
    }
    class ErrorModal extends React.Component<IErrorModalProps, void> {
    }
    interface ILoaderWithTextProps {
        testID: string;
        text?: string;
    }
    class LoaderWithText extends React.Component<ILoaderWithTextProps, void> {
    }
    interface IAlertViewProps {
        testID: string;
        ok: (() => void) | null;
        cancel: (() => void) | null;
        title: string | null;
        message: string | null;
        isVisible: boolean;
        wrapperStyle?: any;
        titleStyle?: any;
        messageStyle?: any;
    }
    class AlertView extends React.Component<IAlertViewProps, void> {
    }
    interface IInfinityGridProps {
        testID: string;
        cellList: JSX.Element[];
        colsInRow: number;
    }
    class InfinityGrid extends React.Component<IInfinityGridProps, void> {
    }
    interface IFullScreenErrorProps {
        testID: string;
        title: string;
        description: string | null;
        onRefresh: () => void | null;
    }
    class FullScreenError extends React.Component<IFullScreenErrorProps, void> {
    }
    interface IRefreshBarProps {
        performHide?: () => void;
        performRefresh: () => void;
        date: Date | null;
        testID: string;
        title?: string;
    }
    class RefreshBar extends React.Component<IRefreshBarProps, void> {
    }
    interface RowWithLabelProps {
        testID: string;
        labelText: string;
        mainText: string;
        labelHeader?: string;
    }
    class RowWithLabel extends React.Component<RowWithLabelProps, void> {
    }
    const ReducerRoot: any;
    export { Enums };
    const EnumsApp: any;
    interface IMrmkmcibLog {
        request: <TB>(method: string, url: string, headers: any, body: TB) => Promise<undefined>;
        response: (url: string, response: any) => Promise<undefined>;
        error: (url: string, error: Error) => Promise<undefined>;
    }
    const mrmkmcibLog: IMrmkmcibLog;
    function performNavigateToEntity(navigateToEntityData: Models.NavigateToEntity, navigateBackData?: Models.NavigateToEntity | null): void;
    function performNavigateBack(): void;
    function performNavigationReload(): void;
    function navigateBack(): void;
    function supParamNames(): Models.SupParamNames;
    const loaderCloseTimeout: number;
    function navigationExecutor(step: Enums.NavigationStep, navigationErrorMessage?: string | null): void;
    function catchNavigateBack(): boolean;
    function performAppOpen(app: Enums.App, resetToDefaultState?: boolean): void;
    function performModalEmailShow(personList: ModelsScheduler.PersonList, subject: string, content: string, isContentHTML: boolean, isSecureAddressOnly: boolean, attachmentPath: string, mailMode?: Enums.EmailPopoverMode): void;
    function performModalCertificateNotImportedHide(): void;
    function performModalCertificateNotImportedShow(): void;
    function navigateToEmailScreen(): void;
    function navigateProfileBack(): void;
    function performModalUserProfileHide(): void;
    function showAlert(text: string): void;
    function performUpdateIsUnreadNotice(isUnreadNotice: boolean): void;
    const Logger: LoggerService;
    const LoggerInterceptor: LoggerInterceptorType;
    const UserActivity: UserActivityType;
    const UserLogout: UserLogoutType;
    function swapAppContext(app?: Enums.App): void;
    function setPushNoticeListInProgressFalse(): void;
    const emailRegExp: RegExp;
    const HistoryMobileApp: {
        pushContent: (content: Models.HistoryMobileAppPushContent) => (dispatch: Function) => void;
        popContent: (splitPanelName: string) => (dispatch: Function) => Promise<Models.HistoryMobileAppContent>;
    };
    class ExtendedTable extends Table {
    }
    interface IExtendedTableCellProps {
        testID: string;
        style?: any;
        children?: any;
    }
    const ExtendedTableCell: React.StatelessComponent<IExtendedTableCellProps>;
    const IDateRangePickerProps: IDateRangePickerPropsType;
    class DateRangePicker extends React.Component<IDateRangePickerPropsType, IDateRangePickerState> {
    }
}
