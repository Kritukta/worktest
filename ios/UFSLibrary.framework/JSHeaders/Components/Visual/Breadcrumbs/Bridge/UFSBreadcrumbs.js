import * as React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSBreadcrumbsManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onNavigate = (event) => {
            this.props.onNavigate(event.nativeEvent.value);
        };
        this.lastHistory = () => {
            const history = this.props.history;
            return history !== undefined && history.length > 0 ? history[history.length - 1] : [];
        };
    }
    render() {
        return (React.createElement(UFSBreadcrumbs, {onNavigate: this.props.onNavigate ? this.onNavigate : undefined, selectedKey: this.props.selectedKey, history: this.lastHistory(), testID: this.props.testID}));
    }
}
const UFSBreadcrumbs = requireNativeComponent('UFSBreadcrumbsView');
//# sourceMappingURL=UFSBreadcrumbs.js.map