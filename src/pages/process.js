import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'

import ResearchIcon from '../images/icons/v2/research.svg'
import StrategyIcon from '../images/icons/v2/startup.svg'
import DesignIcon from '../images/icons/v2/design-tool.svg'
import DevelopIcon from '../images/icons/v2/devops.svg'
import MaintenanceIcon from '../images/icons/v2/settings.svg'

const OurProcess = () => (
  <Layout cssClass="our-process">
  
    <SEO title="Our Process" />
  
    <h1>Our Process</h1>
    <section class="section-list section-list--alternate">
      <Section title="Research" icon={ResearchIcon}>
        <p>
          Research is the first and most important step in good design. It informs all other decisions for the rest of the project. 
          It’s like studying before the big test. There may be other things that you would rather be doing, but when the test rolls 
          around you know your answers are right. We do our research so that we understand your who your audience is and how they 
          think.</p>
      </Section>
      <Section title="Strategy" icon={StrategyIcon}>
        <p>Good research inspires good strategy and good strategy leads to design that meets goals. Design without strategy is art. 
          Strategy without research blind. When it comes to business, we don’t like to guess. Neither should you. Otherwise, we might 
          as well be playing pin-the-tail-on-the-donkey… only in this game, there are no balloon animals at the end.</p>
      </Section>
      <Section title="Design" icon={DesignIcon}>
        <p>We start with high-level concepts and quick mock-ups before we refine our designs into a final product by merging our your 
          business expertise with our design expertise. Meanwhile, we are constantly evaluating our direction against the research and 
          strategy to make sure the goals are driving our progress.</p>
      </Section>
      <Section title="Development" icon={DevelopIcon}>
        <p>We are excited to be working with the Internet and technology in such an innovative and challenging time. Just as an Italian 
          sports car needs a V12 engine, an exceptional website or app needs powerful and reliable technology in order to meet the 
          demands of the business. That’s why we make it a priority to seek out and use the technology that will produce the best 
          results.</p>
      </Section>
      <Section title="Maintenance" icon={MaintenanceIcon}>
        <p>Research is the first and most important step in good design. It informs all other decisions for the rest of the project. 
          It’s like studying before the big test. There may be other things that you would rather be doing, but when the test rolls 
          around you know your answers are right. We do our research so that we understand your who your audience is and how they 
          think.</p>
      </Section>
    </section>
  </Layout>
)

export default OurProcess
