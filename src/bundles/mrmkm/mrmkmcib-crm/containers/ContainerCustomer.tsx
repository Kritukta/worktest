/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import {thunkCustomerDashboard} from 'mrmkmcib-dashboard'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import {ModelsCustomerDashboard} from "mrmkmcib-dashboard"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsAgentList from "../models/ModelsAgentList"
import Error from "../models/Error"

import ViewCustomer from '../components/ViewCustomer'
import * as ModelState from "../models/Models"


/*
 * Container "Customer". Customer card screen. Current user managed customer and locked customer.
 */
class ContainerCustomer extends React.Component<ICustomerProps, any> {

    constructor(props: ICustomerProps, context: any) {
        super(props, context);
    }

    componentDidMount() {
        this.props.performInit()
    }
    render() {
        return (
            <ViewCustomer

                          testID={'test-id-container-Customer'}
                          performInputProductListAgreementStatus={this.props.performInputProductListAgreementStatus}
                          performDashboardExpandedModeToggle={this.props.performDashboardExpandedModeToggle}
                          performInputSearchAffiliateList={this.props.performInputSearchAffiliateList}
                          performAffiliateListSearch={this.props.performAffiliateListSearch}
                          performSearchAffiliateListEnable={this.props.performSearchAffiliateListEnable}
                          performSearchAffiliateListDisable={this.props.performSearchAffiliateListDisable}
                          performChangeTab={this.props.performChangeTab}
                          performPopoverHolderShow={this.props.performPopoverHolderShow}
                          performPopoverHolderHide={this.props.performPopoverHolderHide}
                          performPopoverCuratorShow={this.props.performPopoverCuratorShow}
                          performPopoverCuratorHide={this.props.performPopoverCuratorHide}
                          performPopoverOccasionListShow={this.props.performPopoverOccasionListShow}
                          performPopoverOccasionListHide={this.props.performPopoverOccasionListHide}
                          performPopoverNoteListShow={this.props.performPopoverNoteListShow}
                          performPopoverNoteListHide={this.props.performPopoverNoteListHide}
                          performPopoverProblemListShow={this.props.performPopoverProblemListShow}
                          performPopoverProblemListHide={this.props.performPopoverProblemListHide}
                          performPopoverOwnerShow={this.props.performPopoverOwnerShow}
                          performPopoverOwnerHide={this.props.performPopoverOwnerHide}
                          performNavigateToOwnerScreen={this.props.performNavigateToOwnerScreen}
                          navigateToOwnerAgentScreen={this.props.navigateToOwnerAgentScreen}
                          navigateToCustomerScreen={this.props.navigateToCustomerScreen}
                          navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                          performPopoverLimitHide={this.props.performPopoverLimitHide}
                          navigateToPopoverLimitItemScreen={this.props.navigateToPopoverLimitItemScreen}
                          navigatePopoverLimitBack={this.props.navigatePopoverLimitBack}
                          callGetLimitNew={this.props.callGetLimitNew}
                          callGetLimitOld={this.props.callGetLimitOld}
                          performLimitShow={this.props.performLimitShow}
                          performProductTypeListRefresh={this.props.performProductTypeListRefresh}
                          performProductTypeListForceRefresh={ this.props.performProductTypeListForceRefresh }

                          performCallGetUncachedRequestProductList={this.props.performCallGetUncachedRequestProductList}
                          performCallGetCachedRequestProductList={this.props.performCallGetCachedRequestProductList}
                          performCallGetForceRequestProductList={this.props.performCallGetForceRequestProductList}

                          navigateToCustomerActivityIncludeScreen={this.props.navigateToCustomerActivityIncludeScreen}
                          navigateToCustomerActivityExcludeScreen={this.props.navigateToCustomerActivityExcludeScreen}
                          navigateToCustomerActivityAccessScreen={this.props.navigateToCustomerActivityAccessScreen}
                          navigateToOccasionListScreen={this.props.navigateToOccasionListScreen}
                          closeCustomerActivityPanel={this.props.closeCustomerActivityPanel}
                          performContainerReset={this.props.performContainerReset}
                          performCustomerOpen={this.props.performCustomerOpen}
                          performGszOpen={this.props.performGszOpen}
                          performCustomerEditorShow={this.props.performCustomerEditorShow}
                          navigateBack={this.props.navigateBack}
                          navigateToProductListScreen={this.props.navigateToProductListScreen}
                          navigateToProductForecastDealInfoScreen={this.props.navigateToProductForecastDealInfoScreen}
                          navigateToProductForecastEventInfoScreen={this.props.navigateToProductForecastEventInfoScreen}
                          customerNavigationHistory={this.props.customerNavigationHistory}
                          currentCustomerId={this.props.currentCustomerId}
                          currentCustomer={this.props.currentCustomer}
                          currentCustomerManaged={this.props.currentCustomerManaged}
                          isDashboardExpandedMode={this.props.isDashboardExpandedMode}
                          isVisiblePopoverHolder={this.props.isVisiblePopoverHolder}
                          isVisiblePopoverCurator={this.props.isVisiblePopoverCurator}
                          isVisiblePopoverOccasionList={this.props.isVisiblePopoverOccasionList}
                          isVisiblePopoverNoteList={this.props.isVisiblePopoverNoteList}
                          isVisiblePopoverProblemList={this.props.isVisiblePopoverProblemList}
                          isVisibleModalActivityEditor={this.props.isVisibleModalActivityEditor}
                          isVisibleModalPlanner={this.props.isVisibleModalPlanner}
                          isVisibleModalEmailSend={this.props.isVisibleModalEmailSend}
                          isVisibleModalAssociateSearch={this.props.isVisibleModalAssociateSearch}
                          isSearchModeAffiliateList={this.props.isSearchModeAffiliateList}
                          inputSearchAffiliateList={this.props.inputSearchAffiliateList}
                          affiliateSearchList={this.props.affiliateSearchList}
                          currentTab={this.props.currentTab}
                          isVisiblePopoverOwner={this.props.isVisiblePopoverOwner}
                          currentOwner={this.props.currentOwner}
                          currentPopoverLimitItem={this.props.currentPopoverLimitItem}
                          isVisiblePopoverLimit={this.props.isVisiblePopoverLimit}
                
                          customerFetching={this.props.customerFetching}
                          customerError={this.props.customerError}
                          limit={this.props.limit}
                          limitFetching={this.props.limitFetching}
                          limitError={this.props.limitError}
                          limitCachedDate={this.props.limitCachedDate}
                          limitOld={this.props.limitOld}
                          limitOldFetching={this.props.limitOldFetching}
                          limitOldError={this.props.limitOldError}
                          limitOldCachedDate={this.props.limitOldCachedDate}


                          creditActiveProductList={this.props.creditActiveProductList}
                          creditActiveProductListFetching={this.props.creditActiveProductListFetching}
                          creditActiveProductListError={this.props.creditActiveProductListError}
                          creditActiveProductListUpdating={this.props.creditActiveProductListUpdating}
                          creditActiveProductListCachedDate={this.props.creditActiveProductListCachedDate}

                          creditCloseProductList={this.props.creditCloseProductList}
                          creditCloseProductListFetching={this.props.creditCloseProductListFetching}
                          creditCloseProductListError={this.props.creditCloseProductListError}
                          creditCloseProductListUpdating={this.props.creditCloseProductListUpdating}
                          creditCloseProductListCachedDate={this.props.creditCloseProductListCachedDate}


                          depositActiveProductList={this.props.depositActiveProductList}
                          depositActiveProductListFetching={this.props.depositActiveProductListFetching}
                          depositActiveProductListUpdating={this.props.depositActiveProductListUpdating}
                          depositActiveProductListError={this.props.depositActiveProductListError}
                          depositActiveProductListCachedDate={this.props.depositActiveProductListCachedDate}

                          depositCloseProductList={this.props.depositCloseProductList}
                          depositCloseProductListFetching={this.props.depositCloseProductListFetching}
                          depositCloseProductListUpdating={this.props.depositCloseProductListUpdating}
                          depositCloseProductListError={this.props.depositCloseProductListError}
                          depositCloseProductListCachedDate={this.props.depositCloseProductListCachedDate}

                          settlementAgreementActiveProductList={this.props.settlementAgreementActiveProductList}
                          settlementAgreementActiveProductListFetching={this.props.settlementAgreementActiveProductListFetching}
                          settlementAgreementActiveProductListError={this.props.settlementAgreementActiveProductListError}
                          settlementAgreementActiveProductListUpdating={this.props.settlementAgreementActiveProductListUpdating}
                          settlementAgreementActiveProductListCachedDate={this.props.settlementAgreementActiveProductListCachedDate}

                          settlementAgreementCloseProductList={this.props.settlementAgreementCloseProductList}
                          settlementAgreementCloseProductListFetching={this.props.settlementAgreementCloseProductListFetching}
                          settlementAgreementCloseProductListError={this.props.settlementAgreementCloseProductListError}
                          settlementAgreementCloseProductListUpdating={this.props.settlementAgreementCloseProductListUpdating}
                          settlementAgreementCloseProductListCachedDate={this.props.settlementAgreementCloseProductListCachedDate}


                          corporateCardActiveProductList={this.props.corporateCardActiveProductList}
                          corporateCardActiveProductListFetching={this.props.corporateCardActiveProductListFetching}
                          corporateCardActiveProductListError={this.props.corporateCardActiveProductListError}
                          corporateCardActiveProductListUpdating={this.props.corporateCardActiveProductListUpdating}
                          corporateCardActiveProductListCachedDate={this.props.corporateCardActiveProductListCachedDate}

                          corporateCardCloseProductList={this.props.corporateCardCloseProductList}
                          corporateCardCloseProductListFetching={this.props.corporateCardCloseProductListFetching}
                          corporateCardCloseProductListError={this.props.corporateCardCloseProductListError}
                          corporateCardCloseProductListUpdating={this.props.corporateCardCloseProductListUpdating}
                          corporateCardCloseProductListCachedDate={this.props.corporateCardCloseProductListCachedDate}


                          encashmentContractActiveProductList={this.props.encashmentContractActiveProductList}
                          encashmentContractActiveProductListFetching={this.props.encashmentContractActiveProductListFetching}
                          encashmentContractActiveProductListError={this.props.encashmentContractActiveProductListError}
                          encashmentContractActiveProductListUpdating={this.props.encashmentContractActiveProductListUpdating}
                          encashmentContractActiveProductListCachedDate={this.props.encashmentContractActiveProductListCachedDate}

                          encashmentContractCloseProductList={this.props.encashmentContractCloseProductList}
                          encashmentContractCloseProductListFetching={this.props.encashmentContractCloseProductListFetching}
                          encashmentContractCloseProductListError={this.props.encashmentContractCloseProductListError}
                          encashmentContractCloseProductListUpdating={this.props.encashmentContractCloseProductListUpdating}
                          encashmentContractCloseProductListCachedDate={this.props.encashmentContractCloseProductListCachedDate}

                          acquiringActiveProductList={this.props.acquiringActiveProductList}
                          acquiringActiveProductListFetching={this.props.acquiringActiveProductListFetching}
                          acquiringActiveProductListError={this.props.acquiringActiveProductListError}
                          acquiringActiveProductListUpdating={this.props.acquiringActiveProductListUpdating}
                          acquiringActiveProductListCachedDate={this.props.acquiringActiveProductListCachedDate}

                          acquiringCloseProductList={this.props.acquiringCloseProductList}
                          acquiringCloseProductListFetching={this.props.acquiringCloseProductListFetching}
                          acquiringCloseProductListError={this.props.acquiringCloseProductListError}
                          acquiringCloseProductListUpdating={this.props.acquiringCloseProductListUpdating}
                          acquiringCloseProductListCachedDate={this.props.acquiringCloseProductListCachedDate}

                          dboActiveProductList={this.props.dboActiveProductList}
                          dboActiveProductListFetching={this.props.dboActiveProductListFetching}
                          dboActiveProductListError={this.props.dboActiveProductListError}
                          dboActiveProductListUpdating={this.props.dboActiveProductListUpdating}
                          dboActiveProductListCachedDate={this.props.dboActiveProductListCachedDate}

                          dboCloseProductList={this.props.dboCloseProductList}
                          dboCloseProductListFetching={this.props.dboCloseProductListFetching}
                          dboCloseProductListError={this.props.dboCloseProductListError}
                          dboCloseProductListUpdating={this.props.dboCloseProductListUpdating}
                          dboCloseProductListCachedDate={this.props.dboCloseProductListCachedDate}

                          salaryActiveProductList={this.props.salaryActiveProductList}
                          salaryActiveProductListFetching={this.props.salaryActiveProductListFetching}
                          salaryActiveProductListError={this.props.salaryActiveProductListError}
                          salaryActiveProductListUpdating={this.props.salaryActiveProductListUpdating}
                          salaryActiveProductListCachedDate={this.props.salaryActiveProductListCachedDate}

                          salaryCloseProductList={this.props.salaryCloseProductList}
                          salaryCloseProductListFetching={this.props.salaryCloseProductListFetching}
                          salaryCloseProductListError={this.props.salaryCloseProductListError}
                          salaryCloseProductListUpdating={this.props.salaryCloseProductListUpdating}
                          salaryCloseProductListCachedDate={this.props.salaryCloseProductListCachedDate}

                          udboActiveProductList={this.props.udboActiveProductList}
                          udboActiveProductListFetching={this.props.udboActiveProductListFetching}
                          udboActiveProductListError={this.props.udboActiveProductListError}
                          udboActiveProductListUpdating={this.props.udboActiveProductListUpdating}
                          udboActiveProductListCachedDate={this.props.udboActiveProductListCachedDate}

                          udboCloseProductList={this.props.udboCloseProductList}
                          udboCloseProductListFetching={this.props.udboCloseProductListFetching}
                          udboCloseProductListError={this.props.udboCloseProductListError}
                          udboCloseProductListUpdating={this.props.udboCloseProductListUpdating}
                          udboCloseProductListCachedDate={this.props.udboCloseProductListCachedDate}
                          performFlush={this.props.performFlush}


                          legalInfoProductList={this.props.legalInfoProductList}
                          legalInfoProductListFetching={this.props.legalInfoProductListFetching}
                          legalInfoProductListUpdating={this.props.legalInfoProductListUpdating}
                          legalInfoProductListError={this.props.legalInfoProductListError}
                          legalInfoProductListCachedDate={this.props.legalInfoProductListCachedDate}


                          creditActiveProductEksList={this.props.creditActiveProductEksList}
                          creditActiveProductEksListFetching={this.props.creditActiveProductEksListFetching}
                          creditActiveProductEksListError={this.props.creditActiveProductEksListError}
                          creditActiveProductEksListCachedDate={this.props.creditActiveProductEksListCachedDate}

                          performCallEksRequestProductList = {this.props.performCallEksRequestProductList}

                          creditCloseProductEksList={this.props.creditCloseProductEksList}
                          creditCloseProductEksListFetching={this.props.creditCloseProductEksListFetching}
                          creditCloseProductEksListError={this.props.creditCloseProductEksListError}
                          creditCloseProductEksListCachedDate={this.props.creditCloseProductEksListCachedDate}

                          settlementAgreementActiveProductEksList={this.props.settlementAgreementActiveProductEksList}
                          settlementAgreementActiveProductEksListFetching={this.props.settlementAgreementActiveProductEksListFetching}
                          settlementAgreementActiveProductEksListError={this.props.settlementAgreementActiveProductEksListError}
                          settlementAgreementActiveProductEksListCachedDate={this.props.settlementAgreementActiveProductEksListCachedDate}

                          settlementAgreementCloseProductEksList={this.props.settlementAgreementCloseProductEksList}
                          settlementAgreementCloseProductEksListFetching={this.props.settlementAgreementCloseProductEksListFetching}
                          settlementAgreementCloseProductEksListError={this.props.settlementAgreementCloseProductEksListError}
                          settlementAgreementCloseProductEksListCachedDate={this.props.settlementAgreementCloseProductEksListCachedDate}

                          depositActiveProductEksList={this.props.depositActiveProductEksList}
                          depositActiveProductEksListFetching={this.props.depositActiveProductEksListFetching}
                          depositActiveProductEksListError={this.props.depositActiveProductEksListError}
                          depositActiveProductEksListCachedDate={this.props.depositActiveProductEksListCachedDate}

                          depositCloseProductEksList={this.props.depositCloseProductEksList}
                          depositCloseProductEksListFetching={this.props.depositCloseProductEksListFetching}
                          depositCloseProductEksListError={this.props.depositCloseProductEksListError}
                          depositCloseProductEksListCachedDate={this.props.depositCloseProductEksListCachedDate}

                          corporateCardActiveProductEksList={this.props.corporateCardActiveProductEksList}
                          corporateCardActiveProductEksListFetching={this.props.corporateCardActiveProductEksListFetching}
                          corporateCardActiveProductEksListError={this.props.corporateCardActiveProductEksListError}
                          corporateCardActiveProductEksListCachedDate={this.props.corporateCardActiveProductEksListCachedDate}

                          corporateCardCloseProductEksList={this.props.corporateCardCloseProductEksList}
                          corporateCardCloseProductEksListFetching={this.props.corporateCardCloseProductEksListFetching}
                          corporateCardCloseProductEksListError={this.props.corporateCardCloseProductEksListError}
                          corporateCardCloseProductEksListCachedDate={this.props.corporateCardCloseProductEksListCachedDate}

                          encashmentContractActiveProductEksList={this.props.encashmentContractActiveProductEksList}
                          encashmentContractActiveProductEksListFetching={this.props.encashmentContractActiveProductEksListFetching}
                          encashmentContractActiveProductEksListError={this.props.encashmentContractActiveProductEksListError}
                          encashmentContractActiveProductEksListCachedDate={this.props.encashmentContractActiveProductEksListCachedDate}

                          encashmentContractCloseProductEksList={this.props.encashmentContractCloseProductEksList}
                          encashmentContractCloseProductEksListFetching={this.props.encashmentContractCloseProductEksListFetching}
                          encashmentContractCloseProductEksListError={this.props.encashmentContractCloseProductEksListError}
                          encashmentContractCloseProductEksListCachedDate={this.props.encashmentContractCloseProductEksListCachedDate}

                          acquiringActiveProductEksList={this.props.acquiringActiveProductEksList}
                          acquiringActiveProductEksListFetching={this.props.acquiringActiveProductEksListFetching}
                          acquiringActiveProductEksListError={this.props.acquiringActiveProductEksListError}
                          acquiringActiveProductEksListCachedDate={this.props.acquiringActiveProductEksListCachedDate}

                          acquiringCloseProductEksList={this.props.acquiringCloseProductEksList}
                          acquiringCloseProductEksListFetching={this.props.acquiringCloseProductEksListFetching}
                          acquiringCloseProductEksListError={this.props.acquiringCloseProductEksListError}
                          acquiringCloseProductEksListCachedDate={this.props.acquiringCloseProductEksListCachedDate}


                          legalInfoProductEksList={this.props.legalInfoProductEksList}
                          legalInfoProductEksListFetching={this.props.legalInfoProductEksListFetching}
                          legalInfoProductEksListError={this.props.legalInfoProductEksListError}
                          legalInfoProductEksListCachedDate={this.props.legalInfoProductEksListCachedDate}

                          dboActiveProductEksList={this.props.dboActiveProductEksList}
                          dboActiveProductEksListFetching={this.props.dboActiveProductEksListFetching}
                          dboActiveProductEksListError={this.props.dboActiveProductEksListError}
                          dboActiveProductEksListCachedDate={this.props.dboActiveProductEksListCachedDate}

                          dboCloseProductEksList={this.props.dboCloseProductEksList}
                          dboCloseProductEksListFetching={this.props.dboCloseProductEksListFetching}
                          dboCloseProductEksListError={this.props.dboCloseProductEksListError}
                          dboCloseProductEksListCachedDate={this.props.dboCloseProductEksListCachedDate}

                          udboActiveProductEksList={this.props.udboActiveProductEksList}
                          udboActiveProductEksListFetching={this.props.udboActiveProductEksListFetching}
                          udboActiveProductEksListError={this.props.udboActiveProductEksListError}
                          udboActiveProductEksListCachedDate={this.props.udboActiveProductEksListCachedDate}

                          udboCloseProductEksList={this.props.udboCloseProductEksList}
                          udboCloseProductEksListFetching={this.props.udboCloseProductEksListFetching}
                          udboCloseProductEksListError={this.props.udboCloseProductEksListError}
                          udboCloseProductEksListCachedDate={this.props.udboCloseProductEksListCachedDate}

                          salaryActiveProductEksList={this.props.salaryActiveProductEksList}
                          salaryActiveProductEksListFetching={this.props.salaryActiveProductEksListFetching}
                          salaryActiveProductEksListError={this.props.salaryActiveProductEksListError}
                          salaryActiveProductEksListCachedDate={this.props.salaryActiveProductEksListCachedDate}

                          salaryCloseProductEksList={this.props.salaryCloseProductEksList}
                          salaryCloseProductEksListFetching={this.props.salaryCloseProductEksListFetching}
                          salaryCloseProductEksListError={this.props.salaryCloseProductEksListError}
                          salaryCloseProductEksListCachedDate={this.props.salaryCloseProductEksListCachedDate}

                          isVisibleModalCustomerEditor={this.props.isVisibleModalCustomerEditor}
                          navigateToAgentListScreen={this.props.navigateToAgentListScreen}
                          performAgentListCurrentModeRefresh={this.props.performAgentListCurrentModeRefresh}
                          performAgentListFlush={this.props.performAgentListFlush}
                          agentList={this.props.agentList}
                          agentListFetching={this.props.agentListFetching}
                          agentListError={this.props.agentListError}
                          agentListCacheDate={this.props.agentListCacheDate}
                          productListAgreementStatus={this.props.productListAgreementStatus}

                          inputSharePopoverSearchRefresh={this.props.inputSharePopoverSearchRefresh}
                          inputCurrentRecipientListRefresh={this.props.inputCurrentRecipientListRefresh}
                          inputCurrentFileFormatRefresh={this.props.inputCurrentFileFormatRefresh}
                          inputCurrentRepresentationRefresh={this.props.inputCurrentRepresentationRefresh}
                          navigateToPopoverShareBack={this.props.navigateToPopoverShareBack}
                          navigateToPopoverShareRecipientsScreen={this.props.navigateToPopoverShareRecipientsScreen}
                          navigateToPopoverShareRepresentationScreen={this.props.navigateToPopoverShareRepresentationScreen}
                          navigateToPopoverShareFormatScreen={this.props.navigateToPopoverShareFormatScreen}
                          performPopoverShareShow={this.props.performPopoverShareShow}
                          performPopoverShareHide={this.props.performPopoverShareHide}
                          performSend={this.props.performSend}
                          currentRecipientList={this.props.currentRecipientList}
                          currentFileFormat={this.props.currentFileFormat}
                          currentRepresentation={this.props.currentRepresentation}
                          isVisiblePopoverShare={this.props.isVisiblePopoverShare}
                          personHistoryList={this.props.personHistoryList}
                          foundPersonList={this.props.foundPersonList}
                          foundPersonListInProgress={this.props.foundPersonListInProgress}
                          foundPersonListError={this.props.foundPersonListError}
                          inputSharePopoverSearch={this.props.inputSharePopoverSearch}
                          foundPersonListClear={this.props.foundPersonListClear}
                          sendFetching={this.props.sendFetching}
                          sendError={this.props.sendError}
                          sendSuccess={this.props.sendSuccess}
                          shareDataRefresh={this.props.shareDataRefresh}
                          performQlikEvent={this.props.performQlikEvent}

                          performRefreshBarHide={this.props.performRefreshBarHide}
                          currentUserAd={this.props.currentUserAd}

                          performProductListModalAlertShow={this.props.performProductListModalAlertShow}
                          performProductListModalAlertHide={this.props.performProductListModalAlertHide}
                          isVisibleProductListModalAlert={this.props.isVisibleProductListModalAlert}
                          prognosticProductList={this.props.prognosticProductList}
                          prognosticProductListFetching={this.props.prognosticProductListFetching}
                          prognosticProductListError={this.props.prognosticProductListError}
                          isVisiblePrognosticProductListModalAlert={this.props.isVisiblePrognosticProductListModalAlert}
                          performPrognosticProductListModalAlertHide={this.props.performPrognosticProductListModalAlertHide}
                          callGetForecastPrognosticDealList={this.props.callGetForecastPrognosticDealList}
                          customerCachedDate={this.props.customerCachedDate}

                          callGetAgentList={this.props.callGetAgentList}
                          isQlikLoggedIn={this.props.isQlikLoggedIn}
                          isActivityAccessError={this.props.isActivityAccessError}
            >
            </ViewCustomer>
        )
    }
}

export interface IStateProps {

    isVisibleProductListModalAlert: boolean,
    customerNavigationHistory: Models.CustomerHistory[],
    currentCustomerId: string,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isDashboardExpandedMode: boolean,
    isVisiblePopoverHolder: boolean,
    isVisiblePopoverCurator: boolean,
    isVisiblePopoverOccasionList: boolean,
    isVisiblePopoverNoteList: boolean,
    isVisiblePopoverProblemList: boolean,
    isVisibleModalActivityEditor: boolean,
    isVisibleModalPlanner: boolean,
    isVisibleModalEmailSend: boolean,
    isVisibleModalAssociateSearch: boolean,
    isSearchModeAffiliateList: boolean,
    inputSearchAffiliateList: string,
    affiliateSearchList: Models.CustomerList,
    currentTab: Enums.CustomerManagedTab,
    isVisiblePopoverOwner: boolean,
    currentOwner: Models.Owner,
    currentPopoverLimitItem: Enums.OldLimitItem,
    isVisiblePopoverLimit: boolean,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,
    limitOld: Models.LimitOld,
    limitOldFetching: boolean,
    limitOldError: Error | null,
    limitOldCachedDate: Date | null,

    // START CREDIT model product list
    creditActiveProductList: Models.CreditProductList,
    creditActiveProductListFetching: boolean,
    creditActiveProductListUpdating: boolean,
    creditActiveProductListError: Error | null,
    creditActiveProductListCachedDate: Date | null,

    creditCloseProductList: Models.CreditProductList,
    creditCloseProductListFetching: boolean,
    creditCloseProductListUpdating: boolean,
    creditCloseProductListError: Error | null,
    creditCloseProductListCachedDate: Date | null,
    //END CREDIT model product list


    // START DEPOSIT model product list
    depositActiveProductList: Models.DepositProductList,
    depositActiveProductListFetching: boolean,
    depositActiveProductListUpdating: boolean,
    depositActiveProductListError: Error | null,
    depositActiveProductListCachedDate: Date | null,

    depositCloseProductList: Models.DepositProductList,
    depositCloseProductListFetching: boolean,
    depositCloseProductListUpdating: boolean,
    depositCloseProductListError: Error | null,
    depositCloseProductListCachedDate: Date | null,
    //END DEPOSIT model product list

    // START SETTLEMENT_AGREEMENT model product list
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListUpdating: boolean,
    settlementAgreementActiveProductListError: Error | null,
    settlementAgreementActiveProductListCachedDate: Date | null,

    settlementAgreementCloseProductList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListUpdating: boolean,
    settlementAgreementCloseProductListError: Error | null,
    settlementAgreementCloseProductListCachedDate: Date | null,
    // END SETTLEMENT_AGREEMENT model product list

    // START CORPORATE_CARD model product list
    corporateCardActiveProductList: Models.CorporateCardProductList,
    corporateCardActiveProductListFetching: boolean,
    corporateCardActiveProductListUpdating: boolean,
    corporateCardActiveProductListError: Error | null,
    corporateCardActiveProductListCachedDate: Date | null,

    corporateCardCloseProductList: Models.CorporateCardProductList,
    corporateCardCloseProductListFetching: boolean,
    corporateCardCloseProductListUpdating: boolean,
    corporateCardCloseProductListError: Error | null,
    corporateCardCloseProductListCachedDate: Date | null,
    // END CORPORATE_CARD model product list

    // START ENCASHMENT_CONTRACT model product list
    encashmentContractActiveProductList: Models.EncashmentContractProductList,
    encashmentContractActiveProductListFetching: boolean,
    encashmentContractActiveProductListUpdating: boolean,
    encashmentContractActiveProductListError: Error | null,
    encashmentContractActiveProductListCachedDate: Date | null,

    encashmentContractCloseProductList: Models.EncashmentContractProductList,
    encashmentContractCloseProductListFetching: boolean,
    encashmentContractCloseProductListUpdating: boolean,
    encashmentContractCloseProductListError: Error | null,
    encashmentContractCloseProductListCachedDate: Date | null,
    // END ENCASHMENT_CONTRACT model product list

    // START ACQUIRING model product list
    acquiringActiveProductList: Models.AcquiringProductList,
    acquiringActiveProductListFetching: boolean,
    acquiringActiveProductListUpdating: boolean,
    acquiringActiveProductListError: Error | null,
    acquiringActiveProductListCachedDate: Date | null,

    acquiringCloseProductList: Models.AcquiringProductList,
    acquiringCloseProductListFetching: boolean,
    acquiringCloseProductListUpdating: boolean,
    acquiringCloseProductListError: Error | null,
    acquiringCloseProductListCachedDate: Date | null,
    // END ACQUIRING model product list

    // START DBO model product list
    dboActiveProductList: Models.DboProductList,
    dboActiveProductListFetching: boolean,
    dboActiveProductListUpdating: boolean,
    dboActiveProductListError: Error | null,
    dboActiveProductListCachedDate: Date | null,

    dboCloseProductList: Models.DboProductList,
    dboCloseProductListFetching: boolean,
    dboCloseProductListUpdating: boolean,
    dboCloseProductListError: Error | null,
    dboCloseProductListCachedDate: Date | null,
    // END DBO model product list

    // START SALARY model product list
    salaryActiveProductList: Models.SalaryProductList,
    salaryActiveProductListFetching: boolean,
    salaryActiveProductListUpdating: boolean,
    salaryActiveProductListError: Error | null,
    salaryActiveProductListCachedDate: Date | null,

    salaryCloseProductList: Models.SalaryProductList,
    salaryCloseProductListFetching: boolean,
    salaryCloseProductListUpdating: boolean,
    salaryCloseProductListError: Error | null,
    salaryCloseProductListCachedDate: Date | null,
    // END SALARY model product list

    // START SALARY model product list
    udboActiveProductList: Models.UdboProductList,
    udboActiveProductListFetching: boolean,
    udboActiveProductListUpdating: boolean,
    udboActiveProductListError: Error | null,
    udboActiveProductListCachedDate: Date | null,

    udboCloseProductList: Models.UdboProductList,
    udboCloseProductListFetching: boolean,
    udboCloseProductListUpdating: boolean,
    udboCloseProductListError: Error | null,
    udboCloseProductListCachedDate: Date | null,
    // END SALARY model product list

    legalInfoProductList: Models.LegalInfoProductList,
    legalInfoProductListFetching: boolean,
    legalInfoProductListUpdating: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,

    // END EKS_CREDIT_LIST model product list
    creditActiveProductEksList: Models.CreditProductList,
    creditActiveProductEksListFetching: boolean,
    creditActiveProductEksListError: Error | null,
    creditActiveProductEksListCachedDate: Date | null,

    creditCloseProductEksList: Models.CreditProductList,
    creditCloseProductEksListFetching: boolean,
    creditCloseProductEksListError: Error | null,
    creditCloseProductEksListCachedDate: Date | null,
    // END EKS_CREDIT_LIST model product list


    // END EKS_SETTLEMENTAGREEMENT_LIST model product list

    settlementAgreementActiveProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductEksListFetching: boolean,
    settlementAgreementActiveProductEksListError: Error | null,
    settlementAgreementActiveProductEksListCachedDate: Date | null,

    settlementAgreementCloseProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductEksListFetching: boolean,
    settlementAgreementCloseProductEksListError: Error | null,
    settlementAgreementCloseProductEksListCachedDate: Date | null,
    // END EKS_SETTLEMENTAGREEMENT_LIST model product list

    // START EKS_DEPOSIT_LIST model product list
    depositActiveProductEksList: Models.DepositProductList,
    depositActiveProductEksListFetching: boolean,
    depositActiveProductEksListError: Error | null,
    depositActiveProductEksListCachedDate: Date | null,

    depositCloseProductEksList: Models.DepositProductList,
    depositCloseProductEksListFetching: boolean,
    depositCloseProductEksListError: Error | null,
    depositCloseProductEksListCachedDate: Date | null,
    // END EKS_DEPOSIT_LIST model product list

    // START EKS_CORPORATE_CARD_LIST model product list
    corporateCardActiveProductEksList: Models.CorporateCardProductList,
    corporateCardActiveProductEksListFetching: boolean,
    corporateCardActiveProductEksListError: Error | null,
    corporateCardActiveProductEksListCachedDate: Date | null,

    corporateCardCloseProductEksList: Models.CorporateCardProductList,
    corporateCardCloseProductEksListFetching: boolean,
    corporateCardCloseProductEksListError: Error | null,
    corporateCardCloseProductEksListCachedDate: Date | null,
    // END EKS_CORPORATE_CARD_LIST model product list

    // START EKS_ENCASHMENT_CONTRACT_LIST model product list
    encashmentContractActiveProductEksList: Models.EncashmentContractProductList,
    encashmentContractActiveProductEksListFetching: boolean,
    encashmentContractActiveProductEksListError: Error | null,
    encashmentContractActiveProductEksListCachedDate: Date | null,

    encashmentContractCloseProductEksList: Models.EncashmentContractProductList,
    encashmentContractCloseProductEksListFetching: boolean,
    encashmentContractCloseProductEksListError: Error | null,
    encashmentContractCloseProductEksListCachedDate: Date | null,
    // END EKS_ENCASHMENT_CONTRACT_LIST model product list

    // END EKS_ACQUIRING_LIST model product list
    acquiringActiveProductEksList: Models.AcquiringProductList,
    acquiringActiveProductEksListFetching: boolean,
    acquiringActiveProductEksListError: Error | null,
    acquiringActiveProductEksListCachedDate: Date | null,

    acquiringCloseProductEksList: Models.AcquiringProductList,
    acquiringCloseProductEksListFetching: boolean,
    acquiringCloseProductEksListError: Error | null,
    acquiringCloseProductEksListCachedDate: Date | null,
    // END EKS_ACQUIRING_LIST model product list


    dboActiveProductEksList: Models.DboProductList,
    dboActiveProductEksListFetching: boolean,
    dboActiveProductEksListError: Error | null,
    dboActiveProductEksListCachedDate: Date | null,

    dboCloseProductEksList: Models.DboProductList,
    dboCloseProductEksListFetching: boolean,
    dboCloseProductEksListError: Error | null,
    dboCloseProductEksListCachedDate: Date | null,

    udboActiveProductEksList: Models.UdboProductList,
    udboActiveProductEksListFetching: boolean,
    udboActiveProductEksListError: Error | null,
    udboActiveProductEksListCachedDate: Date | null,

    udboCloseProductEksList: Models.UdboProductList,
    udboCloseProductEksListFetching: boolean,
    udboCloseProductEksListError: Error | null,
    udboCloseProductEksListCachedDate: Date | null,

    salaryActiveProductEksList: Models.SalaryProductList,
    salaryActiveProductEksListFetching: boolean,
    salaryActiveProductEksListError: Error | null,
    salaryActiveProductEksListCachedDate: Date | null,

    salaryCloseProductEksList: Models.SalaryProductList,
    salaryCloseProductEksListFetching: boolean,
    salaryCloseProductEksListError: Error | null,
    salaryCloseProductEksListCachedDate: Date | null,

    legalInfoProductEksList: Models.LegalInfoProductList,
    legalInfoProductEksListFetching: boolean,
    legalInfoProductEksListError: Error | null,
    legalInfoProductEksListCachedDate: Date | null,

    isVisibleModalCustomerEditor: boolean,
    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    agentListCacheDate: Date | null,
    productListAgreementStatus: Enums.ProductListAgreementStatus,

    currentRecipientList: ModelsScheduler.PersonList,
    currentFileFormat: Enums.FileFormat,
    currentRepresentation: Enums.Representation,
    isVisiblePopoverShare: boolean,
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    foundPersonListInProgress: boolean,
    foundPersonListError: Error | null,
    inputSharePopoverSearch: string,
    sendFetching: boolean,
    sendError: Error | null,
    sendSuccess: boolean,
    currentUserAd: ModelsApp.UserAd,
    customerCachedDate: Date | null,
    isQlikLoggedIn: boolean,


