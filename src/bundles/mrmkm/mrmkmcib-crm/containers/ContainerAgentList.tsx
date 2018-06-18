/*
 * Created by Burnaev M.U.
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as thunkAppCRM from "../thunk/ThunkAppCRM";
import * as thunkCustomer from "../thunk/ThunkCustomer";
import * as thunkCustomerEditor from "../thunk/ThunkCustomerEditor";
import * as thunkDealEditor from "../thunk/ThunkDealEditor";
import * as thunkDealList from "../thunk/ThunkDealList";
import * as thunkProductList from "../thunk/ThunkProductList";
import * as thunkProduct from "../thunk/ThunkProduct";
import * as thunkProductPaymentAccount from "../thunk/ThunkProductPaymentAccount";
import * as thunkProductCredit from "../thunk/ThunkProductCredit";
import * as thunkGSZ from "../thunk/ThunkGSZ";
import * as thunkGszActivityInclude from "../thunk/ThunkGszActivityInclude";
import * as thunkGszActivityExclude from "../thunk/ThunkGszActivityExclude";
import * as thunkCustomerActivityInclude from "../thunk/ThunkCustomerActivityInclude";
import * as thunkCustomerActivityExclude from "../thunk/ThunkCustomerActivityExclude";
import * as thunkLimit from "../thunk/ThunkLimit";
import * as thunkDeal from "../thunk/ThunkDeal";
import * as thunkEmployee from "../thunk/ThunkEmployee";
import * as thunkAgent from "../thunk/ThunkAgent";
import * as thunkAgentList from "../thunk/ThunkAgentList";
import * as thunkMemberList from "../thunk/ThunkMemberList";
import * as thunkOccasionList from "../thunk/ThunkOccasionList";
import * as thunkOccasion from "../thunk/ThunkOccasion";
import * as thunkNoteList from "../thunk/ThunkNoteList";
import { defaultValues } from "../models/Models";
import { Models as ModelsApp } from "mrmkmcib-app";
import { EnumsCrm } from "mrmkmcib-crm";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { EnumsDirectory } from "mrmkmcib-directory";
import { Models as ModelsDirectory } from "mrmkmcib-directory";
import { EnumsKnowledgebase } from "mrmkmcib-knowledgebase";
import { Models as ModelsKnowledgebase } from "mrmkmcib-knowledgebase";
import { EnumsNews } from "mrmkmcib-news";
import { Models as ModelsNews } from "mrmkmcib-news";
import { EnumsNotice } from "mrmkmcib-notice";
import { Models as ModelsNotice } from "mrmkmcib-notice";
import { EnumsScheduler } from "mrmkmcib-scheduler";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from "../Enums";
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsCustomer from "../models/ModelsCustomer";
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor";
import * as ModelsDealEditor from "../models/ModelsDealEditor";
import * as ModelsDealList from "../models/ModelsDealList";
import * as ModelsProductList from "../models/ModelsProductList";
import * as ModelsProduct from "../models/ModelsProduct";
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount";
import * as ModelsProductCredit from "../models/ModelsProductCredit";
import * as ModelsGSZ from "../models/ModelsGSZ";
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude";
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude";
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude";
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude";
import * as ModelsLimit from "../models/ModelsLimit";
import * as ModelsDeal from "../models/ModelsDeal";
import * as ModelsEmployee from "../models/ModelsEmployee";
import * as ModelsAgent from "../models/ModelsAgent";
import * as ModelsAgentList from "../models/ModelsAgentList";
import * as ModelsMemberList from "../models/ModelsMemberList";
import * as ModelsOccasionList from "../models/ModelsOccasionList";
import * as ModelsOccasion from "../models/ModelsOccasion";
import * as ModelsNoteList from "../models/ModelsNoteList";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";

import ViewAgentList from "../components/ViewAgentList";
import * as ModelState from "../models/Models";

/*
 * Container "AgentList". Agent list screen.
 */
class ContainerAgentList extends React.Component<IAgentListProps, any> {
	constructor(props: IAgentListProps, context: any) {
		super(props, context);
	}

