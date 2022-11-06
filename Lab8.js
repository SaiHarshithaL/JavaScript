
import React from "react";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color:[{c:"pink",name:"harshi"},
      {c:"red",name:"sri"},
      {c:"yellow",name:"pras"},
    ]
    };
  }
  render(){
    return(
      <div>
        <h3>Display array of objects in a table</h3>
        <table border="1">
        {
         this.state.color.map((u)=>{
            return(
              <tr>
                <td>
                  {u.c}
                </td>
                <td>
                  {u.name}
                </td>
                </tr>
            )
          })
        }
          </table> 
      </div>
    )
  }
}

export default App;
