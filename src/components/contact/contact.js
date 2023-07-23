import { extend } from "jquery";
import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container contact">
        <div className="left">
          <h2>SIGN UP TO NEWSLETTER</h2>
          <p>..AND RECEIVE $29 COUPON FOR FIRST SHOPPING</p>
        </div>
        <form>
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="subscribe" />
        </form>
        <div className="icons">
          <ion-icon
            name="logo-twitter"
            onClick={() => {
              window.location.href = "https://twitter.com/sayed__rady";
            }}
          ></ion-icon>
          <ion-icon
            name="logo-facebook"
            onClick={() => {
              window.location.href =
                "https://www.facebook.com/sayed.rady.3720/";
            }}
          ></ion-icon>
          <ion-icon
            name="logo-google"
            onClick={() => {
              window.location.href = "https://mail.google.com/mail/u/3/#inbox";
            }}
          ></ion-icon>
          <ion-icon
            name="logo-github"
            onClick={() => {
              window.location.href = "https://github.com/Elsayed-Rady-Elsayed";
            }}
          ></ion-icon>
          <ion-icon
            name="logo-linkedin"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/sayed-rady-3b6931233/";
            }}
          ></ion-icon>
        </div>
        <span className="ruleLine"></span>
      </div>
    );
  }
}
export default Contact;
