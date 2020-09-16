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
import GlobalHook from "../../global-loader/GlobalHook";
import './table-body.css'

function timestampToDate(ts) {
    return ("" + (new Date(ts)).toISOString())
        .replace(/^([^T]+)T(.+)$/, '$1')
        .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')
}

const TableBody = props => {
    const {objectDeleteStartAsync, objects, token, fetchObjectStartAsync, loading, objectLoading} = props
    return (
        <>
            {loading && <GlobalHook value={'Удаление...'}/>}
            {objectLoading && <GlobalHook value={'Загрузка объекта...'}/>}
            <tbody>
            {
                objects.map((el, i) => (
                    <tr key={i} className={'tbody-tr'}>
                        <td>{props.page * props.numberElements + i + 1}</td>
                        <td className={'tbody-address'}
                            onClick={() => fetchObjectStartAsync(token, el.id, () => {
                                props.history.push('/add_object')
                            })}
                        >{el.state_region_name} / {el.town_name} / {el.street_name} д.{el.house_number}</td>
                        <td>
                            <div className="tbody-agent">
                                <h4>{el.contact_name}</h4>
                                <p>{el.contact_phone_1}</p>
                            </div>
                        </td>
                        <td className={'tbody-category'}>
                            {reverseAccordance(el.parent) === 'Продажа, Жилая' && <div className={'tbody-category__blue tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Продажа, Загородная' && <div className={'tbody-category__pink tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Продажа, Коммерческая' && <div className={'tbody-category__yellow tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Аренда, Жилая' && <div className={'tbody-category__white tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Аренда, Загородная' && <div className={'tbody-category__grey tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Аренда, Коммерческая' && <div className={'tbody-category__green tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Строительство, Новостройки' && <div className={'tbody-category__dark-blue tbody-category_status'}/>}
                            {reverseAccordance(el.parent) === 'Строительство, Недвижимость за рубежом' && <div className={'tbody-category__red tbody-category_status'}/>}
                            <p>{reverseAccordance(el.parent)==='Строительство, Недвижимость за рубежом'?'Строительство, За рубежом':  reverseAccordance(el.parent)}</p>
                        </td>
                        <td>{el.id}</td>
                        <td className={'tbody-date'}>{timestampToDate(el.createdon)}</td>
                        <td className="tbody-options">
                            <p title={'Редактировать'}><EditLogo className={'tbody-options__option'}
                                      onClick={() => fetchObjectStartAsync(token, el.id, () => {
                                          props.history.push('/add_object')
                                      })}
                            /></p>
                            {
                                el.published? <p title={'Скрыть'}><NoViewLogo className={'tbody-options__option'}/></p>
                                : <p title={'Опубликовать'}><ViewLogo className={'tbody-options__option'}/></p>
                            }
                            <p title={'Удалить'}><DeleteLogo onClick={() => objectDeleteStartAsync(token, el.id)}
                                        className={'tbody-options__option'}
                            /></p>
                            <p title={'Смотреть на сайте'}>
                                <ShareLogo className={'tbody-options__option'}
                                            onClick={() => {window.open(`http://urielt.by/${el.uri}`)}}
                            /></p>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </>
    )
}

const mapStateToProps = state => ({
    loading: state.object.deleteObjectLoading,
    token: state.user.loginSuccess,
    objectLoading: state.object.fetchObjectLoading
})

const mapDispatchToProps = dispatch => ({
    objectDeleteStartAsync: (token, id) => dispatch(objectDeleteStartAsync(token, id)),
    fetchObjectStartAsync: (token, id, cb) => dispatch(fetchObjectStartAsync(token, id, cb))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TableBody)