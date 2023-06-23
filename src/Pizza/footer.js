import React from "react";
import './footer.css'

import App from "./Photo/app.png"
import google from "./Photo/google.png"


function footer() {
  return(
    <>
   <div className="footer-containter">
    <div className="footer-logo">
       <div className="logo-heading">
         <h1> Domino's Pizza </h1>
       </div>
       <div className="logo-descripation">
        <span> Disclaimer</span>
        <span> Privacy Policy</span>
        <span> Disclaimer</span>
        <span>  Faq </span>
        <span> Terms & Conditions </span>
        <span>  Feedback </span>
       
       </div>
    </div>
    <div className="Playstore">
        <p> DOWNLOAD APP </p>
        <img id="app-store" src={App} />
        <img id="google-store" src={google} />
    </div>
   </div>
   
   <div className="Allright">
    All Rights Reserved. Copyright © Dinesh FoodWorks Ltd.
    </div>
   </>
  )
}

export default footer;