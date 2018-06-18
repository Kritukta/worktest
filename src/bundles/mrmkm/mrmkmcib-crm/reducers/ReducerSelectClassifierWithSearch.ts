/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsClassifierSelector from '../actions/ActionsSelectClassifierWithSearch'
import {defaultValues} from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import * as ModelsSelectClassifierWithSearch from "../models/ModelsSelectClassifierWithSearch"
import Action from "../models/Action"

import * as util from '../common/Util'

const reducerSelectClassifierWithSearch = handleActions<ModelsSelectClassifierWithSearch.IClassifierSelectorState>({

    // Action dispatched on search in thunk "performInit". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_INIT]: (state: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
                                               action: Action<actionsClassifierSelector.PERFORM_INIT>):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            classifierList:  action.payload.list,
            classifierSearchList: action.payload.list,
            selectedCode: action.payload.value,
            pageName: action.payload.pageName,
            mode: action.payload.mode,
            navigateBackButtonTitle: action.payload.navigateBackButtonTitle,
            isFullScreenEnabled: action.payload.isFullScreenEnabled

        }
    ),

    // Action dispatched on search in thunk "performSearch". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_SEARCH]: (state: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
                                                 action: Action<actionsClassifierSelector.PERFORM_SEARCH>):
                                        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            classifierSearchList: action.payload.classifierSearchList,
            searchValue: action.payload.value,
            isNotFound: !!(action.payload.value && Array.isArray(action.payload.classifierSearchList.data) && action.payload.classifierSearchList.data.length < 1)
        }
    ),

    // Action dispatched on search in thunk "performSelect". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.PERFORM_SELECT]: (state: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
                                                 action: Action<actionsClassifierSelector.PERFORM_SELECT>):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            selectedCode: action.payload.value.value,
        }
    ),

    // Action dispatched on search in thunk "performHideSearchLine". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.HIDE_SEARCH_LINE]: ( state: ModelsSelectClassifierWithSearch.IClassifierSelectorState):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            isSearchLineVisible: false,
            searchValue: null,
            classifierSearchList: state.classifierList,
            isNotFound: false,
        }
    ),

    // Action dispatched on search in thunk "performShowSearchLine". Internal thunk used in "ClassifierSelector" container.
    [actionsClassifierSelector.SHOW_SEARCH_LINE]: ( state: ModelsSelectClassifierWithSearch.IClassifierSelectorState):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            isSearchLineVisible: true,
        }
    ),

    [actionsClassifierSelector.NAVIGATE_BACK]: ( state: ModelsSelectClassifierWithSearch.IClassifierSelectorState):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
        }
    ),

    [actionsClassifierSelector.PERFORM_ENABLESEARCH]: ( state: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
                                                        action: Action<actionsClassifierSelector.PERFORM_ENABLESEARCH>):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            isSearchEnable: action.payload.isSearchEnable,
        }
    ),

    [actionsClassifierSelector.NAVIGATE_TO_CLASSIFIER]: ():
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...ModelsSelectClassifierWithSearch.initialState.state
        }
    ),

    [actionsClassifierSelector.SET_CLASSIFIER_WARNING]: ( state: ModelsSelectClassifierWithSearch.IClassifierSelectorState,
                                                        action: Action<actionsClassifierSelector.SET_CLASSIFIER_WARNING>):
        ModelsSelectClassifierWithSearch.IClassifierSelectorState => (
        {
            ...state,
            warningMessage: action.payload.warningMessage,
        }
    ),

}, ModelsSelectClassifierWithSearch.initialState.state)

export default reducerSelectClassifierWithSearch
