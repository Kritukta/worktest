/*
 * Created by Gladkov E.N.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const DEFAULT_MARGIN = -20
const PAGE_HEIGHT = 740

export const Styles: any = StyleSheet.create({
    CheckContainer: {
        margin: -12,
    },
    flex: {
        flex: 1,
    },
    maxHeightFull: {
        maxHeight: PAGE_HEIGHT,
    },
    TableContainer: {
        flex: 1,
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
    },
    CellBottom : {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
    DisabledLabel: {
        marginRight: 5,
        padding: 3,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgb(204,204,204)',
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 5,
        padding: 3,
        borderRadius: 3,
    },
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },
    ContentPanel: {
        backgroundColor: '#ffffff'
    },
    LeftPageHeader: {
        borderWidth: 2,
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
    TabSelector: {
        width: 250,
        marginBottom: 10,
        alignSelf: 'center'
    },
    animatedRow: {
        backgroundColor: '#ffffff',
        position:'absolute',
        top:56,
        left:0,
        width: 640,
        height: 82,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentPanel: {
        backgroundColor: '#fff',
    },
})

Styles.contentPanel = StyleSheet.flatten(Styles.contentPanel)

export default Styles
