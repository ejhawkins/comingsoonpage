import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Vue, TypeScript, Modern JavaScript"
    },
    {
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping"
    },
    {
      title: "Animations",
      description: "GSAP, CSS Animations, Micro-interactions"
    },
    {
      title: "Performance",
      description: "Optimization, SEO, Accessibility"
    }
  ];

  const awards = [
    {
      title: "Site of the Day (5x)",
      organization: "Awwwards"
    },
    {
      title: "Honorable Mention (10x)",
      organization: "Awwwards"
    },
    {
      title: "Featured Developer",
      organization: "CSS Design Awards"
    },
    {
      title: "Innovation Award",
      organization: "The FWA"
    }
  ];

  const contactLinks = [
    {
      text: "Say Hello",
      href: "mailto:hello@johndoe.com"
    },
    {
      text: "View Portfolio",
      href: "#portfolio"
    },
    {
      text: "Download CV",
      href: "#cv"
    }
  ];

  return (
    <div className="about-container">
      {/* Left Column - 40% */}
      <div className="left-column">
        <div className="profile-section">

          <h1 className="name">Erica Hawkins</h1>
          <p className="title">Quality Assurance Testing Manager & Frontend Developer</p>
          
          <p className="bio">
            I'm a passionate frontend developer with a strong focus on design and user experience. 
            I specialize in creating beautiful, interactive web experiences using modern technologies 
            and best practices.
          </p>
          
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="contact-link"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - 60% */}
      <div className="right-column">
        <div className="content-section">
          <h2 className="section-title">What I Do</h2>
          <p className="content-text">
            I primarily work with custom TypeScript and JavaScript, having developed a well-structured 
            and maintainable frontend architecture over the years. I also have experience with frameworks 
            like Vue and React. I strive to make every project both visually stunning and technically robust.
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-title">{skill.title}</div>
                <div className="skill-desc">{skill.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Experience</h2>
          <p className="content-text">
            With over 8 years in the industry, I've worked with startups and established companies, 
            helping them create digital experiences that engage users and drive business results. 
            My approach combines technical expertise with creative vision.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Awards & Recognition</h2>
          
          <ul className="awards-list">
            {awards.map((award, index) => (
              <li key={index} className="award-item">
                <div className="award-title">{award.title}</div>
                <div className="award-org">{award.organization}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">Philosophy</h2>
          <p className="content-text">
            I believe that great design should be invisible – it should feel natural and intuitive. 
            Every pixel serves a purpose, every animation has meaning, and every interaction should 
            delight the user while serving the business goals.
          </p>
          <p className="content-text">
            My goal is to bridge the gap between design and development, creating experiences that 
            are not only beautiful but also performant, accessible, and maintainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
