import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({ ...formState })
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
    
    document.location.replace('/profile');
  };

  

  return (
    <div className="row" id="container" >
      <div id="login-form" className="card-body col s12 m7">
        <div className="card center">
          <div className="card-header">
            <h2>Login</h2>
          </div>
          <div className="card-content">
            <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="email"
                  name="email"
                  type="email"
                  id="email-input-login"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="password"
                  name="password"
                  type="password"
                  id="password-input-login"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn" type="submit">Submit</button>
            </form>
            
          </div>
          {error && <div>Login failed</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;