import React, {Component} from 'react'

import {
    View,
} from 'ufs-mobile-platform'

// в хроме работает только с внешней переменной
let refMap = new Map()
export default class PopoverTarget extends Component<IPopoverTargetProps, any> {

    public static getRef(stringRef: any) {
        return stringRef ? refMap.get(`ref_${stringRef}`) : null
    }

    public static setRef(stringRef: any, ref: any) {
        refMap.set(`ref_${stringRef}`, ref)
    }

    constructor(props: IPopoverTargetProps, context: any) {
        super(props, context)
        refMap = new Map()
        this.state = {}
    }

    public componentWillUnmount() {
        const removeNullValues = (value: any, key: any, map: Map<any, any>) => {
            if (value === null) {
                refMap.delete(key)

            }
        }

        refMap.forEach(removeNullValues)
    }

    public render() {
        return (
            <View
                style={this.props.style}
                testID={this.props.testID}
                ref={(reference: any) => {
                    PopoverTarget.setRef(this.props.refName, reference)
                }} >
                {
                    this.props.children
                }
            </View>
        )
    }
}

export interface IPopoverTargetProps {
    testID: string;
    refName: string
    style?: any
}
