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
    dboStatusClose: {
      fontFamily: 'PTSans-Regular',
      color: '#DE4942',
      fontSize: 16,
    },
    caption: {
        fontWeight: 'bold',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    productText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    authorizedPersonTitle: {
        fontFamily: 'PTSans-Regular',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom:15,
    },
    navigationBackButtonTextAdjustment:{
        marginLeft: -10,
    },

    nameSystem: {
        marginTop: 10,
    },
    clientProduct: {
        marginTop: 13,
    },
    horizontalLineView: {
        marginTop: UFS_HOR_LINE_TOP_FIXTURE,
    },
    authorizedPersonText: {
        fontSize: 15,
        marginBottom:8,
        fontFamily: 'PTSans-Regular',
    },

})

export default Styles