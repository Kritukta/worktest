/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewCustomerStyles';
import CustomerHoldingManaged from './Customer/CustomerHoldingManaged';
import CustomerManaged from './Customer/CustomerManaged';
import Customer from './Customer/Customer';
import { ShareDataView, } from 'mrmkmcib-dashboard';
import { AccessoryPanel, Button, CenterPageHeader, ContentPanel, H2, LeftPageHeader, NavigationBackButton, Page, RightPageHeader, SplitPanel, Text, View, Icon, IconType, Table, TableBody, TableCell, TableRow, } from 'ufs-mobile-platform';
import { LoaderWithText, RefreshBar, FullScreenError, } from 'mrmkmcib-app';
import { ContainerScope, ContainerActivity, EnumsScheduler, } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import ContainerMemberList from '../containers/ContainerMemberList';
import ContainerOccasionList from '../containers/ContainerOccasionList';
import ContainerEmployee from '../containers/ContainerEmployee';
import ContainerDealListSearch from '../containers/ContainerDealListSearch';
import { ICON_TYPES, IconItem, SearchInput, RNTableView, KeyboardAvoidingView, } from 'mrmkmcib-ui';
import * as Utils from '../common/Util';
// получить имя клиента для вывода в заголовке в режиме развернутой вкладки аналитика
const getCustomerName = (props) => {
    const customer = props.currentCustomerManaged.id ? props.currentCustomerManaged : props.currentCustomer;
    return (React.createElement(View, { testID: 'test-id-dc1abff9-e688-6b0d-2a0d-b5233884d704', style: Styles.Header },
        React.createElement(Text, { testID: 'test-id-2ab3b072-3f56-7c97-0887-c74ef6c06958', style: Styles.HeaderTitle }, customer.name),
        React.createElement(Text, { testID: 'test-id-9cddfd24-2f21-0857-c118-cb56b2837dfb', style: Styles.HeaderOrganizationType }, props.currentCustomerManaged.organizationType.value)));
};
const getRefreshBar = (props) => {
    if (props.customerFetching) {
        return null;
    }
    if (props.currentTab == Enums.CustomerManagedTab.DealList) {
        return null;
    }
    if (!props.customerCachedDate) {
        return null;
    }
    if (props.currentTab == Enums.CustomerManagedTab.ProductTypeList) {
        return null;
    }
    if (props.currentTab == Enums.CustomerManagedTab.Dashboard) {
        return null;
    }
    return (React.createElement(RefreshBar, { testID: 'test-id-fef42946', date: props.customerCachedDate, performRefresh: props.performFlush }));
};
const customerRow = (props, item) => {
    return (React.createElement(Table, { testID: `customerRow_1${item.id}` },
        React.createElement(TableBody, { testID: `customerRow_2${item.id}` },
            React.createElement(TableRow, { testID: `customerRow_3${item.id}`, key: item.id, onClick: () => {
                    props.performCustomerOpen(item.id, Enums.CustomerMode.SameType);
                } },
                React.createElement(TableCell, { testID: `customerRow_4${item.id}` },
                    React.createElement(View, { testID: `customerRow_5${item.id}`, style: Styles.SearchResultRowWrapper },
                        React.createElement(View, { testID: `customerRow_6${item.id}`, style: Styles.flex },
                            React.createElement(View, { testID: `customerRow_7${item.id}`, style: Styles.TopRow },
                                item.role.value ?
                                    React.createElement(View, { testID: `customerRow_8${item.id}`, style: Styles.OrangeLabel },
                                        React.createElement(Text, { testID: `customerRow_9${item.id}`, style: Styles.OrangeLabelText }, Utils.getRoleString(item.role.value)))
                                    : null,
                                React.createElement(Text, { testID: `customerRow_10${item.id}`, style: Styles.OrgType }, item.organizationType.value)),
                            React.createElement(View, { testID: `customerRow_11${item.id}` },
                                React.createElement(Text, { testID: `customerRow_11${item.id}`, style: Styles.Name }, item.name || item.shortName))),
                        React.createElement(Button, { testID: `customerRow_12${item.id}`, onExecute: () => {
                                props.performCustomerOpen(item.id, Enums.CustomerMode.SameType);
                            } },
                            React.createElement(Icon, { testID: `customerRow_13${item.id}`, type: IconType.MrmLink }))))))));
};
const getAffiliateListSearchContent = (props) => {
    let searchLocation = '';
    if (props.currentCustomerManaged.organizationType != null) {
        switch (props.currentCustomerManaged.organizationType.code) {
            case 'Account': {
                searchLocation = 'юр. лица';
                break;
            }
            case 'Holding': {
                searchLocation = 'холдинга';
                break;
            }
            case 'Branch': {
                searchLocation = 'филиала';
                break;
            }
        }
    }
    return (React.createElement(View, { testID: 'test-id-2ea92f3e-735e-b07d-1430-781960ef1f55' },
        (props.inputSearchAffiliateList === '' || props.affiliateSearchList.data.length > 0) ?
            React.createElement(View, { testID: 'test-id-20015874-c4de-fca7-aad1-3922f51721c7', style: (props.inputSearchAffiliateList === null || props.inputSearchAffiliateList === '') ?
                    Styles.searchNotFoundTextWrapperCentered :
                    Styles.searchNotFoundTextWrapper },
                React.createElement(Text, { testID: 'test-id-6e04ac9d-2b7d-a2fa-f3de-2eb5b35be631', style: Styles.searchNotFoundText }, `Поиск по составу ${searchLocation}`),
                React.createElement(Text, { testID: 'test-id-5939d001-dd30-2055-ee7e-f47441c11548', style: Styles.searchNotFoundTextBold }, props.currentCustomerManaged.name || props.currentCustomerManaged.shortName))
            :
                null,
        (props.inputSearchAffiliateList !== '' && props.affiliateSearchList.data.length === 0) ?
            React.createElement(View, { testID: 'test-id-f64126db-1146-1698-c2c9-f67358b2a223', style: Styles.searchNotFoundTextWrapperCentered },
                React.createElement(Text, { testID: 'test-id-118f66cd-e95d-1308-61d4-8c8e0b4c7e0c', style: Styles.searchNotFoundText }, 'Ничего не найдено')) :
            React.createElement(View, { testID: 'test-id-f28d3cee-edee-8319-31c4-c1142b654b2a', style: Styles.flex },
                React.createElement(RNTableView, { testID: 'test-id-4aefd1b6-89a9-d7e7-0b1b-62e84dcb12de', items: props.affiliateSearchList.data, rowHasChanged: (r1, r2) => {
                        return r1 !== r2;
                    }, renderRow: (item) => customerRow(props, item) }))));
};
const getCustomerContent = (props) => {
    if (props.isSearchModeAffiliateList) {
        return getAffiliateListSearchContent(props);
    }
    if (props.customerFetching) {
        return (React.createElement(View, { testID: 'test-id-fef42946-c6db-4f77-469f-daa01c19eed9', style: Styles.LoaderWrapper },
            React.createElement(LoaderWithText, { testID: 'test-id-be012551-8804-ec8c-99c5-a298d21a347d', text: 'Загрузка карточки клиента' })));
    }
    if (props.currentCustomerManaged.id && props.currentCustomerManaged.id != '') {
        if (props.currentCustomerManaged.isHolding) {
            return (React.createElement(View, { testID: 'test-id-c4078d0b-a150-fe44-a4fe-2ecfce45a8f7', style: Styles.main },
                React.createElement(CustomerHoldingManaged, Object.assign({ testID: 'test-id-43716b04-167a-fa5c-e9d4-829e0498fdae', customerManaged: props.currentCustomerManaged }, props)),
                getRefreshBar(props)));
        }
        else {
            return (React.createElement(View, { testID: 'test-id-09cb42ea-90a0-a8c3-3a66-ad2865cc7fca', style: Styles.FixedHeight },
                React.createElement(CustomerManaged, Object.assign({ testID: 'test-id-c694701b-db82-19f7-30ed-c10863b65208', customerManaged: props.currentCustomerManaged }, props)),
                getRefreshBar(props)));
        }
    }
    else if (props.currentCustomer.id && props.currentCustomer.id != '') {
        return (React.createElement(View, { testID: 'test-id-3f3ff2c0-f1f6-238f-0b6a-6a349f578b04', style: Styles.FixedHeight },
            React.createElement(Customer, Object.assign({ testID: 'test-id-7cde1c0c-1215-7e2c-f3ce-dfd42f244955', customer: props.currentCustomer }, props)),
            getRefreshBar(props)));
    }
    return (React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-236164d8b6e2', title: props.customerError && props.customerError.comment && props.customerError.comment !== '' ?
            props.customerError.comment :
            'Данные по клиенту не были получены', description: props.customerError && props.customerError.message && props.customerError.message !== '' ?
            props.customerError.message :
            null, onRefresh: () => props.performFlush() }));
};
const getTypeOfClientForActivityList = (props) => {
    if (Utils.isCustomerCategoryConglomerate(props.currentCustomerManaged.category)) {
        return EnumsScheduler.SchedulerMode.Conglomerate;
    }
    if (Utils.isTypeOrganizationHolding(props.currentCustomerManaged.organizationType)) {
        return EnumsScheduler.SchedulerMode.Holding;
    }
    return EnumsScheduler.SchedulerMode.Customer;
};
const getAccessoryContent = (props) => {
    if (props.currentCustomerManaged.id && props.currentCustomerManaged.id != '') {
        return (React.createElement(AccessoryPanel, { testID: 'test-id-f511r5de-3c08-37ce-7827-mf3b9a88f9q1' }, !props.isActivityAccessError ?
            React.createElement(ContainerScope, { instanceType: getTypeOfClientForActivityList(props), testID: 'test-id-e8dee869-d9c6-bb3a-d58a-1437049748q9' }) :
            React.createElement(View, { testID: "aebc337a-d836-47fe-acf1-0b790c2d2e75" })));
    }
    return (React.createElement(AccessoryPanel, { testID: 'test-id-f511r5de-3c08-37ce-7827-mf3b9a55f9q1' }, !props.isActivityAccessError ?
        React.createElement(Page, { testID: 'test-id-77f3e0cb-641d-637f-97f7-1d3d65f722qa', content: props.currentCustomerManaged.id && props.currentCustomerManaged.id != '' ?
                React.createElement(LoaderWithText, { testID: 'test-id-be012551-8844-ec8c-99c5-a298d21a347d', text: 'Загрузка' }) :
                React.createElement(View, { testID: 'test-id-be012551-8844-ec8c-99c5-a298d21a347d99' }) }) :
        React.createElement(View, { testID: "aebc337a-d836-47fe-acf1-0b790c2d2e75" })));
};
const getShareDataView = (props) => {
    return (React.createElement(ShareDataView, Object.assign({ testID: 'test-id-c331d384-886c-f1df-fb71-75256c190518', isDashboardExpandedMode: props.isDashboardExpandedMode, fromOutside: true, isRepresentationVisible: false }, props)));
};
const toggleShareDataPopover = (props) => {
    if (props.isVisiblePopoverShare) {
        props.performPopoverShareHide();
    }
    else {
        props.performPopoverShareShow();
    }
};
const getLeftPageHeader = (props) => {
    if (props.isSearchModeAffiliateList) {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7600ca435812123123' },
            React.createElement(SearchInput, { value: props.inputSearchAffiliateList, placeholder: 'Поиск по наименованию', onChange: props.performInputSearchAffiliateList, onCancel: props.performSearchAffiliateListDisable, autoFocus: true, drawBottomBorder: true })));
    }
    else {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-d4d20e45-befb-ba01-0e41-64054f5963f4' },
            React.createElement(NavigationBackButton, { testID: 'test-id-e9cff21a-6e90-1586-3b68-d0349acda868', title: false, onClick: props.navigateBack })));
    }
};
const getCenterPageHeader = (props) => {
    if (props.isSearchModeAffiliateList) {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-f0b5ad2b-f9bd-6a7d-e305-9008abeca791' }));
    }
    else {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-cf084ae4-c795-b554-48ee-142ca8d4d248' }, props.isDashboardExpandedMode ?
            getCustomerName(props) :
            React.createElement(H2, { testID: 'test-id-fd3f3c0d-1219-f4b2-8ccf-98d32473aad1' }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")));
    }
};
const getRightPageHeader = (props) => {
    if (props.isSearchModeAffiliateList) {
        return (React.createElement(RightPageHeader, { testID: 'test-id-a726b522-2a30-b014-3e71-f529198c7a83' }));
    }
    else {
        return (props.currentTab == Enums.CustomerManagedTab.Dashboard ?
            React.createElement(RightPageHeader, { testID: 'test-id-2cfa8609-844b-5233-f591-e2dce031d010' },
                React.createElement(IconItem, { testID: 'test-id-8d0993b4-c860-72f1-4179-cde890351ce8', type: props.isDashboardExpandedMode ? ICON_TYPES.RESIZE : ICON_TYPES.RESIZE_MAX, onPress: () => props.performDashboardExpandedModeToggle() })) :
            React.createElement(RightPageHeader, { testID: 'test-id-2cfa8609-844b-5233-f591-e2dce031d010-refresh' }));
    }
};
const getAccessoryPanel = (props) => {
    return (!props.isDashboardExpandedMode ?
        getAccessoryContent(props) :
        React.createElement(View, { testID: 'test-id-879a02ff-1c9a-aaa6-97c5-d35a48638745' }));
};
const getCustomerContentKeyboardAvoiding = (props) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: { flex: 1, maxHeight: 740 }, keyboardVerticalOffset: 0, style: { flex: 1 } }, getCustomerContent(props)));
const getKeyboardAvoidingContainer = (child) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: { flex: 1, maxHeight: 740 }, keyboardVerticalOffset: 0, style: { flex: 1 } }, child));
const ViewCustomer = (props) => (React.createElement(SplitPanel, { testID: 'test-id-1911df3a-c3e8-dd93-91e6-79bc454ff288', id: Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer) },
    React.createElement(ContentPanel, { testID: 'test-id-691ee770-2f30-8196-2380-6e5fe14f82ea', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-c6099d61-1261-48a4-cd98-1946d3050f0f', scrollEnabled: false, content: getCustomerContentKeyboardAvoiding(props) },
            getLeftPageHeader(props),
            getCenterPageHeader(props),
            getRightPageHeader(props)),
        React.createElement(Page, { testID: 'test-id-ViewCustomer-ContainerMemberList-Page', scrollEnabled: false, content: getKeyboardAvoidingContainer(React.createElement(ContainerMemberList, { testID: 'test-id-ViewCustomer-ContainerMemberList' })) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ViewCustomer-ContainerMemberList-LeftPageHeader' })),
        React.createElement(Page, { testID: 'test-id-ViewActivity-ContainerActivity-Page', scrollEnabled: false, content: React.createElement(ContainerActivity, { instanceType: EnumsScheduler.SchedulerMode.Customer, testID: 'test-id-ViewCustomer-ContainerActivity' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ViewActivity-ContainerActivity-LeftPageHeader' })),
        React.createElement(Page, { testID: 'test-id-ViewActivity-ContainerOccasionList-Page', scrollEnabled: false, content: React.createElement(ContainerOccasionList, { testID: 'test-id-ViewCustomer-ContainerOccasionList' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ViewActivity-ContainerOccasionList-LeftPageHeader' })),
        React.createElement(Page, { testID: 'test-id-ViewCustomer-EmployeeView-Page', scrollEnabled: false, content: React.createElement(ContainerEmployee, { testID: 'test-id-ViewCustomer-ContainerEmployee' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ViewActivity-ContainerOccasionList-LeftPageHeader' })),
        React.createElement(Page, { testID: 'test-id-ViewCustomer-ContainerDealListSearch-Page', scrollEnabled: false, content: React.createElement(ContainerDealListSearch, { testID: 'test-id-ViewCustomer-ContainerDealListSearch' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ViewCustomer-ContainerDealListSearch-LeftPageHeader' }))),
    getAccessoryPanel(props)));
/*{
    props.isQlikLoggedIn ?
        (
            <NavigationIconButton
                testID='test-id-4c72195d-a768-9b82-7c05-30658da40092'
                type={NavigationIconButtonType.SHARE}
                onExecute={() => {
                    {
                        getShareDataView(props)
                    }
                    toggleShareDataPopover(props)
                }}
            />
        ) :
        null
}*/
export default ViewCustomer;
//# sourceMappingURL=ViewCustomer.js.map