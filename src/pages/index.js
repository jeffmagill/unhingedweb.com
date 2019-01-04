import React from 'react'

import Layout from '../components/layout'
import Phrases from '../components/phrases'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Phrases/>
  </Layout>
)

export default IndexPage
