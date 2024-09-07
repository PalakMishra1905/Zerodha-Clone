import React from 'react';

function Education() {
    return ( 
         <div className="container">
            <div className='row mt-8'>
                <div className='col-lg-6 col-sm-6 mt-8'>
                   <img src="/images/education.svg" style={{width:"70%"}}/>
                </div>
                <div className='col-lg-6 col-sm-6 mt-8'>
                   <h1 className="fs-2">Free and open market Education</h1>
                   <p>varsity, the largest online stock market education book
                    in the world covering everything from basics to advanced trading.
                   </p>
                   <a href="">Versity <i class="fa-solid fa-arrow-right"></i></a>
                   <p className="mt-5">TradingQ&A, the most active trading and investment community in India
                     for all your market related queries.
                   </p>
                   <a href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
         </div>
     );
}

export default Education;