import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {

    return (
        <div className='header'>
            <div className='logo'>
                <NavLink to='/'>
                <h1>BestBox</h1>
                </NavLink>
                <span>Изготовление, монтаж и продажа металлических шкафов для паркингов</span>
            </div>
            <div className='navigation'>
                <nav className='nav'>
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
                </nav>
            </div>
        </div>

    )

}