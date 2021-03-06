import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon, renderHintIconsIfNotOneLine } from '../../Common';
export default class UFSTimeManager extends Component {
    render() {
        const hintIcons = renderHintIcons(this.props.children, 'Time', 2);
        return (React.createElement(UFSTime, {label: this.props.label, value: this.props.value, block: this.props.block, oneline: this.props.oneline, showSeconds: this.props.showSeconds, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, renderHintIconsIfNotOneLine(hintIcons, this.props.oneline)));
    }
}
UFSTimeManager.defaultProps = {
    label: "",
    block: false,
    oneline: false,
    showSeconds: false
};
const UFSTime = requireNativeComponent('UFSTimeView');
//# sourceMappingURL=UFSTime.js.map