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

import ViewProductPaymentAccount from '../components/ViewProductPaymentAccount'
import * as ModelState from "../models/Models"


/*
 * Container "ProductPaymentAccount". Account product detail information screen.
 */
class ContainerProductPaymentAccount extends React.Component<IProductPaymentAccountProps, any> {

    constructor(props: IProductPaymentAccountProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        return (
            <ViewProductPaymentAccount testID={'test-id-container-ProductPaymentAccount'}
                                       performChangeTab={this.props.performChangeTab}
                                       productListAgreementStatus = {this.props.productListAgreementStatus}
                                       performInputSumMin={this.props.performInputSumMin}
                                       performInputSumMax={this.props.performInputSumMax}
                                       performPopoverFilterShow={this.props.performPopoverFilterShow}
                                       performPopoverFilterHide={this.props.performPopoverFilterHide}
                                       performInputOperationType={this.props.performInputOperationType}
                                       performPopoverPeriodTypeShow={this.props.performPopoverPeriodTypeShow}
                                       performPopoverPeriodTypeHide={this.props.performPopoverPeriodTypeHide}
                                       performInputPeriodType={this.props.performInputPeriodType}
                                       performInputFilterPeriodStart={this.props.performInputFilterPeriodStart}
                                       performInputFilterPeriodEnd={this.props.performInputFilterPeriodEnd}
                                       performFilterApply={this.props.performFilterApply}
                                       performFilterReset={this.props.performFilterReset}
                                       callGetOperationList={this.props.callGetOperationList}
                                       getPaymentAccountCardIndexList={this.props.getPaymentAccountCardIndexList}
                                       callGetProductVspInfo={this.props.callGetProductVspInfo}
                                       navigateToRestrictionListScreen={this.props.navigateToRestrictionListScreen}
                                       navigateToCardIndexListScreen={this.props.navigateToCardIndexListScreen}
                                       navigateToTariffScreen={this.props.navigateToTariffScreen}
                                       navigateToVspInfoScreen={this.props.navigateToVspInfoScreen}
                                       navigateToOperationListScreen={this.props.navigateToOperationListScreen}
                                       navigateToDashboardScreen={this.props.navigateToDashboardScreen}
                                       navigateProductPaymentAccountBack={this.props.navigateProductPaymentAccountBack}
                                       performContainerReset={this.props.performContainerReset}

                                       navigateProductListBack={this.props.navigateProductListBack}
                                       navigateBack={this.props.navigateBack}

                                       currentTab={this.props.currentTab}
                                       inputSumMin={this.props.inputSumMin}
                                       inputSumMax={this.props.inputSumMax}
                                       isVisiblePopoverFilter={this.props.isVisiblePopoverFilter}
                                       inputOperationType={this.props.inputOperationType}
                                       isVisiblePopoverPeriodType={this.props.isVisiblePopoverPeriodType}
                                       inputPeriodType={this.props.inputPeriodType}
                                       inputFilterPeriodStart={this.props.inputFilterPeriodStart}
                                       inputFilterPeriodEnd={this.props.inputFilterPeriodEnd}
                                       filterSumMin={this.props.filterSumMin}
                                       filterSumMax={this.props.filterSumMax}
                                       filterOperationType={this.props.filterOperationType}
                                       operationFilteredList={this.props.operationFilteredList}
                                       operationList={this.props.operationList}
                                       operationListFetching={this.props.operationListFetching}
                                       operationListError={this.props.operationListError}
                                       operationListCachedDate={this.props.operationListCachedDate}
                                       cardIndexList={this.props.cardIndexList}
                                       cardIndexListFetching={this.props.cardIndexListFetching}
                                       cardIndexListError={this.props.cardIndexListError}
                                       cardIndexListCachedDate={this.props.cardIndexListCachedDate}

                                       currentCustomerManaged={this.props.currentCustomerManaged}
                                       currentPaymentAccountProduct={this.props.currentPaymentAccountProduct}
                                       productVspInfoFetching={this.props.productVspInfoFetching}
                                       productVspInfo={this.props.productVspInfo}
                                       productVspInfoFetchingError={this.props.productVspInfoFetchingError}
                                       performUpdateCardIndexListResetCache = {this.props.performUpdateCardIndexListResetCache}
                                       performUpdateOperationListResetCache = {this.props.performUpdateOperationListResetCache}
                                       productContextMode={this.props.productContextMode}
            >
            </ViewProductPaymentAccount>
        )
    }
}

