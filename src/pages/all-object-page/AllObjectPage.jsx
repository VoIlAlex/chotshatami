import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {fetchObjectsStartAsync, fetchObjectsByStringStartAsync} from "../../redux/objects/objectsActions";
import {ReactComponent as Loader} from "../../asserts/loader.svg";
import HeadComponent from "../../components/head-component/HeadComponent";
import PaginationBlock from "../../components/all-objet-components/pagination-block/PaginationBlock";
import ObjectTable from "../../components/all-objet-components/object-table/ObjectTable";
import PagePagination from "../../components/all-objet-components/page-pagination/PagePagination";
import './all-object-page.css'

const AllObjectPage = props => {
    const {history, width, margin, objects, fetchObjectsLoading, fetchObjectsStartAsync, fetchObjectsByStringStartAsync} = props
    const [page, setPage] = useState( 0)
    const [numberElements, setNumberElements] = useState(objects.per_page)
    const [sortName, setSortName] = useState('id')
    const [direction, setDirection] = useState('ASC')
    const [searchStr, setSearchStr] = useState('')
    console.log(page)
    useEffect(() => {
        fetchObjectsStartAsync(props.token, page, numberElements, sortName, direction)
    }, [fetchObjectsStartAsync, page, numberElements, sortName, direction])


    const directionHandler = dir => {
        if(dir==='ASC'){
            setDirection('DESC')
        }else if(dir==='DESC'){
            setDirection('ASC')
        }
    }
    if (fetchObjectsLoading) {
        return <div className="all-object__loader">
            <Loader/>
        </div>
    }
    return (
        <div
            className="all-object-page"
            style={{width, margin}}
        >
            <HeadComponent
                h2={`Всего объектов: ${objects.count}`}
                h2Margin={'0 0 0 1.4vw'}
                btnWidth={'55%'}
                btnHeight={'50px'}
                buttonValue={'Добавить объект'}
                onClick={() => history.push('/categories')}
            />
            <PaginationBlock numberElements={objects.per_page}
                             setNumberElements={setNumberElements}
                             setPage={setPage}
                             fetchObjectsByStringStartAsync={fetchObjectsByStringStartAsync}
                             searchStr={searchStr}
                             setSearchStr={setSearchStr}
            />
            <ObjectTable  sortName={sortName} setSortName={setSortName}
                          objects={objects.items} loading={fetchObjectsLoading}
                          direction={direction} directionHandler={directionHandler}
                          page={objects.page} numberElements={objects.per_page}
                          searchStr={searchStr}
            />
            <PagePagination numberElements={objects.per_page} length={objects.items.length}
                            setPage={setPage} pages={objects.pages} page={objects.page}
                            count={objects.count}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    objects: state.object.fetchObjectsSuccess,
    fetchObjectsLoading: state.object.fetchObjectsLoading,
    token: state.user.loginSuccess
})

const mapDispatchToProps = dispatch => ({
    fetchObjectsStartAsync: (token, page, page_size, sort_name, dir) => dispatch(fetchObjectsStartAsync(token, page, page_size, sort_name, dir)),
    fetchObjectsByStringStartAsync: (string, cb) => dispatch(fetchObjectsByStringStartAsync(string, cb))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AllObjectPage)