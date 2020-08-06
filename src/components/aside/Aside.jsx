import React, {useState} from 'react'
import {CSSTransition} from "react-transition-group";

import TransparentButton from "../transparent-button/TransparentButton";
import AsideButton from "../aside-button/AsideButton";
import {ReactComponent as Logo} from '../../asserts/logo.svg'
import {ReactComponent as MenuBtn} from '../../asserts/menu-open.svg'
import {ReactComponent as AddCircle} from '../../asserts/add-circle.svg'
import {ReactComponent as HomeSearch} from '../../asserts/home-search.svg'
import {ReactComponent as Options} from '../../asserts/options.svg'

import './aside.css'

const Aside = () => {
    const [show, setShow] = useState(true)
    return (
        <CSSTransition
            in={show}
            timeout={200}
            classNames={'slide-in-left'}
            mountOnEnter
            unmountOnExit
        >
            <aside>
                <p>
                    <MenuBtn
                        className={'menu-btn'}
                        onClick={() => setShow(false)}
                    />
                    <Logo/>
                </p>
                <TransparentButton margin={'0 0 42px 0'}>Просмотр сайта</TransparentButton>

                <AsideButton selected={true}> <HomeSearch className={'option-btn'}/>Все объекты </AsideButton>
                <AsideButton><AddCircle className={'option-btn'}/>Добавить объект</AsideButton>

                <AsideButton><Options className={'option-btn'}/>Настройки</AsideButton>
            </aside>
        </CSSTransition>
    )
}

export default Aside