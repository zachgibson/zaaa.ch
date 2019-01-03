import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Experiments from '../components/experiments'

const ExperimentsPage = () => (
  <Layout>
    <SEO title="Experiments" />
    <Experiments />
  </Layout>
)

export default ExperimentsPage
