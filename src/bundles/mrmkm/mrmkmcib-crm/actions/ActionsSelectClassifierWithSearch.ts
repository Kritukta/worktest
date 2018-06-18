

import {Models as ModelsApp} from "mrmkmcib-app"
import * as ModelsSelectClassifierWithSearch from "../models/ModelsSelectClassifierWithSearch"
import Action from "../models/Action"
import {Enums} from '../Enums'
import Error from "../models/Error"

export const PERFORM_INIT = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_INIT'
export const PERFORM_SEARCH = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SEARCH'
export const HIDE_SEARCH_LINE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_HIDE_SEARCH_LINE'
export const PERFORM_SELECT = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_SELECT'
export const SHOW_SEARCH_LINE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SHOW_SEARCH_LINE'
export const NAVIGATE_BACK = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_BACK'
export const SET_ROW_TEMPLATE = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_ROW_TEMPLATE'
export const PERFORM_ENABLESEARCH = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_PERFORM_ENABLESEARCH'
export const NAVIGATE_TO_CLASSIFIER = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_NAVIGATE_TO_CLASSIFIER'
export const SET_CLASSIFIER_WARNING = 'CLASSIFIER_SELECT_CLASSIFIER_WITH_SEARCH_CONTAINER_SET_CLASSIFIER_WARNING'

/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export type PERFORM_SEARCH = {value: string, classifierSearchList: ModelsApp.ClassifierList}
export const performSearch = (value: string, classifierSearchList: ModelsApp.ClassifierList): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {
        value: value,
        classifierSearchList: classifierSearchList
    }
})

/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export type PERFORM_SELECT = {value: ModelsApp.Classifier}
export const performSelect = (value: ModelsApp.Classifier): Action<PERFORM_SELECT> => ({
    type: PERFORM_SELECT,
    payload: {value: value}
})

/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export type SHOW_SEARCH_LINE = {}
export const showSearchLine = (): Action<SHOW_SEARCH_LINE> => ({
    type: SHOW_SEARCH_LINE,
    payload: {}
})

/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export type HIDE_SEARCH_LINE = {}
export const hideSearchLine = (): Action<HIDE_SEARCH_LINE> => ({
    type: HIDE_SEARCH_LINE,
    payload: {}
})

/**
 * Thunk dispatched by "ClassifierSelector" screen. Thunk used to send Email to agent address.
 *
 */
export type PERFORM_INIT = { list: ModelsApp.ClassifierList, value: string | null, mode: Enums.ClassifierMode, pageName: string | null, navigateBackButtonTitle: string | null, isFullScreenEnabled: boolean }
export const performInit = ( list: ModelsApp.ClassifierList, value: string | null, mode: Enums.ClassifierMode, pageName: string | null, navigateBackButtonTitle: string | null, isFullScreenEnabled: boolean ): Action<PERFORM_INIT> => ({
    type: PERFORM_INIT,
    payload: {
        list: list,
        value: value,
        pageName: pageName,
        mode: mode,
        navigateBackButtonTitle: navigateBackButtonTitle,
        isFullScreenEnabled:isFullScreenEnabled
    }
})

export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})


export type NAVIGATE_TO_CLASSIFIER = {}
export const navigateToClassifier = (): Action<NAVIGATE_TO_CLASSIFIER> => ({
    type: NAVIGATE_TO_CLASSIFIER,
    payload: {}
})

export type PERFORM_ENABLESEARCH = {isSearchEnable: boolean}
export const performEnableSearch = (isSearchEnable: boolean): Action<PERFORM_ENABLESEARCH> => ({
    type: PERFORM_ENABLESEARCH,
    payload: {
        isSearchEnable: isSearchEnable,
    }
})

export type SET_CLASSIFIER_WARNING = {warningMessage: string | null}
export const setClassifierWarning = (warningMessage: string | null): Action<SET_CLASSIFIER_WARNING> => ({
    type: SET_CLASSIFIER_WARNING,
    payload: {
        warningMessage: warningMessage,
    }
})

