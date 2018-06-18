import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon } from '../../Common';
export default class UFSSumTextManager extends Component {
    render() {
        const hintIcons = renderHintIcons(this.props.children, 'SumText', 2);
        return (React.createElement(UFSSumText, {label: this.props.label, currency: this.props.currency, value: this.props.value, block: this.props.block, small: this.props.small, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, hintIcons));
    }
}
UFSSumTextManager.defaultProps = {
    label: "",
    currency: "",
    block: false,
    small: false
};
const UFSSumText = requireNativeComponent('UFSSumTextView');
//# sourceMappingURL=UFSSumText.js.map