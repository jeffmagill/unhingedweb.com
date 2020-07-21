import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardGrid from '../components/card-grid'
import Card from '../components/card'
import DropLink from '../components/drop-link'

import ResearchIcon from '../images/icons/v2/research.svg'
import StrategyIcon from '../images/icons/v2/startup.svg'
import DesignIcon from '../images/icons/v2/design-tool.svg'
import DevelopIcon from '../images/icons/v2/devops.svg'
import MaintenanceIcon from '../images/icons/v2/settings.svg'

import UxIcon from '../images/icons/v2/users.svg'
import IaIcon from '../images/icons/v2/hierarchy.svg'
import TrackingIcon from '../images/icons/v2/analytics.svg'
import CmsIcon from '../images/icons/v2/test.svg'
import MobileIcon from '../images/icons/v2/content.svg'
import TechnicalStrategyIcon from '../images/icons/v2/rocket.svg'
import PrintIcon from '../images/icons/v2/study.svg'
import LogoIcon from '../images/icons/v2/logo.svg'
import SocialIcon from '../images/icons/v2/social-media.svg'


const WhatWeDo = () => (
  <Layout cssClass="what-we-do">
  
    <SEO title="Services" />
  
    <h1>Services</h1>
  
    <blockquote class="wrap">
      People usually come to us when they need websites, mobile apps, logos, or print collateral. Each project is the result of our 
      <DropLink to="/process">
          proven process
      </DropLink> 
      of fusing your business knowledge with our digital expertise. We dont use cookie cutter solutions; we have an effective process that meets goals.
    </blockquote>
  
    <CardGrid columns="4">
      <Card title="Strategy" icon={StrategyIcon}/>
      <Card title="Information Architecture" icon={IaIcon}/>
      <Card title="UX/UI" icon={UxIcon}/>
      <Card title="Interactive Design" icon={DesignIcon}/>
      <Card title="Development" icon={DevelopIcon}/>
      <Card title="Analytics" icon={TrackingIcon}/>
      <Card title="Content Management" icon={CmsIcon}/>
      <Card title="Mobile Optimization" icon={MobileIcon}/>
      <Card title="Technical Strategy" icon={TechnicalStrategyIcon}/>
      <Card title="Print Design" icon={PrintIcon}/>
      <Card title="Logo Design" icon={LogoIcon}/>
      <Card title="Social Media Integration" icon={SocialIcon}/>
    </CardGrid>

  </Layout>
)

export default WhatWeDo
