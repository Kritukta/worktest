/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSOptionItemManager> {
    /**
    *	Set value for item.
    */
    value: string;
    /**
    *	Set title for item.
    */
    title?: string;
    /**
    *	Set disabled state for item..
    */
    disabled?: boolean;
    testID?: string;
}
export default class UFSOptionItemManager extends Component<Props, {}> {
    render(): JSX.Element;
}
