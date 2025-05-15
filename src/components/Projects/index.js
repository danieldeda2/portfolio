import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return () => clearTimeout(timer)
}, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-z">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>

        <div className="project1">

            <h2>CompuCar</h2>
            <h3><i>Artificially-Intelligent Car Recommendation System</i></h3>
            <a className='compucar' href="https://compucar.io" rel="noreferrer">compucar.io</a>

            <ul>
                <li>Car recommendation service that asks users 16 general car/psychological questions and recommends them 10 cars based off of their answers.</li>
                <li>Implements K-Nearest Neighbors (KNN) machine-learning algorithm to take a 16-dimensional input vector from the user and calculate the K closest 16-dimensional vectors from our database with over 450 cars (for us, K=10).</li>
                <li>Designed and deployed custom API in Python with FastAPI that receives a 16-dimensional vector and returns 10 of the most closely-resembling vectors from our CompuCar database.</li>
                <li>Over 200k streams in the first month of release! From time to time I am adding more vehicles and improving the ML algorithm for more accurate car recommendations. </li>
            </ul>

        </div>

        <div className="project2">

            <h2>Spotify Guess</h2>
            <h3><i>Trivia Game + Spotify Wrapped App</i></h3>
            <a className='spotify-guess' href="https://spotify-guess.com" rel="noreferrer">spotify-guess.com</a>

            <ul>
                <li>A trivia game where users answer general questions about their favorite Spotify artists/tracks.</li>
                <li>Also allows users to view data that Spotify doesn’t normally show them (such as their most listened-to tracks/artists).</li>
                <li>Architected and deployed back-end API with ExpressJS and DigitalOcean specifically for the trivia feature.</li>
                <li>Authenticates and interacts with Spotify’s Web API and OpenAI’s ChatGPT API for data posting/pulling.</li>
                <li>Developed entirely with React, Spotify Guess is optimized for mobile but also works well on desktops.</li>
            </ul>

        </div>

        <div className="project3">

            <h2>Pegasus Rentals</h2>
            <h3><i>Car Rental Website</i></h3>
            <a className='pegrent' href="https://rentpegasus.com" rel="noreferrer">rentpegasus.com</a>

            <ul>
                <li>Custom website for one of NYC's top car rental companies developed completely from scratch using React.</li>
                <li>Implements EmailJS (backend technology) to send emails to business owner when a user wants to book a car or check availability.</li>
                <li>Optimized for mobile usage as well as desktop, with animations and effects to enhance aesthetics.</li>
            </ul>

        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
