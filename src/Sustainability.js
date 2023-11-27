import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "./Sustainability.css"
import Footer from "./Footer";
export default function Sustainability(){
    return(
        <>
        <h3 style={{color:"blue"}}>Where will your sustainability journey take you?</h3>


        <img style={{width:1150}}src="162985878-global-green-business-template-and-background-for-sustainability-concept-with-flat-icons.jpg"/>
        <div className="img d-flex flew row">
       
       
        <img style={{width:350 , height:180}} src="handshake-form-starry-sky-consists-points_43780-6032.jpg"/>
        
        <img style={{width:350}}  src="desktop-wallpaper-software-web-development.jpg"/>
        
        <img  style={{width:350}} src="colorful_community_glare_28135_300x168.jpg"/>
        </div>
       <div className="row">
        <div className="col 3">
            <h2 style={{color:"green"}}>Partnership</h2>
            </div>
            <div className="col 3">
            <h2 style={{color:"green"}}>Whats New</h2>
            </div>
            <div className="col 3">
            <h2 style={{color:"green"}}>Analysts</h2>
            </div>
            </div>
            <Footer/>
        
       

        </>

    );
}