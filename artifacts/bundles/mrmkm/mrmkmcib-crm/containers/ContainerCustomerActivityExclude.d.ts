/// <reference types="react-redux" />
import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude";
import Error from "../models/Error";
export interface IStateProps {
    inputMemberList: Models.MemberList;
    inputSearch: string;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    customerActivityExcludeValidationComment: string | null;
    customerActivityExcludeValidationCustomer: string | null;
    inputCustomerFetching: boolean;
    inputCustomerError: Error | null;
    inputCustomerCachedDate: Date | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityExcludeCreate: boolean;
    activityExcludeCreateFetching: boolean;
    activityExcludeCreateError: Error | null;
    activityExcludeCreateCachedDate: Date | null;
    searchInProgress: boolean;
    searchError: Error | null;
    isVisibleErrorModalWindow: boolean;
    currentCustomerManaged: Models.CustomerManaged;
    currentCustomer: Models.Customer;
}
export interface IDispatchProps {
    navigateToMemberListScreenPage: ModelsCustomerActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE;
    navigateToCustomerPickerScreen: ModelsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN;
    performInputSearchManagedOnly: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY;
    performInputSearch: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsCustomerActivityExclude.PERFORM_SEARCH_RESET;
    performSearch: ModelsCustomerActivityExclude.PERFORM_SEARCH;
    performInputCustomer: ModelsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER;
    callGetCustomer: ModelsCustomerActivityExclude.CALL_GET_CUSTOMER;
    performInputComment: ModelsCustomerActivityExclude.PERFORM_INPUT_COMMENT;
    performCancel: ModelsCustomerActivityExclude.PERFORM_CANCEL;
    performSave: ModelsCustomerActivityExclude.PERFORM_SAVE;
    callPostCustomerActivityExcludeCreate: ModelsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE;
    navigateBack: ModelsCustomerActivityExclude.NAVIGATE_BACK;
    performContainerReset: ModelsCustomerActivityExclude.PERFORM_CONTAINER_RESET;
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW;
    performCancelSearchCustomer: ModelsCustomerActivityExclude.PERFORM_CANCEL_SEARCH_CUSTOMER;
}
export declare type ICustomerActivityExcludeProps = IStateProps & IDispatchProps & {
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
