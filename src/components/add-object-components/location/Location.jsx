import React, {useEffect, useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import Select from "../../select/Select";
import FormInput from "../../form-input/FormInput";
import './location.css'

const types = {
    'г.': 'g', 'аг.': 'ag', 'гп.': 'gp', 'д.': 'd', 'пгт.': 'pgt', 'рп.': 'rp', 'с.': 'c', 'снп.': 'cnp'
}

const Location = props => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [regions, setRegions] = useState([])
    const [cities, setCities] = useState([])

    const type = ['г.', 'аг.', 'гп.', 'д.', 'пгт.', 'рп.', 'с.', 'снп.']

    return (
        <div className="location">
            <HeadComponent
                width={'90%'}
                h2={'Расположение'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'55%'}
                btnHeight={'40px'}
                buttonValue={'Сохранить'}
                optionWidth={'55%'}
                optionMargin={'0'}
                reverse
            />
            <div className="location__selects">
                <Select label={'Страна'}
                        value={'Не выбрано' || selectedCountry.title}
                        list={countries}
                        loading={loading}
                />
                <Select
                    label={'Область'}
                    value={'Не выбрано' || selectedRegion.title}
                    list={regions}
                />
                <Select
                    label={'Название населенного пункта'}
                    list={cities}
                    loading={loading}
                    city={true}
                />
            </div>
            <p className={'location__type'}>Тип населенного пункта</p>
            <ul className={'location__types'}>
                {
                    type.map((el, i) => <li
                        key={i}
                        className={props.settlementType[types[el]]? 'active': ''}
                    >{el}</li>)
                }
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
                    labelFontSize={'0.85em'}
                    labelValue={'Расположение, координата X'}
                />
                <FormInput
                    margin={'15px 0 0'}
                    width={'49%'}
                    labelFontSize={'0.85em'}
                    labelValue={'Расположение, координата Y'}
                />
            </div>
        </div>
    )
}

export default Location