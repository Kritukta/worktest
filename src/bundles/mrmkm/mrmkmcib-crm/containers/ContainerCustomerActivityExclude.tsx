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

import ViewCustomerActivityExclude from '../components/ViewCustomerActivityExclude'
import * as ModelState from "../models/Models"


/*
 * Container "CustomerActivityExclude". Customer exclude activity screen.
 */
class ContainerCustomerActivityExclude extends React.Component<ICustomerActivityExcludeProps, any> {

    constructor(props: ICustomerActivityExcludeProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewCustomerActivityExclude testID={'test-id-container-CustomerActivityExclude'}
                                         inputMemberList={this.props.inputMemberList}
                                         navigateToMemberListScreenPage={this.props.navigateToMemberListScreenPage}
                                         navigateToCustomerPickerScreen={this.props.navigateToCustomerPickerScreen}
                                         performInputSearchManagedOnly={this.props.performInputSearchManagedOnly}
                                         performInputSearch={this.props.performInputSearch}
                                         performSearchReset={this.props.performSearchReset}
                                         performSearch={this.props.performSearch}
                                         performInputCustomer={this.props.performInputCustomer}
                                         callGetCustomer={this.props.callGetCustomer}
                                         performInputComment={this.props.performInputComment}
                                         performCancel={this.props.performCancel}
                                         performSave={this.props.performSave}
                                         callPostCustomerActivityExcludeCreate={this.props.callPostCustomerActivityExcludeCreate}
                                         navigateBack={this.props.navigateBack}
                                         performContainerReset={this.props.performContainerReset}

                                         
                                         inputSearch={this.props.inputSearch}
                                         customerSearchList={this.props.customerSearchList}
                                         inputSearchManagedOnly={this.props.inputSearchManagedOnly}
                                         inputCustomer={this.props.inputCustomer}
                                         inputComment={this.props.inputComment}
                                         operationUuid={this.props.operationUuid}
                                         customerActivityExcludeValidationComment={this.props.customerActivityExcludeValidationComment}
                                         customerActivityExcludeValidationCustomer={this.props.customerActivityExcludeValidationCustomer}
                                         inputCustomerFetching={this.props.inputCustomerFetching}
                                         inputCustomerError={this.props.inputCustomerError}
                                         inputCustomerCachedDate={this.props.inputCustomerCachedDate}
                                         activitySave={this.props.activitySave}
                                         activitySaveInProgress={this.props.activitySaveInProgress}
                                         activitySaveError={this.props.activitySaveError}
                                         activityExcludeCreate={this.props.activityExcludeCreate}
                                         activityExcludeCreateFetching={this.props.activityExcludeCreateFetching}
                                         activityExcludeCreateError={this.props.activityExcludeCreateError}
                                         activityExcludeCreateCachedDate={this.props.activityExcludeCreateCachedDate}
                                         searchInProgress={this.props.searchInProgress}
                                         searchError={this.props.searchError}
                                         currentCustomerManaged={this.props.currentCustomerManaged}
                                         currentCustomer={this.props.currentCustomer}
                                         isVisibleErrorModalWindow = {this.props.isVisibleErrorModalWindow}
                                         performCancelSearchCustomer = {this.props.performCancelSearchCustomer}
                                         performChangeDisplayErrorModalWindow = {this.props.performChangeDisplayErrorModalWindow}
                                         >
            </ViewCustomerActivityExclude>
        )
    }
}

export interface IStateProps {

    inputMemberList: Models.MemberList,
    inputSearch: string,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    customerActivityExcludeValidationComment: string | null,
    customerActivityExcludeValidationCustomer: string | null,
    inputCustomerFetching: boolean,
    inputCustomerError: Error | null,
    inputCustomerCachedDate: Date | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityExcludeCreate: boolean,
    activityExcludeCreateFetching: boolean,
    activityExcludeCreateError: Error | null,
    activityExcludeCreateCachedDate: Date | null,
    searchInProgress: boolean,
    searchError: Error | null,
    isVisibleErrorModalWindow: boolean,
    currentCustomerManaged: Models.CustomerManaged,
    currentCustomer: Models.Customer,
}

