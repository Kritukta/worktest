import React from 'react';
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Models } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import * as ModelsOccasionList from "../models/ModelsOccasionList";
import * as ModelsOccasion from "../models/ModelsOccasion";
export interface IProps {
    performSave: ModelsOccasion.PERFORM_SAVE;
    performCancel: ModelsOccasion.PERFORM_CANCEL;
    navigateToOccasionTypePickerScreen: ModelsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN;
    performInputOccasionType: ModelsOccasion.PERFORM_INPUT_OCCASION_TYPE;
    performInputDate: ModelsOccasion.PERFORM_INPUT_DATE;
    performInputNoYear: ModelsOccasion.PERFORM_INPUT_NO_YEAR;
    performInputComment: ModelsOccasion.PERFORM_INPUT_COMMENT;
    navigateBack: ModelsOccasion.NAVIGATE_BACK;
    performEdit: ModelsOccasionList.PERFORM_EDIT;
    currentOccasion: Models.Occasion;
    inputOccasionType: ModelsApp.Classifier | null;
    inputDate: Date | null;
    inputNoYear: boolean;
    inputComment: string;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    occasionMode: Enums.OccasionMode;
    errorValidationList: number[];
    testID: string;
    occasionListContextMode: Enums.OccasionListContextMode;
}
declare const ViewOccasion: React.StatelessComponent<IProps>;
export default ViewOccasion;
