import PropTypes from 'prop-types'

function Header({ logo, title}) {
  return (
    <header>
      <img src={ logo } className="logo" alt="Peach Icons" />
      <p className="title">{ title }</p>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Header