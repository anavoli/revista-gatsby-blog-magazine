import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import AllCategories from '../components/utils/AllCategories'

const categories = () => {
  return (
    <Layout>
      <Seo
        title="kategorije | Neško"
        description="List of all categories "
      />
      <AllCategories />
    </Layout>
  )
}

export default categories
