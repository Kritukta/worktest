import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSSplitPanelManager extends Component {
    render() {
        const childrenWithProps = this.childrenWithPanelIdProp();
        return (React.createElement(UFSSplitPanel, {testID: this.props.testID}, childrenWithProps));
    }
    childrenWithPanelIdProp() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                panelId: this.props.id
            });
        });
    }
}
const UFSSplitPanel = requireNativeComponent('UFSSplitPanelView');
//# sourceMappingURL=UFSSplitPanel.js.map