/*
 * Created by Gladkov E.N.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const PAGE_HEIGHT = 740;
export const Styles = StyleSheet.create({
    contentPanel: {
        backgroundColor: '#fff',
    },
    LoaderWrapper: {
        maxHeight: PAGE_HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
Styles.contentPanel = StyleSheet.flatten(Styles.contentPanel);
export default Styles;
//# sourceMappingURL=ViewParentDealPickerStyles.js.map