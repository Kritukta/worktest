/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const UFS_HOR_LINE_TOP_FIXTURE = -10;
const Styles = StyleSheet.create({
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
    caption: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    productText: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular'
    },
    clientProduct: {
        marginTop: 13,
    },
    horizontalLineView: {
        marginTop: UFS_HOR_LINE_TOP_FIXTURE,
    },
});
export default Styles;
//# sourceMappingURL=ProductCashManagementStyles.js.map