import React from 'react';

function Pricing() {
    return ( 
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-4 col-sm-6">
                    <h1 className='mb-3 fs-2'>Unbetable Pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transperancy in India.
                        Flat fees and no  hodden charges.
                    </p>
                    <a href="">See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-lg-6 col-sm-6 mb-5">
                    <div className="row text-center">
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p className='text-muted'>Free equity delivery and direct mutual funds.</p>
                        </div>
                        <div className='col p-3 border'>
                        <h1 className='mb-3'>&#8377;20</h1>
                        <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;