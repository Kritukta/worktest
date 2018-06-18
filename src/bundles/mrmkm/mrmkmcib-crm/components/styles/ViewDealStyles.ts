/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'
import {UfsStyleColorList} from "mrmkmcib-ui"
const DEFAULT_MARGIN = -20

const Colors = {
    DisabledBackground: UfsStyleColorList.grey200,
    DisabledMainText: UfsStyleColorList.grey900,
    DisabledText: UfsStyleColorList.grey500,
}
export const Styles: any = StyleSheet.create({

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
        height: 30,
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
    Content: {
        marginLeft: 20,
        marginBottom: 10,
    },
    PopoverDecision: {
        height: 500,
        width: 375
    },
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
    StageMark: {
        marginTop:10,
        marginRight:10,
    },
    StageScreenMark: {
        marginTop:12,
        marginRight:10,
        marginLeft: -40,
    },
    StageDetailsIcon: {
        marginTop:0,
        marginRight:0,
    },
    DealTitle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 12,
    },
    PopoverTargetAdjustment: {
        marginTop:-10
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    DisabledButton: { marginRight: 10},
    InfoRowWrapper: {
        marginLeft: 20,
        marginTop: 7,
        marginBottom: 9,
        width:620
    },
    infoButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        margin: 0,
        marginBottom: -12,
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
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        height:600

    },

    PopoverTitle: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    BottomBarContainer: {
        height:48,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: Colors.DisabledBackground,
        borderTopWidth: 1,
        borderColor: UfsStyleColorList.grey300,
    },
    BottomBarText: {
        marginLeft: 52,
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    refreshBarContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'
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
    LineTitle: {
        marginBottom: 5,
        fontSize: 12,
        backgroundColor: 'transparent',
        color: '#94979B',
    },
    NoWrappingCells : {
        marginTop:-8,
        marginBottom: -10
    },
    NavigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    LockContainer:{
        paddingTop: 10,
        paddingRight: 5
    },
    CommentsWrapper: {
        minHeight:60,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    ColumnFlexStartCentered:  {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementFirstColTextContainer: {
        marginTop: 0,
        width: 200,
    },
    AgreementStatusIcon: {
        flex:1,
        width: 44, height: 44,
        flexDirection:'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 0,
    },
    StatusRedCross: {
        color:'red', fontSize:30,
    },
    AgreementTable: {
        flex: 1,
        flexDirection:'column',
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
        flexDirection:'column',
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
    AgreementStartDate: {
        backgroundColor: 'transparent',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        marginTop: 2,
        marginBottom:4},

    AgreementEndDate:{
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        backgroundColor: 'transparent',
    },
    MoreButton:{
        position:'absolute',
        right: 1,
        bottom: 1,
        height:44,
        width: 44,
        paddingTop: 5,
        paddingLeft: 10,
    },
    Text:{
        fontSize: 16
    },
    MultilineText:{
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementCommentContainerComment:{
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    AgreementCommentContainer:{
        flex:1,
        padding: 0,
        margin: 10,
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    UnexpandedAgreementComment:{
        padding: 0,
        margin: 0,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    AgreementRow:{
        flexDirection: 'row',
        flex: 1,
        borderColor: '#dedede',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    AgreementInnerRowFirstCol:{
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 62,
        justifyContent: 'space-between',
    },
    AgreementAction:{
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 62,
        width: 155,
        justifyContent: 'space-between',
    },
    AgreementInnerRow:{
        flex:1,
        paddingTop: 10,
        paddingBottom: 0,
        flexDirection: 'row',
        height: 62,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    RowCenter:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    NoTableMargins: {
        marginLeft: DEFAULT_MARGIN,
        marginRight: DEFAULT_MARGIN,
    },
    NoCellMargins: {
        marginTop: DEFAULT_MARGIN,
        marginBottom: DEFAULT_MARGIN,
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
    TabSelectorWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 10,
        // flex: 3
        flexDirection: 'column',
    },
    ApprovalContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    PopoverTitleText: {
        fontSize: 16,
        marginLeft: 20,
        fontFamily: 'PTSans-Regular',
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
        marginLeft:DEFAULT_MARGIN,
        marginRight:DEFAULT_MARGIN,
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
    TitleText: {
        fontSize: 16,
        flexDirection:'column',
    },
    nameMainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch'
    },
    nameTextLabel:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    nameContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    nameContainerText: {
        justifyContent: 'flex-start',
        maxWidth: 568,
        alignSelf: 'center',
    },
    dataGridContainer:{
        flex:1,
        flexDirection:'column'
    },
    dataGridPage:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        height:650
    },
    NonLegalMembersContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 600,
        borderWidth: 0
    },

})

export default Styles