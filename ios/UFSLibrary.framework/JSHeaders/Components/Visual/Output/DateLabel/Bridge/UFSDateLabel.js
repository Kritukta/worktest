import React, { Component } from 'react';
import { requireNativeComponent, UIManager } from 'react-native';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon, renderHintIconsIfNotOneLine } from '../../Common';
export const UFSDateFormat = UIManager.UFSDateLabelView.Constants;
export default class UFSDateLabelManager extends Component {
    render() {
        const hintIcons = renderHintIcons(this.props.children, 'DateLabel', 2);
        return (React.createElement(UFSDateLabel, {label: this.props.label, date: this.props.date, block: this.props.block, oneline: this.props.oneline, format: this.props.format, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, renderHintIconsIfNotOneLine(hintIcons, this.props.oneline)));
    }
}
UFSDateLabelManager.defaultProps = {
    label: "",
    block: false,
    oneline: false,
    format: UFSDateFormat.STANDARD
};
const UFSDateLabel = requireNativeComponent('UFSDateLabelView');
//# sourceMappingURL=UFSDateLabel.js.map