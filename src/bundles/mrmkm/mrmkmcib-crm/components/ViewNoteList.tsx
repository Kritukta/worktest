/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewNoteListStyles'

import {
    Button,
    ButtonType,
    CenterPageHeader,
    ContentPanel,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    TextInput,
    View,
    Textarea,
    NavigationIconButtonType,
    NavigationIconButton,
    Loader,
    Panel,
    PanelType
} from 'ufs-mobile-platform'
import {Models as ModelsApp, LoaderWithText} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsNoteList from "../models/ModelsNoteList"
import Error from "../models/Error"
import { SwipeableItem, IconRedMinus } from 'mrmkmcib-ui'
import ContainerNote from '../containers/ContainerNote'
import {
    TouchableOpacity,
} from 'react-native'
import * as Utils from '../common/Util'

import { ErrorModal } from 'mrmkmcib-app'

const undefinedPlaceholder: string = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED)

const deleteButton = (props: IProps, note: Models.Note): React.ReactElement<Button> => (
    <View style={Styles.containerDeleteButton}>
        <View style={Styles.buttonDell}>
            <Button type={ButtonType.TEXT}
                    testID='test-id-htsas-4644-895c-a1ec-45gwf'
                    onExecute={() => { props.performCloseNoteDeletePanel(note) }}>
                <Text testID='test-id-ew5gqq-4644-895c-a1ec-yjsgaa' >
                    {' Отмена '}
                </Text>
            </Button>
        </View>
        <View style={Styles.buttonDell}>
            <Button type={ButtonType.TEXT_RED}
                    testID='test-id-432e8c6f-4644-895c-a1ec-uereab4'
                    onExecute={() => { props.performNoteDelete(note) }}>
                <Text testID='test-id-yjsd-4644-895c-a1ec-5gqerga' >
                    {' Удалить '}
                </Text>
            </Button>
        </View>
    </View>
)

const getNoteListItemView = (props: IProps, note: Models.Note): React.ReactElement<View> => (
    <View testID='test-id-432e8c6f-4644-895c-a1ec-reafas'
          style={Styles.noteListItemContainer}>
        <View style={Styles.swipeableRowContainer}>
                <Label testID='test-id-0033fd85-3fd6-fca1-cf45-e25874f3a1a6'
                       header={ '' }
                       block={ false }
                       text={ note.type && note.type.value || undefinedPlaceholder }>
                    <Text testID='test-id-6cfe0a36-c29d-b47a-d507-2ea6ebd0c49d'>
                        { note.text }
                    </Text>
                </Label>
        </View>
        {
            props.isEditorMode
                ? null
                : <Button testID='test-id-34wfw-hwedf-rtnd-etaga'
                          onExecute={() => {props.navigateToNoteScreen(note)}}>
                <Icon testID='test-id-nsbasabe-kjeej-agrhh-nsdfa' disabled type={IconType.MrmLink} />
            </Button>
        }
    </View>
)

const getNoteListTableRows = (props: IProps): Array<React.ReactElement<TableRow>> => props.inputNoteList.data.map(
    (note: Models.Note, i: number): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-gfk-26aa-dtsa-59ee-yhtg'
                  key={`noteListTableRow_${i}`}
                  onClick={props.isEditorMode
                            ? () => {}
                            : () => {props.navigateToNoteScreen(note)}}>
            <TableCell testID='test-id-nnrws-f6dc-dfd-a7b4-45gwe'
                       style={Styles.noteTableCell}>
                <View testID='test-id-jdsdsd-913d-dea5-5d6f-6twgqe'
                      style={Styles.noteTableCellView}>
                    {
                        props.isEditorMode
                        ?   <View style={Styles.swipeableRowContainer}>
                                <View style={Styles.swipeableRowButtonContainer}>
                                    <IconRedMinus testID='test-id-wrthw-75h-jfgs-5d6f-5hrt'
                                                  onPress={() => {props.performOpenNoteDeletePanel(note)}} />
                                </View>
                                <View style={Styles.noteTableCellView}>
                                    <SwipeableItem testID='test-id-kjda-b7d1-uetyr-e0a8-46hwtw'

                                                   isLeftActionMenuOpen={false}
                                                   isRightActionMenuOpen={props.noteListDeletePanel
                                                        .some((noteDeletePanel): boolean => noteDeletePanel.id === note.id) ? true : false}

                                                   leftActionMenu={<View />}
                                                   rightActionMenu={deleteButton(props, note)}

                                                   onLeftActionMenuOpen={() => {}}
                                                   onRightActionMenuOpen={() => props.performOpenNoteDeletePanel(note)}

                                                   onToggleLeft={() => { }}
                                                   onToggleRight={() => { }}

                                                   onPress={() => { }}

                                                   disableSwipe={false}>
                                        {getNoteListItemView(props, note)}
                                    </SwipeableItem>
                                </View>
                            </View>
                        : getNoteListItemView(props, note)
                    }
                </View>
            </TableCell>
        </TableRow>
    )
)
const getLoadingText = (props: IProps): string => {

    if (props.noteListContextMode == Enums.NoteListContextMode.Agent) {
        return "Сохранение изменений по карточке представителя"
    }
    if (props.noteListContextMode == Enums.NoteListContextMode.Customer) {
        return "Сохранение изменений по карточке клиента"
    }
    return ""
}
const getLoader = (props: IProps): React.ReactElement<LoaderWithText> => (
        <LoaderWithText text = {getLoadingText(props)}
                        testID="test-id-f2729856-0413-11e8-ba89-0ed5f89f718b" />
)

