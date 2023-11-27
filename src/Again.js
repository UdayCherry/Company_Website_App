import React from "react";
import "./Again.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Again(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        <div className="Againbackground">
            <div  style={{color:'white'}}className="AgainText">
      <p style={{color:'blue',fontSize:'50px'}}>Your career beckons you to<p/>
<span style={{color:'green'}}>Begin Again</span> with TFT Technologies</p>
<list >
    <ul style={{fontSize:"30px"}}>
<li>A world of opportunities for women to relaunch their career</li>
<li>For women on a career break of 6 months or more</li>
<li>Applicable for job roles in India</li>
</ul>
</list>
</div>
<div className="Again d-flex flex-row">
    <div style={{color:'white'}}className="again1text">
<b style={{color:'blue',fontSize:'50px'}}>What is Begin Again?</b><p/>
<span style={{color:'green',fontSize:'30px'}}>Reimagine your second career with TFT TECHNOLOGIES</span><p/>

Begin Again is our Inclusion and Diversity [I&D]<p/> initiative for women who are looking to relaunch their career post a break –<p/> be it for a sabbatical, motherhood, elderly care, travel, passion,<p/> or any other personal reasons.<p/>

The initiative enables talented women<p/> to explore career opportunities that will harness<p/> their potential and allow them to get back on track with the<p/> present demands of the industry.
</div>
<div className="again1img">
<img data-aos='fade-up'src="again1.jpg"/>
</div>
</div>
</div>
        
        
        </>



    );
}