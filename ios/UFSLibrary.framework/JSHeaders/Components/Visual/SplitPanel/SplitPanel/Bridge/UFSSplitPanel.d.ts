/// <reference types="react" />
import React, { Component } from 'react';
export interface Props extends React.Props<UFSSplitPanelManager>, OwnProps {
    id: string;
}
export interface OwnProps {
    testID?: string;
}
export default class UFSSplitPanelManager extends Component<Props, {}> {
    render(): JSX.Element;
    childrenWithPanelIdProp(): React.ReactElement<any>[];
}
