import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'

const Experience = () => {
  return (
    <Section title="Product">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p style={{ textAlign: 'center' }}>
              如果想了解更多信息请访问{' '}
              <a
                href="https://www.xiaohongshu.com/user/profile/5b7436e270408d000146913e?xhsshare=CopyLink&appuid=5b7436e270408d000146913e&apptime=1703555602"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                小红薯
              </a>
              .
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Experience
