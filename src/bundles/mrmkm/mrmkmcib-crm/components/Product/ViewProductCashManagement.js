/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, LeftPageHeader, ContentPanel, Grid, H2, HorizontalRule, Label, NavigationBackButton, NavigationTextButton, Page, Row, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductCashManagementStyles';
import * as util from '../../common/Util';
const getContentPanelContent = (props) => {
    const placeholder = 'Нет данных';
    const { cashManagementProduct } = props.currentCashManagementProduct;
    const xsSize = 12;
    return cashManagementProduct ?
        React.createElement(View, { testID: 'test-id-8e45f4d0-b989-288e-bab4-4a862bcfef67', style: Styles.borderBox },
            React.createElement(Grid, { testID: 'test-id-8e45f4d0-b989-288e-bab4-4a862bcfef67' },
                React.createElement(Row, { testID: 'test-id-e36ce603-fcdc-9856-a2ab-85e90ecf551a' },
                    React.createElement(Col, { testID: 'test-id-def673cf-d705-7ca3-c80b-401e1a15dc39', xs: xsSize },
                        React.createElement(View, { testID: "test-id-29cd535d-ba6f-4b9b-8fe6-1df44ff3f8f4", style: Styles.clientProduct },
                            React.createElement(Label, { testID: 'test-id-697e0c2a-c781-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                                React.createElement(Text, { style: Styles.productText, testID: 'test-id-6397b84c-c781-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
                React.createElement(View, { testID: "test-id-8fbadc00-c51e-4608-84f2-7b17661309a1", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-20bc87e5-0fb4-0a1d-fa0f-64179372f961' })),
                React.createElement(Row, { testID: 'test-id-ed6ffc14-c781-11e7-abc4-cec278b6b50a' },
                    React.createElement(Col, { testID: 'test-id-e7e0207f-7c00-7e8f-f0df-9e2f79df4e2c', xs: xsSize },
                        React.createElement(Label, { testID: 'test-id-b726ca3b-4166-55e8-5ec5-5a430753411e', header: '', text: 'Тариф', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-da222270-3880-cc21-dbf3-2f88e3a64445' }, cashManagementProduct.tariffName || placeholder)))),
                React.createElement(View, { testID: "test-id-c39cca0a-d32f-46ca-82f4-bce583aa2953", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-fe48f216-c781-11e7-abc4-cec278b6b50a' })),
                React.createElement(Row, { testID: 'test-id-3dc6a38b-6942-e9fc-d4b9-af7e7399bc4a' },
                    React.createElement(Col, { testID: 'test-id-bfbb1363-7ea1-a6c4-9867-a8ea47c726f5', xs: xsSize / 3 },
                        React.createElement(Label, { testID: 'test-id-abbb1861-c55f-18b9-2c1c-c2dedb50033e', header: '', text: 'Номер договора/соглашения', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-75cbe8fb-7c0c-30f5-960a-bfe59643bb14' }, cashManagementProduct.contractNumber || placeholder))),
                    React.createElement(Col, { testID: 'test-id-b1211318-5cda-193b-19eb-d2dfca29c27d', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-04f51557-a1d0-6298-4211-7c736afecf0a', header: '', text: 'Дата заключения договора', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-b4d355dc-ca6e-f9ca-2a31-f97a1baaed6c' }, cashManagementProduct.contractStartDate &&
                                cashManagementProduct.contractStartDate.formattedString() ||
                                placeholder))),
                    React.createElement(Col, { testID: 'test-id-6add4466-ef8f-572f-c25d-f329d39b5571', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-bb73c7db-2fd9-49bf-c185-75b684b43e3e', header: '', text: 'Дата окончания договора', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-4eeed727-ec59-0cd7-2e42-9bfffb2e1691' }, cashManagementProduct.contractEndDate &&
                                cashManagementProduct.contractEndDate.formattedString() ||
                                placeholder)))))) : React.createElement(View, { testID: 'test-id-ff619839-cadd-18e0-e3f9-c7ce18f901ca' });
};
const ProductCashManagement = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductCashManagement' },
    React.createElement(SplitPanel, { testID: 'test-id-757528f2-de6f-99d6-6008-643185caee4c', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-ee9e465f-bbac-2cf5-7905-05157cdc0b64', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-c6186903-ac00-2eca-70d9-bb1a392f726d', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-22ee7b81-79fc-4c6a-788f-2a70797735f9' },
                    React.createElement(NavigationBackButton, { key: "ProductListCashNavBackButton", testID: 'test-id-d7c9b154-c216-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "ProductListCashNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-c97a0ae0-c216-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-0cc7e222-c217-11e7-abc4-cec278b6b50a", title: 'Cash Management', onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-88debff9-c45a-5eb6-0618-3810f572c035' },
                    React.createElement(H2, { testID: 'test-id-cd68e81b-5c78-de44-d705-c42e8307859f' }, util.getProductTypeName(props.currentCashManagementProduct.productType))))))));
export default ProductCashManagement;
//# sourceMappingURL=ViewProductCashManagement.js.map