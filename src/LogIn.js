import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (
      email === '' || 
      password === '' || 
      confirmPassword === ''
    ) 
    {
      alert("Please fill in all fields.");
    }
      else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    }
     else if (!isValidPassword(password)) {
      alert("Password must be 8-16 characters and include a combination of letters, numbers, and symbols.");
    }
      else if (!isValidEmail(email)) {
        alert("Enter a valid email address.");
    }
     else {
      alert("Registration Successful.");
    }
  }

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordRegex.test(password);
  }
  const isValidEmail = (email)=> {
  const validDomains = ["gmail.com"];
  const emailRegex = new RegExp(`^[A-Za-z0-9._%+-]+@(${validDomains.join('|')})$`);
  return emailRegex.test(email);


}
  return (
    <div className="bdy">
      <div>
        <div className="form">
          <label className="">E-mail:</label><br/>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <label className="">Password:</label><br/>
          <input
            type="password"
            placeholder="Create your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} /><br/>
          <label className="">Confirm Password:</label><br/>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
          <button onClick={handleSubmit} type='button' className="btn">Submit</button>
        </div>
        
      </div>
    </div>
  );
}


