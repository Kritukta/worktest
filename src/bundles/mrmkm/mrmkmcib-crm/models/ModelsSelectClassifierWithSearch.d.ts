/**
 * Models for AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export declare const defaultState: {
    readonly state: IClassifierSelectorState;
};
export interface IClassifierSelectorState {
    mode: Enums.ClassifierMode;
    classifierSearchList: ModelsApp.ClassifierList;
    searchValue: string | null;
    classifierList: ModelsApp.ClassifierList;
    selectedCode: string | null;
    navigateBackButtonTitle: string | null;
    isSearchLineVisible: boolean;
    pageName: string | null;
    isSearchEnable: boolean;
    isFullScreenEnabled: boolean;
    isNotFound: boolean;
    classifierWarning: Error | null;
    warningMessage: string | null;
}
export interface ISwapContext {
    currentDeal: Models.Deal | null;
    currentCustomerManaged: Models.CustomerManaged | null;
}
export declare const initialState: {
    readonly state: IClassifierSelectorState;
};
export interface NO_PARAMS_VOID {
    (): void;
}
export interface PERFORM_SELECT {
    (value: ModelsApp.Classifier): void;
}
export interface PERFORM_INIT {
    (value: ModelsApp.ClassifierList): void;
}
export interface CLASSIFIER_LINE_RENDER {
    (value: ModelsApp.Classifier, mode: Enums.ClassifierMode): string;
}
export interface PERFORM_SEARCH {
    (value: string): void;
}
