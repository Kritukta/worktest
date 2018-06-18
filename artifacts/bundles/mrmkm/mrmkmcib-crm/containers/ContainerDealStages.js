import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewDealStages from '../components/ViewDealStages';
import * as thunkDealStages from '../thunk/ThunkDealStages';
import * as thunkDealStageEditor from '../thunk/ThunkDealStageEditor';
class ContainerDealStages extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewDealStages, { testID: 'test-id-container-DealList', currentDeal: this.props.currentDeal, stageList: this.props.stageList, isAccessibleStages: this.props.isAccessibleStages, selectedStage: this.props.selectedStage, activePosition: this.props.activePosition, crmStages: this.props.crmStages, progress: this.props.currentDeal.progress || 0, system: this.props.currentDeal.system, isReadOnlyStages: this.props.isReadOnlyStages, navigateToStageDetails: this.props.navigateToStageDetails, navigateToStageEditor: this.props.navigateToStageEditor, receivingInputParametersInProgress: this.props.receivingInputParametersInProgress, receivingInputParametersError: this.props.receivingInputParametersError, classifierDictionary: this.props.classifierDictionary, isInputDealDateEnable: this.props.isInputDealDateEnable, isRejection: this.props.isRejection, inputRejection: this.props.inputRejection, inputCurrency: this.props.inputCurrency, accessibleStageList: this.props.accessibleStageList, dealPossibleStageList: this.props.dealPossibleStageList, inputStage: this.props.inputStage, inputEquivalentSumString: this.props.inputEquivalentSumString, dealHistoryStageList: this.props.dealHistoryStageList, saveDealAdditionalFieldsInProgress: this.props.saveDealAdditionalFieldsInProgress, saveDealAdditionalFieldsError: this.props.saveDealAdditionalFieldsError, saveDealStageInProgress: this.props.saveDealStageInProgress, saveDealStageError: this.props.saveDealStageError, isErrorEnable: this.props.isErrorEnable, isSaveStageEnable: this.props.isSaveStageEnable, currentStageStatus: this.props.currentStageStatus, errorMessage: this.props.errorMessage, isSetMainClientManager: this.props.isSetMainClientManager, isSetMainCreditOfficer: this.props.isSetMainCreditOfficer, isSetMemberMonitoring: this.props.isSetMemberMonitoring, isSetPlannedFinishDate: this.props.isSetPlannedFinishDate, isSetCloseReason: this.props.isSetCloseReason, isSetCurrency: this.props.isSetCurrency, isSetClientStageChanges: this.props.isSetClientStageChanges, isSaveAdditionalFieldsEnable: this.props.isSaveAdditionalFieldsEnable, isButtonPopoverOpenedMainClientManager: this.props.isButtonPopoverOpenedMainClientManager, isButtonPopoverOpenedMainCreditOfficer: this.props.isButtonPopoverOpenedMainCreditOfficer, isButtonPopoverOpenedMemberMonitoring: this.props.isButtonPopoverOpenedMemberMonitoring, isDealStagesSavePopoverOpened: this.props.isDealStagesSavePopoverOpened, currentStageTab: this.props.currentStageTab, inputMainClientManager: this.props.inputMainClientManager, inputMainCreditOfficer: this.props.inputMainCreditOfficer, inputMemberMonitoring: this.props.inputMemberMonitoring, performChangeStageTab: this.props.performChangeStageTab, performPopoverClientRoadMapHelpShow: this.props.performPopoverClientRoadMapHelpShow, performPopoverClientRoadMapHelpHide: this.props.performPopoverClientRoadMapHelpHide, isVisiblePopoverClientRoadMapHelp: this.props.isVisiblePopoverClientRoadMapHelp, performClientRoadMapActivate: this.props.performClientRoadMapActivate, performClientRoadMapNext: this.props.performClientRoadMapNext, performSaveDealStage: this.props.performSaveDealStage, performInputEquivalentSumString: this.props.performInputEquivalentSumString, performPopoverClientRoadMapShow: this.props.performPopoverClientRoadMapShow, performPopoverClientRoadMapHide: this.props.performPopoverClientRoadMapHide, isVisiblePopoverClientRoadMap: this.props.isVisiblePopoverClientRoadMap, performReceivingInputParameters: this.props.performReceivingInputParameters, navigateBack: this.props.navigateBack, navigateBackWithResetData: this.props.navigateBackWithResetData, navigateToPreviousForm: this.props.navigateToPreviousForm, navigateToCurrencyPickerScreen: this.props.navigateToCurrencyPickerScreen, performSaveStage: this.props.performSaveStage, navigateToAdditionalFields: this.props.navigateToAdditionalFields, inputDealDate: this.props.inputDealDate, performSelectRejection: this.props.performSelectRejection, performSaveDealAdditionalFields: this.props.performSaveDealAdditionalFields, showButtonPopoverMainClientManager: this.props.showButtonPopoverMainClientManager, showButtonPopoverMainCreditOfficer: this.props.showButtonPopoverMainCreditOfficer, showButtonPopoverMemberMonitoring: this.props.showButtonPopoverMemberMonitoring, performInputEmployeeSourceMainClientManager: this.props.performInputEmployeeSourceMainClientManager, performInputEmployeeSourceMainCreditOfficer: this.props.performInputEmployeeSourceMainCreditOfficer, performInputEmployeeSourceMemberMonitoring: this.props.performInputEmployeeSourceMemberMonitoring, onSaveDealStageButtonTap: this.props.onSaveDealStageButtonTap, showDealStagesSavePopover: this.props.showDealStagesSavePopover, dealStageTracking: this.props.dealStageTracking, inputComment: this.props.inputComment, performInputComment: this.props.performInputComment, isStageListEnable: this.props.isStageListEnable, performInputDealDate: this.props.performInputDealDate }));
    }
}
function mapStateToProps(state) {
    return {
        currentDeal: state.user.mrmkmcibCRM.reducerDealStages.currentDeal,
        isAccessibleStages: state.user.mrmkmcibCRM.reducerDealStages.isAccessibleStages,
        stageList: state.user.mrmkmcibCRM.reducerDealStages.stageList,
        selectedStage: state.user.mrmkmcibCRM.reducerDealStages.selectedStage,
        activePosition: state.user.mrmkmcibCRM.reducerDealStages.activePosition,
        crmStages: state.user.mrmkmcibCRM.reducerDealStages.crmStages,
        progress: state.user.mrmkmcibCRM.reducerDealStages.progress,
        system: state.user.mrmkmcibCRM.reducerDealStages.system,
        inputDealDate: state.user.mrmkmcibCRM.reducerDealStages.inputDealDate,
        isInputDealDateEnable: state.user.mrmkmcibCRM.reducerDealStages.isInputDealDateEnable,
        isRejection: state.user.mrmkmcibCRM.reducerDealStages.isRejection,
        inputRejection: state.user.mrmkmcibCRM.reducerDealStages.inputRejection,
        inputCurrency: state.user.mrmkmcibCRM.reducerDealStages.inputCurrency,
        inputEquivalentSumString: state.user.mrmkmcibCRM.reducerDealStages.inputEquivalentSumString,
        isReadOnlyStages: state.user.mrmkmcibCRM.reducerDealStages.isReadOnlyStages,
        accessibleStageList: state.user.mrmkmcibCRM.reducerDealStages.accessibleStageList,
        currentStageTab: state.user.mrmkmcibCRM.reducerDealStages.currentStageTab,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        isVisiblePopoverClientRoadMapHelp: state.user.mrmkmcibCRM.reducerDealStages.isVisiblePopoverClientRoadMapHelp,
        isVisiblePopoverClientRoadMap: state.user.mrmkmcibCRM.reducerDealStages.isVisiblePopoverClientRoadMap,
        receivingInputParametersInProgress: state.user.mrmkmcibCRM.reducerDealStages.receivingInputParametersInProgress,
        dealPossibleStageList: state.user.mrmkmcibCRM.reducerDealStages.dealPossibleStageList,
        inputStage: state.user.mrmkmcibCRM.reducerDealStages.inputStage,
        receivingInputParametersError: state.user.mrmkmcibCRM.reducerDealStages.receivingInputParametersError,
        saveDealAdditionalFieldsInProgress: state.user.mrmkmcibCRM.reducerDealStages.saveDealAdditionalFieldsInProgress,
        saveDealAdditionalFieldsError: state.user.mrmkmcibCRM.reducerDealStages.saveDealAdditionalFieldsError,
        saveDealStageInProgress: state.user.mrmkmcibCRM.reducerDealStages.saveDealStageInProgress,
        saveDealStageError: state.user.mrmkmcibCRM.reducerDealStages.saveDealStageError,
        isErrorEnable: state.user.mrmkmcibCRM.reducerDealStages.isErrorEnable,
        isSaveStageEnable: state.user.mrmkmcibCRM.reducerDealStages.isSaveStageEnable,
        currentStageStatus: state.user.mrmkmcibCRM.reducerDealStages.currentStageStatus,
        errorMessage: state.user.mrmkmcibCRM.reducerDealStages.errorMessage,
        isSetMainClientManager: state.user.mrmkmcibCRM.reducerDealStages.isSetMainClientManager,
        isSetMainCreditOfficer: state.user.mrmkmcibCRM.reducerDealStages.isSetMainCreditOfficer,
        isSetMemberMonitoring: state.user.mrmkmcibCRM.reducerDealStages.isSetMemberMonitoring,
        isSetPlannedFinishDate: state.user.mrmkmcibCRM.reducerDealStages.isSetPlannedFinishDate,
        isSetCloseReason: state.user.mrmkmcibCRM.reducerDealStages.isSetCloseReason,
        isSetCurrency: state.user.mrmkmcibCRM.reducerDealStages.isSetCurrency,
        isSetClientStageChanges: state.user.mrmkmcibCRM.reducerDealStages.isSetClientStageChanges,
        isSaveAdditionalFieldsEnable: state.user.mrmkmcibCRM.reducerDealStages.isSaveAdditionalFieldsEnable,
        isButtonPopoverOpenedMainClientManager: state.user.mrmkmcibCRM.reducerDealStages.isButtonPopoverOpenedMainClientManager,
        isButtonPopoverOpenedMainCreditOfficer: state.user.mrmkmcibCRM.reducerDealStages.isButtonPopoverOpenedMainCreditOfficer,
        isButtonPopoverOpenedMemberMonitoring: state.user.mrmkmcibCRM.reducerDealStages.isButtonPopoverOpenedMemberMonitoring,
        inputMainClientManager: state.user.mrmkmcibCRM.reducerDealStages.inputMainClientManager,
        inputMainCreditOfficer: state.user.mrmkmcibCRM.reducerDealStages.inputMainCreditOfficer,
        inputMemberMonitoring: state.user.mrmkmcibCRM.reducerDealStages.inputMemberMonitoring,
        isDealStagesSavePopoverOpened: state.user.mrmkmcibCRM.reducerDealStages.isDealStagesSavePopoverOpened,
        dealStageTracking: state.user.mrmkmcibCRM.reducerDealStages.dealStageTracking,
        inputComment: state.user.mrmkmcibCRM.reducerDealStages.inputComment,
        isStageListEnable: state.user.mrmkmcibCRM.reducerDealStages.isStageListEnable,
        dealHistoryStageList: state.user.mrmkmcibCRM.reducerDealStages.dealHistoryStageList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToStageDetails: (stage, activePosition) => {
            dispatch(thunkDealStages.navigateToStageDetails(stage, activePosition));
        },
        navigateToStageEditor: (activePosition) => {
            dispatch(thunkDealStageEditor.navigateToDealStageEditor(activePosition));
        },
        performChangeStageTab: (index) => {
            dispatch(thunkDealStages.performChangeStageTab(index));
        },
        performPopoverClientRoadMapHelpShow: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHelpShow());
        },
        performPopoverClientRoadMapHelpHide: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHelpHide());
        },
        performClientRoadMapActivate: () => {
            dispatch(thunkDealStages.performClientRoadMapActivate());
        },
        performClientRoadMapNext: () => {
            dispatch(thunkDealStages.performClientRoadMapNext());
        },
        performPopoverClientRoadMapShow: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapShow());
        },
        performReceivingInputParameters: () => {
            dispatch(thunkDealStages.performReceivingInputParameters());
        },
        performPopoverClientRoadMapHide: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHide());
        },
        navigateBack: () => {
            dispatch(thunkDealStages.navigateBack());
        },
        navigateBackWithResetData: () => {
            dispatch(thunkDealStages.navigateBackWithResetData());
        },
        navigateToPreviousForm: () => {
            dispatch(thunkDealStages.navigateToPreviousForm());
        },
        performSaveStage: () => {
            dispatch(thunkDealStages.performSaveStage());
        },
        performInputDealDate: (value) => {
            dispatch(thunkDealStages.performInputDealDate(value));
        },
        performSelectRejection: (value) => {
            dispatch(thunkDealStages.performSelectRejection(value));
        },
        performSaveDealAdditionalFields: () => {
            dispatch(thunkDealStages.performSaveDealAdditionalFields());
        },
        performSaveDealStage: () => {
            dispatch(thunkDealStages.performSaveDealStage());
        },
        performInputEquivalentSumString: (value) => {
            dispatch(thunkDealStages.performInputEquivalentSumString(value));
        },
        navigateToCurrencyPickerScreen: () => {
            dispatch(thunkDealStages.navigateToCurrencyPickerScreen());
        },
        showButtonPopoverMainClientManager: (isButtonPopoverOpenedMainClientManager) => {
            dispatch(thunkDealStages.showButtonPopoverMainClientManager(isButtonPopoverOpenedMainClientManager));
        },
        showButtonPopoverMainCreditOfficer: (isButtonPopoverOpenedMainCreditOfficer) => {
            dispatch(thunkDealStages.showButtonPopoverMainCreditOfficer(isButtonPopoverOpenedMainCreditOfficer));
        },
        showButtonPopoverMemberMonitoring: (isButtonPopoverOpenedMemberMonitoring) => {
            dispatch(thunkDealStages.showButtonPopoverMemberMonitoring(isButtonPopoverOpenedMemberMonitoring));
        },
        showDealStagesSavePopover: (isDealStagesSavePopoverOpened) => {
            dispatch(thunkDealStages.showDealStagesSavePopover(isDealStagesSavePopoverOpened));
        },
        performInputEmployeeSourceMainClientManager: (inputEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMainClientManager(inputEmployeeSource));
        },
        performInputEmployeeSourceMainCreditOfficer: (inputEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMainCreditOfficer(inputEmployeeSource));
        },
        performInputEmployeeSourceMemberMonitoring: (inputEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMemberMonitoring(inputEmployeeSource));
        },
        onSaveDealStageButtonTap: () => {
            dispatch(thunkDealStages.onSaveDealStageButtonTap());
        },
        performInputComment: (inputComment) => {
            dispatch(thunkDealStages.performInputComment(inputComment));
        },
        navigateToAdditionalFields: (stage) => {
            dispatch(thunkDealStages.navigateToAdditionalFields(stage));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealStages);
//# sourceMappingURL=ContainerDealStages.js.map