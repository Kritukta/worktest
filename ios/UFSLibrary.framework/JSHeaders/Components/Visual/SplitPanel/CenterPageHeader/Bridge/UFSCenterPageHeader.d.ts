/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSCenterPageHeaderManager> {
    testID?: string;
}
export default class UFSCenterPageHeaderManager extends Component<Props, {}> {
    render(): JSX.Element;
}
