/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'
const PAGE_HEIGHT = 740

export const Styles: any = StyleSheet.create({


    main: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: PAGE_HEIGHT,
        // flex: 1,
    },
    greyLabel: {
        fontSize: 12,
        color: '#94979B',
        marginBottom: 5,
    },
    greyLabelValue: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
    },
    inlineWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 54,
        backgroundColor: '#fff',
        marginLeft: 20,
    },
    occasionView: {
        flex: 0,
        paddingRight: 15,
        flexDirection: 'column',
        borderRightWidth: 2,
        borderColor: '#007AFF',
    },
    annualOccasionView: {
        flex: 0,
        paddingRight: 29,
        flexDirection: 'column',
        borderRightWidth: 2,
        borderColor: '#007AFF',
    },
    mainOccasionView: {
        minWidth: 95,
    },
    rightColumn: {
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 20,
        flex: 5,
    },
    deleteButton: {
        backgroundColor: '#D33333',
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: '#ffffff',
    },
    occasionContentView: {
            flex:1,
            flexDirection: 'row',
            justifyContent:'flex-start',
            alignItems:'center',
    },
    occasionTableCellView: {
        flex: 1,
    },
    occasionListStatusView: {
        flex:1,
        height: 600,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    TableMargins:{
        marginLeft: -20,
        marginRight:-20
    },
    TableMargin:{
        marginRight:-20
    },
    swipeableRowContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    iconRedMinusView:{
        flex: 0,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft: 20,
        marginRight: 85,
    },
    occasionListItemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: 60,
    },
    occasionPageContainer:{
        flex: 1,
        flexDirection: 'column'
    },
    containerDeleteButton:{
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 20,
        marginRight: 20,
    },
    LoaderWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    navigationBackButtonTextAdjustment:{
        marginLeft: -10,
    },
    emptyOccasionListText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        padding: 10,
    },
    addNewOccasionView: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderColor: '#d5d5d5',
    },
    emptyOccasionListView: {
        flex: 1,
        alignSelf: 'center'
    },
    tableCellAddNewOccasion: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
    }

})

export default Styles