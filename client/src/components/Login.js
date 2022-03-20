import React from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
    const loginFormHandler = async function (event) {
        event.preventDefault();
      
        const emailEl = document.querySelector("#email-input-login");
        const passwordEl = document.querySelector("#password-input-login");
      
        const response = await fetch("/api/user/login", {
          method: "POST",
          body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
          }),
          headers: { "Content-Type": "application/json" },
        });
      
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to login");
        }
      };

    return (
    <div className="row" id="container" >
      <form id="login-form" className="card-body col s12 m7">
      <div className="card center">
          <div className="card-header">
    <h2>Login</h2>
  </div>
        <div className="card-content">
            <div>
    <label className="form-label" for="email-input-login">Email</label>
    <input type="text" className="form-input" id="email-input-login" />
  </div>
  <div>
    <label for="password-input-login" className="form-label">Password</label>
    <input type="password" id="password-input-login" className="form-input"/>
  </div>
        </div>
        <div className="card-action">
    <button type="submit" id="login-btn" className="btn" onClick={() => loginFormHandler()}>Login!</button>
    <a type="button" className="btn" href="/signup">Sign up</a>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Login;
