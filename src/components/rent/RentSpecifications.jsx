import React, {useState} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { filterOptions} from "../../utils/roomHandler";
import HeadComponent from "../head-component/HeadComponent";
import InputWithOperations from "../input-with-operations/InputWithOperation";
import FormInput from "../form-input/FormInput";
import Select from "../select/Select";
import TransparentButton from "../transparent-button/TransparentButton";
import Backdrop from "../backdrop/Backdrop";
import {ReactComponent as Loader} from "../../asserts/loader.svg";
import '../add-object-components/specifications-residential/specifications-residential.css'

const RentSpecifications = props => {
    const {state, setState, sendObject, addObjectLoading, options} = props
    const [rooms, setRooms] = useState({
        rooms: 0,
        room_to_sell: 0,
        separate_rooms: 0,
        storey: 0,
        storeys: 0
    })

    const [searchFieldOption, setSearchFieldOption] = useState({
        balconySearch: '',
        floorSearch: '',
        lavatorySearch: '',
        repairSearch: '',
        wallsSearch: '',
        furnitureSearch: ''
    })
    const {  balconySearch, floorSearch, lavatorySearch, repairSearch, wallsSearch } = searchFieldOption
    const [showSelect, setShowSelect] = useState({
        balconyOptions: false,
        floorOptions: false,
        lavatoryOptions: false,
        repairOptions: false,
        wallsMaterialOptions: false,
        furnitureOptions: false
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
                    disabled={props.disabled}
                    optionMargin={'0 -15px 0 0'}
                    onClick={() => props.updateObject({...state, id: props.id}, props.token, 'characteristics')}
                    reverse
                />
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Кол-во комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'rooms'}
                        value={rooms.rooms || state.rooms}
                    />
                    <InputWithOperations
                        label={'Кол-во продаваемых комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'room_to_sell'}
                        value={rooms.room_to_sell || state.room_to_sell}
                        margin={'0 -15px 0 0'}
                    />
                </div>
                <div className="specifications_separate-room">
                    <InputWithOperations
                        label={'Кол-во отдельных комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'separate_rooms'}
                        value={rooms.separate_rooms || state.separate_rooms}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Год постройки'} width={'100%'}
                               value={state.building_year}
                               onChange={e => setState({
                                   ...state,
                                   building_year: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Год капитального ремонта'} width={'100%'}
                               value={state.repair_year}
                               onChange={e => setState({
                                   ...state,
                                   repair_year: e.target.value
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
                        margin={'0 -15px 0 0'}
                        value={rooms.storeys || state.storeys}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Общая площадь'} width={'100%'}
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
                            setShowSelect={bool => setShowSelect({...showSelect, floorOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: el})
                                setState({...state, floor_type: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: e.target.value})
                                setState({...state, floor_type: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: e})
                                setState({...state, floor_type: e})
                            }}
                    />
                    <Select label={'Санузел'}
                            value={lavatorySearch || state.lavatory}
                            list={filterOptions(options,'lavatory', lavatorySearch)}
                            showSelect={showSelect.lavatoryOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, lavatoryOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: el})
                                setState({...state, lavatory: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: e.target.value})
                                setState({...state, lavatory: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: e})
                                setState({...state, lavatory: e})
                            }}
                    />
                    <Select label={'Балкон'}
                            value={balconySearch || state.balcony}
                            list={filterOptions(options,'balcony', balconySearch)}
                            showSelect={showSelect.balconyOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, balconyOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: el})
                                setState({...state, balcony: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: e.target.value})
                                setState({...state, balcony: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: e})
                                setState({...state, balcony: e})
                            }}
                    />
                    <Select label={'Ремонт'}
                            value={repairSearch || state.repair_state}
                            list={filterOptions(options,'repair_state', repairSearch)}
                            showSelect={showSelect.repairOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, repairOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: el})
                                setState({...state, repair_state: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: e.target.value})
                                setState({...state, repair_state: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: e})
                                setState({...state, repair_state: e})
                            }}
                    />
                    <Select label={'Материал стен'}
                            value={wallsSearch || state.walls_material}
                            list={filterOptions(options,'walls_material', wallsSearch)}
                            showSelect={showSelect.wallsMaterialOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, wallsMaterialOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: el})
                                setState({...state, walls_material: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: e.target.value})
                                setState({...state, walls_material: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: e})
                                setState({...state, walls_material: e})
                            }}
                    />
                    <p>Домашний телефон</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={phoneCounter.hasPhone==='Есть'  || state.phone ==='Есть'? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('hasPhone')
                                setState({...state, phone: 'Есть'})
                            }}
                        >Есть
                        </li>
                        <li
                            className={phoneCounter.dontHasPhone==='Нет' || state.phone ==='Нет' ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('dontHasPhone')
                                setState({...state, phone: 'Нет'})
                            }}
                        >Нет
                        </li>
                        <li
                            className={phoneCounter.twoOrMorePhone || state.phone ==='2 и более' ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('twoOrMorePhone')
                                setState({...state, phone: '2 и более'})
                            }}
                        >2 и более
                        </li>
                    </ul>
                    <p>Мебель</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={furniture.yes || state.furniture==='Есть' ? 'active' : ''}
                            onClick={()=> {
                                furnitureHandler('yes')
                                setState({...state, furniture: 'Есть'})
                            }}
                        >Есть
                        </li>
                        <li
                            className={furniture.no  || state.furniture==='Нет' ? 'active' : ''}
                            onClick={()=> {
                                furnitureHandler('no')
                                setState({...state, furniture: 'Нет'})
                            }}
                        >Нет
                        </li>
                        <li
                            className={furniture.partially  || state.furniture==='Частично' ? 'active' : ''}
                            onClick={()=> {
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
                                onClick={() => sendObject(10, state)}
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
)(RentSpecifications)