import React from 'react'

import HeadComponent from "../../components/head-component/HeadComponent";
import PaginationBlock from "../../components/all-objet-components/pagination-block/PaginationBlock";
import ObjectTable from "../../components/all-objet-components/object-table/ObjectTable";
import PagePagination from "../../components/all-objet-components/page-pagination/PagePagination";
import './all-object-page.css'

const AllObjectPage = () => {
    return (
        <div className="all-object-page">
            <HeadComponent
                /*TODO counter in h2*/
                h2={'Всего объектов: 703'}
                h2Margin={'0 0 0 30px'}
                btnWidth={'200px'}
                btnHeight={'50px'}
                buttonValue={'Добавить объект'}
            />
            <PaginationBlock />
            <ObjectTable />
            <PagePagination />
        </div>
    )
}

export default AllObjectPage