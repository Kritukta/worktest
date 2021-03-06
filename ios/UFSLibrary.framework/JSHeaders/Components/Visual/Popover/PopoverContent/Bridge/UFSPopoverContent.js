import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSPopoverContentManager extends Component {
    render() {
        return (React.createElement(UFSPopoverContent, {testID: this.props.testID}, this.props.children));
    }
}
const UFSPopoverContent = requireNativeComponent('UFSPopoverContentView');
//# sourceMappingURL=UFSPopoverContent.js.map