export interface IStateProps {

    currentTab: Enums.ProductPaymentAccountTab,
    inputSumMin: number | null,
    inputSumMax: number | null,
    isVisiblePopoverFilter: boolean,
    inputOperationType: Enums.OperationType,
    isVisiblePopoverPeriodType: boolean,
    inputPeriodType: Enums.PeriodType,
    inputFilterPeriodStart: Date | null,
    inputFilterPeriodEnd: Date | null,
    filterSumMin: number | null,
    filterSumMax: number | null,
    filterOperationType: Enums.OperationType,
    operationFilteredList: Models.PaymentAccountProductOperationList,
    operationList: Models.PaymentAccountProductOperationList,
    operationListFetching: boolean,
    operationListError: Error | null,
    operationListCachedDate: Date | null,
    cardIndexList: Models.PaymentAccountProductCardIndexList,
    cardIndexListFetching: boolean,
    cardIndexListError: Error | null,
    cardIndexListCachedDate: Date | null,
    productVspInfoFetching: boolean,
    productVspInfoFetchingError: Error | null,
    productVspInfo: Models.PaymentAccountProductVspInfo | null,
    currentCustomerManaged: Models.CustomerManaged,
    currentPaymentAccountProduct: Models.SettlementAgreementProduct,
    productContextMode: Enums.ProductContextMode,
}

export interface IDispatchProps {

    performChangeTab: ModelsProductPaymentAccount.PERFORM_CHANGE_TAB,
    performInputSumMin: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MIN,
    performInputSumMax: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MAX,
    performPopoverFilterShow: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverFilterHide: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE,
    performInputOperationType: ModelsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE,
    performPopoverPeriodTypeShow: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW,
    performPopoverPeriodTypeHide: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE,
    performInputPeriodType: ModelsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE,
    performInputFilterPeriodStart: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START,
    performInputFilterPeriodEnd: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END,
    performFilterApply: ModelsProductPaymentAccount.PERFORM_FILTER_APPLY,
    performFilterReset: ModelsProductPaymentAccount.PERFORM_FILTER_RESET,
    callGetOperationList: ModelsProductPaymentAccount.CALL_GET_OPERATION_LIST,
    getPaymentAccountCardIndexList: ModelsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST,
    callGetProductVspInfo: ModelsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO,
    navigateToRestrictionListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN,
    navigateToCardIndexListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN,
    navigateToTariffScreen: ModelsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN,
    navigateToVspInfoScreen: ModelsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN,
    navigateToOperationListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN,
    navigateToDashboardScreen: ModelsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN,
    navigateProductPaymentAccountBack: ModelsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK,
    performContainerReset: ModelsProductPaymentAccount.PERFORM_CONTAINER_RESET,

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    performUpdateOperationListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE,
    performUpdateCardIndexListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE,
}

