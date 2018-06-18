/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSSectionManager> {
    title?: string;
    hasTitle?: boolean;
    testID?: string;
}
export interface PublicProps extends Props {
    marginTop?: number;
    marginBottom?: number;
}
export interface PrivateProps extends Props {
    sectionMarginTop?: number;
    sectionMarginBottom?: number;
}
export default class UFSSectionManager extends Component<PublicProps, {}> {
    render(): JSX.Element;
}
