import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import './CEO-data.css'

const CEOData = props => {
    const { stateCeoCategory, setState} = props
    return (
        <div className="ceo-data">
            <HeadComponent
                width={'97%'}
                h2={'СЕО данные'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'50%'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                onClick={() => props.updateObject({...stateCeoCategory, id: props.id}, props.token, 'seo')}
                reverse
            />
            <FormInput
                labelValue={'Название страницы (meta title)'}
                width={'97%'}
                description={'Максимально 80 символов'}
                maxlength={'80'}
                value={stateCeoCategory.pagetitle}
                onChange={e => setState({...stateCeoCategory, pagetitle:e.target.value})}
            />
            <FormInput
                labelValue={'Ключевые слова (meta keywords)'}
                width={'97%'}
                description={'Максимально 250 символов'}
                maxlength={'250'}
                value={stateCeoCategory.key_words}
                onChange={e => setState({...stateCeoCategory, key_words:e.target.value})}
            />
            <FormInput
                labelValue={'Описание (meta description)'}
                width={'97%'}
                description={'Максимально 160 символов'}
                maxlength={'160'}
                margin={'0 0 15px 0'}
                value={stateCeoCategory.description}
                onChange={e => setState({...stateCeoCategory, description:e.target.value})}
            />
        </div>
    )
}

export default CEOData