    // Prognostic products
    prognosticProductList: Models.ForecastDealList,
    prognosticProductListFetching: boolean,
    prognosticProductListError: Error | null,
    isVisiblePrognosticProductListModalAlert: boolean,
    customerFetching: boolean,
    customerError: Error | null,
    isActivityAccessError: boolean,


}

export interface IDispatchProps {

    performDashboardExpandedModeToggle: ModelsCustomer.PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE,
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST,
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH,
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE,
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE,
    performChangeTab: ModelsCustomer.PERFORM_CHANGE_TAB,
    performPopoverHolderShow: ModelsCustomer.PERFORM_POPOVER_HOLDER_SHOW,
    performPopoverHolderHide: ModelsCustomer.PERFORM_POPOVER_HOLDER_HIDE,
    performPopoverCuratorShow: ModelsCustomer.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsCustomer.PERFORM_POPOVER_CURATOR_HIDE,
    performPopoverOccasionListShow: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW,
    performPopoverOccasionListHide: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE,
    performPopoverNoteListShow: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW,
    performPopoverNoteListHide: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE,
    performPopoverProblemListShow: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW,
    performPopoverProblemListHide: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE,
    performPopoverOwnerShow: ModelsCustomer.PERFORM_POPOVER_OWNER_SHOW,
    performPopoverOwnerHide: ModelsCustomer.PERFORM_POPOVER_OWNER_HIDE,
    performNavigateToOwnerScreen: ModelsCustomer.PERFORM_NAVIGATE_TO_OWNER_SCREEN,
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN,
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,
    performRefresh: ModelsCustomer.PERFORM_REFRESH,
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE,
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK,
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW,
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD,
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW,
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH,
    performProductTypeListForceRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH,

    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,

    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST,

    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    navigateToCustomerActivityAccessScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN,
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN,
    performContainerReset: ModelsCustomer.PERFORM_CONTAINER_RESET,
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,

    performAgentListCurrentModeRefresh: ModelsAgentList.PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH,
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    performFlush: ModelsCustomer.PERFORM_FLUSH,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    performInputProductListAgreementStatus : ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS,

    performAgentListFlush: ModelsAgentList.PERFORM_FLUSH,

    inputSharePopoverSearchRefresh: ModelsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentRecipientListRefresh: ModelsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentFileFormatRefresh: ModelsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    inputCurrentRepresentationRefresh: ModelsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    foundPersonListClear: ModelsCustomerDashboard.FOUND_PERSON_LIST_CLEAR,
    navigateToPopoverShareBack: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    navigateToPopoverShareRecipientsScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareRepresentationScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareFormatScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    performPopoverShareShow: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE,
    performSend: ModelsCustomerDashboard.PERFORM_SEND,
    performInit: ModelsCustomer.PERFORM_CUSTOMER_SCREEN_MOUNTED,
    shareDataRefresh: ModelsCustomerDashboard.SHARE_DATA_REFRESH,
    performQlikEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT,
    performRefreshBarHide: ModelsCustomer.PERFORM_REFRESH_BAR_HIDE,

    performProductListModalAlertShow: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW,
    performProductListModalAlertHide: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,

    performPrognosticProductListModalAlertHide: ModelsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE,
    callGetForecastPrognosticDealList: ModelsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST,

    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST,
}

