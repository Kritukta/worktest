/// <reference types="react" />
import { Enums } from '../../Enums';
import { Models as ModelsApp } from "mrmkmcib-app";
import * as ModelsSelectClassifierWithSearch from '../../models/ModelsSelectClassifierWithSearch';
export interface IProps {
    selectedCode: string | null;
    testID: string;
    searchValue: string | null;
    searchList: ModelsApp.ClassifierList;
    isSearchLineVisible: boolean;
    isSearchEnable: boolean;
    isNotFound: boolean;
    isFullScreenEnabled: boolean;
    mode: Enums.ClassifierMode;
    performSelect: (value: ModelsApp.Classifier) => void;
    navigateBackButtonTitle: string | null;
    warningMessage: string | null;
    performSearch: ModelsSelectClassifierWithSearch.PERFORM_SEARCH;
    showSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
    hideSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
    pageName: string | null;
    navigateBack: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID;
}
export declare const ViewSelectClassifierWithSearch: (props: IProps) => JSX.Element;
