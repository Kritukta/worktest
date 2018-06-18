import UFSAccessoryPanel from './UFSAccessoryPanel';
import { UFSSplitPanelNavigationController } from '../../SplitPanel';
export default class UFSAccessoryPanelNavigationController extends UFSSplitPanelNavigationController {
    _getScenes(splitPanel) {
        return (splitPanel) ? splitPanel.accessoryScenes : [];
    }
    _getComponent() {
        return UFSAccessoryPanel;
    }
}
//# sourceMappingURL=UFSAccessoryPanelNavigationController.js.map