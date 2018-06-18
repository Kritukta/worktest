/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewProductPaymentAccountStyles';
import { HintIcon, Button, IconType, SplitPanel, ContentPanel, Page, H2, Text, TableColumnAlignment, Table, TableCell, TableRow, TableBody, TableHead, TableColumn, HorizontalRule, View, NavigationTextButton, NavigationFilterButton, NavigationIconButtonType, NavigationIconButton, NavigationBackButton, LeftPageHeader, CenterPageHeader, RightPageHeader, RadioButton, RadioGroup, NumberInput, Icon, Grid, Col, Row, Popover, PopoverType, PopoverPosition, Label, Hint, HintType, } from 'ufs-mobile-platform';
import { defaultValues } from "../models/Models";
import { FullScreenError } from "mrmkmcib-app";
import { RefreshBar } from "mrmkmcib-app";
import { EnumsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import * as Util from '../common/Util';
import { SumText } from 'ufs-mobile-platform';
import PopoverTarget from '../modules/PopoverTarget';
import { LoaderWithText } from "mrmkmcib-app";
const PLACEHOLDER = Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA);
const XS_SIZE = 12;
const formatDate = (date, format = 'DD.MM.YYYY') => date ? date.formattedString(format) : PLACEHOLDER;
const getProductPaymentAccountPrivilegeList = (privilegeList) => (React.createElement(View, { testID: "test-id-f7d0ad78-d58e-11e7-9296-cec278b6b50a" },
    React.createElement(View, { testID: 'test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5-hr', style: Styles.hrContainer },
        React.createElement(HorizontalRule, { testID: 'test-id-68684fb2-8361-11e7-bb31-be2e44b06b34' })),
    React.createElement(View, { testID: 'test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5', style: Styles.tariffListTitleView },
        React.createElement(Text, { testID: 'test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5', style: Styles.boldSubCaption }, "\u041B\u044C\u0433\u043E\u0442\u044B")),
    Array.isArray(privilegeList.data) && privilegeList.data.length > 0 ?
        React.createElement(Table, { testID: 'test-id-bfc195dc-24e2-ffe5-08d7-2f9d003ad259' },
            React.createElement(TableHead, { testID: 'test-id-6059fe23-7c65-ea60-f3ee-3098d285dcdc' },
                React.createElement(TableColumn, { testID: 'test-id-1b8a3baf-f29a-8596-b704-25d34c9c59d2', width: "17%" },
                    React.createElement(Text, { testID: 'test-id-590d8e9e-b9e1-5cde-60dc-2a3843e0d327' }, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430")),
                React.createElement(TableColumn, { testID: 'test-id-0512243b-c509-e4c6-c984-3b945dd1c94a', width: "17%" },
                    React.createElement(Text, { testID: 'test-id-df2d269a-cfaa-ff66-c8ef-a724471efacf' }, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F")),
                React.createElement(TableColumn, { testID: 'test-id-468b6801-35fb-19f2-034a-dbcc385cd012', width: "66%" },
                    React.createElement(Text, { testID: 'test-id-d1316eb0-cf57-5931-a915-d4ed25ef8572' }, "\u041B\u044C\u0433\u043E\u0442\u0430"))),
            React.createElement(TableBody, { testID: 'test-id-98ca1fa3-9639-6c34-7b5f-9ff35e657f35' }, privilegeList.data.map((item, index) => (React.createElement(TableRow, { testID: 'test-id-b6698cfd-9228-d4ab-1692-5398662fdb9a', key: `Privilege Row ${index}` },
                React.createElement(TableCell, { testID: 'test-id-91fbdec3-9206-4ffe-cf9e-b78355ae377c' },
                    React.createElement(Text, { testID: 'test-id-91fbdec3-9206-4ffe-cf9e-b78355ae377c', style: Styles.privilegeRowText }, item.startDate ? item.startDate.formattedString() : PLACEHOLDER)),
                React.createElement(TableCell, { testID: 'test-id-40295b49-a5b5-410c-f378-09074ba72e98' },
                    React.createElement(Text, { testID: 'test-id-40295b49-a5b5-410c-f378-09074ba72e98', style: Styles.privilegeRowText }, item.endDate ? item.endDate.formattedString() : PLACEHOLDER)),
                React.createElement(TableCell, { testID: 'test-id-36122e44-68b4-06f3-8103-69922926c5a5' },
                    React.createElement(Text, { testID: 'test-id-36122e44-68b4-06f3-8103-69922926c5a5', style: Styles.privilegeRowText }, item.name || PLACEHOLDER))))))) :
        React.createElement(View, { style: Styles.noRestrictionView, testID: "test-id-3ff9ce30-da4f-11e7-9296-cec278b6b50a" },
            React.createElement(Text, { style: Styles.noRestrictionText, testID: "test-id-062571dc-da4f-11e7-9296-cec278b6b50a" }, PLACEHOLDER))));
const getProductPaymentAccountRestrictionList = (restrictionList, currencyClassifier) => (Array.isArray(restrictionList.data) ? (restrictionList.data.compact().map((item, index) => (React.createElement(TableRow, { testID: 'test-id-443704be-8e66-5b6e-4152-caf49fa0f997', key: `Restriction Row ${index}` },
    React.createElement(TableCell, { testID: 'test-id-c3fc9f8e-c9a5-326f-737b-0dc77427969a' },
        React.createElement(Text, { testID: 'test-id-9221a1a1-5ed0-a9e2-5541-5595ed4839f4' }, item.type || PLACEHOLDER),
        React.createElement(Text, { style: Styles.restrictionSumText, testID: `${index}-${item.sum}-${currencyClassifier.code}-'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328` }, item.sum != null ? `${item.sum.sumString()} ${currencyClassifier.code}` : PLACEHOLDER)),
    React.createElement(TableCell, { testID: 'test-id-c50fee6c-8455-a129-2ad9-afd590bf51a8' },
        React.createElement(Text, { testID: 'test-id-c50fee6c-8455-a129-2ad9-afd590bf51a8' }, item.startDate ? formatDate(item.startDate) : PLACEHOLDER)),
    React.createElement(TableCell, { testID: 'test-id-a5530a1b-56ee-2c37-8d52-a14a19cb358d' },
        React.createElement(Text, { testID: 'test-id-a5530a1b-56ee-2c37-8d52-a14a19cb358d' }, item.annotation || PLACEHOLDER)))))) : []);
const getProductPaymentAccountCardIndexList = (cardIndexList) => {
    let currencyViewList = [];
    let resSummaViewList = [];
    let debtViewList = [];
    let outputViewList = [];
    cardIndexList.data.compact().map((item, index) => {
        const newTableRow = {};
        const accountInfoList = item.accountInfoList;
        accountInfoList.map((cardIndexInfo, key) => {
            currencyViewList.push(React.createElement(View, { testID: `test-id-5a0e0734-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, key: `ViewCurrency-${index}-${key}`, style: Styles.cardIndexViewCell },
                React.createElement(View, { key: `test-id-4c582f2a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, testID: `test-id-4c582f2a-8723-11e7-bb31-be2e44b06b34-${index}-${key}` },
                    React.createElement(Text, { key: `test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}-${key}`, style: Styles.cardIndexCurrencyTextRow, testID: `test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}-${key}` }, cardIndexInfo.currency && cardIndexInfo.currency.code || PLACEHOLDER)),
                key + 1 < accountInfoList.length
                    ? React.createElement(View, { style: Styles.borderCardIndexLine, key: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5${index}-${key}`, testID: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5${index}-${key}` },
                        React.createElement(HorizontalRule, { key: `test-id-${index}-3402040e-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`, testID: `test-id-${index}-3402040e-c8fb-11e7-abc4-cec278b6b50a-${key}${index}` }))
                    : null));
            resSummaViewList.push(React.createElement(View, { testID: `test-id-a57f2100-c902-11e7-abc4-cec278b6b50a-${index}-${key}`, key: `ViewSumma-${index}-${key}`, style: Styles.cardIndexViewCell },
                React.createElement(View, { testID: `test-id-3938fe56-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, key: `test-id-3938fe56-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, style: Styles.cardIndexSummaViewCell },
                    React.createElement(Text, { key: `test-id-db10cf98-c886-11e7-abc4-cec278b6b50a-${index}-${key}`, testID: `test-id-db10cf98-c886-11e7-abc4-cec278b6b50a-${index}-${key}`, style: Styles.cardIndexCurrencyTextRow }, cardIndexInfo.sum
                        ? cardIndexInfo.sum.sumString()
                        : PLACEHOLDER)),
                key + 1 < accountInfoList.length ?
                    React.createElement(View, { style: Styles.borderCardIndexLine, key: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`, testID: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}` },
                        React.createElement(HorizontalRule, { key: `test-id-${index}-2d113dc2-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`, testID: `test-id-${index}-2d113dc2-c8fb-11e7-abc4-cec278b6b50a-${key}${index}` }))
                    : null));
            debtViewList.push(React.createElement(View, { testID: `test-id-b812e0ae-c902-11e7-abc4-cec278b6b50a-${index}-${key}`, key: `ViewRest-${index}-${key}`, style: Styles.cardIndexViewCell },
                React.createElement(View, { key: `test-id-4258fa4a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, testID: `test-id-4258fa4a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`, style: Styles.cardIndexPaymentRestViewCell },
                    React.createElement(Text, { key: `test-id-60598fb0-c886-11e7-abc4-cec278b6b50a-${index}-${key}`, style: Styles.cardIndexCurrencyTextRow, testID: `test-id-60598fb0-c886-11e7-abc4-cec278b6b50a-${index}-${key}` }, cardIndexInfo.paymentRest
                        ? cardIndexInfo.paymentRest.sumString()
                        : PLACEHOLDER)),
                key + 1 < accountInfoList.length ?
                    React.createElement(View, { key: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`, style: Styles.borderCardIndexLine, testID: `test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}` },
                        React.createElement(HorizontalRule, { key: `test-id-${index}-2662a092-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`, testID: `test-id-${index}-2662a092-c8fb-11e7-abc4-cec278b6b50a-${key}${index}` })) : null));
        });
        outputViewList.push({
            name: item.name,
            currencyList: currencyViewList,
            summaList: resSummaViewList,
            debtList: debtViewList,
        });
        currencyViewList = [];
        debtViewList = [];
        resSummaViewList = [];
    });
    return outputViewList.map((item, index) => (React.createElement(TableRow, { testID: `test-id-d5d993d9-9cd7-3f24-7974-abf09a322365-${index}`, key: `Card Index Row ${index}` },
        React.createElement(TableCell, { testID: `test-id-02343ed0-5470-9d2e-b76c-f1665f7f71d3-${index}` },
            React.createElement(Text, { style: Styles.cardIndexNameTextRow, testID: `test-id-02343ed0-5470-9d2e-b76c-f1665f7f71d3-${index}` }, item.name)),
        React.createElement(TableCell, { testID: `test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}`, style: Styles.cardIndexCell },
            React.createElement(View, { testID: `ebeb9144-8723-11e7-bb31-be2e44b06b34-${index}`, style: Styles.cardIndexViewCell }, item.currencyList)),
        React.createElement(TableCell, { testID: `test-id-31177b13-413c-64f5-fbe8-24f9b0baa93c-${index}`, style: Styles.cardIndexCell },
            React.createElement(View, { testID: `f83f9e40-8723-11e7-bb31-be2e44b06b34-${index}`, style: Styles.cardIndexViewCell }, item.summaList)),
        React.createElement(TableCell, { testID: `test-id-8eff27a7-e33b-77fc-c442-1528ed8f7e14-${index}`, style: Styles.cardIndexCell },
            React.createElement(View, { testID: `fce3804c-8723-11e7-bb31-be2e44b06b34-${index}`, style: Styles.cardIndexViewCell }, item.debtList)))));
};
const getPaymentAccountGeneralInfoView = (props, paymentAccountProduct) => (paymentAccountProduct ? (React.createElement(View, { testID: 'test-id-da88ed6b-a011-bda5-f444-f66658c0dd38', style: Styles.generalInfoContainer },
    React.createElement(Grid, { testID: 'test-id-04f1ffda-5da0-92e4-4114-884ea3bb263d' },
        React.createElement(View, { testID: 'test-id-payment-account-info-hr-1', style: Styles.labelHrContainer },
            React.createElement(HorizontalRule, { testID: 'test-id-13cbe25d-63f7-2a4c-1d1d-309bad0e5785' })),
        React.createElement(Row, { testID: 'test-id-3b069535-16cc-3a78-d570-d87a559715fb' },
            React.createElement(Col, { testID: 'test-id-fe540db9-55dc-4715-0aed-03d2afab399e', xs: XS_SIZE / 3 }, getSumTextField(paymentAccountProduct.curBalance, "Текущий остаток", paymentAccountProduct.currencyClassifier, true, false)),
            React.createElement(Col, { testID: 'test-id-cf322e63-87bd-2de3-f0c7-14a412bc8119', xs: XS_SIZE / 3 },
                React.createElement(View, { testID: "test-id-c59ede60-db38-11e7-9296-cec278b6b50a", style: Styles.planBalanceView },
                    React.createElement(View, { testID: 'test-id-abf649b2-db38-11e7-9296-cec278b6b50a' }, getSumTextField(paymentAccountProduct.planBalance, "Плановый остаток", paymentAccountProduct.currencyClassifier, false, false)),
                    React.createElement(View, { style: Styles.planBalanceHintView, testID: 'test-id-c59ede60-db38-11e7-9296-cec278b6b50a' },
                        React.createElement(HintIcon, { testID: "baf6df9e-c512-11e7-abc4-cec278b6b50a", text: '\u0421\u0443\u043C\u043C\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u043B\u0438\u043C\u0438\u0442\u0430 \u043E\u0432\u0435\u0440\u0434\u0440\u0430\u0444\u0442\u0430 \u0437\u0430 \u0432\u044B\u0447\u0435\u0442\u043E\u043C \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439' })))),
            React.createElement(Col, { testID: 'test-id-d13fea34-5a86-d94f-14dd-5cdf0220f511', xs: XS_SIZE / 3 })),
        React.createElement(View, { testID: 'test-id-payment-account-info-hr-2', style: Styles.sumTextHrContainer },
            React.createElement(HorizontalRule, { testID: 'test-id-d42d01e7-828a-1b99-84f1-4a1eb4b3ff37' })),
        React.createElement(Row, { testID: 'test-id-49667dbf-7359-e46a-2d71-59b38ba0fc76' },
            React.createElement(Col, { testID: 'test-id-fcfb4ba8-b061-ee6d-5b15-d0a743f21049', xs: XS_SIZE / 3 },
                React.createElement(Label, { testID: 'test-id-a7bc800f-56f2-0159-780e-cbca48d2c03a', header: '', text: 'Дата открытия счета', block: true },
                    React.createElement(Text, { testID: 'test-id-f864993a-df93-3204-a856-c7fcb7df32cd' }, paymentAccountProduct.openDate ? paymentAccountProduct.openDate.formattedString() : PLACEHOLDER))),
            paymentAccountProduct.closeDate ?
                React.createElement(Col, { testID: 'test-id-fcfb4ba8-b061-ee6d-5b15-d0a743f21049', xs: XS_SIZE / 3 },
                    React.createElement(Label, { testID: 'test-id-a7bc800f-56f2-0159-780e-cbca48d2c03a', header: '', text: 'Дата закрытия счета', block: true },
                        React.createElement(Text, { testID: 'test-id-f864993a-df93-3204-a856-c7fcb7df32cd' }, paymentAccountProduct.closeDate ? paymentAccountProduct.closeDate.formattedString() : PLACEHOLDER))) : null,
            React.createElement(Col, { testID: 'test-id-44f13062-2d81-7772-2f61-f14593eee705', xs: XS_SIZE / 3 },
                React.createElement(Label, { testID: 'test-id-42da423b-305e-9661-d69b-58336562ec46', header: '', text: 'Номер договора', block: true },
                    React.createElement(Text, { testID: 'test-id-599dea25-eb62-c6aa-12c1-481e707765ab' }, paymentAccountProduct.contractNumber || PLACEHOLDER))))))) : (React.createElement(View, { testID: 'test-id-90967f98-e5a8-8299-86a5-60e8689263a1' })));
const getCacheView = (bhCachedDate, performUpdate) => (React.createElement(RefreshBar, { key: `RefreshBarProductList${bhCachedDate ? bhCachedDate.getTime() : new Date().getTime()}`, testID: 'test-id-86ae35aa-f5d9-11e7-8c3f-9a214cf093ae', title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: () => performUpdate(), date: bhCachedDate || new Date() }));
const getPaymentAccountRestrictionListView = (restrictionList, currencyClassifier) => (restrictionList ? (React.createElement(View, { testID: 'test-id-ea49e819-f5e0-8e75-22ca-e322ebdb8860', style: Styles.restrictionListContainer },
    React.createElement(Table, { testID: 'test-id-416b1a68-a73c-7a73-737c-44a5c3cc945e' },
        React.createElement(TableHead, { testID: 'test-id-968a969c-0e2e-9121-83d3-91aebc96bfa8' },
            React.createElement(TableColumn, { testID: 'test-id-901a54a4-bf61-2fd7-5132-bfce205d0ef5', width: "35%" },
                React.createElement(Text, { testID: 'test-id-606898b0-ef1b-175d-4489-e3e1da6a8a3d-typeRestriction' }, "Вид ограничения\nОбщая сумма")),
            React.createElement(TableColumn, { testID: 'test-id-9e7b2dac-c297-a87b-14a2-0f95b85daca0', width: "17%" },
                React.createElement(Text, { testID: 'test-id-8b5b8d48-e266-388d-9fd2-178eff4e7500' }, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F")),
            React.createElement(TableColumn, { testID: 'test-id-790b429e-707b-309d-3d6d-b86a3c3e24ab', width: "48%" },
                React.createElement(Text, { testID: 'test-id-836b1369-20d2-81df-ce93-90fe5325fe65' }, "Основание"))),
        React.createElement(TableBody, { testID: 'test-id-66de8124-4579-57b1-6636-defd4b8b6daa' }, getProductPaymentAccountRestrictionList(restrictionList, currencyClassifier))))) : (React.createElement(View, { testID: 'test-id-8ea651b6-d1e5-8801-4826-789de5c4fe0e' })));
const getProductErrorPanel = (title, description, onRefresh) => (React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-236164d8b6e2', title: title, description: description, onRefresh: onRefresh }));
const getPaymentAccountCardIndexListView = (props, cardIndexList) => (props.cardIndexListError === null ? (React.createElement(View, { testID: 'test-id-dc86baf2-99b8-a776-9442-7d535143c912', style: Styles.cardCardIndexListContainer }, props.cardIndexListFetching || cardIndexList === null ? getLoader("Загрузка картотеки") :
    React.createElement(View, { testID: "test-id-cd805cf0-e009-11e7-80c1-9a214cf093ae", style: Styles.paymentAccountCardIndexListWrapper },
        React.createElement(View, { style: Styles.paymentAccountCardIndexListContent, testID: "test-id-d90fa3dc-e009-11e7-80c1-9a214cf093ae" },
            React.createElement(View, { testID: "test-id-c9f99f2c-c909-11e7-abc4-cec278b6b50a", style: Styles.cardIndexPaymentAccountView },
                React.createElement(Hint, { style: Styles.cardIndexHint, testID: "test-id-2de334aa-c908-11e7-abc4-cec278b6b50a", type: HintType.NEWBIE, text: "Картотека №1 - расчетные документы, ожидающие акцепта для оплаты. " +
                        "Картотека №2 - расчетные документы,не оплаченные в срок." })),
            React.createElement(Table, { style: Styles.tableCardIndexList, testID: 'test-id-fe269557-9d32-cb0a-6ba9-489aa3f7a184' },
                React.createElement(TableHead, { testID: 'test-id-e46903c6-4488-d82a-7f1d-fcfd9baf9ee0' },
                    React.createElement(TableColumn, { testID: 'test-id-821d769b-dc42-5a4d-6de5-320a5ff66968', width: "29%" }),
                    React.createElement(TableColumn, { testID: 'test-id-97ba0f6f-cef4-f2ef-9764-bef42b48d142', width: "7%" },
                        React.createElement(Text, { testID: 'test-id-42f81b95-ae6b-1a73-ba98-1ea3eadc026b' }, "\u0412\u0430\u043B\u044E\u0442\u0430")),
                    React.createElement(TableColumn, { testID: 'test-id-d8ebc513-b41a-e64a-d0b5-5285630a958f', width: "31%", align: TableColumnAlignment.RIGHT },
                        React.createElement(Text, { testID: 'test-id-04225ce5-a82b-3a8b-ab62-16c904478f3b' }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430")),
                    React.createElement(TableColumn, { testID: 'test-id-a5467725-ece9-c602-4d5d-b74a016a48fe', width: "33%", align: TableColumnAlignment.RIGHT },
                        React.createElement(Text, { testID: 'test-id-4ed461f6-ad7e-14a3-6ef0-cddcc50d985f' }, "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E"))),
                React.createElement(TableBody, { testID: 'test-id-a2f3c70b-4cc3-883b-5fa7-45b5f6fcf427' }, getProductPaymentAccountCardIndexList(cardIndexList)))),
        getCacheView(props.cardIndexListCachedDate, props.performUpdateCardIndexListResetCache)))) : getProductErrorPanel("Ошибка при получении картотеки продукта", props.cardIndexListError.message, props.performUpdateCardIndexListResetCache));
const getPaymentAccountTarrifView = (privilegeList, packageProduct, tariff) => (React.createElement(View, { testID: 'test-id-efaad548-ecb9-41a5-b5cf-d5f46ea7adfc', style: Styles.tariffListContainer },
    React.createElement(View, { testID: 'test-id-d26c8434-835f-11e7-bb31-be2e44b06b34', style: Styles.borderBox },
        React.createElement(Text, { testID: 'test-id-db68b440-835f-11e7-bb31-be2e44b06b34', style: Styles.boldSubCaption }, "\u0422\u0430\u0440\u0438\u0444\u044B")),
    React.createElement(View, { testID: 'test-id-1b789941-3d77-fb99-7180-6abf536c33b8', style: Styles.generalInfoContainer },
        React.createElement(Grid, { testID: 'test-id-a3cdeb2a-e8ba-4a07-c91a-f9030f0a3d8b' },
            React.createElement(Row, { testID: 'test-id-a78fb3b5-aae6-b5ef-724b-1d6e7779a852' },
                React.createElement(Col, { testID: 'test-id-b76e03a9-c7a5-e1f1-d7ae-ecf9bb38d666', xs: XS_SIZE / 3 },
                    React.createElement(Label, { testID: 'test-id-19cafe9d-fd1c-10f2-ef15-4d175a78785b', header: '', text: 'Стандартный тарифный план', block: true },
                        React.createElement(Text, { testID: 'test-id-b97f281f-0483-9bc9-c19a-d8c230ecc668', style: Styles.tariffNameText }, tariff.name || PLACEHOLDER))),
                React.createElement(Col, { testID: 'test-id-ab1fc8b6-5fa6-bee1-6a03-201efdae3d54', xs: XS_SIZE / 3 },
                    React.createElement(Label, { testID: 'test-id-4ea969f0-0d59-7173-1892-1b430b8cd2e1', header: '', text: 'Дата начала действия', block: true },
                        React.createElement(Text, { testID: 'test-id-1a0b42be-1096-a282-e235-ab3ce8d6e4ea', style: Styles.tariffStartDateText }, tariff.startDate && tariff.startDate.formattedString() || PLACEHOLDER))),
                React.createElement(Col, { testID: 'test-id-2e0b70e1-4c9a-e576-10fc-4fcffed618de', xs: XS_SIZE / 3 },
                    React.createElement(Label, { testID: 'test-id-b68a7abd-eb09-59c7-be5f-7fd6a801b96b', header: '', text: 'Дата окончания действия', block: true },
                        React.createElement(Text, { testID: 'test-id-57b87e91-7174-7f28-9838-5377535bd1af', style: Styles.tariffEndDateText }, tariff.endDate && tariff.endDate.formattedString() || PLACEHOLDER)))),
            React.createElement(Row, { testID: 'test-id-cdde1067-4e9f-9921-2469-a2a699d96d87' },
                React.createElement(Col, { testID: 'test-id-144f1052-0476-224a-e0bc-43cd97cca56b', xs: XS_SIZE / 3 },
                    React.createElement(View, { style: Styles.gridCell },
                        React.createElement(Label, { testID: 'test-id-5fcdc656-a5d6-9d5d-c6cc-5d619f5205dd', header: '', text: 'Пакет услуг', block: true },
                            React.createElement(Text, { testID: 'test-id-bac270a3-7fda-6847-b8d8-6f3517115709', style: Styles.packageNameText }, packageProduct.name || PLACEHOLDER)))),
                React.createElement(Col, { testID: 'test-id-6699a5a3-5024-4efa-9748-5492a7ee0381', xs: XS_SIZE / 3 },
                    React.createElement(View, { style: Styles.gridCell },
                        React.createElement(Label, { testID: 'test-id-576d6f1c-bad8-9e08-74ba-e7bb58408efe', header: '', text: 'Дата начала действия', block: true },
                            React.createElement(Text, { testID: 'test-id-ace5be82-fc07-382b-d4ac-9ab639d17e53', style: Styles.packageDateStartText }, packageProduct.startDate && packageProduct.startDate.formattedString() || PLACEHOLDER)))),
                React.createElement(Col, { testID: 'test-id-35ffacdf-4df6-f4ec-c654-85e0d055ec25', xs: XS_SIZE / 3 },
                    React.createElement(View, { style: Styles.gridCell },
                        React.createElement(Label, { testID: 'test-id-36d419ff-462f-6938-7308-dd6167fc7e7d', header: '', text: 'Дата окончания действия', block: true },
                            React.createElement(Text, { testID: 'test-id-6c3ad7d0-f824-a209-ba0a-2f5df4e46296', style: Styles.packageDateEndText }, packageProduct.endDate && packageProduct.endDate.formattedString() || PLACEHOLDER))))))),
    privilegeList && Array.isArray(privilegeList.data) && privilegeList.data.length > 0
        ? getProductPaymentAccountPrivilegeList(privilegeList)
        : null));
const getPaymentAccountVspServiceView = (props, vspInfo) => (props.currentPaymentAccountProduct.paymentAccountProduct && vspInfo ? (React.createElement(View, { testID: 'test-id-8bb30553-4869-fa2f-d45d-f7a8d15181f1', style: Styles.vspInfoContainer },
    React.createElement(Grid, { testID: 'test-id-5a4f21b4-e493-2078-50b7-1b285f4d1a36' },
        React.createElement(Row, { testID: 'test-id-fa9f7dc8-021f-b285-8148-f8d502e50dc5' },
            React.createElement(Col, { testID: 'test-id-b24fcc68-4b67-8f02-d45d-0746d9e19cb4', xs: XS_SIZE / 2 },
                React.createElement(Label, { testID: 'test-id-07545425-0fca-0cfc-b023-19dc57fcdc29', header: '', text: 'Наименование ВСП', block: true },
                    React.createElement(Text, { testID: 'test-id-e24f801d-de94-f175-392f-451556bb893d' }, vspInfo.name || PLACEHOLDER))),
            React.createElement(Col, { testID: 'test-id-c43a624f-f9ac-aea3-5fca-b88bc1bf680f', xs: XS_SIZE / 3 },
                React.createElement(Label, { testID: 'test-id-86d10b86-a70d-783f-d14d-b75e3421646c', header: '', text: 'Номер ВСП', block: true },
                    React.createElement(Text, { testID: 'test-id-141082f6-eaad-8086-f05e-72cdd6233502' }, `${props.currentPaymentAccountProduct.paymentAccountProduct.regionId}-${props.currentPaymentAccountProduct.paymentAccountProduct.agencyId}-${props.currentPaymentAccountProduct.paymentAccountProduct.branchId}`)))),
        React.createElement(Row, { testID: 'test-id-3a6bc98f-6c29-fe86-2bf6-7d454bc3c8fd' },
            React.createElement(Col, { testID: 'test-id-8c156c29-038b-f5bd-6bb8-9ddb10f760aa', xs: XS_SIZE / 2 },
                React.createElement(View, { style: Styles.gridCell },
                    React.createElement(Label, { testID: 'test-id-14e7096b-0cd7-aba8-acb6-f64b55686280', header: '', text: 'Адрес ВСП', block: true },
                        React.createElement(Text, { testID: 'test-id-de9252cf-a023-862b-fe5f-fda4d3bad996' }, vspInfo.address || PLACEHOLDER)))),
            React.createElement(Col, { testID: 'test-id-d8fcabc9-8b2f-327e-8fe8-fb63a6219ecd', xs: XS_SIZE / 3 },
                React.createElement(View, { style: Styles.gridCell },
                    React.createElement(Label, { testID: 'test-id-60302e20-1bd1-ab83-4d1a-aca446ba6b2b', header: '', text: 'Ответственный по счету', block: true },
                        React.createElement(Text, { testID: 'test-id-2be2e8b2-5e39-5f1a-a378-db49494365b5' }, props.currentPaymentAccountProduct.paymentAccountProduct.accountResp || PLACEHOLDER)))))))) : (React.createElement(View, { testID: 'test-id-3ec077ab-a0b5-0a98-9b38-8c5e1ee96c9f' })));
const getSumTextField = (money, label = "", currency = defaultValues.Classifier, block = false, isSmall = true) => ((money == null) || isNaN(money) ? (React.createElement(Label, { testID: `test-id-8ff741e0-6488-6a44-22d0-8b01678f84cf-${money}-${label}`, header: '', text: label, block: block },
    React.createElement(Text, { testID: `test-id-8ff741e0-6488-6a44-22d0-8b01678f84cf-${money}-${label}`, style: isSmall ? {} : Styles.sumTextPlaceholder }, PLACEHOLDER))) : (React.createElement(SumText, { small: isSmall, testID: `test-id-70d52bb9-3819-9238-62ab-3e70c16450d4-${money}-${label}`, block: block, label: label, currency: currency.code, value: money })));
const operationId = (operation, perfix = '', postfix = '') => (`${perfix ? `${perfix}-` : ''}${operation && operation.date ? operation.date.toISOString() : (new Date()).toISOString()}-${operation && operation.sum || 0}${postfix ? `-${postfix}` : ''}`);
const getPaymentAccountOperationListRows = (props, operationList) => (Array.isArray(operationList.data) ? (operationList.data.compact().map((operation, index) => (React.createElement(TableRow, { testID: operationId(operation, 'test-id', 'row'), key: operationId(operation, 'row') },
    React.createElement(TableCell, { testID: operationId(operation, 'test-id', 'datetime'), key: operationId(operation, 'cell-datetime') },
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'date-text'), key: operationId(operation, 'text-date'), style: Styles.operationDateText }, operation.date ? operation.date.formattedString() : PLACEHOLDER),
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'time-text'), key: operationId(operation, 'text-time'), style: Styles.operationTimeText }, operation.date ? operation.date.formattedString('HH:mm') : PLACEHOLDER)),
    React.createElement(TableCell, { testID: operationId(operation, 'test-id', 'target'), key: operationId(operation, 'cell-target') },
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'target-text'), style: Styles.operationTargetText }, operation.correspondent || PLACEHOLDER)),
    React.createElement(TableCell, { testID: operationId(operation, 'test-id', 'purpose'), key: operationId(operation, 'cell-purpose') },
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'purpose-text'), style: Styles.operationPurposeText }, operation.purpose || PLACEHOLDER)),
    React.createElement(TableCell, { testID: operationId(operation, 'test-id', 'sum'), key: operationId(operation, 'cell-sum'), style: Styles.sumTextRight }, operation.sum ? (React.createElement(View, { testID: operationId(operation, 'test-id', 'sum-text-container'), key: operationId(operation, '', 'sum-text-container'), style: Styles.sumTextContainer },
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'sum-text'), key: operationId(operation, '', 'sum-text'), style: Styles.sumText }, `${operation.sum.sumString(3, ' ', 2)}${operation.currency && ` ${operation.currency.code}` || ''}`))) : (React.createElement(View, { testID: operationId(operation, 'test-id', 'no-sum-view') },
        React.createElement(Text, { testID: operationId(operation, 'test-id', 'no-sum-text'), style: Styles.operationNoSumText }, PLACEHOLDER)))))))) : []);
