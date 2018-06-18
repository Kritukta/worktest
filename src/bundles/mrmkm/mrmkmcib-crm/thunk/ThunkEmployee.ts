/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {
    Models as ModelsApp,
    EnumsApp,
    performModalEmailShow,
    performAppOpen,
    performModalUserProfileHide,
    navigateToEmailScreen as navigateToEmailScreenModal
} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {EnumsScheduler, Models as ModelsScheduler, performPersonOpen, performReturnToActivityScreen} from "mrmkmcib-scheduler"
import {performEmployeeSelect as appDirectoryPerformEmployeeSelect} from "mrmkmcib-directory"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import * as Cache from '../modules/Cache'
import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsEmployee from '../actions/ActionsEmployee'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkGSZ from '../thunk/ThunkGSZ'

import {SplitPanelActions} from 'ufs-mobile-platform'

import * as thunkAppScheduler from '../../mrmkmcib-scheduler/thunk/ThunkAppScheduler'

import {OWAService} from 'mrmkmcib-ui'

import {defaultValues} from "../models/Models"
import {AlertIOS} from 'react-native'

/*
 * Thunk dispatched by "Employee" screen. Thunk used to send Email to employee address.
 */
export const performSendEmail = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee

    // FIXME проработать открытие модальника из поповера

    dispatch(thunkCustomer.performPopoverCuratorHide())
    dispatch(thunkCustomer.performPopoverHolderHide())
    dispatch(thunkCustomer.performPopoverLimitHide())
    dispatch(thunkCustomer.performPopoverNoteListHide())
    dispatch(thunkCustomer.performPopoverOccasionListHide())
    dispatch(thunkCustomer.performPopoverOwnerHide())
    dispatch(thunkCustomer.performPopoverProblemListHide())
    dispatch(thunkGSZ.performPopoverCuratorHide())
    dispatch(thunkGSZ.performPopoverChiefHide())
    dispatch(performModalUserProfileHide())

    dispatch(performModalEmailShow(
        {data: [util.employeeToPerson(reducerState.currentEmployee)]},
        '',
        '',
        false,
        false,
        '',
    ))

    dispatch(actionsEmployee.performSendEmail())
}

/*
 * Thunk dispatched by "Employee" screen. Thunk used to show employee scheduler.
 */
export const performSchedulerOpen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee

    OWAService.checkCertificate()
        .then((isCertificateImported: boolean) => {
            if (!isCertificateImported) {
                dispatch(thunkEmployee.setEmployeeShedulerAvailabilityFalse())
            }
            return isCertificateImported
        })
        .catch((error: Error) => {
            dispatch(thunkEmployee.setEmployeeShedulerAvailabilityFalse())
            return false
        })

        // Если сертификат импортирован, открываем календарь сотрудника
        .then((isCertificateImported: boolean) => {
            if (!isCertificateImported) return

            if (reducerState.isExtendedMode &&
                reducerState.currentEmployee &&
                reducerState.currentEmployee.id != '' &&
                reducerState.currentEmployee.id != null) {

                dispatch(thunkEmployee.performFindPeople())

            } else {
                dispatch(thunkAppScheduler.performSchedulerOpen(
                    null,
                    {
                        ...defaultValues.Agent,
                        id: state.user.mrmkmcibCRM.reducerAgent.currentAgent.id,
                        firstName: null,
                        lastName: null,
                        middleName: null,
                        fullName: null,
                        email: null,
                        modId: null,
                        gender: Enums.GenderList.None,
                        birthday: null,
                        isPrincipal: false,
                        isBlocked: false,
                        phoneList: {data: []},
                        customerPositionList: {data: []},
                        comment: '',
                        memberList: {data: []},
                        occasionList: {data: []},
                        noteList: {data: []},
                    }, null,
                    null,
                    EnumsScheduler.SchedulerMode.Employee
                ))

                dispatch(actionsEmployee.performSchedulerOpen())
            }
        })
}

/*
 * Internal thunk used in "Employee" container. Thunk chain used to show popover.
 */
export const performPopoverPersonListShow = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performPopoverPersonListShow())


}

/*
 * Переход из моего профиля в адресную книгу
 */
export const performNavigateToAddressBookEmployee = (employeeId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(performModalUserProfileHide())

    dispatch(performAppOpen(EnumsApp.App.Directory))

    dispatch(thunkEmployee.navigateToEmployeeScreen(employeeId, true, Enums.EmployeeMode.Directory, Enums.EmployeeHistoryActions.Reset))

    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerEmployee
    dispatch(appDirectoryPerformEmployeeSelect(reducerState.currentEmployee))

}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 */
export const performPopoverPersonListHide = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performPopoverPersonListHide())


}

