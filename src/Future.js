import React from "react";
import "./Future.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Footer";


export default function Future(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
   
    return(
        <>
        <div className="Futute_Image">
        <img data-aos='zoom-out'data-aos-duration='300000'style={{width:'1150px',height:'500px'}} src="d1.jpeg"/>
        </div>
        <div className="Future_Text" >
            <br/>
        <p><b>INSIGHTS/GLOBAL STUDIES</b></p>
        <hr style={{width:'10000px'}}/>
<i style={{fontSize:50}}>TFT Technologies: The future of <p/>operations</i>
</div>
<div data-aos='flip-left'data-aos-duration='300000' className="Future_Image2 d-flex flex-row">
<img  src="d2.jpeg"/>
<div data-aos='flip-right'data-aos-duration='300000'className="Future_Text2">

<i>STRATEGIES FOR FUTURISTIC BUSINESS OPERATIONS</i>


<p><b style={{fontSize:'30px' , color:'black'}}>Essential operations enablers for better business performance</b></p>
<h4>Cognitive business operations lie at the heart of a future-ready enterprise. But how are companies taking a more resilient, cognitive approach to business operations? Our future of 
operations survey explores the top strategic focus areas for the C-suite and uncovers key enablers for futuristic business operations</h4>
</div>
</div>
<div className="Futurebackground">
<i style={{fontSize:'50px'}}>Lasting benefits from intelligent operations.<p/></i>
<b>A more intelligent, integrated approach to business operations offers widespread and lasting benefits—including cost savings, growth, and transformation. <p/> 

The survey uncovered four enablers to a futuristic operations model.<p/></b>
<img data-aos='fade-right'data-aos-duration='300000'style={{width:"300px"}} src="d3.svg"/>
</div>
<Footer/>


        
        
        
        </>
    )

}