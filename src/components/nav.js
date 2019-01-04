import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import "./nav.scss"

const reactStringReplace = require('react-string-replace');

const Nav = ({ menuLinks }) => (
  <nav id="nav">
    <ul>
      {
        menuLinks.map(link =>
          <li key={link.name}>
            <Link to={link.link} class={link.link.replace(/^\//g, '')}>
              { reactStringReplace(link.name, /(\w+)/g, (match, i) => (
                <span key={i}>{match}</span>
              )) }
            </Link>
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
