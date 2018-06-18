var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../JSCore/Actions/UFSWorkflowActionCreators';
class UFSHintSwitchManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            this.props.onChange(event.nativeEvent.value);
        };
    }
    render() {
        return (React.createElement(UFSHintSwitch, __assign({}, this.props, {onChange: this.props.onChange ? this.onChange : undefined})));
    }
}
const mapStateToProps = (state) => {
    return {
        checked: state.workflow.hintsVisible,
        disabled: !state.workflow.hintSwitchEnabled
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(actions.updateHintsVisibility(value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UFSHintSwitchManager);
const UFSHintSwitch = requireNativeComponent('UFSHintSwitchView');
//# sourceMappingURL=UFSHintSwitch.js.map