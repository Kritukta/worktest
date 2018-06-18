/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewProductList from '../components/ViewProductList'
import * as ModelState from "../models/Models"


/*
 * Container "ProductList". Product list screen.
 */
class ContainerProductList extends React.Component<IProductListProps, any> {

    constructor(props: IProductListProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        return (
            <ViewProductList testID={'test-id-container-ProductList'}

                             performCallGetForceRequestProductList={this.props.performCallGetForceRequestProductList}
                             performCallGetCachedRequestProductList={this.props.performCallGetCachedRequestProductList}
                             performCallGetUncachedRequestProductList={this.props.performCallGetUncachedRequestProductList}
                             performInputCurrency={this.props.performInputCurrency}
                             performInputEncumbrance={this.props.performInputEncumbrance}
                             performModalProductHide={this.props.performModalProductHide}
                             navigateToProductListScreen={this.props.navigateToProductListScreen}
                             navigateToProductForecastDealInfoScreen={this.props.navigateToProductForecastDealInfoScreen}
                             navigateToProductForecastEventInfoScreen={this.props.navigateToProductForecastEventInfoScreen}
                             performContainerReset={this.props.performContainerReset}

                             navigateBack={this.props.navigateBack}
                             performCreditProductShow={this.props.performCreditProductShow}
                             performBankGuaranteeProductShow={this.props.performBankGuaranteeProductShow}
                             performCashManagementProductShow={this.props.performCashManagementProductShow}
                             performPaymentAccountProductShow={this.props.performPaymentAccountProductShow}
                             performCustomsPaymentProductShow={this.props.performCustomsPaymentProductShow}
                             performPackageProductShow={this.props.performPackageProductShow}
                             performTariffPlanProductShow={this.props.performTariffPlanProductShow}
                             performDepositProductShow={this.props.performDepositProductShow}
                             performContractSdoProductShow={this.props.performContractSdoProductShow}
                             performContractNsoProductShow={this.props.performContractNsoProductShow}
                             performCorporateCardProductShow={this.props.performCorporateCardProductShow}
                             performEncashmentProductShow={this.props.performEncashmentProductShow}
                             performSelfEncashmentProductShow={this.props.performSelfEncashmentProductShow}
                             performCurrencyControlProductShow={this.props.performCurrencyControlProductShow}
                             performAcquiringProductShow={this.props.performAcquiringProductShow}
                             performDboProductShow={this.props.performDboProductShow}
                             performContractConstructorProductShow={this.props.performContractConstructorProductShow}
                             performSalaryProductShow={this.props.performSalaryProductShow}
                             performCallEksRequestProductList = {this.props.performCallEksRequestProductList}
                             pollingError={this.props.pollingError}
                             bhCachedDate={this.props.bhCachedDate}
                             currencyList={this.props.currencyList}
                             encumbranceList={this.props.encumbranceList}
                             inputCurrency={this.props.inputCurrency}
                             inputEncumbranceList={this.props.inputEncumbranceList}
                             isVisibleModalProduct={this.props.isVisibleModalProduct}
                             currentProductListType={this.props.currentProductListType}
                             currentCreditProductList={this.props.currentCreditProductList}
                             currentBankGuaranteeProductList={this.props.currentBankGuaranteeProductList}
                             currentCashManagementProductList={this.props.currentCashManagementProductList}
                             currentPaymentAccountProductList={this.props.currentPaymentAccountProductList}
                             currentCustomsPaymentProductList={this.props.currentCustomsPaymentProductList}
                             currentPackageProductList={this.props.currentPackageProductList}
                             currentTariffPlanProductList={this.props.currentTariffPlanProductList}
                             currentDepositProductList={this.props.currentDepositProductList}
                             currentContractSdoProductList={this.props.currentContractSdoProductList}
                             currentContractNsoProductList={this.props.currentContractNsoProductList}
                             currentCorporateCardProductList={this.props.currentCorporateCardProductList}
                             currentEncashmentProductList={this.props.currentEncashmentProductList}
                             currentSelfEncashmentProductList={this.props.currentSelfEncashmentProductList}
                             currentCurrencyControlProductList={this.props.currentCurrencyControlProductList}
                             currentAcquiringProductList={this.props.currentAcquiringProductList}
                             currentDboProductList={this.props.currentDboProductList}
                             currentContractConstructorProductList={this.props.currentContractConstructorProductList}
                             currentSalaryProductList={this.props.currentSalaryProductList}

                             currentCustomerManaged={this.props.currentCustomerManaged}

                             creditActiveProductEksListFetching = {this.props.creditActiveProductEksListFetching}
                             creditCloseProductEksListFetching  = {this.props.creditCloseProductEksListFetching}

                             settlementAgreementActiveProductEksListFetching={this.props.settlementAgreementActiveProductEksListFetching}
                             settlementAgreementCloseProductEksListFetching={this.props.settlementAgreementCloseProductEksListFetching}

                             depositActiveProductEksListFetching={this.props.depositActiveProductEksListFetching}
                             depositCloseProductEksListFetching={this.props.depositCloseProductEksListFetching}

                             corporateCardActiveProductEksListFetching={this.props.corporateCardActiveProductEksListFetching}
                             corporateCardCloseProductEksListFetching={this.props.corporateCardCloseProductEksListFetching}

                             encashmentContractActiveProductEksListFetching={this.props.encashmentContractActiveProductEksListFetching}
                             encashmentContractCloseProductEksListFetching={this.props.encashmentContractCloseProductEksListFetching}

                             acquiringActiveProductEksListFetching={this.props.acquiringActiveProductEksListFetching}
                             acquiringCloseProductEksListFetching={this.props.acquiringCloseProductEksListFetching}

                             dboActiveProductEksListFetching={this.props.dboActiveProductEksListFetching}
                             dboCloseProductEksListFetching={this.props.dboCloseProductEksListFetching}

                             udboActiveProductEksListFetching={this.props.udboActiveProductEksListFetching}
                             udboCloseProductEksListFetching={this.props.udboCloseProductEksListFetching}

                             salaryActiveProductEksListFetching={this.props.salaryActiveProductEksListFetching}
                             salaryCloseProductEksListFetching={this.props.salaryCloseProductEksListFetching}

                             legalInfoProductEksListFetching={this.props.legalInfoProductEksListFetching}

                             creditActiveProductListFetching={this.props.creditActiveProductListFetching}
                             creditActiveProductListError={this.props.creditActiveProductListError}

                             creditCloseProductListError={this.props.creditCloseProductListError}
                             creditCloseProductListFetching={this.props.creditCloseProductListFetching}

                             depositActiveProductListFetching={this.props.depositActiveProductListFetching}
                             depositActiveProductListError={this.props.depositActiveProductListError}

                             depositCloseProductListError={this.props.depositCloseProductListError}
                             depositCloseProductListFetching={this.props.depositCloseProductListFetching}


                             settlementAgreementActiveProductListFetching={this.props.settlementAgreementActiveProductListFetching}
                             settlementAgreementActiveProductListError={this.props.settlementAgreementActiveProductListError}

                             settlementAgreementCloseProductListFetching={this.props.settlementAgreementCloseProductListFetching}
                             settlementAgreementCloseProductListError={this.props.settlementAgreementCloseProductListError}

                             encashmentContractActiveProductListFetching={this.props.encashmentContractActiveProductListFetching}
                             encashmentContractActiveProductListError={this.props.encashmentContractActiveProductListError}

                             encashmentContractCloseProductListFetching={this.props.encashmentContractCloseProductListFetching}
                             encashmentContractCloseProductListError={this.props.encashmentContractCloseProductListError}

                             corporateCardActiveProductListFetching={this.props.corporateCardActiveProductListFetching}
                             corporateCardActiveProductListError={this.props.corporateCardActiveProductListError}

                             corporateCardCloseProductListFetching={this.props.corporateCardCloseProductListFetching}
                             corporateCardCloseProductListError={this.props.corporateCardCloseProductListError}

                             acquiringActiveProductListFetching={this.props.acquiringActiveProductListFetching}
                             acquiringActiveProductListError={this.props.acquiringActiveProductListError}

                             acquiringCloseProductListFetching={this.props.acquiringCloseProductListFetching}
                             acquiringCloseProductListError={this.props.acquiringCloseProductListError}

                             dboActiveProductListFetching={this.props.dboActiveProductListFetching}
                             dboActiveProductListError={this.props.dboActiveProductListError}

                             dboCloseProductListFetching={this.props.dboCloseProductListFetching}
                             dboCloseProductListError={this.props.dboCloseProductListError}
                             
                             salaryActiveProductListFetching={this.props.salaryActiveProductListFetching}
                             salaryActiveProductListError={this.props.salaryActiveProductListError}

                             salaryCloseProductListFetching={this.props.salaryCloseProductListFetching}
                             salaryCloseProductListError={this.props.salaryCloseProductListError}

                             udboActiveProductListFetching={this.props.udboActiveProductListFetching}
                             udboActiveProductListError={this.props.udboActiveProductListError}

                             udboCloseProductListFetching={this.props.udboCloseProductListFetching}
                             udboCloseProductListError={this.props.udboCloseProductListError}
                             
                             legalInfoProductListFetching={this.props.legalInfoProductListFetching}
                             legalInfoProductListError={this.props.legalInfoProductListError}

                             productListAgreementStatus={this.props.productListAgreementStatus}

                             performChangeDisplayRefreshBarProductList = {this.props.performChangeDisplayRefreshBarProductList}

                             isVisibleRefreshBar={this.props.isVisibleRefreshBar}
                             isVisibleProductListModalAlert={this.props.isVisibleProductListModalAlert}
                             performProductListModalAlertShow={this.props.performProductListModalAlertShow}
                             performProductListModalAlertHide={this.props.performProductListModalAlertHide}
                             currentDeal={this.props.currentDeal}
                             currentEvent={this.props.currentEvent}
                >
            </ViewProductList>
        )
    }
}




