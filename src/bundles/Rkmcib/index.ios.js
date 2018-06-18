import { UFSProvider, AppRegistry } from "ufs-mobile-platform";
import React, { Component } from "react";
import WelcomeItem from "./Root";
import { handleActions } from "redux-actions";
const initialState = {};
const reducer = handleActions({
    [""]: (state, action) => {
        return Object.assign({}, state, {});
    }
}, initialState);
export default class App extends Component {
    render() {
        return (React.createElement(UFSProvider, { reducer: reducer },
            React.createElement(WelcomeItem, null)));
    }
}
AppRegistry.registerComponent("rkmcib", () => App);
//# sourceMappingURL=index.ios.js.map