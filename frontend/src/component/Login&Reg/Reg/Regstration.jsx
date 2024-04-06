import React, { useState } from "react";
import {NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css'
function Reg() {

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setcpassword] = useState("");
  const [mobileNo, setphoneno] = useState("");
  const navigate = useNavigate();
    
 

  const handleSubmitReg = async (event) => {
    try {
      event.preventDefault();
      const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobilePattern = /^[0-9]{10}$/;
  
      const newErrors = [];
      const checkbox = document.getElementById("status");
      const Role = checkbox.checked ? "User" : "Worker";
  
      if (!emailPattern.test(email)) {
        newErrors.push('Please enter a valid email address');
      }
  
      if (!passwordPattern.test(password)) {
        newErrors.push('Password must be at least 7 characters long and contain at least one special character, one digit, one lowercase letter, and one uppercase letter');
      }
  
      if (!mobilePattern.test(mobileNo)) {
        newErrors.push("Please enter a valid mobile number");
      }
  
      if (password !== confirmPassword) {
        newErrors.push("Passwords do not match");
      }
  
      if (newErrors.length > 0) {
        alert(newErrors.join('\n\n')); // Display errors in an alert box
      } else {
        const response = await axios.post('http://localhost:8089/register', {username, password, email, mobileNo, confirmPassword, Role});
        const { success, message } = response.data;
        if (success) {
          alert(message);
          navigate('/login');
        } else {
          alert('Error registering. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering. Please try again later.');
    }
  };
  
  


  return (
    <main className="Reg-card-container Reg-slideUp-animation">
      <div className="Reg-image-container">
        <img src="/img/signUp.svg" className="illustration" alt="" />
        <p className="quote">Sign up today to get exciting offers..!</p>
        <a className="mobile-btm-nav">
          <img src="img/dbl-arrow.png" alt="" />
        </a>
      </div>
      <form  onSubmit={handleSubmitReg}>
        <div className="Reg-form-container Reg-slideRight-animation">
          <h1 className="Reg-form-header">
Register Here
          </h1>
          <div className="Reg-input-container">
            <label htmlFor="role"></label>

            {/* Role Slider */}

            {/* <input type="text" name="role" id="role" placeholder='Enter User/Worker' value={Role} onChange={(e) => setRole(e.target.value)} required />
            <span>
              Role User Or Worker
            </span> */}
            
            <div class="custom-checkbox">
            <input id="status" type="checkbox" name="status" />
     <label for="status">
    <div class="status-switch" data-unchecked="Helper" data-checked="User">
    </div>
  </label>
</div>
            

            {/* Role Slider */}

            <div className="error"></div>
          </div>
          <div className="Reg-input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" value={username} onChange={(e) => setusername(e.target.value)} required />
            <span>
              Username
            </span>
            <div className="error"></div>
          </div>
          <div className="Reg-input-container">
            <label htmlFor="mail"></label>
            <input type="email" name="mail" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>
              E-mail
            </span>
            <div className="error"></div>
          </div>
          <div className="Reg-input-container">
            <label htmlFor="phone"></label>
            <input type="tel" name="phone" id="phone" value={mobileNo} onChange={(e) => setphoneno(e.target.value)} required />
            <span>Phone</span>
            <div className="error"></div>
          </div>
          <div className="Reg-input-container">
            <label htmlFor="user-password"></label>
            <input type="password" name="user-password" id="user-password" className="user-password" value={password} onChange={(e) => setpassword(e.target.value)} required />
            <span>Password</span>
            <div className="error"></div>
          </div>
          <div className="Reg-input-container">
            <label htmlFor="user-password-confirm"></label>
            <input type="password" name="user-password-confirm" id="user-password-confirm" className="password-confirmation" value={confirmPassword} onChange={(e) => setcpassword(e.target.value)} required />
            <span>
              Confirm Password
            </span>
            <div className="error"></div>
          </div>
          <div id="btm">
            <button type="submit" className="submit-btn">Create Account</button>
            <p className="btm-text">
              Already have an account..? <NavLink to="/login" className="btm-text-highlighted">Log in</NavLink>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Reg;
