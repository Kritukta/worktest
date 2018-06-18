import React, { Component } from 'react';
import { requireNativeComponent, ScrollView, StyleSheet } from 'react-native';
import UFSNavigationBar from '../../NavigationBar/Bridge/UFSNavigationBar';
import UFSNavigationBackButton from '../../NavigationBackButton/Bridge/UFSNavigationBackButton';
import UFSLeftPageHeader from '../../LeftPageHeader/Bridge/UFSLeftPageHeader';
import UFSCenterPageHeader from '../../CenterPageHeader/Bridge/UFSCenterPageHeader';
import UFSRightPageHeader from '../../RightPageHeader/Bridge/UFSRightPageHeader';
export default class UFSPageManager extends Component {
    constructor() {
        super(...arguments);
        this.scrollViewRef = null;
        this.onScrollViewRef = (ref) => {
            this.scrollViewRef = ref;
        };
        this.handlePropsUpdate = (props) => {
            this.leftPageContent = null;
            this.centerPageContent = null;
            this.rightPageContent = null;
            React.Children.map(props.children, (child) => {
                if (child.type === UFSLeftPageHeader) {
                    this.leftPageContent = child;
                }
                else if (child.type === UFSCenterPageHeader) {
                    this.centerPageContent = child;
                }
                else if (child.type === UFSRightPageHeader) {
                    this.rightPageContent = child;
                }
                return child;
            });
            if (!this.leftPageContent && props.showAutoBackButton && props.hasPrev) {
                this.leftPageContent = (React.createElement(UFSLeftPageHeader, null, 
                    React.createElement(UFSNavigationBackButton, {title: "Назад", onClick: props.onBackButtonClick})
                ));
            }
        };
        this.renderHeaderContent = () => {
            const isNavigationBarEmpty = !(this.leftPageContent || this.centerPageContent || this.rightPageContent);
            if (isNavigationBarEmpty) {
                return null;
            }
            return (React.createElement(UFSNavigationBar, {backgroundColor: this.props.barColor, showBorder: this.props.showBorder}, 
                this.leftPageContent || React.createElement(UFSLeftPageHeader, null), 
                this.centerPageContent || React.createElement(UFSCenterPageHeader, null), 
                this.rightPageContent || React.createElement(UFSRightPageHeader, null)));
        };
    }
    componentWillMount() {
        this.handlePropsUpdate(this.props);
    }
    scrollTo(y, animated) {
        this.scrollViewRef.scrollTo({ y, x: 0, animated });
    }
    scrollToEnd(animated) {
        this.scrollViewRef.scrollToEnd({ animated });
    }
    componentWillReceiveProps(nextProps) {
        this.handlePropsUpdate(nextProps);
    }
    render() {
        return (React.createElement(UFSPageView, {style: styles.container, scrollEnabled: this.props.scrollEnabled, testID: this.props.testID}, 
            this.renderHeaderContent(), 
            React.createElement(ScrollView, {ref: this.onScrollViewRef, style: styles.container, contentContainerStyle: styles.scrollContainer}, this.props.content)));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flexGrow: 1
    }
});
const UFSPageView = requireNativeComponent('UFSPageView');
//# sourceMappingURL=UFSPage.js.map