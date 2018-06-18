import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSLoaderManager extends React.Component {
    render() {
        return (React.createElement(UFSLoader, {testID: this.props.testID}, this.props.children));
    }
}
const UFSLoader = requireNativeComponent('UFSLoaderView');
//# sourceMappingURL=UFSLoader.js.map