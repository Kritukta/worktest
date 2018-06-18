/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, Grid, LeftPageHeader, H2, HorizontalRule, Label, NavigationTextButton, Page, Row, SplitPanel, Text, View, SumText, NavigationBackButton, } from 'ufs-mobile-platform';
import { EnumsCrm } from "mrmkmcib-crm";
import Styles from './styles/ProductBankGuaranteeStyles';
import * as util from '../../common/Util';
const getContentPanelContent = (props) => {
    const placeholder = 'Нет данных';
    const { bankGuaranteeProduct } = props.currentBankGuaranteeProduct;
    const NO_DATA_LABEL = (title) => (React.createElement(Label, { testID: `${title}-test-id-a860d68e-c5f6-11e7-abc4-cec278b6b50a`, header: '', block: true, text: title },
        React.createElement(Text, { style: Styles.productText, testID: `${title}-'test-id-a52eed52-c5f6-11e7-abc4-cec278b6b50a` }, placeholder)));
    const xsSize = 12;
    return bankGuaranteeProduct ?
        React.createElement(View, { testID: 'test-id-39128364-77a1-261e-bd0b-e392f0844567', style: Styles.borderBox },
            React.createElement(Grid, { testID: 'test-id-39128364-77a1-261e-bd0b-e392f0844567' },
                React.createElement(Row, { testID: 'test-id-09487e7d-0836-d75d-e9f2-a4f6e23c37a8' },
                    React.createElement(Col, { testID: 'test-id-fa9708ed-25b2-44d0-a5ef-c7afd8f4e29d', xs: xsSize },
                        React.createElement(View, { testID: "test-id-693cd9f6-c931-11e7-abc4-cec278b6b50a", style: Styles.clientProduct },
                            React.createElement(Label, { testID: 'test-id-4b9d1be2-c5f6-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                                React.createElement(Text, { testID: 'test-id-465671d8-c5f6-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
                React.createElement(Row, { testID: 'test-id-82ce144b-04a3-9976-6a88-f78da73be2e8' },
                    React.createElement(Col, { testID: 'test-id-3c80461c-ee50-4154-4d66-c803e30deece', xs: xsSize },
                        React.createElement(View, { testID: "test-id-a1f38a06-c931-11e7-abc4-cec278b6b50a", style: Styles.nameProduct },
                            React.createElement(Label, { testID: 'test-id-3a99c806-9436-1fb2-ef22-dcd1d760b8eb', header: '', text: 'Тип гарантии', block: true },
                                React.createElement(Text, { style: Styles.productText, testID: 'test-id-f3a7cadd-2a72-fb8f-4918-52f515dc68b8' }, bankGuaranteeProduct.type || placeholder))))),
                React.createElement(View, { testID: "test-id-d01719fc-c931-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-a7d8e9e9-0bd6-eff5-7fea-e14a37a0fd40' })),
                React.createElement(Row, { testID: 'test-id-5a8332c6-e311-277e-ca3f-486d0a014827' },
                    React.createElement(Col, { testID: 'test-id-aac725ce-1ac9-0ea9-3280-0064ec484aa9', xs: xsSize / 3 }, bankGuaranteeProduct.sum != null ?
                        React.createElement(SumText, { testID: 'test-id-108ad5d6-6fb7-ec36-7f75-809c691334bf', value: Number(bankGuaranteeProduct.sum), label: 'Сумма гарантии', small: false, currency: bankGuaranteeProduct.currencyClassifier
                                ? bankGuaranteeProduct.currencyClassifier.code
                                : placeholder }) : NO_DATA_LABEL("Сумма гарантии")),
                    React.createElement(Col, { testID: 'test-id-63a85cbf-71a3-f7b9-f1d6-34e2ea5e4f83', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-86bbff8f-96b7-7286-c5ea-711cb0aa607b', header: '', text: 'Дата выдачи гарантии', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-42620af8-5dd1-1a48-3dac-c78c69cff8da' }, (bankGuaranteeProduct.contractOpenDate &&
                                bankGuaranteeProduct.contractOpenDate.formattedString())
                                || placeholder))),
                    React.createElement(Col, { testID: 'test-id-e8959c25-7528-9f90-ff8d-825c18684741', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-8f8ac8ad-d087-b9b8-8320-5e0d64673d72', header: '', text: 'Дата окончания гарантии', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-96cec0ca-566f-6c16-fbef-40cd9df92c61' }, bankGuaranteeProduct.endDate &&
                                bankGuaranteeProduct.endDate.formattedString() ||
                                placeholder)))),
                React.createElement(View, { testID: "test-id-dea62102-c931-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-ad56f028-999e-a743-3b1e-6b21fb939de1' })),
                React.createElement(Row, { testID: 'test-id-74a5175b-dcc0-925e-a933-001fbf61d140' },
                    React.createElement(Col, { testID: 'test-id-c557731f-c9d8-6b82-5115-d7c0bf1734b7', xs: xsSize / 3 },
                        React.createElement(Label, { testID: 'test-id-39b0bfd9-6360-a034-b49b-df1e728c6bc1', header: '', text: 'Номер договора', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-921ed985-b77f-bd81-1cc0-ca7c68b4c53d' }, bankGuaranteeProduct.contractNumber || placeholder))),
                    React.createElement(Col, { testID: 'test-id-a73ac3d5-0533-7603-5cba-f258f5da79b8', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-6d2e72fb-b3d0-123d-ad73-703c45acac22', header: '', text: 'Индентификатор договора гарантии', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-317718de-8dba-9388-5d5c-2c27151dddb6' }, bankGuaranteeProduct.contractId || placeholder))),
                    React.createElement(Col, { testID: 'test-id-84e7115e-acb6-5549-caa4-6273b50f42c3', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-525eb0b4-4963-97a1-7b91-516eeb60959f', header: '', text: 'Статус договора', block: true },
                            React.createElement(Text, { style: Styles.productText, testID: 'test-id-a1a6ac83-76e7-e6ee-a781-08503b9ce73a' }, bankGuaranteeProduct.contractStatus || placeholder)))),
                React.createElement(Row, { testID: 'test-id-7f586362-d1dd-85fa-e6b8-840968365565' },
                    React.createElement(Col, { testID: 'test-id-3a1977f5-ca27-c85e-b409-e2defcec7358', xs: xsSize / 3 },
                        React.createElement(View, { testID: "test-id-0fcfe97a-c932-11e7-abc4-cec278b6b50a", style: Styles.openDateView },
                            React.createElement(Label, { testID: 'test-id-f3f3933e-3f3d-d066-3640-7655155d1cee', header: '', text: 'Дата заключения договора', block: true },
                                React.createElement(Text, { style: Styles.productText, testID: 'test-id-884b8f97-3078-24d7-0602-ec3b0ca20390' }, bankGuaranteeProduct.openDate &&
                                    bankGuaranteeProduct.openDate.formattedString() || placeholder)))),
                    React.createElement(Col, { testID: 'test-id-dff60afe-bf97-d9e8-ae06-c3c3e48837cb', xs: xsSize / 4 },
                        React.createElement(View, { testID: "test-id-1a21fd00-c932-11e7-abc4-cec278b6b50a", style: Styles.productTermView },
                            React.createElement(Label, { testID: 'test-id-8fc498b4-3030-9430-e280-8e857af2d20c', header: '', text: 'Срок договора (дней)', block: true },
                                React.createElement(Text, { style: Styles.productText, testID: 'test-id-7738388d-6f86-9321-3318-3970222c37bf' }, bankGuaranteeProduct.term || placeholder))))))) : React.createElement(View, { testID: 'test-id-a9dd9cf6-32e2-a6fd-1a64-7ba93ffda2fc' });
};
const ProductBankGuarantee = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductBankGuarantee' },
    React.createElement(SplitPanel, { testID: 'test-id-75014a3e-597b-6608-bfdd-7d5e7fbfad55', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-42ada36d-5911-2f5b-fe8b-52644d57e53a', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-ea6a900a-2d20-5c06-c577-437feb201304', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-f885cf9e-c5f5-11e7-abc4-cec278b6b50a' },
                    React.createElement(NavigationBackButton, { key: "ProductListBankGuaranteeNavBackButton", testID: 'test-id-0d485f28-c5f6-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "ProductListBankGuaranteeNavTextButton", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-11c50c90-c5f6-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-06973b36-c5f6-11e7-abc4-cec278b6b50a", title: props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : util.getProductListTypeName(props.currentBankGuaranteeProduct.productType), onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-8271f054-ab8c-cc41-0931-0cdaf8f0b47d' },
                    React.createElement(H2, { testID: 'test-id-bf85a0f4-fa2e-67d5-d171-aa766399179e' }, util.getProductTypeName(props.currentBankGuaranteeProduct.productType))))))));
export default ProductBankGuarantee;
//# sourceMappingURL=ViewProductBankGuarantee.js.map