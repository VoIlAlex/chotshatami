import React, {useEffect, useState} from 'react'
import fetchJsonp from 'fetch-jsonp'

import HeadComponent from "../../head-component/HeadComponent";
import Select from "../../select/Select";
import FormInput from "../../form-input/FormInput";
import './location.css'

const url = 'https://api.vk.com/method/database.getCountries?access_token=4ebc1e811e9806336bbad537e6647cea7be632c10418a2b51e8f4c226a28d22ef2d4b9434002c7c4bd53b&need_all=1&v=5.122'

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
    //yek    7561590
    // tok 4ebc1e811e9806336bbad537e6647cea7be632c10418a2b51e8f4c226a28d22ef2d4b9434002c7c4bd53b
    useEffect(() => {
        const fetchCountries = async () => {
            await fetchJsonp(url)
                .then(res => res.json())
                .then(res => { //TODO get api
                    // setCountries(res.response.items)
                    // setLoading(false)
                })
        }
        fetchCountries()
    }, [setCountries])

    const fetchRegions = async id => {
        setLoading(true)
        await fetchJsonp(`https://api.vk.com/method/database.getRegions?access_token=4ebc1e811e9806336bbad537e6647cea7be632c10418a2b51e8f4c226a28d22ef2d4b9434002c7c4bd53b&country_id=${id}&v=5.122`)
            .then(res => res.json())
            .then(res => {
                setRegions(res.response.items)
                setLoading(false)
            })
    }

    const fetchCities = async id => {
        setLoading(true)
        await fetchJsonp(`https://api.vk.com/method/database.getCities?access_token=4ebc1e811e9806336bbad537e6647cea7be632c10418a2b51e8f4c226a28d22ef2d4b9434002c7c4bd53b&country_id=${selectedCountry.id}&region_id=${id}&need_all=1&v=5.122`)
            .then(res => res.json())
            .then(res => {
                setCities(res.response.items)
                setLoading(false)
            })
    }

    const selectedCountryHandler = country => {
        setSelectedCountry(countries.filter(el => el.title === country.split('|')[0])[0])
        fetchRegions(country.split('|')[1])
    }

    const selectedRegionHandler = region => {
        setSelectedRegion(regions.filter(el => el.title === region.split('|')[0])[0])
        fetchCities(region.split('|')[1])
    }

    const settlementTypeHandler = name => {
        const newState = {}
        Object.keys(props.settlementType).map(el => el === name ? newState[el] = true : newState[el] = false)
        props.setSettlementType(newState)
    }

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
                        onChange={(el) => selectedCountryHandler(el)}
                        list={countries}
                        loading={loading}
                />
                <Select
                    label={'Область'}
                    value={'Не выбрано' || selectedRegion.title}
                    onChange={(el) => selectedRegionHandler(el)}
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
                        onClick={() => settlementTypeHandler(types[el])}
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