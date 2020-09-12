import React from 'react'

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import {ReactComponent as Loader} from "../../../asserts/loader.svg";
import './object-table.css'

const ObjectTable = props => {
    if (props.loading) {
        return (
            <>
                <div className="loader-table">
                    <Loader/>
                </div>
            </>
        )
    }
    return (
        <table className={'object-table'}>
            <TableHead/>
            <TableBody objects={props.objects}/>
        </table>
    )
}

export default ObjectTable