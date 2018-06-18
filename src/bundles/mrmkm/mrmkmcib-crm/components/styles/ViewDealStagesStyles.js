import { StyleSheet } from 'ufs-mobile-platform';
import { UfsStyleColorList } from "mrmkmcib-ui";
const DEFAULT_MARGIN = -20;
const Colors = {
    DisabledBackground: UfsStyleColorList.grey200,
    DisabledMainText: UfsStyleColorList.grey600,
    DisabledText: UfsStyleColorList.grey400,
    DarkGrey: '#747474',
    LightGrey: 'rgba(173, 173, 173, 0.50)'
};
export const Styles = StyleSheet.create({
    crmStagesContainer: {
        width: 320,
        flexDirection: 'column',
    },
    dealStagesSavePopover: {
        height: 165,
        width: 500
    },
    containerError: {
        marginLeft: 163,
        marginRight: 163,
        marginTop: 20,
        marginBottom: 20,
    },
    commentBlockText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 16,
        marginTop: 11,
        marginLeft: 20,
        marginRight: 20
    },
    commentBlockTextContainer: {
        width: 600,
        height: 71,
        borderRadius: 3,
        backgroundColor: 'rgb(74,144,226)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    commentBlockContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    button: {
        fontSize: 15,
        color: '#999999',
        marginRight: 15
    },
    validationErrorText: {
        padding: 20
    },
    additionalFieldsContainer: {
        flex: 1,
        marginLeft: 160,
        marginRight: 160,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    paddings: {
        flex: 1,
        paddingBottom: 17,
        paddingTop: 18,
        paddingLeft: 20,
    },
    tableCell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    underlinedContainer: {
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)',
        paddingBottom: 20,
        marginLeft: 20,
    },
    iconContainerMargin: {
        marginTop: 30,
    },
    addedIconContainerStyles: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: -10,
        marginRight: -10
    },
    containerViewInputs: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    crmStagesContainerDisabled: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.DisabledBackground,
    },
    main: {
        height: 740
    },
    InfoButtonCell: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    GrayText: {
        color: '#94979B',
        fontSize: 12
    },
    FioCell: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    FioText: {
        fontSize: 16
    },
    CellJustifyBottom: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    SummText: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    AlignRight: {
        alignItems: 'center',
    },
    LoaderWrapper: {
        height: 700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderSpacer: {
        height: 44,
    },
    container: {
        flex: 1,
        paddingTop: 10,
    },
    TableCell: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'column',
    },
    StageRowContainer: {
        flexDirection: 'row',
        flex: 1,
        borderColor: '#dedede',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    StageCrmRow: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
    AdditionalInfoWrapper: {
        flex: 1,
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
    },
    ContentTopMargin: {
        flex: 1,
        marginLeft: 20,
        marginTop: 20,
    },
    Content: {
        flex: 1,
        marginLeft: 20,
    },
    PopoverDecision: {
        height: 500,
        width: 375
    },
    GridAdjustmentWrapper: {},
    DecisionWrapperAdjustmentWrapper: {
        flex: 1,
        marginLeft: 20,
        marginTop: 17,
        flexDirection: 'column',
    },
    DecisionFormatWrapper: {
        marginTop: 5,
        marginBottom: 7,
        flexDirection: 'column',
    },
    Inaccessible: {
        marginLeft: 20,
        flexDirection: 'column',
    },
    FixedHeight: {
        height: 660
    },
    ErrorWrapper: {
        padding: 20
    },
    ErrorWrapperCenter: {
        justifyContent: 'center',
        padding: 20
    },
    CollWrapper: {
        paddingRight: 20,
        marginTop: 0,
        marginBottom: 10,
    },
    LinkCollWrapper: {
        paddingRight: 20,
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    LinkFixedHeight: {
        height: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InlineWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0,
    },
    StageMark: {
        marginTop: 10,
        marginRight: 10,
    },
    StageScreenMark: {
        marginTop: 12,
        marginRight: 10,
        marginLeft: -40,
    },
    StageDetailsIcon: {
        marginTop: 0,
        marginRight: 0,
    },
    DealTitle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 12,
    },
    PopoverTargetAdjustment: {
        marginTop: -10
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    DisabledButton: { marginRight: 10 },
    CustomerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        flex: 1,
    },
    InfoRowWrapper: {
        marginLeft: 20,
        marginTop: 7,
        marginBottom: 9,
        width: 620
    },
    infoButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        margin: 0,
        marginBottom: -3,
        marginLeft: 10,
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    infoButtonCustomerContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 7,
        marginLeft: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 20,
    },
    StagesRoadMapTable: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 600
    },
    PopoverTitle: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomBarContainer: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: UfsStyleColorList.grey100,
        borderTopWidth: 1,
        borderColor: UfsStyleColorList.grey300,
    },
    BottomBarText: {
        marginLeft: 52,
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    refreshBarContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    labelTitle: {},
    CustomerTitleContainer: {
        flex: .4,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InfoButton: {
        flexDirection: 'column',
        marginBottom: -12,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    HorisontalLine: {
        borderTopWidth: 1,
        borderColor: '#dedede',
    },
    HorisontalLineMargin: {
        marginLeft: 20,
        borderTopWidth: 1,
        borderColor: '#dedede',
    },
    GreyLabel: {
        fontSize: 12,
        color: '#94979B',
        backgroundColor: 'transparent',
    },
    GreyLabelValue: {
        backgroundColor: 'transparent',
        fontSize: 16,
    },
    CustomerTitleValue: {
        paddingTop: 5,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        fontSize: 16,
    },
    SumValue: {
        backgroundColor: 'transparent',
        fontSize: 20,
        fontFamily: 'PTSans-Narrow',
    },
    LineTitle: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        backgroundColor: 'transparent',
        color: '#94979B',
    },
    NoWrappingCells: {
        marginTop: -8,
        marginBottom: -10
    },
    NavigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    LockContainer: {
        paddingTop: 10,
        paddingRight: 5
    },
    CommentsWrapper: {
        minHeight: 60,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    ColumnFlexStartCentered: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementFirstColTextContainer: {
        marginTop: 0,
        width: 200,
    },
    AgreementStatusIcon: {
        flex: 1,
        width: 44, height: 44,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 0,
    },
    StatusRedCross: {
        color: 'red', fontSize: 30,
    },
    AgreementTable: {
        flex: 1,
        flexDirection: 'column',
        marginRight: DEFAULT_MARGIN,
        marginLeft: -10,
    },
    NonLegalMembersTable: {
        flex: 1,
        flexDirection: 'column',
        marginRight: DEFAULT_MARGIN,
        marginLeft: -10,
    },
    InfoButtonContainerAgreement: {
        width: 84,
        height: 44,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    CommentTop: {
        fontSize: 16,
    },
    CommentBottom: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        color: '#94979B',
    },
    AgreementCellMargins: {
        marginTop: -10,
        marginBottom: DEFAULT_MARGIN,
    },
    AgreementWrapper: {
        borderBottomWidth: 1,
        borderColor: '#dedede',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 10,
        marginRight: 20,
    },
    AgreementStartDate: {
        backgroundColor: 'transparent',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        marginTop: 2,
        marginBottom: 4
    },
    AgreementEndDate: {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        backgroundColor: 'transparent',
    },
    MoreButton: {
        position: 'absolute',
        right: 1,
        bottom: 1,
        height: 44,
        width: 44,
        paddingTop: 5,
        paddingLeft: 10,
    },
    Text: {
        fontSize: 16
    },
    errorText: {
        fontSize: 14
    },
    containerTable: {
        flex: 1,
        paddingBottom: 10
    },
    MultilineText: {
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementCommentContainerComment: {
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    AgreementCommentContainer: {
        flex: 1,
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    UnexpandedAgreementComment: {
        padding: 0,
        margin: 0,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementRow: {
        flexDirection: 'row',
        flex: 1,
        borderColor: '#dedede',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    AgreementInnerRowFirstCol: {
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 62,
        justifyContent: 'space-between',
    },
    AgreementAction: {
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 62,
        width: 155,
        justifyContent: 'space-between',
    },
    AgreementInnerRow: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 0,
        flexDirection: 'row',
        height: 62,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    StageWrapper: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    HelpPopoverText: {
        fontSize: 16,
        color: '#f8f8f8',
        backgroundColor: UfsStyleColorList.grey800,
        fontFamily: 'PTSans-Regular',
        padding: 20,
    },
    StageProgressTopLine: {
        width: 13,
        height: 20,
        borderWidth: 0,
        marginTop: 30,
        borderColor: '#33AA22',
        borderRightWidth: 3,
    },
    StageProgressTopLineDisabled: {
        borderColor: Colors.DarkGrey,
    },
    StageProgressTopLineStart: {
        borderRightWidth: 0,
    },
    StageProgressBottomLine: {
        width: 13,
        flex: 1,
        borderColor: '#33AA22',
        borderWidth: 0,
        borderRightWidth: 3,
    },
    StageProgressBottomLineDisabled: {
        borderColor: Colors.DarkGrey,
    },
    StageProgressBottomLineEnd: {
        borderRightWidth: 0,
    },
    OuterCircle2: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'rgba(51,170,34,0.08)',
        borderWidth: 5,
        position: 'absolute', top: -9, left: -9
    },
    OuterCircle1: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'rgba(51,170,34,0.18)',
        borderWidth: 4,
        position: 'absolute', top: -6, left: -6,
    },
    OuterCircle1Disabled: {
        borderColor: '#E4E4E4',
    },
    StageProgressInternalCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StageProgressInternalCircleActive: {
        borderColor: '#94979B',
    },
    StageProgressInternalCircleInactiveDisabled: {
        borderColor: Colors.DarkGrey,
    },
    StageProgressInternalCircleInactiveEnabled: {
        borderColor: '#33AA22',
    },
    StageProgressInternalCirclePastActive: {
        backgroundColor: 'transparent',
    },
    StageProgressInternalCirclePastActiveDisabled: {
        backgroundColor: Colors.LightGrey,
    },
    StageProgressInternalCirclePastActiveeEnabled: {
        backgroundColor: 'rgba(51,170,34,0.5)',
    },
    StageProgressContainer: {
        marginLeft: 8, marginRight: 10, marginTop: -30, marginBottom: -30,
        flex: 1, flexDirection: 'column'
    },
    RowCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    StageDetailsRoot: { marginLeft: 180, marginRight: 180, marginTop: 20 },
    RoadMapHelpButton: { width: 44, height: 44, marginTop: 2, marginLeft: 2 },
    StageTab2Container: {
        flexDirection: 'column',
        marginLeft: -20,
        marginRight: -20,
        flex: 1,
    },
    StagesTitleContainer: { flexDirection: 'row', height: 44, marginTop: 10 },
    StageFirstCol: { marginLeft: 72, width: 600, flexDirection: 'row' },
    BottomButtonShow: {
        marginRight: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomButtonHide: {
        marginRight: 176,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomButtonContainer: { flexDirection: 'column', marginBottom: 0 },
    ColumnBottom: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    StageCrmWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 30,
    },
    StageDealWrapper: {
        paddingTop: 10,
        paddingBottom: 10,
        width: 525,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    StageScreenWrapper: {
        borderColor: '#dedede',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    stageTextContainer: {
        flex: 1,
        flexDirection: 'column',
        overflow: 'hidden',
        maxWidth: 570
    },
    StageWrapperLast: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: 33,
    },
    StageEnabled: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        backgroundColor: 'transparent'
    },
    StageDisabled: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        backgroundColor: '#f8f8f8'
    },
    NoTableMargins: {
        marginLeft: DEFAULT_MARGIN,
        marginRight: DEFAULT_MARGIN,
    },
    NoTableMarginRight: {
        marginRight: DEFAULT_MARGIN
    },
    NoCellMargins: {
        marginTop: DEFAULT_MARGIN,
        marginBottom: DEFAULT_MARGIN,
    },
    StageTopRed: {
        fontSize: 16,
        color: '#FF0000',
        fontFamily: 'PTSans-Regular',
    },
    StageTop: {
        fontSize: 16,
        // color: '#2BC33E',
        fontFamily: 'PTSans-Regular',
    },
    StageCrmMainText: {
        fontSize: 16,
        color: Colors.DisabledMainText,
        fontFamily: 'PTSans-Regular',
    },
    StageBottom: {
        marginTop: 3,
        marginBottom: 1,
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
    StageCrmText: {
        marginTop: 3,
        marginBottom: 1,
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: Colors.DisabledText,
    },
    StageBottomLast: {
        marginTop: 5,
        marginBottom: 23,
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
    StageProgress: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        alignSelf: 'flex-end',
        color: '#94979B',
    },
    StageContainer: {
        marginLeft: 0,
        height: 600,
        flexDirection: 'column'
    },
    TabSelector: {
        width: 420,
        marginBottom: 7,
        marginTop: 7,
        alignSelf: 'center'
    },
    TabSelectorWrapperInaccessible: {
        marginTop: 20,
    },
    TabSelectorWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    ApprovalContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    PopoverMenuRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    PopoverRowUnderline: {
        height: 1,
        width: 500,
        borderColor: '#dedede',
        borderTopWidth: 1,
    },
    PopoverTitleText: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    IconChecked: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 5,
        marginTop: -2,
    },
    StageTable: {
        flex: 1,
        flexDirection: 'column',
        marginTop: -27,
        marginLeft: DEFAULT_MARGIN,
        marginRight: DEFAULT_MARGIN,
    },
    RightAligned: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    LineValue: {
        fontSize: 16,
        color: '#94979B',
    },
    CustomerTitleLabel: {
        marginTop: 8,
        marginLeft: 4,
        fontSize: 12,
        marginBottom: -8,
        color: '#94979B',
    },
    CustomerTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    CustomerTitleText: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    InlineValue: {
        fontSize: 16,
        color: '#94979B',
        fontFamily: 'PTSans-Regular',
    },
    InlineValueNumber: {
        fontSize: 16,
        color: '#94979B',
        fontFamily: 'PTSans-Narrow',
    },
    flex05: {
        flex: .5,
    },
    flex07: {
        flex: .7,
    },
    flex03: {
        flex: .3,
    },
    flex02: {
        flex: .2,
    },
    InlineRight: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'flex-end'
    },
    InlineTitle: {
        marginTop: 3,
        fontSize: 16,
        marginBottom: 3,
        fontFamily: 'PTSans-Regular',
    },
    ValueText: {
        fontSize: 16,
        flex: 1
    },
    TitleText: {
        fontSize: 16,
        flexDirection: 'column',
    },
    nameMainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    nameTextLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    nameContainerText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxWidth: 568
    },
    dataGridContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    dataLoaderContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataGridPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 650
    },
    NonLegalMembersContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 600,
        borderWidth: 0
    },
    memberAddMenuContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    memberAddMenuContentContainerBorderButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd',
    },
    memberAddMenuContentContainerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    getDealStageContentContainer: {
        flex: 1,
        height: 600,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Styles;
//# sourceMappingURL=ViewDealStagesStyles.js.map