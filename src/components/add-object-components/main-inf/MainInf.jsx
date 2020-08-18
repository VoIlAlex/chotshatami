import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import './main-inf.css'

const MainInf = props => {
    const {mainCategory, additionalCategory, setAdditionalCategory, setMainCategory} = props

    return (
        <div className="main-inf">
            <HeadComponent
                width={'97%'}
                h2={'Основная информация'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'50%'}
                btnHeight={'45px'}
                buttonValue={'Сохранить'}
                optionWidth={'40%'}
                optionMargin={'0'}
                reverse
            />
            <div className="main-inf__category">
                <div className="category__active">
                    <ul>
                        <li
                            className={mainCategory==='sale' ? 'active' : ''}
                            onClick={() => setMainCategory('sale')}
                        >Продажа
                        </li>
                        <li
                            className={mainCategory==='rent' ? 'active' : ''}
                            onClick={() => setMainCategory('rent')}
                        >Аренда
                        </li>
                        <li
                            className={mainCategory==='building' ? 'active' : ''}
                            onClick={() => setMainCategory('building')}
                        >Строительство
                        </li>
                    </ul>
                </div>
                <div className={Object.values(mainCategory).some(el => el) ? 'category__active' : `category__disabled`}>
                    <ul>
                        {
                            mainCategory==='building'? (
                                <>
                                    <li
                                        className={additionalCategory==='abroad' ? 'active' : ''}
                                        onClick={() => setAdditionalCategory('abroad')}
                                    >Недвижимость за рубежом
                                    </li>
                                    <li
                                        className={additionalCategory==='newBuildings' ? 'active' : ''}
                                        onClick={() => setAdditionalCategory('newBuildings')}
                                    >Новостройки
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li
                                        className={additionalCategory==='residential' ? 'active' : ''}
                                        onClick={() => setAdditionalCategory('residential')}
                                    >Жилая
                                    </li>
                                    <li
                                        className={additionalCategory==='suburban' ? 'active' : ''}
                                        onClick={() => setAdditionalCategory('suburban')}
                                    >Загородная
                                    </li>
                                    <li
                                        className={additionalCategory==='commercial' ? 'active' : ''}
                                        onClick={() => setAdditionalCategory('commercial')}
                                    >Коммерческая
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="main-inf__textarea">
                <label htmlFor="area"> Описание</label>
                <textarea id="area"/>
            </div>
            <div className="main-inf__date-inputs">
                <FormInput
                    labelValue={'Дата создания объяления'}
                    placeholder={'dd.mm.yyyy'}
                    width={'45%'}
                    labelFontSize={'0.8em'}
                />
                <FormInput
                    labelValue={'Дата редактирования (ревизии) обьявления'}
                    placeholder={'dd.mm.yyyy'}
                    width={'50%'}
                    labelFontSize={'0.8em'}
                />
            </div>
        </div>
    )
}

export default MainInf