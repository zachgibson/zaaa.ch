import React from 'react'
import { Link } from 'gatsby'
import ReactPlayer from 'react-player'
import TrackVisibility from 'react-on-screen'

import iPhoneXs from '../images/iPhone-Xs.png'
import nikeParallaxCards from '../videos/nike-parallax-cards.mp4'
import balllr from '../videos/balllr.mp4'
import masterClass from '../videos/master-class.mp4'
import gooeySlider from '../videos/gooey-slider.mp4'
import reanimatedBubbles from '../videos/reanimated-bubbles.mp4'
import masterClassImage from '../images/master-class.jpeg'
import balllrImage from '../images/balllr.jpeg'
import nikeParallaxCardsImage from '../images/nike-parallax-cards.jpeg'

const IPhoneVideo = ({ src, posterImageSrc }) => (
  <TrackVisibility offset={638 / 2} throttleInterval={750}>
    {({ isVisible }) => (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'relative',
              top: '3.3%',
              left: '7.5%',
              paddingTop: '184.5%',
            }}
          >
            <ReactPlayer
              className="react-player"
              url={src}
              playing={isVisible}
              muted
              loop
              width="auto"
              height="100%"
              controls
              config={{
                file: {
                  attributes: {
                    poster: posterImageSrc,
                  },
                },
              }}
            />
          </div>
        </div>
        <img
          style={{
            // opacity: 0.5,
            position: 'relative',
            maxWidth: 320,
            pointerEvents: 'none',
          }}
          src={iPhoneXs}
        />
      </div>
    )}
  </TrackVisibility>
)

const Work = () => (
  <>
    <div
      style={{ display: 'flex', justifyContent: 'space-between', padding: 24 }}
    >
      <Link
        to="/"
        style={{
          fontSize: 24,
        }}
      >
        ← Back Home
      </Link>
      <Link
        to="/"
        style={{
          paddingTop: 8,
          paddingLeft: 4,
          paddingBottom: 8,
          paddingRight: 4,
          textDecoration: 'none',
          border: '1px dashed #000',
          fontSize: 24,
        }}
      >
        zaaa.ch
      </Link>
      <Link
        to="/experiments"
        style={{
          fontSize: 24,
        }}
      >
        Experiments →
      </Link>
    </div>

    <div
      style={{
        width: '100%',
        maxWidth: 1440,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 80,
        paddingLeft: 24,
        paddingBottom: 80,
        paddingRight: 24,
        display: 'grid',
        grid: 'auto-flow dense / repeat(2, 50%)',
        placeItems: 'center',
      }}
    >
      <IPhoneVideo src={masterClass} posterImageSrc={masterClassImage} />
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3 }}>
          This was a re-creation I did of the{' '}
          <a style={{ color: '#000' }} href="#">
            iOS Master Class app
          </a>
          . Lorem Khaled Ipsum is a major key to success. Watch your back, but
          more importantly when you get out the shower, dry your back, it’s a
          cold world out there.
        </p>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          GitHub
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Expo Snack
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Share on Twitter
        </a>
      </div>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3 }}>
          Lorem Khaled Ipsum is a major key to success. Watch your back, but
          more importantly when you get out the shower, dry your back, it’s a
          cold world out there. They key is to have every key, the key to open
          every door. Life is what you make it, so let’s make it. We don’t see
          them, we will never see them.
        </p>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          GitHub
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Expo
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Share on Twitter
        </a>
      </div>
      <IPhoneVideo src={balllr} posterImageSrc={balllrImage} />
      <IPhoneVideo
        src={nikeParallaxCards}
        posterImageSrc={nikeParallaxCardsImage}
      />
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3 }}>
          Lorem Khaled Ipsum is a major key to success. Watch your back, but
          more importantly when you get out the shower, dry your back, it’s a
          cold world out there. They key is to have every key, the key to open
          every door. Life is what you make it, so let’s make it. We don’t see
          them, we will never see them.
        </p>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          App Store
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Share on Twitter
        </a>
      </div>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3 }}>
          Lorem Khaled Ipsum is a major key to success. Watch your back, but
          more importantly when you get out the shower, dry your back, it’s a
          cold world out there. They key is to have every key, the key to open
          every door. Life is what you make it, so let’s make it. We don’t see
          them, we will never see them.
        </p>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          App Store
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Share on Twitter
        </a>
      </div>
      <IPhoneVideo src={reanimatedBubbles} />
      <IPhoneVideo src={gooeySlider} />
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3 }}>
          Lorem Khaled Ipsum is a major key to success. Watch your back, but
          more importantly when you get out the shower, dry your back, it’s a
          cold world out there. They key is to have every key, the key to open
          every door. Life is what you make it, so let’s make it. We don’t see
          them, we will never see them.
        </p>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          App Store
        </a>
        <span style={{ marginLeft: 16, marginRight: 16 }}></span>
        <a style={{ fontSize: 24, color: '#000' }} href="#">
          Share on Twitter
        </a>
      </div>
    </div>
  </>
)

export default Work

// <div
//       style={{
//         display: 'inline-block',
//         marginTop: 120,
//         marginBottom: 120,
//         paddingTop: 40,
//         paddingLeft: 16,
//         paddingBottom: 40,
//         paddingRight: 16,
//         position: 'relative',
//         zIndex: -1,
//         // transform: 'rotate(-15deg)',
//         fontSize: '10vw',
//         lineHeight: 1,
//         border: '1px dashed #000',
//         color: 'transparent',
//         WebkitTextStroke: '3px #000',
//       }}
//     >
//       Featured Work
//     </div>
