import React from 'react'

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
                disabled={props.disabled}
                onClick={() => props.updateObject({...stateStatusCategory, id: props.id}, props.token, 'status')}
                reverse
            />
            <ul className={'status__buttons'}>
                <li
                    className={stateStatusCategory.published===1?'selected':''}
                    onClick={() => setState({published:1})}
                >Опубликованно</li>
                <li
                    className={stateStatusCategory.published===0?'selected':''}
                    onClick={() => setState({published:0})}
                >Не опубликованно</li>
            </ul>
        </div>
    )
}

export default Status