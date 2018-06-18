/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewAppDashboardStyles'

import {View,} from 'ufs-mobile-platform'
import {Models as ModelsApp, LoaderWithText} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-dashboard"
import * as ModelsAppDashboard from "../models/ModelsAppDashboard"
import Error from "../models/Error"


import CustomerSearchList from "./AppDashboard/CustomerSearchList"
import ShareDataView from "./AppDashboard/ShareDataView"
import QlikView from "./shared/QlikView";
import * as util from '../common/Util'

const getSearchPanel = (props: IProps) => {
    if (props.isSearchMode)
        return (<CustomerSearchList testID='test-id-c331d384-366c-f1df-fb71-75256c290518' {...props}/>)
    else {
        return (<View testID='test-id-de335c91-a511-82de-3da0-1aea99473dd9'/>)
    }
}

const getShareDataView = (props: IProps) => {
    /// let isExtended = (props.currentQlikEventPayload ? JSON.parse(props.currentQlikEventPayload).payload.flag : 0) == 1
    let isExtended = props.currentQlikMessage.payload.flag == 1

    return (<ShareDataView testID='test-id-c331d384-886c-f1df-fb71-75256c290518'
                           isDashboardExpandedMode={true}
                           fromOutside={false}
                           isRepresentationVisible={isExtended}
        {...props}/>)
}

const getUri = (props: IProps) => {
    let baseUri: string = util.chooseURL(props)
    if( props.currentQlikUrl != null ) {
        return baseUri + props.currentQlikUrl
    } else {
        return baseUri
    }
}



/*
 * UI stateless functional component presenter for "AppDashboard" container.
 */

export interface IProps {
    inputSharePopoverSearchRefresh: ModelsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentRecipientListRefresh: ModelsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentRepresentationRefresh: ModelsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    inputCurrentFileFormatRefresh: ModelsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    foundPersonListClear: ModelsAppDashboard.FOUND_PERSON_LIST_CLEAR,
    navigateToPopoverShareRecipientsScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareRepresentationScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareFormatScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    navigateToPopoverShareBack: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    performPopoverShareShow: ModelsAppDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsAppDashboard.PERFORM_POPOVER_SHARE_HIDE,
    performApplicationInit: ModelsAppDashboard.PERFORM_APPLICATION_INIT,
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR,
    performInputSearchCustomerManaged: ModelsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED,
    performSearchModeEnable: ModelsAppDashboard.PERFORM_SEARCH_MODE_ENABLE,
    performSearchModeDisable: ModelsAppDashboard.PERFORM_SEARCH_MODE_DISABLE,
    performInputSearch: ModelsAppDashboard.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsAppDashboard.PERFORM_SEARCH_RESET,
    performSearch: ModelsAppDashboard.PERFORM_SEARCH,
    performCustomerSearchListAppend: ModelsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    performQlikEvent: ModelsAppDashboard.PERFORM_QLIK_EVENT,
    performCustomerSelect: ModelsAppDashboard.PERFORM_CUSTOMER_SELECT,
    performSearchHistoryListClear: ModelsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR,
    persistSearchHistoryList: ModelsAppDashboard.PERSIST_SEARCH_HISTORY_LIST,
    recoverSearchHistoryList: ModelsAppDashboard.RECOVER_SEARCH_HISTORY_LIST,
    performContainerReset: ModelsAppDashboard.PERFORM_CONTAINER_RESET,
    performSend: ModelsAppDashboard.PERFORM_SEND,
    isVisiblePopoverShare: boolean,
    currentCustomerManaged:ModelsCrm.CustomerManaged,
    currentRecipientList: ModelsScheduler.PersonList,
    currentRepresentation: Enums.Representation,
    currentFileFormat: Enums.FileFormat,
    qlikError: Error | null,
    currentUser: ModelsApp.Employee,
    currentQlikMessage: Models.QlikMessage,
    isSearchMode: boolean,
    inputSearch: string,
    customerSearchType: Enums.CustomerSearchType,
    customerSearchError: string,
    isSearchError: boolean,
    currentSearchPage: number,
    customerSearchList: ModelsCrm.CustomerList,
    isSearchCustomerManaged: boolean,
    qlikAvailabilityCheck: boolean,
    qlikAvailabilityCheckFetching: boolean,
    qlikAvailabilityCheckError: Error | null,
    qlikAvailabilityCheckCachedDate: Date | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    searchAppend: boolean,
    searchAppendInProgress: boolean,
    searchAppendError: Error | null,
    searchHistoryList: Models.SearchHistoryList,
    searchHistoryListInProgress: boolean,
    searchHistoryListError: Error | null,
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    foundPersonListInProgress: boolean,
    foundPersonListError: Error | null,
    inputSharePopoverSearch: string,
    sendFetching: boolean,
    sendError: Error | null,
    sendSuccess: boolean,
    testID: string,
    currentQlikUrl: string | null,
    qlikCookie: string | null,
    isPopoverVisibleSearchScreen: boolean,
    supParameters: Models.SupParams,
    navigateBack: ModelsAppDashboard.NAVIGATE_BACK,
    navigateBackData: ModelsApp.NavigateToEntity | null,
}

const ViewAppDashboard: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-9f33e4b8-9144-0f96-18ac-c9868c1f734a' style={Styles.main}>
        <View style={Styles.main}>
            {getSearchPanel(props)}
            {getShareDataView(props)}
           {props.qlikAvailabilityCheckFetching ? <LoaderWithText testID = 'test-id-callDashboardAuthorizationWithCookieFetching_view-0' /> : <QlikView
                testID='test-id-customer_dashboard-qlik_view-0'
                uri={getUri(props)}
                qlikCookie={props.qlikCookie}
                onInternalEvent={props.performQlikEvent}
                qlikError={props.qlikError}
                handleQlikError={props.handleQlikError}
                navigateBack={props.navigateBack}
                isNavigation={props.navigateBackData != null}
            />}
        </View>
    </View>


)

export default ViewAppDashboard
