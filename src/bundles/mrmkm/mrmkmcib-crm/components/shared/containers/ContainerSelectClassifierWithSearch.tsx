
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'


import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../../../Enums'
import * as thunkSelectClassifierWithSearch from '../../../thunk/ThunkSelectClassifierWithSearch'
import * as ModelState from '../../../models/Models'
import * as ModelsSelectClassifierWithSearch from '../../../models/ModelsSelectClassifierWithSearch'
import {ViewSelectClassifierWithSearch} from '../ViewSelectClassifierWithSearch'
import Error from "../../../models/Error"

/*
    usage example:

    import ContainerSelectClassifierWithSearch from './shared/ContainerSelectClassifierWithSearch'
    ...
       <ContainerSelectClassifierWithSearch testID='test-id-844a5edb4f7d0f5e'/>
 */
export interface ISelectClassifierWithSearchStateProps {

    searchValue: string | null,
    searchList: ModelsApp.ClassifierList,
    isSearchLineVisible: boolean,
    isFullScreenEnabled: boolean,
    isNotFound: boolean,
    selectedCode: string | null,
    pageName: string | null,
    isSearchEnable: boolean,
    mode: Enums.ClassifierMode,
    navigateBackButtonTitle: string | null,
    warningMessage: string | null,
}

export interface ISelectClassifierWithSearchDispatchProps {

    performSearch: ModelsSelectClassifierWithSearch.PERFORM_SEARCH,
    showSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,
    hideSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,
    performSelect: ModelsSelectClassifierWithSearch.PERFORM_SELECT,
    navigateBack: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,
}

export interface IContainerSelectClassifierWithSearchExternalPros {

    testID: string,
}

export type ISearchProps = ISelectClassifierWithSearchStateProps & ISelectClassifierWithSearchDispatchProps & IContainerSelectClassifierWithSearchExternalPros

const defaultLineRenderer = (e: ModelsApp.Classifier) => e.value

/*
 * Container "SelectClassifierWithSearch". SelectClassifier screen.
 */
class ContainerSelectClassifierWithSearch extends React.Component<ISearchProps, any> {

    constructor(props: ISearchProps, context: any) {
        super(props, context);
    }



    public render() {
        return (
            <ViewSelectClassifierWithSearch testID={'test-id-ContainerSelectClassifierWithSearch'}

                                            searchList={this.props.searchList }
                                            searchValue={this.props.searchValue}

                                            selectedCode={this.props.selectedCode}
                                            isSearchLineVisible={this.props.isSearchLineVisible}
                                            navigateBackButtonTitle={this.props.navigateBackButtonTitle}

                                            performSelect={this.props.performSelect}
                                            performSearch={this.props.performSearch}
                                            showSearchLine={this.props.showSearchLine}
                                            hideSearchLine={this.props.hideSearchLine}
                                            mode={this.props.mode}
                                            pageName={this.props.pageName}
                                            navigateBack={this.props.navigateBack}
                                            isSearchEnable={this.props.isSearchEnable}
                                            isFullScreenEnabled={this.props.isFullScreenEnabled}
                                            isNotFound={this.props.isNotFound}
                                            warningMessage={this.props.warningMessage}
            />
        )
    }
}


const  mapStateToProps = (state: ModelState.IRootState):ISelectClassifierWithSearchStateProps => (
    {

        searchList: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.classifierSearchList,
        searchValue: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.searchValue || '',
        isSearchLineVisible: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isSearchLineVisible,
        selectedCode: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.selectedCode,
        pageName: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.pageName,
        isSearchEnable: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isSearchEnable,
        isFullScreenEnabled: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isFullScreenEnabled,
        isNotFound: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.isNotFound,
        mode: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.mode,
        navigateBackButtonTitle: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.navigateBackButtonTitle,
        warningMessage: state.user.mrmkmcibCRM.reducerSelectClassifierWithSearch.warningMessage,
    }
)

const mapDispatchToProps = (dispatch: Function):ISelectClassifierWithSearchDispatchProps => (
    {

        performSearch: (value: string) => {
            dispatch(thunkSelectClassifierWithSearch.performSearch(value))
        },
        showSearchLine: () => {
            dispatch(thunkSelectClassifierWithSearch.showSearchLine())
        },
        hideSearchLine: () => {
            dispatch(thunkSelectClassifierWithSearch.hideSearchLine())
        },
        navigateBack: () => {
            dispatch(thunkSelectClassifierWithSearch.navigateBack())
        },
        performSelect: (value: ModelsApp.Classifier) => {
            dispatch(thunkSelectClassifierWithSearch.performSelect(value))
        },

    }
)

export default connect<ISelectClassifierWithSearchStateProps, ISelectClassifierWithSearchDispatchProps,
                        IContainerSelectClassifierWithSearchExternalPros>(mapStateToProps, mapDispatchToProps)(
                            ContainerSelectClassifierWithSearch)
