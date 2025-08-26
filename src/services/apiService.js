// API service for backend communication
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

export const apiService = {
  // Base API call function
  async apiCall(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, { ...defaultOptions, ...options });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  // Health check
  async healthCheck() {
    return this.apiCall('/health');
  },

  // Get backend status
  async getStatus() {
    return this.apiCall('/api/status');
  },

  // Test endpoint
  async testConnection() {
    return this.apiCall('/api/test');
  },

  // Bamboo integration (if needed)
  async getBambooStatus() {
    return this.apiCall('/api/bamboo/status');
  },

  // Trigger build
  async triggerBuild(planKey, branch = 'main') {
    return this.apiCall('/api/bamboo/trigger-build', {
      method: 'POST',
      body: JSON.stringify({ planKey, branch }),
    });
  }
};

export default apiService;
