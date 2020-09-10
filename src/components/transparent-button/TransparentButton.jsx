import React from 'react'

import './transparent-button.css'

const TransparentButton = props => {
    return (
            <button
                className={`transparent-button ${props.classList}`}
                onClick={props.onClick ? () => props.onClick() : () => {}}
                style={{width: props.width, height: props.height, fontSize: props.fontSize, margin: props.margin}}
                {...props}
            >{props.children}
            </button>
    )
}

export default TransparentButton