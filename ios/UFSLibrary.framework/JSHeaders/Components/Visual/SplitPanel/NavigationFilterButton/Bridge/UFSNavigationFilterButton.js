import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSNavigationFilterButtonManager extends Component {
    render() {
        return (React.createElement(UFSNavigationFilterButton, {count: this.props.count, onExecute: this.props.onExecute, testID: this.props.testID}));
    }
}
const UFSNavigationFilterButton = requireNativeComponent('UFSNavigationFilterButtonView');
//# sourceMappingURL=UFSNavigationFilterButton.js.map