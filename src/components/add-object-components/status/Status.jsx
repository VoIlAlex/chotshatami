import React from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import './status.css'

const Status = () => {
    return (
        <div className="status">
            <HeadComponent
                width={'90%'}
                h2={'Статус'}
                h2FontSize={'20px'}
                p={'К списку'}
                btnWidth={'110px'}
                btnHeight={'40px'}
                buttonValue={'Сохранить'}
                optionWidth={'60%'}
                optionMargin={'0 -15px 0 0'}
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