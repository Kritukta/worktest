import React, { Component } from 'react';
import { AppRegistry, Text, textStyles } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, null,
            React.createElement(Text, { preset: textStyles.heading }, "\u043A\u043E\u043C\u0430\u043D\u0434\u0430")));
    }
}
AppRegistry.registerComponent("team", () => App);
//# sourceMappingURL=index.ios.js.map