/*
 * Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 */
export const performFindPeople = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee

    if (reducerState.foundPeopleListInProgress) {
        return
    }

    dispatch(actionsEmployee.performFindPeople())

    if (!reducerState.foundPeopleListInProgress) {
        dispatch(actionsEmployee.performFindPeopleExecute())

        OWAService.findPeople(util.getFullNameOWARepresentation(reducerState.currentEmployee))
        .then((data: OWAService.FindPeopleResponse)=>{
            dispatch(thunkEmployee.performFindPeopleSuccess(Converters.CONTAINER_EMPLOYEE_FIND_PEOPLE_RESPONSE_TO_PERSON_LIST(data)))
        })
        .catch((error)=>{
            dispatch(thunkEmployee.performFindPeopleFailure({
                message:error.text,
                code: error.code+'',
                type:EnumsScheduler.OWAError,
                comment:error.text
            }))
        })
    }
}

export const performFlush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    Cache.sessionResetTag({tag: util.getEmployeeRequestRefreshString(Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled)})
    dispatch(actionsEmployee.performFlush())
    dispatch(thunkEmployee.performRefresh())
}

export const performPersonSelect = (person: ModelsScheduler.Person) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee
    dispatch(actionsEmployee.performPersonSelect(person))
    dispatch(thunkEmployee.performPopoverPersonListHide())
    setTimeout(()=> {
        dispatch(performAppOpen(EnumsApp.App.Scheduler))

        dispatch(thunkAppScheduler.performSchedulerOpen(null, {
                ...defaultValues.Agent,
                id: reducerState.currentEmployee.id,
                firstName: reducerState.currentEmployee.firstName,
                lastName: reducerState.currentEmployee.lastName,
                middleName: reducerState.currentEmployee.middleName,
                fullName: reducerState.currentEmployee.fullName,
                email: person.email,
                modId: null,
                gender: Enums.GenderList.None,
                birthday: null,
                isPrincipal: false,
                isBlocked: false,
                phoneList: {data: []},
                customerPositionList: {data: []},
                comment: '',
                memberList: {data: []},
                occasionList: {data: []},
                noteList: {data: []},
            }
            , null, reducerState.currentEmployee, EnumsScheduler.SchedulerMode.Employee))
    },100)
}

export const performFindPeopleSuccess = (data: ModelsScheduler.PersonList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee

    dispatch(actionsEmployee.performFindPeopleSuccess(data))


    // Dispatch thunk "performPopoverPersonListShow" on success.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerEmployee
    if (reducerState.foundPeopleList.data.length > 1) {
        dispatch(thunkEmployee.performPopoverPersonListShow())
    } else if (reducerState.foundPeopleList.data.length == 1) {
        let email = reducerState.foundPeopleList.data[0].email
        dispatch(performPersonSelect({...ModelState.defaultValues.Person, email: email}))
        dispatch(actionsEmployee.performSchedulerOpen())
    } else {
        AlertIOS.alert('Планировщик', 'Календарь сотрудника не найден!')
    }
}

export const performFindPeopleFailure = (error: Error) => (dispatch: Function): void => {

    dispatch(actionsEmployee.performFindPeopleFailure(error))

    AlertIOS.alert('Планировщик', 'Календарь сотрудника не найден!')
}

/*
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee.
 */
export const navigateToEmployeeScreen = (
    employeeId: string,
    isExtendedMode: boolean,
    mode: Enums.EmployeeMode,
    historyAction: Enums.EmployeeHistoryActions = Enums.EmployeeHistoryActions.Push
) => (dispatch: Function): void => {
    dispatch(actionsEmployee.navigateToEmployeeScreen(employeeId, isExtendedMode, mode, historyAction))

    // Dispatch thunk "performRefresh" synchronously.
    dispatch(thunkEmployee.performRefresh())
}

/*
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee customer list scnreen.
 */
