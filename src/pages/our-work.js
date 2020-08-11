import React from 'react'
// import { Cardnk } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import CardGrid from '../components/card-grid'

const OurWork = () => {
  
  return (
    <Layout>
      <SEO title="Our Work" />
      <h1>
        Our Work
      </h1>
      <CardGrid columns="3">
        <Card title="Babylon Public Library" icon="projects/babylon-public-library/homepage-960.jpg">
          When Unhinged teamed up with the Babylon Public Library, the library’s website had not undergone a major update in twenty years. 
          Unhinged worked together with library staff to create new goals for their online presence and design a new site from scratch that 
          matched with the local community’s love of and proximity to the ocean.
        </Card>
        <Card title="American Honors" icon="projects/american-honors/desktop-full-1.jpg">
          Having worked with Unhinged in the past on Quad Learning, American Honors partnered with Unhinged again to rebuild their web 
          property at americanhonors.org. We gave them a powerful new backend that was able to accommodate their expanding business need 
          and optimized the user experience for mobile devices.
        </Card>
        <Card title="American Fight Club Logo" icon="projects/american-fight-club/afc-logo2.jpg">
          The American Fight Club enlisted the aid of Unhinged to design a new logo for the school’s competition team. The logo plays off of 
          classic American imagery and conveys the strength of the school. It was prominently applied to the students’ uniforms so it could 
          strike fear into the hearts of their competitors!
        </Card>
        <Card title="American Fight Club Website" icon="projects/american-fight-club/fightjiujitsu.jpg">
          The American Fight Club partnered with Unhinged to redesign their website, which they use to attract and communicate with students. 
          The Card included installing a powerful new backend, streamlined design and simplified content.
        </Card>
        <Card title="Carlyn Davis Casting" icon="projects/carlyn-davis-casting/cdc.jpg">
          Carlyn Davis Casting has been a pioneer in using the Internet and rich media to advance their agency. They partnered with Unhinged 
          to modernize the backend of their two sites, carlyndaviscasting.com and extrasnow.com to bring them up to modern standards. The 
          result is that CDC can continue being a top innovator in their industry.
        </Card>
        <Card title="Great Wolf Lodge Blog"></Card>
        <Card title="Urban Institute"></Card>
        <Card title="Hello Jeffrey"></Card>
        <Card title="PLC Construction"></Card>
      </CardGrid>

      Partnered with
      <ul>
        <Card title="Calico Cottage / Curious Panda"></Card>
        <Card title="i-Ready Central / Ascender Studios"></Card>
        <Card title="Revolution Hunger / LMG"></Card>
      </ul>
      angry egg
      silky swim
      quad learning
    </Layout>
  )
  }

export default OurWork
