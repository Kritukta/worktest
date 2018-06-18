export const PERFORM_INIT = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_INIT';
export const PERFORM_SEARCH = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SEARCH';
export const HIDE_SEARCH_LINE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_HIDE_SEARCH_LINE';
export const PERFORM_SELECT = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SELECT';
export const SHOW_SEARCH_LINE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SHOW_SEARCH_LINE';
export const NAVIGATE_BACK = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_BACK';
export const SET_ROW_TEMPLATE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_ROW_TEMPLATE';
export const PERFORM_ENABLESEARCH = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_ENABLESEARCH';
export const NAVIGATE_TO_CLASSIFIER = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_TO_CLASSIFIER';
export const SET_CLASSIFIER_WARNING = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_CLASSIFIER_WARNING';
export const performSearch = (value, classifierSearchList) => ({
    type: PERFORM_SEARCH,
    payload: {
        value: value,
        classifierSearchList: classifierSearchList
    }
});
export const performSelect = (value) => ({
    type: PERFORM_SELECT,
    payload: { value: value }
});
export const showSearchLine = () => ({
    type: SHOW_SEARCH_LINE,
    payload: {}
});
export const hideSearchLine = () => ({
    type: HIDE_SEARCH_LINE,
    payload: {}
});
export const performInit = (list, value, mode, pageName, navigateBackButtonTitle, isFullScreenEnabled) => ({
    type: PERFORM_INIT,
    payload: {
        list: list,
        value: value,
        pageName: pageName,
        mode: mode,
        navigateBackButtonTitle: navigateBackButtonTitle,
        isFullScreenEnabled: isFullScreenEnabled
    }
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const navigateToClassifier = () => ({
    type: NAVIGATE_TO_CLASSIFIER,
    payload: {}
});
export const performEnableSearch = (isSearchEnable) => ({
    type: PERFORM_ENABLESEARCH,
    payload: {
        isSearchEnable: isSearchEnable,
    }
});
export const setClassifierWarning = (warningMessage) => ({
    type: SET_CLASSIFIER_WARNING,
    payload: {
        warningMessage: warningMessage,
    }
});
//# sourceMappingURL=ActionsSelectClassifierWithSearch.js.map