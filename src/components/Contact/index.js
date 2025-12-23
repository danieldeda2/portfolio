import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './index.scss'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return () => clearTimeout(timer)
}, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_58e444m', 'template_1mba6qr', form.current, 'Ys8hgtQa0jAEZEPHu')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in software engineering roles/work - especially on 
            ambitious or large projects. Please contact me below if you have any
            questions or concerns.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" onClick={sendEmail} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Daniel Deda
          <br />

          <br />
          NYC <br />
          New York USA <br />
          <br />
          <span>danieldeda165@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.7826, -73.9656]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.7676, 19.8767]}>
              <Popup>This is where I am from: Mirdita, Albania</Popup>
            </Marker>
            <Marker position={[40.7826, -73.9656]}>
              <Popup>This is where I live: New York City, NY</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact