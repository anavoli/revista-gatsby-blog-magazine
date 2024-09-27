import React from 'react'
import Layout from '../components/Layout'
import AboutUs from '../components/About/AboutUs'
import Vision from '../components/About/Vision'
import Network from '../components/About/Network'
import Seo from '../components/SEO'

const about = () => {
  return (
    <Layout>
      <Seo
        title=" O nama | Neško "
        description="Moja viđenja o nekim stvarima."
      />

      <AboutUs />
      <Vision />
      <Network />
    </Layout>
  )
}

export default about
