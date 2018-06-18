/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from '../models/Models';
import { EnumsApp, HistoryMobileApp, navigateBack as navigateBackEmail, navigationExecutor, performModalEmailShow, performNavigateToEntity, } from 'mrmkmcib-app';
import { EnumsScheduler, performActivityListRefresh, performCloseActivityScreen, performInputActivity, performReturnToActivityScreen, } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import * as Converters from '../models/Converters';
import * as util from '../common/Util';
import * as Utils from '../common/Util';
import * as actionsAgent from '../actions/ActionsAgent';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkAgent from '../thunk/ThunkAgent';
import * as thunkAgentList from '../thunk/ThunkAgentList';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import * as thunkOccasionList from '../thunk/ThunkOccasionList';
import * as thunkNoteList from '../thunk/ThunkNoteList';
import * as Cache from '../modules/Cache';
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as thunkAppScheduler from '../../mrmkmcib-scheduler/thunk/ThunkAppScheduler';
/*
 * Thunk dispatched by "Agent" screen. Thunk used to send Email to agent address.
 */
export const performSendEmail = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(thunkCustomer.performPopoverCuratorHide());
    dispatch(thunkCustomer.performPopoverHolderHide());
    dispatch(thunkCustomer.performPopoverLimitHide());
    dispatch(thunkCustomer.performPopoverNoteListHide());
    dispatch(thunkCustomer.performPopoverOccasionListHide());
    dispatch(thunkCustomer.performPopoverOwnerHide());
    dispatch(thunkCustomer.performPopoverProblemListHide());
    dispatch(performModalEmailShow(reducerState.currentAgent.email ? { data: [util.agentToPerson(reducerState.currentAgent)] } : { data: [] }, '', '', false, false, ''));
    dispatch(actionsAgent.performSendEmail());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to show agent scheduler.
 */
export const performSchedulerOpen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(thunkAppScheduler.performSchedulerOpen(null, Object.assign({}, defaultValues.Agent, { id: state.user.mrmkmcibCRM.reducerAgent.currentAgent.id, firstName: "", lastName: "", middleName: "", fullName: null, email: null, modId: null, gender: Enums.GenderList.None, birthday: null, isPrincipal: false, isBlocked: false, phoneList: { data: [] }, customerPositionList: { data: [] }, comment: '', memberList: { data: [] }, occasionList: { data: [] }, noteList: { data: [] } }), null, null, EnumsScheduler.SchedulerMode.Agent));
    dispatch(actionsAgent.performSchedulerOpen());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input FirstName field.
 */
export const performInputFirstName = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputFirstName(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateFirstNameFailed(reducerState.inputFirstName) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.FirstName) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input LastName field.
 */
export const performInputLastName = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputLastName(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateLastNameFailed(reducerState.inputLastName) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.LastName) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MiddleName field.
 */
export const performInputMiddleName = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputMiddleName(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateMiddleNameFailed(reducerState.inputMiddleName) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.MiddleName) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap Job field.
 */
export const navigateToJobPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentCustomerJobPicker, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    dispatch(actionsAgent.navigateToJobPickerScreen());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 */
export const performInputJobPosition = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    dispatch(actionsAgent.performInputJobPosition(value));
    dispatch(actionsAgent.performInputSearchJobPosition("")); //clear search job position text
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateJobPositionFailed(reducerState.inputJobPosition) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.Position) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 */
export const performInputSearchJobPosition = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputSearchJobPosition(value));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input WorkPhone field.
 */
export const performInputWorkPhone = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputWorkPhone(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateWorkPhoneFailed(reducerState.inputWorkPhone) &&
        reducerState.agentValidationErrorList.indexOf(reducerState.inputWorkPhone && reducerState.inputWorkPhone[1] === "7"
            ? Enums.AgentValidationAttribute.WorkNumberWithSeven
            : Enums.AgentValidationAttribute.WorkNumber) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MobilePhone field.
 */
export const performInputMobilePhone = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputMobilePhone(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    if (!util.isAgentValidateMobilePhoneFailed(reducerState.inputMobilePhone) &&
        reducerState.agentValidationErrorList.indexOf(reducerState.inputMobilePhone && reducerState.inputMobilePhone[1] === "7"
            ? Enums.AgentValidationAttribute.MobileNumber
            : Enums.AgentValidationAttribute.MobileNumberWithoutSeven) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Email field.
 */
export const performInputEmail = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputEmail(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateEmailFailed(reducerState.inputEmail) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.Email) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Birthday field.
 */
export const performInputBirthday = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (value)
        dispatch(actionsAgent.performInputBirthday(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateBirthdayFailed(reducerState.inputBirthday) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.Birthday) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Gender field.
 */
export const performInputGender = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputGender(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateGenderFailed(reducerState.inputGender) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.Gender) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap RelationType field.
 */
export const navigateToRelationTypePickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentRelationTypeChoice, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    dispatch(actionsAgent.navigateToRelationTypePickerScreen());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input RelationType field.
 */
export const performInputRelationType = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    dispatch(actionsAgent.performInputRelationType(value));
    if (reducerState.agentMode == Enums.AgentMode.Edit) {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (!util.isAgentValidateRelationTypeFailed(reducerState.inputRelationType) &&
        reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.RelationType) > -1) {
        dispatch(performValidate());
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.isCommentEdit) {
        dispatch(actionsAgent.performChangeAgentComment(value));
    }
    else {
        dispatch(actionsAgent.changeStatusNeedUpdateAgentPersonData(true));
        dispatch(actionsAgent.performInputComment(value));
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerAgent;
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerAgent;
        if (!util.isAgentValidateCommentFailed(reducerState.inputComment) &&
            reducerState.agentValidationErrorList.indexOf(Enums.AgentValidationAttribute.Comment) > -1) {
            dispatch(performValidate());
        }
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to confirm changes in agent.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (util.isAgentValidateRelationTypeFailed(reducerState.inputRelationType)) {
        dispatch(thunkAgent.navigateToRelationTypePickerScreen());
        return;
    }
    if (util.isAgentValidateJobPositionFailed(reducerState.inputJobPosition)) {
        dispatch(thunkAgent.navigateToJobPickerScreen());
        return;
    }
    dispatch(performValidate());
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.agentValidationErrorList.length == 0) {
        if (reducerState.agentMode == Enums.AgentMode.Create) {
            dispatch(thunkAgent.callPostAgentCreate());
        }
        else {
            dispatch(thunkAgent.callPutAgentUpdate());
            //dispatch(thunkAgent.callGetAgentModifiedId())
        }
    }
};
export const performClearCacheCurrentAgent = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(thunkAgentList.performFlush());
    dispatch(performFlush());
};
export const performOpenCustomerScreen = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    switch (reducerState.agentContextMode) {
        case Enums.AgentContextMode.Scheduler: {
            dispatch(HistoryMobileApp.pushContent({
                splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
                index: Enums.NavigationContentAppCrm.AppCRM_Customer,
                type: EnumsApp.HistoryMobileAppType.Activity,
                data: Object.assign({}, defaultValues.HistoryMobileAppData)
            }));
            dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { customerMode: Enums.CustomerMode.SameType, navigationType: EnumsApp.NavigationType.Customer, customer: Object.assign({}, defaultValues.Customer, { id: customer.customerId }, customer) })));
            state = getState();
            dispatch(performCloseActivityScreen(EnumsScheduler.ActivityContextMode.Scheduler));
            break;
        }
        case Enums.AgentContextMode.Activity:
        case Enums.AgentContextMode.Deal:
        case Enums.AgentContextMode.Deal_NonLegalMember:
        case Enums.AgentContextMode.Customer: {
            dispatch(performAddAgentToHistoryMobileApp(Enums.NavigationContentAppCrm.AppCRM_Customer, util.getNavigationString(Enums.Navigation.AppCRM), Object.assign({}, defaultValues.CustomerManaged, customer)));
            if (customer) {
                dispatch(thunkCustomer.navigateToCustomerScreen(Object.assign({}, defaultValues.CustomerManaged, { id: customer.customerId || '', legalFormClassifier: customer.legalFormClassifier, organizationType: customer.organizationType, name: customer.company || '' }), Enums.CustomerMode.SameType, Enums.ShowCustomer.Show));
            }
            break;
        }
    }
};
/*
 * Internal thunk used in "Agent" container. Thunk used to confirm changes in agent.
 */
