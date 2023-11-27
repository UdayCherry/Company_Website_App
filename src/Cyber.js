import React from 'react';
import Footer from './Footer';

export default function Cyber() {
  return (
    <>
    <video style={{width:'1150px', height:'500px'}}src='WhatsApp Video 2023-10-10 at 9.55.41 PM.mp4' autoPlay loop muted />
    <div>
    
      <header>
        <h1>Cybersecurity Services</h1>
      </header>
     
      <div className="image d-flex flex-row ">
            <img style={{width:"500px"}} src="security.jpg"/>
            <div className="container3">
        <h1>State of Cybersecurity Report 2023
#SOCR</h1>
        <p>Cyber Resilience in an Age of Continuous Disruption

The 5th edition of Wipro's State of Cybersecurity Report (SOCR) offers a perspective and framework to help enterprises achieve cyber resilience. You will find a wealth of data and actionable insights covering attacks, breaches and law, along with the state of business cyber capabilities across geographies and industry sectors, plus future trends.</p>
</div>
</div>
<b style={{fontSize:'30px'}}>What We Do</b>
<div className="row">
            <div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
        <video style={{height:'200px'}}src='cybervideo 1.mp4' controls/>
  <div className="card-body">
    <h5 className="card-title">Face Down Threats</h5>
    <p className="card-text">Prioritize Prevention<p/>Face down threats<p/>Combact Cyber Attacks</p>

   
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
  <video style={{height:'200px'}}src='cybervideo2.mp4' controls/>
  <div className="card-body">
    <h5 className="card-title">This is not data</h5>
    <p className="card-text"> TFT cybersecurists text and develop applications to safely move to the cloud</p>
    
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
<video style={{height:'200px'}}src='cybervideo3.mp4' controls/>
  
  <div className="card-body">
    <h5 className="card-title">X-Ray Vision</h5>
    <p className="card-text">See Inside your entire ecosystem be Identify threats and assess vulnirabilities</p>
    
  </div>
</div>
</div>
</div>





      
  
    <Footer/>
    </div>
    </>
  );
}