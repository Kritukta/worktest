import * as React from 'react';
import { requireNativeComponent } from 'react-native';
import { makeUFSErrorFromUserInfo } from '../../../../JSCore/Common/UFSError';
export default class UFSMarkerManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onError = (event) => {
            this.props.onError(makeUFSErrorFromUserInfo(event.nativeEvent.error));
        };
    }
    render() {
        return (React.createElement(UFSMarker, {location: this.props.location, title: this.props.title, selected: this.props.selected, id: this.props.id, onClick: this.props.onClick, onClose: this.props.onClose, onError: this.props.onError ? this.onError : undefined, testID: this.props.testID}));
    }
}
const UFSMarker = requireNativeComponent('UFSMarkerView');
//# sourceMappingURL=UFSMarker.js.map