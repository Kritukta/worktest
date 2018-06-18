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
                <Text preset={textStyles.heading}>новостная лента</Text>
            </WidgetRKM>
        );
    }
}

AppRegistry.registerComponent("news",() => App);
