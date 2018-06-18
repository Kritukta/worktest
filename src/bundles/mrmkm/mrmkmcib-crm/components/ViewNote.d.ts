/**
 * Created by RomanovAM on 22.11.17.
 */
import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsNoteList from "../models/ModelsNoteList";
import * as ModelsNote from "../models/ModelsNote";
export interface IProps {
    isEditorMode: boolean;
    performCancel: ModelsNote.PERFORM_CANCEL;
    navigateBack: ModelsNoteList.NAVIGATE_BACK;
    performSave: ModelsNote.PERFORM_SAVE;
    performEdit: ModelsNote.PERFORM_EDIT;
    navigateNoteBack: ModelsNote.NAVIGATE_NOTE_BACK;
    currentNote: Models.Note;
    performNoteTextUpdate: ModelsNote.PERFORM_NOTE_TEXT_UPDATE;
    navigateToCurrentNoteTypePickerScreen: ModelsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN;
    testID: string;
}
declare const ViewNote: React.StatelessComponent<IProps>;
export default ViewNote;
