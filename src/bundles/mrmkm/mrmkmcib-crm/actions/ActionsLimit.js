/**
 * Actions of Limit container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_CHANGE_TAB = 'LIMIT_CONTAINER_PERFORM_CHANGE_TAB';
export const PERFORM_CHANGE_TOTAL_TAB = 'LIMIT_CONTAINER_PERFORM_CHANGE_TOTAL_TAB';
export const PERFORM_CONTAINER_RESET = 'LIMIT_CONTAINER_PERFORM_CONTAINER_RESET';
export const performChangeTab = (index, value) => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
});
export const performChangeTotalTab = (index, value) => ({
    type: PERFORM_CHANGE_TOTAL_TAB,
    payload: {
        index: index,
        value: value,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsLimit.js.map