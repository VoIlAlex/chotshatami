import React from 'react'

import {ReactComponent as Minus} from '../../asserts/minus.svg'
import {ReactComponent as Plus} from '../../asserts/plus.svg'
import './input-with-operations.css'

const InputWithOperations = props => {
    const addHandler = () => {
        props.clickHandler({...props.state, [props.name]:props.state[props.name]+1})
    }

    const subHandler = () => {
        if(props.state[props.name]===0) return
        props.clickHandler({...props.state, [props.name]:props.state[props.name]-1})
    }
    return (
        <div className="input-with-operations">
            <label>{props.label}</label>
            <div className="input-operation">
                <Minus className={'minus-logo'} onClick={() => subHandler()}/>
                <input type="text"
                       name={props.name}
                       value={props.value}
                       onChange={e => props.clickHandler({...props.state, [props.name]:e.target.value})}
                />
                <Plus className={'plus-logo'} onClick={() => addHandler()}/>
            </div>
        </div>
    )
}

export default InputWithOperations