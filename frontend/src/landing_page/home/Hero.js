import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center col-sm-12'>
                <img src="images/homeHero.png" alt="Hero-img" className='mb-5'/>

                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <Link to="/signup">
                <button className="btn btn-primary fs-5 mb-5" style={{width:"20%"}}>Signup Now</button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;