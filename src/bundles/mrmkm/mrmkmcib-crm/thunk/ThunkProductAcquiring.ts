/*
 * Created by Voropaev D.N.
 */
import * as ModelState from "../models/Models"
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models } from "mrmkmcib-crm"
import { Enums } from '../Enums'
import { SplitPanelActions } from 'ufs-mobile-platform'

import Error from "../models/Error"

import * as Utils from '../common/Util'
import * as Converters from "../models/Converters"

import * as actionsProductAcquiring from '../actions/ActionsProductAcquiring'
import * as thunkProductAcquiring from '../thunk/ThunkProductAcquiring'

/*
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate to agreement list view.
 */
export const navigateToAgreementListView = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
    
    dispatch (SplitPanelActions.pushContent (
        Enums.NavigationContentProductAcquiring.AppCRM_AcquiringAgreementList,
        Utils.getNavigationProductAcquiringIdString (
            Enums.NavigationProductAcquiring.AppCRM_Acquiring
        )
    ))
        
    dispatch (actionsProductAcquiring.navigateToAgreementListView ())
} 

/*
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate back to acquiring product view.
 */
export const navigateBackToViewProductAcquiring = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
    
    dispatch (SplitPanelActions.popContent (Utils.getNavigationProductAcquiringIdString (
        Enums.NavigationProductAcquiring.AppCRM_Acquiring
    )))
        
    dispatch (actionsProductAcquiring.navigateBackToViewProductAcquiring ())
} 