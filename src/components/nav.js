import PropTypes from 'prop-types'
import React from 'react'
import DropLink from '../components/drop-link'

import "./nav.scss"

const reactStringReplace = require('react-string-replace');

const Nav = ({ menuLinks }) => (
  <nav id="nav">
    <ul>
      {
        menuLinks.map(link =>
          <li key={link.name}>
            <DropLink to={link.link}>
              { reactStringReplace(link.name, /(\w+)/g, (match, i) => (
                <span key={i}>{match}</span>
              )) }
            </DropLink>
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
