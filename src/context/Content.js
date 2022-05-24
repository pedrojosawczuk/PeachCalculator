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

  const handleChange = event => {
  }
  const handleSubmit = event => {
    event.preventDeafult();
    const {r1, r2, r3, tension, circuit} = req;

    let req;
    let current; // current = tension / req
    let potency; // potency = tension * current
    let i1, i2, i3;
    let t1, t2, t3;
    let p1, p2, p3;

    switch(circuit) {
      case "S":
        console.log("S - Series");
        req = parseInt(r1) + parseInt(r2) + parseInt(r3);
        current = tension / req;
        i1 = i2 = i3 = current;
        t1 = r1 * current;
        t2 = r2 * current;
        t3 = r3 * current;
        p1 = t1 * current;
        p2 = t2 * current;
        p3 = t3 * current;
        potency = tension * current;
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
  
  let r1, r2, r3, req, current, tension, potency, i1, i2, i3, t1, t2, t3, p1, p2, p3;
  r1 = r2 = r3 = req = current = tension = potency = i1 = i2 = i3 = t1 = t2 = t3 = p1 = p2 = p3 = 0;
  
  return (
  <div className="content">
    <img src={logo} className="logo" alt="Peach Icons" />
    <p className="title">Peach Calculator</p>
    <p className="desc">Calculator of Equivalent Resistance, Potency, Current and Voltages over resistors R1, R2 and R3.</p>
    <form onSubmit={handleSubmit}>
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
      <div className="result show">
        {/* Output */}
        <table align="center">
          <thead>
            <tr>
              <th> </th>
              <th> Tension <br/> V </th>
              <th> Current <br/> A </th>
              <th> Potency <br/> W </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R1 = {r1.toFixed(2)}Ω</td>
              <td>{i1.toFixed(2)}A</td>
              <td>{t1.toFixed(2)}V</td>
              <td>{p1.toFixed(2)}W</td>
            </tr>
            <tr>
              <td>R2 = {r2.toFixed(2)}Ω</td>
              <td>{i2.toFixed(2)}A</td>
              <td>{t2.toFixed(2)}V</td>
              <td>{p2.toFixed(2)}W</td>
            </tr>
            <tr>
              <td>R3 = {r3.toFixed(2)}Ω</td>
              <td>{i3.toFixed(2)}A</td>
              <td>{t3.toFixed(2)}V</td>
              <td>{p3.toFixed(2)}W</td>
            </tr>
            <tr>
              <td>Req = {req.toFixed(2)}Ω</td>
              <td>{current.toFixed(2)}A</td>
              <td>{tension.toFixed(2)}V</td>
              <td>{potency.toFixed(2)}W</td>
            </tr>
          </tbody>
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