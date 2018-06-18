export const hasLabelHintIcon = (hintIcons) => {
    if (!hintIcons) {
        return false;
    }
    for (let hintIcon of hintIcons) {
        if (hintIcon.props.autoPositionIndex === 1) {
            return true;
        }
    }
    return false;
};
export const hasTitleHintIcon = (hintIcons) => {
    if (!hintIcons) {
        return false;
    }
    for (let hintIcon of hintIcons) {
        if (!hintIcon.props.autoPositionIndex || (hintIcon.props.autoPositionIndex === 0)) {
            return true;
        }
    }
    return false;
};
export const renderHintIconsIfNotOneLine = (hintIcons, oneline) => {
    if (oneline) {
        return;
    }
    return hintIcons;
};
//# sourceMappingURL=UFSCommonLabel.js.map