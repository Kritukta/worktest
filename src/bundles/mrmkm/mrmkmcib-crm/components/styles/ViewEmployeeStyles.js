/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const PADDING_LEFT = 20;
const ROW_HEIGHT = 44;
export const Styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
    },
    PaddingLeft: {
        paddingLeft: PADDING_LEFT,
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    fixedHeight: {
        height: 500,
    },
    fixedHeightExpanded: {
        height: 740
    },
    flex: {
        flex: 1
    },
    pageContentFlexDirection: {
        flexDirection: 'column',
    },
    email: {
        color: 'blue',
    },
    HeaderWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeaderWrapperNaviagation: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    HeaderWrapperSecondaryNaviagation: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    listDownIconContainer: {
        flex: 1,
        paddingRight: 20,
        alignItems: 'flex-end'
    },
    loaderPageWrapper: {
        height: 516,
    },
    loaderPageWrapperExtended: {
        height: 700,
    },
    loaderWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    smallLoader: {
        height: 44,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        transform: [{ scale: 0.3 }],
        paddingRight: 40,
        marginTop: -15
    },
    topRowText: {
        fontSize: 16,
    },
    bottomRowText: {
        fontSize: 12,
        color: '#94979B',
    },
    GreyLabel: {
        fontSize: 12,
        color: '#94979B',
        marginBottom: 5,
    },
    iconContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 116,
    },
    iconCircleWrapperView: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'flex-start',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    iconCircle: {
        // alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'rgb(0,122,255)',
        borderRadius: 22,
        borderWidth: 2,
        // flexDirection: 'row',
        height: 44,
        // justifyContent: 'center',
        // left: 0,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // position: 'absolute',
        // right: 0,
        width: 44,
    },
    iconGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    iconText: {
        fontSize: 12,
        color: 'rgb(0,122,255)'
    },
    HeaderWrapperFullScreen: {
        backgroundColor: '#F8F8FA',
        alignItems: 'center',
        paddingTop: 10,
    },
    AgentCircleContainerFullScreen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    ErrorWrapper: {
        paddingRight: 20
    },
    ErrorWrapperContent: {
        padding: 20
    },
    /* Employee View */
    avatarComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 30
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 205, 209)'
    },
    avatarLabel: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white'
    },
    avatarSubtitle: {
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarSubtitleLabel: {
        color: 'grey'
    },
    employeeInformation: {
        flex: 1,
        paddingLeft: 20,
    },
    employeeInformationSubtitle: {
        paddingTop: 20,
        marginBottom: 5
    },
    employeeHead: {
        marginLeft: -20
    },
    employeeClients: {
        marginTop: -10
    },
    TopRow: {
        flex: 1,
        flexDirection: 'row'
    },
    ClientListRowButtonContainer: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    BottomRow: {
        flex: 1,
        flexDirection: 'row'
    },
    Lock: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    LockText: {},
    ChevronWrapper: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'column',
        height: 44,
        justifyContent: 'center',
        width: 44,
    },
    DataLineWrapper: {
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        marginRight: 10,
    },
    CustomersListTableRowWrapper: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginBottom: -9,
        marginTop: -8,
    },
    CustomersListTableCellWrapper: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    CustomersListTableRowDataBlock: {
        flex: 1,
        flexDirection: 'column'
    },
    CustomersListTableRowDataBlockRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Name: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 14
    },
    EmployeeClientRowName: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },
    InlineWrapper: {
        flexDirection: 'row',
        flex: 1,
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
        fontSize: 12,
        marginTop: 10,
        color: '#94979B',
    },
    EmployeeClientRowOrgType: {
        backgroundColor: 'transparent',
        padding: 3,
        fontSize: 12,
        color: '#94979B',
    },
    InfoTabWrapperPadding: {
        borderTopColor: '#d5d5d5',
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'column',
    },
    AgentInfoRow: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5'
    },
    AgentInfoRowEmail: {
        height: 60,
        paddingTop: 9,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5'
    },
    AgentInfoRowLabel: {
        fontSize: 12,
        color: '#94979B',
        paddingBottom: 5
    },
    AgentInfoRowLabelWhenLoader: {
        fontSize: 16,
        color: 'white',
        textAlign: 'right',
        flex: 1
    },
    AgentInfoRowLabelEmail: {
        fontSize: 12,
        color: '#94979B',
    },
    RegularText: {
        alignSelf: 'center',
        fontSize: 16,
    },
    RegularTextWhenLoader: {
        fontSize: 16,
        flex: 1,
        paddingLeft: PADDING_LEFT,
        color: 'white',
    },
    CustomerCompaniesCounter: {
        alignSelf: 'center',
        color: '#94979B',
        flex: 1,
        fontSize: 16,
        alignItems: 'flex-end',
        textAlign: 'right',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    AgentInfoRowTable: {
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'column',
    },
    AgentInfoRowTableLoaderWrapper: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: '#cccccc',
        paddingTop: 10,
        height: ROW_HEIGHT,
    },
    personTableWrapper: {
        marginLeft: -25,
        marginRight: 0
    },
    PersonPhoto: {
        alignSelf: 'center',
        flex: 1.4
    },
    PersonNameText: {
        fontSize: 18,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    PersonNameContainer: {
        flex: 3.6,
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    PersonRowContainer: {
        flex: 6,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    participantSubtitle: {
        fontSize: 12,
        color: 'rgb(155, 155, 155)'
    },
    NavigateToDetailsButton: {
        alignSelf: 'center',
    },
    phoneButtonWrapper: {
        paddingTop: 10
    },
    phoneTextWrapper: {
        marginTop: -10
    },
    EmployeeClientRowWrapper: {
        flexDirection: 'row',
        flex: 1,
        paddingRight: 80
    },
    EmployeeClientListRowContainer: {
        flexDirection: 'row',
        flex: 1
    },
    emptySubordinatesList: {
        marginLeft: -20
    },
    subordinatesWrapper: {
        marginTop: 10
    },
    headNoData: {
        marginBottom: 10,
    },
    clientListClickableRowWrapper: {
        flexDirection: 'row-reverse',
        marginLeft: 20,
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 1,
    },
    clientListClickableButton: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    textWithErrorView: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    baseText: {
        color: 'black',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    clientListErrorText: {
        color: 'rgb(251, 168, 0)',
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    employeeHeadContent: {
        paddingTop: 10,
    },
});
export default Styles;
//# sourceMappingURL=ViewEmployeeStyles.js.map