export interface IStateProps {

    pollingError: Error | null,
    bhCachedDate: Date | null,
    currencyList: ModelsApp.ClassifierList,
    encumbranceList: Models.ProductEncumbranceList,
    inputCurrency: ModelsApp.Classifier,
    inputEncumbranceList: Models.ProductEncumbranceList,
    isVisibleModalProduct: boolean,
    currentProductListType: Enums.ProductType,
    currentCreditProductList: Models.CreditProductList,
    currentBankGuaranteeProductList: Models.CreditProductList,
    currentCashManagementProductList: Models.SettlementAgreementProductList,
    currentPaymentAccountProductList: Models.SettlementAgreementProductList,
    currentCustomsPaymentProductList: Models.SettlementAgreementProductList,
    currentPackageProductList: Models.SettlementAgreementProductList,
    currentTariffPlanProductList: Models.SettlementAgreementProductList,
    currentDepositProductList: Models.DepositProductList,
    currentContractSdoProductList: Models.DepositProductList,
    currentContractNsoProductList: Models.DepositProductList,
    currentCorporateCardProductList: Models.CorporateCardProductList,
    currentEncashmentProductList: Models.EncashmentContractProductList,
    currentSelfEncashmentProductList: Models.EncashmentContractProductList,
    currentCurrencyControlProductList: Models.LegalInfoProductList,
    currentAcquiringProductList: Models.AcquiringProductList,
    currentDboProductList: Models.DboProductList,
    currentContractConstructorProductList: Models.UdboProductList,
    currentSalaryProductList: Models.SalaryProductList,


