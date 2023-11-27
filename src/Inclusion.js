import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Footer from "./Footer";
import "./Inclusion.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Inclusion(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        
        <div data-aos='fade-right'className="image d-flex flex-row ">
            <img style={{width:"500px"}} src="depositphotos_128738174-stock-photo-students-team-on-circle.jpg"/>
            <div data-aos='fade-left'className="container3">
        <h1 data-aos='fade-left' >CELEBRATING INDIVIDUALITY.</h1>
        <p style={{color:'black'}}data-aos='fade-left' >Inclusion & diversity is a way of life at TFT. We are committed to integrating diversity into all aspects of our work and encouraging all Wiproites to be their authentic selves at all times. We recognize the immense talent and potential from all walks of life and create and nurture a sense of belonging through equitable practices, embracing all forms of differences.

We aspire to help our clients maximize the value of their businesses. And make Wipro an employer of choice that attracts, develops, and retains a productive and diverse talent base of 250,000+ employees representing 149 nationalities across 66 countries.</p>
</div>
</div>
<div className="InclusionBack">
<div className="InclusionText">
WE BELIEVE THAT INCLUSION IS A WAY OF LIFE

Inclusion is about recognizing individual differences to honestly engage, understand, and draw on a variety of unique perspectives. We love to celebrate and learn from diverse ideas, backgrounds, perspectives, and experiences, and we seek to create an equitable workplace in which each individual is treated with fairness and respect.

We believe such an inclusive environment welcomes everyone and nurtures an overall sense of belonging. The essence of co-creating, guided by our values, defines inclusion and diversity at TFT. As such, we have focused our efforts in the space of gender inclusion, disability inclusion, and LGBTQ+ inclusion, as well as race and ethnicity.
</div>
<p style={{color:'blue'}}>Our journey is never complete. It involves constantly working on the key global pillars of inclusivity, including:</p>
<div  style={{backgroundColor:'white'}} className="row">
<div data-aos='zoom-in-right' className="col-1" >
<img style={{width:'80px'}} src="gender-inclusion.png"/>
<br></br>
<br></br>
<img style={{width:'80px'}} src="generational-diversity.png"/>
<br></br>
<br></br>
<img style={{width:'80px'}} src="disability-inclusion.png"/>
<br></br>
<br></br>
<img style={{width:'80px'}} src="lgbtq-inclusion.png"/>
<br></br>
<br></br>
<img style={{width:'80px'}} src="race-ethnicity.png"/>
<br></br>
<br></br>
<img style={{width:'80px'}} src="supplier-diversity.png"/><p/>
</div>
<div data-aos='zoom-in-right'data-aos-delay='300' className="col-1">
<br></br> 
Gender Inclusion<br></br><br></br>
<br></br> Disability Inclusion <br></br><br></br><br></br>
<br></br>LGBTQ+ Inclusion <br></br><br></br>
<br></br>Race & Ethnicity <br></br><br></br>
<br></br>Supplier Diversity<br></br><br></br>
<br></br> Generational Diversity
</div>
</div>
</div>

<Footer/>
               </>
    );
}