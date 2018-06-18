/// <reference path="index.d.ts" />
/// <reference path="Enums.d.ts" />
/// <reference types="react" />
declare module 'mrmkmcib-dashboard' {
    import React from 'react';
    import Enums from 'Enums';
    import { Models as ModelsCrm } from 'mrmkmcib-crm';
    class ContainerAppDashboard extends React.Component<any, any> {
    }
    class ContainerCustomerDashboard extends React.Component<any, any> {
    }
    class ShareDataView extends React.Component<any, any> {
    }
    namespace Models {
        interface IPerformSend {
            exportFilters: string;
            emailList: string[];
        }
        interface QlikMessage {
            type: Enums.QlikEventType;
            payload: {
                currentUrl: string;
                customerId: string;
                dealId: string;
                activityId: string;
                qlikUrl: string;
                flag: number;
                defaultFileFormat: Enums.FileFormat;
                generateFileParameters: string;
            };
        }
        interface GenerateFileParameters {
            SettingsParameters: [{
                reportTitle: string;
                reportFormat: string;
            }];
            NPReportPOSTParameters: {
                config: {
                    outputFormat: string;
                    reportId: string;
                };
                connectionId: string;
                selections: [{
                    fieldName: string;
                    selectedCount: 1;
                    isNumeric: false;
                    selectedValues: string[];
                }];
                initiatorEmail: string;
                type: string;
                currentRepresentation: Enums.Representation;
            };
        }
        interface SearchHistoryList {
            data: ModelsCrm.Customer[];
            isCompleted: boolean;
        }
        interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy;
            contextId?: string;
        }
        interface Url {
            url: string;
            tagList: Array<CacheTag>;
        }
        interface SupParams {
            kmUrl: string;
            chiefUrl: string;
            accessMode: boolean;
        }
        interface ParamsPromise {
            params: any;
        }
    }
    const ReducerRoot: any;
    const EnumsDashboard: any;
    const thunkCustomerDashboard: any;
    namespace ModelsCustomerDashboard {
        interface PERFORM_SEND {
        }
        interface INPUT_SHARE_POPOVER_SEARCH_REFRESH {
        }
        interface INPUT_CURRENT_RECIPIENT_LIST_REFRESH {
        }
        interface INPUT_CURRENT_REPRESENTATION_REFRESH {
        }
        interface INPUT_CURRENT_FILE_FORMAT_REFRESH {
        }
        interface FOUND_PERSON_LIST_CLEAR {
        }
        interface PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS {
        }
        interface PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION {
        }
        interface PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT {
        }
        interface PERFORM_POPOVER_SHARE_NAVIGATE_BACK {
        }
        interface PERFORM_POPOVER_SHARE_SHOW {
            (): void;
        }
        interface PERFORM_POPOVER_SHARE_HIDE {
            (): void;
        }
        interface PERFORM_QLIK_EVENT {
        }
        interface SHARE_DATA_REFRESH {
        }
    }
    function setCurrentCustomerDashboardQlikUrl(url: string | null): void;
    function setCurrentAppDashboardQlikUrl(url: string | null): void;
    function performContainerAppDashboardReset(): void;
    function performContainerCustomerDashboardReset(): void;
    function setTrimmedTop(value: boolean): void;
    function sessionReset(user: string): void;
}
