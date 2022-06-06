import PropTypes from 'prop-types'

function Output({ displayOutput, circuit, r1, r2, r3, tension }) {
  let req;
  let current; // current = tension / req
  let potency; // potency = tension * current
  let i1, i2, i3;
  let t1, t2, t3;
  let p1, p2, p3;
  
  console.log(
    'R1 : ' + r1,
    '\nR2 : ' + r2,
    '\nR3 : ' + r3,
    '\nTension : ' + tension,
    '\nCircuit : ' + circuit
  )

  switch(circuit) {
    case 'S':
      console.log("S - Series");
      req = parseInt(r1) + parseInt(r2) + parseInt(r3);
      current = tension / req;
      i1 = i2 = i3 = current;
      t1 = r1 * i1;
      t2 = r2 * i2;
      t3 = r3 * i3;
      p1 = t1 * i1;
      p2 = t2 * i2;
      p3 = t3 * i3;
      potency = tension * current;
      break;

    case 'P':
      console.log("P - Parallel");
      req = 1 / (
          (1 / r1) +
          (1 / r2) +
          (1 / r3)
        );
      current = tension / req;
      t1 = t2 = t3 = tension;
      i1 = t1 / r1;
      i2 = t2 / r2;
      i3 = t3 / r3;
      p1 = t1 * i1;
      p2 = t2 * i2;
      p3 = t3 * i3;
      potency = tension * current;
      break;

    case 'M1':
      console.log("M1 - Combinations of Series and Parallel 1");
      break;

    case 'M2':
      console.log("M2 - Combinations of Series and Parallel 1");
      break;
      
    default:
      console.log(`Circuit ${ circuit} does not exist!`);
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
            <th> </th>
            <th> Tension <br/> V </th>
            <th> Current <br/> A </th>
            <th> Potency <br/> W </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R1 = { r1.toFixed(3) }Ω</td>
            <td>{ t1.toFixed(3) }V</td>
            <td>{ i1.toFixed(3) }A</td>
            <td>{ p1.toFixed(3) }W</td>
          </tr>
          <tr>
            <td>R2 = { r2.toFixed(3) }Ω</td>
            <td>{ t2.toFixed(3) }V</td>
            <td>{ i2.toFixed(3) }A</td>
            <td>{ p2.toFixed(3) }W</td>
          </tr>
          <tr>
            <td>R3 = { r3.toFixed(3) }Ω</td>
            <td>{ t3.toFixed(3) }V</td>
            <td>{ i3.toFixed(3) }A</td>
            <td>{ p3.toFixed(3) }W</td>
          </tr>
          <tr>
            <td>Req = { req.toFixed(3) }Ω</td>
            <td>{ tension.toFixed(3) }V</td>
            <td>{ current.toFixed(3) }A</td>
            <td>{ potency.toFixed(3) }W</td>
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