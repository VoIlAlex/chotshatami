import React, {useState} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter} from 'react-router-dom'

import HeadComponent from "../head-component/HeadComponent";
import Select from "../select/Select";
import FormInput from "../form-input/FormInput";
import InputWithOperations from "../input-with-operations/InputWithOperation";
import TransparentButton from "../transparent-button/TransparentButton";
import Backdrop from "../backdrop/Backdrop";
import {filterOptions} from "../../utils/roomHandler";
import {ReactComponent as Loader} from "../../asserts/loader.svg";


const RentCommercial = props => {
    const {state, setState, sendObject, options, addObjectLoading} = props
    const [rooms, setRooms] = useState({ storey: 0, storeys: 0 })

    const [phoneCounter, setPhoneCount] = useState({
        hasPhone: false,
        dontHasPhone: false,
        twoOrMorePhone: false
    })

    const [urFace, setUrFace] = useState({
        yes: false,
        no: false
    })

    const [searchFieldOption, setSearchFieldOption] = useState({
        lavatorySearch: '',
        wallsSearch: '',
        waterSearch: '',
        gasSearch: '',
        heatingSearch: '',
        electroSearch: '',
        sewerageSearch: '',
        subcategorySearch: '',
        trimSearch: '',
        additionalSearch: '',
        directionSearch: ''
    })

    const { lavatorySearch, wallsSearch, waterSearch, gasSearch, heatingSearch, electroSearch,
        sewerageSearch, subcategorySearch, trimSearch, additionalSearch, directionSearch} = searchFieldOption

    const [showSelect, setShowSelect] = useState({
        lavatoryOptions: false,
        wallsMaterialOptions: false,
        waterOptions: false,
        gasOptions: false,
        sewerageOptions: false,
        heatingOptions: false,
        electroOptions: false,
        trimOptions: false,
        subcategoryOptions: false,
        additionalOptions: false,
        directionOptions: false
    })

    const phoneCounterHandler = name => {
        const newState = {}
        Object.keys(phoneCounter).map(el => el === name ? newState[el] = true : newState[el] = false)
        setPhoneCount(newState)
    }

    const urFaceHandler = name => {
        const newState = {}
        Object.keys(urFace).map(el => el === name ? newState[el] = true : newState[el] = false)
        setUrFace(newState)
    }

    const setSelect = (e, par1, par2) => {
        setSearchFieldOption({...searchFieldOption, [par1]: e})
        setState({...state, [par2]: e})
    }

    const roomHandler = (name, value) => {
        setRooms({...rooms, [name]: value})
        setState({...state, [name]: value})
    }

    return (
        <>
            {
                Object.values(showSelect).filter(val => val).length > 0 &&
                <Backdrop onClick={() => setShowSelect({...Object.keys(showSelect).forEach(el => ({[el]: false}))}) }/>
            }
            <div className="specifications">
                <HeadComponent
                    width={'90%'}
                    h2={'Характеристики'}
                    h2FontSize={'20px'}
                    p={'К списку'}
                    btnWidth={'110px'}
                    btnHeight={'40px'}
                    buttonValue={'Сохранить'}
                    optionWidth={'50%'}
                    optionMargin={'0 -15px 0 0'}
                    onClick={() => props.updateObject({...state, id: props.id}, props.token, 'characteristics')}
                    reverse
                />
                <div className="specifications__inf">
                    <Select label={'Подкатегория'} margin={'0'}
                            value={subcategorySearch }
                            list={filterOptions(options, 'subcategory', subcategorySearch)}
                            showSelect={showSelect.subcategoryOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, subcategoryOptions: bool})}
                            onClick={el => setSelect(el, 'subcategorySearch', 'subcategory')}
                            onChange={e => setSelect(e.target.value, 'subcategorySearch', 'subcategory')}
                    />
                    <FormInput labelValue={'Год постройки'} width={'100%'} margin={'10px 0 0 0'}
                               value={state.building_year || state.building_year}
                               onChange={e => setState({
                                   ...state,
                                   building_year: e.target.value
                               })}/>
                </div>
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Этаж'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'storey'}
                        value={rooms.storey || state.storey}
                    />
                    <InputWithOperations
                        label={'Этажность'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'storeys'}
                        value={rooms.storeys || state.storeys}
                        margin={'0 -15px 0 0'}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Общая площадь'} width={'100%'}
                               value={state.area_total}
                               onChange={e => setState({
                                   ...state,
                                   area_total: e.target.value
                               })}/>
                    <Select label={'Санузел'} margin={'10px 0 0'}
                            value={lavatorySearch || state.lavatory}
                            list={filterOptions(options, 'lavatory', lavatorySearch)}
                            showSelect={showSelect.lavatoryOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, lavatoryOptions: bool})}
                            onClick={el => setSelect(el, 'lavatorySearch', 'lavatory')}
                            onChange={e => setSelect(e.target.value, 'lavatorySearch', 'lavatory')}
                    />
                    <Select label={'Материал стен'} margin={'10px 0 0'}
                            value={wallsSearch || state.walls_material}
                            list={filterOptions(options, 'walls_material', wallsSearch)}
                            showSelect={showSelect.wallsMaterialOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, wallsMaterialOptions: bool})}
                            onClick={el => setSelect(el, 'wallsSearch', 'walls_material')}
                            onChange={e => setSelect(e.target.value, 'wallsSearch', 'walls_material')}
                    />
                    <Select label={'Водоснабжение'} margin={'10px 0 0'}
                            value={waterSearch || state.water}
                            list={filterOptions(options, 'water', waterSearch)}
                            showSelect={showSelect.waterOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, waterOptions: bool})}
                            onClick={el => setSelect(el, 'waterSearch', 'water')}
                            onChange={e => setSelect(e.target.value, 'waterSearch', 'water')}
                    />
                    <Select label={'Канализация'} margin={'10px 0 0'}
                            value={sewerageSearch || state.sewer}
                            list={filterOptions(options, 'sewerage', sewerageSearch)}
                            showSelect={showSelect.sewerageOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, sewerageOptions: bool})}
                            onClick={el => setSelect(el, 'sewerageSearch', 'sewerage')}
                            onChange={e => setSelect(e.target.value, 'sewerageSearch', 'sewerage')}
                    />
                    <Select label={'Газ'} margin={'10px 0 0'}
                            value={gasSearch || state.gas}
                            list={filterOptions(options, 'gas', gasSearch)}
                            showSelect={showSelect.gasOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, gasOptions: bool})}
                            onClick={el => setSelect(el, 'gasSearch', 'gas')}
                            onChange={e => setSelect(e.target.value, 'gasSearch', 'gas')}
                    />
                    <Select label={'Отопление'} margin={'10px 0 0'}
                            value={heatingSearch || state.heating}
                            list={filterOptions(options, 'heating', heatingSearch)}
                            showSelect={showSelect.heatingOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, heatingOptions: bool})}
                            onClick={el => setSelect(el, 'heatingSearch', 'heating')}
                            onChange={e => setSelect(e.target.value, 'heatingSearch', 'heating')}
                    />
                    <p>Домашний телефон</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={phoneCounter.hasPhone ? 'active' : ''}
                            onClick={()=> {
                                phoneCounterHandler('hasPhone')
                                setState({...state, phone: 'Есть'})
                            }}
                        >Есть</li>
                        <li
                            className={phoneCounter.dontHasPhone ? 'active' : ''}
                            onClick={()=> {
                                phoneCounterHandler('dontHasPhone')
                                setState({...state, phone: 'Нету'})
                            }}
                        >Нет</li>
                        <li
                            className={phoneCounter.twoOrMorePhone ? 'active' : ''}
                            onClick={()=> {
                                phoneCounterHandler('twoOrMorePhone')
                                setState({...state, phone: 'Два и более'})
                            }}
                        >2 и более
                        </li>
                    </ul>
                    <Select label={'Электричество'} margin={'10px 0 0'}
                            value={electroSearch || state.electro}
                            list={filterOptions(options, 'electro', electroSearch)}
                            showSelect={showSelect.electroOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, electroOptions: bool})}
                            onClick={el => setSelect(el, 'electroSearch', 'electro')}
                            onChange={e => setSelect(e.target.value, 'electroSearch', 'electro')}
                    />
                    <FormInput labelValue={'Количество соток'} width={'100%'} margin={'10px 0 0 0'}
                               value={state.area}
                               onChange={e => setState({
                                   ...state,
                                   area: e.target.value
                               })}
                    />
                    <Select label={'Внутренняя отделка'} margin={'10px 0 0'}
                            value={trimSearch || state.trim_style}
                            list={filterOptions(options, 'trim_style', trimSearch)}
                            showSelect={showSelect.trimOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, trimOptions: bool})}
                            onClick={el => setSelect(el, 'trimSearch', 'trim_style')}
                            onChange={e => setSelect(e.target.value, 'trimSearch', 'trim_style')}
                    />
                    <Select label={'Направление от города'} margin={'10px 0 0'}
                            value={directionSearch || state.direction_name}
                            list={filterOptions(options, 'direction_name', directionSearch)}
                            showSelect={showSelect.directionOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, directionOptions: bool})}
                            onClick={el => setSelect(el, 'directionSearch', 'direction_name')}
                            onChange={e => setSelect(e.target.value, 'directionSearch', 'direction_name')}
                    />
                    <FormInput labelValue={'Расстояние от МКАД'} width={'100%'} margin={'10px 0 0 0'}
                               value={state.town_distance }
                               onChange={e => setState({
                                   ...state,
                                   town_distance: e.target.value
                               })}
                    />
                    <p>Юр. адресс</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={urFace.yes ? 'active' : ''}
                            onClick={() => {
                                urFaceHandler('yes')
                                setState({...state, jur_addr: 'Есть'})
                            }}
                        >Есть</li>
                        <li
                            className={urFace.no ? 'active' : ''}
                            onClick={() => {
                                urFaceHandler('no')
                                setState({...state, jur_addr: 'Нет'})
                            }}
                        >Нет</li>
                    </ul>
                    <FormInput labelValue={'Количество помещений'} width={'100%'} margin={'10px 0 0 0'}
                               value={state.numberOfPremises}
                               onChange={e => setState({
                                   ...state,
                                   numberOfPremises: e.target.value
                               })}
                    />
                    <Select label={'Дополнительная информация'} margin={'15px 0'}
                            value={additionalSearch || state.additional}
                            list={filterOptions(options, 'additional', additionalSearch)}
                            showSelect={showSelect.additionalOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, additionalOptions: bool})}
                            onClick={el => setSelect(el, 'additionalSearch', 'additional')}
                            onChange={e => setSelect(e.target.value, 'additionalSearch', 'additional')}
                    />
                </div>
            </div>
            <div className="specifications__add-object">
                {
                    addObjectLoading ? <Loader/> : (
                        <>
                            <p onClick={() => props.history.push('/all_objects')}>К списку</p>
                            <TransparentButton
                                width={'38%'}
                                onClick={() => sendObject(12)}
                            >Добавить объект</TransparentButton>
                        </>
                    )
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    addObjectLoading: state.object.addObjectLoading,
    options: state.object.options
})

export default compose(
    connect(mapStateToProps),
    withRouter
)
(RentCommercial)