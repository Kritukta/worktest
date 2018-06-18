
import React from 'react'
import { Image } from 'react-native'
import {

    View,
    Text,

} from 'ufs-mobile-platform'

import Styles from './styles/AgentCircleStyles'

export interface IAgetCircleProps {
    firstName: string | null;
    isExpandedMode?: boolean;
    lastName: string | null;
    testID: string;
	hasCrown: boolean;
	initials: string;
}

export interface ISmallAvatarProps {
    hasCrown: boolean;
    initials: string;
    testID: string;
}

interface ICrownProps {
        testID: string;
}

const Crown: React.SFC<ICrownProps> = (props: ICrownProps): React.ReactElement<View> => (
    <View
        testID={ props.testID + '_SmallAvatarCrownView' }
        style={ Styles.CrownView }>
        <Image
            testID={ props.testID + '_SmallAvatarCrownImage' }
            style={ Styles.CrownImage }
            source={ require('./Images/crown.png') } />
    </View>
)

const getCrown = (props: ISmallAvatarProps): JSX.Element | null => {
    if (!props.hasCrown) {
        return null
    }

    return <Crown testID={ props.testID + '_Crown' } />
}

export const AgentCircle = (props: IAgetCircleProps): React.ReactElement<View> => (
    <View style={props.isExpandedMode ? Styles.AgentCircleContainerFullScreen : Styles.AgentCircleContainer}>
        <View testID='test-id-63a4dff0-6f6a-a24f-b5ff-caa64fdfd812' style={Styles.AgentCircle}>
            <Text testID='test-id-9c44194d-c503-9d50-4331-2c1cac2ae398'
                  style={Styles.AgentCircleLabel}>
                {`${props.firstName && props.firstName.charAt(0).toUpperCase()}${props.lastName && props.lastName.charAt(0).toUpperCase()}`}
            </Text>
			{
                getCrown(props)
            }
        </View>
    </View>
)
