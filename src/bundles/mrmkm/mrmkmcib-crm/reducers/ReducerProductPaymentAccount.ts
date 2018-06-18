/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsProductPaymentAccount from '../actions/ActionsProductPaymentAccount'
import {Enums} from '../Enums'
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import Action from "../models/Action"

import * as util from '../common/Util'
import {defaultValues} from '../models/Models'

const reducerProductPaymentAccount = handleActions<ModelsProductPaymentAccount.IProductPaymentAccountState>({

    // Thunk dispatched by "ProductPaymentAccount" screen. (Deprecated)Thunk chain dispatched on tab selector change current tab.
    [actionsProductPaymentAccount.PERFORM_CHANGE_TAB]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_CHANGE_TAB>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            currentTab: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_SUM_MIN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_SUM_MIN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputSumMin: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_SUM_MAX]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_SUM_MAX>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputSumMax: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            isVisiblePopoverFilter: true,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            isVisiblePopoverFilter: false,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputOperationType: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            isVisiblePopoverPeriodType: true,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            isVisiblePopoverPeriodType: false,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputPeriodType: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodStart field.
    [actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputFilterPeriodStart: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodEnd field.
    [actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputFilterPeriodEnd: action.payload.value,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to change filter period.
    [actionsProductPaymentAccount.PERFORM_FILTER_APPLY]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_FILTER_APPLY>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            filterSumMin: state.inputSumMin,
            filterSumMax: state.inputSumMax,
            filterOperationType: state.inputOperationType,
            isVisiblePopoverPeriodType: false,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset filter period.
    [actionsProductPaymentAccount.PERFORM_FILTER_RESET]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_FILTER_RESET>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            inputOperationType: Enums.OperationType.DebtAndCredit,
            filterOperationType: Enums.OperationType.DebtAndCredit,
            inputSumMin: null,
            inputSumMax: null,
            filterSumMin: null,
            filterSumMax: null,
        }
    },

    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched to filter operation list.
    [actionsProductPaymentAccount.OPERATION_LIST_FILTER]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.OPERATION_LIST_FILTER>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            operationFilteredList: util.operationListFilter(state.operationList, state.inputFilterPeriodStart, state.inputFilterPeriodEnd, state.inputPeriodType, state.filterOperationType, state.filterSumMin, state.filterSumMax),
        }
    },

    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user select custom period type.
    [actionsProductPaymentAccount.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user navigate back.
    [actionsProductPaymentAccount.NAVIGATE_PERIOD_TYPE_CUSTOM_BACK]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_PERIOD_TYPE_CUSTOM_BACK>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch update card index list reset cache.
    [actionsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch update card index list reset cache.
    [actionsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_OPERATION_LIST>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_REQUEST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<void>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            operationListFetching: true,
            operationListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_SUCCESS]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_SUCCESS>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            operationList: action.payload.response.data,
            operationListCachedDate: action.payload.response.data.bhCachedDate,
            operationListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            operationListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_FAILURE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_FAILURE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            operationList: {...defaultValues.PaymentAccountProductOperationList, pollingStatus: Enums.ProductPollingStatus.Error },
            operationListFetching: false,
            operationListError: action.payload.error,
        }
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_REQUEST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<void>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexEksListFetching: true,
            cardIndexEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexEksList: action.payload.response.data,
            cardIndexEksListCachedDate: action.payload.response.data.bhCachedDate,
            cardIndexEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            cardIndexEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_FAILURE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_FAILURE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexList: {...defaultValues.PaymentAccountProductCardIndexList,
                pollingStatus: Enums.ProductPollingStatus.Error},
            cardIndexEksListFetching: false,
            cardIndexEksListError: action.payload.error,
        }
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_REQUEST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<void>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexListFetching: true,
            cardIndexListError: null,
        }
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_REQUEST]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<void>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            productVspInfoFetching: true,
            productVspInfoFetchingError: null,
        }
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_SUCCESS]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_SUCCESS>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            productVspInfoFetching: false,
            productVspInfo: {...action.payload.response.data},
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_FAILURE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_FAILURE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            productVspInfoFetchingError: action.payload.error,
            productVspInfoFetching: false,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_SUCCESS]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_SUCCESS>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexList: action.payload.response.data,
            cardIndexListCachedDate: action.payload.response.cachedDate,
            cardIndexListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            cardIndexListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_FAILURE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_FAILURE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
            cardIndexList: {...defaultValues.PaymentAccountProductCardIndexList,
                            pollingStatus: Enums.ProductPollingStatus.Error},
            cardIndexListCachedDate: new Date(),
            cardIndexListFetching: false,
            cardIndexListError: action.payload.error,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user navigate back to ProductPaymentAccount screen.
    [actionsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset container state to default values.
    [actionsProductPaymentAccount.PERFORM_CONTAINER_RESET]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.PERFORM_CONTAINER_RESET>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...ModelsProductPaymentAccount.initialState.state,
        }
    },

    // Internal thunk used in "ProductPaymentAccount" container. Clear all network cache for operation list if pollign status is not success or eksErrorList is not empty.
    [actionsProductPaymentAccount.CLEAR_OPERATION_LIST_CACHE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CLEAR_OPERATION_LIST_CACHE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },

    // Internal thunk used in "ProductPaymentAccount" container. Clear all network cache for card index list if pollign status is not success or eksErrorList is not empty.
    [actionsProductPaymentAccount.CLEAR_CARD_INDEX_LIST_CACHE]: (state: ModelsProductPaymentAccount.IProductPaymentAccountState, action: Action<actionsProductPaymentAccount.CLEAR_CARD_INDEX_LIST_CACHE>): ModelsProductPaymentAccount.IProductPaymentAccountState => {
        return {
            ...state,
        }
    },


}, ModelsProductPaymentAccount.initialState.state)

export default reducerProductPaymentAccount
