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

import ViewOccasion from '../components/ViewOccasion'
import * as ModelState from "../models/Models"


/*
 * Container "Occasion". Occasion screen.
 */
class ContainerOccasion extends React.Component<IOccasionProps, any> {

    constructor(props: IOccasionProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewOccasion testID={'test-id-container-Occasion'}

                          performSave={this.props.performSave}

                          performCancel={this.props.performCancel}

                          navigateToOccasionTypePickerScreen={this.props.navigateToOccasionTypePickerScreen}

                          performInputOccasionType={this.props.performInputOccasionType}

                          performInputDate={this.props.performInputDate}

                          performInputNoYear={this.props.performInputNoYear}

                          performInputComment={this.props.performInputComment}

                          performEdit={this.props.performEdit}

                          currentOccasion={this.props.currentOccasion}

                          inputOccasionType={this.props.inputOccasionType}

                          inputDate={this.props.inputDate}

                          inputNoYear={this.props.inputNoYear}

                          inputComment={this.props.inputComment}

                          classifierDictionary={this.props.classifierDictionary}

                          occasionMode={this.props.occasionMode}

                          navigateBack = {this.props.navigateBack}

                          errorValidationList = {this.props.errorValidationList}

                          occasionListContextMode = {this.props.occasionListContextMode}


            >
            </ViewOccasion>
        )
    }
}

export interface IStateProps {

    currentOccasion: Models.Occasion,
    errorValidationList: number[],
    inputOccasionType: ModelsApp.Classifier | null,
    inputDate: Date | null,
    inputNoYear: boolean,
    inputComment: string,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    occasionMode: Enums.OccasionMode,

    occasionListContextMode: Enums.OccasionListContextMode,

}

export interface IDispatchProps {

    performSave: ModelsOccasion.PERFORM_SAVE,
    performCancel: ModelsOccasion.PERFORM_CANCEL,
    navigateToOccasionTypePickerScreen: ModelsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN,
    performInputOccasionType: ModelsOccasion.PERFORM_INPUT_OCCASION_TYPE,
    performInputDate: ModelsOccasion.PERFORM_INPUT_DATE,
    performInputNoYear: ModelsOccasion.PERFORM_INPUT_NO_YEAR,
    performInputComment: ModelsOccasion.PERFORM_INPUT_COMMENT,

    performContainerReset: ModelsOccasion.PERFORM_CONTAINER_RESET,

    performEdit: ModelsOccasionList.PERFORM_EDIT,
    navigateBack: ModelsOccasionList.NAVIGATE_BACK,

}

export type IOccasionProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentOccasion: state.user.mrmkmcibCRM.reducerOccasion.currentOccasion,
        occasionMode: state.user.mrmkmcibCRM.reducerOccasion.occasionMode,
        inputOccasionType: state.user.mrmkmcibCRM.reducerOccasion.inputOccasionType,
        inputDate: state.user.mrmkmcibCRM.reducerOccasion.inputDate,
        inputNoYear: state.user.mrmkmcibCRM.reducerOccasion.inputNoYear,
        inputComment: state.user.mrmkmcibCRM.reducerOccasion.inputComment,
        errorValidationList: state.user.mrmkmcibCRM.reducerOccasion.errorValidationList,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        occasionListContextMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListContextMode,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performSave: () => {
            dispatch(thunkOccasion.performSave())
        },

        performCancel: () => {
            dispatch(thunkOccasion.performCancel())
        },

        navigateToOccasionTypePickerScreen: () => {
            dispatch(thunkOccasion.navigateToOccasionTypePickerScreen())
        },

        performInputOccasionType: (value: ModelsApp.Classifier) => {
            dispatch(thunkOccasion.performInputOccasionType(value))
        },

        performInputDate: (value: Date | null) => {
            dispatch(thunkOccasion.performInputDate(value))
        },

        performInputNoYear: (value: boolean) => {
            dispatch(thunkOccasion.performInputNoYear(value))
        },

        performInputComment: (value: string) => {
            dispatch(thunkOccasion.performInputComment(value))
        },

        navigateBack: () => {
            dispatch(thunkOccasion.navigateBack())
        },

        performEdit: () => {
            dispatch(thunkOccasion.performEdit())
        },



        performChangeDisplayOccasionErrorModalWindow: (value: boolean) => {

            dispatch(thunkOccasion.performChangeDisplayOccasionErrorModalWindow(value))

        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerOccasion)