/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { Button, ButtonType, CenterPageHeader, Col, ContentPanel, Grid, H2, Icon, IconType, Label, LeftPageHeader, Loader, Modal, NavigationBackButton, NavigationIconButton, NavigationIconButtonType, NavigationTextButton, Page, Popover, PopoverPosition, PopoverType, RightPageHeader, Row, SplitPanel, SumText, Table, TableBody, TableCell, TableRow, Text, View, } from 'ufs-mobile-platform';
import { OneLineCell } from "mrmkmcib-crm";
import { Enums } from '../../Enums';
import Styles from './styles/CustomerManagedTabMainStyles';
import * as Utils from '../../common/Util';
import ContainerEmployee from "../../containers/ContainerEmployee";
import ContainerCustomerEditor from "../../containers/ContainerCustomerEditor";
import PopoverTarget from '../../modules/PopoverTarget';
import { ExtraStyles } from 'mrmkmcib-ui';
import moment from 'moment';
import { TIMEOUT_STRING_CODE } from '../../models/Converters';
const NO_DATA_PLACEHOLDER = 'Нет данных';
const getProblemGroupCircle = (props) => {
    return (React.createElement(View, { testID: 'test-id-8fecf91c-3b7f-cca1-c870-8b37d405aaac', style: [
            Styles.ProblemCircle,
            { backgroundColor: Utils.getProblemGroupCircleColor(props.customerManaged.troubleGroup.code) }
        ] }));
};
const getEditRow = (props) => {
    return (React.createElement(View, { testID: 'test-id-0a1e42f5-8b26-d449-e7e6-136ef70fccce', style: Styles.EditRowWrapper },
        React.createElement(View, { testID: 'test-id-cec1c6bd-8933-d802-64f1-fa2ee4215057', style: Styles.EditLineSpacer },
            React.createElement(NavigationTextButton, { testID: 'test-id-e781aa91-c256-2245-f353-825fe9534720', title: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C', onExecute: () => {
                    props.performCustomerEditorShow(props.currentCustomerManaged);
                } })),
        props.customerManaged.affiliateList &&
            props.customerManaged.affiliateList.data &&
            props.customerManaged.affiliateList.data.length > 0 &&
            React.createElement(NavigationIconButton, { testID: 'test-id-46a72e9c-f67c-44a2-96c5-02663717c0a0', type: NavigationIconButtonType.SEARCH, onExecute: () => {
                    props.performSearchAffiliateListEnable();
                } })));
};
const renderTroubleGroupPopoverContent = (props) => {
    return (React.createElement(View, null, props.currentCustomerManaged && props.currentCustomerManaged.troubleCriteriaList && props.currentCustomerManaged.troubleCriteriaList.data
        ? props.currentCustomerManaged.troubleCriteriaList.data.map((item, index) => troubleGroupRow(item.criterion, index)) : null));
};
const agentListLine = (agentList, customerManaged) => {
    if (typeof agentList === "undefined" || typeof agentList.data === "undefined" || agentList.data.length === 0) {
        return Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA);
    }
    const main = agentList.data[0];
    const showName = Utils.getAgentNameInitials(main);
    const labelString = `${Utils.getAgentCustomerPosition(customerManaged, main)}`;
    if (labelString !== NO_DATA_PLACEHOLDER) {
        const position = Utils.format.truncate([showName, labelString].join(' - '), 39);
        return position + ' ' + Utils.moreCount(agentList.data);
    }
    else {
        return showName + ' ' + Utils.moreCount(agentList.data);
    }
};
const memberListLine = (customerManaged) => {
    const memberList = customerManaged.memberList;
    if (memberList == null || memberList.data == null || memberList.data.length == 0) {
        return Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA);
    }
    const main = memberList.data[0];
    const labelString = `${main.isGeneral ? ', основной контакт' : ''}${main.isBlocked ? ', Блокировка' : ''}`;
    return Utils.format.truncate([Utils.getAgentNameInitials(main), labelString].join(' '), 47) +
        Utils.moreCount(memberList.data);
};
const troubleGroupRow = (text, index) => (React.createElement(View, { key: `Criterion_${index}`, testID: 'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab8c-view' + index, style: Styles.TroubleGroupRow },
    React.createElement(Text, { testID: 'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab8c' + index, style: Styles.GreyLabelValue }, text)));
