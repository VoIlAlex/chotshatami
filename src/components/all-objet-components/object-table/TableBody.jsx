import React from 'react'

//TODO delete testData file
import {testData} from "./testData";
import {ReactComponent as ShareLogo} from '../../../asserts/share.svg'
import {ReactComponent as NoViewLogo} from '../../../asserts/no-view.svg'
import {ReactComponent as EditLogo} from '../../../asserts/edit.svg'
import {ReactComponent as DeleteLogo} from '../../../asserts/delete.svg'
import {ReactComponent as ViewLogo} from '../../../asserts/view.svg'
import './table-body.css'

const TableBody = () => {
    return (
        <tbody>
        {
            testData.map((el, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td className={'tbody-address'}>{el.address.region}/{el.address.city}/{el.address.street}</td>
                    <td>
                        <div className="tbody-agent">
                            <h4>{el.agent.name}</h4>
                            <p>{el.agent.number}</p>
                        </div>
                    </td>
                    <td className={'tbody-category'}>
                        <div className={
                            `${el.category==='Продажа, Жилая'?
                                'tbody-category__blue':'tbody-category__red'} tbody-category_status`
                        } />
                        <p>{el.category}</p>
                    </td>
                    <td>{el.id}</td>
                    <td>{el.addDate}</td>
                    <td className="tbody-options">
                        <EditLogo className={'tbody-options__option'}/>
                        <NoViewLogo className={'tbody-options__option'}/>
                        <DeleteLogo className={'tbody-options__option'}/>
                        <ShareLogo className={'tbody-options__option'}/>
                    </td>
                </tr>
            ))
        }
        </tbody>
    )
}

export default TableBody