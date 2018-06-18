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
import * as ModelsDealEditor from "../models/ModelsDealEditor"
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

import ViewCustomerEditor from '../components/ViewCustomerEditor'
import * as ModelState from "../models/Models"


/*
 * Container "CustomerEditor". Customer editor screen.
 */
class ContainerCustomerEditor extends React.Component<ICustomerEditorProps, any> {

    constructor(props: ICustomerEditorProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewCustomerEditor testID={'test-id-container-CustomerEditor'}

                                performCustomerEditorShow={this.props.performCustomerEditorShow}
                                performCancel={this.props.performCancel}
                                performNext={this.props.performNext}
                                performSave={this.props.performSave}
                                callPutCustomerUpdate={this.props.callPutCustomerUpdate}
                                navigateToCountryPickerScreen={this.props.navigateToCountryPickerScreen}
                                performInputCountry={this.props.performInputCountry}
                                performInputSubject={this.props.performInputSubject}
                                performInputRegion={this.props.performInputRegion}
                                performInputCity={this.props.performInputCity}
                                performInputSettlement={this.props.performInputSettlement}
                                performInputStreet={this.props.performInputStreet}
                                performInputHouse={this.props.performInputHouse}
                                performInputBuilding={this.props.performInputBuilding}
                                performInputBlock={this.props.performInputBlock}
                                performInputFlat={this.props.performInputFlat}
                                navigateToCustomerActivityIncludeScreen={this.props.navigateToCustomerActivityIncludeScreen}
                                navigateToCustomerActivityExcludeScreen={this.props.navigateToCustomerActivityExcludeScreen}
                                closeCustomerActivityPanel={this.props.closeCustomerActivityPanel}
                                navigateCustomerEditorBack={this.props.navigateCustomerEditorBack}
                                performContainerReset={this.props.performContainerReset}


                                currentCustomerManaged={this.props.currentCustomerManaged}
                                isVisibleModalCustomerEditor={this.props.isVisibleModalCustomerEditor}
                                currentEditorStep={this.props.currentEditorStep}
                                isEditorMode={this.props.isEditorMode}
                                operationUuid={this.props.operationUuid}
                                inputCountry={this.props.inputCountry}
                                inputSubject={this.props.inputSubject}
                                inputRegion={this.props.inputRegion}
                                inputCity={this.props.inputCity}
                                inputSettlement={this.props.inputSettlement}
                                inputStreet={this.props.inputStreet}
                                inputHouse={this.props.inputHouse}
                                inputBuilding={this.props.inputBuilding}
                                inputBlock={this.props.inputBlock}
                                inputFlat={this.props.inputFlat}
                                customerSave={this.props.customerSave}
                                customerSaveInProgress={this.props.customerSaveInProgress}
                                customerSaveError={this.props.customerSaveError}
                                customerUpdate={this.props.customerUpdate}
                                customerUpdateFetching={this.props.customerUpdateFetching}
                                customerUpdateError={this.props.customerUpdateError}
                                customerUpdateCachedDate={this.props.customerUpdateCachedDate}

                                classifierDictionary={this.props.classifierDictionary}
                                
                                inputCountryValidationError={this.props.inputCountryValidationError}
                                inputSubjectValidationError={this.props.inputSubjectValidationError}
                                inputRegionValidationError={this.props.inputRegionValidationError}
                                inputCityValidationError={this.props.inputCityValidationError}
                                inputSettlementValidationError={this.props.inputSettlementValidationError}
                                inputStreetValidationError={this.props.inputStreetValidationError}
                                inputHouseValidationError={this.props.inputHouseValidationError}
                                inputBuildingValidationError={this.props.inputBuildingValidationError}
                                inputBlockValidationError={this.props.inputBlockValidationError}
                                inputFlatValidationError={this.props.inputFlatValidationError}
                                >
            </ViewCustomerEditor>
        )
    }
}

export interface IStateProps {

    currentCustomerManaged: Models.CustomerManaged,
    isVisibleModalCustomerEditor: boolean,
    currentEditorStep: Enums.CustomerEditorStep,
    isEditorMode: boolean,
    operationUuid: string,
    inputCountry: ModelsApp.Classifier,
    inputSubject: string,
    inputRegion: string,
    inputCity: string,
    inputSettlement: string,
    inputStreet: string,
    inputHouse: string,
    inputBuilding: string,
    inputBlock: string,
    inputFlat: string,
    customerSave: boolean,
    customerSaveInProgress: boolean,
    customerSaveError: Error | null,
    customerUpdate: boolean,
    customerUpdateFetching: boolean,
    customerUpdateError: Error | null,
    customerUpdateCachedDate: Date | null,


    classifierDictionary: ModelsApp.ClassifierDictionary,
    inputCountryValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputSubjectValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputRegionValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputCityValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputSettlementValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputStreetValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputHouseValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputBuildingValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputBlockValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputFlatValidationError: string | null  // State parameter displayed in "CustomerEditor" screen. ValidationError
}

