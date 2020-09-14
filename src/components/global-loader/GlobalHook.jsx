import React from 'react'
import ReactDOM from 'react-dom'
import {ReactComponent as Loader} from "../../asserts/loader.svg";

import './global-hook.css'

const GlobalHook = () => {
    const content =  <div className="global-loader" />
    return ReactDOM.createPortal(content, document.getElementById('global-hook'))
}

export default GlobalHook