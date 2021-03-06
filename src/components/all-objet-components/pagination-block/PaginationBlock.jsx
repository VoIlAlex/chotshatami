import React, {useState} from 'react'

import './pagination-block.css'

const PaginationBlock = props => {
    const {numberElements, setNumberElements, fetchObjectsByStringStartAsync, setPage,
        searchStr, setSearchStr, page, page_size, sortName, dir } = props
    const [pageNumber, setPageNumber] = useState({
        25: true,
        50: false,
        100: false,
        250: false,
        500: false
    })

    const pageHandler = value => {
        const newState = {}
        Object.keys(pageNumber).map(el => el === value ? newState[el] = true : newState[el] = false)
        setNumberElements(value)
        setPage(0)
        setPageNumber(newState)
    }

    const handleSearch = e => {
        if(e.key==='Enter'){
            fetchObjectsByStringStartAsync(searchStr, page, numberElements, sortName, dir)
        }
    }

    return (
        <div className="pagination-block">
            <div className="elements-counter">
                <p>Показать</p>
                <ul>
                    <li
                        className={numberElements === 25 ? 'selected' : ''}
                        onClick={() => pageHandler('25')}
                    >25
                    </li>
                    <li
                        className={numberElements === 50 ? 'selected' : ''}
                        onClick={() => pageHandler('50')}
                    >50
                    </li>
                    <li
                        className={numberElements === 100 ? 'selected' : ''}
                        onClick={() => pageHandler('100')}
                    >100
                    </li>
                    <li
                        className={numberElements === 250 ? 'selected' : ''}
                        onClick={() => pageHandler('250')}
                    >250
                    </li>
                    <li
                        className={numberElements === 500 ? 'selected' : ''}
                        onClick={() => pageHandler('500')}
                    >500
                    </li>
                </ul>
                <p>на страницу</p>
            </div>
            <div className="pagination-block__search-input" onEnter>
                <p>Поиск</p>
                <input type="text"
                       value={searchStr}
                       onChange={e => setSearchStr(e.target.value)}
                       onKeyDown={handleSearch}
                />
            </div>
        </div>
    )
}

export default PaginationBlock