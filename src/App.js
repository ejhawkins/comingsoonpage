
import React, { useState, useEffect } from 'react';
import './App.css';
import PortfolioSelection from './PortfolioSelection.jsx';
import PortfolioIndex from './PortfolioIndex.jsx';
import FashionSelection from './FashionSelection.jsx';


function App() {
  const [isTan, setIsTan] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'portfolio'

  const toggleBackground = () => {
    setIsTan(!isTan);
  };

  // Handle scroll progress and sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: isTan ? '#D7D4C9' : '#EF5DA8', color: isTan ? '#333' : '#FFFFFF' }}>
      {/* Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="progress-fill" 
          style={{ 
            width: `${scrollProgress}%`,
            background: isTan ? '#ef5da8' : '#fff'
          }}
        />
      </div>

      {/* Sticky Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} style={{
        background: isScrolled 
          ? (isTan ? 'rgba(215, 212, 201, 0.95)' : 'rgba(239, 93, 168, 0.95)')
          : 'transparent'
      }}>
        <div className="header-content">
          <button id="toggleButtonmobile" onClick={toggleBackground} style={{
            color: isTan ? '#333' : '#fff',
            border: `1px solid ${isTan ? '#333' : '#fff'}`
          }}>
            {isTan ? 'Rosy Shades' : 'Down to Earth'}
          </button>
          
          <nav className="main-menu">
            <ul>
              <li>
                <ul>
                  <button 
                    onClick={() => setCurrentView('')}
                    style={{ 
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}
                  >
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Fashion</li>
                    <li>
                      <p style={{ color: isTan ? '#333' : '#fff' }}>
                        <span style={{ color: isTan ? '#333' : '#fff' }}>PROJECTS</span> AND MORE
                      </p>
                    </li>
                  </button>
                </ul>
              </li>
              <li>
                <ul>
                  <button 
                    onClick={() => setCurrentView('portfolio')}
                    style={{ 
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}
                  >
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Work</li>
                    <li>
                      <p style={{ color: isTan ? '#333' : '#fff' }}>
                        <span style={{ color: isTan ? '#333' : '#fff' }}>Projects</span>Done
                      </p>
                    </li>
                  </button>
                </ul>
              </li>
              <li>
                <ul>
                  <a href="https://www.28thblvd.com">
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Zine</li>
                    <li>
                      <p className="fangirl" style={{ color: isTan ? '#333' : '#fff' }}>
                        <span style={{ color: isTan ? '#333' : '#fff' }}>Fan</span>girl
                      </p>
                    </li>
                  </a>
                </ul>
              </li>
              <li>
                <ul className="contact">
                  <a href="mailto:ericajhawkins@gmail.com">
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Contact</li>
                    <li>
                      <p style={{ color: isTan ? '#333' : '#fff' }}>
                        <span style={{ color: isTan ? '#333' : '#fff' }}>Reach Out</span> To Me!
                      </p>
                    </li>
                  </a>
                </ul>
              </li>
            </ul>
          </nav>
          
          <nav className="main-menu-mobile">
            <ul>
              <li>
                <ul>
                  <a href="https://www.28thblvd.com">
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Zine</li>
                  </a>
                </ul>
              </li>
              <li>
                <ul>
                  <a href="mailto:ericajhawkins@gmail.com">
                    <li style={{ color: isTan ? '#333' : '#fff' }}>Contact</li>
                  </a>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="background-toggle">
          <button id="toggleButton" onClick={toggleBackground} style={{ color: isTan ? '#333' : '#fff', border: `1px solid ${isTan ? '#333' : '#fff'}` }}>
            {isTan ? 'Rosy Shades' : 'Down to Earth'}
          </button>
        </div>
        {currentView === 'home' ? <FashionSelection /> : <PortfolioSelection onBackToHome={() => setCurrentView('home')} />}
      </main>
    </div>
  );
}

export default App;

