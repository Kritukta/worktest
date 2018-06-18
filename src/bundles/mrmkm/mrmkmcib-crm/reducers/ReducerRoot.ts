/*
 * Created by Burnaev M.U.
 */

import {combineReducers} from 'redux'


import reducerAppCRM from './ReducerAppCRM'

import reducerSelectClassifierWithSearch from './ReducerSelectClassifierWithSearch'

import reducerCustomer from './ReducerCustomer'

import reducerCustomerEditor from './ReducerCustomerEditor'

import reducerDealEditor from './ReducerDealEditor'

import reducerParentDealPicker from './ReducerParentDealPicker'

import reducerCampaignPicker from './ReducerCampaignPicker'

import reducerDealStages from './ReducerDealStages'

import reducerDealStageEditor from './ReducerDealStageEditor'

import reducerDealList from './ReducerDealList'

import reducerProductList from './ReducerProductList'

import reducerProduct from './ReducerProduct'

import reducerProductAcquiring from './ReducerProductAcquiring'

import reducerProductPaymentAccount from './ReducerProductPaymentAccount'

import reducerProductCredit from './ReducerProductCredit'

import reducerGSZ from './ReducerGSZ'

import reducerGszActivityInclude from './ReducerGszActivityInclude'

import reducerGszActivityExclude from './ReducerGszActivityExclude'

import reducerCustomerActivityInclude from './ReducerCustomerActivityInclude'

import reducerCustomerActivityExclude from './ReducerCustomerActivityExclude'

import reducerLimit from './ReducerLimit'

import reducerDeal from './ReducerDeal'

import reducerEmployee from './ReducerEmployee'

import reducerAgent from './ReducerAgent'

import reducerAgentList from './ReducerAgentList'

import reducerMemberList from './ReducerMemberList'

import reducerOccasionList from './ReducerOccasionList'

import reducerOccasion from './ReducerOccasion'

import reducerNoteList from './ReducerNoteList'

import reducerNote from './ReducerNote'

import reducerDealListSearch from './ReducerDealListSearch'

import reducerDealAttachments from './ReducerDealAttachments'

import reducerForecastEventEditor from './ReducerForecastEventEditor'

const reducerRoot = combineReducers({


    reducerAppCRM,

    reducerSelectClassifierWithSearch,

    reducerCustomer,

    reducerCustomerEditor,

    reducerDealEditor,

    reducerParentDealPicker,

    reducerCampaignPicker,

    reducerDealStages,

    reducerDealStageEditor,

    reducerDealList,

    reducerDealListSearch,

    reducerProductList,

    reducerProduct,

    reducerProductAcquiring,

    reducerProductPaymentAccount,

    reducerProductCredit,

    reducerGSZ,

    reducerGszActivityInclude,

    reducerGszActivityExclude,

    reducerCustomerActivityInclude,

    reducerCustomerActivityExclude,

    reducerLimit,

    reducerDeal,

    reducerEmployee,

    reducerAgent,

    reducerAgentList,

    reducerMemberList,

    reducerOccasionList,

    reducerOccasion,

    reducerNoteList,

    reducerNote,

    reducerDealAttachments,

    reducerForecastEventEditor,

})

export default reducerRoot
