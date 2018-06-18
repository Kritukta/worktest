import React from 'react';
import { requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import { popContent } from '../../../../JSCore/Actions/UFSSplitPanelActionCreators';
import { UFSSplitPanelChildPanel } from '../../SplitPanel';
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBackButtonClick: () => dispatch(popContent(ownProps.panelId))
    };
};
class UFSContentPanelManager extends UFSSplitPanelChildPanel {
    render() {
        const shouldShowBackButton = this._shouldShowBackButton();
        const children = React.Children.toArray(this.state.children);
        const child = children[this.props.id];
        const childWithProps = React.cloneElement(child, {
            hasPrev: shouldShowBackButton,
            showAutoBackButton: this.props.showAutoBackButton,
            barColor: '#ffffff',
            onBackButtonClick: this.props.onBackButtonClick,
            showBorder: true
        });
        const backgroundColor = this.props.style ? this.props.style.backgroundColor : undefined;
        return (React.createElement(UFSContentPanelView, {backgroundColor: backgroundColor, testID: this.props.testID}, childWithProps));
    }
    _shouldShowBackButton() {
        if (this.props.id) {
            return true;
        }
        return false;
    }
}
const UFSContentPanelView = requireNativeComponent('UFSContentPanelView');
export default connect(undefined, mapDispatchToProps)(UFSContentPanelManager);
//# sourceMappingURL=UFSContentPanel.js.map