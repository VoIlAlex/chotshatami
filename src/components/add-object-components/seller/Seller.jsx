import React from 'react'

import FormInput from "../../form-input/FormInput";
import HeadComponent from "../../head-component/HeadComponent";
import './seller.css'

const Seller = props => {
    const { stateSellerCategory, setState } = props
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
                disabled={props.disabled}
                onClick={() => props.updateObject({...stateSellerCategory, id: props.id}, props.token, 'seller')}
                reverse
            />
            <div className="seller_inputs">
                <FormInput labelValue={'Контактный телефон'} width={'95%'} margin={'15px 0 0 15px'}
                           value={stateSellerCategory.contact_phone_1} onChange={e=>setState({...stateSellerCategory, contact_phone_1:e.target.value})}
                />
                <FormInput labelValue={'Контактный телефон 2'}  width={'95%'} margin={'15px 0 0 15px'}
                           value={stateSellerCategory.contact_phone_2} onChange={e=>setState({...stateSellerCategory, contact_phone_2:e.target.value})}
                />
                <FormInput labelValue={'Имя агента'}  width={'95%'} margin={'15px 0 0 15px'}
                           value={stateSellerCategory.contact_name} onChange={e=>setState({...stateSellerCategory, contact_name:e.target.value})}
                />
                <FormInput labelValue={'Email продавца'}  width={'95%'} margin={'15px 0 0 15px'}
                           value={stateSellerCategory.email} onChange={e=>setState({...stateSellerCategory, email:e.target.value})}
                />
                <FormInput labelValue={'Цена в USD'}  width={'95%'} margin={'15px 0 15px 15px'}
                           value={stateSellerCategory.price}
                           onChange={e=>setState({...stateSellerCategory, price:e.target.value})}
                           error={props.error}
                />
            </div>
        </div>
    )
}

export default Seller