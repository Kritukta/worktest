/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    Button,
    Col,
    ContentPanel,
    Grid,
    H1,
    Icon,
    IconType,
    TableRow,
    TableCell,
    ButtonType,
    Label,
    LeftPageHeader,
    CenterPageHeader,
    H2,
    NavigationBackButton,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    Row,
    SplitPanel,
    Text,
    View,
} from 'ufs-mobile-platform'
import { Models } from 'mrmkmcib-crm'
import { Enums } from '../../Enums'

import * as ModelsAppCRM from '../../models/ModelsAppCRM'
import * as ModelsCustomer from '../../models/ModelsCustomer'
import * as ModelsCustomerEditor from '../../models/ModelsCustomerEditor'
import * as ModelsProductList from '../../models/ModelsProductList'

import Error from '../../models/Error'

import * as Utils from '../../common/Util'

import Styles from './styles/CustomerStyles'

import PopoverTarget from '../../modules/PopoverTarget'
import ContainerEmployee from '../../containers/ContainerEmployee'
import { IconView } from 'mrmkmcib-ui'

const isHolding = (props: IProps): boolean => {
    if (props.customer.organizationType && props.customer.organizationType.code == 'Holding') {
        return true
    }
    return false
}

const troubleGroupRow = (text: string, index: number) => (
    <View key={`Criterion_${index}`} testID={'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab8c-view-customer' + index}
          style={Styles.TroubleGroupRow}><Text testID={'test-id-380ff11b-34a3-56f6-a890-ea9eab88ab8c-customer' + index}
                                               style={Styles.GreyLabelValueTroubleList}>{text}</Text></View>
)

const renderTroubleGroupPopoverContent = (props: IProps): React.ReactElement<View> => {
    return (<View>
        {props.customer && props.customer.troubleCriteriaList && props.customer.troubleCriteriaList.data
            ? props.customer.troubleCriteriaList.data.map((item, index) => troubleGroupRow(item.criterion, index)) : null}

    </View>)
}

