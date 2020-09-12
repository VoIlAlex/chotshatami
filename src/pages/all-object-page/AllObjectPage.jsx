import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { fetchObjectsStartAsync } from "../../redux/objects/objectsActions";
import HeadComponent from "../../components/head-component/HeadComponent";
import PaginationBlock from "../../components/all-objet-components/pagination-block/PaginationBlock";
import ObjectTable from "../../components/all-objet-components/object-table/ObjectTable";
import PagePagination from "../../components/all-objet-components/page-pagination/PagePagination";
import './all-object-page.css'

const AllObjectPage = props => {
    const { history, width, margin, objects, fetchObjectsLoading, fetchObjectsStartAsync } = props
    const [numberElements, setNumberElements] = useState(25)
    useEffect(()=>{
        fetchObjectsStartAsync(1, 25, 'id')
    }, [numberElements])
    return (
        <div
            className="all-object-page"
            style={{width, margin}}
        >
            <HeadComponent
                h2={`Всего объектов: ${objects.length}`}
                h2Margin={'0 0 0 1.4vw'}
                btnWidth={'55%'}
                btnHeight={'50px'}
                buttonValue={'Добавить объект'}
                onClick={() => history.push('/add_object')}
            />
            <PaginationBlock numberElements={numberElements} setNumberElements={setNumberElements}/>
            <ObjectTable objects={objects}  loading={fetchObjectsLoading}/>
            <PagePagination numberElements={numberElements}/>
        </div>
    )
}

const mapStateToProps = state => ({
    objects: state.object.fetchObjectsSuccess,
    fetchObjectsLoading: state.object.fetchObjectsLoading
})

const mapDispatchToProps = dispatch => ({
    fetchObjectsStartAsync: (page, page_size, sort_name) => dispatch(fetchObjectsStartAsync(page, page_size, sort_name))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AllObjectPage)