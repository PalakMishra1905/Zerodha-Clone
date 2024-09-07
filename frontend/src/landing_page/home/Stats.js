import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row mt-5'>
               <div className='col-lg-6 col-sm-12 p-5'>
                   <h1 className="fs-2">Trust with Confidence</h1>
                   <div className="p-5">
                   <h2 className="fs-4">Customer first always</h2>
                   <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with 3.5+ lakhs worth of equity investments.</p>
                    <h2 className="fs-4">No spamms or Gimmicks</h2>
                   <p className="text-muted">No, gimmics, spams, "gamification" or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                   <p className="text-muted">Not just an app, but a whole ecosystem. our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                   <p className="text-muted">With initiatives like "Nudge and kill switch" we don't just facilitate transactions, but actively help you to do better with your money. </p>
                   </div>
               </div>
               <div className='col-lg-6 col-sm-12 p-5 '>
                  <img src="images/ecosystem.png" style={{width:"85%"}}/>
                  <div className="text-center" >
                    <a style={{textDecoration:"None", marginRight:"1rem"}} href="">Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                    <a style={{textDecoration:"None"}} href="">Try kite demo</a>
                  </div>
               </div>
            </div>
        </div>
     );
}

export default Stats;