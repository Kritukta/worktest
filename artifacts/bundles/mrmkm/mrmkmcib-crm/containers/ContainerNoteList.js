/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkNoteList from '../thunk/ThunkNoteList';
import * as thunkNote from '../thunk/ThunkNote';
import ViewNoteList from '../components/ViewNoteList';
/*
 * Container "NoteList". Note list screen.
 */
class ContainerNoteList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        /* START - Container NoteList did mount actions. */
        const noteList = {
            data: [
                {
                    id: '1-1',
                    text: 'Это первая заметка',
                    type: {
                        parentId: '1-2',
                        name: 'Тип первой заметки',
                        value: 'Тип первой заметки',
                        code: 'Тип первой заметки'
                    },
                    modId: null,
                    isChanged: false,
                },
                {
                    id: '2-1',
                    text: 'Это вторая заметка',
                    type: {
                        parentId: '2-2',
                        name: 'Тип второй заметки',
                        value: 'Тип второй заметки',
                        code: 'Тип второй заметки'
                    },
                    modId: null,
                    isChanged: false,
                },
                {
                    id: '3-1',
                    text: 'Это третья заметка',
                    type: {
                        parentId: '3-2',
                        name: 'Тип третьей заметки',
                        value: 'Тип третьей заметки',
                        code: 'Тип третьей заметки'
                    },
                    modId: null,
                    isChanged: false,
                },
            ]
        };
        //this.props.CAP(noteList)
    }
    render() {
        return (React.createElement(ViewNoteList, { testID: 'test-id-container-NoteList', noteListSaveError: this.props.noteListSaveError, noteListSaveInProgress: this.props.noteListSaveInProgress, performSave: this.props.performSave, performSaveNote: this.props.performSaveNote, performEdit: this.props.performEdit, performEditNote: this.props.performEditNote, performCancel: this.props.performCancel, navigateToViewNotes: this.props.navigateToViewNotes, performNoteAdd: this.props.performNoteAdd, performNoteDelete: this.props.performNoteDelete, navigateToNoteTypePickerScreen: this.props.navigateToNoteTypePickerScreen, navigateToCurrentNoteTypePickerScreen: this.props.navigateToCurrentNoteTypePickerScreen, navigateBack: this.props.navigateBack, navigateBackNote: this.props.navigateBackNote, performNoteUpdate: this.props.performNoteUpdate, performContainerReset: this.props.performContainerReset, performNoteTextUpdate: this.props.performNoteTextUpdate, performNoteTypeUpdate: this.props.performNoteTypeUpdate, performCloseNoteDeletePanel: this.props.performCloseNoteDeletePanel, returnToPreviousNavigationArea: this.props.returnToPreviousNavigationArea, currentAgent: this.props.currentAgent, currentCustomerManaged: this.props.currentCustomerManaged, inputNoteList: this.props.inputNoteList, noteListContextMode: this.props.noteListContextMode, currentNoteIndex: this.props.currentNoteIndex, currentNote: this.props.currentNote, isEditorMode: this.props.isEditorMode, noteListDeletePanel: this.props.noteListDeletePanel, isExpandedMode: this.props.isExpandedMode, navigateToNoteScreen: this.props.navigateToNoteScreen, navigateToNoteCreateScreen: this.props.navigateToNoteCreateScreen, performChangeVisibleNoteListErrorModal: this.props.performChangeVisibleNoteListErrorModal, isVisibleNoteListErrorModalWindow: this.props.isVisibleNoteListErrorModalWindow, performOpenNoteDeletePanel: this.props.performOpenNoteDeletePanel, classifierDictionary: this.props.classifierDictionary }));
    }
}
function mapStateToProps(state) {
    return {
        noteListSaveInProgress: state.user.mrmkmcibCRM.reducerNoteList.noteListSaveInProgress,
        currentAgent: state.user.mrmkmcibCRM.reducerNoteList.currentAgent,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerNoteList.currentCustomerManaged,
        inputNoteList: state.user.mrmkmcibCRM.reducerNoteList.inputNoteList,
        currentNoteIndex: state.user.mrmkmcibCRM.reducerNoteList.currentNoteIndex,
        currentNote: state.user.mrmkmcibCRM.reducerNoteList.currentNote,
        isEditorMode: state.user.mrmkmcibCRM.reducerNoteList.isEditorMode,
        noteListDeletePanel: state.user.mrmkmcibCRM.reducerNoteList.noteListDeletePanel,
        noteListSaveError: state.user.mrmkmcibCRM.reducerNoteList.noteListSaveError,
        isExpandedMode: state.user.mrmkmcibCRM.reducerNoteList.isExpandedMode,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        noteListContextMode: state.user.mrmkmcibCRM.reducerNoteList.noteListContextMode,
        isVisibleNoteListErrorModalWindow: state.user.mrmkmcibCRM.reducerNoteList.isVisibleNoteListErrorModalWindow,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performSave: () => {
            dispatch(thunkNoteList.performSave());
        },
        performEdit: () => {
            dispatch(thunkNoteList.performEdit());
        },
        performCancel: () => {
            dispatch(thunkNoteList.performCancel());
        },
        performNoteDelete: (note) => {
            dispatch(thunkNoteList.performNoteDelete(note));
        },
        navigateToNoteCreateScreen: () => {
            dispatch(thunkNote.navigateToNoteCreateScreen());
        },
        navigateBack: () => {
            dispatch(thunkNoteList.navigateBack());
        },
        performCloseNoteDeletePanel: (note) => {
            dispatch(thunkNoteList.performCloseNoteDeletePanel(note));
        },
        returnToPreviousNavigationArea: () => {
            dispatch(thunkNoteList.returnToPreviousNavigationArea());
        },
        navigateToNoteScreen: (note) => {
            dispatch(thunkNote.navigateToNoteScreen(note));
        },
        CAP: (noteList) => {
            dispatch(thunkNoteList.CAP(noteList));
        },
        performChangeVisibleNoteListErrorModal: () => {
            dispatch(thunkNoteList.performChangeVisibleNoteListErrorModal(false));
        },
        performOpenNoteDeletePanel: (note) => {
            dispatch(thunkNoteList.performOpenNoteDeletePanel(note));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerNoteList);
//# sourceMappingURL=ContainerNoteList.js.map