/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

export const Styles: any = StyleSheet.create({



    main: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 600,
        // flex: 1,
    },
    mainFull: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 900,
        // flex: 1,
    },
    heightStyle:{height:900},
    NoteEditViewTypeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd'
    },
    typeText:{fontSize:16},
    NoteEditViewButtonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    NoteEditViewButtontext:{color:'#9E9E9E'},
    ContentPanelColor:{
        backgroundColor: '#fff'
    },
    rightActionMenuContainer:{
        backgroundColor: '#FF0000',
        flex:1,
        padding:10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#d5d5d5'
    },
    rightActionMenuTextColor:{color:'#FFFFFF'},
    noteListRowCell:{
        marginTop:-10,
        marginBottom:-10
    },
    noteListRowCellContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    noteListRowCellButtonContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginLeft:10,
        marginRight:30
    },
    ButtonDel:{
        backgroundColor:'#d43333',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        height:22,
        width:22
    },
    ButtonMinus:{
        backgroundColor:'#FFFFFF',
        height:1,
        width:11
    },
    SwipeableItemContainer:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    NoteEditViewContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    noteListContainerView: {},
    noteListItemCell: {},
    noteListItemCellView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:-18
    },
    noteListItemCellView1:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    noteListItemCellView2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    noteItemEditView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    noteItemTypeEditView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    noteTypeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    noteItemTextEditView: {
        flex: 1,
    },
    noteItemTypeRemoveView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    addNewNotePanel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    hr: {
        height: 1,
        backgroundColor: '#ddd',
    },
    newNoteBar: {
        marginTop: 20,
    },

    /*************/
    notePageContainer:{
        flex: 1,
        flexDirection: 'column'
    },
    plusPanelContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#d5d5d5',
        paddingRight:20,
    },
    noteListStatusView: {
        flex:1,
        height: 600,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    TableMargins:{
        marginLeft: -23,
        marginRight:-23
    },
    TableMargin:{
        marginRight:-23
    },
    noteTableCell: {
        flex: 1,
        flexDirection: 'row',
    },
    noteTableCellView: {
        flex: 1,
    },
    swipeableRowContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    swipeableRowButtonContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginLeft:10,
        marginRight:30
    },
    containerDeleteButton:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonDell:{
        marginRight:20,
        marginLeft:20
    },
    noteListItemContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:-10,
        marginTop:-10,
        paddingBottom:10,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',
        backgroundColor: '#fff',
    },

})

export default Styles