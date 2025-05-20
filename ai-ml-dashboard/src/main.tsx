import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Check if user prefers dark mode or has a dark mode setting saved
const initializeDarkMode = () => {
  // Check if the user has a dark mode preference in localStorage
  const savedDarkMode = localStorage.getItem('darkMode');

  if (savedDarkMode === 'true') {
    document.documentElement.classList.add('dark');
  } else if (savedDarkMode === null) {
    // If no preference is set, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }
};

// Initialize dark mode before rendering
initializeDarkMode();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
