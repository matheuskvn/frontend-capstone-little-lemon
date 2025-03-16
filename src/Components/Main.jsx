import React from 'react';
import restaurantphoto1 from '../Images/restaurantphoto1.png'
import './Main.css'

const Main = (() => {
    return(
        <main>
           <div className="hero-section">
                <div className='text-content'>
                    <div className='title-subtitle'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <p>We are a family owned<br/> Mediterranean restaurant,<br/> focused on traditional<br/> recipes served with a modern<br/> twist.</p>
                    <button>Reserve a table</button>
                </div>
                <div className='hero-image'>
                    <img src={restaurantphoto1} alt="Some sandwiches on tray" />
                </div>
           </div>
           <div className="Highlights">

           </div>
           <div className="testimonials">

           </div>
           <div className="about">

           </div>
        </main>
    );
})

export default Main;