    currentCustomerManaged: Models.CustomerManaged,

    creditActiveProductEksListFetching: boolean,
    creditCloseProductEksListFetching: boolean,

    settlementAgreementActiveProductEksListFetching: boolean,
    settlementAgreementCloseProductEksListFetching: boolean,

    depositActiveProductEksListFetching: boolean,
    depositCloseProductEksListFetching: boolean,

    corporateCardActiveProductEksListFetching: boolean,
    corporateCardCloseProductEksListFetching: boolean,

    encashmentContractActiveProductEksListFetching: boolean,
    encashmentContractCloseProductEksListFetching: boolean,

    acquiringActiveProductEksListFetching: boolean,
    acquiringCloseProductEksListFetching: boolean,

    dboActiveProductEksListFetching: boolean,
    dboCloseProductEksListFetching: boolean,

    udboActiveProductEksListFetching: boolean,
    udboCloseProductEksListFetching: boolean,

    salaryActiveProductEksListFetching: boolean,
    salaryCloseProductEksListFetching: boolean,

    legalInfoProductEksListFetching: boolean,

    creditActiveProductListFetching: boolean,
    creditActiveProductListError: Error | null,

    creditCloseProductListFetching: boolean,
    creditCloseProductListError: Error | null,

    depositActiveProductListFetching: boolean,
    depositCloseProductListFetching: boolean,

    depositActiveProductListError: Error | null,
    depositCloseProductListError: Error | null,

    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListError: Error | null,

    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListError: Error | null,

