/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewOccasionStyles';
import { Button, CenterPageHeader, ContentPanel, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, RightPageHeader, SplitPanel, Switch, Table, TableBody, TableCell, TableRow, Text, View, DateInputTypes, DateInput, Textarea, } from 'ufs-mobile-platform';
import { OneLineCell, } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import * as Utils from '../common/Util';
const getOccasionEditModeContent = (props) => (React.createElement(View, { testID: 'test-id-tuye-jjej-sdghs-thss-54re', style: Styles.flex },
    React.createElement(View, { testID: 'test-id-tr-jjewgqj-ehwtryj-saaa-hwgea' },
        React.createElement(Table, { testID: 'test-id-4791ac69-89c6-4280-9a07-62da8e32bf9a', style: Styles.dataTypeContainer, underlined: true },
            React.createElement(TableBody, { testID: 'test-id-63c9a3aa-212f-4a64-ab5e-166601e703cb' },
                React.createElement(OneLineCell, { data: {
                        label: 'Тип даты',
                        value: props.inputOccasionType && props.inputOccasionType.value || 'Выберите тип даты'
                    }, onClick: props.navigateToOccasionTypePickerScreen })))),
    props.errorValidationList.indexOf(Enums.OccasionValidationAttribute.Type) > -1 ?
        React.createElement(View, { testID: 'test-id-f3ebbdcd-d327-4e2c-99db-9821cc1a7f09', style: Styles.pickerErrorBackground },
            React.createElement(Text, { testID: 'test-id-8f38c45d-cedb-4a91-b9ba-b680e60ed0c1', style: Styles.pickerErrorText }, Utils.occasionValidationType(props.inputOccasionType))) :
        null,
    React.createElement(DateInput, { testID: 'test-id-2fff-03ff-4c9b-8fd3-356ujh', value: props.inputDate || undefined, label: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F', format: 'dd.MM.yyyy', locale: 'ru', hasError: props.errorValidationList.indexOf(Enums.OccasionValidationAttribute.Date) > -1, dateType: DateInputTypes.DAY_PICKER, errorText: Utils.occasionValidationDate(props.inputDate), onChange: props.performInputDate, placeholder: '\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430' }),
    React.createElement(View, { testID: 'test-id-rqeg-8612-f8c3-cd9f-erg', style: Styles.switchContainer },
        React.createElement(Switch, { testID: 'test-id-egre-3037-e489-a768-gargq', label: 'Без указания года', checked: props.inputNoYear, onChange: props.performInputNoYear, disabled: false }),
        React.createElement(Textarea, { testID: 'test-id-76fb9f4c-e20e-4362-4d4b-qerg', label: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', value: props.inputComment || '', onChange: props.performInputComment, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439' }))));
const occasionViewLabel = (header, body) => (React.createElement(View, { testID: 'test-id-tr-jjewgqj-ehwtryj-saaa-hwgeg', style: Styles.occasionExpandedModeScreenRowContainer },
    React.createElement(Label, { testID: 'test-id-5hww-4t2ha-ghngyju-wrthw-431tgw', header: '', text: header, block: true },
        React.createElement(Text, { testID: 'test-id-j6kee-7ew44h-8i6w-54hqg-54lajg', style: Styles.labelTextValue }, body))));
const getOccasionWatchModeContent = (props) => (React.createElement(View, { testID: 'test-id-tuye-jjej-sdghs-thss-54re' },
    occasionViewLabel('Наименование', props.currentOccasion.type &&
        props.currentOccasion.type.value ||
        PLACEHOLDER),
    occasionViewLabel('Дата', props.currentOccasion.date &&
        props.currentOccasion.date.formattedString() || ''),
    occasionViewLabel('Комментарий', props.currentOccasion.comment)));
const PLACEHOLDER = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED);
const getOccasionContent = (props) => {
    switch (props.occasionMode) {
        case Enums.OccasionMode.Edit:
        case Enums.OccasionMode.Create: {
            return getOccasionEditModeContent(props);
        }
        default: return getOccasionWatchModeContent(props);
    }
};
const getOccasionTypeList = (props) => (React.createElement(View, { testID: 'test-id-8417a9ca-07c2-1605-a03b-85de3b0708f3', style: Styles.mainFull },
    React.createElement(Table, { testID: 'test-id-977882d9-df03-3a28-176d-f3a39a43e488' },
        React.createElement(TableBody, { testID: 'test-id-db356dd7-9500-b436-a765-374054b0256d' }, props.classifierDictionary.SBRF_IMP_DATE.data.map((type, index) => (React.createElement(TableRow, { testID: 'test-id-6bec89a0-1fb3-b973-7891-838f2cc81063', key: `Occasion Type Row ${index}`, onClick: () => props.performInputOccasionType(type) },
            React.createElement(TableCell, { testID: 'test-id-09f6b8ca-8f42-326d-f8d1-c2bc1730f62d', style: Styles.occasionTypeRow },
                React.createElement(View, { testID: 'test-id-0160398b-4925-f1be-8397-f77d3327d9e3', style: Styles.occasionTypeCell },
                    React.createElement(Text, { testID: 'test-id-8fa71615-5031-dbdc-1bb4-b0ffe7427489' }, type.value),
                    ((props.inputOccasionType && props.inputOccasionType.code) == (type && type.code)) ?
                        React.createElement(Button, { testID: 'test-id-befa3b8c-e32f-11e7-80c1-9a214cf093ae', onExecute: () => props.performInputOccasionType(type) },
                            React.createElement(Icon, { testID: 'test-id-ac302b1c-2b06-d021-64f0-201c3f8a4239', disabled: true, type: IconType.MrmDone })) : null)))))))));
const getLeftScreenNavigation = (props) => {
    switch (props.occasionMode) {
        case Enums.OccasionMode.Edit:
        case Enums.OccasionMode.Create: {
            return React.createElement(NavigationTextButton, { testID: 'test-id-1e8f91ba-e30c-11e7-80c1-9a214cf093ae', title: 'Отмена', onExecute: props.performCancel });
        }
        default: return React.createElement(NavigationBackButton, { testID: 'test-id-139d4b30-e30c-11e7-80c1-9a214cf093ae', onClick: props.performCancel, title: false });
    }
};
const getRightScreenNavigation = (props) => {
    switch (props.occasionMode) {
        case Enums.OccasionMode.Edit:
        case Enums.OccasionMode.Create: {
            return React.createElement(NavigationTextButton, { testID: 'test-id-18f1aaa4-e30c-11e7-80c1-9a214cf093ae', title: 'Готово', onExecute: props.performSave });
        }
        default: return React.createElement(NavigationTextButton, { testID: 'test-id-ld4e-cbea-b838-pouyf-865id', title: 'Изменить', onExecute: props.performEdit });
    }
};
const ViewOccasion = (props) => (React.createElement(SplitPanel, { testID: 'test-id-2bf28a55-eef7-983f-8429-b49b075b33b7', id: Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionScreen) },
    React.createElement(ContentPanel, { testID: 'test-id-699b99a3-a2f6-3182-4681-bcd92faf65fa', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-b89dfdd3-7480-9851-0d03-fa8636b41333', scrollEnabled: false, content: getOccasionContent(props) },
            React.createElement(CenterPageHeader, { testID: 'test-id-869df924-5597-925b-814c-5cf76ee27a5d' },
                React.createElement(H2, { testID: 'test-id-869df924-5597-925b-814c-5cf76ee27a5d' }, Utils.getOccasionPageTitleText(props.occasionMode))),
            React.createElement(LeftPageHeader, { testID: 'test-id-e4e7dfc7-9ea3-6c70-8d02-b9d55d415bc3' }, getLeftScreenNavigation(props)),
            React.createElement(RightPageHeader, { testID: 'test-id-cc97371b-7e9e-2003-6c37-f8d51ba3e1c2' }, getRightScreenNavigation(props))),
        React.createElement(Page, { testID: 'test-id-df0d175c-52ae-79c6-8f4b-18f183838922', scrollEnabled: true, content: getOccasionTypeList(props) },
            React.createElement(CenterPageHeader, { testID: 'test-id-0a56f043-3824-dfdf-7330-277853a3395e' },
                React.createElement(H2, { testID: 'test-id-0a56f043-3824-dfdf-7330-277853a3395e' }, 'Тип важной даты')),
            React.createElement(LeftPageHeader, { testID: 'test-id-60a0d15c-9da2-3645-cc04-5d34a27f2b55' },
                React.createElement(NavigationBackButton, { testID: 'test-id-e01d5ac7-ad78-d1b8-8df9-b3fc7b9a277e', onClick: props.navigateBack, title: false }))))));
export default ViewOccasion;
//# sourceMappingURL=ViewOccasion.js.map