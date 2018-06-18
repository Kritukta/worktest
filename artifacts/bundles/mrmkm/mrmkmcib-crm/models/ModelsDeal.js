/**
 * Models for Deal container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            isDealExpandedMode: false,
            isEditDealEnable: false,
            currentDeal: defaultValues.Deal,
            currentDealId: '',
            dealRoute: [],
            currentMode: Enums.DealMode.CommonBack,
            isExtraInfoExpanded: false,
            agreementPopoverData: null,
            agreementPopoverTarget: null,
            expandedAgreementRowIndex: -1,
            supParameters: {
                DealSalesMethod: '',
                DealApprovedStatusList: '',
                DealSalesMethodRoadMapStandard: '',
                DealSalesMethodRoadMapCredit: '',
            },
            isVisibleModalPhaseSwitchQuestion: false,
            isVisibleModalDealCloseResult: false,
            currentDealPhase: defaultValues.Classifier,
            inputDealCloseResult: defaultValues.Classifier,
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            currentDealFetching: false,
            currentDealError: null,
            currentDealCachedDate: null,
            isVisiblePopoverDecision: false,
            decisionPopoverData: null,
            decisionPopoverTarget: '',
            isReadOnlyStages: true,
            selectedStage: null,
            currentStageTab: 0,
            isVisiblePopoverClientRoadMapHelp: false,
            isVisiblePopoverClientRoadMap: false,
            //Список представителей по сделкуе
            dealAgentListFetching: false,
            dealAgentListError: null,
            dealAgentListCachedDate: null,
            dealAgentList: defaultValues.AgentList,
            dealCrmStages: defaultValues.EmptyList,
            dealCrmStagesFetching: false,
            dealCrmStagesError: null,
            dealRefreshMode: null,
            navigationInProgress: false,
            navigationType: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDeal.js.map