import React, { useEffect, useState } from "react";
import axios from "axios";
function App(){
  const[data,setdata]=useState([]);
  const[post,setpost]=useState([]);
  useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
  setdata(res.data);
  console.log(res.data);
})
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((result)=>setpost(result))
.catch((err)=>console.log(err));

  }
  ,[]);
  return(
    <div>
      {console.log("data",data)}
      <h1>axios call</h1>
      <ol>
        {
          data.map((x)=>(
            <li key={x.id}>{x.title}</li>
          )

          )
        }
        </ol>
        <h1>fetch call</h1>
      <ol>
        {
          post.map((x)=>(
            <li key={x.id}>{x.body}</li>
          )

          )
        }
        </ol>
      </div>
  )

}
export default App;