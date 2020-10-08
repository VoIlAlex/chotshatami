import React, {useState} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { withRouter} from 'react-router-dom'

import { filterOptions } from "../../../utils/roomHandler";
import Select from "../../select/Select";
import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import InputWithOperations from "../../input-with-operations/InputWithOperation";
import TransparentButton from "../../transparent-button/TransparentButton";
import {ReactComponent as Loader} from "../../../asserts/loader.svg";
import Backdrop from "../../backdrop/Backdrop";
import './specifications-residential.css'

const SpecificationsResidential = props => {
    const {stateSpecificationsResidential, setState, sendObject, addObjectLoading, options} = props
    const [searchFieldOption, setSearchFieldOption] = useState({
        balconySearch: '',
        floorSearch: '',
        lavatorySearch: '',
        repairSearch: '',
        wallsSearch: '',
        plateSearch: ''
    })
    const {  balconySearch, floorSearch, lavatorySearch, repairSearch, wallsSearch, plateSearch } = searchFieldOption
    const [showSelect, setShowSelect] = useState({
        balconyOptions: false,
        floorOptions: false,
        lavatoryOptions: false,
        repairOptions: false,
        wallsMaterialOptions: false,
        plateOptions: false
    })
    const [rooms, setRooms] = useState({
        rooms: 0,
        room_to_sell: 0,
        separate_rooms: 0,
        storey: 0,
        storeys: 0
    })

    const [phoneCounter, setPhoneCount] = useState({
        hasPhone: false,
        dontHasPhone: false,
        twoOrMorePhone: false
    })

    const phoneCounterHandler = name => {
        const newState = {}
        Object.keys(phoneCounter).map(el => el === name ? newState[el] = true : newState[el] = false)
        setPhoneCount(newState)
    }

    const roomHandler = (name, value) => {
        setRooms({...rooms, [name]: value})
        setState({...stateSpecificationsResidential, [name]: value})
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
                    h2FontSize={'1.3em'}
                    p={'К списку'}
                    btnWidth={'55%'}
                    btnHeight={'40px'}
                    buttonValue={'Сохранить'}
                    optionWidth={'50%'}
                    optionMargin={'0'}
                    disabled={props.disabled}
                    onClick={() => props.updateObject({...stateSpecificationsResidential, id: props.id}, props.token, 'characteristics')}
                    reverse
                />
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Кол-во комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'rooms'}
                        value={rooms.rooms || stateSpecificationsResidential.rooms}
                    />
                    <InputWithOperations
                        label={'Кол-во продаваемых комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'room_to_sell'}
                        value={rooms.room_to_sell || stateSpecificationsResidential.room_to_sell}
                        margin={'0 -15px 0 0'}
                    />
                </div>
                <div className="specifications_separate-room">
                    <InputWithOperations
                        label={'Кол-во отдельных комнат'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'separate_rooms'}
                        value={rooms.separate_rooms || stateSpecificationsResidential.separate_rooms}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Год постройки'} width={'100%'}
                               value={stateSpecificationsResidential.building_year}
                               onChange={e => setState({
                                   ...stateSpecificationsResidential,
                                   building_year: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Год капитального ремонта'} width={'100%'}
                               value={stateSpecificationsResidential.repair_year}
                               onChange={e => setState({
                                   ...stateSpecificationsResidential,
                                   repair_year: e.target.value
                               })}/>
                </div>
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Этаж'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'storey'}
                        value={rooms.storey || stateSpecificationsResidential.storey}
                    />
                    <InputWithOperations
                        label={'Этажность'}
                        state={rooms}
                        clickHandler={roomHandler}
                        name={'storeys'}
                        margin={'0 -15px 0 0'}
                        value={rooms.storeys || stateSpecificationsResidential.storeys}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Общая площадь'} width={'100%'}
                               value={stateSpecificationsResidential.area_total}
                               onChange={e => setState({
                                   ...stateSpecificationsResidential,
                                   area_total: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Жилая площадь'} width={'100%'}
                               value={stateSpecificationsResidential.area_living}
                               onChange={e => setState({
                                   ...stateSpecificationsResidential,
                                   area_living: e.target.value
                               })}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Площадь кухни'} width={'100%'}
                               value={stateSpecificationsResidential.area_kitchen}
                               onChange={e => setState({
                                   ...stateSpecificationsResidential,
                                   area_kitchen: e.target.value
                               })}/>
                    <Select label={'Полы'}
                            value={floorSearch || stateSpecificationsResidential.floor_type}
                            list={filterOptions(options, 'floor_type', floorSearch)}
                            showSelect={showSelect.floorOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, floorOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: el})
                                setState({...stateSpecificationsResidential, floor_type: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: e.target.value})
                                setState({...stateSpecificationsResidential, floor_type: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, floorSearch: e})
                                setState({...stateSpecificationsResidential, floor_type: e})
                            }}
                    />
                    <Select label={'Санузел'}
                            value={lavatorySearch || stateSpecificationsResidential.lavatory}
                            list={filterOptions(options,'lavatory', lavatorySearch)}
                            showSelect={showSelect.lavatoryOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, lavatoryOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: el})
                                setState({...stateSpecificationsResidential, lavatory: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: e.target.value})
                                setState({...stateSpecificationsResidential, lavatory: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, lavatorySearch: e})
                                setState({...stateSpecificationsResidential, lavatory: e})
                            }}
                    />
                    <Select label={'Балкон'}
                            value={balconySearch || stateSpecificationsResidential.balcony}
                            list={filterOptions(options,'balcony', balconySearch)}
                            showSelect={showSelect.balconyOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, balconyOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: el})
                                setState({...stateSpecificationsResidential, balcony: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: e.target.value})
                                setState({...stateSpecificationsResidential, balcony: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, balconySearch: e})
                                setState({...stateSpecificationsResidential, balcony: e})
                            }}
                    />
                    <Select label={'Ремонт'}
                            value={repairSearch || stateSpecificationsResidential.repair_state}
                            list={filterOptions(options,'repair_state', repairSearch)}
                            showSelect={showSelect.repairOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, repairOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: el})
                                setState({...stateSpecificationsResidential, repair_state: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: e.target.value})
                                setState({...stateSpecificationsResidential, repair_state: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, repairSearch: e})
                                setState({...stateSpecificationsResidential, repair_state: e})
                            }}
                    />
                    <Select label={'Материал стен'}
                            value={wallsSearch || stateSpecificationsResidential.walls_material}
                            list={filterOptions(options,'walls_material', wallsSearch)}
                            showSelect={showSelect.wallsMaterialOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, wallsMaterialOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: el})
                                setState({...stateSpecificationsResidential, walls_material: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: e.target.value})
                                setState({...stateSpecificationsResidential, walls_material: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, wallsSearch: e})
                                setState({...stateSpecificationsResidential, walls_material: e})
                            }}
                    />
                    <p>Домашний телефон</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={phoneCounter.hasPhone ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('hasPhone')
                                setState({...stateSpecificationsResidential, phone: 'Есть'})
                            }}
                        >Есть
                        </li>
                        <li
                            className={phoneCounter.dontHasPhone ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('dontHasPhone')
                                setState({...stateSpecificationsResidential, phone: 'Нет'})
                            }}
                        >Нет
                        </li>
                        <li
                            className={phoneCounter.twoOrMorePhone ? 'active' : ''}
                            onClick={() => {
                                phoneCounterHandler('twoOrMorePhone')
                                setState({...stateSpecificationsResidential, phone: '2 и более'})
                            }}
                        >2 и более
                        </li>
                    </ul>
                    <Select label={'Плита'}
                            value={plateSearch || stateSpecificationsResidential.plate}
                            list={filterOptions(options,'plate', plateSearch)}
                            showSelect={showSelect.plateOptions}
                            setShowSelect={bool => setShowSelect({...showSelect, plateOptions: bool })}
                            onClick={el => {
                                setSearchFieldOption({...searchFieldOption, plateSearch: el})
                                setState({...stateSpecificationsResidential, plate: el})
                            }}
                            onChange={e => {
                                setSearchFieldOption({...searchFieldOption, plateSearch: e.target.value})
                                setState({...stateSpecificationsResidential, plate: e.target.value})
                            }}
                            onEnter={e => {
                                setSearchFieldOption({...searchFieldOption, plateSearch: e})
                                setState({...stateSpecificationsResidential, plate: e})
                            }}
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
                                onClick={() => props.abroad? sendObject(14,stateSpecificationsResidential):
                                    sendObject(6, stateSpecificationsResidential)}
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
(SpecificationsResidential)