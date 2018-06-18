import UFSContentPanel from './UFSContentPanel';
import { UFSSplitPanelNavigationController } from '../../SplitPanel';
export default class UFSContentPanelNavigationController extends UFSSplitPanelNavigationController {
    _getScenes(splitPanel) {
        return (splitPanel) ? splitPanel.contentScenes : [];
    }
    _getComponent() {
        return UFSContentPanel;
    }
}
//# sourceMappingURL=UFSContentPanelNavigationController.js.map