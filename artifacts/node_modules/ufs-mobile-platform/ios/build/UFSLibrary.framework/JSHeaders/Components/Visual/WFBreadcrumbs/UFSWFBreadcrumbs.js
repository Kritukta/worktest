import { connect } from 'react-redux';
import { Workflow } from '../../NonVisual/Components/Workflow';
import { Breadcrumbs } from '../Breadcrumbs/';
function getHistory(wfHistory = []) {
    const reversed = wfHistory.slice().reverse();
    if (reversed.length === 0) {
        return [[]];
    }
    const last = reversed[reversed.length - 1];
    const filterByFlowId = last.flowId !== undefined;
    const getFlow = (item) => filterByFlowId ? item.flowId : item.flow;
    const currFlow = getFlow(last);
    const result = reversed
        .filter(item => getFlow(item) === currFlow && item.status !== 'HIDDEN')
        .map(item => ({
        accessible: item.status === 'ACTIVE',
        title: item.title,
        key: item.id
    }));
    return [result];
}
function getLastItemKey(wfHistory = []) {
    const lastItem = wfHistory !== undefined && wfHistory.length ? wfHistory[0] : undefined;
    return lastItem !== undefined ? lastItem.id : undefined;
}
const mapStateToProps = (state) => {
    return {
        history: getHistory(state.workflow.history),
        selectedKey: getLastItemKey(state.workflow.history)
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onNavigate: (item) => Workflow.rollbackState(item.key)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
//# sourceMappingURL=UFSWFBreadcrumbs.js.map