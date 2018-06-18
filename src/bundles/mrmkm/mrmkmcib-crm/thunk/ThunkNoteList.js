/*
 * Created by Burnaev M.U.
 */
import { Enums } from '../Enums';
import * as thunkAgent from '../thunk/ThunkAgent';
import * as Utils from '../common/Util';
import * as util from '../common/Util';
import * as Cache from '../modules/Cache';
import * as actionsNoteList from '../actions/ActionsNoteList';
import * as thunkNoteList from '../thunk/ThunkNoteList';
import * as Converters from "../models/Converters";
import { SplitPanelActions } from 'ufs-mobile-platform';
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to change visible of error modal note list.
 */
export const performChangeVisibleNoteListErrorModal = (status) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.performChangeVisibleNoteListErrorModal(status));
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.performEdit(reducerState.noteList));
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to open delete panel of note
 */
export const performOpenNoteDeletePanel = (note) => (dispatch, getState) => {
    dispatch(actionsNoteList.performOpenNoteDeletePanel(note));
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.performCancel());
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    if (reducerState.noteListSaveError && reducerState.noteListSaveError.code) {
        dispatch(thunkNoteList.performChangeVisibleNoteListErrorModal(false));
    }
    if (reducerState.isModified) {
        if (reducerState.noteListContextMode == Enums.NoteListContextMode.NewEditAgent) {
            dispatch(actionsNoteList.performSave());
        }
        else if (reducerState.noteListContextMode == Enums.NoteListContextMode.Agent) {
            dispatch(thunkNoteList.callPutAgentNoteListUpdate());
        }
    }
    else {
        dispatch(actionsNoteList.performSave());
    }
};
export const callPutAgentNoteListUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    let currentAgent = reducerState.currentAgent;
    if (reducerState.noteListSaveInProgress) {
        return;
    }
    let operationId = reducerState.currentAgent.id;
    dispatch(actionsNoteList.callPutAgentNoteListUpdate());
    if (!reducerState.noteListSaveInProgress) {
        dispatch(actionsNoteList.callPutAgentNoteListUpdateRequest());
        util.call(util.urlNoteList.callPutAgentNoteListUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerNoteList;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsNoteList.callPutAgentNoteListUpdateSuccess(response));
            dispatch(thunkAgent.performFlush());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerNoteList;
            if (reducerState.currentAgent.id != operationId)
                return;
            dispatch(actionsNoteList.callPutAgentNoteListUpdateFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure.
            dispatch(thunkNoteList.performSaveFailure(error));
        }, Converters.AGENT_CREATE_UPDATE_REQUEST_RESPONSE, 'PUT', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.REQUEST_NOTE_LIST_CALL_PUT_AGENT_NOTE_LIST_UPDATE_FROM_AGENT_NOTE_LIST_UPDATE_REQUEST, {
            modId: currentAgent && currentAgent.modId || 0,
            id: currentAgent && currentAgent.id || "",
            firstName: currentAgent && currentAgent.firstName || "",
            lastName: currentAgent && currentAgent.lastName || "",
            middleName: currentAgent && currentAgent.middleName || "",
            workPhone: currentAgent ? util.getWorkPhone(currentAgent.phoneList) : "",
            mobilePhone: currentAgent ? util.getMobilePhone(currentAgent.phoneList) : "",
            email: currentAgent && currentAgent.email || "",
            birthday: currentAgent && currentAgent.birthday || new Date(),
            gender: currentAgent && currentAgent.gender || Enums.GenderList.None,
            comment: currentAgent && currentAgent.comment || '',
            noteList: reducerState.inputNoteList || { data: [] },
            occasionList: currentAgent.occasionList,
            sexClassifierList: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SEX_MF,
        });
    }
};
export const performSaveSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    Cache.sessionResetTag({ tag: util.getNoteListRequestRefreshString(Enums.NoteListRequestRefresh.NoteListRequestRefreshEnabled) });
    dispatch(thunkNoteList.performCancel());
    dispatch(actionsNoteList.performSaveSuccess(data));
};
export const performSaveFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsNoteList.performSaveFailure(error));
    dispatch(thunkNoteList.performChangeVisibleNoteListErrorModal(true));
};
export const returnToPreviousNavigationArea = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    switch (reducerState.noteListContextMode) {
        case Enums.NoteListContextMode.NewEditAgent:
        case Enums.NoteListContextMode.Agent: {
            dispatch(thunkAgent.performInputAgentNoteList(reducerState.inputNoteList));
            let state = getState();
            dispatch(thunkAgent.perfromCloseAgentNoteListScreen(reducerState.currentAgent));
            break;
        }
        default: {
            dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)));
        }
    }
    dispatch(actionsNoteList.returnToPreviousNavigationArea());
    dispatch(thunkNoteList.clearState());
};
export const clearState = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.clearState());
};
export const performCloseNoteDeletePanel = (note) => (dispatch) => {
    dispatch(actionsNoteList.performCloseNoteDeletePanel(note));
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to delete note.
 */
export const performNoteDelete = (note) => (dispatch) => {
    dispatch(actionsNoteList.performNoteDelete(note));
};
/*
 * Thunk dispatched by "NoteList" screen. Thunk used to show member list.
 */
export const navigateToNoteListScreen = (noteList, agent, customerManaged, noteListContextMode, noteListAccessLevel) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.navigateToNoteListScreen(noteList, agent, customerManaged, noteListContextMode, noteListAccessLevel));
};
export const CAP = (noteList) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.CAP(noteList));
};
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteList)));
    dispatch(actionsNoteList.navigateBack());
};
export const performRefreshNoteListState = (noteList) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNoteList;
    dispatch(actionsNoteList.performRefreshNoteListState(noteList));
};
//# sourceMappingURL=ThunkNoteList.js.map