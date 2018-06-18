import { Component } from 'react';
export default class PopoverSingle extends Component<IPopoverTargetProps, any> {
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export interface IPopoverTargetProps {
    popoverName: string;
    onOutsideTap?: Function;
    opened?: Boolean;
    type?: Number;
    target?: any;
    testID: string;
    position?: Array<any>;
    style?: any;
}
