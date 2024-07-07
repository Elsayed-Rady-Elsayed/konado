import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./login.js";
class Register extends Component {
  render() {
    return (
      <div className="container register">
        <h3>REGISTER</h3>
        <form>
          <div>
            <label>email</label>
            <input
              className="inputField"
              type="email"
              placeholder="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label>name</label>
            <input
              className="inputField"
              type="text"
              placeholder="name"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label>password</label>
            <input
              className="inputField"
              type="password"
              placeholder="password"
              name="pass"
              id="pass"
            />
          </div>
          <div>
            <label>confirm password</label>
            <input
              className="inputField"
              type="password"
              placeholder="confirm password"
              name="confirmpass"
              id="confirmpass"
            />
          </div>
          <input
            href="/login"
            type="submit"
            className="submitBtn"
            value="Register"
            onClick={(e) => {
              e.preventDefault();
              let email = document.getElementById("email").value;
              let name = document.getElementById("name").value;
              let pass = document.getElementById("pass").value;
              let confirmpass = document.getElementById("confirmpass").value;
              if (
                email != "" &&
                name != "" &&
                (pass != "") & (confirmpass != "")
              ) {
                if (pass === confirmpass) {
                  console.log("register");
                  document.getElementById("loginClick").click();
                }
              }
            }}
          />
        </form>
      </div>
    );
  }
}
export default Register;
