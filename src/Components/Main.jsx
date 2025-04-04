import React from 'react';
import restaurantphoto1 from '../Images/restaurantphoto1.png'
import bruschetta from '../Images/bruchetta.png'
import greekSalad from '../Images/greek-salad.png'
import lemonDessert from '../Images/lemon-dessert.png'
import johnProfile from '../Images/johnProfile.png'
import janeProfile from '../Images/janeProfile.png'
import markProfile from '../Images/markProfile.png'
import abbyProfile from '../Images/abbyProfile.png'
import './Main-HeroSection.css'
import './Main-Highlights.css'
import './Main-Testimonials.css'

const Main = (() => {
    return(
        <main>
           <div className="hero-section">
                <div className='text-content'>
                    <div className='title-subtitle'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a table</button>
                </div>
                <div className='hero-image'>
                    <img src={restaurantphoto1} alt="Some sandwiches on tray" />
                </div>
           </div>
           <div className="Highlights">
                <div className='Highlights-top'>
                    <h2 style={{fontSize: "35px"}}>Specials</h2>
                    <button>Online Menu</button>
                </div>
                <div className='Specials-showcase'>
                    <div className='Showcase-content'>
                        <img src={greekSalad} alt="A showcase image of a Greek Salad" />
                        <div className='Showcase-text'>
                            <div className='name-price'>
                                <h4>Greek salad</h4>
                                <p style={{color:"red"}}>$12.99</p>
                            </div>
                            <p className='dish-description'>Cucumbers, tomatoes, olives, feta, olive oil, oregano.</p>
                            <p><a href='#order-delivery'>Order a delivery</a></p>
                        </div>
                    </div>
                    <div className='Showcase-content'>
                        <img src={bruschetta} alt="A showcase image of bruschettas" />
                        <div className='Showcase-text'>
                            <div className='name-price'>
                                <h4>Bruschetta</h4>
                                <p style={{color:"red"}}>$9.99</p>
                            </div>
                            <p className='dish-description'>Toasted bread, tomatoes, basil, garlic, olive oil.</p>
                            <p><a href='#order-delivery'>Order a delivery</a></p>
                        </div>
                    </div>
                    <div className='Showcase-content'>
                        <img src={lemonDessert} alt="A showcase image of a Lemon Dessert" />
                        <div className='Showcase-text'>
                            <div className='name-price'>
                                <h4>Lemon dessert</h4>
                                <p style={{color:"red"}}>$5.00</p>
                            </div>
                            <p className='dish-description'>Zesty lemon curd, buttery crust, refreshing finish.</p>
                            <p><a href='#order-delivery'>Order a delivery</a></p>
                        </div>
                    </div>
                </div>
           </div>
           <div className="testimonials">
                <h2>Testimonials</h2>
                <div className='profiles-group'>
                    <div className='rating'>
                        <h4>Rating</h4>
                        <div className='profile'>
                            <img src={janeProfile} alt="John's profile picture." />
                            <h6>Jane</h6>
                        </div>
                        <p>Review</p>
                    </div>
                    <div className='rating'>
                        <h4>Rating</h4>
                        <div className='profile'>
                            <img src={johnProfile} alt="John's profile picture." />
                            <h6>John</h6>
                        </div>
                        <p>Review</p>
                    </div>
                    <div className='rating'>
                        <h4>Rating</h4>
                        <div className='profile'>
                            <img src={markProfile} alt="John's profile picture." />
                            <h6>Mark</h6>
                        </div>
                        <p>Review</p>
                    </div>
                    <div className='rating'>
                        <h4>Rating</h4>
                        <div className='profile'>
                            <img src={abbyProfile} alt="John's profile picture." />
                            <h6>Abby</h6>
                        </div>
                        <p>Review</p>
                    </div>
                </div>
           </div>
           <div className="about">

           </div>
        </main>
    );
})

export default Main;