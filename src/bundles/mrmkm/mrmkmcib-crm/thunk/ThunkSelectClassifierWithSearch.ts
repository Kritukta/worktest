
import * as ModelState from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import * as ModelsSelectClassifierWithSearch from "../models/ModelsSelectClassifierWithSearch"
import * as actionsClassifier from '../actions/ActionsSelectClassifierWithSearch'
import * as thunkSelectClassifierWithSearch from '../thunk/ThunkSelectClassifierWithSearch'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealStages from '../thunk/ThunkDealStages'
import * as thunkNote from '../thunk/ThunkNote'
import * as util from '../common/Util'
import {SplitPanelActions} from 'ufs-mobile-platform'
import Error from "../models/Error"

export const DEAL_TYPE_CLASSIFIER_PAGE_NAME = 'Выбор типа сделки'
export const PRODUCT_CLASSIFIER_PAGE_NAME = 'Выбор продукта'
export const SALES_METHOD_CLASSIFIER_PAGE_NAME = 'Выбор метода'
export const CURRENCY_CLASSIFIER_PAGE_NAME = 'Выбор валюты'
export const AGENT_NOTE_PAGE_NAME = 'Выбор типа заметки'
export const NAVIGATE_BACK_BUTTON_TITLE_NEW_DEAL = 'Новая сделка'
export const NAVIGATE_BACK_BUTTON_TITLE_DEAL_STAGE = 'Изменение стадии'
export const FULL_SCREEN_ENABLED = true
export const FULL_SCREEN_DISABLED = false

/*
 * Thunk dispatched by "ClassifierSelectorWithSearchContainer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performSearch = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch

    dispatch(actionsClassifier.performSearch(value, util.filterList( reducerState.classifierList, value, util.getRowTemplate, reducerState.mode)))
}

/*
 * Thunk dispatched by "ClassifierSelectorWithSearchContainer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const showSearchLine = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsClassifier.showSearchLine())
}

/*
 * Thunk dispatched by "ClassifierSelectorWithSearchContainer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const hideSearchLine = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsClassifier.hideSearchLine())
}

/*
 * Thunk dispatched by "ClassifierSelectorWithSearchContainer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performInit = (list: ModelsApp.ClassifierList, value: string | null, mode: Enums.ClassifierMode, pageName: string | null, navigateBackButtonTitle: string | null, isFullScreenEnabled: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsClassifier.performInit(list, value, mode, pageName, navigateBackButtonTitle,isFullScreenEnabled))
}

export const performEnableSearch = (isSearchEnable: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsClassifier.performEnableSearch(isSearchEnable))
}

/******************/

