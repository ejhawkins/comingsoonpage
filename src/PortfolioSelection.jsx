import React, { useState, useEffect } from 'react';
import './PortfolioSelection.css';
import ProjectPage from './ProjectPage';
import GreenGiantOverlay from './images/greengiant-hoveroverlay.png'; 
import GreenGiantDetail1 from './images/detail-1.jpg';
import GreenGiantDetail2 from './images/detail-3.jpg';
import GreenGiantWideView from './images/wide-view.png';
import GreenGiantFinalProductLocator from './images/green-giant-product-locator-final.png';
import GreenGiantFinalContactForm from './images/green-giant-contact-form.png';
import MapleGroveOverlay from './images/MapleGroveOverlay.png';
import MapleGroveDetail1 from './images/MapleGroveDetail1.png';
import MapleGroveDetail2 from './images/MapleGroveDetail2.png';
import MapleGroveWideView from './images/MapleGroveWideView.png';
import MapleGroveContactUs from './images/MapleGroveContactUs.png';
import AdvantusHPMainOverlay from './images/AdvantusHPMainOverlay.png';
import AdvantusHPDetail1 from './images/AdvantusHPDetail1.png';
import AdvantusHPDetail2 from './images/AdvantusHPDetail2.png';
import AdvantusHPWideView from './images/AdvantusHPWideView.png';
import JamandJelly from "./images/jamandjelly.png";
import Flats from "./images/flats.png";
import NAT from "./images/nat.png";
import SwayMagazine from "./images/sway.png";
import SocialAwarenessPoster from "./images/poster.png";
import CoverArt from "./images/coverart.png";
import BodoniKing from "./images/print.png";
import LineArts from "./images/lineart.png";
import BookCover from "./images/book.png";
import Poster from "./images/poster.jpg";
import ArtManipulation from "./images/photoshop.png";


