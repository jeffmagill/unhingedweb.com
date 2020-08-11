import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

function renderImage(file) {
  if(file !== undefined && file !== null) {
    return <Img fluid={file.node.childImageSharp.fluid} />
  }
  else {
    return null;
  }
}

const QueriedImage = function (props) {
  return <StaticQuery
    query={graphql`
    query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
            edges {
                node {
                    extension
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }`}    
    render={({ images }) => renderImage(images.edges.find(image => { return image.node.relativePath === props.src }))}
  />
}
export default QueriedImage;