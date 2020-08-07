import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import Select from "../../select/Select";
import FormInput from "../../form-input/FormInput";
import './location.css'

const Location = () => {
    const type = ['г.', 'аг.', 'гп.', 'д.', 'пгт.', 'рп.', 'с.', 'снп.']
    //TODO delete test array
    const testArray = ['Беларусь', 'Россия', 'Украина']
    const testArray2 = ['Минская', 'Брестская', 'Витебская']
    const testArray3 = ['Брест', 'Минск', 'Витебск']

    return (
        <div className="location">
            <HeadComponent
                width={'90%'}
                h2={'Расположение'}
                h2FontSize={'20px'}
                p={'К списку'}
                btnWidth={'110px'}
                btnHeight={'40px'}
                buttonValue={'Сохранить'}
                optionWidth={'50%'}
                optionMargin={'0 -15px 0 0'}
                reverse
            />

            <div className="location__selects">
                <Select label={'Страна'} list={testArray}/>
                <Select label={'Область'} list={testArray2}/>
                <Select label={'Название населенного пункта'} list={testArray3}/>
            </div>
            <ul className={'location__types'}>
                {type.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <FormInput
                margin={'15px 0 0'}
                width={'90%'}
                labelValue={'Название района населенного пункта'}
            />
            <FormInput
                margin={'15px 0 0'}
                width={'90%'}
                labelValue={'Название микрорайона населенного пункта'}
            />
            <FormInput
                margin={'15px 0 0'}
                width={'90%'}
                labelValue={'Номер дома (1, 1 к2, 1/2)'}
            />
            <div className="location__coordinates">
                <FormInput
                    margin={'15px 0 0'}
                    width={'50%'}
                    labelValue={'Расположение, координата X'}
                />
                <FormInput
                    margin={'15px 0 0'}
                    width={'49%'}
                    labelValue={'Расположение, координата Y'}

                />
            </div>
        </div>
    )
}

export default Location