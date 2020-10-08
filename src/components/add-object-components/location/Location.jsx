import React, { useState } from 'react'

import Backdrop from "../../backdrop/Backdrop";
import HeadComponent from "../../head-component/HeadComponent";
import Select from "../../select/Select";
import FormInput from "../../form-input/FormInput";
import './location.css'

const type = ['г.', 'аг.', 'гп.', 'д.', 'пгт.', 'рп.', 'с.', 'снп.']
const regionsList = ['Брестская область', 'Витебская область', 'Гомельская область', 'Гродненская область', 'Минская область', 'Могилевская область']

const Location = props => {
    const { setState, stateLocationCategory } = props
    const [searchFieldCountry, setSearchFieldCountry] = useState( '')
    const [searchFieldRegion, setSearchFieldRegion] = useState('')
    const [showCountrySelect, setShowCountrySelect] = useState(false)
    const [showRegionSelect, setShowRegionSelect] = useState(false)
    const filterRegions = regionsList.filter(region => region.toLowerCase().includes(searchFieldRegion.toLowerCase()))
    return (
        <>
            { showCountrySelect && <Backdrop onClick={setShowCountrySelect}/> }
            { showRegionSelect && <Backdrop onClick={setShowRegionSelect}/> }
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
                    disabled={props.disabled}
                    optionMargin={'0'}
                    onClick={() => props.updateObject({...stateLocationCategory, id: props.id}, props.token, 'location')}
                    reverse
                />
                <div className="location__selects">
                    <Select label={'Страна'}
                            value={searchFieldCountry || stateLocationCategory.state_country }
                            list={['Беларусь']}
                            showSelect={showCountrySelect}
                            setShowSelect={setShowCountrySelect}
                            onClick={el => {
                                setSearchFieldCountry(el)
                                setState({...stateLocationCategory, state_country: el})
                            }}
                            onChange={e => {
                                setSearchFieldCountry(e.target.value)
                                setState({...stateLocationCategory, state_country: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldCountry(e)
                                setState({...stateLocationCategory, state_country: e})
                            }}
                    />
                    <Select
                        label={'Область'}
                        value={searchFieldRegion || stateLocationCategory.state_region_name}
                        list={filterRegions}
                        showSelect={showRegionSelect}
                        setShowSelect={setShowRegionSelect}
                        onClick={el => {
                            setSearchFieldRegion(el)
                            setState({...stateLocationCategory, state_region_name: el})
                        }}
                        onChange={e => {
                            setSearchFieldRegion(e.target.value)
                            setState({...stateLocationCategory, state_region_name: e.target.value})
                        }}
                        onEnter={e => {
                            setSearchFieldRegion(e)
                            setState({...stateLocationCategory, state_region_name: e})
                        }}
                    />
                    <FormInput
                        margin={'15px 0 0'}
                        width={'100%'}
                        labelValue={'Название населенного пункта'}
                        value={stateLocationCategory.town_name || stateLocationCategory.town_name}
                        onChange={e => setState({...stateLocationCategory, town_name: e.target.value})}
                    />
                    {
                        stateLocationCategory.town_name === 'Минск' &&
                        <FormInput
                            margin={'15px 0 0'}
                            width={'100%'}
                            labelValue={'Название станции метро'}
                            value={stateLocationCategory.metro || stateLocationCategory.metro}
                            onChange={e => setState({...stateLocationCategory, metro: e.target.value})}
                        />
                    }
                </div>
                <p className={'location__type'}>Тип населенного пункта</p>
                <ul className={'location__types'}>
                    {
                        type.map((el, i) => <li
                            key={i}
                            className={el===stateLocationCategory.town_type? 'active' : ''}
                            onClick={() => setState({...stateLocationCategory, town_type: el})}
                        >{el}</li>)
                    }
                </ul>
                <FormInput
                    margin={'15px 0 0'}
                    width={'90%'}
                    labelValue={'Название района населенного пункта'}
                    value={stateLocationCategory.town_district_name}
                    onChange={e => setState({...stateLocationCategory, town_district_name: e.target.value})}
                />
                <FormInput
                    margin={'15px 0 0'}
                    width={'90%'}
                    labelValue={'Название микрорайона населенного пункта'}
                    value={stateLocationCategory.town_subdistrict_name}
                    onChange={e => setState({...stateLocationCategory, town_subdistrict_name: e.target.value})}
                />
                <FormInput
                    margin={'15px 0 0'}
                    width={'90%'}
                    labelValue={'Номер дома (1, 1 к2, 1/2)'}
                    value={stateLocationCategory.house_number}
                    onChange={e => setState({...stateLocationCategory, house_number: e.target.value})}
                />
                <div className="location__coordinates">
                    <FormInput
                        margin={'15px 0 0'}
                        width={'50%'}
                        labelFontSize={'0.85em'}
                        labelValue={'Расположение, координата X'}
                        value={stateLocationCategory.coordinateX}
                        onChange={e => setState({...stateLocationCategory, coordinateX: e.target.value})}
                    />
                    <FormInput
                        margin={'15px 0 0'}
                        width={'49%'}
                        labelFontSize={'0.85em'}
                        labelValue={'Расположение, координата Y'}
                        value={stateLocationCategory.coordinateY}
                        onChange={e => setState({...stateLocationCategory, coordinateY: e.target.value})}
                    />
                </div>
            </div>
        </>
    )
}

export default Location