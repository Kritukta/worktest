import React, { Component } from 'react';
import { Text } from 'react-native';
export default class UFSH1 extends Component {
    render() {
        return (React.createElement(Text, {style: style, numberOfLines: this.props.numberOfLines}, this.props.children));
    }
}
const style = {
    fontFamily: 'PTSans-Bold',
    color: '#212121',
    fontSize: 20,
    lineHeight: 26,
    backgroundColor: 'transparent'
};
//# sourceMappingURL=UFSH1.js.map