export const performValidate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    // Dispatch thunk "performSaveFailure" synchronously.
    state = getState();
    let errorValidationList = [];
    if (util.isAgentValidateFirstNameFailed(reducerState.inputFirstName)) {
        errorValidationList.push(Enums.AgentValidationAttribute.FirstName);
    }
    if (util.isAgentValidateLastNameFailed(reducerState.inputLastName)) {
        errorValidationList.push(Enums.AgentValidationAttribute.LastName);
    }
    if (util.isAgentValidateMiddleNameFailed(reducerState.inputMiddleName)) {
        errorValidationList.push(Enums.AgentValidationAttribute.MiddleName);
    }
    if (util.isAgentValidateWorkPhoneFailed(reducerState.inputWorkPhone)) {
        errorValidationList.push(reducerState.inputWorkPhone && reducerState.inputWorkPhone[1] === "7"
            ? Enums.AgentValidationAttribute.WorkNumberWithSeven
            : Enums.AgentValidationAttribute.WorkNumber);
    }
    if (util.isAgentValidateMobilePhoneFailed(reducerState.inputMobilePhone)) {
        errorValidationList.push(reducerState.inputMobilePhone && reducerState.inputMobilePhone[1] === "7"
            ? Enums.AgentValidationAttribute.MobileNumber
            : Enums.AgentValidationAttribute.MobileNumberWithoutSeven);
    }
    if (util.isAgentValidateCommentFailed(reducerState.inputComment)) {
        errorValidationList.push(Enums.AgentValidationAttribute.Comment);
    }
    if (util.isAgentValidateEmailFailed(reducerState.inputEmail)) {
        errorValidationList.push(Enums.AgentValidationAttribute.Email);
    }
    if (util.isAgentValidateBirthdayFailed(reducerState.inputBirthday)) {
        errorValidationList.push(Enums.AgentValidationAttribute.Birthday);
    }
    dispatch(actionsAgent.performValidate(errorValidationList));
};
/*
 * Thunk dispatched by "Agent" screen. Fetch post request.
 */
export const callPostAgentCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.agentCreateFetching) {
        return;
    }
    let operationId = reducerState.currentAgent.id;
    const noteListReducerState = state.user.mrmkmcibCRM.reducerNoteList;
    const occasionListReducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsAgent.callPostAgentCreate());
    if (!reducerState.agentCreateFetching) {
        dispatch(actionsAgent.callPostAgentCreateRequest());
        util.call(util.urlAgent.callPostAgentCreate(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            dispatch(thunkAgentList.performFlush());
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callPostAgentCreateSuccess(response));
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if ((reducerState.inputNoteList &&
                Array.isArray(reducerState.inputNoteList.data) &&
                reducerState.inputNoteList.data.length > 0) ||
                (reducerState.inputOccasionList &&
                    Array.isArray(reducerState.inputOccasionList.data) &&
                    reducerState.inputOccasionList.data.length > 0)) {
                dispatch(thunkAgent.callPutAgentUpdate());
            }
            else {
                dispatch(thunkAgent.performClearCacheCurrentAgent());
                dispatch(thunkAgent.performCloseAgentScreen());
            }
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callPostAgentCreateFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure.
        }, Converters.AGENT_CREATE_UPDATE_REQUEST_RESPONSE, 'POST', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.AGENT_CREATE_REQUEST, {
            firstName: reducerState.inputFirstName,
            lastName: reducerState.inputLastName,
            middleName: reducerState.inputMiddleName,
            workPhone: reducerState.inputWorkPhone,
            mobilePhone: reducerState.inputMobilePhone,
            gender: reducerState.inputGender,
            email: reducerState.inputEmail,
            birthday: reducerState.inputBirthday,
            comment: reducerState.inputComment,
            hasChanged: reducerState.hasChangedAgentPersonData,
            position: reducerState.inputJobPosition,
            relationType: reducerState.inputRelationType,
            customer: Object.assign({}, defaultValues.Customer, { id: reducerState.currentCustomerManaged.id }),
            sexClassifierList: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SEX_MF,
        });
    }
};
/*
 * Thunk dispatched by "Agent" screen. Fetch put request.
 */
