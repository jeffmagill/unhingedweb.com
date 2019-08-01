import React from 'react'
// import PropTypes from 'prop-types'

class Card extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.safe_title = props.title.toLowerCase().replace(/\W+/,"-");
    this.state.cssClass = [ "card", this.state.safe_title, props.cssClass ].join(" ").trim();
  }
  
  render() {
    const Icon = this.props.icon;
    return <section class={this.cssClass} style={{background:this.background}}>
      <div class="wrap">
        <header foo={this.props.showDescription}>
          {Icon &&
            <span class="icon">{<Icon/>}</span>
          }
          <h2>{this.props.title}</h2>
        </header>
        <div class="content">
          {this.props.children}
        </div>
      </div>
    </section>
  }

  toggle_body() {
    this.setState({ 'showDescription': !this.props.showDescription })
  }

}
// Card.propTypes = {
//   title: PropTypes.string,
//   icon: PropTypes.func,
//   background: PropTypes.string,
//   cssClass: PropTypes.string,
//   showDescription: PropTypes.bool,
// }

Card.defaultProps = {
  title: ``,
  icon: ``,
  background: ``,
  cssClass: ``,
  showDescription: false
}
export default Card
