import React from 'react'

import {ReactComponent as Minus} from '../../asserts/minus.svg'
import {ReactComponent as Plus} from '../../asserts/plus.svg'
import './input-with-operations.css'

const InputWithOperations = props => {
    const addHandler = () => {
        props.clickHandler(props.name, props.state[props.name] + 1)
    }

    const subHandler = () => {
        if (props.state[props.name] === 0) return
        props.clickHandler(props.name, props.state[props.name] - 1)
    }
    return (
        <div className="input-with-operations"
            style={{margin: props.margin}}
        >
            <label>{props.label}</label>
            <div className="input-operation">
                <div className="minus" onClick={() => subHandler()}><Minus /></div>
                <input
                    type="text"
                    value={props.value==null? 0 : props.value}
                    onChange={e => props.clickHandler( [props.name],Number(e.target.value))}
                />
                <div className="plus" onClick={() => addHandler()}><Plus /></div>
            </div>
        </div>
    )
}

export default InputWithOperations