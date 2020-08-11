import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { TransitionState } from "gatsby-plugin-transition-link";
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
        <TransitionState>
          {({ mount, transitionStatus }) => {
            return (
              <>
                <div className={cssClass + " unh-tl-wrapper " + transitionStatus}>
                  <Header siteTitle={data.site.siteMetadata.title}
                    menuLinks={data.site.siteMetadata.menuLinks}
                    />
                  <main className="main">
                    {children}
                  </main>
                  <Footer />
                </div>
              </>
              );
            }}
        </TransitionState>
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