	componentDidMount() {
		this.props.performInit();
	}

	render() {
		return (
			<ViewAgentList
				testID={"test-id-container-AgentList"}
				performAgentDelete={this.props.performAgentDelete}
				navigateToPrincipalPickerScreen={
					this.props.navigateToPrincipalPickerScreen
                }
                performCloseAgentDeletePanel = {this.props.performCloseAgentDeletePanel}
				performAgentListPrincipal={this.props.performAgentListPrincipal}
				navigateToAgentSearchScreen={this.props.navigateToAgentSearchScreen}
				performInputAgentSearch={this.props.performInputAgentSearch}
				performAgentSearchListSelect={this.props.performAgentSearchListSelect}
				performMenuAgentAddShow={this.props.performMenuAgentAddShow}
				performMenuAgentAddHide={this.props.performMenuAgentAddHide}
				performSave={this.props.performSave}
				performEdit={this.props.performEdit}
				performCancel={this.props.performCancel}
				navigateBack={this.props.navigateBack}
				performCloseAgentListScreen={this.props.performCloseAgentListScreen}
				performOpenAgentScreen={this.props.performOpenAgentScreen}
				agentListContextMode={this.props.agentListContextMode}
				agentListMode={this.props.agentListMode}
				inputAgentSearch={this.props.inputAgentSearch}
				inputAgentRole={this.props.inputAgentRole}
				isVisiblePopoverMenu={this.props.isVisiblePopoverMenu}
				refreshInProgress={this.props.refreshInProgress}
				refreshError={this.props.refreshError}
				inputAgentList={this.props.inputAgentList}
				agentListFetching={this.props.agentListFetching}
				agentListError={this.props.agentListError}
				agentListCachedDate={this.props.agentListCachedDate}
				agentSearchList={this.props.agentSearchList}
				agentSearchListFetching={this.props.agentSearchListFetching}
				agentSearchListError={this.props.agentSearchListError}
				agentSearchListCachedDate={this.props.agentSearchListCachedDate}
				agentListSaveInProgress={this.props.agentListSaveInProgress}
				agentListSaveError={this.props.agentListSaveError}
				agentListAccessLevel={this.props.agentListAccessLevel}
				performPopoverAddHide={this.props.performPopoverAddHide}
				currentCustomerManaged={this.props.currentCustomerManaged}
				performCancelSearchAgent={this.props.performCancelSearchAgent}
				callGetAgentSearchList={this.props.callGetAgentSearchList}
				performSelectAgentJobPosition={this.props.performSelectAgentJobPosition}
				performInputAgentJobPosition={this.props.performInputAgentJobPosition}
				inputAgentJobPosition={this.props.inputAgentJobPosition}
				isVisibleAgentListErrorModalWindow={
					this.props.isVisibleAgentListErrorModalWindow
				}
				searchAgentStringRequest={this.props.searchAgentStringRequest}
				agentListOpenedDeletePanel={this.props.agentListOpenedDeletePanel}
				performOpenAgentDeletePanel={this.props.performOpenAgentDeletePanel}
				performChangeDisplayAgentListErrorModalWindow={
					this.props.performChangeDisplayAgentListErrorModalWindow
				}
				classifierDictionary={this.props.classifierDictionary}
			/>
		);
	}
}

export interface IStateProps {
	agentListContextMode: Enums.AgentListContextMode;
	agentListMode: Enums.AgentListMode;
	isVisibleAgentListErrorModalWindow: boolean;
	inputAgentSearch: string;
	inputAgentRole: ModelsApp.Classifier | null;
	searchAgentStringRequest: string;
	refreshInProgress: boolean;
	refreshError: Error | null;
	inputAgentList: Models.AgentList;
	agentListFetching: boolean;
	agentListError: Error | null;
	agentListCachedDate: Date | null;
	agentSearchList: Models.AgentList;
	agentSearchListFetching: boolean;
	agentSearchListError: Error | null;
	agentSearchListCachedDate: Date | null;

	agentListSaveInProgress: boolean;
	agentListSaveError: Error | null;

