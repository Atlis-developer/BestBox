import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Navigation } from './Navigation';
import { NavigationMobile } from './NavigationMobile';

export const Header = () => {

    return (
        <div className='header'>
            <div className='logo'>
                <NavLink to='/'>
                <h1>BestBox</h1>
                </NavLink>
                <span>Изготовление, монтаж и продажа металлических шкафов для паркингов</span>
            </div>
            <Navigation/>
            <NavigationMobile/>
        </div>

    )

}