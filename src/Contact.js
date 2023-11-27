import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Contact.css";
import {  FaEnvelope } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import ReactCountriesInput from 'react-countries-input'
import { Button } from "bootstrap";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contact(){
    const [data, setData] = useState([]);
    const [candidateFirstName, setcandidateFirstName] = useState();
    const [candidateMobile, setcandidateMobile] = useState();
    const [candidateEmail, setcandidateEmail] = useState();
    const [candidateMessage, setcandidateMessage] = useState();
   
  

    const  navigate=useNavigate();
    const addTask = (event) => {
        event.preventDefault();
     
          
         const newTask = {
          firstname: candidateFirstName,
         mobile : candidateMobile , 
          email: candidateEmail,
         message : candidateMessage
          
        };
    
        axios
          .post("http://localhost:9090/data", newTask)
          .then((response) => {
            console.log("Task added successfully:", response.data);
            setcandidateFirstName("");
            setcandidateMobile("");
            setcandidateEmail("");
           setcandidateMessage("");
            
          })
          .catch((error) => {
            console.error("Error adding book:", error);
          });
      };
    

    
    
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:'black'}}>
            <div className="row">
                <div className="col-4">
                <div className="Contactbox">
            <i style={{color:'white',fontSize:'50px'}}>

            What’s on your <p>mind?</p>
            </i>
                </div>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
            <p>
            <span className="Contactright" style={{color:'white',fontSize:'30px'}} >We’re here to help! <p>Tell us what you’re looking for and </p>we’ll get you connected to the right people.</span>
            </p>
            </div>
            
            </div>
            <div className="Container">
                <div><img style={{width:'50px'}} src="service.png"/>Request for Services</div>
                <div><img style={{width:'50px'}}src="download (1).png"/>Inverstor Information</div>
                <div><img style={{width:'50px'}} src="download (2).png"/><p>Media Contacts</p></div>

            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-4">
            <div className="social d-flex flex-row">
<h3 style={{color:"red"}}><FaEnvelope/></h3>
<b style={{color:'white'}}>tfttech123@tft.com</b>
</div>
<div className="social d-flex flex-row">
<h3 ><FcPhone/></h3>
<b style={{color:'white'}}>+91 9998884433</b>
</div>
<div className="social d-flex flex-row">
<h3 style={{color:"red"}}><FaEnvelope/></h3><b style={{color:'white'}}>technologies@tft.com</b>
</div>
<div className="social d-flex flex-row">
<h3><FcPhone/></h3> <b style={{color:'white'}}>+91 8899543553</b>
</div>
</div>
</div>
<div className="row">
    <div className="col-4">
<p >HOW CAN WE HELP YOU</p>
<form onSubmit={ addTask}>
<input type="text" value={candidateFirstName}onChange={(event)=>setcandidateFirstName(event.target.value)} required placeholder= " Name" ></input><p/>
<input type="text" value={candidateMobile}onChange={(event)=>setcandidateMobile(event.target.value)} required placeholder=" Mobile Number" ></input><p/>
<input type="text" value={candidateEmail}onChange={(event)=>setcandidateEmail(event.target.value)} required placeholder="Email Id" ></input><p/>
<textarea  value={candidateMessage}onChange={(event)=>setcandidateMessage(event.target.value)} required placeholder="Message"></textarea>
<p><input type="checkbox"></input>  I conform , I have read and TFT Privacy Policy and consent and sharing my information </p>
<p><input type="checkbox"></input> I would like receive alerts and ubdates from TFT </p>
<button className="bts bts-primary" > Submit</button>
</form>
</div>
</div>

</div>
           
            </div>


            <Footer/>
         
            

        
        </>

    );

}