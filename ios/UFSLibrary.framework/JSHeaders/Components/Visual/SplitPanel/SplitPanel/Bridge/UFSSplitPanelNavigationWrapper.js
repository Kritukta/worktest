import { Component } from 'react';
export default class UFSSplitPanelNavigationWrapper extends Component {
    constructor(props) {
        super(props);
        this.registerChildComponent = (childComponent) => {
            this.childComponents.push(childComponent);
        };
        this.unregisterChildComponent = () => {
            // TODO: I think we should unregister by reference;
            // just popping seems incorrect(I think order of unregisterng could be different)
            this.childComponents.pop();
        };
        this.childComponents = [];
    }
    componentWillReceiveProps(nextProps) {
        for (let childComponent of this.childComponents) {
            childComponent.onNavigationPropsUpdate(nextProps.children);
        }
    }
    componentDidMount() {
        for (let childComponent of this.childComponents) {
            if (typeof childComponent.onNavigationReady === 'function') {
                childComponent.onNavigationReady(this.refs['navigator']);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // true doesnt work anyway because of
        // https://github.com/facebook/react-native/issues/795
        return false;
    }
    defaultNavigatorProps() {
        return {
            title: '',
            translucent: false,
            interactivePopGestureEnabled: true,
            navigationBarHidden: true,
            passProps: {
                children: this.props.children,
                registerChildComponent: this.registerChildComponent,
                unregisterChildComponent: this.unregisterChildComponent,
                panelId: this.props.panelId,
                showAutoBackButton: this.props.showAutoBackButton,
                style: this.props.style
            }
        };
    }
}
UFSSplitPanelNavigationWrapper.defaultProps = {
    showAutoBackButton: false
};
//# sourceMappingURL=UFSSplitPanelNavigationWrapper.js.map