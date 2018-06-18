
import {
    Models as ModelsApp,
} from "mrmkmcib-app"

import {Models} from "mrmkmcib-crm"
import * as actionsDeal from '../actions/ActionsDeal'
import * as thunkDeal from '../thunk/ThunkDeal'
import {SplitPanelActions} from 'ufs-mobile-platform'

import moment from 'moment'
import * as ModelState from "../models/Models"
import * as ModelsDealStages from '../models/ModelsDealStages'
import {Models as ModelsCrm} from "mrmkmcib-crm"
import * as actionsDealStages from '../actions/ActionDealStages'
import * as thunkDealStages from '../thunk/ThunkDealStages'
import Error from "../models/Error"
import * as util from "../common/Util"
import * as Converters from "../models/Converters"
import {Enums} from "../Enums"
import Response from "../models/Response"

import {defaultValues} from '../models/Models'
import * as thunkClassifier from "./ThunkSelectClassifierWithSearch"
import * as thunkMemberList from './ThunkMemberList'

const fillDealComment = (crmStages: Array<Models.DealStage>) => crmStages.reverse().reduce( (acc,stage)=> acc+ stage.comment + '\n\n', '')

const fillDealTermFact = (crmStages: Array<Models.DealStage>) => crmStages.reduce( (acc: number, value: Models.DealStage) => acc+value.durationFact, 0)

const fillDealTermEstimate = (crmStages: Array<Models.DealStage>) => crmStages.reduce( (acc: number, value: Models.DealStage) => acc+value.durationEstimate, 0)

const fillClientStageCurrent = (crmStages: Array<Models.DealStage>) => crmStages.reduce( (acc: boolean, value: Models.DealStage) => acc && value.isCurrent, false)

const TrackingSorterByDates = (a:Models.Tracking, b:Models.Tracking):number => {
    if (b.plannedFinishDate && a.plannedFinishDate && moment(b.plannedFinishDate).isSame(moment(a.plannedFinishDate))) {
        return 0
    }
    if (b.plannedFinishDate && a.plannedFinishDate && moment(b.plannedFinishDate).isAfter(moment(a.plannedFinishDate))) {
        return -1
    }
    return 1
}

const findNext =(value: ModelsCrm.HistoryStage, array: Array<ModelsCrm.HistoryStage>): ModelsCrm.HistoryStage | null => {
    if ( value.newValueClassifier && value.newValueClassifier.value) {

        return array.find ( ( stage: ModelsCrm.HistoryStage ) => {
            const prevValue = stage.previousValueClassifier && stage.previousValueClassifier.value
            return (value.newValueClassifier && prevValue === value.newValueClassifier.value) || false
        }) || null
    }
    return null
}

const sortLinkedList = <T>(array: Array<ModelsCrm.HistoryStage> ): Array<ModelsCrm.HistoryStage> => {

    const result: Array<ModelsCrm.HistoryStage> = []

    const first: ModelsCrm.HistoryStage = array.find ( ( stage: ModelsCrm.HistoryStage ) => !stage.previousValueClassifier ||
        !stage.previousValueClassifier.value ) || array[array.length-1]

    for(let next:ModelsCrm.HistoryStage | null = first; next; next = findNext( next, array )) {
        result.push(next)
    }
    return result
}

const OrderSorter = (a:Models.Tracking, b:Models.Tracking):number => {
    if (b.order && a.order && b.order === a.order) {
        return 0
    }
    if (b.order && a.order && b.order > a.order) {
        return -1
    }
    return 1
}

const indexOfHistory = ( history: Array<ModelsCrm.HistoryStage>, tracking:Models.Tracking ) => history.findIndex(
    (historyStage: ModelsCrm.HistoryStage) => (historyStage.newValueClassifier && historyStage.newValueClassifier.value === tracking.crmStage) || false)


const HistorySorter = (history: Array<ModelsCrm.HistoryStage>) => (a:Models.Tracking, b:Models.Tracking):number => {

    const aOrder: number = indexOfHistory(history,  a)
    const bOrder: number = indexOfHistory(history,  b)

    if (bOrder === aOrder) {
        return 0
    }
    if (bOrder > aOrder) {
        return -1
    }
    return 1
}

interface PartialStage {
    stage:ModelsApp.Classifier,
    isCurrent: boolean,
    crmStages: Array<Models.DealStage>
}

interface CrmHistoryStage extends Models.DealStage {
    history: Models.HistoryStage | null
}

export const remapDealStages = (history: ModelsCrm.HistoryStage[], trackingList: ModelsCrm.Tracking[],
                                currentPhaseClassifier: ModelsApp.Classifier) => {



    let prevTracking: Models.Tracking  = defaultValues.Tracking
    let prevCrmStage: CrmHistoryStage  = { ...defaultValues.dealStage, history: null}

    const crmStages: Array<CrmHistoryStage> = trackingList
        .sort( OrderSorter )
        // .sort( HistorySorter(historySorted))
        .map((element: Models.Tracking) => {

            const historyStage = history.find ( ( stage: Models.HistoryStage ) => (
                element.crmStage === (stage.newValueClassifier && stage.newValueClassifier.value)) )

            return {
                isCurrent: element.crmStage === currentPhaseClassifier.value,
                history: historyStage || null,
                stage: { value: element.crmStage, code: element.crmStageId, parentId: '', name: ''},
                isDisabled: false,
                durationEstimate: 0,
                durationFact: 0,
                start: null,
                end: null,
                order: element.order || 0,
            }
        })
        .map( (crmStage: CrmHistoryStage, index: number) => {

            const historyStage = crmStage.history

            const fullName = (historyStage && historyStage.changedByFIO) ? util.parseFullName (historyStage.changedByFIO ) || defaultValues.Agent : defaultValues.Agent
            const author = {...defaultValues.Employee,
                lastName: fullName.lastName || '',
                firstName: fullName.firstName  || '',
                middleName: fullName.middleName  || ''}

            if (prevCrmStage.end) {
                prevCrmStage.end.author = author
            }

            const startDate: Date | null = historyStage && historyStage.startDate ? historyStage.startDate :
                ((prevCrmStage.end && prevCrmStage.end.date) || prevTracking.plannedFinishDate || new Date())

            if (!prevCrmStage.end) {
                prevCrmStage.end = {date: startDate, author : author}
            }
            prevTracking = trackingList.find( (prevTrackElement: Models.Tracking ) => prevTrackElement.crmStage === crmStage.stage.value) || defaultValues.Tracking

            prevCrmStage = {
                ...crmStage,
                comment: prevTracking.comment,
                start: {date: startDate, author : author},
            }

            // срок - 1) факт из хистори, 2) если текущая стадия - durationNorm, 3) вычисляем для буд. стадий.
            if (historyStage) {
                if (historyStage.endDate) {
                    prevCrmStage.end = {date: historyStage.endDate, author: null}
                    if (prevCrmStage.start) {
                        prevCrmStage.durationEstimate = moment ( prevCrmStage.end.date ||
                            prevTracking.plannedFinishDate || new Date () ).diff ( prevCrmStage.start.date, 'days' )
                    }
                }

                prevCrmStage.durationFact = prevCrmStage.isCurrent ? +historyStage.durationNorm : +historyStage.actualDuration
            }


            return prevCrmStage
        })

    let prevClientStage: PartialStage | undefined
    let prevStage: Models.DealStage | undefined

    // трэкинг стадии клиента по history
    // const historySorted: Array<ModelsCrm.HistoryStage> = sortLinkedList(history)
    // const historyLast = historySorted[historySorted.length-1]

    // Client Stages are unique
    const stageList = crmStages.reduce( (accumulator: Array<PartialStage>,
                                         crmStage: Models.DealStage ) => {

        const trackingCrm = trackingList.find( (tracking: Models.Tracking) => tracking.crmStage === crmStage.stage.value) || {clientStage:''}

        prevClientStage = accumulator.find((clientStage: PartialStage) => trackingCrm.clientStage === clientStage.stage.value)


        if ( prevClientStage && prevClientStage.crmStages ) {
            prevClientStage.crmStages.push(crmStage)
        } else {
            prevClientStage = {
                isCurrent:false,
                stage: { value: trackingCrm.clientStage, code: '', parentId: '', name: ''},
                crmStages: [crmStage],
            }
            accumulator.push(prevClientStage)
        }

        if (crmStage.isCurrent) {
            prevClientStage.isCurrent = true
        }

        return accumulator
    }, [])
    .map( (stagePart: PartialStage, index: number) => {

        // const startDate: Date = prevStage && prevStage.end && prevStage.end.date || new Date()

        const stages = stagePart.crmStages || []

        prevStage = {
            ...stagePart,
            start: stages && stages[0] && stages[0].start,
            end: stages && stages[stages.length-1] && stages[stages.length-1].end,
            durationEstimate: fillDealTermEstimate(stages),
            durationFact: fillDealTermFact(stages),
            comment: fillDealComment(stages),
            order: index,
        }
        return prevStage
    })

    return stageList
}


export const setAccessStagesFlag = (enabled: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch ( actionsDealStages.setAccessStagesFlag ( enabled ) )
}

export const navigateToDealStages = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    const currentUser = state.user.mrmkmcibApp.reducerAuthorization.currentUser
    const classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary
    dispatch(thunkDealStages.setAccessStagesFlag(util.isInitRoadMapNecessary(state.user.mrmkmcibCRM.reducerDeal)))
    state = getState()
    dispatch(thunkDealStages.performReceivingInputParameters())

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_StageDetails,
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)))

    dispatch(thunkDealStages.prepareStageClassifierList())
    dispatch(thunkDealStages.prepareStageInputData())

    dispatch(actionsDealStages.navigateToDealStages(currentUser, classifierDictionary))

    const reducerDealStages = state.user.mrmkmcibCRM.reducerDealStages
    const stages = remapDealStages(
        reducerDealStages.dealHistoryStageList.data,
        reducerDealStages.dealStageTracking.data,
        reducerDealStages.currentDeal.phaseClassifier)

    dispatch(actionsDealStages.performRefreshStagesSuccess(stages))
    dispatch(actionsDeal.performRefreshStagesSuccess(stages))
}

export const prepareStageInputData = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.prepareStageInputData())
}

export const prepareStageClassifierList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerDeal = state.user.mrmkmcibCRM.reducerDealStages
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary
    dispatch(actionsDealStages.prepareStageClassifierList(util.getAccessibleStageList(reducerDeal.currentDeal.salesMethodClassifier, classifierDictionary.CRM_SALE_STAGE)))
}


export const navigateBack = () => (dispatch: Function): void => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)))
    dispatch(actionsDealStages.navigateBack())
}

export const navigateBackWithResetData = () => (dispatch: Function): void => {
    dispatch(thunkDealStages.resetCheckFlags())
    dispatch(thunkDealStages.prepareStageInputData())
    dispatch(thunkDealStages.navigateBack())
    dispatch(actionsDealStages.navigateBackWithResetData())
}

export const navigateToPreviousForm = () => (dispatch: Function): void => {

    dispatch(thunkDeal.navigateDealBack(true))

    dispatch(actionsDealStages.navigateToPreviousForm())
}

export const performSaveStage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    dispatch(actionsDealStages.performSaveStage())

    if(!reducerState.receivingInputParametersInProgress){
        dispatch(thunkDealStages.performReceivingInputParametersExecute())
    }

    dispatch(thunkDealStages.callGetStageTracking())
}

export const onSaveDealStageButtonTap = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    /*TODO отключение функционала в рамках релиза 2018-1
    if(reducerState.isSetClientStageChanges){
        dispatch(thunkDealStages.showDealStagesSavePopover(true))
    } else {
        dispatch(thunkDealStages.performSaveDealStage())
    }*/
    dispatch(thunkDealStages.performSaveDealStage())
}

export const navigateToAdditionalFields = (stage: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    let isDisabled: boolean = util.getDisableStatus(stage,reducerState.currentDeal.phaseClassifier,reducerState.dealPossibleStageList) || !reducerState.isStageListEnable
    let isSelected: boolean = util.getSelectStatus(stage, reducerState.inputStage)
    if(isDisabled || isSelected){
        return
    }

    if (util.getSelectStatus(stage, reducerState.currentDeal.phaseClassifier)){

        dispatch(actionsDealStages.navigateToAdditionalFields(stage))
        dispatch(thunkDealStages.setSaveStageEnableFlag(false))
    } else {

        dispatch(thunkDealStages.showError(false,''))
        dispatch(thunkDealStages.resetCheckFlags())
        if( stage.code == reducerState.currentDeal.phaseClassifier.code){
            dispatch(thunkDealStages.setSaveStageEnableFlag(false))
        } else {
            dispatch(thunkDealStages.setSaveStageEnableFlag(true))
        }
        dispatch(thunkDealStages.performChecks(stage))


        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerDealStages

        if(reducerState.isErrorEnable){
            dispatch(thunkDealStages.setSaveStageEnableFlag(false))
            dispatch(actionsDealStages.navigateToAdditionalFields(reducerState.currentDeal.phaseClassifier))
            return
        } else if(  reducerState.isSetPlannedFinishDate     ||
            reducerState.isSetCurrency                      ||
            reducerState.isSetMainClientManager             ||
            reducerState.isSetMainCreditOfficer             ||
            reducerState.isSetClientStageChanges            ||
            reducerState.isSetMemberMonitoring
        ){
            if( !reducerState.isSetPlannedFinishDate        &&
                !reducerState.isSetCurrency                 &&
                !reducerState.isSetMainClientManager        &&
                !reducerState.isSetMainCreditOfficer        &&
                !reducerState.isSetMemberMonitoring         &&
                reducerState.isSetClientStageChanges
                ){
                dispatch(thunkDealStages.setSaveAdditionalFildsEnableFlag(true))
            }
            dispatch(thunkDealStages.performSetRejection(false))
            dispatch(thunkDealStages.showError(false,''))
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealStage.AdditionalFields,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
                )
            )
        } else if(reducerState.isSetCloseReason){
            dispatch(thunkDealStages.performSetRejection(true))
            dispatch(thunkDealStages.showError(false,''))
            dispatch(
                SplitPanelActions.pushContent(
                    Enums.NavigationContentDealStage.AdditionalFields,
                    util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
                )
            )
        }
        dispatch(actionsDealStages.navigateToAdditionalFields(stage))
    }

}


export const resetCheckFlags = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.resetCheckFlags())
}

export const currentStageStatus = (stageStatus: Enums.StageStatus, isDisabled: boolean, isSelected:boolean, history: Models.HistoryStage, stageText: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsDealStages.currentStageStatus(stageStatus,isDisabled,isSelected, history, stageText))
}

export const setSaveStageEnableFlag = (isSaveStageEnable: boolean) => (dispatch: Function): void => {
    dispatch(actionsDealStages.setSaveStageEnableFlag(isSaveStageEnable))
}

export const showError =  (isErrorEnable: boolean, errorMessage: string) => (dispatch: Function): void => {
    dispatch(actionsDealStages.showError(isErrorEnable,errorMessage))
}


export const performSetRejection = (isRejectin: boolean) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSetRejection(isRejectin))
}

export const performInputDealDate = (value: Date | null) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performInputDealDate(util.prepareDate(value)))
    dispatch(thunkDealStages.performValidateForm())
}

export const performInputEquivalentSumString = (value: string | null) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performInputEquivalentSum(util.convertStringToNumber(value)))
    dispatch(actionsDealStages.performInputEquivalentSumString(value))
    dispatch(thunkDealStages.performValidateForm())
}
export const performInputEquivalentSum = (value: number | null) => (dispatch: Function): void => {

    dispatch(actionsDealStages.performInputEquivalentSum(value))
    dispatch(thunkDealStages.performValidateForm())
}

export const navigateToCurrencyPickerScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor
    let classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary

    dispatch(thunkClassifier.navigateToClassifier(
        util.getSortedCurrencyList(classifiers.CURRENCY),
        reducerState.inputCurrency && reducerState.inputCurrency.code || '',
        Enums.ClassifierMode.DealStage_Currency
    ))

    dispatch(actionsDealStages.navigateToCurrencyPickerScreen())
}

