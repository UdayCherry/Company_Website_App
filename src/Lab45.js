import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Footer from "./Footer";
import "./Lab.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




export default function Lab45 (){
  useEffect(()=> {
    Aos.init({duration:1000})
  },[])
    return(
        <>
      <div data-aos='flip-right'style={{backgroundColor:'black'}}className="LabText">
        <h1 style={{color:"blue"}}>Welcome to TFT's Innovation Lab</h1>
<p style={{color:'white'}}>
Lab45 is a visionary space developing ground-breaking solutions to foster and accelerate ideation throughout TFT.

At Lab45, teams of engineers, research analysts, and scientists come together to infuse creative ways of incubating solutions for customers that will transform the future. It is a space filled with ambition at the vanguard of far-reaching research across cutting-edge technologies.

Established with the Silicon Valley culture of free-flowing creativity, Lab45’s goal is to make bold ideas reality and to invent the future of enterprise. So come, collaborate and see what happens when ideas are left unbound.
</p>
</div>
<div data-aos='flip-left'data-aos-duration='3000'style={{backgroundColor:'black',padding:50}}className="row">
            <div className="col-md-4">
        <div class="card" style={{width:300 , height:400}}>
        <video style={{height:'200px'}}src='lab1.mp4' controls/>
  <div className="card-body">
    <h5 className="card-title">Keep porsonal data secure</h5>
    <p className="card-text"> Decentralized Identity and Credential Exchange(DICE) ID lets users safety to share and protect data</p>

   
  </div>
</div>
</div>
<div className="col-md-4">
<div class="card" style={{width:300 , height:400}}>
  <video style={{height:'200px'}}src='lab2.mp4' controls/>
  <div className="card-body">
    <h5 className="card-title">Finding Unknown Comments</h5>
    <p className="card-text">Top codders created innovative algorithams to detect very fair details of NASA</p>
    
  </div>
</div>
</div>
</div>

         


<Footer/>

        </>
    );
}