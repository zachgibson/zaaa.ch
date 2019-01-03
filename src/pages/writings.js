import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Writings from '../components/writings'

const WritingsPage = () => (
  <Layout>
    <SEO title="Writings" />
    <Writings />
  </Layout>
)

export default WritingsPage
