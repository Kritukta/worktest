/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkParentDealPicker from '../thunk/ThunkParentDealPicker';
import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker';
import ViewDealEditor from '../components/ViewDealEditor';
/*
 * Container "DealEditor". Deal editor screen.
 */
class ContainerDealEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewDealEditor, { testID: 'test-id-container-DealEditor', navigateToDealEditor: this.props.navigateToDealEditor, navigateToMemberListScreen: this.props.navigateToMemberListScreen, navigateBack: this.props.navigateBack, navigateBackEditor: this.props.navigateBackEditor, navigateToProductPickerScreen: this.props.navigateToProductPickerScreen, navigateToSalesMethodPickerScreen: this.props.navigateToSalesMethodPickerScreen, navigateToCurrencyPickerScreen: this.props.navigateToCurrencyPickerScreen, navigateToActivityListScreen: this.props.navigateToActivityListScreen, performCancel: this.props.performCancel, performNext: this.props.performNext, performSave: this.props.performSave, performInputDescription: this.props.performInputDescription, performInputProduct: this.props.performInputProduct, performInputSalesMethod: this.props.performInputSalesMethod, performInputCurrency: this.props.performInputCurrency, performInputSumString: this.props.performInputSumString, performInputEquivalentSumString: this.props.performInputEquivalentSumString, performInputDealDate: this.props.performInputDealDate, performActivityListAppend: this.props.performActivityListAppend, callPutDealActivityAppend: this.props.callPutDealActivityAppend, performActivityListExclude: this.props.performActivityListExclude, callPutDealActivityExclude: this.props.callPutDealActivityExclude, performScopeClearAndRefresh: this.props.performScopeClearAndRefresh, performContainerReset: this.props.performContainerReset, validationError: this.props.validationError, navigateToDealTypePickerScreen: this.props.navigateToDealTypePickerScreen, showChancePopover: this.props.showChancePopover, performSelectChance: this.props.performSelectChance, performCancelSaveError: this.props.performCancelSaveError, showApplicationPopover: this.props.showApplicationPopover, performSelectApplication: this.props.performSelectApplication, showSalesMethodPopover: this.props.showSalesMethodPopover, performSelectSalesMethod: this.props.performSelectSalesMethod, performInputTransferCommission: this.props.performInputTransferCommission, performInputStaffCount: this.props.performInputStaffCount, currentCustomerManaged: this.props.currentCustomerManaged, currentDeal: this.props.currentDeal, currentEditorStep: this.props.currentEditorStep, isEditorMode: this.props.isEditorMode, isRowBlocked: this.props.isRowBlocked, inputDescription: this.props.inputDescription, inputProduct: this.props.inputProduct, salesMethodList: this.props.salesMethodList, inputSalesMethod: this.props.inputSalesMethod, inputCurrency: this.props.inputCurrency, inputSumString: this.props.inputSumString, inputEquivalentSumString: this.props.inputEquivalentSumString, inputDealDate: this.props.inputDealDate, inputTeam: this.props.inputTeam, activityList: this.props.activityList, currentActivity: this.props.currentActivity, dealActivityAppend: this.props.dealActivityAppend, dealActivityAppendFetching: this.props.dealActivityAppendFetching, dealActivityAppendError: this.props.dealActivityAppendError, dealActivityAppendCachedDate: this.props.dealActivityAppendCachedDate, dealActivityExclude: this.props.dealActivityExclude, dealActivityExcludeFetching: this.props.dealActivityExcludeFetching, dealActivityExcludeError: this.props.dealActivityExcludeError, dealActivityExcludeCachedDate: this.props.dealActivityExcludeCachedDate, dealSaveInProgress: this.props.dealSaveInProgress, dealSaveError: this.props.dealSaveError, dealCreated: this.props.dealCreated, dealEditorMode: this.props.dealEditorMode, isValid: this.props.isValid, isEquivalentRateMode: this.props.isEquivalentRateMode, inputEquivalentConversionRateString: this.props.inputEquivalentConversionRateString, isProductMethodEnabled: this.props.isProductMethodEnabled, performTapActivityDelete: this.props.performTapActivityDelete, tapActivityDeleteId: this.props.tapActivityDeleteId, performInputEquivalentConversionRateString: this.props.performInputEquivalentConversionRateString, isNavigationButtonDisabled: this.props.isNavigationButtonDisabled, isOwner: this.props.isOwner, inputDealType: this.props.inputDealType, isAdditionalFieldsAvailable: this.props.isAdditionalFieldsAvailable, performShowAdditionalFields: this.props.performShowAdditionalFields, navigateToCampaignPickerScreen: this.props.navigateToCampaignPickerScreen, navigateToParentDealPickerScreen: this.props.navigateToParentDealPickerScreen, navigateToAgentListScreen: this.props.navigateToAgentListScreen, isChancePopoverOpened: this.props.isChancePopoverOpened, inputChance: this.props.inputChance, inputApplication: this.props.inputApplication, isApplicationPopoverOpened: this.props.isApplicationPopoverOpened, isSalesMethodPopoverOpened: this.props.isSalesMethodPopoverOpened, applicationKkClassifierList: this.props.applicationKkClassifierList, inputTransferCommission: this.props.inputTransferCommission, inputStaffCount: this.props.inputStaffCount, isAttractionChannelPopoverOpened: this.props.isAttractionChannelPopoverOpened, inputAttractionChannel: this.props.inputAttractionChannel, showAttractionChannelPopover: this.props.showAttractionChannelPopover, performSelectAttractionChannel: this.props.performSelectAttractionChannel, inputAgentList: this.props.inputAgentList, classifierDictionary: this.props.classifierDictionary }));
    }
}
function mapStateToProps(state) {
    return {
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerDealEditor.currentCustomerManaged,
        currentDeal: state.user.mrmkmcibCRM.reducerDealEditor.currentDeal,
        currentEditorStep: state.user.mrmkmcibCRM.reducerDealEditor.currentEditorStep,
        isEditorMode: state.user.mrmkmcibCRM.reducerDealEditor.isEditorMode,
        isRowBlocked: state.user.mrmkmcibCRM.reducerDealEditor.isRowBlocked,
        inputDescription: state.user.mrmkmcibCRM.reducerDealEditor.inputDescription,
        inputProduct: state.user.mrmkmcibCRM.reducerDealEditor.inputProduct,
        salesMethodList: state.user.mrmkmcibCRM.reducerDealEditor.salesMethodList,
        inputSalesMethod: state.user.mrmkmcibCRM.reducerDealEditor.inputSalesMethod,
        inputCurrency: state.user.mrmkmcibCRM.reducerDealEditor.inputCurrency,
        inputSumString: state.user.mrmkmcibCRM.reducerDealEditor.inputSumString,
        inputEquivalentSumString: state.user.mrmkmcibCRM.reducerDealEditor.inputEquivalentSumString,
        inputDealDate: state.user.mrmkmcibCRM.reducerDealEditor.inputDealDate,
        activityList: state.user.mrmkmcibCRM.reducerDealEditor.activityList,
        currentActivity: state.user.mrmkmcibCRM.reducerDealEditor.currentActivity,
        dealActivityAppend: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityAppend,
        dealActivityAppendFetching: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityAppendFetching,
        dealActivityAppendError: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityAppendError,
        dealActivityAppendCachedDate: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityAppendCachedDate,
        dealActivityExclude: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityExclude,
        dealActivityExcludeFetching: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityExcludeFetching,
        dealActivityExcludeError: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityExcludeError,
        dealActivityExcludeCachedDate: state.user.mrmkmcibCRM.reducerDealEditor.dealActivityExcludeCachedDate,
        dealEditorMode: state.user.mrmkmcibCRM.reducerDealEditor.dealEditorMode,
        dealSaveInProgress: state.user.mrmkmcibCRM.reducerDealEditor.dealSaveInProgress,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        dealSaveError: state.user.mrmkmcibCRM.reducerDealEditor.dealSaveError,
        dealCreated: state.user.mrmkmcibCRM.reducerDealEditor.dealCreated,
        isValid: state.user.mrmkmcibCRM.reducerDealEditor.isValid,
        isEquivalentRateMode: state.user.mrmkmcibCRM.reducerDealEditor.isEquivalentRateMode,
        inputEquivalentConversionRateString: state.user.mrmkmcibCRM.reducerDealEditor.inputEquivalentConversionRateString,
        isProductMethodEnabled: state.user.mrmkmcibCRM.reducerDealEditor.isProductMethodEnabled,
        tapActivityDeleteId: state.user.mrmkmcibCRM.reducerDealEditor.tapActivityDeleteId,
        inputTeam: state.user.mrmkmcibCRM.reducerDealEditor.inputTeam,
        isNavigationButtonDisabled: state.user.mrmkmcibCRM.reducerDealEditor.isNavigationButtonDisabled,
        isOwner: state.user.mrmkmcibCRM.reducerDealEditor.isOwner,
        validationError: state.user.mrmkmcibCRM.reducerDealEditor.validationError,
        inputDealType: state.user.mrmkmcibCRM.reducerDealEditor.inputDealType,
        isAdditionalFieldsAvailable: state.user.mrmkmcibCRM.reducerDealEditor.isAdditionalFieldsAvailable,
        isChancePopoverOpened: state.user.mrmkmcibCRM.reducerDealEditor.isChancePopoverOpened,
        isApplicationPopoverOpened: state.user.mrmkmcibCRM.reducerDealEditor.isApplicationPopoverOpened,
        isSalesMethodPopoverOpened: state.user.mrmkmcibCRM.reducerDealEditor.isSalesMethodPopoverOpened,
        inputChance: state.user.mrmkmcibCRM.reducerDealEditor.inputChance,
        inputApplication: state.user.mrmkmcibCRM.reducerDealEditor.inputApplication,
        inputTransferCommission: state.user.mrmkmcibCRM.reducerDealEditor.inputTransferCommission,
        inputStaffCount: state.user.mrmkmcibCRM.reducerDealEditor.inputStaffCount,
        isAttractionChannelPopoverOpened: state.user.mrmkmcibCRM.reducerDealEditor.isAttractionChannelPopoverOpened,
        inputAttractionChannel: state.user.mrmkmcibCRM.reducerDealEditor.inputAttractionChannel,
        applicationKkClassifierList: state.user.mrmkmcibCRM.reducerDealEditor.applicationKkClassifierList,
        inputAgentList: state.user.mrmkmcibCRM.reducerDealEditor.inputAgentList,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToDealEditor: (deal, mode, agentList) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal, mode, agentList));
        },
        navigateToDealTypePickerScreen: () => {
            dispatch(thunkDealEditor.navigateToDealTypePickerScreen());
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkDealEditor.navigateToMemberListScreen());
        },
        navigateBack: () => {
            dispatch(thunkDealEditor.navigateBack());
        },
        navigateBackEditor: () => {
            dispatch(thunkDealEditor.navigateBackEditor());
        },
        navigateToProductPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToProductPickerScreen());
        },
        navigateToSalesMethodPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToSalesMethodPickerScreen());
        },
        navigateToCurrencyPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToCurrencyPickerScreen());
        },
        navigateToActivityListScreen: () => {
            dispatch(thunkDealEditor.navigateToActivityListScreen());
        },
        performCancel: () => {
            dispatch(thunkDealEditor.performCancel());
        },
        performNext: () => {
            dispatch(thunkDealEditor.performNext());
        },
        performSave: () => {
            dispatch(thunkDealEditor.performSave());
        },
        performInputDescription: (value) => {
            dispatch(thunkDealEditor.performInputDescription(value));
        },
        performInputProduct: (value) => {
            dispatch(thunkDealEditor.performInputProduct(value));
        },
        performInputSalesMethod: (value) => {
            dispatch(thunkDealEditor.performInputSalesMethod(value));
        },
        performInputCurrency: (value) => {
            dispatch(thunkDealEditor.performInputCurrency(value));
        },
        performInputSumString: (value) => {
            dispatch(thunkDealEditor.performInputSumString(value));
        },
        performInputEquivalentSumString: (value) => {
            dispatch(thunkDealEditor.performInputEquivalentSumString(value));
        },
        performInputDealDate: (value) => {
            dispatch(thunkDealEditor.performInputDealDate(value));
        },
        performActivityListExclude: (activity) => {
            dispatch(thunkDealEditor.performActivityListExclude(activity));
        },
        callPutDealActivityExclude: () => {
            dispatch(thunkDealEditor.callPutDealActivityExclude());
        },
        performScopeClearAndRefresh: () => {
            dispatch(thunkDealEditor.performScopeClearAndRefresh());
        },
        performContainerReset: () => {
            dispatch(thunkDealEditor.performContainerReset());
        },
        performTapActivityDelete: (id) => {
            dispatch(thunkDealEditor.performTapActivityDelete(id));
        },
        performInputEquivalentConversionRateString: (value) => {
            dispatch(thunkDealEditor.performInputEquivalentConversionRateString(value));
        },
        performCancelSaveError: () => {
            dispatch(thunkDealEditor.performCancelSaveError());
        },
        performShowAdditionalFields: () => {
            dispatch(thunkDealEditor.performShowAdditionalFields());
        },
        navigateToCampaignPickerScreen: () => {
            dispatch(thunkCampaignPicker.navigateToCampaignPickerScreen());
        },
        navigateToParentDealPickerScreen: (mode) => {
            dispatch(thunkParentDealPicker.navigateToParentDealCustomerListScreen(mode));
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkDealEditor.navigateToAgentListScreen());
        },
        showChancePopover: (value) => {
            dispatch(thunkDealEditor.showChancePopover(value));
        },
        performSelectChance: (value) => {
            dispatch(thunkDealEditor.performSelectChance(value));
        },
        showApplicationPopover: (value) => {
            dispatch(thunkDealEditor.showApplicationPopover(value));
        },
        performSelectApplication: (value) => {
            dispatch(thunkDealEditor.performSelectApplication(value));
        },
        showSalesMethodPopover: (value) => {
            dispatch(thunkDealEditor.showSalesMethodPopover(value));
        },
        performInputTransferCommission: (value) => {
            dispatch(thunkDealEditor.performInputTransferCommission(value));
        },
        performInputStaffCount: (value) => {
            dispatch(thunkDealEditor.performInputStaffCount(value));
        },
        showAttractionChannelPopover: (value) => {
            dispatch(thunkDealEditor.showAttractionChannelPopover(value));
        },
        performSelectAttractionChannel: (value) => {
            dispatch(thunkDealEditor.performSelectAttractionChannel(value));
        },
        performSelectSalesMethod: (value) => {
            dispatch(thunkDealEditor.performSelectSalesMethod(value));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealEditor);
//# sourceMappingURL=ContainerDealEditor.js.map