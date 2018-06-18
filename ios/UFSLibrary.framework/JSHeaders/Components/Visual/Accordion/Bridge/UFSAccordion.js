import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../HintIcon/HintIcon/Bridge/UFSHintIcon';
export default class UFSAccordionManager extends Component {
    constructor() {
        super(...arguments);
        this.renderChildrenIfNeeded = () => {
            if (this.props.opened) {
                return this.props.children;
            }
            else {
                const hintIcons = renderHintIcons(this.props.children, 'Accordion', 1, true);
                return this.filterOutHintIconsWithoutAutoPosition(hintIcons);
            }
        };
        this.filterOutHintIconsWithoutAutoPosition = (hintIcons) => {
            return hintIcons.filter(child => child.props.autoPosition);
        };
    }
    render() {
        return (React.createElement(UFSAccordion, {header: this.props.header, onClick: this.props.onClick, opened: this.props.opened, disabled: this.props.disabled, testID: this.props.testID}, this.renderChildrenIfNeeded()));
    }
}
const UFSAccordion = requireNativeComponent('UFSAccordionView');
//# sourceMappingURL=UFSAccordion.js.map