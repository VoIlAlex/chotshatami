import React, {useState} from 'react'

import HeadComponent from "../../head-component/HeadComponent";
import './status.css'

const Status = props => {
    const { stateStatusCategory, setState} = props

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
            <ul className={'status__buttons'}>
                <li
                    className={stateStatusCategory.published==='published'?'selected':''}
                    onClick={() => setState('published')}
                >Опубликованно</li>
                <li
                    className={stateStatusCategory.published==='unpublished'?'selected':''}
                    onClick={() => setState('unpublished')}
                >Не опубликованно</li>
            </ul>
        </div>
    )
}

export default Status