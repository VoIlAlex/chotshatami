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
            <TableHead direction={props.direction} dirHandler={props.directionHandler} sortName={props.sortName} setSortName={props.setSortName}/>
            <TableBody page={props.page} objects={props.objects} numberElements={props.numberElements}/>
        </table>
    )
}

export default ObjectTable