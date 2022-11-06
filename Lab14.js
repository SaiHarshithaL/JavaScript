import React, { useState } from "react";
function App() {
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [name, setname] = useState("");
  const calbmi = () => {
    var hs = ((height / 100) * (height / 100));
    var bmi = weight / hs;
    if (bmi < 16) {
      window.alert("severe thin");
    } else if (bmi >= 16 && bmi < 17) {
      window.alert("moderate thiness");
    } else if (bmi >= 17 && bmi < 18.5) {
      window.alert("mild thiness");
    } else if (bmi >= 18.5 && bmi < 25) {
      window.alert("normal");
    } else if (bmi >= 25 && bmi < 30) {
      window.alert("over weight");
    } else if (bmi >= 30 && bmi < 35) {
      window.alert("o 1");
    } else if (bmi >= 35 && bmi <= 40) {
      window.alert("o 2");
    } else if (bmi > 40) {
      window.alert("o 3");
    }
    bmi = Math.round(bmi * 100)/ 100;
  };
  const sme = (e) => {
    e.preventDefault();
    calbmi();
  };
  const handleheight = (e) => {
    setheight(e.target.value);
  };
  const handlename = (e) => {
    setname(e.target.value);
  };
  const handleweight = (e) => {
    setweight(e.target.value);
  };
  return (
    <div>
      <form onSubmit={sme}>
        <h1>Bmi calculator</h1>
        <label>Enter your Name:</label>
        <input type="text" name="name" value={name} onChange={handlename} />
        <br />
        <label>Enter your Height:</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleheight}
        />
        <br />
        <label>Enter your weight:</label>
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleweight}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
export default App;
