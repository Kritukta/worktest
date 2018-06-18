import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSColumnManager extends React.Component {
    render() {
        return (React.createElement(UFSColumn, {xs: this.props.xs, xsOffset: this.props.xsOffset, xsHidden: this.props.xsHidden, testID: this.props.testID}, this.props.children));
    }
}
const UFSColumn = requireNativeComponent('UFSColumnView');
//# sourceMappingURL=UFSColumn.js.map