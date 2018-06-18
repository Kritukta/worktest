import { ViewStyle,  StyleSheet} from 'ufs-mobile-platform';

const Styles : any = StyleSheet.create({
    widgetContainer: {
        flex: 1,
        backgroundColor: '#FFFFFFFF'
    },
    widgetContainerBlocked: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 18
    },
    widget: {
        flexGrow: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableContent: {
        paddingLeft: 0
    }
});

export default Styles