	isVisiblePopoverMenu: boolean;
	classifierDictionary: ModelsApp.ClassifierDictionary;
	currentCustomerManaged: ModelsCrm.CustomerManaged | null;
	agentListAccessLevel: Enums.AgentListAccessLevel;
	inputAgentJobPosition: string;
	agentListOpenedDeletePanel: Models.Agent[];
}

export interface IDispatchProps {
	performOpenAgentDeletePanel: ModelsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL;
    performCloseAgentDeletePanel: ModelsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL;
	performSelectAgentJobPosition: ModelsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION;
	performInputAgentJobPosition: ModelsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION;
	navigateToAgentSearchScreen: ModelsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN;
	performAgentDelete: ModelsAgentList.PERFORM_AGENT_DELETE;

	navigateToPrincipalPickerScreen: ModelsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN;
	performAgentListPrincipal: ModelsAgentList.PERFORM_AGENT_LIST_PRINCIPAL;

	performInputAgentSearch: ModelsAgentList.PERFORM_INPUT_AGENT_SEARCH;

	performAgentSearchListSelect: ModelsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT;

	performMenuAgentAddShow: ModelsAgentList.PERFORM_MENU_AGENT_ADD_SHOW;
	performMenuAgentAddHide: ModelsAgentList.PERFORM_MENU_AGENT_ADD_HIDE;
	performSave: ModelsAgentList.PERFORM_SAVE;

	performEdit: ModelsAgentList.PERFORM_EDIT;
	performCancel: ModelsAgentList.PERFORM_CANCEL;
	navigateBack: ModelsAgentList.NAVIGATE_BACK;

	performCloseAgentListScreen: ModelsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN;
	performOpenAgentScreen: ModelsAgent.PERFORM_OPEN_AGENT_SCREEN;
	performPopoverAddHide: ModelsAgentList.PERFORM_POPOVER_ADD_HIDE;
	performInit: ModelsAgentList.PERFORM_AGENT_LIST_SCREEN_INIT;
	performCancelSearchAgent: ModelsAgentList.PERFORM_CANCEL_SEARCH_AGENT;
	performChangeDisplayAgentListErrorModalWindow: ModelsAgentList.PERFORM_CHANGE_AGENT_LIST_ERROR_MODAL_WINDOW;
	callGetAgentSearchList: ModelsAgentList.CALL_GET_AGENT_SEARCH_LIST;
}

export type IAgentListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
	return {
		currentCustomerManaged:
			state.user.mrmkmcibCRM.reducerAgentList.currentCustomerManaged,
		agentListMode: state.user.mrmkmcibCRM.reducerAgentList.agentListMode,
		agentListContextMode:
			state.user.mrmkmcibCRM.reducerAgentList.agentListContextMode,
		inputAgentSearch: state.user.mrmkmcibCRM.reducerAgentList.inputAgentSearch,

		inputAgentRole: state.user.mrmkmcibCRM.reducerAgentList.inputAgentRole,
		isVisiblePopoverMenu:
			state.user.mrmkmcibCRM.reducerAgentList.isVisiblePopoverMenu,
		operationUuid: state.user.mrmkmcibCRM.reducerAgentList.operationUuid,

		refreshInProgress:
			state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
		refreshError:
			state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
		inputAgentList: state.user.mrmkmcibCRM.reducerAgentList.inputAgentList,
		agentListFetching:
			state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
		agentListError:
			state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
		agentListCachedDate:
			state.user.mrmkmcibCRM.reducerAgentList.agentListCachedDate,
		agentSearchList: state.user.mrmkmcibCRM.reducerAgentList.agentSearchList,
		agentSearchListFetching:
			state.user.mrmkmcibCRM.reducerAgentList.agentSearchListFetching,
		agentSearchListError:
			state.user.mrmkmcibCRM.reducerAgentList.agentSearchListError,
		agentSearchListCachedDate:
			state.user.mrmkmcibCRM.reducerAgentList.agentSearchListCachedDate,

		agentListSaveInProgress:
			state.user.mrmkmcibCRM.reducerAgentList.agentListSaveInProgress,
		agentListSaveError:
			state.user.mrmkmcibCRM.reducerAgentList.agentListSaveError,

		classifierDictionary:
			state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,

		agentListAccessLevel:
			state.user.mrmkmcibCRM.reducerAgentList.agentListAccessLevel,

		inputAgentJobPosition:
			state.user.mrmkmcibCRM.reducerAgentList.inputAgentJobPosition,
		isVisibleAgentListErrorModalWindow:
			state.user.mrmkmcibCRM.reducerAgentList
				.isVisibleAgentListErrorModalWindow,
		searchAgentStringRequest:
			state.user.mrmkmcibCRM.reducerAgentList.searchAgentStringRequest,
		agentListOpenedDeletePanel:
			state.user.mrmkmcibCRM.reducerAgentList.agentListOpenedDeletePanel
	};
}

