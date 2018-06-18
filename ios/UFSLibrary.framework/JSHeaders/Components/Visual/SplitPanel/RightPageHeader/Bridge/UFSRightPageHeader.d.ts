/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSRightPageHeaderManager> {
    testID?: string;
}
export default class UFSRightPageHeaderManager extends Component<Props, {}> {
    render(): JSX.Element;
}
