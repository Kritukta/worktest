///<reference path='./index.ts' />
///<reference path='Enums.ts' />

declare module 'mrmkmcib-dashboard' {
    import React from 'react';
    import Enums from 'Enums';
    import {Models as ModelsCrm} from 'mrmkmcib-crm';

    export class ContainerAppDashboard extends React.Component<any, any> {
    }

    export class ContainerCustomerDashboard extends React.Component<any, any> {
    }

    export class ShareDataView extends React.Component<any,any> {
    }


    export namespace Models {

        export interface IPerformSend {
            exportFilters: string,
            emailList: string[]
        }

        export interface QlikMessage {
            type: Enums.QlikEventType,
            payload: {
                currentUrl: string,
                customerId:  string,
                dealId: string,
                activityId: string,
                qlikUrl: string,
                flag: number,
                defaultFileFormat: Enums.FileFormat
                generateFileParameters: string,
             }
        }

        export interface GenerateFileParameters {
            SettingsParameters: [
                {
                    reportTitle: string,
                    reportFormat: string
                }
            ],
            NPReportPOSTParameters: {
                config: {
                    outputFormat: string,
                    reportId: string
                },
                connectionId: string,
                selections: [
                    {
                        fieldName: string,
                        selectedCount: 1,
                        isNumeric: false,
                        selectedValues: string[]
                    }
                ],
                initiatorEmail: string,
                type: string,
                currentRepresentation: Enums.Representation
            }
        }


        export interface SearchHistoryList {


            // TODO Describe SearchHistoryList model used in actions and thunks.

            data: ModelsCrm.Customer[],
            isCompleted: boolean,


        }


        export interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy,
            contextId?: string
        }

        export interface Url {
            url: string,
            tagList: Array<CacheTag>
        }

        export interface SupParams {

            kmUrl: string,
            chiefUrl: string,
            accessMode: boolean
        }


        export interface ParamsPromise {
            params: any
        }
    }

    export const ReducerRoot: any

    export const EnumsDashboard: any;

    export const {thunkCustomerDashboard}: any;

    export namespace ModelsCustomerDashboard {
        export interface PERFORM_SEND {}
        export interface INPUT_SHARE_POPOVER_SEARCH_REFRESH {}
        export interface INPUT_CURRENT_RECIPIENT_LIST_REFRESH {}
        export interface INPUT_CURRENT_REPRESENTATION_REFRESH {}
        export interface INPUT_CURRENT_FILE_FORMAT_REFRESH {}
        export interface FOUND_PERSON_LIST_CLEAR {}
        export interface PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS {}
        export interface PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION {}
        export interface PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT {}
        export interface PERFORM_POPOVER_SHARE_NAVIGATE_BACK {}
        export interface PERFORM_POPOVER_SHARE_SHOW {(): void}
        export interface PERFORM_POPOVER_SHARE_HIDE {(): void}
        export interface PERFORM_QLIK_EVENT {}
        export interface SHARE_DATA_REFRESH {}
    }

    export function setCurrentCustomerDashboardQlikUrl(url: string | null): void;
    export function setCurrentAppDashboardQlikUrl(url: string | null): void;
    export function performContainerAppDashboardReset(): void;
    export function performContainerCustomerDashboardReset(): void;
    export function setTrimmedTop(value: boolean): void;
    export function sessionReset(user: string): void;
}
