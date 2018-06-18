/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const UFS_HOR_LINE_TOP_FIXTURE = -10

const MARGIN_TOP_FIXTURE = -15
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
    dealPeriodDurationView: {
        marginTop: 5,
    },
    dealPeriodStartDateView: {
        marginTop: 5,
    },
    dealPeriodEndDateView: {
        marginTop: 5,
    }


})

export default Styles