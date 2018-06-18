import React, { Component } from 'react';
import ReactNative, { UIManager, requireNativeComponent } from 'react-native';
import UFSPopoverContent from '../../PopoverContent/Bridge/UFSPopoverContent';
export const UFSPopoverType = UIManager.UFSPopoverView.Constants.Type;
export const UFSPopoverPosition = UIManager.UFSPopoverView.Constants.Position;
export default class UFSPopoverManager extends Component {
    constructor() {
        super(...arguments);
        this.renderPopoverContentIfNeeded = () => {
            if (!this.props.opened) {
                return null;
            }
            return (React.createElement(UFSPopoverContent, null, this.props.children));
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.target) {
            this.target = ReactNative.findNodeHandle(nextProps.target);
        }
    }
    render() {
        const popoverHeight = this.props.style ? this.props.style.height : undefined;
        return (React.createElement(UFSPopover, {target: this.target, opened: this.props.opened, onOutsideTap: this.props.onOutsideTap, type: this.props.type, popoverHeight: popoverHeight, popoverPosition: this.props.position, testID: this.props.testID}, this.renderPopoverContentIfNeeded()));
    }
}
const UFSPopover = requireNativeComponent('UFSPopoverView');
//# sourceMappingURL=UFSPopover.js.map