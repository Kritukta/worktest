/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const Styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ListTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        height: 30,
        marginTop: 20
    },
    listRowContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        minHeight: 30,
        borderColor: 'black',
        borderBottomColor: 'rgb(204,204,204)',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 10,
    },
    listLeftTablePart: {
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    listRightTablePart: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 4,
        minHeight: 40,
    },
    listPercentText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#888'
    },
    notFoundOwnersContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    ownerContainer: {
        flex: 1,
        width: 600,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    popupIconContainer: {
        position: 'absolute',
        top: 20,
        right: 1
    },
    PopupHeaderContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginRight: 50
    },
    popupDataContainer: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 5,
        marginRight: 10,
        paddingTop: 10
    },
    popupDataRowContainer: {
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 0,
        borderBottomWidth: 1,
        borderColor: 'rgb(204,204,204)'
    },
    popupDataColumnContainer: {
        flex: 1,
        width: 340,
        marginTop: 10,
        paddingBottom: 10,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: 'rgb(204,204,204)'
    },
    popupContainerDirectionColumn: {
        flexDirection: 'column'
    },
    PopupContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    popupDataLeftPartContainer: {
        flex: 6,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    popupDataRightContainer: {
        flex: 4,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 10
    },
    percentContainer: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 20
    },
    listDownIconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    popupDataBigTextGrey: {
        fontFamily: 'PTSans-Regular',
        color: 'rgb(204,204,204)',
        fontSize: 16
    },
    popupDataTextBlack: {
        fontFamily: 'PTSans-Bold',
        color: 'black',
        fontWeight: '400',
        fontSize: 16
    },
    ListTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    listRowTitleText: {
        fontSize: 16,
        fontFamily: 'PTSans-Bold'
    },
    listRowTitleDescription: {
        fontFamily: 'PTSans-Regular',
        color: 'gray',
        fontSize: 12,
        paddingBottom: 5
    },
    listHr: {
        height: 1,
        flex: 1,
        backgroundColor: 'rgb(204,204,204)'
    },
    rotateRowIcon: {
        transform: [{ rotate: '90deg' }]
    }
});
export default Styles;
//# sourceMappingURL=CustomerManagedTabOwnerListStyles.js.map