const OPERATION_PERIOD_FILTER_POPOVER = 'OPERATION_PERIOD_FILTER_POPOVER';
const OPERATION_LIST_FILTER_POPOVER = 'OPERATION_LIST_FILTER_POPOVER';
const OPERATION_LEDGER_SIDE_FILTER_POPOVER = 'OPERATION_LEDGER_SIDE_FILTER_POPOVER';
const periodTypeStringValue = (type) => {
    switch (type) {
        case Enums.PeriodType.Last5Days:
            return 'Last5Days';
        case Enums.PeriodType.Last10Days:
            return 'Last10Days';
        case Enums.PeriodType.Last15Days:
            return 'Last15Days';
        case Enums.PeriodType.Last30Days:
            return 'Last30Days';
        case Enums.PeriodType.Custom:
        default:
            return 'Custom';
    }
};
const getPeriodFilterRadioGroup = (props) => (React.createElement(RadioGroup, { testID: 'test-id-43754701-34f0-b5ce-2185-71f2867a299f', onChange: (index) => {
        switch (index) {
            case 0:
                props.performInputPeriodType(Enums.PeriodType.Last5Days);
                break;
            case 1:
                props.performInputPeriodType(Enums.PeriodType.Last10Days);
                break;
            case 2:
                props.performInputPeriodType(Enums.PeriodType.Last15Days);
                break;
            case 3:
                props.performInputPeriodType(Enums.PeriodType.Last30Days);
                break;
            case 4:
            default:
                props.performInputPeriodType(Enums.PeriodType.Custom);
                break;
        }
    } },
    React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: periodTypeStringValue(Enums.PeriodType.Last5Days), value: periodTypeStringValue(Enums.PeriodType.Last5Days), label: getPeriodTypeName(props, Enums.PeriodType.Last5Days) }),
    React.createElement(RadioButton, { testID: 'test-id-1ca68470-28e9-3c66-a8af-7f280a307de5', key: periodTypeStringValue(Enums.PeriodType.Last10Days), value: periodTypeStringValue(Enums.PeriodType.Last10Days), label: getPeriodTypeName(props, Enums.PeriodType.Last10Days) }),
    React.createElement(RadioButton, { testID: 'test-id-82aa0b82-586b-bd18-b990-0a04938fc0f5', key: periodTypeStringValue(Enums.PeriodType.Last15Days), value: periodTypeStringValue(Enums.PeriodType.Last15Days), label: getPeriodTypeName(props, Enums.PeriodType.Last15Days) }),
    React.createElement(RadioButton, { testID: 'test-id-e873b2c5-dab7-6073-f426-c510cf4416aa', key: periodTypeStringValue(Enums.PeriodType.Last30Days), value: periodTypeStringValue(Enums.PeriodType.Last30Days), label: getPeriodTypeName(props, Enums.PeriodType.Last30Days) }),
    React.createElement(RadioButton, { testID: 'test-id-40d4d34a-7fe1-0eba-0e6e-5ce0a6a64951', key: periodTypeStringValue(Enums.PeriodType.Custom), value: periodTypeStringValue(Enums.PeriodType.Custom), label: 'Другой период' })));
