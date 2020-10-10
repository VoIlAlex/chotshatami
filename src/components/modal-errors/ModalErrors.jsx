import React from 'react'

import './modal-errors.css'

const ModalErrors = () => {
    return (
        <div className={'modal-errors'}>
            <div>
                <h3>Заполните обязательные поля:</h3>
                <p>Описание</p>
                <p>Название страницы</p>
                <p>Цена</p>
            </div>
        </div>
    )
}

export default ModalErrors