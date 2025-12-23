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

        <div className="project0">
          <h2>CarQuest</h2>
          <h3><i>Real-Time Vehicle Identification Platform</i></h3>
          <a className='carquest' href="https://carquest.io" rel="noreferrer">carquest.io</a>
          <ul>
            <li>Mobile car-spotting application combining machine learning for vehicle identification with gamified collection mechanics.</li>
            <li>Built custom PyTorch CNN trained on a 250-model dataset collected from scratch, achieving 50%+ validation accuracy with continuous improvement through active learning.</li>
            <li>Engineered production FastAPI backend with MongoDB for scalable data persistence, asynchronous processing, and real-time leaderboards.</li>
            <li>Deployed automated CI/CD pipeline with Docker containerization, model versioning, and confidence thresholding for intelligent fallback architecture.</li>
            <li>Features FIFA-style pack opening animations with 3D card flips, particle effects, and rarity-based progression systems for engaging user experience.</li>
          </ul>
        </div>

        <div className="project1">
          <h2>CompuCar</h2>
          <h3><i>Artificially-Intelligent Car Recommendation System</i></h3>
          <a className='compucar' href="https://compucar.io" rel="noreferrer">compucar.io</a>
          <ul>
            <li>Car recommendation service that asks users 16 general car/psychological questions and recommends them 10 cars based off of their answers.</li>
            <li>Implements K-Nearest Neighbors (KNN) machine-learning algorithm to take a 16-dimensional input vector from the user and calculate the K closest 16-dimensional vectors from our database with over 450 cars (for us, K=10).</li>
            <li>Designed and deployed custom API in Python with FastAPI that receives a 16-dimensional vector and returns 10 of the most closely-resembling vectors from our CompuCar database.</li>
            <li>Over 250k monthly users! From time to time I am adding more vehicles and improving the ML algorithm for more accurate car recommendations.</li>
          </ul>
        </div>

        <div className="project2">
          <h2>Spotify Guess</h2>
          <h3><i>Trivia Game + Spotify Wrapped App</i></h3>
          <p className='spotify-guess'>Website will be back up soon</p>
          <ul>
            <li>A trivia game where users answer general questions about their favorite Spotify artists/tracks.</li>
            <li>Also allows users to view data that Spotify doesn't normally show them (such as their most listened-to tracks/artists).</li>
            <li>Architected and deployed back-end API with ExpressJS and DigitalOcean specifically for the trivia feature.</li>
            <li>Authenticates and interacts with Spotify's Web API and OpenAI's ChatGPT API for data posting/pulling.</li>
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