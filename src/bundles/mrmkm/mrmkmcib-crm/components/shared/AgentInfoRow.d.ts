/// <reference types="react-native" />
import React, { ReactNode } from 'react';
export interface IAgentInfoRowProps {
    label?: string | null;
    specialStyle?: number | any;
    children?: ReactNode[];
    testID: string;
}
export declare const AgentInfoRow: (props: IAgentInfoRowProps) => React.ReactElement<React.ViewStatic>;
