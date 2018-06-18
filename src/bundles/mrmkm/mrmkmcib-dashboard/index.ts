import ContainerAppDashboard from './containers/ContainerAppDashboard'

import ContainerCustomerDashboard from './containers/ContainerCustomerDashboard'

import ReducerRoot from './reducers/ReducerRoot'

import ShareDataView from './components/AppDashboard/ShareDataView'
import * as thunkCustomerDashboard from './thunk/ThunkCustomerDashboard'
import * as ModelsCustomerDashboard from './models/ModelsCustomerDashboard'
import {Enums} from './Enums'
import {sessionReset} from './modules/Cache'

import {
    setCurrentCustomerDashboardQlikUrl,
    setTrimmedTop,
    performContainerReset as performContainerCustomerDashboardReset,
} from './thunk/ThunkCustomerDashboard'

import {
    setCurrentAppDashboardQlikUrl,
    performContainerReset as performContainerAppDashboardReset,
} from './thunk/ThunkAppDashboard'

const EnumsDashboard = {
    QlikEventType: Enums.QlikEventType,
    CacheContext: Enums.CacheContext,
    CachePolicy: Enums.CachePolicy,
    ErrorType: Enums.ErrorType,
}


export {
    ContainerAppDashboard,
    ContainerCustomerDashboard,
    ReducerRoot,
    ShareDataView,
    thunkCustomerDashboard,
    ModelsCustomerDashboard,
    EnumsDashboard,
    setCurrentCustomerDashboardQlikUrl,
    setCurrentAppDashboardQlikUrl,
    performContainerAppDashboardReset,
    performContainerCustomerDashboardReset,
    setTrimmedTop,
    sessionReset
}
