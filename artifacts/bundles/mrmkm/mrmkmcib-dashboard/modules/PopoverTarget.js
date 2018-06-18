import React, { Component } from 'react';
import { View, } from 'ufs-mobile-platform';
// в хроме работает только с внешней переменной
let refMap = new Map();
export default class PopoverTarget extends Component {
    static getRef(stringRef) {
        return stringRef ? refMap.get(`ref_${stringRef}`) : null;
    }
    static setRef(stringRef, ref) {
        refMap.set(`ref_${stringRef}`, ref);
    }
    constructor(props, context) {
        super(props, context);
        refMap = new Map();
        this.state = {};
    }
    componentWillUnmount() {
        const removeNullValues = (value, key, map) => {
            if (value === null) {
                refMap.delete(key);
            }
        };
        refMap.forEach(removeNullValues);
    }
    render() {
        return (React.createElement(View, { style: this.props.style, testID: this.props.testID, ref: (reference) => {
                PopoverTarget.setRef(this.props.refName, reference);
            } }, this.props.children));
    }
}
//# sourceMappingURL=PopoverTarget.js.map