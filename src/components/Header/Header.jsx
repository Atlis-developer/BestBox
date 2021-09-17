import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
                            <NavLink to='/katalog-tovarov/'>КАТАЛОГ ШКАФОВ</NavLink>
                        </div>
                        <div className='link'>
                            <NavLink to='/motoboxs/'>МОТОБОКСЫ</NavLink>
                        </div>
                        <div className='link'>
                            <NavLink to='/guarantee/'>ГАРАНТИЯ</NavLink>
                        </div>
                        <div className='link'>
                            <NavLink to='/delivery/'>ДОСТАВКА И МОНТАЖ</NavLink>
                        </div>
                        <div className='link'>
                            <NavLink to='/examples/'>НАШИ РАБОТЫ</NavLink>
                        </div>
                        <div className='link'>
                            <NavLink to='/contacts/'>КОНТАКТЫ</NavLink>
                        </div>
                </nav>
            </div>
        </div>

    )

}