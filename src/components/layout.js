import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Spring } from 'react-spring'

import './layout.css'
import Work from '../components/work'
import Experiments from '../components/experiments'
import Writings from './writings'
import OpenSource from './open-source'
import JamsToWorkTo from './jams-to-work-to'
import Home from './home'
import twitterLogo from '../images/twitter.png'
import dribbbleLogo from '../images/dribbble.png'
import githubLogo from '../images/github.png'
import instagramLogo from '../images/instagram.png'
import twitchLogo from '../images/twitch.png'
import spotifyLogo from '../images/spotify.png'

const links = [
  {
    content: twitterLogo,
    width: 46,
    height: 38,
    to: 'https://twitter.com/zacharykeith_',
    gridRow: '3',
    gridColumn: '2 / 10',
    component: null,
    linkEnabled: true,
  },
  {
    content: 'zaaa.ch',
    width: null,
    height: null,
    to: '/',
    gridRow: '4',
    gridColumn: '8 / 15',
    component: <Home />,
    linkEnabled: true,
  },
  {
    content: 'Featured Work',
    width: null,
    height: null,
    to: '/work',
    gridRow: '9',
    gridColumn: '2 / 11',
    component: <Work />,
    linkEnabled: true,
  },
  {
    content: 'Experiments',
    width: null,
    height: null,
    to: '/experiments',
    gridRow: '14',
    gridColumn: '5 / 15',
    component: <Experiments />,
    linkEnabled: true,
  },
  {
    content: dribbbleLogo,
    width: 42,
    height: 42,
    to: 'https://dribbble.com/zacharygibson',
    gridRow: '16',
    gridColumn: '13 / 15',
    component: null,
    linkEnabled: true,
  },
  {
    content: githubLogo,
    width: 60,
    height: 50,
    to: 'https://github.com/zachgibson',
    gridRow: '18',
    gridColumn: '3 / 6',
    component: null,
    linkEnabled: true,
  },
  {
    content: instagramLogo,
    width: 44,
    height: 44,
    to: 'https://instagram.com/zacharykeith_',
    gridRow: '2',
    gridColumn: '11 / 14',
    component: null,
    linkEnabled: true,
  },
  {
    content: 'Writings',
    width: null,
    height: null,
    to: '/writings',
    gridRow: '4',
    gridColumn: '4 / 10',
    component: <Writings />,
    linkEnabled: false,
  },
  {
    content: twitchLogo,
    width: 106.74,
    height: 36,
    to: 'https://www.twitch.tv/zacharykeith_',
    gridRow: '7',
    gridColumn: '1 / 12',
    component: null,
    linkEnabled: true,
  },
  {
    content: 'Open Source',
    width: null,
    height: null,
    to: '/open-source',
    gridRow: '9',
    gridColumn: '8 / 16',
    component: <OpenSource />,
    linkEnabled: true,
  },
  {
    content: spotifyLogo,
    width: 46,
    height: 46,
    to: 'https://open.spotify.com/user/1220763445?si=HMSWJY8wQQ-SCqhlCGs8MQ',
    gridRow: '18',
    gridColumn: '9 / 12',
    component: null,
    linkEnabled: true,
  },
  {
    content: 'Jams to Work to',
    width: null,
    height: null,
    to: '/jams-to-work-to',
    icon: SpotifyIcon,
    gridRow: '14',
    gridColumn: '3 / 12',
    component: <JamsToWorkTo />,
    linkEnabled: true,
  },
]

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

