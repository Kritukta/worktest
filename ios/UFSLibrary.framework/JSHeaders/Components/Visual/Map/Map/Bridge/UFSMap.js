import React, { Component } from 'react';
import { UIManager, requireNativeComponent, View, StyleSheet } from 'react-native';
import { MapControls, MapTrafficButton } from '../../';
import { makeUFSErrorFromUserInfo } from '../../../../JSCore/Common/UFSError';
export const UFSMapSource = UIManager.UFSMapView.Constants.MapSource;
export const UFSRouteType = UIManager.UFSMapView.Constants.RouteType;
export default class UFSMapManager extends Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            this.props.onChange(event.nativeEvent.center, event.nativeEvent.zoom);
        };
        this.onError = (event) => {
            this.props.onError(makeUFSErrorFromUserInfo(event.nativeEvent.error));
        };
        this.handlePropsUpdate = (props) => {
            this.mapContent = React.Children.map(props.children, (child) => {
                if (child.type == MapControls) {
                    if (child.props) {
                        this.traverseMapControls(child.props.children);
                    }
                    return undefined;
                }
                else {
                    return child;
                }
            });
        };
        this.traverseMapControls = (mapControls) => {
            this.mapControls = React.Children.map(mapControls, (child) => {
                if (child.type == MapTrafficButton) {
                    this.trafficButton = child;
                    return undefined;
                }
                else {
                    return child;
                }
            });
        };
    }
    componentWillMount() {
        this.handlePropsUpdate(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.handlePropsUpdate(nextProps);
    }
    render() {
        return (React.createElement(UFSMap, {source: this.props.source, apiKey: this.props.apiKey, zoom: this.props.zoom, center: this.props.center, traffic: this.props.traffic, userLocation: this.props.userLocation, routeType: this.props.routeType, route: this.props.route, onChange: this.props.onChange ? this.onChange : undefined, onError: this.props.onError ? this.onError : undefined, style: this.props.style, testID: this.props.testID}, 
            React.createElement(View, {style: styles.controls}, this.mapControls), 
            this.trafficButton, 
            this.mapContent));
    }
}
UFSMapManager.defaultProps = {
    apiKey: '',
    center: { lat: 55.76, lng: 37.64 }
};
const styles = StyleSheet.create({
    controls: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        right: 0
    }
});
const UFSMap = requireNativeComponent('UFSMapView');
//# sourceMappingURL=UFSMap.js.map