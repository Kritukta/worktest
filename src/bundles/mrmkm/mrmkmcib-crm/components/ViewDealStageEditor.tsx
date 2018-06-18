/*
 * Created by Topchy A
 */

import React from 'react'

import Styles from './styles/ViewDealStageEditorStyles'

import {
    Button,
    DateInput,
    DateInputTypes,
    Grid,
    Row,
    Col,
    Label,
    NumberInput,
    Text,
    View,
    ButtonType,
    Textarea,
    Popover,
    PopoverType,
    PopoverPosition,
    SplitPanel,
    ContentPanel,
    LeftPageHeader,
    NavigationTextButton,
    Page,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from 'ufs-mobile-platform'
import moment from 'moment'

import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor"
import PopoverTarget from '../modules/PopoverTarget'
import * as util from "../common/Util"

/*
 * UI stateless functional component presenter for "DealStagesEditor" container.
 */

const ViewDealStageEditor: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-8fa430e2049576c60e8a' style={Styles.Root}>
        <Grid testID={'StageDetails'}>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-0'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <Label header={" "} testID={'grid-row-StageDetails-1'}
                           text={'Наименование стадии ДК клиента'} block={true}>
                        <Text testID='test-id-203a7d11132e6a9a2ff3a'>{ props.stage.stage.value }</Text>
                    </Label>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-1'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <Label header={" "} testID={'grid-row-StageDetails-22'}
                           text={'Дата начала стадии'} block={true}>
                        <Text
                            testID='grid-row-StageDetails-3'>{props.stage.start && props.stage.start.date && util.format.date ( props.stage.start.date )}</Text>
                    </Label>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-2'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={6}>
                    <View style={Styles.InputContainer}>
                        <DateInput disabled={props.activePosition < 0}
                                   testID='test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg'
                                   value={props.inputStageEndDate || undefined}
                                   label="Дата завершения стадии"
                                   format='dd.MM.yyyy'
                                   locale='ru'
                                   placeholder='Нет'
                                   dateType={DateInputTypes.DAY_PICKER}
                                   min={props.stage.start && props.stage.start.date && moment().isAfter(props.stage.start.date) ? new Date(props.stage.start.date) : new Date()}
                                   onChange={(e: Date | null) => e && props.performInputStageEndDate(e)}/>
                    </View>
                </Col>
                <Col testID='test-id-55fab34c-57b9-1' xs={6}>
                    <View style={Styles.InputContainer}>
                        <NumberInput disabled={props.activePosition < 0}
                                 testID='test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4'
                                 fractionalDigitsCount={0}
                                 label='Срок'
                                 maxLength={6}
                                 value={props.inputStageTerm || ''}
                                 onChange={(value: string): void => props.performInputStageTerm(value)}
                        />
                    </View>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-3'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <View style={Styles.UnderlinedContainer}>
                        <Label header={" "} testID={'grid-row-StageDetails-6'}
                               text="Комментарий" block={true}>
                            <Text testID='test-id-203a7d32e6a9a2ff3a'>{props.commentText}</Text>
                        </Label>
                    </View>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-4'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <View style={Styles.InputTextContainer}>
                        <Textarea
                            testID='test-id-6655bac1-3158-4f52-wef-24fwrqf'
                            value={props.inputComment}
                            placeholder='Добавить комментарий'
                            onChange={props.performInputComment}
                            maxLength={600}
                        />
                    </View>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-5'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <View style={Styles.saveButton}>
                        <PopoverTarget testID='test-id-e562234245556ca8af123' refName={'dealStagesEditorConfirm'} />
                        <Button type={ButtonType.TEXT}
                                testID='test-id-432e8c6f-4644-895c-qwrg-rqegqg'
                                onExecute={props.isRoadMapShowOn ? props.performPopoverStagesEditorConfirmShow : props.performSaveStage}>
                            <Text  testID='test-id-432e8c6f-4644-qr-a1ec-qregq' >
                                {'Сохранить'}
                            </Text>
                        </Button>
                    </View>
                </Col>
            </Row>
        </Grid>
        <Popover testID='test-id-13466acf-clientEditorConfirm'
                 target={PopoverTarget.getRef ( 'dealStagesEditorConfirm' )}
                 opened={ props.isVisiblePopoverStagesEditorConfirm  }
                 onOutsideTap={ props.performPopoverStagesEditorConfirmHide }
                 type={PopoverType.WIDE}
                 style={{
                     height: 168,
                     width: 500
                 }}
                 position={[ PopoverPosition.TOP ]}>
            {clientRoadMapMenuContent(props)}
        </Popover>
    </View>
)

const clientRoadMapMenuContent = (props: IProps): React.ReactElement<View> => (
    <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                id={util.getNavigationContentStringDealConfirmSaveStagePopover(Enums.NavigationContentAppCrmDealConfirmSaveStagePopover.AppCrmDealRoadMapPopover_Zero)}>
        <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
            <Page content={<Table testID={'test-id-13466acf-clientRoadMapPopoverContent'} underlined={false} noPaddings={true}>
                <TableBody testID={'test-id-13466acf-clientRoadMapPopoverContent11'}>
                    {MenuRow(
                        <Text testID={'test-id-13466acf-clientRoadMapPopoverContent42'} style={Styles.PopoverTitleText}>
                            {'Вы уверены, что хотите сохранить внесенные изменения?' }
                        </Text>
                    )}
                    {MenuRow( // type={ButtonType.TEXT_RED}
                        <NavigationTextButton testID='test-id-b7f63936356ac86976'
                                              onExecute={ props.performStagesEditorConfirmNext }
                                              title={'Да'} />
                    )}
                    {MenuRow(
                        <NavigationTextButton testID='test-id-d46eb4d7f0f430f48811'
                                              title={'Нет'}
                                              onExecute={ props.performPopoverStagesEditorConfirmHide }/>,
                        false
                    )}
                </TableBody>
            </Table>}
                  testID='test-id-a5c9b50082e51eddd4457'/>
            <Page content={<Table testID={'test-id-13466acf-clientRoadMapPopoverContent'} underlined={false} noPaddings={true}>
                <TableBody testID={'test-id-13466acf-clientRoadMapPopoverContent12'}>
                    {MenuRow(
                        <Text testID={'test-id-13466acf-clientRoadMapPopoverContent42'} style={Styles.PopoverTitleText}>
                            {'Изменения будут также показаны в приложении клиента'}
                        </Text>
                    )}
                    {MenuRow(
                        <NavigationTextButton testID='test-id-b7f639fac86976'
                                              onExecute={props.performSaveStage}
                                              title={ 'Показать'} />
                    )}
                    {MenuRow(
                        <NavigationTextButton testID='test-id-d46eb4d7f0f430f48822'
                                              title={'Отменить'}
                                              onExecute={ props.performPopoverStagesEditorConfirmHide }/>,
                        false
                    )}
                </TableBody>
            </Table>}
                  testID='test-id-a5c9b50082e51eddd4123'>
                <LeftPageHeader testID={'a5c9b50082e51eddd4123'} />
            </Page>
        </ContentPanel>
    </SplitPanel>
)

const MenuRow = (children:React.ReactElement<View>, underlined: boolean = true):React.ReactElement<View> => <TableRow testID={'test-id-13466acf-clientRoadMapPopoverContent2'}>
    <TableCell testID={'test-id-13466acf-clientRoadMapPopoverContent3'}>
        <View key={' Вы собираетесь  показать дорожную карту сделки '+ ++key }
              style={Styles.PopoverMenuRow}>
            {children}
        </View>
        { underlined ? <View key={' underline   '+ ++key }
                             style={Styles.PopoverRowUnderline}>

        </View>: null }
    </TableCell>
</TableRow>

let key = 0


export interface IProps {

    testID: string

    navigateBack: ModelsDealStageEditor.NO_PARAMS_VOID
    performInputComment: ModelsDealStageEditor.PERFORM_INPUT_STRING
    performInputStageEndDate: ModelsDealStageEditor.PERFORM_INPUT_DATE
    performInputStageTerm: ModelsDealStageEditor.PERFORM_INPUT_STRING
    performSaveStage: ModelsDealStageEditor.NO_PARAMS_VOID

    isVisiblePopoverStagesEditorConfirm: boolean
    performPopoverStagesEditorConfirmHide: ModelsDealStageEditor.NO_PARAMS_VOID
    performPopoverStagesEditorConfirmShow: ModelsDealStageEditor.NO_PARAMS_VOID
    performStagesEditorConfirmNext: ModelsDealStageEditor.NO_PARAMS_VOID

    activePosition: number
    isRoadMapShowOn: boolean,

    commentText: string
    inputStageEndDate: Date | null
    inputStageTerm: string
    inputComment: string
    stage: Models.DealStage
    crmStage: Models.DealStage
}

export default ViewDealStageEditor