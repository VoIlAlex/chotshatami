import React from 'react'

import './aside-button.css'

const AsideButton = props => {
    return (
        <button
            className={`${props.selected? 'selected': ''} aside-button`}
        >
            {props.children}
        </button>
    )
}

export default AsideButton