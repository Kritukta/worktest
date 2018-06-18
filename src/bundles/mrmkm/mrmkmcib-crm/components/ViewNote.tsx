/**
 * Created by RomanovAM on 22.11.17.
 */

import React from 'react'

import Styles from './styles/ViewNoteStyles'

import {
    Button,
    ButtonType,
    Center,
    CenterPageHeader,
    ContentPanel,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RightPageHeader,
    SplitPanel,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    TextInput,
    View,
    DateInputTypes,
    DateInput,
    Textarea,

} from 'ufs-mobile-platform'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsNoteList from "../models/ModelsNoteList"
import * as ModelsNote from "../models/ModelsNote"
import Error from "../models/Error"
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch'

import * as Utils from '../common/Util'


/*
 * UI stateless functional component presenter for "Note" container.
 */

export interface IProps {
    isEditorMode: boolean,
    performCancel: ModelsNote.PERFORM_CANCEL,
    navigateBack: ModelsNoteList.NAVIGATE_BACK,
    performSave: ModelsNote.PERFORM_SAVE,
    performEdit: ModelsNote.PERFORM_EDIT,
    navigateNoteBack: ModelsNote.NAVIGATE_NOTE_BACK,
    currentNote: Models.Note,
    performNoteTextUpdate: ModelsNote.PERFORM_NOTE_TEXT_UPDATE,
    navigateToCurrentNoteTypePickerScreen: ModelsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    testID: string,
}

const getNoteEditorExpandedModeScreen = (props: IProps): React.ReactElement<View> => (
        <Table noPaddings = {true}  testID = 'test-id-3913c0aa-5d83-11e8-9c2d-fa7ae01bbebc'>
            <TableBody testID = 'test-id-41bf5336-5d83-11e8-9c2d-fa7ae01bbebc'>
                <TableRow testID = 'test-id-1a7cc48e-5d83-11e8-9c2d-fa7ae01bbebc' onClick={props.navigateToCurrentNoteTypePickerScreen}>
                   <TableCell style = {Styles.noteTableRow} testID = 'test-id-89626164-5d84-11e8-9c2d-fa7ae01bbebc'> 
                       <View style = {Styles.noteTypeView}>
                            <Text testID='test-id-4fwfq-alkf-0ko-gwrq-4rrf' style={Styles.NoteTypeHead}>
                                Тип заметки
                            </Text>
                        </View>
                        <View style={Styles.NoteEditViewButtonContainer}>
                            <Text testID='test-id-gwgg-lktj-qerg-34154h-g300ik' style={Styles.NoteEditViewButtontext}>
                                {(props.currentNote && props.currentNote.type && props.currentNote.type.value) ? props.currentNote.type.value : 'Выбрать тип заметки'}
                            </Text>
                            <Button testID='test-id-246wj-3ww-jhww-5jjik-potj'>
                                <Icon testID='test-id-14tgw-qghj3h-t56yaa-4tgqqg-ahwg' disabled type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </TableCell>
                </TableRow>
                <TableRow testID='test-id-0fec5bc4-5d83-11e8-9c2d-fa7ae01bbebc'>
                   <TableCell testID = 'test-id-93a08264-5d84-11e8-9c2d-fa7ae01bbebc'>
                       <Textarea
                            testID='test-id-agd-ehnb-werg-egg-254wgrtb'
                            value={(props.currentNote && props.currentNote.text) ? props.currentNote.text : ''}
                            label='Текст заметки'
                            placeholder=''
                            onChange={(text: string) => props.performNoteTextUpdate (text) }
                        />
                    </TableCell>
            </TableRow>
        </TableBody>
        </Table>
)

const getNoteExpandedModeScreen = (props: IProps): React.ReactElement<Table> => (
        <Table testID='test-id-kjhvf-edfs-5rd-7ytf'
               underlined={ true }>
            <TableBody testID='test-id-jhwh-ehsthy-hsht-jhsab'>
                <TableRow testID='test-id-0oij4r-eytea-hgaf-hgbafg'>
                    <TableCell testID='test-id-yrth-yutyjhw-uyjht-jmtjh'>
                        <Label testID='test-id-qertgnh-yh-jh-qgf-iluik'
                               header={''}
                               text={
                                   (props.currentNote && props.currentNote.type && props.currentNote.type.value)
                                   ? props.currentNote.type.value
                                   : ''
                               }
                               block={true}>
                            <Text testID='test-id-utjyh-tdukygkhds-iuy-iuy-5ikj'>
                                {
                                    (props.currentNote && props.currentNote.text)? props.currentNote.text : ''
                                }
                            </Text>
                        </Label>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
)

const getNoteScreenPageContent = (props: IProps): React.ReactElement<View | Table> => (
    props.isEditorMode
        ? getNoteEditorExpandedModeScreen(props)
        : getNoteExpandedModeScreen(props)

)

const ViewNote: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
        <SplitPanel testID='test-id-2bf28a55-3ftgh-983f-8429-efvc3'
                    id={Utils.getNavigationNoteList(Enums.NavigationNoteList.NoteScreen)}>
            <ContentPanel testID='test-id-699b99a3-a2f6-3182-4681-regge'
                          style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-b89dfdd3-7480-9851-0d03-fa8636b41333'
                      scrollEnabled={true}
                      content={getNoteScreenPageContent(props)}>
                    <CenterPageHeader testID='test-id-3hwwg-5597-925b-814c-73gyg2'>
                        <H2 testID='test-id-o6krt-5597-925b-814c-o8ik5j' style={Styles.NoteTypeHead}>
                            {
                                props.isEditorMode
                                ? 'Редактировать заметку'
                                : 'Заметка'
                            }
                        </H2>
                    </CenterPageHeader>
                    <LeftPageHeader testID='test-id-ikr-9ea3-6c70-8d02-73645g'>
                        <NavigationBackButton testID='test-id-yrjuk-0029-abc5-7bea-erte'
                                              onClick={() => props.isEditorMode
                                                                ? props.performCancel()
                                                                : props.navigateBack()
                                              }
                                              title={false}/>
                    </LeftPageHeader>
                    {
                        props.isEditorMode
                        ?   <RightPageHeader testID='test-id-utrw-7e9e-2003-6c37-wehwe'>
                                <NavigationTextButton testID='test-id-twjrwj-cbea-b838-1776-thwew'
                                                      title={'Готово'}
                                                      onExecute={props.performSave}/>
                            </RightPageHeader>
                        :   <RightPageHeader testID='test-id-fuy-fa12-ujrthw-iury-jhrww'>
                                <NavigationTextButton   testID='test-id-ld4e-eytje-b838-pouyf-nbsr'
                                                        title={'Изменить'}
                                                        onExecute={props.performEdit}/>
                            </RightPageHeader>
                    }
                </Page>
                <Page testID='test-id-ghss-52ae-79c6-8f4b-6hthehg'
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-htgjj-2t4h-26f5-6d1f-425gg'/>
                      }>
                    <LeftPageHeader testID='test-id-hed-986d-yrht-4d51-hweqwgq'/>
                </Page>
            </ContentPanel>
        </SplitPanel>
)

export default ViewNote
