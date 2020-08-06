import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import TransparentButton from "../../transparent-button/TransparentButton";
import './product-image.css'

const ProductImage = () => {
    return (
        <div className="product-image">
            <HeadComponent
                width={'97%'}
                h2={'Изображение продукта'}
                h2FontSize={'20px'}
                p={'К списку'}
                btnWidth={'130px'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                reverse
            />

            <div className="product-image__upload-input">
                <input type="text" placeholder={'Загрузить изображение'}/>
                <input type="file" name="file" className="inputfile"/>
                <label htmlFor="file">Выбрать файл</label>
                <TransparentButton
                    width={'110px'}
                    height={'45px'}
                    margin={'0 0 0 30px'}
                >Загрузить</TransparentButton>
            </div>
        </div>
    )
}

export default ProductImage