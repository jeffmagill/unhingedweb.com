import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Phrases from '../components/phrases'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout cssclass="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Phrases/>
    <div class="container">
      <Link to="/what-we-do" class="btn"><span>What we can do for you</span></Link>
      <Link to="/our-work" class="btn"><span>Recent Projects</span></Link>
    </div>
  </Layout>
)

export default IndexPage
