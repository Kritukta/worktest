import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSTableHeadManager extends React.Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    noPaddings: this.props.noPaddings
                });
            }
            else {
                return child;
            }
        });
        return (React.createElement(UFSTableHead, {style: this.props.style, noPaddings: this.props.noPaddings, testID: this.props.testID}, childrenWithProps));
    }
}
const UFSTableHead = requireNativeComponent('UFSTableHeadView');
//# sourceMappingURL=UFSTableHead.js.map