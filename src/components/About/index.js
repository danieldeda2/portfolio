import React from 'react'
import { useEffect, useState } from 'react'
import {
  faJava,
  faPython,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return () => clearTimeout(timer)
}, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full-stack developer looking for a role in a
            software company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quite confident, naturally curious, and continuously working on
            sharpening my skill set one framework/language to stay up-to-date.
          </p>
          <p>
            If I need to define myself in one word it would be curious. I just
            have to know how something fundamentally works because it irks me if
            I don't. I have a keen eye for detail and perfection, and I won't stop
            until I develop the product to my standards, which are extremely high!
          </p>
          <p>I have extensive professional experience in:</p>
          <ul>
            <li>Java</li>
            <li>JavaScript</li> 
            <li>Python</li>   
            <li>C/C++</li>    
            <li>SQL</li>    
            <li>React</li>
            <li>Node.js/Express.js</li>
            <li>Full-Stack Development (Frontend + Backend)</li>
            <li>Linux</li>
            <li>Computer Architecture</li>
            <li>Embedded Systems</li>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
