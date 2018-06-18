/**
 * Models for DealEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in DealEditor actions and thunks.
const defaultState = {
    get state() {
        return {
            currentCustomerManaged: defaultValues.CustomerManaged,
            currentDeal: defaultValues.Deal,
            currentEditorStep: Enums.DealEditorStep.Main,
            isEditorMode: false,
            isRowBlocked: false,
            inputDescription: '',
            inputProduct: defaultValues.Classifier,
            inputApplication: defaultValues.Classifier,
            salesMethodList: defaultValues.ClassifierList,
            inputSalesMethod: defaultValues.Classifier,
            inputCurrency: defaultValues.ClassifierCurrency,
            inputAttractionChannel: defaultValues.Classifier,
            inputSumString: null,
            inputEquivalentSumString: null,
            inputDealDate: null,
            activityList: defaultValues.ActivityList,
            currentActivity: defaultValues.Activity,
            dealActivityAppend: defaultValues.boolean,
            dealActivityAppendFetching: false,
            dealActivityAppendError: null,
            dealActivityAppendCachedDate: null,
            dealActivityExclude: defaultValues.boolean,
            dealActivityExcludeFetching: false,
            dealActivityExcludeError: null,
            dealActivityExcludeCachedDate: null,
            dealSave: defaultValues.boolean,
            dealSaveInProgress: false,
            dealSaveError: null,
            dealUpdateFetching: false,
            dealCreateFetching: false,
            dealUpdateError: null,
            dealCreateError: null,
            validationError: null,
            dealInitRoadMapFetching: false,
            dealInitRoadMapError: null,
            isInitRoadMapNecessary: false,
            operationUuid: '',
            id: '',
            dealEditorMode: null,
            dealCreated: false,
            isValid: false,
            isEquivalentRateMode: false,
            inputEquivalentConversionRateString: null,
            inputFilteredMethodClassifier: defaultValues.ClassifierList,
            isProductMethodEnabled: false,
            dealCreationMode: Enums.DealCreationMode.Default,
            operationUuidCreate: '',
            operationUuidUpdate: '',
            currentDealFetching: false,
            currentDealError: null,
            tapActivityDeleteId: Enums.SwipeableRowEmptyId.EmptyId,
            savedMode: Enums.ValidateForm.inputSum,
            inputTeam: defaultValues.Deal.memberList,
            salesMethodClassifiersList: defaultValues.ClassifierList,
            productClassifiersList: defaultValues.ClassifierList,
            activityOperUuid: null,
            isNavigationButtonDisabled: false,
            isOwner: false,
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
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDealEditor.js.map