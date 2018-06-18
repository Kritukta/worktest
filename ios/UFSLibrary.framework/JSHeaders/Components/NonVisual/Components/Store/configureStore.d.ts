import { Store } from 'redux';
import { Reducer } from 'redux-actions';
export declare function configureStore(userReducer: Reducer<any, any>, userMiddleware: any): Store<any>;