export interface IDispatchProps {


    navigateToMemberListScreenPage: ModelsCustomerActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    navigateToCustomerPickerScreen: ModelsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsCustomerActivityExclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsCustomerActivityExclude.PERFORM_SEARCH,
    performInputCustomer: ModelsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER,
    callGetCustomer: ModelsCustomerActivityExclude.CALL_GET_CUSTOMER,
    performInputComment: ModelsCustomerActivityExclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsCustomerActivityExclude.PERFORM_CANCEL,
    performSave: ModelsCustomerActivityExclude.PERFORM_SAVE,
    callPostCustomerActivityExcludeCreate: ModelsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE,
    navigateBack: ModelsCustomerActivityExclude.NAVIGATE_BACK,
    performContainerReset: ModelsCustomerActivityExclude.PERFORM_CONTAINER_RESET,
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    performCancelSearchCustomer: ModelsCustomerActivityExclude.PERFORM_CANCEL_SEARCH_CUSTOMER,

}

export type ICustomerActivityExcludeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        inputMemberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        inputSearch: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputSearch,
        customerSearchList: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.operationUuid,
        customerActivityExcludeValidationComment: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerActivityExcludeValidationComment,
        customerActivityExcludeValidationCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerActivityExcludeValidationCustomer,
        inputCustomerFetching: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerFetching,
        inputCustomerError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerError,
        inputCustomerCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerCachedDate,
        activitySave: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySaveError,
        activityExcludeCreate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreate,
        activityExcludeCreateFetching: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateFetching,
        activityExcludeCreateError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateError,
        activityExcludeCreateCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateCachedDate,
        searchInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchListFetching,
        searchError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchListError || state.user.mrmkmcibCRM.reducerCustomerActivityExclude.searchError,



        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        isVisibleErrorModalWindow: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.isVisibleErrorModalWindow,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        navigateToMemberListScreenPage: () => {
            dispatch(thunkCustomerActivityExclude.navigateToMemberListScreenPage())
        },
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkCustomerActivityExclude.navigateToCustomerPickerScreen())
        },
        performInputSearchManagedOnly: (value: boolean) => {
            dispatch(thunkCustomerActivityExclude.performInputSearchManagedOnly(value))
        },
        performInputSearch: (value: string) => {
            dispatch(thunkCustomerActivityExclude.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkCustomerActivityExclude.performSearchReset())
        },
        performSearch: () => {
            dispatch(thunkCustomerActivityExclude.performSearch())
        },
        performInputCustomer: (customer: Models.Customer) => {
            dispatch(thunkCustomerActivityExclude.performInputCustomer(customer))
        },
        callGetCustomer: () => {
            dispatch(thunkCustomerActivityExclude.callGetCustomer())
        },
        performInputComment: (value: string) => {
            dispatch(thunkCustomerActivityExclude.performInputComment(value))
        },
        performCancel: () => {
            dispatch(thunkCustomerActivityExclude.performCancel())
        },
        performSave: () => {
            dispatch(thunkCustomerActivityExclude.performSave())
        },
        callPostCustomerActivityExcludeCreate: () => {
            dispatch(thunkCustomerActivityExclude.callPostCustomerActivityExcludeCreate())
        },
        navigateBack: () => {
            dispatch(thunkCustomerActivityExclude.navigateBack())
        },
        performContainerReset: () => {
            dispatch(thunkCustomerActivityExclude.performContainerReset())
        },
        performChangeDisplayErrorModalWindow: () =>{
            dispatch(thunkCustomerActivityExclude.performChangeDisplayErrorModalWindow())
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkCustomerActivityExclude.performCancelSearchCustomer())
        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerCustomerActivityExclude)