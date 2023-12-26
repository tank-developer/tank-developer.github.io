import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>我是谁 ?</h2>
            <p>
              我是“坦克”{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              我是一个开发者，专注于手机端原生App得开发，也掌握包括Springboot和react的技术。
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              从事互联网行业已有10年，比较熟悉的技术包括，swift、Objective-C、Springboot、react
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                我喜欢
              </p>
              <Typewriter
                options={{
                  strings: [
                    '学习和研究自己未知领域的技术',
                    '编程',
                    '做好的产品',
                    '骑单车',
                    '完美主义的追求',
                    '更多的挑战',
                    '更多经历和成长',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              我的编程生涯始于2015年，开始学习android端技术，后期在网络自学
              解锁了包括iOS、Springboot+react等技术，也自己研发了一些{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                产品。
              </Link>
              包括：溜溜记账、留文、卡卡相机{' '}
            
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>成都, 中国</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
