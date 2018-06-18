/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkOccasionList from '../thunk/ThunkOccasionList';
import ViewOccasionList from '../components/ViewOccasionList';
/*
 * Container "OccasionList". Occasion list screen.
 */
class ContainerOccasionList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performInit();
    }
    render() {
        return (React.createElement(ViewOccasionList, { testID: 'test-id-container-OccasionList', performInit: this.props.performInit, performSave: this.props.performSave, performEdit: this.props.performEdit, performCancel: this.props.performCancel, navigateBack: this.props.navigateBack, performDeleteOccasion: this.props.performDeleteOccasion, performOpenOccasionScreen: this.props.performOpenOccasionScreen, performAddOccasionWithMenuOption: this.props.performAddOccasionWithMenuOption, performDeleteOccasionWithMenuOption: this.props.performDeleteOccasionWithMenuOption, performCallOccasionListUpdate: this.props.performCallOccasionListUpdate, performChangeDisplayOccasionListErrorModalWindow: this.props.performChangeDisplayOccasionListErrorModalWindow, inputOccasionList: this.props.inputOccasionList, classifierDictionary: this.props.classifierDictionary, occasionListWithMenuOption: this.props.occasionListWithMenuOption, occasionListMode: this.props.occasionListMode, occasionListContextMode: this.props.occasionListContextMode, occasionListAccessLevel: this.props.occasionListAccessLevel, isVisibleOccasionListErrorModalWindow: this.props.isVisibleOccasionListErrorModalWindow, occasionListUpdateInProgress: this.props.occasionListUpdateInProgress, occasionListUpdateError: this.props.occasionListUpdateError }));
    }
}
function mapStateToProps(state) {
    return {
        inputOccasionList: state.user.mrmkmcibCRM.reducerOccasionList.inputOccasionList,
        occasionListMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListMode,
        occasionListAccessLevel: state.user.mrmkmcibCRM.reducerOccasionList.occasionListAccessLevel,
        occasionListContextMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListContextMode,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        occasionListWithMenuOption: state.user.mrmkmcibCRM.reducerOccasionList.occasionListWithMenuOption,
        isVisibleOccasionListErrorModalWindow: state.user.mrmkmcibCRM.reducerOccasionList.isVisibleOccasionListErrorModalWindow,
        occasionListUpdateInProgress: state.user.mrmkmcibCRM.reducerOccasionList.occasionListUpdateInProgress,
        occasionListUpdateError: state.user.mrmkmcibCRM.reducerOccasionList.occasionListUpdateError,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performInit: () => {
            dispatch(thunkOccasionList.performInit());
        },
        performSave: () => {
            dispatch(thunkOccasionList.performSave());
        },
        performEdit: () => {
            dispatch(thunkOccasionList.performEdit());
        },
        performCancel: () => {
            dispatch(thunkOccasionList.performCancel());
        },
        navigateBack: () => {
            dispatch(thunkOccasionList.navigateBack());
        },
        performOpenOccasionScreen: (occasion, occasionMode) => {
            dispatch(thunkOccasionList.performOpenOccasionScreen(occasion, occasionMode));
        },
        performAddOccasionWithMenuOption: (occasion) => {
            dispatch(thunkOccasionList.performAddOccasionWithMenuOption(occasion));
        },
        performDeleteOccasionWithMenuOption: (occasion) => {
            dispatch(thunkOccasionList.performDeleteOccasionWithMenuOption(occasion));
        },
        performDeleteOccasion: (occasion) => {
            dispatch(thunkOccasionList.performDeleteOccasion(occasion));
        },
        performCallOccasionListUpdate: () => {
            dispatch(thunkOccasionList.performCallOccasionListUpdate());
        },
        performChangeDisplayOccasionListErrorModalWindow: (value) => {
            dispatch(thunkOccasionList.performChangeDisplayOccasionListErrorModalWindow(value));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerOccasionList);
//# sourceMappingURL=ContainerOccasionList.js.map