export const callPutAgentUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.agentUpdateFetching) {
        return;
    }
    let operationId = reducerState.currentAgent.id;
    dispatch(actionsAgent.callPutAgentUpdate());
    if (!reducerState.agentUpdateFetching) {
        dispatch(actionsAgent.callPutAgentUpdateRequest());
        util.call(util.urlAgent.callPutAgentUpdate(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callPutAgentUpdateSuccess(response));
            dispatch(thunkAgent.performClearCacheCurrentAgent());
            if (reducerState.agentMode == Enums.AgentMode.Create) {
                dispatch(thunkAgent.performCloseAgentScreen());
            }
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callPutAgentUpdateFailure(error));
            dispatch(thunkAgent.callGetUpdateAgentFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure.
        }, Converters.AGENT_CREATE_UPDATE_REQUEST_RESPONSE, 'PUT', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.AGENT_UPDATE_REQUEST, {
            modId: reducerState.currentAgent.modId || 0,
            id: reducerState.currentAgent.id || "",
            customer: reducerState.currentCustomerManaged,
            firstName: reducerState.inputFirstName || "",
            lastName: reducerState.inputLastName || "",
            middleName: reducerState.inputMiddleName || "",
            position: reducerState.inputJobPosition,
            workPhone: reducerState.inputWorkPhone,
            mobilePhone: reducerState.inputMobilePhone,
            email: reducerState.inputEmail,
            birthday: reducerState.inputBirthday || new Date(),
            gender: reducerState.inputGender,
            relationType: reducerState.inputRelationType,
            comment: reducerState.inputComment,
            noteList: reducerState.inputNoteList,
            occasionList: reducerState.inputOccasionList,
            memberList: reducerState.currentAgent.memberList,
            sexClassifierList: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SEX_MF,
        });
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    dispatch(actionsAgent.performEdit());
};
export const performCloseAgentScreen = () => (dispatch, getState) => {
    dispatch(actionsAgent.performCloseAgentScreen());
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    let reducerAgentList = state.user.mrmkmcibCRM.reducerAgentList;
    switch (reducerState.agentContextMode) {
        case Enums.AgentContextMode.Scheduler: {
            dispatch(performReturnToActivityScreen());
            break;
        }
        case Enums.AgentContextMode.Email: {
            dispatch(navigateBackEmail());
            break;
        }
        case Enums.AgentContextMode.Activity: {
            dispatch(HistoryMobileApp.popContent(Utils.getNavigationString(Enums.Navigation.AppCRM))).then((content) => {
                if (content && content.payload && content.payload.agent && content.type === EnumsApp.HistoryMobileAppType.Agent) {
                    dispatch(performOpenAgentScreen(content.payload.agent.data, Object.assign({}, defaultValues.CustomerManaged, content.payload.agent.customer), Enums.AgentMode.Watch, content.payload.agent.contextMode));
                }
            });
            dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
        }
        case Enums.AgentContextMode.Deal_NonLegalMember:
        case Enums.AgentContextMode.Deal: {
            dispatch(HistoryMobileApp.popContent(Utils.getNavigationString(Enums.Navigation.AppCRM))).then((content) => {
                if (content && content.payload && content.payload.agentList && content.type == EnumsApp.HistoryMobileAppType.AgentList && content.payload.agentList.deal) {
                    dispatch(thunkAgentList.performOpenAgentListScreen(content.payload.agentList.data, Object.assign({}, defaultValues.CustomerManaged, content.payload.agentList.deal.customer), content.payload.agentList.deal, content.payload.agentList.contextMode, content.payload.agentList.accessLevel));
                }
            });
            break;
        }
        case Enums.AgentContextMode.Customer:
        case Enums.AgentContextMode.OwnerAgent: {
            dispatch(HistoryMobileApp.popContent(Utils.getNavigationString(Enums.Navigation.AppCRM))).then((content) => {
                if (content && content.payload && content.payload.agentList && content.type == EnumsApp.HistoryMobileAppType.AgentList) {
                    dispatch(thunkAgentList.performOpenAgentListScreen(content.payload.agentList.data, Object.assign({}, defaultValues.CustomerManaged, content.payload.agentList.customer), null, content.payload.agentList.contextMode, content.payload.agentList.accessLevel));
                }
            });
            break;
        }
    }
    dispatch(thunkAgent.performContainerReset());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    switch (reducerState.agentMode) {
        case Enums.AgentMode.Edit: {
            dispatch(actionsAgent.performCancel(currentAgent, reducerState.currentCustomerManaged));
            break;
        }
        default: {
            dispatch(performCloseAgentScreen());
        }
    }
};
export const perfromCloseAgentOccasionListScreen = (agent) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(HistoryMobileApp.popContent(util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen))).then((content) => {
        if (content && content.payload && content.payload.agent) {
            if (reducerState.agentMode == Enums.AgentMode.Watch) {
                dispatch(thunkAgent.performOpenAgentScreen(agent, reducerState.currentCustomerManaged, reducerState.agentMode, reducerState.agentContextMode));
            }
        }
    });
};
export const perfromCloseAgentNoteListScreen = (agent) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(HistoryMobileApp.popContent(util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen))).then((content) => {
        if (content && content.payload && content.payload.agent) {
            if (reducerState.agentMode == Enums.AgentMode.Watch) {
                dispatch(thunkAgent.performOpenAgentScreen(agent, reducerState.currentCustomerManaged, reducerState.agentMode, reducerState.agentContextMode));
            }
        }
    });
};
export const performAddAgentToHistoryMobileApp = (index, splitPanelName, customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(HistoryMobileApp.pushContent({
        splitPanelName,
        index,
        type: EnumsApp.HistoryMobileAppType.Agent,
        data: Object.assign({}, defaultValues.HistoryMobileAppData, { agent: {
                data: Object.assign({}, reducerState.currentAgent),
                customer: Object.assign({}, defaultValues.Customer, customer),
                contextMode: reducerState.agentContextMode,
            } }),
    }));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to change display error modal agent.
 *
 * @param {boolean}
 */
export const performChangeDisplayAgentErrorModalWindow = (value) => (dispatch, getState) => {
    dispatch(actionsAgent.performChangeDisplayAgentErrorModalWindow(value));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
 */
export const navigateToOccasionList = () => (dispatch, getState) => {
    let state = getState();
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    let reducerAgent = state.user.mrmkmcibCRM.reducerAgent;
    let occasionListContextMode = reducerAgent.agentMode == Enums.AgentMode.Watch
        ? Enums.OccasionListContextMode.Agent
        : Enums.OccasionListContextMode.NewEditAgent;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    let occasionListAccessLevel = currentAgent.accessLevel == Enums.AgentAccessLevel.MainTeamMember
        ? Enums.OccasionListAccessLevel.Write
        : Enums.OccasionListAccessLevel.Read;
    if (reducerAgent.agentMode == Enums.AgentMode.Create ||
        currentAgent.accessLevel == Enums.AgentAccessLevel.MainTeamMember) {
        occasionListAccessLevel = Enums.OccasionListAccessLevel.Write;
    }
    dispatch(actionsAgent.performSetAgentPanelCurrentPage(Enums.AgentPanelPage.OccasionList));
    dispatch(performAddAgentToHistoryMobileApp(Enums.NavigationContentAgentCard.AgentOccasionList, util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen), reducerAgent.currentCustomerManaged));
    dispatch(thunkOccasionList.performOpenOccasionListScreen(reducerAgent.inputOccasionList, Object.assign({}, defaultValues.OccasionListConfig, { contextMode: occasionListContextMode, currentAgent, accessLevel: occasionListAccessLevel })));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
 */
export const navigateToOccasionAgentListFromPush = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(performAddAgentToHistoryMobileApp(Enums.NavigationContentAgentCard.AgentOccasionList, util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen), reducerState.currentCustomerManaged));
    dispatch(thunkOccasionList.performOpenOccasionListScreen(reducerState.currentAgent.occasionList, Object.assign({}, defaultValues.OccasionListConfig, { currentAgent: reducerState.currentAgent, currentCustomer: reducerState.currentCustomerManaged, contextMode: Enums.OccasionListContextMode.Notice })));
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Occasion_PerformRefreshOccasionSuccess));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
 */
export const navigateToNoteList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.navigateToNoteList());
    // Dispatch thunk "navigateToNoteListScreen" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(performAddAgentToHistoryMobileApp(Enums.NavigationContentAgentCard.AgentNoteList, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen), reducerState.currentCustomerManaged));
    dispatch(thunkNoteList.navigateToNoteListScreen(reducerState.currentAgent.noteList, reducerState.currentAgent, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, reducerState.agentMode == Enums.AgentMode.Watch
        ? Enums.NoteListContextMode.Agent
        : Enums.NoteListContextMode.NewEditAgent, Enums.NoteListAccessLevel.Write));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate to view cimment.
 */
export const navigateToAgentComment = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    /* START - Container Agent thunk navigateToAgentComment before execute code. */
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentComment, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    /* END - Container Agent thunk navigateToAgentComment before execute code. */
    dispatch(actionsAgent.navigateToAgentComment());
};
/*
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate to edit comment.
 */
export const performSetAgentCommentEditStatus = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.isCommentEdit) {
        dispatch(thunkAgent.performSaveAgentComment());
    }
    else {
        reducerState.newAgentComment = reducerState.inputComment;
        dispatch(actionsAgent.performSetAgentCommentEditStatus(true));
    }
};
export const performInputAgentNoteList = (noteList) => (dispatch, getState) => {
    let state = getState();
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    dispatch(actionsAgent.performInputAgentNoteList(noteList));
};
export const performInputAgentOccasionList = (occasionList) => (dispatch, getState) => {
    let state = getState();
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    dispatch(actionsAgent.performInputAgentOccasionList(occasionList));
};
export const performCreateActivityAccessRequest = () => (dispatch, getState) => {
    let state = getState();
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerAgent.currentCustomerManaged;
    dispatch(performInputActivity(EnumsScheduler.SchedulerMode.Agent, Object.assign({}, defaultValues.Activity, { author: state.user.mrmkmcibCRM.reducerAppCRM.currentUser, customer: currentCustomerManaged, agentList: { data: [currentAgent] }, description: `Прошу предоставить доступ к карточке ` +
            `${Utils.getAgentNameInitials(currentAgent)}, представителя компании ${currentCustomerManaged.name}.`, type: { code: 'Task', parentId: null, name: 'TODO_TYPE', value: 'Задача' }, memberList: Utils.findGeneralMember(currentAgent.memberList) }), EnumsScheduler.ActivityMode.Create, EnumsScheduler.ActivityContextMode.AgentAccess));
};
export const navigateToMemberList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.navigateToMemberList());
    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, defaultValues.Deal, defaultValues.CustomerManaged, defaultValues.Gsz, Object.assign({}, reducerState.currentAgent, { memberList: reducerState.inputMemberList || defaultValues.MemberList }), true, Enums.MemberListMode.Agent));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentMemberList, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
};
export const performSaveAgentComment = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.newAgentComment != reducerState.inputComment) {
        dispatch(actionsAgent.performInputComment(reducerState.newAgentComment));
        dispatch(actionsAgent.performSetAgentCommentEditStatus(false));
        dispatch(thunkAgent.callPutAgentUpdate());
    }
};
export const performGetUncachedAgent = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(thunkAgent.performFlush());
    dispatch(thunkAgent.callGetAgent(reducerState.currentAgent));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to open agent card.
 */
