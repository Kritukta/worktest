/**
 * Util tests for pure functions.
 */


import * as Utils from '../common/Util'
import { Enums } from '../Enums'
import { Models } from 'mrmkmcib-crm'
import * as mock from './MockUtil'

import { expect } from 'chai'


describe ('Operation list filter', () => {

	it ('correctly filters operation list by sum', () => {

		const data: Array<Models.PaymentAccountProductOperation> = [ mock.operation ]
		const operationList: Models.PaymentAccountProductOperationList = { ...mock.operationList, data, }

		expect (

			Utils.operationListFilter (operationList, null, null, Enums.PeriodType.Custom, Enums.OperationType.DebtAndCredit, 0, 0)

		).to.deep.equal ({ ...operationList, data: [] })

		expect (

			Utils.operationListFilter (operationList, null, null, Enums.PeriodType.Custom, Enums.OperationType.DebtAndCredit, 1000, 1001)

		).to.deep.equal ({ ...operationList, data })


		const creditTypeOperation: Models.PaymentAccountProductOperation = { ...mock.operation,

			sum: -1000,
			isLedgerDebitSide: false,

		}

		expect (

			Utils.operationListFilter ({ ...operationList,

				data: data.concat ([ creditTypeOperation ]),

			}, null, null, Enums.PeriodType.Custom, Enums.OperationType.DebtAndCredit, -2000, 0)

		).to.deep.equal ({ ...operationList,

			data: [ creditTypeOperation ]

		})

	})

    it ('correctly detects initials', () => {
		const agent = { firstName: 'Иванов', lastName: 'Иван', middleName: 'Иванович' }
        expect (

            Utils.parseFullName('Иванов Иван Иванович')

        ).to.equal (agent)

    })

    it ('correctly filters operation list by operation type', () => {

		const data: Array<Models.PaymentAccountProductOperation> = [{ ...mock.operation,
			
			isLedgerDebitSide: false,
			sum: -1000,

		}]
		
		const operationList: Models.PaymentAccountProductOperationList = { ...mock.operationList, data, }

		expect (

			Utils.operationListFilter (operationList, null, null, Enums.PeriodType.Custom, Enums.OperationType.Debt, null, null)

		).to.deep.equal ({ ...operationList, data: [] })

		expect (

			Utils.operationListFilter (operationList, null, null, Enums.PeriodType.Custom, Enums.OperationType.Credit, null, null)

		).to.deep.equal ({ ...operationList, data })

	})

})