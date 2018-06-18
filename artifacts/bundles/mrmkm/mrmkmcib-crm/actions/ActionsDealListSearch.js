/**
 * Actions of DealList container.
 *
 * @author Vladykin A.S.
 * @see
 */
export const SWAP_CONTEXT = 'DEAL_LIST_SEARCH_CONTAINER_SWAP_CONTEXT';
export const PERFORM_INPUT_SEARCH = 'DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_SEARCH';
export const PERFORM_INPUT_RESET = 'DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_RESET';
export const swapContext = (dealOpenedList, dealClosedList) => ({
    type: SWAP_CONTEXT,
    payload: {
        dealOpenedList: dealOpenedList,
        dealClosedList: dealClosedList,
    }
});
export const performInputSearch = (value) => ({
    type: PERFORM_INPUT_SEARCH,
    payload: {
        value: value,
    }
});
export const performInputReset = () => ({
    type: PERFORM_INPUT_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsDealListSearch.js.map