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

import ViewGszActivityExclude from '../components/ViewGszActivityExclude'
import * as ModelState from "../models/Models"


/*
 * Container "GszActivityExclude". GSZ exclude activity screen.
 */
class ContainerGszActivityExclude extends React.Component<IGszActivityExcludeProps, any> {

    constructor(props: IGszActivityExcludeProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewGszActivityExclude testID={'test-id-container-GszActivityExclude'}
                                    searchInProgress={this.props.searchInProgress}
                                    navigateToCustomerPickerScreen={this.props.navigateToCustomerPickerScreen}
                                    performInputSearchManagedOnly={this.props.performInputSearchManagedOnly}
                                    performInputSearch={this.props.performInputSearch}
                                    performSearchReset={this.props.performSearchReset}
                                    performSearch={this.props.performSearch}
                                    performInputCustomer={this.props.performInputCustomer}
                                    performInputComment={this.props.performInputComment}
                                    performCancel={this.props.performCancel}
                                    performSave={this.props.performSave}
                                    callPostGszActivityExcludeCreate={this.props.callPostGszActivityExcludeCreate}
                                    navigateBack={this.props.navigateBack}
                                    performContainerReset={this.props.performContainerReset}
                                    searchError={this.props.searchError}

                                    inputSearch={this.props.inputSearch}
                                    customerSearchList={this.props.customerSearchList}
                                    inputSearchManagedOnly={this.props.inputSearchManagedOnly}
                                    inputCustomer={this.props.inputCustomer}
                                    inputComment={this.props.inputComment}
                                    operationUuid={this.props.operationUuid}
                                    gszActivityExcludeValidationComment={this.props.gszActivityExcludeValidationComment}
                                    gszActivityExcludeValidationCustomer={this.props.gszActivityExcludeValidationCustomer}
                                    activitySave={this.props.activitySave}
                                    activitySaveInProgress={this.props.activitySaveInProgress}
                                    activitySaveError={this.props.activitySaveError}
                                    activityExcludeCreate={this.props.activityExcludeCreate}
                                    activityExcludeCreateFetching={this.props.activityExcludeCreateFetching}
                                    activityExcludeCreateError={this.props.activityExcludeCreateError}
                                    activityExcludeCreateCachedDate={this.props.activityExcludeCreateCachedDate}
                                    currentUser = {this.props.currentUser}
                                    currentCustomerManaged={this.props.currentCustomerManaged}
                                    navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                                    memberList={this.props.memberList}
                                    performCancelSearchCustomer = {this.props.performCancelSearchCustomer}
                                    currentGsz={this.props.currentGsz}
                                    isVisibleModalActivityError = {this.props.isVisibleModalActivityError}
                                    performChangeVisibleErrorModal = {this.props.performChangeVisibleErrorModal}>
            </ViewGszActivityExclude>
        )
    }
}

export interface IStateProps {

    inputSearch: string,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    gszActivityExcludeValidationComment: string | null,
    gszActivityExcludeValidationCustomer: string | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityExcludeCreate: boolean,
    activityExcludeCreateFetching: boolean,
    activityExcludeCreateError: Error | null,
    activityExcludeCreateCachedDate: Date | null,
    searchError: Error | null,
    searchInProgress: boolean,
    currentCustomerManaged: Models.CustomerManaged,
    currentGsz: Models.Gsz,
    memberList: Models.MemberList,
    isVisibleModalActivityError: boolean,
    currentUser: ModelsApp.Employee,

}

export interface IDispatchProps {

    navigateToCustomerPickerScreen: ModelsGszActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsGszActivityExclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsGszActivityExclude.PERFORM_SEARCH,
    performInputCustomer: ModelsGszActivityExclude.PERFORM_INPUT_CUSTOMER,
    performInputComment: ModelsGszActivityExclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsGszActivityExclude.PERFORM_CANCEL,
    performSave: ModelsGszActivityExclude.PERFORM_SAVE,
    callPostGszActivityExcludeCreate: ModelsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE,
    navigateBack: ModelsGszActivityExclude.NAVIGATE_BACK,
    performContainerReset: ModelsGszActivityExclude.PERFORM_CONTAINER_RESET,
    navigateToMemberListScreen: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performCancelSearchCustomer: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performChangeVisibleErrorModal: ModelsGszActivityExclude.PERFORM_CHAGNE_VISIBLE_ERROR_MODAL,
}

export type IGszActivityExcludeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        inputSearch: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputSearch,
        customerSearchList: state.user.mrmkmcibCRM.reducerGszActivityExclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerGszActivityExclude.operationUuid,
        gszActivityExcludeValidationComment: state.user.mrmkmcibCRM.reducerGszActivityExclude.gszActivityExcludeValidationComment,
        gszActivityExcludeValidationCustomer: state.user.mrmkmcibCRM.reducerGszActivityExclude.gszActivityExcludeValidationCustomer,
        activitySave: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySaveError,
        searchInProgress: state.user.mrmkmcibCRM.reducerGszActivityExclude.searchInProgress,
        activityExcludeCreate: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreate,
        activityExcludeCreateFetching: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateFetching,
        activityExcludeCreateError: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateError,
        activityExcludeCreateCachedDate: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateCachedDate,
        isVisibleModalActivityError: state.user.mrmkmcibCRM.reducerGszActivityExclude.isVisibleModalActivityError,
        searchError: state.user.mrmkmcibCRM.reducerGszActivityExclude.searchError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentGsz: state.user.mrmkmcibCRM.reducerGSZ.currentGsz,
        memberList:  state.user.mrmkmcibCRM.reducerMemberList.memberList,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToCustomerPickerScreen: () => {
            dispatch(thunkGszActivityExclude.navigateToCustomerPickerScreen())
        },
        performInputSearchManagedOnly: (value: boolean) => {
            dispatch(thunkGszActivityExclude.performInputSearchManagedOnly(value))
        },
        performInputSearch: (value: string) => {
            dispatch(thunkGszActivityExclude.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkGszActivityExclude.performSearchReset())
        },
        performSearch: () => {
            dispatch(thunkGszActivityExclude.performSearch())
        },
        performInputCustomer: (customer: Models.Customer) => {
            dispatch(thunkGszActivityExclude.performInputCustomer(customer))
        },
        performInputComment: (value: string) => {
            dispatch(thunkGszActivityExclude.performInputComment(value))
        },
        performCancel: () => {
            dispatch(thunkGszActivityExclude.performCancel())
        },
        performSave: () => {
            dispatch(thunkGszActivityExclude.performSave())
        },
        callPostGszActivityExcludeCreate: () => {
            dispatch(thunkGszActivityExclude.callPostGszActivityExcludeCreate())
        },
        navigateBack: () => {
            dispatch(thunkGszActivityExclude.navigateBack())
        },
        performContainerReset: () => {
            dispatch(thunkGszActivityExclude.performContainerReset())
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkGszActivityExclude.navigateToMemberListScreen())
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkGszActivityExclude.performCancelSearchCustomer())
        },
        performChangeVisibleErrorModal: (status: boolean) => {
            dispatch(thunkGszActivityExclude.performChangeVisibleErrorModal(status))
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerGszActivityExclude)