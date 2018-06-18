/**
 * Models for all containers.
 *
 * @author Burnaev M.U.
 * @see
 */


import * as ModelsAppCRM from './ModelsAppCRM'
import * as ModelsSelectClassifierWithSearch from './ModelsSelectClassifierWithSearch'
import * as ModelsCustomer from './ModelsCustomer'
import * as ModelsCustomerEditor from './ModelsCustomerEditor'
import * as ModelsDealEditor from './ModelsDealEditor'
import * as ModelsDealStageEditor from './ModelsDealStageEditor'
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker'
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker'
import * as ModelsDealList from './ModelsDealList'
import * as ModelsDealListSearch from './ModelsDealListSearch'
import * as ModelsProductList from './ModelsProductList'
import * as ModelsProduct from './ModelsProduct'
import * as ModelsProductPaymentAccount from './ModelsProductPaymentAccount'
import * as ModelsProductCredit from './ModelsProductCredit'
import * as ModelsGSZ from './ModelsGSZ'
import * as ModelsGszActivityInclude from './ModelsGszActivityInclude'
import * as ModelsGszActivityExclude from './ModelsGszActivityExclude'
import * as ModelsCustomerActivityInclude from './ModelsCustomerActivityInclude'
import * as ModelsCustomerActivityExclude from './ModelsCustomerActivityExclude'
import * as ModelsLimit from './ModelsLimit'
import * as ModelsDeal from './ModelsDeal'
import * as ModelsEmployee from './ModelsEmployee'
import * as ModelsAgent from './ModelsAgent'
import * as ModelsAgentList from './ModelsAgentList'
import * as ModelsMemberList from './ModelsMemberList'
import * as ModelsOccasionList from './ModelsOccasionList'
import * as ModelsOccasion from './ModelsOccasion'
import * as ModelsNoteList from './ModelsNoteList'
import * as ModelsNote from './ModelsNote'
import * as ModelsForecastEventEditor from './ModelsForecastEventEditor'
import * as ModelsDealStages from './ModelsDealStages'
import * as ModelsDealAttachments from './ModelsDealAttachments'
import {Models} from 'mrmkmcib-crm'
import {Models as ModelsCrm} from 'mrmkmcib-crm'
import {Models as ModelsApp} from 'mrmkmcib-app'
import {Enums} from '../Enums'
import Error from './Error'


// Interface for root state
export interface IRootState {
    user: {
        mrmkmcibCRM: {
            reducerAppCRM: ModelsAppCRM.IAppCRMState,
            reducerSelectClassifierWithSearch: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
            reducerCustomer: ModelsCustomer.ICustomerState,
            reducerCustomerEditor: ModelsCustomerEditor.ICustomerEditorState,
            reducerDealEditor: ModelsDealEditor.IDealEditorState,
            reducerParentDealPicker: ModelsParentDealPicker.IParentDealPickerState,
            reducerCampaignPicker: ModelsCampaignPicker.ICampaignPickerState,
            reducerDealStages: ModelsDealStages.IDealStagesState,
            reducerDealStageEditor: ModelsDealStageEditor.IDealStageEditorState,
            reducerDealList: ModelsDealList.IDealListState,
            reducerDealListSearch:  ModelsDealListSearch.IDealListSearchState,
            reducerProductList: ModelsProductList.IProductListState,
            reducerProduct: ModelsProduct.IProductState,
            reducerProductPaymentAccount: ModelsProductPaymentAccount.IProductPaymentAccountState,
            reducerProductCredit: ModelsProductCredit.IProductCreditState,
            reducerGSZ: ModelsGSZ.IGSZState,
            reducerGszActivityInclude: ModelsGszActivityInclude.IGszActivityIncludeState,
            reducerGszActivityExclude: ModelsGszActivityExclude.IGszActivityExcludeState,
            reducerCustomerActivityInclude: ModelsCustomerActivityInclude.ICustomerActivityIncludeState,
            reducerCustomerActivityExclude: ModelsCustomerActivityExclude.ICustomerActivityExcludeState,
            reducerLimit: ModelsLimit.ILimitState,
            reducerDeal: ModelsDeal.IDealState,
            reducerEmployee: ModelsEmployee.IEmployeeState,
            reducerAgent: ModelsAgent.IAgentState,
            reducerAgentList: ModelsAgentList.IAgentListState,
            reducerMemberList: ModelsMemberList.IMemberListState,
            reducerOccasionList: ModelsOccasionList.IOccasionListState,
            reducerOccasion: ModelsOccasion.IOccasionState,
            reducerNoteList: ModelsNoteList.INoteListState,
            reducerNote:  ModelsNote.INoteState,
            reducerDealAttachments: ModelsDealAttachments.IDealAttachmentsState,
            reducerForecastEventEditor: ModelsForecastEventEditor.IForecastEventEditorState,
        },
        mrmkmcibScheduler: any,
        mrmkmcibDashboard: any,
        mrmkmcibApp: any,
        mrmkmcibNotice: any,
    },

    selectedIndex: number | null,
    splitPanels: any,
}

export class DefaultValues {
    boolean: boolean = false;
    number: number = 0;
    string: string = '';

    FilterOrganizationStructureList: Models.FilterOrganizationStructureList = {


        // TODO Describe FilterOrganizationStructureList model default value.


    };
    OccasionListConfig: Models.OccasionListConfig = {
        accessLevel: Enums.OccasionListAccessLevel.Read,
        contextMode: Enums.OccasionListContextMode.None,
        currentAgent: null,
        currentCustomer: null,
    };
    FilterMemberRoleList: Models.FilterMemberRoleList = {


        // TODO Describe FilterMemberRoleList model default value.


    };

    PersonList = {data:[]};

    CustomerManagedList: Models.CustomerManagedList = {


        // TODO Describe CustomerManagedList model default value.

        data: [],
        isCompleted: false,


    };

    CustomerManagedListPage: Models.CustomerManagedListPage = {


        // TODO Describe CustomerManagedListPage model default value.

        data: [],
        isLast: false,


    };

    CustomerListPage: Models.CustomerListPage = {


        // TODO Describe CustomerListPage model default value.

        data: [],
        isLast: false,


    };

