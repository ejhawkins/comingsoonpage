import React, { useState, useEffect } from 'react';
import './App.css';
import PortfolioSelection from './PortfolioSelection.jsx';
import FashionSelection from './FashionSelection.jsx';
import VisionBoard from './VisionBoard.jsx';
import Moodboard from './Moodboard.jsx';
import logoPlaceholder from './images/ericahawkins_logo.png';


function App() {
  const [isTan, setIsTan] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'portfolio'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleBackground = () => {
    setIsTan(!isTan);
  };

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
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
          {/* Logo placeholder on the left */}
          <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px' }}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}
              style={{ display: 'inline-block', textDecoration: 'none' }}
              aria-label="Go to Projects"
            >
              <img src={logoPlaceholder} alt="Logo" style={{ height: 36, width: 'auto' }} />
            </a>
          </div>
          <button id="toggleButtonmobile" onClick={toggleBackground} style={{
            color: isTan ? '#333' : '#fff',
            border: `1px solid ${isTan ? '#333' : '#fff'}`
          }}>
            {isTan ? 'Rosy Shades' : 'Down to Earth'}
          </button>
          
          {/* Mobile Hamburger Menu */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              color: isTan ? '#333' : '#fff',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '10px',
              display: 'none' // Will show on mobile via CSS
            }}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <nav className={`main-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              {/* Projects moved to top */}
              <li>
                <button
                  onClick={() => handleNavClick('portfolio')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ color: isTan ? '#333' : '#fff' }}>Projects</div>
                  <div>
                    <p style={{ color: isTan ? '#333' : '#fff' }}>
                      <span style={{ color: isTan ? '#333' : '#fff' }}>Selected</span> Works
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ color: isTan ? '#333' : '#fff' }}>Fashion</div>
                  <div>
                    <p style={{ color: isTan ? '#333' : '#fff' }}>
                        <span style={{ color: isTan ? '#333' : '#fff' }}>PROJECTS</span> AND MORE
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left'
                   }}
                 >
                   <div style={{ color: isTan ? '#333' : '#fff' }}>Vision</div>
                   <div>
                     <p style={{ color: isTan ? '#333' : '#fff' }}>
                       <span style={{ color: isTan ? '#333' : '#fff' }}>Inspiration</span>Board
                     </p>
                   </div>
                 </button>
               </li>
               <li>
                 <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left'
                   }}
                 >
                   <div style={{ color: isTan ? '#333' : '#fff' }}>Materials</div>
                   <div>
                     <p style={{ color: isTan ? '#333' : '#fff' }}>
                       <span style={{ color: isTan ? '#333' : '#fff' }}>Inspiration</span>Board
                     </p>
                   </div>
                 </button>
               </li>
               {/* New Zines item inserted after Materials */}
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left'
                   }}
                 >
                   <div style={{ color: isTan ? '#333' : '#fff' }}>Zines</div>
                   <div>
                     <p style={{ color: isTan ? '#333' : '#fff' }}>
                       <span style={{ color: isTan ? '#333' : '#fff' }}>Editorial</span>Showcase
                     </p>
                   </div>
                 </button>
               </li>
                 <li>
                    <button
                        onClick={() => {}}
                        aria-disabled="true"
                        tabIndex={-1}
                         style={{
                             background: 'none',
                             border: 'none',
                             padding: 0,
                             cursor: 'pointer',
                             textDecoration: 'none',
                             width: '100%',
                             textAlign: 'left'
                         }}
                     >
                         <div style={{ color: isTan ? '#333' : '#fff' }}>CatwalkFM</div>
                         <div>
                             <p style={{ color: isTan ? '#333' : '#fff' }}>
                                 <span style={{ color: isTan ? '#333' : '#fff' }}>PROJECTS</span> AND MORE
                             </p>
                         </div>
                     </button>
                 </li>
                 <li>
                    <button
                        onClick={() => {}}
                        aria-disabled="true"
                        tabIndex={-1}
                         style={{
                             background: 'none',
                             border: 'none',
                             padding: 0,
                             cursor: 'pointer',
                             textDecoration: 'none',
                             width: '100%',
                             textAlign: 'left'
                         }}
                     >
                         <div style={{ color: isTan ? '#333' : '#fff' }}>Sketchbook</div>
                         <div>
                             <p style={{ color: isTan ? '#333' : '#fff' }}>
                                 <span style={{ color: isTan ? '#333' : '#fff' }}>PROJECTS</span> AND MORE
                             </p>
                         </div>
                     </button>
                 </li>
               {/* contact nav item removed */}
               </ul>
           </nav>

           <nav className="main-menu-mobile">
             <ul>
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left',
                     color: isTan ? '#333' : '#fff'
                   }}
                 >
                   Vision
                 </button>
               </li>
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left',
                     color: isTan ? '#333' : '#fff'
                   }}
                 >
                   Materials
                 </button>
               </li>
               <li>
                 <div style={{ color: isTan ? '#333' : '#fff' }}>Zines</div>
               </li>
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left',
                     color: isTan ? '#333' : '#fff'
                   }}
                 >
                   CatwalkFM
                 </button>
               </li>
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left',
                     color: isTan ? '#333' : '#fff'
                   }}
                 >
                   Sketchbook
                 </button>
               </li>
               <li>
                <button
                  onClick={() => {}}
                  aria-disabled="true"
                  tabIndex={-1}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'default',
                    textDecoration: 'none',
                    width: '100%',
                    textAlign: 'left',
                    color: isTan ? '#333' : '#fff',
                    display: 'block'
                  }}
                >
                  Contact
                </button>
               </li>
               <li>
                 <button
                   onClick={() => setCurrentView('portfolio')}
                   style={{
                     background: 'none',
                     border: 'none',
                     padding: 0,
                     cursor: 'pointer',
                     textDecoration: 'none',
                     width: '100%',
                     textAlign: 'left',
                     color: isTan ? '#333' : '#fff'
                   }}
                 >
                   Projects
                 </button>
               </li>
             </ul>
           </nav>

           {/* Mobile Navigation Overlay */}
           <div
             className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
             onClick={(e) => {
               // Close menu when clicking outside the nav menu
               if (e.target.classList.contains('mobile-nav-overlay')) {
                 setIsMobileMenuOpen(false);
               }
             }}
           >
             <div className="mobile-nav-menu">
              <button onClick={() => handleNavClick('')}>
                Fashion
              </button>
              <button onClick={() => {}} aria-disabled="true" tabIndex={-1} style={{ cursor: 'default' }}>
                Work
              </button>
               <button onClick={() => {}} aria-disabled="true" tabIndex={-1}>
                 Vision Board
               </button>
               <button onClick={() => {}} aria-disabled="true" tabIndex={-1}>
                 Materials
               </button>
               <button onClick={() => {}} aria-disabled="true" tabIndex={-1}>
                 Zines
               </button>
             </div>
           </div>
         </div>
       </header>

      <main>
        <div className="background-toggle">
          <button id="toggleButton" onClick={toggleBackground} style={{ color: isTan ? '#333' : '#fff', border: `1px solid ${isTan ? '#333' : '#fff'}` }}>
            {isTan ? 'Rosy Shades' : 'Down to Earth'}
          </button>
        </div>
        {currentView === 'home' ? (
          <FashionSelection />
        ) : currentView === 'portfolio' ? (
          <PortfolioSelection onBackToHome={() => setCurrentView('home')} />
        ) : currentView === 'visionboard' ? (
          <VisionBoard />
        ) : currentView === 'moodboard' ? (
          <Moodboard />
        ) : (
          <FashionSelection />
        )}
      </main>
    </div>
  );
}

export default App;
