import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import './status.css'

const Status = () => {
    return (
        <div className="status">
            <HeadComponent
                width={'90%'}
                h2={'Статус'}
                h2FontSize={'1.3em'}
                p={'К списку'}
                btnWidth={'55%'}
                btnHeight={'40px'}
                buttonValue={'Сохранить'}
                optionWidth={'50%'}
                optionMargin={'0'}
                reverse
            />
            <div className="status__buttons">
                <button>Опубликовано</button>
                <button className={'posted'}>Не опубликовано</button>
            </div>
        </div>
    )
}

export default Status