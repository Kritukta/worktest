/**
 * Created by RomanovAM on 22.11.17.
 */
import { Enums } from '../Enums';
import * as Utils from '../common/Util';
import * as actionsNote from '../actions/ActionsNote';
import * as thunkNoteList from '../thunk/ThunkNoteList';
import * as thunkClassifier from '../thunk/ThunkSelectClassifierWithSearch';
import { SplitPanelActions } from 'ufs-mobile-platform';
/*
 * Thunk dispatched by "Note" screen. Thunk used to show note details.
 */
export const navigateToNoteScreen = (note) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationNoteList.NoteScreen, Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteList)));
    dispatch(actionsNote.navigateToNoteScreen(note));
};
export const navigateToNoteCreateScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationNoteList.NoteScreen, Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteList)));
    dispatch(thunkNoteList.performEdit());
    dispatch(actionsNote.navigateToNoteCreateScreen());
};
/*
 * Thunk dispatched by "Note" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(actionsNote.performCancel());
    dispatch(thunkNoteList.navigateBack());
};
export const performSave = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerNote;
    const reducerNoteListState = state.user.mrmkmcibCRM.reducerNoteList;
    //dispatch(thunkNote.performUpdateCurrentNoteState())
    const newNoteList = reducerState.currentNote.id ? reducerNoteListState.noteList.data.map((note) => reducerState.currentNote.id === note.id
        ? Object.assign({}, reducerState.currentNote, { type: reducerState.inputNoteType, text: reducerState.inputText }) : note) : [...reducerNoteListState.noteList.data,
        { id: Utils.getRandomOperationUuid(), modId: null, type: reducerState.inputNoteType, text: reducerState.inputText }];
    dispatch(thunkNoteList.performRefreshNoteListState({ data: newNoteList }));
    dispatch(thunkNoteList.navigateBack());
    dispatch(actionsNote.performSave());
};
export const performUpdateCurrentNoteState = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    let id = Utils.getNoteId(reducerState.currentNote.id);
    dispatch(actionsNote.performUpdateCurrentNoteState(reducerState.inputNoteType, reducerState.inputText, id));
};
export const performEdit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(actionsNote.performEdit(reducerState.currentNote));
};
export const navigateNoteBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.NoteListScreen)));
    dispatch(actionsNote.navigateNoteBack());
};
export const performNoteTextUpdate = (text) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(actionsNote.performNoteTextUpdate(text));
};
export const navigateToCurrentNoteTypePickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(thunkClassifier.navigateToClassifier(classifierDictionary.SBRF_NOTE_TYPE, reducerState.inputNoteType.code, Enums.ClassifierMode.Agent_Note));
    dispatch(actionsNote.navigateToCurrentNoteTypePickerScreen());
};
export const performInputNoteType = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerNote;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteScreen)));
    dispatch(actionsNote.performInputNoteType(value));
};
//# sourceMappingURL=ThunkNote.js.map