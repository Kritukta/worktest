import * as React from 'react';
import { UIManager, View, requireNativeComponent } from 'react-native';
import UFSPanelHeader from '../../PanelHeader/Bridge/UFSPanelHeader';
export const UFSPanelType = UIManager.UFSPanelView.Constants;
const UFSButtonType = UIManager.UFSButtonView.Constants;
export default class UFSPanelManager extends React.Component {
    render() {
        let headerMedia;
        if (this.props.headerMedia) {
            headerMedia = React.cloneElement(this.props.headerMedia, {
                type: UFSButtonType.NARROW
            });
        }
        return (React.createElement(UFSPanel, {type: this.props.type, style: this.props.style, testID: this.props.testID}, 
            React.createElement(UFSPanelHeader, {header: this.props.header, hasIcon: this.props.hasIcon}, headerMedia), 
            React.createElement(View, null, this.props.children)));
    }
}
const UFSPanel = requireNativeComponent('UFSPanelView');
//# sourceMappingURL=UFSPanel.js.map