const getErrorModal = (props: IProps) => {
    return (<ErrorModal
        key = {`getErrorModalWindow`}
        testID={ `test-id-modal-error-activity-card-${new Date().getTime()}` }
        isVisible={props.isVisibleNoteListErrorModalWindow}
        titleText={"Произошла ошибка при изменении списка заметок"}
        messageText={props.noteListSaveError && props.noteListSaveError.message || "Попробуйте снова или обратитесь в службу поддержки."}

        cancel={()=> props.performChangeVisibleNoteListErrorModal()}

        repeat={() => props.performSave()}

        cacheDate={new Date()}/>)
}
const getNoteListTable = (props: IProps): React.ReactElement<View | Table | LoaderWithText> => (
    props.noteListSaveInProgress || props.noteListContextMode == Enums.NoteListContextMode.None
    ?   getLoader(props)
    :   <Table style={props.isEditorMode
                        ? Styles.TableMargins
                        : Styles.TableMargin
               }
               testID='test-id-yhwes-b03b-b9cc-f574-wrty452'
               underlined={false}>
            <TableBody testID='test-id-ukjds-edb7-20d0-8192-4faa'>
                {getNoteListTableRows(props)}
            </TableBody>
        </Table>
)

const getPlusPanel = (props: IProps): React.ReactElement<View> => (
     <View style={Styles.plusPanelContainer}>
        <NavigationTextButton testID='test-id-props.navigateToNoteCreateScreen'
                              title={'Добавить'}
                              onExecute={props.navigateToNoteCreateScreen}/>
     </View>
)

const getNoteListContent = (props: IProps): React.ReactElement<View> => {

    return (
        <View style={Styles.notePageContainer}>
            {props.isEditorMode &&
             props.noteListSaveInProgress == false ? getPlusPanel(props) : null}
            {getNoteListTable(props)}
            {getErrorModal(props)}
        </View>
    )
}

const getLeftPageHeader = (props: IProps) => (
    props.isEditorMode
    ?   <LeftPageHeader testID='test-id-qeaw-748f-c629-wrnnnb-rnteb'>
            <NavigationTextButton testID='test-id-16a1570f-4790-01ef-8819-484eb35b7fa4'
                                  title={'Отмена'}
                                  onExecute={props.performCancel}/>
        </LeftPageHeader>
    :   <LeftPageHeader testID='test-id-b110a6ce-3b56-yerwh-9a6e-ejweq'>
            <NavigationBackButton testID='test-id-yewq-0a7b-a1af-2c88-imdf'
                                  title={false}
                                  onClick={props.returnToPreviousNavigationArea} />
        </LeftPageHeader>
)

const getRightPageHeader = (props: IProps) => {

    if (props.isEditorMode == false &&
        Array.isArray(props.inputNoteList.data) &&
        props.inputNoteList.data.length == 0) {
        return <RightPageHeader testID='test-id-0c0b2573-3382-8428-2633-f203b6ab6d6a'>
                    <NavigationTextButton testID='test-id-bb51a046-e6da-796d-0559-3d8547b40224'
                                          title={'Добавить'}
                                          onExecute={props.navigateToNoteCreateScreen}/>
                </RightPageHeader>
    }
    if (props.isEditorMode) {
        return <RightPageHeader testID='test-id-adba0f75-edb4-aa90-3d73-4ec49847be37'>
                    <NavigationTextButton testID='test-id-16a1570f-4790-01ef-8819-484eb35b7fa4'
                                      title={'Готово'}
                                      onExecute={props.performSave} />
                </RightPageHeader>
    } else if (props.currentAgent &&
        (props.currentAgent.accessLevel == Enums.AgentAccessLevel.MainTeamMember)) {

        return <RightPageHeader testID='test-id-0c0b2573-3382-8428-2633-f203b6ab6d6a'>
                    <NavigationTextButton testID='test-id-bb51a046-e6da-796d-0559-3d8547b40224'
                                  title={'Изменить'}
                                  onExecute={props.performEdit}/>
                </RightPageHeader>
    }

    return <View testID="test-id-acbe7e6c-0772-11e8-ba89-0ed5f89f718b"/>
}

