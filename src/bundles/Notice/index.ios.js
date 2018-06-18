import React, { Component } from 'react';
import { AppRegistry, Text, textStyles } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, null,
            React.createElement(Text, { preset: textStyles.heading }, "\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")));
    }
}
AppRegistry.registerComponent("notice", () => App);
//# sourceMappingURL=index.ios.js.map