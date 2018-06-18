import React, { Component } from 'react';
import { ContentPanel, Section, Text, SplitPanel } from 'ufs-mobile-platform';
export default class HelloWorldPanelRoot extends Component {
    render() {
        return (React.createElement(SplitPanel, { id: "WelcomeItem" },
            React.createElement(ContentPanel, null,
                React.createElement(Section, null,
                    React.createElement(Text, null, "\u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0443\u0442 \u0431\u0430\u043D\u0434\u043B\u044B ")))));
    }
}
//# sourceMappingURL=Root.js.map