/*
 * Created by Gladkov E.N.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const PAGE_HEIGHT = 740
const DEFAULT_MARGIN = -20

export const Styles: any = StyleSheet.create({
    contentPanel: {
        backgroundColor: '#fff',
    },
    maxHeightFull: {
        maxHeight: PAGE_HEIGHT,
    },
    flex: {
        flex: 1,
    },
    AppCRMLoaderWrapper: {
        maxHeight: PAGE_HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RowLinkContainer: {
        flexDirection:'row',
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
    TableContainer: {
        flex:1,
        margin: 0,
        padding: 0,
        flexDirection:'column'
    },
    TableAreaContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    TableWrapper: {
        flexDirection: 'column',
        flex:1,
        marginRight: DEFAULT_MARGIN,
    },
    TableCollapsedFix: {
        paddingBottom:1,
        flex: 1,
    },
    CellTopContainer : {
        flexDirection: 'column',
        marginBottom: 4,
        marginRight: 10,
    },
    CellTop : {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    CellBottomContainer : {
        marginBottom: 4,
        marginRight: 10,
    },
    CellBottom : {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
    LoaderWrapper: {
        maxHeight: PAGE_HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ErrorWrapper: {
        padding: 20
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
})

Styles.contentPanel = StyleSheet.flatten(Styles.contentPanel)

export default Styles
