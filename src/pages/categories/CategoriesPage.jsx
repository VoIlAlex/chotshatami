import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { clearUpdateObject } from "../../redux/objects/objectsActions";
import HeadComponent from "../../components/head-component/HeadComponent";
import CategoriesList from "./CategoriesList";
import './categories-page.css'

const CategoriesPage = props => {
    props.clearUpdateObject()
    const {width, margin} = props
    const sale = ['Жилая', 'Загородная', 'Коммерческая']
    const build = ['Недвижимость за рубежом', 'Новостройки']
    return (
        <div
            className="categories-page categories_slide-in-left"
            style={{width, margin}}
        >
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

const mapDispatchToProps = dispatch => ({
    clearUpdateObject: () => dispatch(clearUpdateObject())
})

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(CategoriesPage)