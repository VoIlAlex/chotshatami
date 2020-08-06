import React from 'react'

import './transparent-button.css'

const TransparentButton = props => {
    return (
            <button
                className={'transparent-button'}
                style={{width: props.width, height: props.height, fontSize: props.fontSize, margin: props.margin}}
            >{props.children}
            </button>
    )
}

export default TransparentButton