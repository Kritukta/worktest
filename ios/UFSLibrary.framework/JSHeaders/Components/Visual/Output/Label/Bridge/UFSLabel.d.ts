/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSLabelManager> {
    text?: string;
    block?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    header?: string;
    label?: string;
    oneline: boolean;
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSLabelManager extends Component<Props, {}> {
    findText: (children: JSX.Element[]) => string;
    text: (entity: React.ReactElement<any>) => string | React.ReactElement<any>;
    render(): JSX.Element;
}