const PortfolioSelection = ({ onBackToHome }) => {
  const [hoveredProject, setHoveredProject] = useState(null); 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Add class to body to override main styles
  useEffect(() => {
    document.body.classList.add('portfolio-active');
    
    return () => {
      document.body.classList.remove('portfolio-active');
    };
  }, []);

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

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
      title: "Green Giant",
      subtitle: "Web Development, Content & Web Page Quality Assurance Testing",
      image: GreenGiantOverlay, // Main image
      images: {
        detail1: GreenGiantDetail1,
        detail2: GreenGiantDetail2,
        wide: GreenGiantWideView,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: MapleGroveContactUs, 
        final2: GreenGiantFinalProductLocator
      },
      category: "Web Development",
      year: "2022",
      description: "Revamping a Website with more than 200 recipes and 50 plus ongoing products, content and PHP framework versioning, Green Giant is a comprehensive resource for healthy eating. Build to handle heavy traffic and provide a seamless user experience. Heavily testesd for quality with a variety of different test for different templates and content.",
      detailedDescription: "The key feature of the website is the content, we did a web audit and an editorial content review to address users' evolving needs. Rebuilt the site to reflect these changes for PHP and the brands new changes. Plus what focused on the user experience and performance, ensuring that the site is not only visually appealing but also functional and easy to navigate. Most importantly products are easy to find and recipes are easy to follow, making it a go-to resource for healthy eating.",
      technologies: ["Wordpress", "PHP", "Flywheel", "Elementor", "Asana", "BrowserStack", "Google Workspace: Docs, Sheets, Drive","JIRA"],
      client: "Green Giant",
      timeline: "4 months",
      link: "https://greengiant.com"
    },
    {
      id: 2,
      title: "Maple Grove Maple Syrup",
      subtitle: "eCommerce Website",
      image: MapleGroveOverlay, 
      images: {
        detail1: MapleGroveDetail1,
        detail2: MapleGroveDetail2,
        wide: MapleGroveWideView,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: GreenGiantFinalContactForm,
        final2: GreenGiantFinalProductLocator
      },
      category: "Web Development, eCommerce, Web Quality Assurance Testing",
      year: "2022",
      description: "Modern portfolio website with interactive elements and smooth animations for a digital artist.",
      detailedDescription: "This website was a masterpiece in design and functionality. Every element was meticulously positioned to align with the visions laid out in the Figma prototypes, ensuring a seamless visual experience. I also implemented a comprehensive test suite for this assignment, which included cross-training our Creative QA team. This collaborative effort was essential to guarantee we delivered exactly what the client envisioned, leaving no room for error. The attention to detail and dedication to the project truly reflected our commitment to excellencThis project focused on creating a unique digital presence that showcases artistic work while maintaining excellent user experience and performance.",
      technologies: ["Wordpress", "PHP", "Elementor", "Sketch","Google Workspace: Docs, Sheets, Drive", "BrowserStack","Asana"],
      client: "B&G Foods",
      timeline: "3 months",
      link: "https://maplegrovemaplesyrup.com"
    },
    {
      id: 3,
      title: "Advantus Health Partners",
      subtitle: "Healthcare Website",
      image: AdvantusHPMainOverlay, 
      images: {
        detail1: AdvantusHPDetail1,
        detail2: AdvantusHPDetail2,
        wide: AdvantusHPWideView,
        mobile1: "./images/mobile-1.jpg",
        mobile2: "./images/mobile-2.jpg",
        mobile3: "./images/mobile-3.jpg",
        final1: GreenGiantFinalContactForm,
        final2: GreenGiantFinalProductLocator
      },
      category: "Web Development, Quality Assurance",
      year: "2022",
      description: "Complete event branding package including logo, merchandise, and digital assets for a design conference.",
      detailedDescription: "Advantus features numerous dynamic components, including various overlaying graphics that contribute to the site's distinctive character. Additionally, there are access points within the backend that necessitated conducting login tests. A variety of backgrounds and content elements are required to be integrated into the site. Site was done so well got invitation to do Conduit’s site as well.",
      technologies: ["Wordpress", "PHP", "Flywheel", "Elementor", "Google Workspace: Google Docs and Google Sheets","BrowserStack","Asana"],
      client: "Advantus Health Partners",
      timeline: "3 months",
      link: "https://advantushealthpartners.com"

      
    },
    {
      id: 4,
      title: "Jam & Jelly",
      subtitle: "Logo & Business Cards",
      image: JamandJelly,
      category: "Creative",
      year: "2023",
      description: "Creative direction and visual identity for an innovative photographer and visual artist.",
      detailedDescription: "This project challenged us to create a visual language that represents artistic vision while maintaining commercial appeal.",
      technologies: ["Photoshop", "Lightroom", "Figma"],
      client: "Max Shkret",
      timeline: "2 months"
    },
    {
      id: 5,
      title: "Flats Brochure",
      subtitle: "Layout Design",
      image: Flats,
      category: "Brochure",
      year: "2013",
      description: "Comprehensive design system and editorial toolkit for creative professionals.",
      technologies: ["Figma", "Sketch", "Adobe XD"],
      client: "Adobe",
      timeline: "6 months"
    },
    {
      id: 6,
      title: "National Art Gallery Newsletter",
      subtitle: "Newsletter",
      image: NAT,
      category: "Layout",
      year: "2013",
      description: "Revolutionary healthcare application focused on personalized medicine and patient care.",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      client: "Cure Health",
      timeline: "8 months"
    },
    {
      id: 7,
      title: "Sway Magazine",
      subtitle: "Editorial",
      image: SwayMagazine,
      category: "Magazine Design",
      year: "2013",
      description: "Advanced mobile editing application with AI-powered features.",
      technologies: ["Swift", "Kotlin", "TensorFlow"],
      client: "Aeditor Inc",
      timeline: "5 months"
    },
    {
      id: 8,
      title: "Social Awareness Poster",
      subtitle: "Social Awareness Campaign",
      image: SocialAwarenessPoster,
      category: "Poster",
      year: "2013",
      description: "Complete personal branding and digital presence for a renowned photographer.",
      technologies: ["WordPress", "PHP", "JavaScript"],
      client: "Rafal Bojar",
      timeline: "3 months"
    },
    {
      id: 9,
      title: "Superchick Battle Remix Cover",
      subtitle: "Cover Art",
      image: CoverArt,
      category: "Album Art",
      year: "2013",
      description: "Revolutionary beauty e-commerce platform with AR try-on features.",
      technologies: ["React", "Redux", "AR.js"],
      client: "IL Makiage",
      timeline: "7 months"
    },
    {
      id: 10,
      title: "Bodoni Typeface Specimen",
      subtitle: "Specimen Design",
      image: BodoniKing,
      category: "Typography",
      year: "2013",
      description: "Natural beauty brand strategy and visual identity development.",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      client: "Honey Pot Co",
      timeline: "4 months"
    },
    {
      id: 11,
      title: "Line Art Fashion Illustration",
      subtitle: "Vector Illustration",
      image: LineArts,
      category: "Illustration",
      year: "2013",
      description: "Comprehensive design system and component library for modern applications.",
      technologies: ["Adobe XD", "Figma", "React"],
      client: "Adobe",
      timeline: "5 months"
    },
    {
      id: 12,
      title: "Vampire Diaries Book Cover",
      subtitle: "Book Illustration",
      image: BookCover,
      category: "Book Cover",
      year: "2013",
      description: "Japanese-inspired beauty brand with focus on minimalism and natural ingredients.",
      technologies: ["Figma", "Photoshop", "Web Design"],
      client: "Uruoi Beauty",
      timeline: "6 months"
    },
      {
      id: 13,
      title: "Sex in the City Movie Poster",
      subtitle: "Poster Design",
      image: Poster,
      category: "Vector Illustration",
      year: "2023",
      description: "Japanese-inspired beauty brand with focus on minimalism and natural ingredients.",
      technologies: ["Figma", "Photoshop", "Web Design"],
      client: "Uruoi Beauty",
      timeline: "6 months"
    }, {
      id: 14,
      title: "Art Photo Manipulation",
      subtitle: "Photoshop",
      image: ArtManipulation,
      category: "Art",
      year: "2013",
      description: "Japanese-inspired beauty brand with focus on minimalism and natural ingredients.",
      technologies: ["Figma", "Photoshop", "Web Design"],
      client: "Uruoi Beauty",
      timeline: "6 months"
    }
  ];           

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  // Show project page if a project is selected
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
          <p>Selected Work</p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`project-item ${hoveredProject === project.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            // onClick={() => handleProjectClick(project)} // Disabled to prevent case study access
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
            
            {/* Cursor Following Image */}
          
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

export default PortfolioSelection;
