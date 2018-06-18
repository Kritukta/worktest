/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { Button, Panel, PanelType, Text, View, WebView, NavigationTextButton, NavigationBackButton, } from 'ufs-mobile-platform';
import Styles from './styles/QlikViewStyles';
import * as util from '../../common/Util';
const getErrorText = (error) => {
    return { comment: error.comment, message: typeof error.message == 'string' ? error.message : '' };
};
const getStyle = (props) => {
    return props.isTrimmedTop ? Styles.trimmedTop : null;
};
const getErrorPanel = (props, error, performRefresh) => {
    let errorString = '';
    let isMashupError = false;
    switch (error.code) {
        case 'QlikSenseUnavailable':
            errorString = 'АС «Визуализация отчётности» недоступна. Пожалуйста, обратитесь к администратору';
            break;
        case 'QlikSenseMashupError': {
            errorString = 'Данные аналитики для пользователя отсутствуют или не выделена лицензия для работы с аналитикой. Обратитесь к администратору';
            isMashupError = true;
            break;
        }
        case 'QlikSenseServerError':
            errorString = 'Произошла ошибка  АС «Визуализация отчётности» Пожалуйста, обратитесь к администратору';
            break;
        case 'QlikSenseTimeout':
            errorString = 'Таймаут соединения с АС «Визуализация отчётности». Пожалуйста, обратитесь к администратору';
            break;
        case 'QlikSenseCertMobileAppError':
            errorString = 'Отсутствует персональный сертификат для аутентификации. Импортируйте свой персональный сертификат в приложение и повторите попытку входа.';
            isMashupError = true;
            break;
        default:
            errorString = 'Произошла ошибка  АС «Визуализация отчётности» Пожалуйста, обратитесь к администратору';
            break;
    }
    return (React.createElement(View, { testID: 'test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd', style: Styles.ErrorWrapper },
        props.isNavigation ?
            React.createElement(View, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db12398baaa', style: Styles.backButton },
                React.createElement(View, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db471198baaa', style: Styles.backButtonInner },
                    React.createElement(NavigationBackButton, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398baaa', title: false, onClick: props.navigateBack }),
                    React.createElement(NavigationTextButton, { testID: 'test-id-d2419496-c21a-11e7-abc4-cec558b6b50a', title: 'Уведомления', onExecute: props.navigateBack }))) :
            null,
        isMashupError ?
            React.createElement(Panel, { testID: 'test-id-2b93dd41-ab20-07d2-f856-1eb0fe47c610', type: PanelType.WARNING_BOX, header: errorString, hasIcon: true, headerMedia: React.createElement(Button, { testID: 'test-id-cd32732c-ab31-7a35-2e6d-139ce38e117b', onExecute: () => {
                        performRefresh();
                    } },
                    React.createElement(Text, { testID: 'test-id-8f492164-ab42-4d94-f583-2c6f0d870b87' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441")) })
            :
                React.createElement(Panel, { testID: 'test-id-2b93dd41-ab20-07d2-f856-1eb0fe47c610', type: PanelType.WARNING_BOX, header: errorString, headerMedia: React.createElement(Button, { testID: 'test-id-cd32732c-ab31-7a35-2e6d-139ce38e117b', onExecute: () => {
                            performRefresh();
                        } },
                        React.createElement(Text, { testID: 'test-id-8f492164-ab42-4d94-f583-2c6f0d870b87' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441")), hasIcon: true })));
};
const onMessage = (props, e) => {
    props.onInternalEvent(util.convertQlikMessage(e));
};
const getUri = (props) => {
    if (props.qlikCookie) {
        return {
            uri: props.uri,
            /*
                FIXME: Проверить первичную авторизацию с помощью СУДИР как только сборка будет доступна на наших стендах
            */
            headers: { "Cookie": props.qlikCookie }
        };
    }
    return {
        uri: props.uri
    };
};
const QlikView = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-shared-component-QlikView' }, props.qlikError ?
    getErrorPanel(props, props.qlikError, props.handleQlikError) :
    React.createElement(WebView, { testID: 'test-id-28c6c115-3002-533f-fd8d-0c4ddb371b66', source: getUri(props), bounces: false, style: [Styles.webView, getStyle(props)], onMessage: (event) => {
            onMessage(props, event);
        } })));
export default QlikView;
//# sourceMappingURL=QlikView.js.map