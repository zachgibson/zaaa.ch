import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Spring } from 'react-spring'

import './layout.css'

class Link extends React.Component {
  render() {
    const {
      children,
      gridRow,
      gridColumn,
      onMouseOver,
      onMouseOut,
    } = this.props

    return (
      <div
        style={{
          gridRow,
          gridColumn,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            fontSize: 24,
            textDecoration: 'underline',
          }}
        >
          <a
            style={{ cursor: 'pointer' }}
            onMouseOver={({ target }) =>
              onMouseOver(
                target.getBoundingClientRect().y +
                  target.getBoundingClientRect().height / 2,
                target.getBoundingClientRect().x +
                  target.getBoundingClientRect().width / 2
              )
            }
            onMouseOut={onMouseOut}
          >
            {children}
          </a>
        </div>
      </div>
    )
  }
}

const activePage = 'zaaa.ch'

class Layout extends React.Component {
  state = {
    scale: 1,
    top: 0,
    left: 0,
    activeLink: activePage,
    isHovering: false,
  }

  handleMouseOver = (top, left, linkRef) => {
    const initialCenterX = window.innerWidth / 2
    const initialCenterY = window.innerHeight / 2

    this.setState({
      scale: 0.4,
      top: (top - initialCenterY) * 2.5,
      left: (left - initialCenterX) * 2.5,
      activeLink: linkRef.props.children,
      isHovering: true,
    })
  }

  handleMouseOut = () => {
    this.setState({
      scale: 1,
      top: 0,
      left: 0,
      activeLink: activePage,
      isHovering: false,
    })
  }

  link2

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr auto',
                gridTemplateColumns: '1fr 1.6fr 1fr',
                height: '100vh',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateRows: 'repeat(14, 1fr)',
                  gridTemplateColumns: 'repeat(10, 1fr)',
                }}
              >
                <Link
                  gridRow="3"
                  gridColumn="2 / 10"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  zaaa.ch
                </Link>
                <Link
                  ref={ref => (this.link2 = ref)}
                  gridRow="6"
                  gridColumn="5 / 11"
                  onMouseOver={(top, left) => {
                    this.handleMouseOver(top, left, this.link2)
                  }}
                  onMouseOut={this.handleMouseOut}
                >
                  Featured Work
                </Link>
                <Link
                  gridRow="9"
                  gridColumn="3 / 10"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Experiments
                </Link>
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Spring
                  from={{
                    transform: `scale(${this.state.scale}) translate(${
                      this.state.left
                    }px, ${this.state.top}px)`,
                  }}
                  to={{
                    transform: `scale(${this.state.scale}) translate(${
                      this.state.left
                    }px, ${this.state.top}px)`,
                  }}
                >
                  {props => (
                    <div
                      style={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        width: '50vw',
                        maxWidth: 640,
                        height: '50vw',
                        maxHeight: 640,
                        borderRadius: '50%',
                        backgroundColor: '#FF85E9',
                        ...props,
                      }}
                    />
                  )}
                </Spring>
                <div style={{ position: 'relative' }}>
                  {this.state.activeLink}
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateRows: 'repeat(14, 1fr)',
                  gridTemplateColumns: 'repeat(10, 1fr)',
                }}
              >
                <Link
                  gridRow="4"
                  gridColumn="3 / 10"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Writings
                </Link>
                <Link
                  gridRow="7"
                  gridColumn="5 / 11"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Open Source
                </Link>
                <Link
                  gridRow="11"
                  gridColumn="2 / 10"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                >
                  Jams to work to ↗
                </Link>
              </div>
            </div>
            <footer
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                height: 64,
                paddingTop: 16,
                paddingLeft: 24,
                paddingBottom: 16,
                paddingRight: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                social links
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                © 2018 Zachary Gibson. All rights reserved.
              </div>
            </footer>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
