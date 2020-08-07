import React from 'react'

import {ReactComponent as InputArrow} from '../../asserts/input-arrow.svg'
import './select.css'

const Select = props => {
    return (
        <div className="select" style={{margin: props.margin}}>
            <label>{props.label}</label>
            <div className={'select-with-arrow'}>
                <select>
                    {
                        props.list && props.list.length?
                        props.list.map((el, i) => <option key={i} value={el}>{el}</option>):
                            <option value={'Не выбрано'}>{'Не выбрано'}</option>
                    }
                </select>
                {/*TODO fix arrow*/}
                <InputArrow className={'input-arrow'}/>
            </div>
        </div>
    )
}

export default Select