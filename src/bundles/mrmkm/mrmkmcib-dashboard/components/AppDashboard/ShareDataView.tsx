import React from 'react'

import {
    Button,
    CenterPageHeader,
    ContentPanel,
    H2,
    Icon,
    IconType,
    LeftPageHeader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    RadioButton,
    RadioGroup,
    RightPageHeader,
    SplitPanel,
    Text,
    View,
    Checkbox,
    NavigationIconButton,
    NavigationIconButtonType,
    TextInput,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from 'ufs-mobile-platform'
// import Styles from './styles/ViewAppDashboardStyles'
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models, ModelsCustomerDashboard} from "mrmkmcib-dashboard"
import {Models as CRMModels} from "mrmkmcib-crm"
import Styles from './styles/ShareDataViewStyles'
import {Enums} from '../../Enums'
import PopoverTarget from '../../modules/PopoverTarget'
import * as util from '../../common/Util'
import * as Converters from '../../models/Converters'
import Error from "../../models/Error"
import reducerCustomerDashboard from "../../reducers/ReducerCustomerDashboard";

const generateLabel = (item: ModelsScheduler.Person, props: IProps) => {
    return (
        <View
            key={item.email}
            style={Styles.recipientLabel}
            testID="test-id-dde4004d-3da7-75ff-2857-e828a3a71d54"
        >
            <Text testID='test-id-f5e4004d-3de7-75ff-2857-e828a3a71d54' style={Styles.recipientLabelText}>
                {util.getPersonName(item)}
            </Text>
            <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                    onExecute={() => {
                        props.inputCurrentRecipientListRefresh(item, Enums.Operation.Remove)
                    }}>
                <Icon testID='test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54' disabled type={IconType.MrmClear} />
            </Button>
        </View>
    )
}

export const AgentCircle = (props: { firstName: string | null, lastName: string | null, testID: string }): React.ReactElement<View> =>
    <View style={Styles.AgentCircleContainer} testID="test-id-00e4004d-3da7-75ff-2857-e828a3a71d54">
        <View testID='test-id-63a4dff0-6f6a-a24f-b5ff-caa64fdfd812' style={Styles.AgentCircle}>
            <Text
                testID='test-id-9c44194d-c503-9d50-4331-2c1cac2ae398'
                style={Styles.AgentCircleLabel}>
                {`${props.firstName && props.firstName.charAt(0).toUpperCase()}${props.lastName && props.lastName.charAt(0).toUpperCase()}`}
            </Text>
        </View>
    </View>


