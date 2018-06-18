import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../../../Enums';
import * as ModelsSelectClassifierWithSearch from '../../../models/ModelsSelectClassifierWithSearch';
export interface ISelectClassifierWithSearchStateProps {
    searchValue: string | null;
    searchList: ModelsApp.ClassifierList;
    isSearchLineVisible: boolean;
    isFullScreenEnabled: boolean;
    isNotFound: boolean;
    selectedCode: string | null;
    pageName: string | null;
    isSearchEnable: boolean;
    mode: Enums.ClassifierMode;
    navigateBackButtonTitle: string | null;
    warningMessage: string | null;
}
export interface ISelectClassifierWithSearchDispatchProps {
    performSearch: ModelsSelectClassifierWithSearch.PERFORM_SEARCH;
    showSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
    hideSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
    performSelect: ModelsSelectClassifierWithSearch.PERFORM_SELECT;
    navigateBack: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
}
export interface IContainerSelectClassifierWithSearchExternalPros {
    testID: string;
}
export declare type ISearchProps = ISelectClassifierWithSearchStateProps & ISelectClassifierWithSearchDispatchProps & IContainerSelectClassifierWithSearchExternalPros;
declare const _default: React.ComponentClass<IContainerSelectClassifierWithSearchExternalPros>;
export default _default;