export const performOpenAgentScreen = (agent, currentCustomerManaged, agentMode, agentContextMode) => (dispatch, getState) => {
    dispatch(actionsAgent.performInputAgent(agent, currentCustomerManaged, agentMode, agentContextMode));
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    let reducerAgentList = state.user.mrmkmcibCRM.reducerAgentList;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    // Dispatch thunk "callGetAgent" synchronously.
    switch (agentMode) {
        case Enums.AgentMode.Watch: {
            dispatch(thunkAgent.callGetAgent(agent));
            break;
        }
        case Enums.AgentMode.Create: {
            dispatch(getAgentScopeActivityList(agent, customer, EnumsScheduler.SchedulerMode.None));
            break;
        }
    }
};
export const getAgentScopeActivityList = (agent, customer, instanceType) => (dispatch, getState) => {
    dispatch(performActivityListRefresh(instanceType, Object.assign({}, defaultValues.Employee), Object.assign({}, defaultValues.Deal), Object.assign({}, defaultValues.Customer, customer), Object.assign({}, defaultValues.Agent, agent)));
};
/*
 * Обновление данных по представителю после редактирования списка команды представителя
 */
export const performAgentCurrentModeRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.currentAgent.id) {
        Cache.sessionResetTagList([{ tag: util.getRefreshAgentAfterMemberListUpdateTagString(Enums.RefreshAgentAfterMemberListUpdateTag.RefreshAgentAfterMemberListUpdateEnabled) }]);
        dispatch(thunkAgent.callGetAgent(reducerState.currentAgent));
    }
};
const performGrantAccessToAgent = () => (dispatch, getState) => {
    let state = getState();
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerAgent.currentCustomerManaged;
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performInputAgent(currentAgent, currentCustomerManaged, state.user.mrmkmcibCRM.reducerAgent.agentMode, state.user.mrmkmcibCRM.reducerAgent.agentContextMode));
    let currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    const member = Utils.getPersonInTeam(currentUser, currentAgent.memberList);
    dispatch(actionsAgent.performGrantAccessToAgent(Utils.setAccessLevelToAgent(member)));
};
export const performFlush = () => (dispatch, getState) => {
    let state = getState();
    let currentAgent = state.user.mrmkmcibCRM.reducerAgent.currentAgent;
    dispatch(actionsAgent.performFlushAgent());
    Cache.sessionResetTag({ tag: 'AgentCard', contextId: currentAgent.id });
};
export const callGetAgentSuccess = (response) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(thunkOccasionList.performInputOccasionList(response.data.occasionList));
    dispatch(actionsAgent.callGetAgentSuccess(response));
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.agentContextMode !== Enums.AgentContextMode.Scheduler) {
        if (reducerState.currentAgent.accessLevel == Enums.AgentAccessLevel.Denied) {
            dispatch(getAgentScopeActivityList(reducerState.currentAgent, reducerState.currentCustomerManaged, EnumsScheduler.SchedulerMode.None));
        }
        else {
            dispatch(getAgentScopeActivityList(reducerState.currentAgent, reducerState.currentCustomerManaged, EnumsScheduler.SchedulerMode.Agent));
        }
    }
};
/*
 * Thunk dispatched by "Agent" screen. Fetch current agent.
 */
