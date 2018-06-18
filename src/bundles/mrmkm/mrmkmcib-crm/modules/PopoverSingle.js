import React, { Component } from 'react';
import { Popover } from 'ufs-mobile-platform';
const popoverMap = new Map();
export default class PopoverSingle extends Component {
    constructor() {
        super();
        this.state = {
            componentId: null
        };
    }
    componentDidMount() {
        let { popoverName } = this.props;
        // Pseudo random componentID
        let componentId = Math.floor(new Date().getTime() * Math.random());
        let popoverStack = popoverMap.get(popoverName);
        if (!popoverStack) {
            popoverMap.set(popoverName, [componentId]);
        }
        else {
            popoverMap.set(popoverName, [...popoverStack, componentId]);
        }
        this.setState({ componentId: componentId });
    }
    componentWillUnmount() {
        let { popoverName } = this.props;
        let popoverStack = popoverMap.get(popoverName);
        popoverMap.set(popoverName, popoverStack.filter((componentId) => componentId != this.state.componentId));
    }
    render() {
        let { popoverName } = this.props;
        let popoverStack = popoverMap.get(popoverName);
        if (popoverStack && popoverStack[popoverStack.length - 1] != this.state.componentId) {
            return null;
        }
        return (React.createElement(Popover, { testID: this.props.testID, target: this.props.target || null, opened: this.props.opened, onOutsideTap: this.props.onOutsideTap, type: this.props.type, style: this.props.style, position: this.props.position }, this.props.children));
    }
}
//# sourceMappingURL=PopoverSingle.js.map