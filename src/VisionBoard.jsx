import React, { useState } from 'react';
import './css/VisionBoard.css';
import { ReactComponent as VisionBoardHeadline } from './images/vision-board-headline.svg';

const VisionBoard = () => {
  const [imageErrors, setImageErrors] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories for the rectangle items
  const categories = [
    { id: 1, name: 'Travel', color: '#667eea' },
    { id: 2, name: 'Nature', color: '#f093fb' },
    { id: 3, name: 'Architecture', color: '#4facfe' },
    { id: 4, name: 'Food', color: '#43e97b' },
    { id: 5, name: 'People', color: '#FF6B6B' },
    { id: 6, name: 'Animals', color: '#4ECDC4' },
    { id: 7, name: 'Art', color: '#764ba2' },
    { id: 8, name: 'Technology', color: '#f5576c' },
    { id: 9, name: 'Sports', color: '#38f9d7' },
    { id: 10, name: 'Fashion', color: '#FFD700' },
    { id: 11, name: 'Music', color: '#FF69B4' }
  ];

  // Sample images with categories - you can replace these with your actual image URLs
  const images = [
    { id: 1, src: 'https://picsum.photos/200/300?random=1', alt: 'Vision 1', category: 'Travel' },
    { id: 2, src: 'https://picsum.photos/200/400?random=2', alt: 'Vision 2', category: 'Nature' },
    { id: 3, src: 'https://picsum.photos/200/250?random=3', alt: 'Vision 3', category: 'Architecture' },
    { id: 4, src: 'https://picsum.photos/200/350?random=4', alt: 'Vision 4', category: 'Food' },
    { id: 5, src: 'https://picsum.photos/200/280?random=5', alt: 'Vision 5', category: 'People' },
    { id: 6, src: 'https://picsum.photos/200/420?random=6', alt: 'Vision 6', category: 'Animals' },
    { id: 7, src: 'https://picsum.photos/200/320?random=7', alt: 'Vision 7', category: 'Art' },
    { id: 8, src: 'https://picsum.photos/200/260?random=8', alt: 'Vision 8', category: 'Technology' },
    { id: 9, src: 'https://picsum.photos/200/380?random=9', alt: 'Vision 9', category: 'Sports' },
    { id: 10, src: 'https://picsum.photos/200/300?random=10', alt: 'Vision 10', category: 'Fashion' },
    { id: 11, src: 'https://picsum.photos/200/340?random=11', alt: 'Vision 11', category: 'Music' },
    { id: 12, src: 'https://picsum.photos/200/290?random=12', alt: 'Vision 12', category: 'Travel' },
    { id: 13, src: 'https://picsum.photos/200/410?random=13', alt: 'Vision 13', category: 'Nature' },
    { id: 14, src: 'https://picsum.photos/200/270?random=14', alt: 'Vision 14', category: 'Architecture' },
    { id: 15, src: 'https://picsum.photos/200/360?random=15', alt: 'Vision 15', category: 'Food' },
    { id: 16, src: 'https://picsum.photos/200/230?random=16', alt: 'Vision 16', category: 'People' },
    { id: 17, src: 'https://picsum.photos/200/390?random=17', alt: 'Vision 17', category: 'Animals' },
    { id: 18, src: 'https://picsum.photos/200/310?random=18', alt: 'Vision 18', category: 'Art' },
    { id: 19, src: 'https://picsum.photos/200/250?random=19', alt: 'Vision 19', category: 'Technology' },
    { id: 20, src: 'https://picsum.photos/200/370?random=20', alt: 'Vision 20', category: 'Sports' },
    { id: 21, src: 'https://picsum.photos/200/290?random=21', alt: 'Vision 21', category: 'Fashion' },
    { id: 22, src: 'https://picsum.photos/200/330?random=22', alt: 'Vision 22', category: 'Music' },
    { id: 23, src: 'https://picsum.photos/200/280?random=23', alt: 'Vision 23', category: 'Travel' },
    { id: 24, src: 'https://picsum.photos/200/400?random=24', alt: 'Vision 24', category: 'Nature' },
    { id: 25, src: 'https://picsum.photos/200/260?random=25', alt: 'Vision 25', category: 'Architecture' },
    { id: 26, src: 'https://picsum.photos/200/340?random=26', alt: 'Vision 26', category: 'Food' },
    { id: 27, src: 'https://picsum.photos/200/320?random=27', alt: 'Vision 27', category: 'People' },
    { id: 28, src: 'https://picsum.photos/200/300?random=28', alt: 'Vision 28', category: 'Animals' },
    { id: 29, src: 'https://picsum.photos/200/380?random=29', alt: 'Vision 29', category: 'Art' },
    { id: 30, src: 'https://picsum.photos/200/250?random=30', alt: 'Vision 30', category: 'Technology' },
    { id: 31, src: 'https://picsum.photos/200/350?random=31', alt: 'Vision 31', category: 'Sports' },
    { id: 32, src: 'https://picsum.photos/200/290?random=32', alt: 'Vision 32', category: 'Fashion' },
    { id: 33, src: 'https://picsum.photos/200/270?random=33', alt: 'Vision 33', category: 'Music' },
    { id: 34, src: 'https://picsum.photos/200/410?random=34', alt: 'Vision 34', category: 'Travel' },
    { id: 35, src: 'https://picsum.photos/200/230?random=35', alt: 'Vision 35', category: 'Nature' },
    { id: 36, src: 'https://picsum.photos/200/360?random=36', alt: 'Vision 36', category: 'Architecture' },
    { id: 37, src: 'https://picsum.photos/200/320?random=37', alt: 'Vision 37', category: 'Food' },
    { id: 38, src: 'https://picsum.photos/200/280?random=38', alt: 'Vision 38', category: 'People' },
    { id: 39, src: 'https://picsum.photos/200/390?random=39', alt: 'Vision 39', category: 'Animals' },
    { id: 40, src: 'https://picsum.photos/200/310?random=40', alt: 'Vision 40', category: 'Art' },
    { id: 41, src: 'https://picsum.photos/200/240?random=41', alt: 'Vision 41', category: 'Technology' },
    { id: 42, src: 'https://picsum.photos/200/370?random=42', alt: 'Vision 42', category: 'Sports' },
    { id: 43, src: 'https://picsum.photos/200/300?random=43', alt: 'Vision 43', category: 'Fashion' },
    { id: 44, src: 'https://picsum.photos/200/330?random=44', alt: 'Vision 44', category: 'Music' },
    { id: 45, src: 'https://picsum.photos/200/260?random=45', alt: 'Vision 45', category: 'Travel' },
  ];

  const handleImageLoad = (imageId) => {
    // Image loaded successfully - could add additional logic here if needed
    console.log(`Image ${imageId} loaded successfully`);
  };

  const handleImageError = (imageId) => {
    console.warn(`Failed to load image ${imageId}`);
    setImageErrors(prev => new Set([...prev, imageId]));
  };

  const getImageSrc = (image) => {
    if (imageErrors.has(image.id)) {
      return `https://via.placeholder.com/200x300/ff69b4/ffffff?text=Vision+${image.id}`;
    }
    return image.src;
  };

  // Handle category filtering
  const handleCategoryClick = (categoryName) => {
    // Toggle the selected category - if same category is clicked, reset filter
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  // Check if image belongs to the currently selected category
  const isImageInSelectedCategory = (image) => {
    return !selectedCategory || image.category === selectedCategory;
  };

  return (
    <div className="vision-board">
      
      
      <div className="break-strawberry-container">
        <VisionBoardHeadline />
      </div>
      
      <div className="masonry-grid">
        {images.map((image) => {
          const isInSelectedCategory = selectedCategory && isImageInSelectedCategory(image);
          const isDimmed = selectedCategory && !isImageInSelectedCategory(image);
          
          return (
            <div 
              key={image.id} 
              className={`masonry-item ${isDimmed ? 'dimmed' : ''} ${isInSelectedCategory ? 'in-selected-category' : ''}`}
            >
              <img 
                src={getImageSrc(image)}
                alt={image.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
                onError={() => handleImageError(image.id)}
              />
              <div className="masonry-overlay">
                <span>
                  {image.alt}
                  {isInSelectedCategory && <><br/><strong>📍 {image.category}</strong></>}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      
      <div className="vision-board-header">
        <div className="rectangle-container">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`rectangle-item ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
              style={{ backgroundColor: category.color }}
            >
              <span>{category.name}</span>
              <div className="tooltip">{category.name} Images</div>
            </div>
          ))}
        </div>
        <h1>Vision Board</h1>
        <p>
          {selectedCategory 
            ? `Showing ${selectedCategory} images • Click the category again to show all`
            : 'A collection of inspirational images and goals • Click a category to filter'}
        </p>
      </div>
    </div>
  );
};

export default VisionBoard;