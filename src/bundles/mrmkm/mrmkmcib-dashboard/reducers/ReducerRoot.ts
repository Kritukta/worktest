/*
 * Created by Burnaev M.U.
 */

import {combineReducers} from 'redux'


import reducerAppDashboard from './ReducerAppDashboard'

import reducerCustomerDashboard from './ReducerCustomerDashboard'


const reducerRoot = combineReducers({


    reducerAppDashboard,

    reducerCustomerDashboard,


})

export default reducerRoot