/*
 * Thunk dispatched by "ClassifierSelectorWithSearchContainer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performSelect = (value: ModelsApp.Classifier,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch
    switch (reducerState.mode) {
        case Enums.ClassifierMode.DealEditor_Product: {
            dispatch(thunkDealEditor.performInputProduct(value))
            break
        }
        case Enums.ClassifierMode.DealEditor_SalesMethod: {
            dispatch(thunkDealEditor.performInputSalesMethod(value))
            break
        }
        case Enums.ClassifierMode.DealEditor_Currency: {
            dispatch(thunkDealEditor.performInputCurrency(value))
            break
        }
        case Enums.ClassifierMode.DealStage_Currency: {
            dispatch(thunkDealStages.performInputCurrency(value))
            break
        }
        case Enums.ClassifierMode.Agent_Note: {
            dispatch(thunkNote.performInputNoteType(value))
            break
        }
        case Enums.ClassifierMode.DealEditor_DealType: {
            dispatch(thunkDealEditor.performInputDealType(value))
            break
        }
        default: {
            break
        }
    }
    dispatch(thunkSelectClassifierWithSearch.hideSearchLine())
    dispatch(actionsClassifier.performSelect(value))
}

export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch

    switch (reducerState.mode) {
        case Enums.ClassifierMode.DealEditor_Product: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))
            break
        }
        case Enums.ClassifierMode.DealEditor_SalesMethod: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))
            break
        }
        case Enums.ClassifierMode.DealEditor_Currency: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))
            break
        }
        case Enums.ClassifierMode.DealStage_Currency: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)))
            break
        }
        case Enums.ClassifierMode.Agent_Note: {
            dispatch(SplitPanelActions.popContent(util.getNavigationNoteList(Enums.NavigationNoteList.NoteScreen)))
            break
        }
        case Enums.ClassifierMode.DealEditor_DealType: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))
            break
        }
        default: {
            break
        }
    }

    dispatch(thunkSelectClassifierWithSearch.hideSearchLine())
    dispatch(actionsClassifier.navigateBack())
}

export const navigateToClassifier = (classifierList: ModelsApp.ClassifierList, initialValue: string, mode: Enums.ClassifierMode, warningMessage?: string | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsClassifier.navigateToClassifier())
    dispatch(thunkSelectClassifierWithSearch.setClassifierWarning(warningMessage || null))
/*
    Конфигурируем классификатор
 */
    switch (mode) {
        case Enums.ClassifierMode.DealEditor_Product: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, PRODUCT_CLASSIFIER_PAGE_NAME, NAVIGATE_BACK_BUTTON_TITLE_NEW_DEAL,FULL_SCREEN_DISABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(true)) // нужен ли поиск (по умолчанию false)
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealEditor.AppCRM_DealEditor_ClassifierProduct,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)
                )
            )
            break
        }
        case Enums.ClassifierMode.DealEditor_SalesMethod: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, SALES_METHOD_CLASSIFIER_PAGE_NAME, NAVIGATE_BACK_BUTTON_TITLE_NEW_DEAL,FULL_SCREEN_DISABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(false)) // нужен ли поиск (по умолчанию false)
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealEditor.AppCRM_DealEditor_ClassifierSalesMethod,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)
                )
            )
            break
        }
        case Enums.ClassifierMode.DealEditor_Currency: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, CURRENCY_CLASSIFIER_PAGE_NAME, NAVIGATE_BACK_BUTTON_TITLE_NEW_DEAL,FULL_SCREEN_DISABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(true)) // нужен ли поиск (по умолчанию false)
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealEditor.AppCRM_DealEditor_ClassifierCurrency,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)
                )
            )
            break
        }
        case Enums.ClassifierMode.DealStage_Currency: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, CURRENCY_CLASSIFIER_PAGE_NAME, NAVIGATE_BACK_BUTTON_TITLE_DEAL_STAGE,FULL_SCREEN_ENABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(true)) // нужен ли поиск (по умолчанию false)
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealStage.Currency,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
                )
            )
            break
        }
        case Enums.ClassifierMode.Agent_Note: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, AGENT_NOTE_PAGE_NAME, null,FULL_SCREEN_DISABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(false)) // нужен ли поиск (по умолчанию false)
            dispatch (
                SplitPanelActions.pushContent (
                    Enums.NavigationNoteScreen.Type,
                    util.getNavigationNoteList(Enums.NavigationNoteList.NoteScreen)
                )
            )
            break
        }
        case Enums.ClassifierMode.DealEditor_DealType: {
            dispatch(thunkSelectClassifierWithSearch.performInit(classifierList, initialValue, mode, DEAL_TYPE_CLASSIFIER_PAGE_NAME, NAVIGATE_BACK_BUTTON_TITLE_NEW_DEAL,FULL_SCREEN_DISABLED))// начальные значения
            dispatch(thunkSelectClassifierWithSearch.performEnableSearch(false)) // нужен ли поиск (по умолчанию false)
            dispatch (
                SplitPanelActions.pushContent (
                    Enums.NavigationContentDealEditor.AppCRM_DealEditor_ClassifierDealType,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)
                )
            )
            break
        }

        default: break
    }


}

export const setClassifierWarning = (warningMessage: string | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsClassifier.setClassifierWarning(warningMessage))
}
