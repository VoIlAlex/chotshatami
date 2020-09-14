import React from 'react'

import CategoriesItem from "./CategoriesItem";
import './categories-list.css'

const CategoriesList = props => {
    return (
        <div className="categories-list">
            <p>{props.categoryName}</p>
            {
                props.categories.map((category, i) =>
                    <CategoriesItem
                        key={i}
                        category={category}
                        categoryName={props.categoryName}
                    />)
            }
        </div>
    )
}

export default CategoriesList