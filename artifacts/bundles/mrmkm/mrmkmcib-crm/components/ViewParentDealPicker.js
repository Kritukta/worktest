/*
 * Created by Gladkov E.N.
 */
import React from 'react';
import Styles from './styles/ViewParentDealPickerStyles';
import { ContentPanel, LeftPageHeader, Page, SplitPanel, View, } from 'ufs-mobile-platform';
import { EnumsCrm } from 'mrmkmcib-crm';
import * as Utils from '../common/Util';
import ViewParentDealPickerCustomerList from './ViewParentDealPickerCustomerList';
import ViewParentDealPickerDealList from './ViewParentDealPickerDealList';
export const ViewParentDealPicker = (props) => (React.createElement(View, { testID: 'test-id-7e4091cf-e232-26e9-99de-65c5d91e771b', style: Styles.LoaderWrapper },
    React.createElement(SplitPanel, { testID: 'test-id-fefefc4d-4ae6-904b-7205-79ff47de822711', id: Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker) },
        React.createElement(ContentPanel, { testID: 'test-id-ad7b37bf-81f9-f00e-1c0c-9351ce1de8f6', style: Styles.contentPanel },
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-3ete3' // page Enums.NavigationContentParentDealPicker.CustomerPickerScreen
                , scrollEnabled: false, content: React.createElement(ViewParentDealPickerCustomerList, Object.assign({}, props)) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye12' })),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-3ete4' // page Enums.NavigationContentParentDealPicker.DealPickerScreen
                , scrollEnabled: false, content: React.createElement(ViewParentDealPickerDealList, Object.assign({}, props)) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye12' }))))));
export default ViewParentDealPicker;
//# sourceMappingURL=ViewParentDealPicker.js.map