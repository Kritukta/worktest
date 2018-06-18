/*
 * Created by Vladykin A.S.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const DEFAULT_MARGIN = -20;
export const Styles = StyleSheet.create({
    RowLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    CellContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 1,
        marginTop: 2,
    },
    CellContainerLast: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 1,
        marginTop: 2,
        marginRight: -10,
    },
    SearchTableHeight: {
        height: 620,
        flexDirection: 'column',
        flex: 1,
        marginRight: DEFAULT_MARGIN,
    },
    TableCollapsedFix: {
        paddingBottom: 1,
        flex: 1,
    },
    CellTopContainer: {
        flexDirection: 'column',
        marginBottom: 4,
        marginRight: 10,
    },
    CellTop: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    CellOrangeLabelContainer: {
        backgroundColor: 'rgb(246,166,35)',
        paddingRight: 5,
        paddingLeft: 3,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 3,
    },
    CellOrangeLabelText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'PTSans-Bold',
    },
    CellBottomContainer: {
        marginBottom: 4,
        marginRight: 10,
    },
    LockContainer: {
        paddingTop: 2,
        paddingRight: 3
    },
    CellBottom: {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
});
export default Styles;
//# sourceMappingURL=ViewDealListSearchStyles.js.map