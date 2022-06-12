import PropTypes from 'prop-types'
import S from '../images/S.png';
import P from '../images/P.png';
import M1 from '../images/M1.png';
import M2 from '../images/M2.png';

function ShowCircuit({ alt , circuit}) {
  let src = ''
  
  switch (circuit) {
    case 'S':
      src = S;
      break;
    case 'P':
      src = P;
      break;
    case 'M1':
      src = M1;
      break;
    case 'M2':
      src = M2;
      break;
    default:
      break;
  }

  return (
    <>
      <img className='circuit-image' src={ src } alt={ alt } />
    </>
  )
}
ShowCircuit.defaultProps = {
  circuit: 'S',
}

ShowCircuit.propTypes = {
  circuit: PropTypes.string,
}

export default ShowCircuit