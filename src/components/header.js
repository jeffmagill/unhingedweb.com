import DropLink from '../components/drop-link'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from "./nav"

import "./header.scss"
import Logo from '../images/logo.svg';

const Header = ({ siteTitle, menuLinks }) => (
  <header id="header">
    <h1>
      <DropLink to="/">
        <Logo />
      </DropLink>
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
