import React from "react";

function Login() {
    const loginFormHandler = async function (event) {
        
        event.preventDefault();
      
        const emailEl = document.getElementById("#email-input-login");
        const passwordEl = document.getElementById("#password-input-login");
      
        const response = await fetch("/api/user/login", {
          method: "POST",
          body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
          }),
          headers: { "Content-Type": "application/json" },
        });
      
        if (response.ok) {
          document.location.replace("/form");
        } else {
          alert("Failed to login");
        }
      };

    return (
    <div class="row" id="container" >
      <form id="login-form" class="card-body col s12 m7">
      <div class="center">
          <div class="card-header">
    <h2>Login</h2>
  </div>
        <div class="card-content">
            <div>
    <label class="form-label" for="email-input-login">Email</label>
    <input type="text" class="form-input" id="email-input-login" />
  </div>
  <div>
    <label for="password-input-login" class="form-label">Password</label>
    <input type="password" id="password-input-login" class="form-input"/>
  </div>
        </div>
        <div class="card-action">
    <button type="submit" id="login-btn" class="btn" onClick={() => loginFormHandler()}>Login!</button>
    <a type="button" class="btn" href="/signup">Sign up</a>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Login;
