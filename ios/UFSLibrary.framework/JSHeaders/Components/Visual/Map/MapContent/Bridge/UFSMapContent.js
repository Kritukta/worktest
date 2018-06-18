import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapContentManager extends React.Component {
    render() {
        return (React.createElement(UFSMapContent, {testID: this.props.testID}, this.props.children));
    }
}
const UFSMapContent = requireNativeComponent('UFSMapContentView');
//# sourceMappingURL=UFSMapContent.js.map