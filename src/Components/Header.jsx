import React from 'react';
import logo from '../Images/little-lemon-logo.png';
import './Header.css';

const Header = (() => {
    return(
        <header className='header'>
            <img src={logo} alt='Little Lemon Logo' className='logo' />
        </header>
    );
})

export default Header;