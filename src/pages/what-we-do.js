import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'

import ResearchIcon from '../images/icons/research.svg'
import StrategyIcon from '../images/icons/strategy.svg'
import DesignIcon from '../images/icons/design.svg'
import DevelopIcon from '../images/icons/develop.svg'
import MaintenanceIcon from '../images/icons/maintenance.svg'

import ReactDOM from 'react-dom';

console.log('ResearchIcon: ');
console.log(ResearchIcon);
console.log('ResearchIcon(): ');
console.log(ResearchIcon());

const WhatWeDo = () => (
  <Layout cssClass="what-we-do">
    <SEO title="Services" />
    {ResearchIcon()}
    <h1>Services</h1>
    <blockquote class="wrap">
      People usually come to us when they need websites, mobile apps, logos or print collateral. Each project is the result of a process of fusing your business knowledge with our digital expertise. We dont use cookie cutter solutions; we have an effective process that meets goals.
    </blockquote>
    <Section title="Research" icon={ResearchIcon}>
      <p>Research is the first and most important step in good design. It informs all other decisions for the rest of the project. It’s like studying before the big test. There may be other things that you would rather be doing, but when the test rolls around you know your answers are right. We do our research so that we understand your who your audience is and how they think.</p>
    </Section>
    <Section title="Strategy" >
      <p>Good research inspires good strategy and good strategy leads to design that meets goals. Design without strategy is art. Strategy without research blind. When it comes to business, we don’t like to guess. Neither should you. Otherwise, we might as well be playing pin-the-tail-on-the-donkey… only in this game, there are no balloon animals at the end.</p>
    </Section>
    <Section title="Design" >
      <p>We start with high-level concepts and quick mock-ups before we refine our designs into a final product by merging our your business expertise with our design expertise. Meanwhile, we are constantly evaluating our direction against the research and strategy to make sure the goals are driving our progress.</p>
    </Section>
    <Section title="Development" >
      <p>We are excited to be working with the Internet and technology in such an innovative and challenging time. Just as an Italian sports car needs a V12 engine, an exceptional website or app needs powerful and reliable technology in order to meet the demands of the business. That’s why we make it a priority to seek out and use the technology that will produce the best results.</p>
    </Section>
    <Section title="Maintenance" >
      <p>Research is the first and most important step in good design. It informs all other decisions for the rest of the project. It’s like studying before the big test. There may be other things that you would rather be doing, but when the test rolls around you know your answers are right. We do our research so that we understand your who your audience is and how they think.</p>
    </Section>
  </Layout>
)

export default WhatWeDo
