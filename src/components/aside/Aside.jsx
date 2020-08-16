import React, {useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {CSSTransition} from "react-transition-group";

import TransparentButton from "../transparent-button/TransparentButton";
import AsideButton from "../aside-button/AsideButton";
import {ReactComponent as Logo} from '../../asserts/logo.svg'
import {ReactComponent as MenuBtn} from '../../asserts/menu-open.svg'
import {ReactComponent as AddCircleBlack} from '../../asserts/add-circle-black.svg'
import {ReactComponent as AddCircleWhite} from '../../asserts/add-circle-white.svg'
import {ReactComponent as HomeSearchWhite} from '../../asserts/home-search-white.svg'
import {ReactComponent as HomeSearchBlack} from '../../asserts/home-search-black.svg'
import {ReactComponent as Options} from '../../asserts/options.svg'
import './aside.css'

const Aside = () => {
    let location = useLocation().pathname
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

                <AsideButton selected={location=='/all_objects'}>
                    {
                        location == '/all_objects'?
                            <HomeSearchWhite className={'option-btn'} />:
                            <HomeSearchBlack className={'option-btn'}/>
                    }
                    <NavLink to={'/all_objects'} >Все объекты</NavLink>
                </AsideButton>
                <AsideButton selected={location=='/add_object'}>
                    {
                        location=='/add_object'?
                            <HomeSearchWhite className={'option-btn'} />:
                            <HomeSearchBlack className={'option-btn'} />
                    }
                    <NavLink to={'/add_object'} >Добавить объект</NavLink>
                </AsideButton>

                <AsideButton><Options className={'option-btn'}/>Настройки</AsideButton>
            </aside>
        </CSSTransition>
    )
}

export default Aside