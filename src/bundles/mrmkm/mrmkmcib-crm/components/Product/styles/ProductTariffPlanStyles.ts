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
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
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
    nameProduct: {
        marginTop: 10,
    },
    closedProductText: {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#fff',
        textAlign: 'center',
    },
    closedProductView: {
        marginTop: 13,
        width: 94,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 1,
        borderColor: 'rgba(222, 73, 66, 1)',
        borderRadius: 6,
        backgroundColor: 'rgba(222, 73, 66, 1)',
    }
})

export default Styles