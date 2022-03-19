import React from "react";
import Bitmoji from '../../src/Bitmoji.jpg'

function Contact() {
  console.log(Bitmoji);
  return (
    <div className="contact">
      <div class="container">
        <h1>Contact</h1>
        <div class="contactclass">
        {/* {<img src={Bitmoji} alt="PLENTY GROUP" height={200} width={200} />} */}
        
       <img className="img-hover-zoom dessertSumImg w-100" src={Bitmoji} alt="Ourteam" />
          <p>
            <a href="https://github.com/analuciarojas/Plenty/tree/main">
              PLEASE CLICK HERE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
