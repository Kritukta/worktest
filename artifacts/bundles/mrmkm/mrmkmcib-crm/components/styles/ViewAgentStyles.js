/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const FIX_HEIHGT_TABLE_UFS = 530;
const FIX_HEIHGT_EDIT_TABLE_UFS = 696;
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    borderGridRowColLine: {
        marginLeft: 20,
        borderBottomWidth: 0.5,
        marginTop: -10,
        borderBottomColor: "rgb(204,204,204)"
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 22,
        marginRight: 22
    },
    iconGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    iconText: {
        fontSize: 12,
        color: 'rgb(0,122,255)'
    },
    TouchableRow: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center'
    },
    EmptyChevron: {
        width: 44,
    },
    TouchableRowChevron: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    AgentInfoRow: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5'
    },
    sexSelector: {
        width: 200,
    },
    AgentCustomerPositionRow: {
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    AgentCustomerPositionCompanyInfo: {
        marginLeft: 20,
        flex: 1,
        marginBottom: 10,
        marginTop: 10
    },
    AgentCustomerPositionText: {
        color: 'rgb(47, 47, 47)',
        fontFamily: 'PTSans-Regular',
        fontSize: 16
    },
    AgentCustomerPositionForm: {
        color: '#919191',
        fontFamily: 'PTSans-Regular',
        fontSize: 16
    },
    ChevronWrapper: {
        alignSelf: 'center'
    },
    agentInfoView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    agentFullNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 7,
    },
    agentFullNameText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 7,
    },
    agentPositionView: {
        paddingBottom: 5,
    },
    agentPositionHeaderText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        color: '#919191',
        lineHeight: 18,
    },
    agentCircleView: {
        flex: 0,
        backgroundColor: '#F8F8FA',
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5',
    },
    headerAgentCircleView: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    tableActionRow: {
        marginTop: -10,
        marginBottom: -10,
        marginRight: -20,
    },
    agentNoticeListText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    agentOccasionListText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    agentMemberListText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    agentMemberTextTitle: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        lineHeight: 20,
    },
    agentPositionTextTitle: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    agentPositionTextValue: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        lineHeight: 20,
    },
    agentRelationTypeTextTitle: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    agentRelationTypeTextValue: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        lineHeight: 20,
    },
    agentCreateEditView: {
        paddingLeft: 0,
    },
    touchableViewLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    agentCommentTextValue: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    countTextValue: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
        alignSelf: 'center',
        color: '#94979B',
    },
    agentCreateEditViewWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: -20,
    },
    agentCreateEditGenderViewWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
    },
    groupAgentInitialListView: { width: 213 },
    agentPersonIntoWrapper: { width: 320 },
    agentCardView: {
        flex: 1,
        flexDirection: 'column',
    },
    agentCardTableWatchMode: {
        height: FIX_HEIHGT_TABLE_UFS,
    },
    agentGenderTextTitle: {
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        color: '#94979B',
    },
    agentCompanyListTextTitle: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    positionViewWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    positionTextView: {
        flex: 1,
        flexDirection: 'row',
    },
    positionTextValue: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
        color: '#333',
    },
    positionButtonView: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    agentErrorGenderTextMessage: {
        fontFamily: 'PTSans-Regular',
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 12,
        color: '#FF0000',
    },
    agentCommentView: { marginLeft: -20, },
    agentSearchFieldView: { height: 44 },
    agentGenderView: { marginLeft: 20 },
    agentCustomerView: { marginLeft: 20, marginTop: 10 },
    agentCustomerTableInfo: { height: 190 },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    emailTextTitle: {
        fontSize: 12,
        color: '#919191',
        fontFamily: 'PTSans-Regular',
    },
    createActivityAccessText: {
        fontSize: 16,
        color: '#6495ED',
        fontFamily: 'PTSans-Regular',
    },
    memberListContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    memberListViewTitle: {
        flex: 0,
        flexDirection: 'row',
    },
    memberListTextTitle: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    memberListViewPerson: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    memberListTextPerson: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        alignSelf: 'center',
        color: '#999999',
    },
    memberListViewButton: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    infoView: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperInfoView: {
        alignSelf: 'flex-end',
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#007aff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonInfoView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonInfoText: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    agentCustomerListView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});
export default Styles;
//# sourceMappingURL=ViewAgentStyles.js.map