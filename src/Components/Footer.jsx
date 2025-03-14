import React from 'react';
import logo1 from '../Images/white-lm-logo.png';
import './Footer.css';

const Footer = (() => {
    return(
        <footer>
            <div className='footer-section'>
                <img src={logo1} alt='Little Lemon footer logo' />
            </div>
            <div className='footer-section'>
                <h3>Doormat<br/>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='footer-section'>
                <h3>Contact</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className='footer-section'>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
})

export default Footer;