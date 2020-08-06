import React from 'react'

import HeadComponent from "../../components/head-component/HeadComponent";
import MainInf from "../../components/add-object-components/main-inf/MainInf";
import ProductImage from "../../components/add-object-components/ProductImage/ProductImage";
import CEOData from "../../components/add-object-components/CEOData/CEOData";
import Status from "../../components/add-object-components/status/Status";
import Seller from "../../components/add-object-components/seller/Seller";
import './add-object-page.css'

const AddObjectPage = () => {
    return (
        <div className={'add-object-page'}>
            <HeadComponent
                h2={'Добавить объект'}
                h2Margin={'0 0 0 30px'}
                p={'К списку'}
                btnWidth={'200px'}
                btnHeight={'50px'}
                buttonValue={'Сохранить'}
            />
            <div className="add-object-page__forms">
                <div className="add-object-page__forms-left">
                    <MainInf/>
                    <ProductImage/>
                    <CEOData/>
                </div>
                <div className="add-object-page__forms-right">
                    <Status/>
                    <Seller />
                </div>
            </div>

        </div>
    )
}

export default AddObjectPage