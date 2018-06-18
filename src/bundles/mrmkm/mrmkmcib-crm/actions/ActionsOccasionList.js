/**
 * Actions of OccasionList container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_EDIT = 'OCCASION_LIST_CONTAINER_PERFORM_EDIT';
export const PERFORM_CANCEL = 'OCCASION_LIST_CONTAINER_PERFORM_CANCEL';
export const NAVIGATE_BACK = 'OCCASION_LIST_CONTAINER_NAVIGATE_BACK';
export const PERFORM_DELETE_OCCASION = 'OCCASION_LIST_CONTAINER_PERFORM_DELETE_OCCASION';
export const CALL_UPDATE_REQUEST_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CALL_UPDATE_REQUEST_OCCASION_LIST';
export const CALL_UPDATE_FAILURE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CALL_UPDATE_FAILURE_OCCASION_LIST';
export const PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS';
export const PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS';
export const PERFORM_OPEN_OCCASION_LIST_SCREEN = 'OCCASION_LIST_CONTAINER_PERFORM_OPEN_OCCASION_LIST_SCREEN';
export const PERFORM_CONTAINER_RESET = 'OCCASION_LIST_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION';
export const PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW = 'OCCASION_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW';
export const CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST';
export const PERFORM_UPDATE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST';
export const PERFORM_SAVE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_SAVE_OCCASION_LIST';
export const PERFORM_INPUT_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_INPUT_OCCASION_LIST';
export const PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL = 'OCCASION_LIST_CONTAINER_PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL';
export const performSaveOccasionList = () => ({
    type: PERFORM_SAVE_OCCASION_LIST,
    payload: {}
});
export const callUpdateRequestOccasionList = () => ({
    type: CALL_UPDATE_REQUEST_OCCASION_LIST,
    payload: {}
});
export const performUpdateAgentOccasionListSuccess = (agent) => ({
    type: PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS,
    payload: { agent }
});
export const performUpdateCustomerOccasionListSuccess = (customer) => ({
    type: PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS,
    payload: { customer }
});
export const callUpdateFailureOccasionList = (error) => ({
    type: CALL_UPDATE_FAILURE_OCCASION_LIST,
    payload: { error }
});
export const performInputOccasionList = (occasionList) => ({
    type: PERFORM_INPUT_OCCASION_LIST,
    payload: { occasionList }
});
export const performUpdateOccasionList = (occasionList) => ({
    type: PERFORM_UPDATE_OCCASION_LIST,
    payload: { occasionList }
});
export const performCancel = () => ({
    type: PERFORM_CANCEL,
    payload: {}
});
export const performChangeDisplayOccasionListErrorModalWindow = (value) => ({
    type: PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW,
    payload: { value }
});
export const performEdit = () => ({
    type: PERFORM_EDIT,
    payload: {}
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const performDeleteOccasion = () => ({
    type: PERFORM_DELETE_OCCASION,
    payload: {}
});
export const performOpenOccasionListScreen = (occasionListContextMode, occasionListAccessLevel, agent, customer) => ({
    type: PERFORM_OPEN_OCCASION_LIST_SCREEN,
    payload: {
        occasionListContextMode,
        occasionListAccessLevel,
        agent,
        customer,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const performUpdateOccasionListWithMenuOption = (occasionListWithMenuOption) => ({
    type: PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION,
    payload: {
        occasionListWithMenuOption,
    }
});
export const changeStatusNeedUpdateOccasionList = (value) => ({
    type: CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST,
    payload: {
        value,
    }
});
export const performSetOccasionListAccessLevel = (value) => ({
    type: PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL,
    payload: {
        value,
    }
});
//# sourceMappingURL=ActionsOccasionList.js.map