import React, { useState, useCallback } from 'react';
import './css/Moodboard.css';

const Moodboard = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Material categories
  const categories = [
    { id: 'all', name: 'All Materials', color: '#333' },
    { id: 'colors', name: 'Colors', color: '#EF5DA8' },
    { id: 'textures', name: 'Textures', color: '#667eea' },
    { id: 'materials', name: 'Materials', color: '#4ECDC4' },
    { id: 'patterns', name: 'Patterns', color: '#FFD700' },
    { id: 'finishes', name: 'Finishes', color: '#FF6B6B' }
  ];

  // Color filters
  const colorFilters = [
    { id: 'neutral', name: 'Neutral', color: '#F5F5F5' },
    { id: 'warm', name: 'Warm', color: '#D2691E' },
    { id: 'cool', name: 'Cool', color: '#4682B4' },
    { id: 'earth', name: 'Earth', color: '#8B4513' },
    { id: 'pastel', name: 'Pastel', color: '#E6E6FA' },
    { id: 'bold', name: 'Bold', color: '#DC143C' }
  ];

  // Sample materials data
  const materials = [
    // Colors
    { id: 1, name: 'Glossy White', code: 'WTL', category: 'colors', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/FFFFFF/CCCCCC?text=WTL', type: 'Glossy' },
    { id: 2, name: 'Matt White', code: 'WTM', category: 'colors', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/F8F8FF/CCCCCC?text=WTM', type: 'Matt' },
    { id: 3, name: 'Matt Off White', code: 'OWM', category: 'colors', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/FFF8DC/CCCCCC?text=OWM', type: 'Matt' },
    { id: 4, name: 'Glossy Cream', code: 'CRL', category: 'colors', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/FFFDD0/CCCCCC?text=CRL', type: 'Glossy' },
    { id: 5, name: 'Matt Beige', code: 'BGM', category: 'colors', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/F5F5DC/CCCCCC?text=BGM', type: 'Matt' },
    { id: 6, name: 'Matt Sand', code: 'SAM', category: 'colors', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/F4A460/CCCCCC?text=SAM', type: 'Matt' },
    { id: 7, name: 'Glossy Sahara', code: 'RHL', category: 'colors', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/CD853F/FFFFFF?text=RHL', type: 'Glossy' },
    { id: 8, name: 'Matt Cafe', code: 'CFM', category: 'colors', colorFilter: 'earth', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=CFM', type: 'Matt' },
    { id: 9, name: 'Glossy Grey', code: 'GYL', category: 'colors', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/808080/FFFFFF?text=GYL', type: 'Glossy' },
    { id: 10, name: 'Matt Slate', code: 'SLM', category: 'colors', colorFilter: 'cool', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=SLM', type: 'Matt' },
    { id: 11, name: 'Glossy Lagoon', code: 'LGL', category: 'colors', colorFilter: 'cool', image: 'https://via.placeholder.com/300x400/20B2AA/FFFFFF?text=LGL', type: 'Glossy' },
    { id: 12, name: 'Glossy Blue Pigeon', code: 'PBL', category: 'colors', colorFilter: 'cool', image: 'https://via.placeholder.com/300x400/6495ED/FFFFFF?text=PBL', type: 'Glossy' },
    
    // Textures
    { id: 13, name: 'Brushed Steel', code: 'BST', category: 'textures', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/C0C0C0/000000?text=BST', type: 'Metal' },
    { id: 14, name: 'Wood Grain', code: 'WGR', category: 'textures', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/DEB887/000000?text=WGR', type: 'Wood' },
    { id: 15, name: 'Leather Texture', code: 'LTX', category: 'textures', colorFilter: 'earth', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=LTX', type: 'Leather' },
    { id: 16, name: 'Fabric Weave', code: 'FBW', category: 'textures', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/F5F5F5/000000?text=FBW', type: 'Fabric' },
    
    // Materials
    { id: 17, name: 'Carrara Marble', code: 'CMR', category: 'materials', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/F8F8FF/CCCCCC?text=CMR', type: 'Stone' },
    { id: 18, name: 'Black Marble', code: 'BMR', category: 'materials', colorFilter: 'bold', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=BMR', type: 'Stone' },
    { id: 19, name: 'Brass Finish', code: 'BRS', category: 'materials', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/B8860B/000000?text=BRS', type: 'Metal' },
    { id: 20, name: 'Rose Gold', code: 'RGD', category: 'materials', colorFilter: 'warm', image: 'https://via.placeholder.com/300x400/E8B4B8/000000?text=RGD', type: 'Metal' },
    
    // Patterns
    { id: 21, name: 'Geometric Lines', code: 'GEO', category: 'patterns', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/F0F0F0/000000?text=GEO', type: 'Geometric' },
    { id: 22, name: 'Organic Flow', code: 'ORG', category: 'patterns', colorFilter: 'earth', image: 'https://via.placeholder.com/300x400/8FBC8F/FFFFFF?text=ORG', type: 'Organic' },
    { id: 23, name: 'Art Deco', code: 'ART', category: 'patterns', colorFilter: 'bold', image: 'https://via.placeholder.com/300x400/FFD700/000000?text=ART', type: 'Decorative' },
    { id: 24, name: 'Minimalist Grid', code: 'MIN', category: 'patterns', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/FFFFFF/CCCCCC?text=MIN', type: 'Grid' },
    
    // Finishes
    { id: 25, name: 'High Gloss', code: 'HGL', category: 'finishes', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/FFFFFF/CCCCCC?text=HGL', type: 'Gloss' },
    { id: 26, name: 'Satin Finish', code: 'SAT', category: 'finishes', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/F5F5F5/CCCCCC?text=SAT', type: 'Satin' },
    { id: 27, name: 'Textured Matt', code: 'TXM', category: 'finishes', colorFilter: 'neutral', image: 'https://via.placeholder.com/300x400/E5E5E5/CCCCCC?text=TXM', type: 'Matt' },
    { id: 28, name: 'Vintage Patina', code: 'VPT', category: 'finishes', colorFilter: 'earth', image: 'https://via.placeholder.com/300x400/8B7D6B/FFFFFF?text=VPT', type: 'Patina' }
  ];

  // Filter materials based on selected category and color filters
  const filteredMaterials = materials.filter(material => {
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    const matchesColorFilter = activeFilters.length === 0 || activeFilters.includes(material.colorFilter);
    return matchesCategory && matchesColorFilter;
  });

  // Handle material selection for moodboard
  const handleMaterialSelect = useCallback((material) => {
    setSelectedItems(prev => {
      const isSelected = prev.find(item => item.id === material.id);
      if (isSelected) {
        return prev.filter(item => item.id !== material.id);
      } else {
        if (prev.length < 12) { // Limit to 12 items
          return [...prev, material];
        }
        return prev;
      }
    });
  }, []);

  // Handle filter toggle
  const handleFilterToggle = useCallback((filterId) => {
    setActiveFilters(prev => {
      if (prev.includes(filterId)) {
        return prev.filter(id => id !== filterId);
      } else {
        return [...prev, filterId];
      }
    });
  }, []);

  // Clear moodboard
  const clearMoodboard = useCallback(() => {
    setSelectedItems([]);
  }, []);

  // Download moodboard (placeholder function)
  const downloadMoodboard = useCallback(() => {
    alert('Moodboard download functionality would be implemented here');
  }, []);

  return (
    <div className="moodboard">
      <div className="moodboard-header">
        <h1>Material Library</h1>
        <p>{filteredMaterials.length} materials available</p>
      </div>

      <div className="moodboard-content">
        {/* Sidebar with filters */}
        <aside className="moodboard-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{ borderColor: category.color }}
                >
                  <span className="category-dot" style={{ backgroundColor: category.color }}></span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Colors</h3>
            <div className="color-filters">
              {colorFilters.map(filter => (
                <button
                  key={filter.id}
                  className={`color-filter ${activeFilters.includes(filter.id) ? 'active' : ''}`}
                  onClick={() => handleFilterToggle(filter.id)}
                  style={{ backgroundColor: filter.color }}
                  title={filter.name}
                >
                  <span className="filter-name">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Moodboard Panel */}
          <div className="moodboard-panel">
            <div className="moodboard-header-section">
              <h3>Your Moodboard</h3>
              <span className="item-count">{selectedItems.length}/12</span>
            </div>
            
            <div className="selected-items">
              {selectedItems.length === 0 ? (
                <div className="empty-moodboard">
                  <p>Select materials to add to your moodboard</p>
                </div>
              ) : (
                <div className="moodboard-grid">
                  {selectedItems.map(item => (
                    <div key={item.id} className="moodboard-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <span className="item-code">{item.code}</span>
                        <button 
                          className="remove-btn"
                          onClick={() => handleMaterialSelect(item)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedItems.length > 0 && (
              <div className="moodboard-actions">
                <button className="action-btn download-btn" onClick={downloadMoodboard}>
                  Download
                </button>
                <button className="action-btn clear-btn" onClick={clearMoodboard}>
                  Clear All
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main content area */}
        <main className="materials-grid-container">
          <div className="materials-grid">
            {filteredMaterials.map(material => {
              const isSelected = selectedItems.find(item => item.id === material.id);
              return (
                <div 
                  key={material.id} 
                  className={`material-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleMaterialSelect(material)}
                >
                  <div className="material-image">
                    <img src={material.image} alt={material.name} loading="lazy" />
                    <div className="material-overlay">
                      <span className="add-to-board">
                        {isSelected ? 'Remove from Board' : 'Add to Board'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="material-info">
                    <div className="material-header">
                      <span className="material-code">{material.code}</span>
                      <span className="material-type">{material.type}</span>
                    </div>
                    <h4 className="material-name">{material.name}</h4>
                  </div>

                  {isSelected && (
                    <div className="selected-indicator">
                      <span>✓</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Moodboard;