import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const OpenSourcePage = () => (
  <Layout>
    <SEO title="OpenSource" />
    <h1>Hi from the OpenSource page</h1>
    <p>Welcome to OpenSource page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OpenSourcePage
