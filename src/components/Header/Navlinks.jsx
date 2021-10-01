import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navlinks.css';
import { GiHamburgerMenu } from 'react-icons/gi'

export const Navlinks = () => {

    return (
        <div className='menu'>
                <div className='link'>
                    <NavLink to='/catalog' activeClassName='activeLink'>КАТАЛОГ ШКАФОВ</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/motoboxs' activeClassName='activeLink'>МОТОБОКСЫ</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/guarantee' activeClassName='activeLink'>ГАРАНТИЯ</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/delivery' activeClassName='activeLink'>ДОСТАВКА И МОНТАЖ</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/examples' activeClassName='activeLink'>НАШИ РАБОТЫ</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/contacts' activeClassName='activeLink'>КОНТАКТЫ</NavLink>
                </div>
        </div>
    )

}