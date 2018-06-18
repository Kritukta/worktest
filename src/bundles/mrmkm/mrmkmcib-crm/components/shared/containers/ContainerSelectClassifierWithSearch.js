import React from 'react';
import { connect } from 'react-redux';
import * as thunkSelectClassifierWithSearch from '../../../thunk/ThunkSelectClassifierWithSearch';
import { ViewSelectClassifierWithSearch } from '../ViewSelectClassifierWithSearch';
const defaultLineRenderer = (e) => e.value;
/*
 * Container "SelectClassifierWithSearch". SelectClassifier screen.
 */
class ContainerSelectClassifierWithSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewSelectClassifierWithSearch, { testID: 'test-id-ContainerSelectClassifierWithSearch', searchList: this.props.searchList, searchValue: this.props.searchValue, selectedCode: this.props.selectedCode, isSearchLineVisible: this.props.isSearchLineVisible, navigateBackButtonTitle: this.props.navigateBackButtonTitle, performSelect: this.props.performSelect, performSearch: this.props.performSearch, showSearchLine: this.props.showSearchLine, hideSearchLine: this.props.hideSearchLine, mode: this.props.mode, pageName: this.props.pageName, navigateBack: this.props.navigateBack, isSearchEnable: this.props.isSearchEnable, isFullScreenEnabled: this.props.isFullScreenEnabled, isNotFound: this.props.isNotFound, warningMessage: this.props.warningMessage }));
    }
}
const mapStateToProps = (state) => ({
    searchList: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.classifierSearchList,
    searchValue: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.searchValue || '',
    isSearchLineVisible: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isSearchLineVisible,
    selectedCode: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.selectedCode,
    pageName: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.pageName,
    isSearchEnable: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isSearchEnable,
    isFullScreenEnabled: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isFullScreenEnabled,
    isNotFound: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isNotFound,
    mode: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.mode,
    navigateBackButtonTitle: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.navigateBackButtonTitle,
    warningMessage: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.warningMessage,
});
const mapDispatchToProps = (dispatch) => ({
    performSearch: (value) => {
        dispatch(thunkSelectClassifierWithSearch.performSearch(value));
    },
    showSearchLine: () => {
        dispatch(thunkSelectClassifierWithSearch.showSearchLine());
    },
    hideSearchLine: () => {
        dispatch(thunkSelectClassifierWithSearch.hideSearchLine());
    },
    navigateBack: () => {
        dispatch(thunkSelectClassifierWithSearch.navigateBack());
    },
    performSelect: (value) => {
        dispatch(thunkSelectClassifierWithSearch.performSelect(value));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContainerSelectClassifierWithSearch);
//# sourceMappingURL=ContainerSelectClassifierWithSearch.js.map