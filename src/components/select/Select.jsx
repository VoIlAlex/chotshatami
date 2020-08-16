import React, {useState} from 'react'

import {ReactComponent as InputArrow} from '../../asserts/input-arrow.svg'
import './select.css'

const Select = props => {
    const [titleS, setTitle] = useState('Не выбрано')
    return (
        <div className="select" style={{margin: props.margin}}>
            <label>{props.label}</label>
            <div className={'select-with-arrow'}>
                <select
                    value={titleS}
                    onChange={!props.city?(e) => {
                        props.onChange(e.target.value)
                        setTitle(e.target.value)
                    }: () => {} }
                >
                    {props.loading? <option value="Загрузка...">Заугрузка...</option>:
                        props.list && props.list.length?
                            props.list.map((el, i) => <option key={i} value={`${el.title}|${el.id}`}>{el.title}</option>):
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