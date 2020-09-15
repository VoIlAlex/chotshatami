import React from 'react'
import ReactDOM from 'react-dom'

import './global-hook.css'

const GlobalHook = props => {
    const content =  <div className="global-loader" > <p>{props.value || 'Загрузка...'}</p></div>
    return ReactDOM.createPortal(content, document.getElementById('global-hook'))
}

export default GlobalHook