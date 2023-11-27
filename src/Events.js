import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import"./Events.css";

export default function Events() {
  function sayHello() {
    alert('About PLMXchange Forum:The world of PLM and engineering is in the midst of transformation, and we are thrilled to present discussions and insights on the most pivotal topics shaping the industry. Why Attend? Exchange Best Practices: Connect with industry leaders and share insights for mutual growth.Networking Opportunity: Forge valuable connections within your sector.Stay Informed: Gain insights into the latest trends shaping our industry.Transformation Stories: Hear first-hand about your peers ');
  }
  function sayHello1(){
    alert('Empowering the Business First Cloud Journey At our booth, 894, attendees will have the opportunity to meet with our most senior industry and AWS solution experts, leverage their decades of experience, discuss current market trends and challenges, and learn about new and innovative approaches using AWS to drive business transformation. As part of our presence at AWS re:Invent 2023, TFT will also be hosting a series of 1on1 executive meetings and exclusive experiences. ');
  }
  function sayHello2(){
    alert('Agenda 15:30 - 16:00 : Arrival & Welcome Reception16:00 - 16:10 : Welcome Address by Vinay Firake, Senior Vice President and Managing Director, Nordics 16:10 - 16:20 : Keynote Presentation 16:20 - 16:45 : Wipro Point of View on Transforming business models, decarbonizing value chains, and embarking on a sustainable future by Adam Savitz - Senior Partner, Sustainability 16:45 - 17:30 : Panel Discussion on expectations, hopes and fears for COP28 with experts from Technology, Business and Academia Speakers :Alexis de Kerchove, Senior Director, Client Sustainability at Xylem Kristofer Dreiman, Head of Responsible Investments at Länsförsäkringar Fredrik Franke, Associate Director Climate & Sustainability at Boston Consulting Group (BCG) Hans Troiza, Head of On-Line Sales & Digital Solutions at Alfa Laval Microsoft Representation : TBD Academia Representation : TBD');
  }
  function sayHello3(){
    alert('TFT Events GenAI Fast Track: Panel Discussion with Leading Enterprises on the Power of AI [VIB2469BCNS]  Speaker: Srinivasaa HG – VP & Sales Head Europe, Wipro  Track: Vision & Innovation When: Wednesday, Nov 8 | 9:00-9:45 AM CET Success Story: Accelerate DC Exit by Using the Google Cloud VMware Engine Speaker: Sreenath Mattummal – Chief Architect (CTO), TFT Track: Cloud & Edge Infrastructure When: Wednesday, Nov 8 | 3:15-4:00 PM CET');
  }
  function sayHello4(){
    alert('“We at TFT would like to acknowledge the traditional custodians of this land throughout Australia and pay our respects to the local elders - past, present, and emerging.”');
  }
  function sayHello5(){
    alert('Join us in this event to Gain insights into our comprehensive services and solutions, designed to elevate and modernize digital experiences. Tap into our deep domain knowledge and innovative solutions, offering best-in-class transformation experiences through streamlined workflows.');
  }
  return (
    <>
        <div className="row">
        <div className="col-sm-4">
    <div class="card" style={{width:300 , height:300}}>

<div className="card-body">
<h5 style={{color:"white"}} className="card-title">Join Us for the 5th Annual PLMXchange Forum: Shaping the Future of PLM & Engineering</h5>
<p className="card-text">November 29, 2023 | 10:00 AM to 8:30 PMVenue: FLSmidth, CopenhagenWe’re excited to invite you to the fifth edition of the PLMXchange Forum.</p>
<a href="#" className="btn btn-primary" onClick={sayHello}>Read More</a>

</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:300}}>

<div className="card-body">
<h5  style={{color:"white"}}className="card-title">TFT is Platinum SponsorAWS @ re:Invent 2023</h5>
<p className="card-text">November 27 - December 01, 2023 TFT is proud to be a Platinum sponsor at Amazon Web Services (AWS) re:Invent 2023, the leading global cloud computing community event. </p>
<br></br>

<a href="#" className="btn btn-primary" onClick={sayHello1}>Read More</a>

</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:300}}>

<div className="card-body">
<h5 style={{color:"white"}} className="card-title">Unveiling Sustainability Live Nordics: A Pinnacle to COP28 Countdown</h5>
<p className="card-text">November 21, 2023 | 3:30 PM to 6:00 PMSustainability Live Nordics is an invite-only, dynamic event bringing together leaders, innovators, and experts to explore what to expect from COP28. ...</p>
<a href="#" className="btn btn-primary" onClick={sayHello2}>Read More</a>

</div>
</div>
</div>
<div className="col-sm-4">
    <div class="card" style={{width:300 , height:310}}>

<div className="card-body">
<h5 style={{color:"white"}}className="card-title">Join Us at VMware Explore Barcelona 2023</h5>
<p className="card-text">November 07 - 09, 2023Join TFT at VMware Explore Barcelona 2023 to experience the ideas and innovations shaping the future of multi-cloud.</p>
<br></br>
<br></br>
<br></br>
<a href="#" className="btn btn-primary" onClick={sayHello3}>Read More</a>

</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:310}}>

<div className="card-body">
<h5  style={{color:"white"}}className="card-title">Quality Engineering Symposium Melbourne</h5>
<p className="card-text">November 03, 2023 | 8:30 AM to 2:30 PM AEDTThe Quality Engineering and Testing Symposium is an opportunity for global executives and senior technical experts to share knowledge, explore practical case studies and engage... </p>


<a href="#" className="btn btn-primary"onClick={sayHello4}>Read More</a>

</div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:310}}>

<div className="card-body">
<h5 style={{color:"white"}} className="card-title">TFT is a sponsor of Constellation’s Connected Enterprise 2023</h5>
<p className="card-text">October 23 - 26, 2023Constellation’s Connected Enterprise 2023 is the leading innovation summit for enterprise executives.</p>
<br></br>
<br></br>
<a href="#" className="btn btn-primary"onClick={sayHello5}>Read More</a>

</div>
</div>
</div>
</div>
<Footer/>
</>

  );
}

