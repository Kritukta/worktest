/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'


const FIXTURE_PADDING_STYLE_NEGATIVE = -22
const FIXTURE_MARGIN_STYLE_NEGATIVE_LEFT = -20
const FIXTURE_MARGIN_STYLE_NEGATIVE_RIGHT = -22
const FIXTURE_MARGIN_STYLE_NEGATIVE_TOP = -10
const FIXTURE_MARGIN_STYLE_NEGATIVE_BOTTOM = -10
const FIXTURE_MARGIN_TOP_STYLE_PROFILE= -7
const FIXTURE_MARGIN_LEFT_STYLE_PROFILE= -25
const FIXTURE_MARGIN_RIGHT_STYLE_PROFILE= -20
const UFS_TABLE_CELL_MARGIN_TOP_FIXTURE = -8
const UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE = -10

export const Styles: any = StyleSheet.create({


    memberListContent: {
        flex:1,
        flexDirection:'row',
        alignItems:  'center',
        backgroundColor: '#FFFFFF',
        height: 60
    },
    memberListViewTitle:{
        flex:0,
        flexDirection:  'row',
    },
    memberListTextTitle: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    memberListViewPerson: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection:  'row',
    },
    memberListTextPerson: {
        fontSize:16,
        fontFamily: 'PTSans-Regular',
        alignSelf:'center',
        color: '#999999',
    },
    memberListViewButton:{
        flex:0,
        marginTop: FIXTURE_MARGIN_STYLE_NEGATIVE_TOP,
        marginBottom: FIXTURE_MARGIN_STYLE_NEGATIVE_BOTTOM,
        justifyContent: 'flex-end',
        alignItems:  'center',
    },
    memberListViewSpace:{
        flex:0,
        marginRight: 20,
    },
    tableRows: {
        borderTopWidth: 1,
        height: 60,
        borderColor: 'rgb(204,204,204)'
    },
    main: {
        flex: 1,
        height: 740,
        backgroundColor: '#fff'
    },
    flex: {
        flex: 1
    },
    LoaderWrapper: {
        height: 740,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInputFilterFieldView: {
        height: 44,
    },
    searchInputFilterFieldViewError: {
        height: 80,
    },
    contentSection: {
        borderTopWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        borderColor: 'rgb(204,204,204)',
        paddingLeft: 20
    },
    contentSectionMeaning: {
        borderTopWidth: 1,
        minHeight: 60,
        justifyContent: 'center',
        borderColor: 'rgb(204,204,204)'
    },
    contentSectionTeam: {
        borderTopWidth: 1,
        justifyContent: 'center',
        borderColor: 'rgb(204,204,204)',
        minHeight: 60,
        paddingLeft: 20
    },
    disabled: {
        borderTopWidth: 1,
        borderColor: 'rgb(204,204,204)',
        backgroundColor: 'rgb(239,239,244)',
    },
    spacer: {
        borderColor: 'rgb(204,204,204)',
        borderTopWidth: 1,
        height: 15,
        backgroundColor: 'rgb(239,239,244)',
    },
    spacerDouble: {
        borderTopWidth: 1,
        borderColor: 'rgb(204,204,204)',
        height: 30,
        backgroundColor: 'rgb(239,239,244)',
    },
    selectCustomer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchNotFoundTextWrapper: {
        height: 260,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchNotFoundText: {
        color: 'rgb(204,204,204)'
    },
    content: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 740,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    UnderCellWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 5,
        padding: 3,
        paddingRight: 6,
        borderRadius: 3,
    },
    OrangeLabelText: {
        color: '#fff',
        fontSize: 12,
    },
    OrgType: {
        backgroundColor: 'transparent',
        padding: 3,
        paddingLeft: 0, 
        fontSize: 12,
        color: '#94979B',
    },
    TopRow: {
        flexDirection: 'row'
    },
    validationError: {
        margin: 15,
        fontSize: 14,
        color: 'red'
    },
    SearchResultHeight: {
        height: 608
    }


})

export default Styles