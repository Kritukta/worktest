/// <reference types="react" />
import React from 'react';
import { Props as UFSChildPanelProps } from '../../SplitPanel/Bridge/UFSSplitPanelChildPanel';
export interface OwnProps {
    testID?: string;
}
export interface DispatchProps {
    onBackButtonClick?: () => void;
}
export interface Props extends OwnProps, DispatchProps, UFSChildPanelProps {
}
export interface PrivateProps extends OwnProps {
    backgroundColor: string;
}
declare var _default: React.ComponentClass<Props>;
export default _default;
