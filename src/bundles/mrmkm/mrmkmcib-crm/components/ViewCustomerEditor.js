/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewCustomerEditorStyles';
import { AccessoryPanel, Breadcrumbs, CenterPageHeader, Col, ContentPanel, Grid, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, Panel, Button, ButtonType, NavigationTextButton, Page, RadioButton, Loader, RadioGroup, RightPageHeader, PanelType, Row, SplitPanel, Table, TableBody, TableCell, TableRow, Text, TextInput, View, } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import * as Utils from "../common/Util";
import ContainerCustomerActivityInclude from '../containers/ContainerCustomerActivityInclude';
import ContainerCustomerActivityExclude from '../containers/ContainerCustomerActivityExclude';
const getEditContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-1a2d3e79-3345-9088-353f-d64eb7dff787', style: { flex: 1 } },
        getBreadCrumbs(props),
        React.createElement(View, { testID: 'test-id-53515703-9ebd-1a1d-390e-c842583afdb6', style: { height: 600 } },
            React.createElement(SplitPanel, { testID: 'test-id-54bc718d-2680-2a20-81ae-765bc1ef45d0', id: Utils.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor_Form) },
                React.createElement(ContentPanel, { testID: 'test-id-b0e35325-95b5-552e-c406-8df79e6f8add', style: { backgroundColor: '#fff' } },
                    React.createElement(Page, { testID: 'test-id-3e166e2f-cecc-d9b3-de59-0d0930cd98a3', scrollEnabled: true, content: getCustomerEditorContent(props) },
                        React.createElement(LeftPageHeader, { testID: 'test-id-f23496e5-0fae-vv74-9681-ebb6c3dezze6' })),
                    React.createElement(Page, { testID: 'test-id-77fef411-8f28-62b4-1755-5e07366056ea', scrollEnabled: false, content: getCustomerAddressPreview(props) },
                        React.createElement(LeftPageHeader, { testID: 'test-id-f23496e5-0fzz-vv74-9681-ebb6c3dezze6' })))))));
};
const getCustomerAddressPreview = (props) => {
    const address = {
        region: props.inputRegion,
        building: props.inputBuilding,
        city: props.inputCity,
        country: props.inputCountry,
        id: null,
        isActive: null,
        isPrimary: null,
        modId: null,
        settlement: props.inputSettlement,
        subject: props.inputSubject,
        street: props.inputStreet,
        type: null,
        house: props.inputHouse,
        block: props.inputBlock,
        flat: props.inputFlat,
        postalCode: null,
        comment: null,
        office: null,
    };
    if (props.customerSaveInProgress) {
        return (React.createElement(View, { testID: 'test-id-5b82eca9-f0c3-42c0-b351-customerSaveInProgress', style: Styles.loader },
            React.createElement(Loader, { testID: 'test-id-5b82eca9-f0c3-42c0-b351-customerSaveInProgress_Loader' })));
    }
    return (React.createElement(View, { testID: 'test-id-5b82eca9-f0c3-42c0-b351-d6d12b326e8a', style: Styles.marginLeft },
        props.customerSaveError ?
            React.createElement(View, { testID: 'test-id-4c504879-2260-f238-219f-customerSaveError', style: Styles.warningBox },
                React.createElement(Panel, { testID: 'test-id-4c504879-2260-f238-2111-customerSaveError', type: PanelType.WARNING_BOX, header: 'Ошибка редактирования карточки клиента', headerMedia: React.createElement(Button, { testID: 'test-id-9f7e5c23-2e92-e4da-c7df-customerSaveError', onExecute: () => {
                            props.performSave();
                        } },
                        React.createElement(Text, { testID: 'test-id-40913b0c-da45-02d9-d052-customerSaveError' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441")), hasIcon: true },
                    React.createElement(View, { testID: 'test-id-805f3bad-a003-ac3b-740b-customerSaveError', style: Styles.ErrorWrapper },
                        React.createElement(Text, { testID: 'test-id-7b4e07f2-f0dd-ab2a-3727-customerSaveError' }, props.customerSaveError.comment),
                        React.createElement(Text, { testID: 'test-id-911f9a01-782a-c4ca-314d-customerSaveError' }, props.customerSaveError.message)))) :
            null,
        React.createElement(View, { testID: 'test-id-1d74054d-c056-39c7-7892-ce66b2bd96fc', style: Styles.CollWrapper },
            React.createElement(Grid, { testID: 'test-id-c30f53c0-f389-e78e-56f7-35e6b0f696cc' },
                React.createElement(Row, { testID: 'test-id-4d73646d-2a68-bd37-7d65-d509724e018b' },
                    React.createElement(Col, { testID: 'test-id-4c9c8ee6-5968-a53a-2aa4-d0f6c3110249', xs: 12 },
                        React.createElement(View, { testID: 'test-id-747f1b5f-8dbd-a462-fc2a-5754d3e1e786', style: Styles.HorisontalLinePadding },
                            React.createElement(View, { testID: 'test-id-8b594c39-7309-85d2-4c86-43393edc254c', style: Styles.HorisontalLine })),
                        React.createElement(H2, { testID: 'test-id-2d291098-a246-4aaf-3567-c39f2ce307ce' }, props.currentCustomerManaged.name),
                        React.createElement(Text, { testID: 'test-id-fef78f4a-8817-db59-5727-153776ef1f2b', style: Styles.GreyLabel }, props.currentCustomerManaged.legalForm.value),
                        React.createElement(View, { testID: 'test-id-08c5a62c-b05f-bf98-f125-a50426e80ea7', style: Styles.HorisontalLinePadding },
                            React.createElement(View, { testID: 'test-id-e7739e07-a435-a616-f707-e786f39550f5', style: Styles.HorisontalLine })))),
                React.createElement(Row, { testID: 'test-id-a0c49da5-7458-6d5b-d3f3-e322ebd1ba17' },
                    React.createElement(Col, { testID: 'test-id-42ef90d1-e8f9-b567-1124-650000caccb7', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-ecdb1934-2569-b651-b39d-9c42d0a0d3bc', header: '', text: 'ИНН/КИО', block: true },
                            React.createElement(Text, { testID: 'test-id-5d79e1f5-6a01-134b-d6ed-b3d216c40177' }, props.currentCustomerManaged.inn))),
                    React.createElement(Col, { testID: 'test-id-530ae06c-101c-eea7-8675-9ea99d537097', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-405ea3ec-3cd8-50b2-a7e9-7621fe0ceab5', header: '', text: 'КПП', block: true },
                            React.createElement(Text, { testID: 'test-id-96e95a93-1d05-6788-a040-a656e0a88ccc' }, props.currentCustomerManaged.kpp)))),
                React.createElement(Row, { testID: 'test-id-f3ccfab8-cfa2-9cc3-c6b4-3661b5c475a7' },
                    React.createElement(Col, { testID: 'test-id-79627e3f-32db-211e-aabc-bccd24169a29', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-4e310c3a-69b2-b25b-fe3a-f765130a5cfb', header: '', text: 'Сегмент', block: true },
                            React.createElement(Text, { testID: 'test-id-e5607c33-1dbf-302a-cb60-ea1d54b4726e' }, props.currentCustomerManaged.segment.value))),
                    React.createElement(Col, { testID: 'test-id-ef3fec43-644f-7e96-7c7c-0ab441c36f86', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-aefeffed-34bb-f1d7-ed7f-8af3213014d2', header: '', text: 'Отрасль', block: true },
                            React.createElement(Text, { testID: 'test-id-a3f09588-0812-9357-6531-22d1497b3eec' }, props.currentCustomerManaged.sector.value)))),
                React.createElement(Row, { testID: 'test-id-f9fbea73-a5dc-849b-eec0-277295c9fb58' },
                    React.createElement(Col, { testID: 'test-id-0d011044-1447-6e15-85b0-318ff76c8ebb', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-b6024506-23a3-6931-d8ea-91373a42b72a', header: '', text: 'Приоритет', block: true },
                            React.createElement(Text, { testID: 'test-id-8adbbd17-6aa1-1f44-6d3b-f48f8a027bf2' }, Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA) /*TODO add priority*/))),
                    React.createElement(Col, { testID: 'test-id-ae0fc1c1-f484-5ac1-8ef6-78432a98049a', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-7f16fdef-304e-7f58-758b-8ea6385904c6', header: '', text: 'КМ', block: true },
                            React.createElement(Text, { testID: 'test-id-19afaf52-09ec-1c1d-8be2-1f7a07a4ce93' }, props.currentCustomerManaged.curator ? props.currentCustomerManaged.curator.fullName : Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA))))),
                React.createElement(Row, { testID: 'test-id-a611fa78-eda6-0d25-c133-b9fef98678cf' },
                    React.createElement(Col, { testID: 'test-id-3290756a-ba1f-93ca-36d3-77f84fb99caa', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-78a69109-08c1-faa7-f110-4b6ada89adec', header: '', text: 'Страна регистрации', block: true },
                            React.createElement(Text, { testID: 'test-id-a2499606-f21a-6078-c550-7031e2b9790e' }, props.currentCustomerManaged.registrationCountry))),
                    React.createElement(Col, { testID: 'test-id-db097bf8-2f3a-6e15-2a13-cbe149153f2c', xs: 6 },
                        React.createElement(Label, { testID: 'test-id-b722a598-8e16-25af-a777-00e71161b43d', header: '', text: 'Моя роль', block: true },
                            React.createElement(Text, { testID: 'test-id-6844752a-0880-6e97-b9f6-5f7ab286a49b' }, props.currentCustomerManaged.role.value)))),
                React.createElement(Row, { testID: 'test-id-a092ad32-ea7f-8e72-7756-603b01762e40' },
                    React.createElement(Col, { testID: 'test-id-01fa59d9-4337-5e57-8de6-f390e2dbfb11', xs: 12 },
                        React.createElement(View, { testID: 'test-id-00c20684-a096-2bd7-f610-8569152502da', style: Styles.HorisontalLinePadding },
                            React.createElement(View, { testID: 'test-id-ba2ff296-00f9-b385-633a-09fc8058a195', style: Styles.HorisontalLine })),
                        React.createElement(Label, { testID: 'test-id-26d9da8a-66a8-79a1-928e-90db3bc888c3', header: '', text: 'Фактический адрес', block: true },
                            React.createElement(Text, { testID: 'test-id-629dabfb-d70c-372e-de39-fea7e1243f3d', numberOfLines: 3 }, Utils.addressFormatFull(address))))))),
        React.createElement(View, { testID: 'test-id-d86b016c-7b57-52a2-526b-a95f37be2041', style: Styles.HorisontalLinePadding },
            React.createElement(View, { testID: 'test-id-82e98a0e-62f9-c313-a2ff-249d8b940153', style: Styles.HorisontalLine }))));
};
const getCustomerEditorContent = (props) => {
    //todo logic to view content
    // if (props.isEditorMode && props.currentEditorStep == Enums.CustomerEditorStep.Address) {
    return (React.createElement(View, { testID: 'test-id-4ae7a334-fa02-628e-6c8b-a39bd54482e2' },
        React.createElement(View, { testID: 'test-id-bdeec84a-8de9-865e-d752-a32932ac9cad', style: { marginLeft: 20, marginTop: 15 } },
            React.createElement(H2, { testID: 'test-id-f0a18529-036c-e91a-7a29-3977964aede1' }, 'Фактический адрес')),
        React.createElement(Table, { testID: 'test-id-a6075f03-c1cc-e6da-a871-b0ffdf178d81' },
            React.createElement(TableBody, { testID: 'test-id-3d705269-0ee9-d2be-3bd3-f222d571028b' },
                React.createElement(TableRow, { testID: 'test-id-1d8f0ca6-e25d-394b-91b9-87843438c7a8', selectable: true, onClick: () => {
                        props.navigateToCountryPickerScreen();
                    } },
                    React.createElement(TableCell, { testID: 'test-id-72366b1f-183a-9ebd-fb4c-b1d9a1a7d27d', style: Styles.tableCell },
                        React.createElement(View, { testID: 'test-id-c0d770a2-4ca8-c7f4-1eb9-6c875de70a32', style: Styles.flex },
                            React.createElement(Label, { testID: 'test-id-5543640f-1387-e6fe-b559-cb24b6195970', header: '', text: 'Страна', block: false },
                                React.createElement(Text, { testID: 'test-id-40bceb20-1498-3f05-266d-39426a1bc59c' }, props.inputCountry && props.inputCountry.value ? props.inputCountry.value : 'Нет данных'))),
                        React.createElement(Icon, { testID: 'test-id-360c270b-d7f4-715d-9e5b-8eab3574cb0e', type: IconType.MrmLink }))))),
        props.inputCountryValidationError ? React.createElement(View, { testID: 'test-id-a6075f03-c1cc-e6da-a871-b0ffdf178d811', style: Styles.pickerErrorBackground },
            React.createElement(Text, { style: Styles.pickerErrorText, testID: 'test-id-a6075f03-c1cc-e6da-a871-b0ffdf178d8111' }, props.inputCountryValidationError)) : null,
        props.inputCountry != null && props.inputCountry.code === 'Russian Federation' ? React.createElement(View, { testID: 'test-id-ec347498-afd7-1dac-b0a5-325b81c2608f', style: Styles.flex },
            React.createElement(TextInput, { testID: 'test-id-741f98c0-bf90-3915-818d-c58ae694e4aa', style: Styles.GreyLabel, value: props.inputSubject, onChange: props.performInputSubject, hasError: props.inputSubjectValidationError != null, errorText: `${props.inputSubjectValidationError}`, label: 'Субъект РФ' })) : null,
        React.createElement(View, { testID: 'test-id-fcdee06c-1db0-385d-f253-29235075bc9f', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-bab25a71-30d0-689e-979f-d980339756a7', style: Styles.flex },
            React.createElement(TextInput, { testID: 'test-id-d236393b-04b7-8788-a4ac-8073629484c9', style: Styles.GreyLabel, value: props.inputRegion, hasError: props.inputRegionValidationError != null, errorText: `${props.inputRegionValidationError}`, onChange: props.performInputRegion, label: 'Район' })),
        React.createElement(View, { testID: 'test-id-37b69a98-69b0-c2bb-f79f-9f999aeed48f', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-a102150c-84b9-316f-1dda-b967ccc42715', style: Styles.flex },
            React.createElement(TextInput, { testID: 'test-id-fbd2aa9b-88ce-0440-e87e-008d1ad9c80e', style: Styles.GreyLabel, value: props.inputCity, hasError: props.inputCityValidationError != null, errorText: `${props.inputCityValidationError}`, onChange: props.performInputCity, label: 'Город' })),
        React.createElement(View, { testID: 'test-id-b982cc3a-2564-437a-cd59-15c772daf108', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-8e55e323-5f90-ed93-67be-dd5d19d65c43', style: Styles.flex },
            React.createElement(TextInput, { testID: 'test-id-9baeefc8-c14e-9a6f-2b49-f66480cce9a7', style: Styles.GreyLabel, value: props.inputSettlement, hasError: props.inputSettlementValidationError != null, errorText: `${props.inputSettlementValidationError}`, onChange: props.performInputSettlement, label: 'Населенный пункт' })),
        React.createElement(View, { testID: 'test-id-6b6d944e-a6fe-2252-6744-3ae023231bb9', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-fc638f9c-823a-2c04-13d3-53455b1c0c40', style: Styles.flex },
            React.createElement(TextInput, { testID: 'test-id-5c258c78-18c0-555e-a16f-24dadbe31f58', style: Styles.GreyLabel, value: props.inputStreet, hasError: props.inputStreetValidationError != null, errorText: `${props.inputStreetValidationError}`, onChange: props.performInputStreet, label: 'Улица' })),
        React.createElement(View, { testID: 'test-id-1065349c-ba5e-cfbb-b4d7-5f7cb183e16a', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-cc35373a-13df-062f-a9da-7efd68a99c8c', style: Styles.flexRow },
            React.createElement(View, { testID: 'test-id-c9d10e2c-990e-cd6f-6ea2-ae24d4cb7656', style: Styles.flex },
                React.createElement(TextInput, { testID: 'test-id-dea45941-f280-5106-9b9a-4717acf4f250', style: Styles.GreyLabel, value: props.inputHouse, hasError: props.inputHouseValidationError != null, errorText: `${props.inputHouseValidationError}`, onChange: props.performInputHouse, label: 'Дом' })),
            React.createElement(View, { testID: 'test-id-db371493-1b01-e74e-f96e-f399a756088a', style: Styles.flex },
                React.createElement(TextInput, { testID: 'test-id-4fd854ef-7714-3cb0-08f6-2974f6b6f78b', style: Styles.GreyLabel, value: props.inputBuilding, hasError: props.inputBuildingValidationError != null, errorText: `${props.inputBuildingValidationError}`, onChange: props.performInputBuilding, label: 'Строение' }))),
        React.createElement(View, { testID: 'test-id-e7eb767f-83fa-921d-0c12-57aa2e042cd5', style: Styles.HorizontalLine }),
        React.createElement(View, { testID: 'test-id-fdbd1cf2-0210-63be-ae05-7c25c0cec4f0', style: Styles.flexRow },
            React.createElement(View, { testID: 'test-id-ea5d381b-8b91-4b76-39b4-f4bf62898a90', style: Styles.flex },
                React.createElement(TextInput, { testID: 'test-id-ec4f7c5e-12ab-46a0-2b50-ac699bf3dff9', style: Styles.GreyLabel, value: props.inputBlock, hasError: props.inputBlockValidationError != null, errorText: `${props.inputBlockValidationError}`, onChange: props.performInputBlock, label: 'Корпус' })),
            React.createElement(View, { testID: 'test-id-93cbfc61-6d13-2652-2f7d-d67210b2d925', style: Styles.flex },
                React.createElement(TextInput, { testID: 'test-id-479ace6a-f8eb-2b85-60c3-04a2217f075a', style: Styles.GreyLabel, value: props.inputFlat, hasError: props.inputFlatValidationError != null, errorText: `${props.inputFlatValidationError}`, onChange: props.performInputFlat, label: 'Офис/Квартира' }))),
        React.createElement(View, { testID: 'test-id-1076feb1-c44d-8215-3980-9f823ea6df0d', style: Styles.HorizontalLine })));
    // } else if (props.isEditorMode && props.currentEditorStep == Enums.CustomerEditorStep.View) {
    //   return getCustomerAddressPreview(props)
    // } else {
    //     return (
    //         <View testID='test-id-f5c5c87e-30af-ab22-0f33-2a6623f63251' />
    //     )
    // }
};
const getBreadCrumbs = (props) => {
    return (React.createElement(View, { testID: 'test-id-9ddd43cc-0381-812e-f5c9-16a2f4227f57', style: Styles.Breadcrumbs },
        React.createElement(Breadcrumbs, { testID: 'test-id-5430ecae-2f58-77db-5a5f-6da435ac78cb', history: [history], onNavigate: (val) => {
            }, selectedKey: String(props.currentEditorStep) })));
};
const renderEditorSplitPanel = (props) => (React.createElement(View, { testID: 'test-id-67afbf86-2c6d-2f33-ed64-924b09ced879', style: Styles.customerEditorContent },
    React.createElement(View, { testID: 'test-id-590e26eb-62a6-8478-05cd-0cfdcae2ee20', style: Styles.customerEditorContent },
        React.createElement(SplitPanel, { testID: 'test-id-5935ead3-8016-b50a-056c-377a94ecbb10', id: Utils.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor) },
            React.createElement(ContentPanel, { testID: 'test-id-967abcf7-6bba-7370-ffaa-5871a7e28314', style: { backgroundColor: '#fff' } },
                React.createElement(Page, { testID: 'test-id-c1b0880c-d130-8808-0159-713e2dc79436', scrollEnabled: true, content: props.isEditorMode ? getEditContent(props) : React.createElement(View, null) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-b54d95bc-1f6f-247b-ff57-045a7e33c0f7' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-919e4678-a44c-448f-39a5-40d5e58f8faf', title: '\u041E\u0442\u043C\u0435\u043D\u0430', onExecute: props.performCancel })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-9e2fbc45-c7e0-b88d-f909-a2ef84ca49a6' },
                        React.createElement(H2, { testID: 'test-id-e8e17567-b775-0289-0e20-88731abbc9d0' }, props.currentEditorStep == 0 ? 'Редактировать карточку клиента' : 'Просмотр')),
                    (props.currentEditorStep == 0) ?
                        React.createElement(RightPageHeader, { testID: 'test-id-4c1035be-f287-910f-3c92-ce9076ea2661' },
                            React.createElement(View, { testID: 'test-id-12461a77-12fe-4ccb-a154-01e6117447be', style: Styles.ContinueButton },
                                React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ab82f178478e', type: ButtonType.TEXT, onExecute: props.performNext, disabled: !props.isEditorMode },
                                    React.createElement(Text, { testID: 'test-id-f5e4004d-3da7-75ff-2887-a828a3a71d54' }, 'Далее')))) :
                        React.createElement(RightPageHeader, { testID: 'test-id-c457aa27-70e2-c802-4ed9-1f50ffd942cd' },
                            React.createElement(View, { testID: 'test-id-12461a77-12fe-4ccb-a154-01e6117447be', style: Styles.ContinueButton },
                                React.createElement(Button, { testID: 'test-id-4c1035be-f287-910f-3c92-ce9076ea2661-ii', type: ButtonType.TEXT, onExecute: props.performSave, disabled: props.customerSaveInProgress || props.customerSaveError !== null },
                                    React.createElement(Text, { testID: 'test-id-f5e4004d-3da7-75ff-2887-a828a3a71f' }, 'Готово\u00a0'))))),
                React.createElement(Page, { testID: 'test-id-f23496e5-0fae-e974-9681-ebb6c3decee6', scrollEnabled: true, content: React.createElement(RadioGroup, { testID: 'test-id-5d7967cc-9d5e-5244-6e6c-ccc4e6b2fa98', value: props.inputCountry && props.inputCountry.code, onChange: (index, value) => props.performInputCountry(props.classifierDictionary.COUNTRY.data[index]) }, props.classifierDictionary.COUNTRY.data.map((e, index) => React.createElement(RadioButton, { key: e.value || index, testID: 'test-id-a32f4854-9049-cc15-6d87-fb59fd6f3ac6', value: e.code, label: e.value }))) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-130a6e88-4376-667d-e8ad-e586047d9935' },
                        React.createElement(NavigationBackButton, { testID: 'test-id-db68b6d1-99f1-8795-7a9c-113ab9c0916f', title: false, onClick: props.navigateCustomerEditorBack })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-c6b8c395-02e5-afb2-7fec-f36e754226ab' },
                        React.createElement(H2, { testID: 'test-id-cfb16e02-74ae-49ae-08ba-b0d829df1ff6' }, "\u0412\u044B\u0431\u043E\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430"))))))));
const getAccessoryPanelEmptyContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-d2f86b0c-0a85-4e0a-9ab7-d7ef6f007214', style: Styles.accessoryPanelContent },
        React.createElement(View, { testID: 'test-id-0843223d-9040-4080-9672-bc3a84df0b6b', style: Styles.accessoryPanelContentButton },
            React.createElement(Button, { testID: 'test-id-7b040bbb-36db-445f-ac4e-dccf2a535147', onExecute: props.navigateToCustomerActivityIncludeScreen, type: ButtonType.DEFAULT },
                React.createElement(Text, { testID: 'test-id-87d8759a-1f19-40d9-992d-e064c8e121e2' },
                    " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0443\u044E ",
                    "\n",
                    "\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E "))),
        (props.currentCustomerManaged.organizationType.code != 'Branch') ?
            React.createElement(View, { testID: 'test-id-e6c5e625-0969-44ba-b506-5cf4ceea7baf', style: Styles.accessoryPanelContentButton },
                React.createElement(Button, { testID: 'test-id-700dd78e-5644-425c-af8e-2a90a69be50e', onExecute: props.navigateToCustomerActivityExcludeScreen, type: ButtonType.DEFAULT },
                    React.createElement(Text, { testID: 'test-id-e69d9d22-9f21-4f6a-b29f-e5ad5edfaa94' },
                        " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u044E\u044E ",
                        "\n",
                        "\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E ")))
            :
                null));
};
const getContentPanelCustomerInclude = () => (React.createElement(ContainerCustomerActivityInclude, { testID: 'test-id-7f56a26a-05e1-0feb-e2c0-c024238dde19' }));
const getContentPanelCustomerExclude = () => (React.createElement(ContainerCustomerActivityExclude, { testID: 'test-id-b2bd500e-f981-58b5-1a80-0e71fce57aae' }));
const history = [
    {
        title: 'Редактировать карточку клиента',
        key: String(Enums.CustomerEditorStep.Address),
        accessible: true,
        testID: 'test-id-7f56a26a-05e1-0feb-e2c0-c024238dde19-history1'
    },
    {
        title: 'Просмотр',
        key: String(Enums.CustomerEditorStep.View),
        accessible: true,
        testID: 'test-id-7f56a26a-05e1-0feb-e2c0-c024238dde19-history2'
    }
];
const ViewCustomerEditor = (props) => (React.createElement(View, { testID: 'test-id-95642e63-b7b6-c4c5-3db6-f9ffbaa0b875', style: Styles.main },
    React.createElement(SplitPanel, { testID: 'test-id-89ccb373-3193-2ed4-1d00-7faa8419333c', id: Utils.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer) },
        React.createElement(ContentPanel, { testID: 'test-id-29793aaa-6635-b0a1-6614-a9592c75a654', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-54454bf8-85e9-1424-6ab8-61ae31b8592c', scrollEnabled: false, content: renderEditorSplitPanel(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-83dc9897-149a-2996-c057-6b9e6ad131ee' })),
            React.createElement(Page, { testID: 'test-id-7fd0f8fe-c3a2-c0b7-62d3-5d941201cb0b', scrollEnabled: false, content: getContentPanelCustomerInclude() },
                React.createElement(LeftPageHeader, { testID: 'test-id-b7ec1a1e-d8ab-f030-930d-e49b9afbe2e3' })),
            React.createElement(Page, { testID: 'test-id-09b5ef7d-2fab-1115-7e18-eb91d6b355dd', scrollEnabled: false, content: getContentPanelCustomerExclude() },
                React.createElement(LeftPageHeader, { testID: 'test-id-403ea6f4-8bc1-5658-d9a0-477fb73f8795' }))),
        React.createElement(AccessoryPanel, { testID: 'test-id-29fe85be-0a11-c474-c525-12ed03046cfb', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-256c4f4c-c79a-9d66-8251-151158a11026', scrollEnabled: false, content: getAccessoryPanelEmptyContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-9ab8ff23-5029-f1db-7187-e2c8f71b18c1' }))))));
export default ViewCustomerEditor;
//# sourceMappingURL=ViewCustomerEditor.js.map