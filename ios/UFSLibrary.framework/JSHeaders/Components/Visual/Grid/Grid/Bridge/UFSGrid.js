import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSGridManager extends React.Component {
    render() {
        return (React.createElement(UFSGrid, {testID: this.props.testID}, this.props.children));
    }
}
const UFSGrid = requireNativeComponent('UFSGridView');
//# sourceMappingURL=UFSGrid.js.map