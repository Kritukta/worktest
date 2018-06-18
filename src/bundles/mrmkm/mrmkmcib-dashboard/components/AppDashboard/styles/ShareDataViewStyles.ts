import {StyleSheet} from 'ufs-mobile-platform'

export const Styles: any = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 450,
        maxHeight:715
    },
    smallPopover: {
        height:250
    },
    bigPopover: {
        height:715
    },
    scrollAreaHeight: {
        height: 715
    },
    roundBorder: {
        maxHeight: 624,
        borderRadius: 5,
    },
    Inactive: {
        opacity: 0.5
    },
    mainBackground: {
        backgroundColor: 'white',
    },
    invisibleLayout: {
        alignSelf: 'flex-end',
        width: 1,
        height: 1,
        position: 'absolute',
        right: 32,
        top: 45,
    },
    invisibleLayoutFromOutside: {
        top: -10,
    },
    invisibleLayoutFromOutsideExt: {
        right: 30,
        top: -134,
    },
    breadcrumbsLayout: {
        right: 30,
        top: -180
    },
    InfoMessage: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        padding: 15,
        minWidth: 370,
    },
    ErrorWrapper: {
        height: 60,
        borderColor: 'red',
        borderWidth: 1,
        margin:10,
        padding: 15,
        minWidth: 370,
    },
    AlignCenter:{
        alignItems: 'center'
    },
    sendSuccess: {
        alignItems: 'center',
        paddingTop: 20,
    },
    sendSuccessText: {
        color: 'green',
    },
    toSectionPadding: {
        paddingTop: 44,
    },
    toSectionInner: {
        borderColor: 'rgb(209,208,213)',
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 10
    },
    preconditionToSection: {
        paddingLeft: 20,
        paddingRight: 15,
        flex: 2,
        height:60,
    },
    toSectionLabel: {
        fontFamily: 'PTSans-Regular',
        color: '#000',
        fontSize: 16,
        height: 30,
    },
    toSectionLabelSmallFont: {
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        fontSize: 14,
        paddingTop: 8,
    },
    toSectionButtonFlex: {
        flex: 1,
        overflow: 'hidden',
        marginBottom: -3, // подчеркивание блока совмещено с подчеркиванием радиогруппы
    },
    toSectionLabelFlex: {
        marginRight: 5,
        paddingTop: 5,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        height: 30,
    },
    toSectionMainFlex: {
        flex: 1,
    },
    optionsSectionMain: {
        borderColor: 'rgb(209,208,213)',
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 1,
        overflow: 'hidden',
    },
    optionsSectionMainContent: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    marginLeft: {
        marginLeft: 20,
    },
    bottomBorder: {
        borderColor: 'rgb(209,208,213)',
        borderBottomWidth: 1
    },
    blackFontLabel: {
        fontFamily: 'PTSans-Regular',
        color: 'black',
        fontSize: 16,
        marginTop: 10,
        marginLeft: -20
    },
    blackFontLabelAddressee: {
        fontFamily: 'PTSans-Regular',
        color: 'black',
        fontSize: 16,
        marginTop: 10,
    },
    toSectionHeader: {
        paddingLeft: 20,
        backgroundColor: 'rgb(242,242,242)',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    toSectionHeaderText: {
        fontFamily: 'PTSans-Regular',
        color: 'black',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    circleWrapper: {
        flex: 1,
        marginRight: 15,
        marginTop: 10,
        flexDirection: 'row',
    },
    sectionLinePart: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: -10,
        marginBottom: -12,
        paddingLeft: 20,
        height: 44
    },
    arrowRight: {
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: -43,
        backgroundColor: 'white'
    },
    linePart: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    greyFontLabel: {
        fontFamily: 'PTSans-Regular',
        color: 'gray',
        fontSize: 16,
        flex: 10,
        marginTop: 10,
        textAlign: 'right',
    },
    greyFontLabelSmall:{
        fontFamily: 'PTSans-Regular',
        color: 'rgb(148,151,155)',
        fontSize: 12,
        flex: 10,
    },
    AgentCircleContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AgentCircle: {
        height: 44,
        width: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 205, 209)',
    },
    AgentCircleLabel: {
        fontFamily: 'PTSans-Narrow',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
    leftSectionListItem: {
        flex: 2,
        flexDirection: 'row',
        paddingRight: 10,
        height: 84
    },
    tableCellHeight: {
        height: 84,
    },
    centeralSectionListItem: {
        flex:6,
        borderColor: 'rgb(209,208,213)',
        marginTop: -8,
    },
    rightSectionListItem: {
        flex: 1,
        paddingTop: 10,
        marginRight: -30,
        overflow: 'hidden'
    },
    recipientLabel: {
        paddingRight: -5,
        marginRight: 6,
        marginBottom: 10,

        backgroundColor: 'rgba(239,239,244,1)',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderRadius: 3,
        height: 28,
    },
    recipientLabelText: {
        fontFamily: 'PTSans-Regular',
        color: '#333333',
        fontSize: 16,
        marginRight: -10,
        marginLeft: 10
    },
    recipientListDisplayField: {
        flex: 9,
        marginTop: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
    },
    recipientListDisplayField2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    SearchInputSize: {
        width: 350,
    },
    SearchInputView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 44,
    },
    SearchIcon: {
        marginLeft: 10,
        marginRight: -10
    },
    ClearIcon: {
        marginRight: 20,
        position: 'absolute',
        overflow: 'hidden',
        top: -1,
        right: 5
    },
    PlusButton: {
        flex: 1,
    },
    firstLineWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    addAddressat: {
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
        fontSize: 16,
        height: 30,
    },
    radioGroupTopBorder: {
        borderBottomWidth: 1,
        borderColor: 'rgb(209,208,213)',
        overflow: 'hidden'
    },
    radioGroupBottomBorder: {
        overflow: 'hidden',
        borderTopWidth: 1,
        marginTop: -1,
        borderColor: 'rgb(209,208,213)'
    },
    borderBottomItem: {
        marginLeft: -20,
        paddingLeft:20
    }


})

export default Styles
