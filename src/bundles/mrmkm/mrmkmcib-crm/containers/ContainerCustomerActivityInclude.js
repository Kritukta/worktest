/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude';
import ViewCustomerActivityInclude from '../components/ViewCustomerActivityInclude';
/*
 * Container "CustomerActivityInclude". Customer include activity screen.
 */
class ContainerCustomerActivityInclude extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewCustomerActivityInclude, { testID: 'test-id-container-CustomerActivityInclude', inputMemberList: this.props.inputMemberList, navigateToMemberListScreenPage: this.props.navigateToMemberListScreenPage, navigateToCustomerPickerScreen: this.props.navigateToCustomerPickerScreen, performInputSearchManagedOnly: this.props.performInputSearchManagedOnly, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performInputCustomer: this.props.performInputCustomer, callGetCustomer: this.props.callGetCustomer, performInputComment: this.props.performInputComment, performCancel: this.props.performCancel, performSave: this.props.performSave, callPostCustomerActivityIncludeCreate: this.props.callPostCustomerActivityIncludeCreate, navigateBack: this.props.navigateBack, performContainerReset: this.props.performContainerReset, inputSearch: this.props.inputSearch, customerSearchError: this.props.customerSearchError, isSearchError: this.props.isSearchError, customerSearchList: this.props.customerSearchList, inputSearchManagedOnly: this.props.inputSearchManagedOnly, inputCustomer: this.props.inputCustomer, inputComment: this.props.inputComment, operationUuid: this.props.operationUuid, customerActivityIncludeValidationComment: this.props.customerActivityIncludeValidationComment, customerActivityIncludeValidationCustomer: this.props.customerActivityIncludeValidationCustomer, search: this.props.search, searchInProgress: this.props.searchInProgress, searchError: this.props.searchError, inputCustomerFetching: this.props.inputCustomerFetching, inputCustomerError: this.props.inputCustomerError, inputCustomerCachedDate: this.props.inputCustomerCachedDate, activitySave: this.props.activitySave, activitySaveInProgress: this.props.activitySaveInProgress, activitySaveError: this.props.activitySaveError, activityIncludeCreate: this.props.activityIncludeCreate, activityIncludeCreateFetching: this.props.activityIncludeCreateFetching, activityIncludeCreateError: this.props.activityIncludeCreateError, activityIncludeCreateCachedDate: this.props.activityIncludeCreateCachedDate, performChangeDisplayErrorModalWindow: this.props.performChangeDisplayErrorModalWindow, currentCustomer: this.props.currentCustomer, isVisibleErrorModalWindow: this.props.isVisibleErrorModalWindow, performCancelSearchCustomer: this.props.performCancelSearchCustomer, currentCustomerManaged: this.props.currentCustomerManaged }));
    }
}
function mapStateToProps(state) {
    return {
        inputMemberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        inputSearch: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearch,
        customerSearchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerSearchError,
        isSearchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.isSearchError,
        customerSearchList: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.operationUuid,
        customerActivityIncludeValidationComment: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerActivityIncludeValidationComment,
        customerActivityIncludeValidationCustomer: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.customerActivityIncludeValidationCustomer,
        search: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.search,
        searchInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.searchInProgress,
        searchError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.searchError,
        inputCustomerFetching: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerFetching,
        inputCustomerError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerError,
        inputCustomerCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.inputCustomerCachedDate,
        activitySave: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activitySaveError,
        activityIncludeCreate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreate,
        activityIncludeCreateFetching: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateFetching,
        activityIncludeCreateError: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateError,
        activityIncludeCreateCachedDate: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.activityIncludeCreateCachedDate,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        isVisibleErrorModalWindow: state.user.mrmkmcibCRM.reducerCustomerActivityInclude.isVisibleErrorModalWindow,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToMemberListScreenPage: () => {
            dispatch(thunkCustomerActivityInclude.navigateToMemberListScreenPage());
        },
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkCustomerActivityInclude.navigateToCustomerPickerScreen());
        },
        performInputSearchManagedOnly: (value) => {
            dispatch(thunkCustomerActivityInclude.performInputSearchManagedOnly(value));
        },
        performInputSearch: (value) => {
            dispatch(thunkCustomerActivityInclude.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkCustomerActivityInclude.performSearchReset());
        },
        performSearch: () => {
            dispatch(thunkCustomerActivityInclude.performSearch());
        },
        performInputCustomer: (customer) => {
            dispatch(thunkCustomerActivityInclude.performInputCustomer(customer));
        },
        callGetCustomer: () => {
            dispatch(thunkCustomerActivityInclude.callGetCustomer());
        },
        performInputComment: (value) => {
            dispatch(thunkCustomerActivityInclude.performInputComment(value));
        },
        performCancel: () => {
            dispatch(thunkCustomerActivityInclude.performCancel());
        },
        performSave: () => {
            dispatch(thunkCustomerActivityInclude.performSave());
        },
        callPostCustomerActivityIncludeCreate: () => {
            dispatch(thunkCustomerActivityInclude.callPostCustomerActivityIncludeCreate());
        },
        navigateBack: () => {
            dispatch(thunkCustomerActivityInclude.navigateBack());
        },
        performContainerReset: () => {
            dispatch(thunkCustomerActivityInclude.performContainerReset());
        },
        performChangeDisplayErrorModalWindow: () => {
            dispatch(thunkCustomerActivityInclude.performChangeDisplayErrorModalWindow());
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkCustomerActivityInclude.performCancelSearchCustomer());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCustomerActivityInclude);
//# sourceMappingURL=ContainerCustomerActivityInclude.js.map