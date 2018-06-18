/// <reference types="react" />
declare module 'mrmkmcib-scheduler' {
    import React from 'react';
    class ContainerAppScheduler extends React.Component<any, any> {
    }
    class ContainerScope extends React.Component<any, any> {
    }
    class ContainerActivity extends React.Component<any, any> {
    }
    class ContainerEvent extends React.Component<any, any> {
    }
    class ContainerPerson extends React.Component<any, any> {
    }
    namespace Models {
        interface EventList {
            data: Array<Event>;
            key: string;
            owaPerson: Person | null;
        }
        interface ActivityList {
            data: Array<Activity>;
        }
        interface ActivityListPage {
            data: Array<Activity>;
            isLast: boolean;
        }
        type ActivityUserRole = Enums.ActivityUserRole | Array<Enums.ActivityUserRole>;
        interface PinnedActivity {
            id: string;
            customer: ModelsCrm.Customer | null;
            deal: ModelsCrm.Deal | null;
            type: ModelsApp.Classifier | null;
            description: string | null;
            priority: ModelsApp.Classifier | null;
            status: ModelsApp.Classifier | null;
            dueDate: Date | null;
            memberList: ModelsCrm.MemberList;
            agentList: ModelsCrm.AgentList;
            source: string | null;
            author: ModelsApp.Employee | null;
            isPinned: boolean;
        }
        interface Activity {
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
        interface Event {
            id: string;
            eventId: number;
            participantList: PersonList | null;
            icons: Array<Enums.EventIcon> | null;
            selected: boolean;
            isHoliday: boolean;
            isRecurring: boolean;
            type: Enums.EventType;
            color: Enums.EventColor;
            description: string;
            title: string;
            endDate: Date;
            startDate: Date;
            isAllDay: boolean;
            isAccepted: boolean;
            location: string | null;
            isAttachment: boolean;
            locationTeleConference: string | null;
            locationVideoConference: string | null;
            organizer: Person | null;
            isOrganizer: boolean;
            owaConversationId: {
                Id: string;
                ChangeKey: string;
            } | null;
            owaItemId: {
                Id: string;
                ChangeKey: string;
            };
        }
        interface EventLocationCoordinates {
            locationName: string;
            latitude: number;
            longitude: number;
        }
        interface PersonList {
            data: Person[];
        }
        interface Person {
            id: string;
            email: string;
            name: string | null;
            firstName: string | null;
            lastName: string | null;
            middleName: string | null;
            division: string | null;
            position: string | null;
            companyName: string | null;
            city: string | null;
            workPhone: string | null;
        }
        interface CacheTag {
            tag: string | Enums.CacheContext | Enums.CachePolicy;
            contextId?: string;
        }
        interface Url {
            url: string;
            tagList: Array<CacheTag>;
            cacheTime?: string;
        }
        interface AgentSearchListRequest {
            agent: {
                personType: {
                    lastName: string;
                };
            };
            page: number;
        }
        interface ClassifierRequest {
            classifierName: string;
            value: string;
            code: string;
        }
        interface ActivityEmployeeRequest {
            member: {
                person: {
                    id: string;
                };
            };
            isGeneral: boolean;
        }
        interface ActivityEmployeeWithRoleRequest {
            member: {
                person: {
                    id: string;
                    role: string;
                };
            };
            isGeneral: boolean;
        }
        interface ActivityAgentRequest {
            id: string;
        }
        interface ResponseActivityRequest {
            id: string;
            modId: number;
        }
        interface ActivityRequest {
            id: string | null;
            modId: number | null;
            client: {
                id: string;
            } | null;
            deal: {
                id: string;
            } | null;
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
            dealId: string | null;
        }
        interface Member {
            id: string;
            isGeneral: boolean;
        }
        interface ActivityMemberListSaveRequest {
        }
        interface Error {
            type: Enums.ErrorType;
            code: string;
            message: string;
            comment: string;
        }
    }
    const ReducerRoot: any;
    import { Models as ModelsApp } from "mrmkmcib-app";
    import { Models as ModelsCrm } from "mrmkmcib-crm";
    import { Enums } from 'Enums';
    import { Models } from "mrmkmcib-scheduler";
    export { Enums };
    const EnumsScheduler: any;
    function performPersonOpen(app: Models.Person): void;
    function getCurrentExchangePerson(): void;
    function performReturnToActivityScreen(): void;
    function performCloseActivityScreen(activityContextMode: Enums.ActivityContextMode): void;
    function swapContextMemberList(memberList: ModelsCrm.MemberList): void;
    function swapContextAgentList(agentList: ModelsCrm.AgentList, isChanged: boolean): void;
    function performContainerScopeReset(instanceType: Enums.SchedulerMode): void;
    function performActivityListSearchFieldStatus(instanceType: Enums.SchedulerMode, status: boolean): void;
    function performInputActivityListSearchString(instanceType: Enums.SchedulerMode, value: string): void;
    function performActivityListRefreshCacheReset(instanceType: Enums.SchedulerMode, currentEmployee: ModelsApp.Employee, currentDeal: ModelsCrm.Deal, currentCustomer: ModelsCrm.Customer, currentAgent: ModelsCrm.Agent, mode: Enums.SchedulerMode): void;
    function performActivityListRefresh(instanceType: Enums.SchedulerMode, currentEmployee: ModelsApp.Employee, currentDeal: ModelsCrm.Deal, currentCustomer: ModelsCrm.Customer, currentAgent: ModelsCrm.Agent): void;
    function performInputActivity(activityListContextMode: Enums.SchedulerMode, activity: Models.Activity, activityMode: Enums.ActivityMode, activityContextMode: Enums.ActivityContextMode): void;
    function performOpenActivityScreen(activityListContextMode: Enums.SchedulerMode, activity: Models.Activity, activityMode: Enums.ActivityMode): void;
    function performSetActivityListNavigationMode(instanceType: Enums.SchedulerMode, ActivityListNavigationMode: Enums.ActivityListNavigationMode): void;
    function performActivityActiveOpenById(activityId: string, activityMode: Enums.ActivityMode): void;
    function performActivityCloseOpenById(activityId: string, activityMode: Enums.ActivityMode): void;
    const Converters: any;
    function callSendActivitySave(activity: Models.Activity): void;
    function performUnBoundActivityFromDeal(activity: Models.Activity): void;
    function performActivityOpenByIdFromPush(activityListContextMode: Enums.SchedulerMode, activityId: string, activityContextMode: Enums.ActivityContextMode, customerId?: string): void;
    function performFlushActivityList(isActive: boolean): void;
    function navigateToActivityAgentScreen(): void;
    function sessionReset(user: string): void;
}
