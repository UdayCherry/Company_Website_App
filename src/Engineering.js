import React from 'react';
import Footer from './Footer';
import "./Engineering.css"
import { Link } from 'react-router-dom';


export default function Engineering() {
  return (
    <>
    <div className='bgcolour'>
    <div className="Engineering">
      <section className="introduction-section">
        <div className="intro-text">
          <b><h2 style={{color:'white'}}>Engineering and Sustainability</h2></b>
          <div className='middle'>
          <p style={{color:'white'}}>
          Build your competitive edge through engineering.<p/>
TFT aligns science, technology and domain expertise to solve real-world problems,<p/>
empower human productivity and drive growth.
          </p>
          <p style={{color:'white'}}>Wherever there’s an extraordinary solution or achievement,
a TFT engineer has likely been involved.

We thrive on the edge
of ambition and change</p>
</div>
        </div>
        
      </section>
    
    </div>
    <div className="row">
            <div className="col-sm-4">
        <div class="card" style={{width:300 , height:400}}>
  <img src="engineering-t1.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}}className="card-title">Ready for tomorrow? It’s not impossible. It’s 5G.</h5>
    <p className="card-text">The connected world needs 5G to keep up with business demands and market dynamics. </p>
    <br></br>
    <a href="#" className="btn btn-primary"><Link to={'../Net5g'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
  <img src="engineering2.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">Fueled by the cloud. Driven by safety.</h5>
    <p className="card-text">Modern vehicles are supercomputers on wheels. With our Cloud Car ecosystem and expertise spanning silicon to software.</p>
    
    <a href="#" className="btn btn-primary"><Link to={'../Cloud'}>Read More</Link></a>
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card" style={{width:300 , height:400}}>
  <img src="eng 3.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:"white"}} className="card-title">From assets to ops, the intelligent future requires 4.0.</h5>
    <p className="card-text">Our dedicated Industry 4.0 practice designs and builds connected solutions that transform organizations ..</p>
    
    <a  className="btn btn-primary"><Link to={'../Ops'}>Read More</Link></a>
  </div>
</div>
</div>

            </div>
            <p style={{color:'white'}}>Give yourself an
engineering edge
by leveraging ours</p>
</div>
    <Footer/>
    </>
  );
}

