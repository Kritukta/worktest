import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { textStyles } from './UFSPresets';
import { renderHintIcons } from '../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { HintIcon } from '../HintIcon/';
export default class UFSText extends Component {
    constructor() {
        super(...arguments);
        this.childrenWithoutHintIcons = () => {
            const childrenArray = React.Children.toArray(this.props.children);
            return childrenArray.filter(child => !(child.type === HintIcon));
        };
        this.hintIconsWithAdditionalLayout = (hintIcons) => {
            return React.Children.map(hintIcons, (hintIcon) => {
                let updatedProps = Object.assign({}, hintIcon.props, {
                    style: styles.hint
                });
                return React.cloneElement(hintIcon, updatedProps);
            });
        };
        this.renderText = (text) => {
            const presetStyle = this.props.preset || [textStyles.paragraph1, styles.transparentText];
            return (React.createElement(Text, {style: [presetStyle, this.props.style], numberOfLines: this.props.numberOfLines}, text));
        };
    }
    render() {
        let hintIcons = renderHintIcons(this.props.children, 'Text', 1, true);
        if (hintIcons && hintIcons.length > 0) {
            return (React.createElement(View, {style: styles.textContainer}, 
                this.renderText(this.childrenWithoutHintIcons()), 
                this.hintIconsWithAdditionalLayout(hintIcons)));
        }
        else {
            return this.renderText(this.props.children);
        }
    }
}
const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row'
    },
    hint: {
        alignSelf: 'flex-start'
    },
    transparentText: {
        backgroundColor: 'transparent'
    }
});
//# sourceMappingURL=UFSText.js.map