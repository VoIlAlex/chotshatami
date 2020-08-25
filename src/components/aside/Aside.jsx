import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'

import AsideOpen from "./AsideOpen";
import AsideClose from "./AsideClose";
import './aside.css'

const Aside = props => {
    let location = useLocation().pathname
    const {show, setShow} = props
    return (
        <>
            <AsideOpen
                setShow={setShow}
                location={location}
                show={show}
            />
            <AsideClose
                setShow={setShow}
                location={location}
                show={show}
            />
        </>
    )
}

export default Aside