import React from 'react';
import { View, Text, } from 'ufs-mobile-platform';
import Styles from './styles/AgentInfoRowStyles';
export const AgentInfoRow = (props) => (React.createElement(View, { testID: 'test-id-fe88c07bff4cf053', style: props.specialStyle ? props.specialStyle : Styles.AgentInfoRow },
    props.label ? React.createElement(Text, { testID: 'test-id-566f32920240201', style: Styles.AgentInfoRowLabel }, props.label) : null,
    React.Children.toArray(props.children)));
//# sourceMappingURL=AgentInfoRow.js.map