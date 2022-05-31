import { useState } from 'react';
import Output from './Output';
import Button from './shared/Button';

function Content() {
/*
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
*/

const [r1, setR1] = useState(0);
const [r2, setR2] = useState(0);
const [r3, setR3] = useState(0)
const [tension, setTension] = useState(0)
const [circuit, setCircuit] = useState('S');

const [btnDisabled, setBtnDisabled] = useState(true)
const [errorMessage, setErrorMessage] = useState(null);

const [output, setOutput] = useState(0);

const handleChange = (event) => {
  if ( event.target.value >= 1 && event.target.value <= 9999) {
    switch(event.target.name) {
      case 'r1':
        setR1(parseInt(event.target.value))
        setErrorMessage(null)
        break;
      case 'r2':
        setR2(parseInt(event.target.value))
        setErrorMessage(null)
      break;
      case 'r3':
        setR3(parseInt(event.target.value))
        setErrorMessage(null)
      break;
      case 'tension':
        if ( event.target.value >= 1 && event.target.value <= 12 ) {
          setTension(parseInt(event.target.value))
          setErrorMessage(null)
        }
        else {
          event.target.value = ''
          setBtnDisabled(true)
          setErrorMessage('ERROR: Tension Value is not Between 1V and 12V')
        }
      break;
      default:
        setBtnDisabled(true)
        console.log('ERROR: ' + event.target.name)
      break;
    }
    if (r1 >=1 && r1 <= 9999) {
      if (r2 >=1 && r2 <= 9999) {
        if (r3 >=1 && r3 <= 9999) {
          if (tension >=1 && tension <= 12) {
            setBtnDisabled(false)
          }
          else {
            setBtnDisabled(true)
          }
        }
        else {
          setBtnDisabled(true)
        }
      }
      else {
        setBtnDisabled(true)
      }
    }
    else {
      setBtnDisabled(true)
    }
  }
  else {
    event.target.value = ''
    setBtnDisabled(true)
  }
  /*
  else if ( event.target.name == 'r1' || 'r2' || 'r3' ) {
    if ( event.target.value >= 1 && event.target.value < 10000 ) {
    }
    else {
      event.target.value = ''
      setErrorMessage(`ERROR: Resistance ${ event.target.name } Value is not Between 1Ω and 9999Ω`)
    }
  }
  else if ( event.target.value == 'S' || 'P' || 'M1' || 'M2'){
    setCircuit(event.target.name)
  }*/
  
}
const handleSubmit = event => {
  event.preventDefault();
  setOutput(1)
  console.log(
    'R1 : ' + r1,
    'R2 : ' + r2,
    'R3 : ' + r3,
    'Tension : ' + tension,
    'Circuit : ' + circuit
  )
}
const handleReset = event => {
  setBtnDisabled(true)
  setR1(0)
  setR2(0)
  setR3(0)
  setOutput(0)
  setTension(0)
  setCircuit('S')
}

  return (
  <div className="content">
    <form onSubmit={ handleSubmit } onReset={ handleReset }>
      {/* Resistors Input */}
      <div className="row">
        <label className="custom-field">
          <input
            type='number'
            name='r1'
            min='1'
            max='9999'
            placeholder='Resistor 1'
            title='Value Between 1Ω and 9999Ω'
            required
            onChange={ handleChange }
          />
        </label>
        <label className="custom-field">
          <input
            type='number'
            name='r2'
            min='1'
            max='9999'
            placeholder='Resistor 2'
            title='Value Between 1Ω and 9999Ω'
            required
            onChange={ handleChange }
          />
        </label>
        <label className="custom-field">
          <input
            type='number'
            name='r3'
            min='1'
            max='9999'
            placeholder='Resistor 3'
            title='Value Between 1Ω and 9999Ω'
            required
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="row">
        <label className="custom-field">
          <input
            type='number'
            placeholder='Tension'
            title='Value Between 1V and 12V'
            name='tension'
            min='1'
            max='12'
            required
            onChange={ handleChange }
          />
        </label>
      </div>
      <Output
        displayOutput={ output }
        circuit={ circuit }
        r1={ r1 }
        r2={ r2 }
        r3={ r3 }
        tension={ tension } />
      {/* Circuit Type Input */}
      <div className="row">
        <label className="custom-field">
          <select name="circuits" required onChange={ handleChange }>
            <option value='S'>Series</option>
            <option value='P'>Parallel</option>
            <option value='M1'>Combinations of Series and Parallel 1</option>
            <option value='M2'>Combinations of Series and Parallel 2</option>
          </select>
        </label>
      </div>
      { errorMessage && <div className='errormessage'> { errorMessage }</div>}
      {/* Submit and Reset Buttons */}
      <div className="row">
        <label className="custom-field">
          <Button type='submit' version='primary' isDisabled={ btnDisabled } >Submit</Button>
          {/*<input type="submit" />*/}
        </label>
        <label className="custom-field"><Button type='reset' version='secondary' >Reset</Button>
          {/*<input type="reset" onClick={ handleReset }/>*/}
        </label>
      </div>
    </form>
  </div>
  )
}

export default Content