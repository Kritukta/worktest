/// <reference types="react" />
import React from 'react';
export interface Props extends React.Props<UFSColumnManager> {
    xs: number;
    xsOffset?: number;
    xsHidden?: boolean;
    testID?: string;
}
export default class UFSColumnManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
