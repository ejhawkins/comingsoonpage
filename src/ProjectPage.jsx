import React, { useEffect, useState } from 'react';
import './ProjectPage.css';

const ProjectPage = ({ project, onBack, onNext, onPrevious }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add class to body for project page styles
    document.body.classList.add('project-page-active');
    setIsVisible(true);

    // Handle scroll progress
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.classList.remove('project-page-active');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!project) return null;

  return (
    <div className={`project-page ${isVisible ? 'animate-in' : ''}`}>
      {/* Progress Bar */}
      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="project-nav">
        <button className="nav-btn back-btn" onClick={onBack}>
          <span>←</span>
          <span>Back to Work</span>
        </button>
        <div className="nav-controls">
          {onPrevious && (
            <button className="nav-btn prev-btn" onClick={onPrevious}>
              Previous
            </button>
          )}
          {onNext && (
            <button className="nav-btn next-btn" onClick={onNext}>
              Next Project
            </button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="project-title">{project.title}</h1>
            <h2 className="project-subtitle">{project.subtitle}</h2>
            <div className="project-tags">
              <span className="tag primary">{project.category}</span>
              <span className="tag secondary">{project.year}</span>
            </div>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                Visit {project.title}.com
              </a>
            )}
          </div>
          <div className="hero-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <section className="project-section description-section">
        <div className="section-content">
          <div className="text-block">
            <p className="lead-text">{project.description}</p>
            <p className="detail-text">
              {project.detailedDescription || 
                "This project challenged us to create a unique digital experience that balances creative innovation with functional excellence. Through careful attention to user experience and cutting-edge technology, we delivered a solution that exceeds expectations."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-section details-section">
        <div className="section-content">
          <div className="details-grid">
            <div className="detail-column">
              <h3>Services</h3>
              <ul>
                <li>Quality Assurance Testing</li>
                <li>Content</li>
                <li>Web Design</li>
                <li>User Experience</li>
                <li>Frontend Development</li>
              </ul>
            </div>
            <div className="detail-column">
              <h3>Technologies</h3>
              <ul>
                {project.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                )) || (
                  <>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </>
                )}
              </ul>
            </div>
            <div className="detail-column">
              <h3>Timeline</h3>
              <p>{project.timeline || "3 months"}</p>
              
              <h3>Client</h3>
              <p>{project.client || "Private Client"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="project-section gallery-section">
        <div className="section-content">
          <div className="image-gallery">
            <div className="gallery-item large">
              <img src={project.image} alt={`${project.title} - Main view`} />
            </div>
            <div className="gallery-row">
              <div className="gallery-item">
                <img src={project.images?.detail1 || project.image} alt={`${project.title} - Detail 1`} />
              </div>
              <div className="gallery-item">
                <img src={project.images?.detail2 || project.image} alt={`${project.title} - Detail 2`} />
              </div>
            </div>
            <div className="gallery-item wide">
              <img src={project.images?.wide || "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop"} alt={`${project.title} - Wide view`} />
            </div>
            <div className="gallery-row">
              <div className="gallery-item">
                <img src={project.images?.mobile1 || "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"} alt={`${project.title} - Mobile 1`} />
              </div>
              <div className="gallery-item">
                <img src={project.images?.mobile2 || "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop"} alt={`${project.title} - Mobile 2`} />
              </div>
              <div className="gallery-item">
                <img src={project.images?.mobile3 || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=600&fit=crop"} alt={`${project.title} - Mobile 3`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="project-section process-section">
        <div className="section-content">
          <h2>Design Process</h2>
          <div className="process-text">
            <p>
              The website is built using a unique stack of technologies to enable custom animations 
              and transitions between the pages. This project was both challenging and fun as we were 
              aiming at creating a unique digital experience that is also focused on maximizing 
              e-commerce efficiency and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Final Images */}
      <section className="project-section final-section">
        <div className="section-content">
          <div className="final-gallery">
            <div className="final-image">
              <img src={project.images?.final1 || "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=800&fit=crop"} alt={`${project.title} - Final 1`} />
            </div>
            <div className="final-image">
              <img src={project.images?.final2 || "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800&fit=crop"} alt={`${project.title} - Final 2`} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="project-footer">
        <div className="footer-content">
          <button className="footer-back-btn" onClick={onBack}>
            Back to All Projects
          </button>
          {onNext && (
            <div className="next-project">
              <span className="next-label">Next</span>
              <button className="next-project-btn" onClick={onNext}>
                {onNext.title || "Next Project"}
              </button>
            </div>
          )}
        </div>
        
        <div className="social-links">
          <a href="#dribbble" className="social-link">Dribbble</a>
          <a href="#behance" className="social-link">Behance</a>
          <a href="#twitter" className="social-link">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;
