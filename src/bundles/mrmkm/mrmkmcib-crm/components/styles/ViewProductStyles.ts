/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const PAGE_HEIGHT = 740

export const Styles: any = StyleSheet.create({


    main: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 700,
    },


    componentProductFilter: {},
    modalForeground: {
        height: 750,
        width: 950,
        position: 'absolute',
        left: 50,
        top: 25,
        backgroundColor: 'white'
    },
    modalBackground: {
        height: 742,
        width: 1024,
        position: 'absolute',
        left: 54,
        top: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    loaderWrapper: {
        height: PAGE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',

    },


})

export default Styles