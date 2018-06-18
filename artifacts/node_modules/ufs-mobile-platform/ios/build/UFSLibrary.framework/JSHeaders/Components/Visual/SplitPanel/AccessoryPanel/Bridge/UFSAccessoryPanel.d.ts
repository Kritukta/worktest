/// <reference types="react" />
import React from 'react';
import { Props as ChildPanelProps } from '../../SplitPanel/Bridge/UFSSplitPanelChildPanel';
export interface OwnProps {
    testID?: string;
}
export interface DispatchProps {
    onBackButtonClick?: () => void;
}
export interface Props extends OwnProps, DispatchProps, ChildPanelProps {
}
declare var _default: React.ComponentClass<Props>;
export default _default;
