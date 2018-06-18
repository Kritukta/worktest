import React from 'react'

import {Styles} from './styles/ViewDealStagesStyles'
import * as ModelsDealStages from "../models/ModelsDealStages"
import {
    Button,
    ButtonType,
    CenterPageHeader,
    RightPageHeader,
    Col,
    ContentPanel,
    Grid,
    HintIcon,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    Panel,
    Popover,
    PopoverType,
    PopoverPosition,
    PanelType,
    Row,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHead,
    TableRow,
    TabSelector,
    OptionItem,
    Text,
    DateInput,
    View,
    DateInputTypes,
    RadioGroup,
    RadioButton,
    Textarea
} from 'ufs-mobile-platform'
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch'
import ContainerMemberList from '../containers/ContainerMemberList'
import {Models as ModelsApp, LoaderWithText, FullScreenError} from 'mrmkmcib-app'
import {Models} from 'mrmkmcib-crm'

import {Enums} from '../Enums'
import Error from '../models/Error'

import * as util from '../common/Util'

import PopoverTarget from '../modules/PopoverTarget'
import {defaultValues} from '../models/Models'
import ContainerDealStageEditor from '../containers/ContainerDealStageEditor'
import {format} from '../common/Util'
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor";

const NO_DATA: string = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA)
const ERROR_MESSAGE: string = 'Техническая ошибка. Пожалуйста, обратитесь в службу сопровождения.'
const SEARCH_IN_CLIENTS_TEAM = 'Поиск в команде клиента'
const SEARCH_IN_GENERAL_LIST = 'Поиск в общем списке'

const BackButtonHeader = (key:string, callback:()=>void, title:string): React.ReactElement<LeftPageHeader> => <LeftPageHeader
    key={key}
    testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-1-${key}`} >
    <NavigationBackButton
        testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-2-${key}`}
        title={false}
        onClick={callback} />
    <View
        style={Styles.navigationBackButtonTextAdjustment}
        testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-3-${key}`} >
        <NavigationTextButton
            testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4-${key}`}
            title={title}
            onExecute={callback} />
    </View>
</LeftPageHeader>

const ViewDealStagesMainContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    props.receivingInputParametersInProgress
        ?   <View style={Styles.dataLoaderContainer}>
                <LoaderWithText text= {'Загрузка данных...'}
                                testID="test-id-9e090ee1-c60f-c0ca-2bef-rgq3" />
            </View>
        :   props.receivingInputParametersError
            ?   <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-34wgwe'}
                                 title={
                                     props.receivingInputParametersError && props.receivingInputParametersError.comment && props.receivingInputParametersError.comment !== ''
                                         ? props.receivingInputParametersError.comment
                                         : ERROR_MESSAGE
                                 }
                                 description={
                                     props.receivingInputParametersError && props.receivingInputParametersError.message && props.receivingInputParametersError.message !== ''
                                         ? props.receivingInputParametersError.message
                                         : null
                                 }
                                 onRefresh={props.performReceivingInputParameters}/>
            :   props.saveDealStageInProgress
                ?   <View style={Styles.dataLoaderContainer}>
                        <LoaderWithText text= {'Изменение стадии сделки...'}
                                        testID="test-id-9e090ee1-c60f-c0ca-2bef-rgq3" />
                    </View>
                :   props.saveDealStageError
                    ?   <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-34wgwe'}
                                 title={
                                     props.saveDealStageError && props.saveDealStageError.comment && props.saveDealStageError.comment !== ''
                                         ? props.saveDealStageError.comment
                                         : ERROR_MESSAGE
                                 }
                                 description={
                                     props.saveDealStageError && props.saveDealStageError.message && props.saveDealStageError.message !== ''
                                         ? props.saveDealStageError.message
                                         : null
                                 }
                                 onRefresh={props.performSaveDealStage}/>
                    :   ViewDealStagesTabScreen(props)
)

