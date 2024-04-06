import React, { useState } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'; 
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8089/login', { email, password });
      const { success, role } = response.data;
      if (success) {
        if (role === "Worker") {
          navigate('/helperhome');
        } else if(role === "User"){
          navigate('/userhome');
        }else {
          alert("Invalid email or password");
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <main className="card-container slideUp-animation">
      <div className="image-container">
        <img src="./img/signUp.svg" className="illustration" alt="" />
        <p className="quote">Sign up today to get exciting offers..!</p>
        <a href="#btm" className="mobile-btm-nav">
          <img src="./img/dbl-arrow.png" alt="" />
        </a>
      </div>
      <form onSubmit={handleSubmitLogin}>
        <div className="form-container slideRight-animation">
          <h1 className="form-header">Login</h1>
          <div className="login-input-container">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <div className="error"></div>
          </div>
          <div className="login-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="user-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div className="error"></div>
          </div>
          <div id="btm">
            <button type="submit" className="submit-btn">Login</button>
            <p className="btm-text">
              Don't have an account? <NavLink to="/reg" className="btm-text-highlighted">Sign Up</NavLink>
            </p><p className="btm-text">
          <NavLink to="/forgetpass" className="btm-text-highlighted">Forget Passwrod ?</NavLink>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Login;
