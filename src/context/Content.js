import React from 'react';
import logo from '../logo.png';

function Content() {
  let userMode = localStorage.getItem("mode");
  if (userMode !== null) {
    try {
      console.log("Prefers: " + "Dark");
      userPrefers(localStorage.getItem("mode"));
    }
    catch {
      console.log("[ ERROR ] Catch localStorage");
    }
  }

  function userPrefers() {
    console.log("Prefers: " + "Dark");
    localStorage.setItem("mode", "light");
  }

  function handleChange() {
  }
  function handleSubmit() {
    const {r1, r2, r3, circuit, tension} = req;

    let req;
    let current;
    let potency;
    let i1, i2, i3;
    let t1, t2, t3;
    let p1, p2, p3;

    switch(circuit) {
      case "S":
        console.log("S - Series");

        break;
      case "P":
        console.log("P - Parallel");

        break;
      case "M1":
        console.log("M1 - Combinations of Series and Parallel 1");
        
        break;
      case "M2":
        console.log("M2 - Combinations of Series and Parallel 1");
        
        break;
      default:
        console.log('Circuit %d does not exist!', circuit);
    }
  }
  return (
  <div className="content">
    <img src={logo} className="logo" alt="Peach Icons" />
    <p className="title">Peach Calculator</p>
    <p className="desc">Calculator of Equivalent Resistance, Potency, Current and Voltages over resistors R1, R2 and R3.</p>
    <form>
      {/* Resistors Input */}
      <div className="row">
        <label className="custom-field">
          <input
            type="number"
            name="r1"
            min="1"
            max="9999"
            placeholder="Resistor 1"
            title="Value Between 1Ω and 9999Ω"
            required
            onChange={handleChange}
          />
        </label>
        <label className="custom-field">
          <input
            type="number"
            name="r2"
            min="1"
            max="9999"
            placeholder="Resistor 2"
            title="Value Between 1Ω and 9999Ω"
            required
            onChange={handleChange}
          />
        </label>
        <label className="custom-field">
          <input
            type="number"
            name="r3"
            min="1"
            max="9999"
            placeholder="Resistor 3"
            title="Value Between 1Ω and 9999Ω"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="result hide">
        {/* Output */}
        <table align="center">
          <tr>
            <th> </th>
            <th> Tension <br/> V </th>
            <th> Current <br/> A </th>
            <th> Potency <br/> W </th>
          </tr>
          <tr>
            <td>R1 = </td>
            <td>i1Val</td>
            <td>t1Val</td>
            <td>p1Val</td>
          </tr>
          <tr>
            <td>R2 = </td>
            <td>i2Val</td>
            <td>t2Val</td>
            <td>p2Val</td>
          </tr>
          <tr>
            <td>R3 = </td>
            <td>i3Val</td>
            <td>t3Val</td>
            <td>p3Val</td>
          </tr>
          <tr>
            <td>Req = </td>
            <td>ieqVal</td>
            <td>teqVal</td>
            <td>peqVal</td>
          </tr>
        </table>
        {/*
        <p className="desc">
        </p>
        */}
      </div>
      <div className="row">
        <label className="custom-field">
          <input
            type="number"
            placeholder="Tension"
            title="Value Between 1V and 12V"
            name="e"
            min="1"
            max="12"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      {/* Circuit Type Input */}
      <div className="row">
        <label className="custom-field">
          <select name="circuits" required onChange={handleChange}>
            <option value="S">Series</option>
            <option value="P">Parallel</option>
            <option value="M1">Combinations of Series and Parallel 1</option>
            <option value="M2">Combinations of Series and Parallel 2</option>
          </select>
        </label>
      </div>
      {/* Submit and Reset Buttons */}
      <div className="row">
        <label className="custom-field">
          <input type="submit" />
        </label>
        <label className="custom-field">
          <input type="reset" />
        </label>
      </div>
    </form>
  </div>
  )
}

export default Content