const ViewDealStagesTabScreen: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    const activeIndex = props.stageList.findIndex ( ( clientStage ) => clientStage.isCurrent )

    return <View style={Styles.dataGridContainer}>
        <View testID='test-id-ae2f4942c59404f121' style={Styles.TabSelectorWrapperInaccessible}/>
        {/*TODO id:1 Отключение функционала в рамках релиза 2018-1*/}
        {
            props.isErrorEnable
            ?   <View style={Styles.containerError}>
                    <Panel  testID='test-id-9596a436-e524-bdd4-5261-1433g'
                        type={PanelType.ERROR_BOX}
                        hasIcon={false}>
                        <View testID='test-id-9596a436-e524-bdd4-5261-qrgr' style={Styles.validationErrorText}>
                            <Text testID='test-id-9596a436-e524-bdd4-5261-35tgwevq' style={Styles.errorText}>
                                {
                                    props.errorMessage
                                }
                            </Text>
                        </View>
                    </Panel>
                </View>
            : null
        }
        <View>
        </View>
        { props.currentStageTab === 0 ? (
            <View style={Styles.dataGridContainer}>
                <View style={Styles.dataGridPage}>
                    <Page scrollEnabled={true} testID='test-id-page-member-deal-view-213eqwf-2qwer-2wr-wege'
                          content={

            <View style={Styles.containerTable}>
            <Table testID='test-id-697d41ef203e8d0688' underlined={false}>
                <TableHead testID='test-id-71183943-c820-0397-5a5c-c6e0e7d89cdd'>
                    <TableColumn testID='test-id-d3e2c3160e2e4е' width={'140'}/>
                    <TableColumn testID='test-id-d3d31ed60e2345'/>
                    <TableColumn testID='test-id-d3e2c3160e2234' width={'140'}/>
                </TableHead>
                <TableBody testID='test-id-853ded92-dd06-2585-449f-0ac2d838fbbe'>
                    {props.accessibleStageList.data.map((stageClassifier: ModelsApp.Classifier, index: number) => {

                        let stageStatus: Enums.StageStatus = util.getStageStatus(stageClassifier, props.currentDeal.phaseClassifier, props.dealHistoryStageList)
                        let isDisabled: boolean = util.getDisableStatus(stageClassifier,props.currentDeal.phaseClassifier,props.dealPossibleStageList)  || !props.isStageListEnable
                        let isSelected: boolean = util.getSelectStatus(stageClassifier, props.inputStage)
                        let history: Models.HistoryStage = util.getHistoryStage(stageClassifier, props.dealHistoryStageList)
                        let stageText: string = util.getStageText(stageStatus,history,props.dealHistoryStageList)

                            return <TableRow testID='test-id-83dc53917ad7' key={stageClassifier.value + util.getRandomOperationUuid()}
                                             onClick={() => {
                                                 props.navigateToAdditionalFields(stageClassifier)
                                             }}
                                             style={{backgroundColor:'transparent'}}>
                                <TableCell testID='test-id-d46eb4d7f0f430f488' style={Styles.NoCellMargins}>

                                </TableCell>
                                <TableCell testID='test-id-efe90b2f-1b0c-7c11-bd36-accc0e8d1f4f' style={Styles.NoCellMargins}>
                                    <View testID='test-id-d54bcaa6-6bea-bbb8-0237-88b0565726a8'
                                          style={isDisabled ? Styles.StageDisabled : Styles.StageEnabled}>
                                        <View testID='test-id-d54bcaa6-6bea-bbb8-0237-88b0565726a8'
                                              style={[Styles.StageScreenWrapper]}>
                                            <View testID='test-id-b02bba1d-2e13-975b-25d6-4ae16fa22956'>
                                                <Text testID='test-id-ba56fda0-11c5-baa8-4c34-429aa509be89'
                                                      style={Styles.StageTop}>{`${stageClassifier.value}`}</Text>
                                            </View>
                                            <View style={Styles.stageTextContainer} testID='test-id-29832b05-fdcd-3350-441e-0f9699667599'>
                                                <Text testID='test-id-56d471e2-1646-7fe3-c477-8a4b3854532d'
                                                      numberOfLines={ 1 }
                                                      ellipsizeMode={ 'tail' }
                                                      style={Styles.StageBottom}>
                                                    {
                                                        stageText
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                        <View testID='test-id-51586db9e7e8b5de7f' style={Styles.StageScreenMark}>
                                            {
                                                isSelected
                                                ?   <Button disabled={isDisabled} testID='test-id-1b1e0133cb61102878'>
                                                        <Icon testID='test-id-f10d5aef12099ce5cb' type={IconType.MrmDone} />
                                                    </Button>
                                                :   null
                                            }
                                        </View>
                                    </View>
                                </TableCell>
                                <TableCell testID='test-id-d46eb4d7f0f430f482223' style={Styles.NoCellMargins}>

                                </TableCell>
                            </TableRow>
                        }
                    )}
                </TableBody>
            </Table>
            </View>
                              }>
                        <LeftPageHeader testID='test-id-ereq-6264-9c29-f6ed-rfwew'/>
                    </Page>
                </View>
            </View>) : (
            <View style={Styles.dataGridContainer}>
                <View style={Styles.StagesRoadMapTable}>
                    <Page scrollEnabled={true} testID='test-id-eqwf-2qwer-2wr-wege'
                          footer={<View style={Styles.BottomBarContainer}>
                              <Text testID='test-id-d46eb4d7f0f430f4ss8809'
                                    style={Styles.BottomBarText}>{
                                  props.isReadOnlyStages ? 'Клиент не видит дорожную карту' : 'Дорожная карта демонстрируется клиенту'
                              }</Text>
                              <View testID='test-id-d46eb4d7f0f430f48809' key={'dealStagesShowRoadMapBottomView'}
                                    style={props.isReadOnlyStages ? Styles.BottomButtonShow : Styles.BottomButtonHide}>
                                  <PopoverTarget testID='test-id-e562226ca8af123' refName={'dealStagesShowRoadMap'}/>
                                  <NavigationTextButton testID='test-id-d46eb4d7f0f430f488'
                                                        title={props.isReadOnlyStages ? 'Показать' : 'Отключить'}
                                                        onExecute={props.performPopoverClientRoadMapShow}/>
                              </View>
                          </View>}

                          content={
                              <View style={Styles.StageTab2Container}>
                                  <View testID='test-id-697d41ef203e8d0688' style={Styles.StagesTitleContainer}>
                                      <View testID='test-id-d46eb4d7f0f430f488' style={Styles.StageFirstCol}>
                                          <H2 testID='test-id-d46eb4d7f0f430f488'>Дорожная карта клиента</H2>
                                          <View testID='test-id-d46eb4d7f0f430f488' style={Styles.RoadMapHelpButton}>
                                              <HintIcon testID={'test-id-clientRoadMapHelpButton-button'}
                                                        text={`Вашему клиенту может быть доступно мобильное приложение ЕФС.\n\nВы можете включить отображение стадий текущей сделки для данного приложения. В этом случае клиент будет видеть стадии сделки в формате, что представлен в левой части данного экрана.\n`}
                                              />
                                          </View>
                                      </View>
                                      <View testID='test-id-d46eb4df0f430f488'>
                                          <H2 testID='test-id-d46eb4d7f0f430f4882'>Стадии CRM</H2>
                                      </View>
                                  </View>
                                  <View>
                                    <Table testID='test-id-697d41e4-9c6b-cbdc-c810-6f203e8d0688' underlined={false}>
                                      <TableHead testID='test-id-71183943-c820-0397-5a5c-c6e0e7d89cdd'>
                                          <TableColumn testID='test-id-d3e2c3160e2e' width={'50'}/>
                                          <TableColumn testID='test-id-d3d31ed60e2e' />
                                      </TableHead>
                                      <TableBody testID='test-id-853ded9ac2d838fbbe'>
                                          {props.stageList.map ( ( stageItem, index ) => {
                                                  const isLast = index === (props.stageList.length - 1)

                                                  return <TableRow testID='test-id-83dc53917ad7' key={stageItem.stage.value}
                                                                   style={{backgroundColor: 'transparent'}}>
                                                      <TableCell testID='test-id-d46eb4db-a181-d182-0c3b-17f0f430f488'
                                                                 style={Styles.NoCellMargins}>
                                                          <StageProgress isStart={index === 0} isEnd={isLast}
                                                                         disabled={props.isReadOnlyStages}
                                                                         activePosition={index - activeIndex}/>
                                                      </TableCell>
                                                      <TableCell testID='test-id-efe90b2f-1b0c-7c11-bd36-accc0e8d1f4f'
                                                                 style={Styles.NoCellMargins}>
                                                          {clientStageRow ( stageItem, () => props.navigateToStageDetails ( stageItem, index - activeIndex ), props.currentDeal.phaseClassifier, index - activeIndex )}
                                                      </TableCell>
                                                  </TableRow>
                                              }
                                          )}
                                      </TableBody>
                                  </Table>
                                  </View>
                                  <Popover testID='test-id-13466acf-clientRoadMapPopover11'
                                           target={PopoverTarget.getRef ( 'dealStagesShowRoadMap' )}
                                           opened={props.isVisiblePopoverClientRoadMap}
                                           onOutsideTap={props.performPopoverClientRoadMapHide}
                                           type={PopoverType.WIDE}
                                           style={{
                                               height: (props.isReadOnlyStages ? 164 : 186 ),
                                               width: 500
                                           }}
                                           position={[ PopoverPosition.TOP ]}>
                                      {clientRoadMapMenuContent ( props )}
                                  </Popover>
                              </View>

                          }>
                        <LeftPageHeader testID='test-id-ereq-626fwew'/>
                    </Page>
                </View>
            </View>
        )}
    </View>
}

