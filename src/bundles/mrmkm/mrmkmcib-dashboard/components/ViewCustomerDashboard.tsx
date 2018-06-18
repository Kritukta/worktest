/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewCustomerDashboardStyles'
import QlikView from './shared/QlikView'

import {View,} from 'ufs-mobile-platform'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-dashboard"

import {Enums} from '../Enums'
import ShareDataView from "./AppDashboard/ShareDataView"
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard"
import Error from "../models/Error"


import * as util from '../common/Util'

const getUri = (props: IProps) => {

    let baseUri: string = util.chooseURL(props)

    if( props.currentQlikUrl != null && props.currentQlikUrl != '' ) {
        return baseUri + props.currentQlikUrl
    }

    //const {kpiId = '', kpiForHolding = false} = props
    // FIXME получать из currentQlikEventPayload
    const kpiId: string = ''
    const kpiForHolding: boolean = false
    const {id, isHolding} = props.currentCustomerManaged
    return util.urlCustomerDashboardTail(baseUri, id, kpiId, isHolding, kpiForHolding)
}

/**
 * kpiId {[string]} Номер отображаемого показателя (пустой для отображения всех kpi).
 * kpiForHolding {[boolean]} Отображать показатели для всего холдинга, в который входит ю/л.
 */


const getShareDataView = (props: IProps) => {
    let isExtended = props.currentQlikMessage.payload.flag == 1
    return (
        <ShareDataView
            testID='test-id-c331d384-886c-f1df-fb71-75256c290518'
            isDashboardExpandedMode={props.isDashboardExpandedMode}
            fromOutside={true}
            isRepresentationVisible={isExtended}
            {...props}
        />
    )
}


/*
 * UI stateless functional component presenter for "CustomerDashboard" container.
 */

export interface IProps {
    inputSharePopoverSearchRefresh: ModelsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentRecipientListRefresh: ModelsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentRepresentationRefresh: ModelsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    inputCurrentFileFormatRefresh: ModelsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    foundPersonListClear: ModelsCustomerDashboard.FOUND_PERSON_LIST_CLEAR,
    navigateToPopoverShareRecipientsScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareRepresentationScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareFormatScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    navigateToPopoverShareBack: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    performPopoverShareShow: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE,
    performApplicationInit: ModelsCustomerDashboard.PERFORM_APPLICATION_INIT,
    handleQlikError: ModelsCustomerDashboard.HANDLE_QLIK_ERROR,
    callQlikAvailabilityCheck: ModelsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK,
    performQlikEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT,
    performContainerReset: ModelsCustomerDashboard.PERFORM_CONTAINER_RESET,
    performSend: ModelsCustomerDashboard.PERFORM_SEND,
    isVisiblePopoverShare: boolean,
    currentRecipientList: ModelsScheduler.PersonList,
    currentRepresentation: Enums.Representation,
    currentFileFormat: Enums.FileFormat,
    currentCustomerManaged: ModelsCrm.CustomerManaged,
    currentUser: ModelsApp.Employee,
    currentQlikUrl: string | null,
    qlikCookie: string | null,
    currentQlikMessage: Models.QlikMessage;
    qlikError: Error | null,
    qlikAvailabilityCheck: boolean,
    qlikAvailabilityCheckFetching: boolean,
    qlikAvailabilityCheckError: Error | null,
    qlikAvailabilityCheckCachedDate: Date | null,
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    foundPersonListInProgress: boolean,
    foundPersonListError: Error | null,
    inputSharePopoverSearch: string,
    sendFetching: boolean,
    sendError: Error | null,
    sendSuccess: boolean,
    isDashboardExpandedMode: boolean,
    testID: string,
    isPopoverVisibleSearchScreen: boolean,
    isTrimmedTop: boolean,
    supParameters: Models.SupParams,
    navigateBack: ModelsCustomerDashboard.NAVIGATE_BACK,
    navigateBackData: ModelsApp.NavigateToEntity | null,
}

const ViewCustomerDashboard: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (

    <View testID='test-id-2ac6c686-b5d7-be01-f5c7-c12af4bafde8' style={Styles.main}>
        <View style={Styles.main}>
            {getShareDataView(props)}
            <QlikView
                testID='test-id-customer_dashboard-qlik_view-1'
                uri={getUri(props)}
                qlikCookie={props.qlikCookie}
                onInternalEvent={props.performQlikEvent}
                qlikError={props.qlikError}
                handleQlikError={props.handleQlikError}
                isTrimmedTop={props.isTrimmedTop}
                navigateBack={props.navigateBack}
                isNavigation={props.navigateBackData != null}
            />
        </View>
    </View>

)

export default ViewCustomerDashboard
