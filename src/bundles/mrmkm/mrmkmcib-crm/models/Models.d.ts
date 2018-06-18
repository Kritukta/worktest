/**
 * Models for all containers.
 *
 * @author Burnaev M.U.
 * @see
 */
import * as ModelsAppCRM from './ModelsAppCRM';
import * as ModelsSelectClassifierWithSearch from './ModelsSelectClassifierWithSearch';
import * as ModelsCustomer from './ModelsCustomer';
import * as ModelsCustomerEditor from './ModelsCustomerEditor';
import * as ModelsDealEditor from './ModelsDealEditor';
import * as ModelsDealStageEditor from './ModelsDealStageEditor';
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker';
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker';
import * as ModelsDealList from './ModelsDealList';
import * as ModelsDealListSearch from './ModelsDealListSearch';
import * as ModelsProductList from './ModelsProductList';
import * as ModelsProduct from './ModelsProduct';
import * as ModelsProductPaymentAccount from './ModelsProductPaymentAccount';
import * as ModelsProductCredit from './ModelsProductCredit';
import * as ModelsGSZ from './ModelsGSZ';
import * as ModelsGszActivityInclude from './ModelsGszActivityInclude';
import * as ModelsGszActivityExclude from './ModelsGszActivityExclude';
import * as ModelsCustomerActivityInclude from './ModelsCustomerActivityInclude';
import * as ModelsCustomerActivityExclude from './ModelsCustomerActivityExclude';
import * as ModelsLimit from './ModelsLimit';
import * as ModelsDeal from './ModelsDeal';
import * as ModelsEmployee from './ModelsEmployee';
import * as ModelsAgent from './ModelsAgent';
import * as ModelsAgentList from './ModelsAgentList';
import * as ModelsMemberList from './ModelsMemberList';
import * as ModelsOccasionList from './ModelsOccasionList';
import * as ModelsOccasion from './ModelsOccasion';
import * as ModelsNoteList from './ModelsNoteList';
import * as ModelsNote from './ModelsNote';
import * as ModelsForecastEventEditor from './ModelsForecastEventEditor';
import * as ModelsDealStages from './ModelsDealStages';
import * as ModelsDealAttachments from './ModelsDealAttachments';
import { Models } from 'mrmkmcib-crm';
import { Models as ModelsCrm } from 'mrmkmcib-crm';
import { Models as ModelsApp } from 'mrmkmcib-app';
import Error from './Error';
export interface IRootState {
    user: {
        mrmkmcibCRM: {
            reducerAppCRM: ModelsAppCRM.IAppCRMState;
            reducerSelectClassifierWithSearch: ModelsSelectClassifierWithSearch.IClassifierSelectorState;
            reducerCustomer: ModelsCustomer.ICustomerState;
            reducerCustomerEditor: ModelsCustomerEditor.ICustomerEditorState;
            reducerDealEditor: ModelsDealEditor.IDealEditorState;
            reducerParentDealPicker: ModelsParentDealPicker.IParentDealPickerState;
            reducerCampaignPicker: ModelsCampaignPicker.ICampaignPickerState;
            reducerDealStages: ModelsDealStages.IDealStagesState;
            reducerDealStageEditor: ModelsDealStageEditor.IDealStageEditorState;
            reducerDealList: ModelsDealList.IDealListState;
            reducerDealListSearch: ModelsDealListSearch.IDealListSearchState;
            reducerProductList: ModelsProductList.IProductListState;
            reducerProduct: ModelsProduct.IProductState;
            reducerProductPaymentAccount: ModelsProductPaymentAccount.IProductPaymentAccountState;
            reducerProductCredit: ModelsProductCredit.IProductCreditState;
            reducerGSZ: ModelsGSZ.IGSZState;
            reducerGszActivityInclude: ModelsGszActivityInclude.IGszActivityIncludeState;
            reducerGszActivityExclude: ModelsGszActivityExclude.IGszActivityExcludeState;
            reducerCustomerActivityInclude: ModelsCustomerActivityInclude.ICustomerActivityIncludeState;
            reducerCustomerActivityExclude: ModelsCustomerActivityExclude.ICustomerActivityExcludeState;
            reducerLimit: ModelsLimit.ILimitState;
            reducerDeal: ModelsDeal.IDealState;
            reducerEmployee: ModelsEmployee.IEmployeeState;
            reducerAgent: ModelsAgent.IAgentState;
            reducerAgentList: ModelsAgentList.IAgentListState;
            reducerMemberList: ModelsMemberList.IMemberListState;
            reducerOccasionList: ModelsOccasionList.IOccasionListState;
            reducerOccasion: ModelsOccasion.IOccasionState;
            reducerNoteList: ModelsNoteList.INoteListState;
            reducerNote: ModelsNote.INoteState;
            reducerDealAttachments: ModelsDealAttachments.IDealAttachmentsState;
            reducerForecastEventEditor: ModelsForecastEventEditor.IForecastEventEditorState;
        };
        mrmkmcibScheduler: any;
        mrmkmcibDashboard: any;
        mrmkmcibApp: any;
        mrmkmcibNotice: any;
    };
    selectedIndex: number | null;
    splitPanels: any;
}
export declare class DefaultValues {
    boolean: boolean;
    number: number;
    string: string;
    FilterOrganizationStructureList: Models.FilterOrganizationStructureList;
    OccasionListConfig: Models.OccasionListConfig;
    FilterMemberRoleList: Models.FilterMemberRoleList;
    PersonList: {
        data: never[];
    };
    CustomerManagedList: Models.CustomerManagedList;
    CustomerManagedListPage: Models.CustomerManagedListPage;
    CustomerListPage: Models.CustomerListPage;
    CustomerUnknown: Models.CustomerUnknown;
    HierarchyList: Models.HierarchyList;
    LimitOld: Models.LimitOld;
    Owner: Models.Owner;
    DealList: Models.DealList;
    SalesCampaign: Models.SalesCampaign;
    SalesCampaignList: Models.SalesCampaignList;
    ErrorModalWindow: Models.ErrorModalWindow;
    DealListPage: Models.DealListPage;
    DealDecisionDetails: Models.DealDecisionDetails;
    CreditProductList: Models.CreditProductList;
    SettlementAgreementProductList: Models.SettlementAgreementProductList;
    DepositProductList: Models.DepositProductList;
    CorporateCardProductList: Models.CorporateCardProductList;
    EncashmentContractProductList: Models.EncashmentContractProductList;
    LegalInfoProductList: Models.LegalInfoProductList;
    AcquiringProductList: Models.AcquiringProductList;
    DboProductList: Models.DboProductList;
    UdboProductList: Models.UdboProductList;
    SalaryProductList: Models.SalaryProductList;
    DepositProduct: Models.DepositProduct;
    CorporateCardProduct: Models.CorporateCardProduct;
    EncashmentContractProduct: Models.EncashmentContractProduct;
    LegalInfoProduct: Models.LegalInfoProduct;
    AcquiringProduct: Models.AcquiringProduct;
    DboProduct: Models.DboProduct;
    UdboProduct: Models.UdboProduct;
    SalaryProduct: Models.SalaryProduct;
    SettlementAgreementProduct: Models.SettlementAgreementProduct;
    PaymentAccountProductOperationList: Models.PaymentAccountProductOperationList;
    PaymentAccountProductCardIndexList: Models.PaymentAccountProductCardIndexList;
    ForecastDeal: Models.ForecastDeal;
    ForecastDealList: Models.ForecastDealList;
    ForecastEvent: Models.ForecastEvent;
    ForecastEventList: Models.ForecastEventList;
    CreditProduct: Models.CreditProduct;
    GszMember: Models.GszMember;
    BorrowerList: Models.BorrowerList;
    Borrower: Models.Borrower;
    GszMemberList: Models.GszMemberList;
    GszLimit: Models.GszLimit;
    Gsz: Models.Gsz;
    Customer: Models.Customer;
    Limit: Models.Limit;
    CustomerList: Models.CustomerList;
    EmptyList: {
        data: never[];
    };
    AgentList: Models.AgentList;
    contractClientsList: {
        data: never[];
    };
    contractTeamMembersList: {
        data: never[];
    };
    contractTeamMembers: {
        posId: string;
        fio: string;
        main: string;
        position: string;
    };
    contract: {
        number: string;
        status: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        privacy: boolean;
        date: null;
        contractClientsList: {
            data: never[];
        };
        contractTeamMembersList: {
            data: never[];
        };
    };
    Deal: Models.Deal;
    MemberList: Models.MemberList;
    dealStageTracking: ModelsCrm.DealStageTracking;
    Tracking: ModelsCrm.Tracking;
    dealPossibleStageList: ModelsCrm.DealPossibleStageList;
    nextStage: ModelsCrm.NextStage;
    dealHistoryStageList: ModelsCrm.DealHistoryStageList;
    historyStage: ModelsCrm.HistoryStage;
    OccasionList: Models.OccasionList;
    Occasion: Models.Occasion;
    Agent: Models.Agent;
    CustomerManaged: Models.CustomerManaged;
    NoteList: Models.NoteList;
    Note: Models.Note;
    Error: Error;
    Employee: {
        id: string;
        fullName: string;
        firstName: string;
        lastName: string;
        middleName: string;
        email: string;
        jobTitle: string;
        functionalDivisionName: string;
        positionName: string;
        territorialDivisionName: string;
        mobilePhone: string;
        workPhone: string;
        workPhoneExtension: null;
        head: null;
        isGeneral: boolean;
        isBlocked: boolean;
        role: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        roleAd: null;
        customerList: never[];
    };
    ProductListStatus: Models.ProductListStatus;
    ProductDataEksError: Models.ProductDataEksError;
    EksError: Models.EksError;
    SubCreditProduct: Models.SubCreditProduct;
    SubBankGuaranteeProduct: Models.SubBankGuaranteeProduct;
    SubAcquiringProduct: Models.SubAcquiringProduct;
    SubEncashmentContractProduct: Models.SubEncashmentContractProduct;
    SubSelfEncashmentContractProduct: Models.SubSelfEncashmentContractProduct;
    SubSalaryProduct: Models.SubSalaryProduct;
    SubDepositProduct: Models.SubDepositProduct;
    SubCorporateCardProduct: Models.SubCorporateCardProduct;
    GroupCurrencyProductList: Models.GroupCurrencyProductList;
    GroupCurrencyProductData: Models.GroupCurrencyProductData;
    PaymentAccountProductCardIndexInfo: Models.PaymentAccountProductCardIndexInfo;
    SubPaymentAccountProduct: Models.SubPaymentAccountProduct;
    SubPackageProduct: Models.SubPackageProduct;
    SubTariffPlanProduct: Models.SubTariffPlanProduct;
    SubCustomsPaymentProduct: Models.SubCustomsPaymentProduct;
    SubCashManagementProduct: Models.SubCashManagementProduct;
    SubUdboProduct: Models.SubUdboProduct;
    SubContractNSOProduct: Models.SubContractNSOProduct;
    SubContractSDOProduct: Models.SubContractSDOProduct;
    ProductHeaderTable: Models.ProductHeaderTable;
    SubLegalInfoProduct: Models.SubLegalInfoProduct;
    SubDboProduct: Models.SubDboProduct;
    AgentSearchListRequest: {
        agent: {
            personType: {
                lastName: string;
            };
        };
        page: number;
    };
    Classifier: {
        parentId: string;
        name: string;
        value: string;
        code: string;
    };
    PhoneNumberList: Models.PhoneNumberList;
    AgentCustomerPositionList: {
        data: never[];
    };
    ClassifierDictionary: {
        SBRF_PROBLEM_GROUP: {
            data: never[];
        };
        SBRF_PART_TYPE: {
            data: never[];
        };
        SBRF_OPTY_WAG_SS: {
            data: never[];
        };
        SALES_TEAM_ROLE: {
            data: never[];
        };
        SBRF_GSZ_STATUS_MEMBER: {
            data: never[];
        };
        SBRF_REQ_CLOSE_REASON: {
            data: never[];
        };
        SBRF_ACTION_ROLE: {
            data: never[];
        };
        CRM_LINK_CRITERION: {
            data: never[];
        };
        SBRF_NOTE_TYPE: {
            data: never[];
        };
        SBRF_GSZ_STATUS: {
            data: never[];
        };
        UFS_ADD_AGRMNT_TYPE: {
            data: never[];
        };
        EMPLOYMENT_STATUS: {
            data: never[];
        };
        SBRF_CONTACT_TYPE_GROUP: {
            data: never[];
        };
        SBRF_IMP_DATE: {
            data: never[];
        };
        UFS_PERSON_TYPE: {
            data: never[];
        };
        CRM_SALE_METHOD: {
            data: never[];
        };
        SBRF_ACCESSORY: {
            data: never[];
        };
        SBRF_KO_OPTY_TYPE: {
            data: never[];
        };
        COUNTRY: {
            data: never[];
        };
        SBRF_ACTION_RESULT: {
            data: never[];
        };
        TODO_TYPE: {
            data: never[];
        };
        FINS_COVERAGE_ROLE_TYPE: {
            data: never[];
        };
        SBRF_INDUSTRY: {
            data: never[];
        };
        CURRENCY: {
            data: never[];
        };
        SBRF_CONT_JOB_TITLE: {
            data: never[];
        };
        KIND_OF_INDUSTRY: {
            data: never[];
        };
        SBRF_ACC_PRIORITY: {
            data: never[];
        };
        SBRF_SEGMENT_TYPE: {
            data: never[];
        };
        ACCOUNT_TYPE: {
            data: never[];
        };
        SBRF_ACCOUNT_CATEGORY: {
            data: never[];
        };
        SBRF_OPF: {
            data: never[];
        };
        SEX_MF: {
            data: never[];
        };
        ACTIVITY_PRIORITY: {
            data: never[];
        };
        EVENT_STATUS: {
            data: never[];
        };
        SRV_AGREE_STATUS: {
            data: never[];
        };
        SBRF_DESITION_FORM: {
            data: never[];
        };
        CREDIT_COMMITTEE_STATUS: {
            data: never[];
        };
        FS_NOTE_TYPE: {
            data: never[];
        };
        UFS_BENEFIT_TYPE: {
            data: never[];
        };
        SBRF_DBO_TYPE: {
            data: never[];
        };
        UFS_CORP_BUDG_CARD_TYPE: {
            data: never[];
        };
        SBRF_PA_DECISION_FORMAT: {
            data: never[];
        };
        SBRF_ATTR_CHANNEL_PICK_LIST: {
            data: never[];
        };
        SBRF_APPLICATION: {
            data: never[];
        };
        SBRF_APPLICATION_KK: {
            data: never[];
        };
        DEAL_SALE_METHOD_KK: {
            data: never[];
        };
        SBRF_NKP_SS: {
            data: never[];
        };
        SBRF_DEPOSIT_TYPE: {
            data: never[];
        };
        SBRF_CREDIT_TYPE: {
            data: never[];
        };
        SECTOR_CLASSIFIC_CODE: {
            data: never[];
        };
        SBRF_RESIDENCY_TYPE: {
            data: never[];
        };
        CRM_SALES_STAGE: {
            data: never[];
        };
        CRM_SALE_STAGE: {
            data: never[];
        };
        ADDR_TYPE: {
            data: never[];
        };
        ACCOUNT_STATUS: {
            data: never[];
        };
        FINCORP_DEAL_APPROV_ACTION: {
            data: never[];
        };
        SBRF_PARTNERSHIP_TYPE: {
            data: never[];
        };
        DEAL_PRODUCT_SALE_METHOD: {
            data: never[];
        };
        DEAL_SALE_METHOD: {
            data: never[];
        };
        UFS_FC_EVENT_TYPE: {
            data: never[];
        };
        KK_SALE_TEAM_ROLES: {
            data: never[];
        };
        UNIVERSAL_SALE_TEAM_ROLES: {
            data: never[];
        };
        SPRGS_COVENANT_PERIOD: {
            data: {
                value: string;
                code: string;
                name: string;
                parentId: string;
            }[];
        };
        SPRGS_COVENANT_STATUS: {
            data: {
                value: string;
                code: string;
                name: string;
                parentId: string;
            }[];
        };
    };
    TroubleCriteriaList: {
        data: never[];
    };
    ClassifierCurrency: {
        parentId: string;
        name: string;
        value: string;
        code: string;
    };
    ClassifierList: {
        data: never[];
    };
    EncumbranceList: Models.ProductEncumbranceList;
    Address: Models.Address;
    paymentAccountProductRestrictionList: Models.PaymentAccountProductRestrictionList;
    paymentAccountProductTariffList: Models.PaymentAccountProductTariffList;
    paymentAccountProductVspInfo: Models.PaymentAccountProductVspInfo;
    paymentAccountProductPrivilegeList: Models.PaymentAccountProductPrivilegeList;
    paymentAccountProductCardIndex: Models.PaymentAccountProductCardIndex;
    paymentAccountProductOperation: Models.PaymentAccountProductOperation;
    employee: {
        id: string;
        fullName: string;
        firstName: string;
        lastName: string;
        middleName: string;
        email: string;
        jobTitle: string;
        functionalDivisionName: string;
        positionName: string;
        territorialDivisionName: string;
        mobilePhone: string;
        workPhone: string;
        workPhoneExtension: null;
        head: null;
        isGeneral: boolean;
        isBlocked: boolean;
        role: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        roleAd: null;
        customerList: never[];
    };
    accountNumber: Models.AccountNumber;
    testDataPaymentAccountVSP: Models.PaymentAccountProductVspInfo;
    testDataPaymentAccountCardIndexList: Models.PaymentAccountProductCardIndexList;
    testDataPaymentAccountRestrictionList: Models.PaymentAccountProductRestrictionList;
    testDataPaymentAccountOperationList: Models.PaymentAccountProductOperationList;
    CustomerUpdateRequest: {
        operationUuid: string;
        id: string;
        name: null;
        modId: number;
        address: {
            region: null;
            building: null;
            city: null;
            country: null;
            id: null;
            isActive: null;
            isPrimary: null;
            modId: null;
            settlement: null;
            subject: null;
            street: null;
            type: null;
            house: string;
            block: string;
            flat: string;
            postalCode: string;
            comment: string;
            office: string;
        };
    };
    GszActivityIncludeCreateRequest: {
        operationUuid: string;
        comment: string;
        executor: {
            id: string;
            fullName: string;
            firstName: string;
            lastName: string;
            middleName: string;
            email: string;
            jobTitle: string;
            functionalDivisionName: string;
            positionName: string;
            territorialDivisionName: string;
            mobilePhone: string;
            workPhone: string;
            workPhoneExtension: null;
            head: null;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: null;
            customerList: never[];
        };
        clientId: string;
        gszId: string;
    };
    GszActivityExcludeCreateRequest: {
        operationUuid: string;
    };
    CustomerActivityIncludeCreateRequest: {
        parentAccountId: string;
        operationUuid: string;
        comment: string;
        executor: {
            id: string;
            fullName: string;
            firstName: string;
            lastName: string;
            middleName: string;
            email: string;
            jobTitle: string;
            functionalDivisionName: string;
            positionName: string;
            territorialDivisionName: string;
            mobilePhone: string;
            workPhone: string;
            workPhoneExtension: null;
            head: null;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: null;
            customerList: never[];
        };
        clientId: string;
    };
    CustomerActivityExcludeCreateRequest: {
        parentAccountId: string;
        operationUuid: string;
        comment: string;
        executor: {
            id: string;
            fullName: string;
            firstName: string;
            lastName: string;
            middleName: string;
            email: string;
            jobTitle: string;
            functionalDivisionName: string;
            positionName: string;
            territorialDivisionName: string;
            mobilePhone: string;
            workPhone: string;
            workPhoneExtension: null;
            head: null;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: null;
            customerList: never[];
        };
        clientId: string;
    };
    AgentCreateRequest: {
        operationUuid: string;
        currentCustomerManager: null;
        agent: {
            inputFirstName: string;
            inputLastName: string;
            inputMiddleName: string;
            inputJobText: string;
            inputJob: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            inputWorkPhone: string;
            inputMobilePhone: string;
            inputEmail: string;
            inputBirthday: null;
            inputGender: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            inputRelationType: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            inputComment: string;
            operationUuid: string;
        };
        occasionList: {
            data: never[];
        };
        noteList: {
            data: never[];
        };
    };
    AgentUpdateRequest: {
        operationUuid: string;
        firstName: string;
        lastName: string;
        middleName: string;
        jobText: string;
        job: {
            parentId: string;
            code: string;
            value: string;
            name: string;
        };
        workPhone: string;
        mobilePhone: string;
        email: string;
        birthday: Date;
        gender: {
            parentId: string;
            code: string;
            value: string;
            name: string;
        };
        relationType: {
            parentId: string;
            code: string;
            value: string;
            name: string;
        };
        comment: string;
        currentAgent: null;
        currentCustomerManaged: null;
        noteList: {
            data: never[];
        };
        occasionList: {
            data: never[];
        };
    };
    CustomerAgentListUpdateRequest: {
        operationUuid: string;
        name: string;
        id: string;
        modId: number;
        agents: {
            data: never[];
        };
        customerModifierId: {
            hierarchy: never[];
            id: string;
            name: string;
            shortName: string;
            gsz: null;
            role: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            legalForm: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            organizationType: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            isNSL: boolean;
            isHolding: boolean;
            memberList: {
                data: never[];
            };
            segment: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            category: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            status: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            curator: null;
            holder: null;
            modId: number;
            registrationCountry: string;
            troubleGroup: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            ownerList: never[];
            sector: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            resident: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            kindOfIndustry: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            affiliateList: null;
            kpp: string;
            inn: string;
            kio: string;
            agentList: {
                data: never[];
            };
            occasionList: {
                data: never[];
            };
            noteList: {
                data: never[];
            };
            anchorOrganisation: string;
            address: {
                region: string;
                building: string;
                city: string;
                country: {
                    parentId: string;
                    code: string;
                    value: string;
                    name: string;
                };
                id: string;
                isActive: boolean;
                isPrimary: boolean;
                modId: number;
                settlement: string;
                subject: string;
                street: string;
                type: {
                    parentId: string;
                    code: string;
                    value: string;
                    name: string;
                };
                house: string;
                block: string;
                flat: string;
                postalCode: string;
                comment: string;
                office: string;
            };
        };
        agentListModifierId: {
            data: never[];
        };
        inputAgentRole: {
            parentId: string;
            code: string;
            value: string;
            name: string;
        };
    };
    CustomerOccasionListUpdateRequest: {
        operationUuid: string;
        occasionList: {
            data: never[];
        };
        currentCustomerManager: {
            hierarchy: never[];
            id: string;
            name: string;
            shortName: string;
            gsz: null;
            role: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            legalForm: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            organizationType: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            isNSL: boolean;
            isHolding: boolean;
            memberList: {
                data: never[];
            };
            segment: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            category: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            status: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            curator: null;
            holder: null;
            modId: number;
            registrationCountry: string;
            troubleGroup: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            ownerList: never[];
            sector: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            resident: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            kindOfIndustry: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            affiliateList: null;
            kpp: string;
            inn: string;
            kio: string;
            agentList: {
                data: never[];
            };
            occasionList: {
                data: never[];
            };
            noteList: {
                data: never[];
            };
            anchorOrganisation: string;
            address: {
                region: string;
                building: string;
                city: string;
                country: {
                    parentId: string;
                    code: string;
                    value: string;
                    name: string;
                };
                id: string;
                isActive: boolean;
                isPrimary: boolean;
                modId: number;
                settlement: string;
                subject: string;
                street: string;
                type: {
                    parentId: string;
                    code: string;
                    value: string;
                    name: string;
                };
                house: string;
                block: string;
                flat: string;
                postalCode: string;
                comment: string;
                office: string;
            };
        };
    };
    EksErrorList: {
        data: never[];
    };
    ActivityRequest: {
        id: null;
        modId: null;
        client: null;
        result: null;
        deal: null;
        description: string;
        priority: null;
        plannedCompletion: null;
        statusClassifier: null;
        comment: null;
        type: null;
        agents: never[];
        team: never[];
        parentAccountId: null;
        gszId: null;
        dealId: null;
    };
    Activity: {
        id: string;
        modId: number;
        deal: null;
        result: null;
        parentCustomer: null;
        gsz: null;
        dueDate: null;
        autoUpdateStatus: null;
        customer: null;
        memberList: {
            data: never[];
        };
        description: string;
        comment: string;
        source: string;
        status: null;
        isReqApproval: boolean;
        type: null;
        accessLevel: number;
        urgency: number;
        roleType: never[];
        plannedStart: null;
        isPinned: boolean;
        author: null;
        agentList: {
            data: never[];
        };
        availableResultList: {
            data: never[];
        };
        nextAvailableStatusList: {
            data: never[];
        };
        priority: null;
        campaignName: null;
    };
    dealCrmStage: {
        clientStage: {
            parentId: '';
            code: '';
            value: '';
            name: '';
        };
        description: '';
        crmStage: {
            parentId: '';
            code: '';
            value: '';
            name: '';
        };
        comment: '';
        order: -1;
        plannedFinishDate: null;
    };
    dealStage: Models.DealStage;
    dealDecisionDetails: {
        decision: string;
        number: string;
        date: Date;
        committee: string;
        committeeDate: Date;
        territorialDivisionName: string;
        status: {
            parentId: string;
            code: string;
            value: string;
            name: string;
        };
    };
    DealActivityExcludeRequest: {};
    ActivityList: {
        data: never[];
    };
    DealActivityAppendRequest: {};
    Person: {
        id: string;
        email: string;
        name: string;
        firstName: null;
        lastName: null;
        middleName: null;
        division: null;
        position: null;
        companyName: null;
        workPhone: null;
        city: null;
    };
    DealProduct: Models.DealProduct;
    DealListFilter: Models.DealListFilter;
    HistoryMobileAppData: ModelsApp.HistoryMobileAppData;
    ClassifierRequest: {
        classifierName: string;
        value: string;
        code: string;
    };
    NavigateToEntity: {
        navigationType: number;
        customer: null;
        agent: null;
        occasionId: null;
        activity: null;
        deal: null;
        occasionContextMode: number;
        activityContextMode: number;
        dealMode: number;
        productCredit: null;
        productPaymentAccount: null;
        productDeposit: null;
        productContractNso: null;
        productContractSdo: null;
        productBankGuarantee: null;
        productEncashmentExpiring: null;
        qlikUrl: null;
        valueString: string;
        eksId: null;
        returnId: string;
        gszId: string;
        isHolding: null;
        customerMode: number;
        productType: null;
        isPrimary: null;
    };
    PaymentScheduleList: Models.PaymentScheduleList;
    PaymentSchedule: Models.PaymentSchedule;
    DealAttachment: Models.DealAttachment;
    DealAttachmentList: Models.IDealAttachmentList;
    currentConfiguration: ModelsApp.Configuration;
}
export declare const defaultValues: DefaultValues;
