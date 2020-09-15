import React, {useRef, useState} from 'react'

import {ReactComponent as InputArrow} from '../../asserts/input-arrow.svg'
import './select.css'

const Select = props => {
    const ref = useRef(null);
    const [active, setActive] = useState(0)

    const handleKeyDown = e => {
        if (e.keyCode === 38 && active > 0) {
            setActive( active => active - 1)
        } else if (e.keyCode === 40 && active < props.list.length - 1) {
            setActive( active =>  active + 1)
        } else if(e.key==='Enter') {
            props.onEnter(props.list[active])
            props.setShowSelect(false)
        }
    }
    return (
        <div className="select" style={{margin: props.margin}}>
            <label>{props.label}</label>
            <div className={'select-with-arrow'}>
                <input type="text"
                       ref={ref}
                       value={props.value}
                       onKeyDown={ handleKeyDown }
                       className={'select__input'}
                       onChange={e => {
                           props.onChange(e)
                           props.setShowSelect(true)
                       }}

                />
                {
                    props.showSelect && <div className="select__options" >
                        {
                            props.list && props.list.map((el, i) => (
                                <div
                                    key={i}
                                    className={`${active===i?'hover':''} select__option`}
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
                <InputArrow onClick={() => {
                    props.setShowSelect(!props.showSelect)
                    ref.current.focus()
                } } className={'input-arrow'}/>
            </div>
        </div>
    )
}

export default Select