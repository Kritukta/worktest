import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSMapLocateButtonManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = (event) => {
            this.props.onClick(event.nativeEvent.coordinate, event.nativeEvent.recommendedZoom);
        };
    }
    render() {
        return (React.createElement(UFSMapLocateButton, {onClick: this.props.onClick ? this.onClick : undefined, testID: this.props.testID}));
    }
}
const UFSMapLocateButton = requireNativeComponent('UFSMapLocateButtonView');
//# sourceMappingURL=UFSMapLocateButton.js.map