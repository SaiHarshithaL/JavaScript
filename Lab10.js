import React from "react";
class a extends React.Component{
  constructor(props){
    super(props);
    this.state={
      time:""
    }
  }
componentDidMount(){
  this.tick();
}
tick=()=>{
  const h=new Date().getHours();
  const m=new Date().getMinutes();
  const s=new Date().getSeconds();
  const u=`${h}:${m}:${s}`;
  this.setState({time:u});
}
componentDidUpdate(prevprops,prevstate){
  if(this.state.time!==prevstate.time){
   this.i=setInterval(()=>{
     this.tick();
   },1000);
  }

}
componentWillUnmount(){
  clearInterval(this.i);
}
  render(){
    return(
      <div>
      hello
      <h1>{this.state.time}</h1>
      
        </div>
    )
  }
}
export default a;