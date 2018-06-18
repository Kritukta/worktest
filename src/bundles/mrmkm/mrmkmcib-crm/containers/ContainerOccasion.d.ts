import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsOccasionList from "../models/ModelsOccasionList";
import * as ModelsOccasion from "../models/ModelsOccasion";
export interface IStateProps {
    currentOccasion: Models.Occasion;
    errorValidationList: number[];
    inputOccasionType: ModelsApp.Classifier | null;
    inputDate: Date | null;
    inputNoYear: boolean;
    inputComment: string;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    occasionMode: Enums.OccasionMode;
    occasionListContextMode: Enums.OccasionListContextMode;
}
export interface IDispatchProps {
    performSave: ModelsOccasion.PERFORM_SAVE;
    performCancel: ModelsOccasion.PERFORM_CANCEL;
    navigateToOccasionTypePickerScreen: ModelsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN;
    performInputOccasionType: ModelsOccasion.PERFORM_INPUT_OCCASION_TYPE;
    performInputDate: ModelsOccasion.PERFORM_INPUT_DATE;
    performInputNoYear: ModelsOccasion.PERFORM_INPUT_NO_YEAR;
    performInputComment: ModelsOccasion.PERFORM_INPUT_COMMENT;
    performContainerReset: ModelsOccasion.PERFORM_CONTAINER_RESET;
    performEdit: ModelsOccasionList.PERFORM_EDIT;
    navigateBack: ModelsOccasionList.NAVIGATE_BACK;
}
export declare type IOccasionProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
