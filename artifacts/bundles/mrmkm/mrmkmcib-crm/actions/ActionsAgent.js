/**
 * Actions of Agent container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_SEND_EMAIL = 'AGENT_CONTAINER_PERFORM_SEND_EMAIL';
export const PERFORM_SCHEDULER_OPEN = 'AGENT_CONTAINER_PERFORM_SCHEDULER_OPEN';
export const PERFORM_INPUT_FIRST_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_FIRST_NAME';
export const PERFORM_INPUT_LAST_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_LAST_NAME';
export const PERFORM_INPUT_MIDDLE_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_MIDDLE_NAME';
export const NAVIGATE_TO_JOB_PICKER_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_JOB_PICKER_SCREEN';
export const PERFORM_INPUT_JOB_POSITION = 'AGENT_CONTAINER_PERFORM_INPUT_JOB_POSITION';
export const PERFORM_INPUT_SEARCH_JOB_POSITION = 'AGENT_CONTAINER_PERFORM_INPUT_SEARCH_JOB_POSITION';
export const PERFORM_CLOSE_AGENT_SCREEN = 'AGENT_CONTAINER_PERFORM_CLOSE_AGENT_SCREEN';
export const PERFORM_SET_AGENT_PANEL_CURRENT_PAGE = 'AGENT_CONTAINER_PERFORM_SET_AGENT_PANEL_CURRENT_PAGE';
export const PERFORM_INPUT_WORK_PHONE = 'AGENT_CONTAINER_PERFORM_INPUT_WORK_PHONE';
export const PERFORM_INPUT_MOBILE_PHONE = 'AGENT_CONTAINER_PERFORM_INPUT_MOBILE_PHONE';
export const PERFORM_INPUT_EMAIL = 'AGENT_CONTAINER_PERFORM_INPUT_EMAIL';
export const PERFORM_INPUT_BIRTHDAY = 'AGENT_CONTAINER_PERFORM_INPUT_BIRTHDAY';
export const PERFORM_INPUT_GENDER = 'AGENT_CONTAINER_PERFORM_INPUT_GENDER';
export const NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN';
export const PERFORM_INPUT_RELATION_TYPE = 'AGENT_CONTAINER_PERFORM_INPUT_RELATION_TYPE';
export const PERFORM_INPUT_COMMENT = 'AGENT_CONTAINER_PERFORM_INPUT_COMMENT';
export const PERFORM_VALIDATE = 'AGENT_CONTAINER_PERFORM_VALIDATE';
export const CALL_POST_AGENT_CREATE = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE';
export const CALL_POST_AGENT_CREATE_REQUEST = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_REQUEST';
export const CALL_POST_AGENT_CREATE_SUCCESS = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_SUCCESS';
export const CALL_POST_AGENT_CREATE_FAILURE = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_FAILURE';
export const CALL_GET_AGENT_MODIFIER_ID = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID';
export const CALL_GET_AGENT_MODIFIER_ID_REQUEST = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_REQUEST';
export const CALL_GET_AGENT_MODIFIER_ID_SUCCESS = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_SUCCESS';
export const CALL_GET_AGENT_MODIFIER_ID_FAILURE = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_FAILURE';
export const CALL_PUT_AGENT_UPDATE = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE';
export const CALL_PUT_AGENT_UPDATE_REQUEST = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_REQUEST';
export const CALL_PUT_AGENT_UPDATE_SUCCESS = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_SUCCESS';
export const CALL_PUT_AGENT_UPDATE_FAILURE = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_FAILURE';
export const PERFORM_EDIT = 'AGENT_CONTAINER_PERFORM_EDIT';
export const PERFORM_GRANT_ACCESS_TO_AGENT = 'AGENT_CONTAINER_PERFORM_GRANT_ACCESS_TO_AGENT';
export const PERFORM_INPUT_AGENT = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT';
export const PERFORM_CANCEL = 'AGENT_CONTAINER_PERFORM_CANCEL';
export const NAVIGATE_TO_NOTE_LIST = 'AGENT_CONTAINER_NAVIGATE_TO_NOTE_LIST';
export const NAVIGATE_TO_NOTE_EDIT_LIST = 'NAVIGATE_TO_NOTE_EDIT_LIST';
export const NAVIGATE_TO_AGENT_COMMENT = 'NAVIGATE_TO_AGENT_COMMENT';
export const PERFORM_CHANGE_TAB = 'AGENT_CONTAINER_PERFORM_CHANGE_TAB';
export const CALL_GET_AGENT = 'AGENT_CONTAINER_CALL_GET_AGENT';
export const CALL_GET_AGENT_REQUEST = 'AGENT_CONTAINER_CALL_GET_AGENT_REQUEST';
export const CALL_GET_AGENT_SUCCESS = 'AGENT_CONTAINER_CALL_GET_AGENT_SUCCESS';
export const CALL_GET_AGENT_FAILURE = 'AGENT_CONTAINER_CALL_GET_AGENT_FAILURE';
export const NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN';
export const NAVIGATE_BACK = 'AGENT_CONTAINER_NAVIGATE_BACK';
export const NAVIGATE_TO_MEMBER_LIST = 'AGENT_CONTAINER_NAVIGATE_TO_MEMBER_LIST';
export const PERFORM_CONTAINER_RESET = 'AGENT_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_INPUT_AGENT_OCCASION_LIST = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT_OCCASION_LIST';
export const CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA = 'AGENT_CONTAINER_CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA';
export const PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW = 'AGENT_CONTAINER_PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW';
export const PERFORM_UPDATE_CURRENT_AGENT = 'AGENT_CONTAINER_PERFORM_UPDATE_CURRENT_AGENT';
export const PERFORM_FLUSH_AGENT = 'AGENT_CONTAINER_PERFORM_FLUSH_AGENT';
export const PERFORM_INPUT_AGENT_NOTE_LIST = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT_NOTE_LIST';
export const PERFORM_SET_AGENT_COMMENT_EDIT_STATUS = 'AGENT_CONTAINER_PERFORM_SET_AGENT_COMMENT_EDIT_STATUS';
export const PERFORM_CHANGE_AGENT_COMMENT = 'AGENT_CONTAINTER_PERFORM_CHANGE_AGENT_COMMENT';
export const performSetAgentPanelCurrentPage = (value) => ({
    type: PERFORM_SET_AGENT_PANEL_CURRENT_PAGE,
    payload: { value }
});
export const performFlushAgent = () => ({
    type: PERFORM_FLUSH_AGENT,
    payload: {}
});
export const performSendEmail = () => ({
    type: PERFORM_SEND_EMAIL,
    payload: {}
});
export const performSchedulerOpen = () => ({
    type: PERFORM_SCHEDULER_OPEN,
    payload: {}
});
export const performInputFirstName = (value) => ({
    type: PERFORM_INPUT_FIRST_NAME,
    payload: {
        value: value,
    }
});
export const performInputLastName = (value) => ({
    type: PERFORM_INPUT_LAST_NAME,
    payload: {
        value: value,
    }
});
export const performInputMiddleName = (value) => ({
    type: PERFORM_INPUT_MIDDLE_NAME,
    payload: {
        value: value,
    }
});
export const navigateToJobPickerScreen = () => ({
    type: NAVIGATE_TO_JOB_PICKER_SCREEN,
    payload: {}
});
export const performInputJobPosition = (value) => ({
    type: PERFORM_INPUT_JOB_POSITION,
    payload: {
        value: value,
    }
});
export const performInputSearchJobPosition = (value) => ({
    type: PERFORM_INPUT_SEARCH_JOB_POSITION,
    payload: {
        value: value,
    }
});
export const performInputWorkPhone = (value) => ({
    type: PERFORM_INPUT_WORK_PHONE,
    payload: {
        value: value,
    }
});
export const performInputMobilePhone = (value) => ({
    type: PERFORM_INPUT_MOBILE_PHONE,
    payload: {
        value: value,
    }
});
export const performInputEmail = (value) => ({
    type: PERFORM_INPUT_EMAIL,
    payload: {
        value: value,
    }
});
export const performInputBirthday = (value) => ({
    type: PERFORM_INPUT_BIRTHDAY,
    payload: {
        value: value,
    }
});
export const performInputGender = (value) => ({
    type: PERFORM_INPUT_GENDER,
    payload: {
        value,
    }
});
export const navigateToRelationTypePickerScreen = () => ({
    type: NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN,
    payload: {}
});
export const performInputRelationType = (value) => ({
    type: PERFORM_INPUT_RELATION_TYPE,
    payload: {
        value: value,
    }
});
export const performInputComment = (value) => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
});
export const performChangeAgentComment = (value) => ({
    type: PERFORM_CHANGE_AGENT_COMMENT,
    payload: {
        value: value,
    }
});
export const performCloseAgentScreen = () => ({
    type: PERFORM_CLOSE_AGENT_SCREEN,
    payload: {}
});
export const performValidate = (list) => ({
    type: PERFORM_VALIDATE,
    payload: { list }
});
export const callPostAgentCreate = () => ({
    type: CALL_POST_AGENT_CREATE,
    payload: {}
});
export const callPostAgentCreateRequest = () => ({
    type: CALL_POST_AGENT_CREATE_REQUEST,
    payload: {}
});
export const callPostAgentCreateSuccess = (response) => ({
    type: CALL_POST_AGENT_CREATE_SUCCESS,
    payload: {
        response
    }
});
export const callPostAgentCreateFailure = (error) => ({
    type: CALL_POST_AGENT_CREATE_FAILURE,
    payload: {
        error: error
    }
});
export const performUpdateCurrentAgent = (agent) => ({
    type: PERFORM_UPDATE_CURRENT_AGENT,
    payload: { agent }
});
export const callPutAgentUpdate = () => ({
    type: CALL_PUT_AGENT_UPDATE,
    payload: {}
});
export const callPutAgentUpdateRequest = () => ({
    type: CALL_PUT_AGENT_UPDATE_REQUEST,
    payload: {}
});
export const callPutAgentUpdateSuccess = (response) => ({
    type: CALL_PUT_AGENT_UPDATE_SUCCESS,
    payload: { response }
});
export const callPutAgentUpdateFailure = (error) => ({
    type: CALL_PUT_AGENT_UPDATE_FAILURE,
    payload: {
        error: error
    }
});
export const performGrantAccessToAgent = (value) => ({
    type: PERFORM_GRANT_ACCESS_TO_AGENT,
    payload: { value }
});
export const performEdit = () => ({
    type: PERFORM_EDIT,
    payload: {}
});
export const performCancel = (agent, customerManaged) => ({
    type: PERFORM_CANCEL,
    payload: { agent, customerManaged }
});
export const changeStatusNeedUpdateAgentPersonData = (value) => ({
    type: CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA,
    payload: { value }
});
export const performInputAgentNoteList = (noteList) => ({
    type: PERFORM_INPUT_AGENT_NOTE_LIST,
    payload: { noteList }
});
export const performInputAgentOccasionList = (occasionList) => ({
    type: PERFORM_INPUT_AGENT_OCCASION_LIST,
    payload: { occasionList }
});
export const navigateToNoteList = () => ({
    type: NAVIGATE_TO_NOTE_LIST,
    payload: {}
});
export const performSetAgentCommentEditStatus = (status) => ({
    type: PERFORM_SET_AGENT_COMMENT_EDIT_STATUS,
    payload: { status }
});
export const navigateToMemberList = () => ({
    type: NAVIGATE_TO_MEMBER_LIST,
    payload: {}
});
export const navigateToAgentComment = () => ({
    type: NAVIGATE_TO_AGENT_COMMENT,
    payload: {}
});
export const performInputAgent = (agent, currentCustomerManaged, agentMode, agentContextMode) => ({
    type: PERFORM_INPUT_AGENT,
    payload: {
        agent,
        currentCustomerManaged,
        agentMode,
        agentContextMode
    }
});
export const performChangeDisplayAgentErrorModalWindow = (value) => ({
    type: PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW,
    payload: { value }
});
export const callGetAgent = () => ({
    type: CALL_GET_AGENT,
    payload: {}
});
export const callGetAgentRequest = () => ({
    type: CALL_GET_AGENT_REQUEST,
    payload: {}
});
export const callGetAgentSuccess = (response) => ({
    type: CALL_GET_AGENT_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetAgentFailure = (error) => ({
    type: CALL_GET_AGENT_FAILURE,
    payload: {
        error: error
    }
});
export const navigateToAgentCustomerPositionListScreen = () => ({
    type: NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN,
    payload: {}
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsAgent.js.map