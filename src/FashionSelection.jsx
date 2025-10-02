import React, { useState, useEffect } from 'react';
import './PortfolioSelection.css';
import ProjectPage from './ProjectPage';

// Import placeholder images (you can replace these with actual fashion project images)
import PlaceholderImage from './images/greengiant-hoveroverlay.png'; 

const FashionSelection = ({ onBackToHome }) => {
  // Comment out hover effects for now
  // const [hoveredProject, setHoveredProject] = useState(null); 
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Add class to body to override main styles
  useEffect(() => {
    document.body.classList.add('portfolio-active');
    
    return () => {
      document.body.classList.remove('portfolio-active');
    };
  }, []);

  // Comment out hover event handlers
  /*
  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  */

  // Comment out click handler to disable case studies
  /*
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  */

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePreviousProject = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setSelectedProject(projects[prevIndex]);
  };
    
  const projects = [
    {
      id: 1,
      title: "Hearst Fashion Hack",
      subtitle: "Fashion Suggestions Based on The Music You Listen To.",
      image: PlaceholderImage,
      images: {
        detail1: PlaceholderImage,
        detail2: PlaceholderImage,
        wide: PlaceholderImage,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: PlaceholderImage,
        final2: PlaceholderImage
      },
      category: "App Development",
      year: "2013",
      description: "Fashion recommendation app that suggests outfits based on your music listening habits and mood.",
      detailedDescription: "This innovative app combines music analysis with fashion trends to create personalized style recommendations. Users connect their Spotify account and receive curated outfit suggestions that match their musical taste and current listening mood.",
      technologies: ["React Native", "Spotify API", "Machine Learning", "Firebase"],
      client: "Hearst",
      timeline: "3 months",
      link: "#"
    },
    {
      id: 2,
      title: "Fearless Weirdos",
      subtitle: "eCommerce Website",
      image: PlaceholderImage,
      images: {
        detail1: PlaceholderImage,
        detail2: PlaceholderImage,
        wide: PlaceholderImage,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: PlaceholderImage,
        final2: PlaceholderImage
      },
      category: "Web Development, eCommerce",
      year: "2013",
      description: "Bold fashion brand eCommerce platform celebrating individuality and unique style.",
      detailedDescription: "A vibrant online store for unconventional fashion pieces. The site features bold graphics, interactive elements, and a seamless shopping experience that reflects the brand's fearless attitude.",
      technologies: ["Shopify", "JavaScript", "CSS3", "Photoshop"],
      client: "Fearless Weirdos",
      timeline: "4 months",
      link: "#"
    },
    {
      id: 3,
      title: "Howard University Bookstore",
      subtitle: "Print, Social, Online and eCommerce",
      image: PlaceholderImage,
      images: {
        detail1: PlaceholderImage,
        detail2: PlaceholderImage,
        wide: PlaceholderImage,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: PlaceholderImage,
        final2: PlaceholderImage
      },
      category: "Web Development, Graphic Design, Social Media",
      year: "2011",
      description: "Comprehensive brand refresh including online store, print materials, and social media presence.",
      detailedDescription: "Complete overhaul of Howard University Bookstore's digital and print presence. Created cohesive branding across all touchpoints while maintaining the university's prestigious image.",
      technologies: ["WordPress", "InDesign", "Photoshop", "Social Media Management"],
      client: "Howard University",
      timeline: "6 months",
      link: "#"
    },
    {
      id: 4,
      title: "Greater Washington Fashion Chamber of Commerce",
      subtitle: "Website, Content and Branding",
      image: PlaceholderImage,
      category: "Web Design, Branding",
      year: "2013",
      description: "Professional website and branding for the region's premier fashion organization.",
      detailedDescription: "Sophisticated web presence that connects fashion professionals and promotes industry events in the Greater Washington area.",
      technologies: ["WordPress", "Adobe Creative Suite", "Content Strategy"],
      client: "GW Fashion Chamber",
      timeline: "3 months"
    },
    {
      id: 5,
      title: "Chaos Magazine",
      subtitle: "WordPress Troubleshooting, Web Design and Web Development",
      image: PlaceholderImage,
      category: "Magazine, Web Development",
      year: "2011",
      description: "Fashion magazine website with custom WordPress development and technical optimization.",
      technologies: ["WordPress", "PHP", "MySQL"],
      client: "Chaos Magazine",
      timeline: "2 months"
    },
    {
      id: 6,
      title: "Daisy Llewellyn",
      subtitle: "Graphic Design, Print and Branding",
      image: PlaceholderImage,
      category: "Branding, Print Design",
      year: "2014",
      description: "Personal branding and print materials for television personality and fashion expert.",
      technologies: ["InDesign", "Photoshop", "Illustrator"],
      client: "Daisy Llewellyn",
      timeline: "4 months"
    },
    {
      id: 7,
      title: "From Dreams to Reality Event",
      subtitle: "Event Planning and Flyer Design",
      image: PlaceholderImage,
      category: "Event Design",
      year: "2011",
      description: "Fashion event featuring television reality show stars with comprehensive event branding.",
      technologies: ["Event Planning", "Graphic Design", "Marketing"],
      client: "Private Event",
      timeline: "2 months"
    },
    {
      id: 8,
      title: "Lord & Taylor Scholarship Recipient",
      subtitle: "Academic Award",
      image: PlaceholderImage,
      category: "Academic Achievement",
      year: "2010",
      description: "Prestigious scholarship award recognizing excellence in fashion and design studies.",
      technologies: ["Academic Excellence"],
      client: "Lord & Taylor",
      timeline: "Award"
    },
    {
      id: 9,
      title: "Fashion News Live",
      subtitle: "Digital Media Production",
      image: PlaceholderImage,
      category: "Digital Media",
      year: "2013",
      description: "Live streaming fashion news program with digital content creation.",
      technologies: ["Video Production", "Digital Media", "Content Creation"],
      client: "Fashion News Live",
      timeline: "Ongoing"
    },
    {
      id: 10,
      title: "American Eagle",
      subtitle: "Brand Collaboration",
      image: PlaceholderImage,
      category: "Fashion Retail",
      year: "2013",
      description: "Brand collaboration and styling work with American Eagle Outfitters.",
      technologies: ["Fashion Styling", "Brand Collaboration"],
      client: "American Eagle",
      timeline: "3 months"
    },
    {
      id: 11,
      title: "Atlanta Fashion Week",
      subtitle: "Fashion Show Production",
      image: PlaceholderImage,
      category: "Fashion Events",
      year: "2013",
      description: "Production and coordination for Atlanta Fashion Week runway shows and events.",
      technologies: ["Event Production", "Fashion Coordination"],
      client: "Atlanta Fashion Week",
      timeline: "1 week"
    },
    {
      id: 12,
      title: "Elementary School Newspaper Dress Volunteer Event",
      subtitle: "Community Outreach",
      image: PlaceholderImage,
      category: "Community Service",
      year: "2013",
      description: "Volunteer fashion education program for elementary school students.",
      technologies: ["Education", "Community Outreach"],
      client: "Local Elementary School",
      timeline: "1 day"
    },
    {
      id: 13,
      title: "Young, Fresh and New Featuring Bishme C.",
      subtitle: "Fashion Showcase",
      image: PlaceholderImage,
      category: "Fashion Show",
      year: "2013",
      description: "Fashion showcase featuring emerging designers and fresh talent in the industry.",
      technologies: ["Fashion Curation", "Event Production"],
      client: "Independent",
      timeline: "2 months"
    },
    {
      id: 14,
      title: "Getting a Job in Fashion 101 Panel",
      subtitle: "Educational Panel",
      image: PlaceholderImage,
      category: "Education",
      year: "2013",
      description: "Industry panel discussion providing career guidance for fashion industry aspirants.",
      technologies: ["Public Speaking", "Industry Education"],
      client: "Fashion Education Initiative",
      timeline: "1 day"
    },
    {
      id: 15,
      title: "Men in Fashion Panel",
      subtitle: "Industry Discussion",
      image: PlaceholderImage,
      category: "Panel Discussion",
      year: "2013",
      description: "Panel discussion focusing on men's roles and opportunities in the fashion industry.",
      technologies: ["Panel Moderation", "Industry Insights"],
      client: "Fashion Industry Forum",
      timeline: "1 day"
    },
    {
      id: 16,
      title: "Magazine Drive",
      subtitle: "Publication Initiative",
      image: PlaceholderImage,
      category: "Publishing",
      year: "2013",
      description: "Magazine publication drive promoting fashion literacy and industry awareness.",
      technologies: ["Publishing", "Content Distribution"],
      client: "Fashion Publications",
      timeline: "1 month"
    },
    {
      id: 17,
      title: "Kas Intern",
      subtitle: "Fashion Internship",
      image: PlaceholderImage,
      category: "Professional Development",
      year: "2013",
      description: "Fashion industry internship providing hands-on experience in design and production.",
      technologies: ["Fashion Design", "Industry Experience"],
      client: "Kas Fashion",
      timeline: "6 months"
    }
  ];           

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  // Show project page if a project is selected (currently disabled)
  if (selectedProject) {
    return (
      <ProjectPage
        project={selectedProject}
        onBack={handleBackToList}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
      />
    );
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="header-left">
          {onBackToHome && (
            <button 
              onClick={onBackToHome}
              className="back-to-home-btn"
              style={{
                background: 'none',
                border: '1px solid #333',
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ← Back to Home
            </button>
          )}
        </div>
        <div className="header-right">
          <p>Selected Fashion Work</p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="project-item"
            // Removed all hover and click interactions
          >
            <div className="project-number">
              {formatNumber(project.id)}
            </div>
            <div className="project-content">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
            </div>
            
            {/* Commented out cursor following image */}
            {/*
            <div 
              className="cursor-image"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                opacity: hoveredProject === project.id ? 1 : 0
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
              />
              <div className="image-overlay">
                <span>View Case Study</span>
              </div>
            </div>
            */}
          </div>
        ))}
      </div>

      <div className="portfolio-footer">
        <p>© 2024 Erica J. Hawkins</p>
        <div className="social-links">
          <a href="#dribbble" className="social-link" onClick={(e) => e.preventDefault()}>Dribbble</a>
          <a href="#behance" className="social-link" onClick={(e) => e.preventDefault()}>Behance</a>
          <a href="#twitter" className="social-link" onClick={(e) => e.preventDefault()}>Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default FashionSelection;