import React from "react";
import "./Net5g.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Net5g(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        <div data-aos='flip-left' className="Image5g">
        <img style={{width:'1150px',height:'300px'}} src="5g2.jpg"/>
        </div>
        <div className="Text5g">
        Reimagine and Realize Your 5G Future
        </div>
        <div data-aos='flip-right'className="text25g">
        We accelerate the 5G journey by transforming<p/>
the very engines of next-gen connectivity:<p/>
infrastructure, networks and services.<p/>

TFT engineers integrate and solidify key connectivity technologies,<p/>
from silicon and AI to software and the cloud.<p/>

Build your competitive edge through 5G.
</div>
<div data-aos='fade-up'className="card d-flex flex-row">
<div className="col-sm-6">
        <div class="card" style={{width:400 , height:400}}>
  <img  src="5g3.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">TFT’s 5G Def-i Innovation Center</h5>
    <p className="card-text">Our newest facility in Austin, Texas, provides a controlled lab environment designed to simulate real-world conditions to help customers optimize the performance of 5G networks and devices. </p>
    
  </div>
</div>
</div>
<div className="col-sm-6">
<div class="card" style={{width:400 , height:400}}>
  <img src="5g4.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">5G Across Industries</h5>
    <p className="card-text">TFT is the end-to-end partner you need to help your business no matter the industry, transform to meet the needs of a connected future, compete with your peers, and realize your ambitions.</p>
    
    
  </div>
</div>
</div>
</div>

        
        
        </>
    );
}