/* End of Agent related views */
const getHoldingDataGrid = (props) => {
    const agentListError = props.agentListError;
    const agentListFetching = props.agentListFetching;
    return (React.createElement(View, { testID: 'test-id-b2ff4eea-d9ae-f3a4-2a71-25e425f04ba1', style: Styles.flex },
        React.createElement(View, { testID: 'test-id-478bfa72-24a6-9ecd-45f9-0d7813d09891', style: Styles.dataGrid },
            React.createElement(Grid, { testID: 'test-id-48a18883-b85b-8c75-4644-2c4127812be1' },
                React.createElement(Row, { testID: 'test-id-db1a973e-64a4-5c26-a635-c4783c778ad1' },
                    React.createElement(Col, { testID: 'test-id-0914af7a-5ab0-32a3-1c36-16ae99661421', xs: 6 },
                        React.createElement(View, { testID: 'test-id-3a5c94f5-77de-ee7b-b91b-5cdecc652071', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Сегмент', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-0b62c098-7fdf-4225-c952-f12af3529a521', style: Styles.GreyLabelValue }, props.customerManaged.segment &&
                                    props.customerManaged.segment.value &&
                                    props.customerManaged.segment.value != '' ?
                                    props.customerManaged.segment.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-a1eaee9a-cfdc-dab4-69dc-b510a639fcc1', xs: 6 },
                        React.createElement(View, { testID: 'test-id-972af9a9-e907-3959-dab7-e2a75b1f26d1', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Отрасль', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-cc142e46-09d0-6bd8-e87b-da4a15b517c1', style: Styles.GreyLabelValue }, props.customerManaged.sector &&
                                    props.customerManaged.sector.value
                                    && props.customerManaged.sector.value != '' ?
                                    props.customerManaged.sector.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-1f376e8c-c5be-6d2e-9820-40db477e2f41' },
                    React.createElement(Col, { testID: 'test-id-5d087f8a-7e2b-2141-6f41-e7f8e6a9fe71', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a1a9a075-43ba-e2f3-ff0f-8e367f47a571', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Приоритет', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-ac1610f3-959e-8b8a-7b9b-8b4f737edde1', style: Styles.GreyLabelValue }, props.customerManaged.priority &&
                                    props.customerManaged.priority.value &&
                                    props.customerManaged.priority.value != '' ?
                                    props.customerManaged.priority.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-359d231d-c94b-689e-453a-6dd255f55151', xs: 6 },
                        React.createElement(View, { testID: 'test-id-623ba5ca-6010-1a8e-982e-3c507c4e8e71', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Курирующий отдел', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab81', style: Styles.GreyLabelValue }, props.customerManaged.supervisingDepartment ?
                                    props.customerManaged.supervisingDepartment :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-982928e3-665d-481a-f917-f8ee11ed47a1' },
                    React.createElement(Col, { testID: 'test-id-a957b687-523d-b5d9-2770-7a95772afb71', xs: 6 },
                        React.createElement(View, { testID: 'test-id-4bc32936-8d67-2343-58d0-10ed4b89fde1', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Страна регистрации', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-921a7ca7-3905-6d68-798c-c0994bbf4e11', style: Styles.GreyLabelValue }, props.customerManaged.registrationCountry &&
                                    props.customerManaged.registrationCountry != '' ?
                                    props.customerManaged.registrationCountry :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-73a5255f-e11c-1d41-b436-f3bacd78db11', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a25beb18-f349-59ca-0147-99fac56950c1', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-970cc24d-a348-f07c-6e87-c169abde8eb1', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-a92c62b1-5ff0-88c0-1be7-fe94d5b23051', style: Styles.RowWithInfoButton },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'КМ', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-a80583fc-9bce-3281-2fe2-4b3e4e1d7fd1', style: Styles.GreyLabelValue }, props.customerManaged.curator &&
                                            props.customerManaged.curator.fullName != '' ?
                                            props.customerManaged.curator.fullName :
                                            NO_DATA_PLACEHOLDER)),
                                    React.createElement(PopoverTarget, { testID: 'test-id-9a7f5cc8-46ec-0e66-9822-62a005e4b7b1', refName: 'curatorPopover' },
                                        React.createElement(View, { testID: 'test-id-b249512c-02f6-20a8-fcfb-218d3f23b711', style: Styles.InfoIconStyle }, props.customerManaged.curator &&
                                            props.customerManaged.curator.fullName != '' ?
                                            React.createElement(Button, { testID: 'test-id-bbebc638-b01e-4b62-9296-ed286b9e5a4b', onExecute: props.performPopoverCuratorShow },
                                                React.createElement(Icon, { testID: 'test-id-42356ab9-aa23-4c0b-9ddc-497c882c6b0d', type: IconType.MrmInfo })) :
                                            null))))),
                        React.createElement(Popover, { testID: 'test-id-a01abb83-5632-b31a-c0f4-d407a6cb5e51', target: PopoverTarget.getRef('curatorPopover'), opened: props.isVisiblePopoverCurator, onOutsideTap: props.performPopoverCuratorHide, type: PopoverType.WIDE, style: { height: 600, width: 375 }, position: [PopoverPosition.LEFT] },
                            React.createElement(SplitPanel, { testID: 'test-id-8b7aca9b-9054-3664-8252-82e142497d0d', id: 'mainTabCuratorDetailView' },
                                React.createElement(ContentPanel, { testID: 'test-id-139494ef-b4bc-576b-13a7-736308635eaf', style: { backgroundColor: '#fff' } },
                                    React.createElement(Page, { testID: 'test-id-3c4699b3-f4d0-6b2e-9162-b6f98c0b3404', scrollEnabled: false, content: React.createElement(ContainerEmployee, { testID: 'test-id-3c4699b3-f4d0-6b2e-9162-b6f98c0b3404' }) },
                                        React.createElement(LeftPageHeader, { testID: 'test-id-d9dec0df-c94e-c27d-3718-b906e439f903' }))))))),
                React.createElement(Row, { testID: 'test-id-c972640b-702e-2c84-e949-23c18023bef6' },
                    React.createElement(Col, { testID: 'test-id-2db3cdf2-0dc0-1b70-076e-756f7383b40a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-8e40cc6f-7ff1-cc15-92c9-b7fede92f67a', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Закрепление', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-8b427319-1352-8696-0484-b6ea86332055', style: Styles.GreyLabelValue }, props.customerManaged.anchorOrganisation ?
                                    props.customerManaged.anchorOrganisation :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-b7e9722b-69e3-7478-3be6-8d26ac4b5f09', xs: 6 },
                        React.createElement(View, { testID: 'test-id-5fee1dfc-e2c5-381e-49e3-014ddadf40ac', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-284ece5c-26a8-c768-c42b-a85e4bffdc3b', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-9cbcdc87-8634-1493-32f4-1a05270275fd', style: Styles.RowWithInfoButton },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'ВКО', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-afae5d09-8928-b3da-7a78-a362c3243ee9', style: Styles.GreyLabelValue }, props.customerManaged.holder &&
                                            props.customerManaged.holder.fullName != '' ?
                                            props.customerManaged.holder.fullName :
                                            NO_DATA_PLACEHOLDER)),
                                    React.createElement(PopoverTarget, { testID: 'test-id-ebb250e0-c62a-8c54-3879-a8dee824e662', refName: 'holderPopover' },
                                        React.createElement(View, { testID: 'test-id-d45bd288-a2dd-71ca-c0ed-f4ec14579b9f', style: Styles.InfoIconStyle }, props.customerManaged.holder &&
                                            props.customerManaged.holder.fullName != '' ?
                                            React.createElement(Button, { testID: 'test-id-61938417-d93a-43a5-93ce-cc68f7c2368b', onExecute: props.performPopoverHolderShow },
                                                React.createElement(Icon, { testID: 'test-id-4b1afa39-b3b0-4e07-a48c-a9f46c052ecd', type: IconType.MrmInfo })) :
                                            null))))),
                        React.createElement(Popover, { testID: 'test-id-2224dabc-afe3-d1ca-1ab2-b74f49214857', target: PopoverTarget.getRef('holderPopover'), opened: props.isVisiblePopoverHolder, onOutsideTap: props.performPopoverHolderHide, type: PopoverType.WIDE, style: { height: 600, width: 375 }, position: [PopoverPosition.LEFT] },
                            React.createElement(SplitPanel, { testID: 'test-id-586a9973-1989-d1f0-3d32-f6a1f3b52393', id: 'mainTabHolderDetailView' },
                                React.createElement(ContentPanel, { testID: 'test-id-91eeab65-41bd-0b09-3f04-bbcceb4d2f24', style: { backgroundColor: '#fff' } },
                                    React.createElement(Page, { testID: 'test-id-d176b875-9910-4838-173e-dbb9d264e62b', scrollEnabled: false, content: React.createElement(ContainerEmployee, { testID: 'test-id-d176b875-9910-4838-173e-dbb9d264e62b' }) },
                                        React.createElement(LeftPageHeader, { testID: 'test-id-0b1dbe01-d2e4-743d-2bb9-84e46e467d5b' }))))))),
                React.createElement(Row, { testID: 'test-id-a7754ab2-4cdd-2930-9777-cb9ca04c5c8d' },
                    React.createElement(Col, { testID: 'test-id-5704a7f1-eb43-4fae-4f08-c33076db4f2a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-d6d0dbc3-ff9f-680d-cf8c-e0e9214c1cef', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Сотрудничество', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-175c5ab4-d1de-d5fb-5969-41f9a843daf4', style: Styles.GreyLabelValue }, props.customerManaged.partnership &&
                                    props.customerManaged.partnership.value &&
                                    props.customerManaged.partnership.value != '' ?
                                    props.customerManaged.partnership.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-f334d44b-d876-5af1-a616-c307b7a29fe2', xs: 6 },
                        React.createElement(View, { testID: 'test-id-4c79370f-bf53-57ce-47b4-3b67e5c95bc2', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Моя роль', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-4bf9aefb-05fc-7225-cc69-f769b035c580', style: Styles.GreyLabelValue }, props.customerManaged.role &&
                                    props.customerManaged.role.value &&
                                    props.customerManaged.role.value != '' ?
                                    props.customerManaged.role.value == 'Клиентский менеджер' ?
                                        'Главный клиентский менеджер' :
                                        props.customerManaged.role.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-10394618-342b-e1b7-9d9f-f195ff8fde9d' },
                    React.createElement(Col, { testID: 'test-id-628cbcc0-9225-0001-60f7-fd03c299641f', xs: 6 },
                        React.createElement(View, { testID: 'test-id-1303b700-c244-0bd9-bd82-473944dbd41c', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Краткое наименование', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-1ffcb4d6-4a48-6733-35ca-ec696e2acd96', numberOfLines: 3, style: Styles.GreyLabelValue }, 
                                /*
                                FIXME когда будет выполнена задача http://jira.ca.sbrf.ru/browse/UFSINFRA-19539 (не работает свойство numberOfLines компонента Text, когда Text находится внутри Label), заменить следующую строку на
                                props.customerManaged.shortName || NO_DATA_PLACEHOLDER
                                */
                                Utils.sliceLongText(props.customerManaged.shortName))))),
                    React.createElement(Col, { testID: 'test-id-163cf7c1-c74d-3328-fcc4-5b35541c3780', xs: 6 },
                        React.createElement(View, { testID: 'test-id-579a3868-1433-cf6a-33c1-8756561b9870', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Статус карточки', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-e70e2e97-f4c0-95a2-2290-4ebbf28a2e7a', style: Styles.GreyLabelValue }, props.customerManaged.status &&
                                    props.customerManaged.status.value &&
                                    props.customerManaged.status.value != '' ?
                                    props.customerManaged.status.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-46fa70a2-095d-7fdf-de54-f17e3525404a' },
                    React.createElement(Col, { testID: 'test-id-3af1c2c1-042b-da8e-05f6-8cffc81a0810', xs: 6 },
                        React.createElement(View, { testID: 'test-id-dcdd4944-cf3c-c567-ed7c-e8fbc57c91a8', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Категория', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-19cb5be4-e4cc-ce14-0fa6-00cb1630123a', style: Styles.GreyLabelValue }, props.customerManaged.category && props.customerManaged.category.value &&
                                    props.customerManaged.category.value != '' ? props.customerManaged.category.value : '')))),
                    React.createElement(Col, { testID: 'test-id-1c3459e8-7caf-4ec0-3b12-9dd2fbd2a01a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a969c71d-04f4-4e56-00e1-de9a57525905', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Вид деятельности', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-9824fdec-7890-9721-0457-94e0f69fafcd', style: Styles.GreyLabelValue }, props.customerManaged.kindOfIndustry &&
                                    props.customerManaged.kindOfIndustry.value &&
                                    props.customerManaged.kindOfIndustry.value != '' ?
                                    props.customerManaged.kindOfIndustry.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-662813e6-6c1f-7a34-fb9e-3c2c9e210273' },
                    React.createElement(Col, { testID: 'test-id-1ea2367b-2c16-23f0-8b70-b0da6a8c21b0', xs: 12 },
                        React.createElement(View, { testID: 'test-id-1ea2367b-2c16-23f0-8b70-b0da6a8c21b0', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-9524cd52-0409-20c0-bbc5-c83e078a777f' },
                    React.createElement(Col, { testID: 'test-id-f4883f17-2f8d-92f0-1695-89c9b358e8a3', xs: 12 },
                        React.createElement(View, { testID: 'test-id-5053f408-00bc-03c8-fbca-8b06fde1c618', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-0aef06e1-9ac3-471a-2a5e-e366c5eb1287', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-23661d05-9fc4-56a4-4772-351ca7ec2eae', style: [Styles.flex, Styles.paddingRight] },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Фактический адрес', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-4461dd1c-288c-1daa-1ff1-8ba5f1ebd205', style: Styles.GreyLabelValue }, Utils.addressFormatFull(props.customerManaged.address)))))))),
                React.createElement(Row, { testID: 'test-id-9e7f9890-1d0b-9fd4-e812-ca9e5c1a7ce0' },
                    React.createElement(Col, { testID: 'test-id-5c3d5b3f-cb85-2218-7705-b009acf6eddb', xs: 12 },
                        React.createElement(View, { testID: 'test-id-5c3d5b3f-cb85-2218-7705-b009acf6eddb', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-1630fe8a-9940-0248-52f5-08ec79589e06' },
                    React.createElement(Col, { testID: 'test-id-edf38ec1-73bd-e280-5056-482e6c45faa8', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc1', style: [Styles.StyleForOneLineCell, Styles.FixHeightRow], underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc2' },
                                React.createElement(TableRow, { testID: 'test-id-98ec8265-bb37-e638-6554-c2367cd4f0fe', onClick: props.navigateToAgentListScreen || (() => { }) },
                                    React.createElement(TableCell, { testID: 'test-id-97d95344-7f6a-f16c-6d5b-cd395eac42bf', style: Styles.TableCell },
                                        React.createElement(View, { testID: 'test-id-8542f10b-b6b0-8059-069f-6d650e4b8d2e', style: [Styles.InlineWrapper, Styles.FixHeightRow] },
                                            React.createElement(View, { testID: 'test-id-e3a2e0ec-22c3-606d-25c8-ae07f3a91d7d', style: Styles.flex03 },
                                                React.createElement(Text, { testID: 'test-id-8166e42c-3946-6233-b946-0f5775c8e49e', style: Styles.InlineTitle, numberOfLines: 1 }, 'Представители')),
                                            agentListFetching ?
                                                React.createElement(View, { testID: 'test-id-scaleView', style: Styles.scale },
                                                    React.createElement(Loader, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c42' })) :
                                                React.createElement(View, { testID: 'test-id-d2f7a61d-9589-af02-c053-0e5037d4126c', style: [Styles.InlineRight, Styles.FixHeightRow] },
                                                    React.createElement(View, { testID: 'test-id-9b0725bc-3b1a-2a5a-4c93-f572bcbecb4a', style: [Styles.InlineRight, Styles.FixHeightRow] },
                                                        React.createElement(Text, { testID: 'test-id-e373f609-5de9-db74-2cca-11b058d33fe9', style: Styles.InlineValue, numberOfLines: 1 }, agentListLine(props.agentList, props.currentCustomerManaged))),
                                                    props.navigateToAgentListScreen ?
                                                        React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: props.navigateToAgentListScreen },
                                                            React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', type: IconType.MrmLink, disabled: true })) :
                                                        React.createElement(View, { testID: 'test-id-b3af3226-53ce-44ac-8ec0-841cf294e17d', style: Styles.EmptyView })),
                                            agentListError &&
                                                !agentListFetching &&
                                                React.createElement(View, { testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301', style: Styles.AgentErrorPanel },
                                                    React.createElement(Text, { style: Styles.AgentErrorText, testID: 'test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0' }, Utils.getProductListItemErrorText(null)),
                                                    agentListError &&
                                                        React.createElement(View, { style: Styles.AgentsValueView, testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' },
                                                            React.createElement(NavigationIconButton, { testID: 'test-id-583f7639-def2-363e-5fd3-9c5be85de38d', type: NavigationIconButtonType.REFRESH, onExecute: () => {
                                                                    props.callGetAgentList(props.currentCustomerManaged.id);
                                                                } })))))))))),
                React.createElement(Row, { testID: 'test-id-d0a0dce8-f697-aff1-1aca-ce5bcb4e8ff3' },
                    React.createElement(Col, { testID: 'test-id-85fb93c0-cd09-1d3b-ee7c-d4f5ceaf2e55', xs: 12 },
                        React.createElement(View, { testID: 'test-id-85fb93c0-cd09-1d3b-ee7c-d4f5ceaf2e55', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-2511a8b2-c8ff-8738-dc13-9387c8de06e5' },
                    React.createElement(Col, { testID: 'test-id-9091f1b8-da1e-c5bf-3e56-028c8959d90e', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc5', style: Styles.StyleForOneLineCell, underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc6' },
                                React.createElement(OneLineCell, { data: {
                                        label: 'Команда клиента',
                                        value: memberListLine(props.currentCustomerManaged)
                                    }, onClick: props.navigateToMemberListScreen, flex: Styles.flex04 }))))),
                React.createElement(Row, { testID: 'test-id-8404b404-5968-046d-1603-709b0d44b9b2' },
                    React.createElement(Col, { testID: 'test-id-444f0ed0-5abe-a5e5-356d-748c2f853a40', xs: 12 },
                        React.createElement(View, { testID: 'test-id-444f0ed0-5abe-a5e5-356d-748c2f853a40', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-a0e90313-648b-3a7f-8621-b526f55e0903' },
                    React.createElement(Col, { testID: 'test-id-993cd435-722d-7e2a-83ca-eca52fc34f5e', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc4', style: Styles.StyleForOneLineCell, underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc4' },
                                React.createElement(OneLineCell, { data: {
                                        label: 'Важные даты',
                                        value: getDatesCount(props)
                                    }, onClick: props.navigateToOccasionListScreen, flex: Styles.flex03 }))))),
                React.createElement(Row, { testID: 'test-id-aec95d92-5754-3813-d23b-9ba066807f6b' },
                    React.createElement(Col, { testID: 'test-id-8c62d45c-d152-5a3b-e4f1-a7c044563fbe', xs: 12 },
                        React.createElement(View, { testID: 'test-id-8c62d45c-d152-5a3b-e4f1-a7c044563fbe', style: Styles.HorisontalLine }))))),
        props.customerManaged.affiliateList && props.customerManaged.affiliateList.data && props.customerManaged.affiliateList.data.length > 0 ?
            React.createElement(View, { testID: 'test-id-1e49e7e9-67cd-2646-7f8e-1dbb143580d5' },
                React.createElement(View, { testID: 'test-id-c8abd293-cbee-d09f-2947-a6b96b58678c', style: [Styles.CollWrapperNoPadding, Styles.RowLeftPadding] },
                    React.createElement(View, { testID: 'test-id-8dafb5ff-3d95-d8dd-82ab-8cd5ba9097ea', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-217ded3a-466d-7403-03f5-42e5f7a50ac2', style: Styles.flex },
                            React.createElement(Text, { testID: 'test-id-7d3484fe-6634-fc6f-eb4e-f9b817e35589', style: Styles.affiliateSectionHeader }, 'Дочерние организации')))),
                React.createElement(Table, { testID: 'test-id-b68a54c3-022b-4b80-aa6b-78c41e8e0af2', style: Styles.StyleForOneLineCell },
                    React.createElement(TableBody, { testID: 'test-id-90a1236f-a870-3467-151a-cbb91f16d90b' }, props.customerManaged.affiliateList.data.map((item) => customerRow(item, props)))))
            : null));
};
const getNotHoldingDataGrid = (props) => {
    const currency = props.currentCustomerManaged.isNSL ?
        (props.limit && props.limit.currency && props.limit.currency.value) :
        (props.limitOld && props.limitOld.currency && props.limitOld.currency.value);
    const troubleCriteriaListNotEmpty = !!(props.currentCustomerManaged.troubleCriteriaList &&
        props.currentCustomerManaged.troubleCriteriaList.data &&
        props.currentCustomerManaged.troubleCriteriaList.data.length);
    const limitError = props.limitError || props.limitOldError;
    const limitFetching = props.limitFetching || props.limitOldFetching;
    const agentListError = props.agentListError;
    const agentListFetching = props.agentListFetching;
    return (React.createElement(View, { testID: 'test-id-b2ff4eea-d9ae-f3a4-2a71-25e425f04ba0', style: Styles.flex },
        React.createElement(View, { testID: 'test-id-478bfa72-24a6-9ecd-45f9-0d7813d09895', style: Styles.dataGrid },
            React.createElement(Grid, { testID: 'test-id-48a18883-b85b-8c75-4644-2c4127812be0' },
                React.createElement(Row, { testID: 'test-id-db1a973e-64a4-5c26-a635-c4783c778ad3' },
                    React.createElement(Col, { testID: 'test-id-0914af7a-5ab0-32a3-1c36-16ae99661427', xs: 6 },
                        React.createElement(View, { testID: 'test-id-3a5c94f5-77de-ee7b-b91b-5cdecc652079', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Сегмент', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-0b62c098-7fdf-4225-c952-f12af3529a52', style: Styles.GreyLabelValue }, props.customerManaged.segment &&
                                    props.customerManaged.segment.value &&
                                    props.customerManaged.segment.value != '' ?
                                    props.customerManaged.segment.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-a1eaee9a-cfdc-dab4-69dc-b510a639fcc4', xs: 6 },
                        React.createElement(View, { testID: 'test-id-972af9a9-e907-3959-dab7-e2a75b1f26de', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Отрасль', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-cc142e46-09d0-6bd8-e87b-da4a15b517c8', style: Styles.GreyLabelValue }, props.customerManaged.sector &&
                                    props.customerManaged.sector.value &&
                                    props.customerManaged.sector.value != '' ?
                                    props.customerManaged.sector.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-1f376e8c-c5be-6d2e-9820-40db477e2f43' },
                    React.createElement(Col, { testID: 'test-id-5d087f8a-7e2b-2141-6f41-e7f8e6a9fe78', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a1a9a075-43ba-e2f3-ff0f-8e367f47a57d', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Приоритет', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-ac1610f3-959e-8b8a-7b9b-8b4f737eddec', style: Styles.GreyLabelValue }, props.customerManaged.priority &&
                                    props.customerManaged.priority.value &&
                                    props.customerManaged.priority.value != '' ?
                                    props.customerManaged.priority.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-359d231d-c94b-689e-453a-6dd255f55159', xs: 6 },
                        React.createElement(View, { testID: 'test-id-623ba5ca-6010-1a8e-982e-3c507c4e8e79', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Курирующий отдел', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab8c', style: Styles.GreyLabelValue }, props.customerManaged.supervisingDepartment &&
                                    props.customerManaged.supervisingDepartment != '' ?
                                    props.customerManaged.supervisingDepartment :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-982928e3-665d-481a-f917-f8ee11ed47a3' },
                    React.createElement(Col, { testID: 'test-id-a957b687-523d-b5d9-2770-7a95772afb77', xs: 6 },
                        React.createElement(View, { testID: 'test-id-4bc32936-8d67-2343-58d0-10ed4b89fde6', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Страна регистрации', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-921a7ca7-3905-6d68-798c-c0994bbf4eb1', style: Styles.GreyLabelValue }, props.customerManaged.registrationCountry &&
                                    props.customerManaged.registrationCountry != '' ?
                                    props.customerManaged.registrationCountry :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-73a5255f-e11c-1d41-b436-f3bacd78db41', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a25beb18-f349-59ca-0147-99fac56950c4', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-970cc24d-a348-f07c-6e87-c169abde8eb4', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-a92c62b1-5ff0-88c0-1be7-fe94d5b2305b', style: Styles.RowWithInfoButton },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'КМ', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-a80583fc-9bce-3281-2fe2-4b3e4e1d7fd5', style: Styles.GreyLabelValue }, props.customerManaged.curator &&
                                            props.customerManaged.curator.fullName != '' ?
                                            props.customerManaged.curator.fullName :
                                            NO_DATA_PLACEHOLDER)),
                                    React.createElement(PopoverTarget, { testID: 'test-id-9a7f5cc8-46ec-0e66-9822-62a005e4b7b0', refName: 'curatorPopover' },
                                        React.createElement(View, { testID: 'test-id-b249512c-02f6-20a8-fcfb-218d3f23b715', style: Styles.InfoIconStyle }, props.customerManaged.curator &&
                                            props.customerManaged.curator.fullName != '' ?
                                            React.createElement(Button, { testID: 'test-id-b286bb0a-2ae7-4538-8d20-e6991172a653', onExecute: props.performPopoverCuratorShow },
                                                React.createElement(Icon, { testID: 'test-id-823b3749-126c-4d79-8e86-297d742939e1', type: IconType.MrmInfo })) :
                                            null))))),
                        React.createElement(Popover, { testID: 'test-id-a01abb83-5632-b31a-c0f4-d407a6cb5e56', target: PopoverTarget.getRef('curatorPopover'), opened: props.isVisiblePopoverCurator, onOutsideTap: props.performPopoverCuratorHide, type: PopoverType.WIDE, style: { height: 600, width: 375 }, position: [PopoverPosition.LEFT] },
                            React.createElement(SplitPanel, { testID: 'test-id-8b7aca9b-9054-3664-8252-82e142497d0d', id: 'mainTabCuratorDetailView' },
                                React.createElement(ContentPanel, { testID: 'test-id-139494ef-b4bc-576b-13a7-736308635eaf', style: { backgroundColor: '#fff' } },
                                    React.createElement(Page, { testID: 'test-id-3c4699b3-f4d0-6b2e-9162-b6f98c0b3404', scrollEnabled: false, content: React.createElement(ContainerEmployee, { testID: 'test-id-3c4699b3-f4d0-6b2e-9162-b6f98c0b3404' }) },
                                        React.createElement(LeftPageHeader, { testID: 'test-id-d9dec0df-c94e-c27d-3718-b906e439f903' }))))))),
                React.createElement(Row, { testID: 'test-id-c972640b-702e-2c84-e949-23c18023bef6' },
                    React.createElement(Col, { testID: 'test-id-2db3cdf2-0dc0-1b70-076e-756f7383b40a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-f1e61f60-1967-4a97-b1aa-bc710fcf8f1b', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-13493de6-9795-4b4f-84f7-6e6124b27db8', text: 'Закрепление', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-c232f9f7-05df-4375-aa16-8796a771648d', style: Styles.GreyLabelValue }, props.customerManaged.anchorOrganisation ?
                                    props.customerManaged.anchorOrganisation :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-b7e9722b-69e3-7478-3be6-8d26ac4b5f09', xs: 6 },
                        React.createElement(View, { testID: 'test-id-5fee1dfc-e2c5-381e-49e3-014ddadf40ac', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-284ece5c-26a8-c768-c42b-a85e4bffdc3b', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-9cbcdc87-8634-1493-32f4-1a05270275fd', style: Styles.RowWithInfoButton },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'ВКО', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-afae5d09-8928-b3da-7a78-a362c3243ee9', style: Styles.GreyLabelValue }, props.customerManaged.holder &&
                                            props.customerManaged.holder.fullName != '' ?
                                            props.customerManaged.holder.fullName :
                                            NO_DATA_PLACEHOLDER)),
                                    React.createElement(PopoverTarget, { testID: 'test-id-ebb250e0-c62a-8c54-3879-a8dee824e662', refName: 'holderPopover' },
                                        React.createElement(View, { testID: 'test-id-d45bd288-a2dd-71ca-c0ed-f4ec14579b9f', style: Styles.InfoIconStyle }, props.customerManaged.holder &&
                                            props.customerManaged.holder.fullName != '' ?
                                            React.createElement(Button, { testID: 'test-id-b9abc39e-f325-4173-b88c-9723f998ed0e', onExecute: props.performPopoverHolderShow },
                                                React.createElement(Icon, { testID: 'test-id-47f6b246-22ce-4db2-8633-58212884e7e5', type: IconType.MrmInfo })) :
                                            null))))),
                        React.createElement(Popover, { testID: 'test-id-2224dabc-afe3-d1ca-1ab2-b74f49214857', target: PopoverTarget.getRef('holderPopover'), opened: props.isVisiblePopoverHolder, onOutsideTap: props.performPopoverHolderHide, type: PopoverType.WIDE, style: { height: 600, width: 375 }, position: [PopoverPosition.LEFT] },
                            React.createElement(SplitPanel, { testID: 'test-id-586a9973-1989-d1f0-3d32-f6a1f3b52393', id: 'mainTabHolderDetailView' },
                                React.createElement(ContentPanel, { testID: 'test-id-91eeab65-41bd-0b09-3f04-bbcceb4d2f24', style: { backgroundColor: '#fff' } },
                                    React.createElement(Page, { testID: 'test-id-d176b875-9910-4838-173e-dbb9d264e62b', scrollEnabled: false, content: React.createElement(ContainerEmployee, { testID: 'test-id-d176b875-9910-4838-173e-dbb9d264e62b' }) },
                                        React.createElement(LeftPageHeader, { testID: 'test-id-0b1dbe01-d2e4-743d-2bb9-84e46e467d5b' }))))))),
                React.createElement(Row, { testID: 'test-id-a7754ab2-4cdd-2930-9777-cb9ca04c5c8d' },
                    React.createElement(Col, { testID: 'test-id-2e308e40-cd30-9ff7-9beb-57bcac1d3303', xs: 6 },
                        React.createElement(View, { testID: 'test-id-56160fd2-5fd2-950d-385b-9891d54c1e36', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'КПП', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-91cf6fac-5222-cb05-77c7-64ffc54507f7', style: Styles.GreyLabelValue }, props.customerManaged.kpp || NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-f334d44b-d876-5af1-a616-c307b7a29fe2', xs: 6 },
                        React.createElement(View, { testID: 'test-id-4c79370f-bf53-57ce-47b4-3b67e5c95bc2', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Моя роль', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-4bf9aefb-05fc-7225-cc69-f769b035c580', style: Styles.GreyLabelValue }, props.customerManaged.role &&
                                    props.customerManaged.role.value &&
                                    props.customerManaged.role.value != '' ?
                                    props.customerManaged.role.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-1487c540-ac05-5672-1ced-67935cc18c40' },
                    React.createElement(Col, { testID: 'test-id-fda94fd6-3788-e153-f5a6-d1e6505b9ef0', xs: 6 },
                        React.createElement(View, { testID: 'test-id-10e381cb-81b6-101d-61e6-6bf769f3fd56', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'ИНН/КИО', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-55651109-7807-de12-f29f-b547661a644e', style: Styles.GreyLabelValue }, (props.customerManaged.inn && props.customerManaged.inn != '') ? props.customerManaged.inn :
                                    (props.customerManaged.kio && props.customerManaged.kio != '') ? props.customerManaged.kio :
                                        NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-dbba64cb-7677-b0c9-fb36-5c31bda52972', xs: 6 },
                        React.createElement(View, { testID: 'test-id-982e7a09-b5c0-110c-3801-6f9ab2ab1715', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-fd53e664-5187-7e13-eaf3-512c4eeb68b1', style: Styles.TroubleGroupWrapper },
                                React.createElement(PopoverTarget, { testID: 'test-id-3f72904c-fe0e-52ad-444d-dbd563dee9f8-problem', refName: 'problemGroupPopoverTarget' },
                                    React.createElement(View, { testID: 'test-id-6d870182-4210-a5e7-680a-4903214a9480-problem' }, troubleCriteriaListNotEmpty ?
                                        React.createElement(View, { testID: 'test-id-fdc97090-a807-470f-0249-55b2b978c55d', style: Styles.TroubleGroupButtonStyle },
                                            React.createElement(Button, { testID: 'test-id-c5869ea1-aeca-22ef-d383-9670999b6bd1-problem', type: ButtonType.TEXT, onExecute: () => { props.performPopoverProblemListShow(); } },
                                                React.createElement(Text, { testID: 'test-id-fdc97090-a807-470f-0249-55b2b978c66d', style: [Styles.GreyLabel, Styles.flex] }, 'Утвержденная группа проблемности')))
                                        :
                                            React.createElement(View, { testID: 'test-id-fdc97090-a807-470f-0249-55b2b978c61f' },
                                                React.createElement(Text, { testID: 'test-id-fdc97090-a807-470f-0249-55b2b978c61x', style: Styles.GreyLabel }, 'Утвержденная группа проблемности'),
                                                props.customerManaged.troubleGroup &&
                                                    props.customerManaged.troubleGroup.value &&
                                                    props.customerManaged.troubleGroup.value.length > 0 ?
                                                    getProblemGroupCircle(props) :
                                                    React.createElement(Text, { testID: 'test-id-0351bd92-8f80-48ed-8727-fa8923393661', style: Styles.TroubleGroupNoDataTextStyle }, NO_DATA_PLACEHOLDER)))),
                                props.customerManaged.troubleGroup.code && troubleCriteriaListNotEmpty ?
                                    React.createElement(View, { testID: 'test-id-fdc97090-a807-470f-0249-55b2b978c55d', style: troubleCriteriaListNotEmpty ?
                                            Styles.TroubleGroupCircleStyleWithButton :
                                            Styles.TroubleGroupCircleStyle }, getProblemGroupCircle(props)) :
                                    null)),
                        React.createElement(Popover, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad-probPopover', target: PopoverTarget.getRef('problemGroupPopoverTarget'), opened: props.isVisiblePopoverProblemList, onOutsideTap: props.performPopoverProblemListHide, type: PopoverType.WIDE, style: { height: 200 }, position: [PopoverPosition.TOP] },
                            React.createElement(SplitPanel, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad-probsplitpanel', id: "problemGroupView" },
                                React.createElement(ContentPanel, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad-probcontentpanel', style: { backgroundColor: '#fff' } },
                                    React.createElement(Page, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad-probpage', scrollEnabled: true, content: renderTroubleGroupPopoverContent(props) },
                                        React.createElement(CenterPageHeader, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad' },
                                            React.createElement(H2, { testID: 'test-id-967984af-e951-d708-2779-3a892e5fc0ad-problenh2' }, "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0441\u0442\u0438")))))))),
                React.createElement(Row, { testID: 'test-id-64ac127f-444a-f71c-daad-1c87fefc4f0d' },
                    React.createElement(Col, { testID: 'test-id-5704a7f1-eb43-4fae-4f08-c33076db4f2a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-d6d0dbc3-ff9f-680d-cf8c-e0e9214c1cef', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Сотрудничество', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-175c5ab4-d1de-d5fb-5969-41f9a843daf4', style: Styles.GreyLabelValue }, props.customerManaged.partnership &&
                                    props.customerManaged.partnership.value &&
                                    props.customerManaged.partnership.value != '' ?
                                    props.customerManaged.partnership.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-92d81ac0-557e-ccac-0289-a1c345100d7f', xs: 6 },
                        React.createElement(View, { testID: 'test-id-c68c2890-83ce-87d0-b70e-7ea0a1e01c25', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Итоговый актуальный рейтинг', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-4a0acb90-ddcc-ffc1-6bfc-e6417730077e', style: Styles.GreyLabelValue }, props.customerManaged.rating &&
                                    props.customerManaged.rating.value ?
                                    props.customerManaged.rating.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-10394618-342b-e1b7-9d9f-f195ff8fde9d' },
                    React.createElement(Col, { testID: 'test-id-628cbcc0-9225-0001-60f7-fd03c299641f', xs: 6 },
                        React.createElement(View, { testID: 'test-id-1303b700-c244-0bd9-bd82-473944dbd41c', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Краткое наименование', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-1ffcb4d6-4a48-6733-35ca-ec696e2acd96', numberOfLines: 3, style: Styles.GreyLabelValue }, 
                                /*
                                FIXME когда будет выполнена задача http://jira.ca.sbrf.ru/browse/UFSINFRA-19539 (не работает свойство numberOfLines компонента Text, когда Text находится внутри Label), заменить следующую строку на
                                props.customerManaged.shortName || NO_DATA_PLACEHOLDER
                                */
                                Utils.sliceLongText(props.customerManaged.shortName))))),
                    React.createElement(Col, { testID: 'test-id-6756757d-54a2-5b2b-421c-ae2f95f2d740', xs: 6 },
                        React.createElement(View, { testID: 'test-id-b5f33e13-988d-7008-6f14-e2e25f6f6fc5', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Дата утверждения рейтинга', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-fab5eb77-6a39-45e4-b0a9-706faa20bdcf', style: Styles.GreyLabelValue }, props.customerManaged.rating &&
                                    props.customerManaged.rating.approvalDate ?
                                    moment(props.customerManaged.rating.approvalDate).format('L') :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-46fa70a2-095d-7fdf-de54-f17e3525404a' },
                    React.createElement(Col, { testID: 'test-id-163cf7c1-c74d-3328-fcc4-5b35541c3780', xs: 6 },
                        React.createElement(View, { testID: 'test-id-579a3868-1433-cf6a-33c1-8756561b9870', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Статус карточки', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-e70e2e97-f4c0-95a2-2290-4ebbf28a2e7a', style: Styles.GreyLabelValue }, props.customerManaged.status &&
                                    props.customerManaged.status.value &&
                                    props.customerManaged.status.value != '' ?
                                    props.customerManaged.status.value :
                                    NO_DATA_PLACEHOLDER)))),
                    React.createElement(Col, { testID: 'test-id-1c3459e8-7caf-4ec0-3b12-9dd2fbd2a01a', xs: 6 },
                        React.createElement(View, { testID: 'test-id-a969c71d-04f4-4e56-00e1-de9a57525905', style: Styles.CollWrapperNoPadding },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Вид деятельности', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-9824fdec-7890-9721-0457-94e0f69fafcd', style: Styles.GreyLabelValue }, props.customerManaged.kindOfIndustry &&
                                    props.customerManaged.kindOfIndustry.value &&
                                    props.customerManaged.kindOfIndustry.value != '' ?
                                    props.customerManaged.kindOfIndustry.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-cd75a7df-14c7-6794-ddf2-832b0f36d00b' },
                    React.createElement(Col, { testID: 'test-id-3af1c2c1-042b-da8e-05f6-8cffc81a0810', xs: 6 },
                        React.createElement(View, { testID: 'test-id-dcdd4944-cf3c-c567-ed7c-e8fbc57c91a8', style: Styles.CollWrapper },
                            React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Категория', block: false, header: '' },
                                React.createElement(Text, { testID: 'test-id-19cb5be4-e4cc-ce14-0fa6-00cb1630123a', style: Styles.GreyLabelValue }, props.customerManaged.category &&
                                    props.customerManaged.category.value &&
                                    props.customerManaged.category.value != '' ?
                                    props.customerManaged.category.value :
                                    NO_DATA_PLACEHOLDER))))),
                React.createElement(Row, { testID: 'test-id-662813e6-6c1f-7a34-fb9e-3c2c9e210273' },
                    React.createElement(Col, { testID: 'test-id-1ea2367b-2c16-23f0-8b70-b0da6a8c21b0', xs: 12 },
                        React.createElement(View, { testID: 'test-id-1ea2367b-2c16-23f0-8b70-b0da6a8c21b0', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-b3d44994-3a17-a32c-16bc-8badce8b5483' },
                    React.createElement(Col, { testID: 'test-id-ed8981b2-1a5f-5e9a-1766-b096fce1c6df', xs: 8 },
                        React.createElement(View, { style: Styles.LimitsCol },
                            React.createElement(Table, { testID: 'test-id-ed8981b2-1a5f-5e9a-1766-b096fce1c6das', noPaddings: true, underlined: false },
                                React.createElement(TableBody, { testID: 'test-id-ed8981b2-1a5f-5e9a-1766-b096fce1c6das' },
                                    React.createElement(TableRow, { testID: 'test-id-ed8981b2-1a5f-5e9a-1766-b096fce1c6dad', onClick: () => {
                                            if (!limitError && !limitFetching && (props.currentCustomer && !props.currentCustomer.isNSL)) {
                                                props.performLimitShow();
                                            }
                                        } },
                                        React.createElement(TableCell, { testID: 'test-id-f1ff5891-1495-598c-4a44-fc9637764cbd' },
                                            React.createElement(View, { testID: 'test-id-12be4e7b-7849-695e-2e6c-784c39df14493', style: [
                                                    limitError && !limitFetching ? {} : ExtraStyles.GridRow.hideExtraVerticalMargins,
                                                    Styles.flex
                                                ] },
                                                React.createElement(View, { testID: 'test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0', style: Styles.LimitsTitleText },
                                                    React.createElement(Text, { testID: 'test-id-cf6f2999-9e37-e344-d29a-dc3237bae613', style: Styles.GreyLabelValue }, 'Расчетное значение совокупного лимита' + (currency ? `, ${currency}` : '')),
                                                    React.createElement(View, { testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301', style: Styles.limitErrorPanel }, limitError && !limitFetching && React.createElement(Text, { style: Styles.limitErrorText, testID: 'test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0' }, Utils.getProductListItemErrorText(null))))))))))),
                    React.createElement(Col, { testID: 'test-id-74e47ec3-1bb6-a5ff-81b5-530a41b116fd', xs: 4 },
                        React.createElement(View, { testID: 'test-id-12be4e7b-7849-695e-2e6c-784c39df14494', style: [
                                ExtraStyles.GridRow.hideExtraVerticalMargins,
                                ExtraStyles.GridRow.hideExtraLeftMargins,
                                Styles.flex,
                                Styles.justifyToRight
                            ] },
                            React.createElement(View, { testID: 'test-id-1751a87c-63f0-194c-a7d7-be4547991296', style: Styles.InlineWrapper }, props.limitFetching ? (React.createElement(View, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c47', style: Styles.loaderWrapper },
                                React.createElement(View, { testID: 'test-id-scaleView', style: Styles.scale },
                                    React.createElement(Loader, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c42' })))) : ((props.limitError && !props.limit) ? (React.createElement(View, { testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301', style: [Styles.limitErrorPanel, Styles.reverseDirection] }, props.limitOldError && props.limitError && props.limitError.code === TIMEOUT_STRING_CODE && React.createElement(View, { style: Styles.LimitsValueView, testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' },
                                React.createElement(NavigationIconButton, { testID: 'test-id-583f7639-def2-363e-5fd3-9c5be85de38d', type: NavigationIconButtonType.REFRESH, onExecute: () => {
                                        props.callGetLimitNew(true);
                                    } })))) : props.currentCustomer.isNSL ? null : (props.limitOldFetching ? (React.createElement(View, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c47', style: Styles.loaderWrapper },
                                React.createElement(View, { testID: 'test-id-scaleView', style: Styles.scale },
                                    React.createElement(Loader, { testID: 'test-id-63051fda-4bd0-8c99-7f5e-c13d2e445c42' })))) :
                                (props.limitOldError ?
                                    React.createElement(View, { testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301', style: [Styles.limitErrorPanel, Styles.reverseDirection] }, !props.limitOldFetching && props.limitOldError && props.limitOldError.code === TIMEOUT_STRING_CODE && React.createElement(View, { style: Styles.LimitsValueView, testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' },
                                        React.createElement(NavigationIconButton, { testID: 'test-id-583f7639-def2-363e-5fd3-9c5be85de38d', type: NavigationIconButtonType.REFRESH, onExecute: () => {
                                                props.callGetLimitOld(true);
                                            } }))) :
                                    React.createElement(View, { testID: 'test-id-eb663904-314a-3b04-6114-481557adedb5', style: Styles.FlexDirectionRow },
                                        React.createElement(View, { style: Styles.LimitsValueView },
                                            React.createElement(Text, { testID: 'test-id-c06f2999-9e37-e344-d29a-dc3237bae613', numberOfLines: 1, style: Styles.LimitsValueText }, totalAmount(props) == null ?
                                                Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA) :
                                                Utils.format.sum(totalAmount(props), 2, props.limit.currency, NO_DATA_PLACEHOLDER))),
                                        totalAmount(props) != null ?
                                            React.createElement(View, { style: Styles.LimitsButton },
                                                React.createElement(PopoverTarget, { testID: 'test-id-399b9ea1-d619-9d51-0439-04c71289e735', refName: 'limitsPopover' },
                                                    React.createElement(View, { testID: 'test-id-82d771d9-406f-2b27-25a7-2e46807362b5', style: Styles.LimitsButtonInner },
                                                        React.createElement(Button, { testID: 'test-id-b6a14356-a5c5-8322-4305-e5cac3b26975', onExecute: props.performLimitShow },
                                                            React.createElement(Icon, { testID: 'test-id-ba728018-92f0-7e5d-8ffa-da0774175d26', disabled: true, type: IconType.MrmLink })))),
                                                React.createElement(Popover, { testID: 'test-id-06913fa2-1f06-1045-e1d5-f5ecd5895831', target: PopoverTarget.getRef('limitsPopover'), opened: props.isVisiblePopoverLimit, onOutsideTap: props.performPopoverLimitHide, type: PopoverType.WIDE, style: { height: 300, width: 375 }, position: [PopoverPosition.LEFT] }, renderLimitPopover(props)))
                                            : React.createElement(View, { style: Styles.LimitsButton }))))))))),
                React.createElement(Row, { testID: 'test-id-a1ab544d-f560-f448-9639-9ceb0494fb41' },
                    React.createElement(Col, { testID: 'test-id-3161cf19-b328-da91-7965-1c2a272f48c5', xs: 12 },
                        React.createElement(View, { testID: 'test-id-3161cf19-b328-da91-7965-1c2a272f48c5', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-472de13b-ed64-ac99-e2fb-8ac28c5da8a1' },
                    React.createElement(Col, { testID: 'test-id-ce86cc3f-fc6a-2543-ce13-4140ec63d798', xs: 12 },
                        React.createElement(View, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-0a8edb0d-233c-7bb1-c932-50e9134cfdae', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.flex },
                                    React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: "ГСЗ", block: false, header: 'q' },
                                        React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.customerManaged.gsz &&
                                            props.customerManaged.gsz.name &&
                                            props.customerManaged.gsz.name != '' ?
                                            props.customerManaged.gsz.name :
                                            NO_DATA_PLACEHOLDER))),
                                props.customerManaged.gsz && props.customerManaged.gsz.id != '' ?
                                    React.createElement(Button, { testID: 'test-id-bedd4d5e-392d-455d-8f38-bdbf7eea0cec', onExecute: props.performGszOpen },
                                        React.createElement(Icon, { testID: 'test-id-9e7ffb67-7934-4925-8a8c-486901fc5525', type: IconType.MrmInfo })) :
                                    null)))),
                React.createElement(Row, { testID: 'test-id-f7b7e09f-430c-cbd6-4c57-56f0af5de050' },
                    React.createElement(Col, { testID: 'test-id-a6810da3-368d-e38b-a8fe-9603673649e6', xs: 12 },
                        React.createElement(View, { testID: 'test-id-a6810da3-368d-e38b-a8fe-9603673649e6', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-9524cd52-0409-20c0-bbc5-c83e078a777f' },
                    React.createElement(Col, { testID: 'test-id-f4883f17-2f8d-92f0-1695-89c9b358e8a3', xs: 12 },
                        React.createElement(View, { testID: 'test-id-5053f408-00bc-03c8-fbca-8b06fde1c618', style: Styles.CollWrapperNoPadding },
                            React.createElement(View, { testID: 'test-id-0aef06e1-9ac3-471a-2a5e-e366c5eb1287', style: Styles.InlineWrapper },
                                React.createElement(View, { testID: 'test-id-23661d05-9fc4-56a4-4772-351ca7ec2eae', style: [Styles.flex, Styles.paddingRight] },
                                    React.createElement(Label, { testID: 'test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0', text: 'Фактический адрес', block: false, header: '' },
                                        React.createElement(Text, { testID: 'test-id-4461dd1c-288c-1daa-1ff1-8ba5f1ebd205', style: Styles.GreyLabelValue }, Utils.addressFormatFull(props.customerManaged.address)))))))),
                React.createElement(Row, { testID: 'test-id-9e7f9890-1d0b-9fd4-e812-ca9e5c1a7ce0' },
                    React.createElement(Col, { testID: 'test-id-5c3d5b3f-cb85-2218-7705-b009acf6eddb', xs: 12 },
                        React.createElement(View, { testID: 'test-id-5c3d5b3f-cb85-2218-7705-b009acf6eddb', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-1630fe8a-9940-0248-52f5-08ec79589e06' },
                    React.createElement(Col, { testID: 'test-id-edf38ec1-73bd-e280-5056-482e6c45faa8', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc1', style: [Styles.StyleForOneLineCell, Styles.FixHeightRow], underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc2' },
                                React.createElement(TableRow, { testID: 'test-id-98ec8265-bb37-e638-6554-c2367cd4f0fe', onClick: props.navigateToAgentListScreen || (() => { }) },
                                    React.createElement(TableCell, { testID: 'test-id-97d95344-7f6a-f16c-6d5b-cd395eac42bf', style: Styles.TableCell },
                                        React.createElement(View, { testID: 'test-id-8542f10b-b6b0-8059-069f-6d650e4b8d2e', style: [Styles.InlineWrapper, Styles.FixHeightRow] },
                                            React.createElement(View, { testID: 'test-id-e3a2e0ec-22c3-606d-25c8-ae07f3a91d7d', style: Styles.flex03 },
                                                React.createElement(Text, { testID: 'test-id-8166e42c-3946-6233-b946-0f5775c8e49e', style: Styles.InlineTitle, numberOfLines: 1 }, 'Представители'),
                                                agentListError &&
                                                    !agentListFetching &&
                                                    React.createElement(Text, { style: Styles.AgentErrorText, testID: 'test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0' }, Utils.getProductListItemErrorText(null))),
                                            agentListFetching &&
                                                React.createElement(View, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c47', style: Styles.loaderWrapper },
                                                    React.createElement(View, { testID: 'test-id-scaleView', style: Styles.scale },
                                                        React.createElement(Loader, { testID: 'test-id-63051fde-4bd0-8c99-7f5e-c13d2e445c42' }))),
                                            !agentListError &&
                                                !agentListFetching &&
                                                React.createElement(View, { testID: 'test-id-d2f7a61d-9589-af02-c053-0e5037d4126c1', style: [Styles.InlineRight, Styles.FixHeightRow] },
                                                    React.createElement(View, { testID: 'test-id-9b0725bc-3b1a-2a5a-4c93-f572bcbecb4a', style: [Styles.InlineRight, Styles.FixHeightRow] },
                                                        React.createElement(Text, { testID: 'test-id-e373f609-5de9-db74-2cca-11b058d33fe9', style: Styles.InlineValue, numberOfLines: 1 }, agentListLine(props.agentList, props.currentCustomerManaged))),
                                                    props.navigateToAgentListScreen ?
                                                        React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: props.navigateToAgentListScreen },
                                                            React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', type: IconType.MrmLink, disabled: true })) :
                                                        React.createElement(View, { testID: 'test-id-b3af3226-53ce-44ac-8ec0-841cf294e17d', style: Styles.EmptyView })),
                                            agentListError &&
                                                !agentListFetching &&
                                                React.createElement(View, { testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301', style: [Styles.AgentErrorPanel, Styles.flexSm] }, agentListError &&
                                                    React.createElement(View, { style: Styles.AgentsValueView, testID: 'test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' },
                                                        React.createElement(NavigationIconButton, { testID: 'test-id-583f7639-def2-363e-5fd3-9c5be85de38d', type: NavigationIconButtonType.REFRESH, onExecute: () => {
                                                                props.callGetAgentList(props.currentCustomerManaged.id);
                                                            } })))))))))),
                React.createElement(Row, { testID: 'test-id-d0a0dce8-f697-aff1-1aca-ce5bcb4e8ff3' },
                    React.createElement(Col, { testID: 'test-id-85fb93c0-cd09-1d3b-ee7c-d4f5ceaf2e55', xs: 12 },
                        React.createElement(View, { testID: 'test-id-85fb93c0-cd09-1d3b-ee7c-d4f5ceaf2e55', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-2511a8b2-c8ff-8738-dc13-9387c8de06e5' },
                    React.createElement(Col, { testID: 'test-id-9091f1b8-da1e-c5bf-3e56-028c8959d90e', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc7', style: Styles.StyleForOneLineCell, underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc8' },
                                React.createElement(OneLineCell, { data: {
                                        label: 'Команда клиента',
                                        value: memberListLine(props.currentCustomerManaged)
                                    }, onClick: props.navigateToMemberListScreen, flex: Styles.flex04 }))))),
                React.createElement(Row, { testID: 'test-id-8404b404-5968-046d-1603-709b0d44b9b2' },
                    React.createElement(Col, { testID: 'test-id-444f0ed0-5abe-a5e5-356d-748c2f853a40', xs: 12 },
                        React.createElement(View, { testID: 'test-id-444f0ed0-5abe-a5e5-356d-748c2f853a40', style: Styles.HorisontalLine }))),
                React.createElement(Row, { testID: 'test-id-a0e90313-648b-3a7f-8621-b526f55e0903' },
                    React.createElement(Col, { testID: 'test-id-993cd435-722d-7e2a-83ca-eca52fc34f5e', xs: 12 },
                        React.createElement(Table, { testID: 'test-id-3912d10c-2022-79d1-0aeb-9ecc4', style: Styles.StyleForOneLineCell, underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-71b8972a-dc2c-3a8f-1c67-fadcee1e6cc4' },
                                React.createElement(OneLineCell, { data: {
                                        label: 'Важные даты',
                                        value: getDatesCount(props)
                                    }, onClick: props.navigateToOccasionListScreen, flex: Styles.flex03 }))))),
                React.createElement(Row, { testID: 'test-id-aec95d92-5754-3813-d23b-9ba066807f6b' },
                    React.createElement(Col, { testID: 'test-id-8c62d45c-d152-5a3b-e4f1-a7c044563fbe', xs: 12 },
                        React.createElement(View, { testID: 'test-id-8c62d45c-d152-5a3b-e4f1-a7c044563fbe', style: Styles.HorisontalLine }))))),
        props.customerManaged.affiliateList && props.customerManaged.affiliateList.data && props.customerManaged.affiliateList.data.length > 0 ?
            React.createElement(View, { testID: 'test-id-1e49e7e9-67cd-2646-7f8e-1dbb143580d5' },
                React.createElement(View, { testID: 'test-id-c8abd293-cbee-d09f-2947-a6b96b58678c', style: [Styles.CollWrapperNoPadding, Styles.RowLeftPadding] },
                    React.createElement(View, { testID: 'test-id-8dafb5ff-3d95-d8dd-82ab-8cd5ba9097ea', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-217ded3a-466d-7403-03f5-42e5f7a50ac2', style: Styles.flex },
                            React.createElement(Text, { testID: 'test-id-7d3484fe-6634-fc6f-eb4e-f9b817e35589', style: Styles.affiliateSectionHeader }, 'Дочерние организации')))),
                React.createElement(Table, { testID: 'test-id-b68a54c3-022b-4b80-aa6b-78c41e8e0af2' },
                    React.createElement(TableBody, { testID: 'test-id-90a1236f-a870-3467-151a-cbb91f16d90b' }, props.customerManaged.affiliateList.data.map((item) => customerRow(item, props)))))
            : null));
};
const totalAmount = (props) => {
    if (props.currentCustomerManaged.isNSL) {
        return props.limit.total && props.limit.total.amount ? props.limit.total.amount : null;
    }
    return props.limitOld.amount && props.limitOld.amount.amount ? props.limitOld.amount.amount : null;
};
const getDataGrid = (props) => {
    if (props.customerManaged.organizationType && props.customerManaged.organizationType.code == 'Holding') {
        return getHoldingDataGrid(props);
    }
    return getNotHoldingDataGrid(props);
};
const RenderSumRow = (value, currency, title = null, valueStyle = Styles.LimitAmount, props = null, index = Enums.OldLimitItem.Approved) => {
    const isNavigationEnabled = !(value == null || value == undefined || isNaN(value)) && props;
    const navigate = (isNavigationEnabled && props) ? () => props.navigateToPopoverLimitItemScreen(index) : () => {
    };
    return (React.createElement(TableRow, { testID: 'test-id-cc446691-30bd-ad28-303d-8e813d45a5e2', onClick: navigate },
        React.createElement(TableCell, { testID: 'test-id-7452cf73-9847-a157-58cb-3796f2d6bf60' },
            React.createElement(View, { testID: 'test-id-2cb693cd-445d-2c62-b562-67f987ee06bf', style: Styles.LimitRow },
                React.createElement(View, { testID: 'test-id-f73b084f-9493-ddbb-a2c6-a0099d3956d5', style: Styles.LimitValue },
                    React.createElement(Text, { testID: 'test-id-59f56469-0e3f-47db-a6f7-befc33a2d0cd', style: Styles.LimitTitle }, title),
                    (value == null || value == undefined || isNaN(value)) ?
                        React.createElement(Text, { testID: 'test-id-b0b46d50-51a6-547b-36dc-5c357fd64371', style: valueStyle }, NO_DATA_PLACEHOLDER)
                        :
                            React.createElement(SumText, { testID: 'test-id-e8ccba46-218b-e379-46e1-b1e029928e3c', value: value, currency: currency && currency.code })),
                isNavigationEnabled ? React.createElement(Icon, { testID: 'test-id-1ff7db13-97ed-7e45-5324-68e58b473195', disabled: true, type: IconType.MrmLink }) : null))));
};
const renderLimitRows = (props) => {
    const limit = props.limitOld;
    return (React.createElement(Table, { testID: 'test-id-d028c4f6-13f0-d07f-54a6-1d723ba39df6', key: `Limit rows` },
        React.createElement(TableBody, { testID: 'test-id-2acc8328-1f7e-ccf8-04f3-1e33b65df472' },
            RenderSumRow(limit.amountApproved.amount, limit.currency, 'Утвержденное значение совокупного лимита', Styles.LimitAmountHighlited, props, Enums.OldLimitItem.Approved),
            RenderSumRow(limit.amount.amount, limit.currency, 'Расчетное значение совокупного лимита', Styles.LimitAmountHighlited, props, Enums.OldLimitItem.Main),
            RenderSumRow(limit.amountPredicted.amount, limit.currency, 'Прогнозное использование совокупного лимита', null, props, Enums.OldLimitItem.Predicted),
            RenderSumRow(limit.amountUnused.amount, limit.currency, 'Неиспользованный совокупный лимит', null, props, Enums.OldLimitItem.Unused))));
};
const detectLimitValues = (limit, selected) => {
    switch (selected) {
        case Enums.OldLimitItem.Unused:
            return { limit: limit.amountUnused, title: 'Неиспользованный совокупный лимит' };
        case Enums.OldLimitItem.Approved:
            return { limit: limit.amountApproved, title: 'Утвержденное значение совокупного лимита' };
        case Enums.OldLimitItem.Predicted:
            return { limit: limit.amountPredicted, title: 'Прогнозное использование совокупного лимита' };
        default:
            return { limit: limit.amount, title: 'Расчетное значение совокупного лимита' };
    }
};
const renderLimitDetails = (props) => {
    const limit = props.limitOld;
    const values = detectLimitValues(limit, props.currentPopoverLimitItem);
    return (React.createElement(Table, { testID: 'test-id-252b9524-608e-4ba0-2c01-7dd8b32d7d83', key: `Limit rows` },
        React.createElement(TableBody, { testID: 'test-id-6320b67d-d2b1-9f08-2059-97f6b48a8cca' },
            RenderSumRow(values.limit.amount, limit.currency, values.title),
            RenderSumRow(values.limit.structured, limit.currency, 'В т.ч. структурированный лимит'),
            RenderSumRow(values.limit.unified, limit.currency, 'В т.ч. унифицированный лимит'))));
};
const renderLimitPopover = (props) => {
    return (React.createElement(SplitPanel, { testID: 'test-id-b67e75c5-4600-091d-a024-616eb3422617', id: Utils.getNavigationString(Enums.Navigation.AppCRMLimitOld) },
        React.createElement(ContentPanel, { testID: 'test-id-f0634aca-17b7-01e2-57c2-0902ca8c422e', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-83d7d00b-b92d-709a-23a8-361d1685e87f', scrollEnabled: true, content: renderLimitRows(props) },
                React.createElement(CenterPageHeader, { testID: 'test-id-c8356437-19e6-5a68-ea64-ee12974b0814' },
                    React.createElement(H2, { testID: 'test-id-c8356437-19e6-5a68-ea64-ee12974b0814' }, "\u041B\u0438\u043C\u0438\u0442\u044B \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443")),
                React.createElement(RightPageHeader, { testID: 'test-id-d69c57fd-08ff-ecc1-5e6c-74135f1427ae' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-06fbfc84-db1f-eb08-abb3-78c5dc00b502', title: 'Готово', onExecute: props.performPopoverLimitHide }))),
            React.createElement(Page, { testID: 'test-id-ff5ee3fa-4c8f-a442-1296-cfb1bf815332', scrollEnabled: true, content: renderLimitDetails(props) },
                React.createElement(CenterPageHeader, { testID: 'test-id-47933d19-fc9a-cdac-a461-ddb6eab31837' },
                    React.createElement(H2, { testID: 'test-id-47933d19-fc9a-cdac-a461-ddb6eab31837' }, "\u0421\u043E\u0441\u0442\u0430\u0432 \u043B\u0438\u043C\u0438\u0442\u0430")),
                React.createElement(RightPageHeader, { testID: 'test-id-49369d76-e2c7-0aa7-89ca-0472e336f0ff' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-6c38604b-adca-3529-fa20-933d927c3116', title: 'Готово', onExecute: props.performPopoverLimitHide })),
                React.createElement(LeftPageHeader, { testID: 'test-id-5f053bf8-63f6-3a87-4afd-288c2ec80406' },
                    React.createElement(NavigationBackButton, { testID: 'test-id-7eb3a4e8-6586-56e7-1ef2-9036c3bd882b', title: false, onClick: props.navigatePopoverLimitBack }))))));
};
const getModals = (props) => {
    return (React.createElement(View, { testID: 'test-id-79b290c2-1171-1b31-b118-d15bb7bad717' },
        React.createElement(Modal, { animationType: 'slide', visible: props.isVisibleModalCustomerEditor, transparent: true, supportedOrientations: ['landscape'], onOrientationChange: () => {
            } },
            React.createElement(View, { testID: 'test-id-bfc087ca-9f6c-5182-216f-7036c24516ed', style: Styles.modalBackground }),
            React.createElement(View, { testID: 'test-id-a7c2aef7-52c4-7636-0942-037c1056e823', style: Styles.modalForegroundFullScreen },
                React.createElement(ContainerCustomerEditor, { testID: 'test-id-e6f9e6de-aaf4-9de5-a348-e310aa97abcf' }))),
        React.createElement(Modal, { animationType: 'slide', visible: props.isVisibleModalAssociateSearch, transparent: true, supportedOrientations: ['landscape'], onOrientationChange: () => {
            } },
            React.createElement(View, { testID: 'test-id-8263aaa6-6477-b51f-489a-5af4543d5718', style: Styles.modalBackground }),
            React.createElement(View, { testID: 'test-id-9431b450-a608-ad77-1b8a-4d9699cb3721', style: Styles.modalForeground },
                React.createElement(Text, { testID: 'test-id-9431b450-a608-ad77-1b8a-4d9699cb3721i' }, 'isVisibleModalAssociateSearch'),
                React.createElement(Button, { testID: 'test-id-b17d3e88-c56f-04d4-281c-deac3f39a440', onExecute: () => {
                    } },
                    React.createElement(Icon, { testID: 'test-id-10689443-edc6-6b82-434d-e2abbd3eadbc', type: IconType.MrmLink }))))));
};
const customerRow = (item, props) => {
    return (React.createElement(TableRow, { testID: 'test-id-025a11b6-302a-1961-a53d-0ecbaa540245', key: item.id, onClick: () => {
            props.performCustomerOpen(item.id, Enums.CustomerMode.SameType);
        } },
        React.createElement(TableCell, { testID: 'test-id-100591ea-5455-eb96-a5d5-17b0d785cf34' },
            React.createElement(View, { testID: 'test-id-6031f8ca-f53d-9837-5a0a-caa8c241aefb', style: Styles.SearchResultRowWrapper },
                React.createElement(View, { testID: 'test-id-74365e98-5412-1314-1a94-476d17e1d724', style: [Styles.flex, Styles.RowLeftPadding] },
                    React.createElement(View, { testID: 'test-id-a1a3de02-de7d-cab3-32a4-fddef30e3e04', style: Styles.TopRow },
                        item.role.value ?
                            React.createElement(View, { testID: 'test-id-66093ca9-d585-02a0-9a78-8d0d75eefd1b', style: Styles.OrangeLabel },
                                React.createElement(Text, { testID: 'test-id-13ec613a-77ce-8a4e-3c09-88b4711fd615', style: Styles.OrangeLabelText }, Utils.getRoleString(item.role.value)))
                            : null,
                        React.createElement(Text, { testID: 'test-id-950b37d2-221b-1f32-740c-5575f93c5dcc', style: Styles.OrgType }, item.organizationType.value)),
                    React.createElement(View, { testID: 'test-id-c6311313-dfb1-985b-ac4d-fef97088d327' },
                        React.createElement(Text, { testID: 'test-id-8931efc7-482a-62c2-e263-5e95f0727684', style: Styles.Name }, item.name || item.shortName))),
                React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e' },
                    React.createElement(Icon, { testID: 'test-id-23394986-a2cb-d9d3-75a7-52199098a6b2', disabled: true, type: IconType.MrmLink }))))));
};
const getDatesCount = (props) => {
    if (!props.customerManaged.occasionList) {
        return 'error';
    }
    return String(props.customerManaged.occasionList.data.length);
};
const CustomerManagedTabMain = (props) => {
    // есть ли возможность редактировать КК
    const isClientCardEditable = Utils.getClientCardEditableStatus(props.currentCustomerManaged.status);
    return (React.createElement(View, { style: Styles.main, testID: 'test-id-component-CustomerManagedTabMain' },
        isClientCardEditable ? getEditRow(props) : null,
        React.createElement(Page, { testID: 'test-id-2dd10b26-1b2e-7d36-ebcc-dd31e12f5b1d', scrollEnabled: true, content: getDataGrid(props) }),
        getModals(props)));
};
export default CustomerManagedTabMain;
//# sourceMappingURL=CustomerManagedTabMain.js.map