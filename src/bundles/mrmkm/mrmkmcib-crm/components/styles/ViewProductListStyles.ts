/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const DEFAULT_PAGE_HEIGHT = 740
const NAVBAR_HEIGHT = 44

const UFS_TABLE_MARGIN_FIXTURE = -20
const UFS_TABLE_CELL_MARGIN_TOP_FIXTURE = -10
const UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE = -10

export const Styles: any = StyleSheet.create({

    main: {
        /*	FIXME: flex must be used insted of height (awaiting for UFS library bug fix)	*/
        // flex: 1,
        height: DEFAULT_PAGE_HEIGHT,
    },
    tableProductListContent: {
		height: DEFAULT_PAGE_HEIGHT,
    },
    cardIndexRestrictionFilterWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    componentProductItem: {},
    containerEksErrorList: {
        paddingBottom: 5,
    },
    productListContentPanel: {
        backgroundColor: '#fff'
    },
    productTypeFetchError: {
        fontFamily: 'PTSans-Regular',
        color: '#333',
        fontSize: 14,
    },

    productListTextAgreementStatus:{

        fontFamily: 'PTSans-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
        lineHeight: 20,
        paddingLeft: 20,
        paddingBottom:20,
    },
    paymentAccountHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    productCellView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    productCellViewSubtitled: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    productCellChevron: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: -10,
        marginBottom: -10,
    },
    productCellText: {
        fontFamily: 'PTSans-Regular',
        color: '#333',
        fontSize: 16,
    },
    paymentAccountTextCell: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateTextCellVTopHLeftCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // fontFamily: 'PTSans-Regular',
        color: 'rgb(51, 51, 51)',
        fontSize: 28
    },
    dateTextVTopHLeft: {
        alignItems: 'flex-start',
        color: 'rgb(51, 51, 51)',
        flexDirection: 'row',
        // fontFamily: 'PTSans-Regular',
        fontSize: 28,
        justifyContent: 'flex-start',
    },
    regularFont16: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    adjustVDebtSum: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: -2,
        marginTop: -24,
    },
    adjustCloseDate: {
        marginTop: -3,
    },
    adjustChevron: {
        marginTop: -8,
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    adjustCreditProductDetails: {
        marginTop: -3,
        paddingBottom: 1
    },
    contractNumberTextColor: {
        color: 'rgb(153, 153, 153)'
    },
    paddingBottom5: {
        paddingBottom: 5
    },
    paymentAccountSubtitle: {
        fontFamily: 'PTSans-Regular',
        color: 'red',
        fontSize: 12,
        lineHeight: 14,
    },
    paymentAccountDetails: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateUpdateInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lastTimeInfoUpdate: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ededed',
        paddingBottom: 2,
        paddingTop: 2
    },
    boldTableRow: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    sectionHeader: {
        fontFamily: 'PTSans-Bold',
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        height: 20,
    },
    productListPage: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        /*flex: 1,*/
        height: DEFAULT_PAGE_HEIGHT - NAVBAR_HEIGHT, // 740 - 44 (screen excluding nav-bar)
        flexDirection: 'column',
        overflow: 'hidden'
    },
    errorProductListView: {
        minHeight: 60,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },

    productListErrorPanelContainer: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    cacheInfoBar: {

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

    productTypeListCacheRefreshButton: {

        position: 'absolute',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 44,
        right: 40,
        top: 0,

    },


    productContentWithFilterList: {
        /*	FIXME: flex must be used insted of height (awaiting for UFS library bug fix)	*/
        /*flex: 1,*/
        height: DEFAULT_PAGE_HEIGHT,
    },
    loaderContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexCenterVert: {
        flex: 1,
        justifyContent: 'center',
    },
    flexCenterRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    creditContractNumber: {
        color: 'rgb(153, 153, 153)'
    },
    headerVtop: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    tableColumnHeaderText: {
        flex: 1,
        textAlign: 'left',
    },
    headerSubtitle: {
        color: 'gray',
        fontSize: 12,
    },
    height14: {
        height: 14,
    },
    height20: {
        height: 20,
    },
    marginTop10: {
        marginTop: 10,
    },
    hideRightMargin20: {
        marginRight: -22,
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    spacer: {
        height: 28,
        backgroundColor: 'rgb(244,244,244)',
    },
    tableViewBugFixtureRow: {
        backgroundColor: '#fff',
    },
    tableViewBugFixture: {
        height: 13,
        backgroundColor: '#fff',
    },
    ufsTableViewPaddingFix: {
        paddingTop: 20,

    },
    spacerLeft: {
        marginLeft: -10,
    },
    spacerRight: {
        position: 'relative',
        paddingRight: 90,
    },
    sumTextRight: {
        justifyContent: 'flex-end'
    },

    productListTitleView: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom:20,
		height:100,
    },
    productListSubtitle: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3,
        height: 16,
        lineHeight: 16,
    },

    productListFilterBar: {
        backgroundColor: '#fff',
        height: 696,
    },

    statusFilterContainer: {
        marginTop: 20,
    },

    encumbranceFilterContainer: {
        marginTop: 30,
    },

    filterTitle: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },

    productListTableRow:{
        marginLeft: 20,
        marginRight: 20,
    },
    productListTableCell: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },

    productListTable: {
        height: 511,
    },
    productListTableHead: {marginLeft: 20, height: 42}
    /* END - View ProductList styles. */


})

export default Styles