import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapZoomOutButtonManager extends React.Component {
    render() {
        return (React.createElement(UFSMapZoomOutButton, {onClick: this.props.onClick, testID: this.props.testID}));
    }
}
const UFSMapZoomOutButton = requireNativeComponent('UFSMapZoomOutButtonView');
//# sourceMappingURL=UFSMapZoomOutButton.js.map