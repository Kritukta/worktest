/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const UFS_TABLE_MARGIN_FIXTURE = -22
const UFS_TABLE_CELL_MARGIN_TOP_FIXTURE = -8
const UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE = -10

const Styles: any = StyleSheet.create({


    main: {
        flex: 1,
        paddingTop: 0,
    },

    content: {
        flex: 1,
    },

    productTypeListContainer: {
        flex: 1,
    },

    productTypeTabSelector: {

        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(236,236,236)',
        borderTopWidth: 1,
        
    },

    productListView: {
        height: 570,
        paddingBottom: 20,
    },

    productTypeListTableContainer: {
        flex: 1,
        marginRight: UFS_TABLE_MARGIN_FIXTURE,
    },

    productTypeListCacheInfo: {

        height: 44,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderTopWidth: 1,
        borderColor: 'rgb(236,236,236)',

    },

    productTypeListCacheDate: {
        
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
    
    },

    productTypeListCacheRefreshButton: {

        position: 'absolute',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 44,
        width: 100,
        right: 20,
        top: 0,

    },

    productListItemValueText: {
        fontSize: 14,
        color: '#d6d6d6',
    },

    wrapperLoader: {
        height: 100
    },
    tabSelectorProductListAgreementStatus: {
        width: 300,
        marginBottom:10
    },
    cacheInfoBar: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
    },
    Header: {
        marginTop: 22,
        paddingLeft: 20,
        paddingRight: 20,
    },
    productListViewMrmLink: {
        flex:0,
        flexDirection: 'row',
        alignItems:"center"
    },
    LoaderProductList:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'center'
    },
    Breadcrumbs: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    TabSelector:{
        width: 600
    },
    TabWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    productTypeCellView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    productTypeCellViewFetching: {
        backgroundColor: 'rgb(204,204,204)',
        marginLeft: UFS_TABLE_MARGIN_FIXTURE,
        paddingLeft: -UFS_TABLE_MARGIN_FIXTURE,
        paddingRight: -UFS_TABLE_MARGIN_FIXTURE,
    },
    productTypeCellFetching: {
        overflow: 'visible',
    },
    productTypeTitleView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 14,
    },
    productTypeTitle: {
        fontSize: 16,
        lineHeight: 20,
        height: 20,
    },
    productTypeFetchError: {
        color: 'orange',
        fontSize: 12,
        lineHeight: 16,
        height: 16,
        marginTop: 5,
    },
    productTypeDetailView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    productTypeLoadingText: {
        color: '#fff',
        fontSize: 12,
    },
    productTypeDetailsText: {
        color: '#ccc',
        marginRight: 20,
    },
    PrognosticDealsTableHeader: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 26,
        backgroundColor: '#f7f7f7',
        marginLeft: -20,
        paddingBottom: 6,
        paddingTop: 6,
    },
    HideDefaultHeader: {
        height: 0
    },
    PrognosticTableCell: {
        flex:1,
        height: 44,
        marginLeft: -4,
        marginRight: -20,
        flexDirection: 'row'
    },
    PrognosticCellFirstCol: {
        flex: 5,
    },
    PrognosticCellSecondCol: {
        flex: 4
    },
    PrognosticCellThirdCol: {
        flex: 2
    },
    PrognosticCellText: {
        fontSize: 16,
        fontFamily: "PTSans-Regular",
    },
    PrognosticCellThirdText: {
        fontSize: 16,
        fontFamily: "PTSans-Regular",
        marginLeft: 5,
        overflow: 'hidden'
    },
    PrognosticCellFirstColText: {
        fontSize: 12,
        color: '#ccc',
        fontFamily: "PTSans-Regular",
        flex: 1,
        paddingLeft: 18,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PrognosticCellSecondColText: {
        fontSize: 12,
        color: '#ccc',
        fontFamily: "PTSans-Regular",
        marginLeft: -2,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    PrognosticCellThirdColText: {
        fontSize: 12,
        color: '#ccc',
        fontFamily: "PTSans-Regular",
        flex: 1,
        marginLeft: -10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    Chevron: {
        flex: 1,
        marginTop: -10,
        marginRight: -10,
        marginLeft: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    TabContentWrapper: {
        flex:1,
        padding:0,
        margin: 0
    },
    productTypeList: {
        flex: 1,
        flexDirection: 'column'
    },
    productTypeCell: {
        flexDirection: 'row',
        marginTop: UFS_TABLE_CELL_MARGIN_TOP_FIXTURE,
        marginBottom: UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE,
    },
    productTypeCellHidden: {
        height: 0,
        backgroundColor: '#fff',
    },
    productTypeErrorView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dashboardContainer: {
        flex: 1
    },



})

export default Styles