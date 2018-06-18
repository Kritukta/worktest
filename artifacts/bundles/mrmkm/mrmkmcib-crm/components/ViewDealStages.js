import React from 'react';
import { Styles } from './styles/ViewDealStagesStyles';
import { Button, ButtonType, CenterPageHeader, RightPageHeader, Col, ContentPanel, Grid, HintIcon, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, Panel, Popover, PopoverType, PopoverPosition, PanelType, Row, SplitPanel, Table, TableBody, TableCell, TableColumn, TableHead, TableRow, Text, DateInput, View, DateInputTypes, RadioGroup, RadioButton, Textarea } from 'ufs-mobile-platform';
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch';
import ContainerMemberList from '../containers/ContainerMemberList';
import { LoaderWithText, FullScreenError } from 'mrmkmcib-app';
import { Enums } from '../Enums';
import * as util from '../common/Util';
import PopoverTarget from '../modules/PopoverTarget';
import { defaultValues } from '../models/Models';
import ContainerDealStageEditor from '../containers/ContainerDealStageEditor';
import { format } from '../common/Util';
const NO_DATA = util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO_DATA);
const ERROR_MESSAGE = 'Техническая ошибка. Пожалуйста, обратитесь в службу сопровождения.';
const SEARCH_IN_CLIENTS_TEAM = 'Поиск в команде клиента';
const SEARCH_IN_GENERAL_LIST = 'Поиск в общем списке';
const BackButtonHeader = (key, callback, title) => React.createElement(LeftPageHeader, { key: key, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-1-${key}` },
    React.createElement(NavigationBackButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-2-${key}`, title: false, onClick: callback }),
    React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-3-${key}` },
        React.createElement(NavigationTextButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4-${key}`, title: title, onExecute: callback })));
const ViewDealStagesMainContent = (props) => (props.receivingInputParametersInProgress
    ? React.createElement(View, { style: Styles.dataLoaderContainer },
        React.createElement(LoaderWithText, { text: 'Загрузка данных...', testID: "test-id-9e090ee1-c60f-c0ca-2bef-rgq3" }))
    : props.receivingInputParametersError
        ? React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.receivingInputParametersError && props.receivingInputParametersError.comment && props.receivingInputParametersError.comment !== ''
                ? props.receivingInputParametersError.comment
                : ERROR_MESSAGE, description: props.receivingInputParametersError && props.receivingInputParametersError.message && props.receivingInputParametersError.message !== ''
                ? props.receivingInputParametersError.message
                : null, onRefresh: props.performReceivingInputParameters })
        : props.saveDealStageInProgress
            ? React.createElement(View, { style: Styles.dataLoaderContainer },
                React.createElement(LoaderWithText, { text: 'Изменение стадии сделки...', testID: "test-id-9e090ee1-c60f-c0ca-2bef-rgq3" }))
            : props.saveDealStageError
                ? React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.saveDealStageError && props.saveDealStageError.comment && props.saveDealStageError.comment !== ''
                        ? props.saveDealStageError.comment
                        : ERROR_MESSAGE, description: props.saveDealStageError && props.saveDealStageError.message && props.saveDealStageError.message !== ''
                        ? props.saveDealStageError.message
                        : null, onRefresh: props.performSaveDealStage })
                : ViewDealStagesTabScreen(props));
const ViewDealStagesTabScreen = (props) => {
    const activeIndex = props.stageList.findIndex((clientStage) => clientStage.isCurrent);
    return React.createElement(View, { style: Styles.dataGridContainer },
        React.createElement(View, { testID: 'test-id-ae2f4942c59404f121', style: Styles.TabSelectorWrapperInaccessible }),
        props.isErrorEnable
            ? React.createElement(View, { style: Styles.containerError },
                React.createElement(Panel, { testID: 'test-id-9596a436-e524-bdd4-5261-1433g', type: PanelType.ERROR_BOX, hasIcon: false },
                    React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-qrgr', style: Styles.validationErrorText },
                        React.createElement(Text, { testID: 'test-id-9596a436-e524-bdd4-5261-35tgwevq', style: Styles.errorText }, props.errorMessage))))
            : null,
        React.createElement(View, null),
        props.currentStageTab === 0 ? (React.createElement(View, { style: Styles.dataGridContainer },
            React.createElement(View, { style: Styles.dataGridPage },
                React.createElement(Page, { scrollEnabled: true, testID: 'test-id-page-member-deal-view-213eqwf-2qwer-2wr-wege', content: React.createElement(View, { style: Styles.containerTable },
                        React.createElement(Table, { testID: 'test-id-697d41ef203e8d0688', underlined: false },
                            React.createElement(TableHead, { testID: 'test-id-71183943-c820-0397-5a5c-c6e0e7d89cdd' },
                                React.createElement(TableColumn, { testID: 'test-id-d3e2c3160e2e4\u0435', width: '140' }),
                                React.createElement(TableColumn, { testID: 'test-id-d3d31ed60e2345' }),
                                React.createElement(TableColumn, { testID: 'test-id-d3e2c3160e2234', width: '140' })),
                            React.createElement(TableBody, { testID: 'test-id-853ded92-dd06-2585-449f-0ac2d838fbbe' }, props.accessibleStageList.data.map((stageClassifier, index) => {
                                let stageStatus = util.getStageStatus(stageClassifier, props.currentDeal.phaseClassifier, props.dealHistoryStageList);
                                let isDisabled = util.getDisableStatus(stageClassifier, props.currentDeal.phaseClassifier, props.dealPossibleStageList) || !props.isStageListEnable;
                                let isSelected = util.getSelectStatus(stageClassifier, props.inputStage);
                                let history = util.getHistoryStage(stageClassifier, props.dealHistoryStageList);
                                let stageText = util.getStageText(stageStatus, history, props.dealHistoryStageList);
                                return React.createElement(TableRow, { testID: 'test-id-83dc53917ad7', key: stageClassifier.value + util.getRandomOperationUuid(), onClick: () => {
                                        props.navigateToAdditionalFields(stageClassifier);
                                    }, style: { backgroundColor: 'transparent' } },
                                    React.createElement(TableCell, { testID: 'test-id-d46eb4d7f0f430f488', style: Styles.NoCellMargins }),
                                    React.createElement(TableCell, { testID: 'test-id-efe90b2f-1b0c-7c11-bd36-accc0e8d1f4f', style: Styles.NoCellMargins },
                                        React.createElement(View, { testID: 'test-id-d54bcaa6-6bea-bbb8-0237-88b0565726a8', style: isDisabled ? Styles.StageDisabled : Styles.StageEnabled },
                                            React.createElement(View, { testID: 'test-id-d54bcaa6-6bea-bbb8-0237-88b0565726a8', style: [Styles.StageScreenWrapper] },
                                                React.createElement(View, { testID: 'test-id-b02bba1d-2e13-975b-25d6-4ae16fa22956' },
                                                    React.createElement(Text, { testID: 'test-id-ba56fda0-11c5-baa8-4c34-429aa509be89', style: Styles.StageTop }, `${stageClassifier.value}`)),
                                                React.createElement(View, { style: Styles.stageTextContainer, testID: 'test-id-29832b05-fdcd-3350-441e-0f9699667599' },
                                                    React.createElement(Text, { testID: 'test-id-56d471e2-1646-7fe3-c477-8a4b3854532d', numberOfLines: 1, ellipsizeMode: 'tail', style: Styles.StageBottom }, stageText))),
                                            React.createElement(View, { testID: 'test-id-51586db9e7e8b5de7f', style: Styles.StageScreenMark }, isSelected
                                                ? React.createElement(Button, { disabled: isDisabled, testID: 'test-id-1b1e0133cb61102878' },
                                                    React.createElement(Icon, { testID: 'test-id-f10d5aef12099ce5cb', type: IconType.MrmDone }))
                                                : null))),
                                    React.createElement(TableCell, { testID: 'test-id-d46eb4d7f0f430f482223', style: Styles.NoCellMargins }));
                            })))) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ereq-6264-9c29-f6ed-rfwew' }))))) : (React.createElement(View, { style: Styles.dataGridContainer },
            React.createElement(View, { style: Styles.StagesRoadMapTable },
                React.createElement(Page, { scrollEnabled: true, testID: 'test-id-eqwf-2qwer-2wr-wege', footer: React.createElement(View, { style: Styles.BottomBarContainer },
                        React.createElement(Text, { testID: 'test-id-d46eb4d7f0f430f4ss8809', style: Styles.BottomBarText }, props.isReadOnlyStages ? 'Клиент не видит дорожную карту' : 'Дорожная карта демонстрируется клиенту'),
                        React.createElement(View, { testID: 'test-id-d46eb4d7f0f430f48809', key: 'dealStagesShowRoadMapBottomView', style: props.isReadOnlyStages ? Styles.BottomButtonShow : Styles.BottomButtonHide },
                            React.createElement(PopoverTarget, { testID: 'test-id-e562226ca8af123', refName: 'dealStagesShowRoadMap' }),
                            React.createElement(NavigationTextButton, { testID: 'test-id-d46eb4d7f0f430f488', title: props.isReadOnlyStages ? 'Показать' : 'Отключить', onExecute: props.performPopoverClientRoadMapShow }))), content: React.createElement(View, { style: Styles.StageTab2Container },
                        React.createElement(View, { testID: 'test-id-697d41ef203e8d0688', style: Styles.StagesTitleContainer },
                            React.createElement(View, { testID: 'test-id-d46eb4d7f0f430f488', style: Styles.StageFirstCol },
                                React.createElement(H2, { testID: 'test-id-d46eb4d7f0f430f488' }, "\u0414\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"),
                                React.createElement(View, { testID: 'test-id-d46eb4d7f0f430f488', style: Styles.RoadMapHelpButton },
                                    React.createElement(HintIcon, { testID: 'test-id-clientRoadMapHelpButton-button', text: `Вашему клиенту может быть доступно мобильное приложение ЕФС.\n\nВы можете включить отображение стадий текущей сделки для данного приложения. В этом случае клиент будет видеть стадии сделки в формате, что представлен в левой части данного экрана.\n` }))),
                            React.createElement(View, { testID: 'test-id-d46eb4df0f430f488' },
                                React.createElement(H2, { testID: 'test-id-d46eb4d7f0f430f4882' }, "\u0421\u0442\u0430\u0434\u0438\u0438 CRM"))),
                        React.createElement(View, null,
                            React.createElement(Table, { testID: 'test-id-697d41e4-9c6b-cbdc-c810-6f203e8d0688', underlined: false },
                                React.createElement(TableHead, { testID: 'test-id-71183943-c820-0397-5a5c-c6e0e7d89cdd' },
                                    React.createElement(TableColumn, { testID: 'test-id-d3e2c3160e2e', width: '50' }),
                                    React.createElement(TableColumn, { testID: 'test-id-d3d31ed60e2e' })),
                                React.createElement(TableBody, { testID: 'test-id-853ded9ac2d838fbbe' }, props.stageList.map((stageItem, index) => {
                                    const isLast = index === (props.stageList.length - 1);
                                    return React.createElement(TableRow, { testID: 'test-id-83dc53917ad7', key: stageItem.stage.value, style: { backgroundColor: 'transparent' } },
                                        React.createElement(TableCell, { testID: 'test-id-d46eb4db-a181-d182-0c3b-17f0f430f488', style: Styles.NoCellMargins },
                                            React.createElement(StageProgress, { isStart: index === 0, isEnd: isLast, disabled: props.isReadOnlyStages, activePosition: index - activeIndex })),
                                        React.createElement(TableCell, { testID: 'test-id-efe90b2f-1b0c-7c11-bd36-accc0e8d1f4f', style: Styles.NoCellMargins }, clientStageRow(stageItem, () => props.navigateToStageDetails(stageItem, index - activeIndex), props.currentDeal.phaseClassifier, index - activeIndex)));
                                })))),
                        React.createElement(Popover, { testID: 'test-id-13466acf-clientRoadMapPopover11', target: PopoverTarget.getRef('dealStagesShowRoadMap'), opened: props.isVisiblePopoverClientRoadMap, onOutsideTap: props.performPopoverClientRoadMapHide, type: PopoverType.WIDE, style: {
                                height: (props.isReadOnlyStages ? 164 : 186),
                                width: 500
                            }, position: [PopoverPosition.TOP] }, clientRoadMapMenuContent(props))) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ereq-626fwew' }))))));
};
export const StageDetails = (props) => (React.createElement(View, { testID: 'test-id-8fa430e2049576c60e8a', style: Styles.StageDetailsRoot },
    React.createElement(Grid, { testID: 'StageDetails' },
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-0' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 4 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-1', text: 'Дата начала стадии', block: true },
                    React.createElement(Text, { testID: 'test-id-203a7d32e6a9a2ff3a' }, props.stage.start && props.stage.start.date && util.format.date(props.stage.start.date)))),
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 4 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-2', text: 'Дата завершения стадии', block: true },
                    React.createElement(Text, { testID: 'grid-row-StageDetails-3' }, props.stage.end && props.stage.end.date && util.format.date(props.stage.end.date)))),
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 4 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-4', text: 'Срок нахождения на стадии дн.', block: true },
                    React.createElement(Text, { testID: 'grid-row-StageDetails-0' }, props.stage.durationEstimate || props.stage.durationFact)))),
        React.createElement(Row, { testID: 'test-id-62db6a32ae-1', key: 'grid-row-StageDetails-5' },
            React.createElement(Col, { testID: 'test-id-55fab34c-57b9-1', xs: 12 },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-6', text: 'Комментарий клиенту', block: true },
                    React.createElement(Text, { testID: 'test-id-203a7d32e6a9a2ff3a' }, props.stage.comment)))))));
const StageProgress = (props) => (React.createElement(View, { style: Styles.StageProgressContainer },
    React.createElement(View, { style: [Styles.StageProgressTopLine, props.disabled ? Styles.StageProgressTopLineDisabled : null,
            props.isStart ? Styles.StageProgressTopLineStart : null] }),
    React.createElement(View, { style: [Styles.StageProgressInternalCircle,
            props.activePosition === 0 ? Styles.StageProgressInternalCircleActive :
                (props.disabled ? Styles.StageProgressInternalCircleInactiveDisabled : Styles.StageProgressInternalCircleInactiveEnabled),
            props.activePosition >= 0 ? Styles.StageProgressInternalCirclePastActive :
                (props.disabled ? Styles.StageProgressInternalCirclePastActiveDisabled : Styles.StageProgressInternalCirclePastActiveeEnabled)
        ] }, props.activePosition === 0 ? React.createElement(View, { style: [Styles.OuterCircle1, props.disabled ? Styles.OuterCircle1Disabled : null] },
        React.createElement(View, { style: Styles.OuterCircle2 })) : null),
    React.createElement(View, { style: [Styles.StageProgressBottomLine, props.disabled ? Styles.StageProgressBottomLineDisabled : null,
            props.isEnd ? Styles.StageProgressBottomLineEnd : null] })));
const stageView = (isLast, stage, nextStage, system, progress, showDoneMark, showDetails, readOnly, activePhase) => React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', key: ++key, style: showDetails ? Styles.StageRowContainer : Styles.StageCrmRow },
    React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8', style: showDetails ? Styles.StageDealWrapper : Styles.StageCrmWrapper },
        React.createElement(View, { testID: 'test-id-b02bba1ae16fa22956' },
            React.createElement(Text, { testID: 'test-id-ba56fda29aa509be89', style: showDetails ? Styles.StageTop : Styles.StageCrmMainText }, `${stage.stage.value}`)),
        React.createElement(View, { testID: 'test-id-29832b0f9699667599' },
            React.createElement(Text, { testID: 'test-id-56d471ea4b3854532d', style: showDetails ? Styles.StageBottom : Styles.StageCrmText }, `${stage.start && stage.start.date && util.format.date(stage.start.date)} (${stage.start && stage.start.author && util.getAgentNameInitials(stage.start.author)}) ${stage.end && stage.end.date ? '- ' + util.format.date(stage.end.date) : ''} ${nextStage && nextStage.start && nextStage.start.author ? '(' + util.getAgentNameInitials(nextStage.start.author) + ');' : ''} ${stage.durationFact} ${util.detectUnits(stage.durationFact, ['день', 'дня', 'дней'])} ${nextStage ? '' : stage.durationEstimate + ' ' + util.detectUnits(stage.durationEstimate, ['день', 'дня', 'дней'])}`))),
    showDetails ? (React.createElement(View, { testID: 'test-id-51586db9e7e8b5de7f', style: Styles.StageDetailsIcon },
        React.createElement(Button, { disabled: false, testID: 'test-id-1b1e0133cb61102878', onExecute: () => showDetails(stage) },
            React.createElement(Icon, { testID: 'test-id-f10d5aef12099ce5cb', type: IconType.MrmLink })))) : null,
    !showDetails ? (React.createElement(View, { testID: 'test-id-51586db9e7e8b5de7f', style: Styles.StageMark }, activePhase && (activePhase.value === stage.stage.value) ? (React.createElement(Button, { disabled: true, testID: 'test-id-1b1e0133cb61102878' },
        React.createElement(Icon, { testID: 'test-id-f10d5aef12099ce5cb', type: IconType.MrmDone }))) : null)) : null,
    stage.crmStages && stage.crmStages.length ? (React.createElement(View, { style: Styles.crmStagesContainerDisabled }, stage.crmStages.map((crmStage, index) => {
        const nextCrmStage = stage && stage.crmStages && stage.crmStages[index + 1];
        const isCrmLast = index === (stage && stage.crmStages && stage.crmStages.length - 1);
        return stageView(isLast, crmStage, nextCrmStage, system, progress, isCrmLast && isLast, undefined, true, activePhase);
    }))) : null);
const clientStageRow = (stage, showDetails, activePhase, activePosition) => {
    const startDate = stage.start && stage.start.date && util.format.date(stage.start.date);
    const endDate = stage.end && stage.end.date && util.format.date(stage.end.date);
    const duration = stage.durationFact || stage.durationEstimate;
    return React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8111', key: ++key, style: Styles.StageRowContainer },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8111', style: Styles.StageDealWrapper },
            React.createElement(View, { testID: 'test-id-b02bba1ae16fa2295611' },
                React.createElement(Text, { testID: 'test-id-ba56fda29aa509be89111', style: Styles.StageTop }, `${stage.stage.value}`)),
            React.createElement(View, { testID: 'test-id-29832b0f96996675991111' },
                React.createElement(Text, { testID: 'test-id-56d471ea4b3854532d111', style: Styles.StageBottom }, `${activePosition < 0 ? 'Завершена ' : startDate + '-'}${endDate}; ${duration} ${util.detectUnits(duration, ['день', 'дня', 'дней'])} ${activePosition < 0 ? '' : '(план)'}`)),
            React.createElement(View, { testID: 'test-id-29832b0f9699667599111331' },
                React.createElement(Text, { testID: 'test-id-56d471ea4b3854532d11231', style: Styles.StageBottom }, 'Комментарий: ' + format.truncate(stage.comment, 80).replace('\n', ' ')))),
        React.createElement(View, { testID: 'test-id-51586db9e7e8b5de7f111', style: Styles.StageDetailsIcon },
            React.createElement(Button, { disabled: false, testID: 'test-id-1b1e0133cb61102878111111', onExecute: () => showDetails(stage) },
                React.createElement(Icon, { testID: 'test-id-f10d5aef12099ce5cb11111', type: IconType.MrmLink }))),
        stage.crmStages && stage.crmStages.length ? (React.createElement(View, { style: Styles.crmStagesContainerDisabled }, stage.crmStages.map((crmStage, index) => {
            return crmStageRow(crmStage, activePhase);
        }))) : null);
};
const crmStageRow = (stage, activePhase) => {
    const startDate = stage.start && stage.start.date && util.format.date(stage.start.date);
    const startAuthor = stage.start && stage.start.author && util.getAgentFullName(stage.start.author) && ` (${format.truncate(util.getAgentFullName(stage.start.author), 20)})`;
    const endDate = stage.end && stage.end.date && util.format.date(stage.end.date);
    const endAuthor = stage.end && stage.end.author && util.getAgentFullName(stage.end.author) && ` (${format.truncate(util.getAgentFullName(stage.end.author), 20)})`;
    const duration = stage.durationFact || stage.durationEstimate;
    return React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8222', key: ++key, style: Styles.StageCrmRow },
        React.createElement(View, { testID: 'test-id-d54bcaa8b0565726a8222', style: Styles.StageCrmWrapper },
            React.createElement(View, { testID: 'test-id-b02bba1ae16fa22956222' },
                React.createElement(Text, { testID: 'test-id-ba56fda29aa509be89222', style: Styles.StageCrmMainText }, `${stage.stage.value}`)),
            React.createElement(View, { testID: 'test-id-29832b0f9699667599222' },
                React.createElement(Text, { testID: 'test-id-56d471ea4b3854532d222', style: Styles.StageCrmText }, `${startDate}${startAuthor}`)),
            stage.end ? (React.createElement(View, { testID: 'test-id-2980f9699667599222' },
                React.createElement(Text, { testID: 'test-id-56d471ea854532d222', style: Styles.StageCrmText }, `${endDate}${endAuthor} ${duration} ${util.detectUnits(duration, ['день', 'дня', 'дней'])}`))) : null),
        React.createElement(View, { testID: 'test-id-51586db9e7e8b5de7f222', style: Styles.StageMark }, activePhase && (activePhase.value === stage.stage.value) ? (React.createElement(Button, { disabled: true, testID: 'test-id-1b1e0133cb61102878222' },
            React.createElement(Icon, { testID: 'test-id-f10d5aef12099ce5cb', type: IconType.MrmDone }))) : null));
};
const StageRadioButton = (props) => (React.createElement(View, { style: Styles.RowCenter },
    React.createElement(View, { style: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderColor: props.disabled ? '#dedede' : '#007aff',
            borderWidth: props.selected ? 6 : 1,
        } })));
const dealStagesSaveMenuContent = (props) => (React.createElement(Table, { testID: 'test-id-13466acf-clientRoadMapPopoverContent', underlined: false, noPaddings: true },
    React.createElement(TableBody, { testID: 'test-id-13466acf-clientRoadMapPopoverContent11' },
        MenuRow(React.createElement(Text, { testID: 'test-id-13466acf-clientRoadMapPopoverContent42', style: Styles.PopoverTitleText }, 'Переход по стадии отразится на дорожной карте в приложении клиента')),
        MenuRow(React.createElement(Button, { testID: 'test-id-b7f6393635aaaa6ac86976', type: ButtonType.TEXT, onExecute: props.performSaveDealStage },
            React.createElement(Text, { testID: 'test-id-ee8ba27b02198aa5e4f46' }, 'Перейти'))),
        MenuRow(React.createElement(Button, { testID: 'test-id-d46eb4d7f0f430f48811', type: ButtonType.TEXT, onExecute: () => {
                props.showDealStagesSavePopover(false);
            } },
            React.createElement(Text, { testID: 'test-id-ee8ba27b02198aa5e4f46' }, 'Отменить')), false))));
const clientRoadMapMenuContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: util.getNavigationContentStringDealRoadMapPopover(Enums.NavigationContentAppCrmDealRoadMapPopover.AppCrmDealRoadMapPopover_Zero) },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { content: React.createElement(Table, { testID: 'test-id-13466acf-clientRoadMapPopoverContent', underlined: false, noPaddings: true },
                React.createElement(TableBody, { testID: 'test-id-13466acf-clientRoadMapPopoverContent11' },
                    MenuRow(React.createElement(Text, { testID: 'test-id-13466acf-clientRoadMapPopoverContent42', style: Styles.PopoverTitleText }, props.isReadOnlyStages ?
                        'Вы уверены, что указали корректные даты стадий  дорожной карты для клиента?' :
                        'Вы уверены, что хотите отключить показ дорожной карты сделки в приложении клиента?')),
                    MenuRow(React.createElement(Button, { testID: 'test-id-b7f6393635aaaa6ac86976', type: ButtonType.TEXT, onExecute: props.performClientRoadMapNext },
                        React.createElement(Text, { testID: 'test-id-ee8ba27b02198aa5e4f46' }, 'Да'))),
                    MenuRow(React.createElement(Button, { testID: 'test-id-d46eb4d7f0f430f48811', type: ButtonType.TEXT, onExecute: props.performPopoverClientRoadMapHide },
                        React.createElement(Text, { testID: 'test-id-ee8ba27b02198aa5e4f46' }, 'Нет')), false))), testID: 'test-id-a5c9b50082e51eddd4457' }),
        React.createElement(Page, { content: React.createElement(Table, { testID: 'test-id-13466acf-clientRoadMapPopoverContent', underlined: false, noPaddings: true },
                React.createElement(TableBody, { testID: 'test-id-13466acf-clientRoadMapPopoverContent12' },
                    MenuRow(React.createElement(Text, { testID: 'test-id-13466acf-clientRoadMapPopoverContent42', style: Styles.PopoverTitleText }, props.isReadOnlyStages ?
                        'Вы собираетесь показать дорожную карту сделки в приложении клиента' :
                        'После отключения показа ДК клиент больше не сможет отследить стадию сделки в своем приложении')),
                    MenuRow(React.createElement(Button, { testID: 'test-id-89a32f750056125697a', type: props.isReadOnlyStages ? ButtonType.TEXT : ButtonType.TEXT_RED, onExecute: props.performClientRoadMapActivate },
                        React.createElement(Text, { testID: 'test-id-ee8ba27b021985e4f46' }, props.isReadOnlyStages ? 'Показать' : 'Отключить'))),
                    MenuRow(React.createElement(Button, { testID: 'test-id-d46eb4d7f0f430f48822', type: ButtonType.TEXT, onExecute: props.performPopoverClientRoadMapHide },
                        React.createElement(Text, { testID: 'test-id-ee8ba27b02198aa5e4f46' }, 'Отменить')), false))), testID: 'test-id-a5c9b50082e51eddd4123' },
            React.createElement(LeftPageHeader, { testID: 'a5c9b50082e51eddd4123' })))));
const MenuRow = (children, underlined = true) => React.createElement(TableRow, { testID: 'test-id-13466acf-clientRoadMapPopoverContent2' },
    React.createElement(TableCell, { testID: 'test-id-13466acf-clientRoadMapPopoverContent3' },
        React.createElement(View, { key: ' Вы собираетесь  показать дорожную карту сделки ' + ++key, style: Styles.PopoverMenuRow }, children),
        underlined ? React.createElement(View, { key: ' underline   ' + ++key, style: Styles.PopoverRowUnderline }) : null));
let key = 0;
const ViewAdditionalFields = (props) => (React.createElement(View, { testID: 'test-id-ViewDealStages-c7d0-7a11-ce02-443TF', style: Styles.additionalFieldsContainer }, props.isRejection
    ? React.createElement(RadioGroup, { testID: 'test-id-9052b0979', value: props.inputRejection.code || undefined, onChange: (index, value) => props.performSelectRejection(props.classifierDictionary.SBRF_REQ_CLOSE_REASON.data[index]) }, props.classifierDictionary.SBRF_REQ_CLOSE_REASON.data.map((e, i) => (React.createElement(RadioButton, { testID: 'test-id-b9152954ffe', key: `radio-${e.code}-${i}`, value: e.code, label: util.getRowTemplate(e) }))))
    : ViewInputs(props)));
const ViewInputs = (props) => (React.createElement(View, { testID: 'test-id-ViewDealStages-c7d0-7a11-ce02-443TF', style: Styles.containerViewInputs },
    props.isSetMainClientManager
        ? React.createElement(Table, { noPaddings: true, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq' },
            React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                        props.showButtonPopoverMainClientManager(true);
                    } },
                    React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.tableCell },
                        React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.paddings },
                            React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Главный клиентский менеджер', block: false },
                                React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputMainClientManager && props.inputMainClientManager.fullName
                                    ? props.inputMainClientManager.fullName
                                    : util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)))),
                        React.createElement(View, { style: Styles.iconContainer },
                            React.createElement(View, { style: Styles.iconContainerMargin },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `MainClientManager` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showButtonPopoverMainClientManager(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('MainClientManager'), opened: props.isButtonPopoverOpenedMainClientManager, onOutsideTap: () => {
                                        props.showButtonPopoverMainClientManager(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.BOTTOM] }, getPopoverButtonMainClientManager(props))))))))
        : null,
    props.isSetMainCreditOfficer
        ? React.createElement(Table, { noPaddings: true, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq' },
            React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                        props.showButtonPopoverMainCreditOfficer(true);
                    } },
                    React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.tableCell },
                        React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.paddings },
                            React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Главный кредитный специалист сделки', block: false },
                                React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputMainCreditOfficer && props.inputMainCreditOfficer.fullName
                                    ? props.inputMainCreditOfficer.fullName
                                    : util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)))),
                        React.createElement(View, { style: Styles.iconContainer },
                            React.createElement(View, { style: Styles.iconContainerMargin },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `MainCreditOfficer` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showButtonPopoverMainCreditOfficer(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('MainCreditOfficer'), opened: props.isButtonPopoverOpenedMainCreditOfficer, onOutsideTap: () => {
                                        props.showButtonPopoverMainCreditOfficer(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.BOTTOM] }, getPopoverButtonMainCreditOfficer(props))))))))
        : null,
    props.isSetMemberMonitoring
        ? React.createElement(Table, { noPaddings: true, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq' },
            React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                        props.showButtonPopoverMemberMonitoring(true);
                    } },
                    React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.tableCell },
                        React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.paddings },
                            React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Участник от под. мониторинга', block: false },
                                React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputMemberMonitoring && props.inputMemberMonitoring.fullName
                                    ? props.inputMemberMonitoring.fullName
                                    : util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.NO)))),
                        React.createElement(View, { style: Styles.iconContainer },
                            React.createElement(View, { style: Styles.iconContainerMargin },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `MemberMonitoring` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showButtonPopoverMemberMonitoring(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('MemberMonitoring'), opened: props.isButtonPopoverOpenedMemberMonitoring, onOutsideTap: () => {
                                        props.showButtonPopoverMemberMonitoring(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.BOTTOM] }, getPopoverButtonMemberMonitoring(props))))))))
        : null,
    props.isSetPlannedFinishDate
        ? React.createElement(DateInput, { testID: 'test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg', value: props.inputDealDate || undefined, label: "\u041F\u043B\u0430\u043D\u043E\u0432\u0430\u044F \u0434\u0430\u0442\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0434\u0435\u043B\u043A\u0438", format: 'dd.MM.yyyy', locale: 'ru', placeholder: '\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433', dateType: DateInputTypes.DAY_PICKER, min: util.getDate(), onChange: (e) => props.performInputDealDate(e) })
        : null,
    props.isSetCurrency
        ? React.createElement(Table, { noPaddings: true, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq' },
            React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                        props.navigateToCurrencyPickerScreen();
                    } },
                    React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.tableCell },
                        React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.paddings },
                            React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Валюта', block: false },
                                React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputCurrency && props.inputCurrency.code && props.inputCurrency.value
                                    ? `${props.inputCurrency.code} (${props.inputCurrency.value})`
                                    : NO_DATA))),
                        React.createElement(View, { style: Styles.iconContainer },
                            React.createElement(View, { style: Styles.iconContainerMargin },
                                React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                        props.navigateToCurrencyPickerScreen();
                                    } },
                                    React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmLink }))))))))
        : null,
    props.isSetClientStageChanges
        ? getCommentBlock(props)
        : null));
const getCommentBlock = (props) => {
    let trackingElement = util.getTrackingElement.byCrmStage(props.dealStageTracking, props.inputStage.value);
    return (React.createElement(View, { testID: 'test-id-5jhwwb-gqaeh-qhwrs-3hqe-24fg', style: Styles.commentBlockContainer },
        React.createElement(View, { style: Styles.commentBlockTextContainer },
            React.createElement(Text, { style: Styles.commentBlockText, testID: 'test-id-5jhwwb-w46jhw-q35hyw4-qwegq-42fqw' }, 'Переключение стадии сделки отразится на дорожной карте в приложении клиента. Вы можете оставить для него комментарий.')),
        trackingElement && trackingElement.comment
            ? React.createElement(View, { style: Styles.underlinedContainer },
                React.createElement(Label, { header: " ", testID: 'grid-row-StageDetails-6', text: `Последний комментарий для клиента`, block: true },
                    React.createElement(Text, { testID: 'test-id-203a7d32e6a9a2ff3a' }, `${trackingElement.comment}`)))
            : null,
        React.createElement(Textarea, { testID: 'test-id-q3whhd-sdfns-qgeh-42hjws-54gwrt', value: props.inputComment, label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', onChange: props.performInputComment, maxLength: 600 })));
};
const getPopoverButtonMainClientManager = (props) => (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1', style: Styles.memberAddMenuContentContainer },
    React.createElement(View, { style: Styles.memberAddMenuContentContainerBorderButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMainClientManager(Enums.MemberListEmployeeSource.CustomerManaged);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT' }, SEARCH_IN_CLIENTS_TEAM))),
    React.createElement(View, { style: Styles.memberAddMenuContentContainerButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMainClientManager(Enums.MemberListEmployeeSource.Employee);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT' }, SEARCH_IN_GENERAL_LIST)))));
const getPopoverButtonMainCreditOfficer = (props) => (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1', style: Styles.memberAddMenuContentContainer },
    React.createElement(View, { style: Styles.memberAddMenuContentContainerBorderButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMainCreditOfficer(Enums.MemberListEmployeeSource.CustomerManaged);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT' }, SEARCH_IN_CLIENTS_TEAM))),
    React.createElement(View, { style: Styles.memberAddMenuContentContainerButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMainCreditOfficer(Enums.MemberListEmployeeSource.Employee);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT' }, SEARCH_IN_GENERAL_LIST)))));
const getPopoverButtonMemberMonitoring = (props) => (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1', style: Styles.memberAddMenuContentContainer },
    React.createElement(View, { style: Styles.memberAddMenuContentContainerBorderButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMemberMonitoring(Enums.MemberListEmployeeSource.CustomerManaged);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT' }, SEARCH_IN_CLIENTS_TEAM))),
    React.createElement(View, { style: Styles.memberAddMenuContentContainerButton },
        React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2', type: ButtonType.TEXT, onExecute: () => {
                props.performInputEmployeeSourceMemberMonitoring(Enums.MemberListEmployeeSource.Employee);
            } },
            React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT' }, SEARCH_IN_GENERAL_LIST)))));
const additionalFields = (props) => (props.saveDealAdditionalFieldsInProgress
    ? React.createElement(View, { style: Styles.dataLoaderContainer },
        React.createElement(LoaderWithText, { text: 'Изменение сделки...', testID: "test-id-9e090ee1-c60f-c0ca-2bef-rgq3" }))
    : props.saveDealAdditionalFieldsError
        ? React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.saveDealAdditionalFieldsError && props.saveDealAdditionalFieldsError.comment && props.saveDealAdditionalFieldsError.comment !== ''
                ? props.saveDealAdditionalFieldsError.comment
                : ERROR_MESSAGE, description: props.saveDealAdditionalFieldsError && props.saveDealAdditionalFieldsError.message && props.saveDealAdditionalFieldsError.message !== ''
                ? props.saveDealAdditionalFieldsError.message
                : null, onRefresh: props.performSaveDealAdditionalFields })
        : ViewAdditionalFields(props));
const ViewDealStages = (props) => (React.createElement(View, { testID: 'test-id-ViewDealStages-ea0d-gqrg-17f2-64gfo', style: Styles.main },
    React.createElement(SplitPanel, { testID: 'test-id-ViewDealStages-c7d0-7a11-ce02-d9096d06a9fd', id: util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage) },
        React.createElement(ContentPanel, { testID: 'test-id-ViewDealStages-b6b5-9b76-5b8b-cdf253effcef', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-ViewDealStages-aff6-11e7-abc4-cec278b6b50a', scrollEnabled: false, content: ViewDealStagesMainContent(props) },
                BackButtonHeader('stagesBack', props.navigateToPreviousForm, 'Сделка'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a970-244e-917f-12ad-7b3a17e7f249' },
                    React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u0421\u0442\u0430\u0434\u0438\u0438 \u0441\u0434\u0435\u043B\u043A\u0438")),
                React.createElement(RightPageHeader, { testID: 'test-id-a773d1af-ed17-d87c-5286-7ef158b8087f' },
                    React.createElement(PopoverTarget, { style: Styles.button, testID: 'test-id-e56d-2226ca8af123', refName: `dealStagesSavePopover` },
                        React.createElement(Button, { testID: 'test-id-779dddf9-ed0f-4f7f-3980-c776776e61da', disabled: !props.isSaveStageEnable || !props.isStageListEnable, type: ButtonType.TEXT, onExecute: props.onSaveDealStageButtonTap },
                            React.createElement(Text, { testID: 'test-id-3abdf7c1-e4c0-1968-e433-066519d187f9' }, 'Сохранить'))),
                    React.createElement(Popover, { testID: 'test-id-13466acf-clientRoadMapPopover-23efw', target: PopoverTarget.getRef('dealStagesSavePopover'), opened: props.isDealStagesSavePopoverOpened, onOutsideTap: () => {
                            props.showDealStagesSavePopover(false);
                        }, type: PopoverType.WIDE, style: Styles.dealStagesSavePopover, position: [PopoverPosition.BOTTOM] }, dealStagesSaveMenuContent(props)))),
            React.createElement(Page, { testID: 'test-id-ViewDealStages-aff6-11e7-abc4-1qeuyrgf8', scrollEnabled: true, content: additionalFields(props) },
                BackButtonHeader('stagesBack', props.navigateBackWithResetData, 'Изменение стадии'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a970-244e-917f-12ad-7b3a17e7f249' }, props.isRejection
                    ? React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                    : React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u0441\u0442\u0430\u0434\u0438\u0438")),
                React.createElement(RightPageHeader, { testID: 'test-id-a773d1af-ed17-d87c-5286-7ef158b8087f' }, props.isRejection
                    ? null
                    : React.createElement(View, { style: Styles.button, testID: 'test-id-e56d-gthwrqqrge' },
                        React.createElement(Button, { testID: 'test-id-779dddf9-ed0f-4f7f-3980-c776776e61da', disabled: !props.isSaveAdditionalFieldsEnable, type: ButtonType.TEXT, onExecute: props.performSaveDealAdditionalFields },
                            React.createElement(Text, { testID: 'test-id-3abdf7c1-e4c0-1968-e433-066519d187f9' }, 'Сохранить'))))),
            React.createElement(Page, { testID: 'test-id-b21542d3-d8f2-5b1c-75fd-bec2406938e7', scrollEnabled: true, content: React.createElement(StageDetails, { stage: props.selectedStage || defaultValues.dealStage }) },
                BackButtonHeader('stagesDetailsBack', props.navigateBack, 'Стадии сделки'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a97b3a17e7f249' },
                    React.createElement(H2, { testID: 'test-id-c8f09720096a2c3202' }, props.selectedStage && props.selectedStage.stage.value)),
                React.createElement(RightPageHeader, { testID: 'test-id-a773d1af-ed17-d87c-5286-7ef158b8087f' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-55680f06-52dd-a8c9-08b0-3137ee06a3a8', title: "Изменить", onExecute: () => props.navigateToStageEditor(props.activePosition) }))),
            React.createElement(Page, { testID: 'test-id-b21542dec2406938e7', scrollEnabled: true, content: React.createElement(ContainerDealStageEditor, { testID: 'test-id-b21542dec24sadf06938e7' }) },
                BackButtonHeader('stagesBack', props.navigateBack, 'Отменить'),
                React.createElement(CenterPageHeader, { testID: 'test-id-9662a970-244e-917f-12ad-7b3a17e7f249' },
                    React.createElement(H2, { testID: 'test-id-c8f09724-f76a-d25e-0683-00096a2c3202' }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0434\u0438\u0438"))),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-243tff', scrollEnabled: false, content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-WRAE-ewgra-26f5-6d1f-qwegqg' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-qheqer' })),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-4gfqq', scrollEnabled: false, content: React.createElement(ContainerMemberList, { testID: 'test-id-viewDeal-page-list-employee-34grveg' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-4hwrhwehq2' }))),
        React.createElement(View, { testID: 'test-id-ViewDealStages-ea0d-gqrg-17f2-64gfo' }))));
export default ViewDealStages;
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
//# sourceMappingURL=ViewDealStages.js.map