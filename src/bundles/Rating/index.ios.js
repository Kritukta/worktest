import React, { Component } from 'react';
import { AppRegistry, Text, textStyles } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, null,
            React.createElement(Text, { preset: textStyles.heading }, "\u0440\u0435\u0439\u0442\u0438\u043D\u0433")));
    }
}
AppRegistry.registerComponent("rating", () => App);
//# sourceMappingURL=index.ios.js.map