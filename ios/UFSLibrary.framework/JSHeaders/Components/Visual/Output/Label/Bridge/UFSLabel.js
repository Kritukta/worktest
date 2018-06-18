import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import UFSText from '../../../Text/UFSText';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon } from '../../Common';
export default class UFSLabelManager extends Component {
    constructor() {
        super(...arguments);
        this.findText = (children) => {
            let text = children
                .filter((child) => child.type == UFSText)
                .map((child) => this.text(child.props.children))
                .join(' ');
            return text;
        };
        this.text = (entity) => {
            return (entity instanceof Array) ? entity.join("") : entity;
        };
    }
    render() {
        const children = React.Children.toArray(this.props.children);
        const mainText = this.findText(children);
        const hintIcons = renderHintIcons(this.props.children, 'Label', 2);
        return (React.createElement(UFSLabel, {label: this.props.text, text: mainText, block: this.props.block, oneline: false, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, hintIcons));
    }
}
const UFSLabel = requireNativeComponent('UFSLabelView');
//# sourceMappingURL=UFSLabel.js.map