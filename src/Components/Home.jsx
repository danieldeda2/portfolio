import React, { useEffect, useState, useRef } from 'react';
import './Home.css';

function Home() {
  const cursorRef = useRef(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 2000);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      icon: '🚗',
      name: 'CarQuest',
      description: 'AI-powered car spotting app with gamified mechanics',
      link: 'https://carquest.io',
      stats: 'Car Spotting + ML',
      tech: ['React', 'PyTorch', 'FastAPI', 'AWS', 'MongoDB']
    },
    {
      icon: '🎯',
      name: 'CompuCar',
      description: 'AI car recommendation system using KNN algorithm',
      link: 'https://compucar.cc',
      stats: '250k+ Monthly Users',
      tech: ['Python', 'FastAPI', 'k-NN', 'React']
    },
    {
      icon: '🎵',
      name: 'Spotify Guess',
      description: 'Trivia game + enhanced Spotify Wrapped experience',
      link: '#',
      stats: 'Coming Soon',
      tech: ['React', 'Express.js', 'Spotify API', 'OpenAI']
    },
    {
      icon: '🏎️',
      name: 'Pegasus Rentals',
      description: 'Custom website for NYC\'s premier car rental company',
      link: 'https://rentpegasus.com',
      stats: 'Production',
      tech: ['React', 'EmailJS', 'Reservation Engine']
    }
  ];

  const skills = {
    frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Next.js'],
    backend: ['Python', 'FastAPI', 'Express.js', 'Node.js', 'MongoDB'],
    ml: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'AWS Rekognition', 'OpenAI API'],
    tools: ['Git', 'AWS', 'DigitalOcean', 'Cloudflare', 'Docker']
  };

  return (
    <div className="home">
      <div className="custom-cursor" ref={cursorRef} />

      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className={`name ${isGlitching ? 'glitch' : ''}`} data-text="DANIEL DEDA">
            DANIEL DEDA
          </h1>
          
          <div className="subtitle-container">
            <p className="subtitle typewriter">
              Full-Stack Developer & ML Engineer
            </p>
          </div>

          <p className="tagline">
            Building production-grade applications that break the internet
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="cta-primary">
              <span>View Projects</span>
              <div className="holographic-border"></div>
            </a>
            <a href="#contact" className="cta-secondary">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">Production-grade applications with real-world impact</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-glow"></div>
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-stats">{project.stats}</div>
                </div>
                
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-pills">
                  {project.tech.map((tech, i) => (
                    <span className="pill" key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-link-arrow">
                  <span>View Project</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p className="about-description">
                I'm a full-stack developer and ML engineer passionate about creating polished, 
                production-grade applications that combine cutting-edge technology with exceptional user experiences.
              </p>
              <p className="about-description">
                With a focus on building scalable systems and implementing machine learning solutions, 
                I've developed applications serving hundreds of thousands of users. My work spans from 
                AI-powered mobile apps to sophisticated web platforms, always prioritizing clean code, 
                modern design, and real-world impact.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">250k+</div>
                  <div className="stat-label">Monthly Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Production Apps</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%+</div>
                  <div className="stat-label">ML Accuracy</div>
                </div>
              </div>
            </div>

            <div className="skills-showcase">
              <div className="skills-grid">
                <div className="skill-category">
                  <div className="category-icon">⚛️</div>
                  <h3 className="category-title">Frontend</h3>
                  <div className="skill-tags">
                    {skills.frontend.map((skill, i) => (
                      <span className="skill-tag" key={i}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <div className="category-icon">⚙️</div>
                  <h3 className="category-title">Backend</h3>
                  <div className="skill-tags">
                    {skills.backend.map((skill, i) => (
                      <span className="skill-tag" key={i}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <div className="category-icon">🤖</div>
                  <h3 className="category-title">Machine Learning</h3>
                  <div className="skill-tags">
                    {skills.ml.map((skill, i) => (
                      <span className="skill-tag" key={i}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <div className="category-icon">🛠️</div>
                  <h3 className="category-title">Tools & Cloud</h3>
                  <div className="skill-tags">
                    {skills.tools.map((skill, i) => (
                      <span className="skill-tag" key={i}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="section-title">Let's Build Something</h2>
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="contact-grid">
              {/* Left side - Contact Cards */}
              <div className="contact-methods">
                <a href="mailto:danieldeda165@gmail.com" className="contact-card">
                  <div className="card-glow"></div>
                  <div className="contact-icon">📧</div>
                  <h3>Email</h3>
                  <p>danieldeda165@gmail.com</p>
                </a>

                <a href="https://github.com/danieldeda2" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="card-glow"></div>
                  <div className="contact-icon">💻</div>
                  <h3>GitHub</h3>
                  <p>@danieldeda2</p>
                </a>

                <a href="https://linkedin.com/in/daniel-deda795" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <div className="card-glow"></div>
                  <div className="contact-icon">💼</div>
                  <h3>LinkedIn</h3>
                  <p>/in/daniel-deda795</p>
                </a>

                
              </div>

              {/* Right side - Interactive Map */}
              <div className="map-container">
                <div className="map-card">
                  <div className="card-glow"></div>
                  <div className="map-header">
                    <div className="location-ping"></div>
                    <h3 className="map-title">Based in New York City</h3>
                  </div>
                  
                  <div className="holographic-map">
                    <svg viewBox="0 0 400 400" className="map-svg">
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                        </pattern>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: 0.3}} />
                          <stop offset="50%" style={{stopColor: '#ff00ff', stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: '#00ffff', stopOpacity: 0.3}} />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      <rect width="400" height="400" fill="url(#grid)" />
                      
                      {/* Accurate Manhattan outline */}
                      <path 
                        className="map-outline"
                        d="M 200 50
                           L 205 55
                           L 208 60
                           L 210 70
                           L 212 80
                           L 215 95
                           L 217 110
                           L 220 130
                           L 222 150
                           L 224 170
                           L 226 190
                           L 228 210
                           L 230 230
                           L 232 250
                           L 233 270
                           L 234 290
                           L 233 310
                           L 230 325
                           L 225 335
                           L 220 342
                           L 215 348
                           L 210 352
                           L 205 355
                           L 200 357
                           L 195 358
                           L 190 357
                           L 185 355
                           L 180 352
                           L 175 348
                           L 170 342
                           L 165 335
                           L 162 325
                           L 160 310
                           L 159 290
                           L 158 270
                           L 159 250
                           L 161 230
                           L 163 210
                           L 165 190
                           L 167 170
                           L 169 150
                           L 171 130
                           L 173 110
                           L 175 95
                           L 178 80
                           L 182 70
                           L 185 60
                           L 190 55
                           L 195 50
                           Z" 
                        fill="url(#mapGradient)"
                        stroke="rgba(0, 255, 255, 0.6)"
                        strokeWidth="2"
                        filter="url(#glow)"
                      />
                      
                      {/* Battery Park (southern tip bulge) */}
                      <path 
                        className="map-outline"
                        d="M 195 358
                           L 200 360
                           L 205 358
                           C 207 356, 207 354, 205 352
                           L 200 350
                           L 195 352
                           C 193 354, 193 356, 195 358
                           Z"
                        fill="url(#mapGradient)"
                        stroke="rgba(0, 255, 255, 0.6)"
                        strokeWidth="1.5"
                        filter="url(#glow)"
                      />
                      
                      {/* Inwood/Washington Heights (northern tip) */}
                      <path 
                        className="map-outline"
                        d="M 195 50
                           L 200 45
                           L 205 50
                           C 206 52, 206 54, 205 55
                           L 200 53
                           L 195 55
                           C 194 54, 194 52, 195 50
                           Z"
                        fill="url(#mapGradient)"
                        stroke="rgba(0, 255, 255, 0.6)"
                        strokeWidth="1.5"
                        filter="url(#glow)"
                      />
                      
                      {/* Pulsing location marker - Midtown */}
                      <circle className="location-marker" cx="200" cy="200" r="8" fill="#00ffff" filter="url(#glow)" />
                      <circle className="location-pulse" cx="200" cy="200" r="8" fill="none" stroke="#00ffff" strokeWidth="2" />
                      <circle className="location-pulse-2" cx="200" cy="200" r="8" fill="none" stroke="#ff00ff" strokeWidth="2" />
                      
                      {/* Scan lines effect */}
                      <g className="scan-lines">
                        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(0,255,255,0.2)" strokeWidth="1"/>
                        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,0,255,0.2)" strokeWidth="1"/>
                        <line x1="0" y1="300" x2="400" y2="300" stroke="rgba(0,255,255,0.2)" strokeWidth="1"/>
                      </g>

                      {/* Coordinate lines */}
                      <text x="30" y="30" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">40.7128°N</text>
                      <text x="30" y="370" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">74.0060°W</text>
                      
                      {/* Optional: Add major landmarks as small dots */}
                      <circle cx="200" cy="150" r="2" fill="rgba(255,255,255,0.4)" /> {/* Central Park */}
                      <circle cx="198" cy="280" r="2" fill="rgba(255,255,255,0.4)" /> {/* Financial District */}
                    </svg>
                    
                    <div className="map-overlay">
                      <div className="coordinate-display">
                        <span className="coord-label">LAT:</span>
                        <span className="coord-value">40.7128°N</span>
                      </div>
                      <div className="coordinate-display">
                        <span className="coord-label">LONG:</span>
                        <span className="coord-value">74.0060°W</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="map-footer">
                    <div className="timezone-info">
                      <span className="info-label">EST (UTC-5)</span>
                    </div>
                    <div className="status-indicator">
                      <div className="status-dot"></div>
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>© 2026 Daniel Deda</p>
        </footer>
      </section>
    </div>
  );
}

export default Home;