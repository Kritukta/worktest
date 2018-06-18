/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewNoteListStyles';
import { Button, ButtonType, CenterPageHeader, ContentPanel, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View } from 'ufs-mobile-platform';
import { LoaderWithText } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { SwipeableItem, IconRedMinus } from 'mrmkmcib-ui';
import ContainerNote from '../containers/ContainerNote';
import * as Utils from '../common/Util';
import { ErrorModal } from 'mrmkmcib-app';
const undefinedPlaceholder = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED);
const deleteButton = (props, note) => (React.createElement(View, { style: Styles.containerDeleteButton },
    React.createElement(View, { style: Styles.buttonDell },
        React.createElement(Button, { type: ButtonType.TEXT, testID: 'test-id-htsas-4644-895c-a1ec-45gwf', onExecute: () => { props.performCloseNoteDeletePanel(note); } },
            React.createElement(Text, { testID: 'test-id-ew5gqq-4644-895c-a1ec-yjsgaa' }, ' Отмена '))),
    React.createElement(View, { style: Styles.buttonDell },
        React.createElement(Button, { type: ButtonType.TEXT_RED, testID: 'test-id-432e8c6f-4644-895c-a1ec-uereab4', onExecute: () => { props.performNoteDelete(note); } },
            React.createElement(Text, { testID: 'test-id-yjsd-4644-895c-a1ec-5gqerga' }, ' Удалить ')))));
const getNoteListItemView = (props, note) => (React.createElement(View, { testID: 'test-id-432e8c6f-4644-895c-a1ec-reafas', style: Styles.noteListItemContainer },
    React.createElement(View, { style: Styles.swipeableRowContainer },
        React.createElement(Label, { testID: 'test-id-0033fd85-3fd6-fca1-cf45-e25874f3a1a6', header: '', block: false, text: note.type && note.type.value || undefinedPlaceholder },
            React.createElement(Text, { testID: 'test-id-6cfe0a36-c29d-b47a-d507-2ea6ebd0c49d' }, note.text))),
    props.isEditorMode
        ? null
        : React.createElement(Button, { testID: 'test-id-34wfw-hwedf-rtnd-etaga', onExecute: () => { props.navigateToNoteScreen(note); } },
            React.createElement(Icon, { testID: 'test-id-nsbasabe-kjeej-agrhh-nsdfa', disabled: true, type: IconType.MrmLink }))));
const getNoteListTableRows = (props) => props.inputNoteList.data.map((note, i) => (React.createElement(TableRow, { testID: 'test-id-gfk-26aa-dtsa-59ee-yhtg', key: `noteListTableRow_${i}`, onClick: props.isEditorMode
        ? () => { }
        : () => { props.navigateToNoteScreen(note); } },
    React.createElement(TableCell, { testID: 'test-id-nnrws-f6dc-dfd-a7b4-45gwe', style: Styles.noteTableCell },
        React.createElement(View, { testID: 'test-id-jdsdsd-913d-dea5-5d6f-6twgqe', style: Styles.noteTableCellView }, props.isEditorMode
            ? React.createElement(View, { style: Styles.swipeableRowContainer },
                React.createElement(View, { style: Styles.swipeableRowButtonContainer },
                    React.createElement(IconRedMinus, { testID: 'test-id-wrthw-75h-jfgs-5d6f-5hrt', onPress: () => { props.performOpenNoteDeletePanel(note); } })),
                React.createElement(View, { style: Styles.noteTableCellView },
                    React.createElement(SwipeableItem, { testID: 'test-id-kjda-b7d1-uetyr-e0a8-46hwtw', isLeftActionMenuOpen: false, isRightActionMenuOpen: props.noteListDeletePanel
                            .some((noteDeletePanel) => noteDeletePanel.id === note.id) ? true : false, leftActionMenu: React.createElement(View, null), rightActionMenu: deleteButton(props, note), onLeftActionMenuOpen: () => { }, onRightActionMenuOpen: () => props.performOpenNoteDeletePanel(note), onToggleLeft: () => { }, onToggleRight: () => { }, onPress: () => { }, disableSwipe: false }, getNoteListItemView(props, note))))
            : getNoteListItemView(props, note))))));
