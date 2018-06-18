import React, { Component} from 'react';
import {
    AppRegistry,
    MRM,
    View,
    ViewStyle,
    WidgetContainer,
} from 'ufs-mobile-platform';

import  Styles from './WidgetStyle';

const openOtherApp = function(){
    MRM.switchRootApp('rkmcib');
}

export interface WidgetRKMProps {
    unblocked? : boolean;
}

export default class WidgetRKM extends Component<WidgetRKMProps, {}> {
    render() {
      const blocked = !this.props.unblocked
        return (
            <WidgetContainer
                style={blocked ? Styles.widgetContainerBlocked : Styles.widgetContainer}
                hasShadow
                onPress = {openOtherApp}
            >
                <View style={Styles.container}>
                    <View style={Styles.widget}>
                        {this.props.children}
                    </View>
                </View>
            </WidgetContainer>
        )
    }
}