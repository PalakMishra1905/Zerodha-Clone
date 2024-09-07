import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className="row mt-5">
               <div className='col-8 p-5'>
                  <h3><a style={{textDecoration:"none"}} href="">Brokerage Calculator</a></h3>
                  <ul style={{fontSize:"14px", lineHeight:"2rem"}}>
                    <li className="text-muted">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order</li>
                    <li  className="text-muted">Digital contract notes will be sent via e-mail.</li>
                    <li  className="text-muted">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li  className="text-muted">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li  className="text-muted">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li  className="text-muted">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                  </ul>
               </div>
               <div className='col-4 p-5'>
                  <h3><a style={{textDecoration:"none"}} href="#">List of charges</a></h3>
               </div>
            </div>
        </div>
     );
}

export default Brokerage;