import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.scss'

const Layout = ({ children, cssClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}
                menuLinks={data.site.siteMetadata.menuLinks}
          />
        <main class={'main ' + cssClass }>
          {children}
        </main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string,
}

Layout.defaultProps = {
  cssClass: ``,
}

export default Layout
