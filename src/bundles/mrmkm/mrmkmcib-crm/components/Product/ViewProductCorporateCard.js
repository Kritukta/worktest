/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, Grid, LeftPageHeader, NavigationBackButton, H2, HorizontalRule, Label, NavigationTextButton, Page, Row, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductCorporateCardStyles';
import * as util from '../../common/Util';
const getContentPanelContent = (props) => {
    const placeholder = 'Нет данных';
    const { corporateCardProduct } = props.currentCorporateCardProduct;
    const xsSize = 12;
    return corporateCardProduct ?
        React.createElement(View, { testID: 'test-id-0769d712-7301-066e-8880-4c811c7b2372', style: Styles.borderBox },
            React.createElement(Grid, { testID: 'test-id-0769d712-7301-066e-8880-4c811c7b2372' },
                React.createElement(Row, { testID: 'test-id-36138a66-b7b9-502f-e73b-1a0bafb74769' },
                    React.createElement(Col, { testID: 'test-id-7651093c-e60e-02af-b54b-58c87ba3e357', xs: xsSize },
                        React.createElement(View, { testID: "test-id-f10e46a6-c924-11e7-abc4-cec278b6b50a", style: Styles.clientProduct },
                            React.createElement(Label, { testID: 'test-id-f9f1aa7e-c924-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                                React.createElement(Text, { testID: 'test-id-fe31b480-c924-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
                React.createElement(View, { testID: "test-id-512a87c0-c925-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
                    React.createElement(HorizontalRule, { testID: 'test-id-555f7f8a-c925-11e7-abc4-cec278b6b50a' })),
                React.createElement(Row, { testID: 'test-id-3ce6f106-be60-f588-562a-c0bcdd6e292d' },
                    React.createElement(Col, { testID: 'test-id-c139218f-c97e-27ea-55c7-32d7a97160e2', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-05455ad5-8e22-bbc4-a590-c660b2d54da2', header: '', text: 'Номер карты', block: true },
                            React.createElement(Text, { testID: 'test-id-07799bef-5671-506c-2453-4c8f1ca8fb2f' }, corporateCardProduct.cardNumber ? `*${corporateCardProduct.cardNumber.substr(-4)}`
                                : placeholder))),
                    React.createElement(Col, { testID: 'test-id-1d110d85-9dc6-d63a-a50a-a273f0ddc028', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-ea80255c-df8e-dc61-9514-56a55ddf3d4b', header: '', text: 'Вид карты', block: true },
                            React.createElement(Text, { testID: 'test-id-63004fa1-ae2b-329b-8fc6-4d3823de71ce' }, corporateCardProduct.paymentSystem || placeholder))),
                    React.createElement(Col, { testID: 'test-id-c66bffe3-4976-2a22-e50a-c7536c615c9e', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-6e52fea0-f874-c990-684e-ae02bd8b3504', header: '', text: 'Тип карты', block: true },
                            React.createElement(Text, { testID: 'test-id-5174bfed-82a8-7519-1d55-6a55f91c103a' }, corporateCardProduct.typeClassifier ? corporateCardProduct.typeClassifier.value
                                : placeholder)))),
                React.createElement(Row, { testID: 'test-id-630ff67e-64da-dbab-16d1-2f95d3465cd8' },
                    React.createElement(Col, { testID: 'test-id-ce4a84ce-2301-4ac3-d893-0da841b94189', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-65ab210d-a34e-adf9-08b0-4c0072e8719f', header: '', text: 'Дата открытия', block: true },
                            React.createElement(Text, { testID: 'test-id-836689ea-965e-1f32-e36f-675e980274cc' }, corporateCardProduct.openDate &&
                                corporateCardProduct.openDate.formattedString()
                                || placeholder))),
                    React.createElement(Col, { testID: 'test-id-08cec934-93bb-f626-ba5b-4049356d5d5d', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-c710736f-08b0-d709-c268-96ff0568193f', header: '', text: 'Срок действия', block: true },
                            React.createElement(Text, { testID: 'test-id-9193b746-7b1c-1bc0-0bb0-347997d1cbe1' }, corporateCardProduct.endDate &&
                                corporateCardProduct.endDate.formattedString()
                                || placeholder))),
                    React.createElement(Col, { testID: 'test-id-c109261b-d08f-5fe4-aa6e-3cde5a97d00e', xs: xsSize / 4 },
                        React.createElement(Label, { testID: 'test-id-5c868430-c794-a37d-2344-8dd7d32c862a', header: '', text: 'Владелец карты', block: true },
                            React.createElement(Text, { testID: 'test-id-8ee2dab2-00f0-aa32-9ead-76d655855cb7' }, corporateCardProduct.holder || placeholder)))))) : React.createElement(View, { testID: 'test-id-60f98be1-0c17-f458-498b-fef24fa15a23' });
};
const ProductCorporateCard = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductCorporateCard' },
    React.createElement(SplitPanel, { testID: 'test-id-9a97d98e-a158-fc26-a6ea-13f47248a55c', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-28c720b9-a66b-5627-aced-e0da5bcbeb9e', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-9eff0db3-4d60-ec10-b5c0-f010661d9d0e', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-02514192-c926-11e7-abc4-cec278b6b50a' },
                    React.createElement(NavigationBackButton, { key: "CorporateCardProductListNavBackButton", testID: 'test-id-06b3cbec-c926-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "CorporateCardProductListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-0aac7fe6-c926-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-0ee728c2-c926-11e7-abc4-cec278b6b50a", title: util.getProductListTypeName(props.currentCorporateCardProduct.productType), onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-35ba0d3d-8fe3-9264-4256-5b2636b9e338' },
                    React.createElement(H2, { testID: 'test-id-c4dc6908-3a51-b4e1-3fb5-38c7c1b7f07c' }, util.getProductTypeName(props.currentCorporateCardProduct.productType))))))));
export default ProductCorporateCard;
//# sourceMappingURL=ViewProductCorporateCard.js.map