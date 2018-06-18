import * as React from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';
import { colors } from '../../../../../../Common';
import { Text, textStyles } from '../../../../../Text';
import { Icon, IconType } from '../../../../../Icon';
import { Switch } from '../../../../../Switch';
export default class UFSAccessoryContainerManager extends React.Component {
    childWithDefaultMargins(child) {
        if (child.type == Text || child.type == Icon) {
            return React.cloneElement(child, { style: styles.wrapperView });
        }
        else if (child.type == Switch) {
            return React.cloneElement(child, { style: styles.zeroRightMarginRelativeToBaseCell });
        }
        else {
            return child;
        }
    }
    childrenWithFixedLinkMargins(children) {
        var childrenWithMargins = children;
        if (childrenWithMargins.length > 0) {
            const indexOfLastChild = childrenWithMargins.length - 1;
            const lastChild = childrenWithMargins[indexOfLastChild];
            if (lastChild.type == Icon && lastChild.props.type == IconType.MrmLink) {
                childrenWithMargins[indexOfLastChild] = React.cloneElement(lastChild, { style: styles.wrapperViewWithLinkIcon });
                if (childrenWithMargins.length > 1) {
                    const indexOfNextToLastChild = childrenWithMargins.length - 2;
                    const nextToLastChild = childrenWithMargins[indexOfNextToLastChild];
                    if (nextToLastChild.type == Text) {
                        childrenWithMargins[indexOfNextToLastChild] = React.cloneElement(nextToLastChild, { style: styles.wrapperViewBeforeLinkWithText, preset: textStyles.body1 });
                    }
                }
            }
        }
        return childrenWithMargins;
    }
    render() {
        const children = this.props.children;
        var childrenWithMargins = [];
        if (React.Children.count(children)) {
            childrenWithMargins = React.Children.map(children, this.childWithDefaultMargins);
            childrenWithMargins = this.childrenWithFixedLinkMargins(childrenWithMargins);
        }
        return (React.createElement(UFSAccessoryContainer, null, childrenWithMargins));
    }
}
const styles = StyleSheet.create({
    wrapperView: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    wrapperViewWithLinkIcon: {
        marginBottom: 10,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    wrapperViewBeforeLinkWithText: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 0,
        marginTop: 10,
        color: colors.grey500
    },
    zeroRightMarginRelativeToBaseCell: {
        marginRight: -10
    }
});
const UFSAccessoryContainer = requireNativeComponent('UFSAccessoryContainerView');
//# sourceMappingURL=UFSAccessoryContainer.js.map