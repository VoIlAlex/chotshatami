import React, {useState} from 'react'
import HeadComponent from "../head-component/HeadComponent";
import InputWithOperations from "../input-with-operations/InputWithOperation";
import FormInput from "../form-input/FormInput";
import Select from "../select/Select";
import TransparentButton from "../transparent-button/TransparentButton";
import '../add-object-components/suburban-specifications/suburban-specifications.css'

const RentSubUrban = () => {
    const [rooms, setRooms] = useState({
        roomNumber: 0,
        level: 0,
        numberOfLevels: 0
    })

    const [levels, setLevels] = useState({
        0: false,
        1: false,
        2: false,
        3:false
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
    return (
        <>
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
                    reverse
                />
                <div className="suburban-specifications__rooms">
                    <InputWithOperations
                        label={'Кол-во комнат'}
                        state={rooms}
                        clickHandler={setRooms}
                        name={'roomNumber'}
                        value={rooms.roomNumber}
                    />
                </div>
                <FormInput
                    labelValue={'Год постройки'}
                    width={'90%'}
                    margin={'20px 0 0 '}
                />
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
                    <FormInput labelValue={'Площадь застройки (X x Y м)'} width={'100%'}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Общая площадь'} width={'100%'}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Жилая площадь'} width={'100%'}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Площадь кухни'} width={'100%'}/>
                    <Select label={'Полы'} margin={'20px 0 0'}/>
                    <Select label={'Санузел'} margin={'10px 0 0'}/>
                    <Select label={'Балкон'} margin={'10px 0 0'}/>
                    <Select label={'Материал крыши'} margin={'10px 0 0'}/>
                    <Select label={'Материал стен'} margin={'10px 0 0'}/>
                    <p>Кол-во уровней</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={levels['0']?'active':''}
                            onClick={() => levelsHandler('0')}
                        >0</li>
                        <li
                            style={{borderRight:'none'}}
                            className={levels['1']?'active':''}
                            onClick={() => levelsHandler('1')}
                        >1</li>
                        <li
                            className={levels['2']?'active':''}
                            onClick={() => levelsHandler('2')}
                        >2</li>
                        <li
                            className={levels['3']?'active':''}
                            onClick={() => levelsHandler('3')}
                        >3</li>
                    </ul>
                    <Select label={'Водоснабжение'} margin={'20px 0 0'}/>
                    <Select label={'Канализация'} margin={'10px 0 0'}/>
                    <Select label={'Газ'} margin={'10px 0 0'}/>
                    <Select label={'Отопление'} margin={'10px 0 0'}/>
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
                    <Select label={'Электричество'} margin={'20px 0 0'}/>
                    <Select label={'Направление от города'} margin={'10px 0 0'}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Расстояние от МКАД'} width={'100%'}/>
                    <FormInput margin={'15px 0 0'} labelValue={'Количество соток'} width={'100%'}/>
                    <Select  label={'Плита'} margin={'15px 0 0'}/>
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

export default RentSubUrban