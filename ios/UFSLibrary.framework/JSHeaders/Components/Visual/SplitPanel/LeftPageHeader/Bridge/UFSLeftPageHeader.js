import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSLeftPageHeaderManager extends React.Component {
    render() {
        return (React.createElement(UFSLeftPageHeader, {testID: this.props.testID}, this.props.children));
    }
}
const UFSLeftPageHeader = requireNativeComponent('UFSLeftPageHeaderView');
//# sourceMappingURL=UFSLeftPageHeader.js.map