const ViewNoteList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
        <SplitPanel testID='test-id-eba78ac8-96e8-5971-bfec-j4hwqqwr'
                    id={Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteList)}>
            <ContentPanel testID='test-id-e153aa94-e50e-a7d6-c041-12e2efa87231'
                          style={{ backgroundColor: '#fff' }}>
                <Page testID='test-id-b43e9870-778f-8c95-7529-a55f7617a1db'
                      scrollEnabled={true}
                      content={getNoteListContent(props)}>
                    {props.noteListSaveInProgress == false ? getLeftPageHeader(props)
                                                           : <View testID="test-id-259bbeb4-041a-11e8-ba89-0ed5f89f718b"/>}
                    <CenterPageHeader testID='test-id-6f4798df-649f-f25b-22b3-2980a15c70b8'>
                        <H2 testID='test-id-6f4798df-649f-f25b-22b3-2980a15c70b8'>
                            {'Заметки'}
                        </H2>
                    </CenterPageHeader>
                    {props.noteListSaveInProgress == false ? getRightPageHeader(props)
                                                           : <View testID="test-id-399ff650-041a-11e8-ba89-0ed5f89f718b"/>}
                </Page>
                <Page testID='test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1'
                      scrollEnabled={true}
                      content={<ContainerNote testID='test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1' />}>
                    <LeftPageHeader testID='test-id-6c085c6e-0a1d-d282-b3ec-d94bb76fd172' />
                </Page>
            </ContentPanel>
        </SplitPanel>
)

export interface IProps {
    testID: string,
    // func
    performEdit: ModelsNoteList.PERFORM_EDIT,
    performCancel: ModelsNoteList.PERFORM_CANCEL,
    performSave: ModelsNoteList.PERFORM_SAVE,
    // nav
    returnToPreviousNavigationArea: ModelsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA,
    navigateToNoteScreen: ModelsNoteList.NAVIGATE_TO_NOTE_SCREEN,
    navigateToNoteCreateScreen: ModelsNoteList.NAVIGATE_TO_NOTE_CREATE_SCREEN,
    // flags
    isEditorMode: boolean,
    noteListSaveInProgress: boolean,
    //err
    noteListSaveError: Error | null,


//******************************************


    performSaveNote: ModelsNoteList.PERFORM_SAVE_NOTE,
    performEditNote: ModelsNoteList.PERFORM_EDIT_NOTE,

    performNoteAdd: ModelsNoteList.PERFORM_NOTE_ADD,
    performNoteDelete: ModelsNoteList.PERFORM_NOTE_DELETE,
    navigateToNoteTypePickerScreen: ModelsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN,
    navigateToCurrentNoteTypePickerScreen:ModelsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    navigateToViewNotes: ModelsNoteList.NAVIGATE_TO_VIEW_NOTE,
    navigateBack: ModelsNoteList.NAVIGATE_BACK,
    navigateBackNote:ModelsNoteList.NAVIGATE_BACK_NOTE,
    performNoteUpdate: ModelsNoteList.PERFORM_NOTE_UPDATE,
    performNoteTextUpdate: ModelsNoteList.PERFORM_NOTE_TEXT_UPDATE,
    performNoteTypeUpdate: ModelsNoteList.PERFORM_NOTE_TYPE_UPDATE,
    performContainerReset: ModelsNoteList.PERFORM_CONTAINER_RESET,
    performCloseNoteDeletePanel: ModelsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL,
    performOpenNoteDeletePanel: ModelsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL,
    currentAgent: Models.Agent,
    currentCustomerManaged: Models.CustomerManaged,
    inputNoteList: Models.NoteList,
    currentNoteIndex: number | null,
    currentNote: Models.Note,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    isExpandedMode: boolean,
    noteListDeletePanel: Models.Note[],
    noteListContextMode: Enums.NoteListContextMode,
    isVisibleNoteListErrorModalWindow: boolean,
    performChangeVisibleNoteListErrorModal:ModelsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL,
}

export default ViewNoteList