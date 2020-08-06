import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import './CEO-data.css'

const CEOData = () => {
    return (
        <div className="ceo-data">
            <HeadComponent
                width={'97%'}
                h2={'СЕО данные'}
                h2FontSize={'20px'}
                p={'К списку'}
                btnWidth={'130px'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                reverse
            />
            <FormInput
                labelValue={'Название страницы (meta title)'}
                width={'97%'}
                description={'Максимально 80 символов'}
            />
            <FormInput
                labelValue={'Ключевые слова (meta keywords)'}
                width={'97%'}
                description={'Максимально 250 символов'}
            />
            <FormInput
                labelValue={'Описание (meta description)'}
                width={'97%'}
                description={'Максимально 160 символов'}
            />
        </div>
    )
}

export default CEOData