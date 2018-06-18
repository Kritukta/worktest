import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapControlsManager extends React.Component {
    render() {
        return React.createElement(UFSMapControls, {testID: this.props.testID});
    }
}
const UFSMapControls = requireNativeComponent('UFSMapControlsView');
//# sourceMappingURL=UFSMapControls.js.map