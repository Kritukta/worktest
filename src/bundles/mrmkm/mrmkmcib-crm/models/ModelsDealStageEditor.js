/**
 * Models for DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */
import { defaultValues } from "./Models";
// TODO Describe models used in DealStageEditor actions and thunks.
const defaultState = {
    get state() {
        return {
            dealStageSaving: false,
            dealStageSavingError: null,
            isVisiblePopoverStagesEditorConfirm: false,
            isRoadMapShowOn: false,
            currentDeal: defaultValues.Deal,
            activePosition: -1,
            commentText: '',
            inputStageEndDate: new Date(),
            inputStageTerm: '',
            inputComment: '',
            stage: Object.assign({}, defaultValues.dealStage),
            crmStage: Object.assign({}, defaultValues.dealStage),
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDealStageEditor.js.map