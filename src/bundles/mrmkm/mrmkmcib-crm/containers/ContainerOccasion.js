/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkOccasion from '../thunk/ThunkOccasion';
import ViewOccasion from '../components/ViewOccasion';
/*
 * Container "Occasion". Occasion screen.
 */
class ContainerOccasion extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewOccasion, { testID: 'test-id-container-Occasion', performSave: this.props.performSave, performCancel: this.props.performCancel, navigateToOccasionTypePickerScreen: this.props.navigateToOccasionTypePickerScreen, performInputOccasionType: this.props.performInputOccasionType, performInputDate: this.props.performInputDate, performInputNoYear: this.props.performInputNoYear, performInputComment: this.props.performInputComment, performEdit: this.props.performEdit, currentOccasion: this.props.currentOccasion, inputOccasionType: this.props.inputOccasionType, inputDate: this.props.inputDate, inputNoYear: this.props.inputNoYear, inputComment: this.props.inputComment, classifierDictionary: this.props.classifierDictionary, occasionMode: this.props.occasionMode, navigateBack: this.props.navigateBack, errorValidationList: this.props.errorValidationList, occasionListContextMode: this.props.occasionListContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        currentOccasion: state.user.mrmkmcibCRM.reducerOccasion.currentOccasion,
        occasionMode: state.user.mrmkmcibCRM.reducerOccasion.occasionMode,
        inputOccasionType: state.user.mrmkmcibCRM.reducerOccasion.inputOccasionType,
        inputDate: state.user.mrmkmcibCRM.reducerOccasion.inputDate,
        inputNoYear: state.user.mrmkmcibCRM.reducerOccasion.inputNoYear,
        inputComment: state.user.mrmkmcibCRM.reducerOccasion.inputComment,
        errorValidationList: state.user.mrmkmcibCRM.reducerOccasion.errorValidationList,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        occasionListContextMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListContextMode,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performSave: () => {
            dispatch(thunkOccasion.performSave());
        },
        performCancel: () => {
            dispatch(thunkOccasion.performCancel());
        },
        navigateToOccasionTypePickerScreen: () => {
            dispatch(thunkOccasion.navigateToOccasionTypePickerScreen());
        },
        performInputOccasionType: (value) => {
            dispatch(thunkOccasion.performInputOccasionType(value));
        },
        performInputDate: (value) => {
            dispatch(thunkOccasion.performInputDate(value));
        },
        performInputNoYear: (value) => {
            dispatch(thunkOccasion.performInputNoYear(value));
        },
        performInputComment: (value) => {
            dispatch(thunkOccasion.performInputComment(value));
        },
        navigateBack: () => {
            dispatch(thunkOccasion.navigateBack());
        },
        performEdit: () => {
            dispatch(thunkOccasion.performEdit());
        },
        performChangeDisplayOccasionErrorModalWindow: (value) => {
            dispatch(thunkOccasion.performChangeDisplayOccasionErrorModalWindow(value));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerOccasion);
//# sourceMappingURL=ContainerOccasion.js.map