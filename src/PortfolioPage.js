import React, { useState } from 'react';
import { ReactComponent as nameHeadlinevanilla } from './images/NameHeadline-ejh.svg';


function App() {
  const [isTan, setIsTan] = useState(true);

  const toggleBackground = () => {
    setIsTan(!isTan);
  };

  return (
    <div className="App" style={{ backgroundColor: isTan ? '#D7D4C9' : '#EF5DA8', color: isTan ? '#333' : '#fff' }}>
      <header>
        <button id="toggleButtonmobile" style={{ marginBottom: '10%' }} onClick={toggleBackground}>
          {isTan ? 'Rosy Shades' : 'Down to Earth'}
        </button>
        <nav className="main-menu">
          <ul>
            <li>
              <ul>
                <a href="https://www.28thblvd.com">
                  <li>Zine</li>
                  <li>
                    <p className="fangirl">
                      <span>Fan</span>girl
                    </p>
                  </li>
                </a>
              </ul>
            </li>
            <li>
              <ul className="contact">
                <a href="mailto:ericajhawkins@gmail.com">
                  <li>Contact</li>
                  <li>
                    <p>
                      <span>Reach Out</span> To Me!
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
                  <li>Zine</li>
                </a>
              </ul>
            </li>
            <li>
              <ul>
                <a href="mailto:ericajhawkins@gmail.com">
                  <li>Contact</li>
                </a>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="profile">
          <div className="headline">
          <nameHeadlinevanilla />
            <img id="headlineImg" src={isTan ? {nameHeadlinevanilla} : 'images/NameHeadline-ejh-strawberry.svg'} width="100%" alt="Name Headline" />
          </div>
        </div>
        <div className="background-toggle">
          <button id="toggleButton" onClick={toggleBackground} style={{ color: isTan ? '#333' : '#fff', border: `1px solid ${isTan ? '#333' : '#fff'}` }}>
            {isTan ? 'Rosy Shades' : 'Down to Earth'}
          </button>
        </div>
      </main>

      <footer style={{ display: 'inline' }}>
        <div className="break" style={{ textAlign: 'left' }}>
          <img id="breakImg" src={isTan ? 'images/break.svg' : 'images/break-pink.svg'} width="10%" alt="Break My Site Coming Soon" />
        </div>
        <ul style={{ justifyContent: 'space-around' }}>
          <a href="https://ericaandthemachine.com">
            <li>Process Book</li>
          </a>
          <a href="https://www.instagram.com/ericaj.online">
            <li>Instagram</li>
          </a>
          <a href="https://github.com/ejhawkins">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/ericajhawkins/">
            <li>LinkedIn</li>
          </a>
          <a href="https://x.com/Erica__j">
            <li>X</li>
          </a>
          <a href="https://www.facebook.com/erica.j.hawkins.3">
            <li>Facebook</li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default App;
