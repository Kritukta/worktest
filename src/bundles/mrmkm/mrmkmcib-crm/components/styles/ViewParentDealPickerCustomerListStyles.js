/*
 * Created by Gladkov E.N.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const PAGE_HEIGHT = 740;
const NAVBAR_HEIGHT = 44;
const REFRESHBAR_HEIGHT = 44;
const ERROR_TEXT_HEIGHT = 30;
export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    maxHeightFull: {
        height: PAGE_HEIGHT,
    },
    contentPanel: {
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
        height: PAGE_HEIGHT - NAVBAR_HEIGHT - REFRESHBAR_HEIGHT,
    },
    searchContainer: {
        backgroundColor: '#fff',
        height: PAGE_HEIGHT - NAVBAR_HEIGHT - ERROR_TEXT_HEIGHT,
    },
    TopRow: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 18,
    },
    flex: {
        flex: 1,
    },
    InlineWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        maxHeight: 50,
    },
    OrangeLabel: {
        backgroundColor: 'rgb(246,166,35)',
        marginRight: 10,
        padding: 3,
        borderRadius: 3,
        height: 21.5,
    },
    OrangeLabelText: {
        color: '#fff',
        fontSize: 12,
    },
    OrgType: {
        backgroundColor: 'transparent',
        padding: 3,
        paddingLeft: 0,
        fontSize: 12,
        color: '#94979B',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    BottomRow: {},
    Name: {
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 2,
        marginBottom: 2,
    },
    Spacer: {
        height: 20,
    },
    SearchInput: {
        width: 500,
    },
    ContentPanel: {
        backgroundColor: '#ffffff'
    },
    SearchLine: {
        borderWidth: 2,
        width: 100,
    },
    LeftPageHeader: {
        borderWidth: 2,
    },
    Lock: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    LoaderKeyboardWrapper: {
        flex: 1,
        paddingTop: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoaderWrapper: {
        maxHeight: PAGE_HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    WarningWrapper: {
        padding: 20,
    },
    ErrorWrapper: {
        padding: 20,
    },
    ErrorWrapperCenter: {
        justifyContent: 'center',
        padding: 20
    },
    ShowMoreWrapper: {
        flexDirection: 'row',
        margin: 10
    },
    ShowMoreRow: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TableRowIconWrapper: {
        marginRight: -19,
    },
    LeftPageHeaderContainer: {
        width: 640,
        overflow: 'hidden',
    },
    OccasionContainerView: {
        height: 900,
    },
    longListErrorTextWrapper: {
        height: ERROR_TEXT_HEIGHT,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 153, 0, 0.1)'
    },
    longListErrorText: {
        marginLeft: 20,
        color: 'rgb(255, 152, 0)'
    },
    errorContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 780,
    },
    innerWrapper: {
        flex: 1
    },
    navigationBackButtonTextAdjustment: {
        marginLeft: -10,
    },
});
Styles.contentPanel = StyleSheet.flatten(Styles.contentPanel);
export default Styles;
//# sourceMappingURL=ViewParentDealPickerCustomerListStyles.js.map