const OPERATION_TYPE_LIST = [Enums.OperationType.DebtAndCredit, Enums.OperationType.Debt, Enums.OperationType.Credit];
const getOperationTypeLable = (type) => {
    switch (type) {
        case Enums.OperationType.DebtAndCredit:
            return 'Все';
        case Enums.OperationType.Credit:
            return 'Расход';
        case Enums.OperationType.Debt:
            return 'Приход';
        default:
            return PLACEHOLDER;
    }
};
const getOperationTypeString = (type) => {
    switch (type) {
        case Enums.OperationType.DebtAndCredit:
            return 'DebtAndCredit';
        case Enums.OperationType.Debt:
            return 'Debt';
        case Enums.OperationType.Credit:
            return 'Credit';
        default:
            return PLACEHOLDER;
    }
};
const getPeriodTypeName = (props, type) => {
    switch (type) {
        case Enums.PeriodType.Last5Days:
            return 'Последние 5 дней';
        case Enums.PeriodType.Last10Days:
            return 'Последние 10 дней';
        case Enums.PeriodType.Last15Days:
            return 'Последние 15 дней';
        case Enums.PeriodType.Last30Days:
            return 'Последние 30 дней';
        case Enums.PeriodType.Custom:
            return (props.inputFilterPeriodStart && props.inputFilterPeriodEnd ?
                `${props.inputFilterPeriodStart} - ${props.inputFilterPeriodEnd}` : '');
        default:
            return PLACEHOLDER;
    }
};
const getOperationListFilterContent = (props) => (React.createElement(View, { testID: 'test-id-9a05291a-1098-6487-c14b-b5f89a3a55a0' },
    React.createElement(View, { testID: 'test-id-92b4b66d-e4cc-a284-0749-799ef5f68dd4' },
        React.createElement(RadioGroup, { testID: 'test-id-a20b8b70-1871-a12f-aca8-1af2315b7a0f', value: getOperationTypeString(props.inputOperationType), onChange: (index) => OPERATION_TYPE_LIST[index] &&
                props.performInputOperationType(OPERATION_TYPE_LIST[index]) },
            React.createElement(RadioButton, { testID: 'test-id-82875e85-185e-28db-ff7f-18866ae98575', key: getOperationTypeString(Enums.OperationType.DebtAndCredit), value: getOperationTypeString(Enums.OperationType.DebtAndCredit), label: getOperationTypeLable(Enums.OperationType.DebtAndCredit) }),
            React.createElement(RadioButton, { testID: 'test-id-64921f9b-8c41-a96b-f3ef-0ff511eedd66', key: getOperationTypeString(Enums.OperationType.Debt), value: getOperationTypeString(Enums.OperationType.Debt), label: getOperationTypeLable(Enums.OperationType.Debt) }),
            React.createElement(RadioButton, { testID: 'test-id-cd63f480-ca16-2489-1a40-95c4152122f4', key: getOperationTypeString(Enums.OperationType.Credit), value: getOperationTypeString(Enums.OperationType.Credit), label: getOperationTypeLable(Enums.OperationType.Credit) }))),
    React.createElement(View, { testID: 'test-id-fb9d2501-9dd0-0e6e-57d2-be0c4a1df694' },
        React.createElement(NumberInput, { testID: 'test-id-69adcdfb-7fc6-bac1-f1e5-f6301f3e7e65', fractionalDigitsCount: 3, value: `${props.inputSumMin || props.filterSumMin || ''}`, maxLength: 12, currency: 'RUR', label: 'Сумма операции от', onChange: (value) => props.performInputSumMin(parseInt(value)) }),
        React.createElement(NumberInput, { testID: 'test-id-7252483c-e236-43f4-7f8f-55f25207a01d', fractionalDigitsCount: 3, value: `${props.inputSumMax || props.filterSumMax || ''}`, maxLength: 12, currency: 'RUR', label: 'Сумма операции до', onChange: (value) => props.performInputSumMax(parseInt(value)) }))));
