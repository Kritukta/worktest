/*
 * Created by Burnaev M.U.
 */
import { StyleSheet } from 'ufs-mobile-platform';
export const Styles = StyleSheet.create({
    main: {
        /*	FIXME: flex must be used insted of height (awaiting for UFS library bug fix)	*/
        // flex: 1,
        height: 600,
    },
    mainFull: {
        flex: 1,
    },
    viewOccasionContainer: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        // flex: 1,
        height: 556,
        flexDirection: 'column',
    },
    viewOccasionEditorContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    viewOccasionStatusView: {
        /*    FIXME: flex must be used insted of height (awaiting for UFS library bug fix)    */
        // flex: 1,
        height: 556,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    occasionTypeInputRow: {
        flexDirection: 'column',
        paddingLeft: 20,
    },
    occasionTypeInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    occasionTypeSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    occasionTypeLabel: {},
    occasionTypeValueText: {
        color: 'gray',
    },
    occasionDatePicker: {
        // paddingLeft: 20,
        flexDirection: 'column',
    },
    datePicker: {
        flex: 1,
    },
    occasionTypeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    occasionTypeCell: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chevron: {
        color: 'gray',
    },
    occasionDataContainer: {
        flex: 1,
    },
    occasionTypeText: {
        paddingLeft: 20,
        lineHeight: 44,
        height: 44,
        fontWeight: 'bold',
    },
    occasionEditor: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    controlButton: {
        flex: 1,
    },
    controlButtonSeparator: {
        height: 44,
        width: 1,
        backgroundColor: '#ddd',
    },
    highlightedText: {
        lineHeight: 30,
        height: 30,
        marginBottom: 10,
        paddingLeft: 20,
        backgroundColor: 'rgba(0,122,255,0.2)',
        color: 'rgb(0,122,255)',
        fontWeight: 'bold',
    },
    regularButtonText: {
        color: 'blue',
    },
    importantButtonText: {
        color: 'red',
    },
    labelContainer: {
        paddingLeft: 20,
    },
    hr: {
        height: 1,
        backgroundColor: '#ddd',
    },
    occasionExpandedModeScreenRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5',
        paddingTop: 15,
        paddingBottom: 14
    },
    labelTextValue: {
        fontSize: 16
    },
    getOccasionExpandedModeScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    fon: { backgroundColor: '#fff' },
    inputOccasionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputOccasionText: {
        fontSize: 16,
        color: '#9e9e9e'
    },
    switchContainer: {
        flexDirection: 'column',
        height: 44
    },
    pickerErrorBackground: {
        height: 31,
        backgroundColor: 'rgb(252,239,238)',
        flexDirection: 'row',
        marginLeft: 20,
    },
    pickerErrorText: {
        fontSize: 12,
        color: 'rgb(202,61,54)',
        marginLeft: 20,
        marginTop: 5,
        flex: 1,
    },
    dataTypeContainer: {
        marginRight: -23,
        marginLeft: -2,
    },
});
export default Styles;
//# sourceMappingURL=ViewOccasionStyles.js.map