const generateRecipientListItem = (item: ModelsScheduler.Person, props: IProps) => {
    const isChecked = (item: ModelsScheduler.Person, personList: ModelsScheduler.PersonList) : boolean => {
        let i;
        for (i = 0; i < personList.data.length; i++) {
            if (personList.data[i].email === item.email) {
                return true;
            }
        }

        return false;
    }

    let checked: boolean = isChecked(item, props.currentRecipientList)
    let isInactive: boolean = props.currentRecipientList.data.length >= 5 && !checked
    return (
        <TableRow testID='test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b' key={item.email}>
            <TableCell testID='test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b' style={Styles.tableCellHeight}>
                <View
                    style={[Styles.leftSectionListItem, isInactive && Styles.Inactive]}
                    testID="test-id-11e4004d-3da7-75ff-2857-e828a3a71d54" >
                    <View style={Styles.circleWrapper} testID="test-id-12e4004d-3da7-75ff-2857-e828a3a71d54">
                        <AgentCircle testID='test-id-ViewEmployee-expanded-main_1000'
                                     firstName={item.lastName}
                                     lastName={item.firstName} />
                    </View>
                    <View
                        style={[Styles.centeralSectionListItem, isInactive && Styles.Inactive]}
                        testID="test-id-13e4004d-3da7-75ff-2857-e828a3a71d54" >
                        <Text
                            testID='test-id-f5e4004d-3da7-75ff-2857-e828a3a71a54'
                            style={Styles.blackFontLabelAddressee} >
                            {util.getPersonName(item)}
                        </Text>
                        <Text
                            testID='test-id-05e4004d-3da7-75ff-2857-e828a3a71a54'
                            style={[{paddingTop: 5, paddingBottom:5}, Styles.greyFontLabelSmall, isInactive && Styles.Inactive]} >
                            {item.email}
                        </Text>
                        <Text
                            testID='test-id-05e4004d-3da7-75ff-2857-e828с3a71a54'
                            style={[isInactive && Styles.Inactive, Styles.greyFontLabelSmall]} >
                            {[item.division, item.city]
                                .filter( (item) => item && item != '' )
                                .join(', ')}
                                </Text>
                    </View>
                    <View
                        style={[Styles.rightSectionListItem, isInactive && Styles.Inactive]}
                        testID="test-id-14e4004d-3da7-75ff-2857-e828a3a71d54">
                        <Checkbox
                            testID='test-id-05e4804d-3da7-75ff-2857-e828a3a73a54'
                            underlined={false}
                            checked={checked}
                            onChange={()=> {if(checked) {
                        props.inputCurrentRecipientListRefresh(item, Enums.Operation.Remove)
                    } else {
                        if(props.currentRecipientList.data.length < 5) {
                            props.inputCurrentRecipientListRefresh(item, Enums.Operation.Add)
                        }
                    }}}
                        />
                    </View>
                </View>
            </TableCell>
        </TableRow>
    )
}

const toSection: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    let recipientList = props.currentRecipientList || []
    let resultList: Array<React.ReactElement<View>> = []
    if(recipientList.data) {
        recipientList.data.forEach(item => {
            resultList.push(generateLabel(item, props))
        })
    }

    // Следующий блок адаптивно размещает адрессатов
    let resultList1: Array<React.ReactElement<View>> = []
    let resultList2: Array<React.ReactElement<View>> = []
    // проверяем пришли ли данные
    if (recipientList && recipientList.data && recipientList.data[0]) {
        const maxLengthOneRow: number = 20
        // если только один адрессат => записать его в контейнер первой строки
        if (recipientList.data.length == 1) {
            resultList1 = resultList
        } else {
            // если адрессатов несколько => разбиваем их по разным контейнерам
            const firstAdressat: ModelsScheduler.Person = recipientList.data[0]
            const secondAdressat: ModelsScheduler.Person = recipientList.data[1]
            if (firstAdressat.lastName != null && secondAdressat.lastName != null) {
                const firstAdressatLength: number = firstAdressat.lastName.length + 5
                const secondAdressatLength: number = secondAdressat.lastName.length + 5
                const lengthOfTwoAdressats: number = firstAdressatLength + secondAdressatLength
                // определяем кол-во адрессатов в первом контейнере
                const numOfAdderessatsInFirstLine: number = (lengthOfTwoAdressats > maxLengthOneRow) ? 1 : 2
                // разбиваем адрессатов на два контейнера
                resultList1 = resultList.slice(0, numOfAdderessatsInFirstLine)
                resultList2 = resultList.slice(numOfAdderessatsInFirstLine)
            }
        }
    }

    return (
        <View testID='test-id-04e0a121-247-4f3e-22cf-e0b4616d903f' style={Styles.toSectionPadding}>
            <View testID='test-id-04e0a121-247-4f3e-22cf-e0b4616f903f' style={Styles.toSectionInner}>
                <View testID='test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f' style={Styles.firstLineWrapper}>
                    <View testID='test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f' style={[Styles.toSectionMainFlex, Styles.recipientListDisplayField]}>
                        <View testID='test-id-49d321df-516a-4392-9b91-3b839db846fa' style={Styles.toSectionLabelFlex}>
                            <Text testID='test-id-04f0a121-24b7-4f3e-22cf-e134616d903f' style={Styles.toSectionLabel}>Кому:</Text>
                        </View>
                        {(resultList1.length) ? resultList1 :
                            <Text testID='test-id-7cab878c-4f75-4bca-98de-66f155d338a0' style={Styles.addAddressat}>выберите адресата</Text>}
                    </View>
                    <View testID='test-id-12461a77-12fe-4ccb-a054-01e6117447be' style={Styles.PlusButton}>
                        <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                onExecute={props.navigateToPopoverShareRecipientsScreen}
                                disabled={props.sendFetching}>
                            <Icon testID='test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54' type={IconType.MrmPlus}/>
                        </Button>
                    </View>
                </View>
                <View testID='test-id-bef01a93-7588-4e5b-9cb4-8737cee5b02f' style={[Styles.toSectionMainFlex, Styles.recipientListDisplayField2]}>
                    {resultList2 || null}
                </View>
            </View>
            <View testID='test-id-cce10d4d-4b73-4466-a08f-de28cfb40bfa' style={Styles.preconditionToSection}>
                <Text testID='test-id-04f0a121-24b7-4f3e-22cf-e134616d903f' style={Styles.toSectionLabelSmallFont}>Не более 5 получателей</Text>
            </View>
        </View>
    )
}

const optionsSection : React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-22cf-e1b4616d903f' style={Styles.toSectionPadding}>
            <View testID='test-id-04e0a121-247a-4f3e-22cf-e0b4616f903f' style={Styles.optionsSectionMain}>
                <View testID='test-id-89c91485-6f59-4a12-a9ef-f617103cffe3'>
                    { props.isRepresentationVisible ?
                        <View testID='test-id-1248dc71-e77d-4602-b8f5-4099b85010b9' style={[Styles.bottomBorder]}>
                            <Table testID='test-id-04b9a101-247a-4f3e-22af-e001410f989f'  underlined={false}>
                                <TableBody testID='test-id-14b0a101-247a-4f3e-22af-e001410f989f'>
                                    <TableRow
                                        onClick={props.navigateToPopoverShareRepresentationScreen}
                                        testID='test-id-14b0a101-247a-4f3e-22af-e101410f989f'>
                                        <TableCell
                                            testID='test-id-00b0a101-247a-4f3e-22af-e001410f989f'
                                            style={{paddingRight: 25}}>
                                            <View
                                                testID='test-id-4d2c4222-b122-ab67-125f-2b01925c5d62'
                                                style={Styles.sectionLinePart}>
                                                <Text testID='test-id-04e0a121-247a-4f3e-22cf-e004616f903f'
                                                      style={Styles.blackFontLabel}>Представление</Text>
                                                <Text
                                                    numberOfLines={1}
                                                      testID='test-id-04e0a121-247a-4f3e-22cf-e0b0616f903f'
                                                      style={Styles.greyFontLabel}>
                                                    {props.currentRepresentation == 1 ? 'Список сделок' : 'Слайды по сделкам' }
                                                    </Text>
                                                <View
                                                    testID='test-id-4d5c4222-b122-ab67-172f-2b01930c5d65'
                                                    style={Styles.arrowRight}>
                                                <Button testID='test-id-4d5c4222-b122-ab67-172f-2b01930c5d65'
                                                        onExecute={props.navigateToPopoverShareRepresentationScreen}>
                                                    <Icon testID='test-id-b510c153-99e8-7c3b-782d-c8c2b41e407c' disabled
                                                          type={IconType.MrmLink}/>
                                                </Button>
                                                </View>
                                            </View>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </View>
                        : null }


                    <View testID='test-id-04b0a101-247a-4f3e-22af-e001413f989f'>
                        <Table testID='test-id-04b9a101-247a-4f3e-22af-e001410f989f' underlined={false}>
                            <TableBody testID='test-id-14b0a101-247a-4f3e-22af-e001410f989f'>
                                <TableRow
                                    onClick={props.navigateToPopoverShareFormatScreen}
                                    testID='test-id-14b0a101-247a-4f3e-22af-e101410f989f'>
                                    <TableCell
                                        style={{paddingRight: 25 }}
                                        testID='test-id-00b0a101-247a-4f3e-22af-e001410f989f'>
                                        <View
                                            testID='test-id-4d2c4222-b122-ab67-125f-2b01925c5d62'
                                            style={Styles.sectionLinePart}>
                                            <Text testID='test-id-04e0a121-247a-4f3e-22cf-e004616f999f'
                                                  style={Styles.blackFontLabel}>Формат файла</Text>
                                            <Text
                                                numberOfLines={1}
                                                testID='test-id-04e0a121-247a-4f3e-22cf-e0b0616f989f'
                                                  style={Styles.greyFontLabel}>
                                                {props.currentFileFormat == 2 ?
                                                util.getFileFormatString(Enums.FileFormat.PDF) :
                                                props.currentRepresentation == 1 || !props.isRepresentationVisible ?
                                                    util.getFileFormatString(Enums.FileFormat.Excel) :
                                                    util.getFileFormatString(Enums.FileFormat.PowerPoint) }</Text>
                                            <View
                                                testID='test-id-4d5c4222-b122-ab67-172f-2b01930c5d65'
                                                style={Styles.arrowRight}>
                                                <Button testID='test-id-4d5c4222-b122-ab67-172f-2b01930c5d65'
                                                        onExecute={props.navigateToPopoverShareFormatScreen}
                                                        disabled={props.sendFetching}>
                                                    <Icon testID='test-id-b510c153-99e8-7c3b-782d-c8c2b41e407c' disabled
                                                          type={IconType.MrmLink}/>
                                                </Button>
                                            </View>
                                        </View>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </View>
                </View>

            </View>
        </View>
    )
}

const isShowPeopleHistory = (props: IProps) => {
    return  !props.inputSharePopoverSearch && props.personHistoryList.data && props.personHistoryList.data.length > 0
}

let renderList  = (props: IProps) => {
    let recipientList = (!isShowPeopleHistory(props) ? props.foundPersonList.data : props.personHistoryList.data) ||  []
    let result: Array<React.ReactElement<View>> = []
    if(recipientList != null) {
        recipientList.map(item => {result.push(generateRecipientListItem(item, props))})
    }
    return result
}

const getSearchInput = (props: IProps) => {
    const isClearIconShown: boolean = !(props.inputSharePopoverSearch == '')
    return (
        <View testID='test-id-b91df9c9-d695-0fa2-0c71-71fe25500c00' style={Styles.SearchInputView}>
            <View
                testID='test-id-b91df0c9-d695-0fa2-0c71-71fe25500c00'
                style={Styles.SearchIcon}>
            <Button
                testID='test-id-4c72195d-a768-9b82-7c05-30658da48892'
                onExecute={() => { props.inputSharePopoverSearchRefresh(props.inputSharePopoverSearch)}}>
                <Icon type={IconType.MrmSearch} testID='test-id-066426a2-7f9b-4bb3-9eac-4b6de7978a5d' />
            </Button>
            </View>
            <TextInput testID='test-id-cb1a195e-621b-e81b-a96c-84b21b53b823'
                       style={Styles.SearchInputSize}
                       placeholder={'Введите не менее трех символов'}
                       onChange={(value) => {
                           props.inputSharePopoverSearchRefresh(value)
                       }}
                       value={props.inputSharePopoverSearch}
                       onBlur={() => {}}
            />
            {//если строка поиска пустая => не показывать крестик
                isClearIconShown ?
                    <View testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f108d78e' style={Styles.ClearIcon}>
                        <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f108478e'
                                onExecute={() => {
                                    props.inputSharePopoverSearchRefresh('')
                                    props.foundPersonListClear()
                                }}>
                            <Icon testID='test-id-f5e4004d-3da7-75ff-2857-e828a3a71d54' disabled type={IconType.MrmClear}/>
                        </Button>
                    </View> :
                    null
            }
        </View>
    )
}

const resultsInfoTab = (props: IProps) => {
    // количество добавленных получателей
    const numOfRecipient: number = props.currentRecipientList.data.length
    // количество найденных получателей
    const numOfFoundPerson: number = props.foundPersonList.data.length
    // количество недавних получателей
    const numOfRecentRecipient: number = props.personHistoryList.data.length
    if (
        numOfRecipient || numOfFoundPerson || numOfRecentRecipient ||
        !(props.inputSharePopoverSearch == '' || props.inputSharePopoverSearch.length < 3)) {
        return (
            <View testID='test-id-84e0a121-24b7-4f3e-22af-e1b4616d903f' style={Styles.toSectionHeader}>
                <Text testID='test-id-04e0a121-247a-4f3e-20cf-e004616f999f'
                      style={Styles.toSectionHeaderText}>
                    {
                        // Если есть добавленные получатели => отображать их количество
                        numOfRecipient ?
                            Converters.CONVERT_NUM_OF_ADDRESSAT_TO_PHRASE(numOfRecipient) :
                            // если есть найденные получатели => отображать 'РЕЗУЛЬТАТЫ ПОИСКА'
                            numOfFoundPerson ?
                                'РЕЗУЛЬТАТЫ ПОИСКА' :
                                // если есть недавние получатели и строка поиска пуста => отображать 'НЕДАВНИЕ ПОЛУЧАТЕЛИ'
                                (numOfRecentRecipient && props.inputSharePopoverSearch == '') ?
                                    'НЕДАВНИЕ ПОЛУЧАТЕЛИ' :
                                    // если нет недавних получателей и сделан запрос => отображать ''
                                    props.inputSharePopoverSearch.length >= 3 ?
                                        'Адресат не найден' :
                                        ''
                    }
                </Text>
            </View>
        )
    } else {
        return <View testID='test-id-04e0a121-287a-4a3e-20cf-e004616f999f'/>
    }
}

const recipientsContent = (props: IProps) => {
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-22af-e1b4616d903f'>
            <View testID="test-id-15e4004d-3da7-75ff-2857-e828a3a71d54">
                {getSearchInput(props)}
            </View>
            <View style={Styles.scrollAreaHeight}>
                {resultsInfoTab(props)}
                <Table testID='test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b'>
                    <TableBody testID='test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b'>
                               {renderList(props)}
                    </TableBody>
                </Table>
            </View>
        </View>
    )
}

const representationContent = (props: IProps) => {
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-22cf-e1b4616d903f' style={Styles.toSectionPadding}>
            <View testID='test-id-04e0a121-247a-4f3e-22cf-e0b4616f903f' style={Styles.optionsSectionMainContent}>
                <View testID='test-id-04e0a121-2347a-4f3e-02cf-e0b4616f903f' style={Styles.radioGroupTopBorder}/>
                <RadioGroup
                    testID='test-id-04e0a121-247a-4f3e-22cf-e0b4616f913f'
                    value={Enums.Representation[props.currentRepresentation]}
                    onChange={(index, value) => {
                           props.inputCurrentRepresentationRefresh(index)
                           props.navigateToPopoverShareBack()
                       }}
                >
                    <RadioButton
                        testID='test-id-04e0a121-247a-4f3e-22cf-f0b4616f903f'
                        value={Enums.Representation[Enums.Representation.Slides]}
                        label='Слайды по сделкам'
                    />
                    <RadioButton
                        testID='test-id-04e0a121-247a-4f3e-22cf-a0b4616f903f'
                        value={Enums.Representation[Enums.Representation.List]}
                        label='Список сделок'
                    />
                </RadioGroup>
                <View testID='test-id-0410a121-247a-4f3e-22cf-e0b4616f903f' style={Styles.radioGroupBottomBorder}/>
            </View>
        </View>
    )
}


const fileFormatContent = (props: IProps) => {
    const showExelFormat = props.currentRepresentation === Enums.Representation.List || !props.isRepresentationVisible
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-22cf-e1b4616d9032' style={Styles.toSectionPadding}>
            <View testID='test-id-04e0a121-247a-4f3e-22cf-e0b4616f9033' style={Styles.optionsSectionMainContent}>
                <View testID='test-id-04e0a121-247a-4f3e-02cf-e0b4616f9034' style={Styles.radioGroupTopBorder}/>
                <RadioGroup
                    testID='test-id-04e0a121-247a-4f3e-22cf-e0b4616f9135'
                    value={props.currentFileFormat.toString()}
                    onChange={(index, value) => {
                           props.inputCurrentFileFormatRefresh(util.stringToFileFormat(value))
                           props.navigateToPopoverShareBack()
                       }}
                >
                { showExelFormat ?
                    <RadioButton
                        testID='test-id-04e0a121-247a-4f3e-22cf-f0b4616f903f'
                        value={Enums.FileFormat.Excel.toString()}
                        label={util.getFileFormatString(Enums.FileFormat.Excel)}
                    /> :
                    <RadioButton
                        testID='test-id-04e0a121-247a-4f3e-22cf-f0b4616f904k'
                        value={Enums.FileFormat.PowerPoint.toString()}
                        label={util.getFileFormatString(Enums.FileFormat.PowerPoint)}
                    />
                }
                    <RadioButton
                        testID='test-id-04e0a121-247a-4f3e-22cf-a0b4616f905s'
                        value={Enums.FileFormat.PDF.toString()}
                        label={util.getFileFormatString(Enums.FileFormat.PDF)}
                    />
                </RadioGroup>
                <View testID='test-id-04a0a121-247a-4f3e-22cf-e0b4616f906y' style={Styles.radioGroupBottomBorder}/>
            </View>
        </View>
    )
}


const mainContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    if(!props.supParameters.accessMode) {
        return (
            <View testID='test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd' style={Styles.AlignCenter}>
                <View testID='test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd' style={Styles.InfoMessage}>
                    <Text
                        testID='test-id-b61f627d-ab64-02d8-d8c0-d2fd2840fd21'>Сервис отправки файла выключен. Обратитесь к администратору</Text>
                </View>
            </View>)
    } else {
        if(props.sendError != null) {
            return (
                <View testID='test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd' style={Styles.AlignCenter}>
                    <View testID='test-id-7fbe9b45-ab10-ad74-8807-50ef2beae1dd' style={Styles.ErrorWrapper}>
                        <Text
                            testID='test-id-b61f627d-ab64-02d8-d8c0-d2fd2840fd21'>Ошибка подключения</Text>
                    </View>
                </View>)
        } else {
            if(props.sendSuccess) {
                return (
                    <View testID='test-id-7fbe9b45-ab10-ad74-8807-00ef2beae1dd' style={Styles.sendSuccess}>
                        <Text
                            testID='test-id-b61f627d-ad64-02d8-d8c0-d2fd2840fd21'
                            style={Styles.sendSuccessText}>Файл отправлен</Text>
                    </View>)
            } else {
                return (
                    <View testID="test-id-16e4004d-3da7-75ff-2857-e828a3a71d54">
                        {toSection(props)}
                        {optionsSection(props)}
                    </View>
                )
            }
        }
    }
}

const renderPopoverContent = (props: IProps) => {
    const NavigationTextButtonInitial = <NavigationTextButton
        testID='test-id-84a395bc-0001-cbf2-7f8f-c9e36d9c071f'
        title={'Отправить'}
        onExecute={props.performSend}
    />
    const NavigationTextButtonSuccess = <NavigationTextButton
        testID='test-id-a6453a0c-c982-4a20-9bf1-9e06621abe46'
        title={'Готово'}
        onExecute={props.performPopoverShareHide}
    />
    const NavigationTextButtonFailure = <NavigationTextButton
        testID='test-id-4e1e81eb-dbe5-4513-8908-a8677e97860c'
        title={'Повторить'}
        onExecute={props.performSend}
    />
    const getTheRightButton = (props: IProps) => {

        switch (true) {
            case (props.sendError != null) : {
                return NavigationTextButtonFailure
            }
            case (props.sendFetching || !(props.currentRecipientList.data.length > 0)) : {
                return <View testID='test-id-cefdec99-52ee-40bb-a6c4-518d96d62132'/>
            }
            case (props.sendSuccess) : {
                return NavigationTextButtonSuccess
            }
            default : {
                return NavigationTextButtonInitial
            }
        }

    }

    return (
        <View testID='test-id-04e0a121-24b7-4f3e-20cf-f1b4616d983b'
              style={Styles.main}>
            <SplitPanel id={Enums.SharePopoverNavigation.Main.toString()}
                        testID='test-id-04e0a121-24b7-4f3e-22cf-e1b4616d983f'>
                <ContentPanel testID='test-id-04e0a121-24b7-4f3e-20cf-e1b4616d983b'
                              style={{backgroundColor: 'white'}}>
                    <Page testID='test-id-04e0a121-2407-4f3e-20cf-e1b4616d983a' scrollEnabled={false}
                          content={mainContent(props)}>
                        <CenterPageHeader testID='test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f'>
                            <H2 testID='test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f'>{'Отправка файла'}</H2>
                        </CenterPageHeader>
                        <LeftPageHeader testID='test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f'>
                            { props.sendSuccess || props.sendFetching ?
                                <View testID='test-id-84a395bc-8001-cbf2-7f8f-c9e3609c071f'/> :
                                <NavigationTextButton testID='test-id-84a395bc-0000-cbf2-7f8f-c9e36d9c071f1'
                                                      title={'Отменить'}
                                                      onExecute={props.performPopoverShareHide}/> }
                        </LeftPageHeader>
                        <RightPageHeader testID='test-id-04e0a121-24b7-4f3e-17cf-e1b4616d983f'>
                            {// Если произошла ошибка подключения => не отображать кнопку "Отправить"
                                getTheRightButton(props)
                            }
                        </RightPageHeader>
                    </Page>
                    <Page testID='test-id-04e0a121-2407-4f3e-20cf-e1b4616a983a' scrollEnabled={false}
                          content={recipientsContent(props)}>
                        <CenterPageHeader testID='test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f'>
                            <H2 testID='test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f'>{'Адресаты'}</H2>
                        </CenterPageHeader>
                        <LeftPageHeader testID='test-id-04e0a121-24b7-4a3e-18cf-e1b4616d983f'>
                            <NavigationBackButton testID='test-id-84a395bc-0800-cbf2-7f8f-c9e36d9c071f'
                                                  title={true} onClick={() => props.navigateToPopoverShareBack()}/>
                        </LeftPageHeader>
                    </Page>
                    <Page testID='test-id-04e0a121-2407-4f3e-20cf-e1b4636d983a' scrollEnabled={false}
                          content={representationContent(props)}>
                        <CenterPageHeader testID='test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f'>
                            <H2 testID='test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f'>{'Представление'}</H2>
                        </CenterPageHeader>
                        <LeftPageHeader testID='test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f'>
                            <NavigationBackButton testID='test-id-84a395bc-0800-cbf2-7f8f-c9e36d9c071f'
                                                  title={true} onClick={() => props.navigateToPopoverShareBack()}/>
                        </LeftPageHeader>
                    </Page>
                    <Page testID='test-id-04e0a121-2407-4f3e-28cf-e1b4616d983a' scrollEnabled={false}
                          content={fileFormatContent(props)}>
                        <CenterPageHeader testID='test-id-04e0a121-24b7-4f3e-19cf-e1b4616d983f'>
                            <H2 testID='test-id-04e0a121-24b7-4f3e-16cf-e1b4616d983f'>{'Формат файла'}</H2>
                        </CenterPageHeader>
                        <LeftPageHeader testID='test-id-04e0a121-24b7-4f3e-18cf-e1b4616d983f'>
                            <NavigationBackButton testID='test-id-84a395bc-0000-cbf2-7f8f-c9e36d9c071f'
                                                  title={true} onClick={() => props.navigateToPopoverShareBack()}/>
                        </LeftPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getSharePanel = (props: IProps) => {
    let holderStyle = ''
    const itemHaveBreadcrumbs = props.currentCustomerManaged && props.currentCustomerManaged.hierarchy.length > 0

    if (props.fromOutside) {
        if(props.isDashboardExpandedMode === true) {
            holderStyle = Styles.invisibleLayoutFromOutside
        } else if (props.isDashboardExpandedMode === false && itemHaveBreadcrumbs === true) {
            holderStyle = Styles.breadcrumbsLayout
        } else if (props.isDashboardExpandedMode === false) {
            holderStyle = Styles.invisibleLayoutFromOutsideExt
        }
    }
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-44cf-e1b4616d983f' style={Styles.ModalForeground}>
            <View
                style={[Styles.invisibleLayout, holderStyle]}
                testID="test-id-17e4004d-3da7-75ff-2857-e828a3a71d54"
            >
                <PopoverTarget testID='test-id-515ab097-880e-80bb-cf24-8619f9dcbb0e' refName={'sharePopover'}>
                </PopoverTarget>
            </View>
            <View testID='test-id-b704de6c-569a-3b22-ebc7-aad1563849c2' style={Styles.roundBorderView}>
                <Popover
                    testID='test-id-b704de6c-880a-3b22-ebc7-aad1563849c2'
                    target={PopoverTarget.getRef('sharePopover')}
                    opened={props.isVisiblePopoverShare}
                    onOutsideTap={props.performPopoverShareHide}
                    type={PopoverType.WIDE}
                    position={[PopoverPosition.BOTTOM]}
                    style={props.isPopoverVisibleSearchScreen ? Styles.bigPopover : Styles.smallPopover }
                >
                    {renderPopoverContent(props)}
                </Popover>
            </View>
        </View>
    )
}

export interface IProps {
    inputSharePopoverSearch: string,
    isRepresentationVisible: boolean,
    isVisiblePopoverShare: boolean,
    currentFileFormat: Enums.FileFormat,
    currentCustomerManaged:CRMModels.CustomerManaged,
    currentRepresentation: Enums.Representation,
    currentRecipientList: ModelsScheduler.PersonList,
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    performPopoverShareShow: ModelsAppDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsAppDashboard.PERFORM_POPOVER_SHARE_HIDE,
    navigateToPopoverShareFormatScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    navigateToPopoverShareRepresentationScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareRecipientsScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareBack: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    inputSharePopoverSearchRefresh: ModelsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentFileFormatRefresh: ModelsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    inputCurrentRecipientListRefresh: ModelsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentRepresentationRefresh: ModelsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    foundPersonListClear: ModelsAppDashboard.FOUND_PERSON_LIST_CLEAR,
    performSend: ModelsAppDashboard.PERFORM_SEND,
    sendError: Error | null,
    sendSuccess: boolean,
    fromOutside: boolean,
    testID: string,
    isPopoverVisibleSearchScreen: boolean,
    isDashboardExpandedMode: boolean,
    sendFetching: boolean,
    supParameters: Models.SupParams
}

// to hide representation section of popover, set isRepresentationVisible flag to false
const ShareDataView: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (



    getSharePanel(props)



)
export default ShareDataView