export const showButtonPopoverMainClientManager = (isButtonPopoverOpenedMainClientManager: boolean) => (dispatch: Function): void => {

    dispatch(actionsDealStages.showButtonPopoverMainClientManager(isButtonPopoverOpenedMainClientManager))
}
export const showButtonPopoverMainCreditOfficer = (isButtonPopoverOpenedMainCreditOfficer: boolean) => (dispatch: Function): void => {

    dispatch(actionsDealStages.showButtonPopoverMainCreditOfficer(isButtonPopoverOpenedMainCreditOfficer))
}
export const showButtonPopoverMemberMonitoring = (isButtonPopoverOpenedMemberMonitoring: boolean) => (dispatch: Function): void => {

    dispatch(actionsDealStages.showButtonPopoverMemberMonitoring(isButtonPopoverOpenedMemberMonitoring))
}
export const showDealStagesSavePopover = (isDealStagesSavePopoverOpened: boolean) => (dispatch: Function): void => {

    dispatch(actionsDealStages.showDealStagesSavePopover(isDealStagesSavePopoverOpened))
}


export const performInputEmployeeSourceMainClientManager = (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function): void => {

    dispatch(thunkDealStages.showButtonPopoverMainClientManager(false))
    dispatch(actionsDealStages.performInputEmployeeSourceMainClientManager(inputEmployeeSource))
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMainClientManager))
}
export const performInputEmployeeSourceMainCreditOfficer = (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function): void => {

    dispatch(thunkDealStages.showButtonPopoverMainCreditOfficer(false))
    dispatch(actionsDealStages.performInputEmployeeSourceMainCreditOfficer(inputEmployeeSource))
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMainCreditOfficer))
}
export const performInputEmployeeSourceMemberMonitoring = (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function): void => {

    dispatch(thunkDealStages.showButtonPopoverMemberMonitoring(false))
    dispatch(actionsDealStages.performInputEmployeeSourceMemberMonitoring(inputEmployeeSource))
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMemberMonitoring))
}

export const performInputComment = (inputComment: string) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performInputComment(inputComment))
}

export const performInputMainClientManager = (inputMainClientManager: ModelsApp.Employee) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performInputMemberList(inputMainClientManager))
    dispatch(thunkDealStages.navigateBack())
    dispatch(actionsDealStages.performInputMainClientManager(inputMainClientManager))
    dispatch(thunkDealStages.performValidateForm())
}

export const performInputMainCreditOfficer = (inputMainCreditOfficer: ModelsApp.Employee) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performInputMemberList(inputMainCreditOfficer))
    dispatch(thunkDealStages.navigateBack())
    dispatch(actionsDealStages.performInputMainCreditOfficer(inputMainCreditOfficer))
    dispatch(thunkDealStages.performValidateForm())
}

export const performInputMemberMonitoring = (inputMemberMonitoring: ModelsApp.Employee) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performInputMemberList(inputMemberMonitoring))
    dispatch(thunkDealStages.navigateBack())
    dispatch(actionsDealStages.performInputMemberMonitoring(inputMemberMonitoring))
    dispatch(thunkDealStages.performValidateForm())
}

export const performInputMemberList = (inputMember: ModelsApp.Employee) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    if(reducerState.inputMemberList){
        dispatch(actionsDealStages.performInputMemberList({data: [...reducerState.inputMemberList.data,...[inputMember]]}))
    } else {
        dispatch(actionsDealStages.performInputMemberList({data: [...reducerState.currentDeal.memberList.data,...[inputMember]]}))
    }
}


export const navigateToMemberListScreen = (mode: Enums.MemberListMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    // Dispatch thunk "performMemberListRefresh" synchronously.
    dispatch(
        thunkMemberList.performMemberListRefresh(
            defaultValues.Activity,
            reducerState.currentDeal,
            state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
            defaultValues.Gsz,
            defaultValues.Agent,
            true,
            mode,
            reducerState.inputEmployeeSource
        )
    )

    dispatch(
        SplitPanelActions.pushContent(
            Enums.NavigationContentDealStage.MemberList,
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
        )
    )

    dispatch(actionsDealStages.navigateToMemberListScreen())
}

export const performInputCurrency = (value: ModelsApp.Classifier) => (dispatch: Function): void => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)))

    dispatch(actionsDealStages.performInputCurrency(value))

    dispatch(thunkDealStages.performValidateForm())
}

export const performSelectRejection = (inputRejection: ModelsApp.Classifier) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSelectRejection(inputRejection))
    dispatch(thunkDealStages.performSaveDealAdditionalFields())
}

export const performValidateForm = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    let index: number = 0

    reducerState.isSetMainClientManager && index++;
    reducerState.isSetMainCreditOfficer && index++;
    reducerState.isSetMemberMonitoring && index++;
    reducerState.isSetPlannedFinishDate && index++;
    reducerState.isSetCurrency && index++;

    reducerState.isSetMainClientManager && reducerState.inputMainClientManager && index--;
    reducerState.isSetMainCreditOfficer && reducerState.inputMainCreditOfficer && index--;
    reducerState.isSetMemberMonitoring && reducerState.inputMemberMonitoring && index--;
    reducerState.isSetPlannedFinishDate && reducerState.inputDealDate && index--;
    reducerState.isSetCurrency && reducerState.inputCurrency && index--;

    if(index == 0){
        dispatch(thunkDealStages.setSaveAdditionalFildsEnableFlag(true))
    }

    dispatch(actionsDealStages.performValidateForm())
}

export const setSaveAdditionalFildsEnableFlag = (isSaveAdditionalFieldsEnable: boolean) => (dispatch: Function): void => {
    dispatch(actionsDealStages.setSaveAdditionalFildsEnableFlag(isSaveAdditionalFieldsEnable))
}
//----------------------------------------------------------------------------------------------------------------------

export const performChecks = (stage: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    dispatch(actionsDealStages.performChecks(stage, currentUser.id))
}

//----------------------------------------------------------------------------------------------------------------------

export const performSaveDealAdditionalFields = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    dispatch(actionsDealStages.performSaveDealAdditionalFields())

    if(!reducerState.isSetPlannedFinishDate         &&
        !reducerState.isSetCurrency                 &&
        !reducerState.isSetMainClientManager        &&
        !reducerState.isSetMainCreditOfficer        &&
        !reducerState.isSetMemberMonitoring         &&
        reducerState.isSetClientStageChanges){
        if(reducerState.isSetCloseReason && !reducerState.inputRejection.value){
            dispatch(thunkDealStages.performSetRejection(true))
        } else {
            dispatch(thunkDealStages.navigateBack())
        }
    } else {
        if(!reducerState.saveDealAdditionalFieldsInProgress){
            dispatch(thunkDealStages.performSaveDealAdditionalFieldsExecute())
        }
        dispatch(thunkDealStages.callPutDealUpdate())
    }
}

export const performSaveDealAdditionalFieldsExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsExecute())
}
export const performSaveDealAdditionalFieldsSuccess = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsSuccess())
}
export const performSaveDealAdditionalFieldsFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const performSaveDealStage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    if(reducerState.isDealStagesSavePopoverOpened){
        dispatch(thunkDealStages.showDealStagesSavePopover(false))
    }
    dispatch(actionsDealStages.performSaveDealStage())

    if(!reducerState.saveDealStageInProgress){
        dispatch(thunkDealStages.performSaveDealStageExecute())
    }
    dispatch(thunkDealStages.callPutDealStagesUpdate())
}

export const performSaveDealStageExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSaveDealStageExecute())
}
export const performSaveDealStageSuccess = () => (dispatch: Function): void => {
    dispatch(thunkDeal.performRefreshForce())
    dispatch(thunkDealStages.navigateToPreviousForm())
    setTimeout(()=>{
        dispatch(actionsDealStages.performSaveDealStageSuccess())
    },2000)

}
export const performSaveDealStageFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performSaveDealStageFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------
export const performReceivingInputParameters = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    dispatch(actionsDealStages.performReceivingInputParameters())

    if(!reducerState.receivingInputParametersInProgress){
        dispatch(thunkDealStages.performReceivingInputParametersExecute())
    }
    dispatch(thunkDealStages.callGetNextStages())
    /*TODO Отключение функционала в рамках релиза 2018-1
    if(reducerState.isAccessibleStages){
        dispatch(thunkDealStages.callGetStageTracking())
    } else {
        dispatch(thunkDealStages.callGetNextStages())
    }*/
}


export const performRefreshStagesSuccess = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    const reducerDealStages = getState().user.mrmkmcibCRM.reducerDealStages
    const stages = remapDealStages(
        reducerDealStages.dealHistoryStageList.data,
        reducerDealStages.dealStageTracking.data,
        reducerDealStages.currentDeal.phaseClassifier)
    dispatch(actionsDealStages.performRefreshStagesSuccess(stages))
    dispatch(actionsDeal.performRefreshStagesSuccess(stages))

}

export const performRefreshStagesFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performRefreshStagesFailure(error))
}


export const performRefreshSelectedStage = (crmStage: Models.DealStage) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    const updatedDealStage = reducerState.stageList.find(
        (dealStage: Models.DealStage) => reducerState.selectedStage.stage.value === dealStage.stage.value ) ||
        defaultValues.dealStage

    const updatedCrmStage = (updatedDealStage.crmStages || [] ).find(
        (crmStageIterator: Models.DealStage) => crmStage.stage.value === crmStageIterator.stage.value ) ||
        defaultValues.dealStage

    if (updatedCrmStage) {

        updatedCrmStage.comment = crmStage.comment
        updatedCrmStage.durationEstimate = crmStage.durationEstimate
        updatedCrmStage.end = crmStage.end

        updatedDealStage.comment = fillDealComment ( updatedDealStage.crmStages || [] )
        updatedDealStage.durationEstimate = fillDealTermEstimate ( updatedDealStage.crmStages || [] )
        updatedDealStage.end = crmStage.end
        dispatch ( actionsDealStages.navigateToStageDetails ( updatedDealStage, reducerState.activePosition ) )
    }
}

export const performRefreshStages = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealStageTrackingFetching) {
        return
    }

    dispatch(actionsDealStages.callGetDealStageTracking())

    if (!reducerState.dealStageTrackingFetching){
        dispatch(thunkDealStages.callGetDealStageTrackingExecute())

        util.call<ModelsCrm.DealStageTracking, void>(
            util.urlDealStages.callGetDealStageTracking(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<ModelsCrm.DealStageTracking>) => {
                dispatch(thunkDealStages.callGetDealStageTrackingSuccess(response))
                dispatch(thunkDealStages.callGetNextStages())

                util.call<ModelsCrm.DealHistoryStageList, void>(
                    util.urlDealStages.callGetHistoryStages(state, reducerState,
                        [
                            {tag: Enums.CachePolicy.Disabled},
                        ]
                    ),
                    (response: Response<ModelsCrm.DealHistoryStageList>) => {
                        dispatch(thunkDealStages.callGetHistoryStagesSuccess(response))
                        dispatch(thunkDealStages.performRefreshStagesSuccess())

                    },

                    (error: Error) => {
                        dispatch(thunkDealStages.callGetHistoryStagesFailure(error))
                        dispatch(thunkDealStages.performRefreshStagesFailure(error))
                    },

                    Converters.RESPONSE_CALL_GET_HISTORY_STAGE_TO_DEAL_HISTORY_STAGE_LIST,

                    'GET'
                )
            },

            (error: Error) => {
                dispatch(thunkDealStages.callGetDealStageTrackingFailure(error))
                dispatch(thunkDealStages.performReceivingInputParametersFailure(error))

            },

            Converters.RESPONSE_CALL_GET_DEAL_STAGE_TRACKING_TO_DEAL_STAGES,

            'GET'
        )
    }

}

export const performReceivingInputParametersExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.performReceivingInputParametersExecute())
}
export const performReceivingInputParametersSuccess = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.performReceivingInputParametersSuccess())
}
export const performReceivingInputParametersFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.performReceivingInputParametersFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------
export const callGetCurrentDeal = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.currentDealFetching) {
        return
    }

    dispatch(actionsDealStages.callGetCurrentDeal())

    if (!reducerState.currentDealFetching){
        dispatch(thunkDealStages.callGetCurrentDealExecute())

        util.call<Models.Deal, void>(
            util.urlDealStages.callGetCurrentDeal(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<Models.Deal>) => {
                dispatch(thunkDealStages.callGetCurrentDealSuccess(response))
            },

            (error: Error) => {
                dispatch(thunkDealStages.callGetCurrentDealFailure(error))

            },

            Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(
                state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod,
                state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
                state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
                state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged),

            'GET'
        )
    }
}

export const callGetCurrentDealExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetCurrentDealExecute())
}
export const callGetCurrentDealSuccess = (currentDeal: Response<Models.Deal>) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    if(reducerState.isSetCloseReason && !reducerState.inputRejection.value){
        dispatch(thunkDealStages.performSetRejection(true))
    } else {
        dispatch(thunkDealStages.navigateBack())
    }
    setTimeout(()=>{
        dispatch(thunkDealStages.performSaveDealAdditionalFieldsSuccess())
    },1000)
    dispatch(actionsDealStages.callGetCurrentDealSuccess(currentDeal.data))
}
export const callGetCurrentDealFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performSaveDealAdditionalFieldsFailure(error))
    dispatch(actionsDealStages.callGetCurrentDealFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------
export const callGetStageTracking = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealStageTrackingFetching) {
        return
    }

    dispatch(actionsDealStages.callGetDealStageTracking())

    if (!reducerState.dealStageTrackingFetching){
        dispatch(thunkDealStages.callGetDealStageTrackingExecute())

        util.call<ModelsCrm.DealStageTracking, void>(
            util.urlDealStages.callGetDealStageTracking(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<ModelsCrm.DealStageTracking>) => {
                dispatch(thunkDealStages.callGetDealStageTrackingSuccess(response))
                dispatch(thunkDealStages.callGetNextStages())
            },

            (error: Error) => {
                dispatch(thunkDealStages.callGetDealStageTrackingFailure(error))
                dispatch(thunkDealStages.performReceivingInputParametersFailure(error))
            },

            Converters.RESPONSE_CALL_GET_DEAL_STAGE_TRACKING_TO_DEAL_STAGES,

            'GET'
        )
    }
}

export const callGetDealStageTrackingExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetDealStageTrackingExecute())
}
export const callGetDealStageTrackingSuccess = (dealStageTracking: Response<ModelsCrm.DealStageTracking>) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetDealStageTrackingSuccess(dealStageTracking.data))
}
export const callGetDealStageTrackingFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetDealStageTrackingFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------
export const callGetNextStages = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealPossibleStageListFetching) {
        return
    }

    dispatch(actionsDealStages.callGetNextStages())

    if (!reducerState.dealPossibleStageListFetching){
        dispatch(thunkDealStages.callGetNextStagesExecute())

        util.call<ModelsCrm.DealPossibleStageList, void>(
            util.urlDealStages.callGetNextStages(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<ModelsCrm.DealPossibleStageList>) => {
                dispatch(thunkDealStages.callGetNextStagesSuccess(response))
                dispatch(thunkDealStages.callGetHistoryStages())

            },

            (error: Error) => {
                dispatch(thunkDealStages.callGetNextStagesFailure(error))
                dispatch(thunkDealStages.performReceivingInputParametersFailure(error))
            },

            Converters.RESPONSE_CALL_GET_NEXT_STAGE_TO_NEXT_STAGES,

            'GET'
        )
    }
}

export const callGetNextStagesExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetNextStagesExecute())
}
export const callGetNextStagesSuccess = (dealPossibleStageList: Response<ModelsCrm.DealPossibleStageList>) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetNextStagesSuccess(dealPossibleStageList.data))
}
export const callGetNextStagesFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetNextStagesFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const callGetHistoryStages = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealHistoryStageListFetching) {
        return
    }

    dispatch(actionsDealStages.callGetHistoryStages())

    if (!reducerState.dealHistoryStageListFetching){
        dispatch(thunkDealStages.callGetHistoryStagesExecute())

        util.call<ModelsCrm.DealHistoryStageList, void>(
            util.urlDealStages.callGetHistoryStages(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<ModelsCrm.DealHistoryStageList>) => {
                dispatch(thunkDealStages.callGetHistoryStagesSuccess(response))
                dispatch(thunkDealStages.performReceivingInputParametersSuccess())

            },

            (error: Error) => {
                dispatch(thunkDealStages.callGetHistoryStagesFailure(error))
                dispatch(thunkDealStages.performReceivingInputParametersFailure(error))
            },

            Converters.RESPONSE_CALL_GET_HISTORY_STAGE_TO_DEAL_HISTORY_STAGE_LIST,

            'GET'
        )
    }
}

