import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapTrafficButtonManager extends React.Component {
    render() {
        return (React.createElement(UFSMapTrafficButton, {onClick: this.props.onClick, testID: this.props.testID}));
    }
}
const UFSMapTrafficButton = requireNativeComponent('UFSMapTrafficButtonView');
//# sourceMappingURL=UFSMapTrafficButton.js.map