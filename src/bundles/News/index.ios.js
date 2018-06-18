import React, { Component } from 'react';
import { AppRegistry, Text, textStyles } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, null,
            React.createElement(Text, { preset: textStyles.heading }, "\u043D\u043E\u0432\u043E\u0441\u0442\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430")));
    }
}
AppRegistry.registerComponent("news", () => App);
//# sourceMappingURL=index.ios.js.map