import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon, renderHintIconsIfNotOneLine } from '../../Common';
export default class UFSDatePeriodManager extends Component {
    render() {
        const hintIcons = renderHintIcons(this.props.children, 'DatePeriod', 2);
        return (React.createElement(UFSDatePeriod, {label: this.props.label, block: this.props.block, from: this.props.from, to: this.props.to, oneline: this.props.oneline, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, renderHintIconsIfNotOneLine(hintIcons, this.props.oneline)));
    }
}
UFSDatePeriodManager.defaultProps = {
    from: new Date(),
    to: new Date(),
    label: "",
    block: false,
    oneline: false
};
const UFSDatePeriod = requireNativeComponent('UFSDatePeriodView');
//# sourceMappingURL=UFSDatePeriod.js.map