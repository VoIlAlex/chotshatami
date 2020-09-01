import React, {useState} from 'react'

import HeadComponent from "../head-component/HeadComponent";
import InputWithOperations from "../input-with-operations/InputWithOperation";
import FormInput from "../form-input/FormInput";
import Select from "../select/Select";
import TransparentButton from "../transparent-button/TransparentButton";
import '../add-object-components/specifications-residential/specifications-residential.css'

const RentSpecifications = () => {
    const [rooms, setRooms] = useState({
        roomNumber: 0,
        salesRooms: 0,
        separateRooms: 0,
        level:0,
        numberOfLevels:0
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

    return (
        <>
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
                    reverse
                />
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Кол-во комнат'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'roomNumber'}
                        value={rooms.roomNumber}
                    />
                    <InputWithOperations
                        label={'Кол-во продаваемых комнат'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'salesRooms'}
                        value={rooms.salesRooms}
                    />
                </div>
                <div className="specifications_separate-room">
                    <InputWithOperations
                        label={'Кол-во отдельных комнат'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'separateRooms'}
                        value={rooms.separateRooms}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Год постройки'} width={'100%'}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Год капитального ремонта'} width={'100%'}/>
                </div>
                <div className="specifications-inputs">
                    <InputWithOperations
                        label={'Этаж'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'level'}
                        value={rooms.level}
                    />
                    <InputWithOperations
                        label={'Этажность'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'numberOfLevels'}
                        value={rooms.numberOfLevels}
                    />
                </div>
                <div className="specifications__inf">
                    <FormInput labelValue={'Общая площадь'} width={'100%'}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Жилая площадь'} width={'100%'}/>
                    <FormInput margin={'20px 0 0'} labelValue={'Площадь кухни'} width={'100%'}/>
                    <Select label={'Полы'} margin={'20px 0 0'}/>
                    <Select label={'Санузел'} margin={'10px 0 0'}/>
                    <Select label={'Балкон'} margin={'10px 0 0'}/>
                    <Select label={'Ремонт'} margin={'10px 0 0'}/>
                    <Select label={'Материал стен'} margin={'10px 0 0'}/>
                    <p>Домашний телефон</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={phoneCounter.hasPhone ? 'active' : ''}
                            onClick={()=>phoneCounterHandler('hasPhone')}
                        >Есть
                        </li>
                        <li
                            className={phoneCounter.dontHasPhone ? 'active' : ''}
                            onClick={()=>phoneCounterHandler('dontHasPhone')}
                        >Нет
                        </li>
                        <li
                            className={phoneCounter.twoOrMorePhone ? 'active' : ''}
                            onClick={()=>phoneCounterHandler('twoOrMorePhone')}
                        >2 и более
                        </li>
                    </ul>
                    <p>Мебель</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={furniture.yes ? 'active' : ''}
                            onClick={()=>furnitureHandler('yes')}
                        >Есть
                        </li>
                        <li
                            className={furniture.no ? 'active' : ''}
                            onClick={()=>furnitureHandler('no')}
                        >Нет
                        </li>
                        <li
                            className={furniture.partially ? 'active' : ''}
                            onClick={()=>furnitureHandler('partially')}
                        >Частично
                        </li>
                    </ul>
                </div>
            </div>
            <div className="specifications__add-object">
                <p>К списку</p>
                <TransparentButton width={'38%'}>Добавить объект</TransparentButton>
            </div>
        </>
    )
}

export default RentSpecifications