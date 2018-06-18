/// <reference types="react" />
import * as React from 'react';
export interface Props {
    onClick?: () => void;
    testID?: string;
}
export default class UFSMapZoomInButtonManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
