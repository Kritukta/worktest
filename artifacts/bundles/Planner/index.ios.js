import React, { Component } from 'react';
import { AppRegistry, Text, textStyles } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, null,
            React.createElement(Text, { preset: textStyles.heading }, "\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0449\u0438\u043A")));
    }
}
AppRegistry.registerComponent("planner", () => App);
//# sourceMappingURL=index.ios.js.map