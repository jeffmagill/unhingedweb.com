import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, icon, title, background, _cssClass }) => {
  const Icon = icon;
  const safe_title = title.toLowerCase().replace(/\W+/,"-");
  const cssClass = [ "card", safe_title, _cssClass ].join(" ").trim();
  return (
    <section class={cssClass} style={{background:background}}>
      <div class="wrap">
        <header>
          {icon &&
            <span class="icon">{<Icon/>}</span>
          }
          <h2>{title}</h2>
        </header>
        <div class="content">
          {children}
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  cssClass: PropTypes.string,
}

Card.defaultProps = {
  title: ``,
  icon: ``,
  background: ``,
  cssClass: ``,
}

export default Card
