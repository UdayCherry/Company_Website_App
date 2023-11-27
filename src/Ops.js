import React from "react";
import "./Ops.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Ops(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        <div data-aos='flip-left' className="Image5g">
        <img style={{width:'1150px',height:'300px'}} src="eng 3.png"/>
        </div>
        <div style={{color:'black'}}className="Text5g">
       Industry 4.0<p/>Transform your enterprise to be future ready
        </div>
        <div data-aos='fade-up'className="OpsText">
        <b data-aos='fade-up' style={{color:'blue',fontSize:'30px'}}>Accelerate Business Outcomes with Industry 4.0</b><p/>
       <span data-aos='fade-up'style={{color:'green',fontSize:'20px'}}> Make your enterprise more intelligent, resilient, and ready for whatever<p/> tomorrow brings</span>   
      <p data-aos='fade-up'> Market and technical complexities have made it harder than ever to build products and connect global processes.<p/> 
       The lack of visibility and insights challenges global enterprises to maintain innovation, efficiency and growth.<p/> 
        By applying the Industry 4.0 principles of connectivity, automation, integration and machine learning, organizations can reimagine their go-to-market strategies, <p/> 
        rethink their customer-engagement approach, and deploy intelligent products, operations and assets. <p/>
        Tft’s Industry 4.0 practice partners with enterprises to help them improve their time to market, boost their bottom line, reduce their carbon footprint,<p/> and gain the ability to quickly shift gears as the landscape evolves. <p/>
Learn more about our Smart-Digital-Intelligent (SDI) approach to scale-up and create value, explore the insights below, and contact us to discuss how Tft’s<p/> Industry 4.0 experts can help you build and maintain a competitive edge.</p>
        </div>




        
        
        </>
    );
}