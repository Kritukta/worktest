/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude";
import Error from "../models/Error";
export interface IStateProps {
    inputSearch: string;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    gszActivityExcludeValidationComment: string | null;
    gszActivityExcludeValidationCustomer: string | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityExcludeCreate: boolean;
    activityExcludeCreateFetching: boolean;
    activityExcludeCreateError: Error | null;
    activityExcludeCreateCachedDate: Date | null;
    searchError: Error | null;
    searchInProgress: boolean;
    currentCustomerManaged: Models.CustomerManaged;
    currentGsz: Models.Gsz;
    memberList: Models.MemberList;
    isVisibleModalActivityError: boolean;
    currentUser: ModelsApp.Employee;
}
export interface IDispatchProps {
    navigateToCustomerPickerScreen: ModelsGszActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN;
    performInputSearchManagedOnly: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY;
    performInputSearch: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsGszActivityExclude.PERFORM_SEARCH_RESET;
    performSearch: ModelsGszActivityExclude.PERFORM_SEARCH;
    performInputCustomer: ModelsGszActivityExclude.PERFORM_INPUT_CUSTOMER;
    performInputComment: ModelsGszActivityExclude.PERFORM_INPUT_COMMENT;
    performCancel: ModelsGszActivityExclude.PERFORM_CANCEL;
    performSave: ModelsGszActivityExclude.PERFORM_SAVE;
    callPostGszActivityExcludeCreate: ModelsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE;
    navigateBack: ModelsGszActivityExclude.NAVIGATE_BACK;
    performContainerReset: ModelsGszActivityExclude.PERFORM_CONTAINER_RESET;
    navigateToMemberListScreen: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    performCancelSearchCustomer: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    performChangeVisibleErrorModal: ModelsGszActivityExclude.PERFORM_CHAGNE_VISIBLE_ERROR_MODAL;
}
export declare type IGszActivityExcludeProps = IStateProps & IDispatchProps & {
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
