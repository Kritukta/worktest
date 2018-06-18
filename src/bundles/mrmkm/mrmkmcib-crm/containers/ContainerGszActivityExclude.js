/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude';
import ViewGszActivityExclude from '../components/ViewGszActivityExclude';
/*
 * Container "GszActivityExclude". GSZ exclude activity screen.
 */
class ContainerGszActivityExclude extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewGszActivityExclude, { testID: 'test-id-container-GszActivityExclude', searchInProgress: this.props.searchInProgress, navigateToCustomerPickerScreen: this.props.navigateToCustomerPickerScreen, performInputSearchManagedOnly: this.props.performInputSearchManagedOnly, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performInputCustomer: this.props.performInputCustomer, performInputComment: this.props.performInputComment, performCancel: this.props.performCancel, performSave: this.props.performSave, callPostGszActivityExcludeCreate: this.props.callPostGszActivityExcludeCreate, navigateBack: this.props.navigateBack, performContainerReset: this.props.performContainerReset, searchError: this.props.searchError, inputSearch: this.props.inputSearch, customerSearchList: this.props.customerSearchList, inputSearchManagedOnly: this.props.inputSearchManagedOnly, inputCustomer: this.props.inputCustomer, inputComment: this.props.inputComment, operationUuid: this.props.operationUuid, gszActivityExcludeValidationComment: this.props.gszActivityExcludeValidationComment, gszActivityExcludeValidationCustomer: this.props.gszActivityExcludeValidationCustomer, activitySave: this.props.activitySave, activitySaveInProgress: this.props.activitySaveInProgress, activitySaveError: this.props.activitySaveError, activityExcludeCreate: this.props.activityExcludeCreate, activityExcludeCreateFetching: this.props.activityExcludeCreateFetching, activityExcludeCreateError: this.props.activityExcludeCreateError, activityExcludeCreateCachedDate: this.props.activityExcludeCreateCachedDate, currentUser: this.props.currentUser, currentCustomerManaged: this.props.currentCustomerManaged, navigateToMemberListScreen: this.props.navigateToMemberListScreen, memberList: this.props.memberList, performCancelSearchCustomer: this.props.performCancelSearchCustomer, currentGsz: this.props.currentGsz, isVisibleModalActivityError: this.props.isVisibleModalActivityError, performChangeVisibleErrorModal: this.props.performChangeVisibleErrorModal }));
    }
}
function mapStateToProps(state) {
    return {
        inputSearch: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputSearch,
        customerSearchList: state.user.mrmkmcibCRM.reducerGszActivityExclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerGszActivityExclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerGszActivityExclude.operationUuid,
        gszActivityExcludeValidationComment: state.user.mrmkmcibCRM.reducerGszActivityExclude.gszActivityExcludeValidationComment,
        gszActivityExcludeValidationCustomer: state.user.mrmkmcibCRM.reducerGszActivityExclude.gszActivityExcludeValidationCustomer,
        activitySave: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerGszActivityExclude.activitySaveError,
        searchInProgress: state.user.mrmkmcibCRM.reducerGszActivityExclude.searchInProgress,
        activityExcludeCreate: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreate,
        activityExcludeCreateFetching: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateFetching,
        activityExcludeCreateError: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateError,
        activityExcludeCreateCachedDate: state.user.mrmkmcibCRM.reducerGszActivityExclude.activityExcludeCreateCachedDate,
        isVisibleModalActivityError: state.user.mrmkmcibCRM.reducerGszActivityExclude.isVisibleModalActivityError,
        searchError: state.user.mrmkmcibCRM.reducerGszActivityExclude.searchError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentGsz: state.user.mrmkmcibCRM.reducerGSZ.currentGsz,
        memberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkGszActivityExclude.navigateToCustomerPickerScreen());
        },
        performInputSearchManagedOnly: (value) => {
            dispatch(thunkGszActivityExclude.performInputSearchManagedOnly(value));
        },
        performInputSearch: (value) => {
            dispatch(thunkGszActivityExclude.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkGszActivityExclude.performSearchReset());
        },
        performSearch: () => {
            dispatch(thunkGszActivityExclude.performSearch());
        },
        performInputCustomer: (customer) => {
            dispatch(thunkGszActivityExclude.performInputCustomer(customer));
        },
        performInputComment: (value) => {
            dispatch(thunkGszActivityExclude.performInputComment(value));
        },
        performCancel: () => {
            dispatch(thunkGszActivityExclude.performCancel());
        },
        performSave: () => {
            dispatch(thunkGszActivityExclude.performSave());
        },
        callPostGszActivityExcludeCreate: () => {
            dispatch(thunkGszActivityExclude.callPostGszActivityExcludeCreate());
        },
        navigateBack: () => {
            dispatch(thunkGszActivityExclude.navigateBack());
        },
        performContainerReset: () => {
            dispatch(thunkGszActivityExclude.performContainerReset());
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkGszActivityExclude.navigateToMemberListScreen());
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkGszActivityExclude.performCancelSearchCustomer());
        },
        performChangeVisibleErrorModal: (status) => {
            dispatch(thunkGszActivityExclude.performChangeVisibleErrorModal(status));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerGszActivityExclude);
//# sourceMappingURL=ContainerGszActivityExclude.js.map