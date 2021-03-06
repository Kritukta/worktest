import React from 'react';
import { requireNativeComponent } from 'react-native';
export default class UFSTableBodyManager extends React.Component {
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
        return (React.createElement(UFSTableBody, {testID: this.props.testID}, childrenWithProps));
    }
}
const UFSTableBody = requireNativeComponent('UFSTableBodyView');
//# sourceMappingURL=UFSTableBody.js.map