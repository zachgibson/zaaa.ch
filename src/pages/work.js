import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Hi from the work page</h1>
    <p>Welcome to work page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
