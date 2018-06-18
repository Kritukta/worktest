import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSNavigationBackButtonManager extends Component {
    render() {
        return (React.createElement(UFSNavigationBackButton, {title: this.props.title, onClick: this.props.onClick, testID: this.props.testID}));
    }
}
const UFSNavigationBackButton = requireNativeComponent('UFSNavigationBackButtonView');
//# sourceMappingURL=UFSNavigationBackButton.js.map