import React, { Component } from 'react';
import { Text } from 'react-native';
export default class UFSH2 extends Component {
    render() {
        return (React.createElement(Text, {style: style, numberOfLines: this.props.numberOfLines}, this.props.children));
    }
}
const style = {
    fontFamily: 'PTSans-Bold',
    color: '#212121',
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: 'transparent'
};
//# sourceMappingURL=UFSH2.js.map