import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapZoomInButtonManager extends React.Component {
    render() {
        return (React.createElement(UFSMapZoomInButton, {onClick: this.props.onClick, testID: this.props.testID}));
    }
}
const UFSMapZoomInButton = requireNativeComponent('UFSMapZoomInButtonView');
//# sourceMappingURL=UFSMapZoomInButton.js.map