import React from 'react';
import OpenAccount from '../OpenAccount';

import Hero from "./Hero.js";
import Brokerage from "./Brokerage.js";

function PricingPage() {
    return ( 
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </div>
     );
}

export default PricingPage;