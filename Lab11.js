import { useState } from "react";
import React from "react";
function a(){
const [item,setitem]=useState("");
const [items,setitems]=useState([]);
const hai=()=>{
    setitems([...items,{item:item}])
    setitem("")
}
const hd=(item)=>{
    const fi=items.filter((it)=>
    it.item!==item.item
    );
    setitems([...fi]);
}
const tdata=items.map((it,index)=>(
    <tr key={index}>
        <td>{it.item}</td>
        <td>
            <button onClick={()=>hd(it)}>x</button>
        </td>
    </tr>
))
return(
    <div>
        <input type="text" onChange={(e)=>{
            setitem(e.target.value)
        }}></input>
        <button onClick={()=>hai()}>add</button>
        <table border={1}>{tdata}</table>
    </div>
)
}
export default a;