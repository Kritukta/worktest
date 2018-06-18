/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        // /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        height: 740
    },
    AccesorySpacer: {
        backgroundColor: '#fff',
        height: 44
    },
    formMain: {
        height: 640
    },
    flexRowDisabled: {
        paddingRight: 20,
        paddingLeft: 20,
        height: 44,
        backgroundColor: 'rgb(239,239,244)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: -3,
    },
    HorizontalLine: {
        borderTopWidth: 1,
        marginLeft: 20,
        borderColor: '#dedede',
    },
    Breadcrumbs: {
        marginBottom: 20,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 15,
    },
    HorizontalLinePadding: {
        paddingTop: 25,
        paddingBottom: 25
    },
    flex: {
        flex: 1
    },
    flexAdditional: {
        flex: 1,
        marginBottom: 60,
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
        paddingRight: 20,
        paddingLeft: 15,
    },
    TableStyles: {
        marginRight: -10
    },
    TableRowStyles: {
        backgroundColor: '#f8f8fa'
    },
    textGray: {
        color: '#919191'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    sumRowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    numberInputContainer: {
        flex: 1,
        paddingRight: 20
    },
    paddings: {
        paddingBottom: 9,
        paddingTop: 10
    },
    teamContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -10,
        marginTop: -10
    },
    font16: {
        fontSize: 16
    },
    noteTeam: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    noteFont: {
        fontSize: 16,
        color: '#94979B',
        fontFamily: 'PTSans-Regular',
    },
    dealEditorNavBar: {
        backgroundColor: '#fff'
    },
    button: {
        fontSize: 15,
        color: '#999999',
        marginRight: 15
    },
    buttonLeft: {
        fontSize: 15,
        color: '#999999',
        marginLeft: 20
    },
    containerCap: {
        height: 738
    },
    getDealEditorContentContainer: {
        flex: 1,
        height: 600,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorText: {
        color: 'rgb(40,193,61)',
        fontSize: 16
    },
    dealAndTaskAssociateContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    dealAndTaskAssociateContainerNote: {
        height: 45,
        width: 600,
        paddingLeft: 20,
        margin: 20,
        borderRadius: 4,
        backgroundColor: '#dbe9f8',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    marginTopBottom20: {
        marginTop: 20,
        marginBottom: 20
    },
    addedIconContainerStyles: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: -10,
        marginRight: -10
    },
    buttonIconContainer: {
        height: 44,
        width: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    equivalentSumWidth: { flex: 31 },
    conversionRate: { flex: 33 },
    memberListContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -10,
        marginTop: -10,
    },
    activityCellView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 20,
    },
    currentActivityCellView: {
        backgroundColor: '#919191',
    },
    activityCellIconList: {
        height: 60,
        width: 600,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    activityCellIcon: {
        marginBottom: 6,
    },
    activityCellDataList: {
        flex: 1,
        height: 60,
        flexDirection: 'column',
    },
    activityCellRowView: {
        height: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    activityCellRowText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 18,
        height: 18,
    },
    overdueActivityCellRowText: {
        color: 'rgb(255, 0, 0)',
    },
    activityDescription: {
        fontFamily: 'PTSans-Regular',
        fontSize: 13,
        color: '#919191',
        textAlign: 'left',
        lineHeight: 16,
    },
    currentActivityDescription: {
        color: '#fff',
    },
    activityCellFooterView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityLabels: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    activityDate: {
        marginLeft: 10,
    },
    activityDateText: {
        fontFamily: 'PTSans-Regular',
        color: '#919191',
        lineHeight: 16,
        fontSize: 12,
    },
    currentActivityDateText: {
        color: 'rgb(223, 223, 223)',
    },
    activityCellFooterLabel: {
        marginRight: 4,
        borderRadius: 4,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: 'rgb(230,230,234)',
    },
    activityCellFooterLastLavbel: {
        flex: -1,
        minWidth: 0,
    },
    activityCellFooterLabelText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        color: '#A1A1A1',
        lineHeight: 16,
        backgroundColor: 'rgb(230,230,234)',
    },
    tableMargins: {
        marginRight: -23,
        marginLeft: -23
    },
    tableCellDirection: {
        flex: 1,
        flexDirection: 'row'
    },
    deleteButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    deleteButton: { marginRight: 20,
        marginLeft: 20
    },
    getActivityListItemViewContainer: {
        height: 78,
        width: 574,
        backgroundColor: '#ffffff',
        marginBottom: -10,
        marginTop: -10,
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd'
    },
    getActivityListItemViewUp: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    getActivityListItemViewIconContainer: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    getActivityListItemViewIcon: {
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10
    },
    getActivityListItemViewDescriptionContainer: {
        flex: 554,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10
    },
    getActivityListItemViewSource: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5
    },
    dealActivityListCellContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 60,
    },
    dealActivityListRedMinus: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 30
    },
    tableActivity: {
        marginRight: -20
    },
    TableStylesAdd: {
        marginLeft: -20
    },
    validationErrorContainer: {
        padding: 20
    },
    validationErrorBox: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(219,44,44,1)'
    },
    validationErrorText: {
        margin: 20,
        fontSize: 16,
    },
    additionalFieldsButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    tableCellMargins: {
        marginLeft: -3
    },
    chanceAndDateFildsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    chanceTableContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 22,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)'
    },
    attractionChannelContainer: {
        flex: 295,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 22,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)'
    },
    territorialCoverageContainer: {
        flex: 324,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 22,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)'
    },
    chanceTableCallTerritorialCoverageContainer: {
        width: 318
    },
    chanceTableMargins: {
        marginLeft: -25,
        marginRight: -25
    },
    chanceTableCall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 290,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)',
        height: 78
    },
    chanceLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    chancePopoverContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 15
    },
    chancePopoverSize: {
        height: 300,
        width: 375
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 300,
        marginLeft: -40,
        paddingLeft: 5
    },
    chancePopoverContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#ffffff',
    },
    navigationButtonPaddings: {
        paddingLeft: 20
    },
    backgroundWhite: {
        backgroundColor: '#fff'
    },
    emptyView: {
        width: 44,
        height: 44,
    },
});
Styles.chancePopoverSize = StyleSheet.flatten(Styles.chancePopoverSize);
export default Styles;
//# sourceMappingURL=ViewDealEditorStyles.js.map