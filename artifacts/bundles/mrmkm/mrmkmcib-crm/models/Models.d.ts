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
        data: any[];
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
        data: any[];
    };
    AgentList: Models.AgentList;
    contractClientsList: {
        data: any[];
    };
    contractTeamMembersList: {
        data: any[];
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
        date: any;
        contractClientsList: {
            data: any[];
        };
        contractTeamMembersList: {
            data: any[];
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
        workPhoneExtension: any;
        head: any;
        isGeneral: boolean;
        isBlocked: boolean;
        role: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        roleAd: any;
        customerList: any[];
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
        data: any[];
    };
    ClassifierDictionary: {
        SBRF_PROBLEM_GROUP: {
            data: any[];
        };
        SBRF_PART_TYPE: {
            data: any[];
        };
        SBRF_OPTY_WAG_SS: {
            data: any[];
        };
        SALES_TEAM_ROLE: {
            data: any[];
        };
        SBRF_GSZ_STATUS_MEMBER: {
            data: any[];
        };
        SBRF_REQ_CLOSE_REASON: {
            data: any[];
        };
        SBRF_ACTION_ROLE: {
            data: any[];
        };
        CRM_LINK_CRITERION: {
            data: any[];
        };
        SBRF_NOTE_TYPE: {
            data: any[];
        };
        SBRF_GSZ_STATUS: {
            data: any[];
        };
        UFS_ADD_AGRMNT_TYPE: {
            data: any[];
        };
        EMPLOYMENT_STATUS: {
            data: any[];
        };
        SBRF_CONTACT_TYPE_GROUP: {
            data: any[];
        };
        SBRF_IMP_DATE: {
            data: any[];
        };
        UFS_PERSON_TYPE: {
            data: any[];
        };
        CRM_SALE_METHOD: {
            data: any[];
        };
        SBRF_ACCESSORY: {
            data: any[];
        };
        SBRF_KO_OPTY_TYPE: {
            data: any[];
        };
        COUNTRY: {
            data: any[];
        };
        SBRF_ACTION_RESULT: {
            data: any[];
        };
        TODO_TYPE: {
            data: any[];
        };
        FINS_COVERAGE_ROLE_TYPE: {
            data: any[];
        };
        SBRF_INDUSTRY: {
            data: any[];
        };
        CURRENCY: {
            data: any[];
        };
        SBRF_CONT_JOB_TITLE: {
            data: any[];
        };
        KIND_OF_INDUSTRY: {
            data: any[];
        };
        SBRF_ACC_PRIORITY: {
            data: any[];
        };
        SBRF_SEGMENT_TYPE: {
            data: any[];
        };
        ACCOUNT_TYPE: {
            data: any[];
        };
        SBRF_ACCOUNT_CATEGORY: {
            data: any[];
        };
        SBRF_OPF: {
            data: any[];
        };
        SEX_MF: {
            data: any[];
        };
        ACTIVITY_PRIORITY: {
            data: any[];
        };
        EVENT_STATUS: {
            data: any[];
        };
        SRV_AGREE_STATUS: {
            data: any[];
        };
        SBRF_DESITION_FORM: {
            data: any[];
        };
        CREDIT_COMMITTEE_STATUS: {
            data: any[];
        };
        FS_NOTE_TYPE: {
            data: any[];
        };
        UFS_BENEFIT_TYPE: {
            data: any[];
        };
        SBRF_DBO_TYPE: {
            data: any[];
        };
        UFS_CORP_BUDG_CARD_TYPE: {
            data: any[];
        };
        SBRF_PA_DECISION_FORMAT: {
            data: any[];
        };
        SBRF_ATTR_CHANNEL_PICK_LIST: {
            data: any[];
        };
        SBRF_APPLICATION: {
            data: any[];
        };
        SBRF_APPLICATION_KK: {
            data: any[];
        };
        DEAL_SALE_METHOD_KK: {
            data: any[];
        };
        SBRF_NKP_SS: {
            data: any[];
        };
        SBRF_DEPOSIT_TYPE: {
            data: any[];
        };
        SBRF_CREDIT_TYPE: {
            data: any[];
        };
        SECTOR_CLASSIFIC_CODE: {
            data: any[];
        };
        SBRF_RESIDENCY_TYPE: {
            data: any[];
        };
        CRM_SALES_STAGE: {
            data: any[];
        };
        CRM_SALE_STAGE: {
            data: any[];
        };
        ADDR_TYPE: {
            data: any[];
        };
        ACCOUNT_STATUS: {
            data: any[];
        };
        FINCORP_DEAL_APPROV_ACTION: {
            data: any[];
        };
        SBRF_PARTNERSHIP_TYPE: {
            data: any[];
        };
        DEAL_PRODUCT_SALE_METHOD: {
            data: any[];
        };
        DEAL_SALE_METHOD: {
            data: any[];
        };
        UFS_FC_EVENT_TYPE: {
            data: any[];
        };
        KK_SALE_TEAM_ROLES: {
            data: any[];
        };
        UNIVERSAL_SALE_TEAM_ROLES: {
            data: any[];
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
        data: any[];
    };
    ClassifierCurrency: {
        parentId: string;
        name: string;
        value: string;
        code: string;
    };
    ClassifierList: {
        data: any[];
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
        workPhoneExtension: any;
        head: any;
        isGeneral: boolean;
        isBlocked: boolean;
        role: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        roleAd: any;
        customerList: any[];
    };
    accountNumber: Models.AccountNumber;
    testDataPaymentAccountVSP: Models.PaymentAccountProductVspInfo;
    testDataPaymentAccountCardIndexList: Models.PaymentAccountProductCardIndexList;
    testDataPaymentAccountRestrictionList: Models.PaymentAccountProductRestrictionList;
    testDataPaymentAccountOperationList: Models.PaymentAccountProductOperationList;
    CustomerUpdateRequest: {
        operationUuid: string;
        id: string;
        name: any;
        modId: number;
        address: {
            region: any;
            building: any;
            city: any;
            country: any;
            id: any;
            isActive: any;
            isPrimary: any;
            modId: any;
            settlement: any;
            subject: any;
            street: any;
            type: any;
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
            workPhoneExtension: any;
            head: any;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: any;
            customerList: any[];
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
            workPhoneExtension: any;
            head: any;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: any;
            customerList: any[];
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
            workPhoneExtension: any;
            head: any;
            isGeneral: boolean;
            isBlocked: boolean;
            role: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            roleAd: any;
            customerList: any[];
        };
        clientId: string;
    };
    AgentCreateRequest: {
        operationUuid: string;
        currentCustomerManager: any;
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
            inputBirthday: any;
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
            data: any[];
        };
        noteList: {
            data: any[];
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
        currentAgent: any;
        currentCustomerManaged: any;
        noteList: {
            data: any[];
        };
        occasionList: {
            data: any[];
        };
    };
    CustomerAgentListUpdateRequest: {
        operationUuid: string;
        name: string;
        id: string;
        modId: number;
        agents: {
            data: any[];
        };
        customerModifierId: {
            hierarchy: any[];
            id: string;
            name: string;
            shortName: string;
            gsz: any;
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
                data: any[];
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
            curator: any;
            holder: any;
            modId: number;
            registrationCountry: string;
            troubleGroup: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            ownerList: any[];
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
            affiliateList: any;
            kpp: string;
            inn: string;
            kio: string;
            agentList: {
                data: any[];
            };
            occasionList: {
                data: any[];
            };
            noteList: {
                data: any[];
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
            data: any[];
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
            data: any[];
        };
        currentCustomerManager: {
            hierarchy: any[];
            id: string;
            name: string;
            shortName: string;
            gsz: any;
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
                data: any[];
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
            curator: any;
            holder: any;
            modId: number;
            registrationCountry: string;
            troubleGroup: {
                parentId: string;
                code: string;
                value: string;
                name: string;
            };
            ownerList: any[];
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
            affiliateList: any;
            kpp: string;
            inn: string;
            kio: string;
            agentList: {
                data: any[];
            };
            occasionList: {
                data: any[];
            };
            noteList: {
                data: any[];
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
        data: any[];
    };
    ActivityRequest: {
        id: any;
        modId: any;
        client: any;
        result: any;
        deal: any;
        description: string;
        priority: any;
        plannedCompletion: any;
        statusClassifier: any;
        comment: any;
        type: any;
        agents: any[];
        team: any[];
        parentAccountId: any;
        gszId: any;
        dealId: any;
    };
    Activity: {
        id: string;
        modId: number;
        deal: any;
        result: any;
        parentCustomer: any;
        gsz: any;
        dueDate: any;
        autoUpdateStatus: any;
        customer: any;
        memberList: {
            data: any[];
        };
        description: string;
        comment: string;
        source: string;
        status: any;
        isReqApproval: boolean;
        type: any;
        accessLevel: number;
        urgency: number;
        roleType: any[];
        plannedStart: any;
        isPinned: boolean;
        author: any;
        agentList: {
            data: any[];
        };
        availableResultList: {
            data: any[];
        };
        nextAvailableStatusList: {
            data: any[];
        };
        priority: any;
        campaignName: any;
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
        data: any[];
    };
    DealActivityAppendRequest: {};
    Person: {
        id: string;
        email: string;
        name: string;
        firstName: any;
        lastName: any;
        middleName: any;
        division: any;
        position: any;
        companyName: any;
        workPhone: any;
        city: any;
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
        customer: any;
        agent: any;
        occasionId: any;
        activity: any;
        deal: any;
        occasionContextMode: number;
        activityContextMode: number;
        dealMode: number;
        productCredit: any;
        productPaymentAccount: any;
        productDeposit: any;
        productContractNso: any;
        productContractSdo: any;
        productBankGuarantee: any;
        productEncashmentExpiring: any;
        qlikUrl: any;
        valueString: string;
        eksId: any;
        returnId: string;
        gszId: string;
        isHolding: any;
        customerMode: number;
        productType: any;
        isPrimary: any;
    };
    PaymentScheduleList: Models.PaymentScheduleList;
    PaymentSchedule: Models.PaymentSchedule;
    DealAttachment: Models.DealAttachment;
    DealAttachmentList: Models.IDealAttachmentList;
    currentConfiguration: ModelsApp.Configuration;
}
export declare const defaultValues: DefaultValues;
