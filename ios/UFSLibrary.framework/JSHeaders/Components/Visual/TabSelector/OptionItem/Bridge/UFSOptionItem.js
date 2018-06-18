import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSOptionItemManager extends Component {
    render() {
        return (React.createElement(UFSOptionItem, {title: this.props.title, value: this.props.value, disabled: this.props.disabled, testID: this.props.testID}, this.props.children));
    }
    ;
}
const UFSOptionItem = requireNativeComponent('UFSOptionItemView');
//# sourceMappingURL=UFSOptionItem.js.map