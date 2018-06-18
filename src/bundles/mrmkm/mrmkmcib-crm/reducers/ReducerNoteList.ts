/*
 * Created by Burnaev M.U.
 */

import { handleActions } from "redux-actions";

import * as actionsNoteList from "../actions/ActionsNoteList";
import * as ModelsNoteList from "../models/ModelsNoteList";
import Action from "../models/Action";
import {Models} from 'mrmkmcib-crm';
import * as util from "../common/Util";

const reducerNoteList = handleActions<ModelsNoteList.INoteListState>(
	{
		// Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
		[actionsNoteList.PERFORM_SAVE_NOTE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_SAVE_NOTE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteList: action.payload.noteList
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
		[actionsNoteList.PERFORM_EDIT_NOTE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_EDIT_NOTE>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
		[actionsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListDeletePanel: [...state.noteListDeletePanel, action.payload.note]
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk used to show notes view.
		[actionsNoteList.NAVIGATE_TO_VIEW_NOTE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NAVIGATE_TO_VIEW_NOTE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentNote: action.payload.note
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to add new note.
		[actionsNoteList.PERFORM_NOTE_ADD]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_NOTE_ADD>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentNote: util.defaultNote
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
		[actionsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentNoteIndex: action.payload.index
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
		[actionsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN]: (
			state: ModelsNoteList.INoteListState,
			action: Action<
				actionsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN
			>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
		[actionsNoteList.NAVIGATE_BACK_NOTE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NAVIGATE_BACK_NOTE>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to update note.
		[actionsNoteList.PERFORM_NOTE_UPDATE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_NOTE_UPDATE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteList: util.noteListUpdate(
					state.noteList,
					state.currentNoteIndex,
					action.payload.text,
					action.payload.type
				)
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to update note type.
		[actionsNoteList.PERFORM_NOTE_TYPE_UPDATE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_NOTE_TYPE_UPDATE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentNote: {
					...state.currentNote,
					type: action.payload.type
				}
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk dispatched to reset container state to default values.
		[actionsNoteList.PERFORM_CONTAINER_RESET]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_CONTAINER_RESET>
		): ModelsNoteList.INoteListState => {
			return {
				...ModelsNoteList.initialState.state
			};
		},
		//******************************************************************************************
		// Thunk dispatched by "NoteList" screen. Thunk used to enter editor mode.
		[actionsNoteList.PERFORM_EDIT]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_EDIT>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				isEditorMode: true,
				inputNoteList: action.payload.noteList
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to cancel changes.
		[actionsNoteList.PERFORM_CANCEL]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_CANCEL>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				isEditorMode: false,
				inputNoteList: state.noteList,
				isModified: false
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
		[actionsNoteList.PERFORM_SAVE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_SAVE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				isModified: false,
				isEditorMode: false
			};
		},
		[actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL]: (
			state: ModelsNoteList.INoteListState,
			action: Action<
				actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL
			>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				isVisibleNoteListErrorModalWindow: action.payload.status
			};
		},

		[actionsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},
		[actionsNoteList.CLEAR_STATE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CLEAR_STATE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteList: {
					data: []
				}
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
		[actionsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL>
		): ModelsNoteList.INoteListState => {
			return {
                ...state,
                noteListDeletePanel:  state.noteListDeletePanel.filter(
					(note: Models.Note): boolean =>
						note.id !== (action.payload.note && action.payload.note.id)
				),
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk used to show member list.
		[actionsNoteList.NAVIGATE_TO_NOTE_LIST_SCREEN]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NAVIGATE_TO_NOTE_LIST_SCREEN>
		): ModelsNoteList.INoteListState => {
			return {
				...ModelsNoteList.initialState.state,
				currentAgent: action.payload.agent,
				currentCustomerManaged: action.payload.customerManaged,
				noteList: action.payload.agent.noteList,
				noteListContextMode: action.payload.noteListContextMode,
				noteListAccessLevel: action.payload.noteListAccessLevel,
				operationUuid: util.getRandomOperationUuid(),
				inputNoteList: action.payload.agent.noteList
			};
		},

		[actionsNoteList.NOTE_CAP]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NOTE_CAP>
		): ModelsNoteList.INoteListState => {
			return {
				...ModelsNoteList.initialState.state,
				noteList: action.payload.noteList,
				inputNoteList: action.payload.noteList
			};
		},
		// Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
		[actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL]: (
			state: ModelsNoteList.INoteListState,
			action: Action<
				actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL
			>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				isVisibleNoteListErrorModalWindow: action.payload.status
			};
		},
		[actionsNoteList.PERFORM_NOTE_DELETE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_NOTE_DELETE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListDeletePanel:  state.noteListDeletePanel.filter(
					(note: Models.Note): boolean =>
						note.id !== (action.payload.note && action.payload.note.id)
				),
				isModified: true,
				inputNoteList: {data: state.inputNoteList.data.filter(
					(note: Models.Note): boolean =>
						note.id !== (action.payload.note && action.payload.note.id)
				)},
			};
		},

		// Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
		[actionsNoteList.NAVIGATE_BACK]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.NAVIGATE_BACK>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},
		[actionsNoteList.PERFORM_REFRESH_NOTE_LIST_STATE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_REFRESH_NOTE_LIST_STATE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				inputNoteList: action.payload.noteList,
				isEditorMode: true,
				isModified: true
			};
		},

		// Thunk dispatched by "NoteList" screen. Fetch put request.
		[actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_REFRESH_NOTE_LIST_STATE>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},
		// Action dispatched on network thunk chain "callPutAgentNoteListUpdate" started. Thunk dispatched by "NoteList" screen. Fetch put request.
		[actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListSaveInProgress: true,
				noteListSaveError: null
			};
		},
		// Action dispatched on fetch succeeded in thunk "callPutAgentNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
		[actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentAgent: { ...state.currentAgent, ...action.payload.response },
				noteListSaveInProgress: false,
				isEditorMode: false,
				isModified: false,
				noteListSaveError: null
			};
		},
		// Action dispatched on fetch failure in thunk "callPutCustomerNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
		[actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListSaveInProgress: false,
				noteListSaveError: action.payload.error
			};
		},
		// Action dispatched on success in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
		[actionsNoteList.PERFORM_SAVE_SUCCESS]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_SAVE_SUCCESS>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListSave: action.payload.data,
				noteListSaveInProgress: false,
				noteListSaveError: null
			};
		},
		// Action dispatched on failure in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
		[actionsNoteList.PERFORM_SAVE_FAILURE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.PERFORM_SAVE_FAILURE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				noteListSaveInProgress: false,
				noteListSaveError: action.payload.error
			};
		},
		// Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
		[actionsNoteList.CALL_GET_AGENT]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_GET_AGENT>
		): ModelsNoteList.INoteListState => {
			return {
				...state
			};
		},
		// Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
		[actionsNoteList.CALL_GET_AGENT_REQUEST]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_GET_AGENT_REQUEST>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentAgentFetching: true,
				currentAgentError: null
			};
		},
		// Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
		[actionsNoteList.CALL_GET_AGENT_SUCCESS]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_GET_AGENT_SUCCESS>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentAgentFetching: false,
				currentAgentError: null,
				currentAgent: action.payload.response.data,
				noteList: action.payload.response.data.noteList,
				oldNoteList: action.payload.response.data.noteList
			};
		},
		// Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
		[actionsNoteList.CALL_GET_AGENT_FAILURE]: (
			state: ModelsNoteList.INoteListState,
			action: Action<actionsNoteList.CALL_GET_AGENT_FAILURE>
		): ModelsNoteList.INoteListState => {
			return {
				...state,
				currentAgentFetching: false,
				currentAgentError: action.payload.error
			};
		}
	},
	ModelsNoteList.initialState.state
);

export default reducerNoteList;
