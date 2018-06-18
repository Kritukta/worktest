/**
 * Models for DealEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


// TODO Describe models used in DealEditor actions and thunks.


const defaultState = {
    get state(): IDealEditorState {
        return {

            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "DealEditor" screen.
            currentDeal: defaultValues.Deal,  // State parameter displayed in "DealEditor" screen.
            currentEditorStep: Enums.DealEditorStep.Main,  // State parameter displayed in "DealEditor" screen.
            isEditorMode: false,  // State parameter displayed in "DealEditor" screen.
            isRowBlocked: false,
            inputDescription: '',  // State parameter displayed in "DealEditor" screen.
            inputProduct: defaultValues.Classifier,  // State parameter displayed in "DealEditor" screen.
            inputApplication: defaultValues.Classifier,
            salesMethodList: defaultValues.ClassifierList,  // State parameter displayed in "DealEditor" screen.
            inputSalesMethod: defaultValues.Classifier,  // State parameter displayed in "DealEditor" screen.
            inputCurrency: defaultValues.ClassifierCurrency,  // State parameter displayed in "DealEditor" screen.
            inputAttractionChannel: defaultValues.Classifier,
            inputSumString: null,
            inputEquivalentSumString: null,
            inputDealDate: null,  // State parameter displayed in "DealEditor" screen.
            activityList: defaultValues.ActivityList,  // State parameter displayed in "DealEditor" screen.
            currentActivity: defaultValues.Activity,  // State parameter displayed in "DealEditor" screen.
            dealActivityAppend: defaultValues.boolean,  // Fetch result for "callPutDealActivityAppend" thunk.
            dealActivityAppendFetching: false,  // Fetching indicator for network thunk chain "callPutDealActivityAppend".
            dealActivityAppendError: null,  // Network error info for thunk chain "callPutDealActivityAppend".
            dealActivityAppendCachedDate: null,  // Response data cache date for network thunk chain "callPutDealActivityAppend".
            dealActivityExclude: defaultValues.boolean,  // Fetch result for "callPutDealActivityExclude" thunk.
            dealActivityExcludeFetching: false,  // Fetching indicator for network thunk chain "callPutDealActivityExclude".
            dealActivityExcludeError: null,  // Network error info for thunk chain "callPutDealActivityExclude".
            dealActivityExcludeCachedDate: null,  // Response data cache date for network thunk chain "callPutDealActivityExclude".
            dealSave: defaultValues.boolean,  // Result for "performSave" thunk.
            dealSaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            dealSaveError: null,  // Error info for thunk chain "performSave".
            dealUpdateFetching: false,
            dealCreateFetching: false,
            dealUpdateError: null,
            dealCreateError: null,
            validationError: null,
            dealInitRoadMapFetching: false,
            dealInitRoadMapError: null,
            isInitRoadMapNecessary: false,
            operationUuid:'',
            id:'',
            dealEditorMode:null,
            dealCreated: false,
            isValid:false,
            isEquivalentRateMode:false,
            inputEquivalentConversionRateString: null,
            inputFilteredMethodClassifier:defaultValues.ClassifierList,
            isProductMethodEnabled:false,
            dealCreationMode:Enums.DealCreationMode.Default,
            operationUuidCreate: '',
            operationUuidUpdate: '',
            currentDealFetching:false,
            currentDealError: null,
            tapActivityDeleteId: Enums.SwipeableRowEmptyId.EmptyId,
            savedMode: Enums.ValidateForm.inputSum,
            inputTeam: defaultValues.Deal.memberList,
            salesMethodClassifiersList: defaultValues.ClassifierList,
            productClassifiersList: defaultValues.ClassifierList,
            activityOperUuid: null,
            isNavigationButtonDisabled: false,
            isOwner:false,
            inputDealType: defaultValues.Classifier,
            isAdditionalFieldsAvailable: false,
            isChancePopoverOpened: false,
            inputChance: null,
            isSalesMethodPopoverOpened: false,
            isApplicationPopoverOpened: false,
            isAttractionChannelPopoverOpened: false,
            inputTransferCommission: null,
            inputStaffCount: null,
            applicationKkClassifierList: defaultValues.ClassifierList,
            inputAgentList: defaultValues.AgentList,
            // TODO Describe DealEditor reducer state.
        }
    }
}

export interface IDealEditorState {

    currentCustomerManaged: Models.CustomerManaged,  // State parameter displayed in "DealEditor" screen.
    currentDeal: Models.Deal,  // State parameter displayed in "DealEditor" screen.
    currentEditorStep: Enums.DealEditorStep,  // State parameter displayed in "DealEditor" screen.
    isEditorMode: boolean,  // State parameter displayed in "DealEditor" screen.
    isRowBlocked: boolean,
    inputDescription: string,  // State parameter displayed in "DealEditor" screen.
    inputProduct: ModelsApp.Classifier,  // State parameter displayed in "DealEditor" screen.
    inputApplication: ModelsApp.Classifier,
    salesMethodList: ModelsApp.ClassifierList,  // State parameter displayed in "DealEditor" screen.
    inputSalesMethod: ModelsApp.Classifier,  // State parameter displayed in "DealEditor" screen.
    inputCurrency: ModelsApp.Classifier | null,  // State parameter displayed in "DealEditor" screen.
    inputAttractionChannel: ModelsApp.Classifier,
    inputSumString: string | null,
    inputEquivalentSumString: string | null,
    inputDealDate: Date | null,  // State parameter displayed in "DealEditor" screen.
    activityList: ModelsScheduler.ActivityList,  // State parameter displayed in "DealEditor" screen.
    currentActivity: ModelsScheduler.Activity,  // State parameter displayed in "DealEditor" screen.
    dealActivityAppend: boolean,  // Fetch result for "callPutDealActivityAppend" thunk.
    dealActivityAppendFetching: boolean,  // Fetching indicator for network thunk chain "callPutDealActivityAppend".
    dealActivityAppendError: Error | null,  // Network error info for thunk chain "callPutDealActivityAppend".
    dealActivityAppendCachedDate: Date | null,  // Response data cache date for network thunk chain "callPutDealActivityAppend".
    dealActivityExclude: boolean,  // Fetch result for "callPutDealActivityExclude" thunk.
    dealActivityExcludeFetching: boolean,  // Fetching indicator for network thunk chain "callPutDealActivityExclude".
    dealActivityExcludeError: Error | null,  // Network error info for thunk chain "callPutDealActivityExclude".
    dealActivityExcludeCachedDate: Date | null,  // Response data cache date for network thunk chain "callPutDealActivityExclude".
    dealSave: boolean,
    dealSaveInProgress: boolean,
    dealSaveError: Error | null,
    dealUpdateFetching: boolean,
    dealCreateFetching: boolean,
    dealUpdateError: Error | null,
    dealCreateError: Error | null,
    validationError: Error | null,
    dealInitRoadMapFetching: boolean,
    dealInitRoadMapError: Error | null,
    isInitRoadMapNecessary: boolean,
    operationUuid: string,
    id: string,
    dealEditorMode: Enums.DealEditorMode | null,
    dealCreated:boolean,
    isValid: boolean,
    isEquivalentRateMode:boolean,
    inputEquivalentConversionRateString: string | null,
    inputFilteredMethodClassifier:ModelsApp.ClassifierList,
    isProductMethodEnabled:boolean,
    dealCreationMode:Enums.DealCreationMode
    operationUuidCreate: string,
    operationUuidUpdate: string,
    currentDealFetching: boolean,
    currentDealError: Error | null,
    tapActivityDeleteId: string | Enums.SwipeableRowEmptyId,
    inputTeam: Models.MemberList,
    savedMode: Enums.ValidateForm,
    salesMethodClassifiersList: ModelsApp.ClassifierList,
    productClassifiersList: ModelsApp.ClassifierList,
    activityOperUuid: ActivityOperUuid | null,
    isNavigationButtonDisabled: boolean,
    isOwner: boolean,
    inputDealType: ModelsApp.Classifier,
    isAdditionalFieldsAvailable: boolean,
    isChancePopoverOpened: boolean,
    inputChance: string | null,
    isSalesMethodPopoverOpened: boolean,
    isApplicationPopoverOpened: boolean,
    inputTransferCommission: string | null,
    inputStaffCount: string | null,
    isAttractionChannelPopoverOpened: boolean,
    applicationKkClassifierList: ModelsApp.ClassifierList,
    inputAgentList: Models.AgentList,
    // TODO Describe DealEditor reducer state.


}

export const initialState = {
    get state(): IDealEditorState {
        return defaultState.state
    }
}

export interface DealUniqClassifier {
    [key: string]: DealClassifier
}

export interface DealClassifier {
    parentId: string | null,
    name: string,
    value: string,
    code: string
}

export interface DealProductClassifier {
    parentId: Array<string> | null,
    name: string,
    value: string,
    code: string
}

export interface DealClassifierSet {
    parentId: Set<string>,
    name: string,
    value: string,
    code: string
}

export interface ActivityOperUuid {
    [key: string]: string
}

export interface NAVIGATE_TO_DEAL_EDITOR {
    (deal: Models.Deal, mode: Enums.DealEditorMode, agentList: Models.AgentList | null): void;
}

export interface SWAP_CONTEXT {
    (customer: Models.CustomerManaged, deal: Models.Deal, isEditorMode: boolean,): void;
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface PERFORM_NEXT {
    (): void;
}

export interface PERFORM_SAVE {
    (): void;
}

export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_BACK_EDITOR {
    (): void;
}

export interface PERFORM_INPUT_DESCRIPTION {
    (value: string): void;
}

export interface NAVIGATE_TO_PRODUCT_PICKER_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_INPUT_PRODUCT {
    (value: ModelsApp.Classifier,): void;
}

export interface NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_INPUT_SALES_METHOD {
    (value: ModelsApp.Classifier): void;
}

export interface NAVIGATE_TO_CURRENCY_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_INPUT_CURRENCY {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_INPUT_SUM_STRING {
    (value: string | null): void;
}

export interface PERFORM_INPUT_TRANSFER_COMMISSION {
    (value: string | null): void;
}

export interface PERFORM_INPUT_STAFF_COUNT {
    (value: string | null): void;
}

export interface PERFORM_INPUT_EQUIVALENT_SUM_STRING {
    (value: string | null): void;
}

export interface PERFORM_INPUT_DEAL_DATE {
    (value: Date | null): void;
}

export interface NAVIGATE_TO_ACTIVITY_LIST_SCREEN {
    (): void;
}

export interface PERFORM_ACTIVITY_LIST_APPEND {
    (activity: ModelsScheduler.Activity): void;
}

export interface CALL_PUT_DEAL_ACTIVITY_APPEND {
    (): void;
}

export interface PERFORM_ACTIVITY_LIST_EXCLUDE {
    (activity: ModelsScheduler.Activity): void;
}

export interface CALL_PUT_DEAL_ACTIVITY_EXCLUDE {
    (): void;
}

export interface PERFORM_SCOPE_CLEAR_AND_REFRESH {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}

export interface PERFORM_VALIDATE{
    (value: boolean): void;
}

export interface PERFORM_TAP_ACTIVITY_DELETE{
    (id: string | Enums.SwipeableRowEmptyId): void
}

export interface PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING {
    (value: string | null): void;
}

export interface PERFORM_CANCEL_SAVE_ERROR {
    (): void;
}



export interface PERFORM_SHOW_ADDITIONAL_FIELDS {
    (): void;
}

export interface NAVIGATE_TO_AGENT_PICKER_SCREEN {
    (): void;
}

export interface SHOW_CHANCE_POPOVER {
    (value: boolean): void;
}

export interface SHOW_ATTRACTION_CHANNEL_POPOVER {
    (value: boolean): void;
}


export interface PERFORM_SELECT_CHANCE {
    (value: string | undefined | null): void;
}

export interface SHOW_APPLICATION_POPOVER {
    (value: boolean): void;
}

export interface SHOW_SALES_METHOD_POPOVER {
    (value: boolean): void;
}

export interface PERFORM_SELECT_APPLICATION {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_SELECT_ATTRACTION_CHANNEL {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_SELECT_SALES_METHOD {
    (value: ModelsApp.Classifier): void;
}
