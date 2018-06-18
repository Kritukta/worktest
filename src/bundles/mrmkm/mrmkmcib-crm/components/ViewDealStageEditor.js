/*
 * Created by Topchy A
 */
import React from 'react';
import Styles from './styles/ViewDealStageEditorStyles';
import { Button, DateInput, DateInputTypes, Grid, Row, Col, Label, NumberInput, Text, View, ButtonType, Textarea, Popover, PopoverType, PopoverPosition, SplitPanel, ContentPanel, LeftPageHeader, NavigationTextButton, Page, Table, TableBody, TableCell, TableRow, } from 'ufs-mobile-platform';
import moment from 'moment';
import { Enums } from '../Enums';
import PopoverTarget from '../modules/PopoverTarget';
import * as util from "../common/Util";
/*
 * UI stateless functional component presenter for "DealStagesEditor" container.
 */
const ViewDealStageEditor = (props) => (React.createElement(View, { testID: 'test-id-8fa430e2049576c60e8a', style: Styles.Root },
    React.createElement(Grid, { testID: 'StageDetails' },
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-0' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-1', text: 'Наименование стадии ДК клиента', block: true },
                    React.createElement(Text, { testID: 'test-id-203a7d11132e6a9a2ff3a' }, props.stage.stage.value)))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-1' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-22', text: 'Дата начала стадии', block: true },
                    React.createElement(Text, { testID: 'grid-row-StageDetails-3' }, props.stage.start && props.stage.start.date && util.format.date(props.stage.start.date))))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-2' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 6 },
                React.createElement(View, { style: Styles.InputContainer },
                    React.createElement(DateInput, { disabled: props.activePosition < 0, testID: 'test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg', value: props.inputStageEndDate || undefined, label: "\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0434\u0438\u0438", format: 'dd.MM.yyyy', locale: 'ru', placeholder: '\u041D\u0435\u0442', dateType: DateInputTypes.DAY_PICKER, min: props.stage.start && props.stage.start.date && moment().isAfter(props.stage.start.date) ? new Date(props.stage.start.date) : new Date(), onChange: (e) => e && props.performInputStageEndDate(e) }))),
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 6 },
                React.createElement(View, { style: Styles.InputContainer },
                    React.createElement(NumberInput, { disabled: props.activePosition < 0, testID: 'test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4', fractionalDigitsCount: 0, label: '\u0421\u0440\u043E\u043A', maxLength: 6, value: props.inputStageTerm || '', onChange: (value) => props.performInputStageTerm(value) })))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-3' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(View, { style: Styles.UnderlinedContainer },
                    React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-6', text: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", block: true },
                        React.createElement(Text, { testID: 'test-id-203a7d32e6a9a2ff3a' }, props.commentText))))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-4' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(View, { style: Styles.InputTextContainer },
                    React.createElement(Textarea, { testID: 'test-id-6655bac1-3158-4f52-wef-24fwrqf', value: props.inputComment, placeholder: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', onChange: props.performInputComment, maxLength: 600 })))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-5' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(View, { style: Styles.saveButton },
                    React.createElement(PopoverTarget, { testID: 'test-id-e562234245556ca8af123', refName: 'dealStagesEditorConfirm' }),
                    React.createElement(Button, { type: ButtonType.TEXT, testID: 'test-id-432e8c6f-4644-895c-qwrg-rqegqg', onExecute: props.isRoadMapShowOn ? props.performPopoverStagesEditorConfirmShow : props.performSaveStage },
                        React.createElement(Text, { testID: 'test-id-432e8c6f-4644-qr-a1ec-qregq' }, 'Сохранить')))))),
    React.createElement(Popover, { testID: 'test-id-13466acf-clientEditorConfirm', target: PopoverTarget.getRef('dealStagesEditorConfirm'), opened: props.isVisiblePopoverStagesEditorConfirm, onOutsideTap: props.performPopoverStagesEditorConfirmHide, type: PopoverType.WIDE, style: {
            height: 168,
            width: 500
        }, position: [PopoverPosition.TOP] }, clientRoadMapMenuContent(props))));
const clientRoadMapMenuContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: util.getNavigationContentStringDealConfirmSaveStagePopover(Enums.NavigationContentAppCrmDealConfirmSaveStagePopover.AppCrmDealRoadMapPopover_Zero) },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { content: React.createElement(Table, { testID: 'test-id-13466acf-clientRoadMapPopoverContent', underlined: false, noPaddings: true },
                React.createElement(TableBody, { testID: 'test-id-13466acf-clientRoadMapPopoverContent11' },
                    MenuRow(React.createElement(Text, { testID: 'test-id-13466acf-clientRoadMapPopoverContent42', style: Styles.PopoverTitleText }, 'Вы уверены, что хотите сохранить внесенные изменения?')),
                    MenuRow(// type={ButtonType.TEXT_RED}
                    React.createElement(NavigationTextButton, { testID: 'test-id-b7f63936356ac86976', onExecute: props.performStagesEditorConfirmNext, title: 'Да' })),
                    MenuRow(React.createElement(NavigationTextButton, { testID: 'test-id-d46eb4d7f0f430f48811', title: 'Нет', onExecute: props.performPopoverStagesEditorConfirmHide }), false))), testID: 'test-id-a5c9b50082e51eddd4457' }),
        React.createElement(Page, { content: React.createElement(Table, { testID: 'test-id-13466acf-clientRoadMapPopoverContent', underlined: false, noPaddings: true },
                React.createElement(TableBody, { testID: 'test-id-13466acf-clientRoadMapPopoverContent12' },
                    MenuRow(React.createElement(Text, { testID: 'test-id-13466acf-clientRoadMapPopoverContent42', style: Styles.PopoverTitleText }, 'Изменения будут также показаны в приложении клиента')),
                    MenuRow(React.createElement(NavigationTextButton, { testID: 'test-id-b7f639fac86976', onExecute: props.performSaveStage, title: 'Показать' })),
                    MenuRow(React.createElement(NavigationTextButton, { testID: 'test-id-d46eb4d7f0f430f48822', title: 'Отменить', onExecute: props.performPopoverStagesEditorConfirmHide }), false))), testID: 'test-id-a5c9b50082e51eddd4123' },
            React.createElement(LeftPageHeader, { testID: 'a5c9b50082e51eddd4123' })))));
const MenuRow = (children, underlined = true) => React.createElement(TableRow, { testID: 'test-id-13466acf-clientRoadMapPopoverContent2' },
    React.createElement(TableCell, { testID: 'test-id-13466acf-clientRoadMapPopoverContent3' },
        React.createElement(View, { key: ' Вы собираетесь  показать дорожную карту сделки ' + ++key, style: Styles.PopoverMenuRow }, children),
        underlined ? React.createElement(View, { key: ' underline   ' + ++key, style: Styles.PopoverRowUnderline }) : null));
let key = 0;
export default ViewDealStageEditor;
//# sourceMappingURL=ViewDealStageEditor.js.map