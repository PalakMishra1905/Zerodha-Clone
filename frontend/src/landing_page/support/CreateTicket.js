import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row mt-5 p-5">
                <h3 className="mb-5"style={{fontWeight:"5"}}>To create a ticket, select a relevant topic</h3>
                <div className="row mb-3">
                    <div className="col">
                        <h4> <a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-circle-plus"></i> Account Opening</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">Getting started </a></p>
                        <p><a style={{textDecoration:"none"}}href="#">Online </a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Offline </a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Charges </a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Company partnership and HUF </a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Non resident Indian (NRI) </a></p>  
                    </div>
                    <div className="col">
                        <h4><a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-user"></i> Your Zerodha Account</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">Login credentials </a></p>
                        <p><a style={{textDecoration:"none"}}href="#">Your Profile</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Account modification and segment addition</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">CMR & DP ID </a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Nomination</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Transfer & conversion of shares</a></p>  
                    </div>
                    <div className="col">
                        <h4><a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-chart-simple"></i> Trading and Markets</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">Trading FAQs</a></p>
                        <p><a style={{textDecoration:"none"}}href="#">Kite</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Margins</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Product & order types</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Corporate actions</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Kite features</a></p> 
                    </div>
                </div>
                <div className="row mb-3 mt-5 p-5">
                    <div className="col">
                    <h4><a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-box"></i> Funds</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">Fund withdrawal</a></p>
                        <p><a style={{textDecoration:"none"}}href="#">Adding funds</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Adding bank accounts</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">eMandates</a></p> 
                    </div>
                    <div className="col">
                    <h4><a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-circle-notch"></i> Consoles</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">IPO</a></p>
                        <p><a style={{textDecoration:"none"}}href="#">Portfolio</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Funds statement</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Profile</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Reports</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Referral program</a></p> 
                         
                    </div>
                    <div className="col">
                    <h4><a  style={{textDecoration:"none", color:"black"}}href="#"><i class="fa-solid fa-coins"></i> Coins</a></h4>
                        <p><a style={{textDecoration:"none"}}href="#">Understanding mutual funds and coin</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Coin app</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Coin web</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">Transactions and reports</a></p> 
                        <p><a style={{textDecoration:"none"}}href="#">National pention scheme (NPS)</a></p> 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;