export type ICustomerProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,
        customerNavigationHistory: state.user.mrmkmcibCRM.reducerCustomer.customerNavigationHistory,
        currentCustomerId: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        isDashboardExpandedMode: state.user.mrmkmcibCRM.reducerCustomer.isDashboardExpandedMode,
        isVisiblePopoverHolder: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverHolder,
        isVisiblePopoverCurator: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverCurator,
        isVisiblePopoverOccasionList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverOccasionList,
        isVisiblePopoverNoteList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverNoteList,
        isVisiblePopoverProblemList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverProblemList,
        isVisibleModalActivityEditor: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalActivityEditor,
        isVisibleModalPlanner: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalPlanner,
        isVisibleModalEmailSend: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalEmailSend,
        isVisibleModalAssociateSearch: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalAssociateSearch,
        isSearchModeAffiliateList: state.user.mrmkmcibCRM.reducerCustomer.isSearchModeAffiliateList,
        inputSearchAffiliateList: state.user.mrmkmcibCRM.reducerCustomer.inputSearchAffiliateList,
        affiliateSearchList: state.user.mrmkmcibCRM.reducerCustomer.affiliateSearchList,
        currentTab: state.user.mrmkmcibCRM.reducerCustomer.currentTab,
        isVisiblePopoverOwner: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverOwner,
        currentOwner: state.user.mrmkmcibCRM.reducerCustomer.currentOwner,
        currentPopoverLimitItem: state.user.mrmkmcibCRM.reducerCustomer.currentPopoverLimitItem,
        isVisiblePopoverLimit: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverLimit,
        customerFetching: state.user.mrmkmcibCRM.reducerCustomer.customerFetching,
        customerError: state.user.mrmkmcibCRM.reducerCustomer.customerError,
        limit: state.user.mrmkmcibCRM.reducerCustomer.limit,
        limitFetching: state.user.mrmkmcibCRM.reducerCustomer.limitFetching,
        limitError: state.user.mrmkmcibCRM.reducerCustomer.limitError,
        limitCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitCachedDate,
        limitOld: state.user.mrmkmcibCRM.reducerCustomer.limitOld,
        limitOldFetching: state.user.mrmkmcibCRM.reducerCustomer.limitOldFetching,
        limitOldError: state.user.mrmkmcibCRM.reducerCustomer.limitOldError,
        limitOldCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitOldCachedDate,

        //START CREDIT product list state
        creditActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductList,
        creditActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListFetching,
        creditActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListError,
        creditActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListUpdating,
        creditActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListCachedDate,

        creditCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductList,
        creditCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListFetching,
        creditCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListUpdating,
        creditCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListError,
        creditCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListCachedDate,
        //END CREDIT product list state

        //START DEPOSIT product list state
        depositActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList,
        depositActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListFetching,
        depositActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListUpdating,
        depositActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListError,
        depositActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListCachedDate,

        depositCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList,
        depositCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListFetching,
        depositCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListUpdating,
        depositCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListError,
        depositCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListCachedDate,
        //END DEPOSIT product list state

        //START SETTLEMENT_AGREEMENT product list state
        settlementAgreementActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList,
        settlementAgreementActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListFetching,
        settlementAgreementActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListUpdating,
        settlementAgreementActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListError,
        settlementAgreementActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListCachedDate,

        settlementAgreementCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList,
        settlementAgreementCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListFetching,
        settlementAgreementCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListUpdating,
        settlementAgreementCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListError,
        settlementAgreementCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListCachedDate,
        //END SETTLEMENT_AGREEMENT product list state

        //START CORPORATE_CARD product list state
        corporateCardActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductList,
        corporateCardActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListFetching,
        corporateCardActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListUpdating,
        corporateCardActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListError,
        corporateCardActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListCachedDate,

        corporateCardCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductList,
        corporateCardCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListFetching,
        corporateCardCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListUpdating,
        corporateCardCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListError,
        corporateCardCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListCachedDate,
        //END CORPORATE_CARD product list state

        //START ENCASHMENT_CONTRACT product list state
        encashmentContractActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductList,
        encashmentContractActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListFetching,
        encashmentContractActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListUpdating,
        encashmentContractActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListError,
        encashmentContractActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListCachedDate,

        encashmentContractCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductList,
        encashmentContractCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListFetching,
        encashmentContractCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListUpdating,
        encashmentContractCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListError,
        encashmentContractCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListCachedDate,
        //END ENCASHMENT_CONTRACT product list state

        //START DBO product list state
        dboActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductList,
        dboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListFetching,
        dboActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListUpdating,
        dboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListError,
        dboActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListCachedDate,

        dboCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductList,
        dboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListFetching,
        dboCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListUpdating,
        dboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListError,
        dboCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListCachedDate,
        //END DBO product list state

        //START ACQUIRING product list state
        acquiringActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductList,
        acquiringActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListFetching,
        acquiringActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListUpdating,
        acquiringActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListError,
        acquiringActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListCachedDate,

        acquiringCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductList,
        acquiringCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListFetching,
        acquiringCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListUpdating,
        acquiringCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListError,
        acquiringCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListCachedDate,
        //END ACQUIRING product list state

        //START SALARY product list state
        salaryActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductList,
        salaryActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListFetching,
        salaryActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListUpdating,
        salaryActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListError,
        salaryActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListCachedDate,

        salaryCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductList,
        salaryCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListFetching,
        salaryCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListUpdating,
        salaryCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListError,
        salaryCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListCachedDate,
        //END SALARY product list state

        //START UDBO product list state
        udboActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductList,
        udboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListFetching,
        udboActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListUpdating,
        udboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListError,
        udboActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListCachedDate,

        udboCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductList,
        udboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListFetching,
        udboCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListUpdating,
        udboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListError,
        udboCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListCachedDate,
        //END UDBO product list state

        legalInfoProductList: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductList,
        legalInfoProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListFetching,
        legalInfoProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListUpdating,
        legalInfoProductListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListError,
        legalInfoProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListCachedDate,

        creditActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksList,
        creditActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListFetching,
        creditActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListError,
        creditActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListCachedDate,

        creditCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksList,
        creditCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListFetching,
        creditCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListError,
        creditCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListCachedDate,

        settlementAgreementActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksList,
        settlementAgreementActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListFetching,
        settlementAgreementActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListError,
        settlementAgreementActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListCachedDate,

        settlementAgreementCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksList,
        settlementAgreementCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListFetching,
        settlementAgreementCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListError,
        settlementAgreementCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListCachedDate,


        depositActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksList,
        depositActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListFetching,
        depositActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListError,
        depositActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListCachedDate,

        depositCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksList,
        depositCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListFetching,
        depositCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListError,
        depositCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListCachedDate,

        corporateCardActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksList,
        corporateCardActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListFetching,
        corporateCardActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListError,
        corporateCardActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListCachedDate,

        corporateCardCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksList,
        corporateCardCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListFetching,
        corporateCardCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListError,
        corporateCardCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListCachedDate,

        encashmentContractActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksList,
        encashmentContractActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListFetching,
        encashmentContractActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListError,
        encashmentContractActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListCachedDate,

        encashmentContractCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksList,
        encashmentContractCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListFetching,
        encashmentContractCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListError,
        encashmentContractCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListCachedDate,

        acquiringActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksList,
        acquiringActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListFetching,
        acquiringActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListError,
        acquiringActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListCachedDate,

        acquiringCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksList,
        acquiringCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListFetching,
        acquiringCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListError,
        acquiringCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListCachedDate,

        dboActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksList,
        dboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListFetching,
        dboActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListError,
        dboActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListCachedDate,

        dboCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksList,
        dboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListFetching,
        dboCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListError,
        dboCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListCachedDate,

        udboActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksList,
        udboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListFetching,
        udboActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListError,
        udboActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListCachedDate,

        udboCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksList,
        udboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListFetching,
        udboCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListError,
        udboCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListCachedDate,

        salaryActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksList,
        salaryActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListFetching,
        salaryActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListError,
        salaryActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListCachedDate,

        salaryCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksList,
        salaryCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListFetching,
        salaryCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListError,
        salaryCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListCachedDate,

        legalInfoProductEksList: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksList,
        legalInfoProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListFetching,
        legalInfoProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListError,
        legalInfoProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListCachedDate,

        isVisibleModalCustomerEditor: state.user.mrmkmcibCRM.reducerCustomerEditor.isVisibleModalCustomerEditor,
        agentList: state.user.mrmkmcibCRM.reducerAgentList.agentList,
        agentListFetching: state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
        agentListError: state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
        agentListCacheDate: state.user.mrmkmcibCRM.reducerAgentList.agentListCachedDate,

        currentRecipientList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRecipientList,
        currentFileFormat: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentFileFormat,
        currentRepresentation: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRepresentation,
        isVisiblePopoverShare: state.user.mrmkmcibDashboard.reducerCustomerDashboard.isVisiblePopoverShare,
        personHistoryList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.personHistoryList,
        foundPersonList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonList,
        foundPersonListInProgress: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListInProgress,
        foundPersonListError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListError,
        inputSharePopoverSearch: state.user.mrmkmcibDashboard.reducerCustomerDashboard.inputSharePopoverSearch,
        sendFetching: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendFetching,
        sendError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendError,
        sendSuccess: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendSuccess,
        currentUserAd: state.user.mrmkmcibApp.reducerAuthorization.currentUserAd,
        isVisibleProductListModalAlert: state.user.mrmkmcibCRM.reducerCustomer.isVisibleProductListModalAlert,
        prognosticProductList: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductList,
        prognosticProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductListFetching,
        prognosticProductListError: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductListError,
        isVisiblePrognosticProductListModalAlert: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePrognosticProductListModalAlert,
        customerCachedDate: state.user.mrmkmcibCRM.reducerCustomer.customerCachedDate,
        isQlikLoggedIn: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentQlikMessage.payload.generateFileParameters,
        isActivityAccessError: state.user.mrmkmcibCRM.reducerCustomer.isActivityAccessError,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        performCallGetForceRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetForceRequestProductList (type))
        },
        performCallGetCachedRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetCachedRequestProductList (type))
        },
        performCallGetUncachedRequestProductList: (type: Enums.ProductType) => {
            dispatch (thunkCustomer.performCallGetUncachedRequestProductList (type))
        },
        performInputProductListAgreementStatus : (value: Enums.ProductListAgreementStatus) =>{
            dispatch(thunkCustomer.performInputProductAgreementStatus(value))
        },
        performDashboardExpandedModeToggle: () => {
            dispatch(thunkCustomer.performDashboardExpandedModeToggle())
        },
        performInputSearchAffiliateList: (search: string) => {
            dispatch(thunkCustomer.performInputSearchAffiliateList(search))
        },
        performAffiliateListSearch: () => {
            dispatch(thunkCustomer.performAffiliateListSearch())
        },
        performSearchAffiliateListEnable: () => {
            dispatch(thunkCustomer.performSearchAffiliateListEnable())
        },
        performSearchAffiliateListDisable: () => {
            dispatch(thunkCustomer.performSearchAffiliateListDisable())
        },
        performChangeTab: (index: number, value: Enums.CustomerManagedTab,) => {
            dispatch(thunkCustomer.performChangeTab(index, value,))
        },
        performPopoverHolderShow: () => {
            dispatch(thunkCustomer.performPopoverHolderShow())
        },
        performPopoverHolderHide: () => {
            dispatch(thunkCustomer.performPopoverHolderHide())
        },
        performPopoverCuratorShow: () => {
            dispatch(thunkCustomer.performPopoverCuratorShow())
        },
        performPopoverCuratorHide: () => {
            dispatch(thunkCustomer.performPopoverCuratorHide())
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkCustomer.navigateToAgentListScreen())
        },
        performPopoverOccasionListShow: () => {
            dispatch(thunkCustomer.performPopoverOccasionListShow())
        },
        performFlush: () => {
            dispatch(thunkCustomer.performFlush())
        },
        performPopoverOccasionListHide: () => {
            dispatch(thunkCustomer.performPopoverOccasionListHide())
        },
        performPopoverNoteListShow: () => {
            dispatch(thunkCustomer.performPopoverNoteListShow())
        },
        performPopoverNoteListHide: () => {
            dispatch(thunkCustomer.performPopoverNoteListHide())
        },
        performPopoverProblemListShow: () => {
            dispatch(thunkCustomer.performPopoverProblemListShow())
        },
        performPopoverProblemListHide: () => {
            dispatch(thunkCustomer.performPopoverProblemListHide())
        },
        performPopoverOwnerShow: (owner: Models.Owner) => {
            dispatch(thunkCustomer.performPopoverOwnerShow(owner))
        },
        performPopoverOwnerHide: () => {
            dispatch(thunkCustomer.performPopoverOwnerHide())
        },
        performNavigateToOwnerScreen: (owner: Models.Owner, customerMode: Enums.CustomerMode) => {
            dispatch(thunkCustomer.performNavigateToOwnerScreen(owner, customerMode))
        },
        navigateToOwnerAgentScreen: (agent: Models.Agent, AgentContextMode?: Enums.AgentContextMode) => {
            dispatch(thunkCustomer.navigateToOwnerAgentScreen(agent, AgentContextMode))
        },
        navigateToCustomerScreen: (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => {
            dispatch(thunkCustomer.navigateToCustomerScreen(customer, customerMode || Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
        },
        performAgentListFlush: () => {
            dispatch(thunkAgentList.performFlush())
        },
        performPopoverLimitHide: () => {
            dispatch(thunkCustomer.performPopoverLimitHide())
        },
        navigateToPopoverLimitItemScreen: (item: Enums.OldLimitItem) => {
            dispatch(thunkCustomer.navigateToPopoverLimitItemScreen(item))
        },
        navigatePopoverLimitBack: () => {
            dispatch(thunkCustomer.navigatePopoverLimitBack())
        },
        callGetLimitNew: (refresh: boolean = false) => {
            dispatch(thunkCustomer.callGetLimitNew(refresh))
        },
        callGetLimitOld: (refresh: boolean = false) => {
            dispatch(thunkCustomer.callGetLimitOld(refresh))
        },
        performLimitShow: () => {
            dispatch(thunkCustomer.performLimitShow())
        },

        performProductTypeListRefresh: () => {
            dispatch(thunkCustomer.performProductTypeListRefresh())
        },

        performProductTypeListForceRefresh: () => {
            dispatch (thunkCustomer.performProductTypeListForceRefresh ())
        },

        navigateToCustomerActivityIncludeScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityIncludeScreen())
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkCustomer.navigateToMemberListScreen())
        },
        navigateToCustomerActivityExcludeScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityExcludeScreen())
        },
        navigateToCustomerActivityAccessScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityAccessScreen())
        },
        closeCustomerActivityPanel: () => {
            dispatch(thunkCustomer.closeCustomerActivityPanel())
        },
        performContainerReset: () => {
            dispatch(thunkCustomer.performContainerReset())
        },
        navigateToOccasionListScreen: () => {
            dispatch(thunkCustomer.navigateToOccasionListScreen())
        },

        performCustomerOpen: (customerId: string, customerMode?: Enums.CustomerMode) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId, customerMode))
        },
        performGszOpen: () => {
            dispatch(thunkAppCRM.performGszOpen())
        },

        performCallEksRequestProductList: (productType: Enums.ProductType, productListAgreementStatus: Enums.ProductListAgreementStatus) => dispatch(thunkCustomer.performCallEksRequestProductList(productType, productListAgreementStatus)),

        performCustomerEditorShow: (customer: Models.CustomerManaged,) => {
            dispatch(thunkCustomerEditor.performCustomerEditorShow(customer,))
        },
        navigateBack: () => {
            dispatch(thunkCustomer.navigateBackHistoryMobileApp())
        },
        navigateToProductListScreen: (productType: Enums.ProductType,) => {
            dispatch(thunkProductList.navigateToProductListScreen(productType,))
        },
        navigateToProductForecastDealInfoScreen: (deal: Models.ForecastDeal) => {
            dispatch(thunkProductList.navigateToProductForecastDealInfoScreen(deal))
        },
        navigateToProductForecastEventInfoScreen: (event: Models.ForecastEvent) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event))
        },
        inputSharePopoverSearchRefresh: (value: string) => {
            dispatch(thunkCustomerDashboard.inputSharePopoverSearchRefresh(value))
        },
        inputCurrentRecipientListRefresh: (value: ModelsScheduler.Person, operation: Enums.Operation) => {
            dispatch(thunkCustomerDashboard.inputCurrentRecipientListRefresh(value, operation))
        },
        inputCurrentFileFormatRefresh: (value: Enums.FileFormat) => {
            dispatch(thunkCustomerDashboard.inputCurrentFileFormatRefresh(value))
        },
        inputCurrentRepresentationRefresh: (value: Enums.Representation) => {
            dispatch(thunkCustomerDashboard.inputCurrentRepresentationRefresh(value))
        },
        foundPersonListClear: () => {
            dispatch(thunkCustomerDashboard.foundPersonListClear())
        },
        navigateToPopoverShareBack: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareBack())
        },
        navigateToPopoverShareRecipientsScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRecipientsScreen())
        },
        navigateToPopoverShareRepresentationScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRepresentationScreen())
        },
        navigateToPopoverShareFormatScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareFormatScreen())
        },
        performPopoverShareShow: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareShow())
        },
        performPopoverShareHide: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareHide())
        },
        performSend: () => {
            dispatch(thunkCustomerDashboard.performSend())
        },
        performInit: () => {
            dispatch(thunkCustomer.performInit())
        },
        shareDataRefresh: (message: any) => {
            dispatch(thunkCustomerDashboard.shareDataRefresh(message))
        },
        performQlikEvent: (message: any) => {
            dispatch(thunkCustomerDashboard.performQlikEvent(message))
        },
        performRefreshBarHide: () => {
            dispatch(thunkCustomer.performRefreshBarHide())
        },

        performProductListModalAlertShow: () => {
            dispatch(thunkCustomer.performProductListModalAlertShow ())
        },
        performProductListModalAlertHide: () => {
            dispatch(thunkCustomer.performProductListModalAlertHide ())
        },
        callGetAgentList: (id: string) => {
            dispatch (thunkAgentList.callGetAgentList (id))
        },
        performPrognosticProductListModalAlertHide: () => {
            dispatch(thunkCustomer.performPrognosticProductListModalAlertHide())
        },
        callGetForecastPrognosticDealList: () => {
            dispatch(thunkCustomer.callGetForecastPrognosticDealList())
        }


    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerCustomer)
