/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const UFS_TABLE_MARGIN_LEFT_FIXTURE = -3;
const UFS_LABEL_MARGIN_TOP_FIXTURE = -10;
const UFS_HR_FOLLOWING_LABEL_TOP_MARGIN_FIXTURE = -40;
const UFS_HR_FOLLOWING_LABEL_BOTTOM_MARGIN_FIXTURE = -25;
const UFS_HR_FOLLOWING_SUM_TEXT_TOP_MARGIN_FIXTURE = -50;
const UFS_HR_FOLLOWING_SUM_TEXT_BOTTOM_MARGIN_FIXTURE = -25;
const UFS_HR_MARGIN_TOP_FIXTURE = -30;
const UFS_HR_MARGIN_BOTTOM_FIXTURE = -20;
const UFS_SUM_TEXT_TOP_MARGIN_FIXTURE = -55;
const UFS_TABLE_ROW_MARGIN_LEFT_FIXTURE = -20;
const UFS_TABLE_MARGIN_RIGHT_FIXTURE = -22;
const UFS_TABLE_CELL_MARGIN_TOP_FIXTURE = -8;
const UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE = -10;
const UFS_HOR_LINE_MARGIN_TOP_FIXTURE = -20;
const UFS_HOR_LINE_MARGIN_BOTTOM_FIXTURE = -15;
const DEFAULT_PAGE_HEIGHT = 740;
const NAVBAR_HEIGHT = 44;
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column'
    },
    cardIndexPaymentAccountView: {
        marginBottom: 20,
    },
    cardIndexSummaViewCell: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
    },
    cardIndexPaymentRestViewCell: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        marginRight: -1,
    },
    noRestrictionView: {
        marginLeft: 20,
    },
    noRestrictionText: {
        fontSize: 16,
        color: "#333",
        fontFamily: 'PTSans-Regular',
    },
    cardIndexCell: {
        flex: 1,
        flexDirection: 'row',
    },
    borderCardIndexLine: {
        marginTop: UFS_HOR_LINE_MARGIN_TOP_FIXTURE,
        marginBottom: UFS_HOR_LINE_MARGIN_BOTTOM_FIXTURE,
    },
    cardIndexViewCell: {
        flex: 1,
    },
    cardIndexTableBody: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    packageDateEndText: {
        fontSize: 16,
    },
    packageDateStartText: {
        fontSize: 16,
    },
    privilegeRowText: {
        fontSize: 16,
    },
    productCardIndexRow: {
        fontSize: 16,
    },
    packageNameText: {
        fontSize: 16,
    },
    tariffDateEndText: {
        fontSize: 16,
    },
    tariffDateStartText: {
        fontSize: 16,
    },
    tariffNameText: {
        fontSize: 16,
    },
    redColorText: {
        color: "#DB2C2C"
    },
    cardIndexNameTextRow: {
        fontSize: 16,
        marginTop: 5,
    },
    cardIndexCurrencyTextRow: {
        fontSize: 24,
        fontFamily: 'PTSans-Regular',
    },
    cardIndexGroupRow: { flex: 1, flexDirection: 'column', justifyContent: 'flex-end' },
    currencyCardIndexRow: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
    boldSubCaption: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    heightWindow: {
        height: DEFAULT_PAGE_HEIGHT,
        backgroundColor: 'white'
    },
    flexIconChevron: {
        alignSelf: 'flex-end',
    },
    borderBox: {
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 10,
    },
    generalInfoTextValue: {
        fontFamily: 'PTSans-Regular',
        flex: 8,
        fontSize: 16,
    },
    sumTextPlaceholder: {
        fontFamily: 'PTSans-Narrow',
        fontSize: 24,
    },
    generalInfoTextKey: {
        flex: 1,
        fontSize: 11,
        color: '#94979B',
    },
    generalInfoTextView: {
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    generalInfoContainer: {
        marginLeft: 20,
        backgroundColor: 'white',
    },
    labelHrContainer: {
        marginTop: UFS_HR_FOLLOWING_LABEL_TOP_MARGIN_FIXTURE + 30,
        marginBottom: UFS_HR_FOLLOWING_LABEL_BOTTOM_MARGIN_FIXTURE + 20
    },
    sumTextHrContainer: {
        marginTop: UFS_HR_FOLLOWING_SUM_TEXT_TOP_MARGIN_FIXTURE + 30,
        marginBottom: UFS_HR_FOLLOWING_SUM_TEXT_BOTTOM_MARGIN_FIXTURE + 20
    },
    vspInfoContainer: {
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: 'white',
    },
    filterDescription: {
        backgroundColor: 'rgb(74,140,214)',
        borderRadius: 5,
        margin: 20,
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 18,
    },
    cardIndexHint: {
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    filterDescriptionText: {
        color: 'white',
        fontSize: 16,
    },
    filterBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
    },
    operationPeriodFilterView: {
        width: 400,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    filterControls: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
    },
    operationDateText: {
        fontSize: 16,
    },
    operationTimeText: {
        color: '#999',
        fontSize: 16,
    },
    operationNoSumText: {
        fontSize: 16,
    },
    operationTargetText: {
        fontSize: 16,
    },
    operationPurposeText: {
        fontSize: 16,
    },
    InlineWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chevronView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    chevronViewCell: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    operationListView: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        // flex: 1,
        height: DEFAULT_PAGE_HEIGHT - NAVBAR_HEIGHT,
        flexDirection: 'column',
    },
    operationListTableView: {
        flex: 1,
        flexDirection: 'column',
    },
    operationListTable: {
        flex: 1,
        height: 550,
    },
    operationListFilterView: {
        height: 400,
    },
    sumTextRight: {},
    sumTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    sumText: {
        marginTop: -5,
        fontFamily: 'PTSans-Narrow',
        fontSize: 24,
    },
    datePickerContainer: {
        minHeight: 60,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    datePicker: {
        flex: 1,
    },
    datePickerHR: {
        paddingLeft: 20,
    },
    restrictionSumText: {
        fontFamily: 'PTSans-Regular',
        color: '#999',
        fontSize: 16,
    },
    paymentAccountDetailsTableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    paymentAccountDetailsTableRowFetching: {
        marginLeft: UFS_TABLE_ROW_MARGIN_LEFT_FIXTURE,
        paddingLeft: -UFS_TABLE_ROW_MARGIN_LEFT_FIXTURE,
        backgroundColor: 'rgb(204,204,204)',
    },
    filterValueView: {
        position: 'relative'
    },
    filterCountView: {
        backgroundColor: 'orange',
        position: 'absolute',
        top: 7,
        right: 7,
        width: 14,
        height: 14,
        borderRadius: 7,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterCountText: {
        color: '#fff',
        fontSize: 11,
        lineHeight: 14,
        fontWeight: 'bold',
    },
    operationListFilterLabel: {
        paddingLeft: 10,
        marginRight: 10,
        backgroundColor: 'rgba(239,239,244,1)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    operationListFilterLabelText: {
        color: '#919191',
        marginRight: 10,
    },
    restrictionListContainer: {
        paddingTop: 20,
    },
    tariffListContainer: {
        paddingTop: 20,
    },
    cardCardIndexListContainer: {
        paddingTop: 20,
        flex: 1,
    },
    gridCell: {
        paddingTop: 20,
    },
    hr: {
        height: 1,
        marginLeft: 20,
        backgroundColor: '#ddd',
    },
    hrContainer: {
        paddingLeft: 20,
        marginTop: UFS_HR_MARGIN_TOP_FIXTURE + 30,
        marginBottom: UFS_HR_MARGIN_BOTTOM_FIXTURE,
    },
    tariffListTitleView: {
        paddingLeft: 20,
        marginTop: 20,
    },
    tariffListView: {
        marginLeft: UFS_TABLE_MARGIN_LEFT_FIXTURE
    },
    detailListItemCell: {
        marginTop: UFS_TABLE_CELL_MARGIN_TOP_FIXTURE,
        marginBottom: UFS_TABLE_CELL_MARGIN_BOTTOM_FIXTURE,
        overflow: 'visible',
    },
    paymentAccountProductTitleView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingBottom: 14,
    },
    paymentAccountProductTitle: {
        fontSize: 16,
        lineHeight: 20,
    },
    paymentAccountInfoView: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        // flex: 1,
        height: DEFAULT_PAGE_HEIGHT - NAVBAR_HEIGHT,
        paddingTop: UFS_LABEL_MARGIN_TOP_FIXTURE + 20,
    },
    mainTableContainer: {
        flex: 1,
        marginTop: 25,
        marginRight: UFS_TABLE_MARGIN_RIGHT_FIXTURE,
        marginLeft: UFS_TABLE_MARGIN_LEFT_FIXTURE,
        flexDirection: 'column',
    },
    mainTable: {
        flex: 1,
    },
    paymentAccountDetailsLabel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    paymentAccountDetailsLabelText: {
        textAlign: 'right',
        fontFamily: 'PTSans-Regular',
        color: '#999',
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 20,
    },
    productDetailListItemFetchError: {
        color: 'orange',
        fontSize: 12,
        lineHeight: 16,
        height: 16,
        marginTop: 5,
    },
    productDetailListItemFetchingText: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 44,
        height: 44,
        marginRight: 20,
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    planBalanceView: {
        flex: 1,
        flexDirection: 'row'
    },
    planBalanceHintView: {
        marginLeft: 5,
        marginTop: -5,
    },
    productTypeListCacheDate: {
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
    },
    tableCardIndexList: { height: 545 },
    paymentAccountCardIndexListContent: { flex: 1 },
    paymentAccountCardIndexListWrapper: { flex: 1 },
    paymentAccountOperationListContent: { flex: 1 },
    paymentAccountOperationListWrapper: { flex: 1 },
});
export default Styles;
//# sourceMappingURL=ViewProductPaymentAccountStyles.js.map