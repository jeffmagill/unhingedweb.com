import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, icon, title, background, cssClass }) => (
  <section style={{background:background}}>
    <div class="wrap">
      <header>
        {icon &&
          <span class="icon">{icon()}</span>
        }
        <h2>{title}</h2>
      </header>
      <div class="content">
        {children}
      </div>
    </div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  cssClass: PropTypes.string,
}

Section.defaultProps = {
  title: ``,
  icon: ``,
  background: ``,
  cssClass: ``,
}

export default Section
