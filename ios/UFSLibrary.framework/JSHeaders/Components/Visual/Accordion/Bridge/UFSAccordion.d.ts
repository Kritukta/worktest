/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSAccordionManager> {
    header: string;
    opened: boolean;
    onClick?: () => void;
    disabled?: boolean;
    testID?: string;
}
export default class UFSAccordionManager extends Component<Props, {}> {
    private renderChildrenIfNeeded;
    private filterOutHintIconsWithoutAutoPosition;
    render(): JSX.Element;
}
