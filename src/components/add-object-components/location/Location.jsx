import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

import { startFetchCountries, startFetchRegions } from "../../../redux/location/locationActions";
import Backdrop from "../../backdrop/Backdrop";
import HeadComponent from "../../head-component/HeadComponent";
import Select from "../../select/Select";
import FormInput from "../../form-input/FormInput";
import './location.css'

const types = {
    'г.': 'g', 'аг.': 'ag', 'гп.': 'gp', 'д.': 'd', 'пгт.': 'pgt', 'рп.': 'rp', 'с.': 'c', 'снп.': 'cnp'
}
const type = ['г.', 'аг.', 'гп.', 'д.', 'пгт.', 'рп.', 'с.', 'снп.']

const Location = props => {
    const { setState, stateLocationCategory } = props
    useEffect(() => {
        props.startFetchCountries()
        props.startFetchRegions()
    }, [])

    const [searchFieldCountry, setSearchFieldCountry] = useState('')
    const [searchFieldRegion, setSearchFieldRegion] = useState('')
    const [showCountrySelect, setShowCountrySelect] = useState(false)
    const [showRegionSelect, setShowRegionSelect] = useState(false)
    const [filteredRegions, setFilteredRegions] = useState()
    const [coordinateX, setCoordinateX] = useState('')
    const [coordinateY, setCoordinateY] = useState('')
    const filteredCountries = props.countries.filter(country => country.name.includes(searchFieldCountry))
    const filterRegion = el => {
        setFilteredRegions(props.regions.filter(region => el.iso === region.codes.iso.split('-')[0]))
    }

    return (
        <>
            { showCountrySelect && <Backdrop onClick={setShowCountrySelect}/> }
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
                            value={searchFieldCountry.name}
                            list={filteredCountries}
                            showSelect={showCountrySelect}
                            setShowSelect={setShowCountrySelect}
                            onClick={el => {
                                setSearchFieldCountry(el)
                                setState({...stateLocationCategory, state_country: el.name})
                                filterRegion(el)
                            }}
                            onChange={e => {
                                setSearchFieldCountry(e.target.value)
                                setState({...stateLocationCategory, state_country: e.target.value})
                            }}
                    />
                    <Select
                        label={'Область'}
                        value={searchFieldRegion.name}
                        list={filteredRegions}
                        showSelect={showRegionSelect}
                        setShowSelect={setShowRegionSelect}
                        onClick={el => {
                            setSearchFieldRegion(el)
                            setState({...stateLocationCategory, state_region_name: el.name})
                        }}
                        onChange={e => setSearchFieldRegion(e.target.value)}
                    />
                    <FormInput
                        margin={'15px 0 0'}
                        width={'100%'}
                        labelValue={'Название населенного пункта'}
                        value={stateLocationCategory.town_name}
                        onChange={e => setState({...stateLocationCategory, town_name: e.target.value})}
                    />
                </div>
                <p className={'location__type'}>Тип населенного пункта</p>
                <ul className={'location__types'}>
                    {
                        type.map((el, i) => <li
                            key={i}
                            className={props.settlementType[types[el]] ? 'active' : ''}
                            onClick={() => {
                                props.cityTypeHandler(types[el])
                                setState({...stateLocationCategory, town_type: el})
                            }}
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
                        value={coordinateX}
                        onChange={e => setCoordinateX(e)}
                    />
                    <FormInput
                        margin={'15px 0 0'}
                        width={'49%'}
                        labelFontSize={'0.85em'}
                        labelValue={'Расположение, координата Y'}
                        value={coordinateY}
                        onChange={e => setCoordinateY(e)}
                    />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    countries: state.location.countries,
    regions: state.location.regions
})

const mapDispatchToProps = dispatch => ({
    startFetchCountries: () => dispatch(startFetchCountries()),
    startFetchRegions: () => dispatch(startFetchRegions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Location)