export const callGetAgent = (agent) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    let reducerOccasionList = state.user.mrmkmcibCRM.reducerOccasionList;
    if (reducerState.currentAgentFetching) {
        return;
    }
    let operationId = reducerState.currentAgent.id;
    dispatch(actionsAgent.callGetAgent());
    if (!reducerState.currentAgentFetching) {
        dispatch(actionsAgent.callGetAgentRequest());
        util.call(util.urlAgent.callGetAgent(state, agent, [
            { tag: Enums.CachePolicy.Default },
            { tag: 'AgentCard', contextId: agent.id }
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
            const userMember = util.getPersonInTeam(currentUser, response.data.memberList);
            dispatch(thunkAgent.callGetAgentSuccess({
                data: Object.assign({}, response.data, { accessLevel: util.setAccessLevelToAgent(userMember) }),
                cachedDate: response.cachedDate
            }));
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            dispatch(performGrantAccessToAgent());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callGetAgentFailure(error));
            dispatch(callGetUpdateAgentFailure(error));
        }, Converters.RESPONSE_AGENT_CALL_GET_AGENT_TO_AGENT, 'GET');
    }
};
export const callGetUpdateAgentFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    switch (reducerState.agentPanelCurrentPage) {
        case Enums.AgentPanelPage.OccasionList: {
            dispatch(thunkOccasionList.callUpdateFailureOccasionList(error));
            break;
        }
    }
};
/*
 * Thunk dispatched by "Agent" screen. Fetch current agent by id.
 */
