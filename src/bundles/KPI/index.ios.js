import React, { Component } from 'react';
import { AppRegistry, H1, Table, TableBody, TableCell, TableRow, Text, textStyles, Section } from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, { unblocked: true },
            React.createElement(Section, null,
                React.createElement(H1, null, "KPI, \u043C\u043D\u043B \u0440\u0443\u0431\u043B\u0435\u0439"),
                React.createElement(Table, null,
                    React.createElement(TableBody, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u0414\u043E\u0445\u043E\u0434"),
                                React.createElement(Text, { preset: textStyles.heading }, "15500")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u041D\u041A\u0414"),
                                React.createElement(Text, { preset: textStyles.heading }, "74")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u0410\u043A\u0442\u0438\u0432\u044B"),
                                React.createElement(Text, { preset: textStyles.heading }, "348")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u041F\u0430\u0441\u0441\u0438\u0432\u044B"),
                                React.createElement(Text, { preset: textStyles.heading }, "10")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u0424\u041E\u0422"),
                                React.createElement(Text, { preset: textStyles.heading }, "10"))))))));
    }
}
AppRegistry.registerComponent("kpi", () => App);
//# sourceMappingURL=index.ios.js.map