export const navigateToCustomerListScreen = () => (dispatch: Function): void => {


    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentEmployee.AppCRM_CustomerList, util.getNavigationContentEmployee(Enums.NavigationContentEmployee.AppCRM_Employee)))


    dispatch(actionsEmployee.navigateToCustomerListScreen())


}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 */
export const performRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee


    if (reducerState.refreshInProgress) {
        return
    }


    dispatch(actionsEmployee.performRefresh())


    if (!reducerState.refreshInProgress) {
        dispatch(actionsEmployee.performRefreshExecute())


        // Dispatch thunk "refresh_callGetEmployee" synchronously.


        dispatch(thunkEmployee.refresh_callGetEmployee())


        // Dispatch thunk "callGetCustomerList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerEmployee

        if (reducerState.isExtendedMode == true) {
            dispatch(thunkEmployee.callGetCustomerList())
        }

        // Dispatch thunk "callGetSubordinateList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerEmployee

        if (reducerState.isExtendedMode == true) {
            dispatch(thunkEmployee.callGetSubordinateList())
        }


        /* TODO Perform JS Promise and handle success and failure or dispatch performRefreshSuccess and performRefreshFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkEmployee.performRefreshSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkEmployee.performRefreshFailure(null)) */


    }


}

export const performRefreshSuccess = (data: boolean) => (dispatch: Function): void => {
    dispatch(actionsEmployee.performRefreshSuccess(data))
}

export const performRefreshFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsEmployee.performRefreshFailure(error))
}

/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 */
export const callGetEmployeeHead = (head: ModelsApp.Employee) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerEmployee
    dispatch(actionsEmployee.callGetEmployeeHead())
    if (!reducerState.currentEmployeeHeadFetching) {
        dispatch(actionsEmployee.callGetEmployeeHeadRequest())
        const operationId = reducerState.currentEmployeeId
        util.call<ModelsApp.Employee, void>(
            util.urlEmployee.callGetEmployeeHead(state, head, [{tag: Enums.CachePolicy.Default}, {tag: util.getEmployeeRequestRefreshString(Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled)}]),
            (response: Response<ModelsApp.Employee>) => {
                const currentOperationId = state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeId
                if (currentOperationId === operationId) {
                    dispatch(actionsEmployee.callGetEmployeeHeadSuccess(response))
                }
            },
            (error: Error) => {
                const currentOperationId = state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeId
                if (currentOperationId === operationId) {
                    dispatch(actionsEmployee.callGetEmployeeHeadFailure(error))
                }
            },
            Converters.RESPONSE_EMPLOYEE_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE,
            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 */
export const refresh_callGetEmployee = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()

    dispatch(thunkAppCRM.swapContext (
        state.user.mrmkmcibApp.reducerAuthorization.currentUser,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.classifierDictionary,
        state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appBuildVersion,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerUrl,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerPath,
    )) // для прокидывания урлов из cib-app в cib-crm

    let reducerState = state.user.mrmkmcibCRM.reducerEmployee


    if (reducerState.currentEmployeeFetching) {
        return
    }
    let operationId = reducerState.currentEmployeeId


    dispatch(actionsEmployee.refresh_callGetEmployee())


    if (!reducerState.currentEmployeeFetching) {
        dispatch(actionsEmployee.refresh_callGetEmployeeRequest())

        util.call<ModelsApp.Employee, void>(
            util.urlEmployee.refresh_callGetEmployee(getState(), reducerState, [{tag: Enums.CachePolicy.Default},{tag: util.getEmployeeRequestRefreshString(Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled)}]),

            (response: Response<ModelsApp.Employee>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.refresh_callGetEmployeeSuccess(response))

                const employeeHead = response.data.head
                if (employeeHead) {
                    dispatch(thunkEmployee.callGetEmployeeHead(employeeHead))
                }


                // Dispatch thunk "performRefreshSuccess" on fetch succeeded.
                dispatch(thunkEmployee.performRefreshSuccess(true))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.refresh_callGetEmployeeFailure(error))


                // Dispatch thunk "performRefreshFailure" on fetch failure.


                dispatch(thunkEmployee.performRefreshFailure(error))


            },

            Converters.RESPONSE_EMPLOYEE_REFRESH_CALL_GET_EMPLOYEE_TO_EMPLOYEE,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 */
export const callGetCustomerList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee


    if (reducerState.customerListFetching) {
        return
    }
    let operationId = reducerState.currentEmployeeId


    dispatch(actionsEmployee.callGetCustomerList())


    if (!reducerState.customerListFetching) {
        dispatch(actionsEmployee.callGetCustomerListRequest())

        util.call<Models.CustomerList, void>(
            util.urlEmployee.callGetCustomerList(state, reducerState, [{tag: Enums.CachePolicy.Default},{tag: util.getEmployeeRequestRefreshString(Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled)}]),

            (response: Response<Models.CustomerList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.callGetCustomerListSuccess(response))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.callGetCustomerListFailure(error))
            },

            Converters.RESPONSE_EMPLOYEE_CALL_GET_CUSTOMER_LIST_TO_CUSTOMER_LIST,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 */
export const callGetSubordinateList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee


    if (reducerState.subordinateListFetching) {
        return
    }
    let operationId = reducerState.currentEmployeeId


    dispatch(actionsEmployee.callGetSubordinateList())


    if (!reducerState.subordinateListFetching) {
        dispatch(actionsEmployee.callGetSubordinateListRequest())

        util.call<Models.MemberList, void>(
            util.urlEmployee.callGetSubordinateList(state, reducerState, [{tag: Enums.CachePolicy.Default},{tag: util.getEmployeeRequestRefreshString(Enums.EmployeeRequestRefresh.EmployeeRequestRefreshEnabled)}]),

            (response: Response<Models.MemberList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.callGetSubordinateListSuccess(response))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerEmployee
                if (reducerState.currentEmployeeId != operationId) return

                dispatch(actionsEmployee.callGetSubordinateListFailure(error))
            },

            Converters.RESPONSE_EMPLOYEE_CALL_GET_SUBORDINATE_LIST_TO_MEMBER_LIST,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Employee" screen.
 */
export const navigateBack = () => (dispatch: Function): void => {

    dispatch(SplitPanelActions.popContent(util.getNavigationContentEmployee(Enums.NavigationContentEmployee.AppCRM_Employee)))

    dispatch(actionsEmployee.navigateBack())
}


/*
 * Thunk dispatched by "Employee" screen.
 */
export const navigateBackEmployee = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee

    let lastEmployee: ModelsApp.Employee|undefined = reducerState.employeeNavigationHistory[reducerState.employeeNavigationHistory.length - 1]

    if (lastEmployee) {
        dispatch(actionsEmployee.navigateToEmployeeScreen(lastEmployee.id, true, reducerState.currentMode, Enums.EmployeeHistoryActions.Pop))
        dispatch(thunkEmployee.performRefresh())
    }

    dispatch(actionsEmployee.navigateBackEmployee())
}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to show popover.
 */
export const performPopoverSubordinateShow = (subordinate: ModelsApp.Employee) => (dispatch: Function): void => {


    dispatch(actionsEmployee.performPopoverSubordinateShow(subordinate))


}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 */
export const performPopoverSubordinateHide = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performPopoverSubordinateHide())


}

