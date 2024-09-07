import React from 'react';

function Universe() {
    return ( 
        <div className="container">
            <div className='row mt-10'>
               <h1 className='text-center'>The Zerodha Universe</h1>
               <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>

               <div className='col p-3 mt-5'>
                <div  className="mb-5">
                   <img src="images/smallcaseLogo.png" style={{width:"50%"}}/>
                   <p className="text-muted">Thematic investment platform</p>
                </div>
                <div className="mb-5" >
                  <img src="images/zerodhaFundhouse.png"  style={{width:"50%"}}/>
                  <p className="text-muted">Asset Management</p>
                </div>  
               </div>   
                  
               <div className='col p-3 mt-5'>
                <div className='mb-5'>
                   <img src="images/streakLogo.png" style={{width:"50%"}}/>
                   <p className="text-muted">Algo & Strategy platform</p>
                </div>
                 <div className="mb-5" >
                   <img src="images/goldenpiLogo.png" style={{width:"50%"}}/>
                   <p className="text-muted">Bonds trading platform</p>
                </div>  
               </div>

               <div className='col p-3 mt-5'>
                <div className="mb-5">
                  <img  src="images/sensibullLogo.svg" style={{width:"50%"}}/>
                  <p className="text-muted">Options trading platform</p>
                </div>
                <div className="mb-5">
                  <img src="images/dittoLogo.png" style={{width:"40%"}}/>
                  <p className="text-muted">Personalized information on Life & health insurance. No spam and no miss-selling. </p>
                </div>
              </div> 
              <div className="row mb-5">
                   <button type="button" class="btn btn-primary btn-lg"
                   style={{width:"30%", marginLeft:"460px"}}>Signup Now</button>
                </div>  
            </div>
        </div>
    );
}

export default Universe;