import React from 'react'

import {ReactComponent as Minus} from '../../asserts/minus.svg'
import {ReactComponent as Plus} from '../../asserts/plus.svg'
import './input-with-operations.css'

const InputWithOperations = props => {
    return (
        <div className="input-with-operations">
            <label>{props.label}</label>
            <div className="input-operation">
                <Minus className={'minus-logo'}/>
                <input type="text"/>
                <Plus className={'plus-logo'}/>
            </div>
        </div>
    )
}

export default InputWithOperations