import React, { Component } from 'react';
import { UIManager, requireNativeComponent } from 'react-native';
import UFSText from '../../../Text/UFSText';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
export const UFSTableColumnAlignment = UIManager.UFSTableColumnView.Constants;
export default class UFSTableColumnManager extends Component {
    constructor() {
        super(...arguments);
        this.findColumnTitle = (children) => {
            let text = children
                .filter((child) => child.type == UFSText)
                .map(child => this.columnTitle(child.props.children))
                .join(' ');
            return text;
        };
        this.columnTitle = (entity) => {
            return (entity instanceof Array) ? entity.join("") : entity;
        };
        this.hasHintIcon = (hintIcons) => {
            return (hintIcons) && (hintIcons.length > 0);
        };
    }
    render() {
        const children = React.Children.toArray(this.props.children);
        const text = this.findColumnTitle(children);
        const hintIcons = renderHintIcons(this.props.children, 'TableColumn', 1);
        return (React.createElement(UFSTableColumn, {style: this.props.style, title: text, widthString: this.props.width, align: this.props.align, testID: this.props.testID, noPaddings: this.props.noPaddings, hasHintIcon: this.hasHintIcon(hintIcons)}, hintIcons));
    }
}
UFSTableColumnManager.defaultProps = {
    align: UFSTableColumnAlignment.LEFT
};
const UFSTableColumn = requireNativeComponent('UFSTableColumnView');
//# sourceMappingURL=UFSTableColumn.js.map