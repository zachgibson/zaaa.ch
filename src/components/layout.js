import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Spring, Transition } from 'react-spring'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

import './layout.css'
import links from './links'

const _window = typeof window !== 'undefined' && window

const Footer = () => (
  <footer
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      height: 64,
      paddingTop: 16,
      paddingLeft: 24,
      paddingBottom: 16,
      paddingRight: 24,
    }}
  >
    © 2018 Zachary Gibson. All rights reserved.
  </footer>
)

const getX = target =>
  target &&
  target.getBoundingClientRect().x + target.getBoundingClientRect().width / 2

const getY = target =>
  target &&
  target.getBoundingClientRect().y + target.getBoundingClientRect().height / 2

class MainLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activePage: null, scale: 0, translateY: this.props.delay }
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ scale: 1, translateY: 0 })
  //   }, this.props.delay)

  //   if (this.props.to === window.location.pathname) {
  //     setTimeout(() => {
  //       this.props.onActivePageRecognition(
  //         getX(this.element),
  //         getY(this.element)
  //       )
  //     }, 500)
  //   }
  // }

  render() {
    const {
      to,
      children,
      gridRow,
      gridColumn,
      onMouseOver,
      onMouseOut,
      component,
      width,
      height,
      linkEnabled,
      isHomePage,
      isHovering,
      isActiveHover,
    } = this.props

    return (
      <div
        style={{
          gridRow,
          gridColumn,
          opacity: isHovering && !isActiveHover ? 0.1 : isActiveHover ? 1 : 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            fontSize: 24,
          }}
        >
          {component && (
            <Link
              to={to}
              innerRef={element => {
                this.element = element
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 8,
                paddingLeft: 4,
                paddingBottom: 8,
                paddingRight: 4,
                color: linkEnabled ? '#000' : '#C3C3C3',
                textDecoration: isHomePage
                  ? 'none'
                  : linkEnabled
                  ? 'underline'
                  : 'line-through',
                border: isHomePage ? '1px dashed #000' : 'none',
              }}
              onMouseOver={({ target }) =>
                linkEnabled && onMouseOver(getX(target), getY(target), target)
              }
              onMouseOut={({ target }) =>
                linkEnabled && onMouseOut(getX(target), getY(target), target)
              }
              // onMouseOut={({ target }) =>
              //   onMouseOut(getX(target), getY(target), target)
              // }
            >
              {children}
            </Link>
          )}
          {!component && (
            <a
              href={to}
              style={{
                // position: 'relative',
                // width: 32,
                // height: 32,
                display: 'flex',
                alignItems: 'center',
                paddingTop: 8,
                paddingBottom: 8,
                // color: '#000',
              }}
            >
              <img
                src={children}
                style={{
                  // position: 'absolute',
                  // top: '50%',
                  // left: '50%',
                  // transform: 'translate(-50%, -50%)',
                  width,
                  height,
                }}
              />
            </a>
          )}
        </div>
      </div>
    )
  }
}

