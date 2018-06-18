import React from 'react';
import { Page, RadioGroup, View, RadioButton, LeftPageHeader, NavigationBackButton, CenterPageHeader, H2, } from 'ufs-mobile-platform';
import { Enums } from '../../../Enums';
const renderValue = (classifier, renderMode = Enums.ClassifierRenderMode.Default) => {
    switch (renderMode) {
        case (Enums.ClassifierRenderMode.CodeWithValue): return `${classifier.code} (${classifier.value})`;
        case (Enums.ClassifierRenderMode.Code): return classifier.code;
        default: return classifier.value;
    }
};
export const SelectClassifier = (props) => (React.createElement(Page, { testID: 'test-id-bec3822a-ec44-9f33-c078-a44186f36f0b', scrollEnabled: true, content: React.createElement(View, { testID: 'test-id-bec3822a-ec44-9f33-c078-a44186f36f0b', style: { marginTop: 20, marginBottom: 20 } },
        React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: props.selectedCode || undefined, onChange: (index, value) => props.performSelect(props.classifierList.data[index]) }, props.classifierList.data.map((classifier) => React.createElement(RadioButton, { testID: 'test-id-b915294d-16cc-bb9b-e848-89be70954ffe', key: `radio-${classifier.code}`, value: classifier.code, label: renderValue(classifier, props.renderMode) })))) }, props.navigateBack ? [
    React.createElement(LeftPageHeader, { testID: 'test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f' },
        React.createElement(NavigationBackButton, { testID: 'test-id-bec4a269-fee7-73aa-6dbb-42bbbbec3e09', title: false, onClick: props.navigateBack })),
    React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbbd-6557-1330-c538-530817c9af4e' },
        React.createElement(H2, { testID: 'test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430"))
] : React.createElement(LeftPageHeader, { testID: 'test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f1' })));
//# sourceMappingURL=index.js.map