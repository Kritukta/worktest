/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsCustomer from '../actions/ActionsCustomer'
import {defaultValues} from "../models/Models"
import {Enums} from '../Enums'
import * as ModelsCustomer from "../models/ModelsCustomer"
import Action from "../models/Action"

import * as util from '../common/Util'

const reducerCustomer = handleActions<ModelsCustomer.ICustomerState>({

    // Thunk dispatched by "Customer" screen. Thunk chain used to toggle DashboardExpandedMode.
    [actionsCustomer.PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isDashboardExpandedMode: !state.isDashboardExpandedMode,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to input search text.
    [actionsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            inputSearchAffiliateList: action.payload.search,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to navigate back
    [actionsCustomer.NAVIGATE_BACK]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        let navigationHistory = state.customerNavigationHistory
        let historyLength = navigationHistory.length

        if (historyLength) {
            return {
                ...state,
                currentCustomerId: navigationHistory[historyLength - 1].customer.id !== '' ?
                    navigationHistory[historyLength - 1].customer.id :
                    navigationHistory[historyLength - 1].customerManaged.id,
                currentCustomer: navigationHistory[historyLength - 1].customer,
                currentCustomerManaged: navigationHistory[historyLength - 1].customerManaged,
                currentMode: navigationHistory[historyLength - 1].navigationMode,
            }
        }

        return {
            ...state
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to perform search query.
    [actionsCustomer.PERFORM_AFFILIATE_LIST_SEARCH]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            affiliateSearchList: {
                data: util.searchAffiliateList(state.currentCustomerManaged.affiliateList, state.inputSearchAffiliateList),
                isCompleted: true
            },
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to enable search mode.
    [actionsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isSearchModeAffiliateList: true,
            inputSearchAffiliateList: '',
            affiliateSearchList: {
                data: [],
                isCompleted: false
            }
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to enable search mode.
    [actionsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isSearchModeAffiliateList: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsCustomer.PERFORM_CHANGE_TAB]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.PERFORM_CHANGE_TAB>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentTab: action.payload.value,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_HOLDER_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverHolder: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_HOLDER_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverHolder: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_CURATOR_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverCurator: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_CURATOR_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverCurator: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to navigate to employee screen.
    [actionsCustomer.NAVIGATE_TO_EMPLOYEE_VIEW_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverOccasionList: true,
        }
    },


    [actionsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverOccasionList: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverNoteList: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverNoteList: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverProblemList: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverProblemList: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_OWNER_SHOW]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.PERFORM_POPOVER_OWNER_SHOW>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentOwner: action.payload.owner,
            isVisiblePopoverOwner: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_OWNER_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverOwner: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to open owner agent screen.
    [actionsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            agentContextMode: action.payload.agentContextMode,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to open customer screen and save navigation in history.
    [actionsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN]: (
        state: ModelsCustomer.ICustomerState,
        action: Action<actionsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN>,
    ): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            ...util.getCustomerScreenState(action),
            customer: action.payload.customer,
            customerNavigationHistory: util.doCustomerToHistoryAction(
                action.payload.historyAction,
                state.currentCustomer,
                action.payload.previousCustomer,
                [...state.customerNavigationHistory],
                action.payload.customerMode,
                state.currentTab,
                state.productListAgreementStatus,
                action.payload.currentDealForecast,
                action.payload.currentDeal,
            ),
            currentTab: Enums.CustomerManagedTab.Main,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to load any kind customer data.
    [actionsCustomer.PERFORM_REFRESH]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentCustomer: defaultValues.Customer,
            currentCustomerManaged: defaultValues.CustomerManaged,
            affiliateSearchList: defaultValues.CustomerList
        }
    },
    // Internal thunk used in "Customer" container. Fetch current customer data.
    [actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CREDIT_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CREDIT_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_DEPOSIT_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_DEPOSIT_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CORPORATE_CARD_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_CORPORATE_CARD_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_ACQUIRING_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_ACQUIRING_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_DBO_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_DBO_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_SALARY_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_SALARY_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_UDBO_ACTIVE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },
    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_UDBO_CLOSE_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Internal thunk used in "Customer" container. Fetch used to update operation uuid product list.
    [actionsCustomer.UPDATE_LEGAL_INFO_PRODUCT_LIST_OPERATION_UUID]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductListOperationUuid: util.getRandomOperationUuid(),
        }
    },

    // Action dispatched on network thunk chain "customer_callGetCustomer" started. Internal thunk used in "Customer" container. Fetch current customer data.
    [actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            customerFetching: true,
            customerError: null,

        }
    },
    // Action dispatched on fetch succeeded in thunk "customer_callGetCustomer". Internal thunk used in "Customer" container. Fetch current customer data.
    [actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            customer: action.payload.response.data,
            customerCachedDate: action.payload.response.cachedDate,
            customerFetching: false,
            customerError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "customer_callGetCustomer". Internal thunk used in "Customer" container. Fetch current customer data.
    [actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CUSTOMER_CALL_GET_CUSTOMER_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            customerFetching: false,
            customerError: action.payload.error,
        }
    },

    // Internal thunk used in "Customer" container. Open not managed customer.
    [actionsCustomer.CUSTOMER_OPEN_CUSTOMER]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CUSTOMER_OPEN_CUSTOMER>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentCustomer: action.payload.customer,
            currentCustomerId: action.payload.customer.id,
            currentTab: Enums.CustomerManagedTab.Main,

        }
    },

    // Internal thunk used in "Customer" container. Open managed customer.
    [actionsCustomer.CUSTOMER_OPEN_CUSTOMER_MANAGED]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CUSTOMER_OPEN_CUSTOMER_MANAGED>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentCustomerManaged: action.payload.customerManaged,
            currentCustomerId: action.payload.customerManaged.id,
            currentTab: Enums.CustomerManagedTab.Main,
        }
    },

    // Internal thunk used in "Customer" container. Thunk chain used to show popover.
    [actionsCustomer.PERFORM_POPOVER_LIMIT_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverLimit: true,
            currentPopoverLimitItem: Enums.OldLimitItem.Main,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
    [actionsCustomer.PERFORM_POPOVER_LIMIT_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePopoverLimit: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to open limit item details screen.
    [actionsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentPopoverLimitItem: action.payload.item,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to navigate back limit popover.
    [actionsCustomer.NAVIGATE_POPOVER_LIMIT_BACK]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Internal thunk used in "Customer" container. Thunk used to open customer limit screen.
    [actionsCustomer.NAVIGATE_TO_LIMIT_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch current customer new limits.
    [actionsCustomer.CALL_GET_LIMIT_NEW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetLimitNew" started. Thunk dispatched by "Customer" screen. Fetch current customer new limits.
    [actionsCustomer.CALL_GET_LIMIT_NEW_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limitFetching: true,
            limitError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetLimitNew". Thunk dispatched by "Customer" screen. Fetch current customer new limits.
    [actionsCustomer.CALL_GET_LIMIT_NEW_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LIMIT_NEW_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limit: action.payload.response.data,
            limitCachedDate: action.payload.response.cachedDate,
            limitFetching: false,
            limitError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetLimitNew". Thunk dispatched by "Customer" screen. Fetch current customer new limits.
    [actionsCustomer.CALL_GET_LIMIT_NEW_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LIMIT_NEW_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limitFetching: false,
            limitError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch current customer old limits.
    [actionsCustomer.CALL_GET_LIMIT_OLD]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetLimitOld" started. Thunk dispatched by "Customer" screen. Fetch current customer old limits.
    [actionsCustomer.CALL_GET_LIMIT_OLD_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limitOldFetching: true,
            limitOldError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetLimitOld". Thunk dispatched by "Customer" screen. Fetch current customer old limits.
    [actionsCustomer.CALL_GET_LIMIT_OLD_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LIMIT_OLD_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limitOld: action.payload.response.data,
            limitOldCachedDate: action.payload.response.cachedDate,
            limitOldFetching: false,
            limitOldError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetLimitOld". Thunk dispatched by "Customer" screen. Fetch current customer old limits.
    [actionsCustomer.CALL_GET_LIMIT_OLD_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LIMIT_OLD_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            limitOldFetching: false,
            limitOldError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to open customer new limit screen or old limit popover.
    [actionsCustomer.PERFORM_LIMIT_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to show product list cache force update modal alert
    [actionsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisibleProductListModalAlert: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to show product list cache force update modal alert
    [actionsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisibleProductListModalAlert: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched on user input Active field.
    [actionsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            productListAgreementStatus: action.payload.value,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch all product types data.
    [actionsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            productListAgreementStatus: Enums.ProductListAgreementStatus.Opened,
            creditActiveProductList: defaultValues.CreditProductList,
            creditCloseProductList: defaultValues.CreditProductList,
            creditActiveProductEksList: defaultValues.CreditProductList,
            creditCloseProductEksList: defaultValues.CreditProductList,
            creditActiveProductListFetching: false,
            creditActiveProductListUpdating: false,
            creditCloseProductListFetching: false,
            creditCloseProductListUpdating: false,
            creditActiveProductEksListFetching: false,
            creditCloseProductEksListFetching: false,
            settlementAgreementActiveProductList: defaultValues.SettlementAgreementProductList,
            settlementAgreementCloseProductList: defaultValues.SettlementAgreementProductList,
            settlementAgreementActiveProductEksList: defaultValues.SettlementAgreementProductList,
            settlementAgreementCloseProductEksList: defaultValues.SettlementAgreementProductList,
            settlementAgreementActiveProductListFetching: false,
            settlementAgreementActiveProductListUpdating: false,
            settlementAgreementCloseProductListFetching: false,
            settlementAgreementCloseProductListUpdating: false,
            settlementAgreementActiveProductEksListFetching: false,
            settlementAgreementCloseProductEksListFetching: false,
            depositActiveProductList: defaultValues.DepositProductList,
            depositCloseProductList: defaultValues.DepositProductList,
            depositActiveProductEksList: defaultValues.DepositProductList,
            depositCloseProductEksList: defaultValues.DepositProductList,
            depositActiveProductListFetching: false,
            depositActiveProductListUpdating: false,
            depositCloseProductListFetching: false,
            depositCloseProductListUpdating: false,
            depositActiveProductEksListFetching: false,
            depositCloseProductEksListFetching: false,
            corporateCardActiveProductList: defaultValues.CorporateCardProductList,
            corporateCardCloseProductList: defaultValues.CorporateCardProductList,
            corporateCardActiveProductEksList: defaultValues.CorporateCardProductList,
            corporateCardCloseProductEksList: defaultValues.CorporateCardProductList,
            corporateCardActiveProductListFetching: false,
            corporateCardActiveProductListUpdating: false,
            corporateCardCloseProductListFetching: false,
            corporateCardCloseProductListUpdating: false,
            corporateCardActiveProductEksListFetching: false,
            corporateCardCloseProductEksListFetching: false,
            encashmentContractActiveProductList: defaultValues.EncashmentContractProductList,
            encashmentContractCloseProductList: defaultValues.EncashmentContractProductList,
            encashmentContractActiveProductEksList: defaultValues.EncashmentContractProductList,
            encashmentContractCloseProductEksList: defaultValues.EncashmentContractProductList,
            encashmentContractActiveProductListFetching: false,
            encashmentContractActiveProductListUpdating: false,
            encashmentContractCloseProductListFetching: false,
            encashmentContractCloseProductListUpdating: false,
            encashmentContractActiveProductEksListFetching: false,
            encashmentContractCloseProductEksListFetching: false,
            legalInfoProductList: defaultValues.LegalInfoProductList,
            legalInfoProductEksList: defaultValues.LegalInfoProductList,
            legalInfoProductListFetching: false,
            legalInfoProductListFetchingUpdating: false,
            acquiringActiveProductList: defaultValues.AcquiringProductList,
            acquiringCloseProductList: defaultValues.AcquiringProductList,
            acquiringActiveProductEksList: defaultValues.AcquiringProductList,
            acquiringCloseProductEksList: defaultValues.AcquiringProductList,
            acquiringActiveProductListFetching: false,
            acquiringActiveProductListUpdating: false,
            acquiringCloseProductListFetching: false,
            acquiringCloseProductListUpdating: false,
            acquiringActiveProductEksListFetching: false,
            acquiringCloseProductEksListFetching: false,
            dboActiveProductList: defaultValues.DboProductList,
            dboCloseProductList: defaultValues.DboProductList,
            dboActiveProductEksList: defaultValues.DboProductList,
            dboCloseProductEksList: defaultValues.DboProductList,
            dboActiveProductListFetching: false,
            dboActiveProductListUpdating: false,
            dboCloseProductListFetching: false,
            dboCloseProductListUpdating: false,
            dboActiveProductEksListFetching: false,
            dboCloseProductEksListFetching: false,
            udboActiveProductList: defaultValues.UdboProductList,
            udboCloseProductList: defaultValues.UdboProductList,
            udboActiveProductEksList: defaultValues.UdboProductList,
            udboCloseProductEksList: defaultValues.UdboProductList,
            udboActiveProductListFetching: false,
            udboActiveProductListUpdating: false,
            udboCloseProductListFetching: false,
            udboCloseProductListUpdating: false,
            udboActiveProductEksListFetching: false,
            udboCloseProductEksListFetching: false,
            salaryActiveProductList: defaultValues.SalaryProductList,
            salaryCloseProductList: defaultValues.SalaryProductList,
            salaryActiveProductEksList: defaultValues.SalaryProductList,
            salaryCloseProductEksList: defaultValues.SalaryProductList,
            salaryActiveProductListFetching: false,
            salaryActiveProductListUpdating: false,
            salaryCloseProductListFetching: false,
            salaryCloseProductListUpdating: false,
            salaryActiveProductEksListFetching: false,
            salaryCloseProductEksListFetching: false,
            creditActiveProductEksListError: null,
            creditCloseProductEksListError: null,
            creditActiveProductListError: null,
            creditCloseProductListError: null,
            settlementAgreementActiveProductListError: null,
            settlementAgreementCloseProductListError: null,
            settlementAgreementActiveProductEksListError: null,
            settlementAgreementCloseProductEksListError: null,
            depositActiveProductListError: null,
            depositCloseProductListError: null,
            depositActiveProductEksListError: null,
            depositCloseProductEskListError: null,
            corporateCardActiveProductListError: null,
            corporateCardCloseProductListError: null,
            corporateCardActiveProductEksListError: null,
            corporateCardCloseProductEksListError: null,
            encashmentContractActiveProductListError: null,
            encashmentContractCloseProductListError: null,
            encashmentContractActiveProductEksListError: null,
            encashmentContractCloseProductEksListError: null,
            legalInfoProductListError: null,
            legalInfoProductEksListError: null,
            acquiringActiveProductListError: null,
            acquiringCloseProductListError: null,
            acquiringActiveProductEksListError: null,
            acquiringCloseProductEksListError: null,
            dboActiveProductListError: null,
            dboCloseProductListError: null,
            dboActiveProductEksListError: null,
            dboCloseProductEksListError: null,
            udboActiveProductListError: null,
            udboCloseProductListError: null,
            udboActiveProductEksListError: null,
            udboCloseProductEksListError: null,
            salaryActiveProductListError: null,
            salaryCloseProductListError: null,

        }
    },

    // Internal thunk used in "Customer" container. Clear all network cache for product list if pollign status is not success or eksErrorList is not empty.
    [actionsCustomer.CLEAR_PRODUCT_LIST_CACHE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // START CREDIT PRODUCT LIST REDUCERS
      // Opened product list
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCreditProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductListFetching: true,
            creditActiveProductListUpdating: action.payload.value,
            creditProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCreditProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductList: action.payload.response.data,
            creditActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            creditActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            creditActiveProductListUpdating: state.creditActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            creditActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCreditProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductList: {...defaultValues.CreditProductList},
            creditActiveProductListFetching: false,
            creditActiveProductListUpdating: false,
            creditActiveProductListError: action.payload.error,
        }
    },
        // Closed product list
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCreditProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductListFetching: true,
            creditCloseProductListUpdating: action.payload.value,
            creditCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCreditProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductList: action.payload.response.data,
            creditCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            creditCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            creditCloseroductListUpdating: state.creditCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            creditCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCreditProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductList: {...defaultValues.CreditProductList},
            creditCloseProductListFetching: false,
            creditCloseProductListUpdating: false,
            creditCloseProductListError: action.payload.error,
        }
    },
    // END CREDIT PRODUCT LIST REDUCERS


    // START SETTLEMENT_AGREEMENT PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_PERFORM>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementActiveProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductListFetching: true,
            settlementAgreementActiveProductListUpdating: action.payload.value,
            settlementAgreementActiveProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementActiveProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductList: action.payload.response.data,
            settlementAgreementActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            settlementAgreementActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            settlementAgreementActiveProductListUpdating: state.settlementAgreementActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            settlementAgreementActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementActiveProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductList: {...defaultValues.SettlementAgreementProductList},
            settlementAgreementActiveProductListFetching: false,
            settlementAgreementActiveProductListUpdating: false,
            settlementAgreementActiveProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched to fetch mode.
    [actionsCustomer.CALL_GET_FORECAST_DEAL_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            forecastDealListFetching: true,
            forecastDealListError: null
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched if deals was got.
    [actionsCustomer.CALL_GET_FORECAST_DEAL_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_FORECAST_DEAL_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            forecastDealList: action.payload.response.data,
            forecastDealListFetching: false
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched if deals was failed.
    [actionsCustomer.CALL_GET_FORECAST_DEAL_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_FORECAST_DEAL_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            forecastDealListError: action.payload.error,
            forecastDealListFetching: false
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched to fetch mode.
    [actionsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            prognosticProductListFetching: true,
            prognosticProductListError: null
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched if deals was got.
    [actionsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            prognosticProductList: action.payload.response.data,
            prognosticProductListFetching: false
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched if deals was failed.
    [actionsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            prognosticProductListError: action.payload.error,
            prognosticProductListFetching: false,
            isVisiblePrognosticProductListModalAlert: true
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to show prognostic deals modal alert
    [actionsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_ALERT_SHOW]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePrognosticProductListModalAlert: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk used to hide prognostic deals  modal alert
    [actionsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_ALERT_HIDE]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isVisiblePrognosticProductListModalAlert: false,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductListFetching: true,
            settlementAgreementCloseProductListUpdating: action.payload.value,
            settlementAgreementCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductList: action.payload.response.data,
            settlementAgreementCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            settlementAgreementCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            settlementAgreementCloseProductListUpdating: state.settlementAgreementCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            settlementAgreementCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductList: {...defaultValues.SettlementAgreementProductList},
            settlementAgreementCloseProductListFetching: false,
            settlementAgreementCloseProductListUpdating: false,
            settlementAgreementCloseProductListError: action.payload.error,
        }
    },
    // END SETTLEMENT_AGREEMENT PRODUCT LIST REDUCERS


    // START CORPORATE_CARD PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementActiveProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductListFetching: true,
            corporateCardActiveProductListUpdating: action.payload.value,
            corporateCardActiveProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementActiveProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductList: action.payload.response.data,
            corporateCardActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            corporateCardActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            corporateCardActiveProductListUpdating: state.corporateCardActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            corporateCardActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementActiveProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductList: {...defaultValues.CorporateCardProductList},
            corporateCardActiveProductListFetching: false,
            corporateCardActiveProductListUpdating: false,
            corporateCardActiveProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductListFetching: true,
            corporateCardCloseProductListUpdating: action.payload.value,
            corporateCardCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductList: action.payload.response.data,
            corporateCardCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            corporateCardCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            corporateCardCloseProductListUpdating: state.corporateCardCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            corporateCardCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductList: {...defaultValues.CorporateCardProductList},
            corporateCardCloseProductListFetching: false,
            corporateCardCloseProductListUpdating: false,
            corporateCardCloseProductListError: action.payload.error,
        }
    },
    // END CORPORATE_CARD PRODUCT LIST REDUCERS

    // START DEPOSIT PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetDepositCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductListFetching: true,
            depositCloseProductListUpdating: action.payload.value,
            depositCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDepositCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductList: action.payload.response.data,
            depositCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            depositCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            depositCloseProductListUpdating: state.depositCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            depositCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDepositCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductList: {...defaultValues.DepositProductList},
            depositCloseProductListFetching: false,
            depositCloseProductListUpdating: false,
            depositCloseProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetDepositActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductListError: null,
            depositActiveProductListFetching: true,
            depositActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDepositActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductList: action.payload.response.data,
            depositActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            depositActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            depositActiveProductListUpdating: state.depositActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            depositActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDepositActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductList: {...defaultValues.DepositProductList},
            depositActiveProductListFetching: false,
            depositActiveProductListUpdating: false,
            depositActiveProductListError: action.payload.error,
        }
    },
    // END DEPOSIT PRODUCT LIST REDUCERS

    // START ENCASHMENT_CONTRACT PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetEncashmentContractCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductListFetching: true,
            encashmentContractCloseProductListUpdating: action.payload.value,
            encashmentContractCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetEncashmentContractCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductList: action.payload.response.data,
            encashmentContractCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            encashmentContractCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            encashmentContractCloseProductListUpdating: state.encashmentContractCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            encashmentContractCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetEncashmentContractCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductList: {...defaultValues.EncashmentContractProductList},
            encashmentContractCloseProductListFetching: false,
            encashmentContractCloseProductListUpdating: false,
            encashmentContractCloseProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetEncashmentContractActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductListError: null,
            encashmentContractActiveProductListFetching: true,
            encashmentContractActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetEncashmentContractActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductList: action.payload.response.data,
            encashmentContractActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            encashmentContractActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            encashmentContractActiveProductListUpdating: state.encashmentContractActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            encashmentContractActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetEncashmentContractActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductList: {...defaultValues.EncashmentContractProductList},
            encashmentContractActiveProductListFetching: false,
            encashmentContractActiveProductListUpdating: false,
            encashmentContractActiveProductListError: action.payload.error,
        }
    },
    // END ENCASHMENT_CONTRACT PRODUCT LIST REDUCERS

    // START ACQUIRING PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetAcquringCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductListFetching: true,
            acquiringCloseProductListUpdating: action.payload.value,
            acquiringCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAcquringCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductList: action.payload.response.data,
            acquiringCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            acquiringCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            acquiringCloseProductListUpdating: state.acquiringCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            acquiringCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAcquringCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductList: {...defaultValues.AcquiringProductList},
            acquiringCloseProductListFetching: false,
            acquiringCloseProductListUpdating: false,
            acquiringCloseProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetAcquringActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductListError: null,
            acquiringActiveProductListFetching: true,
            acquiringActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAcquringActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductList: action.payload.response.data,
            acquiringActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            acquiringActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            acquiringActiveProductListUpdating: state.acquiringActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            acquiringActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAcquringActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductList: {...defaultValues.AcquiringProductList},
            acquiringActiveProductListFetching: false,
            acquiringActiveProductListUpdating: false,
            acquiringActiveProductListError: action.payload.error,
        }
    },
    // END ACQUIRING PRODUCT LIST REDUCERS

    // START DBO PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetDboCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductListFetching: true,
            dboCloseProductListUpdating: action.payload.value,
            dboCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDboCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductList: action.payload.response.data,
            dboCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            dboCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            dboCloseProductListUpdating: state.dboCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            dboCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDboCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductList: {...defaultValues.DboProductList},
            dboCloseProductListFetching: false,
            dboCloseProductListUpdating: false,
            dboCloseProductListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetDboActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductListError: null,
            dboActiveProductListFetching: true,
            dboActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDboActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductList: action.payload.response.data,
            dboActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            dboActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            dboActiveProductListUpdating: state.dboActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            dboActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDboActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductList: {...defaultValues.DboProductList},
            dboActiveProductListFetching: false,
            dboActiveProductListUpdating: false,
            dboActiveProductListError: action.payload.error,
        }
    },
    // END DBO PRODUCT LIST REDUCERS

    // START SALARY PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSalaryActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductListError: null,
            salaryActiveProductListFetching: true,
            salaryActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSalaryActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductList: action.payload.response.data,
            salaryActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            salaryActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            salaryActiveProductListUpdating: state.salaryActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            salaryActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSalaryActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductList: {...defaultValues.SalaryProductList},
            salaryActiveProductListFetching: false,
            salaryActiveProductListUpdating: false,
            salaryActiveProductListError: action.payload.error,
        }
    },
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetSalaryCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductListFetching: true,
            salaryCloseProductListUpdating: action.payload.value,
            salaryCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSalaryCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductList: action.payload.response.data,
            salaryCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            salaryCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            salaryCloseProductListUpdating: state.salaryCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            salaryCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSalaryCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductList: {...defaultValues.SalaryProductList},
            salaryCloseProductListFetching: false,
            salaryCloseProductListUpdating: false,
            salaryCloseProductListError: action.payload.error,
        }
    },
    // END SALARY PRODUCT LIST REDUCERS

    // START UDBO PRODUCT LIST REDUCERS
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetUdboActiveProductListRequest" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductListError: null,
            udboActiveProductListFetching: true,
            udboActiveProductListUpdating: action.payload.value,

        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetUdboActiveProductListSuccess". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductList: action.payload.response.data,
            udboActiveProductListCachedDate: action.payload.response.data.bhCachedDate,
            udboActiveProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            udboActiveProductListUpdating: state.udboActiveProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            udboActiveProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetUdboActiveProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductList: {...defaultValues.UdboProductList},
            udboActiveProductListFetching: false,
            udboActiveProductListUpdating: false,
            udboActiveProductListError: action.payload.error,
        }
    },
    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetUdboCloseProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductListFetching: true,
            udboCloseProductListUpdating: action.payload.value,
            udboCloseProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetUdboCloseProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductList: action.payload.response.data,
            udboCloseProductListCachedDate: action.payload.response.data.bhCachedDate,
            udboCloseProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            udboCloseProductListUpdating: state.udboCloseProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            udboCloseProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetUdboCloseProductListFailure". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductList: {...defaultValues.UdboProductList},
            udboCloseProductListFetching: false,
            udboCloseProductListUpdating: false,
            udboCloseProductListError: action.payload.error,
        }
    },
    // END UDBO PRODUCT LIST REDUCERS

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_PERFORM]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetLegalInfoProductList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_REQUEST>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductListFetching: true,
            legalInfoProductListUpdating: action.payload.value,
            legalInfoProductListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetLegalInfoProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductList: action.payload.response.data,
            legalInfoProductListCachedDate: action.payload.response.data.bhCachedDate,
            legalInfoProductListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            legalInfoProductListUpdating: state.legalInfoProductListUpdating &&
            util.isPollingStatusInProgress(action.payload.response.data.pollingStatus) ? true : false,
            legalInfoProductListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetLegalInfoProductList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductList: {...defaultValues.LegalInfoProductList},
            legalInfoProductListFetching: false,
            legalInfoProductListUpdating: false,
            legalInfoProductListError: action.payload.error,
        }
    },




    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCreditProductEksListActive" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductEksListFetching: true,
            creditActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCreditProductEksListActive". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductEksList: action.payload.response.data,
            creditActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            creditActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            creditActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCreditProductEksListActive". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditActiveProductEksListFetching: false,
            creditActiveProductEksListActiveError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCreditProductEksListCLOSE" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductEksListFetching: true,
            creditCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCreditProductEksListCLOSE". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductEksList: action.payload.response.data,
            creditCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            creditCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            creditCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCreditProductEksListCLOSE". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CREDIT_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            creditCloseProductEksListFetching: false,
            creditCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementActiveProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductEksListFetching: true,
            settlementAgreementActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductEksList: action.payload.response.data,
            settlementAgreementActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            settlementAgreementActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            settlementAgreementActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementActiveProductEksListFetching: false,
            settlementAgreementActiveProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSettlementAgreementCloseProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductEksListFetching: true,
            settlementAgreementCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSettlementAgreementCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductEksList: action.payload.response.data,
            settlementAgreementCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            settlementAgreementCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            settlementAgreementCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSettlementAgreementCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SETTLEMENT_AGREEMENT_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            settlementAgreementCloseProductEksListFetching: false,
            settlementAgreementCloseProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetDepositActiveProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductEksListFetching: true,
            depositActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDepositActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductEksList: action.payload.response.data,
            depositActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            depositActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            depositActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDepositActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositActiveProductEksListFetching: false,
            depositActiveProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetDepositCloseProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductEksListFetching: true,
            depositCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDepositCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductEksList: action.payload.response.data,
            depositCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            depositCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            depositCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDepositCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DEPOSIT_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            depositCloseProductEksListFetching: false,
            depositCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCorporateCardActiveProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductEksListFetching: true,
            corporateCardActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCorporateCardActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductEksList: action.payload.response.data,
            corporateCardActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            corporateCardActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            corporateCardActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCorporateCardActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardActiveProductEksListFetching: false,
            corporateCardActiveProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetCorporateCardCloseProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductEksListFetching: true,
            corporateCardCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCorporateCardCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductEksList: action.payload.response.data,
            corporateCardCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            corporateCardCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            corporateCardCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCorporateCardCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_CORPORATE_CARD_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            corporateCardCloseProductEksListFetching: false,
            corporateCardCloseProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetEncashmentContractActiveProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductEksListFetching: true,
            encashmentContractActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetEncashmentContractActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductEksList: action.payload.response.data,
            encashmentContractActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            encashmentContractActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            encashmentContractActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetEncashmentContractActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractActiveProductEksListFetching: false,
            encashmentContractActiveProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetEncashmentContractCloseProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductEksListFetching: true,
            encashmentContractCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetEncashmentContractCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductEksList: action.payload.response.data,
            encashmentContractCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            encashmentContractCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            encashmentContractCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetEncashmentContractCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ENCASHMENT_CONTRACT_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            encashmentContractCloseProductEksListFetching: false,
            encashmentContractCloseProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetLegalInfoProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductEksListFetching: true,
            legalInfoProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetLegalInfoProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductEksList: action.payload.response.data,
            legalInfoProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            legalInfoProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            legalInfoProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetLegalInfoProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            legalInfoProductEksListFetching: false,
            legalInfoProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetAcquiringActiveProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductEksListFetching: true,
            acquiringActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAcquiringActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductEksList: action.payload.response.data,
            acquiringActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            acquiringActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            acquiringActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAcquiringActiveProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringActiveProductEksListFetching: false,
            acquiringActiveProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetAcquiringCloseProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductEksListFetching: true,
            acquiringCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAcquiringCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductEksList: action.payload.response.data,
            acquiringCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            acquiringCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            acquiringCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAcquiringCloseProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_ACQUIRING_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            acquiringCloseProductEksListFetching: false,
            acquiringCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetDboProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductEksListFetching: true,
            dboActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductEksList: action.payload.response.data,
            dboActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            dboActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            dboActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboActiveProductEksListFetching: false,
            dboActiveProductEksListError: action.payload.error,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductEksListFetching: false,
            dboCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetDboProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductEksListFetching: true,
            dboCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetDboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductEksList: action.payload.response.data,
            dboCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            dboCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            dboCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetDboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_DBO_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            dboCloseProductEksListFetching: false,
            dboCloseProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetUdboProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductEksListFetching: true,
            udboActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetUdboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductEksList: action.payload.response.data,
            udboActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            udboActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            udboActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetUdboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboActiveProductEksListFetching: false,
            udboActiveProductEksListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetUdboProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductEksListFetching: true,
            udboCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetUdboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductEksList: action.payload.response.data,
            udboCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            udboCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            udboCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetUdboProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_UDBO_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            udboCloseProductEksListFetching: false,
            udboCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state
        }
    },
    // Action dispatched on network thunk chain "callGetSalaryProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductEksListFetching: true,
            salaryActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSalaryProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductEksList: action.payload.response.data,
            salaryActiveProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            salaryActiveProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            salaryActiveProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSalaryProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_ACTIVE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryActiveProductEksListFetching: false,
            salaryActiveProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSalaryProductEksList" started. Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST_REQUEST]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductEksListFetching: true,
            salaryCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSalaryProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST_SUCCESS]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST_SUCCESS>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductEksList: action.payload.response.data,
            salaryCloseProductEksListCachedDate: action.payload.response.data.bhCachedDate,
            salaryCloseProductEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus),
            salaryCloseProductEksListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSalaryProductEksList". Thunk dispatched by "Customer" screen. Fetch product list.
    [actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST_FAILURE]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.CALL_GET_SALARY_CLOSE_PRODUCT_EKS_LIST_FAILURE>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            salaryCloseProductEksListFetching: false,
            salaryCloseProductEksListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to include company to Customer.
    [actionsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityCreateMode: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to exclude company from Customer.
    [actionsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityCreateMode: true,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk chain used to close Gsz activity.
    [actionsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityCreateMode: false,
        }
    },

    // Thunk dispatched by "Customer" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomer.PERFORM_CONTAINER_RESET]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...ModelsCustomer.initialState.state,
        }
    },

    [actionsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityAccessMode: true
        }
    },

    [actionsCustomer.NAVIGATE_BACK_FROM_CUSTOMER_ACTIVITY_ACCESS_SCREEN]: (state: ModelsCustomer.ICustomerState): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityAccessMode: false
        }
    },
    // Thunk dispatched by "Customer" screen. Thunk used to delete the last element from customer navigation history.
    [actionsCustomer.NAVIGATION_HISTORY_POP]: (
        state: ModelsCustomer.ICustomerState,
        action: Action<actionsCustomer.NAVIGATION_HISTORY_POP>
    ): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            currentMode: action.payload.mode,
            customerNavigationHistory: util.doCustomerToHistoryAction(
                Enums.HistoryActions.Pop,
                state.currentCustomer,
                state.currentCustomerManaged,
                [...state.customerNavigationHistory],
                state.currentMode,
                state.currentTab,
                state.productListAgreementStatus,
                defaultValues.ForecastDeal,
                defaultValues.Deal,
            ),
        }
    },

    [actionsCustomer.PERFORM_SET_ACTIVITY_ACCESS_ERROR]: (state: ModelsCustomer.ICustomerState, action: Action<actionsCustomer.PERFORM_SET_ACTIVITY_ACCESS_ERROR>): ModelsCustomer.ICustomerState => {
        return {
            ...state,
            isActivityAccessError: action.payload.isActivityAccessError
        }
    },

}, ModelsCustomer.initialState.state)

export default reducerCustomer
