/**
 * Models for Customer container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"



// TODO Describe models used in Customer actions and thunks.


const defaultState = {
    get state(): ICustomerState {
        return {

            currentCustomerId: '',  // State parameter displayed in "Customer" screen. 
            currentCustomer: defaultValues.Customer,  // State parameter displayed in "Customer" screen. 
            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "Customer" screen. 
            isDashboardExpandedMode: false,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverHolder: false,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverCurator: false,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverOccasionList: false,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverNoteList: false,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverProblemList: false,  // State parameter displayed in "Customer" screen. 
            isVisibleModalActivityEditor: false,  // State parameter displayed in "Customer" screen. 
            isVisibleModalPlanner: false,  // State parameter displayed in "Customer" screen. 
            isVisibleModalEmailSend: false,  // State parameter displayed in "Customer" screen. 
            isVisibleModalAssociateSearch: false,  // State parameter displayed in "Customer" screen. 
            isSearchModeAffiliateList: false,  // State parameter displayed in "Customer" screen. 
            inputSearchAffiliateList: '',  // State parameter displayed in "Customer" screen. 
            affiliateSearchList: defaultValues.CustomerList,  // State parameter displayed in "Customer" screen. Affiliate list with applied search query.
            currentTab: Enums.CustomerManagedTab.Main,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverOwner: false,  // State parameter displayed in "Customer" screen. 
            currentOwner: defaultValues.Owner,  // State parameter displayed in "Customer" screen. 
            currentPopoverLimitItem: Enums.OldLimitItem.Main,  // State parameter displayed in "Customer" screen. 
            isVisiblePopoverLimit: false,  // State parameter displayed in "Customer" screen. 

            isActivityCreateMode: false,  // State parameter displayed in "Customer" screen.
            refresh: defaultValues.boolean,  // Result for "performRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performRefresh".
            refreshError: null,  // Error info for thunk chain "performRefresh".
            customer: defaultValues.CustomerUnknown,  // Fetch result for "customer_callGetCustomer" thunk.
            customerFetching: false,  // Fetching indicator for network thunk chain "customer_callGetCustomer".
            customerError: null,  // Network error info for thunk chain "customer_callGetCustomer".
            customerCachedDate: null,  // Response data cache date for network thunk chain "customer_callGetCustomer".
            currentMode: Enums.CustomerMode.CommonBack,  // Mode of customer screen.
            limit: defaultValues.Limit,  // Fetch result for "callGetLimitNew" thunk.
            limitFetching: false,  // Fetching indicator for network thunk chain "callGetLimitNew".
            limitError: null,  // Network error info for thunk chain "callGetLimitNew".
            limitCachedDate: null,  // Response data cache date for network thunk chain "callGetLimitNew".
            limitOld: defaultValues.LimitOld,  // Fetch result for "callGetLimitOld" thunk.
            limitOldFetching: false,  // Fetching indicator for network thunk chain "callGetLimitOld".
            limitOldError: null,  // Network error info for thunk chain "callGetLimitOld".
            limitOldCachedDate: null,  // Response data cache date for network thunk chain "callGetLimitOld".

            //START CREDIT product list default state
            creditActiveProductList: defaultValues.CreditProductList,  // Fetch result for "callGetActiveCreditProductList" thunk.
            creditActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveCreditProductList".
            creditActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveCreditProductList" for updating product credit list.
            creditActiveProductListError: null,  // Network error info for thunk chain "callGetActiveCreditProductList".
            creditActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveCreditProductList".

            creditCloseProductList: defaultValues.CreditProductList,  // Fetch result for "callGetCloseCreditProductList" thunk.
            creditCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseCreditProductList".
            creditCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseCreditProductList" for updating product credit list.
            creditCloseProductListError: null,  // Network error info for thunk chain "callGetCloseCreditProductList".
            creditCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseCreditProductList".
            //END CREDIT product list default state
            
            // START DEPOSIT product list default state
            depositActiveProductList: defaultValues.DepositProductList,  // Fetch result for "callGetRequestDepositActiveProductList" thunk.
            depositActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetRequestDepositActiveProductList".
            depositActiveProductListError: null,      // Network error info for thunk chain "callGetRequestDepositActiveProductList".
            depositActiveProductListUpdating: false,  // Updating indicator for network thunk chain "callGetRequestDepositCloseProductList".
            depositActiveProductListCachedDate: null, // Response data cache for network thunk chain "callGetRequestDepositActiveProductList".

            depositCloseProductList: defaultValues.DepositProductList,  // Fetch result for "callGetRequestDepositCloseProductList" thunk.
            depositCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetRequestDepositCloseProductList".
            depositCloseProductListError: null,  // Network error info for thunk chain "callGetRequestDepositCloseProductList".
            depositCloseProductListUpdating: false, // Updating indicator for network thunk chain "callGetRequestDepositCloseProductList".
            depositCloseProductListCachedDate: null, // Response data cache for network thunk chain "callGetRequestDepositCloseProductList".
            // END DEPOSIT product list default state
            
            // START settlementAgreement product list default state
            settlementAgreementActiveProductList: defaultValues.SettlementAgreementProductList,  // Fetch result for "callGetRequestSettlementAgreementActiveProductList" thunk.
            settlementAgreementActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetRequestSettlementAgreementActiveProductList".
            settlementAgreementActiveProductListError: null,      // Network error info for thunk chain "callGetRequestSettlementAgreementActiveProductList".
            settlementAgreementActiveProductListUpdating: false,  // Updating indicator for network thunk chain "callGetRequestSettlementAgreementCloseProductList".
            settlementAgreementActiveProductListCachedDate: null, // Response data cache for network thunk chain "callGetRequestSettlementAgreementActiveProductList".

            settlementAgreementCloseProductList: defaultValues.SettlementAgreementProductList,  // Fetch result for "callGetRequestSettlementAgreementCloseProductList" thunk.
            settlementAgreementCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetRequestSettlementAgreementCloseProductList".
            settlementAgreementCloseProductListError: null,  // Network error info for thunk chain "callGetRequestSettlementAgreementCloseProductList".
            settlementAgreementCloseProductListUpdating: false, // Updating indicator for network thunk chain "callGetRequestSettlementAgreementCloseProductList".
            settlementAgreementCloseProductListCachedDate: null, // Response data cache for network thunk chain "callGetRequestSettlementAgreementCloseProductList".
            // END settlementAgreement product list default state

            //START CORPORATE_CARD product list default state
            corporateCardActiveProductList: defaultValues.CorporateCardProductList,  // Fetch result for "callGetActiveCorporateCardProductList" thunk.
            corporateCardActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveCorporateCardProductList".
            corporateCardActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveCorporateCardProductList" for updating product corporateCard list.
            corporateCardActiveProductListError: null,  // Network error info for thunk chain "callGetActiveCorporateCardProductList".
            corporateCardActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveCorporateCardProductList".

            corporateCardCloseProductList: defaultValues.CorporateCardProductList,  // Fetch result for "callGetCloseCorporateCardProductList" thunk.
            corporateCardCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseCorporateCardProductList".
            corporateCardCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseCorporateCardProductList" for updating product corporateCard list.
            corporateCardCloseProductListError: null,  // Network error info for thunk chain "callGetCloseCorporateCardProductList".
            corporateCardCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseCorporateCardProductList".
            //END CORPORATE_CARD product list default state

            //START ENCASHMENT_CONTRACT product list default state
            encashmentContractActiveProductList: defaultValues.EncashmentContractProductList,  // Fetch result for "callGetActiveEncashmentContractProductList" thunk.
            encashmentContractActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveEncashmentContractProductList".
            encashmentContractActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveEncashmentContractProductList" for updating product encashmentContract list.
            encashmentContractActiveProductListError: null,  // Network error info for thunk chain "callGetActiveEncashmentContractProductList".
            encashmentContractActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveEncashmentContractProductList".

            encashmentContractCloseProductList: defaultValues.EncashmentContractProductList,  // Fetch result for "callGetCloseEncashmentContractProductList" thunk.
            encashmentContractCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseEncashmentContractProductList".
            encashmentContractCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseEncashmentContractProductList" for updating product encashmentContract list.
            encashmentContractCloseProductListError: null,  // Network error info for thunk chain "callGetCloseEncashmentContractProductList".
            encashmentContractCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseEncashmentContractProductList".
            //END ENCASHMENT_CONTRACT product list default state


            //START ACQUIRING product list default state
            acquiringActiveProductList: defaultValues.AcquiringProductList,  // Fetch result for "callGetActiveAcquiringProductList" thunk.
            acquiringActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveAcquiringProductList".
            acquiringActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveAcquiringProductList" for updating product acquiring list.
            acquiringActiveProductListError: null,  // Network error info for thunk chain "callGetActiveAcquiringProductList".
            acquiringActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveAcquiringProductList".

            acquiringCloseProductList: defaultValues.AcquiringProductList,  // Fetch result for "callGetCloseAcquiringProductList" thunk.
            acquiringCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseAcquiringProductList".
            acquiringCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseAcquiringProductList" for updating product acquiring list.
            acquiringCloseProductListError: null,  // Network error info for thunk chain "callGetCloseAcquiringProductList".
            acquiringCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseAcquiringProductList".
            //END ACQUIRING product list default state

            //START DBO product list default state
            dboActiveProductList: defaultValues.DboProductList,  // Fetch result for "callGetActiveDboProductList" thunk.
            dboActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveDboProductList".
            dboActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveDboProductList" for updating product dbo list.
            dboActiveProductListError: null,  // Network error info for thunk chain "callGetActiveDboProductList".
            dboActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveDboProductList".

            dboCloseProductList: defaultValues.DboProductList,  // Fetch result for "callGetCloseDboProductList" thunk.
            dboCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseDboProductList".
            dboCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseDboProductList" for updating product dbo list.
            dboCloseProductListError: null,  // Network error info for thunk chain "callGetCloseDboProductList".
            dboCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseDboProductList".
            //END DBO product list default state


            //START SALARY product list default state
            salaryActiveProductList: defaultValues.SalaryProductList,  // Fetch result for "callGetActiveSalaryProductList" thunk.
            salaryActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveSalaryProductList".
            salaryActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveSalaryProductList" for updating product salary list.
            salaryActiveProductListError: null,  // Network error info for thunk chain "callGetActiveSalaryProductList".
            salaryActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveSalaryProductList".

            salaryCloseProductList: defaultValues.SalaryProductList,  // Fetch result for "callGetCloseSalaryProductList" thunk.
            salaryCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseSalaryProductList".
            salaryCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseSalaryProductList" for updating product salary list.
            salaryCloseProductListError: null,  // Network error info for thunk chain "callGetCloseSalaryProductList".
            salaryCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseSalaryProductList".
            //END SALARY product list default state

            //START UDBO product list default state
            udboActiveProductList: defaultValues.UdboProductList,  // Fetch result for "callGetActiveUdboProductList" thunk.
            udboActiveProductListFetching: false,  // Fetching indicator for network thunk chain "callGetActiveUdboProductList".
            udboActiveProductListUpdating: false, // Updating indicator for thunk chain "callGetActiveUdboProductList" for updating product udbo list.
            udboActiveProductListError: null,  // Network error info for thunk chain "callGetActiveUdboProductList".
            udboActiveProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetActiveUdboProductList".

            udboCloseProductList: defaultValues.UdboProductList,  // Fetch result for "callGetCloseUdboProductList" thunk.
            udboCloseProductListFetching: false,  // Fetching indicator for network thunk chain "callGetCloseUdboProductList".
            udboCloseProductListUpdating: false, // Updating indicator for thunk chain "callGetCloseUdboProductList" for updating product udbo list.
            udboCloseProductListError: null,  // Network error info for thunk chain "callGetCloseUdboProductList".
            udboCloseProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetCloseUdboProductList".
            //END UDBO product list default state
            
            legalInfoProductList: defaultValues.LegalInfoProductList,  // Fetch result for "callGetLegalInfoProductList" thunk.
            legalInfoProductListFetching: false,  // Fetching indicator for network thunk chain "callGetLegalInfoProductList".
            legalInfoProductListUpdating: false,  // Fetching indicator for network thunk chain "callGetLegalInfoProductList".
            legalInfoProductListError: null,  // Network error info for thunk chain "callGetLegalInfoProductList".
            legalInfoProductListCachedDate: null,  // Response data cache date for network thunk chain "callGetLegalInfoProductList".


            creditActiveProductEksList: defaultValues.CreditProductList,  // Fetch result for "callGetCreditProductEksListActive" thunk.
            creditActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetCreditProductEksListActive".
            creditActiveProductEksListError: null,  // Network error info for thunk chain "callGetCreditProductEksListActive".
            creditActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetCreditProductEksListActive".

            creditCloseProductEksList: defaultValues.CreditProductList,  // Fetch result for "callGetCreditProductEksListClose" thunk.
            creditCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetCreditProductEksListClose".
            creditCloseProductEksListError: null,  // Network error info for thunk chain "callGetCreditProductEksListClose".
            creditCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetCreditProductEksListClose".

            
            settlementAgreementActiveProductEksList: defaultValues.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementActiveProductEksList" thunk.
            settlementAgreementActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetSettlementAgreementActiveProductEksList".
            settlementAgreementActiveProductEksListError: null,  // Network error info for thunk chain "callGetSettlementAgreementActiveProductEksList".
            settlementAgreementActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetSettlementAgreementActiveProductEksList".

            settlementAgreementCloseProductEksList: defaultValues.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementCloseProductEksList" thunk.
            settlementAgreementCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetSettlementAgreementCloseProductEksList".
            settlementAgreementCloseProductEksListError: null,  // Network error info for thunk chain "callGetSettlementAgreementCloseProductEksList".
            settlementAgreementCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetSettlementAgreementCloseProductEksList".


            depositActiveProductEksList: defaultValues.DepositProductList,  // Fetch result for "callGetDepositActiveProductEksList" thunk.
            depositActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetDepositActiveProductEksList".
            depositActiveProductEksListError: null,  // Network error info for thunk chain "callGetDepositActiveProductEksList".
            depositActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetDepositActiveProductEksList".

            depositCloseProductEksList: defaultValues.DepositProductList,  // Fetch result for "callGetDepositCloseProductEksList" thunk.
            depositCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetDepositCloseProductEksList".
            depositCloseProductEksListError: null,  // Network error info for thunk chain "callGetDepositCloseProductEksList".
            depositCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetDepositCloseProductEksList".


            corporateCardActiveProductEksList: defaultValues.CorporateCardProductList,  // Fetch result for "callGetCorporateCardActiveProductEksList" thunk.
            corporateCardActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetCorporateCardActiveProductEksList".
            corporateCardActiveProductEksListError: null,  // Network error info for thunk chain "callGetCorporateCardActiveProductEksList".
            corporateCardActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetCorporateCardActiveProductEksList".

            corporateCardCloseProductEksList: defaultValues.CorporateCardProductList,  // Fetch result for "callGetCorporateCardCloseProductEksList" thunk.
            corporateCardCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetCorporateCardCloseProductEksList".
            corporateCardCloseProductEksListError: null,  // Network error info for thunk chain "callGetCorporateCardCloseProductEksList".
            corporateCardCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetCorporateCardCloseProductEksList".

            encashmentContractActiveProductEksList: defaultValues.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractActiveProductEksList" thunk.
            encashmentContractActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetEncashmentContractActiveProductEksList".
            encashmentContractActiveProductEksListError:  null,  // Network error info for thunk chain "callGetEncashmentContractActiveProductEksList".
            encashmentContractActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetEncashmentContractActiveProductEksList".

            encashmentContractCloseProductEksList: defaultValues.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractCloseProductEksList" thunk.
            encashmentContractCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetEncashmentContractCloseProductEksList".
            encashmentContractCloseProductEksListError:  null,  // Network error info for thunk chain "callGetEncashmentContractCloseProductEksList".
            encashmentContractCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetEncashmentContractCloseProductEksList".

            acquiringActiveProductEksList: defaultValues.AcquiringProductList,  // Fetch result for "callGetAcquiringActiveProductEksList" thunk.
            acquiringActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetAcquiringActiveProductEksList".
            acquiringActiveProductEksListError: null,  // Network error info for thunk chain "callGetAcquiringActiveProductEksList".
            acquiringActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetAcquiringActiveProductEksList".

            acquiringCloseProductEksList: defaultValues.AcquiringProductList,  // Fetch result for "callGetAcquiringCloseProductEksList" thunk.
            acquiringCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetAcquiringCloseProductEksList".
            acquiringCloseProductEksListError: null,  // Network error info for thunk chain "callGetAcquiringCloseProductEksList".
            acquiringCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetAcquiringCloseProductEksList".

            dboActiveProductEksList: defaultValues.DboProductList,  // Fetch result for "callGetDboActiveProductEksList" thunk.
            dboActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetDboActiveProductEksList".
            dboActiveProductEksListError: null,  // Network error info for thunk chain "callGetDboActiveProductEksList".
            dboActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetDboActiveProductEksList".

            dboCloseProductEksList: defaultValues.DboProductList,  // Fetch result for "callGetDboCloseProductEksList" thunk.
            dboCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetDboCloseProductEksList".
            dboCloseProductEksListError: null,  // Network error info for thunk chain "callGetDboCloseProductEksList".
            dboCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetDboCloseProductEksList".

            udboActiveProductEksList: defaultValues.UdboProductList,  // Fetch result for "callGetUdboActiveProductEksList" thunk.
            udboActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetUdboActiveProductEksList".
            udboActiveProductEksListError: null,  // Network error info for thunk chain "callGetUdboActiveProductEksList".
            udboActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetUdboActiveProductEksList".

            udboCloseProductEksList: defaultValues.UdboProductList,  // Fetch result for "callGetUdboCloseProductEksList" thunk.
            udboCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetUdboCloseProductEksList".
            udboCloseProductEksListError: null,  // Network error info for thunk chain "callGetUdboCloseProductEksList".
            udboCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetUdboCloseProductEksList".
            
            salaryActiveProductEksList: defaultValues.SalaryProductList,  // Fetch result for "callGetSalaryActiveProductEksList" thunk.
            salaryActiveProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetSalaryActiveProductEksList".
            salaryActiveProductEksListError: null,  // Network error info for thunk chain "callGetSalaryActiveProductEksList".
            salaryActiveProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetSalaryActiveProductEksList".

            salaryCloseProductEksList: defaultValues.SalaryProductList,  // Fetch result for "callGetSalaryCloseProductEksList" thunk.
            salaryCloseProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetSalaryCloseProductEksList".
            salaryCloseProductEksListError: null,  // Network error info for thunk chain "callGetSalaryCloseProductEksList".
            salaryCloseProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetSalaryCloseProductEksList".

            legalInfoProductEksList: defaultValues.LegalInfoProductList,  // Fetch result for "callGetLegalInfoProductEksList" thunk.
            legalInfoProductEksListFetching: false,  // Fetching indicator for network thunk chain "callGetLegalInfoProductEksList".
            legalInfoProductEksListError: null,  // Network error info for thunk chain "callGetLegalInfoProductEksList".
            legalInfoProductEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetLegalInfoProductEksList".
            
            productListAgreementStatus: Enums.ProductListAgreementStatus.Opened, // State parameter displayed in "Customer" screen.
            isVisibleProductListModalAlert: false, // Product list force update modal alert visibility flag

            forecastDealList: defaultValues.ForecastDealList, // Fetch result for "callGetForecastDealList" thunk.
            forecastDealListFetching: false, // Fetching indicator for network thunk chain "callGetForecastDealList".
            forecastDealListError: null, // Network error info for thunk chain "callGetForecastDealList

            agentContextMode: 0,
            isActivityAccessMode: false,
            operationUuid: '',
            customerNavigationHistory: [], // History steps for navigations inside a customer

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

            // TODO Describe Customer reducer state.


        }
    }
}

export interface ICustomerState {

    // START CREDIT product list model
    creditActiveProductList: Models.CreditProductList,  // Fetch result for "callGetCreditActiveProductList" thunk.
    creditActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCreditActiveProductList".
    creditActiveProductListError: Error | null,  // Network error info for thunk chain "callGetCreditActiveProductList".
    creditActiveProductListUpdating: boolean, // Updating indicator for network thunk chain "callGetCreditActiveProductList".
    creditActiveProductListCachedDate: Date | null, // Cache date for network thunk chain "callGetCreditActiveProductList".
    creditActiveProductListOperationUuid: string,
    creditCloseProductList: Models.CreditProductList,  // Fetch result for "callGetCreditProductList" thunk.
    creditCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCreditProductList".
    creditCloseProductListError: Error | null,  // Network error info for thunk chain "callGetCreditCloseProductList".
    creditCloseProductListUpdating: boolean, // Updating indicator for network thunk chain "callGetCreditCloseProductList".
    creditCloseProductListCachedDate: Date | null, // Cache date for network thunk chain "callGetCreditCloseProductList".
    creditCloseProductListOperationUuid: string,
    // END CREDIT product list model


    // START DEPOSIT product list model
    depositActiveProductList: Models.DepositProductList,  // Fetch result for "callGetRequestDepositActiveProductList" thunk.
    depositActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetRequestDepositActiveProductList".
    depositActiveProductListError: Error | null,  // Network error info for thunk chain "callGetRequestDepositActiveProductList".
    depositActiveProductListUpdating: boolean, // Updating indicator for network thunk chain "callGetRequestDepositActiveProductList".
    depositActiveProductListCachedDate: Date | null, // Cache date for network thunk chain "callGetDepositActiveProductList".
    depositActiveProductListOperationUuid: string,
    depositCloseProductList: Models.DepositProductList,  // Fetch result for "callGetRequestDepositCloseProductList" thunk.
    depositCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetRequestDepositCloseProductList".
    depositCloseProductListError: Error | null,  // Network error info for thunk chain "callGetRequestDepositCloseProductList".
    depositCloseProductListUpdating: boolean, // Updating indicator for network thunk chain "callGetRequestDepositCloseProductList".
    depositCloseProductListCachedDate: Date | null, // Cache date for network thunk chain "callGetDepositCloseProductList".
    depositCloseProductListOperationUuid: string,
    // END DEPOSIT product list model

    // START SETTLEMENT_AGREEMENT product list model
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementActiveProductList" thunk.
    settlementAgreementActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSettlementAgreementActiveProductList".
    settlementAgreementActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetSettlementAgreementActiveProductList".
    settlementAgreementActiveProductListError: Error | null,  // Network error info for thunk chain "callGetSettlementAgreementActiveProductList".
    settlementAgreementActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSettlementAgreementActiveProductList".
    settlementAgreementActiveProductListOperationUuid: string,
    settlementAgreementCloseProductList: Models.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementCloseProductList" thunk.
    settlementAgreementCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSettlementAgreementCloseProductList".
    settlementAgreementCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetSettlementAgreementCloseProductList".
    settlementAgreementCloseProductListError: Error | null,  // Network error info for thunk chain "callGetSettlementAgreementCloseProductList".
    settlementAgreementCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSettlementAgreementCloseProductList".
    settlementAgreementCloseProductListOperationUuid: string,
    // END SETTLEMENT_AGREEMENT product list model

    // START CORPORATE_CARD product list model
    corporateCardActiveProductList: Models.CorporateCardProductList,  // Fetch result for "callGetCorporateCardActiveProductList" thunk.
    corporateCardActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCorporateCardActiveProductList".
    corporateCardActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetCorporateCardActiveProductList".
    corporateCardActiveProductListError: Error | null,  // Network error info for thunk chain "callGetCorporateCardActiveProductList".
    corporateCardActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCorporateCardActiveProductList".
    corporateCardActiveProductListOperationUuid: string,

    corporateCardCloseProductList: Models.CorporateCardProductList,  // Fetch result for "callGetCorporateCardCloseProductList" thunk.
    corporateCardCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCorporateCardCloseProductList".
    corporateCardCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetCorporateCardCloseProductList".
    corporateCardCloseProductListError: Error | null,  // Network error info for thunk chain "callGetCorporateCardCloseProductList".
    corporateCardCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCorporateCardCloseProductList".
    corporateCardCloseProductListOperationUuid: string,
    // END CORPORATE_CARD product list model


    // START ENCASHMENT_CONTRACT product list model
    encashmentContractActiveProductList: Models.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractActiveProductList" thunk.
    encashmentContractActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetEncashmentContractActiveProductList".
    encashmentContractActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetEncashmentContractActiveProductList".
    encashmentContractActiveProductListError: Error | null,  // Network error info for thunk chain "callGetEncashmentContractActiveProductList".
    encashmentContractActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetEncashmentContractActiveProductList".
    encashmentContractActiveProductListOperationUuid: string,

    encashmentContractCloseProductList: Models.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractCloseProductList" thunk.
    encashmentContractCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetEncashmentContractCloseProductList".
    encashmentContractCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetEncashmentContractCloseProductList".
    encashmentContractCloseProductListError: Error | null,  // Network error info for thunk chain "callGetEncashmentContractCloseProductList".
    encashmentContractCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetEncashmentContractCloseProductList".
    encashmentContractCloseProductListOperationUuid: string,
    // END ENCASHMENT_CONTRACT product list model

    // START ACQURING product list model
    acquiringActiveProductList: Models.AcquiringProductList,  // Fetch result for "callGetAcquringActiveProductList" thunk.
    acquiringActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAcquringActiveProductList".
    acquiringActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetAcquringActiveProductList".
    acquiringActiveProductListError: Error | null,  // Network error info for thunk chain "callGetAcquringActiveProductList".
    acquiringActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAcquringActiveProductList".
    acquiringActiveProductListOperationUuid: string,
    acquiringCloseProductList: Models.AcquiringProductList,  // Fetch result for "callGetAcquringCloseProductList" thunk.
    acquiringCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAcquringCloseProductList".
    acquiringCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetAcquringCloseProductList".
    acquiringCloseProductListError: Error | null,  // Network error info for thunk chain "callGetAcquringCloseProductList".
    acquiringCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAcquringCloseProductList".
    acquiringCloseProductListOperationUuid: string,
    // END ACQURING product list model

    // START DBO product list model
    dboActiveProductList: Models.DboProductList,  // Fetch result for "callGetDboActiveProductList" thunk.
    dboActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDboActiveProductList".
    dboActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetDboActiveProductList".
    dboActiveProductListError: Error | null,  // Network error info for thunk chain "callGetDboActiveProductList".
    dboActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDboActiveProductList".
    dboActiveProductListOperationUuid: string,

    dboCloseProductList: Models.DboProductList,  // Fetch result for "callGetDboCloseProductList" thunk.
    dboCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDboCloseProductList".
    dboCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetDboCloseProductList".
    dboCloseProductListError: Error | null,  // Network error info for thunk chain "callGetDboCloseProductList".
    dboCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDboCloseProductList".
    dboCloseProductListOperationUuid: string,

    // END DBO product list model

    // START SALARY product list model
    salaryActiveProductList: Models.SalaryProductList,  // Fetch result for "callGetSalaryActiveProductList" thunk.
    salaryActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSalaryActiveProductList".
    salaryActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetSalaryActiveProductList".
    salaryActiveProductListError: Error | null,  // Network error info for thunk chain "callGetSalaryActiveProductList".
    salaryActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSalaryActiveProductList".
    salaryActiveProductListOperationUuid: string,
    salaryCloseProductList: Models.SalaryProductList,  // Fetch result for "callGetSalaryCloseProductList" thunk.
    salaryCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSalaryCloseProductList".
    salaryCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetSalaryCloseProductList".
    salaryCloseProductListError: Error | null,  // Network error info for thunk chain "callGetSalaryCloseProductList".
    salaryCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSalaryCloseProductList".
    salaryCloseProductListOperationUuid: string,
    // END SALARY product list model

    // START UDBO product list model
    udboActiveProductList: Models.UdboProductList,  // Fetch result for "callGetUdboActiveProductList" thunk.
    udboActiveProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetUdboActiveProductList".
    udboActiveProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetUdboActiveProductList".
    udboActiveProductListError: Error | null,  // Network error info for thunk chain "callGetUdboActiveProductList".
    udboActiveProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetUdboActiveProductList".
    udboActiveProductListOperationUuid: string,

    udboCloseProductList: Models.UdboProductList,  // Fetch result for "callGetUdboCloseProductList" thunk.
    udboCloseProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetUdboCloseProductList".
    udboCloseProductListUpdating: boolean,  // Updating indicator for network thunk chain "callGetUdboCloseProductList".
    udboCloseProductListError: Error | null,  // Network error info for thunk chain "callGetUdboCloseProductList".
    udboCloseProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetUdboCloseProductList".
    udboCloseProductListOperationUuid: string,
    // END UDBO product list model


    legalInfoProductList: Models.LegalInfoProductList,  // Fetch result for "callGetLegalInfoProductList" thunk.
    legalInfoProductListFetching: boolean,  // Fetching indicator for network thunk chain "callGetLegalInfoProductList".
    legalInfoProductListUpdating: boolean,  // Fetching indicator for network thunk chain "callGetLegalInfoProductList".
    legalInfoProductListError: Error | null,  // Network error info for thunk chain "callGetLegalInfoProductList".
    legalInfoProductListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetLegalInfoProductList".
    legalInfoProductListOperationUuid: string,

    currentCustomerId: string,  // State parameter displayed in "Customer" screen. 
    currentCustomer: Models.Customer,  // State parameter displayed in "Customer" screen. 
    currentCustomerManaged: Models.CustomerManaged,  // State parameter displayed in "Customer" screen. 
    isDashboardExpandedMode: boolean,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverHolder: boolean,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverCurator: boolean,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverOccasionList: boolean,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverNoteList: boolean,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverProblemList: boolean,  // State parameter displayed in "Customer" screen. 
    isVisibleModalActivityEditor: boolean,  // State parameter displayed in "Customer" screen. 
    isVisibleModalPlanner: boolean,  // State parameter displayed in "Customer" screen. 
    isVisibleModalEmailSend: boolean,  // State parameter displayed in "Customer" screen. 
    isVisibleModalAssociateSearch: boolean,  // State parameter displayed in "Customer" screen. 
    isSearchModeAffiliateList: boolean,  // State parameter displayed in "Customer" screen. 
    inputSearchAffiliateList: string,  // State parameter displayed in "Customer" screen. 
    affiliateSearchList: Models.CustomerList,  // State parameter displayed in "Customer" screen. Affiliate list with applied search query.
    currentTab: Enums.CustomerManagedTab,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverOwner: boolean,  // State parameter displayed in "Customer" screen. 
    currentOwner: Models.Owner,  // State parameter displayed in "Customer" screen. 
    currentPopoverLimitItem: Enums.OldLimitItem,  // State parameter displayed in "Customer" screen. 
    isVisiblePopoverLimit: boolean,  // State parameter displayed in "Customer" screen. 


    isActivityCreateMode: boolean,  // State parameter displayed in "Customer" screen.
    refresh: boolean,  // Result for "performRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performRefresh".
    refreshError: Error | null,  // Error info for thunk chain "performRefresh".
    customer: Models.CustomerUnknown,  // Fetch result for "customer_callGetCustomer" thunk.
    customerFetching: boolean,  // Fetching indicator for network thunk chain "customer_callGetCustomer".
    customerError: Error | null,  // Network error info for thunk chain "customer_callGetCustomer".
    customerCachedDate: Date | null,  // Response data cache date for network thunk chain "customer_callGetCustomer".
    currentMode: Enums.CustomerMode, // Mode of customer screen.
    limit: Models.Limit,  // Fetch result for "callGetLimitNew" thunk.
    limitFetching: boolean,  // Fetching indicator for network thunk chain "callGetLimitNew".
    limitError: Error | null,  // Network error info for thunk chain "callGetLimitNew".
    limitCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetLimitNew".
    limitOld: Models.LimitOld,  // Fetch result for "callGetLimitOld" thunk.
    limitOldFetching: boolean,  // Fetching indicator for network thunk chain "callGetLimitOld".
    limitOldError: Error | null,  // Network error info for thunk chain "callGetLimitOld".
    limitOldCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetLimitOld".


    creditActiveProductEksList: Models.CreditProductList,  // Fetch result for "callGetCreditActiveProductEksList" thunk.
    creditActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCreditProductEksListActive".
    creditActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetCreditProductEksListActive".
    creditActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCreditProductEksListActive".

    creditCloseProductEksList: Models.CreditProductList,  // Fetch result for "callGetCreditCloseProductEksList" thunk.
    creditCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCreditProductEksListClose".
    creditCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetCreditProductEksListClose".
    creditCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCreditProductEksListClose".
    
    settlementAgreementActiveProductEksList: Models.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementActiveProductEksList" thunk.
    settlementAgreementActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSettlementAgreementActiveProductEksList".
    settlementAgreementActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetSettlementAgreementActiveProductEksList".
    settlementAgreementActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSettlementAgreementActiveProductEksList".

    settlementAgreementCloseProductEksList: Models.SettlementAgreementProductList,  // Fetch result for "callGetSettlementAgreementCloseProductEksList" thunk.
    settlementAgreementCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSettlementAgreementCloseProductEksList".
    settlementAgreementCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetSettlementAgreementCloseProductEksList".
    settlementAgreementCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSettlementAgreementCloseProductEksList".

    depositActiveProductEksList: Models.DepositProductList,  // Fetch result for "callGetDepositActiveProductEksList" thunk.
    depositActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDepositActiveProductEksList".
    depositActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetDepositActiveProductEksList".
    depositActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDepositActiveProductEksList".

    depositCloseProductEksList: Models.DepositProductList,  // Fetch result for "callGetDepositCloseProductEksList" thunk.
    depositCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDepositCloseProductEksList".
    depositCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetDepositCloseProductEksList".
    depositCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDepositCloseProductEksList".
    
    corporateCardActiveProductEksList: Models.CorporateCardProductList,  // Fetch result for "callGetCorporateCardActiveProductEksList" thunk.
    corporateCardActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCorporateCardActiveProductEksList".
    corporateCardActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetCorporateCardActiveProductEksList".
    corporateCardActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCorporateCardActiveProductEksList".

    corporateCardCloseProductEksList: Models.CorporateCardProductList,  // Fetch result for "callGetCorporateCardCloseProductEksList" thunk.
    corporateCardCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCorporateCardCloseProductEksList".
    corporateCardCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetCorporateCardCloseProductEksList".
    corporateCardCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCorporateCardCloseProductEksList".
    
    encashmentContractActiveProductEksList: Models.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractActiveProductEksList" thunk.
    encashmentContractActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetEncashmentContractActiveProductEksList".
    encashmentContractActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetEncashmentContractActiveProductEksList".
    encashmentContractActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetEncashmentContractActiveProductEksList".

    encashmentContractCloseProductEksList: Models.EncashmentContractProductList,  // Fetch result for "callGetEncashmentContractCloseProductEksList" thunk.
    encashmentContractCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetEncashmentContractCloseProductEksList".
    encashmentContractCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetEncashmentContractCloseProductEksList".
    encashmentContractCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetEncashmentContractCloseProductEksList".

    acquiringActiveProductEksList: Models.AcquiringProductList,  // Fetch result for "callGetAcquiringActiveProductEksList" thunk.
    acquiringActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAcquiringActiveProductEksList".
    acquiringActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetAcquiringActiveProductEksList".
    acquiringActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAcquiringActiveProductEksList".

    acquiringCloseProductEksList: Models.AcquiringProductList,  // Fetch result for "callGetAcquiringCloseProductEksList" thunk.
    acquiringCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAcquiringCloseProductEksList".
    acquiringCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetAcquiringCloseProductEksList".
    acquiringCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAcquiringCloseProductEksList".
    
    dboActiveProductEksList: Models.DboProductList,  // Fetch result for "callGetDboActiveProductEksList" thunk.
    dboActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDboActiveProductEksList".
    dboActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetDboActiveProductEksList".
    dboActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDboActiveProductEksList".

    dboCloseProductEksList: Models.DboProductList,  // Fetch result for "callGetDboCloseProductEksList" thunk.
    dboCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetDboCloseProductEksList".
    dboCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetDboCloseProductEksList".
    dboCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetDboCloseProductEksList".

    udboActiveProductEksList: Models.UdboProductList,  // Fetch result for "callGetUdboActiveProductEksList" thunk.
    udboActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetUdboActiveProductEksList".
    udboActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetUdboActiveProductEksList".
    udboActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetUdboActiveProductEksList".

    udboCloseProductEksList: Models.UdboProductList,  // Fetch result for "callGetUdboCloseProductEksList" thunk.
    udboCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetUdboCloseProductEksList".
    udboCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetUdboCloseProductEksList".
    udboCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetUdboCloseProductEksList".
    
    salaryActiveProductEksList: Models.SalaryProductList,  // Fetch result for "callGetSalaryActiveProductEksList" thunk.
    salaryActiveProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSalaryActiveProductEksList".
    salaryActiveProductEksListError: Error | null,  // Network error info for thunk chain "callGetSalaryActiveProductEksList".
    salaryActiveProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSalaryActiveProductEksList".

    salaryCloseProductEksList: Models.SalaryProductList,  // Fetch result for "callGetSalaryCloseProductEksList" thunk.
    salaryCloseProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSalaryCloseProductEksList".
    salaryCloseProductEksListError: Error | null,  // Network error info for thunk chain "callGetSalaryCloseProductEksList".
    salaryCloseProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSalaryCloseProductEksList".

    legalInfoProductEksList: Models.LegalInfoProductList,  // Fetch result for "callGetLegalInfoProductEksList" thunk.
    legalInfoProductEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetLegalInfoProductEksList".
    legalInfoProductEksListError: Error | null,  // Network error info for thunk chain "callGetLegalInfoProductEksList".
    legalInfoProductEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetLegalInfoProductEksList".

    productListAgreementStatus: Enums.ProductListAgreementStatus,
    isVisibleProductListModalAlert: boolean,

    forecastDealList: Models.ForecastDealList, // Fetch result for "callGetForecastDealList" thunk.
    forecastDealListFetching: boolean, // Fetching indicator for network thunk chain "callGetForecastDealList".
    forecastDealListError: Models.Error | null, // Network error info for thunk chain "callGetForecastDealList".

    isActivityAccessMode: boolean,
    agentContextMode: Enums.AgentContextMode,
    customerNavigationHistory: Models.CustomerHistory[], // History steps for navigations inside a customer

    operationUuid: string,

    // Prognostic products
    prognosticProductList: Models.ForecastDealList,
    prognosticProductListFetching: boolean,
    prognosticProductListError: Error | null,
    isVisiblePrognosticProductListModalAlert: boolean,
    currentEvent: Models.ForecastEvent,
    isActivityAccessError: boolean,

}

export const initialState = {
    get state(): ICustomerState {
        return defaultState.state
    }
}


export interface PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE {
    (): void;
}

export interface PERFORM_INPUT_SEARCH_AFFILIATE_LIST {
    (search: string): void;
}

export interface PERFORM_AFFILIATE_LIST_SEARCH {
    (): void;
}

export interface PERFORM_SEARCH_AFFILIATE_LIST_ENABLE {
    (): void;
}

export interface PERFORM_SEARCH_AFFILIATE_LIST_DISABLE {
    (): void;
}
export interface PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS {
    (value: Enums.ProductListAgreementStatus): void;
}
export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.CustomerManagedTab,): void;
}

export interface PERFORM_POPOVER_HOLDER_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_HOLDER_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_CURATOR_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_CURATOR_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_OCCASION_LIST_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_OCCASION_LIST_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_NOTE_LIST_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_NOTE_LIST_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_PROBLEM_LIST_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_PROBLEM_LIST_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_OWNER_SHOW {
    (owner: Models.Owner): void;
}

export interface PERFORM_POPOVER_OWNER_HIDE {
    (): void;
}
export interface PERFORM_NAVIGATE_TO_OWNER_SCREEN {
    (owner: Models.Owner, customerMode: Enums.CustomerMode): void;
}

export interface NAVIGATE_TO_OWNER_AGENT_SCREEN {
    (agent: Models.Agent, AgentContextMode?: Enums.AgentContextMode): void;
}

export interface NAVIGATE_TO_CUSTOMER_SCREEN {
    (
        customer: Models.Customer,
        customerMode: Enums.CustomerMode,
        showCustomer: Enums.ShowCustomer
    ): void;
}

export interface PERFORM_REFRESH {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}

export interface PERFORM_POPOVER_LIMIT_HIDE {
    (): void;
}

export interface NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN {
    (item: Enums.OldLimitItem): void;
}

export interface NAVIGATE_POPOVER_LIMIT_BACK {
    (): void;
}

export interface CALL_GET_LIMIT_NEW {
    (refresh: boolean): void;
}

export interface CALL_GET_LIMIT_OLD {
    (refresh: boolean): void;
}

export interface PERFORM_LIMIT_SHOW {
    (): void;
}

export interface PERFORM_PRODUCT_TYPE_LIST_REFRESH {
    (): void;
}

export interface PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH {
    (): void;
}


export interface PERFORM_CALL_GET_REQUEST_PRODUCT_LIST {
    (type: Enums.ProductType): void;
}

export interface PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST {
    (type: Enums.ProductType, productListStatus: Enums.ProductListAgreementStatus): void;
}

export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN {
    (): void;
}

export interface CLOSE_CUSTOMER_ACTIVITY_PANEL {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface NAVIGATE_TO_AGENT_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}
export interface PERFORM_CUSTOMER_SCREEN_MOUNTED {
    (): void;
}
export interface NAVIGATE_TO_OCCASION_LIST_SCREEN {
    (): void;
}
export interface PERFORM_REFRESH_BAR_HIDE {
    (): void;
}

export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW {
    (): void;
}

export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE {
    (): void;
}
export interface PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE {
    (): void;
}

export interface CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST {
    (): void;
}

export interface NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN {
    (event: Models.ForecastEvent): void;
}
