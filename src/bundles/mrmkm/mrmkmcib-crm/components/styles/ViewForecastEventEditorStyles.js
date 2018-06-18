/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
import { UfsStyleColorList } from "mrmkmcib-ui";
const PAGE_HEIGHT = 740;
const NAVBAR_HEIGHT = 44;
const REFRESHBAR_HEIGHT = 44;
const CONTENT_HEIGHT_WITH_NAVBAR_AND_REFRESHBAR = PAGE_HEIGHT - NAVBAR_HEIGHT - REFRESHBAR_HEIGHT;
export const ContentPanelBackgroundColorPureObject = {
    backgroundColor: '#fff'
};
/*
 Стили StylesUFSPir28 предназначены для обхода лишних отступов у элементов UFS версии ПИР28:
 Table, TableCell и SumText

 FIXME: при переходе на ПИР29 удалить стили
 и элементы в соответствующем файле tsx, в которых используются только
 стили из StylesUFSPir28


 INFO:
    TableCell ПИР28, отступы по-умолчанию: top = 8, bottom = 9
    SumText ПИР28, отступы по-умолчанию: top = 12, bottom = 21
    Table ПИР28, отступы по-умолчанию: right = 20, left = 20
    Grid.Row.Col, отступы по-умолчанию: внутри Col все отступы = 5
*/
export const StylesUFSPir28 = StyleSheet.create({
    /* INFO:
        TableCell ПИР28, отступы по-умолчанию: top = 8, bottom = 9
        SumText ПИР28, отступы по-умолчанию: top = 12, bottom = 21
    */
    GridRowHideExtraMargins: {
        marginBottom: -5,
        marginTop: -5,
        paddingBottom: -5,
        paddingTop: -5,
    },
    fieldBottomInfoRowView: {
        marginBottom: -5,
        marginLeft: -22,
        marginRight: -20,
        marginTop: 25,
        paddingBottom: -5,
        paddingTop: -5,
    },
    SumTextRemoveExtraTopBottomMarginsForLabeledText: {
        marginBottom: -2,
        marginTop: -18,
    },
    calculatedTopMarginForSumTextInsideTableCell: {
        // Нужен отступ 10 с учётом лишних отступов SumText сверху
        marginTop: -26
    },
    removeTableCellMargins: {
        marginBottom: -9,
        marginTop: -8,
    },
    removeBottomMarginOfTableCell: {
        // убрать нижний отступ 9 в TableCell
        marginBottom: -9
    },
    removeBottomMarginOfSumText: {
        // убрать нижний отступ необходимо для сохранения высоты TableCell = 44
        // т.к. высота ячейки растягивается в зависимости от высоты контента
        marginBottom: -21
    },
    // Внутри ячейки есть paddingTop: 8 и paddingBottom: 9
    // нам нужны отступы 10 и 14 (верх и низ соотвественно)
    tableCellInternalBaseTextWrapper: {
        marginBottom: 5,
        marginTop: 2,
    },
    removeTableRightMargin: {
        marginRight: -22 // Если сделать 20, то между таблицей и рамкой поповера "светятся" 2 пикселя.
    },
    nonViewComponentsAdjustmentsForCheckBox: {
        height: 44,
        marginBottom: -1,
        marginLeft: -20,
        width: 375,
    },
});
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    pageHeigthWithNavbarAndRefreshBar: {
        height: CONTENT_HEIGHT_WITH_NAVBAR_AND_REFRESHBAR,
    },
    pseudoInputLabel: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'flex-start',
        paddingTop: 5,
    },
    captionText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 14,
        color: 'rgb(145, 145 ,145)',
        marginBottom: 6,
    },
    captionErrorText: {
        color: 'rgb(212,51,51)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 14,
        marginBottom: 6,
    },
    createForecastEventLoader: {
        flex: 1,
        flexDirection: 'row',
        height: 634,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createForecastEventPopoverWrapper: {
        height: 740,
        position: 'absolute',
        width: 960,
        left: 54,
        top: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    createForecastEventErrorWrapper: {
        width: 320,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1
    },
    createForecastEventMessageBlock: {
        padding: 20,
        alignItems: 'center',
    },
    createForecastEventMessageBlockHeader: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        marginBottom: 10
    },
    createForecastEventButtonWrapper: {
        flexDirection: 'row',
        borderTopColor: '#eee',
        borderTopWidth: 1
    },
    loaderWrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 634,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createForecastEventButton: {
        flex: 1,
        alignItems: 'center'
    },
    createForecastEventButtonBorder: {
        borderLeftColor: '#eee',
        borderLeftWidth: 1
    },
    createForecastEventErrorPage: {
        flex: 1,
        flexDirection: 'row',
        height: 634,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    selectorWrap: {
        marginLeft: -20,
        position: 'relative',
    },
    selectorView: {
        position: 'absolute',
        left: 20,
        right: 0,
        top: 34,
        height: 44,
    },
    selectorViewText: {
        top: 10,
    },
    selectorIcon: {
        position: 'absolute',
        right: 4,
        top: 30,
    },
    deleteButton: {
        height: 44,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: UfsStyleColorList.grey300,
        backgroundColor: '#fff',
    },
    deleteButtonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deletePopoverWrapper: {
        height: 120,
        width: 500
    },
    deletePopoverTextWrapper: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deletePopoverText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    deletePopoverItemWrapper: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#eee',
        borderTopWidth: 1,
    },
    forecastEventEditorWrapper: {
        backgroundColor: 'white',
        minHeight: 900
    },
    forecastEventEditorFormWrapper: {
        alignItems: 'center',
        flex: 1,
        flexGrow: 0,
        justifyContent: 'space-between',
        minHeight: 695,
    },
    forecastEventEditorFormContainer: {
        marginTop: 20,
        width: 640,
    },
    forecastEventEditorTypeSelectionWrapper: {
        alignItems: 'center',
        flex: 1,
    },
    forecastEventEditorTypeSelectionContainer: {
        marginTop: -20,
        width: 640,
    },
    forecastEventEditorCurrencySelectionWrapper: {
        alignItems: 'center',
        flex: 1,
    },
    forecastEventEditorCurrencySelectionContainer: {
        width: 640,
    },
    fullRepaymentNoticeContainer: {
        backgroundColor: 'rgb(74, 140, 214)',
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 0,
        padding: 20,
    },
    fullRepaymentText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginRight: 20,
    },
    fullRepaymentTextPaddingTop: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginRight: 20,
    },
    fullRepaymentWrapper: {
        marginLeft: -20,
        marginTop: 34,
    },
    forecastEventFieldWrapper: {
        marginLeft: -20,
    },
});
export default Styles;
//# sourceMappingURL=ViewForecastEventEditorStyles.js.map