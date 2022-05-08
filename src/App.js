import logo from './logo.png';
import './App.css';

function App() {

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
  }

  return (
  <>
    <div className="container">
      <img src={logo} className="logo" alt="peach logo" />
      <p className="title">Peach Calculator</p>
      <p className="desc">Calculator of Equivalent Resistance, Potency, Current and Voltages over resistors R1, R2 and R3</p>
      <form>
        {/* Resistors Input */}
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
        <div className="result hide"> {/* style="display: none;" */} 
          {/* Outputs */}
          <table align="center">
            <tr>
              <th> </th>
              <th>Tension</th>
              <th>Current</th>
              <th>Potency</th>
            </tr>
            <tr>
              <td>R1</td>
              <td>i1Val</td>
              <td>t1Val</td>
              <td>p1Val</td>
            </tr>
            <tr>
              <td>R2</td>
              <td>i2Val</td>
              <td>t2Val</td>
              <td>p2Val</td>
            </tr>
            <tr>
              <td>R3</td>
              <td>i3Val</td>
              <td>t3Val</td>
              <td>p3Val</td>
            </tr>
            <tr>
              <td>Req</td>
              <td>ieqVal</td>
              <td>teqVal</td>
              <td>peqVal</td>
            </tr>
          </table>
          <p className="subtitle">Current</p>
          <output name="i1ValLabel" placeholder="">Current i1</output>
          <output name="i2ValLabel" placeholder="">Current i2</output>
          <output name="i3ValLabel" placeholder="">Current i3</output>
          
          <p className="subtitle">Tension</p>
          <output name="t1ValLabel" placeholder="">Tension r1</output>
          <output name="t2ValLabel" placeholder="">Tension r2</output>
          <output name="t3ValLabel" placeholder="">Tension r3</output>

          <p className="subtitle">Potency</p>
          <output name="p1ValLabel" placeholder="">Potency r1</output>
          <output name="p2ValLabel" placeholder="">Potency r2</output>
          <output name="p3ValLabel" placeholder="">Potency r3</output>
        </div>
        <br />
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
        <br />
        {/* Circuit Type Input */}
        <label className="custom-field">
          <select name="circuits" required onChange={handleChange}>
            <option value="S">Series</option>
            <option value="P">Parallel</option>
            <option value="M1">Combinations of Series and Parallel 1</option>
            <option value="M2">Combinations of Series and Parallel 2</option>
          </select>
        </label>
        <br />
        {/* Submit and Reset Buttons */}
        <input type="submit" />
        <input type="reset" />
      </form>
      {/* Footer */}
      {/*
      <footer>
        <a href="https://www.flaticon.com/free-icons/peach" title="peach icons">Peach icons created by Freepik - Flaticon</a>
      </footer>
      */}
      <br />
    </div>
  </>
  );
}

export default App;
