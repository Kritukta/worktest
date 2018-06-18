/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude';
import ViewCustomerActivityExclude from '../components/ViewCustomerActivityExclude';
/*
 * Container "CustomerActivityExclude". Customer exclude activity screen.
 */
class ContainerCustomerActivityExclude extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewCustomerActivityExclude, { testID: 'test-id-container-CustomerActivityExclude', inputMemberList: this.props.inputMemberList, navigateToMemberListScreenPage: this.props.navigateToMemberListScreenPage, navigateToCustomerPickerScreen: this.props.navigateToCustomerPickerScreen, performInputSearchManagedOnly: this.props.performInputSearchManagedOnly, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performInputCustomer: this.props.performInputCustomer, callGetCustomer: this.props.callGetCustomer, performInputComment: this.props.performInputComment, performCancel: this.props.performCancel, performSave: this.props.performSave, callPostCustomerActivityExcludeCreate: this.props.callPostCustomerActivityExcludeCreate, navigateBack: this.props.navigateBack, performContainerReset: this.props.performContainerReset, inputSearch: this.props.inputSearch, customerSearchList: this.props.customerSearchList, inputSearchManagedOnly: this.props.inputSearchManagedOnly, inputCustomer: this.props.inputCustomer, inputComment: this.props.inputComment, operationUuid: this.props.operationUuid, customerActivityExcludeValidationComment: this.props.customerActivityExcludeValidationComment, customerActivityExcludeValidationCustomer: this.props.customerActivityExcludeValidationCustomer, inputCustomerFetching: this.props.inputCustomerFetching, inputCustomerError: this.props.inputCustomerError, inputCustomerCachedDate: this.props.inputCustomerCachedDate, activitySave: this.props.activitySave, activitySaveInProgress: this.props.activitySaveInProgress, activitySaveError: this.props.activitySaveError, activityExcludeCreate: this.props.activityExcludeCreate, activityExcludeCreateFetching: this.props.activityExcludeCreateFetching, activityExcludeCreateError: this.props.activityExcludeCreateError, activityExcludeCreateCachedDate: this.props.activityExcludeCreateCachedDate, searchInProgress: this.props.searchInProgress, searchError: this.props.searchError, currentCustomerManaged: this.props.currentCustomerManaged, currentCustomer: this.props.currentCustomer, isVisibleErrorModalWindow: this.props.isVisibleErrorModalWindow, performCancelSearchCustomer: this.props.performCancelSearchCustomer, performChangeDisplayErrorModalWindow: this.props.performChangeDisplayErrorModalWindow }));
    }
}
function mapStateToProps(state) {
    return {
        inputMemberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        inputSearch: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputSearch,
        customerSearchList: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.operationUuid,
        customerActivityExcludeValidationComment: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerActivityExcludeValidationComment,
        customerActivityExcludeValidationCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerActivityExcludeValidationCustomer,
        inputCustomerFetching: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerFetching,
        inputCustomerError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerError,
        inputCustomerCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.inputCustomerCachedDate,
        activitySave: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activitySaveError,
        activityExcludeCreate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreate,
        activityExcludeCreateFetching: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateFetching,
        activityExcludeCreateError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateError,
        activityExcludeCreateCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.activityExcludeCreateCachedDate,
        searchInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchListFetching,
        searchError: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.customerSearchListError || state.user.mrmkmcibCRM.reducerCustomerActivityExclude.searchError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        isVisibleErrorModalWindow: state.user.mrmkmcibCRM.reducerCustomerActivityExclude.isVisibleErrorModalWindow,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToMemberListScreenPage: () => {
            dispatch(thunkCustomerActivityExclude.navigateToMemberListScreenPage());
        },
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkCustomerActivityExclude.navigateToCustomerPickerScreen());
        },
        performInputSearchManagedOnly: (value) => {
            dispatch(thunkCustomerActivityExclude.performInputSearchManagedOnly(value));
        },
        performInputSearch: (value) => {
            dispatch(thunkCustomerActivityExclude.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkCustomerActivityExclude.performSearchReset());
        },
        performSearch: () => {
            dispatch(thunkCustomerActivityExclude.performSearch());
        },
        performInputCustomer: (customer) => {
            dispatch(thunkCustomerActivityExclude.performInputCustomer(customer));
        },
        callGetCustomer: () => {
            dispatch(thunkCustomerActivityExclude.callGetCustomer());
        },
        performInputComment: (value) => {
            dispatch(thunkCustomerActivityExclude.performInputComment(value));
        },
        performCancel: () => {
            dispatch(thunkCustomerActivityExclude.performCancel());
        },
        performSave: () => {
            dispatch(thunkCustomerActivityExclude.performSave());
        },
        callPostCustomerActivityExcludeCreate: () => {
            dispatch(thunkCustomerActivityExclude.callPostCustomerActivityExcludeCreate());
        },
        navigateBack: () => {
            dispatch(thunkCustomerActivityExclude.navigateBack());
        },
        performContainerReset: () => {
            dispatch(thunkCustomerActivityExclude.performContainerReset());
        },
        performChangeDisplayErrorModalWindow: () => {
            dispatch(thunkCustomerActivityExclude.performChangeDisplayErrorModalWindow());
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkCustomerActivityExclude.performCancelSearchCustomer());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCustomerActivityExclude);
//# sourceMappingURL=ContainerCustomerActivityExclude.js.map