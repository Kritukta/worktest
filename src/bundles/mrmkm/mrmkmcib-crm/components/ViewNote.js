/**
 * Created by RomanovAM on 22.11.17.
 */
import React from 'react';
import Styles from './styles/ViewNoteStyles';
import { Button, CenterPageHeader, ContentPanel, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View, Textarea, } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch';
import * as Utils from '../common/Util';
const getNoteEditorExpandedModeScreen = (props) => (React.createElement(Table, { noPaddings: true, testID: 'test-id-3913c0aa-5d83-11e8-9c2d-fa7ae01bbebc' },
    React.createElement(TableBody, { testID: 'test-id-41bf5336-5d83-11e8-9c2d-fa7ae01bbebc' },
        React.createElement(TableRow, { testID: 'test-id-1a7cc48e-5d83-11e8-9c2d-fa7ae01bbebc', onClick: props.navigateToCurrentNoteTypePickerScreen },
            React.createElement(TableCell, { style: Styles.noteTableRow, testID: 'test-id-89626164-5d84-11e8-9c2d-fa7ae01bbebc' },
                React.createElement(View, { style: Styles.noteTypeView },
                    React.createElement(Text, { testID: 'test-id-4fwfq-alkf-0ko-gwrq-4rrf', style: Styles.NoteTypeHead }, "\u0422\u0438\u043F \u0437\u0430\u043C\u0435\u0442\u043A\u0438")),
                React.createElement(View, { style: Styles.NoteEditViewButtonContainer },
                    React.createElement(Text, { testID: 'test-id-gwgg-lktj-qerg-34154h-g300ik', style: Styles.NoteEditViewButtontext }, (props.currentNote && props.currentNote.type && props.currentNote.type.value) ? props.currentNote.type.value : 'Выбрать тип заметки'),
                    React.createElement(Button, { testID: 'test-id-246wj-3ww-jhww-5jjik-potj' },
                        React.createElement(Icon, { testID: 'test-id-14tgw-qghj3h-t56yaa-4tgqqg-ahwg', disabled: true, type: IconType.MrmLink }))))),
        React.createElement(TableRow, { testID: 'test-id-0fec5bc4-5d83-11e8-9c2d-fa7ae01bbebc' },
            React.createElement(TableCell, { testID: 'test-id-93a08264-5d84-11e8-9c2d-fa7ae01bbebc' },
                React.createElement(Textarea, { testID: 'test-id-agd-ehnb-werg-egg-254wgrtb', value: (props.currentNote && props.currentNote.text) ? props.currentNote.text : '', label: '\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u043C\u0435\u0442\u043A\u0438', placeholder: '', onChange: (text) => props.performNoteTextUpdate(text) }))))));
const getNoteExpandedModeScreen = (props) => (React.createElement(Table, { testID: 'test-id-kjhvf-edfs-5rd-7ytf', underlined: true },
    React.createElement(TableBody, { testID: 'test-id-jhwh-ehsthy-hsht-jhsab' },
        React.createElement(TableRow, { testID: 'test-id-0oij4r-eytea-hgaf-hgbafg' },
            React.createElement(TableCell, { testID: 'test-id-yrth-yutyjhw-uyjht-jmtjh' },
                React.createElement(Label, { testID: 'test-id-qertgnh-yh-jh-qgf-iluik', header: '', text: (props.currentNote && props.currentNote.type && props.currentNote.type.value)
                        ? props.currentNote.type.value
                        : '', block: true },
                    React.createElement(Text, { testID: 'test-id-utjyh-tdukygkhds-iuy-iuy-5ikj' }, (props.currentNote && props.currentNote.text) ? props.currentNote.text : '')))))));
const getNoteScreenPageContent = (props) => (props.isEditorMode
    ? getNoteEditorExpandedModeScreen(props)
    : getNoteExpandedModeScreen(props));
const ViewNote = (props) => (React.createElement(SplitPanel, { testID: 'test-id-2bf28a55-3ftgh-983f-8429-efvc3', id: Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteScreen) },
    React.createElement(ContentPanel, { testID: 'test-id-699b99a3-a2f6-3182-4681-regge', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-b89dfdd3-7480-9851-0d03-fa8636b41333', scrollEnabled: true, content: getNoteScreenPageContent(props) },
            React.createElement(CenterPageHeader, { testID: 'test-id-3hwwg-5597-925b-814c-73gyg2' },
                React.createElement(H2, { testID: 'test-id-o6krt-5597-925b-814c-o8ik5j', style: Styles.NoteTypeHead }, props.isEditorMode
                    ? 'Редактировать заметку'
                    : 'Заметка')),
            React.createElement(LeftPageHeader, { testID: 'test-id-ikr-9ea3-6c70-8d02-73645g' },
                React.createElement(NavigationBackButton, { testID: 'test-id-yrjuk-0029-abc5-7bea-erte', onClick: () => props.isEditorMode
                        ? props.performCancel()
                        : props.navigateBack(), title: false })),
            props.isEditorMode
                ? React.createElement(RightPageHeader, { testID: 'test-id-utrw-7e9e-2003-6c37-wehwe' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-twjrwj-cbea-b838-1776-thwew', title: 'Готово', onExecute: props.performSave }))
                : React.createElement(RightPageHeader, { testID: 'test-id-fuy-fa12-ujrthw-iury-jhrww' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-ld4e-eytje-b838-pouyf-nbsr', title: 'Изменить', onExecute: props.performEdit }))),
        React.createElement(Page, { testID: 'test-id-ghss-52ae-79c6-8f4b-6hthehg', content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-htgjj-2t4h-26f5-6d1f-425gg' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-hed-986d-yrht-4d51-hweqwgq' })))));
export default ViewNote;
//# sourceMappingURL=ViewNote.js.map