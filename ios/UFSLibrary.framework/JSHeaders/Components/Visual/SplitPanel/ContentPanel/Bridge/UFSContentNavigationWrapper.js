import React from 'react';
import { NavigatorIOS } from 'react-native';
import UFSContentPanelNavigationController from './UFSContentPanelNavigationController';
import { UFSSplitPanelNavigationWrapper } from '../../SplitPanel';
export default class UFSContentNavigationWrapper extends UFSSplitPanelNavigationWrapper {
    render() {
        const initialRoute = Object.assign({ component: UFSContentPanelNavigationController }, this.defaultNavigatorProps());
        return (React.createElement(NavigatorIOS, {ref: 'navigator', initialRoute: initialRoute, style: defaultStyle}));
    }
}
const defaultStyle = {
    flex: 1,
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.09)',
    zIndex: 100
};
//# sourceMappingURL=UFSContentNavigationWrapper.js.map