/// <reference types="react" />
import * as React from 'react';
export interface Props extends React.Props<UFSPanelHeaderManager> {
    /**
    *	Set text in header of panel
    */
    header?: string;
    /**
    *	Set flag that indicate is panel has icon in header
    */
    hasIcon?: boolean;
    testID?: string;
}
export default class UFSPanelHeaderManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
