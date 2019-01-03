import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ExperimentsPage = () => (
  <Layout>
    <SEO title="Experiments" />
    <h1>Hi from the experiments page</h1>
    <p>Welcome to experiments page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ExperimentsPage
