import * as actionsDeal from '../actions/ActionsDeal';
import * as thunkDeal from '../thunk/ThunkDeal';
import { SplitPanelActions } from 'ufs-mobile-platform';
import moment from 'moment';
import * as actionsDealStages from '../actions/ActionDealStages';
import * as thunkDealStages from '../thunk/ThunkDealStages';
import * as util from "../common/Util";
import * as Converters from "../models/Converters";
import { Enums } from "../Enums";
import { defaultValues } from '../models/Models';
import * as thunkClassifier from "./ThunkSelectClassifierWithSearch";
import * as thunkMemberList from './ThunkMemberList';
const fillDealComment = (crmStages) => crmStages.reverse().reduce((acc, stage) => acc + stage.comment + '\n\n', '');
const fillDealTermFact = (crmStages) => crmStages.reduce((acc, value) => acc + value.durationFact, 0);
const fillDealTermEstimate = (crmStages) => crmStages.reduce((acc, value) => acc + value.durationEstimate, 0);
const fillClientStageCurrent = (crmStages) => crmStages.reduce((acc, value) => acc && value.isCurrent, false);
const TrackingSorterByDates = (a, b) => {
    if (b.plannedFinishDate && a.plannedFinishDate && moment(b.plannedFinishDate).isSame(moment(a.plannedFinishDate))) {
        return 0;
    }
    if (b.plannedFinishDate && a.plannedFinishDate && moment(b.plannedFinishDate).isAfter(moment(a.plannedFinishDate))) {
        return -1;
    }
    return 1;
};
const findNext = (value, array) => {
    if (value.newValueClassifier && value.newValueClassifier.value) {
        return array.find((stage) => {
            const prevValue = stage.previousValueClassifier && stage.previousValueClassifier.value;
            return (value.newValueClassifier && prevValue === value.newValueClassifier.value) || false;
        }) || null;
    }
    return null;
};
const sortLinkedList = (array) => {
    const result = [];
    const first = array.find((stage) => !stage.previousValueClassifier ||
        !stage.previousValueClassifier.value) || array[array.length - 1];
    for (let next = first; next; next = findNext(next, array)) {
        result.push(next);
    }
    return result;
};
const OrderSorter = (a, b) => {
    if (b.order && a.order && b.order === a.order) {
        return 0;
    }
    if (b.order && a.order && b.order > a.order) {
        return -1;
    }
    return 1;
};
const indexOfHistory = (history, tracking) => history.findIndex((historyStage) => (historyStage.newValueClassifier && historyStage.newValueClassifier.value === tracking.crmStage) || false);
const HistorySorter = (history) => (a, b) => {
    const aOrder = indexOfHistory(history, a);
    const bOrder = indexOfHistory(history, b);
    if (bOrder === aOrder) {
        return 0;
    }
    if (bOrder > aOrder) {
        return -1;
    }
    return 1;
};
export const remapDealStages = (history, trackingList, currentPhaseClassifier) => {
    let prevTracking = defaultValues.Tracking;
    let prevCrmStage = Object.assign({}, defaultValues.dealStage, { history: null });
    const crmStages = trackingList
        .sort(OrderSorter)
        // .sort( HistorySorter(historySorted))
        .map((element) => {
        const historyStage = history.find((stage) => (element.crmStage === (stage.newValueClassifier && stage.newValueClassifier.value)));
        return {
            isCurrent: element.crmStage === currentPhaseClassifier.value,
            history: historyStage || null,
            stage: { value: element.crmStage, code: element.crmStageId, parentId: '', name: '' },
            isDisabled: false,
            durationEstimate: 0,
            durationFact: 0,
            start: null,
            end: null,
            order: element.order || 0,
        };
    })
        .map((crmStage, index) => {
        const historyStage = crmStage.history;
        const fullName = (historyStage && historyStage.changedByFIO) ? util.parseFullName(historyStage.changedByFIO) || defaultValues.Agent : defaultValues.Agent;
        const author = Object.assign({}, defaultValues.Employee, { lastName: fullName.lastName || '', firstName: fullName.firstName || '', middleName: fullName.middleName || '' });
        if (prevCrmStage.end) {
            prevCrmStage.end.author = author;
        }
        const startDate = historyStage && historyStage.startDate ? historyStage.startDate :
            ((prevCrmStage.end && prevCrmStage.end.date) || prevTracking.plannedFinishDate || new Date());
        if (!prevCrmStage.end) {
            prevCrmStage.end = { date: startDate, author: author };
        }
        prevTracking = trackingList.find((prevTrackElement) => prevTrackElement.crmStage === crmStage.stage.value) || defaultValues.Tracking;
        prevCrmStage = Object.assign({}, crmStage, { comment: prevTracking.comment, start: { date: startDate, author: author } });
        // срок - 1) факт из хистори, 2) если текущая стадия - durationNorm, 3) вычисляем для буд. стадий.
        if (historyStage) {
            if (historyStage.endDate) {
                prevCrmStage.end = { date: historyStage.endDate, author: null };
                if (prevCrmStage.start) {
                    prevCrmStage.durationEstimate = moment(prevCrmStage.end.date ||
                        prevTracking.plannedFinishDate || new Date()).diff(prevCrmStage.start.date, 'days');
                }
            }
            prevCrmStage.durationFact = prevCrmStage.isCurrent ? +historyStage.durationNorm : +historyStage.actualDuration;
        }
        return prevCrmStage;
    });
    let prevClientStage;
    let prevStage;
    // трэкинг стадии клиента по history
    // const historySorted: Array<ModelsCrm.HistoryStage> = sortLinkedList(history)
    // const historyLast = historySorted[historySorted.length-1]
    // Client Stages are unique
    const stageList = crmStages.reduce((accumulator, crmStage) => {
        const trackingCrm = trackingList.find((tracking) => tracking.crmStage === crmStage.stage.value) || { clientStage: '' };
        prevClientStage = accumulator.find((clientStage) => trackingCrm.clientStage === clientStage.stage.value);
        if (prevClientStage && prevClientStage.crmStages) {
            prevClientStage.crmStages.push(crmStage);
        }
        else {
            prevClientStage = {
                isCurrent: false,
                stage: { value: trackingCrm.clientStage, code: '', parentId: '', name: '' },
                crmStages: [crmStage],
            };
            accumulator.push(prevClientStage);
        }
        if (crmStage.isCurrent) {
            prevClientStage.isCurrent = true;
        }
        return accumulator;
    }, [])
        .map((stagePart, index) => {
        // const startDate: Date = prevStage && prevStage.end && prevStage.end.date || new Date()
        const stages = stagePart.crmStages || [];
        prevStage = Object.assign({}, stagePart, { start: stages && stages[0] && stages[0].start, end: stages && stages[stages.length - 1] && stages[stages.length - 1].end, durationEstimate: fillDealTermEstimate(stages), durationFact: fillDealTermFact(stages), comment: fillDealComment(stages), order: index });
        return prevStage;
    });
    return stageList;
};
export const setAccessStagesFlag = (enabled) => (dispatch, getState) => {
    dispatch(actionsDealStages.setAccessStagesFlag(enabled));
};
export const navigateToDealStages = () => (dispatch, getState) => {
    let state = getState();
    const currentUser = state.user.mrmkmcibApp.reducerAuthorization.currentUser;
    const classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(thunkDealStages.setAccessStagesFlag(util.isInitRoadMapNecessary(state.user.mrmkmcibCRM.reducerDeal)));
    state = getState();
    dispatch(thunkDealStages.performReceivingInputParameters());
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_StageDetails, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(thunkDealStages.prepareStageClassifierList());
    dispatch(thunkDealStages.prepareStageInputData());
    dispatch(actionsDealStages.navigateToDealStages(currentUser, classifierDictionary));
    const reducerDealStages = state.user.mrmkmcibCRM.reducerDealStages;
    const stages = remapDealStages(reducerDealStages.dealHistoryStageList.data, reducerDealStages.dealStageTracking.data, reducerDealStages.currentDeal.phaseClassifier);
    dispatch(actionsDealStages.performRefreshStagesSuccess(stages));
    dispatch(actionsDeal.performRefreshStagesSuccess(stages));
};
export const prepareStageInputData = () => (dispatch) => {
    dispatch(actionsDealStages.prepareStageInputData());
};
export const prepareStageClassifierList = () => (dispatch, getState) => {
    let state = getState();
    let reducerDeal = state.user.mrmkmcibCRM.reducerDealStages;
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealStages.prepareStageClassifierList(util.getAccessibleStageList(reducerDeal.currentDeal.salesMethodClassifier, classifierDictionary.CRM_SALE_STAGE)));
};
export const navigateBack = () => (dispatch) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
    dispatch(actionsDealStages.navigateBack());
};
export const navigateBackWithResetData = () => (dispatch) => {
    dispatch(thunkDealStages.resetCheckFlags());
    dispatch(thunkDealStages.prepareStageInputData());
    dispatch(thunkDealStages.navigateBack());
    dispatch(actionsDealStages.navigateBackWithResetData());
};
export const navigateToPreviousForm = () => (dispatch) => {
    dispatch(thunkDeal.navigateDealBack(true));
    dispatch(actionsDealStages.navigateToPreviousForm());
};
export const performSaveStage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    dispatch(actionsDealStages.performSaveStage());
    if (!reducerState.receivingInputParametersInProgress) {
        dispatch(thunkDealStages.performReceivingInputParametersExecute());
    }
    dispatch(thunkDealStages.callGetStageTracking());
};
export const onSaveDealStageButtonTap = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    /*TODO отключение функционала в рамках релиза 2018-1
    if(reducerState.isSetClientStageChanges){
        dispatch(thunkDealStages.showDealStagesSavePopover(true))
    } else {
        dispatch(thunkDealStages.performSaveDealStage())
    }*/
    dispatch(thunkDealStages.performSaveDealStage());
};
export const navigateToAdditionalFields = (stage) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    let isDisabled = util.getDisableStatus(stage, reducerState.currentDeal.phaseClassifier, reducerState.dealPossibleStageList) || !reducerState.isStageListEnable;
    let isSelected = util.getSelectStatus(stage, reducerState.inputStage);
    if (isDisabled || isSelected) {
        return;
    }
    if (util.getSelectStatus(stage, reducerState.currentDeal.phaseClassifier)) {
        dispatch(actionsDealStages.navigateToAdditionalFields(stage));
        dispatch(thunkDealStages.setSaveStageEnableFlag(false));
    }
    else {
        dispatch(thunkDealStages.showError(false, ''));
        dispatch(thunkDealStages.resetCheckFlags());
        if (stage.code == reducerState.currentDeal.phaseClassifier.code) {
            dispatch(thunkDealStages.setSaveStageEnableFlag(false));
        }
        else {
            dispatch(thunkDealStages.setSaveStageEnableFlag(true));
        }
        dispatch(thunkDealStages.performChecks(stage));
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerDealStages;
        if (reducerState.isErrorEnable) {
            dispatch(thunkDealStages.setSaveStageEnableFlag(false));
            dispatch(actionsDealStages.navigateToAdditionalFields(reducerState.currentDeal.phaseClassifier));
            return;
        }
        else if (reducerState.isSetPlannedFinishDate ||
            reducerState.isSetCurrency ||
            reducerState.isSetMainClientManager ||
            reducerState.isSetMainCreditOfficer ||
            reducerState.isSetClientStageChanges ||
            reducerState.isSetMemberMonitoring) {
            if (!reducerState.isSetPlannedFinishDate &&
                !reducerState.isSetCurrency &&
                !reducerState.isSetMainClientManager &&
                !reducerState.isSetMainCreditOfficer &&
                !reducerState.isSetMemberMonitoring &&
                reducerState.isSetClientStageChanges) {
                dispatch(thunkDealStages.setSaveAdditionalFildsEnableFlag(true));
            }
            dispatch(thunkDealStages.performSetRejection(false));
            dispatch(thunkDealStages.showError(false, ''));
            dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealStage.AdditionalFields, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
        }
        else if (reducerState.isSetCloseReason) {
            dispatch(thunkDealStages.performSetRejection(true));
            dispatch(thunkDealStages.showError(false, ''));
            dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealStage.AdditionalFields, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
        }
        dispatch(actionsDealStages.navigateToAdditionalFields(stage));
    }
};
export const resetCheckFlags = () => (dispatch) => {
    dispatch(actionsDealStages.resetCheckFlags());
};
export const currentStageStatus = (stageStatus, isDisabled, isSelected, history, stageText) => (dispatch, getState) => {
    dispatch(actionsDealStages.currentStageStatus(stageStatus, isDisabled, isSelected, history, stageText));
};
export const setSaveStageEnableFlag = (isSaveStageEnable) => (dispatch) => {
    dispatch(actionsDealStages.setSaveStageEnableFlag(isSaveStageEnable));
};
export const showError = (isErrorEnable, errorMessage) => (dispatch) => {
    dispatch(actionsDealStages.showError(isErrorEnable, errorMessage));
};
export const performSetRejection = (isRejectin) => (dispatch) => {
    dispatch(actionsDealStages.performSetRejection(isRejectin));
};
export const performInputDealDate = (value) => (dispatch) => {
    dispatch(actionsDealStages.performInputDealDate(util.prepareDate(value)));
    dispatch(thunkDealStages.performValidateForm());
};
export const performInputEquivalentSumString = (value) => (dispatch) => {
    dispatch(thunkDealStages.performInputEquivalentSum(util.convertStringToNumber(value)));
    dispatch(actionsDealStages.performInputEquivalentSumString(value));
    dispatch(thunkDealStages.performValidateForm());
};
export const performInputEquivalentSum = (value) => (dispatch) => {
    dispatch(actionsDealStages.performInputEquivalentSum(value));
    dispatch(thunkDealStages.performValidateForm());
};
export const navigateToCurrencyPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(thunkClassifier.navigateToClassifier(util.getSortedCurrencyList(classifiers.CURRENCY), reducerState.inputCurrency && reducerState.inputCurrency.code || '', Enums.ClassifierMode.DealStage_Currency));
    dispatch(actionsDealStages.navigateToCurrencyPickerScreen());
};
export const showButtonPopoverMainClientManager = (isButtonPopoverOpenedMainClientManager) => (dispatch) => {
    dispatch(actionsDealStages.showButtonPopoverMainClientManager(isButtonPopoverOpenedMainClientManager));
};
export const showButtonPopoverMainCreditOfficer = (isButtonPopoverOpenedMainCreditOfficer) => (dispatch) => {
    dispatch(actionsDealStages.showButtonPopoverMainCreditOfficer(isButtonPopoverOpenedMainCreditOfficer));
};
export const showButtonPopoverMemberMonitoring = (isButtonPopoverOpenedMemberMonitoring) => (dispatch) => {
    dispatch(actionsDealStages.showButtonPopoverMemberMonitoring(isButtonPopoverOpenedMemberMonitoring));
};
export const showDealStagesSavePopover = (isDealStagesSavePopoverOpened) => (dispatch) => {
    dispatch(actionsDealStages.showDealStagesSavePopover(isDealStagesSavePopoverOpened));
};
export const performInputEmployeeSourceMainClientManager = (inputEmployeeSource) => (dispatch) => {
    dispatch(thunkDealStages.showButtonPopoverMainClientManager(false));
    dispatch(actionsDealStages.performInputEmployeeSourceMainClientManager(inputEmployeeSource));
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMainClientManager));
};
export const performInputEmployeeSourceMainCreditOfficer = (inputEmployeeSource) => (dispatch) => {
    dispatch(thunkDealStages.showButtonPopoverMainCreditOfficer(false));
    dispatch(actionsDealStages.performInputEmployeeSourceMainCreditOfficer(inputEmployeeSource));
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMainCreditOfficer));
};
export const performInputEmployeeSourceMemberMonitoring = (inputEmployeeSource) => (dispatch) => {
    dispatch(thunkDealStages.showButtonPopoverMemberMonitoring(false));
    dispatch(actionsDealStages.performInputEmployeeSourceMemberMonitoring(inputEmployeeSource));
    dispatch(thunkDealStages.navigateToMemberListScreen(Enums.MemberListMode.DealStageMemberMonitoring));
};
export const performInputComment = (inputComment) => (dispatch) => {
    dispatch(actionsDealStages.performInputComment(inputComment));
};
export const performInputMainClientManager = (inputMainClientManager) => (dispatch) => {
    dispatch(thunkDealStages.performInputMemberList(inputMainClientManager));
    dispatch(thunkDealStages.navigateBack());
    dispatch(actionsDealStages.performInputMainClientManager(inputMainClientManager));
    dispatch(thunkDealStages.performValidateForm());
};
export const performInputMainCreditOfficer = (inputMainCreditOfficer) => (dispatch) => {
    dispatch(thunkDealStages.performInputMemberList(inputMainCreditOfficer));
    dispatch(thunkDealStages.navigateBack());
    dispatch(actionsDealStages.performInputMainCreditOfficer(inputMainCreditOfficer));
    dispatch(thunkDealStages.performValidateForm());
};
export const performInputMemberMonitoring = (inputMemberMonitoring) => (dispatch) => {
    dispatch(thunkDealStages.performInputMemberList(inputMemberMonitoring));
    dispatch(thunkDealStages.navigateBack());
    dispatch(actionsDealStages.performInputMemberMonitoring(inputMemberMonitoring));
    dispatch(thunkDealStages.performValidateForm());
};
export const performInputMemberList = (inputMember) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.inputMemberList) {
        dispatch(actionsDealStages.performInputMemberList({ data: [...reducerState.inputMemberList.data, ...[inputMember]] }));
    }
    else {
        dispatch(actionsDealStages.performInputMemberList({ data: [...reducerState.currentDeal.memberList.data, ...[inputMember]] }));
    }
};
export const navigateToMemberListScreen = (mode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    // Dispatch thunk "performMemberListRefresh" synchronously.
    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, reducerState.currentDeal, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, mode, reducerState.inputEmployeeSource));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealStage.MemberList, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
    dispatch(actionsDealStages.navigateToMemberListScreen());
};
export const performInputCurrency = (value) => (dispatch) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
    dispatch(actionsDealStages.performInputCurrency(value));
    dispatch(thunkDealStages.performValidateForm());
};
export const performSelectRejection = (inputRejection) => (dispatch) => {
    dispatch(actionsDealStages.performSelectRejection(inputRejection));
    dispatch(thunkDealStages.performSaveDealAdditionalFields());
};
export const performValidateForm = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    let index = 0;
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
    if (index == 0) {
        dispatch(thunkDealStages.setSaveAdditionalFildsEnableFlag(true));
    }
    dispatch(actionsDealStages.performValidateForm());
};
export const setSaveAdditionalFildsEnableFlag = (isSaveAdditionalFieldsEnable) => (dispatch) => {
    dispatch(actionsDealStages.setSaveAdditionalFildsEnableFlag(isSaveAdditionalFieldsEnable));
};
//----------------------------------------------------------------------------------------------------------------------
export const performChecks = (stage) => (dispatch, getState) => {
    let state = getState();
    let currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    dispatch(actionsDealStages.performChecks(stage, currentUser.id));
};
//----------------------------------------------------------------------------------------------------------------------
export const performSaveDealAdditionalFields = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    dispatch(actionsDealStages.performSaveDealAdditionalFields());
    if (!reducerState.isSetPlannedFinishDate &&
        !reducerState.isSetCurrency &&
        !reducerState.isSetMainClientManager &&
        !reducerState.isSetMainCreditOfficer &&
        !reducerState.isSetMemberMonitoring &&
        reducerState.isSetClientStageChanges) {
        if (reducerState.isSetCloseReason && !reducerState.inputRejection.value) {
            dispatch(thunkDealStages.performSetRejection(true));
        }
        else {
            dispatch(thunkDealStages.navigateBack());
        }
    }
    else {
        if (!reducerState.saveDealAdditionalFieldsInProgress) {
            dispatch(thunkDealStages.performSaveDealAdditionalFieldsExecute());
        }
        dispatch(thunkDealStages.callPutDealUpdate());
    }
};
export const performSaveDealAdditionalFieldsExecute = () => (dispatch) => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsExecute());
};
export const performSaveDealAdditionalFieldsSuccess = () => (dispatch) => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsSuccess());
};
export const performSaveDealAdditionalFieldsFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.performSaveDealAdditionalFieldsFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const performSaveDealStage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.isDealStagesSavePopoverOpened) {
        dispatch(thunkDealStages.showDealStagesSavePopover(false));
    }
    dispatch(actionsDealStages.performSaveDealStage());
    if (!reducerState.saveDealStageInProgress) {
        dispatch(thunkDealStages.performSaveDealStageExecute());
    }
    dispatch(thunkDealStages.callPutDealStagesUpdate());
};
export const performSaveDealStageExecute = () => (dispatch) => {
    dispatch(actionsDealStages.performSaveDealStageExecute());
};
export const performSaveDealStageSuccess = () => (dispatch) => {
    dispatch(thunkDeal.performRefreshForce());
    dispatch(thunkDealStages.navigateToPreviousForm());
    setTimeout(() => {
        dispatch(actionsDealStages.performSaveDealStageSuccess());
    }, 2000);
};
export const performSaveDealStageFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.performSaveDealStageFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const performReceivingInputParameters = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    dispatch(actionsDealStages.performReceivingInputParameters());
    if (!reducerState.receivingInputParametersInProgress) {
        dispatch(thunkDealStages.performReceivingInputParametersExecute());
    }
    dispatch(thunkDealStages.callGetNextStages());
    /*TODO Отключение функционала в рамках релиза 2018-1
    if(reducerState.isAccessibleStages){
        dispatch(thunkDealStages.callGetStageTracking())
    } else {
        dispatch(thunkDealStages.callGetNextStages())
    }*/
};
export const performRefreshStagesSuccess = () => (dispatch, getState) => {
    const reducerDealStages = getState().user.mrmkmcibCRM.reducerDealStages;
    const stages = remapDealStages(reducerDealStages.dealHistoryStageList.data, reducerDealStages.dealStageTracking.data, reducerDealStages.currentDeal.phaseClassifier);
    dispatch(actionsDealStages.performRefreshStagesSuccess(stages));
    dispatch(actionsDeal.performRefreshStagesSuccess(stages));
};
export const performRefreshStagesFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.performRefreshStagesFailure(error));
};
export const performRefreshSelectedStage = (crmStage) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    const updatedDealStage = reducerState.stageList.find((dealStage) => reducerState.selectedStage.stage.value === dealStage.stage.value) ||
        defaultValues.dealStage;
    const updatedCrmStage = (updatedDealStage.crmStages || []).find((crmStageIterator) => crmStage.stage.value === crmStageIterator.stage.value) ||
        defaultValues.dealStage;
    if (updatedCrmStage) {
        updatedCrmStage.comment = crmStage.comment;
        updatedCrmStage.durationEstimate = crmStage.durationEstimate;
        updatedCrmStage.end = crmStage.end;
        updatedDealStage.comment = fillDealComment(updatedDealStage.crmStages || []);
        updatedDealStage.durationEstimate = fillDealTermEstimate(updatedDealStage.crmStages || []);
        updatedDealStage.end = crmStage.end;
        dispatch(actionsDealStages.navigateToStageDetails(updatedDealStage, reducerState.activePosition));
    }
};
export const performRefreshStages = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealStageTrackingFetching) {
        return;
    }
    dispatch(actionsDealStages.callGetDealStageTracking());
    if (!reducerState.dealStageTrackingFetching) {
        dispatch(thunkDealStages.callGetDealStageTrackingExecute());
        util.call(util.urlDealStages.callGetDealStageTracking(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callGetDealStageTrackingSuccess(response));
            dispatch(thunkDealStages.callGetNextStages());
            util.call(util.urlDealStages.callGetHistoryStages(state, reducerState, [
                { tag: Enums.CachePolicy.Disabled },
            ]), (response) => {
                dispatch(thunkDealStages.callGetHistoryStagesSuccess(response));
                dispatch(thunkDealStages.performRefreshStagesSuccess());
            }, (error) => {
                dispatch(thunkDealStages.callGetHistoryStagesFailure(error));
                dispatch(thunkDealStages.performRefreshStagesFailure(error));
            }, Converters.RESPONSE_CALL_GET_HISTORY_STAGE_TO_DEAL_HISTORY_STAGE_LIST, 'GET');
        }, (error) => {
            dispatch(thunkDealStages.callGetDealStageTrackingFailure(error));
            dispatch(thunkDealStages.performReceivingInputParametersFailure(error));
        }, Converters.RESPONSE_CALL_GET_DEAL_STAGE_TRACKING_TO_DEAL_STAGES, 'GET');
    }
};
export const performReceivingInputParametersExecute = () => (dispatch) => {
    dispatch(actionsDealStages.performReceivingInputParametersExecute());
};
export const performReceivingInputParametersSuccess = () => (dispatch) => {
    dispatch(actionsDealStages.performReceivingInputParametersSuccess());
};
export const performReceivingInputParametersFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.performReceivingInputParametersFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callGetCurrentDeal = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.currentDealFetching) {
        return;
    }
    dispatch(actionsDealStages.callGetCurrentDeal());
    if (!reducerState.currentDealFetching) {
        dispatch(thunkDealStages.callGetCurrentDealExecute());
        util.call(util.urlDealStages.callGetCurrentDeal(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callGetCurrentDealSuccess(response));
        }, (error) => {
            dispatch(thunkDealStages.callGetCurrentDealFailure(error));
        }, Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod, state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary, state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged), 'GET');
    }
};
export const callGetCurrentDealExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callGetCurrentDealExecute());
};
export const callGetCurrentDealSuccess = (currentDeal) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.isSetCloseReason && !reducerState.inputRejection.value) {
        dispatch(thunkDealStages.performSetRejection(true));
    }
    else {
        dispatch(thunkDealStages.navigateBack());
    }
    setTimeout(() => {
        dispatch(thunkDealStages.performSaveDealAdditionalFieldsSuccess());
    }, 1000);
    dispatch(actionsDealStages.callGetCurrentDealSuccess(currentDeal.data));
};
export const callGetCurrentDealFailure = (error) => (dispatch) => {
    dispatch(thunkDealStages.performSaveDealAdditionalFieldsFailure(error));
    dispatch(actionsDealStages.callGetCurrentDealFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callGetStageTracking = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealStageTrackingFetching) {
        return;
    }
    dispatch(actionsDealStages.callGetDealStageTracking());
    if (!reducerState.dealStageTrackingFetching) {
        dispatch(thunkDealStages.callGetDealStageTrackingExecute());
        util.call(util.urlDealStages.callGetDealStageTracking(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callGetDealStageTrackingSuccess(response));
            dispatch(thunkDealStages.callGetNextStages());
        }, (error) => {
            dispatch(thunkDealStages.callGetDealStageTrackingFailure(error));
            dispatch(thunkDealStages.performReceivingInputParametersFailure(error));
        }, Converters.RESPONSE_CALL_GET_DEAL_STAGE_TRACKING_TO_DEAL_STAGES, 'GET');
    }
};
export const callGetDealStageTrackingExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callGetDealStageTrackingExecute());
};
export const callGetDealStageTrackingSuccess = (dealStageTracking) => (dispatch) => {
    dispatch(actionsDealStages.callGetDealStageTrackingSuccess(dealStageTracking.data));
};
export const callGetDealStageTrackingFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.callGetDealStageTrackingFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callGetNextStages = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealPossibleStageListFetching) {
        return;
    }
    dispatch(actionsDealStages.callGetNextStages());
    if (!reducerState.dealPossibleStageListFetching) {
        dispatch(thunkDealStages.callGetNextStagesExecute());
        util.call(util.urlDealStages.callGetNextStages(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callGetNextStagesSuccess(response));
            dispatch(thunkDealStages.callGetHistoryStages());
        }, (error) => {
            dispatch(thunkDealStages.callGetNextStagesFailure(error));
            dispatch(thunkDealStages.performReceivingInputParametersFailure(error));
        }, Converters.RESPONSE_CALL_GET_NEXT_STAGE_TO_NEXT_STAGES, 'GET');
    }
};
export const callGetNextStagesExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callGetNextStagesExecute());
};
export const callGetNextStagesSuccess = (dealPossibleStageList) => (dispatch) => {
    dispatch(actionsDealStages.callGetNextStagesSuccess(dealPossibleStageList.data));
};
export const callGetNextStagesFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.callGetNextStagesFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callGetHistoryStages = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealHistoryStageListFetching) {
        return;
    }
    dispatch(actionsDealStages.callGetHistoryStages());
    if (!reducerState.dealHistoryStageListFetching) {
        dispatch(thunkDealStages.callGetHistoryStagesExecute());
        util.call(util.urlDealStages.callGetHistoryStages(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callGetHistoryStagesSuccess(response));
            dispatch(thunkDealStages.performReceivingInputParametersSuccess());
        }, (error) => {
            dispatch(thunkDealStages.callGetHistoryStagesFailure(error));
            dispatch(thunkDealStages.performReceivingInputParametersFailure(error));
        }, Converters.RESPONSE_CALL_GET_HISTORY_STAGE_TO_DEAL_HISTORY_STAGE_LIST, 'GET');
    }
};
export const callGetHistoryStagesExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callGetHistoryStagesExecute());
};
export const callGetHistoryStagesSuccess = (dealHistoryStageList) => (dispatch) => {
    dispatch(actionsDealStages.callGetHistoryStagesSuccess(dealHistoryStageList.data));
};
export const callGetHistoryStagesFailure = (error) => (dispatch) => {
    dispatch(actionsDealStages.callGetHistoryStagesFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callPutDealUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealUpdateFetching) {
        return;
    }
    dispatch(actionsDealStages.callPutDealUpdate());
    if (!reducerState.dealUpdateFetching) {
        dispatch(thunkDealStages.callPutDealUpdateExecute());
        util.call(util.urlDealStages.callPutDealUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callPutDealUpdateSuccess());
        }, (error) => {
            dispatch(thunkDealStages.callPutDealUpdateFailure(error));
        }, Converters.RESPONSE_CALL_PUT_DEAL_UPDATE_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.operationUuid
        }, Converters.REQUEST_CALL_PUT_DEAL_UPDATE_FROM_CALL_PUT_DEAL_REQUEST, {
            accountId: reducerState.currentCustomerManaged.id,
            currentDeal: reducerState.currentDeal,
            closeReason: reducerState.inputRejection.code
                ? reducerState.inputRejection
                : null,
            plannedFinishDate: reducerState.inputDealDate
                ? reducerState.inputDealDate
                : null,
            sumInCurrencyEkv: reducerState.inputEquivalentSumString
                ? reducerState.inputEquivalentSumString
                : null,
            currencyClassifier: reducerState.inputCurrency
                ? reducerState.inputCurrency
                : null,
            memberList: reducerState.inputMemberList
                ? reducerState.inputMemberList
                : reducerState.currentDeal.memberList,
        });
    }
};
export const callPutDealUpdateExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callPutDealUpdateExecute());
};
export const callPutDealUpdateSuccess = () => (dispatch) => {
    dispatch(thunkDealStages.callGetCurrentDeal());
    dispatch(actionsDealStages.callPutDealUpdateSuccess());
};
export const callPutDealUpdateFailure = (error) => (dispatch) => {
    dispatch(thunkDealStages.performSaveDealAdditionalFieldsFailure(error));
    dispatch(actionsDealStages.callPutDealUpdateFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callPutDealStagesUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealStagesUpdateFetching) {
        return;
    }
    dispatch(actionsDealStages.callPutDealStagesUpdate());
    if (!reducerState.dealStagesUpdateFetching) {
        dispatch(thunkDealStages.callPutDealStagesUpdateExecute());
        util.call(util.urlDealStages.callPutDealStagesUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callPutDealStagesUpdateSuccess());
        }, (error) => {
            dispatch(thunkDealStages.callPutDealStagesUpdateFailure(error));
        }, Converters.RESPONSE_CALL_PUT_DEAL_STAGES_UPDATE_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.operationUuid
        }, Converters.REQUEST_CALL_PUT_DEAL_STAGES_UPDATE_TO_DEAL_UPDATE_REQUEST, {
            accountId: reducerState.currentCustomerManaged.id,
            operationUuid: reducerState.operationUuid,
            currentDeal: reducerState.currentDeal,
            phaseClassifier: reducerState.inputStage,
            products: reducerState.currentDeal.products,
        });
    }
};
export const callPutDealStagesUpdateExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callPutDealStagesUpdateExecute());
};
export const callPutDealStagesUpdateSuccess = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.inputComment) {
        dispatch(thunkDealStages.callPutDealStageTrackingUpdate());
    }
    else {
        dispatch(thunkDealStages.performSaveDealStageSuccess());
    }
    dispatch(actionsDealStages.callPutDealStagesUpdateSuccess());
};
export const callPutDealStagesUpdateFailure = (error) => (dispatch) => {
    dispatch(thunkDealStages.performSaveDealStageFailure(error));
    dispatch(actionsDealStages.callPutDealStagesUpdateFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const callPutDealStageTrackingUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealStages;
    if (reducerState.dealStagesTrackingUpdateFetching) {
        return;
    }
    const trackingElement = util.getTrackingElement.byCrmStage(reducerState.dealStageTracking, reducerState.inputStage.value);
    const now = moment();
    const updatedComment = `${util.getAgentNameInitials(state.user.mrmkmcibCRM.reducerAppCRM.currentUser)} (${now.format('HH:mm:ss Z, DD.MM.YYYY')}):\n${reducerState.inputComment}\n${trackingElement && trackingElement.comment}`;
    dispatch(actionsDealStages.callPutDealStageTrackingUpdate());
    if (!reducerState.dealStagesTrackingUpdateFetching) {
        dispatch(thunkDealStages.callPutDealStageTrackingUpdateExecute());
        util.call(util.urlDealStages.callPutDealStageTrackingUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(thunkDealStages.callPutDealStageTrackingUpdateSuccess());
        }, (error) => {
            dispatch(thunkDealStages.callPutDealStageTrackingUpdateFailure(error));
        }, Converters.RESPONSE_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.operationUuid
        }, Converters.REQUEST_DEAL_STAGE_TRACKING_UPDATE_FROM_DEAL_STAGE_UPDATE_REQUEST, {
            dealId: reducerState.currentDeal.id,
            inputStage: reducerState.inputStage,
            comment: updatedComment,
            trackingList: reducerState.dealStageTracking
        });
    }
};
export const callPutDealStageTrackingUpdateExecute = () => (dispatch) => {
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateExecute());
};
export const callPutDealStageTrackingUpdateSuccess = () => (dispatch) => {
    dispatch(thunkDealStages.performSaveDealStageSuccess());
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateSuccess());
};
export const callPutDealStageTrackingUpdateFailure = (error) => (dispatch) => {
    dispatch(thunkDealStages.performSaveDealStageFailure(error));
    dispatch(actionsDealStages.callPutDealStageTrackingUpdateFailure(error));
};
//----------------------------------------------------------------------------------------------------------------------
export const navigateToStageDetails = (stage, activePosition) => (dispatch) => {
    dispatch(actionsDeal.performExpandScreen(true));
    dispatch(actionsDealStages.navigateToStageDetails(stage, activePosition));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealStage.StageDetails, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)));
};
export const performClientRoadMapNext = () => (dispatch) => {
    dispatch(actionsDealStages.performClientRoadMapNext());
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_YesDoIt, util.getNavigationContentStringDealRoadMapPopover(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_Zero)));
};
export const performPopoverClientRoadMapShow = () => (dispatch) => {
    dispatch(actionsDealStages.performPopoverClientRoadMapShow());
};
export const performPopoverClientRoadMapHide = () => (dispatch) => {
    dispatch(actionsDealStages.performPopoverClientRoadMapHide());
};
export const performChangeStageTab = (index) => (dispatch, getState) => {
    dispatch(actionsDealStages.performChangeStageTab(index));
    const reducerDealStages = getState().user.mrmkmcibCRM.reducerDealStages;
    const stages = remapDealStages(reducerDealStages.dealHistoryStageList.data, reducerDealStages.dealStageTracking.data, reducerDealStages.currentDeal.phaseClassifier);
    dispatch(actionsDealStages.performRefreshStagesSuccess(stages));
    dispatch(actionsDeal.performRefreshStagesSuccess(stages));
};
export const performPopoverClientRoadMapHelpShow = () => (dispatch) => {
    dispatch(actionsDealStages.performPopoverClientRoadMapHelpShow());
};
export const performPopoverClientRoadMapHelpHide = () => (dispatch) => {
    dispatch(actionsDealStages.performPopoverClientRoadMapHelpHide());
};
export const performClientRoadMapActivate = () => (dispatch, getState) => {
    let state = getState();
    let currentDeal = state.user.mrmkmcibCRM.reducerDealEditor.currentDeal;
    dispatch(actionsDealStages.performClientRoadMapActivate());
    dispatch(thunkDealStages.callPutDealRoadMapSwitch(!currentDeal.isRoadMapShow));
};
export const callPutDealRoadMapSwitch = (enable) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentDeal = state.user.mrmkmcibCRM.reducerDeal.currentDeal;
    if (reducerState.dealUpdateFetching) {
        return;
    }
    dispatch(actionsDealStages.callPutDealRoadMapSwitchUpdate());
    dispatch(actionsDealStages.performRoadMapSwitchButtonDisabled(true));
    if (!reducerState.dealUpdateFetching) {
        dispatch(actionsDealStages.callPutDealRoadMapSwitchRequest());
        util.call(util.urlDealEditor.callPutDealUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(actionsDealStages.callPutDealUpdateRoadMapStatus(enable));
            dispatch(actionsDealStages.callPutDealRoadMapSwitchRequestSuccess());
            dispatch(actionsDealStages.performSaveRoadMapSwitchSuccess());
        }, (error) => {
            dispatch(actionsDealStages.performRoadMapSwitchButtonDisabled(false));
            dispatch(actionsDealStages.performSaveRoadMapSwitchFailure(error));
        }, Converters.RESPONSE_DEAL_UPDATE_CALL_PUT_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.operationUuidUpdate
        }, Converters.REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_ROAD_MAP_FROM_DEAL_UPDATE_REQUEST, {
            accountId: reducerState.currentCustomerManaged.id,
            isRoadMapShow: enable,
            title: currentDeal.title,
            requestType: currentDeal.requestTypeClassifier || defaultValues.Classifier,
            salesMethodClassifier: currentDeal.salesMethodClassifier || defaultValues.Classifier,
            id: currentDeal.id,
            modId: currentDeal.modId,
        });
    }
};
//# sourceMappingURL=ThunkDealStages.js.map