/*
 *@author Voronov S.I.
 */

import React from 'react'

import {View, 
    Label, 
    Text, 
    Grid, 
    Col, 
    Row, 
    DateInput, 
    TableColumn, 
    Table, 
    TableBody, 
    TableColumnAlignment,
    TableRow,
    TableCell,
    TableHead,
    PopoverPosition,
    Checkbox,
    DateInputTypes,
} from 'ufs-mobile-platform'
import * as Utils from '../common/Util'
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import {Models} from 'mrmkmcib-crm'
import {Models as ModelsApp, RefreshBar, LoaderWithText} from 'mrmkmcib-app'
import Styles from './styles/ViewProductCovenantListStyles'
const PLACEHOLDER = 'Нет данных'
import {LabelWithPopover} from "mrmkmcib-app"
import {InfoButton} from "mrmkmcib-ui"
import {GridRowHorizontalRule} from './ViewProductCredit'

 
const getRefreshBar = (props: IProps): React.ReactElement<View>  => (
    <View testID='test-id-a5f92ddc-3320-11e8-b467-0ed5f89f718b'
          style = {Styles.refreshBarView}>
            <RefreshBar 
            testID='test-id-covenant-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
            title = 'Обновить'
            performRefresh={()=>props.performCallGetProductCovenantListCacheReset()}
            date={props.productCachedDateCovenantList}/>
    </View>
)
const getLoader = (props: IProps): React.ReactElement<View> => (
    <LoaderWithText text= {'Загрузка данных'}
                    testID='test-id-86b2305c-28ff-11e8-b467-0ed5f89f718b'/>
)
const getProductCovenantListTable = (props: IProps): React.ReactElement<Table> => (
    <Table style = {Styles.tableCovenantList}
           testID="test-id-132005a2-196d-11e8-accf-0ed5f89f718b">
        <TableHead testID="test-id-190c1450-196e-11e8-accf-0ed5f89f718b">
            <TableColumn
                testID='test-id-11b546e0-196e-11e8-accf-0ed5f89f718b'
                align={TableColumnAlignment.LEFT}
                width={'130'} >
                <Text 
                    testID='test-id-0db554ea-196e-11e8-accf-0ed5f89f718b' >
                    {'Пункт договора'}
                </Text>
            </TableColumn>
            <TableColumn
                testID='test-id-09aa3c26-196e-11e8-accf-0ed5f89f718b'
                align={TableColumnAlignment.LEFT}
                width={'445'} >
                <Text 
                    testID='test-id-05ffda22-196e-11e8-accf-0ed5f89f718b' >
                    {'Суть условий'}
                </Text>
            </TableColumn>
            <TableColumn
                testID='test-id-02b9d002-196e-11e8-accf-0ed5f89f718b'
                align={TableColumnAlignment.LEFT}
                width={'160'} >
                <Text
                    testID='test-id-ff808e8a-196d-11e8-accf-0ed5f89f718b' >
                    {'Периодичность\nБлижайшая дата'}
                </Text>
            </TableColumn>
            <TableColumn
                testID='test-id-fbbefd2c-196d-11e8-accf-0ed5f89f718b'
                align={TableColumnAlignment.LEFT}>
                <Text
                    testID='test-id-f6f62234-196d-11e8-accf-0ed5f89f718b' >
                    {'Статус\nДата статуса'}
                </Text>
            </TableColumn>
        </TableHead>
        <TableBody testID="test-id-3e9525dc-196d-11e8-accf-0ed5f89f718b">
            {props.filteredProductCovenantList && props.filteredProductCovenantList.data.map((covenant: Models.ProductCovenant, index: number)=>(
                <TableRow   key = {`${covenant.id}-${index}`}
                            testID={`test-id-a4abc14c-1a34-11e8-accf-0ed5f89f718b-${index}`}>
                    <TableCell 
                            testID={`test-id-aafc57be-1a34-11e8-accf-0ed5f89f718b-${index}`}>
                        <View style = {Styles.productCovenantTableCellView}>
                            <Text testID={`test-id-00ba8afe-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                                {covenant.contractNumber}
                            </Text>
                        </View>
                    </TableCell>
                    <TableCell 
                            testID={`test-id-b2e59eae-1a34-11e8-accf-0ed5f89f718b-${index}`}>
                        <View style = {Styles.productCovenantTableCellView}>
                            <Text testID={`test-id-13fac82c-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                            {covenant.name}
                            </Text>
                        </View>
                    </TableCell>
                    <TableCell  
                                testID={`test-id-b6618ad4-1a34-11e8-accf-0ed5f89f718b-${index}`}>
                        <View style = {Styles.productCovenantTableCellView}>
                            <Text style = {Styles.productCreditCovenantPeriodicalValueText} 
                                testID={`test-id-23236f2a-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                                {covenant.periodicalValue}
                            </Text>
                            <Text   style = {Styles.covenantTableCellSmallText}
                                    testID={`test-id-2874d978-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                                {covenant.schedule && 
                                covenant.schedule.dateNext && 
                                covenant.schedule.dateNext.formattedString()}
                            </Text>
                        </View>
                    </TableCell>
                    <TableCell  
                                testID={`test-id-ba7bd052-1a34-11e8-accf-0ed5f89f718b-${index}`}>
                        <View style = {Styles.filterStatusValueView}>
                        <Text   style = { Utils.getProductCreditCovenantStatus(props.covenantDateFilterValue, covenant.historyList) == 'Нарушено' 
                                        ? Styles.productCreditCovenantRedStatusValueText : Styles.productCreditCovenantStatusValueText} 
                                testID={`test-id-8533052c-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                            {Utils.getProductCreditCovenantStatus(props.covenantDateFilterValue, covenant.historyList)}
                        </Text>
                        <Text   style = {Styles.covenantTableCellSmallText}
                                testID={`test-id-8cd239f6-1a35-11e8-accf-0ed5f89f718b-${index}`}>
                            {covenant.schedule && 
                            covenant.schedule.dateEnd && 
                            covenant.schedule.dateEnd.formattedString()}
                        </Text>
                        </View>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)
const getPopoverCheckBoxPeriodFilterList = (props: IProps): React.ReactElement<View> => {

    return <View>
                { props.classifierDictionary.SPRGS_COVENANT_PERIOD && 
                  Array.isArray(props.classifierDictionary.SPRGS_COVENANT_PERIOD.data) ?
                  props.classifierDictionary.SPRGS_COVENANT_PERIOD.data.map((filterPeriodValue: ModelsApp.Classifier, index: number) => {
                      const checked = props.covenantPeriodFilterValueList.data
                      .find((filterValue: ModelsApp.Classifier): boolean => filterPeriodValue.code == filterValue.code) != undefined
                  
                       return  <Checkbox
                                testID={`test-id-0eef8008-1a0c-11e8-accf-0ed5f89f718b-${Utils.getRandomOperationUuid()}`}
                                disabled = {props.covenantPeriodFilterValueList.data.length == 1 && checked}
                                key = {`CheckBoxPeriodFilterItem-${filterPeriodValue.code}-${index}`}
                                checked={checked}
                                label= {filterPeriodValue.value}
                                onChange={()=> props.performChangeCheckStatusCreditCovenantPeriodFilterValueList(filterPeriodValue)}
                            />}) : null}
           </View>

}

const getPopoverCheckBoxStatusFilterList = (props: IProps): React.ReactElement<View> => (
     <View>
        {props.classifierDictionary.SPRGS_COVENANT_STATUS && 
        Array.isArray(props.classifierDictionary.SPRGS_COVENANT_STATUS.data) && 
        props.classifierDictionary.SPRGS_COVENANT_STATUS.data.map((filterStatusValue: ModelsApp.Classifier, index: number) => {
            const checked = Array.isArray(props.covenantStatusFilterValueList.data) && 
                props.covenantStatusFilterValueList.data
                .find((filterValue: ModelsApp.Classifier): boolean => filterStatusValue.code == filterValue.code) != undefined
            return <Checkbox
                    testID={`test-id-0eef8008-1a0c-11e8-accf-0ed5f89f718b-${Utils.getRandomOperationUuid()}`}
                    disabled = {Array.isArray(props.covenantStatusFilterValueList.data) && props.covenantStatusFilterValueList.data.length == 1 && checked}
                    key = {`CheckBoxStatusFilterItem-${filterStatusValue.code}-${index}`}
                    checked={ checked }
                    label= {filterStatusValue.value}
                    onChange={()=> props.performChangeCheckStatusCreditCovenantStatusFilterValueList(filterStatusValue)}
                />
        }
        )}
    </View>
)
const getCovenantPeriodFilterPage = (props: IProps): React.ReactElement<LabelWithPopover> => (
    <LabelWithPopover 
            textRightPageHeaderButton =  {'Применить'}
            onClickRightPageHeaderButton = {props.performApplyCovenantPeriodFilter}
            disabledRightPageHeaderButton = {Utils.isArrayClassifierEqual(props.covenantAppliedPeriodFilterValueList, 
                props.covenantPeriodFilterValueList)}
            positionPopoverList ={[PopoverPosition.BOTTOM]}
            popoverStyle={{ height: 325}}
            popoverPageContent = {getPopoverCheckBoxPeriodFilterList(props)}
            testID = {'test-id-13538f6c-19f9-11e8-accf-0ed5f89f718b'}
            labelTitle   = {"Периодичность"}
            labelText = { (Array.isArray(props.covenantAppliedPeriodFilterValueList.data) && 
                (props.covenantAppliedPeriodFilterValueList.data.length == props.classifierDictionary.SPRGS_COVENANT_PERIOD.data.length))
            ? 'Все'
            : `${props.covenantAppliedPeriodFilterValueList.data[0] &&
                    props.covenantAppliedPeriodFilterValueList.data[0].value} ${
                        Utils.getCountProductCovenantFilterList(props.covenantAppliedPeriodFilterValueList)}`} />   
)
const getCovenantStatusFilterPage  = (props: IProps): React.ReactElement<LabelWithPopover> => (

    <LabelWithPopover 
            textRightPageHeaderButton =  {'Применить'}
            positionPopoverList ={[PopoverPosition.BOTTOM]}
            popoverStyle={{ height: 325}}
            disabledRightPageHeaderButton = {Utils.isArrayClassifierEqual(props.covenantAppliedStatusFilterValueList,
               props.covenantStatusFilterValueList)}
            onClickRightPageHeaderButton = {props.performApplyCovenantStatusFilter}
            popoverPageContent={getPopoverCheckBoxStatusFilterList(props)}
            testID = {'test-id-13538f6c-19f9-11e8-accf-0ed5f89f718b'}
            labelTitle   = {"Статус"}
            labelText = {(Array.isArray(props.covenantAppliedStatusFilterValueList.data) && 
                (props.covenantAppliedStatusFilterValueList.data.length == props.classifierDictionary.SPRGS_COVENANT_STATUS.data.length))
                ? 'Все'
                : `${Array.isArray(props.covenantAppliedStatusFilterValueList.data) && 
                    props.covenantAppliedStatusFilterValueList.data[0] && 
                    props.covenantAppliedStatusFilterValueList.data[0].value} ${
                        Utils.getCountProductCovenantFilterList(props.covenantAppliedStatusFilterValueList)}`} />
                         

)
const getClientProductInfo = (props: IProps, mapDateList: Array<Date>): React.ReactElement<Grid> => (
    <Grid testID='test-id-efc03ce0-195c-11e8-accf-0ed5f89f718b'>
        <Row testID='test-id-e9d41540-195c-11e8-accf-0ed5f89f718b'>
            <Col xs={12}
                testID='test-id-e5975bea-195c-11e8-accf-0ed5f89f718b'>
                <View style = {Styles.customerCovenantListView}>
                    <Label
                    testID = {'test-id-32bd1388-195d-11e8-accf-0ed5f89f718b'}
                    header = {''}
                    text   = {"Клиент"}
                    block  = {false}>
                        <Text
                            testID={'test-id-2c576516-195d-11e8-accf-0ed5f89f718b'}
                            numberOfLines={2}>
                            {
                                props.currentCustomerManaged &&
                                props.currentCustomerManaged.name ||
                                PLACEHOLDER // На случай, если придёт text = null
                            }
                        </Text>
                    </Label>
                    <View style = {Styles.customerInfoButtonView}>
                    <InfoButton testID='test-id-ea1ff618-ab98-11e7-abc4-cec278b6b50a'
                                onPress={props.navigateToCustomerScreen}/>
                    </View>
                </View>
            </Col>
        </Row>
        <Row testID='test-id-b2bbf644-1962-11e8-accf-0ed5f89f718b'>
            <Col xs={4}
                testID='test-id-b7e5f3b8-1962-11e8-accf-0ed5f89f718b'>
                <Label
                    testID = {'test-id-32bd1388-195d-11e8-accf-0ed5f89f718b'}
                    header = {''}
                    text   = {"Название продукта"}
                    block  = {false}>
                    <Text
                        testID={'test-id-2c576516-195d-11e8-accf-0ed5f89f718b'}
                        numberOfLines={1}>
                        {
                            props.currentCreditProduct &&
                            props.currentCreditProduct.creditProduct &&
                            props.currentCreditProduct.creditProduct.nameClassifier &&
                            props.currentCreditProduct.creditProduct.nameClassifier.value ||
                            PLACEHOLDER // На случай, если придёт text = null
                        }
                    </Text>
                </Label>
            </Col>
            <Col xs={4}
                testID='test-id-bbfbe12e-1962-11e8-accf-0ed5f89f718b'>
                <Label
                    testID = {'test-id-096bd2b6-1963-11e8-accf-0ed5f89f718b'}
                    header = {''}
                    text   = {"Номер договора"}
                    block  = {false}>
                    <Text
                        testID={'test-id-0e05f194-1963-11e8-accf-0ed5f89f718b'}
                        numberOfLines={1}>
                        {props.currentCreditProduct &&
                        props.currentCreditProduct.creditProduct &&
                        props.currentCreditProduct.creditProduct.contractNumber ||
                        PLACEHOLDER}
                    </Text>
                </Label>
            </Col>
        </Row>
        <GridRowHorizontalRule />
        <Row testID="test-id-4c58287c-1963-11e8-accf-0ed5f89f718b">
            <Col xs={4}
                testID='test-id-4c58287c-1963-11e8-accf-0ed5f89f718b'>
                <View style = {Styles.dateInputProductCovenantFilter}>
                    <DateInput testID='test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg'
                            value={props.covenantDateFilterValue || new Date()}
                            format='MM.yyyy'
                            min = {new Date(Math.min.apply(null,mapDateList))}
                            label = {'Период'}
                            locale='ru'
                            dateType={DateInputTypes.MONTH_PICKER}
                            max={new Date()}
                            onChange={(date: Date | null) => props.performChangeCovenantDateFilterValue(date)}/>
                </View>
            </Col>
            <Col xs={4} testID='test-id-16bcfa94-19f9-11e8-accf-0ed5f89f718b'>
                {getCovenantPeriodFilterPage(props)}         
            </Col>
            <Col xs={4}
                testID='test-id-16bcfa94-19f9-11e8-accf-0ed5f89f718b'>
                {getCovenantStatusFilterPage(props)}                      
            </Col>
        </Row>
    </Grid>
)
const ViewProductCovenantList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const mapDateList: Array<Date>= []
    if (props.covenantListFetching) {
        return getLoader(props)
    }
    if (Array.isArray(props.productCovenantList.data))
    {
        props.productCovenantList.data.map((item:Models.ProductCovenant) => (
            item.historyList.data.map((history: Models.ProductCovenantHistory)=> {
                history.dateFact && mapDateList.push(history.dateFact)
            })
        ))  
    }
    
    return <View style = {Styles.mainCreditCovenantListView}
                testID="test-id-f38c578c-195c-11e8-accf-0ed5f89f718b">
                <View style = {Styles.creditCovenantListView} 
                      testID="test-id-f38c578c-195c-11e8-accf-0ed5f89f718b">
                    {getClientProductInfo(props, mapDateList)}
                </View>
                {getProductCovenantListTable(props)}                          
                {getRefreshBar(props)}
            </View>
}

export interface IProps {
    testID: string,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCreditProduct: Models.CreditProduct,
    currentCustomerManaged: Models.CustomerManaged,

    covenantListFetching: boolean,
    covenantListFetchingError: Models.Error | null,
    isVisiblePopoverCovenantPeriodFilter: boolean,
    isVisiblePopoverCovenantStatusFilter: boolean,
    performChangeVisiblePopoverCovenantPeriodFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER,
    performChangeVisiblePopoverCovenantStatusFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER,
    performChangeCovenantDateFilterValue: ModelsProductCredit.PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE,
    performChangeCheckStatusCreditCovenantPeriodFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER,
    performChangeCheckStatusCreditCovenantStatusFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER,
    covenantPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantStatusFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedStatusFilterValueList: ModelsApp.ClassifierList,
    performApplyCovenantPeriodFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_PERIOD_FILTER,
    performApplyCovenantStatusFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_STATUS_FILTER,
    covenantDateFilterValue: Date | null,
    productCachedDateCovenantList: Date | null,
    filteredProductCovenantList: Models.ProductCovenantList,
    productCovenantList: Models.ProductCovenantList,
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET,
    navigateToCustomerScreen: ModelsProductCredit.NAVIGATE_TO_CUSTOMER_SCREEN,
}

export default ViewProductCovenantList