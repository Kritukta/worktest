/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor";
import Error from "../models/Error";
export interface IStateProps {
    currentCustomerManaged: Models.CustomerManaged;
    isVisibleModalCustomerEditor: boolean;
    currentEditorStep: Enums.CustomerEditorStep;
    isEditorMode: boolean;
    operationUuid: string;
    inputCountry: ModelsApp.Classifier;
    inputSubject: string;
    inputRegion: string;
    inputCity: string;
    inputSettlement: string;
    inputStreet: string;
    inputHouse: string;
    inputBuilding: string;
    inputBlock: string;
    inputFlat: string;
    customerSave: boolean;
    customerSaveInProgress: boolean;
    customerSaveError: Error | null;
    customerUpdate: boolean;
    customerUpdateFetching: boolean;
    customerUpdateError: Error | null;
    customerUpdateCachedDate: Date | null;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    inputCountryValidationError: string | null;
    inputSubjectValidationError: string | null;
    inputRegionValidationError: string | null;
    inputCityValidationError: string | null;
    inputSettlementValidationError: string | null;
    inputStreetValidationError: string | null;
    inputHouseValidationError: string | null;
    inputBuildingValidationError: string | null;
    inputBlockValidationError: string | null;
    inputFlatValidationError: string | null;
}
export interface IDispatchProps {
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW;
    performCancel: ModelsCustomerEditor.PERFORM_CANCEL;
    performNext: ModelsCustomerEditor.PERFORM_NEXT;
    performSave: ModelsCustomerEditor.PERFORM_SAVE;
    callPutCustomerUpdate: ModelsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE;
    navigateToCountryPickerScreen: ModelsCustomerEditor.NAVIGATE_TO_COUNTRY_PICKER_SCREEN;
    performInputCountry: ModelsCustomerEditor.PERFORM_INPUT_COUNTRY;
    performInputSubject: ModelsCustomerEditor.PERFORM_INPUT_SUBJECT;
    performInputRegion: ModelsCustomerEditor.PERFORM_INPUT_REGION;
    performInputCity: ModelsCustomerEditor.PERFORM_INPUT_CITY;
    performInputSettlement: ModelsCustomerEditor.PERFORM_INPUT_SETTLEMENT;
    performInputStreet: ModelsCustomerEditor.PERFORM_INPUT_STREET;
    performInputHouse: ModelsCustomerEditor.PERFORM_INPUT_HOUSE;
    performInputBuilding: ModelsCustomerEditor.PERFORM_INPUT_BUILDING;
    performInputBlock: ModelsCustomerEditor.PERFORM_INPUT_BLOCK;
    performInputFlat: ModelsCustomerEditor.PERFORM_INPUT_FLAT;
    navigateToCustomerActivityIncludeScreen: ModelsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN;
    navigateToCustomerActivityExcludeScreen: ModelsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN;
    closeCustomerActivityPanel: ModelsCustomerEditor.CLOSE_CUSTOMER_ACTIVITY_PANEL;
    navigateCustomerEditorBack: ModelsCustomerEditor.NAVIGATE_CUSTOMER_EDITOR_BACK;
    performContainerReset: ModelsCustomerEditor.PERFORM_CONTAINER_RESET;
}
export declare type ICustomerEditorProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
