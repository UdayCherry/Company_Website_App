import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "./career.css"
import Footer from "./Footer";



import { Button } from "bootstrap";
import { Link } from "react-router-dom";

export default function Carrier(){
    return(
        <>
        <u style={{fontSize:'30px',color:'blue'}}><i>Careers Newsroom</i></u>
        <div className="row">
            <div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_1-en-us-1676383904795.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}}className="card-title">TfT Q3 FY Earnings</h5>
    <p className="card-text">IT Service Revenue: 10.4%
YoY Total Bookings:26%
YOY Large Deal Bookings: 69%
YOY Operating Margins: 16.3%</p>
<br></br>
    <a  className="btn btn-primary"><Link to={'../career1'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_3-en-us-1677505440309.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">Introducing Lab45</h5>
    <p className="card-text">Fostering creativity, innovation, and groundbreaking solutions for the world’s leading enterprises</p>
    <br></br>
    <br></br>
    <a  className="btn btn-primary"><Link to={'../Lab45'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_6-en-us-1634671854893.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5  style={{color:"white"}}className="card-title">Forge a Resilient, Responsive and Sustainable Future</h5>
    <p className="card-text">#BounceBackwith TFT</p>
    <br></br>
    <br></br>
    <br></br>
    <a href="#" className="btn btn-primary"><Link to={'../Ikano'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_4-en-us-1638370593641.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">TfT Begin Again program</h5>
    <p className="card-text">
      <br></br>
      <br></br>
      <br></br>
</p>
    <a href="#" className="btn btn-primary"><Link to={'../Again'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_7-en-us-1636616338971.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h6 style={{color:"white"}} className="card-title">Sustainability
Net-Zero Carbon Emissions Commitment</h6>
    <p className="card-text">TFT is committed to achieving net-zero carbon emissions before 2040 by making sustainability the core of our business.</p>
    <a href="#" className="btn btn-primary"><Link to={'../Sustainability'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
  <img src="LP-SKU-3-1-IMG_8-en-us-1676995887355.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">Make progress thrive with cloud-led innovation</h5>
    <p className="card-text">Unlock growth by orchestrating your cloud technologies with TFT FullStride Colud Services</p><br></br>
    <a href="#" className="btn btn-primary"><Link to={'../Artificial'}>Read More</Link></a>
  </div>
</div>
</div>
</div>
<div className="image d-flex flex-row ">
            <img style={{width:"500px"}} src="istockphoto-915741300-170667a.jpg"/>
            <div className="container3">
        <i><h1 >Why TFT Technologies
</h1></i>
        <p style={{color:"black"}} >At TFT, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of technology to make our clients successful. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in IT, and looking for challenging opportunities to actualize your fire within, look no further. A career at TFT offers just that and a lot more.</p>
       
        
          </div>
            </div>
            <div className="d-flex flex-row">
            <div id="boxes">
              <img style={{width:'150px'}} src="world wide.png"/>
              <h3><p>2,50,000+
Employees worldwide</p></h3>
            </div>
            <div id="boxes">
            <img style={{width:'150px'}} src="clint.png"/>
            <h3><p>1,400+
Clients Served</p></h3>
            </div>
            <div id="boxes">
            <img style={{width:'150px'}}src="countries.png"/>
        
            <h3><p>66
Countries</p></h3>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div id="boxes">
              <img style={{width:'150px'}} src="women men.png"/>
              <h3><p>36% Women 64% Men
Gender Ratio  
</p></h3>
            </div>
            <div id="boxes">
            <img style={{width:'150px'}} src="national.png"/>
            <h3><p>145+
Nationalities</p></h3>
            </div>
            <div id="boxes">
            <img style={{width:'150px'}}src="recognigation.png"/>
            <br></br>
            <img  style={{width:'200px'}}src="ethical.png"/>
            <h3><p>Recognition 
</p></h3>
        
            
            </div>
            </div>
       
       
       

        
        
        <div>
          <Footer/>
        </div>
        </>

    );

}