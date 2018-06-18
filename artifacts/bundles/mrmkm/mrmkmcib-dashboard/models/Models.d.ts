/**
 * Models for all containers.
 *
 * @author Burnaev M.U.
 * @see
 */
import * as ModelsAppDashboard from './ModelsAppDashboard';
import * as ModelsCustomerDashboard from './ModelsCustomerDashboard';
import { Models as ModelsScheduler } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import { Models } from 'mrmkmcib-dashboard';
import Error from './Error';
export interface IRootState {
    user: {
        mrmkmcibDashboard: {
            reducerAppDashboard: ModelsAppDashboard.IAppDashboardState;
            reducerCustomerDashboard: ModelsCustomerDashboard.ICustomerDashboardState;
        };
        mrmkmcibCRM: any;
        mrmkmcibApp: any;
        mrmkmcibScheduler: any;
    };
}
export declare class DefaultValues {
    boolean: boolean;
    number: number;
    string: string;
    SupParams: {
        kmUrl: string;
        chiefUrl: string;
        accessMode: boolean;
    };
    QlikMessage: {
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
    };
    GenerateFileParameters: {
        SettingsParameters: {
            reportTitle: string;
            reportFormat: string;
        }[];
        NPReportPOSTParameters: {
            config: {
                outputFormat: string;
                reportId: string;
            };
            connectionId: string;
            selections: {
                fieldName: string;
                selectedCount: number;
                isNumeric: boolean;
                selectedValues: string[];
            }[];
            initiatorEmail: string;
            type: string;
        };
    };
    personHistoryList: {
        data: any[];
    };
    SearchHistoryList: Models.SearchHistoryList;
    Person: ModelsScheduler.Person;
    PersonList: {
        data: any[];
    };
    Error: Error;
    CustomerList: {
        data: any[];
        isCompleted: boolean;
    };
    CustomerListPage: {
        data: any[];
        isLast: boolean;
    };
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
    CustomerUnknown: {
        hierarchy: any[];
        partnership: any;
        affiliateList: any;
        priority: any;
        myClient: any;
        supervisingDepartment: any;
        id: string;
        rating: any;
        name: string;
        shortName: string;
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
        holder: any;
        curator: any;
        gsz: any;
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
        kpp: string;
        inn: string;
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
    Customer: {};
    CustomerManaged: {
        hierarchy: any[];
        id: string;
        name: string;
        shortName: string;
        gsz: any;
        rating: any;
        isTemporaryDealCreationLocked: boolean;
        myClient: any;
        partnership: any;
        supervisingDepartment: any;
        priority: any;
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
        isOldNkp: boolean;
        isTempBlockedForOppty: boolean;
        isExistPrimaryAddress: boolean;
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
        troubleCriteriaList: {
            data: any[];
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
    Deal: {
        id: string;
        isRoadMapShow: boolean;
        accountId: string;
        modId: string;
        isOpen: boolean;
        customer: {
            id: string;
            name: string;
        };
        parentDeal: any;
        application: any;
        attractingChannel: any;
        territorialCoverage: any;
        salaryProjectDetails: any;
        system: any;
        progress: any;
        probability: any;
        closeReason: any;
        myRole: any;
        commentList: any;
        agreement: any;
        stages: any;
        creationDate: any;
        plannedFinishDate: any;
        requestTypeClassifier: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        isEditable: boolean;
        type: number;
        finishDate: any;
        owner: {
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
        phaseClassifier: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        products: {
            sum: number;
            sumInRubles: number;
            currencyClassifier: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            productClassifier: {
                parentId: string;
                name: string;
                value: string;
                code: string;
            };
            SKRtotal: number;
        }[];
        roleClassifier: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        title: string;
        isManaged: boolean;
        memberList: {
            data: any[];
        };
        agentList: {
            data: any[];
        };
        salesMethodClassifier: {
            parentId: string;
            name: string;
            value: string;
            code: string;
        };
        decision: any[];
        sum: any;
        sumRur: any;
        exchangeCourse: any;
        currency: any;
        contactParticipantList: {
            data: any[];
        };
        contractList: {
            data: any[];
        };
        salesCampaign: {
            id: string;
            name: string;
        };
    };
    Activity: {
        id: string;
        modId: number;
        result: any;
        deal: any;
        autoUpdateStatus: any;
        parentCustomer: any;
        gsz: any;
        dueDate: any;
        comment: string;
        campaignName: string;
        customer: any;
        memberList: {
            data: any[];
        };
        description: string;
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
    };
}
export declare const defaultValues: DefaultValues;
