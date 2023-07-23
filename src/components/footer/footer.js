import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <div className="firstSec">
          <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/logo.png" />
          <p>
            We are a team of designers and developers that create high quality
            WordPress, Magento, Prestashop, Opencart themes.
          </p>
        </div>
        <div className="secondSec">
          <h2>Information</h2>
          <ul>
            <li>cart</li>
            <li>about us</li>
            <li>contact</li>
            <li>wishlist</li>
            <li>privacy policy</li>
            <li>sample page</li>
          </ul>
        </div>
        <div className="thirdSec">
          <h2>My Account</h2>
          <ul>
            <li>My Account</li>
            <li>My cart</li>
            <li>Location & working Hours</li>
            <li>my check out</li>
            <li>privacy chek up</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="fourthSec">
          <h2>Customer Services</h2>
          <ul>
            <li>Testiomanials</li>
            <li>Contact</li>
            <li>Location & working Hours</li>
            <li>Our Guarnate</li>
            <li>Track Your order</li>
            <li>hlep page</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
