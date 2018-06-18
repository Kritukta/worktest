/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, LeftPageHeader, NavigationBackButton, Grid, H2, HorizontalRule, Label, NavigationTextButton, Page, Row, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductTariffPlanStyles';
import * as util from '../../common/Util';
const getContentPanelContent = (props) => {
    const placeholder = 'Нет данных';
    const { tariffPlanProduct } = props.currentTariffPlanProduct;
    const xsSize = 12;
    return React.createElement(View, { testID: 'test-id-6b014ba9-74e8-aef2-7f54-57eeb29b5c2f', style: Styles.borderBox }, tariffPlanProduct && React.createElement(Grid, { testID: 'test-id-5bbd665e-d8ba-11e7-9296-cec278b6b50a' },
        util.isActiveProductList(props.productListAgreementStatus) == false ?
            React.createElement(Row, { testID: 'test-id-573ae7aa-d8ba-11e7-9296-cec278b6b50a' },
                React.createElement(Col, { testID: 'test-id-4fc4a4f2-d8ba-11e7-9296-cec278b6b50a', xs: xsSize },
                    React.createElement(View, { testID: "test-id-47c6ce6a-d8ba-11e7-9296-cec278b6b50a", style: Styles.closedProductView },
                        React.createElement(Text, { testID: 'test-id-a97ed7f0-d8bb-11e7-9296-cec278b6b50a', style: Styles.closedProductText }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u0430\u043A\u0440\u044B\u0442")))) : null,
        React.createElement(Row, { testID: 'test-id-013b9b55-33f9-320f-b67f-0c26745999c2' },
            React.createElement(Col, { testID: 'test-id-e9a2f464-16b9-ac62-eec9-809007935a19', xs: xsSize },
                React.createElement(View, { testID: "test-id-ef6a2b78-c927-11e7-abc4-cec278b6b50a", style: Styles.clientProduct },
                    React.createElement(Label, { testID: 'test-id-e146e658-c927-11e7-abc4-cec278b6b50a', header: '', text: 'Клиент', block: true },
                        React.createElement(Text, { testID: 'test-id-e5978924-c927-11e7-abc4-cec278b6b50a' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
        React.createElement(Row, { testID: 'test-id-7c2e905d-eb17-cd3a-0673-ae768225c5b9' },
            React.createElement(Col, { testID: 'test-id-76c4f43f-8d96-fef9-2432-381cb1a1c756', xs: xsSize },
                React.createElement(View, { testID: "test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c", style: Styles.nameProduct },
                    React.createElement(Label, { testID: 'test-id-635ff3cc-9c8a-5fe8-725a-f1777cfc89e7', header: '', text: 'Название тарифного плана', block: true },
                        React.createElement(Text, { testID: 'test-id-ec5de321-94a7-0ed5-dc56-d60e2b133026' }, tariffPlanProduct.name || placeholder))))),
        React.createElement(View, { testID: "test-id-b300aeb8-c928-11e7-abc4-cec278b6b50a", style: Styles.horizontalLineView },
            React.createElement(HorizontalRule, { testID: 'test-id-fad79588-aa9e-bc3c-977e-ed7141f6dae9' })),
        React.createElement(Row, { testID: 'test-id-a6359e29-2a60-6141-3d10-814f27bb264e' },
            React.createElement(Col, { testID: 'test-id-bdc17e7a-6c03-057f-90cc-f14436d0ed88', xs: xsSize / 3 },
                React.createElement(Label, { testID: 'test-id-d37e47f5-13bd-83db-7e1f-472954dc1fde', header: '', text: 'Тип тарифного плана', block: true },
                    React.createElement(Text, { testID: 'test-id-a3102d97-4bac-4be3-d39a-82f922f74a7d' }, tariffPlanProduct.typeClassifier &&
                        tariffPlanProduct.typeClassifier.value ||
                        placeholder))),
            React.createElement(Col, { testID: 'test-id-3bfc1c34-74ab-0196-5948-76cc56a9862e', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-9d5ed16c-cf78-c6f5-ed34-2f85f7cf323f', header: '', text: 'Дата начала', block: true },
                    React.createElement(Text, { testID: 'test-id-011a4676-f73c-fa9f-e886-10d108c79df7' }, tariffPlanProduct.startDate &&
                        tariffPlanProduct.startDate.formattedString() ||
                        placeholder))),
            React.createElement(Col, { testID: 'test-id-152b65f9-9875-6e30-1b42-688a34ee41c8', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-0461ad88-5a32-1c41-c97d-ff2c1dd693a2', header: '', text: 'Дата окончания', block: true },
                    React.createElement(Text, { testID: 'test-id-94d5e6df-1d9b-1b29-60d9-19337b38d9f9' }, tariffPlanProduct.endDate &&
                        tariffPlanProduct.endDate.formattedString() ||
                        placeholder))))));
};
const ProductTariffPlan = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductTariffPlan' },
    React.createElement(SplitPanel, { testID: 'test-id-f0091be6-1c8a-b5b7-40df-78512918ffd1', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-a530185c-35d2-c71f-16c5-043b456ca85c', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-ebd7cfb1-fc52-dc20-bf2d-f87673daac44', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-7d78c0b2-c92a-11e7-abc4-cec278b6b50a' },
                    React.createElement(NavigationBackButton, { key: "TarifProductListNavBackButton", testID: 'test-id-81bd3748-c92a-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "TarifProductListTextBackButton", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-29521558-c5f4-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-874a1640-c92a-11e7-abc4-cec278b6b50a", title: 'Тарифные планы', onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-5b88f526-4615-e950-a9e8-c9ed75329680' },
                    React.createElement(H2, { testID: 'test-id-5d36ce78-48d2-75f0-362c-aca801878b50' }, util.getProductTypeName(props.currentTariffPlanProduct.productType))))))));
export default ProductTariffPlan;
//# sourceMappingURL=ViewProductTariffPlan.js.map