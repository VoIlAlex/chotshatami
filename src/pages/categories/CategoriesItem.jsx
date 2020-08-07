import React from 'react'

import './categories-item.css'

const CategoriesItem = props => {
    return (
        <div className="categories-item">
            <h5>{props.category}</h5>
        </div>
    )
}

export default CategoriesItem