const getLoadingText = (props) => {
    if (props.noteListContextMode == Enums.NoteListContextMode.Agent) {
        return "Сохранение изменений по карточке представителя";
    }
    if (props.noteListContextMode == Enums.NoteListContextMode.Customer) {
        return "Сохранение изменений по карточке клиента";
    }
    return "";
};
const getLoader = (props) => (React.createElement(LoaderWithText, { text: getLoadingText(props), testID: "test-id-f2729856-0413-11e8-ba89-0ed5f89f718b" }));
const getErrorModal = (props) => {
    return (React.createElement(ErrorModal, { key: `getErrorModalWindow`, testID: `test-id-modal-error-activity-card-${new Date().getTime()}`, isVisible: props.isVisibleNoteListErrorModalWindow, titleText: "Произошла ошибка при изменении списка заметок", messageText: props.noteListSaveError && props.noteListSaveError.message || "Попробуйте снова или обратитесь в службу поддержки.", cancel: () => props.performChangeVisibleNoteListErrorModal(), repeat: () => props.performSave(), cacheDate: new Date() }));
};
const getNoteListTable = (props) => (props.noteListSaveInProgress || props.noteListContextMode == Enums.NoteListContextMode.None
    ? getLoader(props)
    : React.createElement(Table, { style: props.isEditorMode
            ? Styles.TableMargins
            : Styles.TableMargin, testID: 'test-id-yhwes-b03b-b9cc-f574-wrty452', underlined: false },
        React.createElement(TableBody, { testID: 'test-id-ukjds-edb7-20d0-8192-4faa' }, getNoteListTableRows(props))));
const getPlusPanel = (props) => (React.createElement(View, { style: Styles.plusPanelContainer },
    React.createElement(NavigationTextButton, { testID: 'test-id-props.navigateToNoteCreateScreen', title: 'Добавить', onExecute: props.navigateToNoteCreateScreen })));
const getNoteListContent = (props) => {
    return (React.createElement(View, { style: Styles.notePageContainer },
        props.isEditorMode &&
            props.noteListSaveInProgress == false ? getPlusPanel(props) : null,
        getNoteListTable(props),
        getErrorModal(props)));
};
const getLeftPageHeader = (props) => (props.isEditorMode
    ? React.createElement(LeftPageHeader, { testID: 'test-id-qeaw-748f-c629-wrnnnb-rnteb' },
        React.createElement(NavigationTextButton, { testID: 'test-id-16a1570f-4790-01ef-8819-484eb35b7fa4', title: 'Отмена', onExecute: props.performCancel }))
    : React.createElement(LeftPageHeader, { testID: 'test-id-b110a6ce-3b56-yerwh-9a6e-ejweq' },
        React.createElement(NavigationBackButton, { testID: 'test-id-yewq-0a7b-a1af-2c88-imdf', title: false, onClick: props.returnToPreviousNavigationArea })));
const getRightPageHeader = (props) => {
    if (props.isEditorMode == false &&
        Array.isArray(props.inputNoteList.data) &&
        props.inputNoteList.data.length == 0) {
        return React.createElement(RightPageHeader, { testID: 'test-id-0c0b2573-3382-8428-2633-f203b6ab6d6a' },
            React.createElement(NavigationTextButton, { testID: 'test-id-bb51a046-e6da-796d-0559-3d8547b40224', title: 'Добавить', onExecute: props.navigateToNoteCreateScreen }));
    }
    if (props.isEditorMode) {
        return React.createElement(RightPageHeader, { testID: 'test-id-adba0f75-edb4-aa90-3d73-4ec49847be37' },
            React.createElement(NavigationTextButton, { testID: 'test-id-16a1570f-4790-01ef-8819-484eb35b7fa4', title: 'Готово', onExecute: props.performSave }));
    }
    else if (props.currentAgent &&
        (props.currentAgent.accessLevel == Enums.AgentAccessLevel.MainTeamMember)) {
        return React.createElement(RightPageHeader, { testID: 'test-id-0c0b2573-3382-8428-2633-f203b6ab6d6a' },
            React.createElement(NavigationTextButton, { testID: 'test-id-bb51a046-e6da-796d-0559-3d8547b40224', title: 'Изменить', onExecute: props.performEdit }));
    }
    return React.createElement(View, { testID: "test-id-acbe7e6c-0772-11e8-ba89-0ed5f89f718b" });
};
const ViewNoteList = (props) => (React.createElement(SplitPanel, { testID: 'test-id-eba78ac8-96e8-5971-bfec-j4hwqqwr', id: Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteList) },
    React.createElement(ContentPanel, { testID: 'test-id-e153aa94-e50e-a7d6-c041-12e2efa87231', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-b43e9870-778f-8c95-7529-a55f7617a1db', scrollEnabled: true, content: getNoteListContent(props) },
            props.noteListSaveInProgress == false ? getLeftPageHeader(props)
                : React.createElement(View, { testID: "test-id-259bbeb4-041a-11e8-ba89-0ed5f89f718b" }),
            React.createElement(CenterPageHeader, { testID: 'test-id-6f4798df-649f-f25b-22b3-2980a15c70b8' },
                React.createElement(H2, { testID: 'test-id-6f4798df-649f-f25b-22b3-2980a15c70b8' }, 'Заметки')),
            props.noteListSaveInProgress == false ? getRightPageHeader(props)
                : React.createElement(View, { testID: "test-id-399ff650-041a-11e8-ba89-0ed5f89f718b" })),
        React.createElement(Page, { testID: 'test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1', scrollEnabled: true, content: React.createElement(ContainerNote, { testID: 'test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-6c085c6e-0a1d-d282-b3ec-d94bb76fd172' })))));
export default ViewNoteList;
//# sourceMappingURL=ViewNoteList.js.map