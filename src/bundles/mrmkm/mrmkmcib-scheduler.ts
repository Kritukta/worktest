
declare module 'mrmkmcib-scheduler' {
    import React from 'react';

    export class ContainerAppScheduler extends React.Component<any, any> {}

    export class ContainerScope extends React.Component<any, any> {}

    export class ContainerActivity extends React.Component<any, any> {}

    export class ContainerEvent extends React.Component<any, any> {}

    export class ContainerPerson extends React.Component<any, any> {}


    export namespace Models {
        export interface EventList {
            // TODO Describe EventList model used in actions and thunks.
            data: Array<Event>,
            key:string,
            owaPerson: Person | null

        }

        export interface ActivityList {


            // TODO Describe ActivityList model used in actions and thunks.

            data: Array<Activity>,


        }


        export interface ActivityListPage {


            // TODO Describe ActivityListPage model used in actions and thunks.

            data: Array<Activity>,
            isLast: boolean,


        }

        export type ActivityUserRole = Enums.ActivityUserRole | Array<Enums.ActivityUserRole>
        export interface  PinnedActivity {
            id: string,
            customer: ModelsCrm.Customer | null,
            deal: ModelsCrm.Deal | null,
            type: ModelsApp.Classifier | null,
            description: string | null,
            priority: ModelsApp.Classifier | null,
            status: ModelsApp.Classifier | null,
            dueDate: Date | null,
            memberList: ModelsCrm.MemberList,
            agentList: ModelsCrm.AgentList,
            source: string | null,
            author: ModelsApp.Employee | null,
            isPinned: boolean,

        }
        export interface Activity {

            // TODO Describe Activity model used in actions and thunks.

            id: string;
            deal: ModelsCrm.Deal | null;
            gsz: ModelsCrm.Gsz | null;
            modId: number;
            result: ModelsApp.Classifier | null;
            customer: ModelsCrm.Customer | null;
            comment: string;
            description: string | null;
            source: string | null;
            campaignName: string | null;
            plannedStart: Date | null;
            isPinned: boolean;
            isReqApproval: boolean;
            nextAvailableStatusList: ModelsApp.ClassifierList;
            availableResultList: ModelsApp.ClassifierList;
            autoUpdateStatus: ModelsApp.Classifier | null;
            agentList: ModelsCrm.AgentList;
            accessLevel: Enums.ActivityAccessLevel;

            // Filterable fields:
            urgency: Enums.ActivityUrgency;
            priority: ModelsApp.Classifier | null;
            status: ModelsApp.Classifier | null;
            parentCustomer: ModelsCrm.Customer | null;
            type: ModelsApp.Classifier | null;
            roleType: ActivityUserRole;
            memberList: ModelsCrm.MemberList;
            author: ModelsApp.Employee | null;
            dueDate: Date | null;
        }

        export interface Event {


            id: string,
            eventId:number,
            participantList: PersonList | null,
            icons: Array<Enums.EventIcon> | null,
            selected: boolean,
            isHoliday: boolean,
            isRecurring: boolean,
            type: Enums.EventType
            color: Enums.EventColor,
            description: string,
            title: string,
            endDate: Date,
            startDate: Date,
            isAllDay: boolean,
            isAccepted: boolean,
            location:string | null,
            isAttachment: boolean,
            locationTeleConference: string | null,
            locationVideoConference: string | null,
            organizer: Person | null,
            isOrganizer: boolean,
            owaConversationId: {Id:string,ChangeKey:string} | null,
            owaItemId:{Id:string,ChangeKey:string}


        }

        export interface EventLocationCoordinates {

            locationName: string,
            latitude: number,
            longitude: number

        }


        export interface PersonList {


            // TODO Describe PersonList model used in actions and thunks.

            data: Person[],


        }

        export interface Person {

            id: string,
            email: string,
            name: string | null,
            firstName: string | null,
            lastName: string | null,
            middleName: string | null,
            division: string | null,
            position: string | null,
            companyName: string | null,
            city: string | null,
            workPhone: string | null

        }


        export interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy,
            contextId?: string,
        }

        export interface Url {
            url: string,
            tagList: Array<CacheTag>,
            cacheTime?: string,
        }



        export interface AgentSearchListRequest {
            agent: {
                personType: {
                    lastName: string
                }
            },
            page: number,
        }


