/*
 * Created by Vladykin A. S.
 */

import {StyleSheet} from 'ufs-mobile-platform'
import {UfsStyleColorList} from 'mrmkmcib-ui'

const DEFAULT_MARGIN = -23
const PAGE_HEIGHT = 740
const PAGE_WIDTH = 960
const NAV_BAR_HEIGHT = 44
const REFRESH_BAR_HEIGHT = 44
const ERROR_RGB = 'rgb(249, 167, 41)'

export const Styles: any = StyleSheet.create({
    flex: {
        flex: 1,
    },
    Text12: {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        lineHeight: 12,
    },
    Text16: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        lineHeight: 16,
    },
    TableWrapper: {
        flexDirection: 'column',
        height: PAGE_HEIGHT - NAV_BAR_HEIGHT - REFRESH_BAR_HEIGHT,
        marginLeft: DEFAULT_MARGIN,
        marginRight: DEFAULT_MARGIN,
    },
    TableNoMarginTop: {
        marginTop: -8
    },
    TableCollapsedFix: {
        paddingBottom: 1,
        flex: 1,
    },
    CellContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    CellContainerName: {
        width: 572,
    },
    CellContainerInfo: {
        width: 137,
    },
    CellContainerLast: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: -10,
    },
    CellTopContainer : {
        flexDirection: 'column',
        marginBottom: 4,
        marginRight: 10,
        paddingTop: 12,
    },
    CellTop : {},
    CellBottomContainer : {
        marginBottom: 4,
        marginRight: 10,
    },
    CellBottom : {
        color: 'rgb(158,158,158)',
    },
    RowLinkContainer: {
        flexDirection:'row',
        alignSelf: 'center',
    },
    RowLinkContainerLast: {
        flexDirection:'row',
        alignSelf: 'flex-start',
    },
    FirstRowCell: {
        paddingLeft:10
    },
    LeftPageHeaderContainer: {
        width: 640,
        overflow: 'hidden',
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    TableAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    alignRightCell: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    viewButtonStyle: {
        marginTop: 4,
    },
    navigateBackButtonStyle: {
        flexDirection: 'row',
    },
    CellTopDisabled : {
        color: '#94979B',
    },
    errorContainer: {
        flexDirection: 'column',
        height: 44,
        paddingTop: 12,
        paddingBottom: 14
    },
    errorText: {
        color: ERROR_RGB,
    },
    searchNotFoundTextWrapperCentered: {
        height: 260,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchNotFoundTextWrapper: {
        backgroundColor: 'white',
        paddingLeft: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    searchNotFoundText: {
        color: 'rgb(204,204,204)'
    },
    ErrorWrapper: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ErrorTextBox: {
        maxWidth:280
    },
    ErrorTextBody: {
        borderRadius: 10,
        borderColor: ERROR_RGB,
        borderWidth:1,
        padding:20,
        paddingTop: 40,
        minHeight: 150
    },
    ErrorTextTitle: {
        fontSize:15,
        textAlign:'center'
    },
    ErrorTextComment:{
        marginTop:15,
        fontSize:15,
        textAlign:'center',
        paddingBottom: 20
    },
    ErrorRefreshBox: {
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ErrorFetching: {
        margin:20,
        marginLeft:20 - DEFAULT_MARGIN,
        marginRight:20 - DEFAULT_MARGIN,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        borderRadius: 5,
        borderColor: ERROR_RGB,
        borderWidth:1,
    },
    ErrorFetchingText: {
        fontSize:15,
        lineHeight:18,
    },
    loaderWrapper: {
        height: PAGE_HEIGHT - NAV_BAR_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalErrorWrapper: {
        width: 270,
        height: 180,
    },
    modalErrorTitle: {
        fontSize: 16,
    },
    modalErrorMessage: {
        fontSize: 12,
    },
    unsupportedTypeBar: {
        height: 44,
        width: PAGE_WIDTH,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: UfsStyleColorList.grey300,
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
    },
    unsupportedTypeBarWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unsupportedTypeButtonTextView: {
        position: 'absolute',
        right: 10,
        top: 0,
        bottom: 0,
    },
    unsupportedTypeBarText: {
        color: ERROR_RGB,
    },
    AuthWarningContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    AuthWarning: {
        width: 546,
    },
    AuthWarningTextContainer: {
        height: 60,
        backgroundColor: '#4d92df',
        borderRadius: 4,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    AuthWarningText: {
        fontFamily: 'PTSans-Regular',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    AuthWarningButton: {
        marginTop: 20,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Styles
