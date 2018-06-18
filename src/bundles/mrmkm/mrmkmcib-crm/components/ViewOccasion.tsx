/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewOccasionStyles'

import {
    Button,
    ButtonType,
    Center,
    CenterPageHeader,
    ContentPanel,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RightPageHeader,
    SplitPanel,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    TextInput,
    View,
    DateInputTypes,
    DateInput,
    Textarea,

} from 'ufs-mobile-platform'

import {
    Models as ModelsApp,
    LoaderWithText,
    ErrorModal,
} from 'mrmkmcib-app'

import {
    Models,
    OneLineCell,
} from 'mrmkmcib-crm'

import {Enums} from '../Enums'
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsAgent from "../models/ModelsAgent"
import Error from "../models/Error"

import {defaultValues} from "../models/Models"

import * as Utils from '../common/Util'
import {DatePicker} from 'mrmkmcib-ui'


const getOccasionEditModeContent = (props: IProps): React.ReactElement<View> => (
    <View
        testID='test-id-tuye-jjej-sdghs-thss-54re'
        style={Styles.flex}>
        <View testID='test-id-tr-jjewgqj-ehwtryj-saaa-hwgea'>
            <Table
                testID='test-id-4791ac69-89c6-4280-9a07-62da8e32bf9a'
                style={Styles.dataTypeContainer}
                underlined={true}>
                <TableBody testID='test-id-63c9a3aa-212f-4a64-ab5e-166601e703cb'>
                    <OneLineCell
                        data={{
                            label: 'Тип даты',
                            value: props.inputOccasionType && props.inputOccasionType.value || 'Выберите тип даты'
                        }}
                        onClick={props.navigateToOccasionTypePickerScreen} />
                </TableBody>
            </Table>
        </View>
        {
            props.errorValidationList.indexOf(Enums.OccasionValidationAttribute.Type) > -1  ?
                <View
                    testID='test-id-f3ebbdcd-d327-4e2c-99db-9821cc1a7f09'
                    style={Styles.pickerErrorBackground}
                >
                    <Text
                        testID='test-id-8f38c45d-cedb-4a91-b9ba-b680e60ed0c1'
                        style={Styles.pickerErrorText}>
                        {Utils.occasionValidationType(props.inputOccasionType)}
                    </Text>
                </View> :
                null
        }
        <DateInput testID='test-id-2fff-03ff-4c9b-8fd3-356ujh'
                   value={props.inputDate || undefined}
                   label='Дата события'
                   format='dd.MM.yyyy'
                   locale='ru'
                   hasError = {props.errorValidationList.indexOf(Enums.OccasionValidationAttribute.Date)  > -1}
                   dateType = {DateInputTypes.DAY_PICKER}
                   errorText = {Utils.occasionValidationDate(props.inputDate)}
                   onChange={props.performInputDate}
                   placeholder='Не указана'
        />
        <View testID='test-id-rqeg-8612-f8c3-cd9f-erg'
              style={Styles.switchContainer}>
            <Switch testID='test-id-egre-3037-e489-a768-gargq'
                    label={'Без указания года'}
                    checked={props.inputNoYear}
                    onChange={props.performInputNoYear}
                    disabled={false}
            />
            <Textarea testID='test-id-76fb9f4c-e20e-4362-4d4b-qerg'
                       label='Комментарий'
                       value={props.inputComment || ''}
                       onChange={props.performInputComment}
                       placeholder='Введите комментарий'
            />
        </View>
    </View>
)

const occasionViewLabel = (header: string, body: string ): React.ReactElement<View> => (
    <View testID='test-id-tr-jjewgqj-ehwtryj-saaa-hwgeg' style={Styles.occasionExpandedModeScreenRowContainer}
    >
        <Label testID='test-id-5hww-4t2ha-ghngyju-wrthw-431tgw'
               header={''}
               text={header} block={true}>
            <Text testID='test-id-j6kee-7ew44h-8i6w-54hqg-54lajg'
                  style={Styles.labelTextValue}>
                {body}
            </Text>
        </Label>
    </View>
)

const getOccasionWatchModeContent = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-tuye-jjej-sdghs-thss-54re'>
        {occasionViewLabel('Наименование', props.currentOccasion.type &&
                                           props.currentOccasion.type.value ||
                                           PLACEHOLDER)}
        {occasionViewLabel('Дата', props.currentOccasion.date &&
                                   props.currentOccasion.date.formattedString() || '')}
        {occasionViewLabel('Комментарий', props.currentOccasion.comment)}
    </View>
)



const PLACEHOLDER: string = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED)

const getOccasionContent = (props: IProps): React.ReactElement<View | LoaderWithText> => {

    switch (props.occasionMode) {
        case  Enums.OccasionMode.Edit:
        case  Enums.OccasionMode.Create:{
            return getOccasionEditModeContent(props)
        }
        default: return getOccasionWatchModeContent(props)
    }
}

const getOccasionTypeList = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-8417a9ca-07c2-1605-a03b-85de3b0708f3' style={Styles.mainFull}>
        <Table testID='test-id-977882d9-df03-3a28-176d-f3a39a43e488'>
            <TableBody testID='test-id-db356dd7-9500-b436-a765-374054b0256d'>
                {
                    props.classifierDictionary.SBRF_IMP_DATE.data.map(
                        (type: ModelsApp.Classifier, index: number): React.ReactElement<TableRow> => (
                            <TableRow testID='test-id-6bec89a0-1fb3-b973-7891-838f2cc81063'
                                      key={`Occasion Type Row ${ index }`}
                                      onClick={() => props.performInputOccasionType(type)}>
                                <TableCell testID='test-id-09f6b8ca-8f42-326d-f8d1-c2bc1730f62d'
                                           style={Styles.occasionTypeRow}>
                                    <View testID='test-id-0160398b-4925-f1be-8397-f77d3327d9e3'
                                          style={Styles.occasionTypeCell}>
                                        <Text testID='test-id-8fa71615-5031-dbdc-1bb4-b0ffe7427489'>{type.value}</Text>
                                        {((props.inputOccasionType && props.inputOccasionType.code) == (type && type.code)) ?
                                        <Button testID='test-id-befa3b8c-e32f-11e7-80c1-9a214cf093ae'
                                                onExecute={() =>
                                                    props.performInputOccasionType(type)
                                                }>
                                            <Icon testID='test-id-ac302b1c-2b06-d021-64f0-201c3f8a4239'
                                                  disabled
                                                  type={IconType.MrmDone}/>
                                        </Button> : null}
                                    </View>
                                </TableCell>
                            </TableRow>
                        )
                    )
                }
            </TableBody>
        </Table>
    </View>
)

/*
 * UI stateless functional component presenter for "Occasion" container.
 */

export interface IProps {
    performSave: ModelsOccasion.PERFORM_SAVE,
    performCancel: ModelsOccasion.PERFORM_CANCEL,

    navigateToOccasionTypePickerScreen: ModelsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN,
    performInputOccasionType: ModelsOccasion.PERFORM_INPUT_OCCASION_TYPE,
    performInputDate: ModelsOccasion.PERFORM_INPUT_DATE,
    performInputNoYear: ModelsOccasion.PERFORM_INPUT_NO_YEAR,
    performInputComment: ModelsOccasion.PERFORM_INPUT_COMMENT,
    navigateBack: ModelsOccasion.NAVIGATE_BACK,

    performEdit: ModelsOccasionList.PERFORM_EDIT,

    currentOccasion: Models.Occasion,

    inputOccasionType: ModelsApp.Classifier | null,
    inputDate: Date | null,
    inputNoYear: boolean,
    inputComment: string,

    classifierDictionary: ModelsApp.ClassifierDictionary,
    occasionMode: Enums.OccasionMode,
    errorValidationList: number[],
    testID: string,

    occasionListContextMode: Enums.OccasionListContextMode,
}

const getLeftScreenNavigation = (props:IProps): React.ReactElement<NavigationBackButton | NavigationTextButton> => {
    switch (props.occasionMode) {
        case  Enums.OccasionMode.Edit:
        case  Enums.OccasionMode.Create:{
            return <NavigationTextButton testID='test-id-1e8f91ba-e30c-11e7-80c1-9a214cf093ae'
                                         title={'Отмена'} onExecute={props.performCancel}/>
        }
        default: return <NavigationBackButton
                            testID='test-id-139d4b30-e30c-11e7-80c1-9a214cf093ae'
                            onClick={props.performCancel}
                            title={false}/>
    }
}

const getRightScreenNavigation = (props: IProps): React.ReactElement<NavigationTextButton> => {
    switch (props.occasionMode) {
        case  Enums.OccasionMode.Edit:
       case  Enums.OccasionMode.Create:{
            return  <NavigationTextButton
                            testID='test-id-18f1aaa4-e30c-11e7-80c1-9a214cf093ae'
                            title={'Готово'} onExecute={props.performSave}/>
        }

        default: return <NavigationTextButton
                            testID='test-id-ld4e-cbea-b838-pouyf-865id'
                            title={'Изменить'} onExecute={props.performEdit}/>
    }
}
const ViewOccasion: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
        <SplitPanel testID='test-id-2bf28a55-eef7-983f-8429-b49b075b33b7'
                    id={Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionScreen)}>
            <ContentPanel testID='test-id-699b99a3-a2f6-3182-4681-bcd92faf65fa' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-b89dfdd3-7480-9851-0d03-fa8636b41333' scrollEnabled={false}
                      content={getOccasionContent(props)}>
                    <CenterPageHeader testID='test-id-869df924-5597-925b-814c-5cf76ee27a5d'><H2
                        testID='test-id-869df924-5597-925b-814c-5cf76ee27a5d'>{Utils.getOccasionPageTitleText(props.occasionMode)}</H2></CenterPageHeader>
                    <LeftPageHeader testID='test-id-e4e7dfc7-9ea3-6c70-8d02-b9d55d415bc3'>
                        {getLeftScreenNavigation(props)}
                    </LeftPageHeader>
                    <RightPageHeader testID='test-id-cc97371b-7e9e-2003-6c37-f8d51ba3e1c2'>
                        {getRightScreenNavigation(props)}
                    </RightPageHeader>

                </Page>
                <Page testID='test-id-df0d175c-52ae-79c6-8f4b-18f183838922' scrollEnabled={true}
                      content={getOccasionTypeList(props)}>
                    <CenterPageHeader testID='test-id-0a56f043-3824-dfdf-7330-277853a3395e'><H2
                        testID='test-id-0a56f043-3824-dfdf-7330-277853a3395e'>{'Тип важной даты'}</H2></CenterPageHeader>
                    <LeftPageHeader testID='test-id-60a0d15c-9da2-3645-cc04-5d34a27f2b55'>
                        <NavigationBackButton
                            testID='test-id-e01d5ac7-ad78-d1b8-8df9-b3fc7b9a277e'
                            onClick={props.navigateBack}
                            title={false} />
                    </LeftPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
)

export default ViewOccasion
