import React, {useState} from 'react'

import './pagination-block.css'

const PaginationBlock = props => {

    const [pageNumber, setPageNumber] = useState({
        25: true,
        50:false,
        100:false,
        250:false,
        500:false
    })

    const pageHandler = value => {
        const newState = {}
        Object.keys(pageNumber).map(el => el === value ? newState[el] = true : newState[el] = false)
        props.setNumberElements(value)
        setPageNumber(newState)
    }
    return (
        <div className="pagination-block">
            <div className="elements-counter">
                <p>Показать</p>
                <ul>
                    <li
                        className={pageNumber['25']?'selected': ''}
                        onClick={() => pageHandler('25')}
                    >25</li>
                    <li
                        className={pageNumber['50']?'selected': ''}
                        onClick={() => pageHandler('50')}
                    >50</li>
                    <li
                        className={pageNumber['100']?'selected': ''}
                        onClick={() => pageHandler('100')}
                    >100</li>
                    <li
                        className={pageNumber['250']?'selected': ''}
                        onClick={() => pageHandler('250')}
                    >250</li>
                    <li
                        className={pageNumber['500']?'selected': ''}
                        onClick={() => pageHandler('500')}
                    >500</li>
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