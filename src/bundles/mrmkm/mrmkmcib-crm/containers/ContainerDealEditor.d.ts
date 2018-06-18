import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsCampaignPicker from "../models/ModelsCampaignPicker";
import * as ModelsDealEditor from "../models/ModelsDealEditor";
import * as ModelsParentDealPicker from "../models/ModelsParentDealPicker";
import Error from "../models/Error";
export interface IStateProps {
    currentCustomerManaged: Models.CustomerManaged;
    currentDeal: Models.Deal;
    currentEditorStep: Enums.DealEditorStep;
    isEditorMode: boolean;
    isRowBlocked: boolean;
    inputDescription: string;
    inputProduct: ModelsApp.Classifier;
    inputApplication: ModelsApp.Classifier;
    salesMethodList: ModelsApp.ClassifierList;
    inputSalesMethod: ModelsApp.Classifier;
    inputCurrency: ModelsApp.Classifier | null;
    inputSumString: string | null;
    inputEquivalentSumString: string | null;
    inputDealDate: Date | null;
    activityList: ModelsScheduler.ActivityList;
    currentActivity: ModelsScheduler.Activity;
    dealActivityAppend: boolean;
    dealActivityAppendFetching: boolean;
    dealActivityAppendError: Error | null;
    dealActivityAppendCachedDate: Date | null;
    dealActivityExclude: boolean;
    dealActivityExcludeFetching: boolean;
    dealActivityExcludeError: Error | null;
    dealActivityExcludeCachedDate: Date | null;
    dealEditorMode: Enums.DealEditorMode | null;
    dealSaveInProgress: boolean;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    dealSaveError: Error | null;
    validationError: Error | null;
    dealCreated: boolean;
    isEquivalentRateMode: boolean;
    isValid: boolean;
    inputEquivalentConversionRateString: string | null;
    isProductMethodEnabled: boolean;
    inputTeam: Models.MemberList;
    tapActivityDeleteId: string | Enums.SwipeableRowEmptyId;
    isNavigationButtonDisabled: boolean;
    isOwner: boolean;
    isAdditionalFieldsAvailable: boolean;
    inputDealType: ModelsApp.Classifier;
    isChancePopoverOpened: boolean;
    inputChance: string | null;
    inputTransferCommission: string | null;
    inputStaffCount: string | null;
    isApplicationPopoverOpened: boolean;
    isSalesMethodPopoverOpened: boolean;
    isAttractionChannelPopoverOpened: boolean;
    inputAttractionChannel: ModelsApp.Classifier;
    applicationKkClassifierList: ModelsApp.ClassifierList;
    inputAgentList: Models.AgentList;
}
export interface IDispatchProps {
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR;
    navigateToMemberListScreen: ModelsDealEditor.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    navigateBack: ModelsDealEditor.NAVIGATE_BACK;
    navigateBackEditor: ModelsDealEditor.NAVIGATE_BACK_EDITOR;
    navigateToProductPickerScreen: ModelsDealEditor.NAVIGATE_TO_PRODUCT_PICKER_SCREEN;
    navigateToSalesMethodPickerScreen: ModelsDealEditor.NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN;
    navigateToCurrencyPickerScreen: ModelsDealEditor.NAVIGATE_TO_CURRENCY_PICKER_SCREEN;
    navigateToActivityListScreen: ModelsDealEditor.NAVIGATE_TO_ACTIVITY_LIST_SCREEN;
    performCancel: ModelsDealEditor.PERFORM_CANCEL;
    performNext: ModelsDealEditor.PERFORM_NEXT;
    performSave: ModelsDealEditor.PERFORM_SAVE;
    performInputDescription: ModelsDealEditor.PERFORM_INPUT_DESCRIPTION;
    performInputProduct: ModelsDealEditor.PERFORM_INPUT_PRODUCT;
    performInputSalesMethod: ModelsDealEditor.PERFORM_INPUT_SALES_METHOD;
    performInputCurrency: ModelsDealEditor.PERFORM_INPUT_CURRENCY;
    performInputSumString: ModelsDealEditor.PERFORM_INPUT_SUM_STRING;
    performInputEquivalentSumString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING;
    performInputDealDate: ModelsDealEditor.PERFORM_INPUT_DEAL_DATE;
    performActivityListAppend: ModelsDealEditor.PERFORM_ACTIVITY_LIST_APPEND;
    callPutDealActivityAppend: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND;
    performActivityListExclude: ModelsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE;
    callPutDealActivityExclude: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE;
    performScopeClearAndRefresh: ModelsDealEditor.PERFORM_SCOPE_CLEAR_AND_REFRESH;
    performContainerReset: ModelsDealEditor.PERFORM_CONTAINER_RESET;
    performTapActivityDelete: ModelsDealEditor.PERFORM_TAP_ACTIVITY_DELETE;
    performCancelSaveError: ModelsDealEditor.PERFORM_CANCEL_SAVE_ERROR;
    performInputEquivalentConversionRateString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING;
    navigateToDealTypePickerScreen: ModelsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN;
    performShowAdditionalFields: ModelsDealEditor.PERFORM_SHOW_ADDITIONAL_FIELDS;
    navigateToCampaignPickerScreen: ModelsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN;
    navigateToParentDealPickerScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN;
    navigateToAgentListScreen: ModelsDealEditor.NAVIGATE_TO_AGENT_PICKER_SCREEN;
    showChancePopover: ModelsDealEditor.SHOW_CHANCE_POPOVER;
    performSelectChance: ModelsDealEditor.PERFORM_SELECT_CHANCE;
    showApplicationPopover: ModelsDealEditor.SHOW_APPLICATION_POPOVER;
    performSelectApplication: ModelsDealEditor.PERFORM_SELECT_APPLICATION;
    showSalesMethodPopover: ModelsDealEditor.SHOW_SALES_METHOD_POPOVER;
    performInputTransferCommission: ModelsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION;
    performInputStaffCount: ModelsDealEditor.PERFORM_INPUT_STAFF_COUNT;
    showAttractionChannelPopover: ModelsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER;
    performSelectAttractionChannel: ModelsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL;
    performSelectSalesMethod: ModelsDealEditor.PERFORM_SELECT_SALES_METHOD;
}
export declare type IDealEditorProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
