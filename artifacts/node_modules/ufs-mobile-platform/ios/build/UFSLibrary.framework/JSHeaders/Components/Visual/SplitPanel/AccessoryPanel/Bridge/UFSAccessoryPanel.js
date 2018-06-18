import React from 'react';
import { View, requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import { popAccessory } from '../../../../JSCore/Actions/UFSSplitPanelActionCreators';
import { UFSSplitPanelChildPanel } from '../../SplitPanel';
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBackButtonClick: () => dispatch(popAccessory(ownProps.panelId))
    };
};
class UFSAccessoryPanelManager extends UFSSplitPanelChildPanel {
    render() {
        const shouldShowBackButton = this.shouldShowBackButton();
        const children = React.Children.toArray(this.state.children);
        const child = children[this.props.id];
        if (React.isValidElement(child)) {
            const childWithProps = React.cloneElement(child, {
                hasPrev: shouldShowBackButton,
                showAutoBackButton: this.props.showAutoBackButton,
                onBackButtonClick: this.props.onBackButtonClick,
                showBorder: false
            });
            return (React.createElement(UFSAccessoryPanelView, {testID: this.props.testID}, childWithProps));
        }
        else {
            return (React.createElement(View, null));
        }
    }
    ;
    shouldShowBackButton() {
        if (this.props.id) {
            return true;
        }
        return false;
    }
}
const UFSAccessoryPanelView = requireNativeComponent('UFSAccessoryPanelView');
export default connect(undefined, mapDispatchToProps)(UFSAccessoryPanelManager);
//# sourceMappingURL=UFSAccessoryPanel.js.map