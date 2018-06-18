import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { hasLabelHintIcon, hasTitleHintIcon } from '../../Common';
export default class UFSMaskedTextManager extends Component {
    render() {
        const hintIcons = renderHintIcons(this.props.children, 'MaskedText', 1);
        return (React.createElement(UFSMaskedText, {label: "", block: this.props.block, value: this.props.value, mask: this.props.mask, testID: this.props.testID, hasLabelHintIcon: hasLabelHintIcon(hintIcons), hasTitleHintIcon: hasTitleHintIcon(hintIcons)}, hintIcons));
    }
}
UFSMaskedTextManager.defaultProps = {
    block: false
};
const UFSMaskedText = requireNativeComponent('UFSMaskedTextView');
//# sourceMappingURL=UFSMaskedText.js.map