import React from 'react';

function Hero() {
    return ( 
        
            <div className='container-fluid supportHero'  style={{backgroundColor:"rgb(56, 126, 209)"}}>
                 <div className='row p-5'>
                    <div className="col">
                       <h4 className='mb-5'style={{color:"white"}}>Support portal</h4>
                       <h2 className='mb-3 fs-4'style={{color:"white"}}>Search for an answer or browse help topics to create a ticket</h2>
                        <input className=" heroInput mb-3 text-center" placeholder="Eg. how do I activate F&O, why is my  order getting rejected..."/><br/>
                        <a className="mx-5"style={{color:"white"}} href="#">Track account opening</a><a className="mx-5" style={{color:"white"}} href="#">Track segment activation</a><br/>
                        <a className="mx-5"style={{color:"white"}} href="#">Intraday margins</a><a className="mx-5" style={{color:"white"}} href="#">Kite user manual</a>
                    </div>
                    <div className="col p-5">
                        <a className="mb-8"style={{color:"white"}} href="#">Track tickets</a>
                        <h4 className='mt-5 fs-3' style={{color:"white"}}>Features</h4>
                        <p style={{color:"white"}}>The account maintenance charge has been deducted but
                             is not yet reflected in today's Kite balances for a few of our clients.
                              Only the actual available funds will be usable for trades.</p>
                    </div>
                 </div>
            </div>
       
     );
}

export default Hero;