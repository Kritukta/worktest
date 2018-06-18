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

import ViewOccasionList from '../components/ViewOccasionList'
import * as ModelState from "../models/Models"


/*
 * Container "OccasionList". Occasion list screen.
 */
class ContainerOccasionList extends React.Component<IOccasionListProps, any> {

    constructor(props: IOccasionListProps, context: any) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performInit()
    }

    render() {
        return (
            <ViewOccasionList testID = {'test-id-container-OccasionList'}

                              performInit = {this.props.performInit}
                              performSave = {this.props.performSave}
                              performEdit = {this.props.performEdit}
                              performCancel = {this.props.performCancel}
                              navigateBack = {this.props.navigateBack}
                              performDeleteOccasion = {this.props.performDeleteOccasion}
                              performOpenOccasionScreen = {this.props.performOpenOccasionScreen}
                              performAddOccasionWithMenuOption = {this.props.performAddOccasionWithMenuOption}
                              performDeleteOccasionWithMenuOption = {this.props.performDeleteOccasionWithMenuOption}
                              performCallOccasionListUpdate = {this.props.performCallOccasionListUpdate}
                              performChangeDisplayOccasionListErrorModalWindow = {this.props.performChangeDisplayOccasionListErrorModalWindow}

                              inputOccasionList = {this.props.inputOccasionList}

                              classifierDictionary = {this.props.classifierDictionary}
                              occasionListWithMenuOption = {this.props.occasionListWithMenuOption}
                              occasionListMode = {this.props.occasionListMode}
                              occasionListContextMode = {this.props.occasionListContextMode}
                              occasionListAccessLevel = {this.props.occasionListAccessLevel}

                              isVisibleOccasionListErrorModalWindow = {this.props.isVisibleOccasionListErrorModalWindow}

                              occasionListUpdateInProgress = {this.props.occasionListUpdateInProgress}
                              occasionListUpdateError = {this.props.occasionListUpdateError}

            >
            </ViewOccasionList>
        )
    }
}

export interface IStateProps {
    inputOccasionList: Models.OccasionList,

    occasionListMode: Enums.OccasionListMode
    occasionListContextMode: Enums.OccasionListContextMode,
    occasionListAccessLevel: Enums.OccasionListAccessLevel,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    occasionListWithMenuOption: string[],
    isVisibleOccasionListErrorModalWindow: boolean,

    occasionListUpdateInProgress: boolean,
    occasionListUpdateError: Error | null,

}

export interface IDispatchProps {

    performInit: ModelsOccasionList.PERFORM_INIT,
    performSave: ModelsOccasionList.PERFORM_SAVE,
    performEdit: ModelsOccasionList.PERFORM_EDIT,
    performCancel: ModelsOccasionList.PERFORM_CANCEL,
    navigateBack: ModelsOccasionList.NAVIGATE_BACK,
    performOpenOccasionScreen: ModelsOccasionList.PERFORM_OPEN_OCCASION_SCREEN,
    performDeleteOccasion: ModelsOccasionList.PERFORM_DELETE_OCCASION,
    performAddOccasionWithMenuOption: ModelsOccasionList.PERFORM_ADD_OCCASION_WITH_MENU_OPTION,
    performDeleteOccasionWithMenuOption: ModelsOccasionList.PERFORM_DELETE_OCCASION_WITH_MENU_OPTION,


    performChangeDisplayOccasionListErrorModalWindow: ModelsOccasionList.PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW,
    performCallOccasionListUpdate: ModelsOccasionList.PERFORM_CALL_OCCASION_LIST_UPDATE,

}

export type IOccasionListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        inputOccasionList: state.user.mrmkmcibCRM.reducerOccasionList.inputOccasionList,

        occasionListMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListMode,
        occasionListAccessLevel: state.user.mrmkmcibCRM.reducerOccasionList.occasionListAccessLevel,
        occasionListContextMode: state.user.mrmkmcibCRM.reducerOccasionList.occasionListContextMode,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        occasionListWithMenuOption: state.user.mrmkmcibCRM.reducerOccasionList.occasionListWithMenuOption,
        isVisibleOccasionListErrorModalWindow: state.user.mrmkmcibCRM.reducerOccasionList.isVisibleOccasionListErrorModalWindow,

        occasionListUpdateInProgress: state.user.mrmkmcibCRM.reducerOccasionList.occasionListUpdateInProgress,
        occasionListUpdateError: state.user.mrmkmcibCRM.reducerOccasionList.occasionListUpdateError,

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performInit: () => {
            dispatch(thunkOccasionList.performInit())
        },
        performSave: () => {
            dispatch(thunkOccasionList.performSave())
        },

        performEdit: () => {
            dispatch(thunkOccasionList.performEdit())
        },
        performCancel: () => {
            dispatch(thunkOccasionList.performCancel())
        },
        navigateBack: () => {
            dispatch(thunkOccasionList.navigateBack())
        },

        performOpenOccasionScreen: (occasion: Models.Occasion, occasionMode: Enums.OccasionMode) => {
            dispatch(thunkOccasionList.performOpenOccasionScreen(occasion, occasionMode))
        },
        performAddOccasionWithMenuOption: (occasion: Models.Occasion) => {
            dispatch(thunkOccasionList.performAddOccasionWithMenuOption(occasion))
        },
        performDeleteOccasionWithMenuOption: (occasion: Models.Occasion) => {
            dispatch(thunkOccasionList.performDeleteOccasionWithMenuOption(occasion))
        },
        performDeleteOccasion: (occasion: Models.Occasion) => {
            dispatch(thunkOccasionList.performDeleteOccasion(occasion))
        },

        performCallOccasionListUpdate: () => {
            dispatch(thunkOccasionList.performCallOccasionListUpdate())
        },

        performChangeDisplayOccasionListErrorModalWindow: (value: boolean) => {

            dispatch(thunkOccasionList.performChangeDisplayOccasionListErrorModalWindow(value))

        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerOccasionList)
