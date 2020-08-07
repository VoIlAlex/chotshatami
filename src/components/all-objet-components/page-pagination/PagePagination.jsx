import React from 'react'

import './page-pagination.css'

const PagePagination = () => {
    return (
        <div className="page-pagination">
            <p>Показано 1 по 25 из 705 записей</p>
            <div className="page-pagination__pagination">
                <p>&#8592; &nbsp;Предыдущая</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li className={'selected'}>14</li>
                    <li>15</li>
                </ul>
                <p>Следующая &nbsp;	&#8594; </p>
            </div>
        </div>
    )
}

export default PagePagination