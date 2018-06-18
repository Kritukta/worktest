import React, { Component, TextStyle } from 'react';
import {
    AppRegistry,
    H1,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    textStyles,
    Section,
    View,
    ViewStyle
} from 'ufs-mobile-platform';
import WidgetRKM from "../../containers/WidgetRKM/index.ios";

export default class App extends Component<{}, {}> {
    render() {
        return (
           <WidgetRKM unblocked>
                        <Section>
                          <H1>KPI, мнл рублей</H1>
                          <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                                <Text preset={textStyles.caption}>Доход</Text>
                                                <Text  preset={textStyles.heading}>15500</Text>
                                        </TableCell>
                                        <TableCell>
                                                 <Text preset={textStyles.caption}>НКД</Text>
                                                <Text  preset={textStyles.heading}>74</Text>
                                        </TableCell>
                                        <TableCell>
                                                <Text preset={textStyles.caption}>Активы</Text>
                                                <Text preset={textStyles.heading}>348</Text>
                                            </TableCell>
                                        <TableCell>
                                                <Text preset={textStyles.caption}>Пассивы</Text>
                                                <Text preset={textStyles.heading}>10</Text>
                                        </TableCell>
                                        <TableCell>
                                                <Text preset={textStyles.caption}>ФОТ</Text>
                                                <Text preset={textStyles.heading}>10</Text>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Section>
           </WidgetRKM>
        );
    }
}

AppRegistry.registerComponent("kpi", () => App);
