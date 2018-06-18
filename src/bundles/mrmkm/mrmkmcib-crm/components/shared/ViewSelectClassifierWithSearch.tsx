
import React from 'react'

import {
    Page,
    RadioGroup,
    View,
    Text,
    RadioButton,
    LeftPageHeader,
    NavigationBackButton,
    CenterPageHeader,
    H2,
    KeyboardType,
    NavigationIconButtonType,
    NavigationIconButton,
    SplitPanel,
    RightPageHeader,
    ContentPanel,
    NavigationTextButton,
    Panel,
    PanelType,
} from 'ufs-mobile-platform'
import * as util from '../../common/Util'
import {Enums} from '../../Enums'
import {Models as ModelsApp} from "mrmkmcib-app"
import Styles from './styles/SelectClassifierWithSearchStyles'
import { SearchInput } from 'mrmkmcib-ui'
import * as ModelsSelectClassifierWithSearch from '../../models/ModelsSelectClassifierWithSearch'
export interface IProps {

    selectedCode: string | null,
    testID: string,
    searchValue: string | null,
    searchList: ModelsApp.ClassifierList,
    isSearchLineVisible: boolean,
    isSearchEnable: boolean,
    isNotFound: boolean,
    isFullScreenEnabled: boolean,
    mode: Enums.ClassifierMode,
    performSelect: (value: ModelsApp.Classifier,)=>void,
    navigateBackButtonTitle: string | null,
    warningMessage: string | null,

    performSearch: ModelsSelectClassifierWithSearch.PERFORM_SEARCH,
    showSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,
    hideSearchLine: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,

    pageName: string | null,
    navigateBack: ModelsSelectClassifierWithSearch.NO_PARAMS_VOID,
}




const _getMainContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-43etg'
          style={Styles.mainView}>
        { props.isSearchLineVisible
            ? <View testID='test-id-7acd23fe-6e1d-fb9f-05c5-2435hyn' style={Styles.searchContainer}>
                <SearchInput
                    value={props.searchValue || ''}
                    onCancel={props.hideSearchLine}
                    keyboardType={KeyboardType.Email}
                    onChange={(value) => props.performSearch(value)}
                    placeholder={'Введите название'}
                    autoFocus={true}/>
            </View>
            : null
        }
        {
            props.warningMessage
                ?   <View testID='test-id-9596a436-e524-bdd4-5261-2431efvqe'
                          style={Styles.validationErrorContainer}>
                        <Panel  testID='test-id-9596a436-e524-bdd4-5261-2431efvqe'
                                type={PanelType.WARNING_BOX}
                                hasIcon={false}>
                            <View testID='test-id-9596a436-e524-bdd4-5261-8647534gasdv' style={Styles.validationErrorText}>
                                <Text testID='test-id-9596a436-e524-bdd4-5261-35tgwevq'>
                                    {
                                        props.warningMessage
                                    }
                                </Text>
                            </View>
                        </Panel>
                    </View>
                :   null
        }
        {
            props.isNotFound
            ?   <View
                    testID='test-id-6761f191-c0cd-b8da-c4b5-400ace27a553'
                    style={Styles.searchNotFoundTextWrapper}>
                    <Text
                        testID='test-id-b38edd02-939f-2b71-c922-138198125d4f'
                        style={Styles.searchNotFoundText}>
                        {'Результатов не найдено'}
                    </Text>
                </View>
            :   null
        }
        <RadioGroup testID='test-id-9052b0979'
                    value={props.selectedCode || undefined}
                    onChange={(index, value) => props.performSelect(props.searchList.data[index])}>
            {props.searchList.data.map((e: ModelsApp.Classifier, i: number) => (
                <RadioButton
                    testID='test-id-b9152954ffe' key={`radio-${e.code}-${i}`}
                    value={e.code}
                    label={util.getRowTemplate(e, props.mode)}/>
            ))}
        </RadioGroup>
    </View>
)


const ContentPanelPage = (props: IProps) => (
    <Page testID='test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea'
          scrollEnabled={true}
          content={
              _getMainContent(props)
          }>
        {getPageNavigation(props)}
    </Page>
)

const FullScreenPage = (props: IProps) => (
    <Page testID='test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea'
          scrollEnabled={true}
          content={
              <View style={Styles.memberListSearchContentContainer}>
                  <View style={Styles.widthContainer}>
                      {
                          _getMainContent(props)
                      }
                  </View>
              </View>
          }>
        {getPageNavigation(props)}
    </Page>
)

const getPageNavigation = (props: IProps) => (
    props.isSearchLineVisible
        ?   <LeftPageHeader testID='test-id-b25f4dd9703f'/>
        :   [
            <LeftPageHeader testID='test-id-b25f4dd9703f'
                            key={'LeftPageHeader'}>
                <NavigationBackButton testID='test-id-bec4a2bbbec3e09' title={false}
                                      onClick={()=>{
                                          props.navigateBack()
                                      }}
                                      key={'NavigationBackButton'}/>
                {
                    props.navigateBackButtonTitle
                        ? <View style={Styles.navigationBackButtonTextAdjustment}
                                testID={`test-id-ViewMemberList-3`}>
                            <NavigationTextButton
                                testID={`test-id-ViewMemberList-4`}
                                title={props.navigateBackButtonTitle}
                                onExecute={()=>{
                                    props.navigateBack()
                                }}
                            />
                        </View>
                        : null
                }
            </LeftPageHeader>,
            <CenterPageHeader   testID='test-id-05e1fbc9af4e'
                                key={'CenterPageHeader'}>
                <H2 testID='test-id-dcf9b8e6b3aa6'
                    key={'H2'}>
                    {props.pageName}
                </H2>
            </CenterPageHeader>,
            <RightPageHeader    testID='test-id-0c51abfd-82aa-cd18-da87-f5ade5cbcd60'
                                key={'RightPageHeader'}>
                { props.isSearchEnable
                    ? <NavigationIconButton testID='test-id-93d6e8d2-8d14-fcb4-050c-be6b209c5e87'
                                            type={NavigationIconButtonType.SEARCH}
                                            onExecute={props.showSearchLine}
                                            key={'NavigationIconButton'}/>
                    : null
                }
            </RightPageHeader>
        ]
)


export const ViewSelectClassifierWithSearch = (props: IProps) => (
    <SplitPanel testID='test-id-75014a3d5e7fbfad55' id={"SplitPanel-ViewSelectClassifierWithSearch"}>
        <ContentPanel testID='test-id-42ada362644d57e53a' style={Styles.contentPanel}>
            {
                props.isFullScreenEnabled
                ?   FullScreenPage(props)
                :   ContentPanelPage(props)
            }
        </ContentPanel>
    </SplitPanel>
)

