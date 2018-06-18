import Accessory from './Accessory';
import Content from './Content';
import React, { Component } from 'react';
import {
    AccessoryPanel,
    CenterPageHeader,
    ContentPanel,
    H2,
    Page,
    View,
    Section,
    Text,
    SplitPanel
} from 'ufs-mobile-platform';

export default class HelloWorldPanelRoot extends Component<{}, {}> {
    render() {
        return (
            <SplitPanel id="WelcomeItem">
                <ContentPanel>
                    <Section>
                        <Text>скоро будут бандлы </Text>
                    </Section>
                </ContentPanel>
            </SplitPanel>
        );
    }
}