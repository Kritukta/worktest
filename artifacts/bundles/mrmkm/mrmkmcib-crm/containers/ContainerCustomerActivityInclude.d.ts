/// <reference types="react-redux" />
import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude";
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude";
import Error from "../models/Error";
export interface IStateProps {
    inputMemberList: Models.MemberList;
    inputSearch: string;
    customerSearchError: string;
    isSearchError: boolean;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    customerActivityIncludeValidationComment: string | null;
    customerActivityIncludeValidationCustomer: string | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    inputCustomerFetching: boolean;
    inputCustomerError: Error | null;
    inputCustomerCachedDate: Date | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityIncludeCreate: boolean;
    activityIncludeCreateFetching: boolean;
    activityIncludeCreateError: Error | null;
    activityIncludeCreateCachedDate: Date | null;
    currentCustomer: Models.Customer;
    currentCustomerManaged: Models.CustomerManaged;
    isVisibleErrorModalWindow: boolean;
}
export interface IDispatchProps {
    navigateToMemberListScreenPage: ModelsCustomerActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE;
    navigateToCustomerPickerScreen: ModelsCustomerActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN;
    performInputSearchManagedOnly: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY;
    performInputSearch: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsCustomerActivityInclude.PERFORM_SEARCH_RESET;
    performSearch: ModelsCustomerActivityInclude.PERFORM_SEARCH;
    performInputCustomer: ModelsCustomerActivityInclude.PERFORM_INPUT_CUSTOMER;
    callGetCustomer: ModelsCustomerActivityInclude.CALL_GET_CUSTOMER;
    performInputComment: ModelsCustomerActivityInclude.PERFORM_INPUT_COMMENT;
    performCancel: ModelsCustomerActivityInclude.PERFORM_CANCEL;
    performSave: ModelsCustomerActivityInclude.PERFORM_SAVE;
    callPostCustomerActivityIncludeCreate: ModelsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE;
    navigateBack: ModelsCustomerActivityInclude.NAVIGATE_BACK;
    performContainerReset: ModelsCustomerActivityInclude.PERFORM_CONTAINER_RESET;
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityInclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW;
    performCancelSearchCustomer: ModelsCustomerActivityInclude.PERFORM_CANCEL_SEARCH_CUSTOMER;
}
export declare type ICustomerActivityIncludeProps = IStateProps & IDispatchProps & {
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
