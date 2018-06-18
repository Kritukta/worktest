/**
 * Converter Tests for network response and request data.
 */

// import {Models, Converters} from 'mrmkmcib-crm'


import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm, Converters} from "mrmkmcib-crm"

import {expect} from 'chai'

describe('CRM request customer call get product eks id error list from eks error list converter', (): void => {

    const resultAssert = (result: ModelsCrm.ProductEksErrorIdList): void => {
        expect(result).to.be.a('object').that.is.not.null
    }

    const data = {
        data: [
            {
                eksCustomerId: 'id-1',
                isActiveAgreement: true
            },
            {
                eksCustomerId: 'id-1',
                isActiveAgreement: true
            }
        ]
    }

    const resultError = (converterCall: Function): void => {
        expect(converterCall).to.throw(TypeError)
    }

    it('Should convert valid data correctly', (): void => resultAssert(
        Converters.REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(data)
    ))

    it('Should convert valid data correctly', (): void => resultAssert(
        Converters.REQUEST_CUSTOMER_CALL_GET_PRODUCT_EKS_ID_ERROR_LIST_FROM_EKS_ERROR_LIST(null)
    ))
})

//RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST

describe('CRM response client product errror to error list converter', (): void => {
    const resultAssert = (result: ModelsCrm.EksError[]): void => {
        expect(result).to.be.an('array').that.is.not.null
    }

    const data = {
        errors: [
            {
                eksError: {
                    eksCustomerId: 'id-1',
                    isActiveAgreement: true,
                    code: 'code',
                    message: 'message'
                }
            },
            {
                eksError: {
                    eksCustomerId: 'id-1',
                    isActiveAgreement: true,
                    code: 'code',
                    message: 'message'
                }
            },
            {
                eksError: {
                    eksCustomerId: null,
                    isActiveAgreement: null,
                    code: null,
                    message: null
                }
            }
        ]
    }

    const resultError = (converterCall: Function): void => {
        expect(converterCall).to.throw(TypeError)
    }

    it('Should convert valid data correctly', (): void => resultAssert(
        Converters.RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(data)
    ))

    it('should throw if data is inconsistent', (): void => resultError(
        () => Converters.RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(42)
    ))

    it('should throw if data is empty', (): void => resultError(
        () => Converters.RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST()
    ))

    it('should throw if data is undefined', (): void => resultError(
        () => Converters.RESPONSE_CLIENT_PRODUCT_LIST_ERROR_TO_ERROR_LIST(undefined)
    ))
})

//SEARCH_EMPLOYEE_TO_EMPLOYEE

describe('CRM search employee to employee converter', (): void => {
    const resultAssert = (result: ModelsApp.Employee): void => {
        expect(result).to.be.an('object').that.is.not.null
    }

    const data = {
        personType: {
            lastName: 'lastName',
            firstName: 'firstName',
            middleName: 'middleName'
        },
        team: [{
            positionId: '100501',
            member: {
                positionName: 'name'
            },
            isBlocked: true,
            isGeneral: false
        }, {
            positionId: '100500',
            member: {
                positionName: 'name'
            },
            isBlocked: true,
            isGeneral: false
        }, {
            positionId: '100502',
            member: {
                positionName: 'name'
            },
            isBlocked: true,
            isGeneral: false
        }],
        id: '100500'
    }

    const dataWithOutTeam = {
        personType: {
            // lastName: 'lastName',
            // firstName: 'firstName',
            // middleName: 'middleName'
        },
        team: null,
        id: null
    }

    const resultError = (converterCall: Function): void => {
        expect(converterCall).to.throw(TypeError)
    }

    it('Should convert valid data correctly', (): void => resultAssert(
        Converters.SEARCH_EMPLOYEE_TO_EMPLOYEE(data)
    ))

    it('Should convert valid data correctly', (): void => resultAssert(
        Converters.SEARCH_EMPLOYEE_TO_EMPLOYEE(dataWithOutTeam)
    ))

    it('should throw if data is inconsistent', (): void => resultError(
        () => Converters.SEARCH_EMPLOYEE_TO_EMPLOYEE(42)
    ))

    it('should throw if data is empty', (): void => resultError(
        () => Converters.SEARCH_EMPLOYEE_TO_EMPLOYEE()
    ))

    it('should throw if data is undefined', (): void => resultError(
        () => Converters.SEARCH_EMPLOYEE_TO_EMPLOYEE(undefined)
    ))
})

describe('CRM response customer call get customer address to customer unknown address converter', (): void => {
    const resultAssert = (result: ModelsCrm.Address): void => {
        expect(result).to.be.an('object').that.is.not.null
    }

    const data = {
        country: {
            "code": "code",
            "value": "value",
            "classifierName": "COUNTRY_TYPE"
        },
        type: {
            "code": "code",
            "value": "value",
            "classifierName": "ADDRESS_TYPE"
        },
        area: 'area',
        building: 'building',
        city: 'city',
        id: 'id',
        isActive: true,
        isPrimary: true,
        modId: 'modId',
        place: 'place',
        stateProv: 'stateProv',
        street: 'street',
        house: 'house',
        corpus: 'corpus',
        office: 'office',
        postalCode: 'postalCode',
        comment: 'comment'
    }

    const dataWithEmptyClassifiers = {
        country: null,
        type: null,
        area: 'area',
        building: 'building',
        city: 'city',
        id: 'id',
        isActive: true,
        isPrimary: true,
        modId: 'modId',
        place: 'place',
        stateProv: 'stateProv',
        street: 'street',
        house: 'house',
        corpus: 'corpus',
        office: 'office',
        postalCode: 'postalCode',
        comment: 'comment'
    }

    const dataWithIncorrectClassifiers = {
        country: 42,
        type: 42,
        area: 'area',
        building: 'building',
        city: 'city',
        id: 'id',
        isActive: true,
        isPrimary: true,
        modId: 'modId',
        place: 'place',
        stateProv: 'stateProv',
        street: 'street',
        house: 'house',
        corpus: 'corpus',
        office: 'office',
        postalCode: 'postalCode',
        comment: 'comment'
    }

    const resultError = (converterCall: Function): void => {
        expect(converterCall).to.throw(TypeError)
    }

    it('Should convert data correctly', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(data)
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(dataWithEmptyClassifiers)
    ))

    it('should convert correctly if classifiers is inconsistent', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(dataWithIncorrectClassifiers)
    ))

    it('should convert if data is inconsistent', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(42)
    ))

    it('should convert if data is empty', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS()
    ))

    it('should convert if data is undefined', (): void => resultAssert(
        Converters.RESPPONSE_CUSTOMER_CALL_GET_CUSTOMER_ADDRESS_TO_CUSTOMER_UNKNOWN_ADDRESS(undefined)
    ))

})

//RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ

describe('CRM response customer customer call get customer to customer unknown gsz to gsz converter', (): void => {
    const resultAssert = (result: ModelsCrm.Gsz): void => {
        expect(result).to.be.an('object').that.is.not.null
    }

    // const dataEmty = {}

    const data = {
        id: 'id',
        name: 'name'
    }

    it('Should convert data correctly', (): void => resultAssert(
        Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ(null)
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ(data)
    ))

    it('should convert data correctly if data is inconsistent', (): void => resultAssert(
        Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ(42)
    ))

    it('should convert data correctly if data is empty', (): void => resultAssert(
        Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ([])
    ))

    it('should convert data correctly if data is undefined', (): void => resultAssert(
        Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_GSZ_TO_GSZ(undefined)
    ))
})

// IMPORTANT_DATE_TO_OCCASION

describe('CRM important date to occasion converter', (): void => {
    const resultAssert = (result: ModelsCrm.Address): void => {
        expect(result).to.be.an('object').that.is.not.null
    }

    const data = {
        date: new Date(),
        dateComment: 'dateComment',
        id: 'id',
        impDateTypeClassifier: {
            "code": "code",
            "value": "value",
            "classifierName": "IMPDATE_CLASSIFIER"
        },
        isYearlyReminde: true,
        modId: 'modId'
    }

    const dataWithIncorrectClassifier = {
        date: new Date(),
        dateComment: 'dateComment',
        id: 'id',
        impDateTypeClassifier: null,
        isYearlyReminde: true,
        modId: 'modId'
    }

    it('Should convert data correctly', (): void => resultAssert(
        Converters.IMPORTANT_DATE_TO_OCCASION(null)
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.IMPORTANT_DATE_TO_OCCASION(data)
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.IMPORTANT_DATE_TO_OCCASION({...data, date: null})
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.IMPORTANT_DATE_TO_OCCASION(dataWithIncorrectClassifier)
    ))

    it('Should convert data correctly', (): void => resultAssert(
        Converters.IMPORTANT_DATE_TO_OCCASION({...data, isYearlyReminde: 42})
    ))
})

// RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN_IMPDATES_TO_OCCASION_LIST

describe('', (): void => {

})