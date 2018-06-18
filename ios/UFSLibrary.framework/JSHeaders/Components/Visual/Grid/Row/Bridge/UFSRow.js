import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSRowManager extends React.Component {
    render() {
        return (React.createElement(UFSRow, {testID: this.props.testID}, this.props.children));
    }
}
const UFSRow = requireNativeComponent('UFSRowView');
//# sourceMappingURL=UFSRow.js.map