import React from 'react'

import "./footer.scss"
import LongIsland from '../images/icons/long-island.svg';

const Footer = () => (
  <footer id="footer">
    <span>
      © {new Date().getFullYear()}, Unhinged Web Studio, Inc.
    </span>
    <LongIsland/>
    <span>
      Proudly based on Long Island, New York
    </span>
  </footer>
)

export default Footer
