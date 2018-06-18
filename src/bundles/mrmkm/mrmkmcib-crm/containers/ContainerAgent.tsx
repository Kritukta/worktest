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
import {performInputActivity} from 'mrmkmcib-scheduler'

import ViewAgent from '../components/ViewAgent'
import * as ModelState from "../models/Models"
import {Models as ModelsScheduler, EnumsScheduler} from "mrmkmcib-scheduler"


/*
 * Container "Agent". Agent screen.
 */
class ContainerAgent extends React.Component<IAgentProps, any> {

    constructor(props: IAgentProps, context: any) {
        super(props, context);
    }

    componentDidMount() {
        this.props.performInit()
    }

    render() {
        return (
            <ViewAgent testID={'test-id-container-Agent'}
                performCreateActivityAccessRequest = {this.props.performCreateActivityAccessRequest}
                performSendEmail={this.props.performSendEmail}
                performSchedulerOpen={this.props.performSchedulerOpen}
                performInputFirstName={this.props.performInputFirstName}
                performInputLastName={this.props.performInputLastName}
                performInputMiddleName={this.props.performInputMiddleName}
                navigateToJobPickerScreen={this.props.navigateToJobPickerScreen}
                performInputJobPosition={this.props.performInputJobPosition}
                performInputSearchJobPosition = {this.props.performInputSearchJobPosition}
                performInputWorkPhone={this.props.performInputWorkPhone}
                performInputMobilePhone={this.props.performInputMobilePhone}
                performInputEmail={this.props.performInputEmail}
                performInputBirthday={this.props.performInputBirthday}
                performInputGender={this.props.performInputGender}
                navigateToRelationTypePickerScreen={this.props.navigateToRelationTypePickerScreen}
                performInputRelationType={this.props.performInputRelationType}
                performInputComment={this.props.performInputComment}
                performSave={this.props.performSave}

                performEdit={this.props.performEdit}
                performCancel={this.props.performCancel}
                navigateToOccasionList={this.props.navigateToOccasionList}
                navigateToNoteList={this.props.navigateToNoteList}
                performSetAgentCommentEditStatus = {this.props.performSetAgentCommentEditStatus}
                navigateToAgentComment = {this.props.navigateToAgentComment}

                navigateToAgentCustomerPositionListScreen={this.props.navigateToAgentCustomerPositionListScreen}
                navigateBack={this.props.navigateBack}

                performOpenCustomerScreen={this.props.performOpenCustomerScreen}

                currentAgent={this.props.currentAgent}
                agentMode={this.props.agentMode}
                inputFirstName={this.props.inputFirstName}
                inputLastName={this.props.inputLastName}
                inputMiddleName={this.props.inputMiddleName}
                inputJobPosition={this.props.inputJobPosition}
                inputSearchJobPosition = {this.props.inputSearchJobPosition}
                inputWorkPhone={this.props.inputWorkPhone}
                inputMobilePhone={this.props.inputMobilePhone}
                inputEmail={this.props.inputEmail}
                inputBirthday={this.props.inputBirthday}
                inputGender={this.props.inputGender}
                inputRelationType={this.props.inputRelationType}
                inputComment={this.props.inputComment}
                agentValidationErrorList = {this.props.agentValidationErrorList}



                agentCreateFetching={this.props.agentCreateFetching}
                agentCreateError={this.props.agentCreateError}
                currentAgentModifierId={this.props.currentAgentModifierId}
                currentAgentModifierIdFetching={this.props.currentAgentModifierIdFetching}
                currentAgentModifierIdError={this.props.currentAgentModifierIdError}
                currentAgentModifierIdCachedDate={this.props.currentAgentModifierIdCachedDate}

                agentUpdateFetching={this.props.agentUpdateFetching}
                agentUpdateError={this.props.agentUpdateError}
                agentUpdateCachedDate={this.props.agentUpdateCachedDate}
                currentAgentFetching={this.props.currentAgentFetching}
                currentAgentError={this.props.currentAgentError}
                currentAgentCachedDate={this.props.currentAgentCachedDate}


                agentContextMode={ this.props.agentContextMode }
                classifierDictionary={this.props.classifierDictionary}
                inputOccasionList = {this.props.inputOccasionList}
                inputNoteList = {this.props.inputNoteList}
                currentCustomerManaged={this.props.currentCustomerManaged}

                performChangeDisplayAgentErrorModalWindow = {this.props.performChangeDisplayAgentErrorModalWindow}

                hasChangedAgentPersonData = {this.props.hasChangedAgentPersonData}
                performCallPostAgentCreate = {this.props.performCallPostAgentCreate}
                performCallPutAgentUpdate = {this.props.performCallPutAgentUpdate}
                performCallGetAgent = {this.props.performCallGetAgent}

                isVisibleAgentErrorModalWindow = {this.props.isVisibleAgentErrorModalWindow}
                inputMemberList = {this.props.inputMemberList}
                navigateToMemberList = {this.props.navigateToMemberList}
                performGetUncachedAgent = {this.props.performGetUncachedAgent}
                performSaveAgentComment = {this.props.performSaveAgentComment}
                isCommentEdit = {this.props.isCommentEdit}
                newAgentComment = {this.props.newAgentComment}
            >
            </ViewAgent>
        )
    }
}

export interface IStateProps {

    currentAgent: Models.Agent,
    agentMode: Enums.AgentMode,
    inputFirstName: string,
    inputLastName: string,
    inputMiddleName: string,
    inputSearchJobPosition: string,
    inputJobPosition: string,
    inputWorkPhone: string | null,
    inputMobilePhone: string | null,
    inputEmail: string,
    inputBirthday: Date | null,
    inputGender: Enums.GenderList,
    inputRelationType: ModelsApp.Classifier,
    inputComment: string,
    agentValidationErrorList: number[],
    operationUuid: string,

    agentCreateFetching: boolean,
    agentCreateError: Error | null,

    currentAgentModifierId: Models.Agent,
    currentAgentModifierIdFetching: boolean,
    currentAgentModifierIdError: Error | null,
    currentAgentModifierIdCachedDate: Date | null,

    agentUpdateFetching: boolean,
    agentUpdateError: Error | null,
    agentUpdateCachedDate: Date | null,

    currentAgentFetching: boolean,
    currentAgentError: Error | null,
    currentAgentCachedDate: Date | null,


    classifierDictionary: ModelsApp.ClassifierDictionary,

    currentCustomerManaged: Models.CustomerManaged | null,

    agentContextMode: Enums.AgentContextMode,
    inputOccasionList: Models.OccasionList,
    inputNoteList: Models.NoteList,
    isVisibleAgentErrorModalWindow: boolean,
    inputMemberList: Models.MemberList | null,
    isCommentEdit: boolean,
    newAgentComment: string,
}

export interface IDispatchProps {

    performSendEmail: ModelsAgent.PERFORM_SEND_EMAIL,

    performSchedulerOpen: ModelsAgent.PERFORM_SCHEDULER_OPEN,
    performInputFirstName: ModelsAgent.PERFORM_INPUT_FIRST_NAME,
    performInputLastName: ModelsAgent.PERFORM_INPUT_LAST_NAME,
    performInputMiddleName: ModelsAgent.PERFORM_INPUT_MIDDLE_NAME,
    navigateToJobPickerScreen: ModelsAgent.NAVIGATE_TO_JOB_PICKER_SCREEN,
    performInputJobPosition: ModelsAgent.PERFORM_INPUT_JOB_POSITION,
    performInputSearchJobPosition: ModelsAgent.PERFORM_INPUT_SEARCH_JOB_POSITION,
    performInputWorkPhone: ModelsAgent.PERFORM_INPUT_WORK_PHONE,
    performInputMobilePhone: ModelsAgent.PERFORM_INPUT_MOBILE_PHONE,
    performInputEmail: ModelsAgent.PERFORM_INPUT_EMAIL,
    performInputBirthday: ModelsAgent.PERFORM_INPUT_BIRTHDAY,
    performInputGender: ModelsAgent.PERFORM_INPUT_GENDER,
    navigateToRelationTypePickerScreen: ModelsAgent.NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN,
    performInputRelationType: ModelsAgent.PERFORM_INPUT_RELATION_TYPE,
    performInputComment: ModelsAgent.PERFORM_INPUT_COMMENT,
    performSave: ModelsAgent.PERFORM_SAVE,
    performGetUncachedAgent: ModelsAgent.PERFORM_GET_UNCACHED_AGENT,
    performEdit: ModelsAgent.PERFORM_EDIT,
    performCancel: ModelsAgent.PERFORM_CANCEL,
    navigateToOccasionList: ModelsAgent.NAVIGATE_TO_OCCASION_LIST,
    navigateToNoteList: ModelsAgent.NAVIGATE_TO_NOTE_LIST,
    performSaveAgentComment: ModelsAgent.PERFORM_SAVE_AGENT_COMMENT,
    navigateToAgentComment: ModelsAgent.NAVIGATE_TO_AGENT_COMMENT,
    performSetAgentCommentEditStatus: ModelsAgent.PERFORM_SET_AGENT_COMMENT_EDIT_STATUS,

