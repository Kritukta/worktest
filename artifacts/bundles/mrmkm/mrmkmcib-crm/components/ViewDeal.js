/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewDealStyles';
import { AccessoryPanel, Accordion, Button, ButtonType, CenterPageHeader, RightPageHeader, Col, ContentPanel, Grid, H2, HorizontalRule, Icon, IconType, Label, LeftPageHeader, Loader, NavigationBackButton, NavigationTextButton, Page, Popover, PopoverType, PopoverPosition, Row, SplitPanel, SumText, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, Text, View, } from 'ufs-mobile-platform';
import { EnumsApp, RefreshBar, InfinityGrid, FullScreenError } from 'mrmkmcib-app';
import { SelectClassifier, OneLineCell } from 'mrmkmcib-crm';
import { IconView, InfoButton, SmallAvatar, NavigationTextButtonDisabled } from 'mrmkmcib-ui';
import { ContainerScope, ContainerActivity, EnumsScheduler, } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import * as util from '../common/Util';
import PopoverTarget from '../modules/PopoverTarget';
import { isCredit } from './ViewDealList';
import ContainerEmployee from '../containers/ContainerEmployee';
import ContainerMemberList from '../containers/ContainerMemberList';
import ContainerDealEditor from '../containers/ContainerDealEditor';
import ContainerAgent from '../containers/ContainerAgent';
import ContainerDealStages from '../containers/ContainerDealStages';
import ContainerDealAttachments from '../containers/ContainerDealAttachments';
import ContainerDealStageEditor from '../containers/ContainerDealStageEditor';
import { RUR } from '../models/Converters';
import moment from 'moment';
const NO_DATA = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA);
const RowWithInfo = (props) => (React.createElement(View, { testID: `test-id-${props.testID}-mainContainer`, style: Styles.nameMainContainer },
    React.createElement(View, { testID: `test-id-${props.testID}-textLabel`, style: Styles.nameTextLabel },
        React.createElement(Text, { testID: `test-id-${props.testID}-title`, style: Styles.LineTitle }, props.title)),
    React.createElement(View, { testID: `test-id-${props.testID}-container`, style: Styles.nameContainer },
        React.createElement(View, { testID: `test-id-${props.testID}-containerText`, style: Styles.nameContainerText },
            React.createElement(Text, { testID: `test-id-${props.testID}-value`, style: Styles.CustomerTitleValue, numberOfLines: 3 }, props.value)),
        React.createElement(View, { testID: `test-id-${props.testID}-containerButton` },
            React.createElement(Button, { testID: 'test-id-72fdfef7-939d-44b5-93ba-4e1c86c0aaf8', onExecute: props.onClick },
                React.createElement(Icon, { testID: 'test-id-ea1ff618-ab98-11e7-abc4-cec278b6b50v', type: IconType.MrmInfo }))))));
const classifier = (cl) => cl && cl.value || '';
const memberListLine = (memberList) => {
    if (memberList == null || memberList.data == null || memberList.data.length == 0) {
        return NO_DATA;
    }
    const main = memberList.data.find((member) => member.isGeneral) || memberList.data[0];
    return util.format.truncate([
        [util.getAgentNameInitials(main), classifier(main.role)].join(' - '),
        'ВКС'
    ].join(', ') + (main.isBlocked ? ', Блокирован' : ''), 48) + util.moreCount(memberList.data);
};
const nonLegalMembers = (deal) => {
    if (deal.contactParticipantList && deal.contactParticipantList.data && deal.contactParticipantList.data.length > 0) {
        const firstContact = deal.contactParticipantList.data[0];
        const remainCount = deal.contactParticipantList.data.length - 1;
        return `${firstContact.lastName} ${firstContact.firstName.slice(0, 1)}. ${firstContact.middleName.slice(0, 1)}. ${(remainCount > 0) ? `(еще ${remainCount})` : ''}`;
    }
    return ``;
};
const agentListLine = (memberList, customer) => {
    if (!memberList.data || !memberList.data.length) {
        return '';
    }
    const main = memberList.data[0];
    const position = util.getAgentCustomerPosition(customer, main);
    return util.format.truncate(`${util.getAgentNameInitials(main)}${position ? ' - ' + position : ''}`, 50) +
        util.moreCount(memberList.data);
};
const commentListLine = (deal) => {
    const last = (deal.commentList || []).sort((c1, c2) => c2.date.getTime() - c1.date.getTime())[0];
    return `последний: ${util.getAgentNameInitials(last.author)} ${util.format.date(last.date)}`;
};
const agreementListLine = (deal) => {
    if (!Array.isArray(deal.agreement) || deal.agreement.length == 0) {
        return NO_DATA;
    }
    return `${deal.agreement.length} ${util.detectUnits(deal.agreement.length, ['сотрудник', 'сотрудника', 'сотрудников'])}`;
};
const decisionFormat = (deal) => {
    if (deal.decision && deal.decision[0]) {
        const decision = deal.decision[0];
        return decision.decisionMakingFormat && decision.decisionMakingFormat.value || (decision.decisionStandard && (decision.decisionStandard || { title: '' }).title || '');
    }
    return '';
};
const lastStage = (deal) => (deal.phaseClassifier
// deal.stages && deal.stages.length && deal.stages[deal.stages.length-1] && deal.stages[deal.stages.length-1].stage || defaultValues.Classifier
);
const Cell = (props) => (React.createElement(Label, { testID: 'test-id-ed86499e-231a-4558-9d80-a94deefdd712', header: " ", text: props.header, block: true },
    React.createElement(Text, { testID: 'test-id-a32c8e1d-f4d2-48eb-9b81-30f3e4666350' }, props.body)));
