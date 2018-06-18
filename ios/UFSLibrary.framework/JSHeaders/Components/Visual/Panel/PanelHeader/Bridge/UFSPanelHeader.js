import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSPanelHeaderManager extends React.Component {
    render() {
        return (React.createElement(UFSPanelHeader, {header: this.props.header, hasIcon: this.props.hasIcon, testID: this.props.testID}, this.props.children));
    }
}
const UFSPanelHeader = requireNativeComponent('UFSPanelHeaderView');
//# sourceMappingURL=UFSPanelHeader.js.map