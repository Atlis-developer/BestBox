import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavlinksMobile.css';


export const NavlinksMobile = (props) => {

    return (
        <div className='menuMobile'>
                <div className='linkMobile'>
                    <NavLink to='/catalog' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>КАТАЛОГ ШКАФОВ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/motoboxs' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>МОТОБОКСЫ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/guarantee' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>ГАРАНТИЯ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/delivery' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>ДОСТАВКА И МОНТАЖ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/examples' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>НАШИ РАБОТЫ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/contacts' activeClassName='activeLink' onClick={()=>props.closeMenu(false)}>КОНТАКТЫ</NavLink>
                </div>
        </div>
    )

}