    CustomerUnknown: Models.CustomerUnknown = {


        hierarchy: [],
        affiliateList: null,
        priority: null,
        supervisingDepartment: null,
        partnership: null,
        id: '',
        name: '',
        shortName: '',
        role: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        legalForm: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        organizationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        isNSL: false,
        isHolding: false,
        isOldNkp: false,
        isTempBlockedForOppty: false,
        isExistPrimaryAddress: false,
        memberList: {data: []},
        segment: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        category: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        holder: null,
        curator: null,
        gsz: null,
        modId: 0,

        registrationCountry: '',
        troubleGroup: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        troubleCriteriaList: {data: []},
        ownerList: [],
        sector: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        resident: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        kindOfIndustry: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        rating : null,
        kpp: '',
        inn: '',
        kio: '',
        agentList: {data: []},
        occasionList: {data: []},
        noteList: {data: []},
        anchorOrganisation: '',
        address: {
            region: '',
            building: '',
            city: '',
            country: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            id: '',
            isActive: true,
            isPrimary: true,
            modId: 0,
            settlement: '',
            subject: '',
            street: '',
            type: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            house: '',
            block: '',
            flat: '',
            postalCode: '',
            comment: '',
            office: ''

        }


    };

    HierarchyList: Models.HierarchyList = {


        // TODO Describe HierarchyList model default value.

        length: 0


    };

    LimitOld: Models.LimitOld = {


        amount: {amount: 0, structured: null, unified : null},
        amountUnused: {amount: 0, structured: null, unified : null},
        amountPredicted: {amount: 0, structured: null, unified : null},
        currency: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        amountApproved: {amount: 0, structured: null, unified : null},


    };

    Owner: Models.Owner = {


        // TODO Describe Owner model default value.

        ownerType: Enums.OwnerType.Unknown,
        name: '',
        percent: 0


    };

    DealList: Models.DealList = {


        // TODO Describe DealList model default value.

        data: [],


    };

    SalesCampaign: Models.SalesCampaign = {
        id: '',
        name: '',
    };

    SalesCampaignList: Models.SalesCampaignList = {
        data: [],
        isCompleted: false,
    };

    ErrorModalWindow: Models.ErrorModalWindow = {
        repeat: ()=>{},
        cancel: ()=> {},
        cacheDate: null,
        message: null,
        title: null,

    }

    DealListPage: Models.DealListPage = {


        // TODO Describe DealListPage model default value.

        data: [],
        isLast: false,


    };

    DealDecisionDetails : Models.DealDecisionDetails = {
        decision: '',
        secretary: null,
        number: '',
        date: new Date(),
        committee: '',
        committeeDate: new Date(),
        territorialDivisionName: '',
        caTb:'',
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
    };

