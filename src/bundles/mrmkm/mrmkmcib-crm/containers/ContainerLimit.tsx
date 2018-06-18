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

import ViewLimit from '../components/ViewLimit'
import * as ModelState from "../models/Models"


/*
 * Container "Limit". Customer limit screen.
 */
class ContainerLimit extends React.Component<ILimitProps, any> {

    constructor(props: ILimitProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewLimit testID={'test-id-container-Limit'}

                       performChangeTab={this.props.performChangeTab}
                       performChangeTotalTab={this.props.performChangeTotalTab}
                       performContainerReset={this.props.performContainerReset}

                       navigateBack={this.props.navigateBack}

                       currentTab={this.props.currentTab}
                       currentTotalTab={this.props.currentTotalTab}

                       currentCustomerManaged={this.props.currentCustomerManaged}
                       limit={this.props.limit}
                       limitFetching={this.props.limitFetching}
                       limitError={this.props.limitError}
                       limitCachedDate={this.props.limitCachedDate}>
            </ViewLimit>
        )
    }
}

export interface IStateProps {

    currentTab: Enums.LimitTab,
    currentTotalTab: Enums.LimitTotalTab,


    currentCustomerManaged: Models.CustomerManaged,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,
}

export interface IDispatchProps {

    performChangeTab: ModelsLimit.PERFORM_CHANGE_TAB,
    performChangeTotalTab: ModelsLimit.PERFORM_CHANGE_TOTAL_TAB,
    performContainerReset: ModelsLimit.PERFORM_CONTAINER_RESET,

    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
}

export type ILimitProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentTab: state.user.mrmkmcibCRM.reducerLimit.currentTab,
        currentTotalTab: state.user.mrmkmcibCRM.reducerLimit.currentTotalTab,


        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        limit: state.user.mrmkmcibCRM.reducerCustomer.limit,
        limitFetching: state.user.mrmkmcibCRM.reducerCustomer.limitFetching,
        limitError: state.user.mrmkmcibCRM.reducerCustomer.limitError,
        limitCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitCachedDate,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performChangeTab: (index: number, value: Enums.LimitTab,) => {
            dispatch(thunkLimit.performChangeTab(index, value,))
        },
        performChangeTotalTab: (index: number, value: Enums.LimitTotalTab,) => {
            dispatch(thunkLimit.performChangeTotalTab(index, value,))
        },
        performContainerReset: () => {
            dispatch(thunkLimit.performContainerReset())
        },

        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerLimit)