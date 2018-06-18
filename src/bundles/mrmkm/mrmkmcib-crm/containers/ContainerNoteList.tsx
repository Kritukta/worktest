/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import * as thunkNote from '../thunk/ThunkNote'
import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewNoteList from '../components/ViewNoteList'
import * as ModelState from "../models/Models"


/*
 * Container "NoteList". Note list screen.
 */
class ContainerNoteList extends React.Component<INoteListProps, any> {

    constructor(props: INoteListProps, context: any) {
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
        }
        //this.props.CAP(noteList)

    }

    render() {

        return (
            <ViewNoteList testID={'test-id-container-NoteList'}

                noteListSaveError={this.props.noteListSaveError}
                noteListSaveInProgress={this.props.noteListSaveInProgress}
                performSave={this.props.performSave}
                performSaveNote={this.props.performSaveNote}
                performEdit={this.props.performEdit}
                performEditNote = {this.props.performEditNote}
                performCancel={this.props.performCancel}
                navigateToViewNotes={this.props.navigateToViewNotes}
                performNoteAdd={this.props.performNoteAdd}
                performNoteDelete={this.props.performNoteDelete}
                navigateToNoteTypePickerScreen={this.props.navigateToNoteTypePickerScreen}
                navigateToCurrentNoteTypePickerScreen={this.props.navigateToCurrentNoteTypePickerScreen}
                navigateBack={this.props.navigateBack}
                navigateBackNote={this.props.navigateBackNote}
                performNoteUpdate={this.props.performNoteUpdate}
                performContainerReset={this.props.performContainerReset}
                performNoteTextUpdate={this.props.performNoteTextUpdate}
                performNoteTypeUpdate={this.props.performNoteTypeUpdate}
                performCloseNoteDeletePanel={this.props.performCloseNoteDeletePanel}
                returnToPreviousNavigationArea = {this.props.returnToPreviousNavigationArea}
                currentAgent={this.props.currentAgent}
                currentCustomerManaged={this.props.currentCustomerManaged}
                inputNoteList={this.props.inputNoteList}
                noteListContextMode = {this.props.noteListContextMode}
                currentNoteIndex={this.props.currentNoteIndex}
                currentNote={this.props.currentNote}
                isEditorMode={this.props.isEditorMode}
                noteListDeletePanel = {this.props.noteListDeletePanel}
                isExpandedMode = {this.props.isExpandedMode}
                navigateToNoteScreen={this.props.navigateToNoteScreen}
                navigateToNoteCreateScreen = {this.props.navigateToNoteCreateScreen}
                performChangeVisibleNoteListErrorModal = {this.props.performChangeVisibleNoteListErrorModal}
                isVisibleNoteListErrorModalWindow = {this.props.isVisibleNoteListErrorModalWindow}
                performOpenNoteDeletePanel = {this.props.performOpenNoteDeletePanel}
                classifierDictionary={this.props.classifierDictionary}>
            </ViewNoteList>
        )
    }
}

export interface IStateProps {

    noteListSaveInProgress: boolean,
    currentAgent: Models.Agent,
    currentCustomerManaged: Models.CustomerManaged,
    inputNoteList: Models.NoteList,
    currentNoteIndex: number | null,
    currentNote: Models.Note,
    isEditorMode: boolean,
    noteListDeletePanel: Models.Note[],
    noteListSaveError: Error | null,
    isExpandedMode: boolean,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    noteListContextMode: Enums.NoteListContextMode,

    isVisibleNoteListErrorModalWindow: boolean,
}

export interface IDispatchProps {

    performSaveNote: ModelsNoteList.PERFORM_SAVE_NOTE,
    performSave: ModelsNoteList.PERFORM_SAVE,
    performEdit: ModelsNoteList.PERFORM_EDIT,
    performEditNote: ModelsNoteList.PERFORM_EDIT_NOTE,
    performCancel: ModelsNoteList.PERFORM_CANCEL,
    navigateToNoteListScreen: ModelsNoteList.NAVIGATE_TO_NOTE_LIST_SCREEN,
    performNoteAdd: ModelsNoteList.PERFORM_NOTE_ADD,
    performNoteDelete: ModelsNoteList.PERFORM_NOTE_DELETE,
    navigateToNoteTypePickerScreen: ModelsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN,
    navigateToCurrentNoteTypePickerScreen:ModelsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    navigateBack: ModelsNoteList.NAVIGATE_BACK,
    navigateBackNote:ModelsNoteList.NAVIGATE_BACK_NOTE,
    performNoteUpdate: ModelsNoteList.PERFORM_NOTE_UPDATE,
    performNoteTextUpdate:ModelsNoteList.PERFORM_NOTE_TEXT_UPDATE,
    performNoteTypeUpdate:ModelsNoteList.PERFORM_NOTE_TYPE_UPDATE,
    performContainerReset: ModelsNoteList.PERFORM_CONTAINER_RESET,
    navigateToViewNotes: ModelsNoteList.NAVIGATE_TO_VIEW_NOTE,
    performCloseNoteDeletePanel: ModelsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL,
    returnToPreviousNavigationArea: ModelsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA,
    navigateToNoteScreen: ModelsNoteList.NAVIGATE_TO_NOTE_SCREEN,
    navigateToNoteCreateScreen: ModelsNoteList.NAVIGATE_TO_NOTE_CREATE_SCREEN,
    performChangeVisibleNoteListErrorModal: ModelsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL,
    performOpenNoteDeletePanel: ModelsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL,
    CAP: ModelsNoteList.CAP,
}

export type INoteListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performSave: () => {
            dispatch(thunkNoteList.performSave())
        },

        performEdit: () => {
            dispatch(thunkNoteList.performEdit())
        },
        performCancel: () => {
            dispatch(thunkNoteList.performCancel())
        },



        performNoteDelete: (note: Models.Note) => {
            dispatch(thunkNoteList.performNoteDelete(note))
        },
        navigateToNoteCreateScreen: () => {
            dispatch(thunkNote.navigateToNoteCreateScreen())
        },
        navigateBack: () => {
            dispatch(thunkNoteList.navigateBack())
        },

        performCloseNoteDeletePanel: (note: Models.Note) => {
            dispatch(thunkNoteList.performCloseNoteDeletePanel(note))
        },

        returnToPreviousNavigationArea: () => {
            dispatch(thunkNoteList.returnToPreviousNavigationArea())
        },
        navigateToNoteScreen: (note: Models.Note) => {
            dispatch(thunkNote.navigateToNoteScreen(note))
        },
        CAP: (noteList: Models.NoteList) => {
            dispatch(thunkNoteList.CAP(noteList))
        },
        performChangeVisibleNoteListErrorModal: ()=> {
            dispatch(thunkNoteList.performChangeVisibleNoteListErrorModal(false))
        },
        performOpenNoteDeletePanel: (note: Models.Note) => {
            dispatch(thunkNoteList.performOpenNoteDeletePanel(note))
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerNoteList)