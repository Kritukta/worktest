/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const Styles = StyleSheet.create({
    scale: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
        transform: [{ scale: 0.3 }]
    },
    loaderWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    main: {
        flex: 1,
    },
    flex: {
        flex: 1
    },
    paddingRight: {
        paddingRight: 10
    },
    flexSm: {
        flex: 0.1
    },
    InlineRight: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    OrganizationType: {
        marginTop: 10,
        fontSize: 12,
        color: '#94979B'
    },
    reverseDirection: {
        flexDirection: 'row-reverse'
    },
    RedText: {
        color: 'red'
    },
    BoldText: {
        fontWeight: 'bold'
    },
    GreyLabel: {
        fontSize: 12,
        color: '#94979B',
    },
    FullWidthText: {
        flex: 1,
        paddingLeft: 20,
    },
    LimitsCol: {
        marginRight: -110,
    },
    limitErrorPanel: {
        marginBottom: 0,
        marginRight: -110,
    },
    limitErrorText: {
        fontSize: 12,
        color: 'rgb(249, 167, 41)',
        fontWeight: '400'
    },
    LimitRow: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 55
    },
    LimitValue: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    LimitTitle: {
        fontSize: 12,
        color: '#94979B',
    },
    LimitAmount: {
        fontSize: 20,
        fontFamily: 'PTSans-Narrow',
    },
    LimitAmountHighlited: {
        fontSize: 22,
        fontFamily: 'PTSans-Narrow',
    },
    affiliateSectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 10
    },
    justifyToCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    justifyToRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    GreyLabelValue: {
        fontSize: 16,
    },
    InlineWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    FixHeightRow: {
        height: 44
    },
    GrayLabelMargin: {
        marginTop: 5
    },
    InlineButtonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalCenteredText: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row'
    },
    ProblemCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        // backgroundColor: '#2BC33E',
        marginTop: 5,
    },
    CollWrapper: {
        paddingRight: 20,
        paddingBottom: 10,
    },
    CollWrapperNoPadding: {
        paddingRight: 0,
    },
    CollWrapperPaddingRight: {
        paddingRight: 5,
    },
    GszRow: {},
    Table: {
        flex: 1
    },
    LineSpacer: {
        flex: 1,
    },
    SumRow: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    SumRowTitle: {
        flex: 1,
        fontSize: 12,
        color: '#94979B',
    },
    SumRowValue: {
        flex: 1,
        fontSize: 18,
    },
    EditLineSpacer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    HorisontalLine: {
        borderTopWidth: 1,
        borderColor: '#dedede',
    },
    dataGrid: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 0,
    },
    EditRowWrapper: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#dedede',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    modalForeground: {
        height: 740,
        width: 639,
        position: 'absolute',
        left: 54,
        top: 20,
        backgroundColor: 'white'
    },
    modalForegroundFullScreen: {
        height: 740,
        position: 'absolute',
        width: 960,
        left: 54,
        top: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    modalBackground: {
        height: 742,
        width: 1024,
        position: 'absolute',
        left: 54,
        top: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    /* Employee View */
    avatarComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(239, 239, 244)',
        paddingTop: 30
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 205, 209)'
    },
    avatarLabel: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white'
    },
    avatarSubtitle: {
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarSubtitleLabel: {
        color: 'grey'
    },
    employeeInformation: {
        flex: 1,
        marginLeft: 20
    },
    employeeInformationSubtitle: {
        marginTop: 20,
        marginBottom: 5
    },
    /* Employee View end*/
    agentListPopoverContentContainer: {
        flex: 1,
    },
    /* Affiliate search view */
    searchNotFoundTextWrapper: {
        height: 260,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchNotFoundText: {
        color: 'rgb(204,204,204)'
    },
    searchNotFoundTextBold: {
        color: 'rgb(204,204,204)',
        fontWeight: 'bold'
    },
    TopRow: {
        flex: 1,
        flexDirection: 'row'
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 5,
        padding: 3,
        borderRadius: 3,
    },
    OrangeLabelText: {
        color: '#fff',
        fontSize: 12,
    },
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },
    tableComponent: {
        flex: 1,
        marginBottom: 44
    },
    SearchResultRowWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    OrgType: {
        backgroundColor: 'transparent',
        padding: 3,
        fontSize: 12,
        color: '#94979B',
    },
    flex03: {
        flex: .3,
    },
    flex04: {
        flex: .4,
    },
    InlineTitle: {
        marginTop: 3,
        fontSize: 16,
        marginBottom: 3,
    },
    InlineValue: {
        fontSize: 16,
        color: '#94979B',
    },
    TableCell: {
        marginBottom: -10,
        marginTop: -10,
        minHeight: 44,
    },
    DatesCounterText: {
    // color: 'rgb(0,122,255)',
    },
    InlineCounter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TroubleGroupRow: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 44,
        justifyContent: 'center',
    },
    TroubleGroupWrapper: {
        flexDirection: 'column',
    },
    StyleForOneLineCell: {
        marginRight: -23,
        marginLeft: -23,
        marginTop: -10,
        marginBottom: -10,
        flex: 1,
    },
    LimitsTitleText: {
        flex: 1,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    LimitsValueView: {
        flex: 1,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    LimitsValueText: {
        fontSize: 16,
        color: '#94979B',
    },
    FlexDirectionRow: {
        flexDirection: 'row',
    },
    LimitsButton: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LimitsButtonInner: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    /* Affiliate search view end*/
    InfoIconStyle: {
        width: 44,
        marginTop: 10,
    },
    RowWithInfoButton: {
        flex: 1,
        flexDirection: 'row',
    },
    TroubleGroupCircleStyle: {
        marginTop: 5,
    },
    TroubleGroupCircleStyleWithButton: {
        marginTop: -5,
    },
    TroubleGroupButtonStyle: {
        marginTop: -10,
    },
    TroubleGroupNoDataTextStyle: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        marginTop: 6,
    },
    AgentsTitleText: {
        flex: 1,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    AgentErrorPanel: {
        marginBottom: 0
    },
    AgentErrorText: {
        fontSize: 12,
        color: 'rgb(249, 167, 41)',
        fontWeight: '400'
    },
    AgentsValueView: {
        flex: 1,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    RowLeftPadding: {
        paddingLeft: 20,
    },
});
export default Styles;
//# sourceMappingURL=CustomerManagedTabMainStyles.js.map