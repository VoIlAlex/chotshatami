import React from 'react'
import {NavLink, useHistory} from "react-router-dom";

import TransparentButton from "../transparent-button/TransparentButton";
import AsideButton from "../aside-button/AsideButton";
import {ReactComponent as Logo} from '../../asserts/logo.svg'
import {ReactComponent as MenuClose} from '../../asserts/menu-open.svg'
import {ReactComponent as AddCircleBlack} from '../../asserts/add-circle-black.svg'
import {ReactComponent as AddCircleWhite} from '../../asserts/add-circle-white.svg'
import {ReactComponent as HomeSearchWhite} from '../../asserts/home-search-white.svg'
import {ReactComponent as HomeSearchBlack} from '../../asserts/home-search-black.svg'
import {ReactComponent as Options} from '../../asserts/options.svg'
import './aside-open.css'

const AsideOpen = props => {
    const history = useHistory()
    const {location, show, setShow} = props
    return (
        <aside className={`${show ? 'open-slide-in-right' : 'open-slide-in-left'} full-menu`}>
            <p><MenuClose className={'menu-btn'} onClick={() => setShow(!show)}/>
                <Logo className={'logo-aside'} onClick={() => history.push('/all_objects')}/>
            </p>
            <TransparentButton margin={'0 0 42px 0'} onClick={() => {
                window.open('https://urielt.by/')
            }}>Просмотр сайта</TransparentButton>
            <AsideButton selected={location == '/all_objects'}>
                {
                    location == '/all_objects' ?
                        <HomeSearchWhite className={'option-btn'}/> :
                        <HomeSearchBlack className={'option-btn'}/>
                }
                <NavLink to={'/all_objects'}>Все объекты</NavLink>
            </AsideButton>
            <AsideButton selected={location == '/categories' || location == '/add_object'}>
                {
                    location == '/categories' || location == '/add_object' ?
                        <AddCircleWhite className={'option-btn'}/> :
                        <AddCircleBlack className={'option-btn'}/>
                }
                <NavLink to={{
                    pathname: '/categories',
                    new: true
                }}>Добавить объект</NavLink>
            </AsideButton>
            <AsideButton><Options className={'option-btn'}/>Настройки</AsideButton>
        </aside>
    )
}

export default AsideOpen