        export interface  ClassifierRequest {
            classifierName: string,
            value: string,
            code: string
        }
        export interface  ActivityEmployeeRequest {
            member: {person: {id: string}},
            isGeneral: boolean,
        }
        export interface  ActivityEmployeeWithRoleRequest {
            member: {person: {id: string, role: string}},
            isGeneral: boolean,
        }
        export interface ActivityAgentRequest {
            id: string;
        }
        export interface  ResponseActivityRequest {
                id: string,
                modId: number,
        }
        export interface ActivityRequest {
            id: string | null;
            modId: number | null;
            client: {id: string } | null;
            deal: {id: string} | null;
            type: ClassifierRequest | null;
            description: string;
            result: ClassifierRequest | null;
            priority: ClassifierRequest | null;
            plannedCompletion: string | null;
            statusClassifier: ClassifierRequest | null;
            comment: string | null;
            agents: ActivityAgentRequest[];
            team: ActivityEmployeeRequest[];
            parentAccountId: string | null;
            gszId: string | null;
            dealId: string  | null;
        }

        export interface Member {
            id: string,
            isGeneral: boolean
        }

        export interface ActivityMemberListSaveRequest {

        }


        interface Error {
            type: Enums.ErrorType,
            code: string;
            message: string;
            comment: string;
        }

    }

    export const ReducerRoot: any



    import {Models as ModelsApp} from "mrmkmcib-app"
    import {Models as ModelsCrm} from "mrmkmcib-crm"
    import {Enums} from "Enums"
    import {Models} from "mrmkmcib-scheduler"
    export {Enums}

    export const EnumsScheduler:any;
    export function performPersonOpen(app: Models.Person): void;
    export function getCurrentExchangePerson(): void;
    export function performReturnToActivityScreen(): void;
    export function performCloseActivityScreen(activityContextMode: Enums.ActivityContextMode): void;
    export function swapContextMemberList(memberList: ModelsCrm.MemberList): void;
    export function swapContextAgentList(agentList: ModelsCrm.AgentList, isChanged: boolean): void;
    export function performContainerScopeReset(instanceType: Enums.SchedulerMode): void;
    export function performActivityListSearchFieldStatus(instanceType: Enums.SchedulerMode, status: boolean): void;
    export function performInputActivityListSearchString(instanceType: Enums.SchedulerMode, value: string): void;
    export function performActivityListRefreshCacheReset(instanceType: Enums.SchedulerMode, currentEmployee: ModelsApp.Employee, currentDeal: ModelsCrm.Deal, currentCustomer: ModelsCrm.Customer, currentAgent: ModelsCrm.Agent, mode: Enums.SchedulerMode): void;
    export function performActivityListRefresh(instanceType: Enums.SchedulerMode, currentEmployee: ModelsApp.Employee, currentDeal: ModelsCrm.Deal, currentCustomer: ModelsCrm.Customer, currentAgent: ModelsCrm.Agent): void;

    export function performInputActivity(
        activityListContextMode: Enums.SchedulerMode,
        activity: Models.Activity,
        activityMode: Enums.ActivityMode,
        activityContextMode: Enums.ActivityContextMode
    ): void;
    export function performOpenActivityScreen(
        activityListContextMode: Enums.SchedulerMode,
        activity: Models.Activity,
        activityMode: Enums.ActivityMode
    ): void;

    export function performSetActivityListNavigationMode(instanceType: Enums.SchedulerMode, ActivityListNavigationMode: Enums.ActivityListNavigationMode): void;
    export function performActivityActiveOpenById(activityId: string, activityMode: Enums.ActivityMode): void;
    export function performActivityCloseOpenById(activityId: string, activityMode: Enums.ActivityMode): void;
    /*Tests only export statement*/
    export const Converters: any;
    export function callSendActivitySave(activity: Models.Activity): void;
    export function performUnBoundActivityFromDeal(activity: Models.Activity): void;
    export function performActivityOpenByIdFromPush(
        activityListContextMode: Enums.SchedulerMode,
        activityId: string,
        activityContextMode: Enums.ActivityContextMode,
        customerId?: string
    ): void;
    export function performFlushActivityList(isActive: boolean): void;
    export function navigateToActivityAgentScreen(): void;
    export function sessionReset(user: string): void;
}
