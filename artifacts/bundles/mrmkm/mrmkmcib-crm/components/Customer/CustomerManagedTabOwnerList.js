/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { Button, ContentPanel, Icon, IconType, Page, Popover, PopoverPosition, PopoverType, SplitPanel, Text, View, } from 'ufs-mobile-platform';
import { defaultValues } from "../../models/Models";
import { Enums } from '../../Enums';
import Styles from './styles/CustomerManagedTabOwnerListStyles';
import * as Utils from "../../common/Util";
import moment from 'moment';
import PopoverTarget from '../../modules/PopoverTarget';
import ContainerAgent from '../../containers/ContainerAgent';
const getRefName = (owner) => {
    switch (owner.ownerType) {
        case Enums.OwnerType.Shareholder:
            return 'ownerRef_shareholder_' + owner.organizationId;
        case Enums.OwnerType.Beneficiary:
            return 'ownerRef_beneficiary_' + owner.contactId;
        case Enums.OwnerType.Unknown:
            return 'ownerRef_unknown';
        default:
            return 'no_ref_name';
    }
};
const customerOwnerRow = (customerOwner, key, props) => {
    return (React.createElement(View, { testID: 'test-id-65d77cf1-98d3-b72a-1061-d7fb613eff90', style: Styles.listRowContainer, key: key },
        React.createElement(View, { testID: 'test-id-250b111d-20c6-c582-e99e-ddf6a0b29cca', style: Styles.listLeftTablePart },
            React.createElement(View, { testID: 'test-id-42c08adb-01f8-ffcb-49eb-a840c2b30609' },
                React.createElement(Text, { testID: 'test-id-0a23e562-f855-bcc0-9643-139112119040', style: Styles.listRowTitleText }, customerOwner.name.trim())),
            React.createElement(View, { testID: 'test-id-d1a66acc-11e6-8705-43ad-d810d1df7488' },
                React.createElement(Text, { testID: 'test-id-d0984ec6-47f9-92dd-454a-8d50f21967e9', style: Styles.listRowTitleDescription }, customerOwner.ownerType === Enums.OwnerType.Shareholder ? 'Юридическое лицо' : 'Физическое лицо'))),
        React.createElement(View, { testID: 'test-id-671f2912-e006-5935-9760-18801bad6c53', style: Styles.listRightTablePart },
            React.createElement(View, { testID: 'test-id-0b642225-205f-e7b2-5a33-06cc0b200fe2', style: Styles.percentContainer },
                React.createElement(Text, { testID: 'test-id-82f627e9-25de-99b3-2e7d-51cbe05e6aec', style: Styles.listPercentText }, customerOwner.percent ? customerOwner.percent + '%' : 'Нет данных')),
            React.createElement(View, { testID: 'test-id-505e72f2-0380-eb45-7ccf-f35c66f013a7', style: Styles.listDownIconContainer },
                React.createElement(PopoverTarget, { testID: 'test-id-e519a484-a0f8-7bc3-c530-07af2a2ed464', refName: getRefName(customerOwner) || '' },
                    React.createElement(View, { testID: 'test-id-b31e4158-c1d9-4b1a-5b5f-962025aef0ae', style: Styles.rotateRowIcon },
                        React.createElement(Button, { testID: 'test-id-46216259-fefa-41db-94ed-60a6c1087d72', onExecute: () => {
                                props.performPopoverOwnerShow(customerOwner);
                            } },
                            React.createElement(Icon, { testID: 'test-id-a70c9620-9bf2-d548-0fde-98017ca32004', type: IconType.MrmLink }))))))));
};
const ShowOwnersList = (ownerList, props) => {
    let ownerRender = [];
    let shareholderList = ownerList.filter((owner) => owner.ownerType === Enums.OwnerType.Shareholder).sort((a, b) => b.percent - a.percent);
    if (shareholderList.length) {
        ownerRender.push(React.createElement(View, { testID: 'test-id-fd417dd9-4f52-4ce2-a511-d4e9dde6bf33', style: Styles.ListTitleContainer, key: 'shareHoldersTitleKey' },
            React.createElement(Text, { testID: 'test-id-80ce7116-a469-6af0-dd0d-a07cd44fe2ed', style: Styles.ListTitleText }, 'Акционеры')));
        let counter = 1;
        for (let shareHolder of shareholderList) {
            ownerRender.push(customerOwnerRow(shareHolder, 'shareHolderContainer' + counter++, props));
        }
    }
    let beneficiarsList = ownerList.filter((owner) => owner.ownerType === Enums.OwnerType.Beneficiary).sort((a, b) => b.percent - a.percent);
    if (beneficiarsList.length) {
        ownerRender.push(React.createElement(View, { testID: 'test-id-bbdcad35-47bd-3453-a988-0ddf1e505c4e', style: Styles.ListTitleContainer, key: 'beneficiarTitleKey' },
            React.createElement(Text, { testID: 'test-id-963de012-9a9e-150e-50ce-3367060e117e', style: Styles.ListTitleText }, 'Бенефициары')));
        let counter = 1;
        for (let beneficiar of beneficiarsList) {
            ownerRender.push(customerOwnerRow(beneficiar, 'beneficiarContainer' + counter++, props));
        }
    }
    if (!ownerRender.length) {
        ownerRender.push(React.createElement(View, { testID: 'test-id-0bd21be8-8ea1-54c7-4d76-2a99d893cad0', key: 'notFoundOwnersKey', style: Styles.notFoundOwnersContainer },
            React.createElement(Text, { testID: 'test-id-0bd21be8-8ea1-54c7-4d76-2a99d893cad0' }, 'Нет данных по владельцам')));
    }
    return (React.createElement(View, { testID: 'test-id-12baefeb-5c42-dd93-8ed7-810b8a962b0d', style: Styles.ownerContainer },
        ownerRender,
        React.createElement(Popover, { testID: 'test-id-f88427dd-5349-e1a7-b633-a4cdd034fae8', target: PopoverTarget.getRef(getRefName(props.currentOwner)), opened: props.isVisiblePopoverOwner, onOutsideTap: props.performPopoverOwnerHide, type: PopoverType.WIDE, style: { height: 400 }, position: [PopoverPosition.LEFT] }, props.currentOwner ? getOwnerViewSplitPanel(props) : null)));
};
const getOwnerTypeValue = (ownerType) => {
    switch (ownerType) {
        case Enums.OwnerType.Shareholder:
            return "Юридическое лицо";
        case Enums.OwnerType.Beneficiary:
            return "Физическое лицо";
        default:
            return "Неизвестный владелец";
    }
};
const getEmployeeDetailContentView = (owner, props) => {
    return (React.createElement(View, { testID: 'test-id-9920b76a-2e32-833f-15b9-82984a71e6cc', style: Styles.PopupContainer },
        owner.organizationId &&
            React.createElement(View, { testID: 'test-id-852ce172-9cf5-8399-79dd-131428fc1789', style: Styles.popupIconContainer },
                React.createElement(Button, { testID: 'test-id-82167f7f-8333-4362-b89b-78b2d5538a30', onExecute: () => {
                        props.performNavigateToOwnerScreen(owner, Enums.CustomerMode.SameType);
                    } },
                    React.createElement(Icon, { testID: 'test-id-58735e4d-8900-4ebd-8f3c-6a123581985a', type: IconType.MrmInfo }))),
        owner.contactId &&
            React.createElement(View, { testID: 'test-id-dbc58a2c-49ec-147f-56ad-ab887ba74a8a', style: Styles.popupIconContainer },
                React.createElement(Button, { testID: 'test-id-8a38a2a8-9b7c-4e81-95b3-66845f8b7a07', onExecute: () => {
                        props.navigateToOwnerAgentScreen(Object.assign({}, defaultValues.Agent, { id: owner.contactId }), Enums.AgentContextMode.OwnerAgent);
                    } },
                    React.createElement(Icon, { testID: 'test-id-0e3520b6-0923-4587-b4c5-8e0c75714a81', type: IconType.MrmInfo }))),
        React.createElement(View, { testID: 'test-id-a54ecf17-5de3-ef99-e4bd-8fa97dcbfbae', style: Styles.PopupHeaderContainer },
            React.createElement(Text, { testID: 'test-id-d29987f0-1eca-bb69-f5a9-a66aeabe5c30', style: Styles.listRowTitleText }, owner.name),
            React.createElement(Text, { testID: 'test-id-4c30d859-4738-ff17-1c40-e8260c7282b5', style: Styles.listRowTitleDescription }, getOwnerTypeValue(owner.ownerType))),
        React.createElement(View, { testID: 'test-id-4d94ed02-0db7-69b7-e14c-7d71732fc86d', style: Styles.popupDataContainer },
            owner.inn &&
                React.createElement(View, { testID: 'test-id-8bbec165-8991-b477-2c14-7e82a260fbbe', style: Styles.popupDataRowContainer },
                    React.createElement(View, { testID: 'test-id-ba6ddea4-7607-f737-de4c-5f064fb20b0d', style: Styles.popupDataLeftPartContainer },
                        React.createElement(Text, { testID: 'test-id-44b69072-9e59-a48b-1ac2-538d82a058ea', style: Styles.popupDataBigTextGrey }, 'ИНН')),
                    React.createElement(View, { testID: 'test-id-8b588fc3-6ce1-be99-eb25-060d3c089b87', style: Styles.popupDataRightContainer },
                        React.createElement(Text, { testID: 'test-id-c93321f0-5a1c-4ac4-1abf-698aa533a2be', style: Styles.popupDataTextBlack }, owner.inn))),
            owner.kpp &&
                React.createElement(View, { testID: 'test-id-de29bd81-7e4b-1f99-de49-304a001420c4', style: Styles.popupDataRowContainer },
                    React.createElement(View, { testID: 'test-id-47dff978-636c-580f-50dd-a1164f530911', style: Styles.popupDataLeftPartContainer },
                        React.createElement(Text, { testID: 'test-id-b57698f7-aa92-7e61-2751-6f9bb7ac18d5', style: Styles.popupDataBigTextGrey }, 'КПП')),
                    React.createElement(View, { testID: 'test-id-ed2871ae-e215-91d2-1055-f470a30240f2', style: Styles.popupDataRightContainer },
                        React.createElement(Text, { testID: 'test-id-cff23d16-9d56-e00a-0cda-6a6e4c94762e', style: Styles.popupDataTextBlack }, owner.kpp))),
            owner.ownerType == Enums.OwnerType.Beneficiary &&
                React.createElement(View, { testID: 'test-id-796f00d1-33d0-6a2c-ec69-561101a5c2eb', style: Styles.popupDataRowContainer },
                    React.createElement(View, { testID: 'test-id-782249a9-ef6f-807c-4623-bf5d7abfba90', style: Styles.popupDataLeftPartContainer },
                        React.createElement(Text, { testID: 'test-id-ae543c0a-3b5e-75b6-5c61-51e6bbbff723', style: Styles.popupDataBigTextGrey }, 'День рождения')),
                    React.createElement(View, { testID: 'test-id-5aa6eab7-087e-fad5-acff-e3473a6bf980', style: Styles.popupDataRightContainer },
                        React.createElement(Text, { testID: 'test-id-49f12430-8809-2137-7c13-7ea135b9a797', style: Styles.popupDataTextBlack }, owner.birthdayDate ? moment(owner.birthdayDate).format('MM.DD.YYYY') : 'Нет данных'))),
            owner.ownerType == Enums.OwnerType.Shareholder && owner.registrationInfo &&
                React.createElement(View, { testID: 'test-id-7a44ada5-f235-e1b4-9208-3158a10a9413', style: Styles.popupDataColumnContainer },
                    React.createElement(Text, { testID: 'test-id-a53d7931-0411-4046-5c24-65d742a44be5', style: Styles.listRowTitleDescription }, 'Дата и номер регистрации, рег. орган'),
                    React.createElement(Text, { testID: 'test-id-e7657a8d-d998-cf48-7b8a-b15c5dc42b24', style: Styles.popupDataTextBlack }, owner.registrationInfo)),
            owner.ownerType == Enums.OwnerType.Shareholder && owner.address &&
                React.createElement(View, { testID: 'test-id-60ee0222-7a0f-d145-d288-8b33d70a0d1e', style: Styles.popupDataColumnContainer },
                    React.createElement(Text, { testID: 'test-id-495ff0e1-69e3-20c6-99c3-b029cd4027da', style: Styles.listRowTitleDescription }, 'Фактический адрес'),
                    React.createElement(Text, { testID: 'test-id-41b3e956-a2e7-f14e-65f7-8bc05eab60a4', style: Styles.popupDataTextBlack }, owner.address)),
            React.createElement(View, { testID: 'test-id-0318a5f8-e13b-9c92-657f-69c3245d55ce', style: Styles.popupDataRowContainer },
                React.createElement(View, { testID: 'test-id-ea1365e5-fcb4-3480-4dd5-35bed0ee4e1e', style: Styles.popupDataLeftPartContainer },
                    React.createElement(Text, { testID: 'test-id-209a7c5b-d6bf-ac91-1fc8-e7a823e3377b', style: Styles.popupDataBigTextGrey }, 'Доля')),
                React.createElement(View, { testID: 'test-id-74512994-69d6-cb50-5827-6ee7ec14db1a', style: Styles.popupDataRightContainer },
                    React.createElement(Text, { testID: 'test-id-561ff639-a98c-6545-c642-5693fffe9571', style: Styles.popupDataTextBlack }, owner.percent ? owner.percent + '%' : 'Нет данных'))))));
};
const getOwnerViewSplitPanel = (props) => {
    return (React.createElement(SplitPanel, { testID: 'test-id-ee7ad6c0-ee95-f542-9dd7-3ddcb481ed13', id: Utils.getNavigationPopoverCustomerString(Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList) },
        React.createElement(ContentPanel, { testID: 'test-id-bcfb6ecd-4774-432a-f964-fc03daa0843b', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-79354afb-351b-1cce-760b-9530aa8b7326', scrollEnabled: false, content: getEmployeeDetailContentView(props.currentOwner, props) }),
            React.createElement(Page, { testID: 'test-id-cb38d869-2727-021f-b692-d5606eed3080', scrollEnabled: true, content: React.createElement(ContainerAgent, { testID: 'test-id-cb38d869-2727-021f-b692-d5606eed3080' }) }))));
};
const CustomerManagedTabOwnerList = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-CustomerManagedTabOwnerList' },
    React.createElement(Page, { testID: 'test-id-6b9bae89-47a6-3632-897b-e5bad8bd53bd', scrollEnabled: true, content: ShowOwnersList(props.currentCustomerManaged.ownerList, props) })));
export default CustomerManagedTabOwnerList;
//# sourceMappingURL=CustomerManagedTabOwnerList.js.map