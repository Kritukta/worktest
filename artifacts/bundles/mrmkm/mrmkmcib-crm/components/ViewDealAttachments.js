/*
 * Created by Vladykin A. S.
 */
import React from 'react';
import Styles from './styles/ViewDealAttachmentsStyles';
import { Page, Button, CenterPageHeader, ContentPanel, H2, Icon, IconType, LeftPageHeader, NavigationBackButton, NavigationTextButton, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View, TableColumn, TableHead, FileViewer, ButtonType, NavigationIconButtonType, NavigationIconButton, Popover, PopoverType, PopoverPosition } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import * as util from '../common/Util';
import { AlertView, LoaderWithText, RefreshBar, RowWithLabel } from 'mrmkmcib-app';
import { SearchInput } from 'mrmkmcib-ui';
import PopoverTarget from '../modules/PopoverTarget';
/*
 * UI stateless functional component presenter for "DealAttachments" container.
 */
const getIconTypeByFormat = (format) => {
    switch (format) {
        case Enums.DealAttachmentsFileFormat.None: {
            return IconType.SpecialDocsGeneric;
        }
        case Enums.DealAttachmentsFileFormat.Pdf: {
            return IconType.SpecialDocsPdf;
        }
        case Enums.DealAttachmentsFileFormat.Doc: {
            return IconType.SpecialDocsDoc;
        }
        case Enums.DealAttachmentsFileFormat.Excel: {
            return IconType.SpecialDocsXls;
        }
        case Enums.DealAttachmentsFileFormat.Image: {
            return IconType.SpecialDocsImg;
        }
        default: {
            return IconType.SpecialDocsGeneric;
        }
    }
};
const getAttachmentPath = (item) => {
    const pathString = item.path.join(' > ');
    if (pathString.length > 85) {
        const tempArray = item.path.slice(0);
        const lastItem = tempArray.pop();
        return tempArray.join(' > ').substring(0, 85) + ' ... ' + lastItem;
    }
    else {
        return pathString;
    }
};
const getAttachmentName = (item) => {
    return item.name.length > 130 ? item.name.substring(0, 130) + ' ...' : item.name;
};
const onAttachmentClick = (item, props) => {
    return item.format != Enums.DealAttachmentsFileFormat.None ?
        props.performShowAuthWarning(item.id) :
        props.performShowModalFileTypeError(item.otherFormat || 'Неизвестный тип файла');
};
const getRow = (item, props) => {
    return (React.createElement(TableRow, { testID: `test-id-dealRow-0`, key: `dealAttachmentRow-${item.id}`, onClick: () => onAttachmentClick(item, props) },
        React.createElement(TableCell, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c8267adf' },
            React.createElement(View, { testID: `test-id-dealRow-clickable-Icon0`, style: [
                    Styles.TableNoMarginTop,
                    Styles.RowLinkContainer,
                    Styles.FirstRowCell
                ] },
                React.createElement(Button, { testID: 'test-id-08e4caa-0f22edbfaa59ss' },
                    React.createElement(Icon, { testID: 'test-id-3f3e58f5-b2f755b5200b', type: getIconTypeByFormat(item.format) })))),
        React.createElement(TableCell, { testID: 'test-id-91c77eca-162d-1faf-aef6-9880a87ce0a3' },
            React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457788d0cb', style: [Styles.TableNoMarginTop, Styles.CellContainer] },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: [
                            Styles.Text16,
                            item.format != Enums.DealAttachmentsFileFormat.None ?
                                Styles.CellTop :
                                Styles.CellTopDisabled
                        ] }, getAttachmentName(item))),
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df66-91ae-5f457719d0cb', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: [Styles.Text12, Styles.CellBottom] }, Array.isArray(item.path) && item.path.length ?
                        getAttachmentPath(item) :
                        'root')))),
        React.createElement(TableCell, { testID: 'test-id-7fce741d-31ca-09fd-cde7-8cfde477fb5f' },
            React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-90ae-5f457719d0cb', style: [
                    Styles.CellContainer,
                    Styles.CellContainerInfo,
                    Styles.TableNoMarginTop
                ] },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: item.error ? Styles.errorContainer : Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: [
                            Styles.Text16,
                            item.format != Enums.DealAttachmentsFileFormat.None ?
                                Styles.CellTop :
                                Styles.CellTopDisabled,
                            item.error ? Styles.errorText : {}
                        ] },
                        item.isLoaded && 'Загружен',
                        item.isLoading && !item.isLoaded && 'Загрузка...',
                        item.error && 'Ошибка загрузки',
                        !item.isLoading && !item.isLoaded && !item.error && `${item.size} мб`)),
                !item.error && React.createElement(View, { testID: 'test-id-dcbd8500-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: [Styles.Text12, Styles.CellBottom] }, `изменен ${item.changedDate}`)))),
        React.createElement(TableCell, { testID: 'test-id-7fce7-8cfde477fb5f', style: Styles.alignRightCell },
            React.createElement(View, { testID: `test-id-dealRow-clickable-Icon0`, style: [Styles.TableNoMarginTop, Styles.RowLinkContainerLast] },
                item.error && React.createElement(Button, { onExecute: () => props.downloadAttachment(item.id), testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b17', type: ButtonType.TEXT, title: 'Повторить ' },
                    React.createElement(Icon, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b172', type: IconType.MrmRefresh })),
                React.createElement(PopoverTarget, { testID: `test-id-ViewDealAttachments-PopoverInfo-ref${item.id}`, refName: `ViewDealAttachmentsPopoverInfo${item.id}` },
                    React.createElement(Button, { testID: 'test-id-08e4caa-0f22edbfaa59ss', onExecute: () => props.performPopoverDealAttachmentsShow(item) },
                        React.createElement(Icon, { testID: 'test-id-3f3e58f5-b2f755b5200b', type: IconType.MrmInfo })))))));
};
const listItems = (children, props) => {
    return (children.data.map((item) => {
        return (getRow(item, props));
    }));
};
const getAlertModalWindow = (props) => {
    return (React.createElement(AlertView, { testID: 'test-id-alert-view-file-not-supported', ok: props.performHideModalFileTypeError, cancel: null, title: 'Не удалось открыть документ', message: `Приложение не позволяет открыть файл данного типа (${props.modalErrorFileType}).

Пожалуйста, возпользуйтесь доступом со стационарного рабочего места.`, isVisible: props.isVisibleModalFileTypeError, wrapperStyle: Styles.modalErrorWrapper, titleStyle: Styles.modalErrorTitle, messageStyle: Styles.modalErrorMessage }));
};
const getLoader = (text) => (React.createElement(View, { testID: 'test-id-89efd0a3-7aba-8331-8a3a-036537aff5755d', style: Styles.loaderWrapper },
    React.createElement(LoaderWithText, { testID: 'test-id-305bcdca-9a8a-1b8e-6e18-f4afawf21r1', text: text })));
const getRefreshBar = (props) => {
    return (React.createElement(RefreshBar, { testID: 'test-id-f5294a90-f936-79ee-ed98-432d316b9c99', date: new Date(), title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: props.performRefresh }));
};
const getTableHead = () => {
    return (React.createElement(TableHead, { testID: 'test-id-75635324-3667-0601-408a-5d5d93bfb8ab' },
        React.createElement(TableColumn, { testID: 'test-id-25b8b2bf-0d0c-9d0e-c69c-ae70d4986321', key: `col-0`, width: '54' }),
        React.createElement(TableColumn, { testID: 'test-id-95b9a7a1-6bea-f82a-97a9-9d021ec7c742', key: `col-1`, width: '592' },
            React.createElement(Text, { testID: 'test-id-a21fd416-1a88-b0cd-f14f-8141a6189b24', style: Styles.CellContainerInfo }, 'Наименование документа\nРасположение')),
        React.createElement(TableColumn, { testID: 'test-id-2a94a8f0a98338', key: `col-2`, width: '157' },
            React.createElement(Text, { testID: 'test-id-55c5387aac602' }, 'Объем файла\nДата изменения')),
        React.createElement(TableColumn, { testID: 'test-id-b2a2154d-dbca-394f-c89f-7fef98f78e1f', key: `col-3`, width: '157' })));
};
const getSearchContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-2ea92f3e-735e-b07d-1430-781960ef1f51' },
        props.inputDealAttachmentsSearch == '' ?
            React.createElement(View, { testID: 'test-id-2ea92f3e-735e-b07d-1430-781960ef2f42', style: (props.inputDealAttachmentsSearch == null || props.inputDealAttachmentsSearch == '') ?
                    Styles.searchNotFoundTextWrapperCentered :
                    Styles.searchNotFoundTextWrapper },
                React.createElement(Text, { testID: 'test-id-7c659e7a-5d9e-9bdc-d458-79d521cb76fd', style: Styles.searchNotFoundText }, 'Поиск вложений сделки по наименованию и типу документа')) : null,
        (props.inputDealAttachmentsSearch != '' && props.dealAttachmentsSearchList.data.length == 0) ?
            React.createElement(View, { testID: 'test-id-8faaa8e9-4933-bf38-b8d5-7db68de85074', style: Styles.searchNotFoundTextWrapper },
                React.createElement(Text, { testID: 'test-id-ff48eefc-3d70-6761-b5b6-0271a351308d', style: Styles.searchNotFoundText }, 'Результатов не найдено')) :
            null,
        (props.inputDealAttachmentsSearch != '' && props.dealAttachmentsSearchList.data.length) ?
            React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b11', style: Styles.TableAreaContainer },
                React.createElement(View, { testID: 'test-id-f02c825d7be630409d', style: Styles.TableWrapper },
                    React.createElement(Table, { testID: 'test-id-fef887b7-8ca1-b57e-9e51-0ac5b2bbf409', style: Styles.TableCollapsedFix },
                        getTableHead(),
                        React.createElement(TableBody, { testID: 'test-id-3f58460f-5ed0-90e7-ed5d-ef9569bbc4ff' }, listItems(props.dealAttachmentsSearchList, props))))) :
            null));
};
const getMainPage = (props) => {
    return (React.createElement(Page, { testID: 'test-id-f5294a17-f936-79ee-ed90-442d316b9c50', scrollEnabled: false, content: getMainPageContent(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-8bea8159-986d-6497-4d51-2565ff0cb225' }, props.isSearchMode ?
            React.createElement(SearchInput, { value: props.inputDealAttachmentsSearch, placeholder: '', onChange: props.performInputDealAttachmentsSearch, onReturnKeyPressed: () => { }, onCancel: props.performSearchModeDisable, autoFocus: true, drawBottomBorder: true }) :
            React.createElement(View, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7900ca8735', style: Styles.navigateBackButtonStyle },
                React.createElement(NavigationBackButton, { testID: 'test-id-ddy45hhy-gfsgdb-98kddh-6879k-adcd1', title: false, onClick: props.navigateBack }),
                React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398bab12' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4', title: 'Сделка', onExecute: props.navigateBack })))),
        React.createElement(CenterPageHeader, { testID: 'test-id-d4902b53-d496-e793-6fbe-565b27482aad' }, !props.isSearchMode ?
            React.createElement(H2, { testID: 'test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3bb1' }, 'Вложения сделки') :
            null),
        React.createElement(RightPageHeader, { testID: 'test-id-8621039b-8270-bee4-8e77-e40aab62c6b0' }, !props.isSearchMode ?
            React.createElement(NavigationIconButton, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28e33', type: NavigationIconButtonType.SEARCH, onExecute: props.performSearchModeEnable }) :
            null)));
};
const getAttachmentType = (props) => {
    if (props.dealCurrentAttachment.otherFormat) {
        return props.dealCurrentAttachment.otherFormat + ' - ' + props.dealCurrentAttachment.size + 'мб (невозможно открыть на данном устройстве)';
    }
    else {
        return util.getAttachmentFileType(props.dealCurrentAttachment.format) + ' - ' + props.dealCurrentAttachment.size + 'мб';
    }
};
const getAttachmentInfoContent = (props) => {
    return (React.createElement(Table, { testID: 'test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789' },
        React.createElement(TableBody, { testID: 'test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789' },
            props.dealCurrentAttachment.path ?
                React.createElement(RowWithLabel, { testID: 'test-id-9629-b811-dcb8-5a1f-89a378', labelText: 'Расположение документа', mainText: Array.isArray(props.dealCurrentAttachment.path) &&
                        props.dealCurrentAttachment.path.length ?
                        props.dealCurrentAttachment.path.join(' >\n') :
                        'root' })
                : null,
            props.dealCurrentAttachment.name ?
                React.createElement(RowWithLabel, { testID: 'test-id-49629-5a1f-89a378', labelText: 'Тип документа', mainText: props.dealCurrentAttachment.name })
                : null,
            props.dealCurrentAttachment.name ?
                React.createElement(RowWithLabel, { testID: 'test-id-bc76-66c2-ff84-db3a', labelText: 'Наименование', mainText: props.dealCurrentAttachment.name })
                : null,
            props.dealCurrentAttachment.comment ?
                React.createElement(RowWithLabel, { testID: 'test-id-66c2-ff84-db3ae41a31c3', labelText: 'Коментарий', mainText: props.dealCurrentAttachment.comment })
                : null,
            React.createElement(RowWithLabel, { testID: 'test-id-66c2-ff84-db3ae41a31c3', labelText: 'Тип файла и размер', mainText: getAttachmentType(props) }),
            props.dealCurrentAttachment.id ?
                React.createElement(RowWithLabel, { testID: 'test-id-c781-11e7-abc4-cec278b6b50', labelText: 'Изменил', mainText: props.dealCurrentAttachment.id })
                : null,
            props.dealCurrentAttachment.changedDate ?
                React.createElement(RowWithLabel, { testID: 'test-id-b84c-c781-11e7-abc4-cec', labelText: 'Изменен', mainText: 'Изменен ' + props.dealCurrentAttachment.changedDate })
                : null,
            props.dealCurrentAttachment.format && props.dealCurrentAttachment.size ?
                React.createElement(RowWithLabel, { testID: 'test-id-bd3b93-34bf-e94c-5e54-6ffd', labelText: 'Тип файла и размер', mainText: props.dealCurrentAttachment.format + ' - ' + props.dealCurrentAttachment.size })
                : null,
            props.dealCurrentAttachment.id ?
                React.createElement(RowWithLabel, { testID: '7e0c2a-11e7-abc4-cec278-b6b50a', labelText: 'Версия', mainText: props.dealCurrentAttachment.id })
                : null,
            props.dealCurrentAttachment.name ?
                React.createElement(RowWithLabel, { testID: 'test-id-7e0c2a-c781-11e7-abc4-cec278b6b50a', labelText: 'Оригинальное имя файла вложения', mainText: props.dealCurrentAttachment.name })
                : null)));
};
const renderAttachmentInfo = (props) => {
    return (React.createElement(View, { testID: 'test-id-7a5d3abe-4830-4a6a-b4d0-d92035fc109d', style: Styles.flex }, getAttachmentInfoContent(props)));
};
const getAttachmentPopoverContent = (props) => {
    return (React.createElement(SplitPanel, { testID: 'test-id-b67e75c5-4600-091d-a024-616eb3422617', id: 'ViewAttachmentsPopover' },
        React.createElement(ContentPanel, { testID: 'test-id-f0634aca-17b7-01e2-57c2-0902ca8c422e', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-83d7d00b-b92d-709a-23a8-361d1685e87f', scrollEnabled: true, content: renderAttachmentInfo(props) },
                React.createElement(CenterPageHeader, { testID: 'test-id-c8356437-19e6-5a68-ea64-ee12974b0814' },
                    React.createElement(H2, { testID: 'test-id-c8356437-19e6-5a68-ea64-ee12974b0814' }, "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0435"))))));
};
const getMainPageContent = (props) => {
    const error = props.dealAttachmentsError;
    if (props.dealAttachmentsFetching) {
        return getLoader('Загрузка вложений');
    }
    if (error !== null && props.dealAttachments === null) {
        return (showErrorContent(error, props.performRefresh));
    }
    if (props.isSearchMode) {
        return (getSearchContent(props));
    }
    return (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b11', style: Styles.TableAreaContainer },
        React.createElement(View, { testID: 'test-id-f02c825d7be630409d', style: Styles.TableWrapper },
            error !== null ? (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b123', style: Styles.ErrorFetching },
                React.createElement(Text, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b124', style: Styles.ErrorFetchingText },
                    "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
                    '\n',
                    `Причина: ${error.message ? `${error.message} ` : error.comment}`))) : (null),
            React.createElement(Popover, { testID: 'test-id-ViewDealAttachments-PopoverInfo', target: PopoverTarget.getRef(`ViewDealAttachmentsPopoverInfo${props.dealCurrentAttachment.id}`), opened: props.isVisibleDealAttachmentsPopover, onOutsideTap: props.performPopoverDealAttachmentsHide, type: PopoverType.NARROW, position: [PopoverPosition.LEFT], style: { width: 375, height: 490 } }, getAttachmentPopoverContent(props)),
            React.createElement(Table, { testID: 'test-id-fef887b7-8ca1-b57e-9e51-0ac5b2bbf409', style: Styles.TableCollapsedFix },
                getTableHead(),
                React.createElement(TableBody, { testID: 'test-id-3f58460f-5ed0-90e7-ed5d-ef9569bbc4ff' }, listItems(props.dealAttachments, props)))),
        getRefreshBar(props)));
};
const showErrorContent = (error, performRefresh) => {
    return (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b165', style: Styles.ErrorWrapper },
        React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b166', style: Styles.ErrorTextBox },
            error.message || error.comment ? (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b167', style: Styles.ErrorTextBody },
                React.createElement(Text, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b168', style: Styles.ErrorTextTitle }, util.getDealAttachementsErrorType(error)),
                React.createElement(Text, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b169', style: Styles.ErrorTextComment }, `Причина: ${error.message ? `${error.message} ` : error.comment}`))) : (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b1671', style: Styles.ErrorTextBody },
                React.createElement(Text, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b168', style: Styles.ErrorTextTitle }, util.getCRMErrorMessageByCode(error.code)))),
            React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b170', style: Styles.ErrorRefreshBox },
                React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b170', style: Styles.ErrorRefreshBox },
                    React.createElement(Button, { onExecute: () => performRefresh(), testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b17', type: ButtonType.TEXT, title: 'Повторить ' }),
                    React.createElement(Button, { onExecute: () => performRefresh(), testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b17', type: ButtonType.TEXT },
                        React.createElement(Icon, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b172', type: IconType.MrmRefresh })))))));
};
const getViewerPage = (props) => {
    return (React.createElement(Page, { testID: 'test-id-f5294a17-f936-79ee-ed90-442d316b9c50', scrollEnabled: false, content: getViewerPageContent(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-8bea8159-986d-6497-4d51-2565ff0cb225' },
            React.createElement(NavigationTextButton, { testID: 'test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4', title: 'Закрыть', onExecute: props.navigateBackToAttachments })),
        React.createElement(CenterPageHeader, { testID: 'test-id-d4902b53-d496-e793-6fbe-565b27482aad' },
            React.createElement(H2, { testID: 'test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3bb6' }, 'Просмотр документа')),
        React.createElement(RightPageHeader, { testID: 'test-id-8621039b-8270-bee4-8e77-e40aab62c6b0' },
            React.createElement(Button, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28eea', onExecute: () => { console.log('info'); } },
                React.createElement(Icon, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28e33', type: IconType.MrmInfo })),
            React.createElement(Button, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28eea', onExecute: () => { console.log('share'); } },
                React.createElement(Icon, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28e33', type: IconType.MrmShare })))));
};
const getUnsupportedTypeBar = (props) => {
    return (React.createElement(View, { testID: 'unsupportedType-bar-1', style: Styles.unsupportedTypeBar },
        React.createElement(View, { testID: 'unsupportedType-bar-2', style: Styles.unsupportedTypeBarWrapper },
            React.createElement(Text, { testID: 'unsupportedType-bar-3', style: [Styles.Text16, Styles.unsupportedTypeBarText] }, 'Документ данного типа может отображаться с искажениями')),
        React.createElement(View, { testID: 'unsupportedType-bar-4', style: Styles.unsupportedTypeButtonTextView },
            React.createElement(NavigationTextButton, { testID: 'unsupportedType-bar-5', title: 'Закрыть', onExecute: props.performUnsupportedTypeBarHide }))));
};
const getViewerPageContent = (props) => {
    const isMicrosoftFormat = util.isMicrosoftFormat(props.dealCurrentAttachment.format);
    if (props.currentDealAttachmentError !== null) {
        return (showErrorContent(props.currentDealAttachmentError, () => {
            props.performAttachmentReload(props.currentDownloadedFileId);
        }));
    }
    if (props.dealAttachmentFetching) {
        return getLoader('Загрузка документа...');
    }
    return (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b09' },
        React.createElement(FileViewer, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b07', fileId: props.currentFileId, style: { width: 960, height: 696 }, zoomEnabled: true }),
        // show warning bar for Microsoft Documents
        isMicrosoftFormat && props.isVisibleUnsupportedTypeBar && getUnsupportedTypeBar(props)));
};
const getAuthWarningPage = (props) => {
    return (React.createElement(Page, { testID: 'test-id-7299e23d-0d5c-4ad7-8b0f-b266315e866a', scrollEnabled: false, content: getAuthWarningPageContent(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-15890a45-f5f6-4163-b22b-69b69e126bd3' },
            React.createElement(NavigationTextButton, { testID: 'test-id-8c54338d-d742-43f9-8710-361b9ae57787', title: 'Закрыть', onExecute: props.navigateBackToAttachments })),
        React.createElement(CenterPageHeader, { testID: 'test-id-0b20c4f0-e060-4950-a731-7a7f522ea94e' },
            React.createElement(H2, { testID: 'test-id-ef35a44d-8741-4ace-b35a-e7585b6d929a' }, 'Предупреждение'))));
};
const getAuthWarningPageContent = (props) => {
    return (React.createElement(View, { testID: 'test-id-847802ac-a51e-41fb-b21c-04844df012a8', style: Styles.AuthWarningContainer },
        React.createElement(View, { testID: 'test-id-11e29bd3-3c7a-40df-add3-15a427d0c9d8', style: Styles.AuthWarning },
            React.createElement(View, { testID: 'test-id-11e29bd3-3c7a-40df-add3-15a427d0c9d8', style: Styles.AuthWarningTextContainer },
                React.createElement(Text, { testID: 'test-id-b7855ea5-85cb-42cb-a832-96cc229c48a6', style: Styles.AuthWarningText }, 'Для открытия документа необходимо в следующем окне ввести ваш логин и пароль от учетной записи в домене Сигма')),
            React.createElement(View, { testID: 'test-id-11e29bd3-3c7a-40df-add3-15a427d0c9d8', style: Styles.AuthWarningButton },
                React.createElement(Button, { testID: 'test-id-d8b20565-6721-474c-af19-c79fe1c1facb', type: ButtonType.TEXT, onExecute: () => { props.downloadAttachment(props.dealCurrentAttachment.id); } },
                    React.createElement(Text, { testID: 'test-id-1f53bfdb-be2a-4402-a3a5-d07941104cc5' }, 'Продолжить'))))));
};
const ViewDealAttachments = (props) => (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b96', style: Styles.flex },
    React.createElement(SplitPanel, { testID: 'test-id-e4de6a42-c7d0-7a11-ce02-d9096d06a9fd', id: util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments) },
        React.createElement(ContentPanel, { testID: 'test-id-58ea65e1-b6b5-9b76-5b8b-cdf253effcef', style: { backgroundColor: '#fff' } },
            getMainPage(props),
            getViewerPage(props),
            getAuthWarningPage(props))),
    props.isVisibleModalFileTypeError ? getAlertModalWindow(props) : null));
export default ViewDealAttachments;
//# sourceMappingURL=ViewDealAttachments.js.map