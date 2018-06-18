/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
export const Styles = StyleSheet.create({
    main: {
        flex: 1
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    SearchAgentPlaceholderView: {
        flex: 1,
        padding: 20,
    },
    SearchPlaceholderText: {
        textAlign: 'center',
        fontFamily: 'PTSans-Regular',
        color: '#A2A2A2',
        fontSize: 16,
    },
    agentListAvatarRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    avatar: {
        alignItems: 'center',
        backgroundColor: 'rgb(204, 205, 209)',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        width: 40
    },
    avatarLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    avatarWrapper: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarSubtitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 10,
    },
    avatarFullName: {
        color: '#333',
        fontFamily: 'PTSans-Regular',
        fontSize: 15,
    },
    avatarSubtitleLabel: {
        color: 'rgb(145, 145, 145)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
    },
    deleteButton: {
        backgroundColor: '#D33333',
        paddingLeft: 10,
        paddingRight: 10,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: '#ffffff',
    },
    CircleGrey: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    searchAgentView: {
        flex: 1,
    },
    agentListAddMenuContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    principalPickerView: {
        flex: 0,
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 10,
    },
    activityAgentListActionListView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    customerAgentListActionListView: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'space-between',
    },
    buttonCrownView: {
        marginLeft: -15,
        marginRight: -10
    },
    agentPositionListView: {
        height: 592
    },
});
export default Styles;
//# sourceMappingURL=ViewAgentListStyles.js.map