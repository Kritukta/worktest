/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const PAGE_HEIGHT = 740;
const PAGE_WIDTH = 960;
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: -2,
        padding: 1,
        height: 738,
    },
    maxHeightFull: {
        height: PAGE_HEIGHT,
    },
    maxWidthFull: {
        width: PAGE_WIDTH,
    },
    flex: {
        flex: 1,
    },
    widthContainer: {
        width: 640,
    },
    memberListSearchContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    memberListSaveLoaderContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SearchPlaceholderText: {
        textAlign: 'center',
        color: 'silver',
        fontSize: 16,
    },
    activityMemberListPage: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20
    },
    activityAddMemberInTeam: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    addMainPersonInTeam: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    navigationActivityMemberList: {
        height: 44,
        flexDirection: 'row',
    },
    popoverActivityAddMember: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    noTeamFoundView: {
        paddingLeft: 20,
    },
    avatarWrapper: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        alignItems: 'center',
        backgroundColor: 'rgb(204, 205, 209)',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    avatarLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    swipeableRow: {
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        // height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    deleteButtonWrapper: {
        alignItems: 'center',
        backgroundColor: '#D33333',
        height: 70,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 70,
    },
    deleteButtonText: {
        color: 'black',
    },
    teamMemberInfoViewWrapper: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
        // height: 69,
    },
    teamMemberInfoViewMarginWrapper: {
        marginTop: 10,
        marginBottom: 10
    },
    employeeNameInitialsWrapper: {
        justifyContent: 'center',
        paddingBottom: 6,
        paddingTop: 6,
    },
    topRowText: {
        fontSize: 16,
    },
    bottomRowText: {
        fontSize: 12,
        color: '#94979B',
    },
    bottomRowTextBlocked: {
        fontSize: 12,
        color: 'red',
    },
    emplyeeNameInitialsText: {
        color: 'rgb(47, 47, 47)',
        fontFamily: 'PTSans-Regular',
        fontSize: 15,
    },
    employeeJobTitleAndBlockStatusText: {
        color: 'rgb(145, 145, 145)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
    },
    isBlocked: {
        color: 'red',
    },
    teamMemberSearchFormView: {
    // flexDirection: 'row-reverse',
    // paddingRight: 30,
    },
    teamMemberSearchFormIconView: {
        alignItems: 'flex-start',
        borderBottomColor: 'rgb(204, 204, 204)',
        borderBottomWidth: 0.5,
        height: 48,
        justifyContent: 'center',
        marginRight: -24,
        width: 34,
    },
    RowUnderlined: {
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1
    },
    RowUnderlinedInner: {
        flexDirection: 'row'
    },
    RowUnderlinedCenter: {
        alignSelf: 'center'
    },
    CrownWrapper: {
        position: 'absolute',
        top: 12,
        right: 12,
        backgroundColor: 'white',
        borderRadius: 10
    },
    emptySearchText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSelectMainContainer: {
        height: 44,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 20
    },
    isListEmptyTableCell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    isListEmptyTableCellContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        maxHeight: PAGE_HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});
export default Styles;
//# sourceMappingURL=ViewMemberListStyles.js.map