const getOperationListFilterSet = (props) => (([{
        name: 'CurrentOperationSumMin',
        label: props.filterSumMin ? `от ${props.filterSumMin.sumString()} RUB` : '',
        value: props.filterSumMin,
        clear: () => props.performInputSumMin(null, true),
    }, {
        name: 'CurrentOperationSumMax',
        label: props.filterSumMax ? `до ${props.filterSumMax.sumString()} RUB` : '',
        value: props.filterSumMax,
        clear: () => props.performInputSumMax(null, true),
    }, {
        name: 'CurrentOperationType',
        label: getOperationTypeLable(props.filterOperationType) || '',
        value: (props.filterOperationType == Enums.OperationType.DebtAndCredit) ? null : props.filterOperationType,
        clear: () => props.performInputOperationType(Enums.OperationType.DebtAndCredit, true),
    }]).compact().filter((filterItem) => (filterItem.value != null)));
const getPaymentAccountOperationListFilter = (props) => (React.createElement(View, { testID: 'test-id-41dfb85e-13c8-73a8-6a9d-aa936ad22aeb', style: Styles.filterValueView },
    React.createElement(PopoverTarget, { testID: 'test-id-464a7268-5245-be7d-72f0-c03401938235', refName: OPERATION_LIST_FILTER_POPOVER },
        React.createElement(NavigationFilterButton, { testID: 'test-id-operation-list-filter-button', onExecute: props.performPopoverFilterShow, count: getOperationListFilterSet(props).length }))));
const getLoader = (text = "") => (React.createElement(LoaderWithText, { text: text, testID: `test-id-${new Date().getTime()}` }));
const getPaymentAccountOperationListView = (props) => (props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct ? (React.createElement(View, { testID: 'test-id-3d0b72df-1abc-3b77-e943-b9179e7689d8', style: Styles.operationListView }, props.operationListFetching ? getLoader("Загрузка истории операций") :
    React.createElement(View, { testID: "test-id-166812c2-e006-11e7-80c1-9a214cf093ae", style: Styles.paymentAccountOperationListWrapper },
        React.createElement(View, { style: Styles.paymentAccountOperationListContent, testID: "test-id-e98463b0-e009-11e7-80c1-9a214cf093ae" },
            React.createElement(View, { testID: 'test-id-f75ea7e3-d0a7-48ed-15af-35e40a4fc55e', style: Styles.filterDescription },
                React.createElement(Text, { testID: 'test-id-1010ea86-a0ef-2905-5c86-0e448fb703dd', style: Styles.filterDescriptionText }, 'Список содержит 50 последних операций')),
            getOperationListFilterSet(props).length ? (React.createElement(View, { testID: 'test-id-filter-bar', style: Styles.filterBar }, getOperationListFilterSet(props).filter((filterItem) => (filterItem.label ? true : false)).map((filterItem, index) => (React.createElement(View, { testID: `test-id-${filterItem.name}-label`, key: `label-${filterItem.name}`, style: Styles.operationListFilterLabel },
                React.createElement(Text, { testID: `test-id-${filterItem.name}-label-title`, style: Styles.operationListFilterLabelText }, filterItem.label),
                React.createElement(Button, { testID: `test-id-${filterItem.name}-button`, onExecute: filterItem.clear },
                    React.createElement(Icon, { testID: `test-id-${filterItem.name}-clear`, disabled: true, type: IconType.MrmClear }))))))) : null,
            React.createElement(View, { testID: 'test-id-baed7120-5c8b-18e6-b5f0-0eefc2447e0c', style: Styles.operationListTableView },
                React.createElement(Table, { testID: 'test-id-3af90293-687f-c83e-d7c1-7d5e81ff40a9', style: Styles.operationListTable },
                    React.createElement(TableHead, { testID: 'test-id-861bc896-957b-de9f-915c-d530b5e4fbf9' },
                        React.createElement(TableColumn, { testID: 'test-id-96385f77-c3d0-6577-ec7f-93138a658b77', key: 'Operation datetime', width: '15%' },
                            React.createElement(Text, { testID: 'test-id-53e49565-fc0a-97fd-8fb0-0d22eaaba34f' }, 'Дата и время\nоперации')),
                        React.createElement(TableColumn, { testID: 'test-id-0bcc5902-b653-e67c-7d00-00f704656ef8', key: 'Operation account', width: '30%' },
                            React.createElement(Text, { testID: 'test-id-f1680fb3-f15a-4238-1745-b148a3a06be1' }, "\u041A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442")),
                        React.createElement(TableColumn, { testID: 'test-id-d86a9980-017a-7909-a07d-5912406214ea', key: 'Operation purpose', width: '27%' },
                            React.createElement(Text, { testID: 'test-id-bfe1dd6b-057c-aa61-ce4f-783946733f7c' }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430")),
                        React.createElement(TableColumn, { testID: 'test-id-5fda1c5f-4ef1-759e-b4d4-f363c86b5d36', key: 'Operation sum', width: '28%', align: TableColumnAlignment.RIGHT },
                            React.createElement(Text, { testID: 'test-id-9ac7145c-65c7-77ef-3baa-0768ee7deab7' }, "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"))),
                    React.createElement(TableBody, { testID: 'test-id-69867829-bd45-0f8f-4d9f-b820039a2fe7' }, getPaymentAccountOperationListRows(props, props.operationFilteredList))))),
        getCacheView(props.operationListCachedDate, props.performUpdateOperationListResetCache),
        React.createElement(Popover, { testID: 'test-id-215d0c15-d7e6-f239-d6e7-c4b5932d6434', target: PopoverTarget.getRef(OPERATION_LIST_FILTER_POPOVER), opened: props.isVisiblePopoverFilter, onOutsideTap: props.performPopoverFilterHide, type: PopoverType.WIDE, style: { height: 400, width: 400 }, position: [PopoverPosition.BOTTOM] },
            React.createElement(View, { testID: 'test-id-operation-list-filter-popover', style: Styles.operationListFilterView },
                React.createElement(SplitPanel, { testID: 'test-id-f442b5f4-3e93-d2ae-0110-843a75cb55c4', id: Util.getNavigationOperationPeriodTypeString(Enums.NavigationAppCRMOperationListFilter.OperationListFilter) },
                    React.createElement(ContentPanel, { testID: 'test-id-operationListFilter', style: { backgroundColor: '#fff' } },
                        React.createElement(Page, { testID: 'test-id-bccc1e52-9021-ec53-68e3-4064c14cd36d', scrollEnabled: true, content: getOperationListFilterContent(props) },
                            React.createElement(LeftPageHeader, { testID: 'test-id-4d1755a4-cdee-eabe-df23-275cff66f899' },
                                React.createElement(NavigationTextButton, { testID: 'test-id-72e7b143-ec9a-4e7a-c7cb-ef5f3e2c935d', title: 'Сбросить', onExecute: () => props.performFilterReset() })),
                            React.createElement(CenterPageHeader, { testID: 'test-id-b1e24ee2-7c43-d1a0-9f71-75639160e70e' },
                                React.createElement(H2, { testID: 'test-id-b1e24ee2-7c43-d1a0-9f71-75639160e70e' }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439")),
                            React.createElement(RightPageHeader, { testID: 'test-id-8e54ea57-2328-4d66-b511-0be14e0f6532' },
                                React.createElement(NavigationTextButton, { testID: 'test-id-9015595f-3cc0-a58a-5b25-0e86e1abf1b1', title: 'Применить', onExecute: () => props.performFilterApply() })))))))))) : (React.createElement(View, { testID: 'test-id-cbf78b2a-6ef7-e947-e20e-828f05ba6b01' })));
const LABEL_LENGTH_LIMIT = 90;
const getReducedListLabel = (reduction, limit = LABEL_LENGTH_LIMIT) => (reduction.string.ellipsis(limit) + (reduction.itemsLeft ? ` (еще ${reduction.itemsLeft})` : ''));
const getListLabel = (list, limit = LABEL_LENGTH_LIMIT) => getReducedListLabel(list.reduce((reduction, item, index, items) => ((reduction.string.length < limit) ? ({
    string: reduction.string ? ([reduction.string, item]).join(', ') : item,
    itemsLeft: items.length - index - 1,
}) : reduction), {
    string: '',
    itemsLeft: list.length,
}), limit);
const getRestrictionListLabel = (restrictionList) => (
// props.currentPaymentAccountProduct &&
// props.currentPaymentAccountProduct.paymentAccountProduct &&
// props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList &&
restrictionList &&
    getListLabel(
    // props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList.data.map (
    restrictionList.data.map((item) => item.annotation || ''), LABEL_LENGTH_LIMIT) || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA));
const getCardIndexListLabel = (cardIndexList) => (cardIndexList &&
    getListLabel(cardIndexList.data.map((item) => item.name), LABEL_LENGTH_LIMIT) || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA));
const getTariffLabel = (tariff) => (tariff &&
    // tarrif && [tarrif.name, tarrif.packageName,] ||
    [
        tariff.name,
    ].join(', ') ||
    Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA));
const getVSPServiceLabel = (productVspInfo) => (productVspInfo && productVspInfo.name ||
    Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA));
const getOperationListLabel = (props) => {
    const operationList = props.operationFilteredList && props.operationFilteredList.data || [];
    const sortedByDate = operationList.compact().sort(($1, $2) => (($1.date && $2.date) ? ($1.date.isBefore($2.date) ? -1 : 1) : 0));
    const lastOperation = sortedByDate && sortedByDate.pop() || null;
    return lastOperation && lastOperation.date && `последняя операция от ${lastOperation.date.formattedString()}` || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA);
};
const paymentAccountDetailCellStyle = (isFetching) => isFetching ? Styles.listItemFetching : Styles.detailListItemCell;
const getPaymentAccountDetailListItemView = ({ isHighlighted, isDisabled, isFetching, navigate, repeat, title, value, error, key, eksErrorList, }) => (React.createElement(TableRow, { testID: `test-id-${key}${title}-row`, key: `${title}-${key}-row`, onClick: error ? repeat : () => { !isFetching && !isDisabled && navigate(); } },
    React.createElement(TableCell, { testID: `test-id-${title}-${key}-cell`, style: Styles.detailListItemCell },
        React.createElement(View, { testID: `test-id-${title}-${key}-container`, key: `${title}-${key}-container`, style: [
                Styles.paymentAccountDetailsTableRow,
                isFetching ? Styles.paymentAccountDetailsTableRowFetching : {},
            ] },
            React.createElement(View, { testID: `test-id-${title}-${key}-title-view`, key: `${title}-${key}-title-view`, style: Styles.paymentAccountProductTitleView },
                React.createElement(Text, { testID: `test-id-${title}-${key}-title`, key: `${title}-${key}-title`, style: [Styles.paymentAccountProductTitle, isHighlighted ? Styles.redColorText : {}] }, title),
                error || eksErrorList ? (React.createElement(Text, { testID: `test-id-${key}-error`, key: `${key}-error`, style: Styles.productDetailListItemFetchError, numberOfLines: 1, ellipsizeMode: 'tail' }, eksErrorList ? Util.getProductListItemErrorText(null)
                    : Util.getProductListItemErrorText(error))) : null),
            React.createElement(View, { testID: `test-id-${key}-value-view`, style: Styles.paymentAccountDetailsLabel }, isFetching ? (React.createElement(Text, { testID: `test-id-${key}-is-fetching`, key: `${key}-is-fetching`, style: Styles.productDetailListItemFetchingText }, Util.productListItemFetching)) : (error || eksErrorList ? (Util.isClientNotFoundInEksSystem(error) == false ?
                React.createElement(NavigationIconButton, { testID: `test-id-${key}-refresh-button`, key: `${key}-refresh-button`, type: NavigationIconButtonType.REFRESH, onExecute: repeat })
                : null) : ([(React.createElement(View, { testID: `test-id-${key}-details-view`, key: `${key}-details-view`, style: Styles.paymentAccountProductTitleView },
                    React.createElement(Text, { testID: `test-id-${key}-value`, key: `${key}-value`, numberOfLines: 1, style: Styles.paymentAccountDetailsLabelText, ellipsizeMode: 'tail' }, value))), (React.createElement(Button, { testID: `test-id-${key}-nav-button`, disabled: isDisabled, key: `${key}-nav-button`, onExecute: navigate },
                    React.createElement(Icon, { testID: `test-id-${key}-nav-icon`, disabled: true, type: IconType.MrmLink })))])))))));
const getCommonInfoPaymentAccountProduct = (props, productRestrictionList, productTariff, productVspInfo, productPrivilegeList, productPackage) => ((props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct) ? (React.createElement(View, { testID: 'test-id-3ecb8f24-d8a8-ae70-06d6-0bf8c664dd9b', style: Styles.paymentAccountInfoView },
    React.createElement(View, { testID: 'test-id-6889949b-3b49-5c01-3b29-3d75fa7b4e4b', style: Styles.generalInfoTextView },
        React.createElement(Label, { testID: 'test-id-42da423b-305e-9661-d69b-58336562ec46', header: '', text: 'Клиент', block: true },
            React.createElement(Text, { testID: 'test-id-cdf04264-49d1-6ce8-96ba-de088716c8e4', style: Styles.generalInfoTextValue }, Util.displayCustomerWithLegalForm(props.currentCustomerManaged)))),
    React.createElement(View, { testID: 'test-id-847dbdfb-2562-6707-024b-64ecec1446b7', style: Styles.generalInfoTextView },
        React.createElement(Label, { testID: 'test-id-42da423b-305e-9661-d69b-58336562ec46', header: '', text: 'Номер счета', block: true },
            React.createElement(Text, { testID: 'test-id-0d38edd7-7083-17e7-04ad-2ce8689fc244', style: Styles.generalInfoTextValue }, props.currentPaymentAccountProduct.paymentAccountProduct.accountNumber &&
                props.currentPaymentAccountProduct.paymentAccountProduct.accountNumber.formatAccountNumber() ||
                PLACEHOLDER))),
    getPaymentAccountGeneralInfoView(props, props.currentPaymentAccountProduct.paymentAccountProduct),
    React.createElement(View, { testID: 'test-id-ba7566aa-7d5e-9035-63ec-fceef26babc6', style: Styles.mainTableContainer },
        React.createElement(View, { style: Styles.hr }),
        React.createElement(Table, { testID: 'test-id-6b08f46a-4ee5-b770-3b83-9000e322f34b', style: Styles.mainTable },
            React.createElement(TableBody, { testID: 'test-id-88cff8be-1067-1ff5-0be2-2bc5c4a151d2' }, [
                productRestrictionList &&
                    Array.isArray(productRestrictionList.data) &&
                    productRestrictionList.data.length > 0 ? {
                    isHighlighted: true,
                    isFetching: false,
                    navigate: props.navigateToRestrictionListScreen,
                    repeat: () => {
                    },
                    title: 'Ограничения',
                    value: getRestrictionListLabel(productRestrictionList),
                    error: null,
                    isDisabled: false,
                    eksErrorList: null,
                    key: 'restriction-list-item',
                } : null,
                props.cardIndexListFetching ||
                    (props.cardIndexList &&
                        props.currentPaymentAccountProduct.paymentAccountProduct.isExistCardIndex &&
                        ((Array.isArray(props.cardIndexList.data)
                            && props.cardIndexList.data.length > 0) ||
                            (Array.isArray(props.cardIndexList.eksErrorList)
                                && props.cardIndexList.eksErrorList.length > 0) ||
                            (props.cardIndexListError != null))) ? {
                    isHighlighted: true,
                    isFetching: props.cardIndexListFetching,
                    navigate: props.navigateToCardIndexListScreen,
                    repeat: props.getPaymentAccountCardIndexList,
                    title: 'Картотеки',
                    eksErrorList: (Array.isArray(props.cardIndexList.eksErrorList) &&
                        props.cardIndexList.eksErrorList.length > 0
                        ? props.cardIndexList.eksErrorList
                        : null),
                    isDisabled: false,
                    value: getCardIndexListLabel(props.cardIndexList),
                    error: props.cardIndexListError,
                    key: 'card-index-list-item',
                } : null, {
                    isHighlighted: false,
                    isFetching: false,
                    navigate: props.navigateToTariffScreen,
                    repeat: () => {
                    },
                    title: 'Тарифы',
                    value: getTariffLabel(productTariff),
                    error: null,
                    isDisabled: !productTariff.name &&
                        !productPackage.name &&
                        !(productPrivilegeList &&
                            Array.isArray(productPrivilegeList.data) &&
                            productPrivilegeList.data.length > 0),
                    eksErrorList: null,
                    key: 'tariff-item',
                }, {
                    isHighlighted: false,
                    isFetching: props.productVspInfoFetching,
                    navigate: props.navigateToVspInfoScreen,
                    repeat: props.callGetProductVspInfo,
                    title: 'ВСП обслуживания',
                    eksErrorList: null,
                    isDisabled: !(productVspInfo &&
                        (productVspInfo.name ||
                            productVspInfo.address ||
                            props.currentPaymentAccountProduct.paymentAccountProduct.accountResp ||
                            props.currentPaymentAccountProduct.paymentAccountProduct.regionId ||
                            props.currentPaymentAccountProduct.paymentAccountProduct.branchId ||
                            props.currentPaymentAccountProduct.paymentAccountProduct.agencyId)),
                    value: getVSPServiceLabel(productVspInfo),
                    error: props.productVspInfoFetchingError,
                    key: 'vsp-services-item',
                }, Util.isActiveProductList(props.productListAgreementStatus) ? {
                    isHighlighted: false,
                    isFetching: props.operationListFetching,
                    navigate: props.navigateToOperationListScreen,
                    repeat: () => props.callGetOperationList(false),
                    title: 'История операций',
                    eksErrorList: props.operationList &&
                        Array.isArray(props.operationList.eksErrorList) &&
                        props.operationList.eksErrorList.length > 0 ?
                        props.operationList.eksErrorList : null,
                    isDisabled: checkDisabledStatus(props),
                    value: getOperationListLabel(props),
                    error: props.operationListError,
                    key: 'operation-list-item',
                } : null,
            ].map((item, index) => item ? getPaymentAccountDetailListItemView(Object.assign({}, item, { key: `${index}${item.key}` })) : null)))))) : (React.createElement(View, { testID: 'test-id-5d770604-a8c4-e46a-4da2-b3939d793595' })));
const checkDisabledStatus = (props) => {
    if (!props.operationFilteredList.data || props.operationFilteredList.data.length === 0) {
        return true;
    }
    return false;
};
const getContentPanelContent = (props) => {
    const productRestrictionList = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList || defaultValues.testDataPaymentAccountRestrictionList;
    const productPackage = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.package || defaultValues.SubPackageProduct;
    const privilegeList = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.privilegeList || null;
    const productTariff = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.tariff || defaultValues.SubTariffPlanProduct;
    return props.currentPaymentAccountProduct ? (React.createElement(View, { testID: 'test-id-e2f67c96-4335-e4a7-fcdd-8c15d866464c', style: Styles.heightWindow },
        React.createElement(SplitPanel, { testID: 'test-id-c87049f5-47b1-542c-cc09-e88b8e25fba4', id: Util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard) },
            React.createElement(ContentPanel, { testID: 'test-id-23e84b65-7b54-13fc-c388-531edd3eee95', style: { backgroundColor: 'white' } },
                React.createElement(Page, { testID: 'test-id-29ed2987-4b3a-26e9-0834-f5f02fb8bd5b', scrollEnabled: false, content: getCommonInfoPaymentAccountProduct(props, productRestrictionList, productTariff, props.productVspInfo, privilegeList, productPackage) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-45276c8a-aa81-3f67-cd35-a4fc1fb89b38' },
                        React.createElement(NavigationBackButton, { key: "ProductListRestrictionListNavBackButton", testID: 'test-id-2b74733e-c848-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductListBack() }),
                        React.createElement(View, { key: "ProductListRestrictionListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-239089a0-c848-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-27a125d6-c848-11e7-abc4-cec278b6b50a", title: props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : Util.getProductListTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductListBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-ee275ce2-b6d8-f9d1-8c67-18ee5ced691c' },
                        React.createElement(H2, { testID: 'test-id-b2942611-aa6b-0441-9115-8b762c1a890b' }, "\u0420\u0430\u0441\u0447\u0451\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"))),
                React.createElement(Page, { testID: 'test-id-ab5ed485-376b-e480-a863-8d6416648184', scrollEnabled: true, content: getPaymentAccountRestrictionListView(productRestrictionList, props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.currencyClassifier || defaultValues.Classifier) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-b2f91e1f-a9b0-af94-1607-d95e17ed6b79' },
                        React.createElement(NavigationBackButton, { key: "ProductListRestrictionListNavBackButton", testID: 'test-id-0b1a2c5a-c848-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductPaymentAccountBack() }),
                        React.createElement(View, { key: "ProductListRestrictionListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-0575e9a6-c848-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-00cb9d10-c848-11e7-abc4-cec278b6b50a", title: Util.getProductTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductPaymentAccountBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-f3cada65-8d4a-4387-833b-d1114262ecc2' },
                        React.createElement(H2, { testID: 'test-id-3e0cad7d-2c2d-f6f9-575a-da5f0f9a549f' }, "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"))),
                React.createElement(Page, { testID: 'test-id-5402a790-752b-015d-f247-20cb42b316de', scrollEnabled: false, content: getPaymentAccountCardIndexListView(props, props.cardIndexList) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ce622d2c-5710-0abb-307c-f50082e3ea70' },
                        React.createElement(NavigationBackButton, { key: "ProductListCardIndexListNavBackButton", testID: 'test-id-c22cb300-c847-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductPaymentAccountBack() }),
                        React.createElement(View, { key: "ProductListCardIndexListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-be00e0e4-c847-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-d35c6350-c847-11e7-abc4-cec278b6b50a", title: Util.getProductTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductPaymentAccountBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-98d2392a-8852-13f5-ad82-5c0daaa36412' },
                        React.createElement(H2, { testID: 'test-id-d566154a-a094-c97e-2fdf-7028bbf0f092' }, "\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0438"))),
                React.createElement(Page, { testID: 'test-id-6b86d7e8-e6e6-d2bc-1dc4-3937001ad08d', scrollEnabled: true, content: getPaymentAccountTarrifView(privilegeList, productPackage, productTariff) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-4ab0b97a-c784-11e7-abc4-cec278b6b50a' },
                        React.createElement(NavigationBackButton, { key: "ProductListTariffListNavBackButton", testID: 'test-id-cf371d78-e3e3-f28a-4052-5f2e8f42095f', title: false, onClick: () => props.navigateProductPaymentAccountBack() }),
                        React.createElement(View, { key: "ProductListTariffListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-57ea2a4a-c784-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-5c6168e0-c784-11e7-abc4-cec278b6b50a", title: Util.getProductTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductPaymentAccountBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-a51d72e9-ebc4-6f18-589f-c3ad3b29e8dd' },
                        React.createElement(H2, { testID: 'test-id-1d1951a8-8fc0-ba6e-4cca-a81b17ebff58' }, "\u0422\u0430\u0440\u0438\u0444\u044B"))),
                React.createElement(Page, { testID: 'test-id-9d8f4fc6-a127-de33-4ba6-84df88b51278', scrollEnabled: true, content: getPaymentAccountVspServiceView(props, props.productVspInfo) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-1fd9dfcc-0e4c-94f0-7b97-ab872be68569' },
                        React.createElement(NavigationBackButton, { key: "ProductListVSPNavBackButton", testID: 'test-id-cf371d78-e3e3-f28a-4052-5f2e8f42095f', title: false, onClick: () => props.navigateProductPaymentAccountBack() }),
                        React.createElement(View, { key: "ProductListVSPNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-0ac57acc-c846-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-06993c18-c846-11e7-abc4-cec278b6b50a", title: Util.getProductTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductPaymentAccountBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-c27454c0-6b5f-7acf-af16-c7b93375b453' },
                        React.createElement(H2, { testID: 'test-id-f8b60a74-49bb-7c5f-9cc4-567f525676ff' }, "\u0412\u0421\u041F \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F"))),
                React.createElement(Page, { testID: 'test-id-5e0a84bb-05a9-5b24-cd13-9cbeea6b1694', scrollEnabled: false, content: getPaymentAccountOperationListView(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-b2a63555-b233-f762-1479-38fd848a9975' },
                        React.createElement(NavigationBackButton, { key: "ProductListHistoryOperationListNavBackButton", testID: 'test-id-a0fb9afc-c847-11e7-abc4-cec278b6b50a', title: false, onClick: () => props.navigateProductPaymentAccountBack() }),
                        React.createElement(View, { key: "ProductListHistoryOperationListNavBackButtonView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-98429028-c847-11e7-abc4-cec278b6b50a" },
                            React.createElement(NavigationTextButton, { testID: "test-id-9d51a572-c847-11e7-abc4-cec278b6b50a", title: Util.getProductTypeName(props.currentPaymentAccountProduct.productType), onExecute: props.navigateProductPaymentAccountBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-b9c2ea4d-2b03-e927-ade1-34797beb744d' },
                        React.createElement(H2, { testID: 'test-id-0979b0f9-29cb-b472-62c5-f91b6b413c3f' }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439")),
                    React.createElement(RightPageHeader, { testID: 'test-id-e7d33941-4cb6-6324-d3b9-112ce4423dda' }, getPaymentAccountOperationListFilter(props))))))) : (React.createElement(View, { testID: 'test-id-70d57a28-90bd-fdb9-2264-0085c772b124' }));
};
const ViewProductPaymentAccount = (props) => (React.createElement(View, { testID: 'test-id-70fa9894-086d-7e72-9767-211b3afd6f20', style: Styles.main }, getContentPanelContent(props)));
export default ViewProductPaymentAccount;
//# sourceMappingURL=ViewProductPaymentAccount.js.map