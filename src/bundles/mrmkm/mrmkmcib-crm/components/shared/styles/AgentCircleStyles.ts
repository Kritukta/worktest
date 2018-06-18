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
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AgentCircle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 205, 209)'
    },
    AgentCircleLabel: {
        fontSize: 32,
        fontFamily: 'PTSans-Narrow',
        textAlign: 'center',
        color: 'white',
    },
    CrownImage: {
        borderRadius: 12,
        height: 24,
        width: 24,
    },
    CrownView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 20,
        right: -2,
        position: 'absolute',
        top: -3,
        width: 20,
        zIndex: 1,
    },
})

export default Styles
