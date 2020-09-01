import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import InputWithOperations from "../../input-with-operations/InputWithOperation";
import TransparentButton from "../../transparent-button/TransparentButton";
import Select from "../../select/Select";
import './specifications-residential.css'

const SpecificationsResidential = () => {
    const [rooms, setRooms] = useState({
        roomNumber: 0,
        salesRooms: 0,
        separateRooms: 0,
        level: 0,
        numberOfLevels: 0
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

    return (
        <>
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
                    <Select label={'Плита'} margin={'10px 0 10px 0'}/>
                </div>
            </div>
            <div className="specifications__add-object">
                <p>К списку</p>
                <TransparentButton width={'38%'}>Добавить объект</TransparentButton>
            </div>
        </>
    )
}

export default SpecificationsResidential