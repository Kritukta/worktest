import React from 'react';
import { Page, RadioGroup, View, Text, RadioButton, LeftPageHeader, NavigationBackButton, CenterPageHeader, H2, KeyboardType, NavigationIconButtonType, NavigationIconButton, SplitPanel, RightPageHeader, ContentPanel, NavigationTextButton, Panel, PanelType, } from 'ufs-mobile-platform';
import * as util from '../../common/Util';
import Styles from './styles/SelectClassifierWithSearchStyles';
import { SearchInput } from 'mrmkmcib-ui';
const _getMainContent = (props) => (React.createElement(View, { testID: 'test-id-43etg', style: Styles.mainView },
    props.isSearchLineVisible
        ? React.createElement(View, { testID: 'test-id-7acd23fe-6e1d-fb9f-05c5-2435hyn', style: Styles.searchContainer },
            React.createElement(SearchInput, { value: props.searchValue || '', onCancel: props.hideSearchLine, keyboardType: KeyboardType.Email, onChange: (value) => props.performSearch(value), placeholder: 'Введите название', autoFocus: true }))
        : null,
    props.warningMessage
        ? React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-2431efvqe', style: Styles.validationErrorContainer },
            React.createElement(Panel, { testID: 'test-id-9596a436-e524-bdd4-5261-2431efvqe', type: PanelType.WARNING_BOX, hasIcon: false },
                React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-8647534gasdv', style: Styles.validationErrorText },
                    React.createElement(Text, { testID: 'test-id-9596a436-e524-bdd4-5261-35tgwevq' }, props.warningMessage))))
        : null,
    props.isNotFound
        ? React.createElement(View, { testID: 'test-id-6761f191-c0cd-b8da-c4b5-400ace27a553', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-b38edd02-939f-2b71-c922-138198125d4f', style: Styles.searchNotFoundText }, 'Результатов не найдено'))
        : null,
    React.createElement(RadioGroup, { testID: 'test-id-9052b0979', value: props.selectedCode || undefined, onChange: (index, value) => props.performSelect(props.searchList.data[index]) }, props.searchList.data.map((e, i) => (React.createElement(RadioButton, { testID: 'test-id-b9152954ffe', key: `radio-${e.code}-${i}`, value: e.code, label: util.getRowTemplate(e, props.mode) }))))));
const ContentPanelPage = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea', scrollEnabled: true, content: _getMainContent(props) }, getPageNavigation(props)));
const FullScreenPage = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea', scrollEnabled: true, content: React.createElement(View, { style: Styles.memberListSearchContentContainer },
        React.createElement(View, { style: Styles.widthContainer }, _getMainContent(props))) }, getPageNavigation(props)));
const getPageNavigation = (props) => (props.isSearchLineVisible
    ? React.createElement(LeftPageHeader, { testID: 'test-id-b25f4dd9703f' })
    : [
        React.createElement(LeftPageHeader, { testID: 'test-id-b25f4dd9703f', key: 'LeftPageHeader' },
            React.createElement(NavigationBackButton, { testID: 'test-id-bec4a2bbbec3e09', title: false, onClick: () => {
                    props.navigateBack();
                }, key: 'NavigationBackButton' }),
            props.navigateBackButtonTitle
                ? React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-ViewMemberList-3` },
                    React.createElement(NavigationTextButton, { testID: `test-id-ViewMemberList-4`, title: props.navigateBackButtonTitle, onExecute: () => {
                            props.navigateBack();
                        } }))
                : null),
        React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbc9af4e', key: 'CenterPageHeader' },
            React.createElement(H2, { testID: 'test-id-dcf9b8e6b3aa6', key: 'H2' }, props.pageName)),
        React.createElement(RightPageHeader, { testID: 'test-id-0c51abfd-82aa-cd18-da87-f5ade5cbcd60', key: 'RightPageHeader' }, props.isSearchEnable
            ? React.createElement(NavigationIconButton, { testID: 'test-id-93d6e8d2-8d14-fcb4-050c-be6b209c5e87', type: NavigationIconButtonType.SEARCH, onExecute: props.showSearchLine, key: 'NavigationIconButton' })
            : null)
    ]);
export const ViewSelectClassifierWithSearch = (props) => (React.createElement(SplitPanel, { testID: 'test-id-75014a3d5e7fbfad55', id: "SplitPanel-ViewSelectClassifierWithSearch" },
    React.createElement(ContentPanel, { testID: 'test-id-42ada362644d57e53a', style: Styles.contentPanel }, props.isFullScreenEnabled
        ? FullScreenPage(props)
        : ContentPanelPage(props))));
//# sourceMappingURL=ViewSelectClassifierWithSearch.js.map