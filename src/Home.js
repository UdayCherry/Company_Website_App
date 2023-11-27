import React from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Home.css"
import Footer from "./Footer";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';


import { Button } from "../node_modules/bootstrap/dist/js/bootstrap.js";
import { useEffect } from "react";


export default function Home(){
  const handleClick = () =>{
    alert('Button Clicked');
  };
  useEffect(()=> {
    Aos.init({duration:1000})
  },[])
  
    return(
      <>
      <div style={{backgroundColor:'black'}}>
  
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  data-aos='zoom-in'data-aos-duration='3000'data-aos-easing='liner'style={{width:1000}} src="c1.jpeg" />
      <div  className="HomeImage1">
        <h5 style={{color:'red',fontSize:'50px'}}>Our global study finds that cloud and AI are a priority despite headwinds</h5>
        </div>
        <div className="hero-btns">
        <button class="button button1">
          <Link to="./Ai">LearnMore</Link>
          </button>
          </div>
      
    </div>
    <div class="carousel-item">
      <img  data-aos='zoom-in' data-aos-duration='3000'style={{width:1000}} src="c5.jpeg" />
      <div class="HomeImage1">
        <h5 style={{color:'red',fontSize:'70px'}}>TFT Survey:The future of operations</h5>
        </div>
        <div className="hero-btns">
        <button class="button button1">
          <Link to="./Future">Read</Link>
          </button>
          </div>
      
    </div>
    <div class="carousel-item">
      <img data-aos='zoom-in'data-aos-duration='3000'data-aos-easing='liner' style={{width:1000}}src="c3.jpeg" />
      <div class="HomeImage1">
        <h5 style={{color:'red',fontSize:'50px'}}>Ikano Bank chooses TFTfor its pan-Europe core banking transformation</h5>
        </div>
        <div className="hero-btns">
        <button class="button button1">
          <Link to='Ikano'>Readmore</Link>
          </button>
          </div>
      
    </div>
  </div>
  
</div>
     
        <div className="margin">
        <div data-aos='fade-up'className="videoinline d-flex flex-row">
        <div className='video1'>
        <div className="overlay">
        <video style={{width:'600px', height:'450px'}}src="wipro-engineering-new-2022.mp4" autoPlay loop muted/>
        <div data-aos='fade-down'className="videocontainer1">
        <h1 style={{color:"black"}}>Engineering that takes you from What is..</h1>
        <p style={{color:"black"}}>to what could be</p>
        <div className="">
          <button  className='btns'>
            <Link to="./Engineering">Learn...</Link>
          </button>
          </div>
          </div>
          </div>
          </div>
     
        <div data-aos='fade-up' className='video2'>
        <div className="overlay">
        <video style={{width:'550px', height:'450px'}}src="metaverse.mp4" autoPlay loop muted/>
        <div data-aos='fade-down' className="videocontainer2">
        <h1 style={{color:"black"}}>Realizing a more Sustainble Futere</h1>
        <p style={{color:"black"}}>TfT technologies moniter,track and take action on their bussiness impact</p>
        <div className="">
          <button  className='btns'
          >
           <Link to="./Artificial"> GET STARTED</Link>
          </button>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
         
          <div data-aos='fade-up-right'className="image d-flex flex-row ">
            <img style={{width:"500px"}} src="lab45tile960x721.png"/>
            <div data-aos='fade-up-left' className="container3">
        <h1 style={{color:"white"}}>A Trusted Digital
Identity Solution.</h1>
        <p style={{color:'white'}}>Developed by Lab45, Decentralized Identity and Credential Exchange
(DICE) ID lets users safely share and protect their data.</p>
        <div className="">
          <button  className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            <Link to="./Lab45">LEARN MORE</Link>
          </button>
          </div>
          </div>
            </div>
           
      
    


</div>
<div>
<Footer/>
</div>


</>




    );
}