export const callGetHistoryStagesExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetHistoryStagesExecute())
}
export const callGetHistoryStagesSuccess = (dealHistoryStageList: Response<ModelsCrm.DealHistoryStageList>) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetHistoryStagesSuccess(dealHistoryStageList.data))
}
export const callGetHistoryStagesFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(actionsDealStages.callGetHistoryStagesFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const callPutDealUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealUpdateFetching) {
        return
    }

    dispatch(actionsDealStages.callPutDealUpdate())

    if (!reducerState.dealUpdateFetching){
        dispatch(thunkDealStages.callPutDealUpdateExecute())

        util.call<boolean, ModelsCrm.DealAdditionalFieldsUpdateRequest>(
            util.urlDealStages.callPutDealUpdate(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<boolean>) => {
                dispatch(thunkDealStages.callPutDealUpdateSuccess())
            },

            (error: Error) => {
                dispatch(thunkDealStages.callPutDealUpdateFailure(error))
            },

            Converters.RESPONSE_CALL_PUT_DEAL_UPDATE_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8',
                'operUid': reducerState.operationUuid
            },

            Converters.REQUEST_CALL_PUT_DEAL_UPDATE_FROM_CALL_PUT_DEAL_REQUEST,

            {
                accountId: reducerState.currentCustomerManaged.id,
                currentDeal: reducerState.currentDeal,
                closeReason: reducerState.inputRejection.code
                    ?   reducerState.inputRejection
                    :   null,
                plannedFinishDate:reducerState.inputDealDate
                    ?   reducerState.inputDealDate
                    :   null,
                sumInCurrencyEkv: reducerState.inputEquivalentSumString
                    ?   reducerState.inputEquivalentSumString
                    :   null,
                currencyClassifier: reducerState.inputCurrency
                    ?   reducerState.inputCurrency
                    :   null,
                memberList: reducerState.inputMemberList
                    ?   reducerState.inputMemberList
                    :   reducerState.currentDeal.memberList,
            }
        )
    }
}

export const callPutDealUpdateExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callPutDealUpdateExecute())
}
export const callPutDealUpdateSuccess = () => (dispatch: Function): void => {
    dispatch(thunkDealStages.callGetCurrentDeal())
    dispatch(actionsDealStages.callPutDealUpdateSuccess())
}
export const callPutDealUpdateFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performSaveDealAdditionalFieldsFailure(error))
    dispatch(actionsDealStages.callPutDealUpdateFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const callPutDealStagesUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealStagesUpdateFetching) {
        return
    }

    dispatch(actionsDealStages.callPutDealStagesUpdate())

    if (!reducerState.dealStagesUpdateFetching){
        dispatch(thunkDealStages.callPutDealStagesUpdateExecute())

        util.call<boolean, ModelsCrm.DealStageUpdateRequest>(
            util.urlDealStages.callPutDealStagesUpdate(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<boolean>) => {
                dispatch(thunkDealStages.callPutDealStagesUpdateSuccess())
            },

            (error: Error) => {
                dispatch(thunkDealStages.callPutDealStagesUpdateFailure(error))
            },

            Converters.RESPONSE_CALL_PUT_DEAL_STAGES_UPDATE_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8',
                'operUid': reducerState.operationUuid
            },

            Converters.REQUEST_CALL_PUT_DEAL_STAGES_UPDATE_TO_DEAL_UPDATE_REQUEST,

            {
                accountId: reducerState.currentCustomerManaged.id,
                operationUuid: reducerState.operationUuid,
                currentDeal: reducerState.currentDeal,
                phaseClassifier: reducerState.inputStage,
                products: reducerState.currentDeal.products,
            }
        )
    }
}

export const callPutDealStagesUpdateExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callPutDealStagesUpdateExecute())
}
export const callPutDealStagesUpdateSuccess = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages
    if(reducerState.inputComment){
        dispatch(thunkDealStages.callPutDealStageTrackingUpdate())
    } else {
        dispatch(thunkDealStages.performSaveDealStageSuccess())
    }
    dispatch(actionsDealStages.callPutDealStagesUpdateSuccess())
}
export const callPutDealStagesUpdateFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performSaveDealStageFailure(error))
    dispatch(actionsDealStages.callPutDealStagesUpdateFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const callPutDealStageTrackingUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages

    if (reducerState.dealStagesTrackingUpdateFetching) {
        return
    }
    const trackingElement: Models.Tracking | null = util.getTrackingElement.byCrmStage(reducerState.dealStageTracking,reducerState.inputStage.value)
    const now = moment()
    const updatedComment = `${util.getAgentNameInitials(state.user.mrmkmcibCRM.reducerAppCRM.currentUser)} (${now.format('HH:mm:ss Z, DD.MM.YYYY')}):\n${reducerState.inputComment}\n${trackingElement && trackingElement.comment}`

    dispatch(actionsDealStages.callPutDealStageTrackingUpdate())

    if (!reducerState.dealStagesTrackingUpdateFetching){
        dispatch(thunkDealStages.callPutDealStageTrackingUpdateExecute())

        util.call<boolean, ModelsCrm.DealStageTrackingCommentEditorUpdateRequest>(
            util.urlDealStages.callPutDealStageTrackingUpdate(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<boolean>) => {
                dispatch(thunkDealStages.callPutDealStageTrackingUpdateSuccess())

            },

            (error: Error) => {
                dispatch(thunkDealStages.callPutDealStageTrackingUpdateFailure(error))
            },

            Converters.RESPONSE_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8',
                'operUid': reducerState.operationUuid
            },

            Converters.REQUEST_DEAL_STAGE_TRACKING_UPDATE_FROM_DEAL_STAGE_UPDATE_REQUEST,

            {
                dealId: reducerState.currentDeal.id,
                inputStage: reducerState.inputStage,
                comment: updatedComment,
                trackingList: reducerState.dealStageTracking
            }
        )
    }
}

