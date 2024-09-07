import React from 'react';

function Awards() {
    return (
        <div className="container">
          <div className="row mt-5 ">
            <div className='col-lg-6 col-sm-12 p-5'>
               <img src="images/largestBroker.svg"/>
            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
               <h1>Largest stock Broker in India</h1>
               <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order
                volumes in India daily by trading and investing in:
               </p>
               <div className='row'>
                 <div className="col-6">
                 <ul>
                <li>Futures and options</li>
               </ul>
               <ul>
                <li>Commodity Derivatives</li>
               </ul>
               <ul>
                <li>Currency Derivatives</li>
               </ul>
                 </div>
                 <div className="col-6">
                 <ul>
                <li>Stocks & IPO's</li>
               </ul>
               <ul>
                <li>Direct mutual funds</li>
               </ul>
               <ul>
                <li>Bonds & Govt. Securities</li>
               </ul>
                 </div>
                 <img src="images/pressLogos.png" style={{width:"90%"}}/>
               </div>
               
            </div>
          </div>
        </div>
      );
}

export default Awards;