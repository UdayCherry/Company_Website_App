import React from 'react';
import "./Footer.css";
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
 
          
          <ul className="social_1">
            <li>
           <SocialIcon url="https://facebook.com" />
           </li>
           <li>
           <SocialIcon url="https://instagram.com" />
           </li>
           <li>
           <SocialIcon url="https://whatsapp.com" />
           </li>
           <li>
           <SocialIcon url="https://linkedin.com" />
           </li>
          </ul>
        <ul className="links ">
      <li>
        <Link style={{color:'black'}}to="/">Home</Link>
        </li>
      <li>
        <Link style={{color:'black'}}to="/Engineering">About</Link>
        </li>
        <li>
        <Link style={{color:'black'}}to="/Inclusion">Services</Link>
        </li>
     <li>
        <Link style={{color:'black'}}to="/Career">Career</Link>
        </li>
      <li>
        <Link style={{color:'black'}}to="/Contact">Contact</Link>
     </li>

      </ul>
     
      <div className='last'>
      @2023 TFT TECHNOLOGIES...
      </div>
     
     
    </footer>
  );
}

