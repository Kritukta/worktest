/// <reference types="react-native" />
import React from 'react';
export interface IAgetCircleProps {
    firstName: string | null;
    isExpandedMode?: boolean;
    lastName: string | null;
    testID: string;
    hasCrown: boolean;
    initials: string;
}
export interface ISmallAvatarProps {
    hasCrown: boolean;
    initials: string;
    testID: string;
}
export declare const AgentCircle: (props: IAgetCircleProps) => React.ReactElement<React.ViewStatic>;
