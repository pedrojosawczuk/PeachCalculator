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

export default InputNumber