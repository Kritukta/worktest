import { Enums } from '../Enums';
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as Utils from '../common/Util';
import * as actionsProductAcquiring from '../actions/ActionsProductAcquiring';
/*
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate to agreement list view.
 */
export const navigateToAgreementListView = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductAcquiring.AppCRM_AcquiringAgreementList, Utils.getNavigationProductAcquiringIdString(Enums.NavigationProductAcquiring.AppCRM_Acquiring)));
    dispatch(actionsProductAcquiring.navigateToAgreementListView());
};
/*
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate back to acquiring product view.
 */
export const navigateBackToViewProductAcquiring = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount;
    dispatch(SplitPanelActions.popContent(Utils.getNavigationProductAcquiringIdString(Enums.NavigationProductAcquiring.AppCRM_Acquiring)));
    dispatch(actionsProductAcquiring.navigateBackToViewProductAcquiring());
};
//# sourceMappingURL=ThunkProductAcquiring.js.map