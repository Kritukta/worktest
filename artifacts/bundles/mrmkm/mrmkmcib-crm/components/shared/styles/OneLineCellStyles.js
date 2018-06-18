/*
 * Created by Grigorev S.V.
 */
import { StyleSheet } from 'ufs-mobile-platform';
const Styles = StyleSheet.create({
    AgentCircleContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AgentCircleContainerFullScreen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    AgentCircle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 205, 209)'
    },
    AgentCircleLabel: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white'
    },
    flex05: {
        flex: .5,
    },
    AgentInfoRow: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5'
    },
    AgentInfoRowLabel: {
        fontSize: 12,
        color: '#94979B',
        paddingBottom: 5
    },
    InlineTitle: {
        marginTop: 3,
        fontSize: 16,
        marginBottom: 3,
    },
    InlineValue: {
        fontSize: 16,
        color: '#94979B',
    },
    InlineWrapperColumns: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    InlineWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    InlineRight: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'flex-end'
    },
    TableCell: {
        marginBottom: -10,
        marginTop: -10,
        minHeight: 44,
    },
    TableCellIndented: {
        marginBottom: -10,
        marginTop: -10,
        minHeight: 44,
        paddingLeft: 20,
    },
    EmptyView: {
        minHeight: 44,
        width: 44,
    },
    ErrorTextWrapper03: {
        flex: 0.3,
        marginTop: -16,
    },
    ErrorText: {
        color: 'orange',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontFamily: 'PTSans-Regular',
        fontSize: 12,
    },
    BackgroundColorGrey: {
        backgroundColor: '#ccc',
    },
    BackgroundDefault: {},
    TextColorWhite: {
        color: 'white',
    },
    TextColorDefault: {},
});
export default Styles;
//# sourceMappingURL=OneLineCellStyles.js.map