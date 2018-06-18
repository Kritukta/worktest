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

import ViewProduct from '../components/ViewProduct'
import * as ModelState from "../models/Models"


/*
 * Container "Product". Product screen.
 */
class ContainerProduct extends React.Component<IProductProps, any> {

    constructor(props: IProductProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewProduct testID={'test-id-container-Product'}

                         performHideProduct={this.props.performHideProduct}
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
                         inputProductStatus={this.props.inputProductStatus}
                         inputCurrency={this.props.inputCurrency}
                         performContainerReset={this.props.performContainerReset}

                         navigateBack={this.props.navigateBack}
                         performModalProductHide={this.props.performModalProductHide}

                         currentProductType={this.props.currentProductType}
                         currentCreditProduct={this.props.currentCreditProduct}
                         currentBankGuaranteeProduct={this.props.currentBankGuaranteeProduct}
                         currentCashManagementProduct={this.props.currentCashManagementProduct}
                         currentPaymentAccountProduct={this.props.currentPaymentAccountProduct}
                         currentCustomsPaymentProduct={this.props.currentCustomsPaymentProduct}
                         currentPackageProduct={this.props.currentPackageProduct}
                         currentTariffPlanProduct={this.props.currentTariffPlanProduct}
                         currentDepositProduct={this.props.currentDepositProduct}
                         currentContractSdoProduct={this.props.currentContractSdoProduct}
                         currentContractNsoProduct={this.props.currentContractNsoProduct}
                         currentCorporateCardProduct={this.props.currentCorporateCardProduct}
                         currentEncashmentProduct={this.props.currentEncashmentProduct}
                         currentSelfEncashmentProduct={this.props.currentSelfEncashmentProduct}
                         currentCurrencyControlProduct={this.props.currentCurrencyControlProduct}
                         currentAcquiringProduct={this.props.currentAcquiringProduct}
                         currentDboProduct={this.props.currentDboProduct}
                         currentContractConstructorProduct={this.props.currentContractConstructorProduct}
                         currentSalaryProduct={this.props.currentSalaryProduct}
                         currentProductStatus={this.props.currentProductStatus}
                         currentCurrency={this.props.currentCurrency}
                         navigationInProgress={this.props.navigationInProgress}

                         currentCustomerManaged={this.props.currentCustomerManaged}
            >
            </ViewProduct>
        )
    }
}

export interface IStateProps {

    currentProductType: Enums.ProductType,
    currentCreditProduct: Models.CreditProduct,
    currentBankGuaranteeProduct: Models.CreditProduct,
    currentCashManagementProduct: Models.SettlementAgreementProduct,
    currentPaymentAccountProduct: Models.SettlementAgreementProduct,
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct,
    currentPackageProduct: Models.SettlementAgreementProduct,
    currentTariffPlanProduct: Models.SettlementAgreementProduct,
    currentDepositProduct: Models.DepositProduct,
    currentContractSdoProduct: Models.DepositProduct,
    currentContractNsoProduct: Models.DepositProduct,
    currentCorporateCardProduct: Models.CorporateCardProduct,
    currentEncashmentProduct: Models.EncashmentContractProduct,
    currentSelfEncashmentProduct: Models.EncashmentContractProduct,
    currentCurrencyControlProduct: Models.LegalInfoProduct,
    currentAcquiringProduct: Models.AcquiringProduct,
    currentDboProduct: Models.DboProduct,
    currentContractConstructorProduct: Models.UdboProduct,
    currentSalaryProduct: Models.SalaryProduct,
    currentProductStatus: Enums.ProductStatus,
    currentCurrency: Enums.Currency,
    navigationInProgress: boolean,


    currentCustomerManaged: Models.CustomerManaged,
}

export interface IDispatchProps {

    performHideProduct: ModelsProduct.PERFORM_HIDE_PRODUCT,
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
    inputProductStatus: ModelsProduct.INPUT_PRODUCT_STATUS,
    inputCurrency: ModelsProduct.INPUT_CURRENCY,
    performContainerReset: ModelsProduct.PERFORM_CONTAINER_RESET,

    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    performModalProductHide: ModelsProductList.PERFORM_MODAL_PRODUCT_HIDE,
}

export type IProductProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentProductType: state.user.mrmkmcibCRM.reducerProduct.currentProductType,
        currentCreditProduct: state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct,
        currentBankGuaranteeProduct: state.user.mrmkmcibCRM.reducerProduct.currentBankGuaranteeProduct,
        currentCashManagementProduct: state.user.mrmkmcibCRM.reducerProduct.currentCashManagementProduct,
        currentPaymentAccountProduct: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct,
        currentCustomsPaymentProduct: state.user.mrmkmcibCRM.reducerProduct.currentCustomsPaymentProduct,
        currentPackageProduct: state.user.mrmkmcibCRM.reducerProduct.currentPackageProduct,
        currentTariffPlanProduct: state.user.mrmkmcibCRM.reducerProduct.currentTariffPlanProduct,
        currentDepositProduct: state.user.mrmkmcibCRM.reducerProduct.currentDepositProduct,
        currentContractSdoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractSdoProduct,
        currentContractNsoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractNsoProduct,
        currentCorporateCardProduct: state.user.mrmkmcibCRM.reducerProduct.currentCorporateCardProduct,
        currentEncashmentProduct: state.user.mrmkmcibCRM.reducerProduct.currentEncashmentProduct,
        currentSelfEncashmentProduct: state.user.mrmkmcibCRM.reducerProduct.currentSelfEncashmentProduct,
        currentCurrencyControlProduct: state.user.mrmkmcibCRM.reducerProduct.currentCurrencyControlProduct,
        currentAcquiringProduct: state.user.mrmkmcibCRM.reducerProduct.currentAcquiringProduct,
        currentDboProduct: state.user.mrmkmcibCRM.reducerProduct.currentDboProduct,
        currentContractConstructorProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractConstructorProduct,
        currentSalaryProduct: state.user.mrmkmcibCRM.reducerProduct.currentSalaryProduct,
        currentProductStatus: state.user.mrmkmcibCRM.reducerProduct.currentProductStatus,
        currentCurrency: state.user.mrmkmcibCRM.reducerProduct.currentCurrency,
        navigationInProgress: state.user.mrmkmcibApp.reducerAuthorization.navigationInProgress,


        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performHideProduct: () => {
            dispatch(thunkProduct.performHideProduct())
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
        inputProductStatus: (value: Enums.ProductStatus) => {
            dispatch(thunkProduct.inputProductStatus(value))
        },
        inputCurrency: (value: Enums.Currency) => {
            dispatch(thunkProduct.inputCurrency(value))
        },
        performContainerReset: () => {
            dispatch(thunkProduct.performContainerReset())
        },

        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
        performModalProductHide: () => {
            dispatch(thunkProductList.performModalProductHide())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerProduct)
