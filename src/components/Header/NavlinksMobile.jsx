import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavlinksMobile.css';


export const NavlinksMobile = () => {

    return (
        <div className='menuMobile'>
                <div className='linkMobile'>
                    <NavLink to='/catalog' activeClassName='activeLink'>КАТАЛОГ ШКАФОВ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/motoboxs' activeClassName='activeLink'>МОТОБОКСЫ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/guarantee' activeClassName='activeLink'>ГАРАНТИЯ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/delivery' activeClassName='activeLink'>ДОСТАВКА И МОНТАЖ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/examples' activeClassName='activeLink'>НАШИ РАБОТЫ</NavLink>
                </div>
                <div className='linkMobile'>
                    <NavLink to='/contacts' activeClassName='activeLink'>КОНТАКТЫ</NavLink>
                </div>
        </div>
    )

}