import React from 'react';
import { NavigatorIOS } from 'react-native';
import UFSAccessoryPanelNavigationController from './UFSAccessoryPanelNavigationController';
import { UFSSplitPanelNavigationWrapper } from '../../SplitPanel';
export default class UFSAccessoryNavigationWrapper extends UFSSplitPanelNavigationWrapper {
    render() {
        const initialRoute = Object.assign({ component: UFSAccessoryPanelNavigationController }, this.defaultNavigatorProps());
        return (React.createElement(NavigatorIOS, {ref: 'navigator', initialRoute: initialRoute, style: { width: 320 }}));
    }
}
//# sourceMappingURL=UFSAccessoryNavigationWrapper.js.map