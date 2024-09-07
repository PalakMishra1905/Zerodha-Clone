import React from 'react';

function RightSection({imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className="container">
       <div className="row mt-5 ">
          <div className="col-lg-6 col-sm-6 p-5 ">
              <h1 className="mt-5">{productName}</h1>
              <p className="mt-4 fs-5">{productDescription}</p>
              <div className="mt-3">
                <a href={learnMore}  style={{textDecoration:"none"}}>learn more <i class="fa-solid fa-arrow-right"></i></a>
              </div>
          </div>

          <div className="col-lg-6 col-sm-6 p-3">
              <img src={imageURL}/>
          </div>
       </div>
    </div>
     );
}

export default RightSection;