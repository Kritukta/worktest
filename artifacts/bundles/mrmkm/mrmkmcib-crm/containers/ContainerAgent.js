/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAgent from '../thunk/ThunkAgent';
import ViewAgent from '../components/ViewAgent';
/*
 * Container "Agent". Agent screen.
 */
class ContainerAgent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performInit();
    }
    render() {
        return (React.createElement(ViewAgent, { testID: 'test-id-container-Agent', performCreateActivityAccessRequest: this.props.performCreateActivityAccessRequest, performSendEmail: this.props.performSendEmail, performSchedulerOpen: this.props.performSchedulerOpen, performInputFirstName: this.props.performInputFirstName, performInputLastName: this.props.performInputLastName, performInputMiddleName: this.props.performInputMiddleName, navigateToJobPickerScreen: this.props.navigateToJobPickerScreen, performInputJobPosition: this.props.performInputJobPosition, performInputSearchJobPosition: this.props.performInputSearchJobPosition, performInputWorkPhone: this.props.performInputWorkPhone, performInputMobilePhone: this.props.performInputMobilePhone, performInputEmail: this.props.performInputEmail, performInputBirthday: this.props.performInputBirthday, performInputGender: this.props.performInputGender, navigateToRelationTypePickerScreen: this.props.navigateToRelationTypePickerScreen, performInputRelationType: this.props.performInputRelationType, performInputComment: this.props.performInputComment, performSave: this.props.performSave, performEdit: this.props.performEdit, performCancel: this.props.performCancel, navigateToOccasionList: this.props.navigateToOccasionList, navigateToNoteList: this.props.navigateToNoteList, performSetAgentCommentEditStatus: this.props.performSetAgentCommentEditStatus, navigateToAgentComment: this.props.navigateToAgentComment, navigateToAgentCustomerPositionListScreen: this.props.navigateToAgentCustomerPositionListScreen, navigateBack: this.props.navigateBack, performOpenCustomerScreen: this.props.performOpenCustomerScreen, currentAgent: this.props.currentAgent, agentMode: this.props.agentMode, inputFirstName: this.props.inputFirstName, inputLastName: this.props.inputLastName, inputMiddleName: this.props.inputMiddleName, inputJobPosition: this.props.inputJobPosition, inputSearchJobPosition: this.props.inputSearchJobPosition, inputWorkPhone: this.props.inputWorkPhone, inputMobilePhone: this.props.inputMobilePhone, inputEmail: this.props.inputEmail, inputBirthday: this.props.inputBirthday, inputGender: this.props.inputGender, inputRelationType: this.props.inputRelationType, inputComment: this.props.inputComment, agentValidationErrorList: this.props.agentValidationErrorList, agentCreateFetching: this.props.agentCreateFetching, agentCreateError: this.props.agentCreateError, currentAgentModifierId: this.props.currentAgentModifierId, currentAgentModifierIdFetching: this.props.currentAgentModifierIdFetching, currentAgentModifierIdError: this.props.currentAgentModifierIdError, currentAgentModifierIdCachedDate: this.props.currentAgentModifierIdCachedDate, agentUpdateFetching: this.props.agentUpdateFetching, agentUpdateError: this.props.agentUpdateError, agentUpdateCachedDate: this.props.agentUpdateCachedDate, currentAgentFetching: this.props.currentAgentFetching, currentAgentError: this.props.currentAgentError, currentAgentCachedDate: this.props.currentAgentCachedDate, agentContextMode: this.props.agentContextMode, classifierDictionary: this.props.classifierDictionary, inputOccasionList: this.props.inputOccasionList, inputNoteList: this.props.inputNoteList, currentCustomerManaged: this.props.currentCustomerManaged, performChangeDisplayAgentErrorModalWindow: this.props.performChangeDisplayAgentErrorModalWindow, hasChangedAgentPersonData: this.props.hasChangedAgentPersonData, performCallPostAgentCreate: this.props.performCallPostAgentCreate, performCallPutAgentUpdate: this.props.performCallPutAgentUpdate, performCallGetAgent: this.props.performCallGetAgent, isVisibleAgentErrorModalWindow: this.props.isVisibleAgentErrorModalWindow, inputMemberList: this.props.inputMemberList, navigateToMemberList: this.props.navigateToMemberList, performGetUncachedAgent: this.props.performGetUncachedAgent, performSaveAgentComment: this.props.performSaveAgentComment, isCommentEdit: this.props.isCommentEdit, newAgentComment: this.props.newAgentComment }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performSendEmail: () => {
            dispatch(thunkAgent.performSendEmail());
        },
        performSchedulerOpen: () => {
            dispatch(thunkAgent.performSchedulerOpen());
        },
        performInputFirstName: (value) => {
            dispatch(thunkAgent.performInputFirstName(value));
        },
        performInputLastName: (value) => {
            dispatch(thunkAgent.performInputLastName(value));
        },
        performInputMiddleName: (value) => {
            dispatch(thunkAgent.performInputMiddleName(value));
        },
        navigateToJobPickerScreen: () => {
            dispatch(thunkAgent.navigateToJobPickerScreen());
        },
        performInputJobPosition: (value) => {
            dispatch(thunkAgent.performInputJobPosition(value));
        },
        performInputSearchJobPosition: (value) => {
            dispatch(thunkAgent.performInputSearchJobPosition(value));
        },
        performInputWorkPhone: (value) => {
            dispatch(thunkAgent.performInputWorkPhone(value));
        },
        performInputMobilePhone: (value) => {
            dispatch(thunkAgent.performInputMobilePhone(value));
        },
        performInputEmail: (value) => {
            dispatch(thunkAgent.performInputEmail(value));
        },
        performInputBirthday: (value) => {
            dispatch(thunkAgent.performInputBirthday(value));
        },
        performInputGender: (value) => {
            dispatch(thunkAgent.performInputGender(value));
        },
        navigateToRelationTypePickerScreen: () => {
            dispatch(thunkAgent.navigateToRelationTypePickerScreen());
        },
        performInputRelationType: (value) => {
            dispatch(thunkAgent.performInputRelationType(value));
        },
        performInputComment: (value) => {
            dispatch(thunkAgent.performInputComment(value));
        },
        performSave: () => {
            dispatch(thunkAgent.performSave());
        },
        performEdit: () => {
            dispatch(thunkAgent.performEdit());
        },
        performCancel: () => {
            dispatch(thunkAgent.performCancel());
        },
        navigateToOccasionList: () => {
            dispatch(thunkAgent.navigateToOccasionList());
        },
        navigateToNoteList: () => {
            dispatch(thunkAgent.navigateToNoteList());
        },
        performSetAgentCommentEditStatus: () => {
            dispatch(thunkAgent.performSetAgentCommentEditStatus());
        },
        navigateToAgentCustomerPositionListScreen: () => {
            dispatch(thunkAgent.navigateToAgentCustomerPositionListScreen());
        },
        navigateBack: () => {
            dispatch(thunkAgent.navigateBack());
        },
        performOpenCustomerScreen: (customer) => {
            dispatch(thunkAgent.performOpenCustomerScreen(customer));
        },
        performInit: () => {
            dispatch(thunkAgent.performInit());
        },
        performCreateActivityAccessRequest: () => {
            dispatch(thunkAgent.performCreateActivityAccessRequest());
        },
        performCallGetAgent: (agent) => {
            dispatch(thunkAgent.callGetAgent(agent));
        },
        performCallPostAgentCreate: () => {
            dispatch(thunkAgent.callPostAgentCreate());
        },
        performCallPutAgentUpdate: () => {
            dispatch(thunkAgent.callPutAgentUpdate());
        },
        performChangeDisplayAgentErrorModalWindow: (value) => {
            dispatch(thunkAgent.performChangeDisplayAgentErrorModalWindow(value));
        },
        navigateToMemberList: () => {
            dispatch(thunkAgent.navigateToMemberList());
        },
        performGetUncachedAgent: () => {
            dispatch(thunkAgent.performGetUncachedAgent());
        },
        performSaveAgentComment: () => {
            dispatch(thunkAgent.performSaveAgentComment());
        },
        navigateToAgentComment: () => {
            dispatch(thunkAgent.navigateToAgentComment());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerAgent);
//# sourceMappingURL=ContainerAgent.js.map