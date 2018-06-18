import React, { Component } from 'react';
import { AppRegistry, H1, Table, TableBody, TableRow, TableCell, Text, textStyles, Section } from 'ufs-mobile-platform';
import ArrowUnicode from "../../components/common/ArrowUnicode/index.ios";
import WidgetRKM from "../../containers/WidgetRKM/index.ios";
export default class App extends Component {
    render() {
        return (React.createElement(WidgetRKM, { unblocked: true },
            React.createElement(Section, null,
                React.createElement(H1, null, "Pipeline \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C"),
                React.createElement(Table, null,
                    React.createElement(TableBody, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435, \u0441\u0443\u043C\u043C\u0430"),
                                React.createElement(Text, { preset: textStyles.heading },
                                    React.createElement(ArrowUnicode, { direction: "up" }),
                                    "234600 \u0420")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435"),
                                React.createElement(Text, { preset: textStyles.heading },
                                    React.createElement(ArrowUnicode, { direction: "up" }),
                                    "24 \u0448\u0442.")),
                            React.createElement(TableCell, null,
                                React.createElement(Text, { preset: textStyles.caption }, "\u041D\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435"),
                                React.createElement(Text, { preset: textStyles.heading },
                                    React.createElement(ArrowUnicode, { direction: "down" }),
                                    "7 \u0448\u0442."))))))));
    }
}
AppRegistry.registerComponent("pipeline", () => App);
//# sourceMappingURL=index.ios.js.map