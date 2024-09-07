import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 ">
            <div className="row border-bottom">
            <h1 className="text-center fs-1">Pricing</h1>
            <p className="text-center mb-5 text-muted">Free equity investments and flat ₹20 intraday and F&O trades</p>
                <div className="col p-5">
                      <img src="images/pricingEquity.svg"/>
                      <h1>Free equity delivery</h1>
                      <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-5">
                      <img src="images/intradayTrades.svg"/>
                      <h1>Intraday and F&O trades</h1>
                      <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-5">
                      <img src="images/pricingEquity.svg"/>
                      <h1>Free direct MF</h1>
                      <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div> 
        </div>
     );
}

export default Hero;