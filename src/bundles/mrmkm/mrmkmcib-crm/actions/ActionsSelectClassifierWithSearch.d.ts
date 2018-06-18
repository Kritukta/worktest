import { Models as ModelsApp } from "mrmkmcib-app";
import Action from "../models/Action";
import { Enums } from '../Enums';
export declare const PERFORM_INIT = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_INIT";
export declare const PERFORM_SEARCH = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SEARCH";
export declare const HIDE_SEARCH_LINE = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_HIDE_SEARCH_LINE";
export declare const PERFORM_SELECT = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SELECT";
export declare const SHOW_SEARCH_LINE = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SHOW_SEARCH_LINE";
export declare const NAVIGATE_BACK = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_BACK";
export declare const SET_ROW_TEMPLATE = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_ROW_TEMPLATE";
export declare const PERFORM_ENABLESEARCH = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_ENABLESEARCH";
export declare const NAVIGATE_TO_CLASSIFIER = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_TO_CLASSIFIER";
export declare const SET_CLASSIFIER_WARNING = "CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_CLASSIFIER_WARNING";
/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export declare type PERFORM_SEARCH = {
    value: string;
    classifierSearchList: ModelsApp.ClassifierList;
};
export declare const performSearch: (value: string, classifierSearchList: ModelsApp.ClassifierList) => Action<PERFORM_SEARCH>;
/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export declare type PERFORM_SELECT = {
    value: ModelsApp.Classifier;
};
export declare const performSelect: (value: ModelsApp.Classifier) => Action<PERFORM_SELECT>;
/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export declare type SHOW_SEARCH_LINE = {};
export declare const showSearchLine: () => Action<SHOW_SEARCH_LINE>;
/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export declare type HIDE_SEARCH_LINE = {};
export declare const hideSearchLine: () => Action<HIDE_SEARCH_LINE>;
/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export declare type PERFORM_INIT = {
    list: ModelsApp.ClassifierList;
    value: string | null;
    mode: Enums.ClassifierMode;
    pageName: string | null;
    navigateBackButtonTitle: string | null;
    isFullScreenEnabled: boolean;
};
export declare const performInit: (list: ModelsApp.ClassifierList, value: string | null, mode: Enums.ClassifierMode, pageName: string | null, navigateBackButtonTitle: string | null, isFullScreenEnabled: boolean) => Action<PERFORM_INIT>;
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
export declare type NAVIGATE_TO_CLASSIFIER = {};
export declare const navigateToClassifier: () => Action<NAVIGATE_TO_CLASSIFIER>;
export declare type PERFORM_ENABLESEARCH = {
    isSearchEnable: boolean;
};
export declare const performEnableSearch: (isSearchEnable: boolean) => Action<PERFORM_ENABLESEARCH>;
export declare type SET_CLASSIFIER_WARNING = {
    warningMessage: string | null;
};
export declare const setClassifierWarning: (warningMessage: string | null) => Action<SET_CLASSIFIER_WARNING>;
