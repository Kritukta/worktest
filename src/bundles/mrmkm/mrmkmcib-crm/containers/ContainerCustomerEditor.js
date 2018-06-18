/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor';
import ViewCustomerEditor from '../components/ViewCustomerEditor';
/*
 * Container "CustomerEditor". Customer editor screen.
 */
class ContainerCustomerEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewCustomerEditor, { testID: 'test-id-container-CustomerEditor', performCustomerEditorShow: this.props.performCustomerEditorShow, performCancel: this.props.performCancel, performNext: this.props.performNext, performSave: this.props.performSave, callPutCustomerUpdate: this.props.callPutCustomerUpdate, navigateToCountryPickerScreen: this.props.navigateToCountryPickerScreen, performInputCountry: this.props.performInputCountry, performInputSubject: this.props.performInputSubject, performInputRegion: this.props.performInputRegion, performInputCity: this.props.performInputCity, performInputSettlement: this.props.performInputSettlement, performInputStreet: this.props.performInputStreet, performInputHouse: this.props.performInputHouse, performInputBuilding: this.props.performInputBuilding, performInputBlock: this.props.performInputBlock, performInputFlat: this.props.performInputFlat, navigateToCustomerActivityIncludeScreen: this.props.navigateToCustomerActivityIncludeScreen, navigateToCustomerActivityExcludeScreen: this.props.navigateToCustomerActivityExcludeScreen, closeCustomerActivityPanel: this.props.closeCustomerActivityPanel, navigateCustomerEditorBack: this.props.navigateCustomerEditorBack, performContainerReset: this.props.performContainerReset, currentCustomerManaged: this.props.currentCustomerManaged, isVisibleModalCustomerEditor: this.props.isVisibleModalCustomerEditor, currentEditorStep: this.props.currentEditorStep, isEditorMode: this.props.isEditorMode, operationUuid: this.props.operationUuid, inputCountry: this.props.inputCountry, inputSubject: this.props.inputSubject, inputRegion: this.props.inputRegion, inputCity: this.props.inputCity, inputSettlement: this.props.inputSettlement, inputStreet: this.props.inputStreet, inputHouse: this.props.inputHouse, inputBuilding: this.props.inputBuilding, inputBlock: this.props.inputBlock, inputFlat: this.props.inputFlat, customerSave: this.props.customerSave, customerSaveInProgress: this.props.customerSaveInProgress, customerSaveError: this.props.customerSaveError, customerUpdate: this.props.customerUpdate, customerUpdateFetching: this.props.customerUpdateFetching, customerUpdateError: this.props.customerUpdateError, customerUpdateCachedDate: this.props.customerUpdateCachedDate, classifierDictionary: this.props.classifierDictionary, inputCountryValidationError: this.props.inputCountryValidationError, inputSubjectValidationError: this.props.inputSubjectValidationError, inputRegionValidationError: this.props.inputRegionValidationError, inputCityValidationError: this.props.inputCityValidationError, inputSettlementValidationError: this.props.inputSettlementValidationError, inputStreetValidationError: this.props.inputStreetValidationError, inputHouseValidationError: this.props.inputHouseValidationError, inputBuildingValidationError: this.props.inputBuildingValidationError, inputBlockValidationError: this.props.inputBlockValidationError, inputFlatValidationError: this.props.inputFlatValidationError }));
    }
}
function mapStateToProps(state) {
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
        inputCountryValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCountryValidationError,
        inputSubjectValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSubjectValidationError,
        inputRegionValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputRegionValidationError,
        inputCityValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputCityValidationError,
        inputSettlementValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputSettlementValidationError,
        inputStreetValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputStreetValidationError,
        inputHouseValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputHouseValidationError,
        inputBuildingValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBuildingValidationError,
        inputBlockValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputBlockValidationError,
        inputFlatValidationError: state.user.mrmkmcibCRM.reducerCustomerEditor.inputFlatValidationError,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performCustomerEditorShow: (customer) => {
            dispatch(thunkCustomerEditor.performCustomerEditorShow(customer));
        },
        performCancel: () => {
            dispatch(thunkCustomerEditor.performCancel());
        },
        performNext: () => {
            dispatch(thunkCustomerEditor.performNext());
        },
        performSave: () => {
            dispatch(thunkCustomerEditor.performSave());
        },
        callPutCustomerUpdate: () => {
            dispatch(thunkCustomerEditor.callPutCustomerUpdate());
        },
        navigateToCountryPickerScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCountryPickerScreen());
        },
        performInputCountry: (value) => {
            dispatch(thunkCustomerEditor.performInputCountry(value));
        },
        performInputSubject: (value) => {
            dispatch(thunkCustomerEditor.performInputSubject(value));
        },
        performInputRegion: (value) => {
            dispatch(thunkCustomerEditor.performInputRegion(value));
        },
        performInputCity: (value) => {
            dispatch(thunkCustomerEditor.performInputCity(value));
        },
        performInputSettlement: (value) => {
            dispatch(thunkCustomerEditor.performInputSettlement(value));
        },
        performInputStreet: (value) => {
            dispatch(thunkCustomerEditor.performInputStreet(value));
        },
        performInputHouse: (value) => {
            dispatch(thunkCustomerEditor.performInputHouse(value));
        },
        performInputBuilding: (value) => {
            dispatch(thunkCustomerEditor.performInputBuilding(value));
        },
        performInputBlock: (value) => {
            dispatch(thunkCustomerEditor.performInputBlock(value));
        },
        performInputFlat: (value) => {
            dispatch(thunkCustomerEditor.performInputFlat(value));
        },
        navigateToCustomerActivityIncludeScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCustomerActivityIncludeScreen());
        },
        navigateToCustomerActivityExcludeScreen: () => {
            dispatch(thunkCustomerEditor.navigateToCustomerActivityExcludeScreen());
        },
        closeCustomerActivityPanel: () => {
            dispatch(thunkCustomerEditor.closeCustomerActivityPanel());
        },
        navigateCustomerEditorBack: () => {
            dispatch(thunkCustomerEditor.navigateCustomerEditorBack());
        },
        performContainerReset: () => {
            dispatch(thunkCustomerEditor.performContainerReset());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCustomerEditor);
//# sourceMappingURL=ContainerCustomerEditor.js.map