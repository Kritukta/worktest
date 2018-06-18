/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { H1, OptionItem, TabSelector, Text, View, } from 'ufs-mobile-platform';
import { ContainerDealList } from "mrmkmcib-crm";
import { Enums } from '../../Enums';
import Styles from './styles/CustomerHoldingManagedStyles';
import { Breadcrumbs } from 'mrmkmcib-ui';
import CustomerManagedTabMain from './CustomerManagedTabMain';
import CustomerManagedTabOwnerList from './CustomerManagedTabOwnerList';
import { ContainerCustomerDashboard } from 'mrmkmcib-dashboard';
const getMappedHistory = (hierarchy) => {
    const history = hierarchy.map((item, i) => {
        return { title: item.name, key: item.id, accessible: true, testID: `test-id-getMappedHistory-${item.id}` };
    });
    return history;
};
const getBreadCrumbs = (props) => {
    if (props.customerManaged.hierarchy && props.customerManaged.hierarchy.length === 0) {
        return null;
    }
    else {
        return (React.createElement(View, { testID: 'test-id-f4593c8d-55fc-07c7-9643-1652e40c7cde', style: Styles.Breadcrumbs },
            React.createElement(Breadcrumbs, { onTap: (id) => {
                    props.performCustomerOpen(id, Enums.CustomerMode.SameType);
                }, items: getMappedHistory(props.customerManaged.hierarchy) })));
    }
};
const getTabSelector = (props) => {
    return (React.createElement(TabSelector, { testID: 'test-id-cf4af0be-d2dc-37d4-4f6d-3ee5e7eced8a', style: Styles.TabSelector, value: props.currentTab.toString(), onChange: (index, value) => {
            props.performChangeTab(index, parseInt(value));
        } },
        React.createElement(OptionItem, { testID: 'test-id-3584520c-5bb8-d94b-3a75-ebfddda8d437', value: Enums.CustomerManagedTab.Main.toString(), title: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' }),
        (props.customerManaged.category.code != 'Conglomerate') ?
            React.createElement(OptionItem, { testID: 'test-id-f51a93ad-4118-6045-fd9d-d121c7d44f6f', value: Enums.CustomerManagedTab.DealList.toString(), title: '\u0421\u0434\u0435\u043B\u043A\u0438' }) :
            null,
        React.createElement(OptionItem, { testID: 'test-id-b67a2509-2050-ab14-d0dd-f9ea6fd98d25', value: Enums.CustomerManagedTab.Dashboard.toString(), title: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430' })));
};
const getTabContent = (props) => {
    const currentTab = props.currentTab;
    switch (currentTab) {
        case Enums.CustomerManagedTab.Main:
            const withHierarchy = props.customerManaged.hierarchy && props.customerManaged.hierarchy.length > 0;
            return (React.createElement(View, { testID: 'test-id-486ba13b-fdba-d833-70c1-5534c5886080', style: withHierarchy ? Styles.fixedHeightSmall : Styles.fixedHeight },
                React.createElement(CustomerManagedTabMain, Object.assign({ testID: 'test-id-ab167d97-eec7-4522-1904-a6991a622cd0' }, props))));
        case Enums.CustomerManagedTab.DealList:
            return React.createElement(View, { testID: 'test-id-77e6d053-ef8f-9084-9bc0-bb558ad341ca', style: Styles.DealListWrapper },
                React.createElement(ContainerDealList, { testID: 'test-id-86696e6d-ed6b-360b-2c0d-e1745f7b270e' }));
        case Enums.CustomerManagedTab.OwnerList:
            return React.createElement(CustomerManagedTabOwnerList, Object.assign({ testID: 'test-id-2de6d1f6-6687-cdb3-f914-cb7f1e773db8' }, props));
        case Enums.CustomerManagedTab.Dashboard:
            return React.createElement(View, { testID: 'test-id-486ba13b-fdba-d833-70c1-5534c5886093', style: [Styles.dashboardContainer] },
                React.createElement(ContainerCustomerDashboard, { testID: 'test-id-e2018616-fbda-963b-54ff-2d6a52ea6003' }));
        default:
            return React.createElement(CustomerManagedTabMain, Object.assign({ testID: 'test-id-42478c26-f096-ad36-a72a-8009c9051e01' }, props));
    }
};
const getHeader = (props) => {
    const isConglomerate = props.currentCustomerManaged.category.code == 'Conglomerate';
    return (React.createElement(View, { testID: 'test-id-66815dae-0aed-5323-28f9-8398c9436302', style: Styles.Header },
        React.createElement(H1, { testID: 'test-id-6d6a7159-f8a8-e5fa-605c-ec04bb5cec6e', numberOfLines: 3 }, props.customerManaged.name),
        React.createElement(Text, { testID: 'test-id-4f0296ed-8c56-2fc0-fe22-e6854b03b66b', style: Styles.OrganizationType }, isConglomerate ?
            'Конгломерат' :
            props.customerManaged.organizationType.value)));
};
const getContent = (props) => {
    if (!props.isDashboardExpandedMode) {
        return (React.createElement(View, { testID: 'test-id-4afd34fa-b729-4218-ce75-8497c0a00a5f' },
            getBreadCrumbs(props),
            getHeader(props),
            React.createElement(View, { testID: 'test-id-cefef517-838f-c442-55a2-a89d36da6050', style: Styles.TabWrapper }, getTabSelector(props))));
    }
};
const CustomerHoldingManaged = (props) => (React.createElement(View, { testID: 'test-id-component-CustomerHoldingManaged', style: props.currentTab === Enums.CustomerManagedTab.DealList ?
        Styles.mainNoPaddingBottom :
        Styles.main },
    getContent(props),
    getTabContent(props)));
export default CustomerHoldingManaged;
//# sourceMappingURL=CustomerHoldingManaged.js.map