export const callGetAgentById = (agentId) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.currentAgentFetching) {
        return;
    }
    let operationId = reducerState.currentAgent.id;
    dispatch(actionsAgent.callGetAgent());
    if (!reducerState.currentAgentFetching) {
        dispatch(actionsAgent.callGetAgentRequest());
        util.call(util.urlAgent.callGetAgentById(state, agentId, [
            {
                tag: Enums.CachePolicy.Default
            },
            {
                tag: util.getRefreshAgentAfterMemberListUpdateTagString(Enums.RefreshAgentAfterMemberListUpdateTag.RefreshAgentAfterMemberListUpdateEnabled)
            },
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId) {
                return;
            }
            dispatch(actionsAgent.callGetAgentSuccess(response));
            dispatch(navigationExecutor(EnumsApp.NavigationStep.Agent_GetInfoSuccess));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerAgent;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsAgent.callGetAgentFailure(error));
            dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, `Ошибка на этапе загрузке данных об агенте: ${error.code} - ${error.message}`));
        }, Converters.RESPONSE_AGENT_CALL_GET_AGENT_TO_AGENT, 'GET');
    }
};
/*
 * Thunk dispatched by "Agent" screen. Thunk used to show agent customers screen.
 */
export const navigateToAgentCustomerPositionListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentCustomerCompaniesList, Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    dispatch(actionsAgent.navigateToAgentCustomerPositionListScreen());
};
/*
 * Thunk dispatched by "Agent" screen.
 */
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    if (reducerState.isCommentEdit) {
        dispatch(actionsAgent.performSetAgentCommentEditStatus(false));
        return;
    }
    if (reducerState.agentContextMode === Enums.AgentContextMode.OwnerAgent) {
        dispatch(SplitPanelActions.popContent(Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)));
    }
    else if (reducerState.agentContextMode === Enums.AgentContextMode.Deal) {
        dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    }
    else if (reducerState.agentContextMode === Enums.AgentContextMode.Deal_NonLegalMember) {
        dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    }
    {
        dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
    }
    dispatch(actionsAgent.navigateBack());
};
/*
 * Thunk dispatched by "Agent" screen.
 */
export const resetNavigatePanel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
};
/*
 * Thunk dispatched by "Agent" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgent;
    dispatch(actionsAgent.performContainerReset());
};
export const performInit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList;
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Agent_ScreenMounted));
};
//# sourceMappingURL=ThunkAgent.js.map