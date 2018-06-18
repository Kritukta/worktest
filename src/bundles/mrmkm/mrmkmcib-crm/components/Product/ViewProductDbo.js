/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, Col, ContentPanel, Grid, H2, HorizontalRule, Label, NavigationBackButton, NavigationTextButton, Page, LeftPageHeader, Row, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductDboStyles';
import * as util from '../../common/Util';
const getProductSystemDboSpadBankClient = (props) => {
    const placeholder = 'Нет данных';
    const { dboProduct } = props.currentDboProduct;
    const authorizedPersonList = dboProduct && Array.isArray(dboProduct.authorizedPerson)
        ? dboProduct.authorizedPerson
            .map((value, index) => React.createElement(Text, { key: `authorizedPerson-${index}`, style: Styles.authorizedPersonText, testID: `${index}-test-id-0844645f-67e2-bc9e-d64e-8c4ad40ef9ed-${index}` }, value))
        : [];
    const xsSize = 12;
    return React.createElement(Grid, { testID: 'test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303' },
        React.createElement(Row, { testID: 'test-id-9af814da-c8f3-2d7f-33fd-01b92e957e5a' },
            React.createElement(Col, { testID: 'test-id-9fafd00e-b4e1-4bbf-076d-08e2abc29a77', xs: xsSize },
                React.createElement(View, { testID: "test-id-b8ed50f5-4965-4085-8472-b2782d689618", style: Styles.clientProduct },
                    React.createElement(Label, { testID: 'test-id-91376d1c-4ecd-462b-8f2f-a934ada20385', header: '', text: 'Клиент', block: true },
                        React.createElement(Text, { style: Styles.productText, testID: 'test-id-5831b51f-e988-4326-bdf2-977fb4eac771' }, util.displayCustomerWithLegalForm(props.currentCustomerManaged)))))),
        React.createElement(Row, { testID: 'test-id-5db8e7ba-f784-11e7-8c3f-9a214cf093ae' },
            React.createElement(Col, { testID: 'test-id-d4c73f2e-c09e-5869-84fb-c45481f6eed0', xs: xsSize },
                React.createElement(View, { testID: "test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c", style: Styles.nameSystem },
                    React.createElement(Label, { testID: 'test-id-0e308f6f-c806-f36c-3845-7d4a05a2663a', header: '', text: 'Система ДБО', block: true },
                        React.createElement(Text, { style: Styles.productText, testID: 'test-id-061650b1-f4bc-4373-f438-eec3791182b4' }, dboProduct &&
                            dboProduct.systemClassifier.value ||
                            placeholder))))),
        React.createElement(View, { testID: "test-id-59dfc884-f784-11e7-8c3f-9a214cf093ae", style: Styles.horizontalLineView },
            React.createElement(HorizontalRule, { testID: 'test-id-5370743a-f784-11e7-8c3f-9a214cf093ae' })),
        React.createElement(Row, { testID: 'test-id-6a0ba9b2-f784-11e7-8c3f-9a214cf093ae' },
            dboProduct &&
                dboProduct.lastActionDate ? React.createElement(Col, { testID: 'test-id-86f4fcd4a-f784-11e7-8c3f-9a214cf093ae', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-7416b23a-f784-11e7-8c3f-9a214cf093ae', header: '', text: 'Дата последней операции', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-78fc64a2-f784-11e7-8c3f-9a214cf093ae' }, dboProduct &&
                        dboProduct.lastActionDate &&
                        dboProduct.lastActionDate.formattedString() ||
                        placeholder))) : null,
            React.createElement(Col, { testID: 'test-id-a203c404-c20e-11e7-abc4-cec278b6b50a', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a', header: '', text: 'Дата приостановления', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a' }, dboProduct &&
                        dboProduct.stopDate &&
                        dboProduct.stopDate.formattedString() ||
                        placeholder)))),
        React.createElement(View, { testID: "test-id-9361ada5-3d86-42e2-aa2c-3d8d657ff633", style: Styles.horizontalLineView },
            React.createElement(HorizontalRule, { testID: 'test-id-02f4fa36-c20e-11e7-abc4-cec278b6b50a' })),
        React.createElement(Row, { testID: 'test-id-c063d0b0-9fa9-fc67-963e-e234162dd0a5' },
            React.createElement(Col, { testID: 'test-id-839f5028-c20e-11e7-abc4-cec278b6b50a', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-7ed8d546-c20e-11e7-abc4-cec278b6b50a', header: '', text: 'Номер договора', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-88aecbd4-c20e-11e7-abc4-cec278b6b50a' }, dboProduct && dboProduct.number || placeholder))),
            React.createElement(Col, { testID: 'test-id-9b9af2a5-8cca-9546-5cba-7d9ef603b2d8', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-fd95c377-f409-4dff-a0eb-8f46562e71dd', header: '', text: 'Статус договора', block: true },
                    React.createElement(Text, { style: dboProduct && dboProduct.isActiveAgreement == false ? Styles.dboStatusClose : {}, testID: 'test-id-66fa283d-edca-0e10-487d-de3df76e8658' }, dboProduct &&
                        dboProduct.status ||
                        placeholder))),
            React.createElement(Col, { testID: 'test-id-87a356d2-ab06-86f0-998e-021a8632c585', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-8176a1ef-7d3f-50fc-8c80-363509be9513', header: '', text: 'Дата заключения договора', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-ba6269ef-fcbf-ef11-c89b-02680015ebc6' }, dboProduct &&
                        dboProduct.openDate &&
                        dboProduct.openDate.formattedString() ||
                        placeholder))),
            React.createElement(Col, { testID: 'test-id-a203c404-c20e-11e7-abc4-cec278b6b50a', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a', header: '', text: 'Дата расторжения', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a' }, dboProduct &&
                        dboProduct.endDate &&
                        dboProduct.endDate.formattedString() ||
                        placeholder)))),
        authorizedPersonList.length > 0
            ? React.createElement(View, { testID: "test-id-7c0e7cc4-f094-4477-9e7c-94d9c44abce9", style: Styles.horizontalLineView },
                React.createElement(HorizontalRule, { testID: 'test-id-b6508759-5b76-8fb6-c410-0429250e117a' }))
            : null,
        authorizedPersonList.length > 0 ?
            React.createElement(Row, { testID: 'test-id-099717e1-a688-fbca-f88a-fc7920b7d2ab' },
                React.createElement(Col, { testID: 'test-id-c2cf3dec-e1f1-245e-98e1-099d8cbf76fe', xs: xsSize },
                    React.createElement(Text, { style: Styles.authorizedPersonTitle, testID: 'test-id-f3a78565-97a9-6aee-c08d-6e62f52f2691' }, 'Список уполномоченных лиц'),
                    authorizedPersonList))
            : null);
};
const getProductSystemDboSbbol = (props) => {
    const placeholder = 'Нет данных';
    const { dboProduct } = props.currentDboProduct;
    const authorizedPersonList = dboProduct && Array.isArray(dboProduct.authorizedPerson)
        ? dboProduct.authorizedPerson
            .map((value, index) => React.createElement(Text, { key: `authorizedPerson-${index}`, style: Styles.authorizedPersonText, testID: `${index}-test-id-0844645f-67e2-bc9e-d64e-8c4ad40ef9ed-${index}` }, value))
        : [];
    const xsSize = 12;
    return React.createElement(Grid, { testID: 'test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303' },
        React.createElement(Row, { testID: 'test-id-9af814da-c8f3-2d7f-33fd-01b92e957e5a' },
            React.createElement(Col, { testID: 'test-id-9fafd00e-b4e1-4bbf-076d-08e2abc29a77', xs: xsSize },
                React.createElement(View, { testID: "test-id-b8ed50f5-4965-4085-8472-b2782d689618", style: Styles.clientProduct },
                    React.createElement(Label, { testID: 'test-id-91376d1c-4ecd-462b-8f2f-a934ada20385', header: '', text: 'Клиент', block: true },
                        React.createElement(Text, { style: Styles.productText, testID: 'test-id-5831b51f-e988-4326-bdf2-977fb4eac771' }, props.currentCustomerManaged.name ||
                            props.currentCustomerManaged.shortName ||
                            placeholder))))),
        React.createElement(Row, { testID: 'test-id-6df671fe-c644-e838-9360-34c6cc927afe' },
            React.createElement(Col, { testID: 'test-id-d4c73f2e-c09e-5869-84fb-c45481f6eed0', xs: xsSize },
                React.createElement(View, { testID: "test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c", style: Styles.nameSystem },
                    React.createElement(Label, { testID: 'test-id-0e308f6f-c806-f36c-3845-7d4a05a2663a', header: '', text: 'Система ДБО', block: true },
                        React.createElement(Text, { style: Styles.productText, testID: 'test-id-061650b1-f4bc-4373-f438-eec3791182b4' }, dboProduct &&
                            dboProduct.systemClassifier.value ||
                            placeholder))))),
        React.createElement(View, { testID: "test-id-9361ada5-3d86-42e2-aa2c-3d8d657ff633", style: Styles.horizontalLineView },
            React.createElement(HorizontalRule, { testID: 'test-id-02f4fa36-c20e-11e7-abc4-cec278b6b50a' })),
        React.createElement(Row, { testID: 'test-id-c063d0b0-9fa9-fc67-963e-e234162dd0a5' },
            React.createElement(Col, { testID: 'test-id-839f5028-c20e-11e7-abc4-cec278b6b50a', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-7ed8d546-c20e-11e7-abc4-cec278b6b50a', header: '', text: 'Номер договора', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-88aecbd4-c20e-11e7-abc4-cec278b6b50a' }, dboProduct && dboProduct.number || placeholder))),
            React.createElement(Col, { testID: 'test-id-9b9af2a5-8cca-9546-5cba-7d9ef603b2d8', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-fd95c377-f409-4dff-a0eb-8f46562e71dd', header: '', text: 'Статус договора', block: true },
                    React.createElement(Text, { style: dboProduct && dboProduct.isActiveAgreement == false ? Styles.dboStatusClose : {}, testID: 'test-id-66fa283d-edca-0e10-487d-de3df76e8658' }, dboProduct &&
                        dboProduct.status ||
                        placeholder))),
            React.createElement(Col, { testID: 'test-id-87a356d2-ab06-86f0-998e-021a8632c585', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-8176a1ef-7d3f-50fc-8c80-363509be9513', header: '', text: 'Дата заключения договора', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-ba6269ef-fcbf-ef11-c89b-02680015ebc6' }, dboProduct &&
                        dboProduct.openDate &&
                        dboProduct.openDate.formattedString() ||
                        placeholder))),
            dboProduct &&
                dboProduct.endDate ? React.createElement(Col, { testID: 'test-id-a203c404-c20e-11e7-abc4-cec278b6b50a', xs: xsSize / 4 },
                React.createElement(Label, { testID: 'test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a', header: '', text: 'Дата расторжения', block: true },
                    React.createElement(Text, { style: Styles.productText, testID: 'test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a' }, dboProduct &&
                        dboProduct.endDate &&
                        dboProduct.endDate.formattedString() ||
                        placeholder))) : null),
        authorizedPersonList.length > 0
            ? React.createElement(View, { testID: "test-id-7c0e7cc4-f094-4477-9e7c-94d9c44abce9", style: Styles.horizontalLineView },
                React.createElement(HorizontalRule, { testID: 'test-id-b6508759-5b76-8fb6-c410-0429250e117a' }))
            : null,
        authorizedPersonList.length > 0 ?
            React.createElement(Row, { testID: 'test-id-099717e1-a688-fbca-f88a-fc7920b7d2ab' },
                React.createElement(Col, { testID: 'test-id-c2cf3dec-e1f1-245e-98e1-099d8cbf76fe', xs: xsSize },
                    React.createElement(Text, { style: Styles.authorizedPersonTitle, testID: 'test-id-f3a78565-97a9-6aee-c08d-6e62f52f2691' }, 'Список уполномоченных лиц'),
                    authorizedPersonList))
            : null);
};
const getContentPanelContent = (props) => {
    return React.createElement(View, { testID: 'test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303', style: Styles.borderBox }, (props.currentDboProduct &&
        props.currentDboProduct.dboProduct &&
        props.currentDboProduct.dboProduct.systemClassifier &&
        (props.currentDboProduct.dboProduct.systemClassifier.code == 'spad' ||
            props.currentDboProduct.dboProduct.systemClassifier.code == 'bank_client'))
        ? getProductSystemDboSpadBankClient(props) : getProductSystemDboSbbol(props));
};
const ProductDbo = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductDbo' },
    React.createElement(SplitPanel, { testID: 'test-id-2964d978-1b56-41ad-f3a2-59ecdab86761', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-d78a0016-b3d3-5d0e-398c-bdafafce7854', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-1fb71519-3e89-526c-4097-0aef1a07c5dc', scrollEnabled: true, content: getContentPanelContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-9cd65911-7a7f-b1a7-8749-2849ceeb5099' },
                    React.createElement(NavigationBackButton, { key: "ProductListDBONavBackButton", testID: 'test-id-1c0014ee-c217-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                    React.createElement(View, { key: "ProductListDBOTextBackButton", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-279000da-c217-11e7-abc4-cec278b6b50a" },
                        React.createElement(NavigationTextButton, { testID: "test-id-2c4f99d2-c217-11e7-abc4-cec278b6b50a", title: util.getProductListTypeName(props.currentDboProduct.productType), onExecute: props.navigateProductListBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-0ecc1548-93ed-8323-f179-f91f41f8a8be' },
                    React.createElement(H2, { testID: 'test-id-3f575b82-c7c7-bd5d-b3fb-4473a7a1f00b' }, util.getProductTypeName(props.currentDboProduct.productType))))))));
export default ProductDbo;
//# sourceMappingURL=ViewProductDbo.js.map