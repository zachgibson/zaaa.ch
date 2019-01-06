import React from 'react'
import { Link } from 'gatsby'

const Work = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'auto',
      paddingTop: 240,
      // backgroundColor: 'plum',
    }}
  >
    <h1>Hi from the work page</h1>
    <p>Welcome to work page</p>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ height: 3000 }} />
  </div>
)

export default Work
