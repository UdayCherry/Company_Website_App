
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Navbar.css";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import Hamburger from 'hamburger-react'
import Home from "./Home";
import About from "./About"
import Services from "./Services"
import Career from "./Career";
import Contact from "./Contact";
import Cyber from "./Cyber";
import Engineering from "./Engineering";
import Artificial from "./Artificial";
import Events from "./Events";

import Lab45 from "./Lab45";
import Inclusion from "./Inclusion";
import Ai from "./Ai";
import Future from "./Future.js";
import Ikano from "./Ikano.js";
import Career1 from "./career1.js"
import Again from "./Again.js";
import Net5g from "./Net5g.js";
import Cloud from "./Cloud.js";
import Ops from "./Ops.js";







export default function Navbar() {
 
  return (
    <>
    
    <BrowserRouter>
   
    <nav className="navbar">
      <div className="logo"><img style={{width:'50px'}}src="tft.png"/>TFT Technologies</div>
      <ul className="menu">
      
        <li>
          <Link style={{color:'black'}}to="/">Home</Link>
        </li>
        <li className="submenu">
          About
          <ul className="submenu-items">
            <li><Link to="/Events">Events</Link></li>
            
            <li><a href="/Inclusion">Inclusion and Diversity</a></li>
            <li><a href="/Lab45">Lab45</a></li>
          </ul>
        </li>
      
        <li className="submenu">
          Services
          <ul className="submenu-items">
            <li><Link to="/Cyber">CyberSecurity</Link></li>
            <li><Link to="/Engineering">Engineering & Sustainability</Link></li>
            <li><Link to="/Artificial">Artificial Intelligence</Link></li>
          </ul>
        </li>
        
        
        
        <li>
       
          <Link style={{color:'black'}} to="/career">Career</Link>
        
        </li>
        <li>
          <Link style={{color:'black'}} to="/Contact">Contact</Link>
        </li>
        
      </ul>
    </nav>


   
   
<Routes>
  <Route path ='/'element={<Home/>}/>
  <Route path ='/About'element={<About/>}/>
  <Route path ='/Services'element={<Services/>}/>
  <Route path ='/Career'element={<Career/>}/>
  <Route path ='/Contact'element={<Contact/>}/>
  <Route path="/Cyber" element={<Cyber/>}/>
  <Route path="/Engineering" element={<Engineering/>}/>
  <Route path="/Artificial" element={<Artificial/>}/>
  <Route path="/Events" element={<Events/>}/>

  <Route path="/Lab45" element={<Lab45/>}/>
  <Route path="/Inclusion" element={<Inclusion/>}/>
  <Route path="/Ai" element={<Ai/>}/>
  <Route path="/Future" element={<Future/>}/>
  <Route path="/ikano" element={<Ikano/>}/>
  <Route path="/Career1" element={<Career1/>}/>
  <Route path="/Again" element={<Again/>}/>
  <Route path="/Net5g" element={<Net5g/>}/>
  <Route path="/Cloud" element={<Cloud/>}/>
  <Route path="/Ops" element={<Ops/>}/>
  
  
  
 

  </Routes>
  </BrowserRouter>
 
</>


    
  );
}