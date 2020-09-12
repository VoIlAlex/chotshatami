import React from 'react'

import { reverseAccordance } from "../../../utils/accodanceCategory";
import {ReactComponent as ShareLogo} from '../../../asserts/share.svg'
import {ReactComponent as NoViewLogo} from '../../../asserts/no-view.svg'
import {ReactComponent as EditLogo} from '../../../asserts/edit.svg'
import {ReactComponent as DeleteLogo} from '../../../asserts/delete.svg'
import {ReactComponent as ViewLogo} from '../../../asserts/view.svg'
import './table-body.css'

const TableBody = props => {
    return (
        <tbody>
        {
            props.objects.map((el, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td className={'tbody-address'}>{el.state_region_name}/{el.town_name}/{el.street_name}</td>
                    <td>
                        <div className="tbody-agent">
                            <h4>{el.contact_name}</h4>
                            <p>{el.contact_phone_1}</p>
                        </div>
                    </td>
                    <td className={'tbody-category'}>
                        <div className={
                            `${reverseAccordance(el.category)==='Продажа, Жилая'?
                                'tbody-category__blue':'tbody-category__red'} tbody-category_status`
                        } />
                        <p>{reverseAccordance(el.category)}</p>
                    </td>
                    <td>{el.id}</td>
                    <td>{el.createdon}</td>
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