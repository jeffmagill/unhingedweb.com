import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from "./nav"

import "./header.scss"
import Logo from '../images/logo.svg';

const Header = ({ siteTitle, menuLinks }) => (
  <header id="header">
    <h1>
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <Nav menuLinks={menuLinks}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
