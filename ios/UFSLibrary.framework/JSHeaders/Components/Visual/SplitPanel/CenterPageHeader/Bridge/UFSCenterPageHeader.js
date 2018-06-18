import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSCenterPageHeaderManager extends Component {
    render() {
        return (React.createElement(UFSCenterPageHeader, {testID: this.props.testID}, this.props.children));
    }
    ;
}
const UFSCenterPageHeader = requireNativeComponent('UFSCenterPageHeaderView');
//# sourceMappingURL=UFSCenterPageHeader.js.map