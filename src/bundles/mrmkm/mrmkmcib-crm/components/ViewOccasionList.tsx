/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewOccasionListStyles'

import {
    Button,
    ButtonType,
    CenterPageHeader,
    ContentPanel,
    H2,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    View,
    Icon,
    IconType,
} from 'ufs-mobile-platform'
import { Models as ModelsApp, LoaderWithText } from "mrmkmcib-app"
import { Models } from "mrmkmcib-crm"
import { Enums } from '../Enums'
import {defaultValues} from '../models/Models'
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsAgent from "../models/ModelsAgent"
import Error from "../models/Error"

import ContainerOccasion from '../containers/ContainerOccasion'
import { SwipeableItem, IconRedMinus } from 'mrmkmcib-ui'

import * as Utils from '../common/Util'

import { ErrorModal } from 'mrmkmcib-app'



const deleteButton = (props: IProps, occasion: Models.Occasion): React.ReactElement<Button> => (
    <View style={Styles.containerDeleteButton}>
            <Button type={ButtonType.TEXT}
                    testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e1213'
                    onExecute={() => { props.performDeleteOccasionWithMenuOption(occasion) }}>
                <Text testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e121311' >
                    {' Отмена '}
                </Text>
            </Button>	
            <Button type={ButtonType.TEXT_RED}
                    testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e1213'
                    onExecute={() => { props.performDeleteOccasion(occasion) }}>
                <Text testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e121311' >
                    {' Удалить '}
                </Text>
            </Button>
    </View>
)

const getErrorOccasionList = (props: IProps): Models.ErrorModalWindow => {

        return {
            title: Utils.getErrorTitleOccasionList(props.occasionListContextMode),
            cancel: props.performChangeDisplayOccasionListErrorModalWindow,
            repeat: ()=> props.performCallOccasionListUpdate(),
            cacheDate: null,
            message:props.occasionListUpdateError && props.occasionListUpdateError.comment,
        }
}

const getErrorModalWindow = (props: IProps): React.ReactElement<ErrorModal> => {

    const errorOccasionList: Models.ErrorModalWindow = getErrorOccasionList(props)

    return (<ErrorModal
        testID={ `test-id-modal-error-activity-card-${new Date().getTime()}` }
        isVisible={props.isVisibleOccasionListErrorModalWindow}
        titleText={errorOccasionList.title || "Произошла ошибка"}
        messageText={ errorOccasionList.message || "Попробуйте снова или обратитесь в службу поддержки."}

        cancel={()=> errorOccasionList.cancel(false)}

        repeat={() => errorOccasionList.repeat()}

        cacheDate={errorOccasionList.cacheDate || new Date()}/>)
}

const getLoadingText = (props: IProps): string => {

    if (props.occasionListContextMode == Enums.OccasionListContextMode.Agent) {
        return "Сохранение изменений по карточке представителя"
    }
    if (props.occasionListContextMode == Enums.OccasionListContextMode.CustomerManaged) {
        return "Сохранение изменений по карточке клиента"
    }
    return ""
}
const getLoader = (props: IProps): React.ReactElement<LoaderWithText> => (
    <LoaderWithText text = {getLoadingText(props)}
                    testID="test-id-45750788-db23-11e7-9296-cec278b6b50a"  />
)

const undefinedPlaceholder = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED)

const getOccasionListItemView = (props: IProps, occasion: Models.Occasion): React.ReactElement<View> => (
    <View testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e'
          style={Styles.occasionListItemContainer}>
        <View testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e' style={Styles.inlineWrapper}>
            <View testID='test-id-d15088ea-68c5-4dc5-1354-97a29b79fb8e'
                  style = {[occasion.isAnnual ? Styles.annualOccasionView : Styles.occasionView, Styles.mainOccasionView]}>
                <Text testID='test-id-6a77ff4a-aa06-61b5-64e3-313ab5ea955b' style={Styles.greyLabelValue} numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {occasion.date ? occasion.isAnnual ? occasion.date.formattedString('DD.MM.')
                                                       : occasion.date.formattedString()
                                   : undefinedPlaceholder}
                </Text>
                <Text testID='test-id-6a8ce54d-e696-55b9-9b6b-87b55288df0a' style={Styles.greyLabel} numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {occasion.isAnnual ? 'ежегодно' : ''}
                </Text>
            </View>
            <View testID='test-id-58f4f19c-0ff8-090f-fc88-e43634c0f664' style={Styles.rightColumn}>
                <Text testID='test-id-c9fa3f01-db9f-b627-4c4c-9d2ae61b45f1' style={Styles.greyLabelValue} numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {occasion.type && occasion.type.value || undefinedPlaceholder}
                </Text>
                <Text testID='test-id-c3456808-80fb-d1d0-2dc5-35e085665b8a' style={Styles.greyLabel} numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {occasion.comment}
                </Text>
            </View>
        </View>
        {
            props.occasionListMode == Enums.OccasionListMode.Edit
                ? null
                : <Button testID='test-id-83746tyfuh-hwedf-lwe-56w4y'
                    onExecute={() => props.performOpenOccasionScreen(occasion, Enums.OccasionMode.Watch)}>
                    <Icon testID='test-id-adhghj-kjeej-agrhh-wywhgq' disabled type={IconType.MrmLink} />
                </Button>
        }
    </View>
)
const getAddButtonNewOccasion = (props: IProps): React.ReactElement<TableRow> | null => (
    props.occasionListMode == Enums.OccasionListMode.Edit &&
    (props.inputOccasionList &&
    Array.isArray(props.inputOccasionList.data) &&
    props.inputOccasionList.data.length > 0) &&
    props.occasionListAccessLevel == Enums.OccasionListAccessLevel.Write ?
        <TableRow testID="test-id-a455c8b6-e639-11e7-80c1-9a214cf093ae">
            <TableCell testID="test-id-a67b8c16-f08e-11e7-8c3f-9a214cf093ae"
                       style = {Styles.tableCellAddNewOccasion}>
                    <Button testID="test-id-36708c60-f079-11e7-8c3f-9a214cf093ae"
                        type={ButtonType.TEXT}
                        onExecute={()=> props.performOpenOccasionScreen(defaultValues.Occasion, Enums.OccasionMode.Create)}>
                        <Text
                            testID="test-id-3e61f4d6-f079-11e7-8c3f-9a214cf093ae">Добавить</Text>
                    </Button>
            </TableCell>
        </TableRow> : null
)
const getOccasionListSwipeableItem = (props: IProps, occasion: Models.Occasion): React.ReactElement<View> => (
    <View style={Styles.occasionContentView}
          key = {`occasion-${new Date().getTime()}`}>
            <View style={Styles.iconRedMinusView}>
                {props.occasionListWithMenuOption.indexOf(occasion.id) == -1 &&
                props.occasionListMode == Enums.OccasionListMode.Edit ?
                    <IconRedMinus testID='test-id-d82c3ee2-75h-dea5-5d6f-kjere'
                                  onPress={() => props.performAddOccasionWithMenuOption(occasion) } />
                    : null}
            </View>
            <View style = {{flex: 1}} >
                <SwipeableItem testID='test-id-c9205b42-b7d1-a6ba-e0a8-62295fa37890'
                               isLeftActionMenuOpen={false}
                               isRightActionMenuOpen={props.occasionListWithMenuOption.indexOf(occasion.id) > -1 ? true : false}

                               leftActionMenu={<View />}
                               rightActionMenu={deleteButton(props, occasion)}

                               onLeftActionMenuOpen={() => props.performAddOccasionWithMenuOption(occasion)}
                               onRightActionMenuOpen={() => props.performDeleteOccasionWithMenuOption(occasion)}

                               onToggleLeft={() => { }}
                               onToggleRight={() => { }}

                               onPress={() => { }}

                               disableSwipe={false}>
                    {getOccasionListItemView(props, occasion)}
                </SwipeableItem>
            </View>
    </View>
)
const getOccasionListTableRows = (props: IProps): Array<React.ReactElement<TableRow>> | null => ( props.inputOccasionList &&
    Array.isArray(props.inputOccasionList.data) ?
    props.inputOccasionList.data.map(
    (occasion: Models.Occasion, i: number): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-9b2c22f7-26aa-d94f-59ee-ab36f7df5722'
            key={`occasionListTableRow_${i}`}
            onClick={ () => props.performOpenOccasionScreen(occasion, Enums.OccasionMode.Watch)}>
            <TableCell testID='test-id-4142c7f1-f6dc-3aad-a7b4-c748dccec771'>
                            {props.occasionListMode == Enums.OccasionListMode.Edit
                                ? getOccasionListSwipeableItem(props,occasion)
                                : getOccasionListItemView(props, occasion)}
                </TableCell>
        </TableRow>
        )
    ) : null
)

