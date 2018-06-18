/// <reference types="react-native" />
import React from 'react';
export interface CellData {
    label: string;
    value?: string | null;
    errorText?: string | null;
    isFetching?: boolean | null;
}
export interface CellProps {
    data: CellData;
    onClick?: {
        (): void;
    } | null;
    flex?: object;
    indented?: boolean | null;
}
export declare const OneLineCell: (props: CellProps) => React.ReactElement<React.ViewStatic>;
