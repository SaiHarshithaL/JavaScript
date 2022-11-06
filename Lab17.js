import { useState } from "react";
function emi() {
  const [loan, setloan] = useState(0);
  const [tenure, settenure] = useState(0);
  const [rate, setrate] = useState(0);
  const [type, selecttype] = useState(" ");
  const calemi = () => {
    var emi =
      loan * rate * (Math.pow(1+rate, tenure) / (Math.pow(1 + rate, tenure) - 1));
    window.alert(emi);
  };
  const submitme = (e) => {
    e.preventDefault();
    calemi();
  };
  const myselect=()=>{
    var item=document.getElementById("tenuretype");
    selecttype(item.options[item.selectedIndex].text);
    console.log(type);
  }
  const handleloan = (e) => {
    setloan(e.target.value);
  };
  const handlerate = (e) => {
    setrate(e.target.value);
  };
  const handletenure = (e) => {
    settenure(e.target.value);
  };
  const clear=()=>{
   
  }
  return (
    <div>
      <h1>Emi Calculator</h1>
      <table>
        <tr>
          <td>
            <label>Loan Amount:</label>
          </td>
          <td>
            <input type="text" value={loan} name="loan" onChange={handleloan} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Loan Tenure:</label>
          </td>
          <td>
            <input
              type="text"
              value={tenure}
              name="tenure"
              onChange={handletenure}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <select name="tenuretype" id="tenuretype" onChange={myselect}>
              <option value="months">months</option>
              <option value="years">years</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>Intrest Rate:</label>
          </td>
          <td>
            <input type="text" value={rate} name="rate" onChange={handlerate} />
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>
            <button onClick={clear}>clear</button>
          </td>
          <td>
            <button onClick={submitme}>calculate</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default emi;