const initialCenterX = _window.innerWidth / 2
const initialCenterY = _window.innerHeight / 2
const homePage = '/'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: null,
      top: null,
      left: null,
      hoveredLink: null,
      isHovering: false,
      initialX: null,
      initialY: null,
      activePage: null,
      pageRotateX: 40,
      pageY: '80%',
      pageScaleX: 0.8,
      pageScaleY: 1.4,
      pageBorderRadius: 50,
      previewPageOpacity: 0,
      hoveredLinkName: null,
    }
  }

  componentDidMount() {
    // if () {
    //   this.setState({ previewPageOpacity: 1 })
    // } else {
    //   this.setState({ previewPageOpacity: 0 })
    // }

    this.setState({
      scale: 0,
      top: 0,
      left: 0,
      pageY: '0%',
      pageRotateX: 0,
      pageScaleX: 1,
      pageScaleY: 1,
      pageBorderRadius: 0,
    })
    this.setState({ activePage: _window.location.pathname }, () => {
      if (this.state.activePage === homePage) {
        this.setState({
          scale: 1,
          top: 0,
          left: 0,
          initialX: 0,
          initialY: 0,
        })
      }
    })
  }

  setActivePageCoordinates = (x, y) => {
    if (this.state.activePage === homePage) {
      // this.setState({
      //   scale: 1,
      //   top: 0,
      //   left: 0,
      //   initialX: 0,
      //   initialY: 0,
      // })
    } else {
      this.setState({
        scale: 0.4,
        left: (x - initialCenterX) * 2.5,
        top: (y - initialCenterY) * 2.5,
        initialX: (x - initialCenterX) * 2.5,
        initialY: (y - initialCenterY) * 2.5,
      })
    }
  }

  handleMouseOver = (left, top, target) => {
    console.log(left, top)
    const href = target.href
    const indexOfLastSlash = href.lastIndexOf('/')
    const hoveredLink = `/${href.substring(indexOfLastSlash + 1)}`

    this.setState({ hoveredLink, hoveredLinkName: target.innerText }, () => {
      if (
        this.state.activePage === homePage &&
        homePage === this.state.hoveredLink
      ) {
        this.setState({
          scale: 1,
          top: 0,
          left: 0,
          isHovering: true,
        })
      } else if (homePage === this.state.hoveredLink) {
        this.setState({
          scale: 1,
          top: 0,
          left: 0,
          isHovering: true,
        })
      } else {
        this.setState({
          scale: 0.4,
          top: (top - initialCenterY) * 2.5,
          left: (left - initialCenterX) * 2.5,
          isHovering: true,
        })
      }
    })
  }

  handleMouseOut = (left, top, target) => {
    const { initialX, initialY } = this.state
    const homePage = '/'
    const href = target.href
    const indexOfLastSlash = href.lastIndexOf('/')
    const hoveredPath = `/${href.substring(indexOfLastSlash + 1)}`

    this.setState({ hoveredLinkName: null })

    if (this.state.activePage === homePage) {
      this.setState({
        scale: 1,
        top: 0,
        left: 0,
        isHovering: false,
      })
      return
    }
    if (this.state.activePage !== hoveredPath) {
      this.setState({
        scale: 0.4,
        left: initialX,
        top: initialY,
        isHovering: false,
      })
    }
  }

  // renderHoveredComponent = link => {
  //   console.log(link)
  //   switch (link) {
  //     case 'work':
  //       return <Work />
  //     default:
  //       return null
  //   }
  // }

  render() {
    const { children } = this.props
    const currentPathName = _window.location.pathname

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
        render={() => (
          <>
            {currentPathName === homePage && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: '1fr auto',
                  gridTemplateColumns: '1fr 1.6fr 1fr',
                  height: '100vh',
                  minHeight: 560,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    height: '100vh',
                    minHeight: 560,
                    position: 'relative',
                    zIndex: 1,
                    display: 'grid',
                    gridTemplateRows: 'repeat(20, 1fr)',
                    gridTemplateColumns: 'repeat(14, 1fr)',
                  }}
                >
                  {links.slice(0, 6).map(link => (
                    <MainLink
                      // key={link.title}
                      to={link.to}
                      width={link.width}
                      height={link.height}
                      state={{ previousX: this.state.initialX }}
                      gridRow={link.gridRow}
                      gridColumn={link.gridColumn}
                      onActivePageRecognition={this.setActivePageCoordinates}
                      getInitialCoordinates={(x, y) => {
                        console.log(x, y)
                      }}
                      onMouseOver={link.component && this.handleMouseOver}
                      onMouseOut={link.component && this.handleMouseOut}
                      component={link.component}
                      linkEnabled={link.linkEnabled}
                      isHomePage={link.isHomePage}
                      delay={link.linkVisibilityDelay}
                      isHovering={this.state.isHovering}
                      isActiveHover={this.state.hoveredLinkName === link.title}
                    >
                      {link.content}
                    </MainLink>
                  ))}
                </div>
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {this.state.scale !== null &&
                    this.state.top !== null &&
                    this.state.left !== null && (
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
                              maxWidth: 560,
                              height: '50vw',
                              maxHeight: 560,
                              borderRadius: '50%',
                              backgroundColor: '#FF85E9',
                              ...props,
                            }}
                          />
                        )}
                      </Spring>
                    )}
                  {this.state.isHovering &&
                    links.find(({ to }) => to === this.state.hoveredLink)
                      .previewComponent}
                  {this.state.activePage &&
                    !this.state.isHovering &&
                    links.find(({ to }) => to === this.state.activePage)
                      .previewComponent}
                </div>
                <div
                  style={{
                    height: '100vh',
                    minHeight: 560,
                    position: 'relative',
                    zIndex: 1,
                    display: 'grid',
                    gridTemplateRows: 'repeat(20, 1fr)',
                    gridTemplateColumns: 'repeat(14, 1fr)',
                  }}
                >
                  {links.slice(6, 13).map(link => (
                    <MainLink
                      // key={link.title}
                      to={link.to}
                      width={link.width}
                      height={link.height}
                      gridRow={link.gridRow}
                      gridColumn={link.gridColumn}
                      onActivePageRecognition={this.setActivePageCoordinates}
                      getInitialCoordinates={(x, y) => {
                        console.log(x, y)
                      }}
                      onMouseOver={this.handleMouseOver}
                      onMouseOut={link.component && this.handleMouseOut}
                      component={link.component}
                      linkEnabled={link.linkEnabled}
                      isHomePage={link.isHomePage}
                      delay={link.linkVisibilityDelay}
                      isHovering={this.state.isHovering}
                      isActiveHover={this.state.hoveredLinkName === link.title}
                    >
                      {link.content}
                    </MainLink>
                  ))}
                </div>
              </div>
            )}
            {this.state.activePage &&
              links.find(({ to }) => to === this.state.activePage).component}
          </>
        )}
      />
    )
  }
}

// <Footer />
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
