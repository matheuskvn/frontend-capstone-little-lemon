import React from 'react';
import logo from '../Images/little-lemon-logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt='Little Lemon Logo' className='logo' />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Menu</a></li>
                    <li><a href="/reservation">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;