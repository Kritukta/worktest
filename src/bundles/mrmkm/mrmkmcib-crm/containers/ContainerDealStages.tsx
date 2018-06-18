import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as ModelsDealStages from '../models/ModelsDealStages'
import ViewDealStages from '../components/ViewDealStages'
import * as ModelState from "../models/Models"
import {Models} from 'mrmkmcib-crm'
import * as thunkDealStages from '../thunk/ThunkDealStages'
import * as thunkDealStageEditor from '../thunk/ThunkDealStageEditor'
import Error from "../models/Error";
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from "../Enums"

class ContainerDealStages extends Component <IDealStagesProps,any> {
    constructor(props: IDealStagesProps, context: any) {
        super(props, context);
    }

    render(){
        return(
            <ViewDealStages testID={'test-id-container-DealList'}
                            currentDeal={this.props.currentDeal}
                            stageList={this.props.stageList}
                            isAccessibleStages={this.props.isAccessibleStages}
                            selectedStage={this.props.selectedStage}
                            activePosition={this.props.activePosition}
                            crmStages={this.props.crmStages}
                            progress={this.props.currentDeal.progress || 0}
                            system={this.props.currentDeal.system}
                            isReadOnlyStages={this.props.isReadOnlyStages}
                            navigateToStageDetails={this.props.navigateToStageDetails}
                            navigateToStageEditor={this.props.navigateToStageEditor}
                            receivingInputParametersInProgress={this.props.receivingInputParametersInProgress}
                            receivingInputParametersError={this.props.receivingInputParametersError}
                            classifierDictionary={this.props.classifierDictionary}
                            isInputDealDateEnable={this.props.isInputDealDateEnable}
                            isRejection={this.props.isRejection}
                            inputRejection={this.props.inputRejection}
                            inputCurrency={this.props.inputCurrency}
                            accessibleStageList={this.props.accessibleStageList}
                            dealPossibleStageList={this.props.dealPossibleStageList}
                            inputStage={this.props.inputStage}
                            inputEquivalentSumString={this.props.inputEquivalentSumString}
                            dealHistoryStageList={this.props.dealHistoryStageList}
                            saveDealAdditionalFieldsInProgress={this.props.saveDealAdditionalFieldsInProgress}
                            saveDealAdditionalFieldsError={this.props.saveDealAdditionalFieldsError}
                            saveDealStageInProgress={this.props.saveDealStageInProgress}
                            saveDealStageError={this.props.saveDealStageError}
                            isErrorEnable={this.props.isErrorEnable}
                            isSaveStageEnable={this.props.isSaveStageEnable}
                            currentStageStatus={this.props.currentStageStatus}
                            errorMessage={this.props.errorMessage}
                            isSetMainClientManager={this.props.isSetMainClientManager}
                            isSetMainCreditOfficer={this.props.isSetMainCreditOfficer}
                            isSetMemberMonitoring={this.props.isSetMemberMonitoring}
                            isSetPlannedFinishDate={this.props.isSetPlannedFinishDate}
                            isSetCloseReason={this.props.isSetCloseReason}
                            isSetCurrency={this.props.isSetCurrency}
                            isSetClientStageChanges={this.props.isSetClientStageChanges}
                            isSaveAdditionalFieldsEnable={this.props.isSaveAdditionalFieldsEnable}
                            isButtonPopoverOpenedMainClientManager={this.props.isButtonPopoverOpenedMainClientManager}
                            isButtonPopoverOpenedMainCreditOfficer={this.props.isButtonPopoverOpenedMainCreditOfficer}
                            isButtonPopoverOpenedMemberMonitoring={this.props.isButtonPopoverOpenedMemberMonitoring}
                            isDealStagesSavePopoverOpened={this.props.isDealStagesSavePopoverOpened}
                            currentStageTab={this.props.currentStageTab}
                            inputMainClientManager={this.props.inputMainClientManager}
                            inputMainCreditOfficer={this.props.inputMainCreditOfficer}
                            inputMemberMonitoring={this.props.inputMemberMonitoring}
                            performChangeStageTab={this.props.performChangeStageTab}
                            performPopoverClientRoadMapHelpShow={this.props.performPopoverClientRoadMapHelpShow}
                            performPopoverClientRoadMapHelpHide={this.props.performPopoverClientRoadMapHelpHide}
                            isVisiblePopoverClientRoadMapHelp={this.props.isVisiblePopoverClientRoadMapHelp}
                            performClientRoadMapActivate={this.props.performClientRoadMapActivate}
                            performClientRoadMapNext={this.props.performClientRoadMapNext}
                            performSaveDealStage={this.props.performSaveDealStage}
                            performInputEquivalentSumString={this.props.performInputEquivalentSumString}
                            performPopoverClientRoadMapShow={this.props.performPopoverClientRoadMapShow}
                            performPopoverClientRoadMapHide={this.props.performPopoverClientRoadMapHide}
                            isVisiblePopoverClientRoadMap={this.props.isVisiblePopoverClientRoadMap}
                            performReceivingInputParameters={this.props.performReceivingInputParameters}
                            navigateBack={this.props.navigateBack}
                            navigateBackWithResetData={this.props.navigateBackWithResetData}
                            navigateToPreviousForm={this.props.navigateToPreviousForm}
                            navigateToCurrencyPickerScreen={this.props.navigateToCurrencyPickerScreen}
                            performSaveStage={this.props.performSaveStage}
                            navigateToAdditionalFields={this.props.navigateToAdditionalFields}
                            inputDealDate={this.props.inputDealDate}
                            performSelectRejection={this.props.performSelectRejection}
                            performSaveDealAdditionalFields={this.props.performSaveDealAdditionalFields}
                            showButtonPopoverMainClientManager={this.props.showButtonPopoverMainClientManager}
                            showButtonPopoverMainCreditOfficer={this.props.showButtonPopoverMainCreditOfficer}
                            showButtonPopoverMemberMonitoring={this.props.showButtonPopoverMemberMonitoring}
                            performInputEmployeeSourceMainClientManager={this.props.performInputEmployeeSourceMainClientManager}
                            performInputEmployeeSourceMainCreditOfficer={this.props.performInputEmployeeSourceMainCreditOfficer}
                            performInputEmployeeSourceMemberMonitoring={this.props.performInputEmployeeSourceMemberMonitoring}
                            onSaveDealStageButtonTap={this.props.onSaveDealStageButtonTap}
                            showDealStagesSavePopover={this.props.showDealStagesSavePopover}
                            dealStageTracking={this.props.dealStageTracking}
                            inputComment={this.props.inputComment}
                            performInputComment={this.props.performInputComment}
                            isStageListEnable={this.props.isStageListEnable}
                            performInputDealDate={this.props.performInputDealDate}
            />
        )
    }
}

export interface IStateProps {
    currentDeal: Models.Deal
    stageList: Array<Models.DealStage>
    selectedStage: Models.DealStage
    isAccessibleStages: boolean
    activePosition: number
    crmStages: Models.CrmStagesList
    progress: number
    system: string | null
    isReadOnlyStages: boolean
    currentStageTab: number
    isVisiblePopoverClientRoadMapHelp: boolean
    isVisiblePopoverClientRoadMap: boolean
    receivingInputParametersInProgress: boolean
    inputDealDate: Date | null
    classifierDictionary: ModelsApp.ClassifierDictionary
    isInputDealDateEnable: boolean
    isRejection: boolean
    isSaveStageEnable: boolean
    inputRejection: ModelsApp.Classifier
    inputCurrency: ModelsApp.Classifier | null
    inputEquivalentSumString: string | null
    accessibleStageList: ModelsApp.ClassifierList
    dealPossibleStageList: Models.DealPossibleStageList
    inputStage: ModelsApp.Classifier
    isErrorEnable: boolean
    receivingInputParametersError: Error | null
    dealHistoryStageList: Models.DealHistoryStageList
    dealStageTracking: Models.DealStageTracking
    saveDealAdditionalFieldsInProgress: boolean
    saveDealAdditionalFieldsError: Error | null
    saveDealStageInProgress:boolean,
    currentStageStatus: ModelsDealStages.ICurrentStageStatus,
    errorMessage: string,
    isSetMainClientManager: boolean,
    isSetMainCreditOfficer: boolean,
    isSetMemberMonitoring: boolean,
    isSetPlannedFinishDate: boolean,
    isSetCloseReason: boolean,
    isSetCurrency: boolean,
    isSetClientStageChanges: boolean,
    isSaveAdditionalFieldsEnable: boolean,
    isButtonPopoverOpenedMainClientManager: boolean,
    isButtonPopoverOpenedMainCreditOfficer: boolean,
    isButtonPopoverOpenedMemberMonitoring: boolean,
    isDealStagesSavePopoverOpened: boolean,
    inputMainClientManager: ModelsApp.Employee | null,
    inputMainCreditOfficer: ModelsApp.Employee | null,
    inputMemberMonitoring: ModelsApp.Employee | null,
    inputComment: string,
    isStageListEnable: boolean,
    saveDealStageError: Error | null,
}

export interface IDispatchProps {
    navigateToStageDetails: ModelsDealStages.NAVIGATE_TO_STAGE_DETAILS
    navigateToStageEditor: ModelsDealStages.NAVIGATE_TO_STAGE_EDITOR
    performChangeStageTab: ModelsDealStages.PERFORM_CHANGE_STAGE_TAB
    performInputDealDate: ModelsDealStages.PERFORM_INPUT_DEAL_DATE
    performSelectRejection: ModelsDealStages.PERFORM_SELECT_REJECTION
    performPopoverClientRoadMapHelpShow: ModelsDealStages.NO_PARAMS_VOID
    performPopoverClientRoadMapHelpHide: ModelsDealStages.NO_PARAMS_VOID
    performClientRoadMapActivate: ModelsDealStages.NO_PARAMS_VOID
    performClientRoadMapNext: ModelsDealStages.NO_PARAMS_VOID
    performInputEquivalentSumString: ModelsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING
    navigateToCurrencyPickerScreen: ModelsDealStages.NAVIGATE_TO_CURRENCY_PICKER_SCREEN
    performPopoverClientRoadMapShow: ModelsDealStages.NO_PARAMS_VOID
    performPopoverClientRoadMapHide: ModelsDealStages.NO_PARAMS_VOID
    performReceivingInputParameters: ModelsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS
    navigateBack:  ModelsDealStages.NAVIGATE_BACK
    navigateBackWithResetData:  ModelsDealStages.NAVIGATE_BACK_WITH_RESET_DATA
    performSaveStage: ModelsDealStages.PERFORM_SAVE_STAGE
    navigateToAdditionalFields: ModelsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS
    performSaveDealAdditionalFields: ModelsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS
    performSaveDealStage: ModelsDealStages.PERFORM_SAVE_DEAL_STAGE
    showButtonPopoverMainClientManager: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER
    showButtonPopoverMainCreditOfficer: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER
    showButtonPopoverMemberMonitoring: ModelsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING
    performInputEmployeeSourceMainClientManager: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER
    performInputEmployeeSourceMainCreditOfficer: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIT_OFFICER
    performInputEmployeeSourceMemberMonitoring: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING
    onSaveDealStageButtonTap: ModelsDealStages.ON_SAVE_DEAL_STAGE_BUTTON_TAP
    showDealStagesSavePopover: ModelsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER
    performInputComment: ModelsDealStages.PERFORM_INPUT_STRING
    navigateToPreviousForm: ModelsDealStages.NAVIGATE_TO_PREVIOUS_FORM
}

function mapStateToProps(state: ModelState.IRootState):IStateProps {
    return {
        currentDeal: state.user.mrmkmcibCRM.reducerDealStages.currentDeal,
        isAccessibleStages: state.user.mrmkmcibCRM.reducerDealStages.isAccessibleStages,
        stageList:state.user.mrmkmcibCRM.reducerDealStages.stageList,
        selectedStage: state.user.mrmkmcibCRM.reducerDealStages.selectedStage,
        activePosition: state.user.mrmkmcibCRM.reducerDealStages.activePosition,
        crmStages: state.user.mrmkmcibCRM.reducerDealStages.crmStages,
        progress:state.user.mrmkmcibCRM.reducerDealStages.progress,
        system:state.user.mrmkmcibCRM.reducerDealStages.system,
        inputDealDate:state.user.mrmkmcibCRM.reducerDealStages.inputDealDate,
        isInputDealDateEnable:state.user.mrmkmcibCRM.reducerDealStages.isInputDealDateEnable,
        isRejection:state.user.mrmkmcibCRM.reducerDealStages.isRejection,
        inputRejection:state.user.mrmkmcibCRM.reducerDealStages.inputRejection,
        inputCurrency:state.user.mrmkmcibCRM.reducerDealStages.inputCurrency,
        inputEquivalentSumString: state.user.mrmkmcibCRM.reducerDealStages.inputEquivalentSumString,
        isReadOnlyStages: state.user.mrmkmcibCRM.reducerDealStages.isReadOnlyStages,
        accessibleStageList: state.user.mrmkmcibCRM.reducerDealStages.accessibleStageList,
        currentStageTab:state.user.mrmkmcibCRM.reducerDealStages.currentStageTab,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        isVisiblePopoverClientRoadMapHelp:state.user.mrmkmcibCRM.reducerDealStages.isVisiblePopoverClientRoadMapHelp,
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
    }
}

function mapDispatchToProps(dispatch: Function): IDispatchProps {
    return {
        navigateToStageDetails: (stage:Models.DealStage, activePosition: number) => {
            dispatch(thunkDealStages.navigateToStageDetails(stage, activePosition))
        },
        navigateToStageEditor: (activePosition: number) => {
            dispatch(thunkDealStageEditor.navigateToDealStageEditor(activePosition))
        },
        performChangeStageTab: (index: number) => {
            dispatch(thunkDealStages.performChangeStageTab(index))
        },
        performPopoverClientRoadMapHelpShow: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHelpShow())
        },
        performPopoverClientRoadMapHelpHide: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHelpHide())
        },
        performClientRoadMapActivate: () => {
            dispatch(thunkDealStages.performClientRoadMapActivate())
        },
        performClientRoadMapNext: () => {
            dispatch(thunkDealStages.performClientRoadMapNext())
        },
        performPopoverClientRoadMapShow: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapShow())
        },
        performReceivingInputParameters: () => {
            dispatch(thunkDealStages.performReceivingInputParameters())
        },
        performPopoverClientRoadMapHide: () => {
            dispatch(thunkDealStages.performPopoverClientRoadMapHide())
        },
        navigateBack: () => {
            dispatch(thunkDealStages.navigateBack())
        },
        navigateBackWithResetData: () => {
            dispatch(thunkDealStages.navigateBackWithResetData())
        },
        navigateToPreviousForm: () => {
            dispatch(thunkDealStages.navigateToPreviousForm())
        },
        performSaveStage: () => {
            dispatch(thunkDealStages.performSaveStage())
        },
        performInputDealDate: (value: Date | null) => {
            dispatch(thunkDealStages.performInputDealDate(value))
        },
        performSelectRejection: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealStages.performSelectRejection(value))
        },
        performSaveDealAdditionalFields: () => {
            dispatch(thunkDealStages.performSaveDealAdditionalFields())
        },
        performSaveDealStage: () => {
            dispatch(thunkDealStages.performSaveDealStage())
        },
        performInputEquivalentSumString: (value: string | null) => {
            dispatch(thunkDealStages.performInputEquivalentSumString(value))
        },
        navigateToCurrencyPickerScreen: () => {
            dispatch(thunkDealStages.navigateToCurrencyPickerScreen())
        },
        showButtonPopoverMainClientManager: (isButtonPopoverOpenedMainClientManager: boolean) => {
            dispatch(thunkDealStages.showButtonPopoverMainClientManager(isButtonPopoverOpenedMainClientManager))
        },
        showButtonPopoverMainCreditOfficer: (isButtonPopoverOpenedMainCreditOfficer: boolean) => {
            dispatch(thunkDealStages.showButtonPopoverMainCreditOfficer(isButtonPopoverOpenedMainCreditOfficer))
        },
        showButtonPopoverMemberMonitoring: (isButtonPopoverOpenedMemberMonitoring: boolean) => {
            dispatch(thunkDealStages.showButtonPopoverMemberMonitoring(isButtonPopoverOpenedMemberMonitoring))
        },
        showDealStagesSavePopover: (isDealStagesSavePopoverOpened: boolean) => {
            dispatch(thunkDealStages.showDealStagesSavePopover(isDealStagesSavePopoverOpened))
        },
        performInputEmployeeSourceMainClientManager: (inputEmployeeSource: Enums.MemberListEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMainClientManager(inputEmployeeSource))
        },
        performInputEmployeeSourceMainCreditOfficer: (inputEmployeeSource: Enums.MemberListEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMainCreditOfficer(inputEmployeeSource))
        },
        performInputEmployeeSourceMemberMonitoring: (inputEmployeeSource: Enums.MemberListEmployeeSource) => {
            dispatch(thunkDealStages.performInputEmployeeSourceMemberMonitoring(inputEmployeeSource))
        },
        onSaveDealStageButtonTap: () => {
            dispatch(thunkDealStages.onSaveDealStageButtonTap())
        },
        performInputComment: (inputComment: string) => {
            dispatch(thunkDealStages.performInputComment(inputComment))
        },
        navigateToAdditionalFields: (stage: ModelsApp.Classifier) => {
            dispatch(thunkDealStages.navigateToAdditionalFields(stage))
        },
    }
}

export type IDealStagesProps = IStateProps & IDispatchProps & { testID: string };


export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealStages)