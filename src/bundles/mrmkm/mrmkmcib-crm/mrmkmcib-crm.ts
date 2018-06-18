declare module "mrmkmcib-crm" {
	import React, { ReactNode } from "react";
	import { Models as ModelsApp } from "mrmkmcib-app";
	import { Models as ModelsCrm } from "mrmkmcib-crm";
	import { Models as ModelsSheduler } from "mrmkmcib-scheduler";
	import { Enums } from "Enums";

	export class ContainerAppCRM extends React.Component<any, any> {}

	export class ContainerCustomer extends React.Component<any, any> {}

	export class ContainerCustomerEditor extends React.Component<any, any> {}

	export class ContainerDealEditor extends React.Component<any, any> {}

	export class ContainerDealList extends React.Component<any, any> {}

	export class ContainerProductList extends React.Component<any, any> {}

	export class ContainerProduct extends React.Component<any, any> {}

	export class ContainerProductPaymentAccount extends React.Component<
		any,
		any
	> {}

	export class ContainerProductCredit extends React.Component<any, any> {}

	export class ContainerGSZ extends React.Component<any, any> {}

	export class ContainerGszActivityInclude extends React.Component<any, any> {}

	export class ContainerGszActivityExclude extends React.Component<any, any> {}

	export class ContainerCustomerActivityInclude extends React.Component<
		any,
		any
	> {}

	export class ContainerCustomerActivityExclude extends React.Component<
		any,
		any
	> {}

	export class ContainerLimit extends React.Component<any, any> {}

	export class ContainerDeal extends React.Component<any, any> {}

	export class ContainerEmployee extends React.Component<any, any> {}

	export class ContainerAgent extends React.Component<any, any> {}

	export class ContainerAgentList extends React.Component<any, any> {}

	export class ContainerMemberList extends React.Component<any, any> {}

	export class ContainerOccasionList extends React.Component<any, any> {}

	export class ContainerOccasion extends React.Component<any, any> {}

	export class ContainerNoteList extends React.Component<any, any> {}

	export class ContainerNote extends React.Component<any, any> {}

	export class ContainerForecastEventEditor extends React.Component<any, any> {}

	export namespace Models {
		export interface FilterOrganizationStructureList {
			// TODO Describe FilterOrganizationStructureList model used in actions and thunks.
		}

		export interface FilterMemberRoleList {
			// TODO Describe FilterMemberRoleList model used in actions and thunks.
		}

		export interface CustomerManagedList {
			// TODO Describe CustomerManagedList model used in actions and thunks.

			data: Array<CustomerManaged>;
			isCompleted: boolean;
		}
		export interface ErrorModalWindow {
			repeat: Function;
			cancel: Function;
			cacheDate: Date | null;
			message: string | null;
			title: string | null;
		}
		export interface CustomerManagedListPage {
			// TODO Describe CustomerManagedListPage model used in actions and thunks.

			data: Array<CustomerManaged>;
			isLast: boolean;
		}

		export interface CustomerListPage {
			data: Array<Customer>;
			isLast: boolean;
		}

		export interface IGetProductListRequest {
			cachePolicy?: Enums.CachePolicy;
			ttl: string;
			type: Enums.ProductType;
			force: boolean;
			update: boolean;
			active: boolean;
		}

		export interface FillCreateEventPopupData {
			forecastEventPossibility: Enums.ForecastEventPossibility;
			forecastEventEmail: string;
			currencyClassifier: ModelsApp.Classifier | null;
			showForecastEvent: ForecastEvent;
		}

		export interface CustomerRating {
			approvalDate: Date | null;
			value: string | null;
		}

		export interface CustomerUnknown {
			hierarchy: HierarchyList;
			id: string; //id клиента
			name: string; //полное наименование клиента
			shortName: string; //краткое наименование клиента
			role: ModelsApp.Classifier; //
			legalForm: ModelsApp.Classifier; //
			organizationType: ModelsApp.Classifier; //
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
			//FIXME Remove any. troubleCriteriaList: Array<any>,
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

		export interface HierarchyList {
			// TODO Describe HierarchyList model used in actions and thunks.

			length: number;
		}

		export interface LimitOld {
			currency: ModelsApp.Classifier;
			amount: LimitOldValues;
			amountUnused: LimitOldValues;
			amountPredicted: LimitOldValues;
			amountApproved: LimitOldValues;
		}

		export interface Owner {
			// TODO Describe Owner model used in actions and thunks.

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

		export interface DealListFilter {
			stage: ModelsApp.Classifier | null;
			role: ModelsApp.Classifier | null;
			products: ModelsApp.ClassifierList | null;
			currency: ModelsApp.Classifier | null;
			sumFrom: string | null;
			sumTo: string | null;
			dateFrom: Date | null;
			dateTo: Date | null;
		}

		export interface DealList {
			// TODO Describe DealList model used in actions and thunks.

			data: Array<Deal>;
		}

		export interface DealListPage {
			// TODO Describe DealListPage model used in actions and thunks.

			data: Array<Deal>;
			isLast: boolean;
		}

		export interface CreditProductList {
			data: CreditProduct[];

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface SettlementAgreementProductList {
			data: SettlementAgreementProduct[];

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface DepositProductList {
			data: DepositProduct[];

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface CorporateCardProductList {
			data: CorporateCardProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface EncashmentContractProductList {
			data: EncashmentContractProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface LegalInfoProductList {
			data: LegalInfoProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface AcquiringProductList {
			data: AcquiringProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface DboProductList {
			data: DboProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface UdboProductList {
			data: UdboProduct[];

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface SalaryProductList {
			data: SalaryProduct[];
			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface DepositProduct {
			productType: Enums.ProductType;
			depositProduct: SubDepositProduct | null;
			contractSDO: SubContractSDOProduct | null;
			contractNSO: SubContractNSOProduct | null;
		}

		export interface CorporateCardProduct {
			productType: Enums.ProductType;
			corporateCardProduct: SubCorporateCardProduct | null;
		}

		export interface EncashmentContractProduct {
			productType: Enums.ProductType;
			encashmentContractProduct: SubEncashmentContractProduct | null;
			selfEncashmentContractProduct: SubSelfEncashmentContractProduct | null;
		}

		export interface LegalInfoProduct {
			productType: Enums.ProductType;
			legalInfoProduct: SubLegalInfoProduct | null;
		}

		export interface AcquiringProduct {
			productType: Enums.ProductType;
			acquiringProduct: SubAcquiringProduct | null;
		}

		export interface DboProduct {
			productType: Enums.ProductType;
			dboProduct: SubDboProduct | null;
		}

		export interface UdboProduct {
			productType: Enums.ProductType;
			udboProduct: SubUdboProduct | null;
		}

		export interface SalaryProduct {
			productType: Enums.ProductType;
			salaryProduct: SubSalaryProduct | null;
		}

		export interface SettlementAgreementProduct {
			productType: Enums.ProductType;
			paymentAccountProduct: SubPaymentAccountProduct | null;
			packageProduct: SubPackageProduct | null;
			tariffPlanProduct: SubTariffPlanProduct | null;
			customsPaymentProduct: SubCustomsPaymentProduct | null;
			cashManagementProduct: SubCashManagementProduct | null;
		}

		export interface PaymentAccountProductOperationList {
			data: Array<PaymentAccountProductOperation>;

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface ProductEncumbranceList {
			data: Array<ProductEncumbrance>;
		}

		export interface ProductEncumbrance {
			type: Enums.ProductEncumbranceType;
			name: string;
		}

		export interface PaymentAccountProductCardIndexList {
			data: Array<PaymentAccountProductCardIndex>;

			bhCachedDate: Date | null;
			pollingStatus: Enums.ProductPollingStatus;
			pollingError: Error | null;
			operationUuid: string | null;
			eksErrorList: EksError[];
		}

		export interface ForecastDeal {
			id: string;
			customer: string;
			creditId: string;
			productType: ModelsApp.Classifier;
			currency: ModelsApp.Classifier;
			dateBegin?: string;
			status: ModelsApp.Classifier;
		}

		export interface ForecastDealList {
			data: ForecastDeal[];
		}

		export interface ForecastEvent {
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

		export interface ForecastEventList {
			data: ForecastEvent[];
		}

		export interface ForecastEventGrantingCreateRequest {
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

		export interface ForecastEventRepaymentCreateRequest {
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
		export interface ForecastEventUpdateRequest {
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

		export interface IForecastEventEditorForm {
			inputForecastEventComment: string;
			inputForecastEventCurrency: ModelsApp.Classifier;
			inputForecastEventDate: Date;
			inputForecastEventEmail: string;
			inputForecastEventPossibility: number;
			inputForecastEventSum: string;
			inputForecastEventType: ModelsApp.Classifier | null;
		}

		export interface IForecastEventEditorFormVadidate {
			inputValidationForecastEventCurrency: string | null;
			inputValidationForecastEventEmail: string | null;
			inputValidationForecastEventPossibility: number | null;
			inputValidationForecastEventSum: string | null;
			inputValidationForecastEventType: string | null;
			isValidForecastEventForm: boolean;
		}

		export interface CreditProduct {
			productType: Enums.ProductType;
			creditProduct: SubCreditProduct | null;
			bankGuaranteeProduct: SubBankGuaranteeProduct | null;
		}

		export interface GszMember {
			// TODO Describe GszMember model used in actions and thunks.
			id: string | null;
			fullName: string;
			shortName: string;
			role: ModelsApp.Classifier;
			organizationType: ModelsApp.Classifier;
			status: ModelsApp.Classifier;
			problemGroup: ModelsApp.Classifier;
			borrowerList: BorrowerList;
		}

		export interface BorrowerList {
			// TODO Describe BorrowerList model used in actions and thunks.

			data: Array<Borrower>;
		}

		export interface Borrower {
			// TODO Describe Borrower model used in actions and thunks.
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

		export interface GszMemberList {
			// TODO Describe GszMemberList model used in actions and thunks.
			data: Array<GszMember>;
		}

		export interface GszLimit {
			// TODO Describe GszLimit model used in actions and thunks.

			isLimitStructureValid: boolean;
			limitStructureInvalidMessage?: string;
			approvedAggregateLimitValue: string;
			cumulativeLimitUseForecast: string;
			cumulativeLimitEstimatedValue: string;
			unusedAggregateLimit: string;
		}

		export interface Gsz {
			id: string;
			name: string;
			curator: ModelsApp.Employee | null;
			isNsl: boolean;
			chief: ModelsApp.Employee | null;
			status: ModelsApp.Classifier;
			memberList: Array<GszMember>;
			// gkm: Employee
		}

		export interface SalesCampaign {
			id: string;
			name: string;
		}

		export interface SalesCampaignList {
			data: Array<SalesCampaign>;
			isCompleted: boolean;
		}

		export interface Customer {
			hierarchy: HierarchyList;
			id: string; //id клиента
			name: string; //полное наименование клиента
			shortName: string; //краткое наименование клиента
			role: ModelsApp.Classifier; //
			legalForm: ModelsApp.Classifier; //
			organizationType: ModelsApp.Classifier; //
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

		export interface CustomerHistory {
			customer: Customer;
			customerManaged: CustomerManaged;
			navigationMode: Enums.CustomerMode;
			currentTab: Enums.CustomerManagedTab;
			currentAgreementStatus: Enums.ProductListAgreementStatus;
			currentDealForecast: ForecastDeal;
			currentDeal: Deal;
		}

		export interface GszHistory {
			gszId: string;
		}

		export interface Limit {
			currency: ModelsApp.Classifier | null;
			total: LimitValues;
			totalApproved: LimitValues;
			used: LimitValues;
			unused: LimitValues;
		}

		export interface CustomerList {
			// TODO Describe CustomerList model used in actions and thunks.

			data: Array<Customer>;
			isCompleted: boolean;
		}

		export interface AgentList {
			// TODO Describe AgentList model used in actions and thunks.

			data: Agent[];
		}

		export interface CrmStagesList {
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
			start: { date: Date; author: ModelsApp.Employee | null } | null;
			end: { date: Date; author: ModelsApp.Employee | null } | null;
			durationEstimate: number;
			durationFact: number;
			order: number;
			comment?: string | null;
			crmStages?: Array<DealStage> | null;
		}

		export interface DealContractClientsList {
			data: Array<DealContractClients>;
		}
		export interface DealContractClients {}

		export interface DealContractTeamMemberList {
			data: Array<DealContractTeamMember>;
		}
		export interface ActivityEmployeeRequest {
			member: { person: { id: string } };
			isGeneral: boolean;
		}
		export interface ActivityEmployeeWithRoleRequest {
			member: { person: { id: string; role: string } };
			isGeneral: boolean;
		}
		export interface DealContractTeamMember {
			posId: string;
			fio: string;
			main: boolean;
			position: string;
		}

		export interface DealContractList {
			data: Array<DealContract>;
		}

		export interface DealContract {
			number: string;
			status: ModelsApp.Classifier;
			privacy: boolean;
			date: Date | null;
			contractClientsList: DealContractClientsList;
			contractTeamMembersList: DealContractTeamMemberList;
		}

		export interface Deal {
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

		export interface ContactParticipantList {
			data: ModelsApp.ContactParticipant[];
		}

		export interface MemberList {
			data: ModelsApp.Employee[];
		}

		export interface DealStageTracking {
			data: ModelsCrm.Tracking[];
		}

		export interface Tracking {
			clientStage: string;
			description: string;
			crmStage: string;
			crmStageId: string;
			comment: string;
			order: number | null;
			plannedFinishDate: Date | null;
		}

		export interface DealPossibleStageList {
			data: ModelsCrm.NextStage[];
		}

		export interface NextStage {
			salesStage: ModelsApp.Classifier;
			possibleSalesStage: ModelsApp.Classifier;
			criterion: string;
		}

		export interface DealHistoryStageList {
			data: ModelsCrm.HistoryStage[];
		}

		export interface HistoryStage {
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

		export interface OccasionList {
			data: Occasion[];
		}
		export interface OccasionListConfig {
			contextMode: Enums.OccasionListContextMode;
			currentAgent: Models.Agent | null;
			currentCustomer: Models.CustomerManaged | null;
			accessLevel: Enums.OccasionListAccessLevel;
		}
		export interface Occasion {
			// TODO Describe Occasion model used in actions and thunks.
			id: string;
			date: Date | null;
			type: ModelsApp.Classifier | null;
			modId: number | null;
			comment: string;
			isAnnual: boolean;
			isChanged: boolean;
		}
		export interface ResponsePostPutRequest {
			id: string;
			modId: number;
		}
		export interface Agent {
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

		export interface DealListInfo {
			infoMessage: string | null;
			isButtonCreateVisible: boolean;
			isCreateDealEnable: boolean;
			isEditDealEnable: boolean;
		}

		export interface CustomerManaged {
			hierarchy: HierarchyList;
			id: string; //id клиента
			name: string; //полное наименование клиента
			shortName: string; //краткое наименование клиента
			role: ModelsApp.Classifier; //
			legalForm: ModelsApp.Classifier; //
			organizationType: ModelsApp.Classifier; //
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
			//FIXME Remove any.  troubleCriteriaList: Array<any>,
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

		export interface NoteList {
			// TODO Describe NoteList model used in actions and thunks.

			data: Note[];
		}

		export interface Note {
			// TODO Describe Note model used in actions and thunks.
			id: string;
			text: string;
			type: ModelsApp.Classifier | null;
			modId: number | null;
		}

		export interface PaymentScheduleFilters {
			cache: boolean;
			dBegin: Date | null;
			dEnd: Date | null;
			operationsTypes: Array<string>;
			operationStatuses: Array<string>;
		}

		export interface CacheTag {
			tag: string | Enums.CacheContext | Enums.CachePolicy;
			contextId?: string;
		}

		export interface Url {
			url: string;
			tagList: Array<CacheTag>;
			cacheTime?: string,
		}
		export interface DealRoute {
			deal: Models.Deal;
			dealMode: Enums.DealMode;
			isEditDealEnable: boolean;
		}

		export interface DealAgreement {
			author: ModelsApp.Employee | null;
			comment: string;
			action: string;
			created: Date | null;
			due: Date | null;
			result: string;
		}

		export interface DealDecisionDetails {
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

		export interface DealDecisionStandard {
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

		export interface DealDecision {
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

		export interface DealDecisionPopoverData {
			decision: DealDecision | null;
		}

		export interface Error {
			type: Enums.ErrorType;
			code: string;
			message: string;
			comment: string;
		}

		export interface EksErrorList {
			data: EksError[];
		}

		export interface LimitValues {
			amount: number | null;
			operationalRisk: number | null;
			unifiedTransactions: number | null;
			projectFinancing: number | null;
			risklessTransactions: number | null;
			strategicRisk: number | null;
			tradeRiskTransactions: number | null;
			portfolioRisk: number | null;
		}

		export interface LimitOldValues {
			amount: number;
			structured: number | null;
			unified: number | null;
		}

		export interface ProductAcquiring_AdditionalContract {
			number: string | null;
			typeClassifier: ModelsApp.Classifier;
		}

		export interface ProductHeaderTable {
			name: string;
			type?: Enums.ProductTableCellType;
		}

		export interface SubUdboProduct_AttachedProduct {
			productType: string | null;
		}

		export interface SubUdboProduct {
			id: string | null;
			contractNum: string | null;
			startDate: Date | null;
			attachedProducts: SubUdboProduct_AttachedProduct[];
			isActiveAgreement: boolean;
		}

		export interface SubSalaryProduct {
			id: string | null;
			number: string | null;
			employeesCount: number | null;
			totalCards: number | null;
			totalSum: number | null;
			status: string | null;
		}

		export interface SubLegalInfoProduct {
			type: boolean | null;
		}

		export interface SubEncashmentContractProduct {
			id: string | null;
			signedDate: Date | null;
			finishDate: Date | null;
			currentStatus: string | null;
			agreementNumber: string | null;
			agreementType: string | null;
			isActiveAgreement: boolean;
			lastMonthTransCount: number | null;
		}

		export interface SubAcquiringProduct {
			id: string | null;
			contractNumber: string | null;
			additionalContractList: ProductAcquiring_AdditionalContract[];
			terminalsCount: number | null;
			openDate: Date | null;
			commissionList: string[];
			isActiveAgreement: boolean;
			statusClassifier: ModelsApp.Classifier;
		}

		export interface SubSelfEncashmentContractProduct {
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

		export interface SubDboProduct {
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

		export interface ProductPaymentAccountRestriction {
			type: Enums.ClientProductPaymentAccountRestrictionType;
			sum: number | null;
			startDate: Date | null;
			annotation: string | null;
		}

		export interface GroupCurrencyProductData {
			productPaymentAccountList: SettlementAgreementProductList;
			productDepositList: DepositProductList;
			productCreditList: CreditProductList;
			currencyClassifier: ModelsApp.Classifier;
			summa: number;
		}

		export interface GroupCurrencyProductList {
			data: GroupCurrencyProductData[];
		}

		/* Payment account product */
		export interface SubPaymentAccountProduct {
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

		export type AccountNumber = string | null;

		export interface PaymentAccountProductTariffList {
			data: Array<SubTariffPlanProduct>;
		}

		export interface PaymentAccountProductRestrictionList {
			data: ProductPaymentAccountRestriction[];
		}

		export interface PaymentAccountProductVspInfo {
			name: string;
			address: string;
		}

		export interface PaymentAccountProductPrivilegeList {
			data: Array<Privilege>;
		}

		export interface Privilege {
			startDate: Date | null;
			endDate: Date | null;
			name: string;
		}

		export interface PaymentAccountProductCardIndexInfo {
			currency: ModelsApp.Classifier | null;
			sum: number | null;
			paymentRest: number | null;
		}

		export interface PaymentAccountProductCardIndex {
			name: string;
			accountInfoList: PaymentAccountProductCardIndexInfo[];
			isActiveAgreement: boolean;
		}

		export interface PaymentAccountProductOperation {
			date: Date | null;
			sum: number | null;
			sumRelativeToCurrency: number | null;
			isLedgerDebitSide: boolean | null;
			correspondent: string | null;
			purpose: string | null;
			currency: ModelsApp.Classifier | null;
		}

		/* End of payment account product */

		export interface SubPackageProduct_Service {
			name: string | null;
		}

		export interface SubPackageProduct {
			name: string | null;
			advancingPeriod: number | null;
			startDate: Date | null;
			endDate: Date | null;
			isActive: boolean;
			serviceList: SubPackageProduct_Service[] | null;
		}

		export interface SubTariffPlanProduct {
			typeClassifier: ModelsApp.Classifier | null;
			startDate: Date | null;
			endDate: Date | null;
			name: string | null;
		}

		export interface SubCustomsPaymentProduct {
			id: string | null;
			additionalContractNumber: string | null;
			additionalContractDate: Date | null;
			account: string | null;
			isActiveAgreement: boolean;
		}

		export interface SubCashManagementProduct {
			id: string | null;
			contractNumber: string | null;
			contractStartDate: Date | null;
			contractEndDate: Date | null;
			tariffName: string | null;
			isActiveAgreement: boolean;
		}

		export interface ProductListStatus {
			fetching: boolean;
			eksErrorList: EksError[];
			error: Error | null;
			eksListFetching: boolean;
		}

		export interface ProductEksErrorIdList {
			ids: ProductDataEksError[];
		}

		export interface ProductDataEksError {
			id: string | null;
			isActive: boolean;
			reason: string;
		}
		export interface ProductCovenantHistory {
			dateFact: Date | null;
			status: string;
			comment: string;
			datePlan: Date | null;
			datePlanEnd: Date | null;
		}
		export interface ProductCovenantSchedule {
			dateStart: Date | null;
			dateEnd: Date | null;
			dateNext: Date | null;
		}
		export interface ProductCovenantHistoryList {
			data: Array<ProductCovenantHistory>;
		}
		export interface ProductCovenant {
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
		export interface ProductCovenantList {
			data: Array<ProductCovenant>;
		}
		export interface EksError {
			eksCustomerId: string | null;
			code: string | null;
			isActiveAgreement: boolean;
			message: string | null;
		}

		export interface SubCreditProduct {
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

		export interface SubBankGuaranteeProduct {
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

		export interface SubDepositProduct {
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

		export interface SubContractNSOProduct {
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

		export interface SubContractSDOProduct {
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

		export interface SubCorporateCardProduct {
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

		export interface TroubleCriteriaList {
			data: Array<TroubleCriteria>;
		}

		export interface TroubleCriteria {
			criterion: string;
			problemGroup: string;
		}

		export type SubProduct =
			| SubCorporateCardProduct
			| SubContractSDOProduct
			| SubContractNSOProduct
			| SubDepositProduct
			| SubBankGuaranteeProduct
			| SubCreditProduct
			| SubCashManagementProduct
			| SubCustomsPaymentProduct
			| SubTariffPlanProduct
			| SubPackageProduct
			| SubPaymentAccountProduct
			| SubDboProduct
			| SubSelfEncashmentContractProduct
			| SubAcquiringProduct
			| SubEncashmentContractProduct
			| SubLegalInfoProduct
			| SubSalaryProduct
			| SubUdboProduct;

		export interface NoticeProductModel {
			productType: Enums.ProductType;
			productCredit: Models.SubCreditProduct | null;
			productPaymentAccount: Models.SubPaymentAccountProduct | null;
			productDeposit: Models.SubDepositProduct | null;
			productContractNso: Models.SubContractNSOProduct | null;
			productContractSdo: Models.SubContractSDOProduct | null;
			productBankGuarantee: Models.SubBankGuaranteeProduct | null;
			productEncashmentExpiring: Models.SubEncashmentContractProduct | null;
		}

		export interface AgentSearchListRequestPerson {
			lastName: string;
			firstName: string;
			middleName: string;
		}

		export interface AgentSearchListRequest {
			agent: {
				personType: AgentSearchListRequestPerson;
			};
			page: number;
		}

		export interface CustomerUpdateRequest {
			operationUuid: string;
			name: string | null;
			id: string;
			modId: number;
			address: Address;
			// TODO
		}
		export interface MemberListUpdateRequest {
			operationUuid: string;
			name: string | null;
			id: string;
			modId: number;
			memberList: MemberList;
			// TODO
		}

		export interface AgentMemberListUpdateRequest {
			operationUuid: string;
			currentAgent: Agent;
			memberList: MemberList;
		}

		export interface DealMemberListUpdateRequest {
			accountId: string;
			operationUuid: string;
			currentDeal: Deal;
			memberList: MemberList;
			// TODO
		}
		export interface DealStageUpdateRequest {
			accountId: string;
			currentDeal: Deal;
			phaseClassifier: ModelsApp.Classifier;
            products: Array<DealProduct>;
		}
		export interface DealAdditionalFieldsUpdateRequest {
			accountId: string;
			currentDeal: Deal;
			closeReason?: ModelsApp.Classifier | null;
			plannedFinishDate?: Date | null;
			sumInCurrencyEkv?: string | null;
			currencyClassifier?: ModelsApp.Classifier | null;
			memberList: Models.MemberList;
		}

		export interface IDealAgentListUpdateRequest {
			currentDeal: Models.Deal;
			agentList: Models.AgentList;
			operationUuid: string;
			accountId: string;
		}

		export interface EditTrackingRequest {
			id: string;
			tracking: Array<TrackingRequest>;
		}

		export interface TrackingRequest {
			CRMStageId: string;
			CRMStage: string;
			Comment?: string;
			plannedFinishDate?: Date | null;
			order?: number;
		}

		export interface DealTrackingUpdate {
			stage: Models.DealStage;
			crmStage: Models.DealStage;
			comment: string;
			endDate: Date;
			order: number;
		}

		export interface DealStageEditorUpdateRequest {
			termDiff: number;
			dealId: string;
			updatedStage: DealTrackingUpdate;
			followUpStages: Array<DealStage>;
		}

		export interface DealStageTrackingCommentEditorUpdateRequest {
			dealId: string;
			inputStage: ModelsApp.Classifier;
			comment: string;
			trackingList: Models.DealStageTracking;
		}

		export interface GszActivityIncludeCreateRequest {
			operationUuid: string;
			comment: string;
			memberList: Models.MemberList;
			clientId: string;
			gszId: string;
			// TODO
		}

		export interface GszActivityExcludeCreateRequest
			extends GszActivityIncludeCreateRequest {
			operationUuid: string;
			comment: string;
			memberList: Models.MemberList;
			clientId: string;
			gszId: string;
		}

		export interface CustomerActivityIncludeCreateRequest {
			parentAccountId: string;
			operationUuid: string;
			comment: string;
			memberList: Models.MemberList;
			clientId: string;
		}

		export interface CustomerActivityExcludeCreateRequest {
			operationUuid: string;
			comment: string;
			memberList: Models.MemberList;
			clientId: string;
			parentAccountId: string;
		}
		export interface AgentMobile {
			number: string | null;
			type: string;
		}

		export interface AgentPersonDataForCreateRequest {
			firstName: string | null;
			lastName: string | null;
			comment: string | null;
			middleName: string | null;
			birthday: string | null;
			email: string | null;
			sexClassifier: ModelsCrm.ClassifierRequest;
			phones: AgentMobile[] | null[];
		}
		export interface CustomerRelationRequest {
			id: string;
			position: string;
			relationClassifier: ModelsCrm.ClassifierRequest;
		}
		export interface CustomerAgentRelationUpdateRequest {
			personType: {
				id: string;
				modId: number;
			};
			clients: Models.CustomerRelationRequest[];
		}
		export interface AgentPersonDataForUpdateRequest {
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

		export interface AgentOccasionListForUpdateRequest {
			id: string | null;
			date: Date;
			impDateTypeClassifier: ModelsCrm.ClassifierRequest;
			isRemine: boolean;
			remindeDate: Date;
			isYearlyReminde: boolean;
			dateComment: string;
			modId: number | null;
		}
		export interface TeamMemberEmployeeWithRoleRequest {
			isGeneral: boolean;
			member: { positionId: string; role: ModelsApp.Classifier };
		}
		export interface TeamMemberEmployeeRequest {
			isGeneral: boolean;
			member: { positionId: string };
		}
		export interface AgentCreateRequest {
			agent: {
				isBlocked: boolean;
				personType: AgentPersonDataForCreateRequest;
				clients: AgentCustomerInfoRequestData[];
			};
		}
		export interface CreateUpdateOccasionRequest {
			impDateTypeClassifier: Models.ClassifierRequest;
			date: string;
			modId: number | null;
			dateComment: string;
			isReminde: boolean;
			id: string | null;
			isYearlyReminde: boolean;
		}

		export interface CreateUpdateNoteRequest {
			noteTypeClassifier: Models.ClassifierRequest;
			modId: number | null;
			id: string | null;
			note: string;
		}
		export interface AgentOccasionListUpdateRequest {
			agent: {
				isBlocked: boolean;
				personType: AgentPersonDataForUpdateRequest;
				impDates: Models.CreateUpdateOccasionRequest[];
				notes: CreateUpdateNoteRequest[];
			};
		}
		export interface CustomerOccasionListUpdateRequest {
			clientCard: {
				id: string;
				modId: number;
				name: string;
				impDates: Models.Occasion[];
			};
		}
		export interface AgentUpdateRequest {
			agent: {
				isBlocked: boolean;
				personType: AgentPersonDataForUpdateRequest;
				clients: AgentCustomerInfoRequestData[];
				impDates: Models.CreateUpdateOccasionRequest[];
				team:
					| Models.TeamMemberEmployeeRequest[]
					| TeamMemberEmployeeWithRoleRequest[];
				notes: CreateUpdateNoteRequest[];
			};
		}

		export interface DataForCreateAgentRequest {
			firstName: string; // State parameter displayed in "Agent" screen.
			lastName: string; //    State parameter displayed in "Agent" screen.
			middleName: string; // State parameter displayed in "Agent" screen.
			workPhone: string | null; // State parameter displayed in "Agent" screen.
			mobilePhone: string | null; // State parameter displayed in "Agent" screen.
			email: string; // State parameter displayed in "Agent" screen.
			birthday: Date | null; // State parameter displayed in "Agent" screen.
			gender: Enums.GenderList; // State parameter displayed in "Agent" screen.
			comment: string; // State parameter displayed in "Agent" screen.
			sexClassifierList: ModelsApp.ClassifierList;
			customer: Models.Customer;
			position: string;
			hasChanged: boolean;
			relationType: ModelsApp.Classifier;
			// TODO
		}
		export interface DataForCustomerOccasionListUpdateRequest {
			id: string;
			modId: number;
			name: string;
			occasionList: Models.OccasionList;
		}
		export interface DataForCustomerAgentListUpdateRequest {
			id: string;
			modId: number;
			name: string;
			agentList: Models.AgentList;
		}
		export interface CustomerAgentListUpdateRequest {
			clientCard: {
				id: string;
				modId: number;
				name: string;
				agents: Models.CustomerAgentRelationUpdateRequest[];
			};
		}
		export interface DataForAgentOccasionListUpdateRequest {
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
		export interface DataForUpdateAgentRequest {
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
		export interface AgentCustomerInfoRequestData {
			id: string;
			relationClassifier: ModelsCrm.ClassifierRequest;
			position: string;
		}

		export interface DealInitRoadMapRequestData {
			id: string;
		}

		export interface DealInitRoadMapResponseData {
			id: string;
		}

		export interface DealEditorUpdateRequest {
			operationUuid: string;
			accountId: string;
            currentDeal: Models.Deal,
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

		export interface DealProductRequest {
			productClassifier: ModelsApp.Classifier;
			currencyClassifier: ModelsApp.Classifier | null;
			sumInCurrency: string | null;
			sumInCurrencyEkv: string | null;
		}

		export interface DealStageUpdateRequest {
			operationUuid: string | null;
			accountId: string;
			currentDeal: Deal;
			phaseClassifier: ModelsApp.Classifier;
		}

		export interface DealEditorCreateRequest {
			operationUuid: string;
			accountId: string;
			title: string;
			productClassifier: ModelsApp.Classifier;
			salesMethodClassifier: ModelsApp.Classifier;
			requestType: ModelsApp.Classifier;
			application: ModelsApp.Classifier | null;
		}

		export interface ClassifierRequest {
			classifierName: string;
			value: string;
			code: string;
		}

		export interface EmployeeRequest {
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

		export interface DealCreateRequest {
			accountId: string;
			title: string;
			products: [
				{
					productClassifier: ClassifierRequest;
				}
			];
			salesMethodClassifier: ClassifierRequest;
		}

		export interface CreditDealCreateRequest {
			accountId: string;
			title: string;
			salesMethodClassifier: ClassifierRequest;
			requestType: ClassifierRequest;
			utilization: ClassifierRequest;
		}

		export interface DealProductUpdateRequest {
			productName?: string;
			productClassifier: ClassifierRequest | null;
			currencyClassifier: ClassifierRequest | null;
			sumInCurrency?: string | null;
			sumInCurrencyEkv?: string | null;
		}

		export interface DealUpdateRequest {
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
            agents?: Array<{id: string}>
		}

		export interface DealRoadMapUpdateRequestData {
			accountId: string;
			title: string;
			salesMethodClassifier: ModelsApp.Classifier;
			requestType: ModelsApp.Classifier;
			modId: string;
			id: string;
			isRoadMapShow: boolean;
		}

		export interface DealRoadMapUpdateRequest {
			accountId: string;
			id: string;
			modId: string;
			title: string;
			salesMethodClassifier: ClassifierRequest | null;
			requestType?: ClassifierRequest | null;
			roadMapFlag: boolean;
		}

		export interface PhoneNumberList {
			data: Array<PhoneNumber>;
		}

		export interface PhoneNumber {
			type: string | null;
			number: string | null;
			extension: string | null;
		}

		export interface AgentCustomerPositionList {
			data: Array<AgentCustomerPosition>;
		}

		export interface AgentCustomerPosition {
			customerId: string;
			customerRelations: ModelsApp.Classifier;
			position: string;
			company: string;
			legalFormClassifier: ModelsApp.Classifier;
			organizationType: ModelsApp.Classifier;
		}

		export interface Address {
			region: string | null; //area
			building: string | null;
			city: string | null;
			country: ModelsApp.Classifier | null;
			id: string | null;
			isActive: boolean | null;
			isPrimary: boolean | null;
			modId: number | null;
			settlement: string | null; //place
			subject: string | null; //stateProv
			street: string | null;
			type: ModelsApp.Classifier | null;
			house: string | null;
			block: string | null;
			flat: string | null;
			postalCode: string | null;
			comment: string | null;
			office: string | null;
		}

		export interface AgentClientList {
			data: Array<AgentClient>;
		}

		export interface AgentClientId {
			id: string;
		}

		export interface AgentClient {
			position: string;
			relationClassifier: ClassifierRequest | null;
			client: { id: AccountNumber };
		}

		export interface TeamMemeber {
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

		export interface DealActivityAppendRequest {
			activity: ModelsSheduler.Activity;
			dealId: string;
		}

		export interface ActivityMemberListUpdateRequest {
			activity: ModelsSheduler.Activity;
			memberList: Models.MemberList;
		}

		export interface DealActivityExcludeRequest {
			activity: ModelsSheduler.Activity;
		}

		export interface Comment {
			type: ModelsApp.Classifier;
			text: string;
			author: ModelsApp.Employee | null;
			date: Date;
		}

		interface MemberSearchListRequest {
            requestType: Enums.memberSearchType,
            personSearchType: AgentSearchListRequestPerson
		}

		interface IAgentSearchRequest {
            agent: {
                personType: AgentSearchListRequestPerson
            },
            page: number
        }
        interface IEmployeeSearchRequest {
            employee: AgentSearchListRequestPerson
        }

		export interface ProductPostRequestArray {
			id: string;
			isActive: boolean;
			reason: string;
		}

		export interface ProductPostRequest {
			ids: Array<ProductPostRequestArray>;
		}

		export interface GetProductFromPushData {
			productId: string;
			productType: Enums.ProductType;
			customerId: string;
			eksId: string;
			isActive: boolean;
			isLast: boolean;
		}

		export interface PaymentSchedule {
			credContractID: string | null; // ID кредитного договора
			operType: string | null; // Вид операции
			operID: string | null; // ID операции
			isExec: boolean; // Признак исполнения операции
			operDate: Date | null; // Дата операции
			chargeBegin: Date | null; // Дата начала периода начисления
			chargeEnd: Date | null; // Дата окончания периода начисления
			operName: string | null; // Наименование операции
			operCode: // Код типа операции

				| Enums.ProductCreditPaymentScheduleOperCode.cred
				| Enums.ProductCreditPaymentScheduleOperCode.proc
				| Enums.ProductCreditPaymentScheduleOperCode.other
				| null;
			operSum: number | null; // Сумма операции
			operCurrency: ModelsApp.Classifier | null; // Валюта операции
			status: // Статус операции

				| Enums.ProductCreditPaymentScheduleStatus.notPay
				| Enums.ProductCreditPaymentScheduleStatus.forPay
				| Enums.ProductCreditPaymentScheduleStatus.execPay
				| null;
			lastSynchDateTime: Date | null; // Дата и время последней синхронизации
		}

		export interface PaymentScheduleList {
			data: PaymentSchedule[];
		}
		/////////////////////////////////////////
		//////DealAttachments////////////////////
		/////////////////////////////////////////
		export interface IDealAttachmentList {
			data: DealAttachment[];
		}

		export interface DealAttachment {
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

		/////////////////////////////////////////

		export interface EcmDocumentRequest {
			file: DealAttachment;
			scenarioId: string;
			user: string;
			fileExtension: string | null;
		}
	}

	export interface ISelectClassifierProps {
		classifierList: ModelsApp.ClassifierList;
		selectedCode: string | undefined | null;
		testID: string;
		navigateBack?: (() => void) | null;
		performSelect(value: ModelsApp.Classifier): void;
		renderMode?: Enums.ClassifierRenderMode | null;
	}

	export class SelectClassifier extends React.Component<
		ISelectClassifierProps,
		void
	> {}

	export interface IAgetCircleProps {
		firstName: string | null;
		isExpandedMode?: boolean;
		lastName: string | null;
		testID: string;
		hasCrown?: boolean;
	}

	export class AgentCircle extends React.Component<IAgetCircleProps, void> {}
	export interface IAgentInfoRowProps {
		label?: string | null;
		specialStyle?: number | any;
		children?: ReactNode[];
		testID: string;
	}
	export class AgentInfoRow extends React.Component<IAgentInfoRowProps, void> {}

	export interface CellData {
		label: string;
		value?: string | null;
		errorText?: string | null;
        isFetching?: boolean | null;
	}
	export interface CellProps {
		data: CellData;
		onClick?: { (): void } | null;
        flex?: object;
        indented?: boolean | null;
	}

	export class OneLineCell extends React.Component<CellProps, void> {}

	export const ReducerRoot: any;

	export { Enums };
	export function getNavigationContentString(
		key: Enums.NavigationContentAppCrm
	): string;
	export function getNavigationAppCrmString(key: Enums.NavigationAppCRM): void;
	export function performApplicationInit(): void;

	export function navigateToEmployeeScreen(
		employeeId: string,
		isExtendedMode: boolean,
		currentMode: Enums.EmployeeMode,
		historyAction?: Enums.EmployeeHistoryActions
	): Function;
	export function navigateBack(): Function;

	// Perform navigate to CRM mobile application and open Customer card with Id equals customerId.
	export function performCustomerOpen(
		customerId: string,
		customerMode?: Enums.CustomerMode
	): void;
	export function performCustomerPassBy(customerId: string): void;

	// Perform navigate to CRM mobile application and open Gsz card with Id equals gszId.
	export function performGszOpen(): void;

	export function performCloseAgentScreen(): void;

	export function performOpenAgentListScreen(
		agentListContextMode: Enums.AgentListContextMode,
		agentListAccessLevel: Enums.AgentListAccessLevel
	): void;

	export function performDealOpen(
		dealId: string,
		dealMode: Enums.DealMode,
		isEditDealEnable: boolean,
		customerId?: string
	): void;

	export function refresh_performRefreshActivity(dealId: string): void;

	export function getCustomerDataById(id: string): void;
	export function performAppCrmContainerReset(): void;
	export function performCustomerContainerReset(): void;

	export function navigateToAgentListScreen(): void;
	export function navigateToCurrentCustomerAgentScreen(
		agentId: string | null | undefined
	): void;
	export function navigateToOccasionList(): void;

	export function performPopoverOccasionListShow(): void;

	export function performChangeTab(
		index: number,
		value: Enums.CustomerManagedTab
	): void;

	export function performMemberListContainerReset(): void;
	export function performMemberListRefresh(
		currentActivity: ModelsSheduler.Activity,
		currentDeal: Models.Deal,
		currentCustomerManaged: Models.CustomerManaged,
		currentGsz: Models.Gsz,
		currentAgent: Models.Agent,
		isExpandedMode: boolean,
		currentMode: Enums.MemberListMode
	): void;

	export function performAgentListContainerReset(): void;
	export function performOpenAgentListScreen(
		agentList: Models.AgentList,
		customerManaged: Models.CustomerManaged,
		currentDeal: Models.Deal,
		agentListContextMode: Enums.AgentListContextMode,
		agentListAccessLevel: Enums.AgentListAccessLevel
	): void;

	export const EnumsCrm: any;
	export const RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST: (
		data: any
	) => ModelsCrm.CustomerList;
	export const RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE: (
		data: any
	) => ModelsCrm.CustomerListPage;
	export const RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE: (
		data: any
	) => ModelsCrm.CustomerManagedListPage;

	export function appCrmSwapContext(
		user: ModelsApp.Employee,
		classifierDictionary: ModelsApp.ClassifierDictionary,
		currentExchangePerson: ModelsSheduler.Person,
		appBuildVersion: string,
		appServerUrl: string,
		appServerPath: string
	): void;
	/*Tests only dependency*/
	export const Converters: any;

	export function navigateToProductListScreen(
		productType: Enums.ProductType
	): void;
	export function performCustomerInnerOpen(
		customerId: string,
		customerMode?: Enums.CustomerMode
	): void;
	export function performCustomerInnerPassBy(customerId: string): void;

	export function getDealActivityList(
		activityList: ModelsSheduler.ActivityList
	): void;
	export function navigateToOccasionListScreen(): void;
	export function performFlush(): void;
	export function sessionReset(user: string): void;

	export function navigateToOccasionAgentListFromPush(): void;
	export function performRefreshCustomerActivitylist(): void;

	export function openOccasionListPanel(): void;
	export function fillOccasionListContent(): void;
	export function performCloseAgentScreen(): void;
	export function performCustomerActivityListRefresh(customerId: string): void;
	export function callGetCustomerActivityList(
		customerActivityList: Models.Customer | null
	): void;
	export function navigateAppDirectoryToCustomerScreen(
		customerId: string
	): void;

	export function performCustomerOpenFromPush(
		customerId: string,
		customerMode?: Enums.CustomerMode
	): void;

	export function performProductOpen(
		productId: string,
		productType: Enums.ProductType,
		customer: Models.Customer,
		eksId: string
	): void;

	export function navigateToDealScreen(
		dealId: string,
		dealMode: Enums.DealMode,
		isEditDealEnable: boolean,
		customerId?: string | null
	): void;
	export function navigationLoaderAppCRMShow(): void;
	export function navigationLoaderAppCRMHide(): void;
	export function employeePerformContainerReset(): void;
	export function getNavigationString(key: Enums.Navigation): string;
	export function navigateToAppCrmScreen(): void;
	export function navigateToCustomerScreen(
		customer: Models.Customer,
		customerMode: Enums.CustomerMode,
		showCustomer: Enums.ShowCustomer
	): void;
	export function performOpenAgentScreen(
		agent: Models.Agent,
		currentCustomerManaged: Models.CustomerManaged,
		agentMode: Enums.AgentMode,
		agentContextMode: Enums.AgentContextMode
	): void;
	export function isCustomerHolder(
		inputCustomer: Models.Customer,
		currentUser: ModelsApp.Employee
	): boolean;

	export function parseInputString(
		inputString: string
	): Models.AgentSearchListRequestPerson | null;
	export const urlAgent: any;
	export function getDataPowerErrorMessageByCode(code: string): string;
	export function getCRMErrorMessageByCode(code: string): string;
	export function performPrognosticProductListModalAlertHide(): void;
	export function performPrognosticProductListRefresh(): void;
	export function navigateToProductForecastDealInfoScreen(
		deal: Models.ForecastDeal
	): void;
	export function navigateToProductForecastEventInfoScreen(
		event: Models.ForecastEvent
	): void;
	export function callGetAgentById(agentId: string): void;
	export function setActivityAccessError(isActivityAccessError: boolean): void;
	export function navigateToGszScreen(gszId: string): void;
}
