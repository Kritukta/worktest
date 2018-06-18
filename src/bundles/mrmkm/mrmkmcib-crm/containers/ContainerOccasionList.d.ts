import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsOccasionList from "../models/ModelsOccasionList";
import Error from "../models/Error";
export interface IStateProps {
    inputOccasionList: Models.OccasionList;
    occasionListMode: Enums.OccasionListMode;
    occasionListContextMode: Enums.OccasionListContextMode;
    occasionListAccessLevel: Enums.OccasionListAccessLevel;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    occasionListWithMenuOption: string[];
    isVisibleOccasionListErrorModalWindow: boolean;
    occasionListUpdateInProgress: boolean;
    occasionListUpdateError: Error | null;
}
export interface IDispatchProps {
    performInit: ModelsOccasionList.PERFORM_INIT;
    performSave: ModelsOccasionList.PERFORM_SAVE;
    performEdit: ModelsOccasionList.PERFORM_EDIT;
    performCancel: ModelsOccasionList.PERFORM_CANCEL;
    navigateBack: ModelsOccasionList.NAVIGATE_BACK;
    performOpenOccasionScreen: ModelsOccasionList.PERFORM_OPEN_OCCASION_SCREEN;
    performDeleteOccasion: ModelsOccasionList.PERFORM_DELETE_OCCASION;
    performAddOccasionWithMenuOption: ModelsOccasionList.PERFORM_ADD_OCCASION_WITH_MENU_OPTION;
    performDeleteOccasionWithMenuOption: ModelsOccasionList.PERFORM_DELETE_OCCASION_WITH_MENU_OPTION;
    performChangeDisplayOccasionListErrorModalWindow: ModelsOccasionList.PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW;
    performCallOccasionListUpdate: ModelsOccasionList.PERFORM_CALL_OCCASION_LIST_UPDATE;
}
export declare type IOccasionListProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
