import React from 'react'
import ReactPlayer from 'react-player'
import { Transition } from 'react-spring'

import phone from '../images/phone.png'
import thumb from '../images/thumb.png'
import handWithoutThumb from '../images/hand-without-thumb.png'
import video from '../videos/video.mp4'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ playing: true })
    }, 500)
  }

  render() {
    return (
      <Transition
        from={{ opacity: 0, transform: 'translateY(50%) rotate(-45deg)' }}
        enter={{ opacity: 1, transform: 'translateY(0%) rotate(0deg)' }}
      >
        {item => props => (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              ...props,
            }}
          >
            <img
              src={handWithoutThumb}
              style={{
                width: '100%',
                maxWidth: 560,
                pointerEvents: 'none',
                position: 'absolute',
                top: '58%',
                left: '59%',
                transform: 'translate(-50%, -50%)',
                // backgroundColor: 'blue',
              }}
            />
            <div
              style={{
                width: '100%',
                maxWidth: 560,
                // pointerEvents: 'none',
                position: 'relative',
                position: 'relative',
                top: '58%',
                left: '59%',
                transform: 'translate(-50%, -50%)',
                // width: '100%',
                // height: '100%',
              }}
            >
              <img
                src={thumb}
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: 560,
                  opacity: 0,
                  // backgroundColor: 'red',
                  // opacity: 0.5,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  // backgroundColor: 'plum',
                }}
              >
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url={video}
                    playing={this.state.playing}
                    // playing
                    muted
                    width="auto"
                    height="100%"
                    controls
                    // style={{ width: 'auto' }}
                  />
                </div>
              </div>
            </div>
            <img
              src={phone}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: 560,
                pointerEvents: 'none',
                position: 'absolute',
                top: '58%',
                left: '59%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src={thumb}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: 560,
                pointerEvents: 'none',
                position: 'absolute',
                top: '58%',
                left: '59%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
      </Transition>
    )
  }
}

export default Home
