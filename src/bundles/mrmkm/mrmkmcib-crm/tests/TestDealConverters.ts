/**
 * Converter Tests for network response and request data.
 */

import {Models, Converters} from 'mrmkmcib-crm'
import {expect} from 'chai'

const dealData = require('./deal.json').body


describe('Deal to Deal converter', (): void => {

    const resultAssert = (deal: Models.Deal): void => {

        /**
         * Converted object should conform to a corresponding interface
         */
        /*
            sumInRubles: number,
            memberList: MemberList,
            agentList: AgentList,
            commentList?: Array<Comment>,
            decision: Array<DealDecision>, */
        expect(deal).not.to.be.empty
        //expect(deal.creationDate.getDate()).to.be.a('number').that.is.not.null
        //expect(deal.finishDate.getDate()).to.be.a('number').that.is.not.null
        expect(deal.isOpen).to.be.a('boolean').that.is.not.null
        expect(deal.id).to.be.a('string').that.is.not.empty
        expect(deal.customer).to.be.an('object').that.is.not.empty
        //expect(deal.plannedFinishDate.getDate()).to.be.a('date').that.is.not.null
        expect(deal.progress).to.be.a('number').that.is.not.null
        expect(deal.owner).to.be.a('object').that.is.not.empty
        expect(deal.phaseClassifier).to.be.a('object').that.is.not.empty
        expect(deal.title).to.be.a('string').that.is.not.empty

    }

    it('should convert valid data correctly', (): void => resultAssert(
        Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(dealData)
    ))

    const resultError = (converterCall: Function): void => {

        expect(converterCall).to.throw(TypeError)
    }

    it('should throw if data is undefined', (): void => resultError(
        () => Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(undefined)
    ))

    it('should throw if data is empty', (): void => resultError(
        () => Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL({})
    ))

    it('should throw if data is inconsistent', (): void => resultError(
        () => Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL({

//             id: '_id',

        })
    ))

})
