import React from 'react'

import {ReactComponent as ArrowDown} from '../../../asserts/down.svg'
import {ReactComponent as ArrowDownDark} from '../../../asserts/down-dark.svg'
import {ReactComponent as ArrowUp} from '../../../asserts/up.svg'
import {ReactComponent as ArrowUpDark} from '../../../asserts/up-dark.svg'
import './table-head.css'

const accordance = {
    'Объект': 'state_region_name',
    'Агент': 'contact_name',
    'Категория': 'parent',
    'ID': 'id',
    'Добавлено':'createdon'
}

const columns = ['№', 'Объект', 'Агент', 'Категория', 'ID', 'Добавлено', 'Действия']

const TableHead = props => {
    const {direction, sortName} = props
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
                            {
                                sortName === accordance[column]? direction==='ASC'?
                                    <p>
                                        <ArrowDown className={'arrow-up'}/>
                                        <ArrowUpDark className={'arrow-down'}/>
                                        {column}
                                    </p>:
                                    <p>
                                        <ArrowDownDark className={'arrow-up'}/>
                                        <ArrowUp className={'arrow-down'}/>
                                        {column}
                                    </p>: <p>
                                    <ArrowDown className={'arrow-up'}/>
                                    <ArrowUp className={'arrow-down'}/>
                                    {column}
                                </p>
                            }
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