import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Dataconnection(){
    const [coursename,setcoursename]=useState('');
    const [Topics,setTopics]=useState('');
    const handleSubmit=async ()=>{
        const data={
            coursename,
            Topics
        }
        try{
        const response=axios.post("http://localhost:9090/data" , data)

        setcoursename('');
        setTopics('');


        }catch{
            console.log("error occured");
             
        }


    }
    return(
        <>
       
        <input type="text" value={coursename}onChange={(e)=>setcoursename(e.target.value)}placeholder="enter course name"/>
       
        <br></br>
        <input type="text" value={Topics}onChange={(e)=>setTopics(e.target.value)} placeholder="enter topic name"/>
        <br></br>
        <button type="btn btn-secondary" onClick={handleSubmit}>Submit</button>

        </>
    );

}