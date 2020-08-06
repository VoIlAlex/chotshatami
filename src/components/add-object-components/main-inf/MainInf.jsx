import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import './main-inf.css'

const MainInf = () => {
    return (
        <div className="main-inf">
            <HeadComponent
                width={'97%'}
                h2={'Основная информация'}
                h2FontSize={'20px'}
                p={'К списку'}
                btnWidth={'130px'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                reverse
            />
            <div className="main-inf__category">
                <div className="category__active">
                    <ul>
                        <li>Жилая</li>
                        <li>Аренда</li>
                        <li>Строительство</li>
                    </ul>
                </div>
                <div className="category__disabled">
                    <ul>
                        <li>Жилая</li>
                        <li>Загородная</li>
                        <li>Коммерческая</li>
                    </ul>
                </div>
            </div>
            <div className="main-inf__textarea">
                <label htmlFor="area"> Описание</label>
                <textarea id="area" />
            </div>
            <div className="main-inf__date-inputs">
                <FormInput
                    labelValue={'Дата создания объяления'}
                    placeholder={'dd.mm.yyyy'}
                    width={'45%'}
                />
                <FormInput
                    labelValue={'Дата редактирования (ревизии) обьявления'}
                    placeholder={'dd.mm.yyyy'}
                    width={'50%'}
                />
            </div>
        </div>
    )
}

export default MainInf