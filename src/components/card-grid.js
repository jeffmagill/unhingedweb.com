import React from 'react'
import PropTypes from 'prop-types'

class CardGrid extends React.Component  {
  constructor(props) {
    super(props);
    this.cssClasses = `grid grid--${this.props.columns}col`;

    if(this.props.fullWidth === "true") {
      this.cssClasses += ' wrap'
    }
  }
  
  render() {
    return (
        <section className={this.cssClasses}>
            {this.props.children}
        </section>
    );
  }
}
CardGrid.defaultProps = {
    columns: PropTypes.oneOf([1,2,3,4,6,12]),
}
export default CardGrid
