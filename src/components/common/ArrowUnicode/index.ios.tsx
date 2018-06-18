import React, { Component} from 'react';
import {Text,  ViewStyle} from 'ufs-mobile-platform';
import  Styles from './ArrowUnicodeStyle';

export interface ArrowUnicodeProps {
    direction: "up" | "down";
}

export default class ArrowUnicode extends Component<ArrowUnicodeProps, {}> {

    render() {

        const directionUp = this.props.direction === "up" ;
        return (
            directionUp  ? <Text preset={Styles.arrowUp} >{'\u2191'}</Text> :
                <Text preset={Styles.arrowDown} >{'\u2193'}</Text>
        )
    }

}

