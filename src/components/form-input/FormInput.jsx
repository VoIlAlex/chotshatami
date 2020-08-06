import React from 'react'

import './form-input.css'

const FormInput = props => {
    return (
        <div
            className="form-input"
            style={{
                width:props.width,
                margin: props.margin
            }}
        >
            <label>{props.labelValue}</label>
            <input
                type="text"
                placeholder={props.placeholder}
            />
            { props.description&&(<small className={'form-input__description'}>{props.description}</small>) }
        </div>
    )
}

export default FormInput