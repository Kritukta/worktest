/**
 * Created by RomanovAM on 22.11.17.
 */


import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'


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
import * as ModelsNoteList from "../models/ModelsNoteList"
import * as ModelsNote from "../models/ModelsNote"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewNote from '../components/ViewNote'
import * as ModelState from "../models/Models"


/*
 * Container "Note". Note screen.
 */
class ContainerNote extends React.Component<INoteProps, any> {

    constructor(props: INoteProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewNote
                isEditorMode={this.props.isEditorMode}
                performCancel={this.props.performCancel}
                navigateBack={this.props.navigateBack}
                performSave={this.props.performSave}
                performEdit={this.props.performEdit}
                navigateNoteBack={this.props.navigateNoteBack}
                performNoteTextUpdate={this.props.performNoteTextUpdate}
                currentNote={this.props.currentNote}
                navigateToCurrentNoteTypePickerScreen={this.props.navigateToCurrentNoteTypePickerScreen}
                testID={'test-id-container-Note'}>
            </ViewNote>
        )
    }
}

export interface IStateProps {
    isEditorMode: boolean,
    currentNote: Models.Note,
}

export interface IDispatchProps {
    performCancel: ModelsNote.PERFORM_CANCEL,
    navigateBack: ModelsNoteList.NAVIGATE_BACK,
    performSave: ModelsNote.PERFORM_SAVE,
    performEdit: ModelsNote.PERFORM_EDIT,
    navigateNoteBack: ModelsNote.NAVIGATE_NOTE_BACK,
    performNoteTextUpdate: ModelsNote.PERFORM_NOTE_TEXT_UPDATE,
    navigateToCurrentNoteTypePickerScreen: ModelsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,

}

export type INoteProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        isEditorMode: state.user.mrmkmcibCRM.reducerNote.isEditorMode,
        currentNote: state.user.mrmkmcibCRM.reducerNote.currentNote,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        performCancel: () => {
            dispatch(thunkNote.performCancel())
        },
        navigateBack: () => {
            dispatch(thunkNoteList.navigateBack())
        },
        performSave: () => {
            dispatch(thunkNote.performSave())
        },
        performEdit: () => {
            dispatch(thunkNote.performEdit())
        },
        navigateNoteBack: () => {
            dispatch(thunkNote.navigateNoteBack())
        },
        performNoteTextUpdate: (text: string) => {
            dispatch(thunkNote.performNoteTextUpdate(text))
        },
        navigateToCurrentNoteTypePickerScreen: () => {
            dispatch(thunkNote.navigateToCurrentNoteTypePickerScreen())
        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerNote)