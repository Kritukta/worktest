import React, { Component } from 'react';
import { Text } from 'ufs-mobile-platform';
import Styles from './ArrowUnicodeStyle';
export default class ArrowUnicode extends Component {
    render() {
        const directionUp = this.props.direction === "up";
        return (directionUp ? React.createElement(Text, { preset: Styles.arrowUp }, '\u2191') :
            React.createElement(Text, { preset: Styles.arrowDown }, '\u2193'));
    }
}
//# sourceMappingURL=index.ios.js.map