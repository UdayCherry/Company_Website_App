import React from "react";
import "./Ikano.css";

import {  FaEnvelope } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Footer";





export default function Ikano(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>

<div data-aos='flip-right'className="Ikano_Image">
        <img style={{width:'1150px',height:'500px'}} src="e1.jpeg"/>
        </div>
        <div className="Ikano_Text" >
            <br/>
        <p><b >NEWSROOM/
PRESS RELEASE</b></p>
        <hr style={{width:'10000px'}}/>
<i style={{fontSize:50}}>Ikano Bank Selects TFT BaNCS <p>to Build a Bank for the Future</p></i>
</div>
<div data-aos='zoom-in'className="Ikanobackground">
TFT Technologies Services’ Proven SaaS-based Digital Banking Core to Help the Bank Simplify its IT Landscape, and Launch Value-Added Financial Services Rapidly
Tata Consultancy Services’ Proven SaaS-based Digital Banking Core to Help the Bank Simplify its IT Landscape, and Launch Value-Added Financial Services Rapidly


<span>ABOUT TFT TECHNOLOGIES(TT)</span>
TFT Technologies Services is an TT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 55 years. Its consulting-led, cognitive powered, portfolio of business, technology and engineering services and solutions is delivered through its unique Location Independent Agile™ delivery model, recognized as a benchmark of excellence in software development

A part of the Tata group, India's largest multinational business group, TCS has over 614,000 of the world’s best-trained consultants in 55 countries. The company generated consolidated revenues of US $27.9 billion in the fiscal year ended March 31, 2023, and is listed on the BSE and the NSE in India. TCS' proactive stance on climate change and award-winning work with communities across the world have earned it a place in leading sustainability indices such as the MSCI Global Sustainability Index and the FTSE4Good Emerging Index.



<br></br>
<div data-aos='fade-right'className="Ikanoflip">
<i><h3>TFT Technologies media contacts</h3></i>
<h3><b data-aos='fade-left'data-aos-duration='3000' style={{color:'red'}}>India</b></h3>

<h3><FaEnvelope/></h3>tfttech123@tft.com
<h3><FcPhone/></h3>+91 9998884433

<h3><FaEnvelope/></h3>technologies@tft.com
<h3><FcPhone/></h3> +91 8899543553
</div>
</div>
<Footer/>

        
        
        
        </>
    );


}