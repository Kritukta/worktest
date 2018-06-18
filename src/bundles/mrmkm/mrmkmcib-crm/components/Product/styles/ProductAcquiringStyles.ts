/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const UFS_HOR_LINE_TOP_FIXTURE = -10
const UFS_TABLE_MARGIN_FIXTURE = -22
const UFS_TABLE_CELL_MARGIN_TOP_FIXTURE = -8
const UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE = -10

const Styles: any = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pageContainer: {
        flex: 1,
    },
    
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    agreementListLinkContainer: {
        marginTop: 30,
        marginRight: UFS_TABLE_MARGIN_FIXTURE,
    },
    
    agreementListLinkCell: {
        marginTop: UFS_TABLE_CELL_MARGIN_TOP_FIXTURE,
        marginBottom: UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE,
        overflow: 'visible',
    },
    
    agreementListLink: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        marginLeft: -3,
        borderColor: "rgb(214,214,214)",
    },
    
    agreementListLinkTitle: {
        flex: 1,
        paddingLeft: 3,
        textAlign: 'left',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        color: '#1E1E1E',
        paddingTop: 10,
        paddingBottom: 14,
    },
    
    agreementListTable: {
        marginTop: 20,
        flex: 1,
    },

    agreementListItemCell: {
        marginTop: UFS_TABLE_CELL_MARGIN_TOP_FIXTURE,
        marginBottom: UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE,
    },

    agreementListItemView: {
        paddingTop: 10,
        paddingBottom: 14,
    },

    agreementListItemText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    
    mainInfoGreedContainer: {
        paddingLeft: 20,
    },
    
    comissionList: {
        paddingLeft: 20,
        marginTop: 30,
    },
    
    agreementListLinkValue: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        color: '#999',
    },
    
    borderBox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    
    nameProduct: {
        marginTop: 10,
    },
    
    clientProduct: {
        marginTop: 13,
    },
    
    navigationBackButtonTextAdjustment:{
        marginLeft: -10,
    },
    
    horizontalLineView: {
        marginTop: UFS_HOR_LINE_TOP_FIXTURE,
    },
    
    commisionTitle: {
        fontFamily: 'PTSans-Bold',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom:15,
    },
    
    commisionText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        marginBottom:10,
    },

})

export default Styles