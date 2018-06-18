import {StyleSheet} from 'ufs-mobile-platform'
const ERROR_TEXT_HEIGHT = 30
export const Styles: any = StyleSheet.create({


    ModalForeground: {
        height: 740,
        width: 960,
        position: 'absolute',
        borderRadius: 5,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    roundBorderView: {
        maxHeight: 624,
        borderRadius: 5,
    },

    SearchInputView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 44,

    },

    filterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#cccccc',
    },

    tabSelector: {
        width: 241,
    },

    lastSearchRow: {
        //flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 23,
        paddingRight: 40,
        height: 44, // 38, //50
        borderBottomWidth: 0.5,
        borderBottomColor: '#cccccc',
    },

    lastSearchText: {
        fontFamily: 'PTSans-Regular',
        color: '#919191',
        fontSize: 12,

        //lineHeight: 1.17,
        //letterSpacing: 0.5,
    },

    clearLastSearchBlock: {
        flexDirection: 'row',
    },

    Touch: {
        flexDirection: 'row'
    },

    clearLastSearchText: {
        fontFamily: 'PTSans-Regular',
        color: '#919191',
        textAlign: 'right',
        fontSize: 14,
    },

    CancelIcon: {
        marginLeft: 14,

        width: 14,
        height: 14,
        alignSelf: 'center'
    },


    main: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    TopRow: {
        flex: 1,
        flexDirection: 'row'
    },
    flex: {
        flex: 1,
    },
    InlineWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        maxHeight: 42,
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 10,
        padding: 3,
        borderRadius: 3,
        marginTop: -1,
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
        flexDirection: 'column',
        alignSelf: 'center',
    },
    BottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },
    Spacer: {
        height: 20
    },
    SearchInput: {
        width: 832,
        marginRight: 15,
    },
    ContentPanel: {
        backgroundColor: '#ffffff'
    },
    SearchLine: {
        borderWidth: 2,
        width: 100
    },
    LeftPageHeader: {
        borderWidth: 2,
    },
    LoaderWrapper: {
        paddingBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    WarningWrapper: {
        padding: 20
    },
    ErrorWrapper: {
        padding: 20
    },
    ErrorWrapperCenter: {
        justifyContent: 'center',
        padding: 20
    },
    ShowMoreRow: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
    },
    SearchInputClearButton: {
        marginLeft: -45,
    },
    Lock: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    longListErrorTextWrapper : {
        height: ERROR_TEXT_HEIGHT,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 153, 0, 0.1)'
    },
    longListErrorText : {
        marginLeft: 20,
        color: 'rgb(255, 152, 0)'
    },


})

export default Styles