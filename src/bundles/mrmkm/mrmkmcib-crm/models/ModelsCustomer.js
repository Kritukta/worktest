/**
 * Models for Customer container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in Customer actions and thunks.
const defaultState = {
    get state() {
        return {
            currentCustomerId: '',
            currentCustomer: defaultValues.Customer,
            currentCustomerManaged: defaultValues.CustomerManaged,
            isDashboardExpandedMode: false,
            isVisiblePopoverHolder: false,
            isVisiblePopoverCurator: false,
            isVisiblePopoverOccasionList: false,
            isVisiblePopoverNoteList: false,
            isVisiblePopoverProblemList: false,
            isVisibleModalActivityEditor: false,
            isVisibleModalPlanner: false,
            isVisibleModalEmailSend: false,
            isVisibleModalAssociateSearch: false,
            isSearchModeAffiliateList: false,
            inputSearchAffiliateList: '',
            affiliateSearchList: defaultValues.CustomerList,
            currentTab: Enums.CustomerManagedTab.Main,
            isVisiblePopoverOwner: false,
            currentOwner: defaultValues.Owner,
            currentPopoverLimitItem: Enums.OldLimitItem.Main,
            isVisiblePopoverLimit: false,
            isActivityCreateMode: false,
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            customer: defaultValues.CustomerUnknown,
            customerFetching: false,
            customerError: null,
            customerCachedDate: null,
            currentMode: Enums.CustomerMode.CommonBack,
            limit: defaultValues.Limit,
            limitFetching: false,
            limitError: null,
            limitCachedDate: null,
            limitOld: defaultValues.LimitOld,
            limitOldFetching: false,
            limitOldError: null,
            limitOldCachedDate: null,
            //START CREDIT product list default state
            creditActiveProductList: defaultValues.CreditProductList,
            creditActiveProductListFetching: false,
            creditActiveProductListUpdating: false,
            creditActiveProductListError: null,
            creditActiveProductListCachedDate: null,
            creditCloseProductList: defaultValues.CreditProductList,
            creditCloseProductListFetching: false,
            creditCloseProductListUpdating: false,
            creditCloseProductListError: null,
            creditCloseProductListCachedDate: null,
            //END CREDIT product list default state
            // START DEPOSIT product list default state
            depositActiveProductList: defaultValues.DepositProductList,
            depositActiveProductListFetching: false,
            depositActiveProductListError: null,
            depositActiveProductListUpdating: false,
            depositActiveProductListCachedDate: null,
            depositCloseProductList: defaultValues.DepositProductList,
            depositCloseProductListFetching: false,
            depositCloseProductListError: null,
            depositCloseProductListUpdating: false,
            depositCloseProductListCachedDate: null,
            // END DEPOSIT product list default state
            // START settlementAgreement product list default state
            settlementAgreementActiveProductList: defaultValues.SettlementAgreementProductList,
            settlementAgreementActiveProductListFetching: false,
            settlementAgreementActiveProductListError: null,
            settlementAgreementActiveProductListUpdating: false,
            settlementAgreementActiveProductListCachedDate: null,
            settlementAgreementCloseProductList: defaultValues.SettlementAgreementProductList,
            settlementAgreementCloseProductListFetching: false,
            settlementAgreementCloseProductListError: null,
            settlementAgreementCloseProductListUpdating: false,
            settlementAgreementCloseProductListCachedDate: null,
            // END settlementAgreement product list default state
            //START CORPORATE_CARD product list default state
            corporateCardActiveProductList: defaultValues.CorporateCardProductList,
            corporateCardActiveProductListFetching: false,
            corporateCardActiveProductListUpdating: false,
            corporateCardActiveProductListError: null,
            corporateCardActiveProductListCachedDate: null,
            corporateCardCloseProductList: defaultValues.CorporateCardProductList,
            corporateCardCloseProductListFetching: false,
            corporateCardCloseProductListUpdating: false,
            corporateCardCloseProductListError: null,
            corporateCardCloseProductListCachedDate: null,
            //END CORPORATE_CARD product list default state
            //START ENCASHMENT_CONTRACT product list default state
            encashmentContractActiveProductList: defaultValues.EncashmentContractProductList,
            encashmentContractActiveProductListFetching: false,
            encashmentContractActiveProductListUpdating: false,
            encashmentContractActiveProductListError: null,
            encashmentContractActiveProductListCachedDate: null,
            encashmentContractCloseProductList: defaultValues.EncashmentContractProductList,
            encashmentContractCloseProductListFetching: false,
            encashmentContractCloseProductListUpdating: false,
            encashmentContractCloseProductListError: null,
            encashmentContractCloseProductListCachedDate: null,
            //END ENCASHMENT_CONTRACT product list default state
            //START ACQUIRING product list default state
            acquiringActiveProductList: defaultValues.AcquiringProductList,
            acquiringActiveProductListFetching: false,
            acquiringActiveProductListUpdating: false,
            acquiringActiveProductListError: null,
            acquiringActiveProductListCachedDate: null,
            acquiringCloseProductList: defaultValues.AcquiringProductList,
            acquiringCloseProductListFetching: false,
            acquiringCloseProductListUpdating: false,
            acquiringCloseProductListError: null,
            acquiringCloseProductListCachedDate: null,
            //END ACQUIRING product list default state
            //START DBO product list default state
            dboActiveProductList: defaultValues.DboProductList,
            dboActiveProductListFetching: false,
            dboActiveProductListUpdating: false,
            dboActiveProductListError: null,
            dboActiveProductListCachedDate: null,
            dboCloseProductList: defaultValues.DboProductList,
            dboCloseProductListFetching: false,
            dboCloseProductListUpdating: false,
            dboCloseProductListError: null,
            dboCloseProductListCachedDate: null,
            //END DBO product list default state
            //START SALARY product list default state
            salaryActiveProductList: defaultValues.SalaryProductList,
            salaryActiveProductListFetching: false,
            salaryActiveProductListUpdating: false,
            salaryActiveProductListError: null,
            salaryActiveProductListCachedDate: null,
            salaryCloseProductList: defaultValues.SalaryProductList,
            salaryCloseProductListFetching: false,
            salaryCloseProductListUpdating: false,
            salaryCloseProductListError: null,
            salaryCloseProductListCachedDate: null,
            //END SALARY product list default state
            //START UDBO product list default state
            udboActiveProductList: defaultValues.UdboProductList,
            udboActiveProductListFetching: false,
            udboActiveProductListUpdating: false,
            udboActiveProductListError: null,
            udboActiveProductListCachedDate: null,
            udboCloseProductList: defaultValues.UdboProductList,
            udboCloseProductListFetching: false,
            udboCloseProductListUpdating: false,
            udboCloseProductListError: null,
            udboCloseProductListCachedDate: null,
            //END UDBO product list default state
            legalInfoProductList: defaultValues.LegalInfoProductList,
            legalInfoProductListFetching: false,
            legalInfoProductListUpdating: false,
            legalInfoProductListError: null,
            legalInfoProductListCachedDate: null,
            creditActiveProductEksList: defaultValues.CreditProductList,
            creditActiveProductEksListFetching: false,
            creditActiveProductEksListError: null,
            creditActiveProductEksListCachedDate: null,
            creditCloseProductEksList: defaultValues.CreditProductList,
            creditCloseProductEksListFetching: false,
            creditCloseProductEksListError: null,
            creditCloseProductEksListCachedDate: null,
            settlementAgreementActiveProductEksList: defaultValues.SettlementAgreementProductList,
            settlementAgreementActiveProductEksListFetching: false,
            settlementAgreementActiveProductEksListError: null,
            settlementAgreementActiveProductEksListCachedDate: null,
            settlementAgreementCloseProductEksList: defaultValues.SettlementAgreementProductList,
            settlementAgreementCloseProductEksListFetching: false,
            settlementAgreementCloseProductEksListError: null,
            settlementAgreementCloseProductEksListCachedDate: null,
            depositActiveProductEksList: defaultValues.DepositProductList,
            depositActiveProductEksListFetching: false,
            depositActiveProductEksListError: null,
            depositActiveProductEksListCachedDate: null,
            depositCloseProductEksList: defaultValues.DepositProductList,
            depositCloseProductEksListFetching: false,
            depositCloseProductEksListError: null,
            depositCloseProductEksListCachedDate: null,
            corporateCardActiveProductEksList: defaultValues.CorporateCardProductList,
            corporateCardActiveProductEksListFetching: false,
            corporateCardActiveProductEksListError: null,
            corporateCardActiveProductEksListCachedDate: null,
            corporateCardCloseProductEksList: defaultValues.CorporateCardProductList,
            corporateCardCloseProductEksListFetching: false,
            corporateCardCloseProductEksListError: null,
            corporateCardCloseProductEksListCachedDate: null,
            encashmentContractActiveProductEksList: defaultValues.EncashmentContractProductList,
            encashmentContractActiveProductEksListFetching: false,
            encashmentContractActiveProductEksListError: null,
            encashmentContractActiveProductEksListCachedDate: null,
            encashmentContractCloseProductEksList: defaultValues.EncashmentContractProductList,
            encashmentContractCloseProductEksListFetching: false,
            encashmentContractCloseProductEksListError: null,
            encashmentContractCloseProductEksListCachedDate: null,
            acquiringActiveProductEksList: defaultValues.AcquiringProductList,
            acquiringActiveProductEksListFetching: false,
            acquiringActiveProductEksListError: null,
            acquiringActiveProductEksListCachedDate: null,
            acquiringCloseProductEksList: defaultValues.AcquiringProductList,
            acquiringCloseProductEksListFetching: false,
            acquiringCloseProductEksListError: null,
            acquiringCloseProductEksListCachedDate: null,
            dboActiveProductEksList: defaultValues.DboProductList,
            dboActiveProductEksListFetching: false,
            dboActiveProductEksListError: null,
            dboActiveProductEksListCachedDate: null,
            dboCloseProductEksList: defaultValues.DboProductList,
            dboCloseProductEksListFetching: false,
            dboCloseProductEksListError: null,
            dboCloseProductEksListCachedDate: null,
            udboActiveProductEksList: defaultValues.UdboProductList,
            udboActiveProductEksListFetching: false,
            udboActiveProductEksListError: null,
            udboActiveProductEksListCachedDate: null,
            udboCloseProductEksList: defaultValues.UdboProductList,
            udboCloseProductEksListFetching: false,
            udboCloseProductEksListError: null,
            udboCloseProductEksListCachedDate: null,
            salaryActiveProductEksList: defaultValues.SalaryProductList,
            salaryActiveProductEksListFetching: false,
            salaryActiveProductEksListError: null,
            salaryActiveProductEksListCachedDate: null,
            salaryCloseProductEksList: defaultValues.SalaryProductList,
            salaryCloseProductEksListFetching: false,
            salaryCloseProductEksListError: null,
            salaryCloseProductEksListCachedDate: null,
            legalInfoProductEksList: defaultValues.LegalInfoProductList,
            legalInfoProductEksListFetching: false,
            legalInfoProductEksListError: null,
            legalInfoProductEksListCachedDate: null,
            productListAgreementStatus: Enums.ProductListAgreementStatus.Opened,
            isVisibleProductListModalAlert: false,
            forecastDealList: defaultValues.ForecastDealList,
            forecastDealListFetching: false,
            forecastDealListError: null,
            agentContextMode: 0,
            isActivityAccessMode: false,
            operationUuid: '',
            customerNavigationHistory: [],
            creditCloseProductListOperationUuid: "",
            creditActiveProductListOperationUuid: "",
            depositCloseProductListOperationUuid: "",
            depositActiveProductListOperationUuid: "",
            settlementAgreementActiveProductListOperationUuid: "",
            settlementAgreementCloseProductListOperationUuid: "",
            corporateCardActiveProductListOperationUuid: "",
            corporateCardCloseProductListOperationUuid: "",
            encashmentContractActiveProductListOperationUuid: "",
            encashmentContractCloseProductListOperationUuid: "",
            acquiringActiveProductListOperationUuid: "",
            acquiringCloseProductListOperationUuid: "",
            dboActiveProductListOperationUuid: "",
            dboCloseProductListOperationUuid: "",
            salaryActiveProductListOperationUuid: "",
            salaryCloseProductListOperationUuid: "",
            udboActiveProductListOperationUuid: "",
            udboCloseProductListOperationUuid: "",
            legalInfoProductListOperationUuid: "",
            // Prognostic products
            prognosticProductList: defaultValues.ForecastDealList,
            prognosticProductListFetching: false,
            prognosticProductListError: null,
            isVisiblePrognosticProductListModalAlert: false,
            currentEvent: defaultValues.ForecastEvent,
            isActivityAccessError: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCustomer.js.map