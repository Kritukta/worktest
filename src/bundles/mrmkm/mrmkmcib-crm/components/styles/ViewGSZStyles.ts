/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform'

export const Styles: any = StyleSheet.create({

    scale: {
        transform: [{scale: 0.5}]
    },

    main: {
        height: 740
    },

    mainContainer: {
        height: 696
    },

    noHeight: {
        height: 0,
    },

    contentPanel: {
        backgroundColor: '#fff',
    },

    searchInputContainer: {
        width: 375
    },

    refreshBarContainer:  {
        height: 45,
        width: 640,
        position: 'absolute',
        bottom: 0,
        left: 0
    },

    content: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },

    borrowerDetailsContent: {
        marginLeft: 20,
        marginRight: 20,
    },

    limitStructureInvalidMessage: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20.3,
        backgroundColor: 'rgb(219,233,249)',
        borderRadius: 3
    },

    errorContent: {
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 20
    },

    flexCentered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    panelGridLabelWrapper: {
        flexDirection: 'row'
    },

    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },

    currentGszFetching: {
        height: 698,
        alignItems: 'center',
        justifyContent: 'center'
    },

    errorText: {
        padding: 20,
    },

    header: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10
    },

    gszBorrowersListActionsButtonDescription: {
        fontSize: 16
    },
    gszBorrowersListActionsButtonSort: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },

    limitErrorPanel: {
        marginBottom: 10
    },

    limitPanelWithoutBorderBottom: {
        borderBottomWidth: 0
    },

    limitPanelLoadingBackground: {
        backgroundColor: 'rgb(204, 204, 204)'
    },
    borrowerListPopoverLableContainer:  {
        paddingBottom: 20
    },
    borrowerDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        minHeight: 44
    },
    popoverBorrowerListIconContainer: {
        position: 'absolute',
        width: 44,
        height: 44,
        right: -20,
        top: 0
    },
    BorrowerListOrganizationNameContainerRow: {
        flex: 1,
        flexDirection: 'row'
    },
    BorrowerListOrganizationNameContainerColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingRight: 10
    },
    gszBorrowersListActionsButtonSearch: {
        flex: 0,
        marginRight: 20.3
    },

    gszBorrowersListActions: {
        borderTopWidth: 1,
        height: 50,
        paddingLeft: 20.3,
        flex: 0,
        borderColor: 'rgb(204,204,204)',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1
    },
    OrganizationNameContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    /* Members table */
    memberListItemArrowWrapper: {
        marginRight: -11,
    },
    searchNotFoundTextWrapperCentered: {
        height: 260,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchNotFoundTextWrapper: {
        backgroundColor: 'white',
        paddingLeft: 24,
        marginTop: 10,
        marginBottom: 10,
        paddingRight: 24,
    },
    searchNotFoundText: {
        color: 'rgb(204,204,204)'
    },
    searchNotFoundTextBold: {
        color: 'rgb(204,204,204)',
        fontWeight: 'bold'
    },
    LimitPanelTitle: {
        fontSize: 16,
        marginTop: 5
    },
    problemGroupCircle: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    tableComponent: {
        flex: 1,
        marginBottom: 44
    },
    searchGszTableStyles: {
        height: 640
    },
    gszTableStyles: {
        height: 394
    },
    memberAttributesRow: {
        flexDirection: 'row'
    },
    memberListItemArrow: {
        color: 'rgb(204,204,204)'
    },
    memberAttributeOrganizationType: {
        backgroundColor: 'transparent',
        padding: 3,
        fontSize: 12,
        color: '#94979B',
    },
    cellStatusAlign: {
        justifyContent: 'flex-end',
    },
    cellGroupAlign: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    cellLeftAlign: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cellRightAlign: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cellGroupArrow: {
        marginBottom: -5,
        marginRight: -15
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        alignSelf: 'center',
        marginRight: 5,
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 3,
    },
    OrangeLabelText: {
        color: '#fff',
        fontSize: 12,
    },
    memberAttributeName: {
        backgroundColor: 'transparent',
        fontSize: 16
    },
    /* Members table end*/

    accessoryPanelContent: {
        marginLeft: 20,
        paddingTop: 44,
        marginRight: 20,
    },
    modalForeground: {
        height: 740,
        width: 639,
        position: 'absolute',
        left: 54,
        top: 20,
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
    accessoryPanelContentButton: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row'
    },

    flex: {
        flex: 1
    },

    /* Employee View */
    avatarComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(239, 239, 244)',
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
        marginLeft: 20
    },
    employeeInformationSubtitle: {
        marginTop: 20,
        marginBottom: 5
    },
    /* Employee View end*/

    LimitLoadingText: {
        color: '#fff',
        fontSize: 12,
    },
    LimitRow: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    LimitColumn: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    LimitValue: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    LimitPopoverValue: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    LimitTitle: {
        fontSize: 12,
        color: '#94979B',
    },
    LimitAmount: {
        fontSize: 20,
        fontFamily: 'PTSans-Narrow',
    },
    LimitAmountHighlited: {
        fontSize: 22,
        fontFamily: 'PTSans-Narrow',
    },
    GreyLabelValue: {
        fontSize: 16,
        color: 'rgb(162, 162, 162)',
        fontFamily: 'PTSans-Regular'
    },
    BlackLimitLabelValue: {
        fontSize: 24,
        fontWeight: '400',
        color: 'black',
        fontFamily: 'PTSans-Narrow'
    },
    cellProblemGroupAlign: {
        justifyContent: 'flex-end',
    },
    LeftPageHeaderContainer: {
        width: 640,
        overflow: 'hidden',
    },
})

export default Styles
