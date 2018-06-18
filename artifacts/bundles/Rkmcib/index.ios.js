import { UFSProvider, AppRegistry } from "ufs-mobile-platform";
import React, { Component } from "react";
import { handleActions } from "redux-actions";
import { ContainerAppDashboard } from "mrmkmcib-dashboard";
const initialState = {};
const reducer = handleActions({
    [""]: (state, action) => {
        return Object.assign({}, state, {});
    }
}, initialState);
export default class App extends Component {
    render() {
        console.log('index ios Rkmcib');
        return (React.createElement(UFSProvider, { reducer: reducer },
            React.createElement(ContainerAppDashboard, { testID: 'test-id-ContainerAppDashboard' })));
    }
}
AppRegistry.registerComponent("rkmcib", () => App);
//# sourceMappingURL=index.ios.js.map