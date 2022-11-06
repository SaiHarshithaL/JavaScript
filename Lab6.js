
import './App.css';
import React from "react";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  
  render(){
    return(
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          <div>{this.state.count}</div>
        </button>


      </div>
    )
  }
}

export default App;
