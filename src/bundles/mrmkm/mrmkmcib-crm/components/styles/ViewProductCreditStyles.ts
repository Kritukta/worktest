/*
 * Created by Burnaev M.U.
 */

import {StyleSheet} from 'ufs-mobile-platform';
import * as Utils from '../../common/Util'

const PAGE_HEIGHT = 740;
const NAVBAR_HEIGHT = 44;
const REFRESHBAR_HEIGHT = 44;

const CONTENT_HEIGHT_WITH_NAVBAR_AND_REFRESHBAR = PAGE_HEIGHT - NAVBAR_HEIGHT - REFRESHBAR_HEIGHT;

export const ContentPanelBackgroundColorPureObject = {
    backgroundColor: '#fff'
}

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
export const StylesUFSPir28: any = StyleSheet.create({
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
    tableHeadHeight: {
        height: 26
    },
});

export const Styles: any = StyleSheet.create({
    main: {
        flex: 1,
    },
    noDataView: {
        marginTop: 50,
    },
    noDataText: {
        color: 'rgb(204,204,204)',
    },
    productCovenantTableCellView: {
        flexDirection: 'row-reverse',
    },
    pageHeigthWithNavbarAndRefreshBar: {
        height: CONTENT_HEIGHT_WITH_NAVBAR_AND_REFRESHBAR,
    },
    creditProductPageMainViewPaddings: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    creditProductPageWrapper: {
        paddingTop: 10,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: 'rgb(204,204,204)',
    },
    caption: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    TextTitle: {
        fontSize: 17,
    },
    LinkContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    TextBlueLink: {
        fontSize: 14,
        color: 'rgb(0, 122, 255)'
    },
    AgentEditRowRow: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    FullRepaymentEditContainer: {
        backgroundColor: 'rgb(74, 140, 214)',
        borderRadius: 5,
        flex: 1,
        marginBottom: 10,
        marginRight: 20,
        marginTop: 10,
        padding: 20,
    },
    FullRepaymentText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginRight: 20,
    },
    FullRepaymentTextPaddingTop: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginRight: 20,
        paddingTop: 15,
    },
    operationListFilterLabelSet: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    operationListFilterLabel: {
        paddingLeft: 10,
        paddingBottom: 0,
        paddingTop: 0,
        height: 30,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(239,239,244,1)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    operationListFilterLabelText: {
        color: '#919191'
    },
    searchNotFoundTextWrapper:{
        height:260,
        flex:1,
        backgroundColor:'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40
    },
    searchNotFoundText:{
        fontSize: 20,
        fontWeight: '600',
        color:'rgb(204,204,204)'
    },
    CreditRowContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CreditRowLeftPart: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    CreditRowRightPart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    TouchableRowCount: {
        alignSelf: 'center',
        marginRight: 10
    },
    CreditProductTabSelector: {
        width: 460
    },
    hideRightMargin20AndScrolling: {
        marginRight: -22
    },
    chevronTableCell: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    tableHeaderHeight42: {
        height: 42
    },
    forecastEventSumAdjustment: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -10,
        marginRight: -8,
        marginBottom: -9,
        paddingBottom: -9,
        height: 42,
        overflow: 'hidden',
    },
    textLineHeightWrapper: {
        height: 26,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginTop: 2,
        marginBottom: 14
    },
    currencyFont: {
        lineHeight: 26,
        backgroundColor: 'yellow',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: 'PTSans-Narrow',
        marginBottom: -2,
        marginTop: 2
    },
    forecatsEventTypeText: {
        lineHeight: 20,
        alignItems: 'center',
        fontSize: 16,
        fontFamily: 'PTSans-Regular',
        marginRight: 20,
    },
    tableCellInternalAccentTextWrapper: {
        flex: 1,
        marginBottom: 0,
        marginTop: 1,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // https://app.zeplin.io/project/57e117bfd6d353a31a53d4b4/screen/597203c977e132643542aac4
    // Обычный текст в секции «baseText»
    baseText: {
        color: 'black',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        lineHeight: 20,
    },
    // https://app.zeplin.io/project/57e117bfd6d353a31a53d4b4/screen/597203c977e132643542aac4
    // Акцентный текст внутри секции «accentText»
    accentText: {
        color: 'black',
        fontFamily: 'PTSans-Narrow',
        fontSize: 24,
        lineHeight: 26,
    },
    // https://app.zeplin.io/project/57e117bfd6d353a31a53d4b4/screen/597203c977e132643542aac4
    // Подпись «captionText»
    captionText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 14,
        color: 'rgb(145, 145 ,145)',
        marginBottom: 6,
    },
    sumCaptionText: {
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 14,
        color: 'rgb(145, 145 ,145)',
    },
    additionalSpaceBetweenColumns: {
        marginRight: 20,
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
    fieldBottomInfoRowView: {
        marginTop: 30
    },
    CreditLinkRow: {
        borderTopWidth: 1,
        borderColor: '#dedede',
        flex: 1,
        flexDirection: 'row',
        marginTop: -8,
        marginBottom: -9,
    },
    renderBottomInfoRowMainTextViewWidth: {
        width: 280,
    },
    CreditLinkRowDelimiter: {
        width: 40
    },
    CreditLinkRowInfo: {
        width: 600,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    CreditLinkRowInfoText: {
        color: 'rgb(153, 153, 153)'
    },
    PaymentScheduleLinkRowInfoText: {
        color: 'rgb(221, 72, 68)'
    },
    CommonChevronWidth: {
        width: 44
    },
    ChevronBottomVerticalAlign: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    ChevronTopVerticalAlign: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    GreyLabel: {
        fontSize: 12,
        color: '#94979B',
    },
    EditRowColumn: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20,
    },
    EditRowLeftPart: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    EditRowRightPart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    EditTitleRowTitleContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        flex: 1
    },
    PaymentScheduleTextAdjustment: {
        paddingLeft: 20
    },
    EditRowRow: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    editPopoverTypeRow: {
        flexDirection: 'row'
    },
    fieldClientNameAndProductNameBottomAndTopMargins: {
        marginBottom: 20,
        marginTop: 10,
    },
    fetchForecatEventsErrorText: {
        color: 'rgb(251, 168, 0)',
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
        lineHeight: 20,
    },
    fetchForecatEventsLoadingText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 18,
    },
    fetchForecatEventsBackgroundColor: {
        backgroundColor: 'rgb(204, 204, 204)'
    },
    renderBottomLoader: {
        flexDirection: 'row-reverse',
        paddingLeft: 20,
        paddingRight: 20,
    },
    renderBottomLoaderTextWrapper: {
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingRight: 20,
        width: 100,
    },
    baseTextInTableCellAdjustments: {
        marginBottom: 14,
        marginTop: 10
    },
    pseudoInputFieldView: {
        flexDirection: 'column',
        flex: 1,
    },
    pseudoInputWithChevron: {
        flexDirection: 'row-reverse',
        flex: 1,
    },
    // три стиля "pseudo..." ниже сделано согласно
    // https://app.zeplin.io/project/57e117bfd6d353a31a53d4b4/screen/59a00be6012e02d788021ab2
    // https://app.zeplin.io/project/57e117bfd6d353a31a53d4b4/screen/596375829771bc00fa79123b
    pseudoInputDataWrapper: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
    },
    leftMarginForEmail: {
        // [AO] Почему у TextInput слева такой отступ, я не знаю
        marginLeft: -20
    },
    pseudoInputLabel: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'flex-start',
        paddingTop: 5,
    },
    pseudoInputValue: {
        flexDirection: 'row',
        height: 44,
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    nonViewComponentsAdjustments: {
        marginLeft: -20,
        width: 375
    },
    fieldErrorView: {
        backgroundColor: 'rgb(255, 238, 238)',
        paddingBottom: 10,
        paddingLeft: 1,
        paddingTop: 5,
    },
    fieldErrorText: {
        color: 'rgb(212,51,51)',
        fontFamily: 'PTSans-Regular',
        fontSize: 13,
    },
    tableCellInnerRowView: {
        flex: 1,
        flexDirection: 'row',
    },
    createForecastEventLoader: {
        flex: 1,
        flexDirection: 'row',
        height: 634,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createForecastEventPopoverWrapper: {
        height:740,
        position:'absolute',
        width:960,
        left:54,
        top:20,
        backgroundColor:'rgba(0, 0, 0, 0)',
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
    popoverIndent: {
        marginLeft: 10,
        marginTop: 10
    },
    rightPageHeaderPaddings: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    rowForecastEventFullRepaymentNoticeTableRow: {
        height: 160,
    },

    DirectionRow: {
        flexDirection: 'row'
    },
    ButtonInfoWrapper: {
        marginTop: 15
    },
    Rule: {
        height:1,
        borderTopWidth: 1,
        borderColor: 'rgb(236,236,236)',
        marginLeft: -20,
        marginTop: 30,
    },
    WrapperHeader: {
        flexDirection: 'row'
    },
    ProductName: {
        flex:3,
    },
    ContractNumber: {
        flex:6,
    },
    HeaderWrap: {
        height: 26,
        backgroundColor: '#f7f7f7',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    TableHeader: {
        fontSize: 16,
        fontFamily: "PTSans-Regular",
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        flex: 4
    },
    TablePrognosticProducts: {
        marginLeft: -20,
    },
    ButtonPlusWrapper: {
        marginTop: 10,
        flex: 6,
        flexDirection: 'row-reverse',
        paddingRight: 30,
        alignItems: 'center'
    },
    Grid: {
        // marginLeft: -20
    },
    PrognosticDealsTableHeader: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 26,
        backgroundColor: '#f7f7f7',
        marginLeft: -20,
        paddingBottom: 6,
    },
    HideDefaultHeader: {
        height: 0
    },
    PrognosticTableCell: {
        flex:1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    PrognosticTableHeaderText: {
        color: '#ccc',
        fontSize: 12,
        fontFamily: "PTSans-Regular",
    },
    PrognosticCellText: {
        fontSize: 16,
        fontFamily: "PTSans-Regular",
        marginTop: 10,
    },
    PrognosticDateCell: {
        flex: 4,
        marginLeft: 20,
    },
    PrognosticTypeCell: {
        flex: 4,
        paddingLeft: 15,
    },
    PrognosticSumCell: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: -15,
    },
    PrognosticShevronCell: {
        flex: 1,
        width: 44,
        marginLeft: 10,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    leftMarginForTextInput: {
        // убираем отступ у TextInput
        marginLeft: -19,
    },
    fieldErrorLabel: {
        color: 'rgb(212,51,51)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
    },
    textWithErrorView: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    covenantColView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottomColor: 'rgb(204,204,204)',
        borderBottomWidth: 1,
    },
    covenantFilterButtonView: {
        marginBottom: -10,
    },

    applyButtonFilterView: {
        marginTop: 5,
        marginRight: 10
    },
    covenantRefreshButton: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    covenantTableCellText: {
        flex: 1,
        paddingLeft: 20
    },
    covenantRestrictionView: {
        width: 350,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    covenantFetchingView:  {
        flexDirection: 'row',
        height: 44,
        backgroundColor: 'rgb(204, 204, 204)',
        paddingLeft: 20
    },
    covenantFetchingErrorView: {
        flexDirection: 'row-reverse'
    },
    productCreditWrapper: {
        backgroundColor: 'white',
        minHeight: 900
    },
    activeFiltersWrapper: {
        flexDirection: 'row',
        height: 40,
    },
    forecastFilterContentWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    forecastFilterDisplayPageRowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        borderBottomColor: 'rgb(204, 204, 204)',
        borderBottomWidth: 1,
    },
    forecastFilterDisplayPageRowHeaderText: {
        fontSize: 15,
        fontWeight: '400',
    },
    forecastFilterDisplayPageRowValueWrapper: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    forecastFilterDisplayPageRowValue: {
        flex: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    forecastFilterDisplayPageRowValueText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgb(165, 165, 165)'
    },
    forecastFilterDisplayPageButton: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    forecastFilterDisplayPagePeriodHeaderWrapper: {
        flex: 1
    },
    forecastFilterDisplayPageTypeHeaderWrapper: {
        flex: 2
    },
    forecastEventFilter: {
        backgroundColor: '#fff'
    },
    forecastEventsClickableRowInSuccessWrapper: {
        width: 700,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    forecastEventsClickableRowInSuccessText: {
        flex: 1,
        paddingLeft: 20
    },
    bottomError: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    paymentScheduleClickableRowWrapper: {
        flexDirection: 'row'
    },
    prognosticEventsClickableRow: {
        flexDirection: 'row-reverse'
    },
    paymentScheduleClickableButton: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    contentCenter: {
        alignItems: 'center'
    },
    contentPageCreditProductInfoWrapper:{
        marginTop: 25,
        marginLeft: -20,
        borderTopWidth: 1,
        borderColor: '#dedede'
    },
    creditObjectClickableRowWrapper: {
        backgroundColor: 'rgb(204, 204, 204)',
        flexDirection: 'row',
        height: 44,
        paddingLeft: 20,
    },
    creditObjectClickableRowText: {
        color: 'black',
        flex: 1,
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        marginBottom: 14,
        marginTop: 10,
    },
    creditObjectLoaderTextWrapper: {
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingRight: 20,
        width: 100,
    },
    creditObjectLoadingText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
        lineHeight: 18,
    },
    creditObjectClickableButtonWrapper: {
        flexDirection: 'row-reverse'
    },
	creditObjectClickableButtonWrapperInErrorState: {
		flexDirection: 'row-reverse',
		height: 63
	},
    creditObjectClickableButton: {
        width: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    creditObjectClickableRowInSuccessWrapper: {
        width: 700,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    creditObjectLinkRowInfoText: {
        color: 'rgb(153, 153, 153)'
    },
	creditObjectLinkRowInfoTextRed: {
		color: 'red',
	},
    creditObjectErrorWrapper: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    creditObjectErrorText: {
        color: 'rgb(251, 168, 0)',
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
        lineHeight: 20,
    },
	emptyView: {
		width: 44,
		height: 44,
	},
})

const PaymentScheduleStyles: any = StyleSheet.create({
    paymemtSchedulePageMainViewPaddings: {
        paddingTop: 10,
        paddingLeft: 20,
    },
    // Горизонтальная серая линия
    horizontalLineFullWidth: {
        borderTopColor: '#eee',
        borderTopWidth: 1,
        flexDirection: 'row',
        marginLeft: -20,
    },
    // Блок фильтров (между блоком "Инфо" и таблицей)
    filtersBlock: {
        flexDirection: 'row',
        height: 76,
        justifyContent: 'space-between',
        marginTop: 6,
        paddingRight: 20,
    },
    // Блок с фильтром
    filterBlockWrapper: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'column',
        marginBottom: 1,
        maxWidth: 293,
        width: 293,
    },
    // Внутренний враппер контента TableCell
    filterBlockTableCellContent: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 44,
        maxWidth: 293, // ширина подобрана так, чтобы расстояние между блоками фильтров было 20
        width: 293, // ширина подобрана так, чтобы расстояние между блоками фильтров было 20
    },
    filterBlockTableValue: {
        width: 249
    },
    filterBlockTableIcon: {
        width: 44
    },
    // Нижний отступ верхнего блока информации PaymentScheduleTopInfoBlock
    infoBlockViewWrapper: {
        marginBottom: 14
    },
    buttonWrapperWidth: {
        width: 44
    },
    // Лэйбл в блоках фильтров (отступы)
    filterLabelWrapper: {
        // marginBottom: 15,
        marginTop: 15,
    },
    // Выравнивание текста в фильтре (значение фильтра)
    filterTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    baseText: {
        color: 'black',
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
    },
    datePickerGrayLabelAdjustments: {
        marginTop: 14,
        paddingLeft: 20.
    },
    dataTableViewWrapper: {
        height: 400,
        marginTop: 14,
        maxHeight: 400,
    },
    LoaderWithinTableRow: {
        paddingLeft: 265,
        padding: 8,
    },
    loadMorePaymentsButtonWrapper: {
        paddingLeft: 205,
        padding: 20,
    },
    removeSplitPanelBorders: {
        flex: 1,
        margin: -2,
        overflow: 'hidden',
        padding: 1,
    },
    scrollPageExternalWrapper: {
        flex: 1,
        flexDirection: 'column-reverse',
        marginLeft: -20,
        marginTop: 14,
    },
    scrollPageWrapper: {
        flex: 1,
        margin: -2,
        overflow: 'hidden',
        padding: 1,
    },
    scrollPageContentWrapper: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 20,
    },
    progonosticDealListWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    popoverOperationTypeFilter: {
        height: 192,
    },
    popoverStatusFilter: {
        height: 192,
    },
    paymentScheduleInfo: {
        width: 700,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    operDateTableCell: {
        height: 44,
        paddingTop: 10,
        paddingBottom: 14
    },
    operNameTableCell: {
        paddingBottom: 14,
        paddingTop: 10,
        flexDirection: 'column'
    },
    statusTableCell: {
        paddingBottom: 14,
        paddingTop: 10
    },
    operSumTableCell: {
        paddingTop: 8,
        width: 200,
    },
    operNameTableCellText: {
        marginTop: 8
    },
    infoBlockViewWrapperViewGridRow: {
        flexDirection: 'row'
    },
    infoBlockViewFieldTextWithPaddingsInGridCel: {
        marginTop: 15
    },
    infoBlockViewСreditProductContractNumber: {
        marginLeft: -7 /*Just move content left. Now "Номер договора" and "Тип операции" are aligned vertically*/
    },
    tableHeight: {
        height: 430,
    },
    tableHeadHeight: {
        height: 26,
    },
})

PaymentScheduleStyles.popoverPeriodFilter = {
    height: 430,
}

PaymentScheduleStyles.popoverOperationTypeFilter = {
    height: 192,
}

PaymentScheduleStyles.popoverStatusFilter = {
    height: 192,
}

PaymentScheduleStyles.popoverContentPanel = {
    backgroundColor: '#fff',
}

export { PaymentScheduleStyles }

export default Styles
