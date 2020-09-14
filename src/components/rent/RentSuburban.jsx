import React, {useState} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import HeadComponent from "../head-component/HeadComponent";
import InputWithOperations from "../input-with-operations/InputWithOperation";
import FormInput from "../form-input/FormInput";
import Select from "../select/Select";
import TransparentButton from "../transparent-button/TransparentButton";
import '../add-object-components/suburban-specifications/suburban-specifications.css'
import Backdrop from "../backdrop/Backdrop";
import {filterOptions} from "../../utils/roomHandler";
import {ReactComponent as Loader} from "../../asserts/loader.svg";

const RentSubUrban = props => {
    const {state, setState, sendObject, options, addObjectLoading} = props
    const [rooms, setRooms] = useState({
        rooms: 0,
        storey: 0,
        storeys: 0
    })

    const [levels, setLevels] = useState({
        0: false,
        1: false,
        2: false,
        3: false
    })

    const [phoneCounter, setPhoneCount] = useState({
        hasPhone: false,
        dontHasPhone: false,
        twoOrMorePhone: false
    })

    const [furniture, setFurniture] = useState({
        yes: false,
        no: false,
        partially: false
    })

    const [searchFieldOption, setSearchFieldOption] = useState({
        balconySearch: '',
        floorSearch: '',
        lavatorySearch: '',
        repairSearch: '',
        wallsSearch: '',
        roofSearch: '',
        plateSearch: '',
        waterSearch: '',
        gasSearch: '',
        heatingSearch: '',
        electroSearch: '',
        directionSearch: '',
        town_distanceSearch: '',
        sewerageSearch: ''
    })

    const {
        balconySearch, floorSearch, lavatorySearch, wallsSearch, plateSearch, sewerageSearch,
        roofSearch, waterSearch, gasSearch, heatingSearch, electroSearch, directionSearch
    } = searchFieldOption

    const [showSelect, setShowSelect] = useState({
        balconyOptions: false,
        floorOptions: false,
        lavatoryOptions: false,
        repairOptions: false,
        wallsMaterialOptions: false,
        plateOptions: false,
        roofOptions: false,
        waterOptions: false,
        gasOptions: false,
        sewerageOptions: false,
        heatingOptions: false,
        electroOptions: false,
        directionOptions: false,
        town_distanceOptions: false
    })

    const levelsHandler = name => {
        const newState = {}
        Object.keys(levels).map(el => el == name ? newState[el] = true : newState[el] = false)
        setLevels(newState)
    }
    const phoneCounterHandler = name => {
        const newState = {}
        Object.keys(phoneCounter).map(el => el === name ? newState[el] = true : newState[el] = false)
        setPhoneCount(newState)
    }

    const furnitureHandler = name => {
        const newState = {}
        Object.keys(furniture).map(el => el === name ? newState[el] = true : newState[el] = false)
        setFurniture(newState)
    }

    const roomHandler = (name, value) => {
        setRooms({...rooms, [name]: value})
        setState({...state, [name]: value})
    }

    const setSelect = (e, par1, par2) => {
        setSearchFieldOption({...searchFieldOption, [par1]: e})
        setState({...state, [par2]: e})
    }

    return (
        <>
            {
                Object.values(showSelect).filter(val => val).length > 0 &&
                <Backdrop onClick={() => setShowSelect({...Object.keys(showSelect).forEach(el => ({[el]: false}))})}/>
            }
            <div className="suburban-specifications">
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
                <div className="suburban-specifications__rooms">
                    <InputWithOperations
                        label={'Кол-во комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'rooms'}
                        value={rooms.rooms || state.rooms}
                    />
                </div>
                <FormInput labelValue={'Год постройки'} width={'90%'}
                           margin={'10px 0 0'}
                           value={state.building_year}
                           onChange={e => setState({
                               ...state,
                               building_year: e.target.value
                           })}/>
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
                        margin={'0 -15px 0 0'}
                        value={rooms.storeys || state.storeys}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Площадь застройки'} width={'100%'} margin={'10px 0 0'}
                               value={state.area_ground}
                               onChange={e => setState({
                                   ...state,
                                   area_ground: e.target.value
                               })}/>
                    <FormInput labelValue={'Общая площадь'} width={'100%'} margin={'10px 0 0'}
                               value={state.area_total}
                               onChange={e => setState({
                                   ...state,
                                   area_total: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Жилая площадь'} width={'100%'}
                               value={state.area_living}
                               onChange={e => setState({
                                   ...state,
                                   area_living: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Площадь кухни'} width={'100%'}
                               value={state.area_kitchen}
                               onChange={e => setState({
                                   ...state,
                                   area_kitchen: e.target.value
                               })}/>
                    <Select label={'Полы'}
                            value={floorSearch || state.floor_type}
                            list={filterOptions(options, 'floor_type', floorSearch)}
                            showSelect={showSelect.floorOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, floorOptions: bool})}
                            onClick={el => setSelect(el, 'floorSearch', 'floor_type')}
                            onChange={e => setSelect(e.target.value, 'floorSearch', 'floor_type')}
                    />
                    <Select label={'Санузел'}
                            value={lavatorySearch || state.lavatory}
                            list={filterOptions(options, 'lavatory', lavatorySearch)}
                            showSelect={showSelect.lavatoryOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, lavatoryOptions: bool})}
                            onClick={el => setSelect(el, 'lavatorySearch', 'lavatory')}
                            onChange={e => setSelect(e.target.value, 'lavatorySearch', 'lavatory')}
                    />
                    <Select label={'Балкон'}
                            value={balconySearch || state.balcony}
                            list={filterOptions(options, 'balcony', balconySearch)}
                            showSelect={showSelect.balconyOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, balconyOptions: bool})}
                            onClick={el => setSelect(el, 'balconySearch', 'balcony')}
                            onChange={e => setSelect(e.target.value, 'balconySearch', 'balcony')}
                    />
                    <Select label={'Материал крыши'}
                            value={roofSearch || state.walls_material}
                            list={filterOptions(options, 'walls_material', roofSearch)}
                            showSelect={showSelect.roofOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, roofOptions: bool})}
                            onClick={el => setSelect(el, 'roofSearch', 'roof_material')}
                            onChange={e => setSelect(e.target.value, 'roofSearch', 'roof_material')}
                    />
                    <Select label={'Материал стен'}
                            value={wallsSearch || state.walls_material}
                            list={filterOptions(options, 'walls_material', wallsSearch)}
                            showSelect={showSelect.wallsMaterialOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, wallsMaterialOptions: bool})}
                            onClick={el => setSelect(el, 'wallsSearch', 'walls_material')}
                            onChange={e => setSelect(e.target.value, 'wallsSearch', 'walls_material')}
                    />
                    <p>Кол-во уровней</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={levels['0'] ? 'active' : ''}
                            onClick={() => {
                                levelsHandler('0')
                                setState({...state, building_levels: '0'})
                            }}
                        >0</li>
                        <li
                            style={{borderRight: 'none'}}
                            className={levels['1'] ? 'active' : ''}
                            onClick={() => {
                                levelsHandler('1')
                                setState({...state, building_levels: '1'})
                            }}
                        >1</li>
                        <li
                            className={levels['2'] ? 'active' : ''}
                            onClick={() => {
                                levelsHandler('2')
                                setState({...state, building_levels: '2'})
                            }}
                        >2</li>
                        <li
                            className={levels['3'] ? 'active' : ''}
                            onClick={() => {
                                levelsHandler('3')
                                setState({...state, building_levels: '3'})
                            }}
                        >3
                        </li>
                    </ul>
                    <Select label={'Водоснабжение'} margin={'20px 0 0'}
                            value={waterSearch || state.water}
                            list={filterOptions(options, 'water', waterSearch)}
                            showSelect={showSelect.waterOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, waterOptions: bool})}
                            onClick={el => setSelect(el, 'waterSearch', 'water')}
                            onChange={e => setSelect(e.target.value, 'waterSearch', 'water')}
                    />
                    <Select label={'Канализация'}
                            value={sewerageSearch || state.sewer}
                            list={filterOptions(options, 'sewerage', sewerageSearch)}
                            showSelect={showSelect.sewerageOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, sewerageOptions: bool})}
                            onClick={el => setSelect(el, 'sewerageSearch', 'sewerage')}
                            onChange={e => setSelect(e.target.value, 'sewerageSearch', 'sewerage')}
                    />
                    <Select label={'Газ'}
                            value={gasSearch || state.gas}
                            list={filterOptions(options, 'gas', gasSearch)}
                            showSelect={showSelect.gasOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, gasOptions: bool})}
                            onClick={el => setSelect(el, 'gasSearch', 'gas')}
                            onChange={e => setSelect(e.target.value, 'gasSearch', 'gas')}
                    />
                    <Select label={'Отопление'}
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
                            onClick={() => {
                                phoneCounterHandler('hasPhone')
                                setState({...state, phone: 'Есть'})
                            }}
                        >Есть
                        </li>
                        <li
                            className={phoneCounter.dontHasPhone ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('dontHasPhone')
                                setState({...state, phone: 'Нету'})
                            }}
                        >Нет
                        </li>
                        <li
                            className={phoneCounter.twoOrMorePhone ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('twoOrMorePhone')
                                setState({...state, phone: 'Два и более'})
                            }}
                        >2 и более
                        </li>
                    </ul>
                    <Select label={'Электричество'}
                            value={electroSearch || state.electro}
                            list={filterOptions(options, 'electro', electroSearch)}
                            showSelect={showSelect.electroOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, electroOptions: bool})}
                            onClick={el => setSelect(el, 'electroSearch', 'electro')}
                            onChange={e => setSelect(e.target.value, 'electroSearch', 'electro')}
                    />
                    <Select label={'Направление от города'}
                            value={directionSearch || state.direction_name}
                            list={filterOptions(options, 'direction_name', directionSearch)}
                            showSelect={showSelect.directionOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, directionOptions: bool})}
                            onClick={el => setSelect(el, 'directionSearch', 'direction_name')}
                            onChange={e => setSelect(e.target.value, 'directionSearch', 'direction_name')}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Расстояние от МКАД'} width={'100%'}
                               value={state.town_distance}
                               onChange={e => setState({
                                   ...state,
                                   town_distance: e.target.value
                               })}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Количество соток'} width={'100%'}
                               value={state.area}
                               onChange={e => setState({
                                   ...state,
                                   area: e.target.value
                               })}/>
                    <Select label={'Плита'} margin={'15px 0 0'}/>
                    <p>Мебель</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={furniture.yes ? 'active' : ''}
                            onClick={() => {
                                furnitureHandler('yes')
                                setState({...state, furniture: 'Есть'})
                            }}
                        >Есть
                        </li>
                        <li
                            className={furniture.no ? 'active' : ''}
                            onClick={() => {
                                furnitureHandler('no')
                                setState({...state, furniture: 'Нет'})
                            }}
                        >Нет
                        </li>
                        <li
                            className={furniture.partially ? 'active' : ''}
                            onClick={() => {
                                furnitureHandler('partially')
                                setState({...state, furniture: 'Частично'})
                            }}
                        >Частично
                        </li>
                    </ul>
                </div>
            </div>
            <div className="specifications__add-object">
                {
                    addObjectLoading ? <Loader/> : (
                        <>
                            <p onClick={() => props.history.push('/all_objects')}>К списку</p>
                            <TransparentButton
                                width={'38%'}
                                onClick={() => sendObject(11)}
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
)(RentSubUrban)