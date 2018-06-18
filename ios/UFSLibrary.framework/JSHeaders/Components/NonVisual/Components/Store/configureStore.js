import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../../JSCore/Reducers';
import { setStore } from '../Workflow/Bridge/UFSWorkflow';
export function configureStore(userReducer, userMiddleware) {
    let castGlobal = global;
    //Add devtools compose enhancers
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(thunk, ...userMiddleware));
    var libReducers = {
        splitPanels: reducers.SplitPanelReducer,
        selectedIndex: reducers.RootReducer,
        workflow: reducers.WorkflowReducer
    };
    if (userReducer !== 'undefined') {
        libReducers = Object.assign({}, libReducers, {
            user: userReducer
        });
    }
    const appReducer = combineReducers(libReducers);
    const store = createStore(appReducer, undefined, enhancer);
    setStore(store);
    return store;
}
;
//# sourceMappingURL=configureStore.js.map