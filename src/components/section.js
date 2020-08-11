import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, icon, title, background, cssClass }) => {
  const Icon = icon;
  return (
    <section style={{background:background}}>
      <div className="wrap">
        <header>
          {icon &&
            <span className="icon">{<Icon/>}</span>
          }
          <h2>{title}</h2>
        </header>
        <div className="content">
          {children}
        </div>
      </div>
    </section>
  )
}

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
