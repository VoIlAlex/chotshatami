import React from 'react'
import { useLocation } from 'react-router-dom'

import Aside from "./Aside";

const ShowAside = props => {
    const {show, setShow} = props
    let location = useLocation().pathname
    if(location === '/login' || location === '/reset_password') return null

    return (
        <Aside show={show} setShow={setShow}/>
    )
}

export default ShowAside