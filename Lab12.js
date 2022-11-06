import { useState,useEffect } from "react";
import React from "react";
import './App.css';
function App(){
    const[time,setTime]=useState("");
    const tick=()=>{
        let t=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        setTime(t);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearTimeout(t);
        }
    },[time])

return(
    <div>
    <h1>Time</h1>
    <h1>{time}</h1>
    </div>

);
}
export default App;


