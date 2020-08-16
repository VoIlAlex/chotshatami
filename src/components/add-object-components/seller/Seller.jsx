import React from 'react'

import FormInput from "../../form-input/FormInput";
import HeadComponent from "../../head-component/HeadComponent";
import './seller.css'

const Seller = () => {
    return (
        <div className="seller">
            <HeadComponent
                width={'90%'}
                h2={'Продавец'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'55%'}
                btnHeight={'40px'}
                buttonValue={'Сохранить'}
                optionWidth={'50%'}
                optionMargin={'0'}
                reverse
            />
            <div className="seller_inputs">
                <FormInput labelValue={'Контактный телефон (+375291234567)'} width={'95%'} margin={'15px 0 0 15px'}/>
                <FormInput labelValue={'Контактный телефон 2 (+375291234567)'}  width={'95%'} margin={'15px 0 0 15px'}/>
                <FormInput labelValue={'Имя агента (+375291234567)'}  width={'95%'} margin={'15px 0 0 15px'}/>
                <FormInput labelValue={'Email продавца (+375291234567)'}  width={'95%'} margin={'15px 0 0 15px'}/>
                <FormInput labelValue={'Цена в USD (+375291234567)'}  width={'95%'} margin={'15px 0 15px 15px'}/>
            </div>
        </div>
    )
}

export default Seller