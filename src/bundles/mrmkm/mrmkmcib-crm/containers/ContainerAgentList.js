/*
 * Created by Burnaev M.U.
 */
import React from "react";
import { connect } from "react-redux";
import * as thunkAgentList from "../thunk/ThunkAgentList";
import ViewAgentList from "../components/ViewAgentList";
/*
 * Container "AgentList". Agent list screen.
 */
class ContainerAgentList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performInit();
    }
    render() {
        return (React.createElement(ViewAgentList, { testID: "test-id-container-AgentList", performAgentDelete: this.props.performAgentDelete, navigateToPrincipalPickerScreen: this.props.navigateToPrincipalPickerScreen, performCloseAgentDeletePanel: this.props.performCloseAgentDeletePanel, performAgentListPrincipal: this.props.performAgentListPrincipal, navigateToAgentSearchScreen: this.props.navigateToAgentSearchScreen, performInputAgentSearch: this.props.performInputAgentSearch, performAgentSearchListSelect: this.props.performAgentSearchListSelect, performMenuAgentAddShow: this.props.performMenuAgentAddShow, performMenuAgentAddHide: this.props.performMenuAgentAddHide, performSave: this.props.performSave, performEdit: this.props.performEdit, performCancel: this.props.performCancel, navigateBack: this.props.navigateBack, performCloseAgentListScreen: this.props.performCloseAgentListScreen, performOpenAgentScreen: this.props.performOpenAgentScreen, agentListContextMode: this.props.agentListContextMode, agentListMode: this.props.agentListMode, inputAgentSearch: this.props.inputAgentSearch, inputAgentRole: this.props.inputAgentRole, isVisiblePopoverMenu: this.props.isVisiblePopoverMenu, refreshInProgress: this.props.refreshInProgress, refreshError: this.props.refreshError, inputAgentList: this.props.inputAgentList, agentListFetching: this.props.agentListFetching, agentListError: this.props.agentListError, agentListCachedDate: this.props.agentListCachedDate, agentSearchList: this.props.agentSearchList, agentSearchListFetching: this.props.agentSearchListFetching, agentSearchListError: this.props.agentSearchListError, agentSearchListCachedDate: this.props.agentSearchListCachedDate, agentListSaveInProgress: this.props.agentListSaveInProgress, agentListSaveError: this.props.agentListSaveError, agentListAccessLevel: this.props.agentListAccessLevel, performPopoverAddHide: this.props.performPopoverAddHide, currentCustomerManaged: this.props.currentCustomerManaged, performCancelSearchAgent: this.props.performCancelSearchAgent, callGetAgentSearchList: this.props.callGetAgentSearchList, performSelectAgentJobPosition: this.props.performSelectAgentJobPosition, performInputAgentJobPosition: this.props.performInputAgentJobPosition, inputAgentJobPosition: this.props.inputAgentJobPosition, isVisibleAgentListErrorModalWindow: this.props.isVisibleAgentListErrorModalWindow, searchAgentStringRequest: this.props.searchAgentStringRequest, agentListOpenedDeletePanel: this.props.agentListOpenedDeletePanel, performOpenAgentDeletePanel: this.props.performOpenAgentDeletePanel, performChangeDisplayAgentListErrorModalWindow: this.props.performChangeDisplayAgentListErrorModalWindow, classifierDictionary: this.props.classifierDictionary }));
    }
}
function mapStateToProps(state) {
    return {
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerAgentList.currentCustomerManaged,
        agentListMode: state.user.mrmkmcibCRM.reducerAgentList.agentListMode,
        agentListContextMode: state.user.mrmkmcibCRM.reducerAgentList.agentListContextMode,
        inputAgentSearch: state.user.mrmkmcibCRM.reducerAgentList.inputAgentSearch,
        inputAgentRole: state.user.mrmkmcibCRM.reducerAgentList.inputAgentRole,
        isVisiblePopoverMenu: state.user.mrmkmcibCRM.reducerAgentList.isVisiblePopoverMenu,
        operationUuid: state.user.mrmkmcibCRM.reducerAgentList.operationUuid,
        refreshInProgress: state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
        refreshError: state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
        inputAgentList: state.user.mrmkmcibCRM.reducerAgentList.inputAgentList,
        agentListFetching: state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
        agentListError: state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
        agentListCachedDate: state.user.mrmkmcibCRM.reducerAgentList.agentListCachedDate,
        agentSearchList: state.user.mrmkmcibCRM.reducerAgentList.agentSearchList,
        agentSearchListFetching: state.user.mrmkmcibCRM.reducerAgentList.agentSearchListFetching,
        agentSearchListError: state.user.mrmkmcibCRM.reducerAgentList.agentSearchListError,
        agentSearchListCachedDate: state.user.mrmkmcibCRM.reducerAgentList.agentSearchListCachedDate,
        agentListSaveInProgress: state.user.mrmkmcibCRM.reducerAgentList.agentListSaveInProgress,
        agentListSaveError: state.user.mrmkmcibCRM.reducerAgentList.agentListSaveError,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        agentListAccessLevel: state.user.mrmkmcibCRM.reducerAgentList.agentListAccessLevel,
        inputAgentJobPosition: state.user.mrmkmcibCRM.reducerAgentList.inputAgentJobPosition,
        isVisibleAgentListErrorModalWindow: state.user.mrmkmcibCRM.reducerAgentList
            .isVisibleAgentListErrorModalWindow,
        searchAgentStringRequest: state.user.mrmkmcibCRM.reducerAgentList.searchAgentStringRequest,
        agentListOpenedDeletePanel: state.user.mrmkmcibCRM.reducerAgentList.agentListOpenedDeletePanel
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performAgentDelete: (agent) => {
            dispatch(thunkAgentList.performAgentDelete(agent));
        },
        navigateToPrincipalPickerScreen: () => {
            dispatch(thunkAgentList.navigateToPrincipalPickerScreen());
        },
        performAgentListPrincipal: (agentId, isPrincipal) => {
            dispatch(thunkAgentList.performAgentListPrincipal(agentId, isPrincipal));
        },
        navigateToAgentSearchScreen: () => {
            dispatch(thunkAgentList.navigateToAgentSearchScreen());
        },
        performInputAgentSearch: (value) => {
            dispatch(thunkAgentList.performInputAgentSearch(value));
        },
        performAgentSearchListSelect: (agent) => {
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
        performOpenAgentScreen: (agent, agentMode, agentContextMode) => {
            dispatch(thunkAgentList.performOpenAgentScreen(agent, agentMode, agentContextMode));
        },
        performInit: () => {
            dispatch(thunkAgentList.performInit());
        },
        performCancelSearchAgent: () => {
            dispatch(thunkAgentList.performCancelSearchAgent());
        },
        performSelectAgentJobPosition: (value) => {
            dispatch(thunkAgentList.performSelectAgentJobPosition(value));
        },
        performInputAgentJobPosition: (value) => {
            dispatch(thunkAgentList.performInputAgentJobPosition(value));
        },
        performChangeDisplayAgentListErrorModalWindow: () => {
            dispatch(thunkAgentList.performChangeDisplayAgentListErrorModalWindow(false));
        },
        callGetAgentSearchList: () => {
            dispatch(thunkAgentList.callGetAgentSearchList());
        },
        performOpenAgentDeletePanel: (agent) => {
            dispatch(thunkAgentList.performOpenAgentDeletePanel(agent));
        },
        performCloseAgentDeletePanel: (agent) => {
            dispatch(thunkAgentList.performCloseAgentDeletePanel(agent));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerAgentList);
//# sourceMappingURL=ContainerAgentList.js.map