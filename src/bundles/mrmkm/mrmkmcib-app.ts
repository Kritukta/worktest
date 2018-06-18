///<reference path='./index.ts' />

declare module 'mrmkmcib-app' {
    import React from 'react';
    import {Models} from "mrmkmcib-app"
    import {Enums as EnumsCrm, Models as ModelsCrm} from "mrmkmcib-crm"
    import {Models as ModelsScheduler, Enums as EnumsScheduler} from "mrmkmcib-scheduler"
    import {Enums} from 'Enums'
    import {Table} from 'ufs-mobile-platform'

    import LoggerService from 'mrmkmcib-app/modules/Logger'
    import {LoggerInterceptorType} from 'mrmkmcib-app/middleware/LoggerInterceptor'
    import {UserActivityType} from 'mrmkmcib-app/middleware/UserActivity'
    import {UserLogoutType} from 'mrmkmcib-app/middleware/UserLogout'
    import {IDateRangePickerProps as IDateRangePickerPropsType, IDateRangePickerState} from 'mrmkmcib-app/components/shared/DateRangePicker'

    export class ContainerAppMRMKMCIB extends React.Component<any, any> {
    }

    export class ContainerAuthorization extends React.Component<any, any> {
    }

    export class ContainerWorkspace extends React.Component<any, any> {
    }

    export class ContainerEmail extends React.Component<any, any> {
    }

    export class ContainerProfile extends React.Component<any, any> {
    }

    export function swapContentCurrentCoordinates(): void;

    export interface ILabelWithPopover {
        testID: string,
        labelText?: string,
        popoverType?: any,
        popoverStyle?: any,
        labelTitle?: string,
        onPress?: ()=> void,
        positionPopoverList?: any[],
        iconType?: any,
        styleContainer?: any,
        hasBorderBottom?: boolean,


        textLeftPageHeaderButton?: string | null,
        textRightPageHeaderButton?: string | null,
        onClickRightPageHeaderButton?: ()=> void;
        onClickLeftPageHeaderButton?: ()=> void;
        popoverCenterPageHeaderTitle?: string,
        popoverPageContent: any,
        scrollEnabled?: boolean,
        disabledRightPageHeaderButton?: boolean,
        disabledLeftPageHeaderButton?: boolean,
    }

    export class LabelWithPopover extends React.Component<ILabelWithPopover, {}> {}

    export namespace Models {

        export interface Classifier {


            // TODO Describe Classifier model used in actions and thunks.

            parentId: string | null,
            name: string,
            value: string,
            code: string


        }

        export type SupParamsDeal = {
            DealSalesMethod: string,
            DealApprovedStatusList: string,
            DealSalesMethodRoadMapStandard: string,
            DealSalesMethodRoadMapCredit: string,
        }

        export type SupParamNames = SupParamsDeal & {
            AppServerId: string,
            AppServerURL: string,
            DashboardKmURL: string,
            DashboardChiefURL: string,
            UniversalSaleTeamRoles: string,
            CacheEksPolicyMaxTTL: string,
            NumberDaysInFavorite: string,
            EcmTargetRoot: string,
            EcmTfsCachePolicyMaxTTL: string,
            EcmTfsCachePolicyType: string,
            EcmTfsScenarioId: string,
            EcmTfsUser: string,
            TfsDownloadURL: string,
            TfsURL: string,
            FrequencyViewMeeting: string,
            NoticeMeeting: string,
            LogFileMaxSize: string,
            LogFileTTL: string,
            LogUploadTimeout: string,
            LogStoreURL: string,
            MobileCachingTTL: string,
            ChangePasswordURL: string,
            StatusRequestMaxPeriod: string,
            RejectedList: string,
            dashboardExportAccessMode: string,
            PaymentScheduleOffsetBegin: string,
            PaymentScheduleOffsetEnd: string,
            [key: string]: string,
        }

        export interface HistoryAgentData {
            data: ModelsCrm.Agent,
            customer: ModelsCrm.Customer,
            contextMode: EnumsCrm.AgentContextMode,
        }
        export interface HistoryActivityData {
            data: ModelsScheduler.Activity,
            activityMode: EnumsScheduler.ActivityMode,
            activityListContextMode: EnumsScheduler.SchedulerMode,
            activityContextMode: EnumsScheduler.ActivityContextMode,
        }
        export interface HistoryAgentListData {
            data: ModelsCrm.AgentList,
            customer?: ModelsCrm.Customer,
            deal?: ModelsCrm.Deal,
            contextMode: EnumsCrm.AgentListContextMode,
            accessLevel: EnumsCrm.AgentListAccessLevel,
        }
        export interface HistoryMobileAppData {
            customerManaged: ModelsCrm.CustomerManaged | null,
            customer: ModelsCrm.Customer | null,
            agent: HistoryAgentData | null,
            agentList: HistoryAgentListData | null,
            activity: HistoryActivityData | null,
            deal: ModelsCrm.Deal | null,
            qlikUrl: string | null
        }

        export interface HistoryMobileAppContent {
            scene: number | null,
            type: Enums.HistoryMobileAppType,
            payload: HistoryMobileAppData | null;
        }
        export interface HistoryMobileAppPushContent {
            splitPanelName: string;
            index: number | null;
            type: Enums.HistoryMobileAppType,
            data: HistoryMobileAppData | null;
        }
        export interface ClassifierDictionary {


            // TODO Describe ClassifierDictionary model used in actions and thunks.

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

        export interface PhoneList {
            mobilePhone: string,
            workPhone: string,
            workPhoneExtension: string | null
        }

        export interface IosLocationCoordinates {

            timestamp: number,
            coords: IosLocationCoordinatesData

        }

        export interface IosLocationCoordinatesData {

            accuracy: number
            altitude: number,
            altitudeAccuracy: number,
            heading: number,
            latitude: number,
            longitude: number,
            speed: number

        }

        export interface ClassifierNameList {


            data: string[],


        }

        export interface ClassifierList {


            // TODO Describe ClassifierList model used in actions and thunks.

            data: Classifier[]


        }

        export interface UserAd {


            // TODO Describe UserAd model used in actions and thunks.

            role: Enums.RoleAd | null,


        }

        export interface Configuration {

            [key: string]: string;
            // TODO Describe Configuration model used in actions and thunks.


        }

        export interface MfmsSetting {


            // TODO Describe MfmsSetting model used in actions and thunks.


        }

        export interface MfmsToken {


            // TODO Describe MfmsToken model used in actions and thunks.

            token: string,


        }

        export interface AppList {


            // TODO Describe AppList model used in actions and thunks.

            data: Enums.App[],


        }

        export interface Employee {

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

        export interface ContactParticipant {
            contactId: string,
            lastName: string,
            firstName: string,
            middleName: string,
            participantType: string
            partLoanSum: number,
            partLoanCurrency: Classifier
            role: string,
            birthday: Date | null
        }

        export interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy,
            contextId?: string,
        }

        export interface Url {
            url: string,
            tagList: CacheTag[],
            cacheTime?: string,
        }


        export interface LoggerConfig {
            logFileTTL: string,
            logStoreURL: string,
            logFileMaxSize: string,
            externalUZSUDIR: string,
            logUploadTimeout: string,
        }

        export interface LoggerSuccess {

        }

        export interface ChangePasswordRequest {
            oldPassword: string,
            newPassword1: string,
            newPassword2: string,
            username: string,
            loginFormType: string
        }

        export interface ChangePasswordInfo {
            success: boolean,
            code: string,
            title: string,
            message: string,
        }

        export interface AgentSearchListRequestPerson {
            lastName: string,
            firstName: string,
            middleName: string,
        }
        export interface AgentSearchListRequest {
            agent: {
                personType: AgentSearchListRequestPerson | null
            },
            page: number,
        }

        export interface Customer {
            // TODO Describe Customer model used in actions and thunks.
            id: string,
            name: string
        }

        export interface NavigateToEntity {
            navigationType: Enums.NavigationType,
            customer: ModelsCrm.Customer | null,
            customerMode: EnumsCrm.CustomerMode,
            agent: ModelsCrm.Agent | null,
            occasionId: string | null,
            occasionContextMode: EnumsCrm.OccasionContextMode,
            activity: ModelsScheduler.Activity | null,
            activityContextMode: EnumsScheduler.ActivityContextMode,
            deal: ModelsCrm.Deal | null,
            dealMode: EnumsCrm.DealMode,
            productCredit: ModelsCrm.SubCreditProduct | null,
            productPaymentAccount: ModelsCrm.SubPaymentAccountProduct | null,
            productDeposit: ModelsCrm.SubDepositProduct | null,
            productContractNso: ModelsCrm.SubContractNSOProduct | null,
            productContractSdo: ModelsCrm.SubContractSDOProduct | null,
            productBankGuarantee: ModelsCrm.SubBankGuaranteeProduct | null,
            productEncashmentExpiring: ModelsCrm.SubEncashmentContractProduct | null,
            qlikUrl: string | null,
            isHolding: boolean | null,
            valueString: string,
            gszId: string,
            productType: EnumsCrm.ProductType | null,
            isPrimary: boolean | null,
            returnId: string,
            eksId: string | null,
        }
    }

