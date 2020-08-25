import React from 'react'
import {NavLink} from "react-router-dom";

import TransparentButton from "../transparent-button/TransparentButton";
import AsideButton from "../aside-button/AsideButton";
import {ReactComponent as MenuOpen} from '../../asserts/menu-close.svg'
import {ReactComponent as AddCircleBlack} from '../../asserts/add-circle-black.svg'
import {ReactComponent as AddCircleWhite} from '../../asserts/add-circle-white.svg'
import {ReactComponent as HomeSearchWhite} from '../../asserts/home-search-white.svg'
import {ReactComponent as HomeSearchBlack} from '../../asserts/home-search-black.svg'
import {ReactComponent as ViewSite} from '../../asserts/view-aside.svg'
import {ReactComponent as Options} from '../../asserts/options.svg'
import './aside-close.css'

const AsideClose= props => {
    const {location, show, setShow} = props
    return (
        <aside className={`${show? 'close-slide-in-left':'close-slide-in-right'} close-menu`}>
            <p><MenuOpen className={'menu-btn'} onClick={() => setShow(!show)}/></p>
            <TransparentButton
                margin={'0 0 42px 0'}
                width={'60px'}
            ><ViewSite /></TransparentButton>
            <AsideButton selected={location == '/all_objects'}>
                <NavLink to={'/all_objects'}>
                {
                    location == '/all_objects' ?
                        <HomeSearchWhite className={'option-btn'}/> :
                        <HomeSearchBlack className={'option-btn'}/>
                }
                </NavLink>
            </AsideButton>
            <AsideButton selected={location == '/categories' || location == '/add_object'}>
                <NavLink to={'/categories'}>
                {
                    location == '/categories' || location == '/add_object' ?
                        <AddCircleWhite className={'option-btn'}/> :
                        <AddCircleBlack className={'option-btn'}/>
                }
                </NavLink>
            </AsideButton>
            <AsideButton><Options className={'option-btn'}/></AsideButton>
        </aside>
    )
}

export default AsideClose