/**
 * Created by RomanovAM on 22.11.17.
 */
/// <reference types="react-redux" />
import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsNoteList from "../models/ModelsNoteList";
import * as ModelsNote from "../models/ModelsNote";
export interface IStateProps {
    isEditorMode: boolean;
    currentNote: Models.Note;
}
export interface IDispatchProps {
    performCancel: ModelsNote.PERFORM_CANCEL;
    navigateBack: ModelsNoteList.NAVIGATE_BACK;
    performSave: ModelsNote.PERFORM_SAVE;
    performEdit: ModelsNote.PERFORM_EDIT;
    navigateNoteBack: ModelsNote.NAVIGATE_NOTE_BACK;
    performNoteTextUpdate: ModelsNote.PERFORM_NOTE_TEXT_UPDATE;
    navigateToCurrentNoteTypePickerScreen: ModelsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN;
}
export declare type INoteProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
