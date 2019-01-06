import React from 'react'

import phone from '../images/phone.png'
import thumb from '../images/thumb.png'
import handWithoutThumb from '../images/hand-without-thumb.png'

const Home = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      // overflow: 'auto',
      // paddingTop: 240,
    }}
  >
    <img
      src={handWithoutThumb}
      style={{
        width: '100%',
        maxWidth: 560,
        position: 'absolute',
        top: '58%',
        left: '59%',
        transform: 'translate(-50%, -50%)',
      }}
    />
    <img
      src={phone}
      style={{
        width: '100%',
        maxWidth: 560,
        position: 'absolute',
        top: '58%',
        left: '59%',
        transform: 'translate(-50%, -50%)',
      }}
    />
    <img
      src={thumb}
      style={{
        width: '100%',
        maxWidth: 560,
        position: 'absolute',
        top: '58%',
        left: '59%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </div>
)

export default Home
