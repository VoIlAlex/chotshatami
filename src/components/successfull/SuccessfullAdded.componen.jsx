import React from 'react'
import ReactDOM from "react-dom";

import './SuccessfullAdded.style.css'

const SuccessfulAdded = (props) => {
    const content =  <div className="successful"><p>{props.value || 'Успешно'}</p></div>
    return ReactDOM.createPortal(content, document.getElementById('global-hook'))
}

export default SuccessfulAdded