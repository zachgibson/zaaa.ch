import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WritingsPage = () => (
  <Layout>
    <SEO title="Writings" />
    <h1>Hi from the writings page</h1>
    <p>Welcome to writings page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WritingsPage
