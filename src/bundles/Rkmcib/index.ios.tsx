import { UFSProvider, AppRegistry, View } from "ufs-mobile-platform";
import React, { Component } from "react";

import { handleActions, Action } from "redux-actions";
import {ContainerAppDashboard} from "mrmkmcib-dashboard";

export interface State {}
export interface IAction {}
const initialState = {};

const reducer = handleActions(
    {
        [""]: (state: State, action: Action<IAction>): State => {
            return Object.assign({}, state, {});
        }
    },
    initialState
);

export default class App extends Component<{}, {}> {
    render() {
        console.log('index ios Rkmcib');
        return (
            <UFSProvider reducer={reducer}>
                <ContainerAppDashboard testID={'test-id-ContainerAppDashboard'} />
            </UFSProvider>
        );
    }
}

AppRegistry.registerComponent("rkmcib", () => App);