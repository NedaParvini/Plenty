import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
    
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }

      document.location.replace('/form');
    };

    return (
      <div className="row" id="container" >
        <div id="login-form" className="card-body col s12 m7">
          <div className="card center">
            <div className="card-header">
              <h2>Signup</h2>
            </div>
            <div className="card-content">
              <form onSubmit={handleFormSubmit}>Enter a Username:
                  <input
                    className="form-input"
                    placeholder="Enter a username"
                    name="username"
                    type="username"
                    id="username-input-signup"
                    value={formState.username}
                    onChange={handleChange}
                  /><div></div>Enter your Email:
                  <input
                    className="form-input"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    id="email-input-signup"
                    value={formState.email}
                    onChange={handleChange}
                  /><div></div>Enter your password:
                  <input
                    className="form-input"
                    placeholder="Enter new password"
                    name="password"
                    type="password"
                    id="password-input-signup"
                    value={formState.password}
                    onChange={handleChange}
                  /><div></div>
                  <button className="btn" type="submit" id="signup-btn">Submit</button>
              </form>
              
            </div>
            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    );

  //   return (
  //       <div className="row" id="container" >
  //       <form id="signup-form" className="card-body col s12 m7">
  //       <div className="card center">
  //           <div className="card-header">
  //     <h2>Sign Up</h2>
  //   </div>
  //         <div className="card-content">
  //             <div>
  //     <label className="form-label" for="email-input-signup">Email</label>
  //     <input type="text" className="form-input" id="email-input-signup" />
  //   </div>
  //   <div>
  //     <label for="password-input-signup" className="form-label">Password</label>
  //     <input type="password" id="password-input-signup" className="form-input"/>
  //   </div>
  //         </div>
  //         <div className="card-action">
  //     <button type="submit" id="signup-btn" className="btn" onClick={() => signupFormHandler()}>Signup!</button>
  //       <a href="/login" className="btn">Login</a>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default Signup;
