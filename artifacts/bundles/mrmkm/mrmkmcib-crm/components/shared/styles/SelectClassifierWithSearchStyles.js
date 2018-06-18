import { StyleSheet } from 'ufs-mobile-platform';
const Styles = StyleSheet.create({
    contentPanel: {},
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        height: 44,
        overflow: 'hidden'
    },
    validationErrorContainer: {
        padding: 20
    },
    searchNotFoundTextWrapper: {
        backgroundColor: 'white',
        paddingLeft: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    searchNotFoundText: {
        color: 'rgb(204,204,204)'
    },
    validationErrorText: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 12,
    },
    widthContainer: {
        width: 640,
    },
    memberListSearchContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});
/* Workaround for UFS contentPanel Warning: Failed prop type: Invalid prop `style` of type `number` supplied to `UFSContentPanelManager`, expected `object`.  */
Styles.contentPanel = StyleSheet.flatten({
    backgroundColor: '#ffffff'
});
export default Styles;
//# sourceMappingURL=SelectClassifierWithSearchStyles.js.map