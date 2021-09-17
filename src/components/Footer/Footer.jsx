import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <NavLink to='/'>
                <h3>&#169;BestBox</h3>
                </NavLink> 
            </div>
            <div className='footer-navigation'>
                <nav className='footer-nav'>
                        <div className='footer-link'>
                            <NavLink to='/katalog-tovarov/'>КАТАЛОГ ШКАФОВ</NavLink>
                        </div>
                        <div className='footer-link'>
                            <NavLink to='/motoboxs/'>МОТОБОКСЫ</NavLink>
                        </div>
                        <div className='footer-link'>
                            <NavLink to='/guarantee/'>ГАРАНТИЯ</NavLink>
                        </div>
                        <div className='footer-link'>
                            <NavLink to='/delivery/'>ДОСТАВКА И МОНТАЖ</NavLink>
                        </div>
                        <div className='footer-link'>
                            <NavLink to='/examples/'>НАШИ РАБОТЫ</NavLink>
                        </div>
                        <div className='footer-link'>
                            <NavLink to='/contacts/'>КОНТАКТЫ</NavLink>
                        </div>
                </nav>
            </div>
        </div>

    )

}