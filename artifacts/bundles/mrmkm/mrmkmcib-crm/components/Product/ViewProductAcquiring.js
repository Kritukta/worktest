/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, NavigationBackButton, Grid, H2, HorizontalRule, LeftPageHeader, Label, NavigationTextButton, Page, Row, SplitPanel, Text, View, Table, TableBody, TableRow, TableCell, Button, Icon, IconType, TableHead, TableColumn, } from 'ufs-mobile-platform';
import { Enums } from '../../Enums';
import Styles from './styles/ProductAcquiringStyles';
import * as util from '../../common/Util';
const getProductAcquiringPageContent = (props) => (React.createElement(View, { testID: 'test-id-product-acquiring-view', style: Styles.pageContainer },
    React.createElement(SplitPanel, { testID: 'test-id-product-acquiring-split-panel', id: util.getNavigationProductAcquiringIdString(Enums.NavigationProductAcquiring.AppCRM_Acquiring) },
        React.createElement(ContentPanel, { testID: 'test-id-product-acquiring-content' },
            React.createElement(Page, { testID: 'test-id-product-acquiring-main-page', content: getContentPanelContent(props), scrollEnabled: false },
                React.createElement(LeftPageHeader, { testID: 'test-id-4e01b5d4-c92d-11e7-abc4-cec278b6b50a' },
                    React.createElement(NavigationBackButton, { key: "AcquiringProductListNavBackButton", testID: 'test-id-44b2849a-c92d-11e7-abc4-cec278b6b50a', title: false, onClick: props.navigateProductListBack }),
                    React.createElement(View, { key: "AcquiringProductListTextBackButton", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-3bc7bfa8-c92d-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-acquiring-product-list-back-button", title: util.getProductListTypeName(props.currentAcquiringProduct.productType), onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-26783952-a34c-8df8-1c32-889bad24c21a' },
                    React.createElement(H2, { testID: 'test-id-d813f482-3642-8541-1a69-e86c4091f876' }, util.getProductTypeName(props.currentAcquiringProduct.productType)))),
            React.createElement(Page, { testID: 'test-id-product-acquiring-details-page', content: getProductAcquiringAgreementListView(props), scrollEnabled: false },
                React.createElement(LeftPageHeader, { testID: 'test-id-agreement-list-left-page-header' },
                    React.createElement(NavigationBackButton, { key: 'agreement-list-back-button', testID: 'test-id-agreement-list-back-button', title: false, onClick: props.navigateProductListBack }),
                    React.createElement(View, { key: 'agreement-list-back-button-title-view', style: Styles.navigationBackButtonTextAdjustment, testID: 'test-id-agreement-list-back-button-title-view' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-agreement-list-back-button-title', title: 'Договор эквайринга', onExecute: props.navigateBackToViewProductAcquiring }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-26783952-a34c-8df8-1c32-889bad24c21a' },
                    React.createElement(H2, { testID: 'test-id-d813f482-3642-8541-1a69-e86c4091f876' }, 'Дополнительные соглашения')))))));
const placeholder = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA);
const xsSize = 12;
const getProductAcquiringAgreementListView = (props) => (React.createElement(View, { testID: 'test-id-product-acquiring-agreement-list-page', style: Styles.page },
    React.createElement(Table, { testID: 'test-id-product-acquiring-agreement-list', style: Styles.agreementListTable },
        React.createElement(TableHead, { testID: 'test-id-product-acquiring-agreement-list-head' },
            React.createElement(TableColumn, { testID: 'test-id-product-acquiring-agreement-list-head-number', width: '34%' },
                React.createElement(Text, { testID: 'test-id-product-acquiring-agreement-list-head-number-text' }, 'Номер доп. соглашения')),
            React.createElement(TableColumn, { testID: 'test-id-product-acquiring-agreement-list-head-type', width: '66%' },
                React.createElement(Text, { testID: 'test-id-product-acquiring-agreement-list-head-type-text' }, 'Тип доп. соглашения'))),
        React.createElement(TableBody, { testID: 'test-id-product-acquiring-agreement-list-body' }, props.currentAcquiringProduct &&
            props.currentAcquiringProduct.acquiringProduct &&
            Array.isArray(props.currentAcquiringProduct.acquiringProduct.additionalContractList) &&
            props.currentAcquiringProduct.acquiringProduct.additionalContractList.map((agreement) => (React.createElement(TableRow, { testID: `test-id-agreement-list-item-${agreement.number}`, key: `product-agreement-list-item-${agreement.number}` },
                React.createElement(TableCell, { testID: `test-id-greement-list-item-number-${agreement.number}`, style: Styles.agreementListItemCell },
                    React.createElement(View, { testID: `test-id-greement-list-item-number-view-${agreement.number}`, style: Styles.agreementListItemView },
                        React.createElement(Text, { testID: `test-id-greement-list-item-number-text-${agreement.number}`, style: Styles.agreementListItemText }, agreement.number))),
                React.createElement(TableCell, { testID: `test-id-agreement-list-item-type-${agreement.number}`, style: Styles.agreementListItemCell },
                    React.createElement(View, { testID: `test-id-greement-list-item-type-view-${agreement.number}`, style: Styles.agreementListItemView },
                        React.createElement(Text, { testID: `test-id-greement-list-item-type-text-${agreement.number}`, style: Styles.agreementListItemText }, agreement.typeClassifier &&
                            agreement.typeClassifier.value ||
                            placeholder)))))) || []))));
const getContentPanelContent = (props) => {
    const { acquiringProduct } = props.currentAcquiringProduct;
    const additionalAgreementAmount = acquiringProduct &&
        Array.isArray(acquiringProduct.additionalContractList) &&
        acquiringProduct.additionalContractList.length || 0;
    return (React.createElement(View, { testID: 'test-id-da284d4a-9154-efde-a824-1e36e9c7ca35', style: Styles.page },
        React.createElement(View, { testID: 'test-id-acquiring-main-info', style: Styles.mainInfoGreedContainer },
            React.createElement(Grid, { testID: 'test-id-95d05b32-67ff-b5ea-f136-d46b53bee294' },
                React.createElement(Row, { testID: 'test-id-fa3d7dda-9daa-28d7-fcf2-cd096c2ea8c7' },
                    React.createElement(Col, { testID: 'test-id-6610a861-c18e-14dc-a7a3-19d26be54f3a', xs: xsSize },
                        React.createElement(View, { testID: "test-id-ef6a2b78-c927-11e7-abc4-cec278b6b50a", style: Styles.clientProduct },
                            React.createElement(Label, { testID: 'test-id-deb56d68-c929-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                                React.createElement(Text, { testID: 'test-id-e270936a-c929-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
                React.createElement(View, { testID: "test-id-643c83ea-c92a-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-92bf8587-bee1-9d84-2735-50e199e134c8' })),
                React.createElement(Row, { testID: 'test-id-c8d00e49-c752-7f25-17a5-47a4a8116d7f' },
                    React.createElement(Col, { testID: 'test-id-5bd78c45-0dd1-f148-76bc-0e9202a1c865', xs: xsSize },
                        React.createElement(Label, { testID: 'test-id-8fff2b93-8d10-5d9c-e065-80a2d73c2574', header: '', text: 'Количество терминалов', block: true },
                            React.createElement(Text, { testID: 'test-id-11026032-eef8-e8f8-3c02-a7dac3514bce' }, acquiringProduct &&
                                acquiringProduct.terminalsCount != null
                                ? acquiringProduct.terminalsCount
                                : placeholder)))),
                React.createElement(View, { testID: "test-id-f5ce1d6e-c92a-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-07c06fae-c92b-11e7-ac37-cec278b6b50a' })),
                React.createElement(Row, { testID: 'test-id-2bb1e4b5-09eb-cccb-529e-cde974b48c0f' },
                    React.createElement(Col, { testID: 'test-id-ce38b728-fb11-b7ea-e124-18ea990cf477', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-134e212a-9ed3-7f5f-3ce8-b7c77ff0f0c1', header: '', text: 'Номер договора', block: true },
                            React.createElement(Text, { testID: 'test-id-f5e22304-0f2e-979b-a0d1-d866b9fefa65' }, acquiringProduct &&
                                acquiringProduct.contractNumber ||
                                placeholder))),
                    React.createElement(Col, { testID: 'test-id-47aff976-e802-58a8-326f-6b41649d5a31', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-73742495-7611-b5a2-edc0-628a6cacdd62', header: '', text: 'Статус договора', block: true },
                            React.createElement(Text, { testID: 'test-id-78b06c5c-346d-c135-2ca5-b7df4bd4cd52' }, acquiringProduct && acquiringProduct.statusClassifier &&
                                acquiringProduct.statusClassifier.value ||
                                placeholder))),
                    React.createElement(Col, { testID: 'test-id-c8b20c64-4eb1-3183-cf9a-0e574d723f8b', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-57c49e93-9588-01e9-ad19-e3f6836b155a', header: '', text: 'Дата заключения договора', block: true },
                            React.createElement(Text, { testID: 'test-id-84ea410d-785a-d581-c025-c58ede5d65e0' }, acquiringProduct &&
                                acquiringProduct.openDate &&
                                acquiringProduct.openDate.formattedString() ||
                                placeholder)))))),
        React.createElement(View, { testID: 'test-id-acquiring-agreement-list-link-container', style: Styles.agreementListLinkContainer },
            React.createElement(Table, { testID: 'test-id-acquiring-agreement-list-link' },
                React.createElement(TableBody, { testID: 'test-id-acquiring-agreement-list-link-body' },
                    React.createElement(TableRow, { testID: 'test-id-acquiring-agreement-list-link-row', onClick: additionalAgreementAmount ? props.navigateToAgreementListView : () => { } },
                        React.createElement(TableCell, { testID: 'test-id-acquiring-agreement-list-link-cell', style: Styles.agreementListLinkCell },
                            React.createElement(View, { testID: 'test-id-acquiring-agreement-list-link-view', style: Styles.agreementListLink },
                                React.createElement(Text, { testID: 'test-id-acquiring-agreement-list-link-title', style: Styles.agreementListLinkTitle }, 'Дополнительные соглашения'),
                                React.createElement(Text, { testID: 'test-id-acquiring-agreement-list-link-amount', style: Styles.agreementListLinkValue }, additionalAgreementAmount),
                                React.createElement(Button, { testID: 'test-id-acquiring-agreement-list-link-button', disabled: !additionalAgreementAmount, onExecute: additionalAgreementAmount ? props.navigateToAgreementListView : () => { } },
                                    React.createElement(Icon, { testID: 'test-id-acquiring-agreement-list-link-icon', disabled: !additionalAgreementAmount, type: IconType.MrmLink })))))))),
        React.createElement(View, { testID: 'test-id-c561205f-eb67-4371-14ac-6bcf74e115ca', style: Styles.comissionList },
            React.createElement(Text, { style: Styles.commisionTitle, testID: 'test-id-57f5d2ce-c92c-11e7-abc4-cec278b6b50a' }, 'Коммисии'),
            acquiringProduct &&
                Array.isArray(acquiringProduct.commissionList) &&
                acquiringProduct.commissionList.map((commission, index) => (React.createElement(Text, { style: Styles.commisionText, testID: `test-id-commission-list-item-${commission}-${index}`, key: `commission-list-item-${commission}-${index}` }, commission))) || (React.createElement(Text, { style: Styles.commisionText, testID: 'test-id-empty-commission-list' }, placeholder)))));
};
const ProductAcquiring = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductAcquiring' },
    React.createElement(SplitPanel, { testID: 'test-id-16178c2e-d40c-fd82-ce8e-26dbaaae99eb', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-274f18ef-8a16-f4a6-0fe9-9553c1f8081f', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-b636a347-34f8-251b-8da0-a5f178fbe16a', scrollEnabled: false, content: getProductAcquiringPageContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-dummy-left-page-header' }))))));
export default ProductAcquiring;
//# sourceMappingURL=ViewProductAcquiring.js.map