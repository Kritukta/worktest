/// <reference types="react" />
import * as React from 'react';
export interface Props {
    onClick?: () => void;
    testID?: string;
}
export default class UFSMapTrafficButtonManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
