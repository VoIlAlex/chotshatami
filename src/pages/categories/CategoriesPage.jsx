import React from 'react'

import HeadComponent from "../../components/head-component/HeadComponent";
import CategoriesList from "./CategoriesList";
import './categories-page.css'

const CategoriesPage = () => {
    const sale = ['Жилая', 'Загородная', 'Коммерческая']
    const build = ['Недвижимость за рубежом', 'Новостройки']
    return (
        <div className="categories-page">
            <HeadComponent
                h2={'Категория'}
                h2Margin={'0 0 0 30px'}
                display={'none'}
            />
            <div className="categories-page__categories">
                <CategoriesList
                    categoryName={'Продажа'}
                    categories={sale}
                />
                <CategoriesList
                    categoryName={'Аренда'}
                    categories={sale}
                />
                <CategoriesList
                    categoryName={'Строительство'}
                    categories={build}
                />
            </div>
        </div>
    )
}

export default CategoriesPage