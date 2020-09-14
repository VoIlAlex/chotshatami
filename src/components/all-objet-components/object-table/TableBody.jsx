import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import {objectDeleteStartAsync, fetchObjectStartAsync} from "../../../redux/objects/objectsActions";
import {reverseAccordance} from "../../../utils/accodanceCategory";
import {ReactComponent as ShareLogo} from '../../../asserts/share.svg'
import {ReactComponent as NoViewLogo} from '../../../asserts/no-view.svg'
import {ReactComponent as EditLogo} from '../../../asserts/edit.svg'
import {ReactComponent as DeleteLogo} from '../../../asserts/delete.svg'
import {ReactComponent as ViewLogo} from '../../../asserts/view.svg'
import './table-body.css'

function timestampToDate(ts) {
    return ("" + (new Date(ts)).toISOString())
        .replace(/^([^T]+)T(.+)$/, '$1')
        .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')
}

const TableBody = props => {
    const {objectDeleteStartAsync, objects, token, fetchObjectStartAsync} = props
    return (
        <tbody>
        {
            objects.map((el, i) => (
                <tr key={i}>
                    <td>{ props.page * props.numberElements + i +1}</td>
                    <td className={'tbody-address'}>{el.state_region_name} / {el.town_name} / {el.street_name} д.{el.house_number}</td>
                    <td>
                        <div className="tbody-agent">
                            <h4>{el.contact_name}</h4>
                            <p>{el.contact_phone_1}</p>
                        </div>
                    </td>
                    <td className={'tbody-category'}>
                        <div className={
                            `${reverseAccordance(el.parent) === 'Продажа, Жилая' ?
                                'tbody-category__blue' : 'tbody-category__red'} tbody-category_status`
                        }/>
                        <p>{reverseAccordance(el.parent)}</p>
                    </td>
                    <td>{el.id}</td>
                    <td className={'tbody-date'}>{timestampToDate(el.createdon)}</td>
                    <td className="tbody-options">
                        <EditLogo className={'tbody-options__option'}
                                  onClick={() => fetchObjectStartAsync(token, el.id, () => {
                                      props.history.push('/add_object')
                                  })}
                        />
                        <NoViewLogo className={'tbody-options__option'}/>
                        <DeleteLogo onClick={() => objectDeleteStartAsync(token, el.id)}
                                    className={'tbody-options__option'}/>
                        <ShareLogo className={'tbody-options__option'}/>

                    </td>
                </tr>
            ))
        }
        </tbody>
    )
}

const mapStateToProps = state => ({
    loading: state.object.deleteObjectLoading,
    token: state.user.loginSuccess
})

const mapDispatchToProps = dispatch => ({
    objectDeleteStartAsync: (token, id) => dispatch(objectDeleteStartAsync(token, id)),
    fetchObjectStartAsync: (token, id, cb) => dispatch(fetchObjectStartAsync(token, id, cb))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TableBody)