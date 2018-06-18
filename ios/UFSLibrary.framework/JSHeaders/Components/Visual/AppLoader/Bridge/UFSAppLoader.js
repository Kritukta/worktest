import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSAppLoaderManager extends Component {
    constructor() {
        super(...arguments);
        this.onAppLoad = (event) => {
            if (!this.props.onAppLoad) {
                return;
            }
            this.props.onAppLoad(event.nativeEvent.appId);
        };
        this.onError = (event) => {
            this.props.onError(new Error(event.nativeEvent.error));
        };
    }
    render() {
        return (React.createElement(UFSAppLoader, {style: this.props.style, onAppLoad: this.onAppLoad, onAppLoaderError: this.props.onError ? this.onError : null, bundleName: this.props.bundleName, fileId: this.props.fileId, url: this.props.url, initialProps: this.props.initialProps, testID: this.props.testID}));
    }
}
const UFSAppLoader = requireNativeComponent('UFSAppLoaderView');
//# sourceMappingURL=UFSAppLoader.js.map