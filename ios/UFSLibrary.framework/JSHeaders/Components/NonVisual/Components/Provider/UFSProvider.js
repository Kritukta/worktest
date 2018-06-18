import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../Store/configureStore';
export default class UFSProvider extends Component {
    render() {
        const store = configureStore(this.props.reducer, this.props.middleware || []);
        return (React.createElement(Provider, {store: store}, this.props.children));
    }
}
//# sourceMappingURL=UFSProvider.js.map