function mapDispatchToProps(dispatch: Function) {
	return {
		performAgentDelete: (agent: Models.Agent) => {
			dispatch(thunkAgentList.performAgentDelete(agent));
		},
		navigateToPrincipalPickerScreen: () => {
			dispatch(thunkAgentList.navigateToPrincipalPickerScreen());
		},
		performAgentListPrincipal: (agentId: string, isPrincipal: boolean) => {
			dispatch(thunkAgentList.performAgentListPrincipal(agentId, isPrincipal));
		},
		navigateToAgentSearchScreen: () => {
			dispatch(thunkAgentList.navigateToAgentSearchScreen());
		},
		performInputAgentSearch: (value: string) => {
			dispatch(thunkAgentList.performInputAgentSearch(value));
		},
		performAgentSearchListSelect: (agent: Models.Agent) => {
			dispatch(thunkAgentList.performAgentSearchListSelect(agent));
		},

		performMenuAgentAddShow: () => {
			dispatch(thunkAgentList.performMenuAgentAddShow());
		},
		performMenuAgentAddHide: () => {
			dispatch(thunkAgentList.performMenuAgentAddHide());
		},
		performSave: () => {
			dispatch(thunkAgentList.performSave());
		},

		performEdit: () => {
			dispatch(thunkAgentList.performEdit());
		},
		performCancel: () => {
			dispatch(thunkAgentList.performCancel());
		},
		navigateBack: () => {
			dispatch(thunkAgentList.navigateBack());
		},
		performCloseAgentListScreen: () => {
			dispatch(thunkAgentList.performCloseAgentListScreen());
		},
		performContainerReset: () => {
			dispatch(thunkAgentList.performContainerReset());
		},
		performPopoverAddHide: () => {
			dispatch(thunkAgentList.performPopoverAddHide());
		},
		performOpenAgentScreen: (
			agent: Models.Agent,
			agentMode: Enums.AgentMode,
			agentContextMode: Enums.AgentContextMode
		) => {
			dispatch(
				thunkAgentList.performOpenAgentScreen(
					agent,
					agentMode,
					agentContextMode
				)
			);
		},
		performInit: () => {
			dispatch(thunkAgentList.performInit());
		},
		performCancelSearchAgent: () => {
			dispatch(thunkAgentList.performCancelSearchAgent());
		},
		performSelectAgentJobPosition: (value: string) => {
			dispatch(thunkAgentList.performSelectAgentJobPosition(value));
		},
		performInputAgentJobPosition: (value: string) => {
			dispatch(thunkAgentList.performInputAgentJobPosition(value));
		},
		performChangeDisplayAgentListErrorModalWindow: () => {
			dispatch(
				thunkAgentList.performChangeDisplayAgentListErrorModalWindow(false)
			);
		},
		callGetAgentSearchList: () => {
			dispatch(thunkAgentList.callGetAgentSearchList());
		},
		performOpenAgentDeletePanel: (agent: Models.Agent) => {
			dispatch(thunkAgentList.performOpenAgentDeletePanel(agent));
        },
        performCloseAgentDeletePanel: (agent: Models.Agent) => {
            dispatch(thunkAgentList.performCloseAgentDeletePanel(agent));
        }
	};
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(
	mapStateToProps,
	mapDispatchToProps
)(ContainerAgentList);
