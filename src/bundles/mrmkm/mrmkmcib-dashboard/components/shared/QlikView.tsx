/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    Button,
    Panel,
    PanelType,
    Text,
    View,
    WebView,
    NavigationTextButton,
    NavigationBackButton,
} from 'ufs-mobile-platform'

import {Enums} from '../../Enums'

import * as ModelsCustomerDashboard from "../../models/ModelsCustomerDashboard"
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard"
import Error from "../../models/Error"

import Styles from './styles/QlikViewStyles'

import * as util  from '../../common/Util'




const getErrorText = (error: Error) => {
    return {comment: error.comment, message: typeof error.message == 'string' ? error.message : ''};
};

const getStyle = (props: IProps) => {
    return props.isTrimmedTop ? Styles.trimmedTop : null
}

const getErrorPanel = (props: IProps, error: Error, performRefresh: Function) => {
    let errorString: string = ''
    let isMashupError: boolean = false;
    switch (error.code) {
        case 'QlikSenseUnavailable':
            errorString = 'АС «Визуализация отчётности» недоступна. Пожалуйста, обратитесь к администратору'
            break
        case 'QlikSenseMashupError': {
            errorString = 'Данные аналитики для пользователя отсутствуют или не выделена лицензия для работы с аналитикой. Обратитесь к администратору'
            isMashupError = true
            break
        }
        case 'QlikSenseServerError':
            errorString = 'Произошла ошибка  АС «Визуализация отчётности» Пожалуйста, обратитесь к администратору'
            break
        case 'QlikSenseTimeout':
            errorString = 'Таймаут соединения с АС «Визуализация отчётности». Пожалуйста, обратитесь к администратору'
            break
        case 'QlikSenseCertMobileAppError':
            errorString = 'Отсутствует персональный сертификат для аутентификации. Импортируйте свой персональный сертификат в приложение и повторите попытку входа.'
            isMashupError = true
            break
        default:
            errorString = 'Произошла ошибка  АС «Визуализация отчётности» Пожалуйста, обратитесь к администратору'
            break
    }
    return (
        <View testID='test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd' style={Styles.ErrorWrapper}>
            {
                props.isNavigation ?
                    <View
                        testID={'test-id-52d35a1a-9fc7-aa3a-1c39-2db12398baaa'}
                        style={Styles.backButton}>
                        <View
                            testID={'test-id-52d35a1a-9fc7-aa3a-1c39-2db471198baaa'}
                            style={Styles.backButtonInner}>
                            <NavigationBackButton
                                testID={'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398baaa'}
                                title={false}
                                onClick={props.navigateBack}/>
                            <NavigationTextButton
                                testID={'test-id-d2419496-c21a-11e7-abc4-cec558b6b50a'}
                                title={'Уведомления'}
                                onExecute={props.navigateBack}
                            />
                        </View>
                    </View> :
                    null
            }
            {
                isMashupError ?
                    <Panel testID='test-id-2b93dd41-ab20-07d2-f856-1eb0fe47c610' type={PanelType.WARNING_BOX}
                           header={errorString}
                           hasIcon
                           headerMedia={
                            <Button testID='test-id-cd32732c-ab31-7a35-2e6d-139ce38e117b'
                                onExecute={() => {
                                     performRefresh()
                                }}>
                                <Text testID='test-id-8f492164-ab42-4d94-f583-2c6f0d870b87'>Повторить запрос</Text>
                            </Button>
                        }
                    >
                        {/* UFO-24455 */}
                        {/* <View testID='test-id-0c773a81-ab53-061c-a280-51fd35921143' style={Styles.ErrorWrapperContent}>
                            <Text
                                testID='test-id-b61f627d-ab64-02d8-d8c0-d22d2840fd21'>{error ? getErrorText(error).comment : ''}</Text>
                            <Text
                                testID='test-id-3d49653-ab75-9580-19dd-98aad00da143'>{error ? getErrorText(error).message : ''}</Text>
                        </View> */}
                    </Panel>
                :
                    <Panel testID='test-id-2b93dd41-ab20-07d2-f856-1eb0fe47c610' type={PanelType.WARNING_BOX}
                        header={errorString}
                        headerMedia={
                            <Button testID='test-id-cd32732c-ab31-7a35-2e6d-139ce38e117b'
                                onExecute={() => {
                                     performRefresh()
                                }}
                            >
                                <Text testID='test-id-8f492164-ab42-4d94-f583-2c6f0d870b87'>Повторить запрос</Text>
                            </Button>
                        }
                        hasIcon
                    >
                        {/* UFO-24455 */}
                        {/* <View testID='test-id-0c773a81-ab53-061c-a280-51fd35921143' style={Styles.ErrorWrapperContent}>
                            <Text
                            testID='test-id-b61f627d-ab64-02d8-d8c0-d22d2840fd21'>{error ? getErrorText(error).comment : ''}</Text>
                            <Text
                            testID='test-id-3d49653-ab75-9580-19dd-98aad00da143'>{error ? getErrorText(error).message : ''}</Text>
                        </View> */}
                </Panel>
            }
        </View>
    )
}


const onMessage = (props: IProps, e: any): void => {
    props.onInternalEvent( util.convertQlikMessage( e ) )
}

const getUri = (props: IProps): {} => {
        if (props.qlikCookie) {
            return {
                uri: props.uri,
                /*
                    FIXME: Проверить первичную авторизацию с помощью СУДИР как только сборка будет доступна на наших стендах
                */
                headers: {"Cookie": props.qlikCookie}
            }
        }
    return {
        uri: props.uri
    }
}

/*
 * UI stateless functional component "QlikView" used in "CustomerDashboard" screen. QlikView shared component.
 */

export interface IProps {
    uri: string,
    onInternalEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT,
    qlikError: Error | null,
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR | ModelsCustomerDashboard.HANDLE_QLIK_ERROR,
    isTrimmedTop?: boolean,
    qlikCookie: string | null,
    navigateBack: ModelsAppDashboard.NAVIGATE_BACK,
    isNavigation: boolean,
    testID: string
}

const QlikView: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
        <View style={Styles.main} testID={'test-id-shared-component-QlikView'}>
            {
                props.qlikError ?
                    getErrorPanel(props, props.qlikError, props.handleQlikError) :
                    <WebView
                        testID='test-id-28c6c115-3002-533f-fd8d-0c4ddb371b66'
                        source={getUri(props)}
                        bounces={false}
                        style={[Styles.webView, getStyle(props)]}
                        onMessage={(event: any) => {
                            onMessage(props, event)
                        }}
                    />
            }
        </View>
    )

export default QlikView
