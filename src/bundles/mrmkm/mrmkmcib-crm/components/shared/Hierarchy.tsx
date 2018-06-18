/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'

import {
    Content,
    AuthForm,
    RootComponent,
    Sidebar,
    MenuSideTop,
    MenuSideBottom,
    MenuItem,
    Button,
    ButtonType,
    IconType,
    UFSProvider,
    AppContainer,
    SplitPanel,
    SplitPanelActions,
    AccessoryPanel,
    ContentPanel,
    NavigationBar,
    Page,
    H1,
    H2,
    Text,
    TableColumnAlignment,
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    TableColumn,
    Section,
    HorizontalRule,
    View,
    NavigationTextButton,
    NavigationFilterButton,
    NavigationIconButtonType,
    NavigationIconButton,
    NavigationBackButton,
    FileViewer,
    LeftPageHeader,
    CenterPageHeader,
    RightPageHeader,
    RadioButton,
    RadioGroup,
    Textarea,
    TextInput,
    NumberInput,
    MaskedInput,
    Header,
    Icon,
    KeyboardType,
    SysCalls,
    download,
    upload,
    get,
    post,
    syncGet,
    syncPost,
    File,
    ECM,
    FileType,
    PersistentType,
    Settings,
    Cookie,
    Authentication,
    AuthenticationStatus,
    AuthenticationType,
    Grid,
    Col,
    Row,
    Checkbox,
    Switch,
    Right,
    Center,
    Left,
    Clearfix,
    Video,
    TabSelector,
    OptionItem,
    SystemError,
    Loader,
    Popover,
    PopoverType,
    PopoverPosition,
    Workflow,
    WFBreadcrumbs,
    Log,
    LogLevel,
    SystemInfo,
    Label,
    Breadcrumbs,
    Hint,
    HintType,
    Panel,
    PanelType,
    PanelHeader,
    HintSwitch,
    Accordion,
    ComboBox,
    ProfileCell,
    Map as UFSMap,
    MapSource,
    RouteType,
    MapContent,
    MapControls,
    MapLocateButton,
    MapTrafficButton,
    MapZoomInButton,
    MapZoomOutButton,
    Marker,
    Geocoder,
    Modal,
    WebView,
} from 'ufs-mobile-platform'

import {defaultValues} from "../../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../../Enums'
import {Models} from "mrmkmcib-crm"

import * as ModelsAppCRM from "../../models/ModelsAppCRM"

import * as ModelsCustomer from "../../models/ModelsCustomer"

import * as ModelsCustomerEditor from "../../models/ModelsCustomerEditor"

import * as ModelsDealEditor from "../../models/ModelsDealEditor"

import * as ModelsDealList from "../../models/ModelsDealList"

import * as ModelsProductList from "../../models/ModelsProductList"

import * as ModelsProduct from "../../models/ModelsProduct"

import * as ModelsProductPaymentAccount from "../../models/ModelsProductPaymentAccount"

import * as ModelsProductCredit from "../../models/ModelsProductCredit"

import * as ModelsGSZ from "../../models/ModelsGSZ"

import * as ModelsGszActivityInclude from "../../models/ModelsGszActivityInclude"

import * as ModelsGszActivityExclude from "../../models/ModelsGszActivityExclude"

import * as ModelsCustomerActivityInclude from "../../models/ModelsCustomerActivityInclude"

import * as ModelsCustomerActivityExclude from "../../models/ModelsCustomerActivityExclude"

import * as ModelsLimit from "../../models/ModelsLimit"

import * as ModelsDeal from "../../models/ModelsDeal"

import * as ModelsEmployee from "../../models/ModelsEmployee"

import * as ModelsAgent from "../../models/ModelsAgent"

import * as ModelsAgentList from "../../models/ModelsAgentList"

import * as ModelsMemberList from "../../models/ModelsMemberList"

import * as ModelsOccasionList from "../../models/ModelsOccasionList"

import * as ModelsOccasion from "../../models/ModelsOccasion"

import * as ModelsNoteList from "../../models/ModelsNoteList"
import Action from "../../models/Action"
import Response from "../../models/Response"
import Error from "../../models/Error"

import Styles from './styles/HierarchyStyles'


/*
 * UI stateless functional component "Hierarchy" used in "Customer" screen. Hierarchy items.
 */

export interface IProps {
    itemList: Models.HierarchyList,
    onTapItem: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,

    testID: string
}

const Hierarchy: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-shared-component-Hierarchy'}>
        {}
        <Text testID='test-id-4bc4a30c-bb28-0dd6-cbcf-2bcb3481a2ce'>Component - Hierarchy</Text>
        {}
    </View>
)

export default Hierarchy