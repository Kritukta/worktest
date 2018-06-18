/*
 * Created by Grigorev S.V.
 */

import { StyleSheet } from 'ufs-mobile-platform'

const Styles: any = StyleSheet.create({

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
    InlineWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    InlineRight: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'flex-end'
    }

})

export default Styles