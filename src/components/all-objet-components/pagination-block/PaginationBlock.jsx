import React from 'react'

import './pagination-block.css'

const PaginationBlock = () => {
    return (
        <div className="pagination-block">
            <div className="elements-counter">
                <p>Показать</p>
                <ul>
                    <li>25</li>
                    <li>50</li>
                    <li>100</li>
                    <li>250</li>
                    <li className={'selected'}>500</li>
                </ul>
                <p>на страницу</p>
            </div>
            <div className="pagination-block__search-input">
                <p>Поиск</p>
                <input type="text"/>
            </div>
        </div>
    )
}

export default PaginationBlock