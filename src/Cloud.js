import React from "react";
import "./Cloud.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Cloud(){
    useEffect(()=> {
        Aos.init({duration:1000})
      },[])
    return(
        <>
        <div data-aos='flip-left' className="Image5g">
        <img style={{width:'1150px',height:'300px'}} src="cloud1.png"/>
        </div>
        <div className="Text5g">
       TFT Cloud Car
        </div>
        <div data-aos='flip-right'className="cloudtext">
        <b style={{color:'blue', fontSize:"30px"}}>TFT and the Cloud Car Ecosystem</b><p/>
        As the automotive industry races toward its future, software and connectivity are redefining the next-generation driving<p/> experience. This transition challenges traditional manufacturers whose hardware-focused culture doesn’t align with the<p/> needs of a software-centric world. TFT – a leader in automation, cloud technologies and software-defined vehicles (SDV)<p/> – has both the in-house capabilities and Cloud Car ecosystem to help bridge the gap.<p/>
TFT partners with automotive manufacturers to accelerate their<p/> growth through cloud-native engineering principles.<p/> By combining traditional solutions with innovative platforms, our Cloud Car ecosystem and SDV <p/>expertise enables the auto industry to reimagine how safety and <p/> entertainment features are developed, deployed and maintained – ultimately <p/>delivering a new car every day.
</div>
        </>
  );
}