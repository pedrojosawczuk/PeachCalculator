import PropTypes from 'prop-types'

function Output({ displayOutput, circuit, r1, r2, r3, tension }) {
  let req;
  let current; // current = tension / req
  let potency; // potency = tension * current
  let i1, i2, i3;
  let t1, t2, t3;
  let p1, p2, p3;

  switch(circuit) {
    case "S":
      //console.log("S - Series");
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
      //console.log("P - Parallel");
      break;

    case "M1":
      //console.log("M1 - Combinations of Series and Parallel 1");
      break;

    case "M2":
      //console.log("M2 - Combinations of Series and Parallel 1");
      break;
      
    default:
      //console.log('Circuit %d does not exist!', circuit);
  }
  //setOutput('result show')
  if ( displayOutput === 0 ) return <></>

  return (
    <div className='output'>
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
            <td>R1 = { r1.toFixed(2) }Ω</td>
            <td>{ t1.toFixed(2) }V</td>
            <td>{ i1.toFixed(2) }A</td>
            <td>{ p1.toFixed(2) }W</td>
          </tr>
          <tr>
            <td>R2 = { r2.toFixed(2) }Ω</td>
            <td>{ t2.toFixed(2) }V</td>
            <td>{ i2.toFixed(2) }A</td>
            <td>{ p2.toFixed(2) }W</td>
          </tr>
          <tr>
            <td>R3 = { r3.toFixed(2) }Ω</td>
            <td>{ t3.toFixed(2) }V</td>
            <td>{ i3.toFixed(2) }A</td>
            <td>{ p3.toFixed(2) }W</td>
          </tr>
          <tr>
            <td>Req = { req.toFixed(2) }Ω</td>
            <td>{ tension.toFixed(2) }V</td>
            <td>{ current.toFixed(2) }A</td>
            <td>{ potency.toFixed(2) }W</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

Output.defaultProps = {
  displayOutput: 0,
  r1: 0,
  r2: 0,
  r3: 0,
}

Output.propTypes = {
  displayOutput: PropTypes.number,
  circuit: PropTypes.string,
  tension: PropTypes.number,
  r1: PropTypes.number,
  r2: PropTypes.number,
  r3: PropTypes.number,
}

export default Output