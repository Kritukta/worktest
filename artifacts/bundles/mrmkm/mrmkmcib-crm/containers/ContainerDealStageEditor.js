/*
 * Created by Topchy A.V.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkDealStageEditor from '../thunk/ThunkDealStageEditor';
import ViewDealStageEditor from '../components/ViewDealStageEditor';
/*
 * Container "ContainerDealStageEditor". Deal stage editor screen.
 */
class ContainerDealStageEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewDealStageEditor, { testID: 'test-id-container-DealEditor', navigateBack: this.props.navigateBack, performInputComment: this.props.performInputComment, performInputStageEndDate: this.props.performInputStageEndDate, performInputStageTerm: this.props.performInputStageTerm, performSaveStage: this.props.performSaveStage, isVisiblePopoverStagesEditorConfirm: this.props.isVisiblePopoverStagesEditorConfirm, performPopoverStagesEditorConfirmHide: this.props.performPopoverStagesEditorConfirmHide, performPopoverStagesEditorConfirmShow: this.props.performPopoverStagesEditorConfirmShow, performStagesEditorConfirmNext: this.props.performStagesEditorConfirmNext, activePosition: this.props.activePosition, isRoadMapShowOn: this.props.isRoadMapShowOn, commentText: this.props.commentText, inputStageEndDate: this.props.inputStageEndDate, inputStageTerm: this.props.inputStageTerm, inputComment: this.props.inputComment, stage: this.props.stage, crmStage: this.props.crmStage }));
    }
}
function mapStateToProps(state) {
    return {
        commentText: state.user.mrmkmcibCRM.reducerDealStageEditor.commentText,
        inputStageEndDate: state.user.mrmkmcibCRM.reducerDealStageEditor.inputStageEndDate,
        inputStageTerm: state.user.mrmkmcibCRM.reducerDealStageEditor.inputStageTerm,
        inputComment: state.user.mrmkmcibCRM.reducerDealStageEditor.inputComment,
        stage: state.user.mrmkmcibCRM.reducerDealStageEditor.stage,
        crmStage: state.user.mrmkmcibCRM.reducerDealStageEditor.crmStage,
        activePosition: state.user.mrmkmcibCRM.reducerDealStageEditor.activePosition,
        isRoadMapShowOn: state.user.mrmkmcibCRM.reducerDealStageEditor.isRoadMapShowOn,
        isVisiblePopoverStagesEditorConfirm: state.user.mrmkmcibCRM.reducerDealStageEditor.isVisiblePopoverStagesEditorConfirm,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateBack: () => {
            dispatch(thunkDealStageEditor.navigateBack());
        },
        performInputComment: (value) => {
            dispatch(thunkDealStageEditor.performInputComment(value));
        },
        performInputStageEndDate: (value) => {
            dispatch(thunkDealStageEditor.performInputStageEndDate(value));
        },
        performInputStageTerm: (value) => {
            dispatch(thunkDealStageEditor.performInputStageTerm(value));
        },
        performSaveStage: () => {
            dispatch(thunkDealStageEditor.performSaveStage());
        },
        performPopoverStagesEditorConfirmHide: () => {
            dispatch(thunkDealStageEditor.performPopoverStagesEditorConfirmHide());
        },
        performPopoverStagesEditorConfirmShow: () => {
            dispatch(thunkDealStageEditor.performPopoverStagesEditorConfirmShow());
        },
        performStagesEditorConfirmNext: () => {
            dispatch(thunkDealStageEditor.performStagesEditorConfirmNext());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealStageEditor);
//# sourceMappingURL=ContainerDealStageEditor.js.map