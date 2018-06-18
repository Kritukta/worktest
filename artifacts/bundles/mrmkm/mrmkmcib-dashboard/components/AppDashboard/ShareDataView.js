import React from 'react';
import { Button, CenterPageHeader, ContentPanel, H2, Icon, IconType, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, Popover, PopoverPosition, PopoverType, RadioButton, RadioGroup, RightPageHeader, SplitPanel, Text, View, Checkbox, TextInput, Table, TableBody, TableRow, TableCell, } from 'ufs-mobile-platform';
import Styles from './styles/ShareDataViewStyles';
import { Enums } from '../../Enums';
import PopoverTarget from '../../modules/PopoverTarget';
import * as util from '../../common/Util';
import * as Converters from '../../models/Converters';
const generateLabel = (item, props) => {
    return (React.createElement(View, { key: item.email, style: Styles.recipientLabel, testID: "test-id-dde4004d-3da7-75ff-2857-e828a3a71d54" },
        React.createElement(Text, { testID: 'test-id-f5e4004d-3de7-75ff-2857-e828a3a71d54', style: Styles.recipientLabelText }, util.getPersonName(item)),
        React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: () => {
                props.inputCurrentRecipientListRefresh(item, Enums.Operation.Remove);
            } },
            React.createElement(Icon, { testID: 'test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54', disabled: true, type: IconType.MrmClear }))));
};
export const AgentCircle = (props) => React.createElement(View, { style: Styles.AgentCircleContainer, testID: "test-id-00e4004d-3da7-75ff-2857-e828a3a71d54" },
    React.createElement(View, { testID: 'test-id-63a4dff0-6f6a-a24f-b5ff-caa64fdfd812', style: Styles.AgentCircle },
        React.createElement(Text, { testID: 'test-id-9c44194d-c503-9d50-4331-2c1cac2ae398', style: Styles.AgentCircleLabel }, `${props.firstName && props.firstName.charAt(0).toUpperCase()}${props.lastName && props.lastName.charAt(0).toUpperCase()}`)));