const SpotifyIcon = () => (
  <svg
    style={{ marginRight: 8 }}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path
      fill="#151412"
      fillRule="evenodd"
      d="M24.9412865,14.5504561 C19.8897778,11.5505029 11.5574269,11.2746667 6.73515789,12.7382456 C5.96060819,12.9732865 5.1417076,12.5361404 4.90704094,11.7617778 C4.67237427,10.9868538 5.1091462,10.1685146 5.88407018,9.93309942 C11.4196959,8.25281871 20.6220351,8.57730994 26.4374269,12.0293801 C27.1339415,12.4429474 27.3624327,13.3425029 26.949614,14.0378947 C26.5364211,14.7344094 25.636117,14.9640234 24.9412865,14.5504561 Z M24.7758596,18.9937778 C24.4214269,19.5688421 23.6695205,19.7492398 23.0952047,19.396117 C18.8837427,16.8074854 12.461848,16.0574503 7.47939181,17.5698713 C6.83321637,17.7650526 6.15092398,17.4008889 5.95461988,16.7558363 C5.76,16.109848 6.12435088,15.4286784 6.76940351,15.2321871 C12.4610994,13.5049357 19.5368421,14.3414269 24.3738947,17.3140585 C24.9482105,17.6677427 25.1289825,18.4200234 24.7758596,18.9937778 Z M22.8582924,23.2610058 C22.576655,23.7228538 21.9753918,23.8675088 21.5152281,23.5860585 C17.8352281,21.3368889 13.2032749,20.8290058 7.74830409,22.0749474 C7.22264327,22.195462 6.69866667,21.8661053 6.57871345,21.3404444 C6.45838596,20.8149708 6.78661988,20.2909942 7.31340351,20.1710409 C13.2829942,18.8064561 18.4035556,19.3936842 22.5341754,21.9177544 C22.9947135,22.1990175 23.1397427,22.800655 22.8582924,23.2610058 Z M15.6712047,0.657590643 C7.01642105,0.657590643 0,7.67382456 0,16.3286082 C0,24.9843275 7.01642105,32 15.6712047,32 C24.3263626,32 31.3424094,24.9843275 31.3424094,16.3286082 C31.3424094,7.67382456 24.3263626,0.657590643 15.6712047,0.657590643 L15.6712047,0.657590643 Z"
    />
  </svg>
)

const getX = target =>
  target.getBoundingClientRect().x + target.getBoundingClientRect().width / 2

const getY = target =>
  target.getBoundingClientRect().y + target.getBoundingClientRect().height / 2

class MainLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activePage: null }
  }

  componentDidMount() {
    if (this.props.to === window.location.pathname) {
      this.props.onActivePageRecognition(getX(this.element), getY(this.element))
    }
  }

  render() {
    const {
      to,
      children,
      gridRow,
      gridColumn,
      onMouseOver,
      component,
      width,
      height,
      linkEnabled,
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
                paddingBottom: 8,
                color: linkEnabled ? '#000' : '#C3C3C3',
                textDecoration: linkEnabled ? 'underline' : 'line-through',
              }}
              onMouseOver={({ target }) =>
                linkEnabled && onMouseOver(getX(target), getY(target), target)
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

const initialCenterX = window.innerWidth / 2
const initialCenterY = window.innerHeight / 2
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
    }
  }

  componentDidMount() {
    this.setState({ activePage: window.location.pathname }, () => {
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
      this.setState({
        scale: 1,
        top: 0,
        left: 0,
        initialX: 0,
        initialY: 0,
      })
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
    const href = target.href
    const indexOfLastSlash = href.lastIndexOf('/')
    const hoveredLink = `/${href.substring(indexOfLastSlash + 1)}`

    this.setState({ hoveredLink }, () => {
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
    // const { initialX, initialY } = this.state
    // const homePage = '/'
    // const href = target.href
    // const indexOfLastSlash = href.lastIndexOf('/')
    // const hoveredPath = `/${href.substring(indexOfLastSlash + 1)}`
    // if (this.state.activePage === homePage) {
    //   this.setState({
    //     scale: 1,
    //     top: 0,
    //     left: 0,
    //     isHovering: false,
    //   })
    //   return
    // }
    // if (this.state.activePage !== hoveredPath) {
    //   this.setState({
    //     scale: 0.4,
    //     left: initialX,
    //     top: initialY,
    //     isHovering: false,
    //   })
    // }
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
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr auto',
                gridTemplateColumns: '1fr 1.6fr 1fr',
                height: '100vh',
                overflowY: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100vh',
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
                    component={link.component}
                    linkEnabled={link.linkEnabled}
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
                            maxWidth: 540,
                            height: '50vw',
                            maxHeight: 540,
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
                    .component}
                {this.state.activePage &&
                  !this.state.isHovering &&
                  links.find(({ to }) => to === this.state.activePage)
                    .component}
              </div>
              <div
                style={{
                  height: '100vh',
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
                    component={link.component}
                    linkEnabled={link.linkEnabled}
                  >
                    {link.content}
                  </MainLink>
                ))}
              </div>
            </div>
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
