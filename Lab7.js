import logo from './logo.svg';
import './App.css';
import React from "react";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color:"black"
    };
  }
  setRed=(e)=>{
    this.setState({color:"red"})
  }
  setGreen=(e)=>{
    this.setState({color:"green"})
  }
  setBlue=(e)=>{
    this.setState({color:"blue"})
  }
  
  render(){
    return(
      <div>
       <h1 style={{color:this.state.color}}>THE COLOR CHANGES ACCORDING TO BUTTON U CLICKED</h1>
      <button onClick={this.setRed}>RED</button>
      <button onClick={this.setGreen}>Green</button>
      <button onClick={this.setBlue}>Blue</button>
      </div>
    )
  }
}

export default App;
