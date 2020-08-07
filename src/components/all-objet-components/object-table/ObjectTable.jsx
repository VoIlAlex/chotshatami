import React from 'react'

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import './object-table.css'

const ObjectTable = () => {
    return (
        <table className={'object-table'}>
            <TableHead />
            <TableBody />
        </table>
    )
}

export default ObjectTable