    corporateCardActiveProductListFetching: boolean,
    corporateCardCloseProductListFetching: boolean,

    corporateCardActiveProductListError: Error | null,
    corporateCardCloseProductListError: Error | null,

    encashmentContractActiveProductListFetching: boolean,
    encashmentContractCloseProductListFetching: boolean,

    encashmentContractActiveProductListError: Error | null,
    encashmentContractCloseProductListError: Error | null,

    dboActiveProductListFetching: boolean,
    dboCloseProductListFetching: boolean,

    dboActiveProductListError: Error | null,
    dboCloseProductListError: Error | null,

    acquiringActiveProductListFetching: boolean,
    acquiringCloseProductListFetching: boolean,

    acquiringActiveProductListError: Error | null,
    acquiringCloseProductListError: Error | null,

    salaryActiveProductListFetching: boolean,
    salaryCloseProductListFetching: boolean,

    salaryActiveProductListError: Error | null,
    salaryCloseProductListError: Error | null,

    udboActiveProductListFetching: boolean,
    udboCloseProductListFetching: boolean,

    udboActiveProductListError: Error | null,
    udboCloseProductListError: Error | null,
    
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,
   
    productListAgreementStatus: Enums.ProductListAgreementStatus,

    isVisibleRefreshBar: boolean,
    isVisibleProductListModalAlert: boolean,
    currentDeal: Models.ForecastDeal,
    currentEvent: Models.ForecastEvent

}

export interface IDispatchProps {
    performInputCurrency: ModelsProductList.PERFORM_INPUT_CURRENCY,
    performInputEncumbrance: ModelsProductList.PERFORM_INPUT_ENCUMBRANCE,
    performModalProductHide: ModelsProductList.PERFORM_MODAL_PRODUCT_HIDE,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    filterProductList: ModelsProductList.FILTER_PRODUCT_LIST,
    performChangeDisplayRefreshBarProductList: ModelsProductList.PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST,
    performContainerReset: ModelsProductList.PERFORM_CONTAINER_RESET,
    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    performCreditProductShow: ModelsProduct.PERFORM_CREDIT_PRODUCT_SHOW,
    performBankGuaranteeProductShow: ModelsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW,
    performCashManagementProductShow: ModelsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW,
    performPaymentAccountProductShow: ModelsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW,
    performCustomsPaymentProductShow: ModelsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW,
    performPackageProductShow: ModelsProduct.PERFORM_PACKAGE_PRODUCT_SHOW,
    performTariffPlanProductShow: ModelsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW,
    performDepositProductShow: ModelsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW,
    performContractSdoProductShow: ModelsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW,
    performContractNsoProductShow: ModelsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW,
    performCorporateCardProductShow: ModelsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW,
    performEncashmentProductShow: ModelsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW,
    performSelfEncashmentProductShow: ModelsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW,
    performCurrencyControlProductShow: ModelsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW,
    performAcquiringProductShow: ModelsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW,
    performDboProductShow: ModelsProduct.PERFORM_DBO_PRODUCT_SHOW,
    performContractConstructorProductShow: ModelsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW,
    performSalaryProductShow: ModelsProduct.PERFORM_SALARY_PRODUCT_SHOW,
    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST,
    performProductListModalAlertShow: ModelsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW,
    performProductListModalAlertHide: ModelsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,
}

