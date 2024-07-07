import React, { Component } from "react";
class Login extends Component {
  render() {
    return (
      <div className="container login">
        <h3>LOGIN</h3>
        <form>
          <div>
            <label>email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="email"
            />
          </div>
          <div>
            <label>password</label>
            <input
              id="pass"
              className="inputField"
              type="password"
              placeholder="password"
            />
          </div>
          <input
            type="submit"
            className="submitBtn"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              let email = document.getElementById("email").value;
              let pass = document.getElementById("pass").value;
              if (email != "" && pass != "") {
                window.localStorage.setItem(
                  "account",
                  JSON.stringify({
                    email: email,
                    pass: pass,
                  })
                );
                window.localStorage.setItem("logined", true);
                document.getElementById("homeLink").click();
              }
            }}
          />
        </form>
      </div>
    );
  }
}
export default Login;
