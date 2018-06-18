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

import ViewCustomerActivityInclude from '../components/ViewCustomerActivityInclude'
import * as ModelState from "../models/Models"


/*
 * Container "CustomerActivityInclude". Customer include activity screen.
 */
class ContainerCustomerActivityInclude extends React.Component<ICustomerActivityIncludeProps, any> {

    constructor(props: ICustomerActivityIncludeProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewCustomerActivityInclude testID={'test-id-container-CustomerActivityInclude'}
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
                                         callPostCustomerActivityIncludeCreate={this.props.callPostCustomerActivityIncludeCreate}
                                         navigateBack={this.props.navigateBack}
                                         performContainerReset={this.props.performContainerReset}


                                         inputSearch={this.props.inputSearch}
                                         customerSearchError={this.props.customerSearchError}
                                         isSearchError={this.props.isSearchError}
                                         customerSearchList={this.props.customerSearchList}
                                         inputSearchManagedOnly={this.props.inputSearchManagedOnly}
                                         inputCustomer={this.props.inputCustomer}
                                         inputComment={this.props.inputComment}
                                         operationUuid={this.props.operationUuid}
                                         customerActivityIncludeValidationComment={this.props.customerActivityIncludeValidationComment}
                                         customerActivityIncludeValidationCustomer={this.props.customerActivityIncludeValidationCustomer}
                                         search={this.props.search}
                                         searchInProgress={this.props.searchInProgress}
                                         searchError={this.props.searchError}
                                         inputCustomerFetching={this.props.inputCustomerFetching}
                                         inputCustomerError={this.props.inputCustomerError}
                                         inputCustomerCachedDate={this.props.inputCustomerCachedDate}
                                         activitySave={this.props.activitySave}
                                         activitySaveInProgress={this.props.activitySaveInProgress}
                                         activitySaveError={this.props.activitySaveError}
                                         activityIncludeCreate={this.props.activityIncludeCreate}
                                         activityIncludeCreateFetching={this.props.activityIncludeCreateFetching}
                                         activityIncludeCreateError={this.props.activityIncludeCreateError}
                                         activityIncludeCreateCachedDate={this.props.activityIncludeCreateCachedDate}
                                         performChangeDisplayErrorModalWindow = {this.props.performChangeDisplayErrorModalWindow}
                                         currentCustomer={this.props.currentCustomer}
                                         isVisibleErrorModalWindow = {this.props.isVisibleErrorModalWindow}
                                         performCancelSearchCustomer = {this.props.performCancelSearchCustomer}
                                         currentCustomerManaged={this.props.currentCustomerManaged}>
            </ViewCustomerActivityInclude>
        )
    }
}

export interface IStateProps {
    inputMemberList: Models.MemberList,
    inputSearch: string,
    customerSearchError: string,
    isSearchError: boolean,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    customerActivityIncludeValidationComment: string | null,
    customerActivityIncludeValidationCustomer: string | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    inputCustomerFetching: boolean,
    inputCustomerError: Error | null,
    inputCustomerCachedDate: Date | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityIncludeCreate: boolean,
    activityIncludeCreateFetching: boolean,
    activityIncludeCreateError: Error | null,
    activityIncludeCreateCachedDate: Date | null,

    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isVisibleErrorModalWindow: boolean,
}

export interface IDispatchProps {
    navigateToMemberListScreenPage: ModelsCustomerActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    navigateToCustomerPickerScreen: ModelsCustomerActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsCustomerActivityInclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsCustomerActivityInclude.PERFORM_SEARCH,
    performInputCustomer: ModelsCustomerActivityInclude.PERFORM_INPUT_CUSTOMER,
    callGetCustomer: ModelsCustomerActivityInclude.CALL_GET_CUSTOMER,
    performInputComment: ModelsCustomerActivityInclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsCustomerActivityInclude.PERFORM_CANCEL,
    performSave: ModelsCustomerActivityInclude.PERFORM_SAVE,
    callPostCustomerActivityIncludeCreate: ModelsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE,
    navigateBack: ModelsCustomerActivityInclude.NAVIGATE_BACK,
    performContainerReset: ModelsCustomerActivityInclude.PERFORM_CONTAINER_RESET,
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityInclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    performCancelSearchCustomer: ModelsCustomerActivityInclude.PERFORM_CANCEL_SEARCH_CUSTOMER,

}

export type ICustomerActivityIncludeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        inputMemberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        inputSearch: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearch,
        customerSearchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerSearchError,
        isSearchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.isSearchError,
        customerSearchList: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.operationUuid,
        customerActivityIncludeValidationComment: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerActivityIncludeValidationComment,
        customerActivityIncludeValidationCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerActivityIncludeValidationCustomer,
        search: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.search,
        searchInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.searchInProgress,
        searchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.searchError,
        inputCustomerFetching: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerFetching,
        inputCustomerError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerError,
        inputCustomerCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerCachedDate,
        activitySave: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySaveError,
        activityIncludeCreate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreate,
        activityIncludeCreateFetching: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateFetching,
        activityIncludeCreateError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateError,
        activityIncludeCreateCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateCachedDate,


        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        isVisibleErrorModalWindow: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.isVisibleErrorModalWindow,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        navigateToMemberListScreenPage: () => {
            dispatch(thunkCustomerActivityInclude.navigateToMemberListScreenPage())
        },
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkCustomerActivityInclude.navigateToCustomerPickerScreen())
        },
        performInputSearchManagedOnly: (value: boolean) => {
            dispatch(thunkCustomerActivityInclude.performInputSearchManagedOnly(value))
        },
        performInputSearch: (value: string) => {
            dispatch(thunkCustomerActivityInclude.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkCustomerActivityInclude.performSearchReset())
        },
        performSearch: () => {
            dispatch(thunkCustomerActivityInclude.performSearch())
        },
        performInputCustomer: (customer: Models.Customer) => {
            dispatch(thunkCustomerActivityInclude.performInputCustomer(customer))
        },
        callGetCustomer: () => {
            dispatch(thunkCustomerActivityInclude.callGetCustomer())
        },
        performInputComment: (value: string) => {
            dispatch(thunkCustomerActivityInclude.performInputComment(value))
        },
        performCancel: () => {
            dispatch(thunkCustomerActivityInclude.performCancel())
        },
        performSave: () => {
            dispatch(thunkCustomerActivityInclude.performSave())
        },
        callPostCustomerActivityIncludeCreate: () => {
            dispatch(thunkCustomerActivityInclude.callPostCustomerActivityIncludeCreate())
        },
        navigateBack: () => {
            dispatch(thunkCustomerActivityInclude.navigateBack())
        },
        performContainerReset: () => {
            dispatch(thunkCustomerActivityInclude.performContainerReset())
        },
        performChangeDisplayErrorModalWindow: () => {
            dispatch(thunkCustomerActivityInclude.performChangeDisplayErrorModalWindow())
        },
        performCancelSearchCustomer: ()=> {
            dispatch(thunkCustomerActivityInclude.performCancelSearchCustomer())
        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerCustomerActivityInclude)