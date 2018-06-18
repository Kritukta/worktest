import React, { Component} from 'react';
import {
    AppRegistry,
    H1,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Text,
    textStyles,
    Section,
    View,
    ViewStyle
} from 'ufs-mobile-platform';
import ArrowUnicode from "../../components/common/ArrowUnicode/index.ios";

import WidgetRKM from "../../containers/WidgetRKM/index.ios";


export default class App extends Component<{}, {}> {
    render() {
        return (
            <WidgetRKM unblocked>
                            <Section>
                                <H1>Pipeline по сделкам</H1>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Text preset={textStyles.caption}>Кредитные, сумма</Text>
                                                <Text  preset={textStyles.heading}>
                                                    <ArrowUnicode direction="up"/>
                                                    234600 Р
                                                </Text>
                                            </TableCell>
                                            <TableCell>
                                                <Text preset={textStyles.caption}>Кредитные</Text>
                                                <Text  preset={textStyles.heading}>
                                                    <ArrowUnicode direction="up"/>
                                                    24 шт.</Text>
                                            </TableCell>
                                            <TableCell>
                                                <Text preset={textStyles.caption}>Не кредитные</Text>
                                                <Text preset={textStyles.heading}>
                                                   <ArrowUnicode direction="down"/>
                                                    7 шт.</Text>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Section>
            </WidgetRKM>
        );
    }
}



AppRegistry.registerComponent("pipeline", () => App);
