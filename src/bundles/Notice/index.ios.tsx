import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    textStyles,
    View,
    ViewStyle
} from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";


export default class App extends Component<{}, {}> {
    render() {
        return (
            <WidgetRKM>
                <Text preset={textStyles.heading}>уведомления</Text>
            </WidgetRKM>
        );
    }
}

AppRegistry.registerComponent("notice",() => App);