export type IProductListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        pollingError: state.user.mrmkmcibCRM.reducerProductList.pollingError,
        bhCachedDate: state.user.mrmkmcibCRM.reducerProductList.bhCachedDate,
        currencyList: state.user.mrmkmcibCRM.reducerProductList.currencyList,
        encumbranceList: state.user.mrmkmcibCRM.reducerProductList.encumbranceList,
        inputCurrency: state.user.mrmkmcibCRM.reducerProductList.inputCurrency,
        inputEncumbranceList: state.user.mrmkmcibCRM.reducerProductList.inputEncumbranceList,
        isVisibleModalProduct: state.user.mrmkmcibCRM.reducerProductList.isVisibleModalProduct,
        currentProductListType: state.user.mrmkmcibCRM.reducerProductList.currentProductListType,
        currentCreditProductList: state.user.mrmkmcibCRM.reducerProductList.currentCreditProductList,
        currentBankGuaranteeProductList: state.user.mrmkmcibCRM.reducerProductList.currentBankGuaranteeProductList,
        currentCashManagementProductList: state.user.mrmkmcibCRM.reducerProductList.currentCashManagementProductList,
        currentPaymentAccountProductList: state.user.mrmkmcibCRM.reducerProductList.currentPaymentAccountProductList,
        currentCustomsPaymentProductList: state.user.mrmkmcibCRM.reducerProductList.currentCustomsPaymentProductList,
        currentPackageProductList: state.user.mrmkmcibCRM.reducerProductList.currentPackageProductList,
        currentTariffPlanProductList: state.user.mrmkmcibCRM.reducerProductList.currentTariffPlanProductList,
        currentDepositProductList: state.user.mrmkmcibCRM.reducerProductList.currentDepositProductList,
        currentContractSdoProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractSdoProductList,
        currentContractNsoProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractNsoProductList,
        currentCorporateCardProductList: state.user.mrmkmcibCRM.reducerProductList.currentCorporateCardProductList,
        currentEncashmentProductList: state.user.mrmkmcibCRM.reducerProductList.currentEncashmentProductList,
        currentSelfEncashmentProductList: state.user.mrmkmcibCRM.reducerProductList.currentSelfEncashmentProductList,
        currentCurrencyControlProductList: state.user.mrmkmcibCRM.reducerProductList.currentCurrencyControlProductList,
        currentAcquiringProductList: state.user.mrmkmcibCRM.reducerProductList.currentAcquiringProductList,
        currentDboProductList: state.user.mrmkmcibCRM.reducerProductList.currentDboProductList,
        currentContractConstructorProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractConstructorProductList,
        currentSalaryProductList: state.user.mrmkmcibCRM.reducerProductList.currentSalaryProductList,

        creditActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListFetching,
        creditCloseProductEksListFetching : state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListFetching,

        settlementAgreementActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListFetching,
        settlementAgreementCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListFetching,

        depositActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListFetching,
        depositCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListFetching,

        corporateCardActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListFetching,
        corporateCardCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListFetching,

        encashmentContractActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListFetching,
        encashmentContractCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListFetching,

        acquiringActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListFetching,
        acquiringCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListFetching,

        dboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListFetching,
        dboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListFetching,

        udboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListFetching,
        udboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListFetching,

        salaryActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListFetching,
        salaryCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListFetching,

        creditActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListFetching,
        creditActiveProductListError:    state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListError,

        creditCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListFetching,
        creditCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListError,

        depositActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListFetching,
        depositActiveProductListError:    state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListError,

        depositCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListFetching,
        depositCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListError,

        corporateCardCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListFetching,
        corporateCardCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListError,

        corporateCardActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListFetching,
        corporateCardActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListError,

        settlementAgreementCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListFetching,
        settlementAgreementCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListError,

        settlementAgreementActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListFetching,
        settlementAgreementActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListError,

        encashmentContractCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListFetching,
        encashmentContractCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListError,

        encashmentContractActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListFetching,
        encashmentContractActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListError,

        dboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListFetching,
        dboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListError,

        dboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListFetching,
        dboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListError,

        salaryCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListFetching,
        salaryCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListError,

        salaryActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListFetching,
        salaryActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListError,
        
        acquiringCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListFetching,
        acquiringCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListError,

        acquiringActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListFetching,
        acquiringActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListError,

        udboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListFetching,
        udboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListError,

        udboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListFetching,
        udboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListError,
        
        legalInfoProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListFetching,
        legalInfoProductListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListError,

        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,

        legalInfoProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListFetching,

        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,

        isVisibleRefreshBar: state.user.mrmkmcibCRM.reducerProductList.isVisibleRefreshBar,
        isVisibleProductListModalAlert: state.user.mrmkmcibCRM.reducerProductList.isVisibleProductListModalAlert,
        currentDeal: state.user.mrmkmcibCRM.reducerProductList.currentDeal,
        currentEvent: state.user.mrmkmcibCRM.reducerProductList.currentEvent
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        performCallEksRequestProductList: (productType: Enums.ProductType,
                                           productListAgreementStatus: Enums.ProductListAgreementStatus) => {
            dispatch(thunkCustomer.performCallEksRequestProductList(productType, productListAgreementStatus))
        },
        performCallGetForceRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetForceRequestProductList (type))
        },
        performCallGetCachedRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetCachedRequestProductList (type))
        },
        performCallGetUncachedRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetUncachedRequestProductList (type))
        },
        performInputCurrency: (value: ModelsApp.Classifier) => {
            dispatch(thunkProductList.performInputCurrency(value))
        },
        performInputEncumbrance: (value: Models.ProductEncumbrance) => {
            dispatch(thunkProductList.performInputEncumbrance (value))
        },
        performModalProductHide: () => {
            dispatch(thunkProductList.performModalProductHide())
        },
        navigateToProductListScreen: (productType: Enums.ProductType,) => {
            dispatch(thunkProductList.navigateToProductListScreen(productType,))
        },
        navigateToProductForecastDealInfoScreen: (deal: Models.ForecastDeal) => {
            dispatch(thunkProductList.navigateToProductForecastDealInfoScreen(deal))
        },
        navigateToProductForecastEventInfoScreen: (event: Models.ForecastEvent) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event))
        },
        performContainerReset: () => {
            dispatch(thunkProductList.performContainerReset())
        },

        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
        performCreditProductShow: (value: Models.CreditProduct,) => {
            dispatch(thunkProduct.performCreditProductShow(value,))
        },
        performBankGuaranteeProductShow: (value: Models.CreditProduct,) => {
            dispatch(thunkProduct.performBankGuaranteeProductShow(value,))
        },
        performCashManagementProductShow: (value: Models.SettlementAgreementProduct,) => {
            dispatch(thunkProduct.performCashManagementProductShow(value,))
        },
        performPaymentAccountProductShow: (value: Models.SettlementAgreementProduct,) => {
            dispatch(thunkProduct.performPaymentAccountProductShow(value,))
        },
        performCustomsPaymentProductShow: (value: Models.SettlementAgreementProduct,) => {
            dispatch(thunkProduct.performCustomsPaymentProductShow(value,))
        },
        performPackageProductShow: (value: Models.SettlementAgreementProduct,) => {
            dispatch(thunkProduct.performPackageProductShow(value,))
        },
        performTariffPlanProductShow: (value: Models.SettlementAgreementProduct,) => {
            dispatch(thunkProduct.performTariffPlanProductShow(value,))
        },
        performDepositProductShow: (value: Models.DepositProduct,) => {
            dispatch(thunkProduct.performDepositProductShow(value,))
        },
        performContractSdoProductShow: (value: Models.DepositProduct,) => {
            dispatch(thunkProduct.performContractSdoProductShow(value,))
        },
        performContractNsoProductShow: (value: Models.DepositProduct,) => {
            dispatch(thunkProduct.performContractNsoProductShow(value,))
        },
        performCorporateCardProductShow: (value: Models.CorporateCardProduct,) => {
            dispatch(thunkProduct.performCorporateCardProductShow(value,))
        },
        performEncashmentProductShow: (value: Models.EncashmentContractProduct,) => {
            dispatch(thunkProduct.performEncashmentProductShow(value,))
        },
        performSelfEncashmentProductShow: (value: Models.EncashmentContractProduct,) => {
            dispatch(thunkProduct.performSelfEncashmentProductShow(value,))
        },
        performCurrencyControlProductShow: (value: Models.LegalInfoProduct,) => {
            dispatch(thunkProduct.performCurrencyControlProductShow(value,))
        },
        performAcquiringProductShow: (value: Models.AcquiringProduct,) => {
            dispatch(thunkProduct.performAcquiringProductShow(value,))
        },
        performDboProductShow: (value: Models.DboProduct,) => {
            dispatch(thunkProduct.performDboProductShow(value,))
        },
        performContractConstructorProductShow: (value: Models.UdboProduct,) => {
            dispatch(thunkProduct.performContractConstructorProductShow(value,))
        },
        performSalaryProductShow: (value: Models.SalaryProduct,) => {
            dispatch(thunkProduct.performSalaryProductShow(value,))
        },
        performChangeDisplayRefreshBarProductList: (value: boolean) => {
            dispatch(thunkProductList.performChangeDisplayRefreshBarProductList(value))
        },
        performProductListModalAlertShow: () => {
            dispatch (thunkProductList.performProductListModalAlertShow ())
        },
        performProductListModalAlertHide: () => {
            dispatch (thunkProductList.performProductListModalAlertHide ())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerProductList)