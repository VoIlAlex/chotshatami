import React from 'react'

import {ReactComponent as ArrowDown} from '../../../asserts/down.svg'
import {ReactComponent as ArrowUp} from '../../../asserts/up.svg'
import './table-head.css'

const TableHead = () => {
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
                        <td key={i}>
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