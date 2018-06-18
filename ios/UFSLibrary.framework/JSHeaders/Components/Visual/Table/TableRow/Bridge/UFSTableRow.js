import React, { Component } from 'react';
import { UIManager, requireNativeComponent, StyleSheet } from 'react-native';
import { BaseCell } from '../../TableCells/BaseCell/BaseCell';
export const UnderlineType = UIManager.UFSTableRowView.Constants.underlineType;
export default class UFSTableRowManager extends Component {
    constructor() {
        super(...arguments);
        this.hasBaseCellInChildren = () => {
            var hasBaseCellInChildren = false;
            React.Children.forEach(this.props.children, (child, index) => {
                if (child.type == BaseCell) {
                    hasBaseCellInChildren = true;
                }
            });
            return hasBaseCellInChildren;
        };
    }
    tableRowPadding() {
        if (this.hasBaseCellInChildren()) {
            return styles.modernPadding;
        }
        else {
            return styles.regularPadding;
        }
    }
    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    noPaddings: this.props.noPaddings
                });
            }
            else {
                return child;
            }
        });
        let style = StyleSheet.flatten([this.tableRowPadding(), this.props.style]);
        return (React.createElement(UFSTableRow, {style: style, selectable: this.props.onClick !== undefined, onClick: this.props.onClick, noPaddings: this.props.noPaddings, testID: this.props.testID, disabled: this.props.disabled, selected: this.props.selected, underlineType: this.props.underlineType}, childrenWithProps));
    }
}
const styles = StyleSheet.create({
    regularPadding: {
        paddingLeft: 23,
        paddingRight: 23
    },
    modernPadding: {
        paddingLeft: 10,
        paddingRight: 10
    }
});
const UFSTableRow = requireNativeComponent('UFSTableRowView');
//# sourceMappingURL=UFSTableRow.js.map