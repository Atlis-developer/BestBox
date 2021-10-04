import React, { useState } from 'react';
import { NavlinksMobile } from './NavlinksMobile';
import './NavigationMobile.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'

export const NavigationMobile = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className='navigationMobile'>
            {open && <NavlinksMobile closeMenu={setOpen}/>}
            {open ? <CgClose className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)} /> :
                <GiHamburgerMenu className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)} />}
        </nav>

    )

}