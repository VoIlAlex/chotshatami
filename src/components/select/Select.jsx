import React from 'react'

import {ReactComponent as InputArrow} from '../../asserts/input-arrow.svg'
import './select.css'

const Select = props => {
    return (
        <div className="select" style={{margin: props.margin}}>
            <label>{props.label}</label>
            <div className={'select-with-arrow'}>
                <input type="text"
                       value={props.value}
                       className={'select__input'}
                       onChange={e => {
                           props.onChange(e)
                           props.setShowSelect(true)
                       }}

                />
                {
                    props.showSelect && <div className="select__options">
                        {
                            props.list && props.list.map((el, i) => (
                                <div
                                    key={i}
                                    className="select__option"
                                    onClick={() => {
                                        props.onClick(el)
                                        props.setShowSelect(false)
                                    }}
                                >
                                    <p>{el.name? el.name: el}</p>
                                </div>
                            ))
                        }
                    </div>
                }
                <InputArrow className={'input-arrow'}/>
            </div>
        </div>
    )
}

export default Select