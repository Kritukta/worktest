/// <reference types="react" />
declare module "mrmkmcib-crm" {
    import React, { ReactNode } from "react";
    import { Models as ModelsApp } from "mrmkmcib-app";
    import { Models as ModelsCrm } from "mrmkmcib-crm";
    import { Models as ModelsSheduler } from "mrmkmcib-scheduler";
    import { Enums } from "Enums";
    class ContainerAppCRM extends React.Component<any, any> {
    }
    class ContainerCustomer extends React.Component<any, any> {
    }
    class ContainerCustomerEditor extends React.Component<any, any> {
    }
    class ContainerDealEditor extends React.Component<any, any> {
    }
    class ContainerDealList extends React.Component<any, any> {
    }
    class ContainerProductList extends React.Component<any, any> {
    }
    class ContainerProduct extends React.Component<any, any> {
    }
    class ContainerProductPaymentAccount extends React.Component<any, any> {
    }
    class ContainerProductCredit extends React.Component<any, any> {
    }
    class ContainerGSZ extends React.Component<any, any> {
    }
    class ContainerGszActivityInclude extends React.Component<any, any> {
    }
    class ContainerGszActivityExclude extends React.Component<any, any> {
    }
    class ContainerCustomerActivityInclude extends React.Component<any, any> {
    }
    class ContainerCustomerActivityExclude extends React.Component<any, any> {
    }
    class ContainerLimit extends React.Component<any, any> {
    }
    class ContainerDeal extends React.Component<any, any> {
    }
    class ContainerEmployee extends React.Component<any, any> {
    }
    class ContainerAgent extends React.Component<any, any> {
    }
    class ContainerAgentList extends React.Component<any, any> {
    }
    class ContainerMemberList extends React.Component<any, any> {
    }
    class ContainerOccasionList extends React.Component<any, any> {
    }
    class ContainerOccasion extends React.Component<any, any> {
    }
    class ContainerNoteList extends React.Component<any, any> {
    }
    class ContainerNote extends React.Component<any, any> {
    }
    class ContainerForecastEventEditor extends React.Component<any, any> {
    }
    namespace Models {
        interface FilterOrganizationStructureList {
        }
        interface FilterMemberRoleList {
        }
        interface CustomerManagedList {
            data: Array<CustomerManaged>;
            isCompleted: boolean;
        }
        interface ErrorModalWindow {
            repeat: Function;
            cancel: Function;
            cacheDate: Date | null;
            message: string | null;
            title: string | null;
        }
        interface CustomerManagedListPage {
            data: Array<CustomerManaged>;
            isLast: boolean;
        }
        interface CustomerListPage {
            data: Array<Customer>;
            isLast: boolean;
        }
        interface IGetProductListRequest {
            cachePolicy?: Enums.CachePolicy;
            ttl: string;
            type: Enums.ProductType;
            force: boolean;
            update: boolean;
            active: boolean;
        }
        interface FillCreateEventPopupData {
            forecastEventPossibility: Enums.ForecastEventPossibility;
            forecastEventEmail: string;
            currencyClassifier: ModelsApp.Classifier | null;
            showForecastEvent: ForecastEvent;
        }
        interface CustomerRating {
            approvalDate: Date | null;
            value: string | null;
        }
        interface CustomerUnknown {
            hierarchy: HierarchyList;
            id: string;
            name: string;
            shortName: string;
            role: ModelsApp.Classifier;
            legalForm: ModelsApp.Classifier;
            organizationType: ModelsApp.Classifier;
            isNSL: boolean;
            isHolding: boolean;
            isOldNkp: boolean;
            isTempBlockedForOppty: boolean;
            isExistPrimaryAddress: boolean;
            modId: number;
            memberList: MemberList;
            segment: ModelsApp.Classifier;
            category: ModelsApp.Classifier;
            status: ModelsApp.Classifier;
            holder: ModelsApp.Employee | null;
            curator: ModelsApp.Employee | null;
            gsz: Gsz | null;
            registrationCountry: string;
            partnership: ModelsApp.Classifier | null;
            troubleGroup: ModelsApp.Classifier;
            troubleCriteriaList: TroubleCriteriaList | null;
            ownerList: Array<Owner>;
            sector: ModelsApp.Classifier;
            resident: ModelsApp.Classifier;
            kindOfIndustry: ModelsApp.Classifier;
            kpp: string;
            inn: string;
            kio: string;
            agentList: AgentList;
            noteList: NoteList;
            occasionList: OccasionList;
            anchorOrganisation: string;
            supervisingDepartment: string | null;
            address: Address;
            rating: CustomerRating | null;
            affiliateList: CustomerList | null;
            priority: ModelsApp.Classifier | null;
        }
        interface HierarchyList {
            length: number;
        }
        interface LimitOld {
            currency: ModelsApp.Classifier;
            amount: LimitOldValues;
            amountUnused: LimitOldValues;
            amountPredicted: LimitOldValues;
            amountApproved: LimitOldValues;
        }
        interface Owner {
            ownerType: Enums.OwnerType;
            name: string;
            percent: number;
            inn?: number;
            kpp?: number;
            organizationId?: string;
            contactId?: string;
            ownPeriod?: number;
            birthdayDate?: Date;
            registrationInfo?: string;
            address?: string;
        }
        interface DealListFilter {
            stage: ModelsApp.Classifier | null;
            role: ModelsApp.Classifier | null;
            products: ModelsApp.ClassifierList | null;
            currency: ModelsApp.Classifier | null;
            sumFrom: string | null;
            sumTo: string | null;
            dateFrom: Date | null;
            dateTo: Date | null;
        }
        interface DealList {
            data: Array<Deal>;
        }
        interface DealListPage {
            data: Array<Deal>;
            isLast: boolean;
        }
        interface CreditProductList {
            data: CreditProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface SettlementAgreementProductList {
            data: SettlementAgreementProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface DepositProductList {
            data: DepositProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface CorporateCardProductList {
            data: CorporateCardProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface EncashmentContractProductList {
            data: EncashmentContractProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface LegalInfoProductList {
            data: LegalInfoProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface AcquiringProductList {
            data: AcquiringProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface DboProductList {
            data: DboProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface UdboProductList {
            data: UdboProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface SalaryProductList {
            data: SalaryProduct[];
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface DepositProduct {
            productType: Enums.ProductType;
            depositProduct: SubDepositProduct | null;
            contractSDO: SubContractSDOProduct | null;
            contractNSO: SubContractNSOProduct | null;
        }
        interface CorporateCardProduct {
            productType: Enums.ProductType;
            corporateCardProduct: SubCorporateCardProduct | null;
        }
        interface EncashmentContractProduct {
            productType: Enums.ProductType;
            encashmentContractProduct: SubEncashmentContractProduct | null;
            selfEncashmentContractProduct: SubSelfEncashmentContractProduct | null;
        }
        interface LegalInfoProduct {
            productType: Enums.ProductType;
            legalInfoProduct: SubLegalInfoProduct | null;
        }
        interface AcquiringProduct {
            productType: Enums.ProductType;
            acquiringProduct: SubAcquiringProduct | null;
        }
        interface DboProduct {
            productType: Enums.ProductType;
            dboProduct: SubDboProduct | null;
        }
        interface UdboProduct {
            productType: Enums.ProductType;
            udboProduct: SubUdboProduct | null;
        }
        interface SalaryProduct {
            productType: Enums.ProductType;
            salaryProduct: SubSalaryProduct | null;
        }
        interface SettlementAgreementProduct {
            productType: Enums.ProductType;
            paymentAccountProduct: SubPaymentAccountProduct | null;
            packageProduct: SubPackageProduct | null;
            tariffPlanProduct: SubTariffPlanProduct | null;
            customsPaymentProduct: SubCustomsPaymentProduct | null;
            cashManagementProduct: SubCashManagementProduct | null;
        }
        interface PaymentAccountProductOperationList {
            data: Array<PaymentAccountProductOperation>;
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface ProductEncumbranceList {
            data: Array<ProductEncumbrance>;
        }
        interface ProductEncumbrance {
            type: Enums.ProductEncumbranceType;
            name: string;
        }
        interface PaymentAccountProductCardIndexList {
            data: Array<PaymentAccountProductCardIndex>;
            bhCachedDate: Date | null;
            pollingStatus: Enums.ProductPollingStatus;
            pollingError: Error | null;
            operationUuid: string | null;
            eksErrorList: EksError[];
        }
        interface ForecastDeal {
            id: string;
            customer: string;
            creditId: string;
            productType: ModelsApp.Classifier;
            currency: ModelsApp.Classifier;
            dateBegin?: string;
            status: ModelsApp.Classifier;
        }
        interface ForecastDealList {
            data: ForecastDeal[];
        }
        interface ForecastEvent {
            comment: string | null;
            currency: ModelsApp.Classifier;
            email: string | null;
            eventCreationDate: Date | null;
            eventType: ModelsApp.Classifier;
            execSum: number | null;
            forecastSum: number | null;
            id: string;
            plannedEventDate: Date | null;
            possibility: number;
            productNum: string | null;
        }
        interface ForecastEventList {
            data: ForecastEvent[];
        }
        interface ForecastEventGrantingCreateRequest {
            forecastDealId: string;
            plannedEventDate: Date | null;
            eventType: ModelsApp.Classifier | null;
            currency: ModelsApp.Classifier;
            forecastSum: string | null;
            possibility: number;
            comment?: string | null;
            customer: ModelsApp.Employee;
            email: string;
        }
        interface ForecastEventRepaymentCreateRequest {
            forecastDealId: string;
            earlyPayDate: Date | null;
            isAllPay: boolean;
            currency?: ModelsApp.Classifier;
            forecastSum: string | null;
            possibility: number;
            customer: ModelsApp.Employee;
            email?: string | null;
            comment?: string | null;
        }
        interface ForecastEventUpdateRequest {
            comment?: string | null;
            currency?: ModelsApp.Classifier;
            customer: ModelsApp.Employee;
            plannedEventDate: Date | null;
            email?: string | null;
            eventId: string;
            eventType: ModelsApp.Classifier | null;
            forecastDealId: string;
            forecastSum: string | null;
            possibility: number;
        }
        interface IForecastEventEditorForm {
            inputForecastEventComment: string;
            inputForecastEventCurrency: ModelsApp.Classifier;
            inputForecastEventDate: Date;
            inputForecastEventEmail: string;
            inputForecastEventPossibility: number;
            inputForecastEventSum: string;
            inputForecastEventType: ModelsApp.Classifier | null;
        }
        interface IForecastEventEditorFormVadidate {
            inputValidationForecastEventCurrency: string | null;
            inputValidationForecastEventEmail: string | null;
            inputValidationForecastEventPossibility: number | null;
            inputValidationForecastEventSum: string | null;
            inputValidationForecastEventType: string | null;
            isValidForecastEventForm: boolean;
        }
        interface CreditProduct {
            productType: Enums.ProductType;
            creditProduct: SubCreditProduct | null;
            bankGuaranteeProduct: SubBankGuaranteeProduct | null;
        }
        interface GszMember {
            id: string | null;
            fullName: string;
            shortName: string;
            role: ModelsApp.Classifier;
            organizationType: ModelsApp.Classifier;
            status: ModelsApp.Classifier;
            problemGroup: ModelsApp.Classifier;
            borrowerList: BorrowerList;
        }
        interface BorrowerList {
            data: Array<Borrower>;
        }
        interface Borrower {
            id: string;
            fullName: string;
            shortName: string;
            organizationType: ModelsApp.Classifier;
            role: ModelsApp.Classifier;
            status: ModelsApp.Classifier;
            criteriaList: Array<{
                id: string;
                description: string;
            }>;
        }
        interface GszMemberList {
            data: Array<GszMember>;
        }
        interface GszLimit {
            isLimitStructureValid: boolean;
            limitStructureInvalidMessage?: string;
            approvedAggregateLimitValue: string;
            cumulativeLimitUseForecast: string;
            cumulativeLimitEstimatedValue: string;
            unusedAggregateLimit: string;
        }
        interface Gsz {
            id: string;
            name: string;
            curator: ModelsApp.Employee | null;
            isNsl: boolean;
            chief: ModelsApp.Employee | null;
            status: ModelsApp.Classifier;
            memberList: Array<GszMember>;
        }
        interface SalesCampaign {
            id: string;
            name: string;
        }
        interface SalesCampaignList {
            data: Array<SalesCampaign>;
            isCompleted: boolean;
        }
        interface Customer {
            hierarchy: HierarchyList;
            id: string;
            name: string;
            shortName: string;
            role: ModelsApp.Classifier;
            legalForm: ModelsApp.Classifier;
            organizationType: ModelsApp.Classifier;
            isNSL: boolean;
            isHolding: boolean;
            modId: number;
            memberList: MemberList;
            segment: ModelsApp.Classifier;
            category: ModelsApp.Classifier;
            status: ModelsApp.Classifier;
            holder: ModelsApp.Employee | null;
            curator: ModelsApp.Employee | null;
            gsz: Gsz | null;
            registrationCountry: string;
            troubleGroup: ModelsApp.Classifier;
            ownerList: Owner[];
            sector: ModelsApp.Classifier;
            resident: ModelsApp.Classifier;
            kindOfIndustry: ModelsApp.Classifier;
            kpp: string;
            myClient: boolean | null;
            inn: string;
            agentList: AgentList;
            occasionList: OccasionList;
            anchorOrganisation: string;
            address: Address;
            rating: CustomerRating | null;
            priority: ModelsApp.Classifier | null;
            partnership: ModelsApp.Classifier | null;
            supervisingDepartment: string | null;
            affiliateList: CustomerList | null;
            troubleCriteriaList?: TroubleCriteriaList | null;
        }
        interface CustomerHistory {
            customer: Customer;
            customerManaged: CustomerManaged;
            navigationMode: Enums.CustomerMode;
            currentTab: Enums.CustomerManagedTab;
            currentAgreementStatus: Enums.ProductListAgreementStatus;
            currentDealForecast: ForecastDeal;
            currentDeal: Deal;
        }
        interface GszHistory {
            gszId: string;
        }
        interface Limit {
            currency: ModelsApp.Classifier | null;
            total: LimitValues;
            totalApproved: LimitValues;
            used: LimitValues;
            unused: LimitValues;
        }
        interface CustomerList {
            data: Array<Customer>;
            isCompleted: boolean;
        }
        interface AgentList {
            data: Agent[];
        }
        interface CrmStagesList {
            data: CrmStage[];
        }
        interface CrmStage {
            clientStage: ModelsApp.Classifier;
            description: string;
            crmStage: ModelsApp.Classifier;
            comment: string;
            order: number;
            plannedFinishDate: Date | null;
        }
        interface DealSalaryProjectDetails {
            fee: number;
            staffCount: number;
            agreement: {
                number: string;
                date: Date;
                status: ModelsApp.Classifier;
            };
        }
        interface DealProduct {
            currencyClassifier: ModelsApp.Classifier;
            productClassifier: ModelsApp.Classifier;
            sum: number;
            sumInRubles: number;
            SKRtotal: number;
        }
        interface DealStage {
            isCurrent: boolean;
            stage: ModelsApp.Classifier;
            start: {
                date: Date;
                author: ModelsApp.Employee | null;
            } | null;
            end: {
                date: Date;
                author: ModelsApp.Employee | null;
            } | null;
            durationEstimate: number;
            durationFact: number;
            order: number;
            comment?: string | null;
            crmStages?: Array<DealStage> | null;
        }
        interface DealContractClientsList {
            data: Array<DealContractClients>;
        }
        interface DealContractClients {
        }
        interface DealContractTeamMemberList {
            data: Array<DealContractTeamMember>;
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
        interface DealContractTeamMember {
            posId: string;
            fio: string;
            main: boolean;
            position: string;
        }
        interface DealContractList {
            data: Array<DealContract>;
        }
        interface DealContract {
            number: string;
            status: ModelsApp.Classifier;
            privacy: boolean;
            date: Date | null;
            contractClientsList: DealContractClientsList;
            contractTeamMembersList: DealContractTeamMemberList;
        }
        interface Deal {
            id: string;
            accountId: string;
            modId: string;
            isOpen: boolean;
            customer: ModelsApp.Customer;
            parentDeal: Deal | null;
            application: ModelsApp.Classifier | null;
            attractingChannel: ModelsApp.Classifier | null;
            territorialCoverage: string | null;
            salaryProjectDetails: DealSalaryProjectDetails | null;
            creationDate: Date | null;
            plannedFinishDate: Date | null;
            finishDate: Date | null;
            progress: number | null;
            system: string | null;
            probability: number | null;
            owner: ModelsApp.Employee;
            phaseClassifier: ModelsApp.Classifier;
            closeReason: ModelsApp.Classifier | null;
            products: Array<DealProduct>;
            roleClassifier: ModelsApp.Classifier;
            salesMethodClassifier: ModelsApp.Classifier | null;
            salesCampaign: SalesCampaign;
            requestTypeClassifier: ModelsApp.Classifier | null;
            title: string;
            isManaged: boolean;
            myRole: ModelsApp.Classifier | null;
            type: Enums.DealType;
            memberList: MemberList;
            agentList: AgentList | null;
            commentList: Array<Comment> | null;
            decision: Array<DealDecision>;
            agreement: Array<DealAgreement> | null;
            stages: Array<DealStage> | null;
            sum: number | null;
            sumRur: number | null;
            exchangeCourse: number | null;
            currency: ModelsApp.Classifier | null;
            isEditable: boolean;
            contactParticipantList: ContactParticipantList | null;
            isRoadMapShow: boolean;
            contractList: DealContractList;
        }
        interface ContactParticipantList {
            data: ModelsApp.ContactParticipant[];
        }
        interface MemberList {
            data: ModelsApp.Employee[];
        }
        interface DealStageTracking {
            data: ModelsCrm.Tracking[];
        }
        interface Tracking {
            clientStage: string;
            description: string;
            crmStage: string;
            crmStageId: string;
            comment: string;
            order: number | null;
            plannedFinishDate: Date | null;
        }
        interface DealPossibleStageList {
            data: ModelsCrm.NextStage[];
        }
        interface NextStage {
            salesStage: ModelsApp.Classifier;
            possibleSalesStage: ModelsApp.Classifier;
            criterion: string;
        }
        interface DealHistoryStageList {
            data: ModelsCrm.HistoryStage[];
        }
        interface HistoryStage {
            previousValueClassifier: ModelsApp.Classifier | null;
            newValueClassifier: ModelsApp.Classifier | null;
            startDate: Date | null;
            endDate: Date | null;
            changedByFIO: string;
            actualDuration: string;
            endDatePlanned: Date | null;
            durationFact: string;
            durationNorm: string;
        }
        interface OccasionList {
            data: Occasion[];
        }
        interface OccasionListConfig {
            contextMode: Enums.OccasionListContextMode;
            currentAgent: Models.Agent | null;
            currentCustomer: Models.CustomerManaged | null;
            accessLevel: Enums.OccasionListAccessLevel;
        }
        interface Occasion {
            id: string;
            date: Date | null;
            type: ModelsApp.Classifier | null;
            modId: number | null;
            comment: string;
            isAnnual: boolean;
            isChanged: boolean;
        }
        interface ResponsePostPutRequest {
            id: string;
            modId: number;
        }
        interface Agent {
            birthday: Date | null;
            comment: string;
            customerPositionList: AgentCustomerPositionList;
            email: string | null;
            firstName: string | null;
            fullName: string | null;
            id: string;
            isBlocked: boolean;
            isPrincipal: boolean;
            lastName: string | null;
            memberList: MemberList;
            middleName: string | null;
            modId: number | null;
            noteList: NoteList;
            occasionList: OccasionList;
            phoneList: PhoneNumberList;
            gender: Enums.GenderList;
            accessLevel: Enums.AgentAccessLevel;
        }
        interface DealListInfo {
            infoMessage: string | null;
            isButtonCreateVisible: boolean;
            isCreateDealEnable: boolean;
            isEditDealEnable: boolean;
        }
        interface CustomerManaged {
            hierarchy: HierarchyList;
            id: string;
            name: string;
            shortName: string;
            role: ModelsApp.Classifier;
            legalForm: ModelsApp.Classifier;
            organizationType: ModelsApp.Classifier;
            isNSL: boolean;
            isHolding: boolean;
            isOldNkp: boolean;
            isTempBlockedForOppty: boolean;
            isExistPrimaryAddress: boolean;
            modId: number;
            memberList: MemberList;
            segment: ModelsApp.Classifier;
            isTemporaryDealCreationLocked: boolean | null;
            category: ModelsApp.Classifier;
            status: ModelsApp.Classifier;
            holder: ModelsApp.Employee | null;
            curator: ModelsApp.Employee | null;
            gsz: Gsz | null;
            affiliateList: CustomerList | null;
            registrationCountry: string;
            troubleGroup: ModelsApp.Classifier;
            troubleCriteriaList: TroubleCriteriaList | null;
            ownerList: Array<Owner>;
            sector: ModelsApp.Classifier;
            resident: ModelsApp.Classifier;
            kindOfIndustry: ModelsApp.Classifier;
            kpp: string;
            supervisingDepartment: string | null;
            inn: string;
            kio: string;
            myClient: boolean | null;
            anchorOrganisation: string;
            rating: CustomerRating | null;
            agentList: AgentList;
            noteList: NoteList;
            occasionList: OccasionList;
            address: Address;
            partnership: ModelsApp.Classifier | null;
            priority: ModelsApp.Classifier | null;
        }
        interface NoteList {
            data: Note[];
        }
        interface Note {
            id: string;
            text: string;
            type: ModelsApp.Classifier | null;
            modId: number | null;
        }
        interface PaymentScheduleFilters {
            cache: boolean;
            dBegin: Date | null;
            dEnd: Date | null;
            operationsTypes: Array<string>;
            operationStatuses: Array<string>;
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
        interface DealRoute {
            deal: Models.Deal;
            dealMode: Enums.DealMode;
            isEditDealEnable: boolean;
        }
        interface DealAgreement {
            author: ModelsApp.Employee | null;
            comment: string;
            action: string;
            created: Date | null;
            due: Date | null;
            result: string;
        }
        interface DealDecisionDetails {
            decision: string;
            number: string;
            date: Date | null;
            committee: string;
            committeeDate: Date | null;
            territorialDivisionName: string;
            caTb: string;
            secretary: Array<ModelsApp.Employee> | null;
            status: ModelsApp.Classifier;
        }
        interface DealDecisionStandard {
            result: string;
            title: string;
            date: Date | null;
            datePlan: Date | null;
            description: string;
            territorialDivisionName: string;
            subsidiaryOffice: string;
            internalDivision: string;
            comment: string;
        }
        interface DealDecision {
            decisionMakingFormat: ModelsApp.Classifier;
            decisionForm: ModelsApp.Classifier;
            decisionSixEyes: {
                number: string;
                date: Date | null;
            } | null;
            decisionKK: DealDecisionDetails | null;
            decisionStandard: DealDecisionStandard | null;
            agreements: Array<{
                number: string;
                status: string;
            }> | null;
        }
        interface DealDecisionPopoverData {
            decision: DealDecision | null;
        }
        interface Error {
            type: Enums.ErrorType;
            code: string;
            message: string;
            comment: string;
        }
        interface EksErrorList {
            data: EksError[];
        }
        interface LimitValues {
            amount: number | null;
            operationalRisk: number | null;
            unifiedTransactions: number | null;
            projectFinancing: number | null;
            risklessTransactions: number | null;
            strategicRisk: number | null;
            tradeRiskTransactions: number | null;
            portfolioRisk: number | null;
        }
        interface LimitOldValues {
            amount: number;
            structured: number | null;
            unified: number | null;
        }
        interface ProductAcquiring_AdditionalContract {
            number: string | null;
            typeClassifier: ModelsApp.Classifier;
        }
        interface ProductHeaderTable {
            name: string;
            type?: Enums.ProductTableCellType;
        }
        interface SubUdboProduct_AttachedProduct {
            productType: string | null;
        }
        interface SubUdboProduct {
            id: string | null;
            contractNum: string | null;
            startDate: Date | null;
            attachedProducts: SubUdboProduct_AttachedProduct[];
            isActiveAgreement: boolean;
        }
        interface SubSalaryProduct {
            id: string | null;
            number: string | null;
            employeesCount: number | null;
            totalCards: number | null;
            totalSum: number | null;
            status: string | null;
        }
        interface SubLegalInfoProduct {
            type: boolean | null;
        }
        interface SubEncashmentContractProduct {
            id: string | null;
            signedDate: Date | null;
            finishDate: Date | null;
            currentStatus: string | null;
            agreementNumber: string | null;
            agreementType: string | null;
            isActiveAgreement: boolean;
            lastMonthTransCount: number | null;
        }
        interface SubAcquiringProduct {
            id: string | null;
            contractNumber: string | null;
            additionalContractList: ProductAcquiring_AdditionalContract[];
            terminalsCount: number | null;
            openDate: Date | null;
            commissionList: string[];
            isActiveAgreement: boolean;
            statusClassifier: ModelsApp.Classifier;
        }
        interface SubSelfEncashmentContractProduct {
            id: string | null;
            agreementNumber: string | null;
            signedDate: Date | null;
            startDate: Date | null;
            finishDate: Date | null;
            mounthTurn: number | null;
            agreementType: string | null;
            currencyClassifier: ModelsApp.Classifier;
            isActiveAgreement: boolean;
        }
        interface SubDboProduct {
            id: string | null;
            systemClassifier: ModelsApp.Classifier;
            number: string | null;
            openDate: Date | null;
            status: string | null;
            lastActionDate: Date | null;
            endDate: Date | null;
            stopDate: Date | null;
            resumeDate: Date | null;
            authorizedPerson: string[];
            isActiveAgreement: boolean;
        }
        interface ProductPaymentAccountRestriction {
            type: Enums.ClientProductPaymentAccountRestrictionType;
            sum: number | null;
            startDate: Date | null;
            annotation: string | null;
        }
        interface GroupCurrencyProductData {
            productPaymentAccountList: SettlementAgreementProductList;
            productDepositList: DepositProductList;
            productCreditList: CreditProductList;
            currencyClassifier: ModelsApp.Classifier;
            summa: number;
        }
        interface GroupCurrencyProductList {
            data: GroupCurrencyProductData[];
        }
        interface SubPaymentAccountProduct {
            id: string | null;
            accountId: string | null;
            accountNumber: AccountNumber;
            typeInfo: string | null;
            openDate: Date | null;
            lastActionDate: Date | null;
            closeDate: Date | null;
            contractNumber: string | null;
            contractNumberRKO: string | null;
            contractStatusRKO: string | null;
            blockStatus: string | null;
            doNumber: string | null;
            curBalance: number | null;
            planBalance: number | null;
            minBalance: number | null;
            avgDailyBalance: number | null;
            restrictionList: PaymentAccountProductRestrictionList;
            isExistCardIndex: boolean;
            accountResp: string | null;
            currencyClassifier: ModelsApp.Classifier;
            isActiveAgreement: boolean;
            tariff: SubTariffPlanProduct | null;
            eksClientId: string | null;
            package: SubPackageProduct | null;
            operationList: PaymentAccountProductOperationList | null;
            cardIndexList: PaymentAccountProductCardIndexList | null;
            privilegeList: PaymentAccountProductPrivilegeList;
            regionId: string | null;
            agencyId: string | null;
            branchId: string | null;
        }
        type AccountNumber = string | null;
        interface PaymentAccountProductTariffList {
            data: Array<SubTariffPlanProduct>;
        }
        interface PaymentAccountProductRestrictionList {
            data: ProductPaymentAccountRestriction[];
        }
        interface PaymentAccountProductVspInfo {
            name: string;
            address: string;
        }
        interface PaymentAccountProductPrivilegeList {
            data: Array<Privilege>;
        }
        interface Privilege {
            startDate: Date | null;
            endDate: Date | null;
            name: string;
        }
        interface PaymentAccountProductCardIndexInfo {
            currency: ModelsApp.Classifier | null;
            sum: number | null;
            paymentRest: number | null;
        }
        interface PaymentAccountProductCardIndex {
            name: string;
            accountInfoList: PaymentAccountProductCardIndexInfo[];
            isActiveAgreement: boolean;
        }
        interface PaymentAccountProductOperation {
            date: Date | null;
            sum: number | null;
            sumRelativeToCurrency: number | null;
            isLedgerDebitSide: boolean | null;
            correspondent: string | null;
            purpose: string | null;
            currency: ModelsApp.Classifier | null;
        }
        interface SubPackageProduct_Service {
            name: string | null;
        }
        interface SubPackageProduct {
            name: string | null;
            advancingPeriod: number | null;
            startDate: Date | null;
            endDate: Date | null;
            isActive: boolean;
            serviceList: SubPackageProduct_Service[] | null;
        }
        interface SubTariffPlanProduct {
            typeClassifier: ModelsApp.Classifier | null;
            startDate: Date | null;
            endDate: Date | null;
            name: string | null;
        }
        interface SubCustomsPaymentProduct {
            id: string | null;
            additionalContractNumber: string | null;
            additionalContractDate: Date | null;
            account: string | null;
            isActiveAgreement: boolean;
        }
        interface SubCashManagementProduct {
            id: string | null;
            contractNumber: string | null;
            contractStartDate: Date | null;
            contractEndDate: Date | null;
            tariffName: string | null;
            isActiveAgreement: boolean;
        }
        interface ProductListStatus {
            fetching: boolean;
            eksErrorList: EksError[];
            error: Error | null;
            eksListFetching: boolean;
        }
        interface ProductEksErrorIdList {
            ids: ProductDataEksError[];
        }
        interface ProductDataEksError {
            id: string | null;
            isActive: boolean;
            reason: string;
        }
        interface ProductCovenantHistory {
            dateFact: Date | null;
            status: string;
            comment: string;
            datePlan: Date | null;
            datePlanEnd: Date | null;
        }
        interface ProductCovenantSchedule {
            dateStart: Date | null;
            dateEnd: Date | null;
            dateNext: Date | null;
        }
        interface ProductCovenantHistoryList {
            data: Array<ProductCovenantHistory>;
        }
        interface ProductCovenant {
            id: string;
            idTypicalCovenant: string;
            name: string;
            contractNumber: number;
            isTypical: boolean;
            isCalculatedAccount: boolean;
            periodicalValue: string;
            isProductHasCondition: boolean;
            controlValue: string;
            isPeriodical: boolean;
            historyList: ProductCovenantHistoryList;
            schedule: ProductCovenantSchedule;
        }
        interface ProductCovenantList {
            data: Array<ProductCovenant>;
        }
        interface EksError {
            eksCustomerId: string | null;
            code: string | null;
            isActiveAgreement: boolean;
            message: string | null;
        }
        interface SubCreditProduct {
            id: string | null;
            contractId: string | null;
            forecastDealId: string | null;
            nameClassifier: ModelsApp.Classifier;
            openDate: Date | null;
            closeDate: Date | null;
            sum: number | null;
            debtSum: number | null;
            status: string | null;
            contractNumber: string | null;
            rate: number | null;
            term: number | null;
            currencyClassifier: ModelsApp.Classifier;
            isActiveAgreement: boolean;
            forecastEventList: ForecastEventList;
            forecastEventListCachedDate: Date | null;
        }
        interface SubBankGuaranteeProduct {
            id: string | null;
            contractId: string | null;
            contractOpenDate: Date | null;
            contractNumber: string | null;
            term: number | null;
            type: string | null;
            sum: number | null;
            currencyClassifier: ModelsApp.Classifier;
            contractStatus: string | null;
            openDate: Date | null;
            endDate: Date | null;
            isActiveAgreement: boolean;
        }
        interface SubDepositProduct {
            id: string | null;
            dealNum: string | null;
            acctId: string | null;
            dealStatusDesc: string | null;
            depositTypeClassifier: ModelsApp.Classifier;
            planStartDate: Date | null;
            dealPeriodStartDate: Date | null;
            dealPeriodEndDate: Date | null;
            dealPeriodDuration: number | null;
            depositAmount: number | null;
            depositAmountRest: number | null;
            rate: number | null;
            depAccCloseDate: Date | null;
            currencyClassifier: ModelsApp.Classifier;
            depositRestCurrency: string | null;
            bankInfo: string | null;
            isActiveAgreement: boolean;
        }
        interface SubContractNSOProduct {
            id: string | null;
            dealNum: string | null;
            acctId: string | null;
            dealStatusDesc: string | null;
            depositTypeClassifier: ModelsApp.Classifier | null;
            planStartDate: Date | null;
            dealPeriodStartDate: Date | null;
            dealPeriodEndDate: Date | null;
            dealPeriodDuration: number | null;
            depositAmount: number | null;
            depositAmountRest: number | null;
            rate: number | null;
            depAccCloseDate: Date | null;
            currencyClassifier: ModelsApp.Classifier | null;
            depositRestCurrency: string | null;
            bankInfo: string | null;
            isActiveAgreement: boolean;
        }
        interface SubContractSDOProduct {
            id: string | null;
            dealNum: string | null;
            acctId: string | null;
            dealStatusDesc: string | null;
            depositTypeClassifier: ModelsApp.Classifier | null;
            planStartDate: Date | null;
            dealPeriodStartDate: Date | null;
            dealPeriodEndDate: Date | null;
            dealPeriodDuration: number | null;
            depositAmount: number | null;
            depositAmountRest: number | null;
            rate: number | null;
            depAccCloseDate: Date | null;
            currencyClassifier: ModelsApp.Classifier | null;
            depositRestCurrency: string | null;
            bankInfo: string | null;
            isActiveAgreement: boolean;
        }
        interface SubCorporateCardProduct {
            id: string | null;
            openDate: Date | null;
            cardNumber: string | null;
            typeClassifier: ModelsApp.Classifier;
            paymentSystem: string | null;
            status: string | null;
            holder: string | null;
            endDate: Date | null;
            isActiveAgreement: boolean;
        }
        interface TroubleCriteriaList {
            data: Array<TroubleCriteria>;
        }
        interface TroubleCriteria {
            criterion: string;
            problemGroup: string;
        }
        type SubProduct = SubCorporateCardProduct | SubContractSDOProduct | SubContractNSOProduct | SubDepositProduct | SubBankGuaranteeProduct | SubCreditProduct | SubCashManagementProduct | SubCustomsPaymentProduct | SubTariffPlanProduct | SubPackageProduct | SubPaymentAccountProduct | SubDboProduct | SubSelfEncashmentContractProduct | SubAcquiringProduct | SubEncashmentContractProduct | SubLegalInfoProduct | SubSalaryProduct | SubUdboProduct;
        interface NoticeProductModel {
            productType: Enums.ProductType;
            productCredit: Models.SubCreditProduct | null;
            productPaymentAccount: Models.SubPaymentAccountProduct | null;
            productDeposit: Models.SubDepositProduct | null;
            productContractNso: Models.SubContractNSOProduct | null;
            productContractSdo: Models.SubContractSDOProduct | null;
            productBankGuarantee: Models.SubBankGuaranteeProduct | null;
            productEncashmentExpiring: Models.SubEncashmentContractProduct | null;
        }
        interface AgentSearchListRequestPerson {
            lastName: string;
            firstName: string;
            middleName: string;
        }
        interface AgentSearchListRequest {
            agent: {
                personType: AgentSearchListRequestPerson;
            };
            page: number;
        }
        interface CustomerUpdateRequest {
            operationUuid: string;
            name: string | null;
            id: string;
            modId: number;
            address: Address;
        }
        interface MemberListUpdateRequest {
            operationUuid: string;
            name: string | null;
            id: string;
            modId: number;
            memberList: MemberList;
        }
        interface AgentMemberListUpdateRequest {
            operationUuid: string;
            currentAgent: Agent;
            memberList: MemberList;
        }
        interface DealMemberListUpdateRequest {
            accountId: string;
            operationUuid: string;
            currentDeal: Deal;
            memberList: MemberList;
        }
        interface DealStageUpdateRequest {
            accountId: string;
            currentDeal: Deal;
            phaseClassifier: ModelsApp.Classifier;
            products: Array<DealProduct>;
        }
        interface DealAdditionalFieldsUpdateRequest {
            accountId: string;
            currentDeal: Deal;
            closeReason?: ModelsApp.Classifier | null;
            plannedFinishDate?: Date | null;
            sumInCurrencyEkv?: string | null;
            currencyClassifier?: ModelsApp.Classifier | null;
            memberList: Models.MemberList;
        }
        interface IDealAgentListUpdateRequest {
            currentDeal: Models.Deal;
            agentList: Models.AgentList;
            operationUuid: string;
            accountId: string;
        }
        interface EditTrackingRequest {
            id: string;
            tracking: Array<TrackingRequest>;
        }
        interface TrackingRequest {
            CRMStageId: string;
            CRMStage: string;
            Comment?: string;
            plannedFinishDate?: Date | null;
            order?: number;
        }
        interface DealTrackingUpdate {
            stage: Models.DealStage;
            crmStage: Models.DealStage;
            comment: string;
            endDate: Date;
            order: number;
        }
        interface DealStageEditorUpdateRequest {
            termDiff: number;
            dealId: string;
            updatedStage: DealTrackingUpdate;
            followUpStages: Array<DealStage>;
        }
        interface DealStageTrackingCommentEditorUpdateRequest {
            dealId: string;
            inputStage: ModelsApp.Classifier;
            comment: string;
            trackingList: Models.DealStageTracking;
        }
        interface GszActivityIncludeCreateRequest {
            operationUuid: string;
            comment: string;
            memberList: Models.MemberList;
            clientId: string;
            gszId: string;
        }
        interface GszActivityExcludeCreateRequest extends GszActivityIncludeCreateRequest {
            operationUuid: string;
            comment: string;
            memberList: Models.MemberList;
            clientId: string;
            gszId: string;
        }
        interface CustomerActivityIncludeCreateRequest {
            parentAccountId: string;
            operationUuid: string;
            comment: string;
            memberList: Models.MemberList;
            clientId: string;
        }
        interface CustomerActivityExcludeCreateRequest {
            operationUuid: string;
            comment: string;
            memberList: Models.MemberList;
            clientId: string;
            parentAccountId: string;
        }
        interface AgentMobile {
            number: string | null;
            type: string;
        }
        interface AgentPersonDataForCreateRequest {
            firstName: string | null;
            lastName: string | null;
            comment: string | null;
            middleName: string | null;
            birthday: string | null;
            email: string | null;
            sexClassifier: ModelsCrm.ClassifierRequest;
            phones: AgentMobile[] | null[];
        }
        interface CustomerRelationRequest {
            id: string;
            position: string;
            relationClassifier: ModelsCrm.ClassifierRequest;
        }
        interface CustomerAgentRelationUpdateRequest {
            personType: {
                id: string;
                modId: number;
            };
            clients: Models.CustomerRelationRequest[];
        }
        interface AgentPersonDataForUpdateRequest {
            firstName: string | null;
            lastName: string | null;
            comment: string | null;
            middleName: string | null;
            birthday: string | null;
            email: string | null;
            modId: number;
            id: string;
            sexClassifier: ModelsCrm.ClassifierRequest;
            phones: AgentMobile[] | null[];
        }
        interface AgentOccasionListForUpdateRequest {
            id: string | null;
            date: Date;
            impDateTypeClassifier: ModelsCrm.ClassifierRequest;
            isRemine: boolean;
            remindeDate: Date;
            isYearlyReminde: boolean;
            dateComment: string;
            modId: number | null;
        }
        interface TeamMemberEmployeeWithRoleRequest {
            isGeneral: boolean;
            member: {
                positionId: string;
                role: ModelsApp.Classifier;
            };
        }
        interface TeamMemberEmployeeRequest {
            isGeneral: boolean;
            member: {
                positionId: string;
            };
        }
        interface AgentCreateRequest {
            agent: {
                isBlocked: boolean;
                personType: AgentPersonDataForCreateRequest;
                clients: AgentCustomerInfoRequestData[];
            };
        }
        interface CreateUpdateOccasionRequest {
            impDateTypeClassifier: Models.ClassifierRequest;
            date: string;
            modId: number | null;
            dateComment: string;
            isReminde: boolean;
            id: string | null;
            isYearlyReminde: boolean;
        }
        interface CreateUpdateNoteRequest {
            noteTypeClassifier: Models.ClassifierRequest;
            modId: number | null;
            id: string | null;
            note: string;
        }
        interface AgentOccasionListUpdateRequest {
            agent: {
                isBlocked: boolean;
                personType: AgentPersonDataForUpdateRequest;
                impDates: Models.CreateUpdateOccasionRequest[];
                notes: CreateUpdateNoteRequest[];
            };
        }
        interface CustomerOccasionListUpdateRequest {
            clientCard: {
                id: string;
                modId: number;
                name: string;
                impDates: Models.Occasion[];
            };
        }
        interface AgentUpdateRequest {
            agent: {
                isBlocked: boolean;
                personType: AgentPersonDataForUpdateRequest;
                clients: AgentCustomerInfoRequestData[];
                impDates: Models.CreateUpdateOccasionRequest[];
                team: Models.TeamMemberEmployeeRequest[] | TeamMemberEmployeeWithRoleRequest[];
                notes: CreateUpdateNoteRequest[];
            };
        }
        interface DataForCreateAgentRequest {
            firstName: string;
            lastName: string;
            middleName: string;
            workPhone: string | null;
            mobilePhone: string | null;
            email: string;
            birthday: Date | null;
            gender: Enums.GenderList;
            comment: string;
            sexClassifierList: ModelsApp.ClassifierList;
            customer: Models.Customer;
            position: string;
            hasChanged: boolean;
            relationType: ModelsApp.Classifier;
        }
        interface DataForCustomerOccasionListUpdateRequest {
            id: string;
            modId: number;
            name: string;
            occasionList: Models.OccasionList;
        }
        interface DataForCustomerAgentListUpdateRequest {
            id: string;
            modId: number;
            name: string;
            agentList: Models.AgentList;
        }
        interface CustomerAgentListUpdateRequest {
            clientCard: {
                id: string;
                modId: number;
                name: string;
                agents: Models.CustomerAgentRelationUpdateRequest[];
            };
        }
        interface DataForAgentOccasionListUpdateRequest {
            modId: number;
            id: string;
            firstName: string;
            lastName: string;
            middleName: string;
            workPhone: string | null;
            mobilePhone: string | null;
            email: string;
            birthday: Date;
            gender: Enums.GenderList;
            comment: string;
            noteList: Models.NoteList;
            occasionList: Models.OccasionList;
            sexClassifierList: ModelsApp.ClassifierList;
        }
        interface DataForUpdateAgentRequest {
            modId: number;
            id: string;
            customer: Models.CustomerManaged;
            firstName: string;
            lastName: string;
            middleName: string;
            position: string;
            workPhone: string | null;
            mobilePhone: string | null;
            email: string;
            birthday: Date;
            gender: Enums.GenderList;
            relationType: ModelsApp.Classifier;
            comment: string;
            noteList: Models.NoteList;
            occasionList: Models.OccasionList;
            memberList: Models.MemberList;
            sexClassifierList: ModelsApp.ClassifierList;
        }
        interface AgentCustomerInfoRequestData {
            id: string;
            relationClassifier: ModelsCrm.ClassifierRequest;
            position: string;
        }
        interface DealInitRoadMapRequestData {
            id: string;
        }
        interface DealInitRoadMapResponseData {
            id: string;
        }
        interface DealEditorUpdateRequest {
            operationUuid: string;
            accountId: string;
            currentDeal: Models.Deal;
            title: string;
            productClassifier: ModelsApp.Classifier | null;
            salesMethodClassifier: ModelsApp.Classifier;
            team: Models.MemberList;
            agents: Models.AgentList;
            modId: string;
            id: string;
            currencyClassifier: ModelsApp.Classifier | null;
            sumInCurrency: string | null;
            sumInCurrencyEkv: string | null;
            plannedFinishDate: Date | null;
            requestType: ModelsApp.Classifier | null;
            utilization: ModelsApp.Classifier | null;
            probability: number | null;
            staffCount?: number | null;
            comm?: number | null;
            attractingChannel?: ModelsApp.Classifier | null;
        }
        interface DealProductRequest {
            productClassifier: ModelsApp.Classifier;
            currencyClassifier: ModelsApp.Classifier | null;
            sumInCurrency: string | null;
            sumInCurrencyEkv: string | null;
        }
        interface DealStageUpdateRequest {
            operationUuid: string | null;
            accountId: string;
            currentDeal: Deal;
            phaseClassifier: ModelsApp.Classifier;
        }
        interface DealEditorCreateRequest {
            operationUuid: string;
            accountId: string;
            title: string;
            productClassifier: ModelsApp.Classifier;
            salesMethodClassifier: ModelsApp.Classifier;
            requestType: ModelsApp.Classifier;
            application: ModelsApp.Classifier | null;
        }
        interface ClassifierRequest {
            classifierName: string;
            value: string;
            code: string;
        }
        interface EmployeeRequest {
            member: {
                person: {
                    firstName: string;
                    lastName: string;
                    middleName: string;
                };
                positionId: string;
            };
            isBlocked: boolean;
            isGeneral: boolean;
            roleClassifier: ClassifierRequest;
        }
        interface DealCreateRequest {
            accountId: string;
            title: string;
            products: [{
                productClassifier: ClassifierRequest;
            }];
            salesMethodClassifier: ClassifierRequest;
        }
        interface CreditDealCreateRequest {
            accountId: string;
            title: string;
            salesMethodClassifier: ClassifierRequest;
            requestType: ClassifierRequest;
            utilization: ClassifierRequest;
        }
        interface DealProductUpdateRequest {
            productName?: string;
            productClassifier: ClassifierRequest | null;
            currencyClassifier: ClassifierRequest | null;
            sumInCurrency?: string | null;
            sumInCurrencyEkv?: string | null;
        }
        interface DealUpdateRequest {
            id: string;
            modId: string;
            accountId: string;
            title: string;
            products: Array<DealProductUpdateRequest>;
            salesMethodClassifier?: ClassifierRequest | null;
            plannedFinishDate?: Date | string;
            team?: Array<EmployeeRequest> | null;
            requestType?: ClassifierRequest | null;
            utilization?: ClassifierRequest | null;
            probability?: string | null;
            phaseClassifier?: ClassifierRequest | null;
            comm?: number | null;
            attrChannel?: ClassifierRequest | null;
            staffCount?: number | null;
            agents?: Array<{
                id: string;
            }>;
        }
        interface DealRoadMapUpdateRequestData {
            accountId: string;
            title: string;
            salesMethodClassifier: ModelsApp.Classifier;
            requestType: ModelsApp.Classifier;
            modId: string;
            id: string;
            isRoadMapShow: boolean;
        }
        interface DealRoadMapUpdateRequest {
            accountId: string;
            id: string;
            modId: string;
            title: string;
            salesMethodClassifier: ClassifierRequest | null;
            requestType?: ClassifierRequest | null;
            roadMapFlag: boolean;
        }
        interface PhoneNumberList {
            data: Array<PhoneNumber>;
        }
        interface PhoneNumber {
            type: string | null;
            number: string | null;
            extension: string | null;
        }
        interface AgentCustomerPositionList {
            data: Array<AgentCustomerPosition>;
        }
        interface AgentCustomerPosition {
            customerId: string;
            customerRelations: ModelsApp.Classifier;
            position: string;
            company: string;
            legalFormClassifier: ModelsApp.Classifier;
            organizationType: ModelsApp.Classifier;
        }
        interface Address {
            region: string | null;
            building: string | null;
            city: string | null;
            country: ModelsApp.Classifier | null;
            id: string | null;
            isActive: boolean | null;
            isPrimary: boolean | null;
            modId: number | null;
            settlement: string | null;
            subject: string | null;
            street: string | null;
            type: ModelsApp.Classifier | null;
            house: string | null;
            block: string | null;
            flat: string | null;
            postalCode: string | null;
            comment: string | null;
            office: string | null;
        }
        interface AgentClientList {
            data: Array<AgentClient>;
        }
        interface AgentClientId {
            id: string;
        }
        interface AgentClient {
            position: string;
            relationClassifier: ClassifierRequest | null;
            client: {
                id: AccountNumber;
            };
        }
        interface TeamMemeber {
            member: {
                person: {
                    firstName: string;
                    lastName: string;
                    middleName: string;
                    phones: [{}];
                };
                positionId: string;
                positionName: string;
            };
            isGeneral: boolean;
            isBlocked: boolean;
        }
        interface DealActivityAppendRequest {
            activity: ModelsSheduler.Activity;
            dealId: string;
        }
        interface ActivityMemberListUpdateRequest {
            activity: ModelsSheduler.Activity;
            memberList: Models.MemberList;
        }
        interface DealActivityExcludeRequest {
            activity: ModelsSheduler.Activity;
        }
        interface Comment {
            type: ModelsApp.Classifier;
            text: string;
            author: ModelsApp.Employee | null;
            date: Date;
        }
        interface MemberSearchListRequest {
            requestType: Enums.memberSearchType;
            personSearchType: AgentSearchListRequestPerson;
        }
        interface IAgentSearchRequest {
            agent: {
                personType: AgentSearchListRequestPerson;
            };
            page: number;
        }
        interface IEmployeeSearchRequest {
            employee: AgentSearchListRequestPerson;
        }
        interface ProductPostRequestArray {
            id: string;
            isActive: boolean;
            reason: string;
        }
        interface ProductPostRequest {
            ids: Array<ProductPostRequestArray>;
        }
        interface GetProductFromPushData {
            productId: string;
            productType: Enums.ProductType;
            customerId: string;
            eksId: string;
            isActive: boolean;
            isLast: boolean;
        }
        interface PaymentSchedule {
            credContractID: string | null;
            operType: string | null;
            operID: string | null;
            isExec: boolean;
            operDate: Date | null;
            chargeBegin: Date | null;
            chargeEnd: Date | null;
            operName: string | null;
            operCode: Enums.ProductCreditPaymentScheduleOperCode.cred | Enums.ProductCreditPaymentScheduleOperCode.proc | Enums.ProductCreditPaymentScheduleOperCode.other | null;
            operSum: number | null;
            operCurrency: ModelsApp.Classifier | null;
            status: Enums.ProductCreditPaymentScheduleStatus.notPay | Enums.ProductCreditPaymentScheduleStatus.forPay | Enums.ProductCreditPaymentScheduleStatus.execPay | null;
            lastSynchDateTime: Date | null;
        }
        interface PaymentScheduleList {
            data: PaymentSchedule[];
        }
        interface IDealAttachmentList {
            data: DealAttachment[];
        }
        interface DealAttachment {
            id: string;
            fileId: string;
            name: string;
            comment: string;
            format: Enums.DealAttachmentsFileFormat;
            size: string;
            path: string[];
            changedDate: string;
            isLoading: boolean;
            isLoaded: boolean;
            error: Error | null;
            otherFormat: string | null;
        }
        interface EcmDocumentRequest {
            file: DealAttachment;
            scenarioId: string;
            user: string;
            fileExtension: string | null;
        }
    }
    interface ISelectClassifierProps {
        classifierList: ModelsApp.ClassifierList;
        selectedCode: string | undefined | null;
        testID: string;
        navigateBack?: (() => void) | null;
        performSelect(value: ModelsApp.Classifier): void;
        renderMode?: Enums.ClassifierRenderMode | null;
    }
    class SelectClassifier extends React.Component<ISelectClassifierProps, void> {
    }
    interface IAgetCircleProps {
        firstName: string | null;
        isExpandedMode?: boolean;
        lastName: string | null;
        testID: string;
        hasCrown?: boolean;
    }
    class AgentCircle extends React.Component<IAgetCircleProps, void> {
    }
    interface IAgentInfoRowProps {
        label?: string | null;
        specialStyle?: number | any;
        children?: ReactNode[];
        testID: string;
    }
    class AgentInfoRow extends React.Component<IAgentInfoRowProps, void> {
    }
    interface CellData {
        label: string;
        value?: string | null;
        errorText?: string | null;
        isFetching?: boolean | null;
    }
    interface CellProps {
        data: CellData;
        onClick?: {
            (): void;
        } | null;
        flex?: object;
        indented?: boolean | null;
    }
    class OneLineCell extends React.Component<CellProps, void> {
    }
    const ReducerRoot: any;
    export { Enums };
    function getNavigationContentString(key: Enums.NavigationContentAppCrm): string;
    function getNavigationAppCrmString(key: Enums.NavigationAppCRM): void;
    function performApplicationInit(): void;
    function navigateToEmployeeScreen(employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction?: Enums.EmployeeHistoryActions): Function;
    function navigateBack(): Function;
    function performCustomerOpen(customerId: string, customerMode?: Enums.CustomerMode): void;
    function performCustomerPassBy(customerId: string): void;
    function performGszOpen(): void;
    function performCloseAgentScreen(): void;
    function performOpenAgentListScreen(agentListContextMode: Enums.AgentListContextMode, agentListAccessLevel: Enums.AgentListAccessLevel): void;
    function performDealOpen(dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean, customerId?: string): void;
    function refresh_performRefreshActivity(dealId: string): void;
    function getCustomerDataById(id: string): void;
    function performAppCrmContainerReset(): void;
    function performCustomerContainerReset(): void;
    function navigateToAgentListScreen(): void;
    function navigateToCurrentCustomerAgentScreen(agentId: string | null | undefined): void;
    function navigateToOccasionList(): void;
    function performPopoverOccasionListShow(): void;
    function performChangeTab(index: number, value: Enums.CustomerManagedTab): void;
    function performMemberListContainerReset(): void;
    function performMemberListRefresh(currentActivity: ModelsSheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged, currentGsz: Models.Gsz, currentAgent: Models.Agent, isExpandedMode: boolean, currentMode: Enums.MemberListMode): void;
    function performAgentListContainerReset(): void;
    function performOpenAgentListScreen(agentList: Models.AgentList, customerManaged: Models.CustomerManaged, currentDeal: Models.Deal, agentListContextMode: Enums.AgentListContextMode, agentListAccessLevel: Enums.AgentListAccessLevel): void;
    const EnumsCrm: any;
    const RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST: (data: any) => ModelsCrm.CustomerList;
    const RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE: (data: any) => ModelsCrm.CustomerListPage;
    const RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE: (data: any) => ModelsCrm.CustomerManagedListPage;
    function appCrmSwapContext(user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary, currentExchangePerson: ModelsSheduler.Person, appBuildVersion: string, appServerUrl: string, appServerPath: string): void;
    const Converters: any;
    function navigateToProductListScreen(productType: Enums.ProductType): void;
    function performCustomerInnerOpen(customerId: string, customerMode?: Enums.CustomerMode): void;
    function performCustomerInnerPassBy(customerId: string): void;
    function getDealActivityList(activityList: ModelsSheduler.ActivityList): void;
    function navigateToOccasionListScreen(): void;
    function performFlush(): void;
    function sessionReset(user: string): void;
    function navigateToOccasionAgentListFromPush(): void;
    function performRefreshCustomerActivitylist(): void;
    function openOccasionListPanel(): void;
    function fillOccasionListContent(): void;
    function performCloseAgentScreen(): void;
    function performCustomerActivityListRefresh(customerId: string): void;
    function callGetCustomerActivityList(customerActivityList: Models.Customer | null): void;
    function navigateAppDirectoryToCustomerScreen(customerId: string): void;
    function performCustomerOpenFromPush(customerId: string, customerMode?: Enums.CustomerMode): void;
    function performProductOpen(productId: string, productType: Enums.ProductType, customer: Models.Customer, eksId: string): void;
    function navigateToDealScreen(dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean, customerId?: string | null): void;
    function navigationLoaderAppCRMShow(): void;
    function navigationLoaderAppCRMHide(): void;
    function employeePerformContainerReset(): void;
    function getNavigationString(key: Enums.Navigation): string;
    function navigateToAppCrmScreen(): void;
    function navigateToCustomerScreen(customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer): void;
    function performOpenAgentScreen(agent: Models.Agent, currentCustomerManaged: Models.CustomerManaged, agentMode: Enums.AgentMode, agentContextMode: Enums.AgentContextMode): void;
    function isCustomerHolder(inputCustomer: Models.Customer, currentUser: ModelsApp.Employee): boolean;
    function parseInputString(inputString: string): Models.AgentSearchListRequestPerson | null;
    const urlAgent: any;
    function getDataPowerErrorMessageByCode(code: string): string;
    function getCRMErrorMessageByCode(code: string): string;
    function performPrognosticProductListModalAlertHide(): void;
    function performPrognosticProductListRefresh(): void;
    function navigateToProductForecastDealInfoScreen(deal: Models.ForecastDeal): void;
    function navigateToProductForecastEventInfoScreen(event: Models.ForecastEvent): void;
    function callGetAgentById(agentId: string): void;
    function setActivityAccessError(isActivityAccessError: boolean): void;
    function navigateToGszScreen(gszId: string): void;
}
