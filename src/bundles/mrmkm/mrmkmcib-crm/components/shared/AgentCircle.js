import React from 'react';
import { Image } from 'react-native';
import { View, Text, } from 'ufs-mobile-platform';
import Styles from './styles/AgentCircleStyles';
const Crown = (props) => (React.createElement(View, { testID: props.testID + '_SmallAvatarCrownView', style: Styles.CrownView },
    React.createElement(Image, { testID: props.testID + '_SmallAvatarCrownImage', style: Styles.CrownImage, source: require('./Images/crown.png') })));
const getCrown = (props) => {
    if (!props.hasCrown) {
        return null;
    }
    return React.createElement(Crown, { testID: props.testID + '_Crown' });
};
export const AgentCircle = (props) => (React.createElement(View, { style: props.isExpandedMode ? Styles.AgentCircleContainerFullScreen : Styles.AgentCircleContainer },
    React.createElement(View, { testID: 'test-id-63a4dff0-6f6a-a24f-b5ff-caa64fdfd812', style: Styles.AgentCircle },
        React.createElement(Text, { testID: 'test-id-9c44194d-c503-9d50-4331-2c1cac2ae398', style: Styles.AgentCircleLabel }, `${props.firstName && props.firstName.charAt(0).toUpperCase()}${props.lastName && props.lastName.charAt(0).toUpperCase()}`),
        getCrown(props))));
//# sourceMappingURL=AgentCircle.js.map