const generateRecipientListItem = (item, props) => {
    const isChecked = (item, personList) => {
        let i;
        for (i = 0; i < personList.data.length; i++) {
            if (personList.data[i].email === item.email) {
                return true;
            }
        }
        return false;
    };
    let checked = isChecked(item, props.currentRecipientList);
    let isInactive = props.currentRecipientList.data.length >= 5 && !checked;
    return (React.createElement(TableRow, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b', key: item.email },
        React.createElement(TableCell, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b', style: Styles.tableCellHeight },
            React.createElement(View, { style: [Styles.leftSectionListItem, isInactive && Styles.Inactive], testID: "test-id-11e4004d-3da7-75ff-2857-e828a3a71d54" },
                React.createElement(View, { style: Styles.circleWrapper, testID: "test-id-12e4004d-3da7-75ff-2857-e828a3a71d54" },
                    React.createElement(AgentCircle, { testID: 'test-id-ViewEmployee-expanded-main_1000', firstName: item.lastName, lastName: item.firstName })),
                React.createElement(View, { style: [Styles.centeralSectionListItem, isInactive && Styles.Inactive], testID: "test-id-13e4004d-3da7-75ff-2857-e828a3a71d54" },
                    React.createElement(Text, { testID: 'test-id-f5e4004d-3da7-75ff-2857-e828a3a71a54', style: Styles.blackFontLabelAddressee }, util.getPersonName(item)),
                    React.createElement(Text, { testID: 'test-id-05e4004d-3da7-75ff-2857-e828a3a71a54', style: [{ paddingTop: 5, paddingBottom: 5 }, Styles.greyFontLabelSmall, isInactive && Styles.Inactive] }, item.email),
                    React.createElement(Text, { testID: 'test-id-05e4004d-3da7-75ff-2857-e828\u04413a71a54', style: [isInactive && Styles.Inactive, Styles.greyFontLabelSmall] }, [item.division, item.city]
                        .filter((item) => item && item != '')
                        .join(', '))),
                React.createElement(View, { style: [Styles.rightSectionListItem, isInactive && Styles.Inactive], testID: "test-id-14e4004d-3da7-75ff-2857-e828a3a71d54" },
                    React.createElement(Checkbox, { testID: 'test-id-05e4804d-3da7-75ff-2857-e828a3a73a54', underlined: false, checked: checked, onChange: () => {
                            if (checked) {
                                props.inputCurrentRecipientListRefresh(item, Enums.Operation.Remove);
                            }
                            else {
                                if (props.currentRecipientList.data.length < 5) {
                                    props.inputCurrentRecipientListRefresh(item, Enums.Operation.Add);
                                }
                            }
                        } }))))));
};
const toSection = (props) => {
    let recipientList = props.currentRecipientList || [];
    let resultList = [];
    if (recipientList.data) {
        recipientList.data.forEach(item => {
            resultList.push(generateLabel(item, props));
        });
    }
    // Следующий блок адаптивно размещает адрессатов
    let resultList1 = [];
    let resultList2 = [];
    // проверяем пришли ли данные
    if (recipientList && recipientList.data && recipientList.data[0]) {
        const maxLengthOneRow = 20;
        // если только один адрессат => записать его в контейнер первой строки
        if (recipientList.data.length == 1) {
            resultList1 = resultList;
        }
        else {
            // если адрессатов несколько => разбиваем их по разным контейнерам
            const firstAdressat = recipientList.data[0];
            const secondAdressat = recipientList.data[1];
            if (firstAdressat.lastName != null && secondAdressat.lastName != null) {
                const firstAdressatLength = firstAdressat.lastName.length + 5;
                const secondAdressatLength = secondAdressat.lastName.length + 5;
                const lengthOfTwoAdressats = firstAdressatLength + secondAdressatLength;
                // определяем кол-во адрессатов в первом контейнере
                const numOfAdderessatsInFirstLine = (lengthOfTwoAdressats > maxLengthOneRow) ? 1 : 2;
                // разбиваем адрессатов на два контейнера
                resultList1 = resultList.slice(0, numOfAdderessatsInFirstLine);
                resultList2 = resultList.slice(numOfAdderessatsInFirstLine);
            }
        }
    }
    return (React.createElement(View, { testID: 'test-id-04e0a121-247-4f3e-22cf-e0b4616d903f', style: Styles.toSectionPadding },
        React.createElement(View, { testID: 'test-id-04e0a121-247-4f3e-22cf-e0b4616f903f', style: Styles.toSectionInner },
            React.createElement(View, { testID: 'test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f', style: Styles.firstLineWrapper },
                React.createElement(View, { testID: 'test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f', style: [Styles.toSectionMainFlex, Styles.recipientListDisplayField] },
                    React.createElement(View, { testID: 'test-id-49d321df-516a-4392-9b91-3b839db846fa', style: Styles.toSectionLabelFlex },
                        React.createElement(Text, { testID: 'test-id-04f0a121-24b7-4f3e-22cf-e134616d903f', style: Styles.toSectionLabel }, "\u041A\u043E\u043C\u0443:")),
                    (resultList1.length) ? resultList1 :
                        React.createElement(Text, { testID: 'test-id-7cab878c-4f75-4bca-98de-66f155d338a0', style: Styles.addAddressat }, "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0430\u0442\u0430")),
                React.createElement(View, { testID: 'test-id-12461a77-12fe-4ccb-a054-01e6117447be', style: Styles.PlusButton },
                    React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: props.navigateToPopoverShareRecipientsScreen, disabled: props.sendFetching },
                        React.createElement(Icon, { testID: 'test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54', type: IconType.MrmPlus })))),
            React.createElement(View, { testID: 'test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f', style: [Styles.toSectionMainFlex, Styles.recipientListDisplayField2] }, resultList2 || null)),
        React.createElement(View, { testID: 'test-id-cce10d4d-4b73-4466-a08f-de28cfb40bfa', style: Styles.preconditionToSection },
            React.createElement(Text, { testID: 'test-id-04f0a121-24b7-4f3e-22cf-e134616d903f', style: Styles.toSectionLabelSmallFont }, "\u041D\u0435 \u0431\u043E\u043B\u0435\u0435 5 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u0435\u0439"))));
};
const optionsSection = (props) => {
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-22cf-e1b4616d903f', style: Styles.toSectionPadding },
        React.createElement(View, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b4616f903f', style: Styles.optionsSectionMain },
            React.createElement(View, { testID: 'test-id-89c91485-6f59-4a12-a9ef-f617103cffe3' },
                props.isRepresentationVisible ?
                    React.createElement(View, { testID: 'test-id-1248dc71-e77d-4602-b8f5-4099b85010b9', style: [Styles.bottomBorder] },
                        React.createElement(Table, { testID: 'test-id-04b9a101-247a-4f3e-22af-e001410f989f', underlined: false },
                            React.createElement(TableBody, { testID: 'test-id-14b0a101-247a-4f3e-22af-e001410f989f' },
                                React.createElement(TableRow, { onClick: props.navigateToPopoverShareRepresentationScreen, testID: 'test-id-14b0a101-247a-4f3e-22af-e101410f989f' },
                                    React.createElement(TableCell, { testID: 'test-id-00b0a101-247a-4f3e-22af-e001410f989f', style: { paddingRight: 25 } },
                                        React.createElement(View, { testID: 'test-id-4d2c4222-b122-ab67-125f-2b01925c5d62', style: Styles.sectionLinePart },
                                            React.createElement(Text, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e004616f903f', style: Styles.blackFontLabel }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),
                                            React.createElement(Text, { numberOfLines: 1, testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b0616f903f', style: Styles.greyFontLabel }, props.currentRepresentation == 1 ? 'Список сделок' : 'Слайды по сделкам'),
                                            React.createElement(View, { testID: 'test-id-4d5c4222-b122-ab67-172f-2b01930c5d65', style: Styles.arrowRight },
                                                React.createElement(Button, { testID: 'test-id-4d5c4222-b122-ab67-172f-2b01930c5d65', onExecute: props.navigateToPopoverShareRepresentationScreen },
                                                    React.createElement(Icon, { testID: 'test-id-b510c153-99e8-7c3b-782d-c8c2b41e407c', disabled: true, type: IconType.MrmLink })))))))))
                    : null,
                React.createElement(View, { testID: 'test-id-04b0a101-247a-4f3e-22af-e001413f989f' },
                    React.createElement(Table, { testID: 'test-id-04b9a101-247a-4f3e-22af-e001410f989f', underlined: false },
                        React.createElement(TableBody, { testID: 'test-id-14b0a101-247a-4f3e-22af-e001410f989f' },
                            React.createElement(TableRow, { onClick: props.navigateToPopoverShareFormatScreen, testID: 'test-id-14b0a101-247a-4f3e-22af-e101410f989f' },
                                React.createElement(TableCell, { style: { paddingRight: 25 }, testID: 'test-id-00b0a101-247a-4f3e-22af-e001410f989f' },
                                    React.createElement(View, { testID: 'test-id-4d2c4222-b122-ab67-125f-2b01925c5d62', style: Styles.sectionLinePart },
                                        React.createElement(Text, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e004616f999f', style: Styles.blackFontLabel }, "\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430"),
                                        React.createElement(Text, { numberOfLines: 1, testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b0616f989f', style: Styles.greyFontLabel }, props.currentFileFormat == 2 ?
                                            util.getFileFormatString(Enums.FileFormat.PDF) :
                                            props.currentRepresentation == 1 || !props.isRepresentationVisible ?
                                                util.getFileFormatString(Enums.FileFormat.Excel) :
                                                util.getFileFormatString(Enums.FileFormat.PowerPoint)),
                                        React.createElement(View, { testID: 'test-id-4d5c4222-b122-ab67-172f-2b01930c5d65', style: Styles.arrowRight },
                                            React.createElement(Button, { testID: 'test-id-4d5c4222-b122-ab67-172f-2b01930c5d65', onExecute: props.navigateToPopoverShareFormatScreen, disabled: props.sendFetching },
                                                React.createElement(Icon, { testID: 'test-id-b510c153-99e8-7c3b-782d-c8c2b41e407c', disabled: true, type: IconType.MrmLink })))))))))))));
};
const isShowPeopleHistory = (props) => {
    return !props.inputSharePopoverSearch && props.personHistoryList.data && props.personHistoryList.data.length > 0;
};
let renderList = (props) => {
    let recipientList = (!isShowPeopleHistory(props) ? props.foundPersonList.data : props.personHistoryList.data) || [];
    let result = [];
    if (recipientList != null) {
        recipientList.map(item => { result.push(generateRecipientListItem(item, props)); });
    }
    return result;
};
const getSearchInput = (props) => {
    const isClearIconShown = !(props.inputSharePopoverSearch == '');
    return (React.createElement(View, { testID: 'test-id-b91df9c9-d695-0fa2-0c71-71fe25500c00', style: Styles.SearchInputView },
        React.createElement(View, { testID: 'test-id-b91df0c9-d695-0fa2-0c71-71fe25500c00', style: Styles.SearchIcon },
            React.createElement(Button, { testID: 'test-id-4c72195d-a768-9b82-7c05-30658da48892', onExecute: () => { props.inputSharePopoverSearchRefresh(props.inputSharePopoverSearch); } },
                React.createElement(Icon, { type: IconType.MrmSearch, testID: 'test-id-066426a2-7f9b-4bb3-9eac-4b6de7978a5d' }))),
        React.createElement(TextInput, { testID: 'test-id-cb1a195e-621b-e81b-a96c-84b21b53b823', style: Styles.SearchInputSize, placeholder: 'Введите не менее трех символов', onChange: (value) => {
                props.inputSharePopoverSearchRefresh(value);
            }, value: props.inputSharePopoverSearch, onBlur: () => { } }),
        isClearIconShown ?
            React.createElement(View, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f108d78e', style: Styles.ClearIcon },
                React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f108478e', onExecute: () => {
                        props.inputSharePopoverSearchRefresh('');
                        props.foundPersonListClear();
                    } },
                    React.createElement(Icon, { testID: 'test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54', disabled: true, type: IconType.MrmClear }))) :
            null));
};
const resultsInfoTab = (props) => {
    // количество добавленных получателей
    const numOfRecipient = props.currentRecipientList.data.length;
    // количество найденных получателей
    const numOfFoundPerson = props.foundPersonList.data.length;
    // количество недавних получателей
    const numOfRecentRecipient = props.personHistoryList.data.length;
    if (numOfRecipient || numOfFoundPerson || numOfRecentRecipient ||
        !(props.inputSharePopoverSearch == '' || props.inputSharePopoverSearch.length < 3)) {
        return (React.createElement(View, { testID: 'test-id-84e0a121-24b7-4f3e-22af-e1b4616d903f', style: Styles.toSectionHeader },
            React.createElement(Text, { testID: 'test-id-04e0a121-247a-4f3e-20cf-e004616f999f', style: Styles.toSectionHeaderText }, 
            // Если есть добавленные получатели => отображать их количество
            numOfRecipient ?
                Converters.CONVERT_NUM_OF_ADDRESSAT_TO_PHRASE(numOfRecipient) :
                // если есть найденные получатели => отображать 'РЕЗУЛЬТАТЫ ПОИСКА'
                numOfFoundPerson ?
                    'РЕЗУЛЬТАТЫ ПОИСКА' :
                    // если есть недавние получатели и строка поиска пуста => отображать 'НЕДАВНИЕ ПОЛУЧАТЕЛИ'
                    (numOfRecentRecipient && props.inputSharePopoverSearch == '') ?
                        'НЕДАВНИЕ ПОЛУЧАТЕЛИ' :
                        // если нет недавних получателей и сделан запрос => отображать ''
                        props.inputSharePopoverSearch.length >= 3 ?
                            'Адресат не найден' :
                            '')));
    }
    else {
        return React.createElement(View, { testID: 'test-id-04e0a121-287a-4a3e-20cf-e004616f999f' });
    }
};
const recipientsContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-22af-e1b4616d903f' },
        React.createElement(View, { testID: "test-id-15e4004d-3da7-75ff-2857-e828a3a71d54" }, getSearchInput(props)),
        React.createElement(View, { style: Styles.scrollAreaHeight },
            resultsInfoTab(props),
            React.createElement(Table, { testID: 'test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b' },
                React.createElement(TableBody, { testID: 'test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b' }, renderList(props))))));
};
const representationContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-22cf-e1b4616d903f', style: Styles.toSectionPadding },
        React.createElement(View, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b4616f903f', style: Styles.optionsSectionMainContent },
            React.createElement(View, { testID: 'test-id-04e0a121-2347a-4f3e-02cf-e0b4616f903f', style: Styles.radioGroupTopBorder }),
            React.createElement(RadioGroup, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b4616f913f', value: Enums.Representation[props.currentRepresentation], onChange: (index, value) => {
                    props.inputCurrentRepresentationRefresh(index);
                    props.navigateToPopoverShareBack();
                } },
                React.createElement(RadioButton, { testID: 'test-id-04e0a121-247a-4f3e-22cf-f0b4616f903f', value: Enums.Representation[Enums.Representation.Slides], label: '\u0421\u043B\u0430\u0439\u0434\u044B \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C' }),
                React.createElement(RadioButton, { testID: 'test-id-04e0a121-247a-4f3e-22cf-a0b4616f903f', value: Enums.Representation[Enums.Representation.List], label: '\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0434\u0435\u043B\u043E\u043A' })),
            React.createElement(View, { testID: 'test-id-0410a121-247a-4f3e-22cf-e0b4616f903f', style: Styles.radioGroupBottomBorder }))));
};
const fileFormatContent = (props) => {
    const showExelFormat = props.currentRepresentation === Enums.Representation.List || !props.isRepresentationVisible;
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-22cf-e1b4616d9032', style: Styles.toSectionPadding },
        React.createElement(View, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b4616f9033', style: Styles.optionsSectionMainContent },
            React.createElement(View, { testID: 'test-id-04e0a121-247a-4f3e-02cf-e0b4616f9034', style: Styles.radioGroupTopBorder }),
            React.createElement(RadioGroup, { testID: 'test-id-04e0a121-247a-4f3e-22cf-e0b4616f9135', value: props.currentFileFormat.toString(), onChange: (index, value) => {
                    props.inputCurrentFileFormatRefresh(util.stringToFileFormat(value));
                    props.navigateToPopoverShareBack();
                } },
                showExelFormat ?
                    React.createElement(RadioButton, { testID: 'test-id-04e0a121-247a-4f3e-22cf-f0b4616f903f', value: Enums.FileFormat.Excel.toString(), label: util.getFileFormatString(Enums.FileFormat.Excel) }) :
                    React.createElement(RadioButton, { testID: 'test-id-04e0a121-247a-4f3e-22cf-f0b4616f904k', value: Enums.FileFormat.PowerPoint.toString(), label: util.getFileFormatString(Enums.FileFormat.PowerPoint) }),
                React.createElement(RadioButton, { testID: 'test-id-04e0a121-247a-4f3e-22cf-a0b4616f905s', value: Enums.FileFormat.PDF.toString(), label: util.getFileFormatString(Enums.FileFormat.PDF) })),
            React.createElement(View, { testID: 'test-id-04a0a121-247a-4f3e-22cf-e0b4616f906y', style: Styles.radioGroupBottomBorder }))));
};
const mainContent = (props) => {
    if (!props.supParameters.accessMode) {
        return (React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd', style: Styles.AlignCenter },
            React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd', style: Styles.InfoMessage },
                React.createElement(Text, { testID: 'test-id-b61f627d-ab64-02d8-d8c0-d2fd2840fd21' }, "\u0421\u0435\u0440\u0432\u0438\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u0430\u0439\u043B\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443"))));
    }
    else {
        if (props.sendError != null) {
            return (React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd', style: Styles.AlignCenter },
                React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd', style: Styles.ErrorWrapper },
                    React.createElement(Text, { testID: 'test-id-b61f627d-ab64-02d8-d8c0-d2fd2840fd21' }, "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"))));
        }
        else {
            if (props.sendSuccess) {
                return (React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd', style: Styles.sendSuccess },
                    React.createElement(Text, { testID: 'test-id-b61f627d-ad64-02d8-d8c0-d2fd2840fd21', style: Styles.sendSuccessText }, "\u0424\u0430\u0439\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D")));
            }
            else {
                return (React.createElement(View, { testID: "test-id-16e4004d-3da7-75ff-2857-e828a3a71d54" },
                    toSection(props),
                    optionsSection(props)));
            }
        }
    }
};
const renderPopoverContent = (props) => {
    const NavigationTextButtonInitial = React.createElement(NavigationTextButton, { testID: 'test-id-84a395bc-0001-cbf2-7f8f-c9e36d9c071f', title: 'Отправить', onExecute: props.performSend });
    const NavigationTextButtonSuccess = React.createElement(NavigationTextButton, { testID: 'test-id-a6453a0c-c982-4a20-9bf1-9e06621abe46', title: 'Готово', onExecute: props.performPopoverShareHide });
    const NavigationTextButtonFailure = React.createElement(NavigationTextButton, { testID: 'test-id-4e1e81eb-dbe5-4513-8908-a8677e97860c', title: 'Повторить', onExecute: props.performSend });
    const getTheRightButton = (props) => {
        switch (true) {
            case (props.sendError != null): {
                return NavigationTextButtonFailure;
            }
            case (props.sendFetching || !(props.currentRecipientList.data.length > 0)): {
                return React.createElement(View, { testID: 'test-id-cefdec99-52ee-40bb-a6c4-518d96d62132' });
            }
            case (props.sendSuccess): {
                return NavigationTextButtonSuccess;
            }
            default: {
                return NavigationTextButtonInitial;
            }
        }
    };
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-20cf-f1b4616d983b', style: Styles.main },
        React.createElement(SplitPanel, { id: Enums.SharePopoverNavigation.Main.toString(), testID: 'test-id-04e0a121-24b7-4f3e-22cf-e1b4616d983f' },
            React.createElement(ContentPanel, { testID: 'test-id-04e0a121-24b7-4f3e-20cf-e1b4616d983b', style: { backgroundColor: 'white' } },
                React.createElement(Page, { testID: 'test-id-04e0a121-2407-4f3e-20cf-e1b4616d983a', scrollEnabled: false, content: mainContent(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f' },
                        React.createElement(H2, { testID: 'test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f' }, 'Отправка файла')),
                    React.createElement(LeftPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f' }, props.sendSuccess || props.sendFetching ?
                        React.createElement(View, { testID: 'test-id-84a395bc-8001-cbf2-7f8f-c9e3609c071f' }) :
                        React.createElement(NavigationTextButton, { testID: 'test-id-84a395bc-0000-cbf2-7f8f-c9e36d9c071f1', title: 'Отменить', onExecute: props.performPopoverShareHide })),
                    React.createElement(RightPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-17cf-e1b4616d983f' }, // Если произошла ошибка подключения => не отображать кнопку "Отправить"
                    getTheRightButton(props))),
                React.createElement(Page, { testID: 'test-id-04e0a121-2407-4f3e-20cf-e1b4616a983a', scrollEnabled: false, content: recipientsContent(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f' },
                        React.createElement(H2, { testID: 'test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f' }, 'Адресаты')),
                    React.createElement(LeftPageHeader, { testID: 'test-id-04e0a121-24b7-4a3e-18cf-e1b4616d983f' },
                        React.createElement(NavigationBackButton, { testID: 'test-id-84a395bc-0800-cbf2-7f8f-c9e36d9c071f', title: true, onClick: () => props.navigateToPopoverShareBack() }))),
                React.createElement(Page, { testID: 'test-id-04e0a121-2407-4f3e-20cf-e1b4636d983a', scrollEnabled: false, content: representationContent(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f' },
                        React.createElement(H2, { testID: 'test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f' }, 'Представление')),
                    React.createElement(LeftPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f' },
                        React.createElement(NavigationBackButton, { testID: 'test-id-84a395bc-0800-cbf2-7f8f-c9e36d9c071f', title: true, onClick: () => props.navigateToPopoverShareBack() }))),
                React.createElement(Page, { testID: 'test-id-04e0a121-2407-4f3e-28cf-e1b4616d983a', scrollEnabled: false, content: fileFormatContent(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f' },
                        React.createElement(H2, { testID: 'test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f' }, 'Формат файла')),
                    React.createElement(LeftPageHeader, { testID: 'test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f' },
                        React.createElement(NavigationBackButton, { testID: 'test-id-84a395bc-0000-cbf2-7f8f-c9e36d9c071f', title: true, onClick: () => props.navigateToPopoverShareBack() })))))));
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getSharePanel = (props) => {
    let holderStyle = '';
    const itemHaveBreadcrumbs = props.currentCustomerManaged && props.currentCustomerManaged.hierarchy.length > 0;
    if (props.fromOutside) {
        if (props.isDashboardExpandedMode === true) {
            holderStyle = Styles.invisibleLayoutFromOutside;
        }
        else if (props.isDashboardExpandedMode === false && itemHaveBreadcrumbs === true) {
            holderStyle = Styles.breadcrumbsLayout;
        }
        else if (props.isDashboardExpandedMode === false) {
            holderStyle = Styles.invisibleLayoutFromOutsideExt;
        }
    }
    return (React.createElement(View, { testID: 'test-id-04e0a121-24b7-4f3e-44cf-e1b4616d983f', style: Styles.ModalForeground },
        React.createElement(View, { style: [Styles.invisibleLayout, holderStyle], testID: "test-id-17e4004d-3da7-75ff-2857-e828a3a71d54" },
            React.createElement(PopoverTarget, { testID: 'test-id-515ab097-880e-80bb-cf24-8619f9dcbb0e', refName: 'sharePopover' })),
        React.createElement(View, { testID: 'test-id-b704de6c-569a-3b22-ebc7-aad1563849c2', style: Styles.roundBorderView },
            React.createElement(Popover, { testID: 'test-id-b704de6c-880a-3b22-ebc7-aad1563849c2', target: PopoverTarget.getRef('sharePopover'), opened: props.isVisiblePopoverShare, onOutsideTap: props.performPopoverShareHide, type: PopoverType.WIDE, position: [PopoverPosition.BOTTOM], style: props.isPopoverVisibleSearchScreen ? Styles.bigPopover : Styles.smallPopover }, renderPopoverContent(props)))));
};
// to hide representation section of popover, set isRepresentationVisible flag to false
const ShareDataView = (props) => (getSharePanel(props));
export default ShareDataView;
//# sourceMappingURL=ShareDataView.js.map