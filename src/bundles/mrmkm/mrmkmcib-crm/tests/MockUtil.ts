import { Enums } from '../Enums'
import { Models } from 'mrmkmcib-crm'


export const operation: Models.PaymentAccountProductOperation = {

  sum: 1000,
  sumRelativeToCurrency: 1000,
  correspondent: "Корреспондент - пример",
  currency: {
    parentId: "",
    name: "CURRENCY",
    value: "Рубль",
    code: "RUR"
  },
  purpose: "Назначение платежа - пример № 1",
  isLedgerDebitSide: null,
  date: new Date ("2002-06-24T17:56:29.000Z")

}
  

export const operationList: Models.PaymentAccountProductOperationList = {

  pollingStatus: Enums.ProductPollingStatus.None,
  pollingError: null,
  bhCachedDate: null,
  operationUuid: null,
  eksErrorList: [],
  data: [],

}