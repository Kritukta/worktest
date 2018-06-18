/**
 * Actions of ProductAcquiring container.
 *
 * @author Voropaev D.N.
 * @see
 */
import Action from "../models/Action";
export declare const NAVIGATE_TO_AGREEMENT_LIST_VIEW = "CONTAINER_PRODUCT_ACQUIRING_NAVIGATE_TO_AGREEMENT_LIST_VIEW";
export declare const NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING = "CONTAINER_PRODUCT_ACQUIRING_NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING";
/**
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate to agreement list view.
 */
export declare type NAVIGATE_TO_AGREEMENT_LIST_VIEW = {};
export declare const navigateToAgreementListView: () => Action<NAVIGATE_TO_AGREEMENT_LIST_VIEW>;
/**
 * Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate back to acquiring product view.
 */
export declare type NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING = {};
export declare const navigateBackToViewProductAcquiring: () => Action<NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING>;
