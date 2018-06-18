/**
 * Created by RomanovAM on 22.11.17.
 */

import {handleActions} from 'redux-actions';

import * as actionsNote from '../actions/ActionsNote'
import * as ModelsNote from "../models/ModelsNote"
import Action from "../models/Action"
import {defaultValues} from "../models/Models"

import * as util from '../common/Util'


const reducerNoteList = handleActions<ModelsNote.INoteState>({


    [actionsNote.NAVIGATE_TO_NOTE_SCREEN]: (state: ModelsNote.INoteState, action: Action<actionsNote.NAVIGATE_TO_NOTE_SCREEN>): ModelsNote.INoteState => {
        return {
            ...ModelsNote.initialState.state,
            currentNote: action.payload.note,
        }
    },

    [actionsNote.PERFORM_CANCEL]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_CANCEL>): ModelsNote.INoteState => {
        return {
            ...state,
        }
    },

    [actionsNote.PERFORM_SAVE]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_SAVE>): ModelsNote.INoteState => {
        return {
            ...state,
            isEditorMode: false,
        }
    },

    [actionsNote.PERFORM_UPDATE_CURRENT_NOTE_STATE]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_UPDATE_CURRENT_NOTE_STATE>): ModelsNote.INoteState => {
        return {
            ...state,
            currentNote: {
                ...state.currentNote,
                type: action.payload.type,
                text:action.payload.text,
                id:action.payload.id,
                isChanged: true,
            }
        }
    },
    [actionsNote.PERFORM_EDIT_VIEW]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_EDIT_VIEW>): ModelsNote.INoteState => {
        return {
            ...state,
            inputNoteType:action.payload.note.type || {
                parentId: null,
                name: '',
                value: '',
                code: ''
            },
            inputText:action.payload.note.text,
            isEditorMode: true,
        }
    },
    [actionsNote.NAVIGATE_NOTE_BACK]: (state: ModelsNote.INoteState, action: Action<actionsNote.NAVIGATE_NOTE_BACK>): ModelsNote.INoteState => {
        return {
            ...state,
        }
    },
    [actionsNote.PERFORM_NOTE_TEXT_UPDATE]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_NOTE_TEXT_UPDATE>): ModelsNote.INoteState => {
        return {
            ...state,
            currentNote:{
                ...state.currentNote,
                text: action.payload.text
            },
            inputText: action.payload.text,
        }
    },
    [actionsNote.PERFORM_INPUT_NOTE_TYPE]: (state: ModelsNote.INoteState, action: Action<actionsNote.PERFORM_INPUT_NOTE_TYPE>): ModelsNote.INoteState => {
        return {
            ...state,
            currentNote:{
                ...state.currentNote,
                type: action.payload.noteType
            },
            inputNoteType: action.payload.noteType,
        }
    },
    [actionsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN]: (state: ModelsNote.INoteState, action: Action<actionsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN>): ModelsNote.INoteState => {
        return {
            ...state,
        }
    },
    [actionsNote.NAVIGATE_TO_NOTE_CREATE_SCREEN]: (state: ModelsNote.INoteState, action: Action<actionsNote.NAVIGATE_TO_NOTE_CREATE_SCREEN>): ModelsNote.INoteState => {
        return {
            ...state,
            currentNote: defaultValues.Note,
            inputOccasionType:{
                parentId: null,
                name: '',
                value: '',
                code: ''
            },
            inputText:'',
            isEditorMode: true,
        }
    },



}, ModelsNote.initialState.state)

export default reducerNoteList
