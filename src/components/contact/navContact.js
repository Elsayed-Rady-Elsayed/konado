import React, { Component } from "react";
class ContactPage extends Component {
  render() {
    return (
      <div className="contactus container">
        <h4>Contact Us</h4>
        <form>
          <div>
            <label>name</label>
            <input
              type="text"
              placeholder="name"
              name="text"
              className="inputField"
            />
          </div>
          <div>
            <label>email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="inputField"
            />
          </div>
          <div>
            <label>message</label>
            <input
              type="text"
              placeholder="message"
              name="message"
              className="inputField"
            />
          </div>
          <div>
            <label>comment</label>
            <textarea placeholder="comments" className="inputField"></textarea>
          </div>
          <input type="submit" name="" value="send" className="submitBtn" />
        </form>
      </div>
    );
  }
}
export default ContactPage;
