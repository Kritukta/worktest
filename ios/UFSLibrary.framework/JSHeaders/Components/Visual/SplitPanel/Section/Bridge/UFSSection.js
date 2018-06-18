import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSSectionManager extends Component {
    render() {
        return (React.createElement(UFSSection, {title: this.props.title || "", hasTitle: this.props.title != undefined, sectionMarginTop: this.props.marginTop, sectionMarginBottom: this.props.marginBottom, testID: this.props.testID}, this.props.children));
    }
}
const UFSSection = requireNativeComponent('UFSSectionView');
//# sourceMappingURL=UFSSection.js.map