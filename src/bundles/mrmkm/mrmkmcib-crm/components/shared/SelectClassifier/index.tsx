import React from 'react'
import {
    Page,
    RadioGroup,
    View,
    RadioButton,
    LeftPageHeader,
    NavigationBackButton,
    CenterPageHeader,
    H2,
    KeyboardType,
    NavigationIconButtonType,
    StyleSheet,
} from 'ufs-mobile-platform'

import {Models as ModelsApp} from 'mrmkmcib-app'
import {Enums} from '../../../Enums'

export interface ISelectClassifierProps {
    performSelect: (value: ModelsApp.Classifier,)=> void,
    classifierList: ModelsApp.ClassifierList
    selectedCode: string | undefined | null,
    testID: string,
    navigateBack?: ()=>void ,
    renderMode?: Enums.ClassifierRenderMode | null,
}

const renderValue = (classifier: ModelsApp.Classifier,
                     renderMode: Enums.ClassifierRenderMode | undefined | null = Enums.ClassifierRenderMode.Default) => {

    switch (renderMode) {

        case (Enums.ClassifierRenderMode.CodeWithValue): return `${classifier.code} (${classifier.value})`
        case (Enums.ClassifierRenderMode.Code): return classifier.code
        default: return classifier.value
    }
}

export const SelectClassifier = (props: ISelectClassifierProps) => (
    <Page testID='test-id-bec3822a-ec44-9f33-c078-a44186f36f0b' scrollEnabled={true}
          content={<View testID='test-id-bec3822a-ec44-9f33-c078-a44186f36f0b'
                         style={{marginTop: 20, marginBottom: 20}}>
              <RadioGroup testID='test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979'
                          value={props.selectedCode || undefined}
                          onChange={(index, value) => props.performSelect(props.classifierList.data[index])}>
                  {props.classifierList.data.map((classifier: ModelsApp.Classifier) => <RadioButton
                      testID='test-id-b915294d-16cc-bb9b-e848-89be70954ffe' key={`radio-${classifier.code}`}
                      value={classifier.code}
                      label={ renderValue(classifier, props.renderMode) }
                  />)}
              </RadioGroup>
          </View>}>
        {props.navigateBack ? [
            <LeftPageHeader testID='test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f'>
                <NavigationBackButton testID='test-id-bec4a269-fee7-73aa-6dbb-42bbbbec3e09' title={false}
                                      onClick={props.navigateBack}/>
            </LeftPageHeader>,
            <CenterPageHeader testID='test-id-05e1fbbd-6557-1330-c538-530817c9af4e'>
                <H2 testID='test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3aa6'>Выбор значения классификатора</H2>
            </CenterPageHeader>] : <LeftPageHeader testID='test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f1'/>}
    </Page>
)
