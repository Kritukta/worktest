/// <reference types="react" />
import React from 'react';
import { UFSSplitPanelNavigationController } from '../../SplitPanel';
import { ISplitPanelChildStateList } from '../../../../JSCore/Common/UFSInterfaces';
import { SplitPanel } from '../../SplitPanel/Bridge/UFSSplitPanelNavigationController';
import { Props as ChildPanelProps } from '../../SplitPanel/Bridge/UFSSplitPanelChildPanel';
export default class UFSContentPanelNavigationController extends UFSSplitPanelNavigationController {
    _getScenes(splitPanel?: SplitPanel): ISplitPanelChildStateList;
    _getComponent(): React.ComponentClass<ChildPanelProps>;
}
