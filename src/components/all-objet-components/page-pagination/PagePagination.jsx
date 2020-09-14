import React from 'react'
import ReactPaginate from 'react-paginate';

import './page-pagination.css'

const PagePagination = props => {
    return (
        <div className="page-pagination">
            <p>Показано с {props.page===0? 1: props.page * props.numberElements} по { (props.page + 1) * props.numberElements > props.count? props.count: (props.page + 1) * props.numberElements} из {props.count}
            </p>
            <div className="page-pagination__pagination">
                <ReactPaginate
                    forcePage={props.page}
                    pageCount={props.pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    activeClassName={'selected'}
                    onPageChange={data => props.setPage(data.selected)}
                    breakLabel={'..'}
                    previousLabel={'Предыдущая'}
                    nextLabel={'Следующая'}
                />
            </div>
        </div>
    )
}

export default PagePagination