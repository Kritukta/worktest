/// <reference types="react" />
import React from 'react';
export interface OwnProps {
    /**
    *	Code of hint from workflow
    */
    code?: string;
    /**
    *	Text for hint message in popover
    */
    text?: string;
    /**
    *   Flag indicating if parent component should apply auto position
    */
    autoPosition?: boolean;
    autoPositionIndex?: number;
    testID?: string;
}
export interface Props extends OwnProps {
}
declare const HintIcon: React.ComponentClass<any>;
export default HintIcon;
export declare const renderHintIcons: (children: React.ReactNode, componentName: string, maximumIcons?: number, allowHintIconsWithoutAutoPosition?: boolean) => React.ReactElement<any>[];
