/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const DEFAULT_MARGIN = -20;
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 0,
        padding: 0,
        flexDirection: 'column',
    },
    filterValueView: {
        position: 'relative'
    },
    componentDealsItem: {},
    FilterContainer: {
        marginLeft: 12,
    },
    RowLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    CellContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 1,
        marginTop: 2,
    },
    CellContainerLast: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 1,
        marginTop: 2,
        marginRight: -10,
    },
    BottomTableRow: {
        height: 110
    },
    TableContainer: {
        flex: 1,
        margin: 0,
        padding: 0,
        flexDirection: 'column'
    },
    TableAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    SearchTableHeight: {
        height: 620,
        flexDirection: 'column',
        flex: 1,
        marginRight: DEFAULT_MARGIN,
    },
    TableWrapper: {
        flexDirection: 'column',
        flex: 1,
        marginRight: DEFAULT_MARGIN,
    },
    TableCollapsedFix: {
        paddingBottom: 1,
        flex: 1,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
    CellTopContainer: {
        flexDirection: 'column',
        marginBottom: 4,
        marginRight: 10,
    },
    CellTop: {
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
    },
    SelectorValText: {
        fontSize: 16,
        color: '#94979B',
    },
    dateUpdateInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cacheInfoBar: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
    },
    CellOrangeLabelContainer: {
        backgroundColor: 'rgb(246,166,35)',
        paddingRight: 5,
        paddingLeft: 3,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 3,
    },
    CellOrangeLabelText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'PTSans-Bold',
    },
    CellBottomContainer: {
        marginBottom: 4,
        marginRight: 10,
    },
    LockContainer: {
        paddingTop: 2,
        paddingRight: 3
    },
    CellBottom: {
        fontSize: 12,
        fontFamily: 'PTSans-Regular',
        color: '#94979B',
    },
    formSeparator: {
        height: 0.5,
        //backgroundColor: 'rgb(239,239,244)',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        marginLeft: 20,
        marginTop: -0.5,
        borderColor: 'rgb(204,204,204)',
    },
    wideField: {
        height: 90,
        marginLeft: 20,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SelectorRowContainer: {
        marginLeft: 20,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SelectorRowLeft: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    SelectorRowRight: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
    formFieldValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    formField: {
        height: 44,
        marginLeft: 20,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(204,204,204)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    datePickerLabelComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    datePickerLinkComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    nonViewComponentsAdjustments: {
        flex: 1,
        marginLeft: DEFAULT_MARGIN,
        width: 375
    },
    TopRow: {
        flexDirection: 'row'
    },
    DisabledLabel: {
        marginRight: 5,
        padding: 3,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgb(204,204,204)',
    },
    DisabledLabelText: {
        fontSize: 12,
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
    BottomRow: {},
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 5,
    },
    Spacer: {
        height: 20
    },
    SearchInput: {
        width: 500,
    },
    messageDealContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        backgroundColor: 'rgb(219, 233, 249)'
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    WarningWrapper: {
        padding: 20
    },
    ErrorWrapper: {
        flex: 1,
        padding: 20
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    ErrorWrapperCenter: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    ShowMoreRow: {
        padding: 20,
        alignItems: 'center'
    },
    TabSelector: {
        width: 250,
        marginBottom: 10,
        alignSelf: 'center'
    },
    TabSelectorWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 10,
        flex: 3
    },
    CreateDealContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    CreateDealLinkContainer: {
        marginLeft: 12,
        marginTop: -10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CreateDealSearchContainer: {
        marginRight: -10,
        marginTop: -10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    DateInputWrapper: {
        flex: 1,
        width: 300
    },
    DateFilterButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    DateFilterResetButton: {
        marginRight: 20
    },
    animatedRow: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 56,
        left: 0,
        width: 640,
        height: 82,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    animatedRowText: {
        color: 'rgb(40,193,61)',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        paddingLeft: 30,
    }
});
export default Styles;
//# sourceMappingURL=ViewDealListStyles.js.map