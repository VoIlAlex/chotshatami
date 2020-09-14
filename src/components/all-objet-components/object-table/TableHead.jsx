import React from 'react'

import {ReactComponent as ArrowDown} from '../../../asserts/down.svg'
import {ReactComponent as ArrowUp} from '../../../asserts/up.svg'
import './table-head.css'

const accordance = {
    'Объект': 'state_region_name',
    'Агент': 'contact_name',
    'Категория': 'parent',
    'ID': 'id',
    'Добавлено':'createdon'
}

const TableHead = props => {
    const columns = ['№', 'Объект', 'Агент', 'Категория', 'ID', 'Добавлено', 'Действия']
    return (
        <thead>
        <tr>
            {
                columns.map((column, i) => {
                    if(i===columns.length-1){
                        return (<td key={i}><p>{column}</p></td>)
                    }
                    return (
                        <td className={'head-td'} key={i} onClick={() => {
                            props.setSortName(accordance[column])
                            props.dirHandler(props.direction)
                        }}>
                            <p>
                                <ArrowDown className={'arrow-up'}/>
                                <ArrowUp className={'arrow-down'}/>
                                {column}
                            </p>
                        </td>
                    )
                }
                )
            }
        </tr>
        </thead>
    )
}

export default TableHead