    export interface IErrorModalProps {
        testID: string;
        repeat: (() => void) | null;
        cancel: () => void;
        cacheDate: Date | null;
        isCacheDateMessageVisible?: boolean
        titleText: string | null;
        messageText: string | null;
        isVisible: boolean
    }
    export class ErrorModal extends React.Component<IErrorModalProps, void> {

    }



    export interface ILoaderWithTextProps {
        testID: string;
        text?: string,
    }
    export class LoaderWithText extends React.Component<ILoaderWithTextProps, void> {

    }

    export interface IAlertViewProps {
        testID: string;
        ok: (() => void) | null;
        cancel: (() => void) | null;
        title: string | null;
        message: string | null;
        isVisible: boolean;
        wrapperStyle?: any,
        titleStyle?: any,
        messageStyle?: any,
    }

    export class AlertView extends React.Component<IAlertViewProps, void> {

    }

    export interface IInfinityGridProps {
        testID: string,
        cellList: JSX.Element[],
        colsInRow: number,
    }

    export class InfinityGrid extends React.Component<IInfinityGridProps, void> {

    }

    export interface IFullScreenErrorProps {
        testID: string,
        title: string,
        description: string | null,
        onRefresh: () => void | null,
    }

    export class FullScreenError extends React.Component<IFullScreenErrorProps, void> {

    }

    export interface IRefreshBarProps {
        performHide?: () => void,
        performRefresh: () => void,
        date: Date | null,
        testID: string,
        title?: string,
    }

    export class RefreshBar extends React.Component<IRefreshBarProps, void> { }

    export interface RowWithLabelProps {
        testID: string,
        labelText: string,
        mainText: string,
        labelHeader?: string,
    }
    export class RowWithLabel extends React.Component<RowWithLabelProps, void> { }

    export const ReducerRoot: any

    export {Enums}

    export const EnumsApp: any;

    export interface IMrmkmcibLog {
        request: <TB>(method: string, url: string, headers: any, body: TB) => Promise<undefined>;
        response: (url: string, response: any) => Promise<undefined>;
        error: (url: string, error: Error) => Promise<undefined>;
    }

    export const mrmkmcibLog: IMrmkmcibLog;

    export function performNavigateToEntity(navigateToEntityData: Models.NavigateToEntity, navigateBackData?: Models.NavigateToEntity | null): void;
    export function performNavigateBack(): void;
    export function performNavigationReload(): void;
    export function navigateBack(): void;
    export function supParamNames(): Models.SupParamNames;
    export const loaderCloseTimeout: number;

    export function navigationExecutor(step: Enums.NavigationStep, navigationErrorMessage?: string | null):void
    export function catchNavigateBack(): boolean

    export function performAppOpen(app: Enums.App, resetToDefaultState?: boolean): void;

    export function performModalEmailShow(
        personList: ModelsScheduler.PersonList,
        subject: string,
        content: string,
        isContentHTML: boolean,
        isSecureAddressOnly: boolean,
        attachmentPath: string,
        mailMode?: Enums.EmailPopoverMode
    ): void;
    export function performModalCertificateNotImportedHide(): void;
    export function performModalCertificateNotImportedShow(): void;
    export function navigateToEmailScreen(): void;
    export function navigateProfileBack(): void;
    export function performModalUserProfileHide(): void;
    export function showAlert(text: string): void;
    export function performUpdateIsUnreadNotice(isUnreadNotice: boolean): void;

    export const Logger: LoggerService;
    export const LoggerInterceptor: LoggerInterceptorType;
    export const UserActivity: UserActivityType;
    export const UserLogout: UserLogoutType;
    export function swapAppContext(app?: Enums.App): void;
    export function setPushNoticeListInProgressFalse(): void;

    export const emailRegExp: RegExp

    export const HistoryMobileApp: {
        pushContent: (content: Models.HistoryMobileAppPushContent)   => (dispatch: Function) => void;
        popContent: (splitPanelName: string) => (dispatch: Function) => Promise<Models.HistoryMobileAppContent>;
    }

    export class ExtendedTable extends Table {}

    export interface IExtendedTableCellProps {
        testID: string;
        style?: any;
        children?: any;
    }

    export const ExtendedTableCell: React.StatelessComponent<IExtendedTableCellProps>

    export const IDateRangePickerProps: IDateRangePickerPropsType;

    export class DateRangePicker extends React.Component<IDateRangePickerPropsType, IDateRangePickerState> {
    }

}