export const callPutDealStageTrackingUpdateExecute = () => (dispatch: Function): void => {
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateExecute())
}
export const callPutDealStageTrackingUpdateSuccess = () => (dispatch: Function): void => {
    dispatch(thunkDealStages.performSaveDealStageSuccess())
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateSuccess())
}
export const callPutDealStageTrackingUpdateFailure = (error: Error) => (dispatch: Function): void => {
    dispatch(thunkDealStages.performSaveDealStageFailure(error))
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateFailure(error))
}

//----------------------------------------------------------------------------------------------------------------------

export const navigateToStageDetails = (stage:Models.DealStage, activePosition: number) => (dispatch: Function): void => {

    dispatch(actionsDeal.performExpandScreen(true))

    dispatch(actionsDealStages.navigateToStageDetails(stage, activePosition))

    dispatch(
        SplitPanelActions.pushContent(
            Enums.NavigationContentDealStage.StageDetails,
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
        )
    )

}

export const performClientRoadMapNext = () => (dispatch: Function): void => {

    dispatch(actionsDealStages.performClientRoadMapNext())

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_YesDoIt,
        util.getNavigationContentStringDealRoadMapPopover(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_Zero)))
}

export const performPopoverClientRoadMapShow = () => (dispatch: Function): void => {

    dispatch(actionsDealStages.performPopoverClientRoadMapShow())
}

export const performPopoverClientRoadMapHide = () => (dispatch: Function): void => {

    dispatch(actionsDealStages.performPopoverClientRoadMapHide())
}



export const performChangeStageTab = (index: number) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealStages.performChangeStageTab(index))

    const reducerDealStages = getState().user.mrmkmcibCRM.reducerDealStages
    const stages = remapDealStages(
        reducerDealStages.dealHistoryStageList.data,
        reducerDealStages.dealStageTracking.data,
        reducerDealStages.currentDeal.phaseClassifier)
    dispatch(actionsDealStages.performRefreshStagesSuccess(stages))
    dispatch(actionsDeal.performRefreshStagesSuccess(stages))
}

export const performPopoverClientRoadMapHelpShow = () => (dispatch: Function): void => {

    dispatch(actionsDealStages.performPopoverClientRoadMapHelpShow())
}

export const performPopoverClientRoadMapHelpHide = () => (dispatch: Function): void => {

    dispatch(actionsDealStages.performPopoverClientRoadMapHelpHide())
}



export const performClientRoadMapActivate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let currentDeal = state.user.mrmkmcibCRM.reducerDealEditor.currentDeal

    dispatch(actionsDealStages.performClientRoadMapActivate())

    dispatch(thunkDealStages.callPutDealRoadMapSwitch(!currentDeal.isRoadMapShow))
}


export const callPutDealRoadMapSwitch = (enable: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor
    let currentDeal = state.user.mrmkmcibCRM.reducerDeal.currentDeal

    if (reducerState.dealUpdateFetching) {
        return
    }

    dispatch(actionsDealStages.callPutDealRoadMapSwitchUpdate())
    dispatch(actionsDealStages.performRoadMapSwitchButtonDisabled(true))

    if (!reducerState.dealUpdateFetching) {
        dispatch(actionsDealStages.callPutDealRoadMapSwitchRequest())

        util.call<boolean, Models.DealRoadMapUpdateRequestData>(
            util.urlDealEditor.callPutDealUpdate(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),

            (response: Response<boolean>) => {

                dispatch(actionsDealStages.callPutDealUpdateRoadMapStatus(enable))

                dispatch(actionsDealStages.callPutDealRoadMapSwitchRequestSuccess())
                dispatch(actionsDealStages.performSaveRoadMapSwitchSuccess())

            },

            (error: Error) => {


                dispatch(actionsDealStages.performRoadMapSwitchButtonDisabled(false))
                dispatch(actionsDealStages.performSaveRoadMapSwitchFailure(error))
            },

            Converters.RESPONSE_DEAL_UPDATE_CALL_PUT_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8',
                'operUid': reducerState.operationUuidUpdate
            },

            Converters.REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_ROAD_MAP_FROM_DEAL_UPDATE_REQUEST,

            {
                accountId: reducerState.currentCustomerManaged.id,
                isRoadMapShow: enable,
                title: currentDeal.title,
                requestType: currentDeal.requestTypeClassifier || defaultValues.Classifier,
                salesMethodClassifier: currentDeal.salesMethodClassifier  || defaultValues.Classifier,
                id: currentDeal.id,
                modId: currentDeal.modId,
            }
        )
    }
}


