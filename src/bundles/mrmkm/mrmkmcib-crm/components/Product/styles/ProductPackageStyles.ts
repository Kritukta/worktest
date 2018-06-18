/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const UFS_HOR_LINE_TOP_FIXTURE = -10

const Styles: any = StyleSheet.create({


    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderBox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    navigationBackButtonTextAdjustment:{
        marginLeft: -10,
    },
    clientProduct: {
        marginTop: 13,
    },
    horizontalLineView: {
        marginTop: UFS_HOR_LINE_TOP_FIXTURE,
    },
    nameProduct: {
        marginTop: 10,
    },
    packageListTitle: {
        fontFamily: 'PTSans-Regular',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom:15,
    },
    packageListText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        marginBottom:7,
    },



})

export default Styles