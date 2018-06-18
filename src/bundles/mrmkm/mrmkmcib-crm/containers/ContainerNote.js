/**
 * Created by RomanovAM on 22.11.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkNoteList from '../thunk/ThunkNoteList';
import * as thunkNote from '../thunk/ThunkNote';
import ViewNote from '../components/ViewNote';
/*
 * Container "Note". Note screen.
 */
class ContainerNote extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewNote, { isEditorMode: this.props.isEditorMode, performCancel: this.props.performCancel, navigateBack: this.props.navigateBack, performSave: this.props.performSave, performEdit: this.props.performEdit, navigateNoteBack: this.props.navigateNoteBack, performNoteTextUpdate: this.props.performNoteTextUpdate, currentNote: this.props.currentNote, navigateToCurrentNoteTypePickerScreen: this.props.navigateToCurrentNoteTypePickerScreen, testID: 'test-id-container-Note' }));
    }
}
function mapStateToProps(state) {
    return {
        isEditorMode: state.user.mrmkmcibCRM.reducerNote.isEditorMode,
        currentNote: state.user.mrmkmcibCRM.reducerNote.currentNote,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performCancel: () => {
            dispatch(thunkNote.performCancel());
        },
        navigateBack: () => {
            dispatch(thunkNoteList.navigateBack());
        },
        performSave: () => {
            dispatch(thunkNote.performSave());
        },
        performEdit: () => {
            dispatch(thunkNote.performEdit());
        },
        navigateNoteBack: () => {
            dispatch(thunkNote.navigateNoteBack());
        },
        performNoteTextUpdate: (text) => {
            dispatch(thunkNote.performNoteTextUpdate(text));
        },
        navigateToCurrentNoteTypePickerScreen: () => {
            dispatch(thunkNote.navigateToCurrentNoteTypePickerScreen());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerNote);
//# sourceMappingURL=ContainerNote.js.map