/*
 * Thunk dispatched by "Employee" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performContainerReset())


}

export const navigateEmployeeScreenBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerEmployee
    dispatch(actionsEmployee.navigateEmployeeScreenBack())
    switch(reducerState.currentMode) {
        case Enums.EmployeeMode.DealEditor_MemberList: {
            dispatch(thunkDealEditor.navigateBack())
            dispatch(thunkEmployee.navigateBack())
            break;
        }
        case Enums.EmployeeMode.Deal: {
            dispatch(thunkDeal.navigateBack())
            break;
        }
        case Enums.EmployeeMode.DealStages_CheckMainRoles: {
            dispatch (SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_MemberList)))
            break;
        }
        case Enums.EmployeeMode.Deal_MemberList: {
            dispatch(thunkDeal.navigateDealBack())
            dispatch(thunkEmployee.navigateBack())
            break;
        }
        case Enums.EmployeeMode.AgentMemberList: {
            dispatch(thunkAgent.navigateBack())
            break;
        }
        case Enums.EmployeeMode.Activity: {
            dispatch(performReturnToActivityScreen())
            break;
        }
        case Enums.EmployeeMode.Activity_MemberList: {
            dispatch(thunkMemberList.navigateBack())
            break;
        }
        case Enums.EmployeeMode.CustomerManaged_MemberList: {
            dispatch(thunkMemberList.navigateBack())
            dispatch(thunkEmployee.navigateBack())
            break;
        }
        case Enums.EmployeeMode.CustomerManaged: {
            dispatch(thunkCustomer.navigateBack())
            dispatch(thunkEmployee.navigateBack())
            break;
        }

        case Enums.EmployeeMode.Customer: {
            dispatch(thunkCustomer.navigateBack())
            dispatch(thunkEmployee.navigateBack())
            break;
        }

        case Enums.EmployeeMode.Employee: {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerEmployee
            let mode = state.selectedIndex === 4 ?
                Enums.EmployeeMode.Directory :
                state.user.mrmkmcibScheduler.reducerActivity.activityPanelCurrentPage === EnumsScheduler.ActivityPanelPage.MemberList ?
                    Enums.EmployeeMode.Activity_MemberList :
                    Enums.EmployeeMode.Activity

            if (state.selectedIndex === 1) {
                mode = Enums.EmployeeMode.Customer
            }
            // Переключение currentMode в зависимоcти от истории
            if (reducerState.employeeNavigationHistory.length === 1) {
                dispatch(thunkEmployee.navigateToEmployeeScreen(
                    reducerState.employeeNavigationHistory[0].id,
                    true,
                    mode,
                    Enums.EmployeeHistoryActions.Pop
                ));
                dispatch(thunkEmployee.navigateBack())
            } else {
                dispatch(thunkEmployee.navigateBackEmployee())
            }
            break;
        }

        case Enums.EmployeeMode.Directory: {
            dispatch(thunkEmployee.navigateBackEmployee())
            break;
        }

        default: {
            dispatch(thunkEmployee.navigateBack())
            break;
        }
    }
}

/*
 * Thunk dispatched by "Employee popover" screen.
 */
