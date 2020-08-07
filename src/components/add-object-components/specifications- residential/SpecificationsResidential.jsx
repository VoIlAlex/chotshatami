import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import FormInput from "../../form-input/FormInput";
import InputWithOperations from "../../input-with-operations/InputWithOperation";
import Select from "../../select/Select";
import './specifications-residential.css'

const SpecificationsResidential = () => {
    const [rooms, setRooms] = useState({
        roomNumber: 0,
        salesRooms: 0,
        separateRooms: 0
    })
    return (
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
                <InputWithOperations label={'Кол-во комнат'}/>
                <InputWithOperations label={'Кол-во продаваемых комнат'}/>
            </div>
            <div className="specifications_separate-room">
                <InputWithOperations label={'Кол-во отдельных комнат'}/>
            </div>
            <div className="specifications__inf">
                <FormInput labelValue={'Год постройки (2001)'} width={'100%'}/>
                <FormInput margin={'20px 0 0'} labelValue={'Год капитального ремонта (2005)'} width={'100%'}/>
            </div>
            <div className="specifications-inputs">
                <InputWithOperations label={'Этаж'}/>
                <InputWithOperations label={'Этажность'}/>
            </div>
            <div className="specifications__inf">
                <FormInput labelValue={'Год постройки (2001)'} width={'100%'}/>
                <FormInput margin={'20px 0 0'} labelValue={'Год капитального ремонта (2005)'} width={'100%'}/>
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
                    <li>Есть</li>
                    <li>Нет</li>
                    <li>2 и более</li>
                </ul>
                <Select label={'Плита'} margin={'10px 0 0'}/>
            </div>
        </div>
    )
}

export default SpecificationsResidential