export interface IPropsStageDetails {
    stage: Models.DealStage
}

export const StageDetails: React.StatelessComponent<IPropsStageDetails> = (props: IPropsStageDetails): React.ReactElement<View> => (
    <View testID='test-id-8fa430e2049576c60e8a' style={Styles.StageDetailsRoot}>
        <Grid testID={'StageDetails'}>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-0'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={4}>
                    <Label header={" "} testID={'grid-row-StageDetails-1'}
                           text={'Дата начала стадии'} block={true}>
                        <Text testID='test-id-203a7d32e6a9a2ff3a'>{props.stage.start && props.stage.start.date && util.format.date ( props.stage.start.date )}</Text>
                    </Label>
                </Col>
                <Col testID='test-id-55fab34c-57b9-1' xs={4}>
                    <Label header={" "} testID={'grid-row-StageDetails-2'}
                           text={'Дата завершения стадии'} block={true}>
                        <Text
                            testID='grid-row-StageDetails-3'>{props.stage.end && props.stage.end.date && util.format.date ( props.stage.end.date )}</Text>
                    </Label>
                </Col>
                <Col testID='test-id-55fab34c-57b9-1' xs={4}>
                    <Label header={" "} testID={'grid-row-StageDetails-4'}
                           text={'Срок нахождения на стадии дн.'} block={true}>
                        <Text
                            testID='grid-row-StageDetails-0'>{ props.stage.durationEstimate || props.stage.durationFact }</Text>
                    </Label>
                </Col>
            </Row>
            <Row testID='test-id-62db6a32ae-1' key={'grid-row-StageDetails-5'}>
                <Col testID='test-id-55fab34c-57b9-1' xs={12}>
                    <Label header={" "} testID={'grid-row-StageDetails-6'}
                           text={'Комментарий клиенту'} block={true}>
                        <Text testID='test-id-203a7d32e6a9a2ff3a'>{props.stage.comment}</Text>
                    </Label>
                </Col>
            </Row>
        </Grid>
    </View>
)


interface IPropsStageProgress {
    isStart?: boolean
    isEnd?: boolean
    activePosition:number
    disabled?: boolean
}

const StageProgress: React.StatelessComponent<IPropsStageProgress> = (props: IPropsStageProgress): React.ReactElement<View> => (
    <View style={Styles.StageProgressContainer}>
        <View style={[ Styles.StageProgressTopLine, props.disabled ? Styles.StageProgressTopLineDisabled : null,
            props.isStart ? Styles.StageProgressTopLineStart : null]}/>
        <View style={[Styles.StageProgressInternalCircle,
            props.activePosition === 0 ?  Styles.StageProgressInternalCircleActive :
                (props.disabled ? Styles.StageProgressInternalCircleInactiveDisabled : Styles.StageProgressInternalCircleInactiveEnabled),
            props.activePosition >= 0 ? Styles.StageProgressInternalCirclePastActive:
                (props.disabled ? Styles.StageProgressInternalCirclePastActiveDisabled : Styles.StageProgressInternalCirclePastActiveeEnabled)
        ]}>
            { props.activePosition === 0 ? <View style={[Styles.OuterCircle1, props.disabled ? Styles.OuterCircle1Disabled : null]}>
                <View style={Styles.OuterCircle2}/>
            </View>: null }
        </View>
        <View style={[Styles.StageProgressBottomLine, props.disabled ? Styles.StageProgressBottomLineDisabled : null,
            props.isEnd ? Styles.StageProgressBottomLineEnd : null ]} />
    </View>
)

const stageView = (isLast: boolean, stage: Models.DealStage, nextStage?: Models.DealStage | null,
                   system?: string|null, progress?: number, showDoneMark?: boolean,
                   showDetails?:(stage:Models.DealStage)=>void, readOnly?: boolean,
                   activePhase?: ModelsApp.Classifier): React.ReactElement<View> => <View
    testID='test-id-d54bcaa8b0565726a8' key={++key}
    style={showDetails ? Styles.StageRowContainer: Styles.StageCrmRow}>
    <View testID='test-id-d54bcaa8b0565726a8'
          style={showDetails ? Styles.StageDealWrapper: Styles.StageCrmWrapper}>
        <View testID='test-id-b02bba1ae16fa22956'>
            <Text testID='test-id-ba56fda29aa509be89'
                  style={showDetails ? Styles.StageTop : Styles.StageCrmMainText }>{`${stage.stage.value}`}</Text>
        </View>
        <View testID='test-id-29832b0f9699667599'>
            <Text testID='test-id-56d471ea4b3854532d'
                  style={showDetails ? Styles.StageBottom: Styles.StageCrmText }>{
                `${stage.start && stage.start.date && util.format.date(stage.start.date)} (${stage.start && stage.start.author && util.getAgentNameInitials(stage.start.author)}) ${stage.end && stage.end.date ? '- ' + util.format.date(stage.end.date) : ''} ${nextStage && nextStage.start && nextStage.start.author? '(' + util.getAgentNameInitials(nextStage.start.author) + ');' : ''} ${stage.durationFact} ${util.detectUnits(stage.durationFact,['день', 'дня', 'дней'])} ${nextStage ? '' : stage.durationEstimate + ' ' + util.detectUnits(stage.durationEstimate,['день', 'дня', 'дней'])}`}</Text>
        </View>
    </View>
    { showDetails ? (
        <View testID='test-id-51586db9e7e8b5de7f' style={Styles.StageDetailsIcon}>
            <Button disabled={false} testID='test-id-1b1e0133cb61102878' onExecute={()=>showDetails(stage)}>
                <Icon testID='test-id-f10d5aef12099ce5cb' type={IconType.MrmLink} />
            </Button>
        </View>
    ) : null }
    { !showDetails ? (
        <View testID='test-id-51586db9e7e8b5de7f' style={Styles.StageMark}>
            { activePhase && (activePhase.value === stage.stage.value) ? (
                <Button disabled={true} testID='test-id-1b1e0133cb61102878'>
                    <Icon testID='test-id-f10d5aef12099ce5cb' type={IconType.MrmDone} />
                </Button>
            ) : null }
        </View>
    ) : null }
    { stage.crmStages && stage.crmStages.length ? (
        <View style={ Styles.crmStagesContainerDisabled}>
            {
                stage.crmStages.map((crmStage:Models.DealStage, index): React.ReactElement<View> => {
                    const nextCrmStage = stage && stage.crmStages && stage.crmStages[index+1]
                    const isCrmLast = index === ( stage && stage.crmStages && stage.crmStages.length - 1)
                    return stageView(isLast, crmStage, nextCrmStage, system, progress, isCrmLast && isLast, undefined, true, activePhase)
                })
            }
        </View>
    ) : null }
</View>


const clientStageRow = (stage: Models.DealStage, showDetails:(stage:Models.DealStage)=>void,
                         activePhase: ModelsApp.Classifier, activePosition: number): React.ReactElement<View> => {
    const startDate = stage.start && stage.start.date && util.format.date ( stage.start.date )
    const endDate = stage.end && stage.end.date && util.format.date ( stage.end.date )
    const duration = stage.durationFact || stage.durationEstimate
    return <View
        testID='test-id-d54bcaa8b0565726a8111' key={++key} style={Styles.StageRowContainer}>
        <View testID='test-id-d54bcaa8b0565726a8111' style={Styles.StageDealWrapper}>
            <View testID='test-id-b02bba1ae16fa2295611'>
                <Text testID='test-id-ba56fda29aa509be89111' style={Styles.StageTop}>{`${stage.stage.value}`}</Text>
            </View>
            <View testID='test-id-29832b0f96996675991111'>
                <Text testID='test-id-56d471ea4b3854532d111'
                      style={Styles.StageBottom}>{
                    `${activePosition < 0 ? 'Завершена ' : startDate + '-'}${ endDate }; ${duration} ${util.detectUnits ( duration, [ 'день', 'дня', 'дней' ] )} ${activePosition < 0 ? '' : '(план)'}`}</Text>
            </View>
            <View testID='test-id-29832b0f9699667599111331'>
                <Text testID='test-id-56d471ea4b3854532d11231'
                      style={Styles.StageBottom}>{'Комментарий: ' + format.truncate( stage.comment, 80).replace('\n', ' ')}</Text>
            </View>
        </View>

        <View testID='test-id-51586db9e7e8b5de7f111' style={Styles.StageDetailsIcon}>
            <Button disabled={false} testID='test-id-1b1e0133cb61102878111111' onExecute={() => showDetails ( stage )}>
                <Icon testID='test-id-f10d5aef12099ce5cb11111' type={IconType.MrmLink}/>
            </Button>
        </View>

        {stage.crmStages && stage.crmStages.length ? (
            <View style={Styles.crmStagesContainerDisabled}>
                {
                    stage.crmStages.map ( ( crmStage: Models.DealStage, index ): React.ReactElement<View> => {
                        return crmStageRow ( crmStage, activePhase )
                    } )
                }
            </View>
        ) : null}
    </View>
}

const crmStageRow = (stage: Models.DealStage, activePhase: ModelsApp.Classifier): React.ReactElement<View> => {

    const startDate = stage.start && stage.start.date && util.format.date ( stage.start.date )
    const startAuthor = stage.start && stage.start.author && util.getAgentFullName(stage.start.author) && ` (${format.truncate( util.getAgentFullName(stage.start.author), 20)})`
    const endDate = stage.end && stage.end.date && util.format.date ( stage.end.date )
    const endAuthor = stage.end && stage.end.author && util.getAgentFullName(stage.end.author) && ` (${format.truncate(util.getAgentFullName(stage.end.author), 20)})`

    const duration = stage.durationFact || stage.durationEstimate
    return <View  testID='test-id-d54bcaa8b0565726a8222' key={++key} style={Styles.StageCrmRow}>
    <View testID='test-id-d54bcaa8b0565726a8222'
          style={Styles.StageCrmWrapper}>
        <View testID='test-id-b02bba1ae16fa22956222'>
            <Text testID='test-id-ba56fda29aa509be89222'
                  style={Styles.StageCrmMainText }>{`${stage.stage.value}`}</Text>
        </View>
        <View testID='test-id-29832b0f9699667599222'>
            <Text testID='test-id-56d471ea4b3854532d222'
                  style={Styles.StageCrmText }>{`${startDate}${startAuthor}`}</Text>
        </View>
        { stage.end ? (
            <View testID='test-id-2980f9699667599222'>
            <Text testID='test-id-56d471ea854532d222'
                  style={Styles.StageCrmText }>{
                `${endDate}${endAuthor} ${duration} ${util.detectUnits(duration,['день', 'дня', 'дней'])}`}</Text>
        </View>) : null }
    </View>

    <View testID='test-id-51586db9e7e8b5de7f222' style={Styles.StageMark}>
        { activePhase && (activePhase.value === stage.stage.value) ? (
            <Button disabled={true} testID='test-id-1b1e0133cb61102878222'>
                <Icon testID='test-id-f10d5aef12099ce5cb' type={IconType.MrmDone} />
            </Button>
        ) : null }
    </View>

</View>
}

interface IPropsStageRadio {
    selected: boolean
    disabled?: boolean | null
}

const StageRadioButton: React.StatelessComponent<IPropsStageRadio> = (props: IPropsStageRadio): React.ReactElement<View> => (
    <View style={Styles.RowCenter}>
        <View style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderColor: props.disabled ? '#dedede' : '#007aff',
            borderWidth: props.selected ? 6 : 1,
        }}>
        </View>
    </View>
)

const dealStagesSaveMenuContent = (props: IProps): React.ReactElement<View> => (
    <Table testID={'test-id-13466acf-clientRoadMapPopoverContent'} underlined={false} noPaddings={true}>
        <TableBody testID={'test-id-13466acf-clientRoadMapPopoverContent11'}>
            {MenuRow(
                <Text testID={'test-id-13466acf-clientRoadMapPopoverContent42'} style={Styles.PopoverTitleText}>
                    {
                        'Переход по стадии отразится на дорожной карте в приложении клиента'
                    }
                </Text>
            )}
            {MenuRow(
                <Button testID='test-id-b7f6393635aaaa6ac86976'
                        type={ButtonType.TEXT}
                        onExecute={ props.performSaveDealStage }>
                    <Text testID='test-id-ee8ba27b02198aa5e4f46'>{'Перейти'}</Text>
                </Button>
            )}
            {MenuRow(
                <Button testID='test-id-d46eb4d7f0f430f48811'
                        type={ButtonType.TEXT}
                        onExecute={ ()=>{
                            props.showDealStagesSavePopover(false)
                        }}>
                    <Text testID='test-id-ee8ba27b02198aa5e4f46'>{'Отменить'}</Text>
                </Button>,
                false
            )}
        </TableBody>
    </Table>
)

const clientRoadMapMenuContent = (props: IProps): React.ReactElement<View> => (
    <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                id={util.getNavigationContentStringDealRoadMapPopover(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_Zero)}>
        <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
            <Page content={<Table testID={'test-id-13466acf-clientRoadMapPopoverContent'} underlined={false} noPaddings={true}>
                <TableBody testID={'test-id-13466acf-clientRoadMapPopoverContent11'}>
                    {MenuRow(
                        <Text testID={'test-id-13466acf-clientRoadMapPopoverContent42'} style={Styles.PopoverTitleText}>
                            {props.isReadOnlyStages ?
                                'Вы уверены, что указали корректные даты стадий  дорожной карты для клиента?' :
                                'Вы уверены, что хотите отключить показ дорожной карты сделки в приложении клиента?'}
                        </Text>
                    )}
                    {MenuRow(
                        <Button testID='test-id-b7f6393635aaaa6ac86976' type={ButtonType.TEXT} onExecute={ props.performClientRoadMapNext }>
                            <Text testID='test-id-ee8ba27b02198aa5e4f46'>{'Да'}</Text>
                        </Button>
                    )}
                    {MenuRow(
                        <Button testID='test-id-d46eb4d7f0f430f48811' type={ButtonType.TEXT} onExecute={ props.performPopoverClientRoadMapHide }>
                            <Text testID='test-id-ee8ba27b02198aa5e4f46'>{'Нет'}</Text>
                        </Button>,
                        false
                    )}
                </TableBody>
            </Table>}
                  testID='test-id-a5c9b50082e51eddd4457'/>
            <Page content={<Table testID={'test-id-13466acf-clientRoadMapPopoverContent'} underlined={false} noPaddings={true}>
                <TableBody testID={'test-id-13466acf-clientRoadMapPopoverContent12'}>
                    {MenuRow(
                        <Text testID={'test-id-13466acf-clientRoadMapPopoverContent42'} style={Styles.PopoverTitleText}>
                            {props.isReadOnlyStages ?
                                'Вы собираетесь показать дорожную карту сделки в приложении клиента' :
                                'После отключения показа ДК клиент больше не сможет отследить стадию сделки в своем приложении'}
                        </Text>
                    )}
                    {MenuRow(
                        <Button testID='test-id-89a32f750056125697a' type={props.isReadOnlyStages ? ButtonType.TEXT : ButtonType.TEXT_RED}
                                            onExecute={props.performClientRoadMapActivate}>
                            <Text testID='test-id-ee8ba27b021985e4f46'>{props.isReadOnlyStages ? 'Показать' : 'Отключить'}</Text>
                        </Button>
                    )}
                    {MenuRow(
                        <Button testID='test-id-d46eb4d7f0f430f48822' type={ButtonType.TEXT} onExecute={ props.performPopoverClientRoadMapHide }>
                            <Text testID='test-id-ee8ba27b02198aa5e4f46'>{'Отменить'}</Text>
                        </Button>,
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

const ViewAdditionalFields = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-ViewDealStages-c7d0-7a11-ce02-443TF'
          style={Styles.additionalFieldsContainer}>
        {
            props.isRejection
                ?   <RadioGroup testID='test-id-9052b0979'
                                value={props.inputRejection.code || undefined}
                                onChange={(index, value) => props.performSelectRejection(props.classifierDictionary.SBRF_REQ_CLOSE_REASON.data[index])}>
                        {props.classifierDictionary.SBRF_REQ_CLOSE_REASON.data.map((e: ModelsApp.Classifier, i: number) => (
                            <RadioButton
                                testID='test-id-b9152954ffe' key={`radio-${e.code}-${i}`}
                                value={e.code}
                                label={util.getRowTemplate(e)}/>
                        ))}
                    </RadioGroup>
                :   ViewInputs(props)

        }

    </View>
)

const ViewInputs = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-ViewDealStages-c7d0-7a11-ce02-443TF'
          style={Styles.containerViewInputs}>
        {
            props.isSetMainClientManager
                ?   <Table noPaddings = {true}
                           testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'>
                        <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                            <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                      selectable={true}
                                      onClick={() => {
                                          props.showButtonPopoverMainClientManager(true)
                                      }}>
                                <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                           style={Styles.tableCell}>
                                    <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                          style={Styles.paddings}>
                                        <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                               header={''}
                                               text={'Главный клиентский менеджер'}
                                               block={false}>
                                            <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                                {
                                                    props.inputMainClientManager && props.inputMainClientManager.fullName
                                                        ?   props.inputMainClientManager.fullName
                                                        :   util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)
                                                }
                                            </Text>
                                        </Label>
                                    </View>
                                    <View style={Styles.iconContainer}>
                                        <View style={Styles.iconContainerMargin}>
                                            <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`MainClientManager`} >
                                                <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                        onExecute={() => {
                                                            props.showButtonPopoverMainClientManager(true)
                                                        }}>
                                                    <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                          type={IconType.MrmArrowDown}/>
                                                </Button>
                                            </PopoverTarget>
                                            <Popover testID='test-id-13466acf-decisionPopover'
                                                     target={PopoverTarget.getRef ('MainClientManager')}
                                                     opened={props.isButtonPopoverOpenedMainClientManager}
                                                     onOutsideTap={() => {
                                                         props.showButtonPopoverMainClientManager(false)
                                                     }}
                                                     type={PopoverType.WIDE}
                                                     style={Styles.chancePopoverSize}
                                                     position={[ PopoverPosition.BOTTOM ]}>
                                                {
                                                    getPopoverButtonMainClientManager(props)
                                                }
                                            </Popover>
                                        </View>
                                    </View>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                :   null
        }

        {
            props.isSetMainCreditOfficer
                ?   <Table noPaddings = {true}
                           testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'>
                        <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                            <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                      selectable={true}
                                      onClick={() => {
                                          props.showButtonPopoverMainCreditOfficer(true)
                                      }}>
                                <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                           style={Styles.tableCell}>
                                    <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                          style={Styles.paddings}>
                                        <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                               header={''}
                                               text={'Главный кредитный специалист сделки'}
                                               block={false}>
                                            <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                                {
                                                    props.inputMainCreditOfficer && props.inputMainCreditOfficer.fullName
                                                        ?   props.inputMainCreditOfficer.fullName
                                                        :   util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)
                                                }
                                            </Text>
                                        </Label>
                                    </View>
                                    <View style={Styles.iconContainer}>
                                        <View style={Styles.iconContainerMargin}>
                                            <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`MainCreditOfficer`} >
                                                <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                        onExecute={() => {
                                                            props.showButtonPopoverMainCreditOfficer(true)
                                                        }}>
                                                    <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                          type={IconType.MrmArrowDown}/>
                                                </Button>
                                            </PopoverTarget>
                                            <Popover testID='test-id-13466acf-decisionPopover'
                                                     target={PopoverTarget.getRef ('MainCreditOfficer')}
                                                     opened={props.isButtonPopoverOpenedMainCreditOfficer}
                                                     onOutsideTap={() => {
                                                         props.showButtonPopoverMainCreditOfficer(false)
                                                     }}
                                                     type={PopoverType.WIDE}
                                                     style={Styles.chancePopoverSize}
                                                     position={[ PopoverPosition.BOTTOM ]}>
                                                {
                                                    getPopoverButtonMainCreditOfficer(props)
                                                }
                                            </Popover>
                                        </View>
                                    </View>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                :   null
        }

        {
            props.isSetMemberMonitoring
                ?   <Table noPaddings = {true}
                           testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'>
                        <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                            <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                      selectable={true}
                                      onClick={() => {
                                          props.showButtonPopoverMemberMonitoring(true)
                                      }}>
                                <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                           style={Styles.tableCell}>
                                    <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                          style={Styles.paddings}>
                                        <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                               header={''}
                                               text={'Участник от под. мониторинга'}
                                               block={false}>
                                            <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                                {
                                                    props.inputMemberMonitoring && props.inputMemberMonitoring.fullName
                                                        ?   props.inputMemberMonitoring.fullName
                                                        :   util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)
                                                }
                                            </Text>
                                        </Label>
                                    </View>
                                    <View style={Styles.iconContainer}>
                                        <View style={Styles.iconContainerMargin}>
                                            <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`MemberMonitoring`} >
                                                <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                        onExecute={() => {
                                                            props.showButtonPopoverMemberMonitoring(true)
                                                        }}>
                                                    <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                          type={IconType.MrmArrowDown}/>
                                                </Button>
                                            </PopoverTarget>
                                            <Popover testID='test-id-13466acf-decisionPopover'
                                                     target={PopoverTarget.getRef ('MemberMonitoring')}
                                                     opened={props.isButtonPopoverOpenedMemberMonitoring}
                                                     onOutsideTap={() => {
                                                         props.showButtonPopoverMemberMonitoring(false)
                                                     }}
                                                     type={PopoverType.WIDE}
                                                     style={Styles.chancePopoverSize}
                                                     position={[ PopoverPosition.BOTTOM ]}>
                                                {
                                                    getPopoverButtonMemberMonitoring(props)
                                                }
                                            </Popover>
                                        </View>
                                    </View>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                :   null
        }

        {
            props.isSetPlannedFinishDate
                ?   <DateInput testID='test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg'
                               value={props.inputDealDate || undefined}
                               label="Плановая дата заключения сделки"
                               format='dd.MM.yyyy'
                               locale='ru'
                               placeholder='дд.мм.гггг'
                               dateType={DateInputTypes.DAY_PICKER}
                               min={util.getDate()}
                               onChange={(e: Date | null) => props.performInputDealDate(e)}/>
                :   null
        }
        {
            props.isSetCurrency
                ?   <Table noPaddings = {true}
                           testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.navigateToCurrencyPickerScreen()
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.tableCell}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.paddings}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Валюта'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputCurrency && props.inputCurrency.code && props.inputCurrency.value
                                                    ? `${props.inputCurrency.code} (${props.inputCurrency.value})`
                                                    : NO_DATA
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.iconContainer}>
                                    <View style={Styles.iconContainerMargin}>
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                onExecute={() => {
                                                    props.navigateToCurrencyPickerScreen()
                                                }}>
                                            <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                  type={IconType.MrmLink}/>
                                        </Button>
                                    </View>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                :   null
        }
        {
            props.isSetClientStageChanges
            ?   getCommentBlock(props)
            :   null
        }
    </View>
)

const getCommentBlock = (props: IProps): React.ReactElement<View> => {
    let trackingElement: Models.Tracking | null = util.getTrackingElement.byCrmStage(props.dealStageTracking,props.inputStage.value)
    return (
        <View testID='test-id-5jhwwb-gqaeh-qhwrs-3hqe-24fg'
              style={Styles.commentBlockContainer}>
            <View style={Styles.commentBlockTextContainer}>
                <Text style={Styles.commentBlockText}
                      testID='test-id-5jhwwb-w46jhw-q35hyw4-qwegq-42fqw'>
                    {'Переключение стадии сделки отразится на дорожной карте в приложении клиента. Вы можете оставить для него комментарий.'}
                </Text>
            </View>
            {
                trackingElement && trackingElement.comment
                ?   <View style={Styles.underlinedContainer}>
                        <Label header={" "} testID={'grid-row-StageDetails-6'}
                               text={`Последний комментарий для клиента`} block={true}>
                            <Text testID='test-id-203a7d32e6a9a2ff3a'>
                                {`${trackingElement.comment}`}
                            </Text>
                        </Label>
                    </View>
                :   null
            }
            <Textarea
                testID='test-id-q3whhd-sdfns-qgeh-42hjws-54gwrt'
                value={props.inputComment}
                label='Добавить комментарий'
                placeholder='Введите комментарий'
                onChange={props.performInputComment}
                maxLength={600}
            />
        </View>
    )
}

const getPopoverButtonMainClientManager = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-getMemberAddMenuContent-View-1'
          style={Styles.memberAddMenuContentContainer}>
        <View style={Styles.memberAddMenuContentContainerBorderButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMainClientManager(Enums.MemberListEmployeeSource.CustomerManaged)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT'>{SEARCH_IN_CLIENTS_TEAM}</Text>
            </Button>
        </View>
        <View style={Styles.memberAddMenuContentContainerButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMainClientManager(Enums.MemberListEmployeeSource.Employee)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT'>{SEARCH_IN_GENERAL_LIST}</Text>
            </Button>
        </View>
    </View>
)

const getPopoverButtonMainCreditOfficer = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-getMemberAddMenuContent-View-1'
          style={Styles.memberAddMenuContentContainer}>
        <View style={Styles.memberAddMenuContentContainerBorderButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMainCreditOfficer(Enums.MemberListEmployeeSource.CustomerManaged)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT'>{SEARCH_IN_CLIENTS_TEAM}</Text>
            </Button>
        </View>
        <View style={Styles.memberAddMenuContentContainerButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMainCreditOfficer(Enums.MemberListEmployeeSource.Employee)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT'>{SEARCH_IN_GENERAL_LIST}</Text>
            </Button>
        </View>
    </View>
)

const getPopoverButtonMemberMonitoring = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-getMemberAddMenuContent-View-1'
          style={Styles.memberAddMenuContentContainer}>
        <View style={Styles.memberAddMenuContentContainerBorderButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMemberMonitoring(Enums.MemberListEmployeeSource.CustomerManaged)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT'>{SEARCH_IN_CLIENTS_TEAM}</Text>
            </Button>
        </View>
        <View style={Styles.memberAddMenuContentContainerButton}>
            <Button testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2'
                    type={ButtonType.TEXT}
                    onExecute={()=>{
                        props.performInputEmployeeSourceMemberMonitoring(Enums.MemberListEmployeeSource.Employee)
                    }}>
                <Text testID='test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT'>{SEARCH_IN_GENERAL_LIST}</Text>
            </Button>
        </View>
    </View>
)


const additionalFields = (props: IProps): React.ReactElement<View> => (
    props.saveDealAdditionalFieldsInProgress
        ?   <View style={Styles.dataLoaderContainer}>
                <LoaderWithText text= {'Изменение сделки...'}
                                testID="test-id-9e090ee1-c60f-c0ca-2bef-rgq3" />
            </View>
        :   props.saveDealAdditionalFieldsError
            ?   <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-34wgwe'}
                                 title={
                                     props.saveDealAdditionalFieldsError && props.saveDealAdditionalFieldsError.comment && props.saveDealAdditionalFieldsError.comment !== ''
                                         ? props.saveDealAdditionalFieldsError.comment
                                         : ERROR_MESSAGE
                                 }
                                 description={
                                     props.saveDealAdditionalFieldsError && props.saveDealAdditionalFieldsError.message && props.saveDealAdditionalFieldsError.message !== ''
                                         ? props.saveDealAdditionalFieldsError.message
                                         : null
                                 }
                                 onRefresh={props.performSaveDealAdditionalFields}/>
            :   ViewAdditionalFields(props)
)

const ViewDealStages: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-ViewDealStages-ea0d-gqrg-17f2-64gfo'
          style={Styles.main}>
        <SplitPanel testID='test-id-ViewDealStages-c7d0-7a11-ce02-d9096d06a9fd'
                    id={util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)}>
            <ContentPanel testID='test-id-ViewDealStages-b6b5-9b76-5b8b-cdf253effcef'
                          style={{backgroundColor: '#fff'}}>

                <Page testID='test-id-ViewDealStages-aff6-11e7-abc4-cec278b6b50a'
                      scrollEnabled={false}
                      content={
                          ViewDealStagesMainContent(props)
                      }>
                    {BackButtonHeader('stagesBack', props.navigateToPreviousForm, 'Сделка')}
                    <CenterPageHeader testID='test-id-9662a970-244e-917f-12ad-7b3a17e7f249'>
                        <H2 testID='test-id-c8f09724-f76a-d25e-0683-00096a2c3202'>Стадии сделки</H2>
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-a773d1af-ed17-d87c-5286-7ef158b8087f'>
                        <PopoverTarget  style={Styles.button}
                                        testID='test-id-e56d-2226ca8af123'
                                        refName={`dealStagesSavePopover`} >
                            <Button testID='test-id-779dddf9-ed0f-4f7f-3980-c776776e61da'
                                    disabled={ !props.isSaveStageEnable || !props.isStageListEnable}
                                    type={ButtonType.TEXT}
                                    onExecute={props.onSaveDealStageButtonTap}>
                                <Text testID='test-id-3abdf7c1-e4c0-1968-e433-066519d187f9'>
                                    {'Сохранить'}
                                </Text>
                            </Button>
                        </PopoverTarget>
                        <Popover testID='test-id-13466acf-clientRoadMapPopover-23efw'
                                 target={PopoverTarget.getRef ( 'dealStagesSavePopover' )}
                                 opened={props.isDealStagesSavePopoverOpened}
                                 onOutsideTap={() => {
                                     props.showDealStagesSavePopover(false)
                                 }}
                                 type={PopoverType.WIDE}
                                 style={Styles.dealStagesSavePopover}
                                 position={[ PopoverPosition.BOTTOM ]}>
                            {dealStagesSaveMenuContent ( props )}
                        </Popover>
                    </RightPageHeader>
                </Page>

                <Page testID='test-id-ViewDealStages-aff6-11e7-abc4-1qeuyrgf8'
                      scrollEnabled={true}
                      content={
                          additionalFields(props)
                      }>
                    {BackButtonHeader('stagesBack', props.navigateBackWithResetData, 'Изменение стадии')}
                    <CenterPageHeader testID='test-id-9662a970-244e-917f-12ad-7b3a17e7f249'>
                        {
                            props.isRejection
                                ?   <H2 testID='test-id-c8f09724-f76a-d25e-0683-00096a2c3202'>Причина закрытия</H2>
                                :   <H2 testID='test-id-c8f09724-f76a-d25e-0683-00096a2c3202'>Дополнение информации для перевода стадии</H2>
                        }

                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-a773d1af-ed17-d87c-5286-7ef158b8087f'>
                        {
                            props.isRejection
                                ?   null
                                :   <View style={Styles.button}
                                          testID='test-id-e56d-gthwrqqrge'>
                                        <Button testID='test-id-779dddf9-ed0f-4f7f-3980-c776776e61da'
                                                disabled={ !props.isSaveAdditionalFieldsEnable }
                                                type={ButtonType.TEXT}
                                                onExecute={props.performSaveDealAdditionalFields}>
                                            <Text testID='test-id-3abdf7c1-e4c0-1968-e433-066519d187f9'>
                                                {'Сохранить'}
                                            </Text>
                                        </Button>
                                    </View>
                        }
                    </RightPageHeader>
                </Page>

                <Page testID='test-id-b21542d3-d8f2-5b1c-75fd-bec2406938e7' scrollEnabled={true} content={
                    <StageDetails  stage={props.selectedStage || defaultValues.dealStage} />
                }>
                    {BackButtonHeader('stagesDetailsBack', props.navigateBack, 'Стадии сделки')}
                    <CenterPageHeader testID='test-id-9662a97b3a17e7f249'>
                        <H2 testID='test-id-c8f09720096a2c3202'>{props.selectedStage && props.selectedStage.stage.value}</H2>
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-a773d1af-ed17-d87c-5286-7ef158b8087f'>
                        <NavigationTextButton testID='test-id-55680f06-52dd-a8c9-08b0-3137ee06a3a8' title={"Изменить"}
                                              onExecute={() => props.navigateToStageEditor(props.activePosition)}/>
                    </RightPageHeader>
                </Page>

                <Page testID='test-id-b21542dec2406938e7' scrollEnabled={true} content={
                    <ContainerDealStageEditor testID='test-id-b21542dec24sadf06938e7' />
                }>
                    {BackButtonHeader('stagesBack', props.navigateBack, 'Отменить')}
                    <CenterPageHeader testID='test-id-9662a970-244e-917f-12ad-7b3a17e7f249'>
                        <H2 testID='test-id-c8f09724-f76a-d25e-0683-00096a2c3202'>Изменение стадии</H2>
                    </CenterPageHeader>
                </Page>

                <Page testID='test-id-d9133974-6159-0bf3-ree-243tff'
                      scrollEnabled={false}
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-WRAE-ewgra-26f5-6d1f-qwegqg'/>
                      }>
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-qheqer'/>
                </Page>

                <Page testID='test-id-d9133974-6159-0bf3-ree-4gfqq'
                      scrollEnabled={false}
                      content={
                          <ContainerMemberList testID='test-id-viewDeal-page-list-employee-34grveg'/>
                      }>
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-4hwrhwehq2'/>
                </Page>

            </ContentPanel>
            <View testID='test-id-ViewDealStages-ea0d-gqrg-17f2-64gfo'/>
        </SplitPanel>
    </View>
)


export interface IProps {
    testID:string,
    currentDeal: Models.Deal
    isAccessibleStages: boolean
    stageList: Array<Models.DealStage>
    selectedStage: Models.DealStage
    activePosition: number
    crmStages: Models.CrmStagesList
    progress: number
    system: string | null
    isInputDealDateEnable: boolean
    isRejection: boolean
    inputRejection: ModelsApp.Classifier
    saveDealAdditionalFieldsInProgress: boolean
    saveDealAdditionalFieldsError: Error | null
    saveDealStageInProgress:boolean
    saveDealStageError: Error | null
    isReadOnlyStages: boolean
    receivingInputParametersInProgress: boolean
    receivingInputParametersError: Error | null
    inputDealDate: Date | null
    currentStageStatus: ModelsDealStages.ICurrentStageStatus
    currentStageTab: number
    isErrorEnable: boolean
    isSaveStageEnable: boolean
    classifierDictionary: ModelsApp.ClassifierDictionary
    accessibleStageList: ModelsApp.ClassifierList
    dealPossibleStageList:  Models.DealPossibleStageList
    dealHistoryStageList: Models.DealHistoryStageList
    dealStageTracking: Models.DealStageTracking
    inputStage: ModelsApp.Classifier
    inputEquivalentSumString: string | null
    inputCurrency: ModelsApp.Classifier | null
    errorMessage: string
    isSetMainClientManager: boolean
    isSetMainCreditOfficer: boolean
    isSetMemberMonitoring: boolean
    isSetPlannedFinishDate: boolean
    isSetCloseReason: boolean
    isSetCurrency: boolean
    isSetClientStageChanges: boolean
    isSaveAdditionalFieldsEnable: boolean
    isButtonPopoverOpenedMainClientManager: boolean
    isButtonPopoverOpenedMainCreditOfficer: boolean
    isButtonPopoverOpenedMemberMonitoring: boolean
    isDealStagesSavePopoverOpened: boolean
    inputMainClientManager: ModelsApp.Employee | null
    inputMainCreditOfficer: ModelsApp.Employee | null
    inputMemberMonitoring: ModelsApp.Employee | null
    inputComment: string
    isStageListEnable: boolean
    performInputComment: ModelsDealStages.PERFORM_INPUT_STRING
    performSelectRejection: ModelsDealStages.PERFORM_SELECT_REJECTION
    performInputDealDate: ModelsDealStages.PERFORM_INPUT_DEAL_DATE
    performInputEquivalentSumString: ModelsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING
    performReceivingInputParameters: ModelsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS
    navigateToStageDetails: ModelsDealStages.NAVIGATE_TO_STAGE_DETAILS
    navigateToStageEditor: ModelsDealStages.NAVIGATE_TO_STAGE_EDITOR
    performSaveDealAdditionalFields: ModelsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS
    performSaveDealStage: ModelsDealStages.PERFORM_SAVE_DEAL_STAGE
    navigateToCurrencyPickerScreen: ModelsDealStages.NAVIGATE_TO_CURRENCY_PICKER_SCREEN
    navigateBack:  ModelsDealStages.NAVIGATE_BACK
    navigateBackWithResetData:  ModelsDealStages.NAVIGATE_BACK_WITH_RESET_DATA
    navigateToAdditionalFields: ModelsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS
    navigateToPreviousForm: ModelsDealStages.NAVIGATE_TO_PREVIOUS_FORM
    performChangeStageTab: ModelsDealStages.PERFORM_CHANGE_STAGE_TAB
    performPopoverClientRoadMapHelpShow: ModelsDealStages.NO_PARAMS_VOID
    performPopoverClientRoadMapHelpHide: ModelsDealStages.NO_PARAMS_VOID
    isVisiblePopoverClientRoadMapHelp: boolean
    performClientRoadMapActivate: ModelsDealStages.NO_PARAMS_VOID
    performClientRoadMapNext: ModelsDealStages.NO_PARAMS_VOID
    showButtonPopoverMainClientManager: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER
    showButtonPopoverMainCreditOfficer: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER
    showButtonPopoverMemberMonitoring: ModelsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING
    showDealStagesSavePopover: ModelsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER
    performPopoverClientRoadMapShow: ModelsDealStages.NO_PARAMS_VOID
    performPopoverClientRoadMapHide: ModelsDealStages.NO_PARAMS_VOID
    performSaveStage: ModelsDealStages.PERFORM_SAVE_STAGE
    performInputEmployeeSourceMainClientManager: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER
    performInputEmployeeSourceMainCreditOfficer: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIT_OFFICER
    performInputEmployeeSourceMemberMonitoring: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING
    onSaveDealStageButtonTap: ModelsDealStages.ON_SAVE_DEAL_STAGE_BUTTON_TAP
    isVisiblePopoverClientRoadMap: boolean
}

export default ViewDealStages

/*TODO id:1 Отключение функционала в рамках релиза 2018-1
* { props.isAccessibleStages  ? (
            <View testID='test-id-ae2f4942c59404f121' style={Styles.TabSelectorWrapper}>
            <TabSelector testID='test-id-f71c6851f4af28d214'
                         style={Styles.TabSelector }
                         value={`${props.currentStageTab}`}
                         onChange={( index: number ) => props.performChangeStageTab ( index )}
            >
                <OptionItem testID='test-id-dafa9a07924d0c17e0'
                            key={`tabStage-0`} value={'0'} title={'Изменение стадии'}/>
                <OptionItem testID='test-id-dafa9a07924d0c17e01'
                            key={`tabStage-1`} value={'1'} title={'Дорожная карта клиента'}/>
            </TabSelector>
        </View>
        ): <View testID='test-id-ae2f4942c59404f121' style={Styles.TabSelectorWrapperInaccessible}/> }
* */