export const navigatePopoverBack = () => (dispatch: Function): void => {


    dispatch(SplitPanelActions.popContent(util.getNavigationPopoverContentEmployee(Enums.NavigationPopoverContentEmployee.EmployeePopoverScreen)))


    dispatch(actionsEmployee.navigatePopoverBack())

}

/*
 * Thunk dispatched by "Employee popover" screen. Thunk used to open Employee customer list scnreen.
 */
export const navigateToPersonContainerPopover = (person: ModelsScheduler.Person) => (dispatch: Function): void => {


    dispatch(SplitPanelActions.pushContent(Enums.NavigationPopoverContentEmployee.EmployeePopoverScreenView, util.getNavigationPopoverContentEmployee(Enums.NavigationPopoverContentEmployee.EmployeePopoverScreen)))


    dispatch(actionsEmployee.navigateToPersonContainerPopover())
    dispatch(performPersonOpen(person))

}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to show error modal.
 */
export const performErrorModalShow = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performErrorModalShow())


}

/*
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide error modal.
 */
export const performErrorModalHide = () => (dispatch: Function): void => {


    dispatch(actionsEmployee.performErrorModalHide())


}


export const setEmployeeShedulerAvailabilityFalse = () => (dispatch: Function): void => {

    dispatch(actionsEmployee.setEmployeeShedulerAvailabilityFalse())
    dispatch(thunkEmployee.performErrorModalShow())
}

/*
 * Thunk dispatched by "Employee" screen. Thunk dispatched to navigate to "Email" screen.
 */
export const navigateToEmailScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    // Проверка почтового сертификата
    dispatch(actionsEmployee.performCheckCertificate())
    OWAService.checkCertificate()
        .then((isCertificateImported: boolean) => {
            if (isCertificateImported) {
                dispatch(actionsEmployee.performCheckCertificateSuccess())
            } else {
                dispatch(actionsEmployee.performCheckCertificateFailed())
                dispatch(thunkEmployee.performCertificateAlertPopoverShow())
            }
            return isCertificateImported
        })
        .catch((error: Error) => {
            dispatch(actionsEmployee.performCheckCertificateFailed())
            dispatch(thunkEmployee.performCertificateAlertPopoverShow())
            return false
        })

        // Если сертификат импортирован, открываем нужный EmailScreen (страницу/модальник/view)
        .then((isCertificateImported: boolean) => {
            if (!isCertificateImported) return

            // Если открываем в модальном окне профиля,
            // переходим на страницу Email в SplitPanel,
            // иначе открываем модальник с Email
            const state = getState()
            const reducerEmployee = state.user.mrmkmcibCRM.reducerEmployee
            const reducerProfile = state.user.mrmkmcibApp.reducerProfile
            if (state.user.mrmkmcibApp.reducerProfile.isVisibleModalUserProfile) {
                dispatch(performModalEmailShow(
                    {data: [util.employeeToPerson(reducerEmployee.currentEmployee)]},
                    '',
                    '',
                    false,
                    false,
                    '',
                ))
                dispatch(navigateToEmailScreenModal())
            } else {
                dispatch(actionsEmployee.navigateToEmailScreen())
                dispatch(thunkEmployee.performSendEmail())
            }
        })
}

export const performCancelRefreshError = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsEmployee.performCancelRefreshError())
}
export const performCancelSubordinateListError = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsEmployee.performCancelSubordinateListError())
}
export const performCancelCustomerListError = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsEmployee.performCancelCustomerListError())
}

export const performCertificateAlertPopoverHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsEmployee.performCertificateAlertPopoverHide())
}

export const performCertificateAlertPopoverShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsEmployee.performCertificateAlertPopoverShow())
}
