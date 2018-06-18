import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsNoteList from "../models/ModelsNoteList";
import Error from "../models/Error";
export interface IStateProps {
    noteListSaveInProgress: boolean;
    currentAgent: Models.Agent;
    currentCustomerManaged: Models.CustomerManaged;
    inputNoteList: Models.NoteList;
    currentNoteIndex: number | null;
    currentNote: Models.Note;
    isEditorMode: boolean;
    noteListDeletePanel: Models.Note[];
    noteListSaveError: Error | null;
    isExpandedMode: boolean;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    noteListContextMode: Enums.NoteListContextMode;
    isVisibleNoteListErrorModalWindow: boolean;
}
export interface IDispatchProps {
    performSaveNote: ModelsNoteList.PERFORM_SAVE_NOTE;
    performSave: ModelsNoteList.PERFORM_SAVE;
    performEdit: ModelsNoteList.PERFORM_EDIT;
    performEditNote: ModelsNoteList.PERFORM_EDIT_NOTE;
    performCancel: ModelsNoteList.PERFORM_CANCEL;
    navigateToNoteListScreen: ModelsNoteList.NAVIGATE_TO_NOTE_LIST_SCREEN;
    performNoteAdd: ModelsNoteList.PERFORM_NOTE_ADD;
    performNoteDelete: ModelsNoteList.PERFORM_NOTE_DELETE;
    navigateToNoteTypePickerScreen: ModelsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN;
    navigateToCurrentNoteTypePickerScreen: ModelsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN;
    navigateBack: ModelsNoteList.NAVIGATE_BACK;
    navigateBackNote: ModelsNoteList.NAVIGATE_BACK_NOTE;
    performNoteUpdate: ModelsNoteList.PERFORM_NOTE_UPDATE;
    performNoteTextUpdate: ModelsNoteList.PERFORM_NOTE_TEXT_UPDATE;
    performNoteTypeUpdate: ModelsNoteList.PERFORM_NOTE_TYPE_UPDATE;
    performContainerReset: ModelsNoteList.PERFORM_CONTAINER_RESET;
    navigateToViewNotes: ModelsNoteList.NAVIGATE_TO_VIEW_NOTE;
    performCloseNoteDeletePanel: ModelsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL;
    returnToPreviousNavigationArea: ModelsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA;
    navigateToNoteScreen: ModelsNoteList.NAVIGATE_TO_NOTE_SCREEN;
    navigateToNoteCreateScreen: ModelsNoteList.NAVIGATE_TO_NOTE_CREATE_SCREEN;
    performChangeVisibleNoteListErrorModal: ModelsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL;
    performOpenNoteDeletePanel: ModelsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL;
    CAP: ModelsNoteList.CAP;
}
export declare type INoteListProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
