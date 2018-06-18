/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude";
import Error from "../models/Error";
export interface IStateProps {
    inputSearch: string;
    customerSearchError: string;
    isSearchError: boolean;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    gszActivityIncludeValidationComment: string | null;
    gszActivityIncludeValidationCustomer: string | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityIncludeCreate: boolean;
    activityIncludeCreateFetching: boolean;
    activityIncludeCreateError: Error | null;
    activityIncludeCreateCachedDate: Date | null;
    isVisibleModalActivityError: boolean;
    currentCustomerManaged: Models.CustomerManaged;
    currentGsz: Models.Gsz;
    memberList: Models.MemberList;
    currentUser: ModelsApp.Employee;
}
export interface IDispatchProps {
    performChangeVisibleErrorModal: ModelsGszActivityInclude.PERFORM_CHANGE_VISIBLE_ERROR_MODAL;
    navigateToCustomerPickerScreen: ModelsGszActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN;
    performInputSearchManagedOnly: ModelsGszActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY;
    performInputSearch: ModelsGszActivityInclude.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsGszActivityInclude.PERFORM_SEARCH_RESET;
    performSearch: ModelsGszActivityInclude.PERFORM_SEARCH;
    performInputCustomer: ModelsGszActivityInclude.PERFORM_INPUT_CUSTOMER;
    performInputComment: ModelsGszActivityInclude.PERFORM_INPUT_COMMENT;
    performCancel: ModelsGszActivityInclude.PERFORM_CANCEL;
    performSave: ModelsGszActivityInclude.PERFORM_SAVE;
    callPostGszActivityIncludeCreate: ModelsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE;
    navigateBack: ModelsGszActivityInclude.NAVIGATE_BACK;
    performContainerReset: ModelsGszActivityInclude.PERFORM_CONTAINER_RESET;
    navigateToMemberListScreen: ModelsGszActivityInclude.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    performCancelSearchCustomer: ModelsGszActivityInclude.PERFORM_CANCEL_SEARCH_CUSTOMER;
}
export declare type IGszActivityIncludeProps = IStateProps & IDispatchProps & {
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
