
import React, {ReactNode} from 'react'
import {

    View,
    Text,

} from 'ufs-mobile-platform'

import Styles from './styles/AgentInfoRowStyles'

export interface IAgentInfoRowProps {
    label?: string | null,
    specialStyle?: number | any,
    children?: ReactNode[],
    testID: string,
}


export const AgentInfoRow = (props: IAgentInfoRowProps): React.ReactElement<View> => (
    <View testID='test-id-fe88c07bff4cf053'
          style={props.specialStyle ? props.specialStyle : Styles.AgentInfoRow}>
        {props.label ? <Text testID='test-id-566f32920240201'
                             style={Styles.AgentInfoRowLabel}>{props.label}</Text> : null}
        {React.Children.toArray(props.children)}
    </View>
)
