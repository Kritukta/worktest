import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSRightPageHeaderManager extends Component {
    render() {
        return (React.createElement(UFSRightPageHeader, {testID: this.props.testID}, this.props.children));
    }
}
const UFSRightPageHeader = requireNativeComponent('UFSRightPageHeaderView');
//# sourceMappingURL=UFSRightPageHeader.js.map