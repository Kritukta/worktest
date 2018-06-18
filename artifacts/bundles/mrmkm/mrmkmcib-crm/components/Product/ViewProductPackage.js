/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, Grid, LeftPageHeader, NavigationBackButton, H2, HorizontalRule, Label, NavigationTextButton, Page, Row, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductPackageStyles';
import * as util from '../../common/Util';
const getContentPanelContent = (props) => {
    const placeholder = 'Нет данных';
    const noExists = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO);
    const { packageProduct } = props.currentPackageProduct;
    const xsSize = 12;
    const packageList = packageProduct && packageProduct.serviceList ? packageProduct.serviceList
        .map((value, index) => value.name ?
        React.createElement(Text, { key: `ServiceList${index}`, style: Styles.packageListText, testID: 'test-id-ebe48240-c93c-11e7-abc4-cec278b6b50a' }, value.name)
        : null)
        .compact() : null;
    return packageProduct ? React.createElement(View, { testID: 'test-id-f1c82885-2ae6-283a-0f52-f887a1a16927', style: Styles.borderBox },
        React.createElement(Grid, { testID: 'test-id-f1c82885-2ae6-283a-0f52-f887a1a16927' },
            React.createElement(Row, { testID: 'test-id-71692d17-bfc2-f8ae-1d36-acac580a0a5b' },
                React.createElement(Col, { testID: 'test-id-e301df77-c740-d1da-bce4-dfbedf6005e7', xs: xsSize },
                    React.createElement(View, { testID: "test-id-25b2eaf2-c92e-11e7-abc4-cec278b6b50a", style: Styles.clientProduct },
                        React.createElement(Label, { testID: 'test-id-2d441336-c92e-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                            React.createElement(Text, { testID: 'test-id-320e9058-c92e-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
            React.createElement(Row, { testID: 'test-id-b87a2aa5-fcdf-2052-dcc0-e0860656e3cb' },
                React.createElement(Col, { testID: 'test-id-a2938335-4a26-4b8b-5278-ba0a4da9556f', xs: xsSize },
                    React.createElement(View, { testID: "test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c", style: Styles.nameProduct },
                        React.createElement(Label, { testID: 'test-id-424bca16-768f-2219-8733-2968958a1013', header: '', text: 'Наименование пакета услуг', block: true },
                            React.createElement(Text, { testID: 'test-id-61aca762-5c57-48f5-1ed6-1f68c2f2d4b2' }, packageProduct.name || placeholder))))),
            React.createElement(View, { testID: "test-id-84ad8b48-c92e-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                React.createElement(HorizontalRule, { testID: 'test-id-cf530880-518a-fc97-64f5-94df747db268' })),
            React.createElement(Row, { testID: 'test-id-76591440-9aac-d460-f038-3f075b69211c' },
                React.createElement(Col, { testID: 'test-id-f9ad1525-1410-955e-caa9-cb3baa13c735', xs: xsSize / 4 },
                    React.createElement(Label, { testID: 'test-id-85275281-b891-565a-6df6-b0f652da52d1', header: '', text: 'Дата начала', block: true },
                        React.createElement(Text, { testID: 'test-id-79636940-d1ff-3121-9ac2-628f3d94303e' }, packageProduct.startDate &&
                            packageProduct.startDate.formattedString()
                            || placeholder))),
                React.createElement(Col, { testID: 'test-id-5a69c456-9fe0-e79f-38ba-dec5a5e2f38d', xs: xsSize / 4 },
                    React.createElement(Label, { testID: 'test-id-c7a2d043-4dc0-a117-7573-89ca2a8aad79', header: '', text: 'Дата окончания', block: true },
                        React.createElement(Text, { testID: 'test-id-7e4543ef-3c8a-11e1-c511-53afbcc45afb' }, packageProduct.endDate &&
                            packageProduct.endDate.formattedString() ||
                            placeholder))),
                React.createElement(Col, { testID: 'test-id-60c396f7-14a7-3ce6-1e48-4394e4088632', xs: xsSize / 4 },
                    React.createElement(Label, { testID: 'test-id-f11d6e96-e4ec-52ae-c257-78bbb055b0af', header: '', text: 'Период авансирования (месяцев)', block: true },
                        React.createElement(Text, { testID: 'test-id-9ef6791e-91bf-96c0-7483-a91fdef7c1e6' }, packageProduct.advancingPeriod != null
                            ? packageProduct.advancingPeriod
                            : placeholder)))),
            React.createElement(View, { testID: "test-id-b24b1746-c92e-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                React.createElement(HorizontalRule, { testID: 'test-id-66bbca00-4263-0616-0bfe-f13a43381a27' })),
            React.createElement(Row, { testID: 'test-id-43435984-b61b-7ba8-dcc5-0105ae4b2842' },
                React.createElement(Col, { testID: 'test-id-aa6fe1e0-c232-1c4f-4d1d-3896fba08ed7', xs: xsSize },
                    React.createElement(Text, { style: Styles.packageListTitle, testID: 'test-id-f2db5e38-c92e-11e7-abc4-cec278b6b50a' }, 'Подключенные продукты/услуги'),
                    packageList && packageList.length > 0 ? packageList : noExists)))) : React.createElement(View, { testID: 'test-id-698e52c3-cc2f-ebbb-d796-59488a01a220' });
};
const ProductPackage = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductPackage' },
    React.createElement(SplitPanel, { testID: 'test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-03049819-1a36-ae91-a7d5-7de341988c2d', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-9cd65911-7a7f-b1a7-8749-2849ceeb5099' },
                    React.createElement(NavigationBackButton, { key: "PackageProductListNavBackButton", testID: 'test-id-1c0014ee-c217-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "PackageProductListTextBackButton", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-279000da-c217-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-2c4f99d2-c217-11e7-abc4-cec278b6b50a", title: util.getProductListTypeName(props.currentPackageProduct.productType), onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                    React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, util.getProductTypeName(props.currentPackageProduct.productType))))))));
export default ProductPackage;
//# sourceMappingURL=ViewProductPackage.js.map