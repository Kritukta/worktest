/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

const PAGE_HEIGHT = 740
const NAVBAR_HEIGHT = 44

export const Styles: any = StyleSheet.create({


    main: {
        flex: 1
    },

    LoaderWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderSpacer: {
        height: 44,
    },
    flex: {
        flex: 1
    },
    FixedHeight: {
        height: PAGE_HEIGHT - NAVBAR_HEIGHT
    },
    accessoryPanelContentButton: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    accessoryPanelContent: {
        marginLeft: 20,
        paddingTop: 44,
        marginRight: 20,
    },
    Header: {
        alignItems: 'center',
    },
    HeaderTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    HeaderOrganizationType: {
        fontSize: 11,
        color: '#94979B',
    },
    RefreshBar: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6,
        paddingRight: 20,
        borderTopWidth: 1,
        borderColor: 'rgb(204,204,204)',
        paddingBottom: 10,
    },
    RefreshBarDateWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LeftPageHeaderContainer: {
        width: 640,
        overflow: 'hidden',
    },
    searchNotFoundTextWrapperCentered: {
        height: 260,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchNotFoundTextWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    searchNotFoundText:{
        color:'rgb(204,204,204)'
    },
    searchNotFoundTextBold:{
        color:'rgb(204,204,204)',
        fontWeight:'bold'
    },
    SearchResultRowWrapper: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
    },
    TopRow: {
        flex: 1,
        flexDirection: 'row'
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 5,
        padding: 3,
        borderRadius: 3,
    },
    OrangeLabelText: {
        color: '#fff',
        fontSize: 12,
    },
    OrgType: {
        backgroundColor: 'transparent',
        padding: 3,
        fontSize: 12,
        color: '#94979B',
    },
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },


})

export default Styles
