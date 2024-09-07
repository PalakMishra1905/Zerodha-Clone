import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
       <div className="row mt-5 ">
          <div className="col-lg-6 col-sm-6 p-3 ">
             <img src={imageURL} />
          </div>
          <div className="col-lg-6 col-sm-6 p-5">
            <h1 className="mt-5">{productName}</h1>
            <p className="mt-4 fs-5">{productDescription}</p>
            <div className="mt-3">
               <a  className="mx-3" style={{textDecoration:"none"}} href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
               <a href={learnMore}  style={{textDecoration:"none"}}>learn more <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="mt-4">
               <a className="mx-3" href={googlePlay}><img src="images/googlePlayBadge.svg"/></a>
               <a href={appStore}><img src="images/appstoreBadge.svg"/></a>
            </div>
          </div>
       </div>
    </div>
  );
}

export default LeftSection;
