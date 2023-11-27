import React from "react";
import "./Ai.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {  FaEnvelope } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import Footer from "./Footer";



export default function Ai(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        <div className="Aibackground">
      
<div  data-aos='fade-down'style={{backgroundColor:"pink"}}className="Ai_background">
<b  data-aos='fade-right'style={{color:'white'}}>NEWSROOM / 
PRESS RELEASE</b>
<hr/>
<h1  data-aos='fade-left'style={{color:'white'}}><i>TFT Cloud Study: Betting on AI, Global C-Suite Sticking with Cloud, Despite Macro Headwinds</i></h1>
</div>
<div className="Aibackground2">
<h3 ><b>TFT Technologies Finds Business Leaders Are Doubling Down on Cloud as a Long-Term Catalyst for Innovation, AI-Powered Transformation and Sustainability</b></h3>
<br/>
<u><h3 style={{color:'blue'}}>PRESS RELEASE</h3></u>
<br/>
<div className="Aizoom">
<p style={{color:'black'}} ><b>NEW YORK | MUMBAI, June 15, 2023:</b> TFT Technologies (TFT) (BSE: 532540, NSE: TFT) latest survey of senior business leaders worldwide, ‘Connected Future: How Cloud Drives Business Innovation’ reveals that cloud remains a long-term investment priority for 70% of major corporations, despite current macro headwinds and the recent slowing of growth of global cloud providers.</p>

The global survey of 972 senior executives reveals that innovation is a major driver of cloud investment, with 59% reporting that cloud is crucial as a catalyst for innovation for their organization’s future.<p/>

This appears particularly true for artificial intelligence (AI): 75% of respondents invested in AI and machine learning capabilities over the past two years, while 78% plan to do so over the coming 12-24 months. Both technologies are highly dependent on access to large amounts of data and scalability through cloud.<p/>

Interestingly, more than a third of respondents (37%) have made progress in their goals for cloud-enabled innovation in the form of new business models, underlining the growing power of cloud to drive new revenue.<p/>
</div>
<i ><h3>TFT Technologies media contacts</h3></i>
<h3><b  style={{color:'red'}}>India</b></h3>
<div  className="social d-flex flex-row">
<h3 style={{color:'green'}}><FaEnvelope/></h3>
tfttech123@tft.com
</div>
<div className="social d-flex flex-row">
<h3><FcPhone/></h3>
+91 9998884433
</div>
<div className="social d-flex flex-row">
<h3 style={{color:'green'}}><FaEnvelope/></h3>technologies@tft.com
</div>
<div  className="social d-flex flex-row">
<h3><FcPhone/></h3> +91 8899543553
</div>
</div>
</div>
<Footer/>









        
        </>
    )
}