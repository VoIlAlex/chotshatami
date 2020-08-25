import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

import HeadComponent from "../../components/head-component/HeadComponent";
import PaginationBlock from "../../components/all-objet-components/pagination-block/PaginationBlock";
import ObjectTable from "../../components/all-objet-components/object-table/ObjectTable";
import PagePagination from "../../components/all-objet-components/page-pagination/PagePagination";
import './all-object-page.css'

const AllObjectPage = props => {
    const {history, width, margin} = props
    const [numberElements, setNumberElements] = useState(25)

    return (
        <div
            className="all-object-page"
            style={{width, margin}}
        >
            <HeadComponent
                /*TODO counter in h2*/
                h2={'Всего объектов: 703'}
                h2Margin={'0 0 0 1.4vw'}
                btnWidth={'55%'}
                btnHeight={'50px'}
                buttonValue={'Добавить объект'}
                onClick={() => history.push('/add_object')}
            />
            <PaginationBlock setNumberElements={setNumberElements}/>
            <ObjectTable />
            <PagePagination numberElements={numberElements}/>
        </div>
    )
}

export default withRouter(AllObjectPage)