import React from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {

    const signupFormHandler = async function (event) {
        event.preventDefault();
      
        const emailEl = document.querySelector("#email-input-signup");
        const passwordEl = document.querySelector("#password-input-signup");
      
        const response = await fetch("/api/user", {
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
          alert("Failed to sign up");
        }
      };
      
    return (
        <div className="row" id="container" >
        <form id="signup-form" className="card-body col s12 m7">
        <div className="card center">
            <div className="card-header">
      <h2>Sign Up</h2>
    </div>
          <div className="card-content">
              <div>
      <label className="form-label" for="email-input-signup">Email</label>
      <input type="text" className="form-input" id="email-input-signup" />
    </div>
    <div>
      <label for="password-input-signup" className="form-label">Password</label>
      <input type="password" id="password-input-signup" className="form-input"/>
    </div>
          </div>
          <div className="card-action">
      <button type="submit" id="signup-btn" className="btn" onClick={() => signupFormHandler()}>Signup!</button>
        <a href="/login" className="btn">Login</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
