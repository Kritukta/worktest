/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

export const Styles: any = StyleSheet.create({

    accessoryPanelContent: {
        marginLeft: 30,
        paddingTop: 44,
        marginRight: 30,
    },
    accessoryPanelContentButton: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    main: {
        flex: 1,
    },
    pickerErrorBackground:{
        height:31, backgroundColor:'rgb(252,239,238)'
    },
    pickerErrorText:{
        fontSize:12, color:'rgb(202,61,54)', marginLeft:20, marginTop:5
    },
    HorisontalLine: {
        borderTopWidth: 1,
        borderColor: '#dedede',
    },
    HorisontalLinePadding: {
        paddingTop: 25,
        paddingBottom: 25
    },
    InlineWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex: {
        flex: 1
    },
    editorContentEmptyContent: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: 698
    },
    customerEditorContent: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 698,
        flex: 1,
        justifyContent: 'space-between'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },
    BlueTitle: {
        color: '#0079FF',
        fontSize: 16,
    },
    OrganizationType: {
        marginTop: 10,
        fontSize: 12,
        color: '#94979B',
    },
    GreyLabel: {
        fontSize: 12,
        color: '#94979B',
    },
    GreyLabelValue: {
        marginTop: 5,
        fontSize: 16,
    },
    CollWrapper: {
        marginRight: 20,
        marginLeft: -3,
    },
    Breadcrumbs: {
        marginBottom: 20,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 15,
    },
    tableCell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ErrorWrapper: {
        padding: 20
    },
    ContinueButton: {
        paddingRight: 20,
    },
    warningBox: {
        paddingTop: 25,
        marginRight:17
    },
    loader: {
        flex:1,
        marginLeft: 17,
        alignItems:'center',
        justifyContent:'center',
        height: 500
    },
    marginLeft: {
        marginLeft: 17
    }
})

export default Styles
