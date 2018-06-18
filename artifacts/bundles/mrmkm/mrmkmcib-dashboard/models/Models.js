/**
 * Models for all containers.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
export class DefaultValues {
    constructor() {
        this.boolean = false;
        this.number = 0;
        this.string = '';
        this.SupParams = {
            kmUrl: '',
            chiefUrl: '',
            accessMode: true
        };
        this.QlikMessage = {
            type: Enums.QlikEventType.None,
            payload: {
                currentUrl: '',
                customerId: '',
                dealId: '',
                activityId: '',
                qlikUrl: '',
                flag: 0,
                defaultFileFormat: Enums.FileFormat.Excel,
                generateFileParameters: '',
            }
        };
        this.GenerateFileParameters = {
            SettingsParameters: [
                {
                    reportTitle: '',
                    reportFormat: ''
                }
            ],
            NPReportPOSTParameters: {
                config: {
                    outputFormat: '',
                    reportId: ''
                },
                connectionId: '',
                selections: [
                    {
                        fieldName: '',
                        selectedCount: 1,
                        isNumeric: false,
                        selectedValues: ['']
                    }
                ],
                initiatorEmail: '',
                type: ''
            }
        };
        this.personHistoryList = {
            data: []
        };
        this.SearchHistoryList = {
            // TODO Describe SearchHistoryList model default value.
            data: [],
            isCompleted: true,
        };
        this.Person = {
            id: '',
            email: '',
            name: '',
            firstName: null,
            lastName: null,
            middleName: null,
            division: null,
            position: null,
            companyName: null,
            city: null,
            workPhone: null
        };
        this.PersonList = {
            data: []
        };
        this.Error = {
            type: Enums.ErrorType.None,
            code: '',
            message: '',
            comment: '',
        };
        this.CustomerList = {
            data: [],
            isCompleted: false,
        };
        this.CustomerListPage = {
            data: [],
            isLast: false,
        };
        this.Employee = {
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
        };
        this.CustomerUnknown = {
            hierarchy: [],
            partnership: null,
            affiliateList: null,
            priority: null,
            myClient: null,
            supervisingDepartment: null,
            id: '',
            rating: null,
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
            memberList: { data: [] },
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
            agentList: { data: [] },
            occasionList: { data: [] },
            noteList: { data: [] },
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
        this.Customer = {};
        this.CustomerManaged = {
            hierarchy: [],
            id: '',
            name: '',
            shortName: '',
            gsz: null,
            rating: null,
            isTemporaryDealCreationLocked: false,
            myClient: null,
            partnership: null,
            supervisingDepartment: null,
            priority: null,
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
            memberList: { data: [] },
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
            troubleCriteriaList: { data: [] },
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
            agentList: { data: [] },
            occasionList: { data: [] },
            noteList: { data: [] },
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
                office: '',
            }
        };
        this.NavigateToEntity = {
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
        };
        this.Deal = {
            id: '',
            isRoadMapShow: false,
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
            requestTypeClassifier: {
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
            phaseClassifier: { parentId: '', name: '', value: '', code: '' },
            products: [{
                    sum: 0,
                    sumInRubles: 0,
                    currencyClassifier: { parentId: '', name: '', value: '', code: '' },
                    productClassifier: { parentId: '', name: '', value: '', code: '' },
                    SKRtotal: 0,
                }],
            roleClassifier: { parentId: '', name: '', value: '', code: '' },
            title: '',
            isManaged: false,
            memberList: { data: [] },
            agentList: { data: [] },
            salesMethodClassifier: { parentId: '', name: '', value: '', code: '' },
            decision: [],
            sum: null,
            sumRur: null,
            exchangeCourse: null,
            currency: null,
            contactParticipantList: {
                data: []
            },
            contractList: { data: [] },
            salesCampaign: {
                id: '',
                name: '',
            },
        };
        this.Activity = {
            id: '',
            modId: 0,
            result: null,
            deal: null,
            autoUpdateStatus: null,
            parentCustomer: null,
            gsz: null,
            dueDate: null,
            comment: '',
            campaignName: '',
            customer: null,
            memberList: { data: [] },
            description: '',
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
            agentList: { data: [] },
            availableResultList: { data: [] },
            nextAvailableStatusList: { data: [] },
            priority: null,
        };
    }
}
export const defaultValues = new DefaultValues();
//# sourceMappingURL=Models.js.map