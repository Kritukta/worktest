import { Component } from 'react';
export default class UFSSplitPanelChildPanel extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            // need to pass this reference to navigatorIOS
            // in order to force update when navigatorIOS props changes
            // NavigatorIOS Issue: https://github.com/facebook/react-native/issues/795
            this.props.registerChildComponent(this);
        };
        this.componentWillUnmount = () => {
            this.props.unregisterChildComponent();
        };
        this.onNavigationPropsUpdate = (children) => {
            this.setState({
                children
            });
        };
        this.state = {
            children: props.children
        };
    }
}
//# sourceMappingURL=UFSSplitPanelChildPanel.js.map