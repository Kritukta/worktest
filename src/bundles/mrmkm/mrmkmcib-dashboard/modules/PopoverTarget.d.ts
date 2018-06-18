import { Component } from 'react';
export default class PopoverTarget extends Component<IPopoverTargetProps, any> {
    static getRef(stringRef: any): any;
    static setRef(stringRef: any, ref: any): void;
    constructor(props: IPopoverTargetProps, context: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export interface IPopoverTargetProps {
    testID: string;
    refName: string;
    style?: any;
}