const getDataGrid = (props: IProps) => {

    return (
        <View testID='test-id-a6dc811f-f088-7738-1d93-45ee500eb198' style={{ flex: 1 }}>
            <Grid testID='test-id-d274e8e8-f7c5-850e-4432-862b85821d77'>
                <Row testID='test-id-fa7f2fd6-f8a2-4048-8a64-3255f30a84f7'>
                    <Col testID='test-id-34ec9e8d-75b1-c451-dabe-027da022f3ea' xs={12}><View
                        testID='test-id-34ec9e8d-75b1-c451-dabe-027da022f3ea' style={Styles.HorisontalLine} /></Col>
                </Row>
                <Row testID='test-id-278af395-a317-df75-011c-5c4cbbf63377'>
                    <Col testID='test-id-1de8126f-6784-1a6c-b09c-32f5b5a08bdf' xs={6}>
                        <View testID='test-id-1f5dfb95-015e-2fb4-71a7-a1ea12f2e509' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Краткое наименование'} block={false} header={''} >
                                <Text testID='test-id-777a4d54-d019-ab04-b8be-d21f0ae250b0'
                                    style={Styles.GreyLabelValue}>{props.customer.shortName || 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-44a49dfe-121f-8bd8-3c6e-1fb7147935e8' xs={6}>
                        <View testID='test-id-b65257f4-5553-ad14-fe11-a290e1b88e6d' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Отрасль'} block={false} header={''} >
                                <Text testID='test-id-f2ffe909-bc86-9e63-f2a8-157afab10d0c'
                                    style={Styles.GreyLabelValue}>{props.customer.sector && props.customer.sector.value
                                        && props.customer.sector.value != '' ?
                                        props.customer.sector.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>
                <Row testID='test-id-d88840bc-e86d-fecd-67e3-7044e9d93ac3'>
                    <Col testID='test-id-92a7cc21-9483-29e4-18dd-e29224b3d166' xs={6}>
                        <View testID='test-id-356cdef2-3358-2a87-2ced-276a602c3669' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Сотрудничество'} block={false} header={''} >
                                <Text testID='test-id-2558ce3a-a144-5316-8b71-f422b9119a94'
                                    style={Styles.GreyLabelValue}>{props.customer.partnership && props.customer.partnership.value
                                        && props.customer.partnership.value != '' ?
                                        props.customer.partnership.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-652b6438-fe12-24e0-b439-b540efb8c3b4' xs={6}>
                        <View testID='test-id-1490880a-d21d-412e-b960-183493bc31bb' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Вид деятельности'} block={false} header={''} >
                                <Text testID='test-id-62cd2cd2-ef9d-cc5d-4832-94b091010477'
                                    style={Styles.GreyLabelValue}>{props.customer.kindOfIndustry && props.customer.kindOfIndustry.value
                                        && props.customer.kindOfIndustry.value != '' ?
                                        props.customer.kindOfIndustry.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>
                <Row testID='test-id-8bac962a-c04a-6b19-fad0-51d1e51f6428'>
                    <Col testID='test-id-94402772-e98f-42f1-4b98-82962f138a49' xs={6}>
                        <View testID='test-id-65aecf81-d87f-0584-5768-6f1dc1d4965d' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Сегмент'} block={false} header={''} >
                                <Text testID='test-id-ee793466-6fd9-4196-103a-89c26bdeb988'
                                    style={Styles.GreyLabelValue}>{props.customer.segment && props.customer.segment.value
                                        && props.customer.segment.value != '' ?
                                        props.customer.segment.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-6b7988f2-9eb7-bcc8-7d8b-7fa333030a45' xs={6}>
                        <View testID='test-id-68a5a975-aea3-d3b0-146e-48e48d07921b' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Статус карточки'} block={false} header={''} >
                                <Text testID='test-id-c38ed622-aa29-bca4-4aab-042d15fe8ded'
                                    style={Styles.GreyLabelValue}>{props.customer.status && props.customer.status.value
                                        && props.customer.status.value != '' ?
                                        props.customer.status.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>

                <Row testID='test-id-77c401db-739c-ea18-1051-67c7dfe71822'>
                    <Col testID='test-id-799e2bcd-371d-a5c2-e8c6-d3a378476179' xs={6}>
                        <View testID='test-id-d3c74692-c3cc-ccf6-4fa5-df2a73d83c5c' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Категория'} block={false} header={''} >
                                <Text testID='test-id-fa05be88-261a-5882-0e48-e201f52a0d8d'
                                    style={Styles.GreyLabelValue}>{props.customer.category && props.customer.category.value
                                        && props.customer.category.value != '' ?
                                        props.customer.category.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-c187c990-a8d8-886a-7408-8183a6c0b33f' xs={6}>
                        <View
                            testID='test-id-547df3d8-f70a-7b1e-f6f0-ae48434f05db'
                            style={Styles.CollWrapper}>
                            <View
                                testID='test-id-9e54618d-292f-1670-4118-f8146fe454c9'
                                style={Styles.InlineWrapper}>
                                <View
                                    testID='test-id-630c683e-66f7-beb2-837a-bbf8076cd40b'
                                    style={Styles.RowWithInfoButton}>
                                    <Label
                                        testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0'
                                        text={'КМ'}
                                        block={false}
                                        header={''} >
                                        <Text
                                            testID='test-id-eef038b6-00b2-c423-2403-ae8de2b2991a'
                                            style={Styles.GreyLabelValue} >
                                            {
                                                props.customer.curator &&
                                                props.customer.curator.fullName != '' ?
                                                    props.customer.curator.fullName :
                                                    'нет данных'
                                            }
                                        </Text>
                                    </Label>
                                    <PopoverTarget
                                        testID='test-id-3f72904c-fe0e-52dd-444d-dbsd63dee9f8'
                                        refName={'curatorPopover1'} >
                                        <View
                                            testID='test-id-b249512c-02f6-20a8-fcfb-218d3f23b715'
                                            style={Styles.InfoIconStyle}>
                                            {
                                                props.customer.curator &&
                                                props.customer.curator.fullName != '' ?
                                                    <Button
                                                        testID={'test-id-a505394d-cb4f-46f4-a98e-e9c25b69c9ae'}
                                                        onExecute={props.performPopoverCuratorShow}>
                                                        <Icon
                                                            testID={'test-id-bd9a9df4-a8c7-4663-97e6-059e95397cad'}
                                                            type={IconType.MrmInfo}/>
                                                    </Button> :
                                                    null
                                            }
                                        </View>
                                    </PopoverTarget>
                                </View>
                            </View>
                        </View>
                        <Popover testID='test-id-f9399123-e32e-fc3f-1a58-23b227e55f83'
                            target={PopoverTarget.getRef('curatorPopover1')}
                            opened={props.isVisiblePopoverCurator}
                            onOutsideTap={props.performPopoverCuratorHide}
                            type={PopoverType.WIDE}
                            style={{ height: 600, width: 375 }}
                            position={[PopoverPosition.LEFT]}
                        >
                            <SplitPanel testID='test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924'
                                id={'mainTabCuratorDetailView'}>
                                <ContentPanel testID='test-id-c2acf614-0097-d72f-73c3-9d6836a90252'
                                    style={{ backgroundColor: '#fff' }}>
                                    <Page testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4' scrollEnabled={false}
                                        content={<ContainerEmployee
                                            testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4' />}>
                                        <LeftPageHeader testID='test-id-e136773b-3284-2a76-a8fc-01673fb8624c'>
                                            <NavigationBackButton testID='test-id-84a395bc-1b97-cbf2-7f8f-c9e36d9c071f'
                                                title={false}
                                                onClick={props.performPopoverCuratorHide} />
                                        </LeftPageHeader>
                                    </Page>
                                </ContentPanel>
                            </SplitPanel>
                        </Popover>
                    </Col>
                </Row>

                {!isHolding(props) ? <Row testID='test-id-82127d21-1062-b96c-fcc7-90214992c268'>
                    <Col testID='test-id-71519363-3df5-ced4-dc1c-09f0c40aef2b' xs={6}>
                        <View testID='test-id-eea543ef-ae46-cc84-09db-e41e8b7d559c' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'ИНН/КИО'} block={false} header={''} >
                                <Text testID='test-id-326fdda5-8a47-14dd-6eba-7fb23d57c00b'
                                    style={Styles.GreyLabelValue}>{props.customer.inn || 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-ebfc1f27-9880-6ff0-78ad-46b3f46a206e' xs={6}>
                        <View testID='test-id-bd90521f-ee8a-4fa9-585f-200b032f9a36' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'КПП'} block={false} header={''} >
                                <Text testID='test-id-bff23c31-df28-6684-2021-97b0608f16e1'
                                    style={Styles.GreyLabelValue}>{props.customer.kpp || 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>
                    : null}

                <Row testID='test-id-6544c358-ff1d-bf50-7168-26e02aac4e3c'>
                    <Col testID='test-id-36281975-982a-7673-f3ba-6871de127a78' xs={6}>
                        <View testID='test-id-82a68b8a-a802-8d2b-8d7a-3bbc28e7c2c6' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Приоритет'} block={false} header={''} >
                                <Text testID='test-id-040dbf52-effc-07a5-3196-49270d49cd4c'
                                    style={Styles.GreyLabelValue}>{props.customer.priority && props.customer.priority.value && props.customer.priority.value != '' ?
                                        props.customer.priority.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-a57b446b-9872-b31f-85ff-f971043b994c' xs={6}>
                        <View testID='test-id-60bee75a-6382-99ee-7e21-934963dce0a0' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Моя роль'} block={false} header={''} >
                                <Text testID='test-id-8ebedb26-1e0d-b926-09b7-77ee70fe524c'
                                    style={Styles.GreyLabelValue}>{props.customer.role && props.customer.role.value && props.customer.role.value != '' ?
                                        props.customer.role.value : 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>


                <Row testID='test-id-e70e6ced-57ff-abec-cd1b-13aabe0f713e'>
                    <Col testID='test-id-b99cab84-5fce-ee8a-0ddd-b8e6bb8a38ef' xs={6}>
                        <View testID='test-id-2d8ba96e-3636-fd95-3efc-b7c599c6d4ce' style={Styles.CollWrapper}>
                            <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0' text={'Страна регистрации'} block={false} header={''} >
                                <Text testID='test-id-aa163d43-9f8c-292a-e250-06778d7b98b8'
                                    style={Styles.GreyLabelValue}>{props.customer.registrationCountry || 'нет данных'}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-f16b9734-6dc5-f0c5-5b7f-f053c7a7e208' xs={6}>
                        <View
                            testID='test-id-afe2b301-1c0c-f8d0-c474-64842da56908'
                            style={Styles.CollWrapper}>
                            <View
                                testID='test-id-503cf5b8-3a7f-a528-cc29-777cbef21b1d'
                                style={Styles.InlineWrapper}>
                                <View
                                    testID='test-id-8be25366-7667-ec99-d85d-2da069116a73'
                                    style={Styles.RowWithInfoButton}>
                                    <Label
                                        testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0'
                                        text={'ВКО'}
                                        block={false}
                                        header={''} >
                                        <Text
                                            testID='test-id-319b9643-3a81-cc30-5b31-4604e2fcf2e4'
                                            style={Styles.GreyLabelValue}>
                                            {
                                                props.customer.holder &&
                                                props.customer.holder.fullName != '' ?
                                                    props.customer.holder.fullName :
                                                    'нет данных'
                                            }
                                        </Text>
                                    </Label>
                                    <PopoverTarget
                                        testID='test-id-3f72904c-fe0e-52dd-444d-dbd563dee9f8'
                                        refName={'holderPopover1'} >
                                        <View
                                            testID='test-id-6d870182-4210-a5e7-dd0a-4903214a9480'
                                            style={Styles.InfoIconStyle}>
                                            {
                                                props.customer.holder &&
                                                props.customer.holder.fullName != '' ?
                                                    <Button
                                                        testID={'test-id-bbebc638-b01e-4b62-9296-ed286b9e5a4b'}
                                                        onExecute={props.performPopoverHolderShow}>
                                                        <Icon
                                                            testID={'test-id-42356ab9-aa23-4c0b-9ddc-497c882c6b0d'}
                                                            type={IconType.MrmInfo}/>
                                                    </Button> :
                                                    null
                                            }
                                        </View>
                                    </PopoverTarget>
                                </View>
                            </View>
                        </View>
                        <Popover testID='test-id-bf30ede5-e97b-c60c-809f-bc6988f4373d'
                            target={PopoverTarget.getRef('holderPopover1')}
                            opened={props.isVisiblePopoverHolder}
                            onOutsideTap={props.performPopoverHolderHide}
                            type={PopoverType.WIDE}
                            style={{ height: 600, width: 375 }}
                            position={[PopoverPosition.LEFT]}>
                            <SplitPanel testID='test-id-bc0c5e20-37af-3614-61e8-69ba54d8024b'
                                id={'mainTabHolderDetailView'}>
                                <ContentPanel testID='test-id-358fedef-dad5-ccb5-4332-cfe7c1c5e59e'
                                    style={{ backgroundColor: '#fff' }}>
                                    <Page testID='test-id-c58042f7-ce90-6a68-2665-71c702d3764c' scrollEnabled={false}
                                        content={<ContainerEmployee
                                            testID='test-id-c58042f7-ce90-6a68-2665-71c702d3764c' />}>
                                        <LeftPageHeader testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad'>
                                            <NavigationBackButton testID='test-id-f243d79e-4ebb-76d1-c267-ce9c43494404'
                                                title={false}
                                                onClick={props.performPopoverHolderHide} />
                                        </LeftPageHeader>
                                    </Page>
                                </ContentPanel>
                            </SplitPanel>
                        </Popover>
                    </Col>
                </Row>
                {props.customer.organizationType && props.customer.organizationType.code == 'Account' ?
                    <Row testID='test-id-e70e6ced-57ff-abec-cd1b-13aabe0f713eAccount'>
                        <Col testID='test-id-b99cab84-5fce-ee8a-0ddd-b8e6bb8a38efAccount' xs={6}>
                            <View testID='test-id-2d8ba96e-3636-fd95-3efc-b7c599c6d4ceAccount' style={Styles.CollWrapper}>
                                <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0Account' text={'ОПФ'} block={false} header={''} >
                                    <Text testID='test-id-aa163d43-9f8c-292a-e250-06778d7b98b8Account'
                                        style={Styles.GreyLabelValue}>{props.customer.legalForm && props.customer.legalForm.value && props.customer.legalForm.value != '' ? props.customer.legalForm.value : 'нет данных'}</Text>
                                </Label>
                            </View>
                        </Col>
                    </Row> : null}
                {!isHolding(props) ? <Row testID='test-id-265ca2bb-3ea2-4cd7-b249-f7abc7804422'>
                    <Col testID='test-id-ca3e7699-c433-5589-9844-bed22f9e2022-customer' xs={12}>
                        <View testID='test-id-982e7a09-b5c0-110c-3801-6f9ab2ab1715-customer'
                              style={Styles.CollWrapperNoPadding}>
                            <View testID='test-id-fd53e664-5187-7e13-eaf3-512c4eeb68b1-customer'
                                  style={Styles.InlineWrapper}>
                                {props.customer.troubleGroup.code ? getProblemGroupCircle(props) : null}
                                <PopoverTarget testID='test-id-3f72904c-fe0e-52ad-444d-dbd563dee9f8-problem-customer'
                                               refName={'problemGroupPopoverTarget-customer'}>
                                    <View testID='test-id-6d870182-4210-a5e7-680a-4903214a9480-problem-customer'>
                                        {props.customer.troubleCriteriaList && props.customer.troubleCriteriaList.data && props.customer.troubleCriteriaList.data.length > 0 ?
                                            <Button testID='test-id-c5869ea1-aeca-22ef-d383-9670999b6bd1-problem-customer'
                                                    type={ButtonType.TEXT}
                                                    onExecute={() => {
                                                        if (props.customer.troubleCriteriaList && props.customer.troubleCriteriaList.data && props.customer.troubleCriteriaList.data.length > 0) {
                                                            props.performPopoverProblemListShow()
                                                        }
                                                    }}
                                            >
                                                <Text testID='test-id-fdc97090-a807-470f-0249-55b2b978c66d-customer'
                                                      style={[Styles.GreyLabel, Styles.flex]}>{'Утвержденная группа проблемности    '}</Text>
                                            </Button>
                                            :
                                            <Text testID='test-id-fdc97090-a807-470f-0249-55b2b978c66d-customer'
                                                  style={{ fontSize: 14.8, color: 'grey'}}>{'Утвержденная группа проблемности    '}</Text>
                                        }
                                    </View>
                                </PopoverTarget>
                            </View>
                        </View>
                        <Popover testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad-probPopover-customer'
                                 target={PopoverTarget.getRef('problemGroupPopoverTarget-customer')}
                                 opened={props.isVisiblePopoverProblemList}
                                 onOutsideTap={props.performPopoverProblemListHide}
                                 type={PopoverType.WIDE}
                                 style={{ height: 200 }}
                                 position={[PopoverPosition.TOP]}
                        >
                            <SplitPanel testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad-probsplitpanel-customer'
                                        id="problemGroupView">
                                <ContentPanel testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad-probcontentpanel-customer'
                                              style={{ backgroundColor: '#fff' }}>
                                    <Page testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad-probpage-customer'
                                          scrollEnabled={true} content={renderTroubleGroupPopoverContent(props)}>
                                        <CenterPageHeader testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad'><H2
                                            testID='test-id-967984af-e951-d708-2779-3a892e5fc0ad-problenh2-customer'>Критерий
                                            проблемности</H2></CenterPageHeader>
                                    </Page>
                                </ContentPanel>
                            </SplitPanel>
                        </Popover>
                    </Col>
                </Row> : null}
                {!isHolding(props) && [
                    <Row key={1} testID='test-id-a363a72c-264c-233e-66f3-3caf235afa7b'>
                        <Col testID='test-id-5f6dfba7-a8b3-7ede-b8e0-70135003a8b4' xs={12}><View
                            testID='test-id-5f6dfba7-a8b3-7ede-b8e0-70135003a8b4' style={Styles.HorisontalLine} /></Col>
                    </Row>,
                    <Row key={2} testID='test-id-5a388864-a187-fd2b-cf25-27a0dbeed9b2'>
                        <Col testID='test-id-ae15b75e-24fa-e18c-ae69-7cdf6e0e188c' xs={12}>
                            <View testID='test-id-6ada8427-8c0a-55e9-6d8d-4e4c2d91250b' style={Styles.InlineWrapper}>
                                <View testID='test-id-16d7dd30-1b31-0d17-6dfd-c6184c02ff29' style={Styles.flex}>
                                    <Label testID='test-id-bf1fffe7-4dce-645a-2c69-bbaa51a86db0'
                                        text={"ГСЗ"}
                                        block={false}
                                        header={''}
                                    >
                                        <Text
                                            testID='test-id-b663df28-5ed5-d523-9fa2-45523fb8de60'>{props.customer.gsz && props.customer.gsz.name
                                                && props.customer.gsz.name != '' ? props.customer.gsz.name : 'нет данных'}</Text>
                                    </Label>
                                </View>
                                {props.customer.gsz && props.customer.gsz.id != '' ?
									<View
										testID='test-id-b249512c-02f6-20a8-fcfb-218d3f23b715'
										style={Styles.InfoIconStyle}>
												<Button
													testID={'test-id-a505394d-cb4f-46f4-a98e-e9c25b69c9ae'}
													onExecute={(props.customer.gsz && props.customer.gsz.id != '') ? props.performPopoverCuratorShow : undefined}>
													<Icon
														testID={'test-id-bd9a9df4-a8c7-4663-97e6-059e95397cad'}
														type={IconType.MrmInfo}/>
												</Button>
									</View>
                                    : null}
                            </View>
                        </Col>
                    </Row>
                ]}
                <Row testID='test-id-8009b0e8-5996-2c30-7560-88bd8222f725'>
                    <Col testID='test-id-33bb4513-5478-d7fe-a800-522bda44eb15' xs={12}><View
                        testID='test-id-33bb4513-5478-d7fe-a800-5922da44eb15' style={Styles.HorisontalLine} /></Col>
                </Row>

                <Row testID='test-id-f1e0a59c-c0b6-e49c-0f87-accac9634f0e'>
                    <Col testID='test-id-323b2260-266b-7406-7f76-23dbe6029240' xs={12}>
                        <View testID='test-id-d2bea0c4-dd77-859f-d607-480e72720261' style={Styles.InlineWrapper}>
                            <View testID='test-id-89f7f64c-fe9b-0ad0-92d8-6900d83c6332' style={Styles.flex}>
                                <Button testID='test-id-c5869ea1-aeca-22ef-d383-9670999b6bd1-problem-22' type={ButtonType.TEXT} onExecute={props.navigateToCustomerActivityAccessScreen}>
                                    <Text testID='test-id-81b98e46-8764-e044-ddcd-df20b67bd041' style={Styles.BlueTitle}>{'Запросить доступ к карточке'}</Text>
                                </Button>
                            </View>
                            <Button testID='test-id-4497c081-5155-4472-9976-8643d31314bb'
                                onExecute={props.navigateToCustomerActivityAccessScreen}>
                                <Icon testID='test-id-286ec0bd-8654-4e18-b3b9-9b8bdd7b5b9b' type={IconType.MrmLink} />
                            </Button>
                        </View>
                    </Col>
                </Row>

                <Row testID='test-id-a3a50dca-9875-e2a5-6d2c-eae1d81d18f7'>
                    <Col testID='test-id-6085328f-601d-5c10-7657-7eb3237bbc50' xs={12}><View
                        testID='test-id-6085328f-601d-5c10-7657-7eb3237bbc50' style={Styles.HorisontalLine} /></Col>
                </Row>
            </Grid>
        </View>
    )
}

const getProblemGroupCircle = (props: IProps) => {
    return (<View testID='test-id-8fecf91c-3b7f-cca1-c870-8b37d405a22c'
        style={[Styles.ProblemCircle, { backgroundColor: Utils.getProblemGroupCircleColor(props.customer.troubleGroup.code) }]} />)
}

const customerRow = (item: Models.Customer, props: IProps): React.ReactElement<View> => {
    return (
        <TableRow testID='test-id-025a11b6-302a-1961-a53d-0ecbaa540222' key={item.id} onClick={() => {
            props.performCustomerOpen(item.id)
        }}>
            <TableCell testID='test-id-100591ea-5455-eb96-a5d5-17b0d785cf22'>
                <View testID='test-id-6031f8ca-f53d-9837-5a0a-caa8c241ae22' style={Styles.SearchResultRowWrapper}>
                    <View testID='test-id-74365e98-5412-1314-1a94-476d17e1d722' style={Styles.flex}>
                        <View testID='test-id-a1a3de02-de7d-cab3-32a4-fddef30e3e22' style={Styles.TopRow}>
                            {item.role.value ?
                                <View testID='test-id-66093ca9-d585-02a0-9a78-8d0d75eefd22' style={Styles.OrangeLabel}>
                                    <Text testID='test-id-13ec613a-77ce-8a4e-3c09-88b4711fd622'
                                        style={Styles.OrangeLabelText}>{Utils.getRoleString(item.role.value)}</Text>
                                </View>
                                : null}
                            <Text testID='test-id-950b37d2-221b-1f32-740c-5575f93c5d22'
                                style={Styles.OrgType}>{item.organizationType.value}</Text>
                        </View>
                        <View testID='test-id-c6311313-dfb1-985b-ac4d-fef97088d322'>
                            <Text testID='test-id-8931efc7-482a-62c2-e263-5e95f0727622'
                                style={Styles.Name}>{item.name || item.shortName}</Text>
                        </View>
                    </View>
                    <Icon testID='test-id-23394986-a2cb-d9d3-75a7-52199098a622' disabled type={IconType.MrmLink} />
                </View>
            </TableCell>
        </TableRow>
    )
}

const fixCustomerNameLength = (name:string):string => {
    const maxLength = 200

    if (name && name.length > maxLength) {
        return `${name.slice(0, maxLength)}...`
    }
    
    return name
}

/*
 * UI stateless functional component "Customer" used in "Customer" screen. Component render not managed customer to current user info.
 */

export interface IProps {

    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    navigateToCustomerActivityAccessScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN,
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN,
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    customer: Models.Customer,
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN,

    currentPopoverLimitItem: Enums.OldLimitItem,
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN,
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK,
    isVisibleModalCustomerEditor: boolean,
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    isVisiblePopoverLimit: boolean,
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW,
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE,
    performChangeTab: ModelsCustomer.PERFORM_CHANGE_TAB,
    performPopoverHolderShow: ModelsCustomer.PERFORM_POPOVER_HOLDER_SHOW,
    performPopoverHolderHide: ModelsCustomer.PERFORM_POPOVER_HOLDER_HIDE,
    performPopoverCuratorShow: ModelsCustomer.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsCustomer.PERFORM_POPOVER_CURATOR_HIDE,
    performPopoverOccasionListShow: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW,
    performPopoverOccasionListHide: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE,
    performPopoverNoteListShow: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW,
    performPopoverNoteListHide: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE,
    performPopoverProblemListShow: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW,
    performPopoverProblemListHide: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE,
    performPopoverOwnerShow: ModelsCustomer.PERFORM_POPOVER_OWNER_SHOW,
    performPopoverOwnerHide: ModelsCustomer.PERFORM_POPOVER_OWNER_HIDE,
    performNavigateToOwnerScreen: ModelsCustomer.PERFORM_NAVIGATE_TO_OWNER_SCREEN,
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW,
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD,
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH,
    performInputProductListAgreementStatus: ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS,

    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    currentCustomerId: string,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isVisiblePopoverHolder: boolean,
    isVisiblePopoverCurator: boolean,
    isVisiblePopoverOccasionList: boolean,
    isVisiblePopoverNoteList: boolean,
    isVisiblePopoverProblemList: boolean,
    isVisiblePopoverOwner: boolean,
    isVisibleModalActivityEditor: boolean,
    isVisibleModalPlanner: boolean,
    isVisibleModalEmailSend: boolean,
    isVisibleModalAssociateSearch: boolean,
    inputSearchAffiliateList: string,
    isSearchModeAffiliateList: boolean,
    affiliateSearchList: Models.CustomerList,
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST,
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH,
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE,
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE,
    currentTab: Enums.CustomerManagedTab,
    limitOld: Models.LimitOld,
    limitOldFetching: boolean,
    limitOldError: Error | null,
    limitOldCachedDate: Date | null,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,

    // START CREDIT default state
    creditActiveProductList: Models.CreditProductList,
    creditActiveProductListFetching: boolean,
    creditActiveProductListUpdating: boolean,
    creditActiveProductListError: Error | null,
    creditActiveProductListCachedDate: Date | null,

    creditCloseProductList: Models.CreditProductList,
    creditCloseProductListFetching: boolean,
    creditCloseProductListError: Error | null,
    creditCloseProductListCachedDate: Date | null,
    //END CREDIT default state


    // START DEPOSIT default state
    depositActiveProductList: Models.DepositProductList,
    depositActiveProductListFetching: boolean,
    depositActiveProductListUpdating: boolean,
    depositActiveProductListError: Error | null,
    depositActiveProductListCachedDate: Date | null,

    depositCloseProductList: Models.DepositProductList,
    depositCloseProductListFetching: boolean,
    depositCloseProductListError: Error | null,
    depositCloseProductListCachedDate: Date | null,
    //END DEPOSIT default state

    // START SETTLEMENT_AGREEMENT model product list
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListUpdating: boolean,
    settlementAgreementActiveProductListError: Error | null,
    settlementAgreementActiveProductListCachedDate: Date | null,

    settlementAgreementCloseProductList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListUpdating: boolean,
    settlementAgreementCloseProductListError: Error | null,
    settlementAgreementCloseProductListCachedDate: Date | null,
    // END SETTLEMENT_AGREEMENT model product list

    // START CORPORATE_CARD model product list
    corporateCardActiveProductList: Models.CorporateCardProductList,
    corporateCardActiveProductListFetching: boolean,
    corporateCardActiveProductListUpdating: boolean,
    corporateCardActiveProductListError: Error | null,
    corporateCardActiveProductListCachedDate: Date | null,

    corporateCardCloseProductList: Models.CorporateCardProductList,
    corporateCardCloseProductListFetching: boolean,
    corporateCardCloseProductListUpdating: boolean,
    corporateCardCloseProductListError: Error | null,
    corporateCardCloseProductListCachedDate: Date | null,
    // END CORPORATE_CARD model product list

    // START ENCASHMENT_CONTRACT model product list
    encashmentContractActiveProductList: Models.EncashmentContractProductList,
    encashmentContractActiveProductListFetching: boolean,
    encashmentContractActiveProductListUpdating: boolean,
    encashmentContractActiveProductListError: Error | null,
    encashmentContractActiveProductListCachedDate: Date | null,

    encashmentContractCloseProductList: Models.EncashmentContractProductList,
    encashmentContractCloseProductListFetching: boolean,
    encashmentContractCloseProductListUpdating: boolean,
    encashmentContractCloseProductListError: Error | null,
    encashmentContractCloseProductListCachedDate: Date | null,
    // END ENCASHMENT_CONTRACT model product list

    // START ACQUIRING model product list
    acquiringActiveProductList: Models.AcquiringProductList,
    acquiringActiveProductListFetching: boolean,
    acquiringActiveProductListUpdating: boolean,
    acquiringActiveProductListError: Error | null,
    acquiringActiveProductListCachedDate: Date | null,

    acquiringCloseProductList: Models.AcquiringProductList,
    acquiringCloseProductListFetching: boolean,
    acquiringCloseProductListUpdating: boolean,
    acquiringCloseProductListError: Error | null,
    acquiringCloseProductListCachedDate: Date | null,
    // END ACQUIRING model product list

    // START DBO model product list
    dboActiveProductList: Models.DboProductList,
    dboActiveProductListFetching: boolean,
    dboActiveProductListUpdating: boolean,
    dboActiveProductListError: Error | null,
    dboActiveProductListCachedDate: Date | null,

    dboCloseProductList: Models.DboProductList,
    dboCloseProductListFetching: boolean,
    dboCloseProductListUpdating: boolean,
    dboCloseProductListError: Error | null,
    dboCloseProductListCachedDate: Date | null,
    // END DBO model product list

    // START SALARY model product list
    salaryActiveProductList: Models.SalaryProductList,
    salaryActiveProductListFetching: boolean,
    salaryActiveProductListUpdating: boolean,
    salaryActiveProductListError: Error | null,
    salaryActiveProductListCachedDate: Date | null,

    salaryCloseProductList: Models.SalaryProductList,
    salaryCloseProductListFetching: boolean,
    salaryCloseProductListUpdating: boolean,
    salaryCloseProductListError: Error | null,
    salaryCloseProductListCachedDate: Date | null,
    // END SALARY model product list

    // START SALARY model product list
    udboActiveProductList: Models.UdboProductList,
    udboActiveProductListFetching: boolean,
    udboActiveProductListUpdating: boolean,
    udboActiveProductListError: Error | null,
    udboActiveProductListCachedDate: Date | null,

    udboCloseProductList: Models.UdboProductList,
    udboCloseProductListFetching: boolean,
    udboCloseProductListUpdating: boolean,
    udboCloseProductListError: Error | null,
    udboCloseProductListCachedDate: Date | null,
    // END SALARY model product list


    legalInfoProductList: Models.LegalInfoProductList,
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,


    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    currentOwner: Models.Owner,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    testID: string
}

const Customer: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-Customer'}>
        <View testID='test-id-64a56d16-b068-bb93-05fa-e5d601262d76' style={Styles.Header}>
            <View testID='test-id-046937db-fe8e-01c0-28ec-55b3bf971f68' style={[Styles.InlineWrapper, Styles.rightPadding20]}>
                <View testID='test-id-4891fdbb-c491-b05b-1485-dd70ed87cef6' style={Styles.Lock}>
                    <IconView testID='test-id-046937db-fe8e-01c0-28ec-55b3bf971f68-icon' type={'lock'} disabled={false}/>
                </View>
                <H1 testID='test-id-0327dec5-e9cb-2e56-b9a2-8435ef7357ad'>{fixCustomerNameLength(props.customer.name)}</H1>
            </View>
            <Text testID='test-id-47dbfb79-02a7-b5fe-ea7b-10c488436910'
                style={Styles.OrganizationType}>{props.customer.organizationType.value}</Text>
        </View>

        <Page testID='test-id-00ea2144-7e3f-1601-db2e-f226db7e29c4' scrollEnabled={true} content={getDataGrid(props)}>
        </Page>
    </View>
)

export default Customer