const isLoadingOccasionList = (props:IProps): boolean =>{
    return props.occasionListUpdateInProgress
}

const getOccasionListPage = (props: IProps): React.ReactElement<View | LoaderWithText> => {

    if (isLoadingOccasionList(props)) {
        return getLoader(props)
    }

    return (
        <View style={Styles.occasionPageContainer}>
            {getOccasionListTable(props)}
            {props.occasionListUpdateError ? getErrorModalWindow(props) : null}
        </View>
    )
}


const getOccasionListTable = (props: IProps): React.ReactElement<View | Table> => (
    props.inputOccasionList && Array.isArray(props.inputOccasionList.data) &&
    props.inputOccasionList.data.length > 0 ?
        <Table noPaddings = {true}
               testID='test-id-e203b1d6-b03b-b9cc-f574-5ca661a71f08'
               underlined={true}>
            <TableBody testID='test-id-c7b00501-edb7-20d0-8192-b8a360974636'>
                {getAddButtonNewOccasion(props)}
                {getOccasionListTableRows(props)}
            </TableBody>
        </Table> :
        <View testID="test-id-7aca7b86-e328-11e7-80c1-9a214cf093ae"
              style = {Styles.emptyOccaionListView}  >
            <Text style = {Styles.emptyOccasionListText}
                  testID="test-id-7c3a9e7e-e328-11e7-80c1-9a214cf093ae">
                Список пуст
            </Text>
      </View>
)


const getLeftScreenNavigation = (props: IProps): React.ReactElement<NavigationBackButton | View>[]=> {


    if (props.occasionListMode == Enums.OccasionListMode.Edit) {
        return [<NavigationTextButton testID='test-id-16a1570f-4790-01ef-8819-484eb35b7fa4'
                   title={'Отмена'}
                   key = {'b3d0a12e-e64a-11e7-80c1-9a214cf093ae'}
                   onExecute={props.performCancel} />]
    }
        return  [<NavigationBackButton key = 'occasionListNavBarChangeButton'
                   testID='test-id-3d5f2ef0-0a7b-a1af-2c88-43re2qr'
                   title={false}
                   onClick={props.performCancel} />,
                   <View key={"OccasionListNavBarView"}
                         style={Styles.navigationBackButtonTextAdjustment}
                         testID="test-id-11931fca-e309-11e7-80c1-9a214cf093ae">
                       {props.occasionListContextMode ==
                        Enums.OccasionListContextMode.Notice ?  <NavigationTextButton
                            key = 'occasionListNavBarText'
                            title={'Уведомления'}
                            testID={'test-id-5fc800a7-4791-43b3-8f2c-8cfc821a7398'}
                            onExecute={props.performCancel}/> : null}
                   </View>
             ]
}
const getRightScreenNavigation = (props: IProps): React.ReactElement<NavigationTextButton> | null => {

   switch (true)
   {
       case props.occasionListUpdateInProgress:
       case props.occasionListAccessLevel == Enums.OccasionListAccessLevel.Read: {
           return null
       }
       case props.occasionListMode == Enums.OccasionListMode.Edit: {
           return <NavigationTextButton testID='test-id-16a1570f-4790-01ef-8819-484eb35b7fa4'
                                        title={'Готово'}
                                        onExecute={props.performSave} />

       }
       case props.occasionListMode == Enums.OccasionListMode.Watch &&
            props.inputOccasionList && Array.isArray(props.inputOccasionList.data) &&
            props.inputOccasionList.data.length == 0: {
           return <NavigationTextButton
                    testID='test-id-16a1570f-4790-01ef-8819-484eb35b7fa4'
                    title={'Добавить'}
                    onExecute={()=> props.performOpenOccasionScreen(defaultValues.Occasion, Enums.OccasionMode.Create)} />

       }
       default: {
           return <NavigationTextButton testID='test-id-bb51a046-e6da-796d-0559-3d8547b40224'
                                        title={'Изменить'}
                                        onExecute={props.performEdit} />
       }
   }
}


/*
 * UI stateless functional component presenter for "OccasionList" container.
 */

export interface IProps {
    performInit: ModelsOccasionList.PERFORM_INIT,
    performSave: ModelsOccasionList.PERFORM_SAVE,
    performEdit: ModelsOccasionList.PERFORM_EDIT,
    performCancel: ModelsOccasionList.PERFORM_CANCEL,
    navigateBack: ModelsOccasionList.NAVIGATE_BACK,
    performOpenOccasionScreen: ModelsOccasionList.PERFORM_OPEN_OCCASION_SCREEN,
    performDeleteOccasion: ModelsOccasionList.PERFORM_DELETE_OCCASION,
    performAddOccasionWithMenuOption: ModelsOccasionList.PERFORM_ADD_OCCASION_WITH_MENU_OPTION,
    performDeleteOccasionWithMenuOption: ModelsOccasionList.PERFORM_DELETE_OCCASION_WITH_MENU_OPTION,
    performCallOccasionListUpdate: ModelsOccasionList.PERFORM_CALL_OCCASION_LIST_UPDATE,
    performChangeDisplayOccasionListErrorModalWindow: ModelsOccasionList.PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW,

    inputOccasionList: Models.OccasionList,
    occasionListMode: Enums.OccasionListMode
    occasionListContextMode: Enums.OccasionListContextMode,
    occasionListAccessLevel: Enums.OccasionListAccessLevel,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    occasionListWithMenuOption: string[],
    isVisibleOccasionListErrorModalWindow: boolean,

    occasionListUpdateInProgress: boolean,
    occasionListUpdateError: Error | null,

    testID: string,

}

const ViewOccasionList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-bc4f9e1d-3c75-37a5-ebac-125d7fbeea82' style={Styles.main}>
        <SplitPanel testID='test-id-eba78ac8-96e8-5971-bfec-770ecd5ab851'
            id={Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionListScreen)}>
            <ContentPanel testID='test-id-e153aa94-e50e-a7d6-c041-12e2efa87231' style={{ backgroundColor: '#fff' }}>
                <Page testID='test-id-b43e9870-778f-8c95-7529-a55f7617a1db' scrollEnabled={false}
                    content={getOccasionListPage(props)}>
                    <LeftPageHeader testID='test-id-66130359-748f-c629-7f58-9c2079307ba1'>
                        {getLeftScreenNavigation(props)}
                    </LeftPageHeader>

                    <CenterPageHeader testID='test-id-6f4798df-649f-f25b-22b3-2980a15c70b8'>
                        <H2 testID='test-id-6f4798df-649f-f25b-22b3-2980a15c70b8'>
                            {'Важные даты'}
                        </H2>
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-adba0f75-edb4-aa90-3d73-4ec49847be37'>
                        {getRightScreenNavigation(props)}
                    </RightPageHeader>
                </Page>
                <Page testID='test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1' scrollEnabled={false}
                    content={<ContainerOccasion testID='test-id-a77ddf9e-9451-1934-2cc0-50cdd1b4d9f1' />}>
                    <LeftPageHeader testID='test-id-6c085c6e-0a1d-d282-b3ec-d94bb76fd172' />
                </Page>
            </ContentPanel>
        </SplitPanel>
    </View>


)

export default ViewOccasionList