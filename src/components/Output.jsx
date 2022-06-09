import PropTypes from 'prop-types'

function Output({ displayOutput, circuit, r1, r2, r3, tension }) {
  let req;
  let current; // current = tension / req
  let power; // power = tension * current
  let i1, i2, i3;
  let t1, t2, t3;
  let p1, p2, p3;
  
  console.log(
    'R1:' + r1,
    ' R2:' + r2,
    ' R3:' + r3,
    ' Tension:' + tension,
    ' Circuit:' + circuit
  )

  switch(circuit) {
    case 'S':
      //console.log("S - Series");
      req = parseInt(r1) + parseInt(r2) + parseInt(r3);
      current = (tension / req) * 1000;
      i1 = i2 = i3 = current;
      t1 = (r1 * i1) / 1000;
      t2 = (r2 * i2) / 1000;
      t3 = (r3 * i3) / 1000;
      p1 = t1 * i1;
      p2 = t2 * i2;
      p3 = t3 * i3;
      power = tension * current;
      break;

    case 'P':
      //console.log("P - Parallel");
      req = 1 / (
          (1 / r1) +
          (1 / r2) +
          (1 / r3)
        );
      current = (tension / req) * 1000;
      t1 = t2 = t3 = tension;
      i1 = (t1 / r1) * 1000;
      i2 = (t2 / r2) * 1000;
      i3 = (t3 / r3) * 1000;
      p1 = t1 * i1;
      p2 = t2 * i2;
      p3 = t3 * i3;
      power = tension * current;
      break;

    case 'M1':
      //console.log("M1 - Combinations of Series and Parallel 1");
      break;

    case 'M2':
      //console.log("M2 - Combinations of Series and Parallel 1");
      break;
      
    default:
      //console.log(`Circuit ${ circuit} does not exist!`);
      break;
  }
  //setOutput('result show')
  if ( displayOutput === 0 ) return <></>

  return (
    <div className='output'>
      {/* Output */}
      <table align="center">
        <thead>
          <tr>
            <th></th>
            <th> Resistance </th>
            <th> Tension </th>
            <th> Current </th>
            <th> Power </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> R1 </td>
            <td>{ isNaN(r1) ? 0 : r1 } Ω</td>
            <td>{ isNaN(t1) ? 0 : t1.toFixed(2) } V</td>
            <td>{ isNaN(i1) ? 0 : i1.toFixed(2) } mA</td>
            <td>{ isNaN(p1) ? 0 : p1.toFixed(2) } mW</td>
          </tr>
          <tr>
            <td> R2 </td>
            <td>{ isNaN(r2) ? 0 : r2 } Ω</td>
            <td>{ isNaN(t2) ? 0 : t2.toFixed(2) } V</td>
            <td>{ isNaN(i2) ? 0 : i2.toFixed(2) } mA</td>
            <td>{ isNaN(p2) ? 0 : p2.toFixed(2) } mW</td>
          </tr>
          <tr>
            <td> R3 </td>
            <td>{ isNaN(r3) ? 0 : r3 } Ω</td>
            <td>{ isNaN(t3) ? 0 : t3.toFixed(2) } V</td>
            <td>{ isNaN(i3) ? 0 : i3.toFixed(2) } mA</td>
            <td>{ isNaN(p3) ? 0 : p3.toFixed(2) } mW</td>
          </tr>
          <tr>
            <td> Req </td>
            <td>{ isNaN(req) ? 0 : req } Ω</td>
            <td>{ isNaN(tension) ? 0 : tension } V</td>
            <td>{ isNaN(current) ? 0 : current.toFixed(2) } mA</td>
            <td>{ isNaN(power) ? 0 : power.toFixed(2) } mW</td>
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