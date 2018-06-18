import React, { Component } from 'react';
import { MRM, View, WidgetContainer, } from 'ufs-mobile-platform';
import Styles from './WidgetStyle';
const openOtherApp = function () {
    MRM.switchRootApp('rkmcib');
};
export default class WidgetRKM extends Component {
    render() {
        const blocked = !this.props.unblocked;
        return (React.createElement(WidgetContainer, { style: blocked ? Styles.widgetContainerBlocked : Styles.widgetContainer, hasShadow: true, onPress: openOtherApp },
            React.createElement(View, { style: Styles.container },
                React.createElement(View, { style: Styles.widget }, this.props.children))));
    }
}
//# sourceMappingURL=index.ios.js.map