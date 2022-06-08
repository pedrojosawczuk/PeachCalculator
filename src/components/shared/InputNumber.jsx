import PropTypes from 'prop-types'

function InputNumber({ id_name, min, max, placeholder, title, onChange }) {
  return (
    <label className="custom-field">
      <input
        type='number'
        id={ id_name }
        name={ id_name }
        min={ min }
        max={ max }
        placeholder={ placeholder }
        title={ title }
        required
        onChange={ onChange }
      />
    </label>
  )
}

InputNumber.propTypes = {
  id_name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.string,
}

export default InputNumber