import React from 'react'
import PropTypes from 'prop-types'

class CardGrid extends React.Component  {
  constructor(props) {
    super(props);
    this.cssClasses = `grid grid--${this.props.columns}col wrap`;
  }
  
  render() {
    return (
        <section class={this.cssClasses}>
            {this.props.children}
        </section>
    );
  }
}
CardGrid.defaultProps = {
    columns: PropTypes.oneOf([1,2,3,4,6,12]),
}
export default CardGrid