export type IProductPaymentAccountProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentTab: state.user.mrmkmcibCRM.reducerProductPaymentAccount.currentTab,
        inputSumMin: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputSumMin,
        inputSumMax: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputSumMax,
        isVisiblePopoverFilter: state.user.mrmkmcibCRM.reducerProductPaymentAccount.isVisiblePopoverFilter,
        inputOperationType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputOperationType,
        isVisiblePopoverPeriodType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.isVisiblePopoverPeriodType,
        inputPeriodType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputPeriodType,
        inputFilterPeriodStart: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputFilterPeriodStart,
        inputFilterPeriodEnd: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputFilterPeriodEnd,
        filterSumMin: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterSumMin,
        filterSumMax: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterSumMax,
        filterOperationType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterOperationType,
        operationFilteredList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationFilteredList,
        operationList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationList,
        operationListFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListFetching,
        operationListError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListError,
        operationListCachedDate: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListCachedDate,
        cardIndexList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexList,
        cardIndexListFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListFetching,
        cardIndexListError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListError,
        cardIndexListCachedDate: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListCachedDate,

        productVspInfo: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfo,
        productVspInfoFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfoFetching,
        productVspInfoFetchingError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfoFetchingError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentPaymentAccountProduct: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performChangeTab: (index: number, value: Enums.ProductPaymentAccountTab,) => {
            dispatch(thunkProductPaymentAccount.performChangeTab(index, value,))
        },
        performInputSumMin: (value: number | null, applyFilter?: boolean) => {
            dispatch(thunkProductPaymentAccount.performInputSumMin(value, applyFilter))
        },
        performInputSumMax: (value: number | null, applyFilter?: boolean) => {
            dispatch(thunkProductPaymentAccount.performInputSumMax(value, applyFilter))
        },
        performPopoverFilterShow: () => {
            dispatch(thunkProductPaymentAccount.performPopoverFilterShow())
        },
        performPopoverFilterHide: () => {
            dispatch(thunkProductPaymentAccount.performPopoverFilterHide())
        },
        performInputOperationType: (value: Enums.OperationType, applyFilter?: boolean) => {
            dispatch(thunkProductPaymentAccount.performInputOperationType(value, applyFilter))
        },
        performPopoverPeriodTypeShow: () => {
            dispatch(thunkProductPaymentAccount.performPopoverPeriodTypeShow())
        },
        performPopoverPeriodTypeHide: () => {
            dispatch(thunkProductPaymentAccount.performPopoverPeriodTypeHide())
        },
        performInputPeriodType: (value: Enums.PeriodType) => {
            dispatch(thunkProductPaymentAccount.performInputPeriodType(value))
        },
        performInputFilterPeriodStart: (value: Date | null) => {
            dispatch(thunkProductPaymentAccount.performInputFilterPeriodStart(value))
        },
        performInputFilterPeriodEnd: (value: Date | null) => {
            dispatch(thunkProductPaymentAccount.performInputFilterPeriodEnd(value))
        },
        performFilterApply: () => {
            dispatch(thunkProductPaymentAccount.performFilterApply())
        },
        performFilterReset: () => {
            dispatch(thunkProductPaymentAccount.performFilterReset())
        },
        callGetOperationList: (isForceRequest: boolean) => {
            dispatch(thunkProductPaymentAccount.callGetOperationList(isForceRequest))
        },
        getPaymentAccountCardIndexList: () => {
            dispatch(thunkProductPaymentAccount.getPaymentAccountCardIndexList())
        },
        callGetProductVspInfo: () => {
            dispatch (thunkProductPaymentAccount.callGetProductVspInfo ())
        },
        navigateToRestrictionListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToRestrictionListScreen())
        },
        navigateToCardIndexListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToCardIndexListScreen())
        },
        navigateToTariffScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToTariffScreen())
        },
        navigateToVspInfoScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToVspInfoScreen())
        },
        navigateToOperationListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToOperationListScreen())
        },
        navigateToDashboardScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToDashboardScreen())
        },
        navigateProductPaymentAccountBack: () => {
            dispatch(thunkProductPaymentAccount.navigateProductPaymentAccountBack())
        },
        performContainerReset: () => {
            dispatch(thunkProductPaymentAccount.performContainerReset())
        },

        navigateProductListBack: () => {
            dispatch(thunkProductList.navigateProductListBack())
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
        performUpdateOperationListResetCache: () => {
            dispatch(thunkProductPaymentAccount.performUpdateOperationListResetCache())
        },
        performUpdateCardIndexListResetCache: () => {
            dispatch(thunkProductPaymentAccount.performUpdateCardIndexListResetCache())
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerProductPaymentAccount)