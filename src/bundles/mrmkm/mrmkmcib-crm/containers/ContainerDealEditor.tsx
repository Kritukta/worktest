/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkParentDealPicker from '../thunk/ThunkParentDealPicker'
import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsCampaignPicker from "../models/ModelsCampaignPicker"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsParentDealPicker from "../models/ModelsParentDealPicker"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewDealEditor from '../components/ViewDealEditor'
import * as ModelState from "../models/Models"


/*
 * Container "DealEditor". Deal editor screen.
 */
class ContainerDealEditor extends React.Component<IDealEditorProps, any> {

    constructor(props: IDealEditorProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }



    render() {
        return (
            <ViewDealEditor testID={'test-id-container-DealEditor'}

                            navigateToDealEditor={this.props.navigateToDealEditor}
                            navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                            navigateBack={this.props.navigateBack}
                            navigateBackEditor={this.props.navigateBackEditor}
                            navigateToProductPickerScreen={this.props.navigateToProductPickerScreen}
                            navigateToSalesMethodPickerScreen={this.props.navigateToSalesMethodPickerScreen}
                            navigateToCurrencyPickerScreen={this.props.navigateToCurrencyPickerScreen}
                            navigateToActivityListScreen={this.props.navigateToActivityListScreen}
                            performCancel={this.props.performCancel}
                            performNext={this.props.performNext}
                            performSave={this.props.performSave}
                            performInputDescription={this.props.performInputDescription}
                            performInputProduct={this.props.performInputProduct}
                            performInputSalesMethod={this.props.performInputSalesMethod}
                            performInputCurrency={this.props.performInputCurrency}
                            performInputSumString={this.props.performInputSumString}
                            performInputEquivalentSumString={this.props.performInputEquivalentSumString}
                            performInputDealDate={this.props.performInputDealDate}
                            performActivityListAppend={this.props.performActivityListAppend}
                            callPutDealActivityAppend={this.props.callPutDealActivityAppend}
                            performActivityListExclude={this.props.performActivityListExclude}
                            callPutDealActivityExclude={this.props.callPutDealActivityExclude}
                            performScopeClearAndRefresh={this.props.performScopeClearAndRefresh}
                            performContainerReset={this.props.performContainerReset}
                            validationError={this.props.validationError}
                            navigateToDealTypePickerScreen={this.props.navigateToDealTypePickerScreen}
                            showChancePopover={this.props.showChancePopover}
                            performSelectChance={this.props.performSelectChance}
                            performCancelSaveError={this.props.performCancelSaveError}
                            showApplicationPopover={this.props.showApplicationPopover}
                            performSelectApplication={this.props.performSelectApplication}
                            showSalesMethodPopover={this.props.showSalesMethodPopover}
                            performSelectSalesMethod={this.props.performSelectSalesMethod}
                            performInputTransferCommission={this.props.performInputTransferCommission}
                            performInputStaffCount={this.props.performInputStaffCount}

                            currentCustomerManaged={this.props.currentCustomerManaged}
                            currentDeal={this.props.currentDeal}
                            currentEditorStep={this.props.currentEditorStep}
                            isEditorMode={this.props.isEditorMode}
                            isRowBlocked={this.props.isRowBlocked}
                            inputDescription={this.props.inputDescription}
                            inputProduct={this.props.inputProduct}
                            salesMethodList={this.props.salesMethodList}
                            inputSalesMethod={this.props.inputSalesMethod}
                            inputCurrency={this.props.inputCurrency}
                            inputSumString={this.props.inputSumString}
                            inputEquivalentSumString={this.props.inputEquivalentSumString}
                            inputDealDate={this.props.inputDealDate}
                            inputTeam={this.props.inputTeam}
                            activityList={this.props.activityList}
                            currentActivity={this.props.currentActivity}
                            dealActivityAppend={this.props.dealActivityAppend}
                            dealActivityAppendFetching={this.props.dealActivityAppendFetching}
                            dealActivityAppendError={this.props.dealActivityAppendError}
                            dealActivityAppendCachedDate={this.props.dealActivityAppendCachedDate}
                            dealActivityExclude={this.props.dealActivityExclude}
                            dealActivityExcludeFetching={this.props.dealActivityExcludeFetching}
                            dealActivityExcludeError={this.props.dealActivityExcludeError}
                            dealActivityExcludeCachedDate={this.props.dealActivityExcludeCachedDate}
                            dealSaveInProgress={this.props.dealSaveInProgress}
                            dealSaveError={this.props.dealSaveError}
                            dealCreated={this.props.dealCreated}
                            dealEditorMode={this.props.dealEditorMode}
                            isValid={this.props.isValid}
                            isEquivalentRateMode={this.props.isEquivalentRateMode}
                            inputEquivalentConversionRateString={this.props.inputEquivalentConversionRateString}
                            isProductMethodEnabled={this.props.isProductMethodEnabled}
                            performTapActivityDelete={this.props.performTapActivityDelete}
                            tapActivityDeleteId={this.props.tapActivityDeleteId}
                            performInputEquivalentConversionRateString={this.props.performInputEquivalentConversionRateString}
                            isNavigationButtonDisabled={this.props.isNavigationButtonDisabled}
                            isOwner={this.props.isOwner}
                            inputDealType={this.props.inputDealType}
                            isAdditionalFieldsAvailable={this.props.isAdditionalFieldsAvailable}
                            performShowAdditionalFields={this.props.performShowAdditionalFields}
                            navigateToCampaignPickerScreen={this.props.navigateToCampaignPickerScreen}
                            navigateToParentDealPickerScreen={this.props.navigateToParentDealPickerScreen}
                            navigateToAgentListScreen={this.props.navigateToAgentListScreen}
                            isChancePopoverOpened={this.props.isChancePopoverOpened}
                            inputChance={this.props.inputChance}
                            inputApplication={this.props.inputApplication}
                            isApplicationPopoverOpened={this.props.isApplicationPopoverOpened}
                            isSalesMethodPopoverOpened={this.props.isSalesMethodPopoverOpened}
                            applicationKkClassifierList={this.props.applicationKkClassifierList}
                            inputTransferCommission={this.props.inputTransferCommission}
                            inputStaffCount={this.props.inputStaffCount}
                            isAttractionChannelPopoverOpened={this.props.isAttractionChannelPopoverOpened}
                            inputAttractionChannel={this.props.inputAttractionChannel}
                            showAttractionChannelPopover={this.props.showAttractionChannelPopover}
                            performSelectAttractionChannel={this.props.performSelectAttractionChannel}
                            inputAgentList={this.props.inputAgentList}
                            classifierDictionary={this.props.classifierDictionary}
            >
            </ViewDealEditor>
        )
    }
}

export interface IStateProps {

    currentCustomerManaged: Models.CustomerManaged,
    currentDeal: Models.Deal,
    currentEditorStep: Enums.DealEditorStep,
    isEditorMode: boolean,
    isRowBlocked: boolean,
    inputDescription: string,
    inputProduct: ModelsApp.Classifier,
    inputApplication: ModelsApp.Classifier,
    salesMethodList: ModelsApp.ClassifierList,
    inputSalesMethod: ModelsApp.Classifier,
    inputCurrency: ModelsApp.Classifier | null,
    inputSumString: string | null,
    inputEquivalentSumString: string | null,
    inputDealDate: Date | null,
    activityList: ModelsScheduler.ActivityList,
    currentActivity: ModelsScheduler.Activity,
    dealActivityAppend: boolean,
    dealActivityAppendFetching: boolean,
    dealActivityAppendError: Error | null,
    dealActivityAppendCachedDate: Date | null,
    dealActivityExclude: boolean,
    dealActivityExcludeFetching: boolean,
    dealActivityExcludeError: Error | null,
    dealActivityExcludeCachedDate: Date | null,
    dealEditorMode: Enums.DealEditorMode | null,
    dealSaveInProgress: boolean,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    dealSaveError: Error | null,
    validationError: Error | null,
    dealCreated:boolean,
    isEquivalentRateMode: boolean,
    isValid:boolean,
    inputEquivalentConversionRateString: string | null,
    isProductMethodEnabled: boolean,
    inputTeam: Models.MemberList,
    tapActivityDeleteId: string | Enums.SwipeableRowEmptyId,
    isNavigationButtonDisabled: boolean,
    isOwner: boolean,
    isAdditionalFieldsAvailable: boolean,
    inputDealType: ModelsApp.Classifier,
    isChancePopoverOpened: boolean,
    inputChance: string | null,
    inputTransferCommission: string | null,
    inputStaffCount: string | null,
    isApplicationPopoverOpened: boolean,
    isSalesMethodPopoverOpened: boolean,
    isAttractionChannelPopoverOpened: boolean,
    inputAttractionChannel: ModelsApp.Classifier,
    applicationKkClassifierList:  ModelsApp.ClassifierList,
    inputAgentList: Models.AgentList,
}

export interface IDispatchProps {
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR,
    navigateToMemberListScreen: ModelsDealEditor.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    navigateBack: ModelsDealEditor.NAVIGATE_BACK,
    navigateBackEditor: ModelsDealEditor.NAVIGATE_BACK_EDITOR,
    navigateToProductPickerScreen: ModelsDealEditor.NAVIGATE_TO_PRODUCT_PICKER_SCREEN,
    navigateToSalesMethodPickerScreen: ModelsDealEditor.NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN,
    navigateToCurrencyPickerScreen: ModelsDealEditor.NAVIGATE_TO_CURRENCY_PICKER_SCREEN,
    navigateToActivityListScreen: ModelsDealEditor.NAVIGATE_TO_ACTIVITY_LIST_SCREEN,
    performCancel: ModelsDealEditor.PERFORM_CANCEL,
    performNext: ModelsDealEditor.PERFORM_NEXT,
    performSave: ModelsDealEditor.PERFORM_SAVE,
    performInputDescription: ModelsDealEditor.PERFORM_INPUT_DESCRIPTION,
    performInputProduct: ModelsDealEditor.PERFORM_INPUT_PRODUCT,
    performInputSalesMethod: ModelsDealEditor.PERFORM_INPUT_SALES_METHOD,
    performInputCurrency: ModelsDealEditor.PERFORM_INPUT_CURRENCY,
    performInputSumString: ModelsDealEditor.PERFORM_INPUT_SUM_STRING,
    performInputEquivalentSumString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING,
    performInputDealDate: ModelsDealEditor.PERFORM_INPUT_DEAL_DATE,
    performActivityListAppend: ModelsDealEditor.PERFORM_ACTIVITY_LIST_APPEND,
    callPutDealActivityAppend: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND,
    performActivityListExclude: ModelsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE,
    callPutDealActivityExclude: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE,
    performScopeClearAndRefresh: ModelsDealEditor.PERFORM_SCOPE_CLEAR_AND_REFRESH,
    performContainerReset: ModelsDealEditor.PERFORM_CONTAINER_RESET,
    performTapActivityDelete: ModelsDealEditor.PERFORM_TAP_ACTIVITY_DELETE,
    performCancelSaveError: ModelsDealEditor.PERFORM_CANCEL_SAVE_ERROR,
    performInputEquivalentConversionRateString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING,
    navigateToDealTypePickerScreen: ModelsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN,
    performShowAdditionalFields: ModelsDealEditor.PERFORM_SHOW_ADDITIONAL_FIELDS,
    navigateToCampaignPickerScreen: ModelsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN,
    navigateToParentDealPickerScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN,
    navigateToAgentListScreen: ModelsDealEditor.NAVIGATE_TO_AGENT_PICKER_SCREEN,
    showChancePopover: ModelsDealEditor.SHOW_CHANCE_POPOVER,
    performSelectChance:  ModelsDealEditor.PERFORM_SELECT_CHANCE,
    showApplicationPopover: ModelsDealEditor.SHOW_APPLICATION_POPOVER,
    performSelectApplication:  ModelsDealEditor.PERFORM_SELECT_APPLICATION,
    showSalesMethodPopover: ModelsDealEditor.SHOW_SALES_METHOD_POPOVER,
    performInputTransferCommission: ModelsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION,
    performInputStaffCount: ModelsDealEditor.PERFORM_INPUT_STAFF_COUNT,
    showAttractionChannelPopover: ModelsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER,
    performSelectAttractionChannel: ModelsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL,
    performSelectSalesMethod: ModelsDealEditor.PERFORM_SELECT_SALES_METHOD,
}

export type IDealEditorProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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
        inputEquivalentConversionRateString:state.user.mrmkmcibCRM.reducerDealEditor.inputEquivalentConversionRateString,
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
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToDealEditor: (deal: Models.Deal, mode:Enums.DealEditorMode,agentList: Models.AgentList | null) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal, mode, agentList))
        },
        navigateToDealTypePickerScreen: () => {
            dispatch(thunkDealEditor.navigateToDealTypePickerScreen())
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkDealEditor.navigateToMemberListScreen())
        },
        navigateBack: () => {
            dispatch(thunkDealEditor.navigateBack())
        },
        navigateBackEditor: () => {
            dispatch(thunkDealEditor.navigateBackEditor())
        },
        navigateToProductPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToProductPickerScreen())
        },
        navigateToSalesMethodPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToSalesMethodPickerScreen())
        },
        navigateToCurrencyPickerScreen: () => {
            dispatch(thunkDealEditor.navigateToCurrencyPickerScreen())
        },
        navigateToActivityListScreen: () => {
            dispatch(thunkDealEditor.navigateToActivityListScreen())
        },
        performCancel: () => {
            dispatch(thunkDealEditor.performCancel())
        },
        performNext: () => {
            dispatch(thunkDealEditor.performNext())
        },
        performSave: () => {
            dispatch(thunkDealEditor.performSave())
        },
        performInputDescription: (value: string) => {
            dispatch(thunkDealEditor.performInputDescription(value))
        },
        performInputProduct: (value: ModelsApp.Classifier,) => {
            dispatch(thunkDealEditor.performInputProduct(value,))
        },
        performInputSalesMethod: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealEditor.performInputSalesMethod(value))
        },
        performInputCurrency: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealEditor.performInputCurrency(value))
        },
        performInputSumString: (value: string | null) => {
            dispatch(thunkDealEditor.performInputSumString(value))
        },
        performInputEquivalentSumString: (value: string | null) => {
            dispatch(thunkDealEditor.performInputEquivalentSumString(value))
        },
        performInputDealDate: (value: Date | null) => {
            dispatch(thunkDealEditor.performInputDealDate(value))
        },
        performActivityListExclude: (activity: ModelsScheduler.Activity) => {
            dispatch(thunkDealEditor.performActivityListExclude(activity))
        },
        callPutDealActivityExclude: () => {
            dispatch(thunkDealEditor.callPutDealActivityExclude())
        },
        performScopeClearAndRefresh: () => {
            dispatch(thunkDealEditor.performScopeClearAndRefresh())
        },
        performContainerReset: () => {
            dispatch(thunkDealEditor.performContainerReset())
        },
        performTapActivityDelete: (id: string) => {
            dispatch(thunkDealEditor.performTapActivityDelete(id))
        },
        performInputEquivalentConversionRateString: (value: string | null) => {
            dispatch(thunkDealEditor.performInputEquivalentConversionRateString(value))
        },
        performCancelSaveError: () => {
            dispatch(thunkDealEditor.performCancelSaveError())
        },
        performShowAdditionalFields: () => {
            dispatch(thunkDealEditor.performShowAdditionalFields())
        },
        navigateToCampaignPickerScreen: () => {
            dispatch(thunkCampaignPicker.navigateToCampaignPickerScreen())
        },
        navigateToParentDealPickerScreen: (mode: Enums.ParentDealPickerMode) => {
            dispatch(thunkParentDealPicker.navigateToParentDealCustomerListScreen(mode))
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkDealEditor.navigateToAgentListScreen())
        },
        showChancePopover: (value: boolean) => {
            dispatch(thunkDealEditor.showChancePopover(value))
        },
        performSelectChance: (value: string | undefined | null) => {
            dispatch(thunkDealEditor.performSelectChance(value))
        },
        showApplicationPopover: (value: boolean) => {
            dispatch(thunkDealEditor.showApplicationPopover(value))
        },
        performSelectApplication: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealEditor.performSelectApplication(value))
        },
        showSalesMethodPopover: (value: boolean) => {
            dispatch(thunkDealEditor.showSalesMethodPopover(value))
        },
        performInputTransferCommission: (value: string | null) => {
            dispatch(thunkDealEditor.performInputTransferCommission(value))
        },
        performInputStaffCount: (value: string | null) => {
            dispatch(thunkDealEditor.performInputStaffCount(value))
        },
        showAttractionChannelPopover: (value: boolean) => {
            dispatch(thunkDealEditor.showAttractionChannelPopover(value))
        },
        performSelectAttractionChannel: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealEditor.performSelectAttractionChannel(value))
        },
        performSelectSalesMethod: (value: ModelsApp.Classifier) => {
            dispatch(thunkDealEditor.performSelectSalesMethod(value))
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealEditor)
