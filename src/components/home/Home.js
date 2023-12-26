import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/matt.png'
import linkedin from '../../images/social/linkedin.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, 这里是 <span className="name">Tesles工作室</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    '这里有一群喜欢写代码的开发者.',
                    '也有很多善于思考的产品经理.',
                    '更有一些很有美感的设计师.',
                    '一群有责任感的人在做自己的产品.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.xiaohongshu.com/user/profile/5b7436e270408d000146913e?xhsshare=CopyLink&appuid=5b7436e270408d000146913e&apptime=1703555602"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />

                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
