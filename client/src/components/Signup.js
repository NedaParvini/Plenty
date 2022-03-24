import React from "react";

function Signup() {

    return (
        <div class="row" id="container" >
        <form id="signup-form" class="card-body col s12 m7">
        <div class="card" class="center">
            <div class="card-header">
      <h2>Sign Up</h2>
    </div>
          <div class="card-content">
              <div>
      <label class="form-label" for="email-input-signup">Email</label>
      <input type="text" class="form-input" id="email-input-signup" />
    </div>
    <div>
      <label for="password-input-signup" class="form-label">Password</label>
      <input type="password" id="password-input-signup" class="form-input"/>
    </div>
          </div>
          <div class="card-action">
      <button type="submit" id="signup-btn" class="btn">Signup!</button>
        <a href="/login" class="btn">Login</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