const getMainCellList = (props, accessible) => {
    const cellList = [];
    cellList.push(React.createElement(Cell, { testID: 'test-id-80b9f45f-8c1c-0e2f-b040-2c25ed64e183', header: 'ID сделки', body: props.currentDeal.id }));
    if (props.currentDeal.sum) {
        cellList.push(React.createElement(SumText, { testID: 'test-id-cc1b788df448ca', value: props.currentDeal.sum, label: 'Сумма в тысячах', small: false, block: true, fractionalDigitsCount: 5, currency: props.currentDeal.currency && props.currentDeal.currency.code || '' }));
    }
    else {
        cellList.push(React.createElement(Cell, { testID: 'test-id-d3648352-9a96-40a9-9776-4caca400f58e', header: 'Сумма в тысячах', body: NO_DATA }));
    }
    if (props.currentDeal.owner && props.currentDeal.owner.id) {
        cellList.push(React.createElement(RowWithInfo, { testID: 'test-id-1e1ee04c-7014-4ff2-912b-a8e1173df0ee', title: '\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441\u0434\u0435\u043B\u043A\u0438', value: util.getAgentNameInitials(props.currentDeal.owner), onClick: () => props.navigateToEmployee(props.currentDeal.owner.id) }));
    }
    if (props.currentDeal.plannedFinishDate) {
        cellList.push(React.createElement(Cell, { testID: 'test-id-45f78795-5a05-4563-ac35-13a8b1793063', header: 'Плановая дата закрытия', body: util.format.date(props.currentDeal.plannedFinishDate) }));
    }
    if (accessible) {
        if (props.currentDeal.probability) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-35fa1260-a1ec-46d7-a0d0-edcd4e23605a', header: 'Вероятность', body: util.format.percents(props.currentDeal.probability) }));
        }
        cellList.push(React.createElement(Cell, { testID: 'test-id-7601f27b-e56b-409c-809e-7e4782cdc0a9', header: 'Тип сделки', body: util.getDealTypeTitle(props.currentDeal.type, props.currentDeal.requestTypeClassifier) }));
    }
    return cellList;
};
const checkAccessible = (props) => {
    const roleClassifier = props.currentDeal.roleClassifier;
    const role = roleClassifier && util.getRoleEnum(roleClassifier.code);
    switch (true) {
        case (role === Enums.UserRole.KM ||
            role === Enums.UserRole.GKM ||
            props.currentDeal.owner.id === props.currentUser.id):
            {
                return true;
            }
        default: {
            return false;
        }
    }
};
const getDataGrid = (props) => {
    const decisionFormat_ = decisionFormat(props.currentDeal);
    const isDealMember = util.getDealMemberFlag(props.currentUser, props.currentDeal.memberList);
    const accessible = new Boolean(props.currentDeal.roleClassifier && util.getRoleString(props.currentDeal.roleClassifier.value)).valueOf();
    const hasAccessToDealStages = checkAccessible(props);
    const checkNavigateToPhaseAccess = () => hasAccessToDealStages ? props.navigateToPhaseScreen : null;
    const dealAttachmentsCount = props.dealAttachmentsError === null && props.dealAttachments.data ? props.dealAttachments.data.length.toString() : '0';
    const additionalInfoCommonCellList = getAdditionalInfoCommonCellList(props, accessible);
    const additionalInfoDetailCellList = getAdditionalInfoDetailCellList(props, accessible);
    return (React.createElement(View, { testID: 'test-id-3c9aa67d-2987-8aeb-e84c-6488ca5c8751', style: Styles.container },
        React.createElement(View, { testID: 'test-id-3c9aa67d-2987-8ae751', style: Styles.InfoRowWrapper },
            React.createElement(RowWithInfo, { testID: 'test-id-75cd9a68-4784-65a2-f706-9d77aa97eabd', title: '\u041A\u043B\u0438\u0435\u043D\u0442', value: props.currentCustomerManaged.name, onClick: () => props.performCustomerOpen(props.currentCustomerManaged.id) })),
        React.createElement(View, { testID: 'test-id-c9b5ff1c-0385-5e7a-2db2-6c9f7fcb731a', style: Styles.HorisontalLineMargin }),
        React.createElement(View, { testID: 'test-id-026067c2-ea2d-48b8-a708-4ad3f96a6003', style: Styles.DealTitle },
            React.createElement(Text, { testID: 'test-id-74de6e19-dbe9-d40a-8161-feb15da96d2e', style: Styles.LineTitle }, "\u0421\u0443\u0442\u044C"),
            React.createElement(Text, { testID: 'test-id-9c43452f-c3f3-fb35-6241-327b20b8a6f3', style: Styles.TitleText }, props.currentDeal.title)),
        React.createElement(View, { testID: 'test-id-365a1628-063a-1ace-b92d-7e1b3212fb75', style: Styles.Content },
            React.createElement(InfinityGrid, { testID: 'test-id-4557914d-89f3-4763-86f0-89cdb3f9e744', cellList: getMainCellList(props, accessible), colsInRow: 2 })),
        accessible ? React.createElement(View, { testID: 'test-id-79929ffd-4bb3-e6d6-213e-95627f259a61', style: Styles.HorisontalLine }) : null,
        React.createElement(View, { testID: 'test-id-5a3aa6eb-dcbb-fed5-6686-a283ef2d2286', style: Styles.flex },
            React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ebddd55feba', style: { marginLeft: -20, marginRight: -20 } },
                React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e668e' },
                    props.currentDeal.products && props.currentDeal.products.length ? (React.createElement(OneLineCell, { data: {
                            label: 'Продукт' + (isCredit(props.currentDeal) ? 'ы' : ''),
                            value: util.lineWithMoreCountAndMaxLength(props.currentDeal.products.map((product) => product.productClassifier.value), 40)
                        }, indented: true, onClick: isCredit(props.currentDeal) ? props.navigateToProductScreen : null, flex: Styles.flex02 })) : null,
                    React.createElement(OneLineCell, { data: {
                            label: 'Стадия',
                            value: `${classifier(lastStage(props.currentDeal))} - Готовность ${props.currentDeal.progress || 0}%`
                        }, indented: true, onClick: checkNavigateToPhaseAccess() }),
                    accessible && props.currentDeal.closeReason && props.currentDeal.closeReason.value ? React.createElement(OneLineCell, { data: {
                            label: 'Причина закрытия',
                            value: `${props.currentDeal.closeReason && props.currentDeal.closeReason.value}`
                        }, indented: true }) : null,
                    accessible && isDealMember ? React.createElement(OneLineCell, { data: {
                            label: 'Команда сделки',
                            value: memberListLine(props.currentDeal.memberList)
                        }, indented: true, onClick: props.navigateToMemberListScreen, flex: Styles.flex03 }) : null,
                    accessible && props.currentDeal.commentList && props.currentDeal.commentList.length ? (React.createElement(OneLineCell, { data: {
                            label: 'Комментарии',
                            value: commentListLine(props.currentDeal)
                        }, indented: true, onClick: props.navigateToCommentListScreen })) : null,
                    (props.currentDeal.contactParticipantList && props.currentDeal.contactParticipantList.data && props.currentDeal.contactParticipantList.data.length > 0) ? (React.createElement(OneLineCell, { data: {
                            label: 'Участники - физические лица',
                            value: nonLegalMembers(props.currentDeal)
                        }, indented: true, onClick: () => {
                            props.navigateToNonLegalMembersScreen();
                        }, flex: Styles.flex07 })) : null,
                    accessible && !isCredit(props.currentDeal) ? (props.dealAgentList && props.dealAgentList.data && props.dealAgentList.data.length ? (React.createElement(OneLineCell, { data: {
                            label: 'Представители',
                            value: util.agentListLine(props.dealAgentList, props.currentCustomerManaged)
                        }, indented: true, onClick: props.navigateToAgentListScreen, flex: Styles.flex03 })) : (React.createElement(OneLineCell, { data: {
                            label: 'Представители',
                            isFetching: props.dealAgentListFetching,
                            value: NO_DATA,
                            errorText: props.dealAgentListError && props.dealAgentListError.message,
                        }, indented: true, flex: Styles.flex03 }))) : null,
                    accessible && props.currentDeal.type !== Enums.DealType.Other &&
                        props.currentDeal.agreement && props.currentDeal.agreement.length ? (React.createElement(OneLineCell, { data: { label: 'Согласования',
                            value: agreementListLine(props.currentDeal) }, indented: true, onClick: props.navigateToAgreementScreen })) : null,
                    accessible && decisionFormat_ && props.currentDeal.type !== Enums.DealType.Salary ? (React.createElement(OneLineCell, { data: { label: 'Формат решения, решение, договор',
                            value: decisionFormat_ ? `Формат: ${decisionFormat_}` : '' }, indented: true, onClick: decisionFormat_ ? props.navigateToSolutionListScreen : null, flex: Styles.flex })) : null)),
            accessible || (props.currentDeal.currency && props.currentDeal.currency.code !== RUR.code && (additionalInfoCommonCellList.length > 0 || additionalInfoDetailCellList.length > 0)) ? (React.createElement(Accordion, { testID: 'test-id-bdf90a81-4103-d297-fc71-41f83439fe5d', header: '\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F', opened: props.isExtraInfoExpanded, onClick: props.performExtraInfoToggle }, _renderAdditionalInfo(props, accessible, additionalInfoCommonCellList, additionalInfoDetailCellList)))
                : null)));
};
const getAdditionalInfoCommonCellList = (props, accessible) => {
    const cellList = [];
    if (accessible) {
        if (props.currentDeal.creationDate) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-55897512-d767-44b1-b22b-56aa14e17d1b', header: 'Дата создания', body: util.format.date(props.currentDeal.creationDate) }));
        }
        cellList.push(React.createElement(Cell, { testID: 'test-id-97bac713-9e78-4402-9867-5d0e8771ea3c', header: 'Метод продаж', body: util.getClassifierDataDisplayValue(props.currentDeal.salesMethodClassifier).value }));
    }
    if (props.currentDeal.sumRur && props.currentDeal.currency && props.currentDeal.currency.code !== RUR.code) {
        cellList.push(React.createElement(SumText, { testID: 'test-id-291d60cf-3640-49b9-8d6a-f3af027b5f9c', value: props.currentDeal.sumRur, label: 'Эквивалент в тыс. руб.', small: false, block: true, fractionalDigitsCount: 5, currency: '' }));
    }
    if (accessible) {
        if (props.currentDeal.exchangeCourse) {
            cellList.push(React.createElement(SumText, { testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: props.currentDeal.exchangeCourse, label: 'Курс пересчета', small: false, block: true, fractionalDigitsCount: 4, currency: RUR.code }));
        }
        if (props.currentDeal.parentDeal && props.currentDeal.parentDeal.id) {
            cellList.push(React.createElement(RowWithInfo, { testID: 'test-id-75cd9a68-4784-65a2-f706-9d77aa97eabd', title: '\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430', value: props.currentDeal.parentDeal.title && util.format.truncate(props.currentDeal.parentDeal.title, 23), onClick: () => props.navigateToParentDealScreen(props.currentDeal, Enums.DealMode.CommonBack, false) }));
        }
        if (props.currentDeal.salesCampaign && props.currentDeal.salesCampaign.name !== '') {
            cellList.push(React.createElement(Cell, { testID: 'test-id-95e8cd86-e74c-49be-98ed-c1433c18257e', header: 'Кампания', body: props.currentDeal.salesCampaign.name }));
        }
        if (isCredit(props.currentDeal) && props.currentDeal.application && props.currentDeal.application.value) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-9af74557-1b65-444c-b2c3-6acbb003c9b8', header: 'Применение', body: classifier(props.currentDeal.application) }));
        }
        if (!isCredit(props.currentDeal) && props.currentDeal.territorialCoverage) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-2832e0d0e6a4158b1', header: 'Территориальный охват', body: props.currentDeal.territorialCoverage }));
        }
        if (props.currentDeal.attractingChannel && props.currentDeal.attractingChannel.value) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-2832e0ddfb0e615b1', header: 'Канал привлечения', body: props.currentDeal.attractingChannel.value }));
        }
    }
    return cellList;
};
const getAdditionalInfoDetailCellList = (props, accessible) => {
    const cellList = [];
    if (accessible && props.currentDeal.type === Enums.DealType.Salary && props.currentDeal.salaryProjectDetails) {
        cellList.push(React.createElement(Cell, { testID: 'test-id-6fbbb13d-9615-4039-832c-37de2ca40e3d', header: 'Комиссия за перечисление,%', body: props.currentDeal.salaryProjectDetails.fee ? util.format.percents(props.currentDeal.salaryProjectDetails.fee) : NO_DATA }));
        cellList.push(React.createElement(Cell, { testID: 'test-id-84785550-b7bc-4a42-a24d-52418eba3364', header: 'Количество сотрудников в сделке', body: util.convertNumberToString(props.currentDeal.salaryProjectDetails.staffCount) || NO_DATA }));
        if (props.currentDeal.salaryProjectDetails.agreement.number !== '') {
            cellList.push(React.createElement(Cell, { testID: 'test-id-e62f5fb8-bde8-4815-a762-b1d9f54976e0', header: 'Номер ЗП договора', body: props.currentDeal.salaryProjectDetails.agreement.number }));
        }
        if (props.currentDeal.salaryProjectDetails.agreement.date) {
            cellList.push(React.createElement(Cell, { testID: 'test-id-1438bc9a-c314-4264-9cb9-f27d0927d56d', header: 'Дата ЗП договора', body: util.format.date(props.currentDeal.salaryProjectDetails.agreement.date) }));
        }
        const status = classifier(props.currentDeal.salaryProjectDetails.agreement.status);
        if (status !== '') {
            cellList.push(React.createElement(Cell, { testID: 'test-id-71f04349-82a7-4517-a015-301b1437e6fe', header: 'Статус ЗП договора', body: status }));
        }
    }
    return cellList;
};
const _renderAdditionalInfo = (props, accessible, commonList, detailList) => {
    return (React.createElement(View, { testID: 'test-id-39f13f79-9fec-c03c-1599-8e1bff8b75b3', style: Styles.AdditionalInfoWrapper },
        commonList.length > 0 ?
            [
                React.createElement(View, { key: 'hr-deal-card-4', testID: 'test-id-abd18ddc-38b5-0567-ef75-be9a3168be58', style: Styles.CollWrapper },
                    React.createElement(H2, { testID: 'test-id-cc25b5c2-1ead-8bdd-4365-3f2bebaef553' }, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")),
                React.createElement(InfinityGrid, { key: 'hr-deal-card-5', testID: 'test-id-4557914d-89f3-4763-86f0-89cdb3f9e744', cellList: commonList, colsInRow: 2 })
            ] :
            null,
        detailList.length > 0 ?
            [
                commonList.length > 0 ?
                    React.createElement(HorizontalRule, { key: 'hr-deal-card-1', testID: 'test-id-d6cff2c5f8110' }) :
                    null,
                React.createElement(View, { key: 'hr-deal-card-view-2', testID: 'test-id-6b76c634-ac7f-fb23-0c99-f714b3d60a9d', style: Styles.CollWrapper },
                    React.createElement(H2, { testID: 'test-id-58708910-694e-4c0d-c06f-cbf9fa864fb5' }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043E \u0417\u041F \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440")),
                React.createElement(InfinityGrid, { testID: 'test-id-4557914d-89f3-4763-86f0-89cdb3f9e744', key: 'hr-deal-card-view-3', cellList: detailList, colsInRow: 2 }),
            ] :
            null,
        React.createElement(View, { testID: 'test-id-ae64d141-5a1b-439d-b346-bd1685bf7077', style: Styles.HeaderSpacer })));
};
const getDataGridContainer = (props) => (React.createElement(View, { style: Styles.dataGridContainer },
    React.createElement(View, { style: Styles.dataGridPage },
        React.createElement(Page, { scrollEnabled: true, testID: 'test-id-page-member-deal-view-213eqwf-2qwer-2wr-wege', content: getDataGrid(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ereq-6264-9c29-f6ed-rfwew' }))),
    React.createElement(View, { style: Styles.refreshBarContainer },
        React.createElement(RefreshBar, { testID: 'test-id-fef52946', performRefresh: props.performRefreshForce, date: props.currentDealCachedDate }))));
const getContent = (props) => {
    if (props.refreshInProgress || props.currentDealFetching || props.navigationInProgress) {
        return (React.createElement(View, { testID: 'test-id-0a177d10-0b16-1c45-6f27-20314459ece7', style: Styles.LoaderWrapper },
            React.createElement(Loader, { testID: 'test-id-999b79d2-d215-e2bb-9ced-6e458a2ba0a6' }),
            React.createElement(Text, { testID: 'test-id-544d308b-349c-470a-50c7-57b2183b0ade' }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441\u0434\u0435\u043B\u043A\u0438")));
    }
    if (props.refreshError || props.currentDealError) {
        return getErrorPanel(props) || React.createElement(View, { testID: 'test-id-ddf3cf9a-b4bf-9122-6030-24b68f7f1ac7' });
    }
    if (props.currentDeal.id && props.currentDeal.id != '') {
        return getDataGridContainer(props);
    }
    return React.createElement(View, { testID: 'test-id-ada730f2-d406-b998-0894-8f0d9f3dc11c' });
};
const getErrorStyle = (props) => {
    if (props.currentDeal == null) {
        return Styles.ErrorWrapperCenter;
    }
    return Styles.ErrorWrapper;
};
const getErrorPanel = (props) => {
    const error = props.refreshError || props.currentDealError;
    if (error == null) {
        return null;
    }
    return (React.createElement(FullScreenError, { testID: 'test-id-7632026b-sd4s-F44gf-rg5a-2f3f', title: error && error.comment && error.comment !== ''
            ? error.comment
            : `Данные сделки не получены`, description: error && error.message && error.message !== ''
            ? error.message
            : null, onRefresh: props.performRefresh }));
};
const getAccessoryContent = (props) => {
    if (props.navigationInProgress) {
        return (React.createElement(View, { testID: 'test-id-84923dc8-a2db-abb5-be7d-d030cfcb6352', style: Styles.LoaderWrapper },
            React.createElement(View, { testID: 'test-id-95dac91e-72ae-eba2-7662-ee1f6f6306e7', style: Styles.HeaderSpacer }),
            React.createElement(Loader, { testID: 'test-id-79a83f3a-599c-39ef-9f8d-a83170a948b1' })));
    }
    if (props.currentDeal.id && props.currentDeal.id != '' && props.currentDeal.roleClassifier && props.currentDeal.roleClassifier.value) {
        return (React.createElement(ContainerScope, { instanceType: EnumsScheduler.SchedulerMode.Deal, testID: 'test-id-a4b8eb68-bc83-d6d5-b901-6d81055fce21' }));
    }
    return (React.createElement(View, { testID: 'test-id-3dd56e07d9bb082056' }));
};
const ProductsContainer = (props) => (React.createElement(View, { testID: 'test-id-d337f2927433a7', style: Styles.main },
    React.createElement(Table, { testID: 'test-id-1d73a954bf151c3' },
        React.createElement(TableHead, { testID: 'test-id-8fd44d6761806e' },
            React.createElement(TableColumn, { testID: 'test-id-cecd66b3b6adef', width: '300' },
                React.createElement(Text, { testID: 'test-id-cecd648c-ae23b6adef' }, 'Продукт')),
            React.createElement(TableColumn, { testID: 'test-id-30dbe2503079fc2', width: '200', align: TableColumnAlignment.RIGHT },
                React.createElement(Text, { testID: 'test-id-30db79fc2' }, 'Сумма тыс. ед.')),
            React.createElement(TableColumn, { testID: 'test-id-36c061e7fc133b79', width: '100', align: TableColumnAlignment.RIGHT },
                React.createElement(Text, { testID: 'test-id-36c133b79' }, 'СКРИтог%'))),
        React.createElement(TableBody, { testID: 'test-id-2d0666014' }, (props.productList || []).map((e, index) => (React.createElement(TableRow, { testID: 'test-id-3275b863a', key: ++key },
            React.createElement(TableCell, { testID: 'test-id-10b45f46d43de' },
                React.createElement(Text, { numberOfLines: 2, ellipsizeMode: 'tail', testID: 'test-id-55849104253f51', style: Styles.CommentTop }, e.productClassifier.value)),
            React.createElement(TableCell, { testID: 'test-id-1c050d86d2 ' },
                React.createElement(Text, { testID: 'test-id-0e47893ec16059f', style: Styles.CommentTop }, util.format.sum(e.sum, 5, e.currencyClassifier && e.currencyClassifier.code))),
            React.createElement(TableCell, { testID: 'test-id-acb39fa93fdf0' },
                React.createElement(Text, { testID: 'test-id-43b3c98e6d6723', style: Styles.CommentTop }, e.SKRtotal ? util.format.percents(e.SKRtotal.toFixed(2)) : '-')))))))));
const CommentsContainer = (props) => (React.createElement(View, { testID: 'test-id-b1f9df4b556854858e', style: Styles.flex },
    React.createElement(Table, { testID: 'test-id-c764fae9659f83a4d7', style: Styles.flex },
        React.createElement(TableBody, { testID: 'test-id-2c152267d6e45f14fd' }, (props.commentList || []).map((e, index) => (React.createElement(TableRow, { testID: 'test-id-ce21ca263242354430', key: '' + index },
            React.createElement(TableCell, { testID: 'test-id-c1c0564483dc383a4e', style: Styles.NoWrappingCells },
                React.createElement(View, { testID: 'test-id-dd3208a4c168eea88d', style: Styles.CommentsWrapper },
                    React.createElement(View, { testID: 'test-id-e03a5e8b73bb2b4ea7', style: Styles.flex },
                        React.createElement(Text, { testID: 'test-id-d2711ee78c8311b5a1', style: Styles.CommentTop }, `[${e.type.value}]: ${e.text}`)),
                    React.createElement(View, { testID: 'test-id-f66ab352924ef7b60c', style: Styles.flex },
                        React.createElement(Text, { testID: 'test-id-12f727dda0582e3095', style: Styles.CommentBottom }, `${util.getAgentFullName(e.author)} (${util.format.date(e.date)})`)))))))))));
const rowSpacer = (size) => React.createElement(Row, { key: ++key, testID: '1' },
    React.createElement(Col, { testID: '1', key: ++key, xs: 10 },
        React.createElement(View, { key: ++key, style: { marginTop: size, height: size } })));
const renderDecisionDetails = (decision, rows, classifierDictionary, performPopoverDecisionShow, props) => {
    if (decision.decisionSixEyes) {
        return [React.createElement(Row, { testID: 'test-id-62db6a39-8fed-e2ae-1', key: `grid-row-dd-${++key}` },
                React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 10 },
                    React.createElement(H2, { testID: 'test-id-58708910-694e-1' },
                        "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 ",
                        decision.decisionMakingFormat))),
            rowSpacer(8),
            React.createElement(Row, { testID: 'test-id-62db6a39-8fed-e2ae-1', key: `grid-row-dd-${++key}` },
                React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 6 },
                    React.createElement(Label, { header: " ", testID: `test-id-agreement-details-popover-table-cell-label-1`, text: 'Номер решения', block: true },
                        React.createElement(Text, { testID: 'test-id-203a7d31-baac-abf4-efcb-32e6a9a2ff3a' }, decision.decisionSixEyes.number))),
                React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 6 },
                    React.createElement(Label, { header: " ", testID: `test-id-agreement-details-popover-table-cell-label-1`, text: 'Дата решения', block: true },
                        React.createElement(Text, { testID: 'test-id-203a7d31-baac-abf4-efcb-32e6a9a2ff3a' }, decision.decisionSixEyes.date && util.format.date(decision.decisionSixEyes.date)))))];
    }
    if (decision.decisionKK) {
        const decisionKey = `decision_kk-${decision.decisionKK.number}-${decision.decisionKK.committee}`;
        return [React.createElement(Row, { testID: 'test-id-39-8fed-e2ae-2', key: 'decisionKK-row1' },
                React.createElement(Col, { testID: 'test-id-55fb9-8805-2', xs: 10 },
                    React.createElement(H2, { testID: 'test-id-580-694e-4c0d-2' }, "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u0438\u0442\u0435\u0442\u0430"))),
            React.createElement(View, { key: 'decisionKK-row-view' },
                React.createElement(Table, { testID: 'deal-decision-KK-table', style: Styles.NoTableMargins },
                    React.createElement(TableHead, { testID: 'deal-decision-KK-table-head' },
                        React.createElement(TableColumn, { testID: 'deal-decision-KK-table-col-2' },
                            React.createElement(Text, { testID: 'deal-decision-KK-table-col-2-text' }, `Решение`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-KK-table-col-3' },
                            React.createElement(Text, { testID: 'deal-decision-KK-table-col-3-text' }, `Номер решения`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-KK-table-col-4' },
                            React.createElement(Text, { testID: 'deal-decision-KK-table-col-4-text' }, `Дата решения`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-KK-table-col-5', width: '50' })),
                    React.createElement(TableBody, { testID: 'deal-decision-KK-table-body' }, rows.map((decisionRow, index) => (React.createElement(TableRow, { testID: `test-id-deal-KK-row-1-kk`, key: `test-id-deal-KK-row-1-kk-${index}` },
                        React.createElement(TableCell, { testID: `test-id-deal-decision-KK-row-column-1-kk`, style: Styles.TableCell },
                            React.createElement(View, { style: Styles.MultilineText },
                                React.createElement(Text, { style: Styles.Text, testID: `test-id-deal-decision-KK-row-column-text-1-kk` }, decisionRow.decisionKK && decisionRow.decisionKK.decision))),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-KK-row-column-2-kk`, style: Styles.TableCell },
                            React.createElement(Text, { style: Styles.Text, testID: `test-id-deal-decision-KK-row-column-text-2-kk` }, decisionRow.decisionKK && decisionRow.decisionKK.number)),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-KK-row-column-3-kk`, style: Styles.TableCell },
                            React.createElement(Text, { style: Styles.Text, testID: `test-id-deal-decision-KK-row-column-text-2-kk` }, decisionRow.decisionKK && decisionRow.decisionKK.date && util.format.date(decisionRow.decisionKK.date))),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-KK-row-column-4-kk`, style: Styles.TableCell },
                            React.createElement(View, { testID: 'test-id-7b359033-a866-5dbf-7326-1111f022c5c0', style: Styles.PopoverTargetAdjustment },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `${decisionKey}-${index}` },
                                    React.createElement(View, { testID: 'test-id-51586db3-fc11-2711-8a1f-19e7e8b5de7f' },
                                        React.createElement(Button, { testID: 'test-id-1b1e0134-3ae2-b6b0-2a56-63cb61102878', onExecute: () => performPopoverDecisionShow({ decision: decisionRow }, `${decisionKey}-${index}`) },
                                            React.createElement(Icon, { testID: 'test-id-f10d5aed-0fcd-7f12099ce5cb', disabled: true, type: IconType.MrmArrowDown }))))))))))))
        ];
    }
    if (decision.decisionStandard) {
        const decisionKey = `decision_std-${decision.decisionStandard.result}-${decision.decisionStandard.title}`;
        return [React.createElement(Row, { testID: 'test-id-3918fe1e2ae12', key: 'decisionSTD-row1' },
                React.createElement(Col, { testID: 'test-id-55fb92880522', xs: 10 },
                    React.createElement(H2, { testID: 'test-id-5803694e32' }, "\u0420\u0435\u0448\u0435\u043D\u0438\u0435"))),
            rowSpacer(2),
            React.createElement(View, { key: 'decisionSTD-row-view' },
                React.createElement(Table, { testID: 'deal-decision-Std-table', style: Styles.NoTableMargins },
                    React.createElement(TableHead, { testID: 'deal-decision-Std-table-head' },
                        React.createElement(TableColumn, { testID: 'deal-decision-Std-table-col-2' },
                            React.createElement(Text, { testID: 'deal-decision-Std-table-col-2-text' }, `Результат`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-Std-table-col-3' },
                            React.createElement(Text, { testID: 'deal-decision-Std-table-col-3-text' }, `Название`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-Std-table-col-4' },
                            React.createElement(Text, { testID: 'deal-decision-Std-table-col-4-text' }, `Дата решения`)),
                        React.createElement(TableColumn, { testID: 'deal-decision-Std-table-col-5', width: '50' })),
                    React.createElement(TableBody, { testID: 'deal-decision-Std-table-body' }, rows.map((decisionRow, index) => (React.createElement(TableRow, { testID: `test-id-deal-STD-row-1-kk`, key: `test-id-deal-STD-row-1-kk-${index}` },
                        React.createElement(TableCell, { testID: `test-id-deal-decision-Std-row-column-1-kk`, style: Styles.TableCell },
                            React.createElement(Text, { style: Styles.CommentTop, testID: `test-id-deal-decision-Std-row-column-text-1-kk`, ellipsizeMode: 'tail', numberOfLines: 2 }, decisionRow.decisionStandard && decisionRow.decisionStandard.result)),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-Std-row-column-2-kk`, style: Styles.TableCell },
                            React.createElement(Text, { style: Styles.CommentTop, testID: `test-id-deal-decision-Std-row-column-text-2-kk` }, decisionRow.decisionStandard && decisionRow.decisionStandard.title)),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-Std-row-column-3-kk`, style: Styles.TableCell },
                            React.createElement(Text, { style: Styles.CommentTop, testID: `test-id-deal-decision-Std-row-column-text-2-kk` }, decisionRow.decisionStandard && decisionRow.decisionStandard.date ? `${util.format.date(decisionRow.decisionStandard.date)} ${util.format.date(decisionRow.decisionStandard.date, 'hh:mm')}` : '')),
                        React.createElement(TableCell, { testID: `test-id-deal-decision-Std-row-column-4-kk`, style: Styles.TableCell },
                            React.createElement(View, { testID: 'test-id-7b35903111f022c5c0-std', style: { marginTop: -10 } },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56226ca8af123-std', refName: `${decisionKey}-${index}` },
                                    React.createElement(View, { testID: 'test-id-51586db9b5de7f' },
                                        React.createElement(Button, { testID: 'test-id-10133cb61102878', onExecute: () => performPopoverDecisionShow({ decision: decisionRow }, `${decisionKey}-${index}`) },
                                            React.createElement(Icon, { testID: 'test-id-f10d5ae9ce5cb', disabled: true, type: IconType.MrmArrowDown }))))))))))))
        ];
    }
};
const decisionPopoverRow = (title, value) => (React.createElement(TableRow, { testID: `test-id-agreement-details-popover-table-row-${title}-${value}`, key: `key-agreement-details-popover-table-row-${title}-${value}` },
    React.createElement(TableCell, { testID: `test-id-agreement-details-popover-table-cell-${title}-${value}` },
        React.createElement(Label, { header: " ", testID: `test-id-agreement-details-popover-table-cell-label-${title}-${value}`, text: title, block: true },
            React.createElement(Text, { testID: `test-id-agreement-details-popover-table-cell-text-${title}-${value}` }, value)))));
const rowsForCCDecision = (decision, decisionHeader) => ([
    decisionPopoverRow('Решение', decision.decision || NO_DATA),
    decisionPopoverRow('Номер решения', decision.number || NO_DATA),
    decisionPopoverRow('Дата решения', decision.date ? util.format.date(decision.date) : NO_DATA),
    decisionPopoverRow('Комитет', decision.committee),
    decisionPopoverRow('Формат решения', decisionHeader.decisionForm && decisionHeader.decisionForm.value),
    decisionPopoverRow('Дата проведения', decision.committeeDate ? `${util.format.date(decision.committeeDate)} ${util.format.date(decision.committeeDate, 'HH:mm')}` : ''),
    decisionPopoverRow('Территориальное подразделение', decision.territorialDivisionName),
    decision.caTb ? decisionPopoverRow('ЦА/ТБ', decision.caTb) : null,
    decisionPopoverRow('Секретарь', Array.isArray(decision.secretary) && decision.secretary.length && decision.secretary.map((emp) => util.getAgentNameInitials(emp)).join(',') || NO_DATA),
    decisionPopoverRow('Статус', decision.status && decision.status.value)
]);
const rowsForStandartDecision = (decision) => ([
    decisionPopoverRow('Название', decision.title),
    decisionPopoverRow('Описание', decision.description),
    decisionPopoverRow('Дата план', decision.datePlan ? util.format.date(decision.datePlan) : ''),
    decisionPopoverRow('Дата решения', decision.date ? util.format.date(decision.date) : ''),
    decisionPopoverRow('Подразделение СБ РФ', decision.territorialDivisionName),
    decisionPopoverRow('ОСБ/Доп.офис', decision.subsidiaryOffice),
    decisionPopoverRow('Внутреннее подразделение', decision.internalDivision),
    decisionPopoverRow('Результат', decision.result),
    decisionPopoverRow('Комментарии', decision.comment)
]);
const getDecisionPopoverContent = (popoverData, performPopoverDecisionHide) => (React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(View, { style: Styles.flex },
        React.createElement(Table, { testID: `test-id-agreement-details-popover-table-`, style: Styles.flex, underlined: true },
            React.createElement(TableBody, { testID: `test-id-agreement-details-popover-table-body` }, popoverData && popoverData.decision && popoverData.decision.decisionKK ? (rowsForCCDecision(popoverData.decision.decisionKK, popoverData.decision)) : (popoverData && popoverData.decision && popoverData.decision.decisionStandard ? (rowsForStandartDecision(popoverData.decision.decisionStandard)) : null)))) },
    React.createElement(CenterPageHeader, { testID: 'test-id-9ee5ade5-0d22-4af3-99a4-224834d034ac' },
        React.createElement(H2, { testID: 'test-id-57d12e70-dfce-0ccd-1940-478cfb227959' }, "\u0420\u0435\u0448\u0435\u043D\u0438\u0435")),
    React.createElement(RightPageHeader, { testID: 'test-id-ee4373af-0e1a-f0c9-c7ce-cdc1b37c5e47' },
        React.createElement(NavigationTextButton, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe', title: 'Готово', onExecute: performPopoverDecisionHide }))));
const DecisionContainer = (props) => {
    if (!props.list || !props.list.length) {
        return React.createElement(View, null);
    }
    const decision = props.list[0];
    return React.createElement(View, { testID: 'test-id-8c37affcfb50861f83', style: Styles.DecisionWrapperAdjustmentWrapper },
        decision.decisionStandard ? rowSpacer(0) :
            (React.createElement(View, { testID: 'test-id-6b76c63714b3d60a9d', style: Styles.CollWrapper },
                React.createElement(H2, { testID: 'test-id-5870891bf9fa864fb5' }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0430"))),
        React.createElement(View, null,
            React.createElement(Grid, { testID: 'test-id-deal-view-2', key: `grid-decision` },
                decision.decisionStandard ? (rowSpacer(0)) : (React.createElement(Row, { testID: 'test-id-62db6a39-8fed-e2ae-1', key: `grid-row-1-decision` },
                    React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 10 },
                        React.createElement(View, { style: Styles.DecisionFormatWrapper },
                            React.createElement(Label, { header: " ", testID: `test-id-agreement-details-popover-table-cell-label-1`, text: 'Формат принятия решения', block: true },
                                React.createElement(Text, { testID: 'test-id-203a7d31-baac-abf4-efcb-32e6a9a2ff3a' }, decision.decisionMakingFormat && decision.decisionMakingFormat.value)))))),
                renderDecisionDetails(decision, props.list, props.classifierDictionary, props.performPopoverDecisionShow, props.props),
                Array.isArray(decision.agreements) && decision.agreements.length ? (React.createElement(Row, { testID: 'test-id-62db6a39-8fed-e2ae-2', key: `grid-row-2-decision` },
                    React.createElement(Col, { testID: 'test-id-55fab34c-57b9-8805-2', xs: 10 },
                        React.createElement(H2, { testID: 'test-id-58708910-694e-4c0d-2' }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B")))) : (React.createElement(Row, { testID: 'test-id-62db6a39-8fed-e2ae-222', key: `grid-row-3-decision` })))),
        Array.isArray(decision.agreements) && decision.agreements.length ? (React.createElement(Table, { testID: 'deal-decision-agreement-table', style: { marginLeft: -20, marginRight: -20 } },
            React.createElement(TableHead, { testID: 'deal-decision-agreement-table-head' },
                React.createElement(TableColumn, { testID: 'deal-decision-agreement-table-col-2' },
                    React.createElement(Text, { testID: 'deal-decision-agreement-table-col-2-text' }, `Номер договора`)),
                React.createElement(TableColumn, { testID: 'deal-decision-agreement-table-col-3' },
                    React.createElement(Text, { testID: 'deal-decision-agreement-table-col-3-text' }, `Статус договора`))),
            React.createElement(TableBody, { testID: 'deal-decision-agreement-table-body' }, decision.agreements.map((e, index) => (React.createElement(TableRow, { testID: `test-id-deal-agreement-row-1-${index}`, key: `test-id-deal-agreement-row-1-${index}` },
                React.createElement(TableCell, { testID: `test-id-deal-decision-agreement-row-column-1-${index}` },
                    React.createElement(Text, { style: Styles.CommentTop, testID: `test-id-deal-decision-agreement-row-column-text-1-${index}` }, e.number)),
                React.createElement(TableCell, { testID: `test-id-deal-decision-agreement-row-column-2-${index}` },
                    React.createElement(Text, { style: Styles.CommentTop, testID: `test-id-deal-decision-agreement-row-column-text-2-${index}` }, e.status)))))))) : null,
        React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef(props.decisionPopoverTarget), opened: props.isVisiblePopoverDecision, onOutsideTap: props.performPopoverDecisionHide, type: PopoverType.WIDE, style: {
                height: 500,
                width: 375
            }, position: [PopoverPosition.LEFT] }, getDecisionPopoverContent(props.decisionPopoverData, props.performPopoverDecisionHide)));
};
let key = 0;
const detectIcon = (action, approvedStatuses) => {
    if (!approvedStatuses) {
        return null;
    }
    const statusApproved = util.isApprovalStatus(action, approvedStatuses);
    if (statusApproved == null) {
        return null;
    }
    return statusApproved ? React.createElement(IconView, { testID: 'test-id-d45bd2f2112sdfsdf', type: 'tick' }) :
        React.createElement(Text, { testID: `test-id-deal-refuse`, style: Styles.StatusRedCross }, "\u2715");
};
const renderExpandableRow = (dealAgreement, index, expandRow, isExpanded) => (isExpanded
    ? React.createElement(View, { testID: 'test-id-d54bcaa6-6bb05626a8', style: Styles.AgreementCommentContainerComment },
        React.createElement(Text, { testID: `test-id-deal-agreement-row-column-53-${index}`, style: Styles.GreyLabelValue }, `${dealAgreement.comment}. ${dealAgreement.result}`))
    : `${dealAgreement.comment}. ${dealAgreement.result}`.length <= 55
        ? React.createElement(View, { testID: 'test-id-d54bcaa6-6b565726a8', style: Styles.AgreementCommentContainerComment },
            React.createElement(Text, { testID: `test-id-deal-agreement-row-column-53-${index}`, style: Styles.GreyLabelValue }, dealAgreement.comment
                ? `${dealAgreement.comment}. ${dealAgreement.result}`
                : dealAgreement.result))
        : React.createElement(View, { testID: 'test-id-d54a6-6bb0565726a8', style: Styles.UnexpandedAgreementComment },
            React.createElement(Text, { testID: `test-id-deal-agreement-row-column-53-${index}`, style: Styles.GreyLabelValue }, dealAgreement.comment
                ? util.format.truncate(`${dealAgreement.comment}. ${dealAgreement.result}`, 55)
                : util.format.truncate(`${dealAgreement.result}`, 55)),
            React.createElement(View, { style: Styles.MoreButton, testID: `test-id-deal-agreement-row-column-more-button-cont-${index}` },
                React.createElement(Button, { type: ButtonType.TEXT, testID: `test-id-deal-agreement-row-column-more-button-${index}`, onExecute: () => expandRow(index) },
                    React.createElement(Text, { testID: `test-id-deal-agreement-row-column-more-button-text-${index}` }, "\u0435\u0449\u0451")))));
const AgreementRow = (dealAgreement, index, navigateToAgreementEmployee, expandRow, isExpanded, approvedStatuses) => (React.createElement(TableRow, { testID: `test-id-deal-agreement-row-1-${index}`, style: Styles.flexRow, key: `test-id-deal-agreement-row-1-${index}` },
    React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}`, style: Styles.NoCellMargins },
        React.createElement(View, { testID: `test-id-deal-agreement-row-column-11-${index}`, style: Styles.AgreementStatusIcon }, detectIcon(dealAgreement.action, approvedStatuses))),
    React.createElement(TableCell, { testID: 'test-id-efe90b2ccc0e8d1f4f', style: Styles.NoCellMargins },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', style: Styles.AgreementRow },
            React.createElement(View, { testID: 'test-id-d54bcaa6-6bb0565726a8', style: Styles.AgreementInnerRowFirstCol },
                React.createElement(View, { testID: `test-id-deal-agreement-row-column-111111-${index}`, style: Styles.AgreementFirstColTextContainer }, isExpanded
                    ? React.createElement(View, { testID: 'test-id-d54bcaa6-6bb05626a8', style: Styles.AgreementCommentContainer },
                        React.createElement(Text, { testID: `test-id-deal-agreement-row-column-43-${index}`, style: Styles.GreyLabelValue }, dealAgreement.author && util.getAgentFullName(dealAgreement.author)))
                    : React.createElement(Text, { testID: `test-id-deal-agreement-row-column-43-${index}`, style: Styles.GreyLabelValue, numberOfLines: 2, ellipsizeMode: 'tail' }, dealAgreement.author && util.getAgentFullName(dealAgreement.author))),
                React.createElement(View, { testID: `test-id-deal-agreement-row-column-1111-${index}`, style: Styles.InfoButtonContainerAgreement },
                    React.createElement(InfoButton, { testID: 'test-id-ea1ff618-ab98-11e7-abc4-cec278b6b50a', onPress: () => {
                            navigateToAgreementEmployee(dealAgreement);
                        } }))))),
    React.createElement(TableCell, { testID: 'test-id-efe90b2ccc0e8d1f4f', style: Styles.NoCellMargins },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', style: Styles.AgreementRow },
            React.createElement(View, { testID: 'test-id-d54bcaa6-6bb0565726a8', style: Styles.AgreementAction },
                React.createElement(View, { testID: `test-id-deal-agreement-row-column-111111-${index}` }, isExpanded
                    ? React.createElement(View, { testID: 'test-id-d54bcaa6-6bb05626a8', style: Styles.AgreementCommentContainer },
                        React.createElement(Text, { testID: `test-id-deal-agreement-row-column-43-${index}`, style: Styles.GreyLabelValue }, dealAgreement.action || ' '))
                    : React.createElement(Text, { testID: `test-id-deal-agreement-row-column-43-${index}`, style: Styles.GreyLabelValue, numberOfLines: 2, ellipsizeMode: 'tail' }, dealAgreement.action || ' '))))),
    React.createElement(TableCell, { testID: 'test-id-efe90b2ccc0e8d1f4f', style: Styles.NoCellMargins },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', style: Styles.AgreementRow },
            React.createElement(View, { testID: 'test-id-d54bcaa6-6bb0565726a8', style: Styles.AgreementInnerRow },
                React.createElement(View, { testID: `test-id-deal-agreement-row-column-42-${index}`, style: Styles.ColumnFlexStartCentered },
                    React.createElement(Text, { testID: `test-id-deal-agreement-row-column-43-${index}`, style: Styles.AgreementStartDate }, dealAgreement.created && util.format.date(dealAgreement.created, 'DD.MM.YYYY HH:mm')),
                    React.createElement(Text, { testID: `test-id-deal-agreement-row-column-45-${index}`, style: Styles.AgreementEndDate }, dealAgreement.due && util.format.date(dealAgreement.due, 'DD.MM.YYYY HH:mm')))))),
    React.createElement(TableCell, { testID: 'test-id-efe90b2ccc0e8d1f4f', style: Styles.NoCellMargins },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', style: Styles.AgreementRow }, renderExpandableRow(dealAgreement, index, expandRow, isExpanded)))));
const AgreementSheetContainer = (props) => (React.createElement(View, { testID: 'deal-agreement-table-container', style: Styles.ApprovalContainer },
    React.createElement(Table, { testID: 'deal-agreement-table', style: Styles.AgreementTable, underlined: false },
        React.createElement(TableHead, { testID: 'deal-agreement-table-head' },
            React.createElement(TableColumn, { testID: 'deal-agreement-table-col-1', width: '40' }),
            React.createElement(TableColumn, { testID: 'deal-agreement-table-col-2', width: '285' },
                React.createElement(Text, { testID: 'deal-agreement-table-col-2-text' }, `Участник согласования\n`)),
            React.createElement(TableColumn, { testID: 'deal-agreement-table-col-3', width: '150' },
                React.createElement(Text, { testID: 'deal-agreement-table-col-3-text' }, `Действие\n`)),
            React.createElement(TableColumn, { testID: 'deal-agreement-table-col-4', width: '160' },
                React.createElement(Text, { testID: 'deal-agreement-table-col-4-text' }, `Дата решения\nСрок`)),
            React.createElement(TableColumn, { testID: 'deal-agreement-table-col-5', width: '335' },
                React.createElement(Text, { testID: 'deal-agreement-table-col-5-text' }, `Комментарий\\Результат согласования\n`))),
        React.createElement(TableBody, { testID: 'deal-agreement-table-body' }, props.list.map((dealAgreement, index) => AgreementRow(dealAgreement, index, props.navigateToAgreementEmployee, props.performExpandRow, props.expandedAgreementRowIndex === index, props.approvedStatuses))))));
const getBackButtonTitle = (navigationType) => {
    switch (navigationType) {
        case EnumsApp.NavigationType.AppNotice: {
            return 'Уведомления';
        }
        case EnumsApp.NavigationType.Scheduler: {
            return 'Календарь';
        }
        default: {
            return 'Назад';
        }
    }
};
const nonLegalMemberRow = (props) => {
    let memberArray = [];
    if (props.currentDeal && props.currentDeal.contactParticipantList && props.currentDeal.contactParticipantList.data && props.currentDeal.contactParticipantList.data.length > 0) {
        memberArray = props.currentDeal.contactParticipantList.data;
    }
    return memberArray.map((member, index) => {
        return (React.createElement(TableRow, { testID: `test-id-deal-agreement-row-1-${index}`, style: { flexDirection: 'row' }, key: `test-id-deal-agreement-row-1-${index}` },
            React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}` },
                React.createElement(SmallAvatar, { testID: '_SmallAvatar_ProfileRowInfoButton', initials: `${member.lastName.slice(0, 1)}${member.firstName.slice(0, 1)}`, hasCrown: false })),
            React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}`, style: Styles.FioCell },
                React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-3-text', style: Styles.FioText }, `${member.lastName} ${member.firstName} ${member.middleName}`),
                React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-3-text2', style: Styles.GrayText }, `${member.participantType}`)),
            React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}`, style: [Styles.CellJustifyBottom, Styles.AlignRight] },
                React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-3-text', style: [Styles.GrayText, Styles.SummText] }, `${member.partLoanSum} ${member.partLoanCurrency.code}`)),
            React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}`, style: Styles.CellJustifyBottom },
                React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-3-text', style: Styles.GrayText }, getBirthday(member.birthday))),
            React.createElement(TableCell, { testID: `test-id-deal-agreement-row-column-1-${index}`, style: Styles.InfoButtonCell },
                React.createElement(InfoButton, { testID: 'test-id-ea1ff618-ab98-11e7-abc4-cec278b6b50a', onPress: () => {
                        props.navigateToNonLegalMemberCard(`${member.contactId}`);
                    } }))));
    });
};
const getBirthday = (birthday) => {
    if (birthday) {
        return moment(birthday).format('DD.MM.YYYY');
    }
    else {
        return '';
    }
};
const getNonLegalMembersList = (props) => {
    return (React.createElement(View, { testID: 'deal-nonlegalmembers-container', style: Styles.NonLegalMembersContainer },
        React.createElement(Table, { testID: 'deal-nonlegalmembers-table', style: Styles.NonLegalMembersTable, underlined: true },
            React.createElement(TableHead, { testID: 'deal-nonlegalmembers-table-head' },
                React.createElement(TableColumn, { testID: 'deal-nonlegalmembers-table-col-1', width: '55' }),
                React.createElement(TableColumn, { testID: 'deal-nonlegalmembers-table-col-2', width: '235' },
                    React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-2-text' }, `ФИО\nТип участника`)),
                React.createElement(TableColumn, { testID: 'deal-nonlegalmembers-table-col-3', width: '150' },
                    React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-3-text' }, `Сумма поручительства`)),
                React.createElement(TableColumn, { testID: 'deal-nonlegalmembers-table-col-4', width: '145' },
                    React.createElement(Text, { testID: 'deal-nonlegalmembers-table-col-4-text' }, `Дата рождения`)),
                React.createElement(TableColumn, { testID: 'deal-nonlegalmembers-table-col-5', width: '55' })),
            React.createElement(TableBody, { testID: 'deal-nonlegalmembers-table-body' }, nonLegalMemberRow(props)))));
};
const BackButtonHeader = (key, callback, title) => React.createElement(LeftPageHeader, { key: key, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-1-${key}` },
    React.createElement(NavigationBackButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-2-${key}`, title: false, onClick: callback }),
    React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-3-${key}` },
        React.createElement(NavigationTextButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4-${key}`, title: title, onExecute: callback })));
const noActionCallback = () => { };
const renderNavigation = (props) => {
    if (props.dealRoute && props.dealRoute.length) {
        return BackButtonHeader('parentRoute', props.navigateBackFromParent, 'Сделка');
    }
    if (props.currentMode == Enums.DealMode.DealActivityList ||
        props.currentMode == Enums.DealMode.ForeignActivityList) {
        return BackButtonHeader('mainView', props.refreshInProgress || props.navigationInProgress ? noActionCallback : props.navigateBack, 'Клиенты');
    }
    return BackButtonHeader('mainView', props.refreshInProgress || props.navigationInProgress ? noActionCallback : props.navigateBack, props.navigationType ? getBackButtonTitle(props.navigationType) : 'Карточка клиента');
};
const ViewDeal = (props) => (React.createElement(View, { testID: 'test-id-33fe61cb-6bb3-4430-5343-ad43655e761a', style: Styles.main },
    React.createElement(SplitPanel, { testID: 'test-id-a5c9b50c-0009-e862-1d6c-b082e51eddd4', id: util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal) },
        React.createElement(ContentPanel, { testID: 'test-id-edfc37ed-e4c7-0f3f-dfd6-5cd986f1d65f', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: false, content: getContent(props) },
                renderNavigation(props),
                React.createElement(CenterPageHeader, { testID: 'test-id-9ee5ade5-0d22-4af3-99a4-224834d034ac' },
                    React.createElement(View, { style: { flexDirection: 'row' } },
                        props.currentDeal.roleClassifier && props.currentDeal.roleClassifier.value ?
                            null : (React.createElement(View, { style: Styles.LockContainer },
                            React.createElement(IconView, { testID: 'test-id-57d12e70-dfce-0ccd-1940-478cfb22343227959', type: 'lock' }))),
                        React.createElement(H2, { testID: 'test-id-57d12e70-dfce-0ccd-1940-478cfb227959' }, "\u0421\u0434\u0435\u043B\u043A\u0430"))),
                React.createElement(RightPageHeader, { testID: 'test-id-8621039b-8270-qetryhtg-8e77-4354y' }, props.currentDeal.isEditable && props.isEditDealEnable ? (React.createElement(NavigationTextButton, { testID: 'test-id-hqyhgaa', title: 'Редактировать', onExecute: () => props.navigateToDealEditor(props.currentDeal, Enums.DealEditorMode.UpdateMode, props.dealAgentList) })) : (React.createElement(View, { style: Styles.DisabledButton },
                    React.createElement(NavigationTextButtonDisabled, { title: 'Редактировать' }))))),
            React.createElement(Page, { testID: 'test-id-4af8c886-6bfa-4ef2-a088-67667d9474ca', scrollEnabled: true, content: React.createElement(ProductsContainer, { testID: 'test-id-4af8c886-6bfa-4ef2-a088-67667d9474ca', productList: props.currentDeal.products }) },
                BackButtonHeader('productsBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-fd2cd1db-f217-5151-e2e5-0d40e54b81a7' },
                    React.createElement(H2, { testID: 'test-id-29d6fc1f-7426-f87c-4a2a-4c0fcd7c3b16' }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"))),
            React.createElement(Page, { testID: 'test-id-b21542dec2406938e7', scrollEnabled: false, content: React.createElement(ContainerDealStages, { testID: 'test-id-b21542dec24sadf06938e7' }) },
                BackButtonHeader('stagesBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a970-244e-917f-12ad-7b3a17e7f249' },
                    React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u0421\u0442\u0430\u0434\u0438\u0438 \u0441\u0434\u0435\u043B\u043A\u0438"))),
            React.createElement(Page, { testID: 'test-id-4deb32f5-2f81-fc01-b291-081c7f74b9de', scrollEnabled: true, content: React.createElement(CommentsContainer, { testID: 'test-id-4deb32f5-2f81-fc01-b291-081c7f74b9de', commentList: props.currentDeal.commentList || [] }) },
                BackButtonHeader('commentsBack', props.navigateDealBack, 'Новая сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-5370d99d-fe9b-bf2a-f1da-0a6e40bedd2e' },
                    React.createElement(H2, { testID: 'test-id-a6bf5c57-ede3-e4d3-7579-2138458c98c0' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"))),
            React.createElement(Page, { testID: 'test-id-ef90a725-c4c9-e234-e307-2b8df42a0205', scrollEnabled: true, content: React.createElement(SelectClassifier, { testID: 'test-id-320b0a2e-c433-04d9-51f4-29cbf01b3b8d', classifierList: props.classifierDictionary.SBRF_REQ_CLOSE_REASON, performSelect: props.performInputDealCloseResult, selectedCode: props.inputDealCloseResult && props.inputDealCloseResult.code, navigateBack: props.navigateDealBack }) }),
            React.createElement(Page, { testID: 'test-id-1fa11d13-f642-ea88-7538-b0c3b28452e3', scrollEnabled: true, content: React.createElement(AgreementSheetContainer, { testID: 'test-id-1fa11d13-f642-ea88-7538-b0c3b28452e3', list: props.currentDeal.agreement || [], agreementPopoverData: props.agreementPopoverData, agreementPopoverTarget: props.agreementPopoverTarget, performPopoverAgreementHide: props.performPopoverAgreementHide, performPopoverAgreementShow: props.performPopoverAgreementShow, navigateToAgreementEmployee: props.navigateToAgreementEmployee, performExpandRow: props.performExpandAgreementRow, expandedAgreementRowIndex: props.expandedAgreementRowIndex, approvedStatuses: props.approvedStatuses }) },
                BackButtonHeader('agreementsBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-4b6be0a32ae7a32431' },
                    React.createElement(H2, { testID: 'test-id-55d5a8c4-489046f7f108ca' }, "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F"))),
            React.createElement(Page, { testID: 'test-id-53329c2f-3423-7416-08e3-d7d9a0a77a19', scrollEnabled: true, content: React.createElement(DecisionContainer, { testID: 'test-id-53329c2f-3423-7416-08e3-d7d9a0a77a19', list: props.currentDeal.decision, classifierDictionary: props.classifierDictionary, decisionPopoverData: props.decisionPopoverData, decisionPopoverTarget: props.decisionPopoverTarget, props: props, performPopoverDecisionHide: props.performPopoverDecisionHide, performPopoverDecisionShow: props.performPopoverDecisionShow, isVisiblePopoverDecision: props.isVisiblePopoverDecision }) },
                BackButtonHeader('decisionsBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-5557c1c3-c987-d121-7b13-f5d9831516f8' },
                    React.createElement(H2, { testID: 'test-id-352a22a0-9c8b-70bc-7959-a56c6420e58c' }, "\u0424\u043E\u0440\u043C\u0430\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0434\u043E\u0433\u043E\u0432\u043E\u0440"))),
            React.createElement(Page, { scrollEnabled: false, testID: 'test-id-page-member-deal-view', content: React.createElement(ContainerMemberList, { testID: 'test-id-viewDeal-page-list-employee' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-e89cdccf-6264-9c29-f6ed-d3aa1f91c4b9' })),
            React.createElement(Page, { testID: 'test-id-8dd2a81d-c95a-f678-deal2', scrollEnabled: true, content: React.createElement(ContainerEmployee, { testID: 'test-id-viewDeal-page-one-employee' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-8dd2a81d-c95a-f678-deal4' })),
            React.createElement(Page, { testID: 'test-id-wrehaeha-8f12-ac07-0295-43rwfwf', scrollEnabled: false, content: React.createElement(ContainerDealEditor, { testID: 'test-id-refwg-8f12-ac07-0295-gasaaa' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-7dce0a3d-2092-4862-b71c-5hgqgqq' })),
            React.createElement(Page, { testID: 'test-id-8dd2a81d-c95a-f678-activity', scrollEnabled: true, content: React.createElement(ContainerActivity, { instanceType: EnumsScheduler.SchedulerMode.Deal, testID: 'test-id-viewActivity-page' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-8dd2a81d-c95a-f678-deal4-activity' })),
            React.createElement(Page, { testID: 'test-id-b21542dec2406938e7', scrollEnabled: false, content: React.createElement(ContainerDealStages, { testID: 'test-id-b21542dec24sadf06938e7' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qgr54-c95a-f678-gt4w-DealStages' })),
            React.createElement(Page, { testID: 'test-id-8dd2a81d-c95a-f678-activity', scrollEnabled: false, content: React.createElement(ContainerAgent, { testID: 'test-id-20ec4251-eb73-ed23-a743-734f8b743202' }) },
                BackButtonHeader('nonLegalMambersBack', props.navigateDealBack, 'Участники'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9ee5ade5-0d22-4af3-99a4-224834d034ac' },
                    React.createElement(H2, { testID: 'test-id-57d12e70-dfce-0ccd-1940-478cfb227959' }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C"))),
            React.createElement(Page, { testID: 'test-id-8dd2a81d-c95a-f678-activity', scrollEnabled: false, content: getNonLegalMembersList(props) },
                BackButtonHeader('nonLegalMambersBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9ee5ade5-0d22-4af3-99a4-224834d034ac' },
                    React.createElement(H2, { testID: 'test-id-57d12e70-dfce-0ccd-1940-478cfb227959' }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 - \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"))),
            React.createElement(Page, { testID: 'test-id-b21542dec2406938e7', scrollEnabled: false, content: React.createElement(ContainerDealStageEditor, { testID: 'test-id-b21542dec24sadf06938e7' }) },
                BackButtonHeader('stagesBack', props.navigateDealBack, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a970-244e-917f-12ad-7b3a17e7f249' },
                    React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u0421\u0442\u0430\u0434\u0438\u0438 \u0441\u0434\u0435\u043B\u043A\u0438")),
                React.createElement(LeftPageHeader, { testID: 'test-id-8dd2a81d-c95a-f678-editStage' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-editStage', title: "Редактировать", onExecute: props.navigateDealBack }))),
            React.createElement(Page, { testID: 'test-id-8dd2a81', scrollEnabled: false, content: React.createElement(ContainerAgent, { testID: 'test-id-4cb2810b9f4' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-61c283e' })),
            React.createElement(Page, { testID: 'test-id-8dd2a81d-c95a-f678-activity', scrollEnabled: false, content: React.createElement(ContainerDealAttachments, { testID: 'test-id-viewDealAttachments-page' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-8dd2a81d-c95a-f678-deal-attachments' }))),
        props.isDealExpandedMode ? (React.createElement(View, { testID: 'test-id-879a02ff-1c9a-aaa6-97c5-d35a48638745' })) : (React.createElement(AccessoryPanel, { testID: 'test-id-942f1972-97f6-b75d-38e4-71b540fe17c8' }, getAccessoryContent(props))))));
export default ViewDeal;
/* FIXME отключение функционала в рамках релиза 2018-1 (Вложения сделки) */
/*
{(dealAttachmentsCount !== '0') || (props.dealAttachmentsError !== null) ? (
    <OneLineCell
        data={{
            label: 'Вложения',
            value: ((props.dealAttachmentsError === null) ? dealAttachmentsCount : 'Ошибка загрузки')
        }}
        indented={true}
        onClick={props.navigateToDealAttachmentsScreen}
        flex={Styles.flex02}
    />) : null }
*/
//# sourceMappingURL=ViewDeal.js.map