import React from 'react'
import {withRouter, Link} from 'react-router-dom'

import './categories-item.css'

const CategoriesItem = props => {
    return (
        <div className="categories-item">
            <h5><Link to={{
                pathname: '/add_object',
                additionalCategory: props.category,
                mainCategory: props.categoryName
            }}>{props.category}</Link></h5>
        </div>
    )
}

export default withRouter(CategoriesItem)