    navigateToAgentCustomerPositionListScreen: ModelsAgent.NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN,
    navigateBack: ModelsAgent.NAVIGATE_BACK,

    performOpenCustomerScreen: ModelsAgent.PERFORM_OPEN_CUSTOMER_SCREEN,
    performInit: ModelsAgent.PERFORM_AGENT_SCREEN_INIT,
    performCreateActivityAccessRequest: ModelsAgent.PERFORM_CREATE_ACTIIVTY_ACCESS_REQUEST,

    performChangeDisplayAgentErrorModalWindow: ModelsAgent.PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW,

    performCallGetAgent: ModelsAgent.PERFORM_CALL_GET_AGENT,
    performCallPostAgentCreate: ModelsAgent.PERFORM_CALL_POST_AGENT_CREATE,
    performCallPutAgentUpdate: ModelsAgent.PERFORM_CALL_PUT_AGENT_UPDATE,
    navigateToMemberList: ModelsAgent.NAVIGATE_TO_MEMBER_LIST
    hasChangedAgentPersonData: boolean,

}

export type IAgentProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentAgent: state.user.mrmkmcibCRM.reducerAgent.currentAgent,
        agentMode: state.user.mrmkmcibCRM.reducerAgent.agentMode,
        inputFirstName: state.user.mrmkmcibCRM.reducerAgent.inputFirstName,
        inputLastName: state.user.mrmkmcibCRM.reducerAgent.inputLastName,
        inputMiddleName: state.user.mrmkmcibCRM.reducerAgent.inputMiddleName,
        inputJobPosition: state.user.mrmkmcibCRM.reducerAgent.inputJobPosition,
        inputSearchJobPosition: state.user.mrmkmcibCRM.reducerAgent.inputSearchJobPosition,
        inputWorkPhone: state.user.mrmkmcibCRM.reducerAgent.inputWorkPhone,
        inputMobilePhone: state.user.mrmkmcibCRM.reducerAgent.inputMobilePhone,
        inputEmail: state.user.mrmkmcibCRM.reducerAgent.inputEmail,
        inputBirthday: state.user.mrmkmcibCRM.reducerAgent.inputBirthday,
        inputGender: state.user.mrmkmcibCRM.reducerAgent.inputGender,
        inputRelationType: state.user.mrmkmcibCRM.reducerAgent.inputRelationType,
        inputComment: state.user.mrmkmcibCRM.reducerAgent.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerAgent.operationUuid,

        agentCreateFetching: state.user.mrmkmcibCRM.reducerAgent.agentCreateFetching,
        agentCreateError: state.user.mrmkmcibCRM.reducerAgent.agentCreateError,

        currentAgentModifierId: state.user.mrmkmcibCRM.reducerAgent.currentAgentModifierId,
        currentAgentModifierIdFetching: state.user.mrmkmcibCRM.reducerAgent.currentAgentModifierIdFetching,
        currentAgentModifierIdError: state.user.mrmkmcibCRM.reducerAgent.currentAgentModifierIdError,
        currentAgentModifierIdCachedDate: state.user.mrmkmcibCRM.reducerAgent.currentAgentModifierIdCachedDate,

        agentUpdateFetching: state.user.mrmkmcibCRM.reducerAgent.agentUpdateFetching,
        agentUpdateError: state.user.mrmkmcibCRM.reducerAgent.agentUpdateError,
        agentUpdateCachedDate: state.user.mrmkmcibCRM.reducerAgent.agentUpdateCachedDate,

        currentAgentFetching: state.user.mrmkmcibCRM.reducerAgent.currentAgentFetching,
        currentAgentError: state.user.mrmkmcibCRM.reducerAgent.currentAgentError,
        currentAgentCachedDate: state.user.mrmkmcibCRM.reducerAgent.currentAgentCachedDate,

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,

        currentCustomerManaged: state.user.mrmkmcibCRM.reducerAgentList.currentCustomerManaged,
        agentContextMode: state.user.mrmkmcibCRM.reducerAgent.agentContextMode,
        agentValidationErrorList: state.user.mrmkmcibCRM.reducerAgent.agentValidationErrorList,

        inputNoteList: state.user.mrmkmcibCRM.reducerAgent.inputNoteList,
        inputOccasionList: state.user.mrmkmcibCRM.reducerAgent.inputOccasionList,
        inputMemberList: state.user.mrmkmcibCRM.reducerAgent.inputMemberList,
        isVisibleAgentErrorModalWindow: state.user.mrmkmcibCRM.reducerAgent.isVisibleAgentErrorModalWindow,
        isCommentEdit: state.user.mrmkmcibCRM.reducerAgent.isCommentEdit,
        newAgentComment: state.user.mrmkmcibCRM.reducerAgent.newAgentComment,
        hasChangedAgentPersonData: state.user.mrmkmcibCRM.reducerAgent.hasChangedAgentPersonData,

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performSendEmail: () => {
            dispatch(thunkAgent.performSendEmail())
        },
        performSchedulerOpen: () => {
            dispatch(thunkAgent.performSchedulerOpen())
        },
        performInputFirstName: (value: string) => {
            dispatch(thunkAgent.performInputFirstName(value))
        },
        performInputLastName: (value: string) => {
            dispatch(thunkAgent.performInputLastName(value))
        },
        performInputMiddleName: (value: string) => {
            dispatch(thunkAgent.performInputMiddleName(value))
        },
        navigateToJobPickerScreen: () => {
            dispatch(thunkAgent.navigateToJobPickerScreen())
        },
        performInputJobPosition: (value: string) => {
            dispatch(thunkAgent.performInputJobPosition(value))
        },
        performInputSearchJobPosition: (value: string) => {
            dispatch(thunkAgent.performInputSearchJobPosition(value))
        },

        performInputWorkPhone: (value: string,) => {
            dispatch(thunkAgent.performInputWorkPhone(value,))
        },
        performInputMobilePhone: (value: string,) => {
            dispatch(thunkAgent.performInputMobilePhone(value,))
        },
        performInputEmail: (value: string) => {
            dispatch(thunkAgent.performInputEmail(value))
        },
        performInputBirthday: (value: Date | null) => {
            dispatch(thunkAgent.performInputBirthday(value))
        },
        performInputGender: (value: Enums.GenderList) => {
            dispatch(thunkAgent.performInputGender(value))
        },
        navigateToRelationTypePickerScreen: () => {
            dispatch(thunkAgent.navigateToRelationTypePickerScreen())
        },
        performInputRelationType: (value: ModelsApp.Classifier) => {
            dispatch(thunkAgent.performInputRelationType(value))
        },
        performInputComment: (value: string) => {
            dispatch(thunkAgent.performInputComment(value))
        },
        performSave: () => {
            dispatch(thunkAgent.performSave())
        },
        performEdit: () => {
            dispatch(thunkAgent.performEdit())
        },
        performCancel: () => {
            dispatch(thunkAgent.performCancel())
        },
        navigateToOccasionList: () => {
            dispatch(thunkAgent.navigateToOccasionList())
        },
        navigateToNoteList: () => {
            dispatch(thunkAgent.navigateToNoteList())
        },
        performSetAgentCommentEditStatus: ()=>{
            dispatch(thunkAgent.performSetAgentCommentEditStatus())
        },

        navigateToAgentCustomerPositionListScreen: () => {
            dispatch(thunkAgent.navigateToAgentCustomerPositionListScreen())
        },
        navigateBack: () => {
            dispatch(thunkAgent.navigateBack())
        },


        performOpenCustomerScreen: (customer: Models.AgentCustomerPosition) => {
            dispatch(thunkAgent.performOpenCustomerScreen(customer))
        },
        performInit: () => {
            dispatch(thunkAgent.performInit())
        },
        performCreateActivityAccessRequest: () => {
            dispatch(thunkAgent.performCreateActivityAccessRequest())
        },

        performCallGetAgent: (agent: Models.Agent) => {
            dispatch(thunkAgent.callGetAgent(agent))
        },
        
        performCallPostAgentCreate: () => {
            dispatch(thunkAgent.callPostAgentCreate())
        },

        performCallPutAgentUpdate: () => {
            dispatch(thunkAgent.callPutAgentUpdate())
        },

        performChangeDisplayAgentErrorModalWindow: (value: boolean) => {
            dispatch(thunkAgent.performChangeDisplayAgentErrorModalWindow(value))
        },

        navigateToMemberList: () => {
            dispatch(thunkAgent.navigateToMemberList())
        },
        performGetUncachedAgent: () => {
            dispatch(thunkAgent.performGetUncachedAgent())
        },
        performSaveAgentComment: ()=>{
            dispatch(thunkAgent.performSaveAgentComment())
        },

        navigateToAgentComment: ()=>{
            dispatch(thunkAgent.navigateToAgentComment())
        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerAgent)