import React from "react";

function Team() {
  return (
    <div>
      <div className="container">
        <div className="row p-5 border-top">
          <h1 className="text-center">People</h1>

          <div className="col p-5">
            <img src="images/nithinKamath.jpg" style={{borderRadius:"100%", width:"60%"}}/>
            <h2 className="mt-3">Nitin Kamath</h2>
            <p className="mt-3">Founder, CEO</p>
          </div>
          <div className="col p-5">
            <p className="mb-3" style={{fontSize:"1.2rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.</p>
            <p className="mb-3" style={{fontSize:"1.2rem"}}>He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p className="mb-3" style={{fontSize:"1.2rem"}}>Playing basketball is his zen.</p>
            <p className="mb-3" style={{fontSize:"1.2rem"}}> Connect on <a style={{textDecoration:"none"}} href="#">Homepage </a>/ <a style={{textDecoration:"none"}} href="#">TradingQnA</a> / <a style={{textDecoration:"none"}} href="#">Twitter.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
