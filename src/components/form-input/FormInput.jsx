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
            <label style={{fontSize:props.labelFontSize}}>{props.labelValue}</label>
            <input
                value={props.value}
                name={props.name}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                maxLength={props.maxlength}
                onChange={e => props.onChange(e)}
                required={!!props.required}
            />
            { props.description && (<small className={'form-input__small description'}>{props.description}</small>) }
            { props.error && (<small className={'form-input__small error'}>{props.error}</small>)}
        </div>
    )
}

export default FormInput