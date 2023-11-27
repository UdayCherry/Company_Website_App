import React from 'react';
import Footer from './Footer';
import "./Artificial.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Artificial() {
  useEffect(()=> {
    Aos.init({duration:1000})
  },[])
  return (
    <>
   
    <video src='wipro-ai-360-ai-driven-innovation.mp4'autoPlay loop muted />
    <div className='ArtificialText'>
    Fueling the next wave of Ai-Driven Innovation
    </div>
    <div className='Artificialback'>
    
    <div  className="ai-company-page">
      
          <h1>Welcome to Our AI Company</h1>
          TFT ai360 is helping enterprises capitalize on the true value of AI. With AI infused into every part of the ecosystem, we serve as a true orchestrator, helping enterprises soar into the future.

TFT AI is not new, companies are just beginning to realize the transformative abilities that AI has to offer when we combine human ingenuity with AI-powered technology. Speed at scale. Data-driven insights. Decisions with confidence. Ambitions realized.

Our team is made up of data scientists, data architects, business and domain specialists, visualization and design specialists, technologists, and application engineers.
        </div>
        <div className="row">
        <div className="col-sm-4">
    <div class="card" style={{width:300 , height:500}}>
<img src="Artificial1.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Inspect AI</h5>
<p className="card-text"> Effective asset monitoring for asset-intensive enterprises Move beyond reactive maintenance to predictive asset management

For asset-heavy enterprises, timely inspections and preventive asset maintenance are key to maximizing asset integrity and profitability. Ineffective management can lead to lengthy inspection cycles; limited inspection coverage; high inspection costs; inefficient data gathering; and health, safety, and environmental risks.</p>


</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:500}}>
<img src="Artificial2.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Enterprise IQ</h5>
<p className="card-text">Infusing AI to drive successful outcomes Organizations are surrounded by information, whether captured externally or generated internally. Yet without the ability to analyse and act upon it, that information is meaningless. Developing enterprise intelligence has never been more important as businesses confront new realities every day, and consistently delivering successful outcomes remains a challenge. </p>


</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:500}}>
<img src="Artificial3.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Responsible AI</h5>
<p className="card-text">Our 4 dimensions of responsible AI Artificial intelligence (AI), once largely a niche interest of computer scientists, is now everywhere. Although AI is hardly new, the recent convergence of immense data availability with unprecedented computing power has led to an explosion of AI use cases. As advances in data storage and transfer technologies continue to accelerate.</p>
<br></br>


</div>
</div>
</div>
</div>
</div>
<Footer/>
</>

  );
}

