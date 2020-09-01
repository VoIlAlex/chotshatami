import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import InputWithOperations from "../../input-with-operations/InputWithOperation";
import FormInput from "../../form-input/FormInput";
import Select from "../../select/Select";
import TransparentButton from "../../transparent-button/TransparentButton";
import './commercial-specifications.css'

const CommercialSpecifications = () => {
    const [rooms, setRooms] = useState({
        level:0,
        numberOfLevels:0
    })

    const [phoneCounter, setPhoneCount] = useState({
        hasPhone: false,
        dontHasPhone: false,
        twoOrMorePhone: false
    })

    const [urFace, setUrFace] = useState({
        yes: false,
        no: false
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
                <div className="specifications__inf">
                    <Select label={'Подкатегория'} margin={'0'}/>
                    <FormInput labelValue={'Год постройки'} width={'100%'} margin={'10px 0 0 0'}/>
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
                    <Select label={'Санузел'} margin={'10px 0 0'}/>
                    <Select label={'Материал стен'} margin={'10px 0 0'}/>
                    <Select label={'Водоснабжение'} margin={'10px 0 0'}/>
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
                    <Select label={'Электричество'} margin={'10px 0 0'}/>
                    <FormInput labelValue={'Количество соток'} width={'100%'} margin={'10px 0 0 0'}/>
                    <Select label={'Внутренняя отделка'} margin={'10px 0 0'}/>
                    <p>Юр. адресс</p>
                    <ul className={'specifications__has-phone'}>
                        <li
                            className={urFace.yes ? 'active' : ''}
                            onClick={() => urFaceHandler('yes')}
                        >Есть</li>
                        <li
                            className={urFace.no ? 'active' : ''}
                            onClick={() => urFaceHandler('no')}
                        >Нет</li>
                    </ul>
                    <FormInput labelValue={'Количество помещений'} width={'100%'} margin={'10px 0 0 0'}/>
                    <Select label={'Дополнительная информация'} margin={'15px 0'}/>
                </div>
            </div>
            <div className="specifications__add-object">
                <p>К списку</p>
                <TransparentButton width={'38%'}>Добавить объект</TransparentButton>
            </div>
        </>
    )
}

export default CommercialSpecifications