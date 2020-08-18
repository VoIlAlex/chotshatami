import React from 'react'
import {withRouter, Link} from 'react-router-dom'

import './categories-item.css'

const CategoriesItem = props => {
    return (
        <div
            className="categories-item"
        >
            {/*<h5>{props.category}</h5>*/}
            <Link to={{pathname:'/add_object',
                mainCategory: props.category,
                additionalCategory:props.categoryName
            }}>{props.category}</Link>
        </div>
    )
}

export default withRouter(CategoriesItem)