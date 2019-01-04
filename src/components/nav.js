import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import "./nav.scss"

const Nav = ({ menuLinks }) => (
  <nav id="nav">
    <ul>
      {
        menuLinks.map(link =>
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>)
      }
    </ul>
  </nav>
)

Nav.propTypes = {
  menuLinks: PropTypes.array,
}

Nav.defaultProps = {
  menuLinks: [],
}

export default Nav
