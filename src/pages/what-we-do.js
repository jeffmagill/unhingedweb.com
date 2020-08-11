import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardGrid from '../components/card-grid'
import Card from '../components/card'
import DropLink from '../components/drop-link'

const WhatWeDo = () => (
  <Layout cssClass="what-we-do">
  
    <SEO title="Services" />
  
    <h1>Services</h1>
  
    <blockquote className="wrap">
      People usually come to us when they need websites, mobile apps, logos, or print collateral. Each project is the result of our 
      <DropLink to="/process">
          proven process
      </DropLink> 
      of fusing your business knowledge with our digital expertise. We dont use cookie cutter solutions; we have an effective process that meets goals.
    </blockquote>
  
    <CardGrid columns="4" fullWidth="true">
      <Card title="Strategy" icon="strategy.svg"/>
      <Card title="Information Architecture" icon="ia.svg"/>
      <Card title="UX/UI" icon="ux.svg"/>
      <Card title="Interactive Design" icon="design.svg"/>
      <Card title="Development" icon="develop.svg"/>
      <Card title="Analytics" icon="tracking.svg"/>
      <Card title="Content Management" icon="cms.svg"/>
      <Card title="Mobile Optimization" icon="mobile.svg"/>
      <Card title="Technical Strategy" icon="technical_strategy.svg"/>
      <Card title="Print Design" icon="print.svg"/>
      <Card title="Logo Design" icon="logo.svg"/>
      <Card title="Social Media Integration" icon="social.svg"/>
    </CardGrid>

  </Layout>
)

export default WhatWeDo
