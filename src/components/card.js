import React from 'react'
import SVG from '../components/svg'
import { graphql } from "gatsby"
import QueriedImage from "../components/queried-image"

class Card extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.safe_title = props.title.toLowerCase().replace(/\W+/,"-");
    this.state.cssClass = [ "card", this.state.safe_title, props.cssClass ].join(" ").trim();
  }
  
  render() {
    let Icon = null;

    if(this.props.icon === undefined) {
      Icon = null;
    }
    else if(this.props.icon.endsWith(".svg")) {
      let path = this.props.icon.replace(".svg", "");
      Icon = <SVG image={path}/>
    }
    else {
      // Icon = <img src={this.props.icon} alt={this.props.title} />
      // Icon = <Img fixed={data.file.childImageSharp.fixed} />
      Icon = <QueriedImage src={this.props.icon}/>
    }

    return <article className={this.cssClass} style={{background:this.background}}>
        <header>
          {Icon &&
            <span className="icon">{Icon}</span>
          }
          <h2>{this.props.title}</h2>
        </header>
        <div className="content">
          {this.props.children}
        </div>
    </article>
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

export default Card

export const query = graphql`
  query {
    file(relativePath: { eq: "images/projects/babylon-public-library/homepage-960.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`