    CreditProductList: Models.CreditProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    SettlementAgreementProductList: Models.SettlementAgreementProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    DepositProductList: Models.DepositProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    CorporateCardProductList: Models.CorporateCardProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    EncashmentContractProductList: Models.EncashmentContractProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    LegalInfoProductList: Models.LegalInfoProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    AcquiringProductList: Models.AcquiringProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],


    };

    DboProductList: Models.DboProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    UdboProductList: Models.UdboProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    SalaryProductList: Models.SalaryProductList = {


        data: [],
        bhCachedDate: null,
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        operationUuid: null,
        eksErrorList: [],

    };

    DepositProduct: Models.DepositProduct = {


        productType: Enums.ProductType.None,
        depositProduct: null,
        contractSDO: null,
        contractNSO: null,


    };

    CorporateCardProduct: Models.CorporateCardProduct = {


        productType: Enums.ProductType.None,
        corporateCardProduct: null


    };

    EncashmentContractProduct: Models.EncashmentContractProduct = {


        productType: Enums.ProductType.None,
        encashmentContractProduct: null,
        selfEncashmentContractProduct: null


    };

    LegalInfoProduct: Models.LegalInfoProduct = {

        productType: Enums.ProductType.None,
        legalInfoProduct: null,

    };

    AcquiringProduct: Models.AcquiringProduct = {


        productType: Enums.ProductType.None,
        acquiringProduct: null,


    };

    DboProduct: Models.DboProduct = {


        productType: Enums.ProductType.None,
        dboProduct: null,


    };

    UdboProduct: Models.UdboProduct = {


        productType: Enums.ProductType.None,
        udboProduct: null,


    };

    SalaryProduct: Models.SalaryProduct = {


        productType: Enums.ProductType.None,
        salaryProduct: null,


    };

    SettlementAgreementProduct: Models.SettlementAgreementProduct = {


        productType: Enums.ProductType.None,
        paymentAccountProduct: null,
        packageProduct: null,
        tariffPlanProduct: null,
        customsPaymentProduct: null,
        cashManagementProduct: null,


    };

    PaymentAccountProductOperationList: Models.PaymentAccountProductOperationList = {


        data: [],
        pollingStatus: Enums.ProductPollingStatus.None,
        pollingError: null,
        bhCachedDate: null,
        operationUuid: null,
        eksErrorList: [],

    };

    PaymentAccountProductCardIndexList: Models.PaymentAccountProductCardIndexList = {

        data: [],
        pollingStatus: Enums.ProductPollingStatus.None,
        pollingError: null,
        bhCachedDate: null,
        operationUuid: null,
        eksErrorList: [],

    };

    ForecastDeal: Models.ForecastDeal = {
        id: '',
        customer: '',
        creditId: '',
        currency: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        productType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        dateBegin: '',
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        }
    };

    ForecastDealList: Models.ForecastDealList = {

        data: []

    };

    ForecastEvent: Models.ForecastEvent = {
        comment: null,
        currency: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        email: '',
        eventCreationDate: null,
        eventType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        execSum: null,
        forecastSum: null,
        id: '',
        plannedEventDate: null,
        possibility: Enums.ForecastEventPossibility.None,
        productNum: null,
    };

    ForecastEventList: Models.ForecastEventList = {


        // TODO Describe ForecastEventList model default value.

        data: [],


    };

    CreditProduct: Models.CreditProduct = {


        productType: Enums.ProductType.None,
        creditProduct: null,
        bankGuaranteeProduct: null,


    };

    GszMember: Models.GszMember = {


        // TODO Describe GszMember model default value.
        id: null,
        fullName: '',
        shortName: '',
        organizationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        role: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        problemGroup: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        borrowerList: {data: []}


    };

    BorrowerList: Models.BorrowerList = {


        // TODO Describe BorrowerList model default value.

        data: [],


    };

    Borrower: Models.Borrower = {


        // TODO Describe Borrower model default value.
        id: '',
        fullName: '',
        shortName: '',
        organizationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        role: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        criteriaList: []

    };

    GszMemberList: Models.GszMemberList = {


        // TODO Describe GszMemberList model default value.
        data: []

    };

    GszLimit: Models.GszLimit = {


        isLimitStructureValid: true,
        approvedAggregateLimitValue: '',
        cumulativeLimitEstimatedValue: '',
        cumulativeLimitUseForecast: '',
        unusedAggregateLimit: '',


    };

    Gsz: Models.Gsz = {

        id: '',
        name: '',
        curator: null,
        chief: null,
        isNsl: false,
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        memberList: []

    };

    Customer: Models.Customer = {


        hierarchy: [],
        affiliateList: null,
        rating : null,
        priority: null,
        supervisingDepartment: null,
        partnership: null,
        id: '',
        modId: 0,
        myClient: null,
        name: '',
        shortName: '',
        role: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        legalForm: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        organizationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        isNSL: false,
        isHolding: false,
        memberList: {data: []},
        segment: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        category: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        holder: null,
        curator: null,
        gsz: null,

        registrationCountry: '',
        troubleGroup: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        //FIXME Remove any.  troubleCriteriaList: [], //troubleCriterias
        ownerList: [],
        sector: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        resident: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        kindOfIndustry: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        kpp: '',
        inn: '',
        agentList: {data: []},
        occasionList: {data: []},
        anchorOrganisation: '',
        address: {
            region: '',
            building: '',
            city: '',
            country: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            id: '',
            isActive: true,
            isPrimary: true,
            modId: 0,
            settlement: '',
            subject: '',
            street: '',
            type: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            house: '',
            block: '',
            flat: '',
            postalCode: '',
            comment: '',
            office: ''
        }


    };

    Limit: Models.Limit = {


        total: {amount: null,
            operationalRisk: null,
            unifiedTransactions: null,
            projectFinancing: null,
            risklessTransactions: null,
            strategicRisk: null,
            tradeRiskTransactions: null,
            portfolioRisk: null,},
        totalApproved: {amount: null,
            operationalRisk: null,
            unifiedTransactions: null,
            projectFinancing: null,
            risklessTransactions: null,
            strategicRisk: null,
            tradeRiskTransactions: null,
            portfolioRisk: null,},
        used: {amount: null,
            operationalRisk: null,
            unifiedTransactions: null,
            projectFinancing: null,
            risklessTransactions: null,
            strategicRisk: null,
            tradeRiskTransactions: null,
            portfolioRisk: null,},
        unused: {amount: null,
            operationalRisk: null,
            unifiedTransactions: null,
            projectFinancing: null,
            risklessTransactions: null,
            strategicRisk: null,
            tradeRiskTransactions: null,
            portfolioRisk: null,},
        currency: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },

    };

    CustomerList: Models.CustomerList = {


        // TODO Describe CustomerList model default value.

        data: [],
        isCompleted: false,


    };

    EmptyList = {

        data: [],

    }

    AgentList: Models.AgentList = {


        // TODO Describe AgentList model default value.

        data: [],


    };

    contractClientsList = {data:[]}
    contractTeamMembersList = {data:[]}

    contractTeamMembers = {
        posId: '',
        fio: '',
        main: '',
        position: ''
    }

    contract = {
        number: '',
        status: {parentId: '', name: '', value: '', code: ''},
        privacy: false,
        date: null,
        contractClientsList: this.contractClientsList,
        contractTeamMembersList: this.contractTeamMembersList,
    }

    Deal: Models.Deal = {

        id: '',
        accountId: '',
        modId: '',
        isOpen: false,

        customer: {
            id: '',
            name: '',
        },
        parentDeal: null,
        application: null,
        attractingChannel: null,
        territorialCoverage: null,
        salaryProjectDetails: null,
        system: null,
        progress: null,
        probability: null,
        closeReason: null,
        myRole: null,
        commentList: null,
        agreement: null,
        stages: null,
        creationDate: null,
        plannedFinishDate: null,
        requestTypeClassifier:{
            parentId: '',
            name: '',
            value: '',
            code: ''
        },
        isEditable: false,
        type: 0,
        finishDate: null,
        owner: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,

            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },
            roleAd: null,

            customerList: []
        },
        phaseClassifier: {parentId: '', name: '', value: '', code: ''},
        products: [],
        roleClassifier: {parentId: '', name: '', value: '1', code: ''},
        title: '',
        isManaged: false,
        salesCampaign: {
            id: '',
            name: '',
        },
        memberList: {data: []},
        agentList: {data: []},
        salesMethodClassifier: {parentId: '', name: '', value: '', code: ''},
        decision: [],
        sum:  null,
        sumRur:  null,
        exchangeCourse:  null,
        currency:  null,
        isRoadMapShow: false,

        contactParticipantList: {
            data: []
        },
        contractList: {data:[]},
    };

    MemberList: Models.MemberList = {
        data: [],
    };

    dealStageTracking: ModelsCrm.DealStageTracking = {
        data: [],
    };

    Tracking: ModelsCrm.Tracking = {
        clientStage: '',
        description: '',
        crmStage: '',
        crmStageId: '',
        comment: '',
        order: null,
        plannedFinishDate: null
    };

    dealPossibleStageList: ModelsCrm.DealPossibleStageList = {
        data: [],
    };

    nextStage: ModelsCrm.NextStage = {
        salesStage: {parentId: '', name: '', value: '', code: ''},
        possibleSalesStage: {parentId: '', name: '', value: '', code: ''},
        criterion: '',
    };

    dealHistoryStageList: ModelsCrm.DealHistoryStageList = {
        data: [],
    };

    historyStage: ModelsCrm.HistoryStage = {
        previousValueClassifier: null,
        newValueClassifier: null,
        startDate: null,
        endDate: null,
        changedByFIO: '',
        actualDuration: '',
        endDatePlanned: null,
        durationFact: '',
        durationNorm: '',
    };

    OccasionList: Models.OccasionList = {


        // TODO Describe OccasionList model default value.

        data: [],


    };

    Occasion: Models.Occasion = {


        // TODO Describe Occasion model default value.
        id: '',
        date: null,
        type: null,
        modId: null,
        comment: '',
        isAnnual: false,
        isChanged: false,

    };

    Agent: Models.Agent = {


        id: '',
        firstName: null,
        lastName: null,
        middleName: null,
        fullName: null,
        email: null,
        modId: null,
        gender: Enums.GenderList.None,
        birthday: null,
        isPrincipal: false,
        isBlocked: false,
        phoneList: {data: []},
        customerPositionList: {data: []},
        comment: '',
        memberList: {data: []},
        occasionList: {data: []},
        noteList: {data: []},
        accessLevel: Enums.AgentAccessLevel.None,


    };

    CustomerManaged: Models.CustomerManaged = {


        hierarchy: [],
        id: '',
        name: '',
        isTemporaryDealCreationLocked: false,
        shortName: '',
        rating : null,
        gsz: null,
        partnership: null,
        myClient: null,
        priority: null,
        supervisingDepartment: null,
        role: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        legalForm: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        organizationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        isNSL: false,
        isHolding: false,
        isOldNkp: false,
        isTempBlockedForOppty: false,
        isExistPrimaryAddress: false,
        memberList: {data: []},
        segment: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        category: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        curator: null,
        holder: null,
        modId: 0,

        registrationCountry: '',
        troubleGroup: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        troubleCriteriaList: {data: []},
        ownerList: [],
        sector: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        resident: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        kindOfIndustry: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        affiliateList: null,
        kpp: '',
        inn: '',
        kio: '',
        agentList: {data: []},
        occasionList: {data: []},
        noteList: {data: []},
        anchorOrganisation: '',
        address: {
            region: '',
            building: '',
            city: '',
            country: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            id: '',
            isActive: true,
            isPrimary: true,
            modId: 0,
            settlement: '',
            subject: '',
            street: '',
            type: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            house: '',
            block: '',
            flat: '',
            postalCode: '',
            comment: '',
            office: ''

        }


    };

    NoteList: Models.NoteList = {


        // TODO Describe NoteList model default value.

        data: [],


    };

    Note: Models.Note = {


        // TODO Describe Note model default value.
        id: '',
        text: '',
        type: null,
        modId: null,

    };


    Error: Error = {
        type: Enums.ErrorType.None,
        code: '',
        message: '',
        comment: '',
    };


    Employee = {
        id: '',
        fullName: '',
        firstName: '',
        lastName: '',
        middleName: '',

        email: '',

        jobTitle: '',
        functionalDivisionName: '',
        positionName: '',
        territorialDivisionName: '',

        mobilePhone: '',
        workPhone: '',
        workPhoneExtension: null,

        head: null,
        isGeneral: false,
        isBlocked: false,
        role: {
            parentId: '',
            name: '',
            value: '',
            code: ''
        },
        roleAd: null,

        customerList: []
    }
    ProductListStatus: Models.ProductListStatus = {
        error: null,
        fetching: false,
        eksErrorList: [],
        eksListFetching: false,
    }
    ProductDataEksError: Models.ProductDataEksError = {
        id: null,
        isActive: false,
        reason: ''
    }
    EksError: Models.EksError = {
        eksCustomerId: null,
        code: null,
        isActiveAgreement: false,
        message: null
    }
    SubCreditProduct: Models.SubCreditProduct = {
        id: null,
        contractId: null,
        forecastDealId: null,
        status: null,
        nameClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        },
        openDate: null,
        closeDate: null,
        sum: null,
        debtSum: null,
        contractNumber: null,
        rate: null,
        term: null,
        currencyClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: ''
        },
        isActiveAgreement: false,
        forecastEventList: {data: []},
        forecastEventListCachedDate: null,
    }
    SubBankGuaranteeProduct: Models.SubBankGuaranteeProduct  = {
        id: null,
        contractId: null,
        contractOpenDate: null,
        contractNumber: null,
        term: null,
        type: null,
        sum: null,
        currencyClassifier: {
            parentId: null,
            name: '',
            value: '',
            code: ''
        },
        contractStatus: null,
        openDate: null,
        endDate: null,
        isActiveAgreement: false,
    }
    SubAcquiringProduct: Models.SubAcquiringProduct = {
        id: null,
        contractNumber: null,
        additionalContractList: [],
        terminalsCount: null,
        openDate: null,
        commissionList: [],
        isActiveAgreement: false,
		statusClassifier: {
            parentId: null,
            name: '',
            value: '',
            code: ''
        }
    }
    SubEncashmentContractProduct: Models.SubEncashmentContractProduct = {
        id: null,
        signedDate: null,
        currentStatus: null,
        finishDate: null,
        agreementNumber: null,
        agreementType: null,
        isActiveAgreement: false,
        lastMonthTransCount: null
    }
    SubSelfEncashmentContractProduct: Models.SubSelfEncashmentContractProduct = {
        id: null,
        agreementNumber: null,
        signedDate: null,
        startDate: null,
        finishDate: null,
        mounthTurn: null,
        agreementType: null,
        currencyClassifier: {parentId: '', code: '', value: '', name: ''},
        isActiveAgreement: false
    }
    SubSalaryProduct: Models.SubSalaryProduct = {
        id: null,
        number: null,
        employeesCount: null,
        totalCards: null,
        totalSum: null,
        status: null,
    }
    SubDepositProduct: Models.SubDepositProduct = {
        id: null,
        dealNum: null,
        dealStatusDesc: null,
        acctId: null,
        depositTypeClassifier: {parentId: '', code: '', value: '', name: ''},
        planStartDate: null,
        dealPeriodStartDate: null,
        dealPeriodEndDate: null,
        dealPeriodDuration: null,
        depositAmount: null,
        depositAmountRest: null,
        rate: null,
        depAccCloseDate: null,
        currencyClassifier: {parentId: '', code: '', value: '', name: ''},
        depositRestCurrency: null,
        bankInfo: null,
        isActiveAgreement: false,
    }
    SubCorporateCardProduct: Models.SubCorporateCardProduct = {
        id: null,
        openDate: null,
        cardNumber: null,
        status: null,
        typeClassifier: {parentId: '', code: '', value: '', name: ''},
        paymentSystem: null,
        holder: null,
        endDate: null,
        isActiveAgreement: false,
    }
    GroupCurrencyProductList: Models.GroupCurrencyProductList = {
        data: []
    }
    GroupCurrencyProductData: Models.GroupCurrencyProductData = {
        currencyClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        },
        productPaymentAccountList: {
            data: [],
            pollingStatus: Enums.ProductPollingStatus.Success,
            bhCachedDate: null,
            pollingError: null,
            operationUuid: null,
            eksErrorList: [],
        },
        productCreditList: {
            data: [],
            pollingStatus: Enums.ProductPollingStatus.Success,
            bhCachedDate: null,
            pollingError: null,
            operationUuid: null,
            eksErrorList: [],
        },
        productDepositList: {
            data: [],
            pollingStatus: Enums.ProductPollingStatus.Success,
            bhCachedDate: null,
            pollingError: null,
            operationUuid: null,
            eksErrorList: [],
        },
        summa: 0,
    }
    PaymentAccountProductCardIndexInfo: Models.PaymentAccountProductCardIndexInfo = {
        sum: null,
        paymentRest: null,
        currency: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        }
    }
    SubPaymentAccountProduct: Models.SubPaymentAccountProduct = {
        id: null,
        accountId: null,
        accountNumber: null,
        typeInfo: null,
        openDate: null,
        lastActionDate: null,
        closeDate: null,
        contractNumber: null,
        contractNumberRKO: null,
        contractStatusRKO: null,
        blockStatus: null,
        doNumber: null,
        curBalance: null,
        planBalance: null,
        minBalance: null,
        avgDailyBalance: null,
        accountResp: null,
        isExistCardIndex: false,
        restrictionList: {data: []},
        currencyClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        },
        isActiveAgreement: false,
        tariff: null,
        eksClientId: null,
        privilegeList: {data: []},
        package: null,
        cardIndexList: {
            data: [],
            pollingStatus: Enums.ProductPollingStatus.None,
            pollingError: null,
            bhCachedDate: null,
            operationUuid: null,
            eksErrorList: [],
        },
        operationList: {
            data: [],
            pollingStatus: Enums.ProductPollingStatus.None,
            pollingError: null,
            bhCachedDate: null,
            operationUuid: null,
            eksErrorList: [],
        },
        regionId: null,
        agencyId: null,
        branchId: null,
    }
    SubPackageProduct: Models.SubPackageProduct = {
        name: null,
        advancingPeriod: null,
        startDate: null,
        isActive: false,
        endDate: null,
        serviceList: [],
    }
    SubTariffPlanProduct: Models.SubTariffPlanProduct = {
        typeClassifier: null,
        startDate: null,
        endDate: null,
        name: null,
    }
    SubCustomsPaymentProduct: Models.SubCustomsPaymentProduct = {
        id: null,
        additionalContractNumber: null,
        additionalContractDate: null,
        account: null,
        isActiveAgreement: false,
    }
    SubCashManagementProduct: Models.SubCashManagementProduct  = {
        id: null,
        contractNumber: null,
        contractStartDate: null,
        contractEndDate: null,
        tariffName: null,
        isActiveAgreement: false,
    }
    SubUdboProduct: Models.SubUdboProduct  = {
        id: null,
        contractNum: null,
        startDate: null,
        attachedProducts: [],
        isActiveAgreement: false,
    }
    SubContractNSOProduct: Models.SubContractNSOProduct  = {
        id: null,
        dealStatusDesc: null,
        dealNum: null,
        acctId: null,
        depositTypeClassifier: null,
        planStartDate: null,
        dealPeriodStartDate: null,
        dealPeriodEndDate: null,
        dealPeriodDuration: null,
        depositAmount: null,
        depositAmountRest: null,
        rate: null,
        depAccCloseDate: null,
        currencyClassifier: {parentId: '', code: '', value: '', name: ''},
        depositRestCurrency: null,
        bankInfo: null,
        isActiveAgreement: false,
    }
    SubContractSDOProduct: Models.SubContractSDOProduct  = {
        id: null,
        dealNum: null,
        acctId: null,
        dealStatusDesc: null,
        depositTypeClassifier: null,
        planStartDate: null,
        dealPeriodStartDate: null,
        dealPeriodEndDate: null,
        dealPeriodDuration: null,
        depositAmount: null,
        depositAmountRest: null,
        rate: null,
        depAccCloseDate: null,
        currencyClassifier: {parentId: '', code: '', value: '', name: ''},
        depositRestCurrency: null,
        bankInfo: null,
        isActiveAgreement: false,
    }
    ProductHeaderTable: Models.ProductHeaderTable  = {
        name: "",
    }
    SubLegalInfoProduct: Models.SubLegalInfoProduct  = {
        type: false,
    }
    SubDboProduct: Models.SubDboProduct  = {
        id: null,
        systemClassifier: {parentId: '', code: '', value: '', name: ''},
        number: null,
        status: null,
        openDate: null,
        lastActionDate: null,
        endDate: null,
        stopDate: null,
        resumeDate: null,
        authorizedPerson: [],
        isActiveAgreement: false,
    }

    AgentSearchListRequest = {
        agent: {
            personType: {
                lastName: ''
            }
        },
        page: 0,
    }

    Classifier  = {
        parentId: '',
        name: '',
        value: '',
        code: ''
    }

    PhoneNumberList: Models.PhoneNumberList  = {
        data: [],
    }

    AgentCustomerPositionList  = {
        data: [],
    }

    ClassifierDictionary  = {
        SBRF_PROBLEM_GROUP: {data: []},
        SBRF_PART_TYPE: {data: []},
        SBRF_OPTY_WAG_SS: {data: []},
        SALES_TEAM_ROLE: {data: []},
        SBRF_GSZ_STATUS_MEMBER: {data: []},
        SBRF_REQ_CLOSE_REASON: {data: []},
        SBRF_ACTION_ROLE: {data: []},
        CRM_LINK_CRITERION: {data: []},
        SBRF_NOTE_TYPE: {data: []},
        SBRF_GSZ_STATUS: {data: []},
        UFS_ADD_AGRMNT_TYPE: {data: []},
        EMPLOYMENT_STATUS: {data: []},
        SBRF_CONTACT_TYPE_GROUP: {data: []},
        SBRF_IMP_DATE: {data: []},
        UFS_PERSON_TYPE: {data: []},
        CRM_SALE_METHOD: {data: []},
        SBRF_ACCESSORY: {data: []},
        SBRF_KO_OPTY_TYPE: {data: []},
        COUNTRY: {data: []},
        SBRF_ACTION_RESULT: {data: []},
        TODO_TYPE: {data: []},
        FINS_COVERAGE_ROLE_TYPE: {data: []},
        SBRF_INDUSTRY: {data: []},
        CURRENCY: {data: []},
        SBRF_CONT_JOB_TITLE: {data: []},
        KIND_OF_INDUSTRY: {data: []},
        SBRF_ACC_PRIORITY: {data: []},
        SBRF_SEGMENT_TYPE: {data: []},
        ACCOUNT_TYPE: {data: []},
        SBRF_ACCOUNT_CATEGORY: {data: []},
        SBRF_OPF: {data: []},
        SEX_MF: {data: []},
        ACTIVITY_PRIORITY: {data: []},
        EVENT_STATUS: {data: []},
        SRV_AGREE_STATUS: {data: []},
        SBRF_DESITION_FORM: {data: []},
        CREDIT_COMMITTEE_STATUS: {data: []},
        FS_NOTE_TYPE: {data: []},
        UFS_BENEFIT_TYPE: {data: []},
        SBRF_DBO_TYPE: {data: []},
        UFS_CORP_BUDG_CARD_TYPE: {data: []},
        SBRF_PA_DECISION_FORMAT: {data: []},
        SBRF_ATTR_CHANNEL_PICK_LIST: {data: []},
        SBRF_APPLICATION: {data: []},
        SBRF_APPLICATION_KK: {data: []},
        DEAL_SALE_METHOD_KK: {data: []},
        SBRF_NKP_SS: {data: []},
        SBRF_DEPOSIT_TYPE: {data: []},
        SBRF_CREDIT_TYPE: {data: []},
        SECTOR_CLASSIFIC_CODE: {data: []},
        SBRF_RESIDENCY_TYPE: {data: []},
        CRM_SALES_STAGE: {data: []},
        CRM_SALE_STAGE: {data: []},
        ADDR_TYPE: {data: []},
        ACCOUNT_STATUS: {data: []},
        FINCORP_DEAL_APPROV_ACTION: {data: []},
        SBRF_PARTNERSHIP_TYPE: {data: []},
        DEAL_PRODUCT_SALE_METHOD: {data: []},
        DEAL_SALE_METHOD: {data: []},
        UFS_FC_EVENT_TYPE: {data: []},
        KK_SALE_TEAM_ROLES: {data:[]},
        UNIVERSAL_SALE_TEAM_ROLES: {data: []},
        SPRGS_COVENANT_PERIOD: {data: [
            {value: 'Единовременно', code: '0', name: '', parentId: ''},
            {value: 'Ежедневно', code: '1', name: '', parentId: ''},
            {value: 'Еженедельно', code: '2', name: '', parentId: ''},
            {value: 'Ежемесячно', code: '3', name: '', parentId: ''},
            {value: 'Ежеквартально', code: '4', name: '', parentId: ''},
            {value: 'Ежегодно', code: '5', name: '', parentId: ''}]},  
        SPRGS_COVENANT_STATUS: {data: [
            {value: 'Нарушено', code: '1', name: '', parentId: ''},
            {value: 'Исполнено', code: '2', name: '', parentId: ''},
            {value: 'Исполнено с нарушением', code: '3', name: '', parentId: ''}
        ]},
    }

    TroubleCriteriaList  = {
        data: []
    }

    ClassifierCurrency = {
        parentId: '',
        name: 'CURRENCY',
        value: 'Рубль',
        code: 'RUR'
    }

    ClassifierList  = {
        data: []
    }

    EncumbranceList: Models.ProductEncumbranceList = {
        data: []
    }

    Address: Models.Address  = {
        region: null, //area
        building: null,
        city: null,
        country: null,
        id: null,
        isActive: null,
        isPrimary: null,
        modId: null,
        settlement: null, //place
        subject: null, //stateProv
        street: null,
        type: null,
        house: '',
        block: '',
        flat: '',
        postalCode: '',
        comment: '',
        office: '',

    }

    /* Payment account product default values */

    paymentAccountProductRestrictionList: Models.PaymentAccountProductRestrictionList  = {
        data: [],
    }
    paymentAccountProductTariffList: Models.PaymentAccountProductTariffList  = {
        data: [],
    }

    paymentAccountProductVspInfo: Models.PaymentAccountProductVspInfo  = {
        name: '',
        address: '',
    }

    paymentAccountProductPrivilegeList: Models.PaymentAccountProductPrivilegeList  = {
        data: [],
    }

    paymentAccountProductCardIndex: Models.PaymentAccountProductCardIndex  = {
        name: '',
        isActiveAgreement: false,
        accountInfoList: [],
    }

    paymentAccountProductOperation: Models.PaymentAccountProductOperation  = {
        date: null,
        sum: null,
        isLedgerDebitSide: null,
        correspondent: null,
        sumRelativeToCurrency: null,
        currency: null,
        purpose: '',
    }

    employee  = {

        // TODO: keep sync with mrmkmcib-app/models/Models

        id: '',
        fullName: '',
        firstName: '',
        lastName: '',
        middleName: '',

        email: '',

        jobTitle: '',
        functionalDivisionName: '',
        positionName: '',
        territorialDivisionName: '',

        mobilePhone: '',
        workPhone: '',
        workPhoneExtension: null,

        head: null,

        isGeneral: false,
        isBlocked: false,
        role: {
            parentId: '',
            name: '',
            value: '',
            code: ''
        },

        roleAd: null,

        customerList: [],
    }

    accountNumber: Models.AccountNumber  = null
    testDataPaymentAccountVSP: Models.PaymentAccountProductVspInfo  = {
        name: "Волго-Вятский банк,  филиал 'Канавинский', дополнительный офис 7977/01850",
        address: "Нижегородская область, п. Большой Макателем, ул. Восстания 1905 года, д. 63, к. 3",
    }
    testDataPaymentAccountCardIndexList: Models.PaymentAccountProductCardIndexList  = {
        data: [{
            name: 'Картотека 1',
            accountInfoList: [{
                currency: {
                    parentId: '1',
                    name: 'Рубли',
                    code: 'RUR',
                    value: 'Рубли',
                },
                sum: 125000000,
                paymentRest: 125000000
            }, {
                currency: {
                    parentId: '1',
                    name: 'Евро',
                    code: 'EUR',
                    value: 'Евро',
                },
                sum: 4450,
                paymentRest: 999
            }],
            isActiveAgreement: true
        },
            {
                name: 'Картотека 2',
                accountInfoList: [{
                    currency: {
                        parentId: '1',
                        name: 'Рубли',
                        code: 'RUR',
                        value: 'Рубли',
                    },
                    sum: 987654321,
                    paymentRest: 444
                }, {
                    currency: {
                        parentId: '1',
                        name: 'Доллар',
                        code: 'USD',
                        value: 'Доллар',
                    },
                    sum: 4450,
                    paymentRest: 999
                }],
                isActiveAgreement: true
            },
            {
                name: 'Картотека 3',
                accountInfoList: [{
                    currency: {
                        parentId: '1',
                        name: 'Евро',
                        code: 'EUR',
                        value: 'Евро',
                    },
                    sum: 4450,
                    paymentRest: 999
                }],
                isActiveAgreement: true
            }],
        pollingStatus: Enums.ProductPollingStatus.Success,
        pollingError: null,
        bhCachedDate: null,
        operationUuid: null,
        eksErrorList: [],
    }
    testDataPaymentAccountRestrictionList: Models.PaymentAccountProductRestrictionList  = {
        data: [{
            startDate: new Date("2016-12-17"),
            sum: 100000000,
            annotation: "Решение  № 12451 от 12.12.2016",
            type: Enums.ClientProductPaymentAccountRestrictionType.MinAccountSumContract,
        }, {
            startDate: new Date("2017-01-27"),
            sum: 45000,
            annotation: "17.10.11конкурсное пр-во БАНКРОТ (заявл 21.07.10) ИФНС 9 по Москве реш 9063 от 16,02,11 (cогл на к/с из К)",
            type: Enums.ClientProductPaymentAccountRestrictionType.InsolvencyAccount,
        }, {
            startDate: new Date("2017-03-12"),
            sum: 654321,
            type: Enums.ClientProductPaymentAccountRestrictionType.InsolvencyAccount,
            annotation: "Решение  № 12452 от 12.12.2017",
        },]
    }
    testDataPaymentAccountOperationList: Models.PaymentAccountProductOperationList = {
        data: [
            {
                date: new Date('2015-07-25T00:00:00.000Z'),
                sum: 2997000,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Газпром - НН"',
                purpose: 'Перевод средств по договору № 987656/9876565',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2017-07-25T01:01:01.000Z'),
                sum: -150,
                isLedgerDebitSide: false,
                correspondent: 'ООО "Кстовский нефтеперегонный завод"',
                purpose: 'Перевод средств по договору № 001982/8876454',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2013-03-26T00:36:00.000Z'),
                sum: 130,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Нижегороднефтепродукт"',
                purpose: 'Перевод средств по договору № 888877/12543',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2014-01-16T12:00:00.000Z'),
                sum: -997000,
                isLedgerDebitSide: false,
                correspondent: 'ООО "Верхнеяченский нефтеперерабатывающий завод',
                purpose: 'Перевод средств по договору № 12/0019',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2010-02-21T00:00:00.000Z'),
                sum: 200997000,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Газпром - НН"',
                purpose: 'Перевод средств по договору № 99882',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2010-02-21T00:00:00.000Z'),
                sum: 132,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Кстовский нефтеперегонный завод"',
                purpose: 'Перевод средств по договору № 00182',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2010-02-21T10:22:22.000Z'),
                sum: 2997000,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Верхнеяченский нефтеперерабатывающий завод',
                purpose: 'Перевод средств по договору № 85699',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2010-02-21T09:00:00.000Z'),
                sum: -193000,
                isLedgerDebitSide: false,
                correspondent: 'ООО "Газпром - НН"',
                purpose: 'Перевод средств по договору № 001982/12145',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2013-03-26T00:36:00.000Z'),
                sum: 997000,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Нижегороднефтепродукт"',
                purpose: 'Перевод средств по договору № 129876/876',
                sumRelativeToCurrency: null,
                currency: null,
            }, {
                date: new Date('2013-03-26T00:36:00.000Z'),
                sum: 2000,
                isLedgerDebitSide: true,
                correspondent: 'ООО "Нижегороднефтепродукт"',
                purpose: 'Перевод средств по договору № АА/18765',
                sumRelativeToCurrency: null,
                currency: null,
            }
        ],
        bhCachedDate: new Date(),
        pollingStatus: Enums.ProductPollingStatus.None,
        pollingError: null,
        operationUuid: "",
        eksErrorList: [],

    }

    CustomerUpdateRequest = {
        operationUuid: '',
        id: '',
        name: null,
        modId: 0,
        address: {
            region: null, //area
            building: null,
            city: null,
            country: null,
            id: null,
            isActive: null,
            isPrimary: null,
            modId: null,
            settlement: null, //place
            subject: null, //stateProv
            street: null,
            type: null,
            house: '',
            block: '',
            flat: '',
            postalCode: '',
            comment: '',
            office: '',
        }
    }
    GszActivityIncludeCreateRequest = {
        operationUuid: '',
        comment: '',
        executor: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,

            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },

            roleAd: null,

            customerList: [],
        },
        clientId: '',
        gszId: ''
    }
    GszActivityExcludeCreateRequest = {
        operationUuid: '',
    }
    CustomerActivityIncludeCreateRequest = {
        parentAccountId: '',
        operationUuid: '',
        comment: '',
        executor: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,

            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },

            roleAd: null,

            customerList: []
        },
        clientId: ''
    }
    CustomerActivityExcludeCreateRequest = {
        parentAccountId: '',
        operationUuid: '',
        comment: '',
        executor: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,

            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },

            roleAd: null,

            customerList: []
        },
        clientId: ''
    }
    AgentCreateRequest = {
        operationUuid: '',
        currentCustomerManager: null,
        agent: {
            inputFirstName: '',  // State parameter displayed in "Agent" screen.
            inputLastName: '',  // State parameter displayed in "Agent" screen.
            inputMiddleName: '',  // State parameter displayed in "Agent" screen.
            inputJobText: '',  // State parameter displayed in "Agent" screen.
            inputJob: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },  // State parameter displayed in "Agent" screen.
            inputWorkPhone: '',  // State parameter displayed in "Agent" screen.
            inputMobilePhone: '',  // State parameter displayed in "Agent" screen.
            inputEmail: '',  // State parameter displayed in "Agent" screen.
            inputBirthday: null,  // State parameter displayed in "Agent" screen.
            inputGender: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },  // State parameter displayed in "Agent" screen.
            inputRelationType: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },  // State parameter displayed in "Agent" screen.
            inputComment: '',  // State parameter displayed in "Agent" screen.
            operationUuid: '',  // State parameter displayed in "Agent" screen.
        },
        occasionList: {data: []},
        noteList: {data: []},
    }
    AgentUpdateRequest = {
        operationUuid: '',
        firstName: '',
        lastName: '',
        middleName: '',
        jobText: '',
        job: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        workPhone: '',
        mobilePhone: '',
        email: '',
        birthday: new Date(),
        gender: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        relationType: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        comment: '',
        currentAgent: null,
        currentCustomerManaged: null,
        noteList: {data: []},
        occasionList: {data: []}
    }
    CustomerAgentListUpdateRequest = {
        operationUuid: '',
        name: '',
        id: '',
        modId: 0,
        agents: {data: []},
        customerModifierId: {
            hierarchy: [],
            id: '',
            name: '',
            shortName: '',
            gsz: null,
            role: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            legalForm: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            organizationType: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            isNSL: false,
            isHolding: false,
            memberList: {data: []},
            segment: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            category: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            status: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            curator: null,
            holder: null,
            modId: 0,

            registrationCountry: '',
            troubleGroup: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            //FIXME Remove any. troubleCriteriaList: [], //troubleCriterias
            ownerList: [],
            sector: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            resident: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            kindOfIndustry: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            affiliateList: null,
            kpp: '',
            inn: '',
            kio: '',
            agentList: {data: []},
            occasionList: {data: []},
            noteList: {data: []},
            anchorOrganisation: '',
            address: {
                region: '',
                building: '',
                city: '',
                country: {
                    parentId: '',
                    code: '',
                    value: '',
                    name: '',
                },
                id: '',
                isActive: true,
                isPrimary: true,
                modId: 0,
                settlement: '',
                subject: '',
                street: '',
                type: {
                    parentId: '',
                    code: '',
                    value: '',
                    name: '',
                },
                house: '',
                block: '',
                flat: '',
                postalCode: '',
                comment: '',
                office: ''

            }

        },
        agentListModifierId: {data: []},
        inputAgentRole: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
    }
    CustomerOccasionListUpdateRequest = {
        operationUuid: '',
        occasionList: {data: []},
        currentCustomerManager: {

            hierarchy: [],
            id: '',
            name: '',
            shortName: '',
            gsz: null,
            role: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            legalForm: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            organizationType: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            isNSL: false,
            isHolding: false,
            memberList: {data: []},
            segment: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            category: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            status: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            curator: null,
            holder: null,
            modId: 0,

            registrationCountry: '',
            troubleGroup: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            //FIXME Remove any. troubleCriteriaList: [], //troubleCriterias
            ownerList: [],
            sector: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            resident: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            kindOfIndustry: {
                parentId: '',
                code: '',
                value: '',
                name: '',
            },
            affiliateList: null,
            kpp: '',
            inn: '',
            kio: '',
            agentList: {data: []},
            occasionList: {data: []},
            noteList: {data: []},
            anchorOrganisation: '',
            address: {
                region: '',
                building: '',
                city: '',
                country: {
                    parentId: '',
                    code: '',
                    value: '',
                    name: '',
                },
                id: '',
                isActive: true,
                isPrimary: true,
                modId: 0,
                settlement: '',
                subject: '',
                street: '',
                type: {
                    parentId: '',
                    code: '',
                    value: '',
                    name: '',
                },
                house: '',
                block: '',
                flat: '',
                postalCode: '',
                comment: '',
                office: ''

            }
        },

    }

    EksErrorList = {
        data: [],
    }
    ActivityRequest = {
        id:  null,
        modId: null,
        client: null,
        result: null,
        deal: null,
        description: '',
        priority: null,
        plannedCompletion: null,
        statusClassifier: null,
        comment: null,
        type: null,
        agents: [],
        team: [],
        parentAccountId: null,
        gszId: null,
        dealId: null,
    }
    Activity = {
        id: '',
        modId: 0,
        deal: null,
        result: null,
        parentCustomer: null,
        gsz: null,
        dueDate: null,
        autoUpdateStatus: null,
        customer: null,
        memberList: {data: []},
        description: '',
        comment:'',
        source: 'CRM',
        status: null,
        isReqApproval: false,
        type: null,
        accessLevel: 0,
        urgency: 0,
        roleType: [],
        plannedStart: null,
        isPinned: false,
        author: null,
        agentList: {data: []},
        availableResultList: {data: []},
        nextAvailableStatusList: {data: []},
        priority: null,
        campaignName: null,

    }

    dealCrmStage: {
        clientStage: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        description: '',
        crmStage: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        comment: '',
        order: -1,
        plannedFinishDate: null,
    }

    dealStage:Models.DealStage = {
        stage: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
        order: 0,
        isCurrent: false,
        start: { date: new Date(), author: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,
            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },
            roleAd: null,

            customerList: []
        } },
        end: { date: new Date(), author: {
            id: '',
            fullName: '',
            firstName: '',
            lastName: '',
            middleName: '',

            email: '',

            jobTitle: '',
            functionalDivisionName: '',
            positionName: '',
            territorialDivisionName: '',

            mobilePhone: '',
            workPhone: '',
            workPhoneExtension: null,

            head: null,
            isGeneral: false,
            isBlocked: false,
            role: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            },
            roleAd: null,

            customerList: []
        } },
        durationEstimate: 0,
        durationFact: 0,
        comment: null,
    }
    dealDecisionDetails = {
        decision: '',
        number: '',
        date: new Date(),
        committee: '',
        committeeDate: new Date(),
        territorialDivisionName: '',
        status: {
            parentId: '',
            code: '',
            value: '',
            name: '',
        },
    }

    DealActivityExcludeRequest = {
        //TODO
    }
    ActivityList = {
        data: []
    }
    DealActivityAppendRequest = {
        //TODO
    }
    Person = {
        id: '',
        email: '',
        name: '',
        firstName: null,
        lastName: null,
        middleName: null,
        division: null,
        position: null,
        companyName: null,
        workPhone: null,
        city: null
    }
    DealProduct: Models.DealProduct = {
        currencyClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        },
        productClassifier: {
            parentId: '',
            name: '',
            code: '',
            value: '',
        },
        sum: 0,
        sumInRubles: 0,
        SKRtotal: 0,
    }

    DealListFilter : Models.DealListFilter = {
        stage: null,
        role: null,
        products: null,
        currency: null,
        sumFrom: null,
        sumTo: null,
        dateFrom: null,
        dateTo: null,
    }
    HistoryMobileAppData: ModelsApp.HistoryMobileAppData = {
        activity: null,
        customer: null,
        agentList: null,
        customerManaged: null,
        deal: null,
        agent: null,
        qlikUrl: null
    }
    ClassifierRequest = {
        classifierName: '',
        value: '',
        code: ''
    }
    NavigateToEntity = {
        navigationType: 0,
        customer: null,
        agent: null,
        occasionId: null,
        activity: null,
        deal: null,
        occasionContextMode: 0,
        activityContextMode: 0,
        dealMode: 0,
        productCredit: null,
        productPaymentAccount: null,
        productDeposit: null,
        productContractNso: null,
        productContractSdo: null,
        productBankGuarantee: null,
        productEncashmentExpiring: null,
        qlikUrl: null,
        valueString: "",
        eksId: null,
        returnId: "",
        gszId: "",
        isHolding: null,
        customerMode: 0,
        productType: null,
        isPrimary: null,
    }
    PaymentScheduleList: Models.PaymentScheduleList = {
        data: []
    }
    PaymentSchedule: Models.PaymentSchedule = {
        credContractID: null, // ID кредитного договора
        operType: null, // Вид операции
        operID: null, // ID операции
        isExec: false, // Признак исполнения операции
        operDate: null, // Дата операции
        chargeBegin: null, // Дата начала периода начисления
        chargeEnd: null, // Дата окончания периода начисления
        operName: null, // Наименование операции
        operCode: null, // Код типа операции
        operSum: null, // Сумма операции
        operCurrency: null, // Валюта операции
        status: null, // Статус операции
        lastSynchDateTime: null, // Дата и время последней синхронизации
    };

    DealAttachment: Models.DealAttachment = {
        id: '',
        fileId: '',
        name: '',
        comment: '',
        format: 0,
        size: '',
        path: [],
        changedDate: '',
        isLoading: false,
        isLoaded: false,
        error: null,
        otherFormat: null,
    }

    DealAttachmentList: Models.IDealAttachmentList = {
        data: []
    }


    //FIXME удалить когда заработает бэк
    currentConfiguration: ModelsApp.Configuration = {

        'mobile.ecm.tfs.cachePolicy.maxTTL': '600',
        'mobile.ecm.tfs.cachePolicy.type': 'CACHE',
        'mobile.ecm.tfs.scenarioId': '32370800',
        'mobile.ecm.tfs.user': 'ecm_support_4_efs',

    };

}

export const defaultValues = new DefaultValues()
