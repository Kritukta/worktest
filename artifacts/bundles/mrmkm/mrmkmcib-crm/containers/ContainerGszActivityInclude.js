/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude';
import ViewGszActivityInclude from '../components/ViewGszActivityInclude';
/*
 * Container "GszActivityInclude". GSZ include activity screen.
 */
class ContainerGszActivityInclude extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewGszActivityInclude, { testID: 'test-id-container-GszActivityInclude', navigateToCustomerPickerScreen: this.props.navigateToCustomerPickerScreen, performInputSearchManagedOnly: this.props.performInputSearchManagedOnly, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performInputCustomer: this.props.performInputCustomer, performInputComment: this.props.performInputComment, performCancel: this.props.performCancel, performSave: this.props.performSave, callPostGszActivityIncludeCreate: this.props.callPostGszActivityIncludeCreate, navigateBack: this.props.navigateBack, performContainerReset: this.props.performContainerReset, inputSearch: this.props.inputSearch, customerSearchError: this.props.customerSearchError, isSearchError: this.props.isSearchError, customerSearchList: this.props.customerSearchList, inputSearchManagedOnly: this.props.inputSearchManagedOnly, inputCustomer: this.props.inputCustomer, inputComment: this.props.inputComment, operationUuid: this.props.operationUuid, gszActivityIncludeValidationComment: this.props.gszActivityIncludeValidationComment, gszActivityIncludeValidationCustomer: this.props.gszActivityIncludeValidationCustomer, search: this.props.search, searchInProgress: this.props.searchInProgress, searchError: this.props.searchError, activitySave: this.props.activitySave, activitySaveInProgress: this.props.activitySaveInProgress, activitySaveError: this.props.activitySaveError, activityIncludeCreate: this.props.activityIncludeCreate, activityIncludeCreateFetching: this.props.activityIncludeCreateFetching, activityIncludeCreateError: this.props.activityIncludeCreateError, activityIncludeCreateCachedDate: this.props.activityIncludeCreateCachedDate, currentCustomerManaged: this.props.currentCustomerManaged, navigateToMemberListScreen: this.props.navigateToMemberListScreen, memberList: this.props.memberList, performCancelSearchCustomer: this.props.performCancelSearchCustomer, currentGsz: this.props.currentGsz, isVisibleModalActivityError: this.props.isVisibleModalActivityError, currentUser: this.props.currentUser, performChangeVisibleErrorModal: this.props.performChangeVisibleErrorModal }));
    }
}
function mapStateToProps(state) {
    return {
        inputSearch: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputSearch,
        customerSearchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.customerSearchError,
        isSearchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.isSearchError,
        customerSearchList: state.user.mrmkmcibCRM.reducerGszActivityInclude.customerSearchList,
        inputSearchManagedOnly: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputSearchManagedOnly,
        inputCustomer: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputCustomer,
        inputComment: state.user.mrmkmcibCRM.reducerGszActivityInclude.inputComment,
        operationUuid: state.user.mrmkmcibCRM.reducerGszActivityInclude.operationUuid,
        gszActivityIncludeValidationComment: state.user.mrmkmcibCRM.reducerGszActivityInclude.gszActivityIncludeValidationComment,
        gszActivityIncludeValidationCustomer: state.user.mrmkmcibCRM.reducerGszActivityInclude.gszActivityIncludeValidationCustomer,
        search: state.user.mrmkmcibCRM.reducerGszActivityInclude.search,
        searchInProgress: state.user.mrmkmcibCRM.reducerGszActivityInclude.searchInProgress,
        searchError: state.user.mrmkmcibCRM.reducerGszActivityInclude.searchError,
        activitySave: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySave,
        activitySaveInProgress: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySaveInProgress,
        activitySaveError: state.user.mrmkmcibCRM.reducerGszActivityInclude.activitySaveError,
        activityIncludeCreate: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreate,
        activityIncludeCreateFetching: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateFetching,
        activityIncludeCreateError: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateError,
        activityIncludeCreateCachedDate: state.user.mrmkmcibCRM.reducerGszActivityInclude.activityIncludeCreateCachedDate,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentGsz: state.user.mrmkmcibCRM.reducerGSZ.currentGsz,
        memberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        isVisibleModalActivityError: state.user.mrmkmcibCRM.reducerGszActivityInclude.isVisibleModalActivityError,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToCustomerPickerScreen: () => {
            dispatch(thunkGszActivityInclude.navigateToCustomerPickerScreen());
        },
        performInputSearchManagedOnly: (value) => {
            dispatch(thunkGszActivityInclude.performInputSearchManagedOnly(value));
        },
        performInputSearch: (value) => {
            dispatch(thunkGszActivityInclude.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkGszActivityInclude.performSearchReset());
        },
        performSearch: () => {
            dispatch(thunkGszActivityInclude.performSearch());
        },
        performInputCustomer: (customer) => {
            dispatch(thunkGszActivityInclude.performInputCustomer(customer));
        },
        performInputComment: (value) => {
            dispatch(thunkGszActivityInclude.performInputComment(value));
        },
        performCancel: () => {
            dispatch(thunkGszActivityInclude.performCancel());
        },
        performSave: () => {
            dispatch(thunkGszActivityInclude.performSave());
        },
        callPostGszActivityIncludeCreate: () => {
            dispatch(thunkGszActivityInclude.callPostGszActivityIncludeCreate());
        },
        navigateBack: () => {
            dispatch(thunkGszActivityInclude.navigateBack());
        },
        performContainerReset: () => {
            dispatch(thunkGszActivityInclude.performContainerReset());
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkGszActivityInclude.navigateToMemberListScreen());
        },
        performCancelSearchCustomer: () => {
            dispatch(thunkGszActivityInclude.performCancelSearchCustomer());
        },
        performChangeVisibleErrorModal: (status) => {
            dispatch(thunkGszActivityInclude.performChangeVisibleErrorModal(status));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerGszActivityInclude);
//# sourceMappingURL=ContainerGszActivityInclude.js.map