export interface IDispatchProps {

    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    performCancel: ModelsCustomerEditor.PERFORM_CANCEL,
    performNext: ModelsCustomerEditor.PERFORM_NEXT,
    performSave: ModelsCustomerEditor.PERFORM_SAVE,
    callPutCustomerUpdate: ModelsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE,
    navigateToCountryPickerScreen: ModelsCustomerEditor.NAVIGATE_TO_COUNTRY_PICKER_SCREEN,
    performInputCountry: ModelsCustomerEditor.PERFORM_INPUT_COUNTRY,
    performInputSubject: ModelsCustomerEditor.PERFORM_INPUT_SUBJECT,
    performInputRegion: ModelsCustomerEditor.PERFORM_INPUT_REGION,
    performInputCity: ModelsCustomerEditor.PERFORM_INPUT_CITY,
    performInputSettlement: ModelsCustomerEditor.PERFORM_INPUT_SETTLEMENT,
    performInputStreet: ModelsCustomerEditor.PERFORM_INPUT_STREET,
    performInputHouse: ModelsCustomerEditor.PERFORM_INPUT_HOUSE,
    performInputBuilding: ModelsCustomerEditor.PERFORM_INPUT_BUILDING,
    performInputBlock: ModelsCustomerEditor.PERFORM_INPUT_BLOCK,
    performInputFlat: ModelsCustomerEditor.PERFORM_INPUT_FLAT,
    navigateToCustomerActivityIncludeScreen: ModelsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    closeCustomerActivityPanel: ModelsCustomerEditor.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    navigateCustomerEditorBack: ModelsCustomerEditor.NAVIGATE_CUSTOMER_EDITOR_BACK,
    performContainerReset: ModelsCustomerEditor.PERFORM_CONTAINER_RESET,

}

export type ICustomerEditorProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomerEditor.currentCustomerManaged,
        isVisibleModalCustomerEditor: state.user.mrmkmcibCRM.reducerCustomerEditor.isVisibleModalCustomerEditor,
        currentEditorStep: state.user.mrmkmcibCRM.reducerCustomerEditor.currentEditorStep,
        isEditorMode: state.user.mrmkmcibCRM.reducerCustomerEditor.isEditorMode,
        operationUuid: state.user.mrmkmcibCRM.reducerCustomerEditor.operationUuid,
        inputCountry: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCountry,
        inputSubject: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSubject,
        inputRegion: state.user.mrmkmcibCRM.reducerCustomerEditor.inputRegion,
        inputCity: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCity,
        inputSettlement: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSettlement,
        inputStreet: state.user.mrmkmcibCRM.reducerCustomerEditor.inputStreet,
        inputHouse: state.user.mrmkmcibCRM.reducerCustomerEditor.inputHouse,
        inputBuilding: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBuilding,
        inputBlock: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBlock,
        inputFlat: state.user.mrmkmcibCRM.reducerCustomerEditor.inputFlat,
        customerSave: state.user.mrmkmcibCRM.reducerCustomerEditor.customerSave,
        customerSaveInProgress: state.user.mrmkmcibCRM.reducerCustomerEditor.customerSaveInProgress,
        customerSaveError: state.user.mrmkmcibCRM.reducerCustomerEditor.customerSaveError,
        customerUpdate: state.user.mrmkmcibCRM.reducerCustomerEditor.customerUpdate,
        customerUpdateFetching: state.user.mrmkmcibCRM.reducerCustomerEditor.customerUpdateFetching,
        customerUpdateError: state.user.mrmkmcibCRM.reducerCustomerEditor.customerUpdateError,
        customerUpdateCachedDate: state.user.mrmkmcibCRM.reducerCustomerEditor.customerUpdateCachedDate,


        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,

        inputCountryValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCountryValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputSubjectValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSubjectValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputRegionValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputRegionValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputCityValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCityValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputSettlementValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSettlementValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputStreetValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputStreetValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputHouseValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputHouseValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputBuildingValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBuildingValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputBlockValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBlockValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
        inputFlatValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputFlatValidationError,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performCustomerEditorShow: (customer: Models.CustomerManaged,) => {
            dispatch(thunkCustomerEditor.performCustomerEditorShow(customer,))
        },
        performCancel: () => {
            dispatch(thunkCustomerEditor.performCancel())
        },
        performNext: () => {
            dispatch(thunkCustomerEditor.performNext())
        },
        performSave: () => {
            dispatch(thunkCustomerEditor.performSave())
        },
        callPutCustomerUpdate: () => {
            dispatch(thunkCustomerEditor.callPutCustomerUpdate())
        },
        navigateToCountryPickerScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCountryPickerScreen())
        },
        performInputCountry: (value: ModelsApp.Classifier) => {
            dispatch(thunkCustomerEditor.performInputCountry(value))
        },
        performInputSubject: (value: string) => {
            dispatch(thunkCustomerEditor.performInputSubject(value))
        },
        performInputRegion: (value: string) => {
            dispatch(thunkCustomerEditor.performInputRegion(value))
        },
        performInputCity: (value: string) => {
            dispatch(thunkCustomerEditor.performInputCity(value))
        },
        performInputSettlement: (value: string) => {
            dispatch(thunkCustomerEditor.performInputSettlement(value))
        },
        performInputStreet: (value: string) => {
            dispatch(thunkCustomerEditor.performInputStreet(value))
        },
        performInputHouse: (value: string) => {
            dispatch(thunkCustomerEditor.performInputHouse(value))
        },
        performInputBuilding: (value: string) => {
            dispatch(thunkCustomerEditor.performInputBuilding(value))
        },
        performInputBlock: (value: string) => {
            dispatch(thunkCustomerEditor.performInputBlock(value))
        },
        performInputFlat: (value: string) => {
            dispatch(thunkCustomerEditor.performInputFlat(value))
        },
        navigateToCustomerActivityIncludeScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCustomerActivityIncludeScreen())
        },
        navigateToCustomerActivityExcludeScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCustomerActivityExcludeScreen())
        },
        closeCustomerActivityPanel: () => {
            dispatch(thunkCustomerEditor.closeCustomerActivityPanel())
        },
        navigateCustomerEditorBack: () => {
            dispatch(thunkCustomerEditor.navigateCustomerEditorBack())
        },
        performContainerReset: () => {
            dispatch(thunkCustomerEditor.performContainerReset())
        },

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerCustomerEditor)