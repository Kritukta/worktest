/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsClassifierSelector from '../actions/ActionsSelectClassifierWithSearch';
import * as ModelsSelectClassifierWithSearch from "../models/ModelsSelectClassifierWithSearch";
const reducerSelectClassifierWithSearch = handleActions({
    // Action dispatched on search in thunk "performInit". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_INIT]: (state, action) => (Object.assign({}, state, { classifierList: action.payload.list, classifierSearchList: action.payload.list, selectedCode: action.payload.value, pageName: action.payload.pageName, mode: action.payload.mode, navigateBackButtonTitle: action.payload.navigateBackButtonTitle, isFullScreenEnabled: action.payload.isFullScreenEnabled })),
    // Action dispatched on search in thunk "performSearch". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_SEARCH]: (state, action) => (Object.assign({}, state, { classifierSearchList: action.payload.classifierSearchList, searchValue: action.payload.value, isNotFound: !!(action.payload.value && Array.isArray(action.payload.classifierSearchList.data) && action.payload.classifierSearchList.data.length < 1) })),
    // Action dispatched on search in thunk "performSelect". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_SELECT]: (state, action) => (Object.assign({}, state, { selectedCode: action.payload.value.value })),
    // Action dispatched on search in thunk "performHideSearchLine". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.HIDE_SEARCH_LINE]: (state) => (Object.assign({}, state, { isSearchLineVisible: false, searchValue: null, classifierSearchList: state.classifierList, isNotFound: false })),
    // Action dispatched on search in thunk "performShowSearchLine". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.SHOW_SEARCH_LINE]: (state) => (Object.assign({}, state, { isSearchLineVisible: true })),
    [actionsClassifierSelector.NAVIGATE_BACK]: (state) => (Object.assign({}, state)),
    [actionsClassifierSelector.PERFORM_ENABLESEARCH]: (state, action) => (Object.assign({}, state, { isSearchEnable: action.payload.isSearchEnable })),
    [actionsClassifierSelector.NAVIGATE_TO_CLASSIFIER]: () => (Object.assign({}, ModelsSelectClassifierWithSearch.initialState.state)),
    [actionsClassifierSelector.SET_CLASSIFIER_WARNING]: (state, action) => (Object.assign({}, state, { warningMessage: action.payload.warningMessage })),
}, ModelsSelectClassifierWithSearch.initialState.state);
export default reducerSelectClassifierWithSearch;
//# sourceMappingURL=ReducerSelectClassifierWithSearch.js.map