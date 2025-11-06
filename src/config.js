// API Configuration
// This file handles environment-specific configuration for development and production

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  // Backend API URL
  // In development: uses localhost
  // In production: uses environment variable or defaults to empty string (update after deploying backend)
  API_BASE_URL: isDevelopment 
    ? 'http://localhost:5000' 
    : 'https://crypto-comet.onrender.com',
};

export default config;

