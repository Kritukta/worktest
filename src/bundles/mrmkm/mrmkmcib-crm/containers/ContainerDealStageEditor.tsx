/*
 * Created by Topchy A.V.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import * as thunkDealStageEditor from '../thunk/ThunkDealStageEditor'
import {Models} from "mrmkmcib-crm"
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor"
import ViewDealStageEditor from '../components/ViewDealStageEditor'
import * as ModelState from "../models/Models"


/*
 * Container "ContainerDealStageEditor". Deal stage editor screen.
 */
class ContainerDealStageEditor extends React.Component<IDealStageEditorProps, any> {

    constructor(props: IDealStageEditorProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }



    render() {
        return (
            <ViewDealStageEditor testID={'test-id-container-DealEditor'}

                                 navigateBack={this.props.navigateBack}
                                 performInputComment={this.props.performInputComment}
                                 performInputStageEndDate={this.props.performInputStageEndDate}
                                 performInputStageTerm={this.props.performInputStageTerm}
                                 performSaveStage={this.props.performSaveStage}

                                 isVisiblePopoverStagesEditorConfirm={this.props.isVisiblePopoverStagesEditorConfirm}
                                 performPopoverStagesEditorConfirmHide={this.props.performPopoverStagesEditorConfirmHide}
                                 performPopoverStagesEditorConfirmShow={this.props.performPopoverStagesEditorConfirmShow}
                                 performStagesEditorConfirmNext={this.props.performStagesEditorConfirmNext}

                                 activePosition={this.props.activePosition}
                                 isRoadMapShowOn={this.props.isRoadMapShowOn}

                                 commentText={this.props.commentText}
                                 inputStageEndDate={this.props.inputStageEndDate}
                                 inputStageTerm={this.props.inputStageTerm}
                                 inputComment={this.props.inputComment}
                                 stage={this.props.stage}
                                 crmStage={this.props.crmStage}

            >
            </ViewDealStageEditor>
        )
    }
}

export interface IStateProps {

    activePosition: number
    isRoadMapShowOn: boolean
    isVisiblePopoverStagesEditorConfirm: boolean
    commentText: string
    inputStageEndDate: Date | null
    inputStageTerm: string
    inputComment: string
    stage: Models.DealStage
    crmStage: Models.DealStage

}

export interface IDispatchProps {


    performPopoverStagesEditorConfirmHide: ModelsDealStageEditor.NO_PARAMS_VOID
    performPopoverStagesEditorConfirmShow: ModelsDealStageEditor.NO_PARAMS_VOID
    performStagesEditorConfirmNext: ModelsDealStageEditor.NO_PARAMS_VOID
    navigateBack: ModelsDealStageEditor.NO_PARAMS_VOID
    performInputComment: ModelsDealStageEditor.PERFORM_INPUT_STRING
    performInputStageEndDate: ModelsDealStageEditor.PERFORM_INPUT_DATE
    performInputStageTerm: ModelsDealStageEditor.PERFORM_INPUT_STRING
    performSaveStage: ModelsDealStageEditor.NO_PARAMS_VOID
}

export type IDealStageEditorProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        commentText:        state.user.mrmkmcibCRM.reducerDealStageEditor.commentText,
        inputStageEndDate:  state.user.mrmkmcibCRM.reducerDealStageEditor.inputStageEndDate,
        inputStageTerm:     state.user.mrmkmcibCRM.reducerDealStageEditor.inputStageTerm,
        inputComment:       state.user.mrmkmcibCRM.reducerDealStageEditor.inputComment,
        stage:              state.user.mrmkmcibCRM.reducerDealStageEditor.stage,
        crmStage:           state.user.mrmkmcibCRM.reducerDealStageEditor.crmStage,
        activePosition:     state.user.mrmkmcibCRM.reducerDealStageEditor.activePosition,
        isRoadMapShowOn:    state.user.mrmkmcibCRM.reducerDealStageEditor.isRoadMapShowOn,
        isVisiblePopoverStagesEditorConfirm:state.user.mrmkmcibCRM.reducerDealStageEditor.isVisiblePopoverStagesEditorConfirm,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateBack: () => {
            dispatch(thunkDealStageEditor.navigateBack())
        },
        performInputComment: (value: string) => {
            dispatch(thunkDealStageEditor.performInputComment(value))
        },
        performInputStageEndDate: (value: Date) => {
            dispatch(thunkDealStageEditor.performInputStageEndDate(value))
        },
        performInputStageTerm: (value: string) => {
            dispatch(thunkDealStageEditor.performInputStageTerm(value))
        },
        performSaveStage: () => {
            dispatch(thunkDealStageEditor.performSaveStage())
        },
        performPopoverStagesEditorConfirmHide: () => {
            dispatch(thunkDealStageEditor.performPopoverStagesEditorConfirmHide())
        },
        performPopoverStagesEditorConfirmShow: () => {
            dispatch(thunkDealStageEditor.performPopoverStagesEditorConfirmShow())
        },
        performStagesEditorConfirmNext: () => {
            dispatch(thunkDealStageEditor.performStagesEditorConfirmNext())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealStageEditor)