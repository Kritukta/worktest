import React from 'react';
// Interval of pulling NavigatorIOS to check if its ready to perform navigation methods. In ms
const UFSNavigatorPullingInterval = 8;
export default class UFSSplitPanelNavigationController extends React.Component {
    constructor(props) {
        super(props);
        this.onNavigationPropsUpdate = (children) => {
            this.children = children;
        };
        this.onNavigationReady = (navigatorRef) => {
            this.navigatorRef = navigatorRef;
            // More info: https://github.com/facebook/react-native/issues/1771
            var isReadyHandler = setInterval(() => {
                if (this.navigatorRef.state.makingNavigatorRequest) {
                    clearInterval(isReadyHandler);
                    this.isReady = true;
                    this.processQueue();
                }
            }, UFSNavigatorPullingInterval);
        };
        this.processQueue = () => {
            if (!this.isReady) {
                return;
            }
            const isQueueEmpty = this.navEventsQueue.length === 0;
            if (isQueueEmpty) {
                return;
            }
            let navEvent = this.navEventsQueue[0];
            // We need to postpone pushing until all children will be updated
            this.pushingTimeout = setTimeout(() => {
                if (this.isComponentMounted) {
                    if (navEvent.isPop) {
                        this.props.navigator.popN(navEvent.popCount);
                    }
                    else {
                        this.props.navigator.push({
                            component: this._getComponent(),
                            translucent: false,
                            interactivePopGestureEnabled: true,
                            navigationBarHidden: true,
                            passProps: {
                                id: navEvent.pageId,
                                panelId: this.props.panelId,
                                showAutoBackButton: this.props.showAutoBackButton,
                                style: this.props.style,
                                children: this.children,
                                registerChildComponent: this.props.registerChildComponent,
                                unregisterChildComponent: this.props.unregisterChildComponent
                            }
                        });
                    }
                }
            }, 0);
            setTimeout(() => {
                this.navEventsQueue.shift();
                this.processQueue();
            }, 700);
        };
        this.children = props.children;
        this.navEventsQueue = [];
        this.isReady = false;
        this.isComponentMounted = false;
    }
    _getScenes(splitPanel) {
        throw new Error("Method _getScenes should be implemented in subclass");
    }
    _getComponent() {
        throw new Error("Method _getComponent should be implemented in subclass");
    }
    componentWillMount() {
        this.isComponentMounted = true;
        const { store } = this.context;
        this.scenes = this._getScenes();
        this.unsubscribe = store.subscribe(this.handleStoreUpdate.bind(this));
        this.initialId = 0;
    }
    componentDidMount() {
        this.props.registerChildComponent(this);
    }
    componentWillUnmount() {
        this.isComponentMounted = false;
        if (this.pushingTimeout) {
            // Should not push if component is in unmouting process
            clearTimeout(this.pushingTimeout);
        }
        this.unsubscribe();
        this.props.unregisterChildComponent();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        const Component = this._getComponent();
        return (React.createElement(Component, {id: this.initialId, panelId: this.props.panelId, showAutoBackButton: this.props.showAutoBackButton, style: this.props.style, children: this.children, registerChildComponent: this.props.registerChildComponent, unregisterChildComponent: this.props.unregisterChildComponent}));
    }
    handleStoreUpdate() {
        const { store } = this.context;
        const splitPanel = store.getState().splitPanels[this.props.panelId];
        if (!splitPanel) {
            return;
        }
        var newScenes = this._getScenes(splitPanel);
        var navEvent;
        if (newScenes.length > this.scenes.length) {
            navEvent = {
                pageId: newScenes[newScenes.length - 1].id,
                isPop: false
            };
        }
        else if (newScenes.length < this.scenes.length) {
            navEvent = {
                isPop: true,
                popCount: this.scenes.length - newScenes.length
            };
        }
        if (navEvent) {
            this.navEventsQueue.push(navEvent);
            const shouldStartProcessingQueue = (this.navEventsQueue.length === 1) && this.isReady;
            if (shouldStartProcessingQueue) {
                this.processQueue();
            }
        }
        this.scenes = newScenes;
    }
}
UFSSplitPanelNavigationController.contextTypes = {
    store: React.PropTypes.object.isRequired
};
//# sourceMappingURL=UFSSplitPanelNavigationController.js.map