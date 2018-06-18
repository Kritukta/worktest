/**
 * Models for AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
export const defaultState = {
    get state() {
        return {
            mode: Enums.ClassifierMode.Default,
            classifierSearchList: defaultValues.ClassifierList,
            searchValue: '',
            classifierList: defaultValues.ClassifierList,
            selectedCode: null,
            isSearchLineVisible: false,
            pageName: null,
            isSearchEnable: false,
            isFullScreenEnabled: false,
            isNotFound: false,
            navigateBackButtonTitle: null,
            classifierWarning: null,
            warningMessage: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsSelectClassifierWithSearch.js.map