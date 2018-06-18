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

import ViewGszActivityInclude from '../components/ViewGszActivityInclude'
import * as ModelState from "../models/Models"


/*
 * Container "GszActivityInclude". GSZ include activity screen.
 */
class ContainerGszActivityInclude extends React.Component<IGszActivityIncludeProps, any> {

    constructor(props: IGszActivityIncludeProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewGszActivityInclude testID={'test-id-container-GszActivityInclude'}

                                    navigateToCustomerPickerScreen={this.props.navigateToCustomerPickerScreen}
                                    performInputSearchManagedOnly={this.props.performInputSearchManagedOnly}
                                    performInputSearch={this.props.performInputSearch}
                                    performSearchReset={this.props.performSearchReset}
                                    performSearch={this.props.performSearch}
                                    performInputCustomer={this.props.performInputCustomer}
                                    performInputComment={this.props.performInputComment}
                                    performCancel={this.props.performCancel}
                                    performSave={this.props.performSave}
                                    callPostGszActivityIncludeCreate={this.props.callPostGszActivityIncludeCreate}
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
                                    gszActivityIncludeValidationComment={this.props.gszActivityIncludeValidationComment}
                                    gszActivityIncludeValidationCustomer={this.props.gszActivityIncludeValidationCustomer}
                                    search={this.props.search}
                                    searchInProgress={this.props.searchInProgress}
                                    searchError={this.props.searchError}
                                    activitySave={this.props.activitySave}
                                    activitySaveInProgress={this.props.activitySaveInProgress}
                                    activitySaveError={this.props.activitySaveError}
                                    activityIncludeCreate={this.props.activityIncludeCreate}
                                    activityIncludeCreateFetching={this.props.activityIncludeCreateFetching}
                                    activityIncludeCreateError={this.props.activityIncludeCreateError}
                                    activityIncludeCreateCachedDate={this.props.activityIncludeCreateCachedDate}

                                    currentCustomerManaged={this.props.currentCustomerManaged}
                                    navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                                    memberList={this.props.memberList}
                                    performCancelSearchCustomer = {this.props.performCancelSearchCustomer}
                                    currentGsz={this.props.currentGsz}
                                    isVisibleModalActivityError = {this.props.isVisibleModalActivityError}
                                    currentUser = {this.props.currentUser}
                                    performChangeVisibleErrorModal = {this.props.performChangeVisibleErrorModal}
                                    >
            </ViewGszActivityInclude>
        )
    }
}

export interface IStateProps {

    inputSearch: string,
    customerSearchError: string,
    isSearchError: boolean,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    gszActivityIncludeValidationComment: string | null,
    gszActivityIncludeValidationCustomer: string | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityIncludeCreate: boolean,
    activityIncludeCreateFetching: boolean,
    activityIncludeCreateError: Error | null,
    activityIncludeCreateCachedDate: Date | null,

    isVisibleModalActivityError: boolean,
    currentCustomerManaged: Models.CustomerManaged,
    currentGsz: Models.Gsz,
    memberList: Models.MemberList,
    currentUser: ModelsApp.Employee,

}

export interface IDispatchProps {
    performChangeVisibleErrorModal: ModelsGszActivityInclude.PERFORM_CHANGE_VISIBLE_ERROR_MODAL
    navigateToCustomerPickerScreen: ModelsGszActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsGszActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsGszActivityInclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsGszActivityInclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsGszActivityInclude.PERFORM_SEARCH,
    performInputCustomer: ModelsGszActivityInclude.PERFORM_INPUT_CUSTOMER,
    performInputComment: ModelsGszActivityInclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsGszActivityInclude.PERFORM_CANCEL,
    performSave: ModelsGszActivityInclude.PERFORM_SAVE,
    callPostGszActivityIncludeCreate: ModelsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE,
    navigateBack: ModelsGszActivityInclude.NAVIGATE_BACK,
    performContainerReset: ModelsGszActivityInclude.PERFORM_CONTAINER_RESET,
    navigateToMemberListScreen: ModelsGszActivityInclude.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performCancelSearchCustomer: ModelsGszActivityInclude.PERFORM_CANCEL_SEARCH_CUSTOMER,

}

export type IGszActivityIncludeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        inputSearch: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputSearch,
        customerSearchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.customerSearchError,
        isSearchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.isSearchError,
        customerSearchList: state.user.mrmkmcibCRM.reducerGszActivityInclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerGszActivityInclude.operationUuid,
        gszActivityIncludeValidationComment: state.user.mrmkmcibCRM.reducerGszActivityInclude.gszActivityIncludeValidationComment,
        gszActivityIncludeValidationCustomer: state.user.mrmkmcibCRM.reducerGszActivityInclude.gszActivityIncludeValidationCustomer,
        search: state.user.mrmkmcibCRM.reducerGszActivityInclude.search,
        searchInProgress: state.user.mrmkmcibCRM.reducerGszActivityInclude.searchInProgress,
        searchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.searchError,
        activitySave: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySaveError,
        activityIncludeCreate: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreate,
        activityIncludeCreateFetching: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateFetching,
        activityIncludeCreateError: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateError,
        activityIncludeCreateCachedDate: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateCachedDate,


        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentGsz: state.user.mrmkmcibCRM.reducerGSZ.currentGsz,
        memberList:  state.user.mrmkmcibCRM.reducerMemberList.memberList,
        isVisibleModalActivityError: state.user.mrmkmcibCRM.reducerGszActivityInclude.isVisibleModalActivityError,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToCustomerPickerScreen: () => {
            dispatch(thunkGszActivityInclude.navigateToCustomerPickerScreen())
        },
        performInputSearchManagedOnly: (value: boolean) => {
            dispatch(thunkGszActivityInclude.performInputSearchManagedOnly(value))
        },
        performInputSearch: (value: string) => {
            dispatch(thunkGszActivityInclude.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkGszActivityInclude.performSearchReset())
        },
        performSearch: () => {
            dispatch(thunkGszActivityInclude.performSearch())
        },
        performInputCustomer: (customer: Models.Customer) => {
            dispatch(thunkGszActivityInclude.performInputCustomer(customer))
        },
        performInputComment: (value: string) => {
            dispatch(thunkGszActivityInclude.performInputComment(value))
        },
        performCancel: () => {
            dispatch(thunkGszActivityInclude.performCancel())
        },
        performSave: () => {
            dispatch(thunkGszActivityInclude.performSave())
        },
        callPostGszActivityIncludeCreate: () => {
            dispatch(thunkGszActivityInclude.callPostGszActivityIncludeCreate())
        },
        navigateBack: () => {
            dispatch(thunkGszActivityInclude.navigateBack())
        },
        performContainerReset: () => {
            dispatch(thunkGszActivityInclude.performContainerReset())
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkGszActivityInclude.navigateToMemberListScreen())
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkGszActivityInclude.performCancelSearchCustomer())
        },
        performChangeVisibleErrorModal: (status: boolean) => {
            dispatch(thunkGszActivityInclude.performChangeVisibleErrorModal(status))
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerGszActivityInclude)